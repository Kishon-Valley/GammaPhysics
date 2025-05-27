export interface Topic {
  id: string;
  title: string;
  description: string;
  simulationAvailable: boolean;
  simulationPath?: string;
  image: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Simulation {
  id: string;
  title: string;
  description: string;
  type: 'pendulum' | 'spring' | 'wave' | 'projectile' | 'oscillation';
}

export interface OscillationParameters {
  oscillationType: 'simple' | 'damped' | 'forced';
  systemType: 'spring' | 'pendulum';
  mass: number;
  springConstant: number;
  dampingCoefficient: number;
  amplitude: number;
  frequency: number;
  phase: number;
  forcingAmplitude?: number;
  forcingFrequency?: number;
  initialPosition: THREE.Vector3;
  initialVelocity: THREE.Vector3;
  // Pendulum specific parameters
  length?: number;  // Length of pendulum
  gravity?: number; // Gravitational acceleration (default: 9.81)
  angle?: number;   // Angular displacement
}

export interface QuestionAnswerPair {
  question: string;
  answer: string;
  type: 'regular' | 'tryout';
}