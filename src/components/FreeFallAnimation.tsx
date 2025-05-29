import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Slider, Button, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PlayArrow, Pause, RestartAlt, Info } from '@mui/icons-material';
import * as THREE from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Environment } from '@react-three/drei';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PhysicsState {
  position: number;
  velocity: number;
  acceleration: number;
  time: number;
  distanceTraveled: number;
  energyKinetic: number;
  energyPotential: number;
}

interface DataPoint {
  time: number;
  position: number;
  velocity: number;
  acceleration: number;
  energyKinetic: number;
  energyPotential: number;
  energyTotal: number;
}

// Ball component that falls
function Ball({ 
  position, 
  radius, 
  color = '#1976d2',
  velocity,
  showVelocityVector = true
}: { 
  position: [number, number, number], 
  radius: number, 
  color?: string,
  velocity: number,
  showVelocityVector?: boolean
}) {
  const ballRef = useRef<THREE.Mesh>(null);
  const arrowRef = useRef<THREE.ArrowHelper>(null);
  
  useEffect(() => {
    if (ballRef.current && arrowRef.current) {
      // Update velocity vector
      const direction = new THREE.Vector3(0, -1, 0);
      const length = Math.min(Math.abs(velocity) * 0.1, 2);
      arrowRef.current.setLength(length);
      arrowRef.current.setDirection(direction);
      arrowRef.current.visible = showVelocityVector && length > 0.01;
    }
  }, [velocity, showVelocityVector]);

  return (
    <group position={position}>
      <mesh ref={ballRef} castShadow receiveShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.2}
          roughness={0.3}
        />
      </mesh>
      <arrowHelper
        ref={arrowRef}
        args={[
          new THREE.Vector3(0, -1, 0),
          new THREE.Vector3(0, 0, 0),
          Math.min(Math.abs(velocity) * 0.1, 2),
          0xff0000,
          0.2,
          0.1
        ]}
      />
    </group>
  );
}

// Ground component
function Ground() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial 
        color="#555555"
        roughness={0.8}
      />
    </mesh>
  );
}

