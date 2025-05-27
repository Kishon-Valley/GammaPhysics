import { ContentData } from '../types/content';

export const wavesAndOscillationsContent: ContentData = {
  id: "waves",
  title: "Waves",
  introduction: {
    mainDescription: "Waves are fundamental phenomena in physics that describe the propagation of disturbances through space and matter. This field connects classical mechanics with modern physics, playing a crucial role in understanding everything from sound and light to quantum wavefunctions.",
    historicalContext: {
      development: [
        "Ancient observations of water waves and musical instruments",
        "Development of mathematical descriptions of harmonic motion",
        "Understanding of light as electromagnetic waves",
        "Modern applications in quantum mechanics and technology"
      ],
      significance: "The study of waves provides essential tools for understanding natural phenomena across all scales, from subatomic particles to cosmic events.",
      limitations: "While the basic principles are straightforward, complex systems can exhibit nonlinear behavior that requires advanced mathematical treatment.",
      keyContributors: [
        {
          name: "Robert Hooke",
          contributions: [
            "Discovered Hooke's Law",
            "Laid foundation for understanding elastic oscillations",
            "Developed early wave theory"
          ]
        },
        {
          name: "Christiaan Huygens",
          contributions: [
            "Developed wave theory of light",
            "Studied pendulum motion",
            "Invented the pendulum clock"
          ]
        }
      ]
    }
  },
  sections: [
    
    {
      id: "wave-fundamentals",
      title: "1. Wave Fundamentals",
      subsections: [
        {
          id: "wave-types",
          title: "1.1 Types of Waves (Mechanical, Electromagnetic, Transverse, Longitudinal)",
          content: {}
        },
        {
          id: "wave-characteristics",
          title: "1.2 Wave Characteristics (Amplitude, Wavelength, Frequency, Velocity)",
          content: {}
        },
        {
          id: "mathematical-description",
          title: "1.3 Mathematical Description (Wave Equation, Solutions)",
          content: {}
        }
      ]
    },
    {
      id: "wave-propagation",
      title: "2. Wave Propagation",
      subsections: [
        {
          id: "wave-speed",
          title: "2.1 Wave Speed on a String",
          content: {}
        },
        {
          id: "energy-transfer",
          title: "2.2 Energy Transfer and Power",
          content: {}
        },
        {
          id: "wave-impedance",
          title: "2.3 Wave Impedance and Intensity",
          content: {},
          navigation: [
            {
              title: 'Wave Speed',
              path: 'waves-wave-speed',
            },
            {
              title: 'Energy Transfer and Power',
              path: 'waves-energy-transfer',
            },
            {
              title: 'Wave Impedance',
              path: 'waves-wave-impedance',
            },
          ]
        }
      ]
    },
    {
      id: "superposition-interference",
      title: "3. Superposition and Interference",
      subsections: [
        {
          id: "superposition-principle",
          title: "3.1 Principle of Superposition",
          content: {}
        },
        {
          id: "interference",
          title: "3.2 Constructive and Destructive Interference",
          content: {}
        },
        {
          id: "standing-waves",
          title: "3.3 Standing Waves and Normal Modes",
          content: {}
        },
        {
          id: "beats",
          title: "3.4 Beats",
          content: {}
        }
      ]
    },
    {
      id: "wave-phenomena",
      title: "4. Wave Phenomena",
      subsections: [
        {
          id: "reflection-transmission",
          title: "4.1 Reflection and Transmission",
          content: {}
        },
        {
          id: "refraction-diffraction",
          title: "4.2 Refraction and Diffraction",
          content: {}
        },
        {
          id: "dispersion",
          title: "4.3 Dispersion",
          content: {}
        },
        {
          id: "doppler-effect",
          title: "4.4 Doppler Effect",
          content: {}
        }
      ]
    },
    {
      id: "sound-waves",
      title: "5. Sound Waves",
      subsections: [
        {
          id: "sound-properties",
          title: "5.1 Properties of Sound",
          content: {}
        },
        {
          id: "sound-speed",
          title: "5.2 Speed of Sound in Media",
          content: {}
        },
        {
          id: "sound-intensity",
          title: "5.3 Intensity and Decibel Scale",
          content: {}
        },
        {
          id: "sound-doppler",
          title: "5.4 Doppler Effect in Sound",
          content: {}
        },
        {
          id: "shock-waves",
          title: "5.5 Shock Waves and Sonic Booms",
          content: {}
        }
      ]
    },
    {
      id: "electromagnetic-waves",
      title: "6. Electromagnetic Waves",
      subsections: [
        {
          id: "maxwell-equations",
          title: "6.1 Maxwell's Equations and EM Wave Propagation",
          content: {}
        },
        {
          id: "polarization",
          title: "6.2 Polarization",
          content: {}
        },
        {
          id: "em-energy",
          title: "6.3 Energy, Momentum, and Radiation Pressure",
          content: {}
        }
      ]
    },
    {
      id: "wave-optics",
        title: "7. Wave Optics",
      subsections: [
        {
          id: "interference-optics",
          title: "7.1 Interference (Young's Double-Slit, Thin Films)",
          content: {}
        },
        {
          id: "diffraction-optics",
          title: "7.2 Diffraction (Single Slit, Gratings)",
          content: {}
        },
        {
          id: "huygens-principle",
          title: "7.3 Huygens' Principle",
          content: {}
        },
        {
          id: "resolution",
          title: "7.4 Resolution and Diffraction Limit",
          content: {}
        }
      ]
    },
    {
      id: "advanced-topics",
                title: "8. Advanced Topics",
      subsections: [
        {
          id: "nonlinear-waves",
          title: "8.1 Nonlinear Waves and Solitons",
          content: {}
        },
        {
          id: "wave-packets",
          title: "8.2 Wave Packets and Group Velocity",
          content: {}
        },
        {
          id: "fourier-analysis",
          title: "8.3 Fourier Analysis of Waves",
          content: {}
        },
        {
          id: "applications",
          title: "8.4 Applications (Acoustics, Optics, Communication)",
          content: {}
        }
      ]
    }
  ]
};