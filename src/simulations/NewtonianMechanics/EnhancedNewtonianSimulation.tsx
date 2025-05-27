import React, { useState } from 'react';
import { Box, Slider, Typography, Button, Paper, Grid, Tooltip } from '@mui/material';
import { PlayArrow, Pause, Refresh } from '@mui/icons-material';
import { Vector3 } from 'three';
import { EnhancedNewtonianScene } from './EnhancedNewtonianScene'; // Assuming the component is in the same directory

interface SimulationControls {
  mass: number;
  gravity: number;
  friction: number;
  initialVelocity: Vector3;
  rampAngle: number;
}

interface SimulationData {
  position: Vector3;
  velocity: Vector3;
  acceleration: Vector3;
  kineticEnergy: number;
  potentialEnergy: number;
  totalEnergy: number;
}

export const EnhancedNewtonianSimulation: React.FC = () => {
  const [controls, setControls] = useState<SimulationControls>({
    mass: 1.0,
    gravity: 9.81,
    friction: 0.1,
    initialVelocity: new Vector3(0, 0, 0),
    rampAngle: 30,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [simulationData, setSimulationData] = useState<SimulationData>({
    position: new Vector3(0, 0, 0),
    velocity: new Vector3(0, 0, 0),
    acceleration: new Vector3(0, 0, 0),
    kineticEnergy: 0,
    potentialEnergy: 0,
    totalEnergy: 0,
  });

  const handleControlChange = (name: keyof SimulationControls, value: number) => {
    setControls(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setIsPlaying(false);
    
    // Use setTimeout to ensure state updates have propagated
    setTimeout(() => {
      setSimulationData({
        position: new Vector3(0, 0, 0),
        velocity: controls.initialVelocity.clone(),
        acceleration: new Vector3(0, -controls.gravity, 0),
        kineticEnergy: 0.5 * controls.mass * controls.initialVelocity.lengthSq(),
        potentialEnergy: 0,
        totalEnergy: 0.5 * controls.mass * controls.initialVelocity.lengthSq(),
      });
    }, 0);
  };

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const presetScenarios = [
    { name: 'Free Fall', config: { mass: 1, gravity: 9.81, friction: 0, initialVelocity: new Vector3(0, 10, 0), rampAngle: 0 } },
    { name: 'Inclined Plane', config: { mass: 1, gravity: 9.81, friction: 0.1, initialVelocity: new Vector3(0, 0, 0), rampAngle: 30 } },
    { name: 'Projectile Motion', config: { mass: 1, gravity: 9.81, friction: 0.05, initialVelocity: new Vector3(5, 5, 0), rampAngle: 0 } },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} style={{ height: '500px', position: 'relative' }}>
          <EnhancedNewtonianScene
            mass={controls.mass}
            gravity={controls.gravity}
            friction={controls.friction}
            rampAngle={controls.rampAngle}
            initialVelocity={controls.initialVelocity}
            isPlaying={isPlaying}
            onDataUpdate={(data) => {
              setSimulationData(data);
            }}
          />
          
          {/* Playback controls */}
          <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}>
            <Button 
              variant="contained" 
              onClick={handlePlayPause}
              startIcon={isPlaying ? <Pause /> : <PlayArrow />}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button 
              variant="contained" 
              onClick={handleReset}
              startIcon={<Refresh />}
              sx={{ ml: 1 }}
            >
              Reset
            </Button>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Simulation Controls</Typography>
          
          {/* Parameter controls */}
          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Mass (kg)</Typography>
            <Tooltip title="Adjust the mass of the object">
              <Slider
                value={controls.mass}
                onChange={(_, value) => handleControlChange('mass', value as number)}
                min={0.1}
                max={10}
                step={0.1}
                marks
                valueLabelDisplay="auto"
              />
            </Tooltip>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Gravity (m/s²)</Typography>
            <Tooltip title="Adjust the gravitational acceleration">
              <Slider
                value={controls.gravity}
                onChange={(_, value) => handleControlChange('gravity', value as number)}
                min={0}
                max={15}
                step={0.1}
                marks
                valueLabelDisplay="auto"
              />
            </Tooltip>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Friction Coefficient</Typography>
            <Tooltip title="Adjust the coefficient of friction">
              <Slider
                value={controls.friction}
                onChange={(_, value) => handleControlChange('friction', value as number)}
                min={0}
                max={1}
                step={0.01}
                marks
                valueLabelDisplay="auto"
              />
            </Tooltip>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Ramp Angle (degrees)</Typography>
            <Tooltip title="Adjust the angle of the inclined plane">
              <Slider
                value={controls.rampAngle}
                onChange={(_, value) => handleControlChange('rampAngle', value as number)}
                min={0}
                max={90}
                step={1}
                marks
                valueLabelDisplay="auto"
              />
            </Tooltip>
          </Box>

          {/* Preset scenarios */}
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Preset Scenarios</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {presetScenarios.map((scenario, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => setControls(scenario.config)}
              >
                {scenario.name}
              </Button>
            ))}
          </Box>
        </Paper>
      </Grid>

      {/* Real-time data display */}
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Real-time Data</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Position</Typography>
              <Typography>X: {simulationData.position.x.toFixed(2)} m</Typography>
              <Typography>Y: {simulationData.position.y.toFixed(2)} m</Typography>
              <Typography>Z: {simulationData.position.z.toFixed(2)} m</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Velocity</Typography>
              <Typography>X: {simulationData.velocity.x.toFixed(2)} m/s</Typography>
              <Typography>Y: {simulationData.velocity.y.toFixed(2)} m/s</Typography>
              <Typography>Z: {simulationData.velocity.z.toFixed(2)} m/s</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Energy</Typography>
              <Typography>Kinetic: {simulationData.kineticEnergy.toFixed(2)} J</Typography>
              <Typography>Potential: {simulationData.potentialEnergy.toFixed(2)} J</Typography>
              <Typography>Total: {simulationData.totalEnergy.toFixed(2)} J</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
