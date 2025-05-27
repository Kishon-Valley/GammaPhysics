import React from 'react';
import { useParams, Link } from 'react-router-dom';
import animations from '../components/animations';

const topics = {
  mechanics: {
    title: 'Classical Mechanics',
    description: 'Core foundation of physics covering Newtonian mechanics, oscillations, and conservation laws.',
    content: 'Classical mechanics forms the foundation of physics, dealing with the motion of objects and the forces that govern them.',
    subTopics: [
      {
        title: 'Newtonian Mechanics',
        content: 'The fundamental laws of motion and forces.',
        animation: 'newton-laws-animation'
      },
      {
        title: 'Oscillations',
        content: 'Study of simple harmonic motion and damped oscillations in physical systems.',
        animation: 'oscillations-animation'
      },
      {
        title: 'Conservation Laws',
        content: 'Principles of conservation of energy, momentum, and angular momentum.',
        animation: 'conservation-animation'
      },
      {
        title: 'Special Relativity',
        content: 'Einstein\'s theory of space, time, and motion at high speeds.',
        animation: 'relativity-animation'
      }
    ]
  },
  quantum: {
    title: 'Quantum Mechanics',
    description: 'Advanced study of matter and energy at the atomic and subatomic scales.',
    content: 'Quantum mechanics describes the behavior of matter and energy at the microscopic level, revealing the probabilistic nature of reality.',
    subTopics: [
      {
        title: 'Wave-Particle Duality',
        content: 'The dual nature of matter and light.',
        animation: 'wave-particle-animation'
      },
      {
        title: 'Schrödinger Equation',
        content: 'The fundamental equation of quantum mechanics describing wave functions.',
        animation: 'schrodinger-animation'
      },
      {
        title: 'Quantum States',
        content: 'Energy levels, spin, and quantum numbers.',
        animation: 'quantum-states-animation'
      },
      {
        title: 'Quantum Tunneling',
        content: 'The quantum mechanical phenomenon of particles passing through barriers.',
        animation: 'tunneling-animation'
      }
    ]
  },
  electromagnetism: {
    title: 'Electromagnetism',
    description: 'Study of electric and magnetic fields and their interactions with matter.',
    content: 'Electromagnetism unifies electricity and magnetism, explaining electromagnetic waves and their applications.',
    subTopics: [
      {
        title: 'Electric Fields',
        content: 'Forces and fields created by electric charges.',
        animation: 'electric-fields-animation'
      },
      {
        title: 'Magnetic Fields',
        content: 'Forces and fields created by moving charges and currents.',
        animation: 'magnetic-fields-animation'
      },
      {
        title: 'Maxwell\'s Equations',
        content: 'The fundamental equations unifying electricity and magnetism.',
        animation: 'maxwell-animation'
      },
      {
        title: 'Electromagnetic Waves',
        content: 'The propagation of electromagnetic radiation.',
        animation: 'em-waves-animation'
      }
    ]
  },
  waves: {
    title: 'Waves & Oscillations',
    description: 'Explore wave phenomena, sound, and light behavior.',
    content: 'Waves are disturbances that transfer energy through matter or space, forming the basis for many physical phenomena including sound and light.',
    subTopics: [
      {
        title: 'Wave Properties',
        content: 'Fundamental characteristics of waves including amplitude, frequency, wavelength, and phase.',
        animation: 'wave-properties-animation'
      },
      {
        title: 'Sound Waves',
        content: 'Longitudinal pressure waves that travel through a medium.',
        animation: 'sound-waves-animation'
      },
      {
        title: 'Interference & Diffraction',
        content: 'Wave interactions that demonstrate their fundamental nature.',
        animation: 'wave-interference-animation'
      },
      {
        title: 'Resonance',
        content: 'Amplification of oscillations at specific frequencies.',
        animation: 'resonance-animation'
      }
    ]
  },
  statistical: {
    title: 'Statistical Mechanics',
    description: 'Bridge between microscopic behavior and macroscopic properties of matter.',
    content: 'Statistical mechanics explains how microscopic properties lead to macroscopic phenomena like temperature and entropy.',
    subTopics: [
      {
        title: 'Thermodynamics',
        content: 'Laws governing heat, energy, and work.',
        animation: 'thermodynamics-animation'
      },
      {
        title: 'Entropy',
        content: 'The measure of disorder and irreversibility.',
        animation: 'entropy-animation'
      },
      {
        title: 'Phase Transitions',
        content: 'Changes between different states of matter.',
        animation: 'phase-transitions-animation'
      },
      {
        title: 'Quantum Statistics',
        content: 'Statistical behavior of quantum systems.',
        animation: 'quantum-statistics-animation'
      }
    ]
  }
};

export const TopicPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic = id ? topics[id as keyof typeof topics] : null;
  const [activeSubTopic, setActiveSubTopic] = React.useState<string | null>(null);

  if (!topic) {
    return <div className="p-4">Topic not found</div>;
  }

  const handleSubTopicClick = (title: string) => {
    setActiveSubTopic(activeSubTopic === title ? null : title);
  };

  return (
    <div className="p-6 mx-auto max-w-4xl">
      {(id === 'mechanics' || id === 'waves' || id === 'quantum') && (
        <div className="p-5 mb-8 text-base bg-yellow-50 border-2 border-yellow-400 rounded-lg shadow-md">
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <p className="font-medium text-gray-800">
                We're still working to add more animations and also improve the animations here. 
                If you have any contributions, corrections or any support feel free to ---
                <Link to="/contact" className="text-blue-600 font-bold hover:underline">reach us</Link>. 
                We seek to make science interesting for everyone.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{topic.title}</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-200">{topic.description}</p>
      <div className="mb-8 max-w-none prose dark:prose-invert">
        <p className="text-gray-800 dark:text-gray-100">{topic.content}</p>
      </div>
      
      <div className="space-y-4">
        {topic.subTopics.map((subTopic) => (
          <div key={subTopic.title} className="overflow-hidden rounded-lg border">
            <button
              onClick={() => handleSubTopicClick(subTopic.title)}
              className="p-4 w-full text-left bg-white dark:bg-gray-800 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{subTopic.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{subTopic.content}</p>
            </button>
            
            {activeSubTopic === subTopic.title && (
              <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t dark:border-gray-600">
                {subTopic.content && (
                  <p className="mb-4 text-gray-700 dark:text-gray-200">{subTopic.content}</p>
                )}
                <div className="flex justify-center items-start bg-white dark:bg-gray-800 rounded-lg shadow-inner min-h-[600px]">
                  {subTopic.animation && animations[subTopic.animation as keyof typeof animations] ? (
                    React.createElement(animations[subTopic.animation as keyof typeof animations])
                  ) : (
                    <div className="flex justify-center items-center h-full text-gray-500 dark:text-gray-400">
                      <p>Animation not available</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