// Scene component
function Scene({
  ballPosition,
  ballVelocity,
  initialHeight,
  groundLevel,
  ballRadius,
  showVelocityVector
}: {
  ballPosition: number;
  ballVelocity: number;
  initialHeight: number;
  groundLevel: number;
  ballRadius: number;
  showVelocityVector: boolean;
}) {
  const { camera } = useThree();
  
  // Set camera position to better view the entire fall path
  useEffect(() => {
    // Position camera to see both the starting point and ground
    camera.position.set(12, initialHeight / 100 + 5, 12);
    // Look at a point midway between start and ground
    camera.lookAt(0, initialHeight / 100, 0);
  }, [camera, initialHeight]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      <Ball 
        position={[0, ballPosition, 0]} 
        radius={ballRadius}
        velocity={ballVelocity}
        showVelocityVector={showVelocityVector}
      />
      
      <Ground />
      
      {/* Vertical ruler with height markings */}
      <group position={[2, 0, 0]}>
        {/* Vertical line - positioned to extend from ground (0m) to max height */}
        <mesh position={[0, groundLevel + (initialHeight / 100), 0]}>
          <boxGeometry args={[0.05, initialHeight / 50 + Math.abs(groundLevel), 0.05]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
        
        {/* Height markings - from ground level (0m) to max height */}
        {Array.from({ length: Math.floor(initialHeight / 10) + 1 }).map((_, i) => {
          // Calculate height from 0 (ground) to max height
          const heightValue = i * 10;
          const isMajor = heightValue % 50 === 0;
          // Convert to scene coordinates - add groundLevel to position correctly
          const yPosition = heightValue / 50 + groundLevel;
          
          return (
            <group key={i} position={[0, yPosition, 0]}>
              {/* Tick mark */}
              <mesh position={[isMajor ? 0.25 : 0.15, 0, 0]}>
                <boxGeometry args={[isMajor ? 0.5 : 0.3, 0.03, 0.03]} />
                <meshStandardMaterial color={isMajor ? "#ff0000" : "#666666"} />
              </mesh>
              
              {/* Height label (only for major ticks) */}
              {isMajor && (
                <Text
                  position={[0.8, 0, 0]}
                  color="black"
                  fontSize={0.4}
                  anchorX="left"
                  fontWeight="bold"
                >
                  {heightValue}m
                </Text>
              )}
            </group>
          );
        })}
      </group>
      
      {/* Current height indicator */}
      <group position={[0, ballPosition, 0]}>
        <mesh position={[1.8, 0, 0]}>
          <boxGeometry args={[0.3, 0.03, 0.03]} />
          <meshStandardMaterial color="#00ff00" />
        </mesh>
        <Text
          position={[3, 0, 0]}
          color="#00aa00"
          fontSize={0.4}
          anchorX="left"
          fontWeight="bold"
        >
          {Math.round((ballPosition - groundLevel) * 50)}m
        </Text>
      </group>
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Environment preset="sunset" />
    </>
  );
}

const FreeFallAnimation: React.FC = () => {
  // Physics parameters
  const [gravity, setGravity] = useState(9.81);
  const [mass, setMass] = useState(1.0);
  const [initialHeight, setInitialHeight] = useState(500);
  const [airResistance, setAirResistance] = useState(0.1);
  const [showVelocityVector, setShowVelocityVector] = useState(true);
  
  // Animation state
  const [isRunning, setIsRunning] = useState(false);
  const animationRef = useRef<number>(0);
  
  // Graph data state
  const [graphData, setGraphData] = useState<DataPoint[]>([]);
  const [selectedGraph, setSelectedGraph] = useState<string>('position');
  const maxDataPoints = 100; // Limit data points to avoid performance issues
  
  // Ball properties
  const ballRadius = 0.5;
  const groundLevel = -5;
  
  // Physics state
  const [physicsState, setPhysicsState] = useState<PhysicsState>({
    position: initialHeight / 50 + groundLevel, // Scale down for Three.js and adjust for ground level
    velocity: 0,
    acceleration: -gravity,
    time: 0,
    distanceTraveled: 0,
    energyKinetic: 0,
    energyPotential: mass * gravity * initialHeight
  });
  
  // Reset animation
  const resetAnimation = () => {
    setIsRunning(false);
    cancelAnimationFrame(animationRef.current);
    
    setPhysicsState({
      position: initialHeight / 50 + groundLevel,
      velocity: 0,
      acceleration: -gravity,
      time: 0,
      distanceTraveled: 0,
      energyKinetic: 0,
      energyPotential: mass * gravity * initialHeight
    });
    
    // Clear graph data
    setGraphData([]);
  };
  
  // Start/stop animation
  const toggleAnimation = () => {
    setIsRunning(prev => !prev);
  };
  
  // Update physics with improved calculations
  const updatePhysics = (dt: number) => {
    if (!isRunning) return physicsState.position;
    
    setPhysicsState(prevState => {
      // Get current state
      const { position, velocity, time, distanceTraveled } = prevState;
      
      // Calculate drag force (air resistance)
      const dragForce = airResistance * velocity * velocity * Math.sign(-velocity);
      
      // Calculate net acceleration (gravity + air resistance)
      const acceleration = -gravity + dragForce / mass;
      
      // Update velocity using Verlet integration for better accuracy
      const newVelocity = velocity + acceleration * dt;
      
      // Update position
      const newPosition = position + velocity * dt + 0.5 * acceleration * dt * dt;
      
      // Check for ground collision
      if (newPosition <= groundLevel + ballRadius / 50) {
        // Ball has hit the ground, stop the animation
        setIsRunning(false);
        
        // Calculate energy
        const energyKinetic = 0; // At rest
        const energyPotential = mass * gravity * 0; // At ground level, potential energy is zero
        
        const newState = {
          position: groundLevel + ballRadius / 50,
          velocity: 0,
          acceleration: 0,
          time: time + dt,
          distanceTraveled: distanceTraveled + Math.abs(position - (groundLevel + ballRadius / 50)),
          energyKinetic,
          energyPotential
        };
        
        // Update graph data
        updateGraphData(newState);
        
        return newState;
      }
      
      // Calculate energy
      const energyKinetic = 0.5 * mass * newVelocity * newVelocity;
      const energyPotential = mass * gravity * (newPosition - groundLevel) * 50; // Scale back to meters for calculation
      
      const newState = {
        position: newPosition,
        velocity: newVelocity,
        acceleration,
        time: time + dt,
        distanceTraveled: distanceTraveled + Math.abs(position - newPosition),
        energyKinetic,
        energyPotential
      };
      
      // Update graph data
      updateGraphData(newState);
      
      return newState;
    });
    
    return physicsState.position;
  };
  
  // Update graph data
  const updateGraphData = (state: PhysicsState) => {
    setGraphData(prevData => {
      // Create new data point
      const newPoint: DataPoint = {
        time: state.time,
        position: (state.position - groundLevel) * 50, // Convert to meters
        velocity: state.velocity * 50, // Convert to m/s
        acceleration: state.acceleration * 50, // Convert to m/s²
        energyKinetic: state.energyKinetic,
        energyPotential: state.energyPotential,
        energyTotal: state.energyKinetic + state.energyPotential
      };
      
      // Add new point to data array, keeping only the last maxDataPoints
      const newData = [...prevData, newPoint];
      if (newData.length > maxDataPoints) {
        return newData.slice(newData.length - maxDataPoints);
      }
      return newData;
    });
  };
  
  // Animation loop
  useEffect(() => {
    // Animation loop
    let lastTimestamp: number | undefined = undefined;
    
    const animate = (timestamp: number) => {
      if (!isRunning) return;
      
      // Calculate dt in seconds using the timestamp
      const dt = lastTimestamp ? Math.min((timestamp - lastTimestamp) / 1000, 0.1) : 1/60;
      lastTimestamp = timestamp;
      
      updatePhysics(dt);
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    if (isRunning) {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isRunning]);
  
  // Reset when parameters change
  useEffect(() => {
    resetAnimation();
  }, [initialHeight, gravity, mass, airResistance]);

  // Handle graph type change
  const handleGraphChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string,
  ) => {
    if (newValue !== null) {
      setSelectedGraph(newValue);
    }
  };
  
  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto', p: 2 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Free Fall Simulation
        </Typography>
        
        <Typography variant="body1" paragraph>
          This simulation demonstrates the physics of free fall motion under the influence of gravity and air resistance.
          Adjust the parameters below to see how they affect the motion of the falling object.
        </Typography>
        
        <Box sx={{ width: '100%', height: 700, position: 'relative', mb: 4 }}>
          {/* Controls panel on the left side */}
          <Box sx={{ 
            position: 'absolute', 
            left: 16, 
            top: 16, 
            width: '250px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            p: 2,
            borderRadius: 2,
            zIndex: 10,
            boxShadow: 3
          }}>
            <Typography variant="h6" gutterBottom>Parameters</Typography>
            
            <Typography variant="body2" gutterBottom>Gravity (m/s²)</Typography>
            <Slider
              size="small"
              value={gravity}
              onChange={(_, value) => setGravity(value as number)}
              min={0.1}
              max={20}
              step={0.1}
              valueLabelDisplay="auto"
              marks={[
                { value: 1.62, label: 'Moon' },
                { value: 9.81, label: 'Earth' },
                { value: 24.79, label: 'Jupiter' }
              ]}
            />
            
            <Typography variant="body2" sx={{ mt: 2 }} gutterBottom>Mass (kg)</Typography>
            <Slider
              size="small"
              value={mass}
              onChange={(_, value) => setMass(value as number)}
              min={0.1}
              max={10}
              step={0.1}
              valueLabelDisplay="auto"
            />
            
            <Typography variant="body2" sx={{ mt: 2 }} gutterBottom>Initial Height (m)</Typography>
            <Slider
              size="small"
              value={initialHeight}
              onChange={(_, value) => setInitialHeight(value as number)}
              min={100}
              max={1000}
              step={50}
              valueLabelDisplay="auto"
            />
            
            <Typography variant="body2" sx={{ mt: 2 }} gutterBottom>Air Resistance</Typography>
            <Slider
              size="small"
              value={airResistance}
              onChange={(_, value) => setAirResistance(value as number)}
              min={0}
              max={1}
              step={0.01}
              valueLabelDisplay="auto"
              marks={[
                { value: 0, label: 'None' },
                { value: 1, label: 'High' }
              ]}
            />
            
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button 
                variant="contained" 
                onClick={toggleAnimation}
                startIcon={isRunning ? <Pause /> : <PlayArrow />}
                color="primary"
                size="small"
              >
                {isRunning ? 'Pause' : 'Start'}
              </Button>
              <Button 
                variant="outlined" 
                onClick={resetAnimation}
                startIcon={<RestartAlt />}
                size="small"
              >
                Reset
              </Button>
            </Box>
            
            <Button
              variant="outlined"
              onClick={() => setShowVelocityVector(!showVelocityVector)}
              startIcon={<Info />}
              size="small"
              sx={{ mt: 1, width: '100%' }}
            >
              {showVelocityVector ? 'Hide Vector' : 'Show Vector'}
            </Button>
          </Box>
          
          <Canvas shadows>
            <Scene 
              ballPosition={physicsState.position}
              ballVelocity={physicsState.velocity}
              initialHeight={initialHeight}
              groundLevel={groundLevel}
              ballRadius={ballRadius}
              showVelocityVector={showVelocityVector}
            />
          </Canvas>
        </Box>
        
        {/* Live Graph Section */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>Live Data Graph</Typography>
          
          <ToggleButtonGroup
            value={selectedGraph}
            exclusive
            onChange={handleGraphChange}
            aria-label="graph selection"
            sx={{ mb: 2 }}
          >
            <ToggleButton value="position" aria-label="position">
              Position
            </ToggleButton>
            <ToggleButton value="velocity" aria-label="velocity">
              Velocity
            </ToggleButton>
            <ToggleButton value="acceleration" aria-label="acceleration">
              Acceleration
            </ToggleButton>
            <ToggleButton value="energy" aria-label="energy">
              Energy
            </ToggleButton>
          </ToggleButtonGroup>
          
          <Paper elevation={2} sx={{ p: 2, height: 300 }}>
            {selectedGraph === 'position' && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={graphData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="time" 
                    label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5 }} 
                  />
                  <YAxis 
                    label={{ value: 'Position (m)', angle: -90, position: 'insideLeft' }} 
                  />
                  <Tooltip formatter={(value) => [`${Number(value).toFixed(2)} m`, 'Position']} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="position" 
                    name="Position" 
                    stroke="#1976d2" 
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
            
            {selectedGraph === 'velocity' && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={graphData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="time" 
                    label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5 }} 
                  />
                  <YAxis 
                    label={{ value: 'Velocity (m/s)', angle: -90, position: 'insideLeft' }} 
                  />
                  <Tooltip formatter={(value) => [`${Number(value).toFixed(2)} m/s`, 'Velocity']} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="velocity" 
                    name="Velocity" 
                    stroke="#ff5722" 
                    dot={false} 
                    activeDot={{ r: 5 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
            
            {selectedGraph === 'acceleration' && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={graphData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="time" 
                    label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5 }} 
                  />
                  <YAxis 
                    label={{ value: 'Acceleration (m/s²)', angle: -90, position: 'insideLeft' }} 
                  />
                  <Tooltip formatter={(value) => [`${Number(value).toFixed(2)} m/s²`, 'Acceleration']} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="acceleration" 
                    name="Acceleration" 
                    stroke="#9c27b0" 
                    dot={false} 
                    activeDot={{ r: 5 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
            
            {selectedGraph === 'energy' && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={graphData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="time" 
                    label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5 }} 
                  />
                  <YAxis 
                    label={{ value: 'Energy (J)', angle: -90, position: 'insideLeft' }} 
                  />
                  <Tooltip formatter={(value) => [`${Number(value).toFixed(2)} J`, '']} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="energyKinetic" 
                    name="Kinetic Energy" 
                    stroke="#4caf50" 
                    dot={false} 
                    activeDot={{ r: 5 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="energyPotential" 
                    name="Potential Energy" 
                    stroke="#f44336" 
                    dot={false} 
                    activeDot={{ r: 5 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="energyTotal" 
                    name="Total Energy" 
                    stroke="#ff9800" 
                    dot={false} 
                    activeDot={{ r: 5 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </Paper>
        </Box>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>Physics Concepts</Typography>
          
          <Typography variant="body1" paragraph>
            This simulation demonstrates several key physics concepts:
          </Typography>
          
          <Typography variant="subtitle1" fontWeight="bold">Free Fall</Typography>
          <Typography variant="body1" paragraph>
            Free fall is the motion of an object under the influence of gravity only. In a vacuum, all objects fall at the same rate regardless of mass. 
            The acceleration due to gravity on Earth is approximately 9.81 m/s².
          </Typography>
          
          <Typography variant="subtitle1" fontWeight="bold">Air Resistance</Typography>
          <Typography variant="body1" paragraph>
            In reality, objects falling through air experience a drag force that opposes motion. This force depends on the object's shape, size, and velocity.
            Air resistance causes objects to reach a terminal velocity, where the drag force equals the gravitational force.
          </Typography>
          
          <Typography variant="subtitle1" fontWeight="bold">Conservation of Energy</Typography>
          <Typography variant="body1" paragraph>
            As an object falls, its potential energy (mgh) is converted to kinetic energy (½mv²). In the absence of air resistance, 
            the total mechanical energy remains constant. With air resistance, some energy is dissipated as heat.
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default FreeFallAnimation;
