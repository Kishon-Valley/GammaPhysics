import { OscillationsGraphs } from './OscillationsGraphs';

interface OscillationsDashboardProps {
  data: {
    currentAngle: number;
    currentVelocity: number;
    kineticEnergy: number;
    potentialEnergy: number;
    totalEnergy: number;
  };
  parameters: {
    oscillationType: 'simple-pendulum' | 'damped' | 'simple-harmonic' | 'forced';
    mass: number;
    springConstant: number;
    dampingCoefficient: number;
    forcingAmplitude?: number;
    forcingFrequency?: number;
    length: number;
    angle: number;
    gravity: number;
  };
  timeSeriesData: any;
  height: number;
}

export const OscillationsDashboard = ({ data, parameters, timeSeriesData, height }: OscillationsDashboardProps) => {
  const formatScalar = (value: number | undefined) => {
    if (value === undefined) return '0.00';
    return value.toFixed(2);
  };

  // Calculate damping ratio for damped oscillations
  const calculateDampingRatio = () => {
    if (parameters.oscillationType !== 'damped') return null;
    
    // Damping ratio ζ = c / (2 * sqrt(k * m))
    const criticalDamping = 2 * Math.sqrt(parameters.springConstant * parameters.mass);
    const dampingRatio = parameters.dampingCoefficient / criticalDamping;
    
    return {
      ratio: dampingRatio,
      type: dampingRatio < 1 ? 'Underdamped' : dampingRatio > 1 ? 'Overdamped' : 'Critically Damped'
    };
  };
  
  const dampingInfo = calculateDampingRatio();

  return (
    <div className="flex flex-col p-4 space-y-4">
      {/* Graphs section */}
      <OscillationsGraphs 
        data={timeSeriesData}
        height={height} 
      />
      
      {/* Data Display */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-lg font-semibold">Real-time Data</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Current Angle: {formatScalar(data.currentAngle)}°</p>
            <p className="text-sm text-gray-600">Current Velocity: {formatScalar(data.currentVelocity)} m/s</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Kinetic Energy: {formatScalar(data.kineticEnergy)} J</p>
            <p className="text-sm text-gray-600">Potential Energy: {formatScalar(data.potentialEnergy)} J</p>
            <p className="text-sm text-gray-600">Total Energy: {formatScalar(data.totalEnergy)} J</p>
          </div>
        </div>
      </div>
      
      {/* Educational information for damped oscillations */}
      {parameters.oscillationType === 'damped' && (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Damped Oscillation Physics</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              Damped oscillations occur when a resistive force (like friction or air resistance) 
              acts against the motion, causing energy to dissipate over time.
            </p>
            <p>
              <strong>Equation of motion:</strong> m(d²x/dt²) + c(dx/dt) + kx = 0
            </p>
            <p>
              <strong>Damping ratio (ζ):</strong> {dampingInfo?.ratio.toFixed(3) || '0'} 
              ({dampingInfo?.type})
            </p>
            <p>
              <strong>Current damping coefficient:</strong> {parameters.dampingCoefficient.toFixed(2)}
            </p>
            
            {dampingInfo && (
              <div className="mt-2">
                <p><strong>System behavior:</strong></p>
                {dampingInfo.ratio < 1 && (
                  <p>The system oscillates with gradually decreasing amplitude (underdamped).</p>
                )}
                {dampingInfo.ratio === 1 && (
                  <p>The system returns to equilibrium without oscillating in the minimum possible time (critically damped).</p>
                )}
                {dampingInfo.ratio > 1 && (
                  <p>The system returns to equilibrium without oscillating, but more slowly than the critical case (overdamped).</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};