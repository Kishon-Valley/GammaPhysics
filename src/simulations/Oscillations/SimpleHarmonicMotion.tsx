import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SimpleHarmonicMotionProps {
  parameters: {
    mass: number;
    springConstant: number;
    dampingCoefficient: number;
    length: number;
  };
  isPlaying: boolean;
  onDataUpdate: (data: any) => void;
}

export const SimpleHarmonicMotion = ({ parameters, isPlaying, onDataUpdate }: SimpleHarmonicMotionProps) => {
  const mass = useRef<THREE.Mesh>(null);
  const spring = useRef<THREE.Line>(null);
  const time = useRef(0);
  const position = useRef(parameters.length);
  const velocity = useRef(0);

  // Create spring geometry
  useEffect(() => {
    if (spring.current) {
      const points = [];
      const segments = 32;
      const coils = 10;
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const angle = coils * Math.PI * 2 * t;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * 0.2,
            t * -parameters.length,
            Math.sin(angle) * 0.2
          )
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      spring.current.geometry = geometry;
    }
  }, [parameters.length]);

  // Animation loop
  useFrame((_state, delta) => {
    if (!isPlaying || !mass.current) return;

    // SHM equations
    const angularFrequency = Math.sqrt(parameters.springConstant / parameters.mass);
    const dampingFactor = parameters.dampingCoefficient / (2 * parameters.mass);
    
    // Update time
    time.current += delta;

    // Calculate new position for damped SHM
    const amplitude = parameters.length;
    const dampedPosition = amplitude * Math.exp(-dampingFactor * time.current) * 
      Math.cos(angularFrequency * time.current);

    // Update position and velocity
    position.current = dampedPosition;
    velocity.current = -dampingFactor * dampedPosition - 
      angularFrequency * amplitude * Math.exp(-dampingFactor * time.current) * 
      Math.sin(angularFrequency * time.current);

    // Update mass position
    mass.current.position.y = dampedPosition;

    // Update spring geometry
    if (spring.current) {
      const points = [];
      const segments = 32;
      const coils = 10;
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const angle = coils * Math.PI * 2 * t;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * 0.2,
            t * dampedPosition,
            Math.sin(angle) * 0.2
          )
        );
      }

      spring.current.geometry.setFromPoints(points);
    }

    // Send data update
    onDataUpdate({
      position: dampedPosition,
      velocity: velocity.current,
      time: time.current,
    });
  });

  return (
    <group>
      {/* Fixed point */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Spring */}
      <primitive object={new THREE.Line()} ref={spring}>
        <bufferGeometry />
        <lineBasicMaterial color="silver" linewidth={2} />
      </primitive>

      {/* Mass */}
      <mesh ref={mass} position={[0, parameters.length, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};
