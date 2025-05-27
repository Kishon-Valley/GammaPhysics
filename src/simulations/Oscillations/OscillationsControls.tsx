import React from 'react';
import './OscillationsControls.css';

interface OscillationsControlsProps {
  parameters: {
    oscillationType: 'simple-pendulum' | 'damped' | 'simple-harmonic' | 'forced';
    length: number;
    angle: number;
    mass: number;
    springConstant: number;
    dampingCoefficient: number;
    forcingAmplitude?: number;
    forcingFrequency?: number;
    gravity: number;
  };
  controlMode: 'basic' | 'advanced';
  onParameterChange: (params: any) => void;
  onControlModeChange: (mode: 'basic' | 'advanced') => void;
}

export const OscillationsControls: React.FC<OscillationsControlsProps> = ({ 
  parameters, 
  controlMode, 
  onParameterChange,
  onControlModeChange 
}) => {
  const handleChange = (name: string, value: number | string) => {
    onParameterChange({
      ...parameters,
      [name]: value
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <button 
          className={`px-4 py-2 text-sm font-medium ${controlMode === 'basic' ? 'text-blue-700 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'} rounded-md`}
          onClick={() => onControlModeChange('basic')}
        >
          Basic Controls
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${controlMode === 'advanced' ? 'text-blue-700 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'} rounded-md`}
          onClick={() => onControlModeChange('advanced')}
        >
          Advanced Controls
        </button>
      </div>
      
      {/* Oscillation Type Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Oscillation Type</label>
        <select
          value={parameters.oscillationType}
          onChange={(e) => handleChange('oscillationType', e.target.value)}
          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="simple-pendulum">Simple Pendulum</option>
          <option value="damped">Damped Oscillations</option>
          <option value="simple-harmonic">Simple Harmonic Motion</option>
          <option value="forced">Forced Oscillations</option>
        </select>
      </div>

      {/* Basic controls shown for all modes */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Mass</label>
            <span className="text-sm text-gray-500">{parameters.mass.toFixed(2)} kg</span>
          </div>
          <input
            type="range"
            min={0.1}
            max={5.0}
            step={0.01}
            value={parameters.mass}
            onChange={(e) => handleChange('mass', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Show length control for pendulum types */}
        {(parameters.oscillationType === 'simple-pendulum' || 
          parameters.oscillationType === 'damped') && (
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-700">Length</label>
              <span className="text-sm text-gray-500">{parameters.length.toFixed(2)} m</span>
            </div>
            <input
              type="range"
              min={0.1}
              max={5.0}
              step={0.01}
              value={parameters.length}
              onChange={(e) => handleChange('length', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}

        {/* Show angle control for pendulum types */}
        {(parameters.oscillationType === 'simple-pendulum' || 
          parameters.oscillationType === 'damped') && (
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-700">Initial Angle</label>
              <span className="text-sm text-gray-500">{parameters.angle.toFixed(2)}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={90}
              step={1}
              value={parameters.angle}
              onChange={(e) => handleChange('angle', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Mass</label>
            <span className="text-sm text-gray-500">{parameters.mass.toFixed(2)} kg</span>
          </div>
          <input
            type="range"
            min={0.1}
            max={10.0}
            step={0.01}
            value={parameters.mass}
            onChange={(e) => handleChange('mass', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Spring constant control for spring-based oscillations */}
      {(parameters.oscillationType === 'simple-harmonic' || 
        parameters.oscillationType === 'damped' || 
        parameters.oscillationType === 'forced') && (
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Spring Constant</label>
            <span className="text-sm text-gray-500">{parameters.springConstant.toFixed(2)} N/m</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            step={0.1}
            value={parameters.springConstant}
            onChange={(e) => handleChange('springConstant', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      )}

      {/* Gravity control */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <label className="text-sm font-medium text-gray-700">Gravity</label>
          <span className="text-sm text-gray-500">{parameters.gravity.toFixed(2)} m/s²</span>
        </div>
        <input
          type="range"
          min={0}
          max={20}
          step={0.01}
          value={parameters.gravity}
          onChange={(e) => handleChange('gravity', parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Damping coefficient for damped oscillations - always visible when in damped mode */}
      {parameters.oscillationType === 'damped' && (
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Damping Coefficient</label>
            <span className="text-sm text-gray-500">{parameters.dampingCoefficient.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={5}
            step={0.01}
            value={parameters.dampingCoefficient}
            onChange={(e) => handleChange('dampingCoefficient', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      )}
      
      {/* Advanced mode controls */}
      {controlMode === 'advanced' && (
        <>
          {/* Damping coefficient for forced oscillations only */}
          {parameters.oscillationType === 'forced' && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-700">Damping Coefficient</label>
                <span className="text-sm text-gray-500">{parameters.dampingCoefficient.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={5}
                step={0.01}
                value={parameters.dampingCoefficient}
                onChange={(e) => handleChange('dampingCoefficient', parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          )}

          {/* Forcing parameters for forced oscillations */}
          {parameters.oscillationType === 'forced' && (
            <>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">Forcing Amplitude</label>
                  <span className="text-sm text-gray-500">{parameters.forcingAmplitude?.toFixed(2) || '0.00'}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.1}
                  value={parameters.forcingAmplitude || 0}
                  onChange={(e) => handleChange('forcingAmplitude', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">Forcing Frequency</label>
                  <span className="text-sm text-gray-500">{parameters.forcingFrequency?.toFixed(2) || '0.00'} Hz</span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={5}
                  step={0.1}
                  value={parameters.forcingFrequency || 0.5}
                  onChange={(e) => handleChange('forcingFrequency', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};