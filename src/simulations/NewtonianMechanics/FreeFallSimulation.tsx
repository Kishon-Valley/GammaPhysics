import { useState } from 'react';
import { Box, Slider, Typography, Paper, Tooltip, FormControlLabel, Switch, IconButton, Grid } from '@mui/material';
import { PlayArrow, Pause, Refresh, Info } from '@mui/icons-material';
import { FreeFallScene } from './FreeFallScene';
import { PhysicsGraphs } from '../../components/graphs/PhysicsGraphs';
import * as THREE from 'three';

interface SimulationData {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  acceleration: THREE.Vector3;
  time: number;
  kineticEnergy: number;
  potentialEnergy: number;
}

export const FreeFallSimulation = () => {
  const [controls, setControls] = useState({
    initialHeight: 10, // meters
    initialVelocity: 0, // m/s
    gravity: 9.81, // m/s²
    mass: 1, // kg
    airResistance: false,
    dragCoefficient: 0.47,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [simulationData, setSimulationData] = useState<SimulationData>({
    position: new THREE.Vector3(0, controls.initialHeight, 0),
    velocity: new THREE.Vector3(0, 0, 0),
    acceleration: new THREE.Vector3(0, -controls.gravity, 0),
    time: 0,
    kineticEnergy: 0,
    potentialEnergy: controls.mass * controls.gravity * controls.initialHeight,
  });

  const [graphData, setGraphData] = useState({
    position: [] as { time: number; value: number }[],
    velocity: [] as { time: number; value: number }[],
    energy: [] as { time: number; kinetic: number; potential: number; total: number }[],
  });

  const handleDataUpdate = (data: SimulationData) => {
    // Only update if the simulation is playing or if the object has just stopped (position.y === 0.5)
    if (isPlaying || data.position.y === 0.5) {
      setSimulationData(data);
      
      // Update graph data
      setGraphData(prev => ({
        position: [...prev.position, { time: data.time, value: data.position.y }].slice(-100),
        velocity: [...prev.velocity, { time: data.time, value: data.velocity.y }].slice(-100),
        energy: [...prev.energy, {
          time: data.time,
          kinetic: data.kineticEnergy,
          potential: data.potentialEnergy,
          total: data.kineticEnergy + data.potentialEnergy,
        }].slice(-100),
      }));
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    
    // Use setTimeout to ensure state updates have propagated
    setTimeout(() => {
      setSimulationData({
        position: new THREE.Vector3(0, controls.initialHeight, 0),
        velocity: new THREE.Vector3(0, controls.initialVelocity, 0),
        acceleration: new THREE.Vector3(0, -controls.gravity, 0),
        time: 0,
        kineticEnergy: 0.5 * controls.mass * controls.initialVelocity * controls.initialVelocity,
        potentialEnergy: controls.mass * controls.gravity * controls.initialHeight,
      });
      
      setGraphData({
        position: [],
        velocity: [],
        energy: [],
      });
    }, 0);
  };

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleControlChange = (name: string, value: number | boolean) => {
    setControls(prev => ({
      ...prev,
      [name]: value
    }));
    handleReset();
  };

  const educationalTooltips = {
    initialHeight: (
      <div>
        <Typography variant="body2" gutterBottom>
          Initial height determines the starting position of the object above the ground.
        </Typography>
        <Typography variant="body2" gutterBottom>
          The higher the initial height:
        </Typography>
        <ul>
          <li>More potential energy (mgh)</li>
          <li>Longer fall time</li>
          <li>Higher maximum velocity</li>
        </ul>
      </div>
    ),
    initialVelocity: (
      <div>
        <Typography variant="body2" gutterBottom>
          Initial velocity is the starting speed and direction of the object.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Positive values: upward motion
        </Typography>
        <Typography variant="body2" gutterBottom>
          Negative values: downward motion
        </Typography>
        <Typography variant="body2" gutterBottom>
          This affects:
        </Typography>
        <ul>
          <li>Initial kinetic energy (½mv²)</li>
          <li>Maximum height reached</li>
          <li>Total fall time</li>
        </ul>
      </div>
    ),
    gravity: (
      <div>
        <Typography variant="body2" gutterBottom>
          Gravitational acceleration varies by planet:
        </Typography>
        <ul>
          <li>Earth: 9.81 m/s²</li>
          <li>Moon: 1.62 m/s²</li>
          <li>Mars: 3.72 m/s²</li>
        </ul>
        <Typography variant="body2">
          This affects the rate of acceleration and the conversion between potential and kinetic energy.
        </Typography>
      </div>
    ),
    airResistance: (
      <div>
        <Typography variant="body2" gutterBottom>
          Air resistance creates a force opposing motion:
        </Typography>
        <ul>
          <li>Proportional to velocity squared (F = -kv²)</li>
          <li>Leads to terminal velocity</li>
          <li>Reduces total mechanical energy</li>
        </ul>
      </div>
    ),
  };

  const explanations = {
    // 1. Simulation Controls Section
    controls: {
      initialHeight: (
        <div>
          <Typography variant="body2" gutterBottom>
            Initial height is where the object starts its motion:
          </Typography>
          <ul>
            <li>Higher values = More potential energy</li>
            <li>More distance to fall</li>
            <li>Longer fall time</li>
          </ul>
        </div>
      ),
      initialVelocity: (
        <div>
          <Typography variant="body2" gutterBottom>
            Initial velocity is the starting speed and direction:
          </Typography>
          <ul>
            <li>Positive values: Object moves upward</li>
            <li>Negative values: Object moves downward</li>
            <li>Zero: Object starts from rest</li>
          </ul>
        </div>
      ),
      gravity: (
        <div>
          <Typography variant="body2" gutterBottom>
            Gravity pulls objects downward:
          </Typography>
          <ul>
            <li>Earth: 9.81 m/s²</li>
            <li>Moon: 1.62 m/s²</li>
            <li>Mars: 3.72 m/s²</li>
          </ul>
        </div>
      ),
      airResistance: (
        <div>
          <Typography variant="body2" gutterBottom>
            Air resistance affects falling objects:
          </Typography>
          <ul>
            <li>On: Object reaches terminal velocity</li>
            <li>Off: Object accelerates continuously</li>
            <li>More effect at higher speeds</li>
          </ul>
        </div>
      )
    },

    // 2. Real-time Data Section
    realTimeData: {
      time: "Time elapsed since the start of motion",
      height: "Current distance above the ground",
      velocity: "Current speed and direction (+ up, - down)",
      acceleration: "Rate of velocity change due to forces",
      kineticEnergy: "Energy due to motion (½mv²)",
      potentialEnergy: "Energy due to height (mgh)",
      totalEnergy: "Sum of kinetic and potential energy"
    },

    // 3. Motion Graphs Section
    graphs: {
      heightVsTime: (
        <div>
          <Typography variant="body2" gutterBottom>
            Height vs Time Graph: Understanding Object's Position
          </Typography>
          <p className="mb-2 text-sm text-gray-600">
            This graph shows how high the object is at each moment. Think of it like tracking a ball's journey up and down.
          </p>
          <ul className="space-y-1 text-sm">
            <li>• The curved shape (like an upside-down U) shows the natural up-and-down motion</li>
            <li>• The highest point of the curve is when the object reaches its maximum height</li>
            <li>• Steeper parts mean the object is moving faster (like when it's falling)</li>
            <li>• When the line becomes flat, the object has stopped moving up or down</li>
          </ul>
        </div>
      ),
      velocityVsTime: (
        <div>
          <Typography variant="body2" gutterBottom>
            Velocity vs Time Graph: Understanding Object's Speed
          </Typography>
          <p className="mb-2 text-sm text-gray-600">
            This graph shows how fast and in which direction the object is moving. Like a speedometer that can show up or down motion.
          </p>
          <ul className="space-y-1 text-sm">
            <li>• The straight line shows that gravity's pull is steady and constant</li>
            <li>• When the line is above zero, the object is moving upward</li>
            <li>• When the line is below zero, the object is falling down</li>
            <li>• The moment the line crosses zero is when the object changes direction</li>
          </ul>
        </div>
      ),
      energyVsTime: (
        <div>
          <Typography variant="body2" gutterBottom>
            Energy vs Time Graph: Understanding Object's Energy
          </Typography>
          <p className="mb-2 text-sm text-gray-600">
            This graph shows how energy changes forms, like converting money between different currencies while keeping the total the same.
          </p>
          <ul className="space-y-1 text-sm">
            <li>• The total energy (blue line) stays level - energy is never lost, just converted</li>
            <li>• Potential energy (height energy) and kinetic energy (motion energy) trade places</li>
            <li>• At the highest point: All energy is potential (like a lifted weight)</li>
            <li>• At the lowest point: All energy is kinetic (like a fast-moving car)</li>
          </ul>
        </div>
      )
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid {...{ item: true, xs: 12 }}>
        <Paper elevation={3} className="p-4">
          <Typography variant="h5" gutterBottom>
            Free Fall Motion Simulator
          </Typography>
          <Typography variant="body2" className="mb-4 text-gray-600">
            Explore how objects fall under gravity's influence. This simulation helps visualize key concepts in physics like gravity, air resistance, and energy conservation.
          </Typography>
        </Paper>
      </Grid>

      <Grid {...{ item: true, xs: 12, md: 8 }}>
        <Paper 
          elevation={3} 
          sx={{
            height: '500px',
            width: '100%',
            minWidth: '600px', // Add minimum width to prevent container from being too narrow
            position: 'relative',
            overflow: 'hidden',
            padding: 0,
            '& canvas': { display: 'block' },
            backgroundColor: '#f0f0f0', // Add explicit background color
            border: '1px solid #ccc', // Add border to help visualize the container
            boxSizing: 'border-box' // Ensure padding and border are included in dimensions
          }}
          id="free-fall-simulation-container"
        >
          {/* Animation container with fixed dimensions */}
          <Box 
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              display: 'block', // Ensure box is displayed as block
              backgroundColor: '#f0f0f0' // Ensure background color is visible
            }}
            id="free-fall-scene-box"
          >
            <FreeFallScene
              {...controls}
              isPlaying={isPlaying}
              onDataUpdate={handleDataUpdate}
            />
          </Box>
          
          {/* Controls overlay */}
          <Box 
            sx={{
              position: 'absolute',
              bottom: '16px',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              zIndex: 10
            }}
          >
            <Tooltip title={isPlaying ? "Pause Simulation" : "Start Simulation"}>
              <IconButton 
                onClick={handlePlayPause} 
                size="large"
                sx={{ bgcolor: 'rgba(255,255,255,0.7)', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
              >
                {isPlaying ? <Pause /> : <PlayArrow />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Reset Simulation">
              <IconButton 
                onClick={handleReset} 
                size="large"
                sx={{ bgcolor: 'rgba(255,255,255,0.7)', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
              >
                <Refresh />
              </IconButton>
            </Tooltip>
          </Box>
        </Paper>
      </Grid>

      <Grid {...{ item: true, xs: 12, md: 4 }}>
        <Paper elevation={3} className="p-4">
          <Typography variant="h6" gutterBottom>
            Quick Tips
          </Typography>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Use the controls to adjust the object's properties</li>
            <li>• Watch the graphs to understand motion patterns</li>
            <li>• Toggle air resistance to see its effects</li>
            <li>• Click and drag to rotate the 3D view</li>
            <li>• Scroll to zoom in/out</li>
          </ul>
        </Paper>
      </Grid>

      <Grid {...{ item: true, xs: 12, md: 8 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Simulation Controls
            <Tooltip title={explanations.controls.initialHeight}>
              <IconButton size="small" sx={{ ml: 1 }}>
                <Info fontSize="small" />
              </IconButton>
            </Tooltip>
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>
              Initial Height (m)
              <Tooltip title={educationalTooltips.initialHeight} placement="right">
                <Info fontSize="small" sx={{ ml: 1, verticalAlign: 'middle', cursor: 'help' }} />
              </Tooltip>
            </Typography>
            <Slider
              value={controls.initialHeight}
              onChange={(_: Event, value: number | number[]) => {
                if (typeof value === 'number') {
                  handleControlChange('initialHeight', value);
                }
              }}
              min={0}
              max={20}
              step={0.1}
              marks={[
                { value: 0, label: '0m' },
                { value: 20, label: '20m' }
              ]}
              valueLabelDisplay="auto"
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>
              Initial Velocity (m/s)
              <Tooltip title={educationalTooltips.initialVelocity} placement="right">
                <Info fontSize="small" sx={{ ml: 1, verticalAlign: 'middle', cursor: 'help' }} />
              </Tooltip>
            </Typography>
            <Slider
              value={controls.initialVelocity}
              onChange={(_: Event, value: number | number[]) => {
                if (typeof value === 'number') {
                  handleControlChange('initialVelocity', value);
                }
              }}
              min={-10}
              max={10}
              step={0.1}
              marks={[
                { value: -10, label: '-10m/s' },
                { value: 0, label: '0' },
                { value: 10, label: '10m/s' }
              ]}
              valueLabelDisplay="auto"
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>
              Gravity (m/s²)
              <Tooltip title={educationalTooltips.gravity} placement="right">
                <Info fontSize="small" sx={{ ml: 1, verticalAlign: 'middle', cursor: 'help' }} />
              </Tooltip>
            </Typography>
            <Slider
              value={controls.gravity}
              onChange={(_: Event, value: number | number[]) => {
                if (typeof value === 'number') {
                  handleControlChange('gravity', value);
                }
              }}
              min={0}
              max={20}
              step={0.01}
              marks={[
                { value: 1.62, label: 'Moon' },
                { value: 3.72, label: 'Mars' },
                { value: 9.81, label: 'Earth' }
              ]}
              valueLabelDisplay="auto"
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>
              Air Resistance
              <Tooltip title={educationalTooltips.airResistance} placement="right">
                <Info fontSize="small" sx={{ ml: 1, verticalAlign: 'middle', cursor: 'help' }} />
              </Tooltip>
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={controls.airResistance}
                  onChange={(e) => handleControlChange('airResistance', e.target.checked)}
                />
              }
              label="Air Resistance"
            />
            {controls.airResistance && (
              <Slider
                value={controls.dragCoefficient}
                onChange={(_: Event, value: number | number[]) => {
                  if (typeof value === 'number') {
                    handleControlChange('dragCoefficient', value);
                  }
                }}
                min={0}
                max={0.5}
                step={0.01}
                marks={[
                  { value: 0, label: '0' },
                  { value: 0.5, label: '0.5' }
                ]}
                valueLabelDisplay="auto"
              />
            )}
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Real-time Data
            <Tooltip title={explanations.realTimeData.time}>
              <IconButton size="small" sx={{ ml: 1 }}>
                <Info fontSize="small" />
              </IconButton>
            </Tooltip>
          </Typography>
          <Grid container spacing={2}>
            <Grid {...{ item: true, xs: 3 }}>
              <Typography variant="subtitle2">Time</Typography>
              <Typography>{simulationData.time.toFixed(2)} s</Typography>
            </Grid>
            <Grid {...{ item: true, xs: 3 }}>
              <Typography variant="subtitle2">Height</Typography>
              <Typography>{simulationData.position.y.toFixed(2)} m</Typography>
            </Grid>
            <Grid {...{ item: true, xs: 3 }}>
              <Typography variant="subtitle2">Velocity</Typography>
              <Typography>{simulationData.velocity.y.toFixed(2)} m/s</Typography>
            </Grid>
            <Grid {...{ item: true, xs: 3 }}>
              <Typography variant="subtitle2">Acceleration</Typography>
              <Typography>{simulationData.acceleration.y.toFixed(2)} m/s²</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid {...{ item: true, xs: 4 }}>
              <Typography variant="subtitle2">Kinetic Energy</Typography>
              <Typography>{simulationData.kineticEnergy.toFixed(2)} J</Typography>
            </Grid>
            <Grid {...{ item: true, xs: 4 }}>
              <Typography variant="subtitle2">Potential Energy</Typography>
              <Typography>{simulationData.potentialEnergy.toFixed(2)} J</Typography>
            </Grid>
            <Grid {...{ item: true, xs: 4 }}>
              <Typography variant="subtitle2">Total Energy</Typography>
              <Typography>
                {(simulationData.kineticEnergy + simulationData.potentialEnergy).toFixed(2)} J
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Motion Graphs
            <Tooltip title={explanations.graphs.heightVsTime}>
              <IconButton size="small" sx={{ ml: 1 }}>
                <Info fontSize="small" />
              </IconButton>
            </Tooltip>
          </Typography>
          <div className="section-header">
            <Typography variant="h6">Height vs Time</Typography>
            <Tooltip title={explanations.graphs.heightVsTime} arrow>
              <IconButton size="small">
                <Info fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
          <PhysicsGraphs
            positionData={graphData.position}
            velocityData={graphData.velocity}
            energyData={graphData.energy}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
