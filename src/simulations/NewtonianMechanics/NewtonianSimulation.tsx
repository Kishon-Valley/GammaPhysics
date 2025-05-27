import { useState } from 'react';
import { Vector3 } from 'three';
import { NewtonianScene } from './NewtonianScene';
import { NewtonianControls } from './NewtonianControls';
import { NewtonianDashboard } from './NewtonianDashboard';

export const NewtonianSimulation = () => {
  const [parameters, setParameters] = useState({
    mass: 1.0,
    initialVelocity: new Vector3(2, 5, 0),
    gravity: 9.81,  // Standard acceleration due to gravity on Earth
    friction: 0.1,
  });

  const [simulationData, setSimulationData] = useState({
    position: new Vector3(),
    velocity: new Vector3(),
    acceleration: new Vector3(),
    kineticEnergy: 0,
    potentialEnergy: 0,
    forces: [] as { type: string; magnitude: number; direction: Vector3; }[]
  });

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Newtonian Mechanics Simulation</h2>
        <p className="mt-2 text-gray-600">
          Explore the fundamental principles of motion and forces in 3D space.
          Adjust parameters and observe how they affect the object's behavior.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="bg-white rounded-lg shadow lg:col-span-3">
          <NewtonianScene
            width={800}
            height={600}
            parameters={parameters}
            onDataUpdate={setSimulationData}
          />
        </div>

        <div className="space-y-6">
          <NewtonianControls
            parameters={parameters}
            onParameterChange={setParameters}
          />
          <NewtonianDashboard data={simulationData} />
        </div>
      </div>

      <div className="p-4 mt-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-medium text-blue-900">Learning Points</h3>
        <ul className="mt-2 space-y-2 text-blue-800">
          <li>• Newton's First Law: Objects maintain their velocity unless acted upon by a force</li>
          <li>• Newton's Second Law: Force equals mass times acceleration (F = ma)</li>
          <li>• Conservation of Energy: Total mechanical energy (kinetic + potential) remains constant in absence of friction</li>
          <li>• Effects of Air Resistance: How friction affects motion and energy dissipation</li>
        </ul>
      </div>
    </div>
  );
};
