import React from 'react';
import { Vector3 } from 'three';

interface ConservationLawsControlsProps {
  simulationType: 'collision' | 'pendulum' | 'rotation';
  setSimulationType: (type: 'collision' | 'pendulum' | 'rotation') => void;
  isPlaying: boolean;
  onPlayPause: () => void;
  onReset: () => void;
  
  // Collision parameters
  mass1: number;
  setMass1: (mass: number) => void;
  mass2: number;
  setMass2: (mass: number) => void;
  velocity1: number;
  setVelocity1: (velocity: number) => void;
  velocity2: number;
  setVelocity2: (velocity: number) => void;
  elasticity: number;
  setElasticity: (elasticity: number) => void;
  
  // Pendulum parameters
  pendulumLength: number;
  setPendulumLength: (length: number) => void;
  pendulumMass: number;
  setPendulumMass: (mass: number) => void;
  initialAngle: number;
  setInitialAngle: (angle: number) => void;
  
  // Rotation parameters
  rotationMass: number;
  setRotationMass: (mass: number) => void;
  rotationRadius: number;
  setRotationRadius: (radius: number) => void;
  rotationSpeed: number;
  setRotationSpeed: (speed: number) => void;
  
  // Physics data
  physicsData: {
    time: number;
    kineticEnergy: number;
    potentialEnergy: number;
    totalEnergy: number;
    linearMomentum: Vector3;
    angularMomentum: Vector3;
  };
}

export const ConservationLawsControls: React.FC<ConservationLawsControlsProps> = ({
  simulationType,
  setSimulationType,
  isPlaying,
  onPlayPause,
  onReset,
  mass1,
  setMass1,
  mass2,
  setMass2,
  velocity1,
  setVelocity1,
  velocity2,
  setVelocity2,
  elasticity,
  setElasticity,
  pendulumLength,
  setPendulumLength,
  pendulumMass,
  setPendulumMass,
  initialAngle,
  setInitialAngle,
  rotationMass,
  setRotationMass,
  rotationRadius,
  setRotationRadius,
  rotationSpeed,
  setRotationSpeed,
  physicsData
}) => {
  
  // Format numbers to 2 decimal places
  const formatNumber = (num: number) => {
    return Number(num.toFixed(2));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Conservation Laws</h2>
      
      {/* Simulation Type Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Simulation Type
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              simulationType === 'collision'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setSimulationType('collision')}
          >
            Collision
          </button>
          <button
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              simulationType === 'pendulum'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setSimulationType('pendulum')}
          >
            Pendulum
          </button>
          <button
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              simulationType === 'rotation'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setSimulationType('rotation')}
          >
            Rotation
          </button>
        </div>
      </div>
      
      {/* Playback Controls */}
      <div className="flex justify-between mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            isPlaying
              ? 'bg-yellow-500 hover:bg-yellow-600'
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
          onClick={onPlayPause}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
      
      {/* Simulation-specific controls */}
      {simulationType === 'collision' && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg dark:text-white">Collision Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mass 1 (kg): {mass1}
            </label>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={mass1}
              onChange={(e) => setMass1(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mass 2 (kg): {mass2}
            </label>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={mass2}
              onChange={(e) => setMass2(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Velocity 1 (m/s): {velocity1}
            </label>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={velocity1}
              onChange={(e) => setVelocity1(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Velocity 2 (m/s): {velocity2}
            </label>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={velocity2}
              onChange={(e) => setVelocity2(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Elasticity: {elasticity} {elasticity === 1 ? '(Elastic)' : elasticity === 0 ? '(Inelastic)' : ''}
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={elasticity}
              onChange={(e) => setElasticity(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}
      
      {simulationType === 'pendulum' && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg dark:text-white">Pendulum Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Length (m): {pendulumLength}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={pendulumLength}
              onChange={(e) => setPendulumLength(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mass (kg): {pendulumMass}
            </label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={pendulumMass}
              onChange={(e) => setPendulumMass(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Initial Angle (degrees): {initialAngle}
            </label>
            <input
              type="range"
              min="0"
              max="90"
              step="1"
              value={initialAngle}
              onChange={(e) => setInitialAngle(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}
      
      {simulationType === 'rotation' && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg dark:text-white">Rotation Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mass (kg): {rotationMass}
            </label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={rotationMass}
              onChange={(e) => setRotationMass(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Radius (m): {rotationRadius}
            </label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={rotationRadius}
              onChange={(e) => setRotationRadius(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Angular Speed (rad/s): {rotationSpeed}
            </label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={rotationSpeed}
              onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}
      
      {/* Physics Data Display */}
      <div className="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
        <h3 className="font-semibold text-lg mb-2 dark:text-white">Physics Data</h3>
        <div className="space-y-1 text-sm dark:text-gray-200">
          <p>Time: {formatNumber(physicsData.time)} s</p>
          <p>Kinetic Energy: {formatNumber(physicsData.kineticEnergy)} J</p>
          <p>Potential Energy: {formatNumber(physicsData.potentialEnergy)} J</p>
          <p>Total Energy: {formatNumber(physicsData.totalEnergy)} J</p>
          <p>Linear Momentum: [{formatNumber(physicsData.linearMomentum.x)}, {formatNumber(physicsData.linearMomentum.y)}, {formatNumber(physicsData.linearMomentum.z)}] kg·m/s</p>
          <p>Angular Momentum: [{formatNumber(physicsData.angularMomentum.x)}, {formatNumber(physicsData.angularMomentum.y)}, {formatNumber(physicsData.angularMomentum.z)}] kg·m²/s</p>
        </div>
      </div>
    </div>
  );
};

export default ConservationLawsControls;
