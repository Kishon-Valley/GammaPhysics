import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { Vector3 } from 'three';

// Utility function to calculate ramp normal vector
const calculateRampNormal = (angle: number): Vector3 => {
  const angleRad = (angle * Math.PI) / 180;
  return new Vector3(-Math.sin(angleRad), Math.cos(angleRad), 0);
};

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

interface SceneProps {
  mass: number;
  gravity: number;
  friction: number;
  rampAngle: number;
  initialVelocity: Vector3;
  isPlaying: boolean;
  onDataUpdate: (data: {
    position: Vector3;
    velocity: Vector3;
    acceleration: Vector3;
    kineticEnergy: number;
    potentialEnergy: number;
    totalEnergy: number;
  }) => void;
}

export const EnhancedNewtonianScene = ({
  mass,
  gravity,
  friction,
  rampAngle,
  initialVelocity,
  isPlaying,
  onDataUpdate,
}: SceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const objectRef = useRef<PhysicsObject>();
  const rampRef = useRef<THREE.Mesh>();
  const controlsRef = useRef<OrbitControls>();

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const initPhysicsObject = () => {
      const geometry = new THREE.SphereGeometry(0.5);
      const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      
      const obj: PhysicsObject = {
        mass,
        position: new Vector3(0, 2, 0),
        velocity: initialVelocity.clone(),
        acceleration: new Vector3(0, -gravity, 0),
        forces: [],
        mesh,
        forceArrows: [],
      };
      
      mesh.position.copy(obj.position);
      scene.add(mesh);
      
      return obj;
    };

    objectRef.current = initPhysicsObject();
    updateRamp(rampAngle);

    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Reset effect
  useEffect(() => {
    if (!isPlaying && objectRef.current && sceneRef.current) {
      // Clear force arrows
      objectRef.current.forceArrows.forEach(arrow => {
        sceneRef.current?.remove(arrow);
      });
      objectRef.current.forceArrows = [];

      // Reset object state
      objectRef.current.position = new Vector3(0, 2, 0);
      objectRef.current.velocity = initialVelocity.clone();
      objectRef.current.acceleration = new Vector3(0, -gravity, 0);
      objectRef.current.forces = [];
      objectRef.current.mesh.position.copy(objectRef.current.position);

      // Render the reset state
      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      // Update UI with initial state
      onDataUpdate({
        position: objectRef.current.position.clone(),
        velocity: objectRef.current.velocity.clone(),
        acceleration: objectRef.current.acceleration.clone(),
        kineticEnergy: 0.5 * mass * objectRef.current.velocity.lengthSq(),
        potentialEnergy: mass * gravity * objectRef.current.position.y,
        totalEnergy: 0.5 * mass * objectRef.current.velocity.lengthSq() + mass * gravity * objectRef.current.position.y
      });
    }
  }, [isPlaying]);

  // Animation loop effect
  useEffect(() => {
    let frameId: number;
    
    const animate = () => {
      if (!sceneRef.current || !rendererRef.current || !cameraRef.current || !objectRef.current) return;

      if (isPlaying) {
        updatePhysics(objectRef.current);
      }

      // Always update controls and render
      controlsRef.current?.update();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isPlaying, gravity, mass, friction, rampAngle]); // Re-create animation loop when physics parameters change

  const updatePhysics = (obj: PhysicsObject) => {
    if (!obj || !sceneRef.current) return;

    const dt = 0.016; // 60 FPS

    // Clear previous forces
    obj.forces = [];
    obj.forceArrows.forEach(arrow => {
      if (sceneRef.current) {
        sceneRef.current.remove(arrow);
      }
    });
    obj.forceArrows = [];

    // Apply gravity force
    const gravityForce = new Vector3(0, -gravity * obj.mass, 0);
    obj.forces.push({
      force: gravityForce,
      type: 'gravity',
      color: 0xff0000
    });

    // Calculate normal force using ramp normal
    const rampNormal = calculateRampNormal(rampAngle);
    const normalMagnitude = -gravityForce.dot(rampNormal);
    const normalForce = rampNormal.clone().multiplyScalar(normalMagnitude);
    obj.forces.push({
      force: normalForce,
      type: 'normal',
      color: 0x00ff00
    });

    // Calculate friction force
    const frictionForce = calculateFrictionForce(obj.velocity, normalMagnitude);
    obj.forces.push({
      force: frictionForce,
      type: 'friction',
      color: 0x0000ff
    });

    // Calculate net force and acceleration
    const netForce = obj.forces.reduce(
      (sum, force) => sum.add(force.force),
      new Vector3()
    );
    obj.acceleration = netForce.divideScalar(obj.mass);

    // Update velocity and position using velocity verlet integration
    const oldVelocity = obj.velocity.clone();
    obj.velocity.add(obj.acceleration.multiplyScalar(dt));
    obj.position.add(oldVelocity.multiplyScalar(dt)).add(obj.acceleration.multiplyScalar(0.5 * dt * dt));

    // Check for ground collision (y = 0)
    if (obj.position.y < 0.5) { // 0.5 is the radius of the sphere
      obj.position.y = 0.5;
      obj.velocity.y = 0;
      obj.acceleration.y = 0;
    }

    // Update mesh position
    obj.mesh.position.copy(obj.position);

    // Draw force arrows
    obj.forces.forEach(force => {
      const arrow = createForceArrow(obj.position, force.force, force.color);
      if (arrow) {
        obj.forceArrows.push(arrow);
        sceneRef.current?.add(arrow);
      }
    });

    // Update UI with new physics state
    onDataUpdate({
      position: obj.position.clone(),
      velocity: obj.velocity.clone(),
      acceleration: obj.acceleration.clone(),
      kineticEnergy: 0.5 * mass * obj.velocity.lengthSq(),
      potentialEnergy: mass * gravity * (obj.position.y - 0.5), // Subtract radius to get height from ground
      totalEnergy: 0.5 * mass * obj.velocity.lengthSq() + mass * gravity * (obj.position.y - 0.5)
    });
  };

  const createForceArrow = (origin: Vector3, dir: Vector3, color: number) => {
    const arrow = new THREE.ArrowHelper(
      dir.clone().normalize(),
      origin,
      dir.length() * 0.5,
      color,
      0.2,
      0.1
    );
    if (sceneRef.current) {
      sceneRef.current.add(arrow);
    }
    return arrow;
  };

  const updateRamp = (angle: number) => {
    if (sceneRef.current && rampRef.current) {
      sceneRef.current.remove(rampRef.current);
    }

    const rampGeometry = new THREE.PlaneGeometry(10, 10);
    const rampMaterial = new THREE.MeshPhongMaterial({
      color: 0xcccccc,
      side: THREE.DoubleSide
    });
    const ramp = new THREE.Mesh(rampGeometry, rampMaterial);
    ramp.rotation.x = -Math.PI / 2;
    ramp.rotation.z = (angle * Math.PI) / 180;
    ramp.position.y = 0;
    ramp.receiveShadow = true;

    if (sceneRef.current) {
      sceneRef.current.add(ramp);
    }
    rampRef.current = ramp;
  };

  const calculateFrictionForce = (velocity: Vector3, normalMagnitude: number) => {
    return velocity
      .clone()
      .normalize()
      .multiplyScalar(-friction * normalMagnitude);
  };

  useEffect(() => {
    if (objectRef.current) {
      objectRef.current.mass = mass;
    }
  }, [mass]);

  useEffect(() => {
    updateRamp(rampAngle);
  }, [rampAngle]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};
