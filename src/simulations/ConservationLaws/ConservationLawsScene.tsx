import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { Vector3 } from 'three';

interface ConservationLawsSceneProps {
  simulationType: 'collision' | 'pendulum' | 'rotation';
  isPlaying: boolean;
  resetTrigger: number;
  
  // Collision parameters
  mass1: number;
  mass2: number;
  velocity1: number;
  velocity2: number;
  elasticity: number;
  
  // Pendulum parameters
  pendulumLength: number;
  pendulumMass: number;
  initialAngle: number;
  
  // Rotation parameters
  rotationMass: number;
  rotationRadius: number;
  rotationSpeed: number;
  
  onDataUpdate: (data: {
    time: number;
    kineticEnergy: number;
    potentialEnergy: number;
    totalEnergy: number;
    linearMomentum: Vector3;
    angularMomentum: Vector3;
  }) => void;
}

export const ConservationLawsScene: React.FC<ConservationLawsSceneProps> = ({
  simulationType,
  isPlaying,
  resetTrigger,
  mass1,
  mass2,
  velocity1,
  velocity2,
  elasticity,
  pendulumLength,
  pendulumMass,
  initialAngle,
  rotationMass,
  rotationRadius,
  rotationSpeed,
  onDataUpdate
}) => {
  // Refs for Three.js objects
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const controlsRef = useRef<OrbitControls>();
  const animationFrameRef = useRef<number>();
  const isAnimatingRef = useRef<boolean>(false);
  const timeRef = useRef<number>(0);
  
  // Physics state refs
  const collisionRef = useRef({
    sphere1: null as THREE.Mesh | null,
    sphere2: null as THREE.Mesh | null,
    position1: new Vector3(-5, 0, 0),
    position2: new Vector3(5, 0, 0),
    velocity1: new Vector3(velocity1, 0, 0),
    velocity2: new Vector3(velocity2, 0, 0),
    hasCollided: false
  });
  
  const pendulumRef = useRef({
    bob: null as THREE.Mesh | null,
    rod: null as THREE.Line | null,
    pivot: null as THREE.Mesh | null,
    angle: (initialAngle * Math.PI) / 180,
    angularVelocity: 0,
    position: new Vector3()
  });
  
  const rotationRef = useRef({
    disk: null as THREE.Mesh | null,
    axis: null as THREE.Mesh | null,
    angle: 0,
    angularVelocity: rotationSpeed,
  });
  
  // Physics data
  const physicsDataRef = useRef({
    time: 0,
    kineticEnergy: 0,
    potentialEnergy: 0,
    totalEnergy: 0,
    linearMomentum: new Vector3(),
    angularMomentum: new Vector3()
  });
  
  // Setup simulation objects based on type
  const setupSimulationObjects = () => {
    if (!sceneRef.current) return;
    
    // Clear previous objects
    clearSimulationObjects();
    
    // Setup based on simulation type
    if (simulationType === 'collision') {
      setupCollisionObjects();
    } else if (simulationType === 'pendulum') {
      setupPendulumObjects();
    } else if (simulationType === 'rotation') {
      setupRotationObjects();
    }
  };
  
  // Clear simulation objects
  const clearSimulationObjects = () => {
    if (!sceneRef.current) return;
    
    // Remove collision objects
    if (collisionRef.current.sphere1) {
      sceneRef.current.remove(collisionRef.current.sphere1);
      collisionRef.current.sphere1 = null;
    }
    
    if (collisionRef.current.sphere2) {
      sceneRef.current.remove(collisionRef.current.sphere2);
      collisionRef.current.sphere2 = null;
    }
    
    // Remove pendulum objects
    if (pendulumRef.current.bob) {
      sceneRef.current.remove(pendulumRef.current.bob);
      pendulumRef.current.bob = null;
    }
    
    if (pendulumRef.current.rod) {
      sceneRef.current.remove(pendulumRef.current.rod);
      pendulumRef.current.rod = null;
    }
    
    if (pendulumRef.current.pivot) {
      sceneRef.current.remove(pendulumRef.current.pivot);
      pendulumRef.current.pivot = null;
    }
    
    // Remove rotation objects
    if (rotationRef.current.disk) {
      sceneRef.current.remove(rotationRef.current.disk);
      rotationRef.current.disk = null;
    }
    
    if (rotationRef.current.axis) {
      sceneRef.current.remove(rotationRef.current.axis);
      rotationRef.current.axis = null;
    }
  };
  
  // Setup collision objects
  const setupCollisionObjects = () => {
    if (!sceneRef.current) return;
    
    // Create sphere 1
    const radius1 = Math.pow(mass1, 1/3) * 0.5;
    const sphere1Geometry = new THREE.SphereGeometry(radius1, 32, 32);
    const sphere1Material = new THREE.MeshStandardMaterial({ color: 0x2196f3 });
    const sphere1 = new THREE.Mesh(sphere1Geometry, sphere1Material);
    sphere1.position.copy(collisionRef.current.position1);
    sphere1.castShadow = true;
    sphere1.receiveShadow = true;
    sceneRef.current.add(sphere1);
    collisionRef.current.sphere1 = sphere1;
    
    // Create sphere 2
    const radius2 = Math.pow(mass2, 1/3) * 0.5;
    const sphere2Geometry = new THREE.SphereGeometry(radius2, 32, 32);
    const sphere2Material = new THREE.MeshStandardMaterial({ color: 0xff5722 });
    const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
    sphere2.position.copy(collisionRef.current.position2);
    sphere2.castShadow = true;
    sphere2.receiveShadow = true;
    sceneRef.current.add(sphere2);
    collisionRef.current.sphere2 = sphere2;
    
    // Create floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xeeeeee,
      side: THREE.DoubleSide 
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -1;
    floor.receiveShadow = true;
    sceneRef.current.add(floor);
  };
  
  // Setup pendulum objects
  const setupPendulumObjects = () => {
    if (!sceneRef.current) return;
    
    // Create pivot
    const pivotGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const pivotMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const pivot = new THREE.Mesh(pivotGeometry, pivotMaterial);
    pivot.position.set(0, 5, 0);
    sceneRef.current.add(pivot);
    pendulumRef.current.pivot = pivot;
    
    // Calculate initial bob position
    const angle = pendulumRef.current.angle;
    const bobX = pendulumLength * Math.sin(angle);
    const bobY = 5 - pendulumLength * Math.cos(angle);
    
    // Create bob
    const bobRadius = Math.pow(pendulumMass, 1/3) * 0.5;
    const bobGeometry = new THREE.SphereGeometry(bobRadius, 32, 32);
    const bobMaterial = new THREE.MeshStandardMaterial({ color: 0x4caf50 });
    const bob = new THREE.Mesh(bobGeometry, bobMaterial);
    bob.position.set(bobX, bobY, 0);
    bob.castShadow = true;
    sceneRef.current.add(bob);
    pendulumRef.current.bob = bob;
    pendulumRef.current.position = new Vector3(bobX, bobY, 0);
    
    // Create rod
    const points = [
      new Vector3(0, 5, 0),
      new Vector3(bobX, bobY, 0)
    ];
    const rodGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const rodMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
    const rod = new THREE.Line(rodGeometry, rodMaterial);
    sceneRef.current.add(rod);
    pendulumRef.current.rod = rod;
    
    // Create floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xeeeeee,
      side: THREE.DoubleSide 
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -1;
    floor.receiveShadow = true;
    sceneRef.current.add(floor);
  };
  
  // Setup rotation objects
  const setupRotationObjects = () => {
    if (!sceneRef.current) return;
    
    // Create axis
    const axisGeometry = new THREE.CylinderGeometry(0.1, 0.1, 10, 16);
    const axisMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const axis = new THREE.Mesh(axisGeometry, axisMaterial);
    axis.position.set(0, 0, 0);
    sceneRef.current.add(axis);
    rotationRef.current.axis = axis;
    
    // Create disk
    const diskGeometry = new THREE.CylinderGeometry(rotationRadius, rotationRadius, 0.2, 32);
    const diskMaterial = new THREE.MeshStandardMaterial({ color: 0xff9800 });
    const disk = new THREE.Mesh(diskGeometry, diskMaterial);
    disk.rotation.x = Math.PI / 2;
    disk.castShadow = true;
    sceneRef.current.add(disk);
    rotationRef.current.disk = disk;
    
    // Add a small sphere to visualize the rotation
    const sphereGeometry = new THREE.SphereGeometry(Math.pow(rotationMass, 1/3) * 0.3, 16, 16);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xe91e63 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(rotationRadius, 0, 0);
    disk.add(sphere);
    
    // Create floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xeeeeee,
      side: THREE.DoubleSide 
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -5;
    floor.receiveShadow = true;
    sceneRef.current.add(floor);
  };
  
  // Reset physics state
  const resetPhysicsState = () => {
    timeRef.current = 0;
    
    // Reset collision state
    collisionRef.current.position1 = new Vector3(-5, 0, 0);
    collisionRef.current.position2 = new Vector3(5, 0, 0);
    collisionRef.current.velocity1 = new Vector3(velocity1, 0, 0);
    collisionRef.current.velocity2 = new Vector3(velocity2, 0, 0);
    collisionRef.current.hasCollided = false;
    
    // Reset pendulum state
    pendulumRef.current.angle = (initialAngle * Math.PI) / 180;
    pendulumRef.current.angularVelocity = 0;
    
    // Reset rotation state
    rotationRef.current.angle = 0;
    rotationRef.current.angularVelocity = rotationSpeed;
    
    // Reset physics data
    physicsDataRef.current = {
      time: 0,
      kineticEnergy: 0,
      potentialEnergy: 0,
      totalEnergy: 0,
      linearMomentum: new Vector3(),
      angularMomentum: new Vector3()
    };
    
    // Update objects positions
    updateObjectPositions();
    
    // Calculate initial physics values
    calculatePhysicsData();
  };
  
  // Update objects positions based on physics state
  const updateObjectPositions = () => {
    if (simulationType === 'collision') {
      if (collisionRef.current.sphere1 && collisionRef.current.sphere2) {
        collisionRef.current.sphere1.position.copy(collisionRef.current.position1);
        collisionRef.current.sphere2.position.copy(collisionRef.current.position2);
      }
    } else if (simulationType === 'pendulum') {
      if (pendulumRef.current.bob && pendulumRef.current.rod) {
        const angle = pendulumRef.current.angle;
        const bobX = pendulumLength * Math.sin(angle);
        const bobY = 5 - pendulumLength * Math.cos(angle);
        
        pendulumRef.current.bob.position.set(bobX, bobY, 0);
        pendulumRef.current.position = new Vector3(bobX, bobY, 0);
        
        // Update rod
        const points = [
          new Vector3(0, 5, 0),
          new Vector3(bobX, bobY, 0)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        pendulumRef.current.rod.geometry.dispose();
        pendulumRef.current.rod.geometry = geometry;
      }
    } else if (simulationType === 'rotation') {
      if (rotationRef.current.disk) {
        rotationRef.current.disk.rotation.y = rotationRef.current.angle;
      }
    }
  };
  
  // Calculate physics data based on current state
  const calculatePhysicsData = () => {
    if (simulationType === 'collision') {
      calculateCollisionPhysics();
    } else if (simulationType === 'pendulum') {
      calculatePendulumPhysics();
    } else if (simulationType === 'rotation') {
      calculateRotationPhysics();
    }
    
    // Update UI with physics data
    onDataUpdate(physicsDataRef.current);
  };
  
  // Calculate collision physics
  const calculateCollisionPhysics = () => {
    // Calculate linear momentum
    const p1 = new Vector3().copy(collisionRef.current.velocity1).multiplyScalar(mass1);
    const p2 = new Vector3().copy(collisionRef.current.velocity2).multiplyScalar(mass2);
    const totalMomentum = new Vector3().add(p1).add(p2);
    
    // Calculate kinetic energy
    const ke1 = 0.5 * mass1 * collisionRef.current.velocity1.lengthSq();
    const ke2 = 0.5 * mass2 * collisionRef.current.velocity2.lengthSq();
    const totalKE = ke1 + ke2;
    
    // No potential energy in this simulation
    const totalPE = 0;
    
    // Update physics data
    physicsDataRef.current = {
      time: timeRef.current,
      kineticEnergy: totalKE,
      potentialEnergy: totalPE,
      totalEnergy: totalKE + totalPE,
      linearMomentum: totalMomentum,
      angularMomentum: new Vector3() // No angular momentum in this simulation
    };
  };
  
  // Calculate pendulum physics
  const calculatePendulumPhysics = () => {
    const g = 9.81; // Gravity constant
    
    // Calculate potential energy (relative to lowest point)
    const height = pendulumLength * (1 - Math.cos(pendulumRef.current.angle));
    const potentialEnergy = mass1 * g * height;
    
    // Calculate kinetic energy
    const velocity = pendulumLength * Math.abs(pendulumRef.current.angularVelocity);
    const kineticEnergy = 0.5 * pendulumMass * velocity * velocity;
    
    // Calculate angular momentum (around pivot point)
    const angularMomentum = pendulumMass * pendulumLength * pendulumLength * pendulumRef.current.angularVelocity;
    const angularMomentumVector = new Vector3(0, 0, angularMomentum);
    
    // Linear momentum is tangential to the pendulum motion
    const linearMomentumMagnitude = pendulumMass * velocity;
    const angle = pendulumRef.current.angle;
    const linearMomentum = new Vector3(
      linearMomentumMagnitude * Math.cos(angle + Math.PI/2),
      linearMomentumMagnitude * Math.sin(angle + Math.PI/2),
      0
    );
    
    // Update physics data
    physicsDataRef.current = {
      time: timeRef.current,
      kineticEnergy: kineticEnergy,
      potentialEnergy: potentialEnergy,
      totalEnergy: kineticEnergy + potentialEnergy,
      linearMomentum: linearMomentum,
      angularMomentum: angularMomentumVector
    };
  };
  
  // Calculate rotation physics
  const calculateRotationPhysics = () => {
    // Calculate moment of inertia (I = mr²)
    const momentOfInertia = rotationMass * rotationRadius * rotationRadius;
    
    // Calculate kinetic energy (rotational) (KE = 0.5 * I * ω²)
    const kineticEnergy = 0.5 * momentOfInertia * rotationRef.current.angularVelocity * rotationRef.current.angularVelocity;
    
    // Calculate angular momentum (L = I * ω)
    const angularMomentum = momentOfInertia * rotationRef.current.angularVelocity;
    const angularMomentumVector = new Vector3(0, angularMomentum, 0);
    
    // Calculate linear momentum (tangential)
    const velocity = rotationRadius * rotationRef.current.angularVelocity;
    const linearMomentumMagnitude = rotationMass * velocity;
    const angle = rotationRef.current.angle;
    const linearMomentum = new Vector3(
      linearMomentumMagnitude * Math.cos(angle + Math.PI/2),
      0,
      linearMomentumMagnitude * Math.sin(angle + Math.PI/2)
    );
    
    // Update physics data
    physicsDataRef.current = {
      time: timeRef.current,
      kineticEnergy: kineticEnergy,
      potentialEnergy: 0, // No potential energy in this simulation
      totalEnergy: kineticEnergy,
      linearMomentum: linearMomentum,
      angularMomentum: angularMomentumVector
    };
  };
  
  // Animation function
  const animate = () => {
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Update controls
    if (controlsRef.current) {
      controlsRef.current.update();
    }
    
    // Update physics if playing
    if (isAnimatingRef.current) {
      const deltaTime = 1/60; // Fixed time step (60 FPS)
      timeRef.current += deltaTime;
      
      // Update physics based on simulation type
      if (simulationType === 'collision') {
        updateCollisionPhysics(deltaTime);
      } else if (simulationType === 'pendulum') {
        updatePendulumPhysics(deltaTime);
      } else if (simulationType === 'rotation') {
        updateRotationPhysics(deltaTime);
      }
      
      // Update object positions
      updateObjectPositions();
      
      // Calculate physics data
      calculatePhysicsData();
    }
    
    // Render scene
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };
  
  // Update collision physics
  const updateCollisionPhysics = (deltaTime: number) => {
    // Update positions based on velocities
    collisionRef.current.position1.add(
      new Vector3().copy(collisionRef.current.velocity1).multiplyScalar(deltaTime)
    );
    
    collisionRef.current.position2.add(
      new Vector3().copy(collisionRef.current.velocity2).multiplyScalar(deltaTime)
    );
    
    // Check for collision
    const distance = collisionRef.current.position1.distanceTo(collisionRef.current.position2);
    const radius1 = Math.pow(mass1, 1/3) * 0.5;
    const radius2 = Math.pow(mass2, 1/3) * 0.5;
    
    // If collision detected and hasn't already collided
    if (distance < radius1 + radius2 && !collisionRef.current.hasCollided) {
      collisionRef.current.hasCollided = true;
      
      // Calculate new velocities using conservation of momentum and energy
      const v1 = collisionRef.current.velocity1.clone();
      const v2 = collisionRef.current.velocity2.clone();
      const m1 = mass1;
      const m2 = mass2;
      
      // For 1D collision along x-axis
      const v1Final = v1.clone().multiplyScalar((m1 - elasticity * m2) / (m1 + m2))
                      .add(v2.clone().multiplyScalar((1 + elasticity) * m2 / (m1 + m2)));
      
      const v2Final = v1.clone().multiplyScalar((1 + elasticity) * m1 / (m1 + m2))
                      .add(v2.clone().multiplyScalar((m2 - elasticity * m1) / (m1 + m2)));
      
      collisionRef.current.velocity1.copy(v1Final);
      collisionRef.current.velocity2.copy(v2Final);
    }
    
    // Reset collision flag if objects move apart
    if (distance > radius1 + radius2 && collisionRef.current.hasCollided) {
      collisionRef.current.hasCollided = false;
    }
    
    // Boundary check - reverse direction if hitting walls
    if (collisionRef.current.position1.x < -10 || collisionRef.current.position1.x > 10) {
      collisionRef.current.velocity1.x *= -1;
      collisionRef.current.position1.x = Math.max(-10, Math.min(10, collisionRef.current.position1.x));
    }
    
    if (collisionRef.current.position2.x < -10 || collisionRef.current.position2.x > 10) {
      collisionRef.current.velocity2.x *= -1;
      collisionRef.current.position2.x = Math.max(-10, Math.min(10, collisionRef.current.position2.x));
    }
  };
  
  // Update pendulum physics
  const updatePendulumPhysics = (deltaTime: number) => {
    const g = 9.81; // Gravity constant
    
    // Calculate angular acceleration: α = -g/L * sin(θ)
    const angularAcceleration = -g / pendulumLength * Math.sin(pendulumRef.current.angle);
    
    // Update angular velocity: ω = ω + α * dt
    pendulumRef.current.angularVelocity += angularAcceleration * deltaTime;
    
    // Add damping (air resistance)
    pendulumRef.current.angularVelocity *= 0.998;
    
    // Update angle: θ = θ + ω * dt
    pendulumRef.current.angle += pendulumRef.current.angularVelocity * deltaTime;
  };
  
  // Update rotation physics
  const updateRotationPhysics = (deltaTime: number) => {
    // Update angle based on angular velocity
    rotationRef.current.angle += rotationRef.current.angularVelocity * deltaTime;
    
    // Keep angle within 0-2π range
    if (rotationRef.current.angle > Math.PI * 2) {
      rotationRef.current.angle -= Math.PI * 2;
    }
  };
  
  // Handle play/pause
  useEffect(() => {
    isAnimatingRef.current = isPlaying;
  }, [isPlaying]);
  
  // Handle reset
  useEffect(() => {
    resetPhysicsState();
  }, [resetTrigger]);
  
  // Handle parameter changes
  useEffect(() => {
    if (simulationType === 'collision') {
      // Update collision parameters
      collisionRef.current.velocity1.set(velocity1, 0, 0);
      collisionRef.current.velocity2.set(velocity2, 0, 0);
      
      // Update sphere sizes
      if (collisionRef.current.sphere1 && collisionRef.current.sphere2) {
        const radius1 = Math.pow(mass1, 1/3) * 0.5;
        const radius2 = Math.pow(mass2, 1/3) * 0.5;
        
        collisionRef.current.sphere1.geometry.dispose();
        collisionRef.current.sphere1.geometry = new THREE.SphereGeometry(radius1, 32, 32);
        
        collisionRef.current.sphere2.geometry.dispose();
        collisionRef.current.sphere2.geometry = new THREE.SphereGeometry(radius2, 32, 32);
      }
    } else if (simulationType === 'pendulum') {
      // Update pendulum parameters
      pendulumRef.current.angle = (initialAngle * Math.PI) / 180;
      
      // Update bob size
      if (pendulumRef.current.bob) {
        const bobRadius = Math.pow(pendulumMass, 1/3) * 0.5;
        pendulumRef.current.bob.geometry.dispose();
        pendulumRef.current.bob.geometry = new THREE.SphereGeometry(bobRadius, 32, 32);
      }
      
      // Update positions
      updateObjectPositions();
    } else if (simulationType === 'rotation') {
      // Update rotation parameters
      rotationRef.current.angularVelocity = rotationSpeed;
      
      // Update disk size
      if (rotationRef.current.disk) {
        rotationRef.current.disk.geometry.dispose();
        rotationRef.current.disk.geometry = new THREE.CylinderGeometry(rotationRadius, rotationRadius, 0.2, 32);
        
        // Update any child objects (the small sphere)
        if (rotationRef.current.disk.children.length > 0) {
          const sphere = rotationRef.current.disk.children[0] as THREE.Mesh;
          sphere.position.set(rotationRadius, 0, 0);
          
          const sphereRadius = Math.pow(rotationMass, 1/3) * 0.3;
          sphere.geometry.dispose();
          sphere.geometry = new THREE.SphereGeometry(sphereRadius, 16, 16);
        }
      }
    }
    
    // Recalculate physics data
    calculatePhysicsData();
  }, [mass1, mass2, velocity1, velocity2, elasticity, pendulumLength, pendulumMass, initialAngle, rotationMass, rotationRadius, rotationSpeed]);
  
  
  
  // Clean up function
  const cleanupScene = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    if (rendererRef.current) {
      rendererRef.current.dispose();
      rendererRef.current.forceContextLoss();
      if (rendererRef.current.domElement.parentNode) {
        rendererRef.current.domElement.remove();
      }
      rendererRef.current = undefined;
    }
    
    if (sceneRef.current) {
      sceneRef.current.clear();
      sceneRef.current = undefined;
    }
    
    if (controlsRef.current) {
      controlsRef.current.dispose();
      controlsRef.current = undefined;
    }
  };
  
  // Initialize scene
  useEffect(() => {
    if (!mountRef.current) {
      console.error('Mount ref is not available');
      return;
    }
    
    // Clean up previous scene
    cleanupScene();
    
    // Create new scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf0f0f0);
    
    // Get container dimensions
    const containerRect = mountRef.current.getBoundingClientRect();
    let containerWidth = containerRect.width || 800;
    let containerHeight = containerRect.height || 500;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      containerWidth / containerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerWidth, containerHeight, true);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Handle color space
    if ('outputColorSpace' in renderer) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    } else if ('outputEncoding' in renderer) {
      // @ts-ignore - Handle older Three.js versions
      renderer.outputEncoding = THREE.sRGBEncoding;
    }
    
    // Add renderer to DOM
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    // Add grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x888888, 0xcccccc);
    scene.add(gridHelper);
    
    // Add axes
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    
    // Setup simulation objects based on type
    setupSimulationObjects();
    
    // Reset physics state
    resetPhysicsState();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      const width = rect.width || 800;
      const height = rect.height || 500;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height, true);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cleanupScene();
    };
  }, [simulationType]); // Re-initialize when simulation type changes
  
  // Return a div that will contain the Three.js canvas
  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '500px' 
      }} 
    />
  );
};
