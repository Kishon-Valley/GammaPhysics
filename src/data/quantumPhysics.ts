import { PhysicsContent } from '../types/physics';

export const quantumPhysicsContent: PhysicsContent = {
  id: "quantum-physics",
  title: "Quantum Physics",
  introduction: {
    mainDescription: "A comprehensive exploration of quantum mechanics, from foundational principles to modern applications. This course covers the mathematical framework, fundamental concepts, and practical applications that revolutionized our understanding of nature at the atomic scale.",
    historicalContext: {
      development: [
        "Early quantum theory and black-body radiation (1900)",
        "Photoelectric effect and wave-particle duality (1905)",
        "Bohr model of the atom (1913)",
        "Development of quantum mechanics (1925-1927)",
        "Modern applications in computing and technology"
      ],
      significance: "Quantum mechanics represents one of the most successful theories in physics, providing unprecedented accuracy in describing atomic and subatomic phenomena.",
      limitations: "While quantum mechanics perfectly describes microscopic systems, its interpretation and the quantum-classical transition remain active areas of research.",
      keyContributors: [
        {
          name: "Max Planck",
          contributions: ["Quantum hypothesis", "Black-body radiation solution"]
        },
        {
          name: "Niels Bohr",
          contributions: ["Atomic model", "Copenhagen interpretation"]
        },
        {
          name: "Werner Heisenberg",
          contributions: ["Uncertainty principle", "Matrix mechanics"]
        },
        {
          name: "Erwin Schrödinger",
          contributions: ["Wave mechanics", "Schrödinger equation"]
        }
      ]
    }
  },
  sections: [
    {
      id: "foundations",
      title: "1. Foundations of Quantum Theory",
      subsections: [
        {
          id: "wave-particle-duality",
          title: "1.1 Wave-Particle Duality",
          content: {}
        },
        {
          id: "quantization",
          title: "1.2 Quantization (Photoelectric Effect, Compton Scattering)",
          content: {}
        },
        {
          id: "uncertainty-principle",
          title: "1.3 Heisenberg Uncertainty Principle",
          content: {}
        },
        {
          id: "bohr-model",
          title: "1.4 Bohr Model and Atomic Spectra",
          content: {}
        }
      ]
    },
    {
      id: "mathematical-framework",
      title: "2. Mathematical Framework",
      subsections: [
        {
          id: "wavefunctions",
          title: "2.1 Wavefunctions and Probability Interpretation",
          content: {}
        },
        {
          id: "schrodinger-equation",
          title: "2.2 Schrödinger Equation (Time-Dependent and Independent)",
          content: {}
        },
        {
          id: "operators",
          title: "2.3 Operators, Observables, and Expectation Values",
          content: {}
        },
        {
          id: "hilbert-space",
          title: "2.4 Hilbert Space and Dirac Notation",
          content: {}
        }
      ]
    },
    {
      id: "simple-systems",
      title: "3. Simple Quantum Systems",
      subsections: [
        {
          id: "particle-box",
          title: "3.1 Particle in a Box",
          content: {}
        },
        {
          id: "harmonic-oscillator",
          title: "3.2 Quantum Harmonic Oscillator",
          content: {}
        },
        {
          id: "tunneling",
          title: "3.3 Tunneling and Potential Barriers",
          content: {}
        },
        {
          id: "hydrogen-atom",
          title: "3.4 Hydrogen Atom and Quantum Numbers",
          content: {}
        }
      ]
    },
    {
      id: "angular-momentum",
      title: "4. Angular Momentum and Spin",
      subsections: [
        {
          id: "orbital-momentum",
          title: "4.1 Orbital Angular Momentum",
          content: {}
        },
        {
          id: "spin",
          title: "4.2 Spin and Stern-Gerlach Experiment",
          content: {}
        },
        {
          id: "addition",
          title: "4.3 Addition of Angular Momenta",
          content: {}
        },
        {
          id: "magnetic-moments",
          title: "4.4 Magnetic Moments (Spin-Orbit Coupling)",
          content: {}
        }
      ]
    },
    {
      id: "approximation-methods",
      title: "5. Approximation Methods",
      subsections: [
        {
          id: "perturbation",
          title: "5.1 Time-Independent Perturbation Theory",
          content: {}
        },
        {
          id: "variational",
          title: "5.2 Variational Principle",
          content: {}
        },
        {
          id: "time-dependent",
          title: "5.3 Time-Dependent Perturbation Theory",
          content: {}
        },
        {
          id: "fermi-rule",
          title: "5.4 Fermi's Golden Rule",
          content: {}
        }
      ]
    },
    {
      id: "multi-particle",
      title: "6. Multi-Particle Systems",
      subsections: [
        {
          id: "identical-particles",
          title: "6.1 Identical Particles and Symmetry",
          content: {}
        },
        {
          id: "pauli",
          title: "6.2 Pauli Exclusion Principle",
          content: {}
        },
        {
          id: "fermions-bosons",
          title: "6.3 Fermions vs. Bosons",
          content: {}
        },
        {
          id: "statistical-mechanics",
          title: "6.4 Basics of Quantum Statistical Mechanics",
          content: {}
        }
      ]
    },
    {
      id: "advanced-topics",
      title: "7. Advanced Topics",
      subsections: [
        {
          id: "relativistic",
          title: "7.1 Relativistic Quantum Mechanics (Klein-Gordon, Dirac Equations)",
          content: {}
        },
        {
          id: "entanglement",
          title: "7.2 Quantum Entanglement and Bell's Theorem",
          content: {}
        },
        {
          id: "field-theory",
          title: "7.3 Introduction to Quantum Field Theory",
          content: {}
        }
      ]
    },
    {
      id: "applications",
      title: "8. Applications and Extensions",
      subsections: [
        {
          id: "quantum-computing",
          title: "8.1 Quantum Computing Basics (Qubits, Superposition)",
          content: {}
        },
        {
          id: "cryptography",
          title: "8.2 Quantum Cryptography",
          content: {}
        },
        {
          id: "optics",
          title: "8.3 Quantum Optics (Photon States, Lasers)",
          content: {}
        },
        {
          id: "condensed-matter",
          title: "8.4 Condensed Matter Physics (Band Theory, Superconductivity)",
          content: {}
        }
      ]
    }
  ]
};
