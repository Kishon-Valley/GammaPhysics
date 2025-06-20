import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Brain, Microscope, Atom, Waves, Zap, Binary, ChevronDown, ChevronUp, PlayCircle, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const concepts = [
  {
    id: 'classical',
    title: 'Classical Mechanics',
    icon: Atom,
    description: 'The foundational physics of motion, forces, and energy in macroscopic systems',
    topics: [
      {
        title: "Foundations of Classical Mechanics",
        difficulty: "Beginner",
        realWorldExample: "Vehicle motion, sports physics, everyday object motion",
        keyPoints: [
          "Understanding motion through kinematics",
          "Newton's Laws as fundamental principles",
          "Energy and momentum conservation"
        ],
        detailedNotes: {
          introduction: "Classical mechanics forms the foundation of physics, describing the motion of objects under various forces.",
          sections: [
            {
              name: "Kinematics",
              concepts: [
                "Displacement, velocity, and acceleration",
                "Equations of motion for constant acceleration",
                "Relative motion and reference frames",
                "Vector analysis in motion"
              ],
              applications: "Used in trajectory analysis, vehicle dynamics, sports science"
            },
            {
              name: "Newton's Laws of Motion",
              concepts: [
                "First Law: Objects maintain state unless acted upon by force",
                "Second Law: Force equals mass times acceleration (F = ma)",
                "Third Law: Every action has equal and opposite reaction",
                "Applications in force analysis"
              ],
              applications: "Fundamental to engineering, vehicle design, structural analysis"
            },
            {
              name: "Work and Energy",
              concepts: [
                "Work as force times displacement",
                "Kinetic and potential energy",
                "Conservation of mechanical energy",
                "Power as rate of work done"
              ],
              applications: "Energy systems, machinery efficiency, power generation"
            },
            {
              name: "Momentum",
              concepts: [
                "Linear momentum and impulse",
                "Conservation of momentum",
                "Types of collisions: elastic, inelastic",
                "Center of mass motion"
              ],
              applications: "Vehicle safety, sports equipment design, particle physics"
            }
          ]
        }
      },
      {
        title: "Dynamics of Particles and Systems",
        difficulty: "Intermediate",
        realWorldExample: "Planetary motion, machinery, rotating systems",
        keyPoints: [
          "Analysis of forces in complex systems",
          "Understanding rotational motion",
          "Study of oscillatory systems"
        ],
        detailedNotes: {
          introduction: "Dynamics deals with forces and their effects on motion in various systems.",
          sections: [
            {
              name: "Forces and Dynamics",
              concepts: [
                "Frictional forces and their types",
                "Tension, normal, and applied forces",
                "Circular motion and centripetal force",
                "Non-inertial reference frames"
              ],
              applications: "Machine design, vehicle dynamics, aerospace engineering"
            },
            {
              name: "Rigid Body Dynamics",
              concepts: [
                "Rotational motion parameters",
                "Torque and moment of inertia",
                "Angular momentum conservation",
                "Gyroscopic effects"
              ],
              applications: "Satellite stabilization, mechanical engineering, robotics"
            },
            {
              name: "Oscillatory Motion",
              concepts: [
                "Simple harmonic motion",
                "Damped oscillations",
                "Forced oscillations and resonance",
                "Coupled oscillators"
              ],
              applications: "Structural engineering, musical instruments, mechanical systems"
            }
          ]
        }
      },
      {
        title: "Advanced Classical Mechanics",
        difficulty: "Advanced",
        realWorldExample: "Space missions, complex machinery, theoretical physics",
        keyPoints: [
          "Lagrangian and Hamiltonian mechanics",
          "Advanced conservation laws",
          "Complex system analysis"
        ],
        detailedNotes: {
          introduction: "Advanced classical mechanics provides powerful tools for analyzing complex systems.",
          sections: [
            {
              name: "Lagrangian Mechanics",
              concepts: [
                "Principle of least action",
                "Lagrange's equations",
                "Generalized coordinates",
                "Constraints and degrees of freedom"
              ],
              applications: "Complex system analysis, theoretical physics, optimization"
            },
            {
              name: "Hamiltonian Mechanics",
              concepts: [
                "Hamilton's equations",
                "Phase space dynamics",
                "Canonical transformations",
                "Hamilton-Jacobi theory"
              ],
              applications: "Quantum mechanics foundations, analytical mechanics"
            },
            {
              name: "Special Topics",
              concepts: [
                "Central force problems",
                "Nonlinear dynamics",
                "Chaos theory",
                "Relativistic mechanics basics"
              ],
              applications: "Celestial mechanics, complex systems, modern physics"
            }
          ]
        }
      }
    ]
  },
  {
    id: 'waves',
    title: 'Waves',
    icon: Waves,
    description: 'Understanding periodic motion and wave phenomena in nature and technology',
    topics: [
      {
        title: "Wave Properties",
        difficulty: "Beginner",
        realWorldExample: "Ocean waves, sound waves, radio transmission, seismic waves",
        keyPoints: [
          "Wavelength and frequency relationships",
          "Wave interference and superposition",
          "Standing waves and resonance"
        ],
        detailedNotes: {
          introduction: "Waves are disturbances that transfer energy through matter or space, fundamental to many natural phenomena.",
          fundamentals: [
            {
              name: "Wave Characteristics",
              explanation: "Basic properties that define wave behavior",
              keyParameters: {
                wavelength: {
                  symbol: "λ (lambda)",
                  definition: "Distance between two consecutive wave peaks or troughs",
                  units: "meters (m)"
                },
                frequency: {
                  symbol: "f",
                  definition: "Number of complete waves passing a point per second",
                  units: "hertz (Hz)"
                },
                amplitude: {
                  symbol: "A",
                  definition: "Maximum displacement from equilibrium position",
                  units: "meters (m)"
                },
                period: {
                  symbol: "T",
                  definition: "Time for one complete wave cycle",
                  units: "seconds (s)"
                }
              },
              fundamentalEquations: [
                {
                  equation: "v = fλ",
                  description: "Wave speed equals frequency times wavelength"
                },
                {
                  equation: "T = 1/f",
                  description: "Period is inverse of frequency"
                },
                {
                  equation: "E ∝ A²",
                  description: "Wave energy is proportional to amplitude squared"
                }
              ]
            },
            {
              name: "Wave Types",
              types: [
                {
                  name: "Mechanical Waves",
                  examples: ["Sound waves", "Water waves", "Seismic waves"],
                  characteristics: "Require medium for propagation",
                  subtypes: [
                    {
                      name: "Transverse Waves",
                      description: "Oscillation perpendicular to wave direction",
                      examples: ["Water surface waves", "Guitar string vibrations"]
                    },
                    {
                      name: "Longitudinal Waves",
                      description: "Oscillation parallel to wave direction",
                      examples: ["Sound waves", "Compression springs"]
                    }
                  ]
                },
                {
                  name: "Electromagnetic Waves",
                  examples: ["Light", "Radio waves", "X-rays"],
                  characteristics: "Can propagate through vacuum",
                  spectrum: [
                    "Radio waves (longest wavelength)",
                    "Microwaves",
                    "Infrared",
                    "Visible light",
                    "Ultraviolet",
                    "X-rays",
                    "Gamma rays (shortest wavelength)"
                  ]
                }
              ]
            },
            {
              name: "Wave Phenomena",
              phenomena: [
                {
                  name: "Interference",
                  types: [
                    {
                      name: "Constructive Interference",
                      description: "Waves add to create larger amplitude",
                      applications: ["Noise cancellation", "Laser technology"]
                    },
                    {
                      name: "Destructive Interference",
                      description: "Waves cancel each other out",
                      applications: ["Noise-canceling headphones", "Anti-reflective coatings"]
                    }
                  ]
                },
                {
                  name: "Diffraction",
                  description: "Wave bending around obstacles or through openings",
                  applications: [
                    "Sound traveling around corners",
                    "Ocean waves bending around barriers",
                    "X-ray crystallography"
                  ]
                },
                {
                  name: "Resonance",
                  description: "Enhanced oscillation at natural frequencies",
                  examples: [
                    "Musical instruments",
                    "Bridge oscillations",
                    "Radio tuning"
                  ],
                  formula: "fn = nv/2L (standing waves)",
                  practicalImplications: [
                    "Bridge design considerations",
                    "Musical instrument design",
                    "Microwave cavity design"
                  ]
                }
              ]
            }
          ],
          advancedConcepts: {
            waveEquation: {
              generalForm: "∂²y/∂t² = v²(∂²y/∂x²)",
              applications: [
                "String vibrations",
                "Sound propagation",
                "Electromagnetic waves"
              ]
            },
            quantumWaveFunctions: {
              introduction: "Bridge to quantum mechanics",
              significance: "Describes probability waves in quantum systems",
              applications: [
                "Particle-wave duality",
                "Quantum tunneling",
                "Electron orbitals"
              ]
            }
          }
        }
      },
      {
        title: "Sound & Light",
        difficulty: "Intermediate",
        realWorldExample: "Musical instruments, fiber optics, rainbows, lasers, optical devices",
        keyPoints: [
          "Sound wave propagation and characteristics",
          "Light as electromagnetic waves",
          "Reflection, refraction, and diffraction"
        ],
        detailedNotes: {
          introduction: "Sound and light are fundamental wave phenomena that shape our perception of the world.",
          soundPhysics: {
            basics: {
              name: "Sound Wave Properties",
              explanation: "Sound waves are longitudinal pressure waves traveling through a medium",
              characteristics: [
                {
                  name: "Speed of Sound",
                  formula: "v = √(γP/ρ)",
                  variables: {
                    "v": "speed of sound",
                    "γ": "adiabatic index",
                    "P": "pressure",
                    "ρ": "density"
                  },
                  examples: [
                    "343 m/s in air at 20°C",
                    "1,481 m/s in water",
                    "5,120 m/s in steel"
                  ]
                },
                {
                  name: "Intensity",
                  formula: "I = P/A = (Δp)²/2ρv",
                  explanation: "Power per unit area, measured in W/m²",
                  applications: [
                    "Sound level measurement",
                    "Acoustic design",
                    "Noise control"
                  ]
                }
              ],
              musicalApplications: {
                name: "Musical Acoustics",
                phenomena: [
                  {
                    name: "Harmonics",
                    explanation: "Integer multiples of fundamental frequency",
                    formula: "fn = nf1",
                    applications: ["Musical instruments", "Voice production"]
                  },
                  {
                    name: "Beats",
                    explanation: "Interference of waves with slightly different frequencies",
                    formula: "fbeat = |f1 - f2|",
                    applications: ["Instrument tuning", "Sound synthesis"]
                  }
                ]
              }
            },
            lightPhysics: {
              basics: {
                name: "Light Wave Properties",
                explanation: "Light is an electromagnetic wave and exhibits both wave and particle properties",
                characteristics: [
                  {
                    name: "Speed of Light",
                    value: "c = 2.998 × 10⁸ m/s",
                    significance: "Universal speed limit",
                    applications: ["Fiber optics", "Astronomy", "GPS systems"]
                  },
                  {
                    name: "Frequency and Color",
                    ranges: {
                      "Visible spectrum": "400-700 nm",
                      "Infrared": "> 700 nm",
                      "Ultraviolet": "< 400 nm"
                    },
                    formula: "E = hf = hc/λ",
                    applications: ["Color displays", "Photography", "Light sensors"]
                  }
                ],
                opticalPhenomena: [
                  {
                    name: "Reflection",
                    laws: [
                      "Angle of incidence equals angle of reflection",
                      "Incident ray, reflected ray, and normal lie in same plane"
                    ],
                    applications: [
                      "Mirrors",
                      "Solar collectors",
                      "Optical instruments"
                    ],
                    mathematicalForm: "θi = θr"
                  },
                  {
                    name: "Refraction",
                    law: "Snell's Law: n₁sin(θ₁) = n₂sin(θ₂)",
                    phenomena: [
                      "Total internal reflection",
                      "Dispersion",
                      "Mirages"
                    ],
                    applications: [
                      "Lenses",
                      "Fiber optics",
                      "Prisms"
                    ]
                  },
                  {
                    name: "Interference",
                    types: [
                      {
                        name: "Young's Double-Slit",
                        formula: "Δx = λL/d",
                        applications: ["Wave nature of light", "Interferometry"]
                      },
                      {
                        name: "Thin Film",
                        formula: "2t = (m + ½)λ/n",
                        applications: ["Anti-reflective coatings", "Soap bubbles"]
                      }
                    ]
                  }
                ]
              },
              modernApplications: {
                name: "Modern Optical Technologies",
                technologies: [
                  {
                    name: "Lasers",
                    principles: [
                      "Stimulated emission",
                      "Population inversion",
                      "Optical cavity resonance"
                    ],
                    applications: [
                      "Medical surgery",
                      "Barcode scanners",
                      "Optical communications"
                    ]
                  },
                  {
                    name: "Fiber Optics",
                    principles: [
                      "Total internal reflection",
                      "Low loss transmission",
                      "Bandwidth capacity"
                    ],
                    applications: [
                      "Internet communications",
                      "Medical endoscopy",
                      "Sensors"
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    ]
  },
  {
    id: 'em',
    title: 'Electromagnetism',
    icon: Zap,
    description: 'The study of electrical and magnetic phenomena',
    topics: [
      {
        title: "Electric Fields",
        difficulty: "Intermediate",
        realWorldExample: "Static electricity, lightning, batteries",
        keyPoints: [
          "Electric charge and Coulomb's law",
          "Electric field lines and potential",
          "Capacitors and storage"
        ]
      },
      {
        title: "Magnetism",
        difficulty: "Advanced",
        realWorldExample: "Compasses, MRI machines, electric motors",
        keyPoints: [
          "Magnetic fields and forces",
          "Electromagnetic induction",
          "Applications in technology"
        ]
      }
    ]
  },
  {
    id: 'quantum',
    title: 'Quantum Physics',
    icon: Binary,
    description: 'The bizarre world of atomic and subatomic particles',
    topics: [
      {
        title: "Quantum Basics",
        difficulty: "Advanced",
        realWorldExample: "LED lights, quantum computers, solar panels",
        keyPoints: [
          "Wave-particle duality",
          "Uncertainty principle",
          "Quantum states and measurement"
        ]
      }
    ]
  },
  {
    id: 'light',
    title: 'Light',
    icon: Sun,
    description: 'Understanding the nature, behavior, and applications of light in classical and modern physics',
    topics: [
      {
        title: "Nature of Light",
        difficulty: "Beginner",
        realWorldExample: "Rainbows, sunlight, color perception, solar cells",
        keyPoints: [
          "Wave-particle duality of light",
          "Historical development of light theories",
          "Understanding the electromagnetic spectrum"
        ],
        detailedNotes: {
          introduction: "Light exhibits both wave and particle properties, fundamentally shaping our understanding of modern physics.",
          sections: [
            {
              name: "Wave-Particle Duality",
              concepts: [
                "Light as electromagnetic waves",
                "Photon model of light",
                "De Broglie wavelength",
                "Wave-particle complementarity"
              ],
              applications: "Solar cells, photodetectors, quantum communication"
            },
            {
              name: "Historical Models",
              concepts: [
                "Newton's corpuscular theory",
                "Huygens' wave theory",
                "Young's interference experiments",
                "Maxwell's electromagnetic theory"
              ],
              applications: "Development of modern optics and quantum mechanics"
            },
            {
              name: "Electromagnetic Spectrum",
              concepts: [
                "Visible light spectrum",
                "Infrared and ultraviolet radiation",
                "X-rays and gamma rays",
                "Radio and microwave radiation"
              ],
              applications: "Communications, medical imaging, astronomy"
            }
          ]
        }
      },
      {
        title: "Geometrical Optics",
        difficulty: "Intermediate",
        realWorldExample: "Cameras, eyeglasses, telescopes, microscopes",
        keyPoints: [
          "Laws of reflection and refraction",
          "Formation of images by mirrors and lenses",
          "Design principles of optical instruments"
        ],
        detailedNotes: {
          introduction: "Geometrical optics describes light behavior using ray diagrams and simple mathematical principles.",
          sections: [
            {
              name: "Reflection and Refraction",
              concepts: [
                "Laws of reflection",
                "Snell's law of refraction",
                "Total internal reflection",
                "Critical angle phenomena"
              ],
              applications: "Fiber optics, prisms, optical instruments"
            },
            {
              name: "Mirrors and Lenses",
              concepts: [
                "Concave and convex mirrors",
                "Spherical and parabolic surfaces",
                "Thin lens equation",
                "Ray diagrams and image formation"
              ],
              applications: "Telescopes, microscopes, corrective lenses"
            },
            {
              name: "Optical Instruments",
              concepts: [
                "Microscope design principles",
                "Telescope configurations",
                "Camera optics",
                "Magnification and resolution"
              ],
              applications: "Scientific research, photography, astronomy"
            }
          ]
        }
      },
      {
        title: "Physical Optics",
        difficulty: "Advanced",
        realWorldExample: "Holograms, anti-reflective coatings, polarized sunglasses",
        keyPoints: [
          "Wave interference and diffraction",
          "Light polarization phenomena",
          "Applications in modern technology"
        ],
        detailedNotes: {
          introduction: "Physical optics examines wave phenomena of light including interference, diffraction, and polarization.",
          sections: [
            {
              name: "Interference",
              concepts: [
                "Young's double-slit experiment",
                "Multiple beam interference",
                "Thin film interference",
                "Interferometers"
              ],
              applications: "Optical coatings, spectroscopy, metrology"
            },
            {
              name: "Diffraction",
              concepts: [
                "Huygens' principle",
                "Single-slit diffraction",
                "Diffraction gratings",
                "Resolution limits"
              ],
              applications: "Spectroscopy, x-ray crystallography"
            },
            {
              name: "Polarization",
              concepts: [
                "Linear and circular polarization",
                "Brewster's angle",
                "Birefringence",
                "Optical activity"
              ],
              applications: "LCD displays, stress analysis, photography"
            }
          ]
        }
      },
      {
        title: "Quantum Nature of Light",
        difficulty: "Advanced",
        realWorldExample: "LEDs, solar cells, laser technology",
        keyPoints: [
          "Photoelectric effect",
          "Planck's quantum theory",
          "Light-matter interactions"
        ],
        detailedNotes: {
          introduction: "The quantum nature of light revolutionized physics and led to numerous modern technologies.",
          sections: [
            {
              name: "Photoelectric Effect",
              concepts: [
                "Einstein's explanation",
                "Work function",
                "Threshold frequency",
                "Photon energy"
              ],
              applications: "Solar cells, photodetectors, night vision"
            },
            {
              name: "Quantum Theory",
              concepts: [
                "Planck's constant",
                "Energy quantization",
                "Photon momentum",
                "Wave function collapse"
              ],
              applications: "Quantum computing, cryptography"
            },
            {
              name: "Modern Applications",
              concepts: [
                "LED technology",
                "Laser principles",
                "Quantum optics",
                "Single-photon devices"
              ],
              applications: "Displays, communications, quantum technology"
            }
          ]
        }
      },
      {
        title: "Light-Matter Interaction",
        difficulty: "Advanced",
        realWorldExample: "Color of objects, atmospheric phenomena, optical materials",
        keyPoints: [
          "Absorption and emission processes",
          "Scattering phenomena",
          "Material optical properties"
        ],
        detailedNotes: {
          introduction: "The interaction between light and matter determines many everyday phenomena and technological applications.",
          sections: [
            {
              name: "Basic Interactions",
              concepts: [
                "Absorption mechanisms",
                "Reflection processes",
                "Transmission characteristics",
                "Energy transfer"
              ],
              applications: "Photovoltaics, optical filters, coatings"
            },
            {
              name: "Scattering",
              concepts: [
                "Rayleigh scattering",
                "Mie scattering",
                "Raman effect",
                "Atmospheric optics"
              ],
              applications: "Sky color, remote sensing, spectroscopy"
            },
            {
              name: "Material Properties",
              concepts: [
                "Refractive index",
                "Dispersion",
                "Absorption spectrum",
                "Optical anisotropy"
              ],
              applications: "Optical materials, fiber optics"
            }
          ]
        }
      }
    ]
  },
];

interface ConceptCardProps {
  concept: typeof concepts[0];
  isExpanded: boolean;
  onToggle: () => void;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ concept, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      className="overflow-hidden bg-white rounded-xl shadow-lg transition-all hover:shadow-xl"
    >
      <div className="p-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={onToggle}
        >
          <div className="flex items-center">
            <concept.icon className="mr-3 w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">{concept.title}</h2>
          </div>
          {isExpanded ? 
            <ChevronUp className="w-6 h-6 text-gray-400" /> : 
            <ChevronDown className="w-6 h-6 text-gray-400" />
          }
        </div>
        
        <p className="mt-2 mb-4 text-gray-600">{concept.description}</p>

        <motion.div
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          {concept.topics.map((topic) => (
            <div key={topic.title} className="mb-8 last:mb-0">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                <Link 
                  to={`/${concept.id === 'quantum' ? 'content/quantum-physics' : 
                        concept.id === 'waves' ? 'content/waves-and-oscillations' :
                        concept.id === 'em' ? 'content/electromagnetism' : 
                        concept.id === 'light' ? 'content/light' : 
                        'classical-mechanics'}`}
                  className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                >
                  <Book className="mr-2 w-4 h-4" />
                  Study Now
                </Link>
              </div>

              {/* Quick Start Guide */}
              <div className="p-4 mb-4 bg-blue-50 rounded-lg">
                <h4 className="mb-2 text-sm font-medium text-blue-900">Quick Start Guide:</h4>
                <p className="text-blue-700">Start with understanding {topic.keyPoints[0].toLowerCase()}</p>
                <a href={`https://animations.gammaphysics.app/`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-700">
                  <PlayCircle className="mr-1 w-4 h-4" />
                  Try Interactive Simulation
                </a>
              </div>

              {/* Real World Applications */}
              <div className="p-4 mb-4 bg-gray-50 rounded-lg">
                <h4 className="mb-2 text-sm font-medium text-gray-900">Real World Applications:</h4>
                <p className="text-gray-600">{topic.realWorldExample}</p>
              </div>

              {/* Key Points */}
              <div className="space-y-2">
                <h4 className="mb-2 text-sm font-medium text-gray-900">Key Concepts:</h4>
                {topic.keyPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center list-none text-gray-600"
                  >
                    <ArrowRight className="flex-shrink-0 mr-2 w-4 h-4 text-blue-600" />
                    {point}
                  </motion.li>
                ))}
              </div>

              {/* Study Resources */}
              <div className="p-4 mt-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <h4 className="mb-2 text-sm font-medium text-gray-900">Additional Resources:</h4>
                <div className="flex flex-wrap gap-2">
                  <Link to={`/definitions#${topic.title.toLowerCase()}`} className="inline-flex items-center px-3 py-1 text-sm text-gray-700 bg-white rounded-full hover:bg-gray-50">
                    <Book className="mr-1 w-4 h-4" />
                    Definitions
                  </Link>
                  <a href={`https://animations.gammaphysics.app/`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 text-sm text-gray-700 bg-white rounded-full hover:bg-gray-50">
                    <Microscope className="mr-1 w-4 h-4" />
                    Simulations
                  </a>
                  <Link to={`/practice/${concept.id}`} className="inline-flex items-center px-3 py-1 text-sm text-gray-700 bg-white rounded-full hover:bg-gray-50">
                    <Brain className="mr-1 w-4 h-4" />
                    Practice
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex justify-end mt-6">
          <Link 
            to={`/${concept.id === 'quantum' ? 'content/quantum-physics' : 
                  concept.id === 'waves' ? 'content/waves-and-oscillations' :
                  concept.id === 'em' ? 'content/electromagnetism' : 
                  concept.id === 'light' ? 'content/light' : 
                  'classical-mechanics'}`}
            className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
          >
            Explore Full Content
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export function ConceptsPage() {
  const [expandedConcepts, setExpandedConcepts] = useState<string[]>([]);

  const toggleConcept = (conceptId: string) => {
    setExpandedConcepts(prev => 
      prev.includes(conceptId) 
        ? prev.filter(id => id !== conceptId)
        : [...prev, conceptId]
    );
  };

  return (
    <div className="py-12 min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-8 max-w-3xl p-4 bg-amber-50 border border-amber-200 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-700">
            AI-generated content, use for reference only. Any suggestions, corrections or contributions? Feel free to <Link to="/contact" className="text-blue-600 font-medium hover:underline">contact us</Link>.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Explore Physics Concepts
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            From fundamental principles to advanced theories, discover physics through interactive learning and real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {concepts.map((concept) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              isExpanded={expandedConcepts.includes(concept.id)}
              onToggle={() => toggleConcept(concept.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}