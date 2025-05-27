import { Vector3 } from 'three';

interface NewtonianDashboardProps {
  data: {
    position: Vector3;
    velocity: Vector3;
    acceleration: Vector3;
    kineticEnergy: number;
    potentialEnergy: number;
    forces: {
      type: string;
      magnitude: number;
      direction: Vector3;
    }[];
  };
}

export const NewtonianDashboard = ({ data }: NewtonianDashboardProps) => {
  const formatVector = (vector: Vector3) => 
    `(${vector.x.toFixed(2)}, ${vector.y.toFixed(2)}, ${vector.z.toFixed(2)})`;

  const DataRow = ({ 
    label, 
    value, 
    tooltip 
  }: { 
    label: string; 
    value: string | number;
    tooltip?: string;
  }) => (
    <div className="grid relative grid-cols-2 gap-4 py-2 border-b border-gray-100 group">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <span className="text-sm text-gray-900">{value}</span>
      {tooltip && (
        <div className="absolute -top-1 left-full invisible z-10 p-2 ml-2 w-48 text-xs text-white bg-gray-800 rounded shadow-lg group-hover:visible">
          {tooltip}
        </div>
      )}
    </div>
  );

  const ForceSection = () => (
    <div className="mt-4">
      <h4 className="mb-2 text-sm font-medium text-gray-700">Forces</h4>
      {data.forces.map((force, index) => (
        <div key={index} className="mb-2 ml-2">
          <DataRow
            label={`${force.type.charAt(0).toUpperCase() + force.type.slice(1)} Force`}
            value={`${force.magnitude.toFixed(2)} N`}
            tooltip={`Direction: ${formatVector(force.direction)}`}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-lg font-medium">Real-Time Data</h3>
      <p className="mb-4 text-sm text-gray-600">
        Watch how the object's motion properties change in real-time. These values help understand the physics principles in action.
      </p>
      
      <div className="space-y-1">
        <DataRow 
          label="Position (m)" 
          value={formatVector(data.position)}
          tooltip="Where the object is in space: X (left/right), Y (up/down), Z (forward/backward). Measured in meters from the starting point."
        />
        <DataRow 
          label="Velocity (m/s)" 
          value={formatVector(data.velocity)}
          tooltip="How fast and in what direction the object is moving. Bigger numbers mean faster motion in that direction."
        />
        <DataRow 
          label="Acceleration (m/s²)" 
          value={formatVector(data.acceleration)}
          tooltip="How quickly the velocity is changing. For example, gravity causes a constant downward acceleration of 9.81 m/s²."
        />
        <DataRow 
          label="Kinetic Energy (J)" 
          value={data.kineticEnergy.toFixed(2)}
          tooltip="Energy of motion - increases with speed and mass. A fast or heavy object has more kinetic energy."
        />
        <DataRow 
          label="Potential Energy (J)" 
          value={data.potentialEnergy.toFixed(2)}
          tooltip="Stored energy due to height - increases as the object goes higher. Like a ball being lifted has stored energy."
        />
        <DataRow 
          label="Total Energy (J)" 
          value={(data.kineticEnergy + data.potentialEnergy).toFixed(2)}
          tooltip="Total energy in the system (Kinetic + Potential). In an ideal system, this stays constant as energy converts between forms."
        />
      </div>

      <ForceSection />
    </div>
  );
};
