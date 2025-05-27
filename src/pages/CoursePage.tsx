import { Link, useParams } from 'react-router-dom';

interface Course {
  code: string;
  title: string;
  topics: string[];
  description: string;
  year: number;
}

const courses: { [key: string]: Course } = {
  'ph1a': {
    code: 'Ph 1a',
    title: 'Classical Mechanics',
    year: 1,
    description: 'Foundations of Newtonian mechanics, oscillations, and conservation laws.',
    topics: ['Oscillations', 'Periodic Motion', 'Conservation Laws', 'Special Relativity']
  },
  'ph1b': {
    code: 'Ph 1b',
    title: 'Waves and Oscillations',
    year: 1,
    description: 'Study of wave phenomena, interference, and wave mechanics.',
    topics: ['Wave Mechanics', 'Interference', 'Wave Patterns']
  },
  'ph1c': {
    code: 'Ph 1c',
    title: 'Electromagnetism',
    year: 1,
    description: 'Introduction to electric and magnetic fields and their interactions.',
    topics: ['Electric Fields', 'Magnetic Fields', 'Field Interactions']
  },
  'ph2b': {
    code: 'Ph 2b',
    title: 'Quantum Mechanics',
    year: 2,
    description: 'Introduction to quantum mechanics and probability.',
    topics: ['Wave Functions', 'Quantum States', 'Probability']
  }
};

export function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? courses[courseId] : null;

  if (!course) {
    return (
      <div className="container p-4 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-red-600">Course Not Found</h1>
        <p className="mb-4">The requested course does not exist or is not yet available.</p>
        <Link to="/courses" className="text-blue-600 hover:underline">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-4">
        <Link to="/courses" className="text-blue-600 hover:underline">
          ← Back to Courses
        </Link>
      </div>

      <h1 className="mb-4 text-3xl font-bold">
        {course.code}: {course.title}
      </h1>
      <p className="mb-6 text-lg text-gray-600">{course.description}</p>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Topics Covered</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {course.topics.map((topic) => (
            <li
              key={topic}
              className="p-4 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg"
            >
              <Link
                to={`/courses/${courseId}/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <h3 className="mb-2 text-lg font-medium">{topic}</h3>
                {/* Add topic-specific content here */}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Available Simulations</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {courseId === 'ph1a' ? (
            <>
              <Link
                to="/simulations/pendulum"
                className="p-4 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-medium">Simple Pendulum</h3>
                <p className="text-gray-600">
                  Explore periodic motion and oscillations with an interactive pendulum simulation.
                </p>
              </Link>
              <Link
                to="/simulations/spring"
                className="p-4 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-medium">Spring Oscillation</h3>
                <p className="text-gray-600">
                  Study Hooke's law and harmonic motion with a spring-mass system.
                </p>
              </Link>
            </>
          ) : courseId === 'ph1b' ? (
            <Link
              to="/simulations/wave"
              className="p-4 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-medium">Wave Propagation</h3>
              <p className="text-gray-600">
                Visualize wave behavior and understand wave mechanics principles.
              </p>
            </Link>
          ) : (
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600">
                🚧 Simulations for this course are coming soon! We're working hard to add more
                interactive content.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
