import { PhysicsContent } from '../types/physics';

export interface Introduction {
  mainDescription: string;
  historicalContext: {
    development: string[];
    significance: string;
    limitations: string;
    keyContributors: {
      name: string;
      contributions: string[];
    }[];
  };
}

export const electromagnetismContent: PhysicsContent = {
  id: "electromagnetism",
  title: "Electromagnetism",
  introduction: {
    mainDescription: "Explore the fundamental forces of electricity and magnetism, from basic charges to Maxwell's equations and electromagnetic waves.",
    historicalContext: {
      development: [
        "Ancient observations of static electricity and lodestones",
        "18th-century discoveries in electricity and magnetism",
        "19th-century unification by Maxwell",
        "Modern applications in technology and quantum electrodynamics"
      ],
      significance: "Electromagnetism is essential to modern technology, from electric power generation to telecommunications and computing.",
      limitations: "Classical electromagnetism breaks down at quantum scales, where quantum electrodynamics becomes necessary.",
      keyContributors: [
        {
          name: "James Clerk Maxwell",
          contributions: [
            "Unified electricity and magnetism",
            "Developed Maxwell's equations",
            "Predicted electromagnetic waves"
          ]
        },
        {
          name: "Michael Faraday",
          contributions: [
            "Discovered electromagnetic induction",
            "Introduced concept of field lines",
            "Developed laws of electrolysis"
          ]
        }
      ]
    }
  },
  sections: [
    {
      id: "electric-fields",
      title: "1. Electric Fields and Charges",
      subsections: [
        {
          id: "coulombs-law",
          title: "1.1 Coulomb's Law",
          content: {}
        },
        {
          id: "electric-field",
          title: "1.2 Electric Field Concept",
          content: {}
        },
        {
          id: "gauss-law",
          title: "1.3 Gauss's Law",
          content: {}
        },
        {
          id: "field-lines",
          title: "1.4 Electric Field Lines",
          content: {}
        }
      ]
    },
    {
      id: "electric-potential",
      title: "2. Electric Potential",
      subsections: [
        {
          id: "potential-energy",
          title: "2.1 Electric Potential Energy",
          content: {}
        },
        {
          id: "voltage",
          title: "2.2 Voltage and Potential Difference",
          content: {}
        },
        {
          id: "equipotential",
          title: "2.3 Equipotential Surfaces",
          content: {}
        }
      ]
    },
    {
      id: "capacitance",
      title: "3. Capacitance and Dielectrics",
      subsections: [
        {
          id: "capacitors",
          title: "3.1 Capacitor Fundamentals",
          content: {}
        },
        {
          id: "dielectrics",
          title: "3.2 Dielectric Materials",
          content: {}
        },
        {
          id: "energy-storage",
          title: "3.3 Energy Storage",
          content: {}
        }
      ]
    },
    {
      id: "current",
      title: "4. Current and Resistance",
      subsections: [
        {
          id: "electric-current",
          title: "4.1 Electric Current",
          content: {}
        },
        {
          id: "ohms-law",
          title: "4.2 Ohm's Law",
          content: {}
        },
        {
          id: "resistance",
          title: "4.3 Resistance and Resistivity",
          content: {}
        }
      ]
    },
    {
      id: "magnetic-fields",
      title: "5. Magnetic Fields",
      description: "Study of magnetic forces and fields, including the Biot-Savart law and its applications.",
      subsections: [
        {
          id: "magnetic-field-intro",
          title: "Introduction to Magnetic Fields",
          description: "Understanding the nature and characteristics of magnetic fields, their sources, and basic properties.",
          content: {
            introduction: "Magnetic fields are fundamental to our understanding of electromagnetism, playing a crucial role in both natural phenomena and technological applications.",
            mainDescription: {
              overview: "A comprehensive study of magnetic fields, their properties, and how they interact with matter.",
              importance: [
                "Essential for understanding electromagnetic phenomena",
                "Fundamental to modern technology",
                "Critical in understanding Earth's magnetic field"
              ],
              keyPrinciples: [
                "Magnetic field lines and flux",
                "Sources of magnetic fields",
                "Magnetic field strength and units"
              ],
              realWorldApplications: [
                "Compasses and navigation",
                "Earth's magnetic field",
                "Magnetic shielding"
              ],
              commonMisconceptions: [
                "Magnetic fields are not force fields",
                "Magnetic poles always come in pairs",
                "Magnetic fields affect all materials equally"
              ]
            }
          }
        },
        {
          id: "magnetic-force",
          title: "Magnetic Forces",
          description: "Study of forces exerted by magnetic fields on moving charges and current-carrying conductors.",
          content: {
            introduction: "Magnetic forces are responsible for many practical applications, from electric motors to particle accelerators.",
            mainDescription: {
              overview: "A detailed examination of magnetic forces and their effects on charged particles and currents.",
              importance: [
                "Foundation of electric motor operation",
                "Essential for particle physics",
                "Key to many technological applications"
              ],
              keyPrinciples: [
                "Lorentz force law",
                "Force on current-carrying conductors",
                "Motion of charged particles in magnetic fields"
              ],
              realWorldApplications: [
                "Electric motors",
                "Mass spectrometers",
                "Particle accelerators"
              ],
              commonMisconceptions: [
                "Magnetic forces don't do work",
                "Direction of magnetic force",
                "Relationship with electric forces"
              ]
            }
          }
        },
        {
          id: "biot-savart",
          title: "Magnetic Forces and Biot-Savart Law",
          description: "Understanding magnetic forces on moving charges and current-carrying conductors, along with the fundamental Biot-Savart law for calculating magnetic fields.",
          content: {
            introduction: "We will explore the fundamental concepts of magnetic forces and the Biot-Savart law, which are essential for understanding electromagnetic interactions.",
            mainDescription: {
              overview: "A comprehensive study of magnetic forces and the Biot-Savart law, covering fundamental principles and practical applications.",
              importance: [
                "Foundation for understanding electromagnetic interactions",
                "Essential for technological applications like motors and particle accelerators",
                "Key to modern magnetic measurement techniques"
              ],
              keyPrinciples: [
                "Lorentz force on moving charges",
                "Force on current-carrying conductors",
                "Biot-Savart law for magnetic field calculation"
              ],
              realWorldApplications: [
                "Electric motors and generators",
                "Mass spectrometers",
                "Magnetic resonance imaging (MRI)"
              ],
              commonMisconceptions: [
                "Magnetic forces do not perform work on charged particles",
                "Magnetic fields are not force fields but indicate the region where magnetic forces may act"
              ]
            },
            topics: [
              {
                name: "Magnetic Force",
                properties: [
                  "Perpendicular to both velocity and magnetic field",
                  "Magnitude proportional to charge, velocity, and field strength",
                  "Direction determined by right-hand rule"
                ],
                examples: [
                  "Motion of charged particles in magnetic fields",
                  "Force on current-carrying conductors"
                ],
                applications: [
                  "Mass spectrometers",
                  "Particle accelerators",
                  "Electric motors"
                ]
              },
              {
                name: "Biot-Savart Law",
                properties: [
                  "Fundamental law of magnetostatics",
                  "Analogous to Coulomb's law in electrostatics",
                  "Field decreases with square of distance"
                ],
                examples: [
                  "Magnetic field around a straight wire",
                  "Field at center of current loop"
                ],
                applications: [
                  "Electromagnetic devices",
                  "MRI machines",
                  "Magnetic field sensors"
                ]
              }
            ],
            formulas: [
              {
                title: "Magnetic Force on Moving Charge",
                equation: "F = qv × B",
                description: "The force experienced by a charged particle moving in a magnetic field"
              },
              {
                title: "Biot-Savart Law",
                equation: "dB = (μ₀/4π)(Idl × r̂)/r²",
                description: "The magnetic field produced by a current element"
              }
            ]
          }
        }
      ]
    },
    {
      id: "electromagnetic-induction",
      title: "6. Electromagnetic Induction",
      subsections: [
        {
          id: "faradays-law",
          title: "Faraday's Law",
          content: {
            markdownFile: "electromagnetic-induction/faradays-law.md"
          }
        },
        {
          id: "lenzs-law",
          title: "Lenz's Law",
          content: {
            markdownFile: "electromagnetic-induction/lenzs-law.md"
          }
        },
        {
          id: "inductance",
          title: "Self and Mutual Inductance",
          content: {
            markdownFile: "electromagnetic-induction/inductance.md"
          }
        },
        {
          id: "applications",
          title: "Applications of Electromagnetic Induction",
          content: {
            markdownFile: "electromagnetic-induction/applications.md"
          }
        },
        {
          id: "moving-conductors",
          title: "EMF in Moving Conductors",
          content: {
            markdownFile: "electromagnetic-induction/moving-conductors.md"
          }
        }
      ]
    },
    {
      id: "maxwells-equations",
      title: "7. Maxwell's Equations",
      subsections: [
        {
          id: "equations",
          title: "7.1 The Four Equations",
          content: {
            markdownFile: "maxwells-equations/equations.md"
          }
        },
        {
          id: "em-waves",
          title: "7.2 Electromagnetic Waves",
          content: {
            markdownFile: "maxwells-equations/em-waves.md"
          }
        },
        {
          id: "poynting",
          title: "7.3 Energy and Poynting Vector",
          content: {
            markdownFile: "maxwells-equations/poynting.md"
          }
        }
      ]
    },
    {
      id: "magnetostatics",
      title: "8. Magnetostatics",
      subsections: [
        {
          id: "magnetic-field-sources",
          title: "8.1 Magnetic Fields and Sources",
          content: {
            topics: [
              {
                name: "Magnetic Field Fundamentals",
                properties: [
                  "Definition and properties of magnetic fields",
                  "Magnetic flux and flux density",
                  "Magnetic field lines and visualization",
                  "Magnetic dipoles and monopoles"
                ]
              }
            ]
          }
        },
        {
          id: "magnetic-materials",
          title: "8.2 Magnetic Materials",
          content: {
            topics: [
              {
                name: "Types of Magnetic Materials",
                properties: [
                  "Diamagnetism and paramagnetism",
                  "Ferromagnetism and domains",
                  "Magnetic susceptibility",
                  "Hysteresis and applications"
                ]
              }
            ]
          }
        },
        {
          id: "magnetic-circuits",
          title: "8.3 Magnetic Circuits",
          content: {
            topics: [
              {
                name: "Magnetic Circuit Analysis",
                properties: [
                  "Magnetic flux and reluctance",
                  "Series and parallel magnetic circuits",
                  "Permanent magnets",
                  "Applications in transformers and motors"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "ac-circuits",
      title: "9. Alternating Current (AC) Circuits",
      subsections: [
        {
          id: "ac-fundamentals",
          title: "9.1 AC Fundamentals",
          content: {
            topics: [
              {
                name: "AC Principles",
                properties: [
                  "Sinusoidal voltage and current",
                  "RMS and peak values",
                  "Phase relationships",
                  "Frequency and period"
                ]
              }
            ]
          }
        },
        {
          id: "reactance-impedance",
          title: "9.2 Reactance and Impedance",
          content: {
            topics: [
              {
                name: "AC Circuit Elements",
                properties: [
                  "Capacitive and inductive reactance",
                  "Complex impedance",
                  "Phasor diagrams",
                  "Resonance phenomena"
                ]
              }
            ]
          }
        },
        {
          id: "ac-power",
          title: "9.3 AC Power Analysis",
          content: {
            topics: [
              {
                name: "Power in AC Circuits",
                properties: [
                  "Real and reactive power",
                  "Power factor correction",
                  "Three-phase systems",
                  "Power transmission and distribution"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "dc-circuits",
      title: "10. Electric Current and DC Circuits",
      subsections: [
        {
          id: "dc-analysis",
          title: "10.1 DC Circuit Analysis",
          content: {
            topics: [
              {
                name: "Circuit Analysis Methods",
                properties: [
                  "Kirchhoff's voltage and current laws",
                  "Series and parallel circuits",
                  "Voltage and current division",
                  "Mesh and nodal analysis"
                ]
              }
            ]
          }
        },
        {
          id: "network-theorems",
          title: "10.2 Network Theorems",
          content: {
            topics: [
              {
                name: "DC Network Theorems",
                properties: [
                  "Thévenin's and Norton's theorems",
                  "Superposition principle",
                  "Maximum power transfer",
                  "Source transformations"
                ]
              }
            ]
          }
        },
        {
          id: "transient-analysis",
          title: "10.3 Transient Analysis",
          content: {
            topics: [
              {
                name: "Transient Behavior",
                properties: [
                  "RC and RL circuits",
                  "Time constants",
                  "Step and impulse responses",
                  "Energy storage and dissipation"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "applications",
      title: "11. Applications of Electromagnetism",
      subsections: [
        {
          id: "power-generation",
          title: "11.1 Power Generation and Distribution",
          content: {
            topics: [
              {
                name: "Electromagnetic Power Systems",
                properties: [
                  "Generators and motors",
                  "Power transformers",
                  "Grid systems",
                  "Renewable energy integration"
                ]
              }
            ]
          }
        },
        {
          id: "electronic-devices",
          title: "11.2 Electronic Devices",
          content: {
            topics: [
              {
                name: "Electromagnetic Applications",
                properties: [
                  "Sensors and actuators",
                  "Electromagnetic shielding",
                  "Communication systems",
                  "Medical applications"
                ]
              }
            ]
          }
        },
        {
          id: "modern-applications",
          title: "11.3 Modern Technologies",
          content: {
            topics: [
              {
                name: "Cutting-Edge Applications",
                properties: [
                  "Wireless power transfer",
                  "Electromagnetic propulsion",
                  "Magnetic levitation",
                  "Electromagnetic imaging"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "advanced-topics",
      title: "12. Advanced Topics",
      subsections: [
        {
          id: "special-relativity",
          title: "12.1 Electromagnetism and Special Relativity",
          content: {
            topics: [
              {
                name: "Relativistic Electromagnetism",
                properties: [
                  "Lorentz transformations",
                  "Four-vectors in electromagnetism",
                  "Relativistic effects",
                  "Field transformations"
                ]
              }
            ]
          }
        },
        {
          id: "quantum-effects",
          title: "12.2 Quantum Electromagnetic Effects",
          content: {
            topics: [
              {
                name: "Quantum Phenomena",
                properties: [
                  "Quantum Hall effect",
                  "Josephson effects",
                  "Quantum tunneling",
                  "Quantum interference"
                ]
              }
            ]
          }
        },
        {
          id: "computational",
          title: "12.3 Computational Electromagnetics",
          content: {
            topics: [
              {
                name: "Numerical Methods",
                properties: [
                  "Finite element analysis",
                  "Boundary element methods",
                  "Time-domain techniques",
                  "Electromagnetic simulation"
                ]
              }
            ]
          }
        }
      ]
    }
  ]
};
