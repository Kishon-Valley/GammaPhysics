import { PhysicsContent } from '../types/physics';

export const classicalMechanicsContent: PhysicsContent = {
  id: "classical-mechanics",
  title: "Classical Mechanics",
  introduction: {
    mainDescription: "Classical mechanics, developed primarily by Isaac Newton in the 17th century, forms the foundation of physics. It describes the motion of macroscopic objects under the influence of forces, providing a framework that remains highly accurate for most everyday phenomena.",
    historicalContext: {
      development: [
        "Ancient Greeks' initial concepts of motion",
        "Medieval scholars' contributions to impetus theory",
        "Galileo's groundbreaking experiments",
        "Newton's formulation of laws of motion and universal gravitation",
        "Later developments by Euler, Lagrange, and Hamilton"
      ],
      significance: "Classical mechanics laid the groundwork for all of modern physics and engineering, providing a mathematical framework for understanding motion and forces.",
      limitations: "While extremely accurate for everyday scenarios, classical mechanics breaks down at very high speeds (where relativistic effects become significant) and at atomic scales (where quantum effects dominate).",
      keyContributors: [
        {
          name: "Isaac Newton",
          contributions: [
            "Formulated the three laws of motion",
            "Developed calculus as a mathematical tool",
            "Discovered the law of universal gravitation"
          ]
        },
        {
          name: "Galileo Galilei",
          contributions: [
            "Established the concept of inertia",
            "Discovered the law of free fall",
            "Developed the scientific method"
          ]
        }
      ]
    }
  },
  sections: [
    {
      id: "kinematics",
      title: "1. Kinematics",
      subsections: [
        {
          id: "motion-one-dimension",
          title: "1.1 Motion in One Dimension",
          content: {}  // Content is served from markdown file
        },
        {
          id: "motion-in-two-three-dimensions",
          title: "1.2 Motion in Two and Three Dimensions",
          content: {
            topics: [
              {
                name: "Motion in Multiple Dimensions",
                properties: [
                  "Vector analysis",
                  "Projectile motion",
                  "Relative motion",
                  "Motion in a plane"
                ]
              }
            ]
          }
        },
        {
          id: "circular-motion",
          title: "1.3 Circular Motion",
          content: {
            topics: [
              {
                name: "Circular Motion",
                properties: [
                  "Angular velocity",
                  "Centripetal acceleration",
                  "Centripetal force",
                  "Applications of circular motion"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "dynamics",
      title: "2. Dynamics",
      subsections: [
        {
          id: "newtons-laws",
          title: "2.1 Newton's Laws of Motion",
          content: {
            topics: [
              {
                name: "Newton's Laws",
                properties: [
                  "First Law (Inertia)",
                  "Second Law (F = ma)",
                  "Third Law (Action-Reaction)",
                  "Applications of Newton's Laws"
                ]
              }
            ]
          }
        },
        {
          id: "forces",
          title: "2.2 Forces",
          content: {
            topics: [
              {
                name: "Types of Forces",
                properties: [
                  "Gravitational force",
                  "Normal force",
                  "Friction force",
                  "Tension and spring forces"
                ]
              }
            ]
          }
        },
        {
          id: "applications-newtons-laws",
          title: "2.3 Applications of Newton's Laws",
          content: {
            topics: [
              {
                name: "Applications",
                properties: [
                  "Free-body diagrams",
                  "Equilibrium problems",
                  "Inclined planes",
                  "Connected objects"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "work-energy-power",
      title: "3. Work, Energy, and Power",
      subsections: [
        {
          id: "work",
          title: "3.1 Work",
          content: {
            topics: [
              {
                name: "Work",
                properties: [
                  "Definition of work",
                  "Work done by constant force",
                  "Work done by varying force",
                  "Work-energy theorem"
                ]
              }
            ]
          }
        },
        {
          id: "energy",
          title: "3.2 Energy",
          content: {
            topics: [
              {
                name: "Energy Types",
                properties: [
                  "Kinetic energy",
                  "Potential energy",
                  "Conservation of energy",
                  "Energy transformations"
                ]
              }
            ]
          }
        },
        {
          id: "power",
          title: "3.3 Power",
          content: {
            topics: [
              {
                name: "Power",
                properties: [
                  "Definition of power",
                  "Power calculations",
                  "Units of power",
                  "Power in mechanical systems"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "systems-of-particles",
      title: "4. Systems of Particles",
      subsections: [
        {
          id: "center-of-mass",
          title: "4.1 Center of Mass",
          content: {
            topics: [
              {
                name: "Center of Mass",
                properties: [
                  "Definition and calculation",
                  "Center of mass motion",
                  "System of particles",
                  "Continuous mass distributions"
                ]
              }
            ]
          }
        },
        {
          id: "momentum",
          title: "4.2 Momentum",
          content: {
            topics: [
              {
                name: "Momentum",
                properties: [
                  "Linear momentum",
                  "Conservation of momentum",
                  "Impulse and momentum change",
                  "Collisions and momentum transfer"
                ]
              }
            ]
          }
        },
        {
          id: "collisions",
          title: "4.3 Collisions",
          content: {
            topics: [
              {
                name: "Collisions",
                properties: [
                  "Elastic collisions",
                  "Inelastic collisions",
                  "Conservation laws in collisions",
                  "Coefficient of restitution"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "rotational-motion",
      title: "5. Rotational Motion",
      subsections: [
        {
          id: "angular-kinematics",
          title: "5.1 Angular Kinematics",
          content: {
            topics: [
              {
                name: "Angular Motion",
                properties: [
                  "Angular displacement",
                  "Angular velocity",
                  "Angular acceleration",
                  "Relationship with linear motion"
                ]
              }
            ]
          }
        },
        {
          id: "rotational-dynamics",
          title: "5.2 Dynamics of Rotational Motion",
          content: {
            topics: [
              {
                name: "Rotational Dynamics",
                properties: [
                  "Torque and angular acceleration",
                  "Moment of inertia",
                  "Rotational kinetic energy",
                  "Angular momentum conservation"
                ]
              }
            ]
          }
        },
        {
          id: "rolling-motion",
          title: "5.3 Rolling Motion",
          content: {
            topics: [
              {
                name: "Rolling Motion",
                properties: [
                  "Pure rolling",
                  "Rolling with slipping",
                  "Rolling resistance",
                  "Applications in real systems"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "oscillations",
      title: "6. Oscillations",
      subsections: [
        {
          id: "simple-harmonic-motion",
          title: "6.1 Simple Harmonic Motion",
          content: {
            topics: [
              {
                name: "Simple Harmonic Motion",
                properties: [
                  "Periodic motion",
                  "Restoring force",
                  "Amplitude and frequency",
                  "Energy in SHM"
                ]
              }
            ]
          }
        },
        {
          id: "energy-in-shm",
          title: "6.2 Energy in SHM",
          content: {
            topics: [
              {
                name: "Energy in SHM",
                properties: [
                  "Kinetic energy variation",
                  "Potential energy variation",
                  "Total energy conservation",
                  "Energy-position relationships"
                ]
              }
            ]
          }
        },
        {
          id: "damped-oscillations",
          title: "6.3 Damped Oscillations",
          content: {
            topics: [
              {
                name: "Damped Oscillations",
                properties: [
                  "Damping forces",
                  "Amplitude decay",
                  "Critical damping",
                  "Applications"
                ]
              }
            ]
          }
        },
        {
          id: "driven-oscillations",
          title: "6.4 Driven Oscillations and Resonance",
          content: {
            topics: [
              {
                name: "Driven Oscillations",
                properties: [
                  "Forced oscillations",
                  "Resonance frequency",
                  "Amplitude response",
                  "Practical applications"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "gravitation",
      title: "7. Gravitation",
      subsections: [
        {
          id: "universal-gravitation",
          title: "7.1 Newton's Law of Universal Gravitation",
          content: {
            topics: [
              {
                name: "Universal Gravitation",
                properties: [
                  "Gravitational force law",
                  "Universal gravitational constant",
                  "Gravitational field strength",
                  "Applications in astronomy"
                ]
              }
            ]
          }
        },
        {
          id: "planetary-motion",
          title: "7.2 Motion of Planets and Satellites",
          content: {
            topics: [
              {
                name: "Planetary Motion",
                properties: [
                  "Kepler's laws",
                  "Orbital mechanics",
                  "Satellite motion",
                  "Space exploration applications"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "fluid-mechanics",
      title: "8. Fluid Mechanics",
      subsections: [
        {
          id: "fluid-statics",
          title: "8.1 Fluid Statics",
          content: {
            topics: [
              {
                name: "Fluid Statics",
                properties: [
                  "Pressure and density",
                  "Pascal's principle",
                  "Archimedes' principle",
                  "Atmospheric pressure"
                ]
              }
            ]
          }
        },
        {
          id: "fluid-dynamics",
          title: "8.2 Fluid Dynamics",
          content: {
            topics: [
              {
                name: "Fluid Dynamics",
                properties: [
                  "Flow characteristics",
                  "Bernoulli's principle",
                  "Viscosity and turbulence",
                  "Real fluid effects"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "special-topics",
      title: "9. Special Topics",
      subsections: [
        {
          id: "non-inertial-frames",
          title: "9.1 Non-Inertial Reference Frames",
          content: {
            topics: [
              {
                name: "Non-Inertial Reference Frames",
                properties: [
                  "Fictitious forces",
                  "Rotating reference frames",
                  "Coriolis effect",
                  "Centrifugal force"
                ]
              }
            ]
          }
        },
        {
          id: "advanced-mechanics",
          title: "9.2 Advanced Mechanics",
          content: {
            topics: [
              {
                name: "Advanced Mechanics",
                properties: [
                  "Lagrangian mechanics",
                  "Hamiltonian mechanics",
                  "Phase space analysis",
                  "Complex systems"
                ]
              }
            ]
          }
        }
      ]
    }
  ]
};
