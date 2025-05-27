import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import { SimpleHarmonicMotion } from './SimpleHarmonicMotion';

interface OscillationsSceneProps {
  height: number;
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
  isPlaying: boolean;
  onDataUpdate: (data: any) => void;
  onParameterChange: (newParams: any) => void;
  showControls?: boolean;
}

export const OscillationsScene = ({ 
  height, 
  parameters, 
  isPlaying, 
  onDataUpdate, 
  onParameterChange,
  showControls = true 
}: OscillationsSceneProps) => {
  const [controlMode, setControlMode] = useState<'basic' | 'advanced'>('basic');

  return (
    <div className="relative">
      {/* Controls Overlay */}
      {showControls && (
        <div className="absolute top-4 left-4 z-10 p-4 w-72 rounded-lg shadow-md bg-white/90">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Simulation Controls</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setControlMode('basic')}
              className={`px-3 py-1 text-sm rounded-md ${
                controlMode === 'basic' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => setControlMode('advanced')}
              className={`px-3 py-1 text-sm rounded-md ${
                controlMode === 'advanced' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Advanced
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Oscillation Type Selection */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Oscillation Type
            </label>
            <select
              value={parameters.oscillationType}
              onChange={(e) => onParameterChange({ ...parameters, oscillationType: e.target.value })}
              className="p-2 w-full text-sm rounded-md border border-gray-300"
            >
              {controlMode === 'basic' ? (
                <option value="simple-pendulum">Simple Pendulum</option>
              ) : (
                <>
                  <option value="simple-harmonic">Simple Harmonic Motion</option>
                  <option value="damped">Damped Oscillations</option>
                  <option value="forced">Forced Oscillations</option>
                </>
              )}
            </select>
          </div>

          {/* Basic Controls */}
          {controlMode === 'basic' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Length</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={parameters.length}
                    onChange={(e) => onParameterChange({ ...parameters, length: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600">{parameters.length.toFixed(2)} m</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Initial Angle</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="-90"
                    max="90"
                    step="1"
                    value={parameters.angle}
                    onChange={(e) => onParameterChange({ ...parameters, angle: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600">{parameters.angle.toFixed(2)}°</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mass</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={parameters.mass}
                    onChange={(e) => onParameterChange({ ...parameters, mass: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600">{parameters.mass.toFixed(2)} kg</span>
                </div>
              </div>
            </>
          )}

          {/* Advanced Controls */}
          {controlMode === 'advanced' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mass</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={parameters.mass}
                    onChange={(e) => onParameterChange({ ...parameters, mass: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600">{parameters.mass.toFixed(2)} kg</span>
                </div>
              </div>

              {parameters.oscillationType !== 'simple-pendulum' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Spring Constant</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="0.5"
                      value={parameters.springConstant}
                      onChange={(e) => onParameterChange({ ...parameters, springConstant: parseFloat(e.target.value) })}
                      className="w-full"
                    />
                    <span className="text-sm text-gray-600">{parameters.springConstant.toFixed(2)} N/m</span>
                  </div>
                </div>
              )}

              {parameters.oscillationType === 'damped' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Damping Coefficient</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      value={parameters.dampingCoefficient}
                      onChange={(e) => onParameterChange({ ...parameters, dampingCoefficient: parseFloat(e.target.value) })}
                      className="w-full"
                    />
                    <span className="text-sm text-gray-600">{parameters.dampingCoefficient.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {parameters.oscillationType === 'forced' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Forcing Amplitude</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={parameters.forcingAmplitude}
                        onChange={(e) => onParameterChange({ ...parameters, forcingAmplitude: parseFloat(e.target.value) })}
                        className="w-full"
                      />
                      <span className="text-sm text-gray-600">{parameters.forcingAmplitude?.toFixed(2)} N</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Forcing Frequency</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={parameters.forcingFrequency}
                        onChange={(e) => onParameterChange({ ...parameters, forcingFrequency: parseFloat(e.target.value) })}
                        className="w-full"
                      />
                      <span className="text-sm text-gray-600">{parameters.forcingFrequency?.toFixed(2)} Hz</span>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Gravity</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="0.1"
                    value={parameters.gravity}
                    onChange={(e) => onParameterChange({ ...parameters, gravity: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600">{parameters.gravity.toFixed(2)} m/s²</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      )}

      {/* Existing Canvas */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ height: height }}
        className="bg-gray-900"
      >
        <color attach="background" args={['#111827']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />

        {/* Grid and axes */}
        <gridHelper args={[20, 20, '#e2e8f0', '#e2e8f0']} position={[0, -5, 0]} />
        
        {(parameters.oscillationType === 'simple-pendulum' || parameters.oscillationType === 'damped') ? (
          <Pendulum
            parameters={parameters}
            isPlaying={isPlaying}
            onDataUpdate={onDataUpdate}
          />
        ) : parameters.oscillationType === 'simple-harmonic' ? (
          <SimpleHarmonicMotion
            parameters={parameters}
            isPlaying={isPlaying}
            onDataUpdate={onDataUpdate}
          />
        ) : parameters.oscillationType === 'forced' ? (
          <Pendulum
            parameters={parameters}
            isPlaying={isPlaying}
            onDataUpdate={onDataUpdate}
          />
        ) : null}

        <OrbitControls enablePan={false} maxDistance={20} minDistance={5} />
      </Canvas>
    </div>
  );
};

interface PendulumProps {
  parameters: {
    length: number;
    angle: number;
    mass: number;
    oscillationType: 'simple-pendulum' | 'damped' | 'simple-harmonic' | 'forced';
    springConstant: number;
    dampingCoefficient: number;
    forcingAmplitude?: number;
    forcingFrequency?: number;
    gravity: number;
  };
  isPlaying: boolean;
  onDataUpdate: (data: any) => void;
}

function Pendulum({ parameters, isPlaying, onDataUpdate }: PendulumProps) {
  const pendulumRef = useRef<THREE.Group>(null);
  const bobRef = useRef<THREE.Mesh>(null);
  const stringRef = useRef<THREE.Line>(null);
  const timeRef = useRef<number>(0);
  const trailPoints = useRef<THREE.Vector3[]>([]);
  const [velocity, setVelocity] = useState(0);
  const angularVelocityRef = useRef<number>(0);
  const angleRef = useRef<number>(parameters.angle * (Math.PI / 180));

  // Reset time and position when parameters change
  useEffect(() => {
    timeRef.current = 0;
    trailPoints.current = [];
    angleRef.current = parameters.angle * (Math.PI / 180);
    angularVelocityRef.current = 0;
    if (pendulumRef.current) {
      pendulumRef.current.rotation.z = angleRef.current;
    }
  }, [parameters.angle, parameters.length, parameters.mass, parameters.oscillationType]);

  useFrame((_, delta) => {
    if (!isPlaying || !pendulumRef.current) return;

    timeRef.current += delta;
    const g = parameters.gravity;
    const L = parameters.length;
    let currentAngle = angleRef.current;
    let angularVelocity = angularVelocityRef.current;

    // Calculate new angle and angular velocity based on oscillation type
    if (parameters.oscillationType === 'simple-pendulum') {
      // Full nonlinear pendulum equation: d²θ/dt² = -(g/L)sin(θ)
      const acceleration = -(g / L) * Math.sin(currentAngle);
      angularVelocity += acceleration * delta;
      currentAngle += angularVelocity * delta;
    } else if (parameters.oscillationType === 'damped') {
      // Damped oscillation: d²θ/dt² = -(g/L)sin(θ) - (c/m)dθ/dt
      const damping = parameters.dampingCoefficient / parameters.mass;
      
      // Calculate acceleration for damped pendulum
      // Use full nonlinear pendulum with damping
      const acceleration = -(g / L) * Math.sin(currentAngle) - damping * angularVelocity;
      
      // Update angular velocity and angle
      angularVelocity += acceleration * delta;
      currentAngle += angularVelocity * delta;
    } else if (parameters.oscillationType === 'forced') {
      // Forced oscillation: d²θ/dt² = -(g/L)sin(θ) - (c/m)dθ/dt + (F/mL)cos(ωt)
      const damping = parameters.dampingCoefficient / parameters.mass;
      const forcing = (parameters.forcingAmplitude || 0) / (parameters.mass * L);
      const frequency = parameters.forcingFrequency || 1;
      const forcingTerm = forcing * Math.cos(2 * Math.PI * frequency * timeRef.current);
      const acceleration = -(g / L) * Math.sin(currentAngle) - damping * angularVelocity + forcingTerm;
      angularVelocity += acceleration * delta;
      currentAngle += angularVelocity * delta;
    }

    // Update refs
    angleRef.current = currentAngle;
    angularVelocityRef.current = angularVelocity;
    pendulumRef.current.rotation.z = currentAngle;

    // Calculate velocity and energies
    const linearVelocity = L * angularVelocity;
    setVelocity(Math.abs(linearVelocity));

    // Calculate energies
    const mass = parameters.mass;
    const height = L * (1 - Math.cos(currentAngle));
    const kineticEnergy = 0.5 * mass * Math.pow(linearVelocity, 2);
    let potentialEnergy = mass * g * height;
    
    // Add spring potential energy for spring-based oscillations
    if (parameters.oscillationType === 'simple-harmonic' || 
        parameters.oscillationType === 'damped' || 
        parameters.oscillationType === 'forced') {
      const springPotential = 0.5 * parameters.springConstant * Math.pow(currentAngle, 2);
      potentialEnergy += springPotential;
    }
    
    // Calculate total energy
    const totalEnergy = kineticEnergy + potentialEnergy;
    
    // For damped oscillations, we should see energy dissipation over time
    // This is a visual representation of the damping effect

    // Update trail
    const bobPosition = new THREE.Vector3(
      L * Math.sin(currentAngle),
      -L * Math.cos(currentAngle),
      0
    );
    if (trailPoints.current.length > 50) {
      trailPoints.current.shift();
    }
    trailPoints.current.push(bobPosition);

    // Update data
    onDataUpdate({
      currentAngle: currentAngle * (180/Math.PI),
      currentVelocity: linearVelocity,
      kineticEnergy,
      potentialEnergy,
      totalEnergy
    });
  });

  return (
    <>
      {/* Static mounting bar */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Perpendicular Reference Line */}
      <primitive object={new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, -5, 0)
        ]),
        new THREE.LineDashedMaterial({ 
          color: '#3b82f6',
          dashSize: 0.15,    
          gapSize: 0.1,      
          linewidth: 2,      
          opacity: 0.8,      
          transparent: true   
        })
      )} />

      {/* Static Dotted Line to Angle Label */}
      <primitive object={new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0.5 * Math.sin(parameters.angle * Math.PI/180), 
                          -0.5 * Math.cos(parameters.angle * Math.PI/180), 0),
          new THREE.Vector3(2.0, -0.5, 0)
        ]),
        new THREE.LineDashedMaterial({ 
          color: '#ff4444', 
          dashSize: 0.2, 
          gapSize: 0.2,
          linewidth: 1 
        })
      )} />

      {/* Static Angle Label */}
      <Html position={[2.0, -0.5, 0]}>
        <div style={{ 
          background: 'rgba(0,0,0,0.7)', 
          color: '#ff4444', 
          padding: '4px 8px', 
          borderRadius: '4px',
          fontSize: '14px',
          whiteSpace: 'nowrap'
        }}>
          Angle: {Math.abs(parameters.angle).toFixed(2)}°
        </div>
      </Html>

      {/* Trail */}
      <primitive object={new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(trailPoints.current),
        new THREE.LineBasicMaterial({ 
          color: '#3b82f6',
          opacity: 0.5,
          transparent: true 
        })
      )} />

      {/* Pendulum Group */}
      <group ref={pendulumRef}>
        {/* String */}
        <primitive object={new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, -parameters.length, 0)
          ]),
          new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 5 })
        )} ref={stringRef} />

        {/* Angle Arc */}
        <primitive object={new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(
            Array.from({ length: 32 }).map((_, i) => {
              const angle = (i / 31) * parameters.angle * (Math.PI / 180);
              return new THREE.Vector3(
                0.5 * Math.sin(angle),
                -0.5 * Math.cos(angle),
                0
              );
            })
          ),
          new THREE.LineBasicMaterial({ color: '#ff4444', linewidth: 2 })
        )} />
        
        {/* Damping Indicator - only visible in damped oscillation mode */}
        {parameters.oscillationType === 'damped' && parameters.dampingCoefficient > 0 && (
          <group>
            {/* Damping coefficient visualization */}
            <mesh position={[1.2, -parameters.length/2, 0]}>
              <boxGeometry args={[0.1, parameters.dampingCoefficient * 0.5 + 0.1, 0.1]} />
              <meshStandardMaterial color="#4682B4" />
            </mesh>
            
            {/* Damping label */}
            <Html position={[1.5, -parameters.length/2, 0]}>
              <div style={{ 
                background: 'rgba(0,0,0,0.7)', 
                color: '#4682B4', 
                padding: '4px 8px', 
                borderRadius: '4px',
                fontSize: '14px',
                whiteSpace: 'nowrap'
              }}>
                Damping: {parameters.dampingCoefficient.toFixed(2)}
              </div>
            </Html>
          </group>
        )}

        {/* Bob */}
        <mesh ref={bobRef} position={[0, -parameters.length, 0]} castShadow>
          <sphereGeometry args={[0.2 * Math.pow(parameters.mass, 1/3)]} />
          <meshStandardMaterial 
            color={parameters.oscillationType === 'damped' ? '#FF6347' : '#3b82f6'}
            metalness={0.6}
            roughness={0.3}
            envMapIntensity={0.8}
          />
        </mesh>

        {/* Other Labels */}
        <Html position={[2.5, -parameters.length/2, 0]}>
          <div style={{ 
            background: 'rgba(0,0,0,0.7)', 
            color: '#22c55e', 
            padding: '4px 8px', 
            borderRadius: '4px',
            fontSize: '14px',
            whiteSpace: 'nowrap'
          }}>
            Length: {parameters.length.toFixed(2)}m
          </div>
        </Html>

        <Html position={[-2.5, -parameters.length, 0]}>
          <div style={{ 
            background: 'rgba(0,0,0,0.7)', 
            color: '#ffa500', 
            padding: '4px 8px', 
            borderRadius: '4px',
            fontSize: '14px',
            whiteSpace: 'nowrap'
          }}>
            Mass: {parameters.mass.toFixed(2)}kg
          </div>
        </Html>

        <Html position={[0, -parameters.length - 2.0, 0]}>
          <div style={{ 
            background: 'rgba(0,0,0,0.7)', 
            color: '#4444ff', 
            padding: '4px 8px', 
            borderRadius: '4px',
            fontSize: '14px',
            whiteSpace: 'nowrap'
          }}>
            Velocity: {velocity.toFixed(2)} m/s
          </div>
        </Html>
      </group>
    </>
  );
}