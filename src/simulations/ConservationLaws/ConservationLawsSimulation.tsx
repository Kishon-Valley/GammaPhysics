import React, { useState } from 'react';
import { ConservationLawsScene } from './ConservationLawsScene';
import { ConservationLawsControls } from './ConservationLawsControls';
import { Vector3 } from 'three';

export const ConservationLawsSimulation: React.FC = () => {
  // State for simulation parameters
  const [simulationType, setSimulationType] = useState<'collision' | 'pendulum' | 'rotation'>('collision');
  const [isPlaying, setIsPlaying] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);
  
  // Collision parameters
  const [mass1, setMass1] = useState(1);
  const [mass2, setMass2] = useState(1);
  const [velocity1, setVelocity1] = useState(5);
  const [velocity2, setVelocity2] = useState(0);
  const [elasticity, setElasticity] = useState(1); // 1 = perfectly elastic, 0 = inelastic
  
  // Pendulum parameters (for angular momentum)
  const [pendulumLength, setPendulumLength] = useState(5);
  const [pendulumMass, setPendulumMass] = useState(1);
  const [initialAngle, setInitialAngle] = useState(45);
  
  // Rotation parameters (for rotational energy)
  const [rotationMass, setRotationMass] = useState(1);
  const [rotationRadius, setRotationRadius] = useState(2);
  const [rotationSpeed, setRotationSpeed] = useState(2);
  
  // Data display state
  const [physicsData, setPhysicsData] = useState({
    time: 0,
    kineticEnergy: 0,
    potentialEnergy: 0,
    totalEnergy: 0,
    linearMomentum: new Vector3(),
    angularMomentum: new Vector3(),
  });

  // Handle play/pause
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle reset
  const handleReset = () => {
    setResetTrigger(prev => prev + 1);
    setIsPlaying(false);
  };

  // Handle data updates from the scene
  const handleDataUpdate = (data: any) => {
    setPhysicsData(data);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-4">
      <div className="w-full md:w-3/4 h-[500px] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <ConservationLawsScene 
          simulationType={simulationType}
          isPlaying={isPlaying}
          resetTrigger={resetTrigger}
          mass1={mass1}
          mass2={mass2}
          velocity1={velocity1}
          velocity2={velocity2}
          elasticity={elasticity}
          pendulumLength={pendulumLength}
          pendulumMass={pendulumMass}
          initialAngle={initialAngle}
          rotationMass={rotationMass}
          rotationRadius={rotationRadius}
          rotationSpeed={rotationSpeed}
          onDataUpdate={handleDataUpdate}
        />
      </div>
      
      <div className="w-full md:w-1/4">
        <ConservationLawsControls 
          simulationType={simulationType}
          setSimulationType={setSimulationType}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onReset={handleReset}
          mass1={mass1}
          setMass1={setMass1}
          mass2={mass2}
          setMass2={setMass2}
          velocity1={velocity1}
          setVelocity1={setVelocity1}
          velocity2={velocity2}
          setVelocity2={setVelocity2}
          elasticity={elasticity}
          setElasticity={setElasticity}
          pendulumLength={pendulumLength}
          setPendulumLength={setPendulumLength}
          pendulumMass={pendulumMass}
          setPendulumMass={setPendulumMass}
          initialAngle={initialAngle}
          setInitialAngle={setInitialAngle}
          rotationMass={rotationMass}
          setRotationMass={setRotationMass}
          rotationRadius={rotationRadius}
          setRotationRadius={setRotationRadius}
          rotationSpeed={rotationSpeed}
          setRotationSpeed={setRotationSpeed}
          physicsData={physicsData}
        />
      </div>
    </div>
  );
};

export default ConservationLawsSimulation;
