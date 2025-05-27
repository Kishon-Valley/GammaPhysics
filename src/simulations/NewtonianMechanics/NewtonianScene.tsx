import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { Vector3 } from 'three';
import { extend } from '@react-three/fiber';

extend({ OrbitControls: OrbitControlsImpl });

interface PhysicsObject {
  mass: number;
  position: Vector3;
  velocity: Vector3;
  acceleration: Vector3;
  forces: {
    force: Vector3;
    type: 'gravity' | 'normal' | 'friction' | 'applied';
    color: number;
  }[];
  mesh: THREE.Mesh;
  forceArrows: THREE.ArrowHelper[];
}

interface NewtonianSceneProps {
  width: number;
  height: number;
  parameters: {
    mass: number;
    initialVelocity: Vector3;
    gravity: number;
    friction: number;
  };
  onDataUpdate?: (data: {
    position: Vector3;
    velocity: Vector3;
    acceleration: Vector3;
    kineticEnergy: number;
    potentialEnergy: number;
    forces: {
      type: string;
      magnitude: number;
      direction: Vector3;
    }[];
  }) => void;
}

export const NewtonianScene = ({ width, height, parameters, onDataUpdate }: NewtonianSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const objectRef = useRef<PhysicsObject>();
  const [isPaused, setIsPaused] = useState(true);  // Start paused
  const animationFrameRef = useRef<number>();      // Store animation frame ID

  // Initialize or reset physics object
  const initPhysicsObject = () => {
    if (sceneRef.current && objectRef.current?.mesh) {
      sceneRef.current.remove(objectRef.current.mesh);
      objectRef.current.forceArrows.forEach(arrow => {
        sceneRef.current?.remove(arrow);
      });
    }

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0xffa500 });
    const mesh = new THREE.Mesh(geometry, material);
    
    if (sceneRef.current) {
      sceneRef.current.add(mesh);
    }

    objectRef.current = {
      mass: parameters.mass,
      position: new Vector3(0, 5, 0),
      velocity: parameters.initialVelocity.clone(),
      acceleration: new Vector3(),
      forces: [],
      mesh,
      forceArrows: []
    };
  };

  // Physics simulation function
  const updatePhysics = () => {
    if (!objectRef.current || isPaused) return;

    const dt = 0.016; // 60 FPS
    const obj = objectRef.current;

    // Clear previous forces and arrows
    obj.forces = [];
    obj.forceArrows.forEach(arrow => {
      if (sceneRef.current) {
        sceneRef.current.remove(arrow);
      }
    });
    obj.forceArrows = [];

    // Add gravity
    const gravityForce = new Vector3(0, -parameters.gravity * obj.mass, 0);
    obj.forces.push({
      force: gravityForce,
      type: 'gravity',
      color: 0xff0000
    });

    // Add friction (simple air resistance)
    if (obj.velocity.length() > 0) {
      const frictionForce = obj.velocity.clone()
        .normalize()
        .multiplyScalar(-parameters.friction * obj.velocity.length() ** 2);
      obj.forces.push({
        force: frictionForce,
        type: 'friction',
        color: 0x0000ff
      });
    }

    // Add normal force when touching ground
    if (obj.position.y <= 0.5) {
      const normalForce = new Vector3(0, parameters.gravity * obj.mass, 0);
      obj.forces.push({
        force: normalForce,
        type: 'normal',
        color: 0x00ff00
      });
    }

    // Calculate net force and acceleration
    const netForce = obj.forces.reduce((sum, force) => sum.add(force.force), new Vector3());
    obj.acceleration = netForce.divideScalar(obj.mass);

    // Update velocity and position (Verlet integration for better accuracy)
    const oldVelocity = obj.velocity.clone();
    obj.velocity.add(obj.acceleration.multiplyScalar(dt));
    obj.position.add(oldVelocity.add(obj.velocity).multiplyScalar(dt * 0.5));

    // Ground collision with energy loss
    if (obj.position.y < 0.5) {
      obj.position.y = 0.5;
      obj.velocity.y = Math.abs(obj.velocity.y) * -0.8;
    }

    // Update mesh position
    obj.mesh.position.copy(obj.position);

    // Create force arrows
    obj.forces.forEach(force => {
      const arrow = createForceArrow(obj.position, force.force, force.color);
      obj.forceArrows.push(arrow);
    });

    // Update data for dashboard
    if (onDataUpdate) {
      onDataUpdate({
        position: obj.position.clone(),
        velocity: obj.velocity.clone(),
        acceleration: obj.acceleration.clone(),
        kineticEnergy: 0.5 * obj.mass * obj.velocity.lengthSq(),
        potentialEnergy: obj.mass * parameters.gravity * obj.position.y,
        forces: obj.forces.map(f => ({
          type: f.type,
          magnitude: f.force.length(),
          direction: f.force.clone().normalize()
        }))
      });
    }
  };

  const createForceArrow = (origin: Vector3, dir: Vector3, color: number) => {
    const arrow = new THREE.ArrowHelper(
      dir.clone().normalize(),
      origin,
      dir.length() * 2,
      color,
      0.2,
      0.1
    );
    if (sceneRef.current) {
      sceneRef.current.add(arrow);
    }
    return arrow;
  };

  // Animation loop
  const animate = () => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    updatePhysics();
    if (controlsRef.current) {
      controlsRef.current.update();
    }
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Initialize scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    mountRef.current.innerHTML = ''; // Clear any existing content
    mountRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControlsImpl(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controlsRef.current = controls;

    // Grid helper
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Initialize physics object
    initPhysicsObject();

    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xcccccc,
      side: THREE.DoubleSide 
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);

    // Add axis labels
    const addAxisLabel = (text: string, position: Vector3) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'black';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 32, 32);
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.scale.set(0.5, 0.5, 1);
        scene.add(sprite);
      }
    };

    addAxisLabel('X', new Vector3(5.5, 0, 0));
    addAxisLabel('Y', new Vector3(0, 5.5, 0));
    addAxisLabel('Z', new Vector3(0, 0, 5.5));

    // Start animation only if not paused
    if (!isPaused) {
      animate();
    }

    // Cleanup
    return () => {
      if (rendererRef.current) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        rendererRef.current.dispose();
        mountRef.current?.removeChild(rendererRef.current.domElement);
      }
    };
  }, [width, height, parameters, isPaused]); // Add all parameters and isPaused to dependencies

  // Handle play/pause
  const toggleSimulation = () => {
    setIsPaused(prev => {
      if (prev) {
        // If we're unpausing, reset the object and start animation
        initPhysicsObject();
        requestAnimationFrame(function animate() {
          if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
          updatePhysics();
          if (controlsRef.current) {
            controlsRef.current.update();
          }
          rendererRef.current.render(sceneRef.current, cameraRef.current);
          if (!isPaused) {
            animationFrameRef.current = requestAnimationFrame(animate);
          }
        });
      } else {
        // If we're pausing, cancel the animation frame
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      }
      return !prev;
    });
  };

  return (
    <div ref={mountRef} style={{ width, height }}>
      <button
        onClick={toggleSimulation}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          padding: '8px 16px',
          backgroundColor: isPaused ? '#4CAF50' : '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isPaused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
};
