import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box, Slider, Typography, Paper, Grid } from '@mui/material';
import * as THREE from 'three';

interface PendulumControls {
  length: number;
  angle: number;
  mass: number;
}

interface Simulation3DProps {
  simulation: {
    id: string;
    title: string;
    description: string;
    type: "pendulum" | "spring" | "wave" | "projectile" | "oscillation";
  };
}

export function Simulation3D({ simulation }: Simulation3DProps) {
  const [controls, setControls] = useState<PendulumControls>({
    length: 1.0,
    angle: 30,
    mass: 1.0
  });

  const handleControlChange = (name: keyof PendulumControls, value: number) => {
    setControls(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          {simulation.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Canvas style={{ height: '400px' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {simulation.type === "pendulum" && <Pendulum {...controls} />}
          <OrbitControls />
        </Canvas>
      </Grid>
      
      {/* Position vs Time Graph */}
      <Grid item xs={12}>
        <Paper style={{ height: '250px', padding: '16px' }}>
          <Typography variant="h6" gutterBottom>
            Position vs Time
          </Typography>
          {/* Add position vs time graph component */}
        </Paper>
      </Grid>

      {/* Velocity vs Time Graph */}
      <Grid item xs={12}>
        <Paper style={{ height: '250px', padding: '16px' }}>
          <Typography variant="h6" gutterBottom>
            Velocity vs Time
          </Typography>
          {/* Add velocity vs time graph component */}
        </Paper>
      </Grid>

      {/* Energy vs Time Graph */}
      <Grid item xs={12}>
        <Paper style={{ height: '250px', padding: '16px' }}>
          <Typography variant="h6" gutterBottom>
            Energy vs Time
          </Typography>
          {/* Add energy vs time graph component */}
        </Paper>
      </Grid>

      {/* Phase Space Graph */}
      <Grid item xs={12}>
        <Paper style={{ height: '250px', padding: '16px' }}>
          <Typography variant="h6" gutterBottom>
            Phase Space
          </Typography>
          {/* Add phase space graph component */}
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Pendulum Controls
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Length (m)</Typography>
            <Slider
              value={controls.length}
              onChange={(_, value) => handleControlChange('length', value as number)}
              min={0.1}
              max={5.0}
              step={0.1}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value.toFixed(1)} m`}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Initial Angle (degrees)</Typography>
            <Slider
              value={controls.angle}
              onChange={(_, value) => handleControlChange('angle', value as number)}
              min={-45}
              max={45}
              step={1}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value.toFixed(1)}°`}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Mass (kg)</Typography>
            <Slider
              value={controls.mass}
              onChange={(_, value) => handleControlChange('mass', value as number)}
              min={0.1}
              max={10.0}
              step={0.1}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value.toFixed(1)} kg`}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

function Pendulum({ length, angle, mass }: PendulumControls) {
  const pendulumRef = useRef<THREE.Group>(null);
  const angleRef = useRef(angle * Math.PI / 180);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const gravity = 9.81;
  const damping = 0.05;

  useFrame((state) => {
    if (pendulumRef.current) {
      const time = state.clock.getElapsedTime();
      const deltaTime = Math.min(time - lastTimeRef.current, 0.016);
      lastTimeRef.current = time;

      const targetAngle = angle * Math.PI / 180;
      if (Math.abs(angleRef.current - targetAngle) > 0.01) {
        angleRef.current = THREE.MathUtils.lerp(angleRef.current, targetAngle, 0.1);
        velocityRef.current = 0;
      }

      const k1 = deltaTime * velocityRef.current;
      const l1 = deltaTime * calculateAcceleration(angleRef.current, velocityRef.current);
      
      const k2 = deltaTime * (velocityRef.current + l1/2);
      const l2 = deltaTime * calculateAcceleration(angleRef.current + k1/2, velocityRef.current + l1/2);
      
      const k3 = deltaTime * (velocityRef.current + l2/2);
      const l3 = deltaTime * calculateAcceleration(angleRef.current + k2/2, velocityRef.current + l2/2);
      
      const k4 = deltaTime * (velocityRef.current + l3);
      const l4 = deltaTime * calculateAcceleration(angleRef.current + k3, velocityRef.current + l3);

      angleRef.current += (k1 + 2*k2 + 2*k3 + k4) / 6;
      velocityRef.current += (l1 + 2*l2 + 2*l3 + l4) / 6;

      velocityRef.current *= (1 - damping * deltaTime);

      pendulumRef.current.rotation.z = THREE.MathUtils.lerp(
        pendulumRef.current.rotation.z,
        angleRef.current,
        0.5
      );
    }
  });

  const calculateAcceleration = (angle: number, velocity: number) => {
    return -(gravity / length) * Math.sin(angle) - damping * velocity;
  };

  return (
    <group ref={pendulumRef}>
      <mesh position={[0, -length/2, 0]}>
        <sphereGeometry args={[0.2 * Math.pow(mass, 1/3)]} />
        <meshStandardMaterial color="silver" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, length]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}