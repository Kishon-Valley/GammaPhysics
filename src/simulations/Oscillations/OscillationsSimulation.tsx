import { useState, useRef } from 'react';
import { OscillationsScene } from './OscillationsScene';
import { OscillationsDashboard } from './OscillationsDashboard';

export const OscillationsSimulation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [parameters, setParameters] = useState({
    oscillationType: 'simple-pendulum' as 'simple-pendulum' | 'damped' | 'simple-harmonic' | 'forced',
    mass: 1.0,
    springConstant: 10.0,
    dampingCoefficient: 0.5,
    forcingAmplitude: 1.0,
    forcingFrequency: 0.5,
    length: 1.0,
    angle: 15,
    gravity: 9.81,
  });

  const [simulationData, setSimulationData] = useState({
    currentAngle: 0,
    currentVelocity: 0,
    kineticEnergy: 0,
    potentialEnergy: 0,
    totalEnergy: 0,
  });

  const [timeSeriesData, setTimeSeriesData] = useState<{
    time: number[];
    angle: number[];
    velocity: number[];
    energy: {
      kinetic: number[];
      potential: number[];
      total: number[];
    };
  }>({
    time: [],
    angle: [],
    velocity: [],
    energy: {
      kinetic: [],
      potential: [],
      total: []
    }
  });

  const [showControls, setShowControls] = useState(true);

  const timeRef = useRef<number>(0);

  const handleDataUpdate = (newData: any) => {
    timeRef.current += 0.016; // Increment time step
    setSimulationData(newData);
    setTimeSeriesData(prevData => ({
      time: [...prevData.time, timeRef.current],
      angle: [...prevData.angle, newData.currentAngle],
      velocity: [...prevData.velocity, newData.currentVelocity],
      energy: {
        kinetic: [...prevData.energy.kinetic, newData.kineticEnergy],
        potential: [...prevData.energy.potential, newData.potentialEnergy],
        total: [...prevData.energy.total, newData.totalEnergy]
      }
    }));
  };

  const handleReset = () => {
    setIsPlaying(false);
    timeRef.current = 0;
    setTimeSeriesData({
      time: [],
      angle: [],
      velocity: [],
      energy: {
        kinetic: [],
        potential: [],
        total: []
      }
    });
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Oscillations Simulation</h2>
        <p className="mt-2 text-gray-600">
          Explore different types of oscillations: simple harmonic motion, damped oscillations, and forced oscillations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <div className="flex space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset
              </button>
              <button
                onClick={() => setShowControls(!showControls)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {showControls ? 'Hide Controls' : 'Show Controls'}
              </button>
            </div>
          </div>

          <OscillationsScene
            height={600}
            parameters={parameters}
            isPlaying={isPlaying}
            onDataUpdate={handleDataUpdate}
            onParameterChange={setParameters}
            showControls={showControls}
          />
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <OscillationsDashboard
            data={{
              currentAngle: simulationData.currentAngle,
              currentVelocity: simulationData.currentVelocity,
              kineticEnergy: simulationData.kineticEnergy,
              potentialEnergy: simulationData.potentialEnergy,
              totalEnergy: simulationData.totalEnergy
            }}
            parameters={parameters}
            timeSeriesData={timeSeriesData}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};