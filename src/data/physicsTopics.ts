import { Course } from '../types/physics';

export const physicsTopics: Course[] = [
  {
    title: 'Classical Mechanics',
    description: 'Study of motion, forces, and energy in classical physics',
    concepts: [
      {
        title: 'Kinematics',
        description: 'Study of motion without considering its causes',
        topics: [
          {
            title: 'Linear Motion',
            description: 'Motion in a straight line including velocity and acceleration',
            simulationAvailable: true,
            simulationPath: 'projectile'
          },
          {
            title: 'Free Fall',
            description: 'Motion under gravitational influence',
            simulationAvailable: true,
            simulationPath: 'projectile'
          },
          {
            title: 'Projectile Motion',
            description: 'Two-dimensional motion under gravity',
            simulationAvailable: true,
            simulationPath: 'projectile'
          }
        ]
      },
      {
        title: 'Oscillations',
        description: 'Study of periodic motion in mechanical systems',
        topics: [
          {
            title: 'Simple Pendulum',
            description: 'A mass suspended by a string, swinging back and forth under gravity',
            content: 'Explore how length, mass, and initial angle affect the motion of a simple pendulum.',
            simulationAvailable: true,
            animation: 'oscillations-animation'
          },
          {
            title: 'Spring Oscillation',
            description: 'A mass attached to a spring, moving back and forth',
            content: 'Investigate how spring constant, mass, and initial displacement affect spring motion.',
            simulationAvailable: true,
            animation: 'oscillations-animation'
          },
          {
            title: 'Damped Oscillations',
            description: 'Oscillations with energy loss due to friction or air resistance',
            content: 'Study how damping affects the amplitude and energy of oscillating systems.',
            simulationAvailable: true,
            animation: 'oscillations-animation'
          }
        ]
      }
    ]
  }
];
