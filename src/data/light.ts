import { PhysicsContent } from '../types/physics';

export const lightContent: PhysicsContent = {
  id: "light",
  title: "Light: Fundamentals and Applications",
  description: "Comprehensive study of light, from its fundamental nature to modern applications",
  introduction: {
    text: "Light is a fundamental aspect of physics that exhibits both wave and particle properties. Understanding light is crucial for modern technology and scientific advancement."
  },
  sections: [
    {
      id: "nature-of-light",
      title: "1. Nature of Light",
      subsections: [
        {
          id: "wave-particle-duality",
          title: "Wave-Particle Duality",
          content: {
            topics: [
              {
                name: "Wave-Particle Duality",
                properties: [
                  "Wave properties (interference, diffraction)",
                  "Particle properties (photoelectric effect, Compton effect)",
                  "Historical development",
                  "Quantum mechanical interpretation",
                  "Modern applications"
                ]
              }
            ]
          }
        },
        {
          id: "historical-models",
          title: "Historical Models of Light",
          content: {
            topics: [
              {
                name: "Historical Models",
                properties: [
                  "Ancient theories",
                  "Corpuscular theory",
                  "Wave theory development",
                  "Electromagnetic theory",
                  "Quantum theory emergence"
                ]
              }
            ]
          }
        },
        {
          id: "em-spectrum",
          title: "Electromagnetic Spectrum",
          content: {
            topics: [
              {
                name: "EM Spectrum",
                properties: [
                  "Radio waves",
                  "Microwaves",
                  "Infrared",
                  "Visible light",
                  "Ultraviolet",
                  "X-rays",
                  "Gamma rays"
                ]
              }
            ]
          }
        }
      ]
    }
  ]
}; 