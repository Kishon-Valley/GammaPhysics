import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { Vector3 } from 'three';

interface FreeFallSceneProps {
  initialHeight: number;
  initialVelocity: number;
  gravity: number;
  mass: number;
  airResistance: boolean;
  dragCoefficient: number;
  isPlaying: boolean;
  onDataUpdate: (data: {
    position: Vector3;
    velocity: Vector3;
    acceleration: Vector3;
    time: number;
    kineticEnergy: number;
    potentialEnergy: number;
    totalEnergy: number;
  }) => void;
}

export const FreeFallScene = ({
  initialHeight,
  initialVelocity,
  gravity,
  mass,
  airResistance,
  dragCoefficient,
  isPlaying,
  onDataUpdate,
}: FreeFallSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sphereRef = useRef<THREE.Mesh>();
  const timeRef = useRef<number>(0);
  const vectorsRef = useRef<{
    velocity: THREE.ArrowHelper;
    gravityArrow: THREE.ArrowHelper;
    drag: THREE.ArrowHelper;
  }>();
  const animationFrameRef = useRef<number>();
  const isAnimatingRef = useRef<boolean>(false);

  // Physics state
  const physicsRef = useRef({
    position: new Vector3(0, initialHeight, 0),
    velocity: new Vector3(0, initialVelocity, 0),
    acceleration: new Vector3(0, 0, 0), // Start with zero acceleration
    stopped: false,
    time: 0
  });

  // Reset physics state when props change
  useEffect(() => {
    if (physicsRef.current) {
      physicsRef.current.position.set(0, initialHeight, 0);
      physicsRef.current.velocity.set(0, initialVelocity, 0);
      physicsRef.current.acceleration.set(0, 0, 0);
      physicsRef.current.stopped = false;
      physicsRef.current.time = 0;
    }
  }, [initialHeight, initialVelocity, gravity, mass]);


  useEffect(() => {
    if (!mountRef.current) {
      console.error('Mount ref is not available');
      return;
    }

    console.log('Initializing FreeFallScene with dimensions:', {
      width: mountRef.current.clientWidth,
      height: mountRef.current.clientHeight
    });

    // Clean up previous scene if it exists
    if (rendererRef.current) {
      console.log('Cleaning up previous renderer');
      rendererRef.current.dispose();
      rendererRef.current.forceContextLoss();
      rendererRef.current.domElement.remove();
      rendererRef.current = undefined;
    }
    if (sceneRef.current) {
      console.log('Cleaning up previous scene');
      sceneRef.current.clear();
      sceneRef.current = undefined;
    }

    // Scene setup
    console.log('Creating new scene');
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf0f0f0);
    
    // Center the scene in the container
    scene.position.set(0, 0, 0);

    // Get accurate container dimensions for camera
    const containerRect = mountRef.current.getBoundingClientRect();
    
    // Check if dimensions are valid (greater than minimum threshold)
    let containerWidth = containerRect.width;
    let containerHeight = containerRect.height;
    
    // If dimensions are too small or zero, use fallback values
    if (!containerWidth || containerWidth < 10) {
      console.warn('Container width is too small:', containerWidth, 'using fallback width');
      containerWidth = 800;
    }
    
    if (!containerHeight || containerHeight < 10) {
      console.warn('Container height is too small:', containerHeight, 'using fallback height');
      containerHeight = 500;
    }
    
    console.log('Container dimensions:', { containerWidth, containerHeight });
    
    // Camera setup with proper aspect ratio
    const camera = new THREE.PerspectiveCamera(
      60, // Field of view (slightly narrower for better focus)
      containerWidth / containerHeight,
      0.1,
      1000
    );
    
    // Position camera to view the scene from the front at a good distance
    const cameraDistance = 20;
    camera.position.set(0, initialHeight / 2, cameraDistance);
    camera.lookAt(0, initialHeight / 2, 0);
    cameraRef.current = camera;

    // Clear the container first
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    
    // Update container dimensions after clearing
    const updatedContainerRect = mountRef.current.getBoundingClientRect();
    
    // Check if dimensions are valid (greater than minimum threshold)
    let updatedWidth = updatedContainerRect.width;
    let updatedHeight = updatedContainerRect.height;
    
    // If dimensions are too small or zero, use fallback values
    if (!updatedWidth || updatedWidth < 10) {
      console.warn('Updated container width is too small:', updatedWidth, 'using fallback width');
      updatedWidth = 800;
    }
    
    if (!updatedHeight || updatedHeight < 10) {
      console.warn('Updated container height is too small:', updatedHeight, 'using fallback height');
      updatedHeight = 500;
    }
    
    console.log(`Container dimensions after clearing: ${updatedWidth}x${updatedHeight}`);
    
    // Try-catch block to handle potential WebGL initialization errors
    try {
      // Renderer setup with proper configuration
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance'
      });
      
      // Verify renderer was created successfully
      if (!renderer) {
        throw new Error('WebGL renderer initialization failed');
      }
      
      // Store reference to renderer
      rendererRef.current = renderer;
      
      // Log successful renderer creation
      console.log('WebGL renderer created successfully');
    
      // Set renderer properties
      renderer.setSize(updatedWidth, updatedHeight, true);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setClearColor(0xf0f0f0, 1);
      
      // Handle outputColorSpace/outputEncoding compatibility
      // Check if outputColorSpace is available (newer Three.js)
      if ('outputColorSpace' in renderer) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
      } 
      // Fall back to outputEncoding for older Three.js versions
      else if ('outputEncoding' in renderer) {
        // @ts-ignore - Handle older Three.js versions
        renderer.outputEncoding = THREE.sRGBEncoding;
      }
    
      // Configure renderer element styles
      const rendererElement = renderer.domElement;
      rendererElement.style.width = '100%';
      rendererElement.style.height = '100%';
      rendererElement.style.display = 'block';
      rendererElement.style.position = 'absolute';
      rendererElement.style.top = '0';
      rendererElement.style.left = '0';
      
      // Add the renderer to the container
      mountRef.current.appendChild(rendererElement);
      
      // Log successful renderer mounting
      console.log('Renderer mounted to DOM');
    } catch (error) {
      // Handle WebGL initialization errors
      console.error('WebGL initialization failed:', error);
      
      if (mountRef.current) {
        // Create error message for user
        const errorMessage = document.createElement('div');
        errorMessage.style.color = 'red';
        errorMessage.style.padding = '20px';
        errorMessage.style.backgroundColor = '#f0f0f0';
        errorMessage.style.border = '1px solid #ccc';
        errorMessage.style.borderRadius = '4px';
        errorMessage.style.margin = '20px';
        errorMessage.textContent = 'Unable to initialize 3D scene. Your browser may not support WebGL or hardware acceleration may be disabled.';
        
        // Clear container and add error message
        while (mountRef.current.firstChild) {
          mountRef.current.removeChild(mountRef.current.firstChild);
        }
        mountRef.current.appendChild(errorMessage);
      }
      
      return;
    }

    // Controls - make sure renderer is available
    if (!rendererRef.current) {
      console.error('Renderer not available for controls setup');
      return;
    }
    
    const controls = new OrbitControls(camera, rendererRef.current.domElement);
    controls.enableDamping = true;
    controls.enablePan = false; // Disable panning to prevent moving the view out of center
    controls.minDistance = 5;
    controls.maxDistance = 50;
    controls.target.set(0, initialHeight / 2, 0);
    controls.update();
    
    // Reset camera and controls to ensure proper centering
    camera.position.set(0, initialHeight / 2, 20);
    camera.lookAt(0, initialHeight / 2, 0);
    controls.update();

    // Grid helper - centered at origin
    const gridHelper = new THREE.GridHelper(20, 20);
    scene.add(gridHelper);

    // Axis helper
    const axisHelper = new THREE.AxesHelper(5);
    scene.add(axisHelper);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshPhongMaterial({
      color: 0xcccccc,
      side: THREE.DoubleSide,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create falling sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.y = initialHeight;
    sphere.castShadow = true;
    scene.add(sphere);
    sphereRef.current = sphere;

    // Create vectors for forces and velocity
    const createVectors = () => {
      // Velocity vector (green)
      const velocityArrow = new THREE.ArrowHelper(
        new Vector3(0, 1, 0),
        new Vector3(0, initialHeight, 0),
        2,
        0x00ff00,
        0.2,
        0.1
      );
      scene.add(velocityArrow);

      // Gravity vector (red)
      const gravityArrow = new THREE.ArrowHelper(
        new Vector3(0, -1, 0),
        new Vector3(0, initialHeight, 0),
        2,
        0xff0000,
        0.2,
        0.1
      );
      scene.add(gravityArrow);

      // Drag vector (blue)
      const dragArrow = new THREE.ArrowHelper(
        new Vector3(0, 1, 0),
        new Vector3(0, initialHeight, 0),
        0,
        0x0000ff,
        0.2,
        0.1
      );
      scene.add(dragArrow);

      vectorsRef.current = {
        velocity: velocityArrow,
        gravityArrow,
        drag: dragArrow,
      };
    };
    createVectors();

    // Add air particles for visualization
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlesPositions[i] = (Math.random() - 0.5) * 10;
      particlesPositions[i + 1] = Math.random() * 20;
      particlesPositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlesPositions, 3)
    );
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Height markers and grid lines
    for (let h = 0; h <= initialHeight; h += 1) {
      // Horizontal grid line
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-0.5, h, 0),
        new THREE.Vector3(0.5, h, 0),
      ]);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0x888888 });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);

      // Height marker text
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${h}m`, 0, 16);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(1, h, 0);
        sprite.scale.set(2, 1, 1);
        scene.add(sprite);
      }
    }

    // Animation function with improved timing and physics
    const animate = () => {
      // Use fixed time step for consistent physics
      const dt = 0.016; // 60 FPS time step
      const physics = physicsRef.current;
      
      // Check if all required references exist
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) {
        console.warn('Scene, camera or renderer not initialized, retrying...');
        // Continue animation loop but log the issue
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Log first successful animation frame
      if (!isAnimatingRef.current) {
        console.log('Animation loop started successfully');
        isAnimatingRef.current = true;
      }

      // Debug log for animation frame
      if (physics.time % 1 < 0.02) { // Only log once per second to avoid console spam
        console.log('Animation frame, isPlaying:', isPlaying, 'stopped:', physics.stopped, 'position:', physics.position.y.toFixed(2));
      }
      
      // Update physics state based on isPlaying
      if (isPlaying) {
        physics.stopped = false;
      }

      if (isPlaying && !physics.stopped) {
        // Increment time
        physics.time += dt;

        // Calculate forces and update physics
        const gravityForce = new Vector3(0, -gravity, 0);
        
        // Calculate drag force if air resistance is enabled
        let dragForce = new Vector3(0, 0, 0);
        if (airResistance && physics.velocity.lengthSq() > 0) {
          dragForce = physics.velocity.clone()
            .normalize()
            .multiplyScalar(-dragCoefficient * physics.velocity.lengthSq());
        }
        
        // Calculate total acceleration (a = F/m)
        const totalForce = gravityForce.clone().add(dragForce);
        physics.acceleration.copy(totalForce).divideScalar(mass);
        
        // Log physics state for debugging
        console.log('Physics update:', {
          time: physics.time,
          position: physics.position.y,
          velocity: physics.velocity.y,
          acceleration: physics.acceleration.y
        });

        // Update velocity (v = v0 + at)
        physics.velocity.add(physics.acceleration.clone().multiplyScalar(dt));

        // Update position (x = x0 + vt)
        physics.position.add(physics.velocity.clone().multiplyScalar(dt));

        // Check ground collision
        if (physics.position.y <= 0.5) {
          physics.position.y = 0.5;
          physics.velocity.set(0, 0, 0);
          physics.stopped = true;
        }

        // Update sphere position
        if (sphereRef.current) {
          sphereRef.current.position.copy(physics.position);
          
          // Update force vectors if they exist
          if (vectorsRef.current) {
            // Update velocity vector
            if (physics.velocity.lengthSq() > 0.001) {
              const velocityDir = physics.velocity.clone().normalize();
              const velocityLength = Math.min(physics.velocity.length() * 0.5, 5);
              vectorsRef.current.velocity.position.copy(physics.position);
              vectorsRef.current.velocity.setDirection(velocityDir);
              vectorsRef.current.velocity.setLength(velocityLength);
            } else {
              vectorsRef.current.velocity.setLength(0.001);
            }
            
            // Update gravity vector
            vectorsRef.current.gravityArrow.position.copy(physics.position);
            
            // Update drag vector if air resistance is enabled
            if (airResistance && physics.velocity.lengthSq() > 0.001) {
              const dragDir = physics.velocity.clone().normalize().negate();
              const dragLength = Math.min(dragCoefficient * physics.velocity.lengthSq() * 0.1, 3);
              vectorsRef.current.drag.position.copy(physics.position);
              vectorsRef.current.drag.setDirection(dragDir);
              vectorsRef.current.drag.setLength(dragLength);
            } else {
              vectorsRef.current.drag.setLength(0.001);
            }
          }
        }

        // Calculate energies even when stopped
        const kineticEnergy = 0.5 * mass * physics.velocity.lengthSq();
        const potentialEnergy = mass * gravity * (physics.position.y - 0.5);
        const totalEnergy = kineticEnergy + potentialEnergy;

        // Update UI with current physics state
        onDataUpdate({
          position: physics.position.clone(),
          velocity: physics.velocity.clone(),
          acceleration: new Vector3(0, -gravity, 0), // Keep constant gravity
          time: physics.time,
          kineticEnergy,
          potentialEnergy,
          totalEnergy
        });
      }

      // Always update controls and render
      controls.update();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    animate();

    // Handle resize with more robust dimension detection
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) {
        console.warn('Required refs not available for resize');
        return;
      }
      
      // Get the actual dimensions using getBoundingClientRect for more accuracy
      const containerRect = mountRef.current.getBoundingClientRect();
      let width = containerRect.width;
      let height = containerRect.height;
      
      // Validate dimensions and use fallbacks if needed
      if (!width || width < 10) {
        console.warn('Container width is invalid during resize:', width, 'using fallback');
        width = 800;
      }
      
      if (!height || height < 10) {
        console.warn('Container height is invalid during resize:', height, 'using fallback');
        height = 500;
      }
      
      // Update camera aspect ratio
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      // Update renderer size to match container exactly
      rendererRef.current.setSize(width, height, true);
      
      // Log dimensions for debugging
      console.log(`Resizing renderer to ${width}x${height}`);
    };
    
    // Call resize handler immediately to ensure correct initial sizing
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        isAnimatingRef.current = false;
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
        rendererRef.current.domElement.remove();
      }
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
      // Clean up all Three.js objects
      if (sphereRef.current) {
        sphereRef.current.geometry.dispose();
        if (Array.isArray(sphereRef.current.material)) {
          sphereRef.current.material.forEach(material => material.dispose());
        } else {
          sphereRef.current.material.dispose();
        }
      }
      if (vectorsRef.current) {
        Object.values(vectorsRef.current).forEach(arrow => {
          // Remove arrow from scene if it exists
          if (sceneRef.current) {
            sceneRef.current.remove(arrow);
          }
        });
      }
    };
  }, [initialHeight, initialVelocity, gravity, mass, airResistance, dragCoefficient]);
  
  // This effect now handles the initial setup of physics parameters when they change
  useEffect(() => {
    console.log('Physics parameters changed, resetting simulation');
    
    // Reset physics state with new parameters
    physicsRef.current = {
      position: new Vector3(0, initialHeight, 0),
      velocity: new Vector3(0, initialVelocity, 0),
      acceleration: new Vector3(0, -gravity, 0),
      stopped: false,
      time: 0
    };
    
    // Reset sphere position if it exists
    if (sphereRef.current) {
      sphereRef.current.position.copy(physicsRef.current.position);
    }
    
    // Update vectors if they exist
    if (vectorsRef.current) {
      vectorsRef.current.velocity.position.copy(physicsRef.current.position);
      vectorsRef.current.gravityArrow.position.copy(physicsRef.current.position);
      vectorsRef.current.drag.position.copy(physicsRef.current.position);
    }
    
    // Update UI with initial state
    onDataUpdate({
      position: physicsRef.current.position.clone(),
      velocity: physicsRef.current.velocity.clone(),
      acceleration: physicsRef.current.acceleration.clone(),
      time: 0,
      kineticEnergy: 0.5 * mass * initialVelocity * initialVelocity,
      potentialEnergy: mass * gravity * initialHeight,
      totalEnergy: (0.5 * mass * initialVelocity * initialVelocity) + (mass * gravity * initialHeight)
    });
  }, [initialHeight, initialVelocity, gravity, mass]);

  useEffect(() => {
    physicsRef.current = {
      position: new Vector3(0, initialHeight, 0),
      velocity: new Vector3(0, initialVelocity, 0),
      acceleration: new Vector3(0, -gravity, 0),
      stopped: false,
      time: 0
    };
    
    timeRef.current = 0;
    
    // Update initial data
    onDataUpdate({
      position: physicsRef.current.position.clone(),
      velocity: physicsRef.current.velocity.clone(),
      acceleration: physicsRef.current.acceleration.clone(),
      time: 0,
      kineticEnergy: 0.5 * mass * initialVelocity * initialVelocity,
      potentialEnergy: mass * gravity * initialHeight,
      totalEnergy: (0.5 * mass * initialVelocity * initialVelocity) + (mass * gravity * initialHeight)
    });
  }, [initialHeight, initialVelocity, gravity]);

  // Effect to handle simulation reset and play state changes
  useEffect(() => {
    console.log('isPlaying changed to:', isPlaying);
    
    if (isPlaying) {
      // When play button is clicked, reset if needed and start animation
      if (physicsRef.current.stopped) {
        console.log('Resetting physics for new simulation');
        physicsRef.current = {
          position: new Vector3(0, initialHeight, 0),
          velocity: new Vector3(0, initialVelocity, 0),
          acceleration: new Vector3(0, -gravity, 0),
          stopped: false,
          time: 0
        };

        // Reset sphere position
        if (sphereRef.current) {
          sphereRef.current.position.copy(physicsRef.current.position);
        }
        
        // Update vectors if they exist
        if (vectorsRef.current) {
          vectorsRef.current.velocity.position.copy(physicsRef.current.position);
          vectorsRef.current.gravityArrow.position.copy(physicsRef.current.position);
          vectorsRef.current.drag.position.copy(physicsRef.current.position);
        }
      }
    }
    
    // Always update UI with current state when play state changes
    onDataUpdate({
      position: physicsRef.current.position.clone(),
      velocity: physicsRef.current.velocity.clone(),
      acceleration: new Vector3(0, -gravity, 0),
      time: physicsRef.current.time,
      kineticEnergy: 0.5 * mass * physicsRef.current.velocity.lengthSq(),
      potentialEnergy: mass * gravity * (physicsRef.current.position.y - 0.5),
      totalEnergy: (0.5 * mass * physicsRef.current.velocity.lengthSq()) + 
                  (mass * gravity * (physicsRef.current.position.y - 0.5))
    });
  }, [isPlaying, initialHeight, initialVelocity, gravity, mass]);

  // Add console logs to help debug mounting issues
  console.log('FreeFallScene mounting, mountRef exists:', !!mountRef.current);
  
  // Log current state of refs to help with debugging
  useEffect(() => {
    console.log('FreeFallScene refs status:', {
      mountRef: !!mountRef.current,
      sceneRef: !!sceneRef.current,
      rendererRef: !!rendererRef.current,
      cameraRef: !!cameraRef.current,
      sphereRef: !!sphereRef.current
    });
  });
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'block', 
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0', // Add background color to make div visible even without Three.js
        border: '1px solid #ddd' // Add border to help visualize the container
      }} 
      data-testid="free-fall-scene-container"
    />
  );
};
