import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Brain, Microscope, Menu, X, Heart } from 'lucide-react';
import { topics } from '../App';
import { useState } from 'react';

const AtomBackground = () => {
  return (
    <div className="overflow-hidden absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900" />
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="absolute" style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          opacity: 0.2,
          transform: `scale(${0.6 + Math.random() * 0.8})`,
        }}>
          {/* Atom with nucleus and orbiting electrons */}
          <div className="relative w-40 h-40">
            {/* Nucleus */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-full shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Electron orbits - using multiple orbits at different angles */}
            {/* Orbit 1 */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-40 h-24 -ml-20 -mt-12 border border-gray-400 rounded-full opacity-40"
              animate={{ rotateY: 360, rotateX: 10 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute top-1/2 left-0 w-3 h-3 -mt-1.5 bg-blue-500 rounded-full shadow-md"
                animate={{ left: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute top-1/2 right-0 w-3 h-3 -mt-1.5 bg-blue-500 rounded-full shadow-md"
                animate={{ right: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Orbit 2 */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-36 h-36 -ml-18 -mt-18 border border-gray-400 rounded-full opacity-40"
              style={{ transform: "rotateX(60deg) rotateY(10deg)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-md"
              />
              <motion.div 
                className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-md"
              />
            </motion.div>
            
            {/* Orbit 3 */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-32 h-32 -ml-16 -mt-16 border border-gray-400 rounded-full opacity-40"
              style={{ transform: "rotateX(120deg) rotateY(20deg)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-md"
              />
              <motion.div 
                className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-md"
              />
            </motion.div>

            {/* Orbit 4 */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-28 h-28 -ml-14 -mt-14 border border-gray-400 rounded-full opacity-40"
              style={{ transform: "rotateX(30deg) rotateY(60deg)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-md"
              />
              <motion.div 
                className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-md"
              />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Concepts', path: '/concepts' },
    { name: 'Simulations', path: 'https://animations.gammaphysics.app/', external: true },
    { name: 'Definitions', path: '/definitions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <AtomBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 shadow-sm backdrop-blur-sm bg-white/80">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center text-2xl font-bold text-blue-600">
              <img src="/images/GammaphysicsLogo.jpg" alt="GammaPhysics Logo" className="w-8 h-8 mr-2" />
              GammaPhysics
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navigationLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to="/donate">
                <button className="flex items-center px-4 py-2 text-white bg-pink-600 rounded-full transition-colors hover:bg-pink-700">
                  <Heart className="mr-2 w-4 h-4" />
                Support Us
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 rounded-md md:hidden hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-t md:hidden"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-gray-600 transition-colors hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-2 text-gray-600 transition-colors hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                <button className="flex justify-center items-center px-4 py-2 mt-2 w-full text-white bg-pink-600 rounded-full transition-colors hover:bg-pink-700">
                  <Heart className="mr-2 w-4 h-4" />
                  Support Us
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Add margin-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="overflow-hidden relative">
          <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-6xl font-extrabold tracking-tight md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block text-gray-900">Master Physics</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Interactive & Free
                </span>
              </motion.h1>
              <motion.p 
                className="mx-auto mt-6 max-w-2xl text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Explore physics through interactive simulations, comprehensive notes, and real-world applications.
              </motion.p>
              <motion.div 
                className="flex gap-4 justify-center mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/concepts">
                  <button className="flex items-center px-8 py-3 text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
                <a href="https://animations.gammaphysics.app/" target="_blank" rel="noopener noreferrer">
                  <button className="px-8 py-3 text-blue-600 bg-white rounded-full border-2 border-blue-600 transition-colors hover:bg-blue-50">
                    Try Simulations
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Key Features</h2>
              <p className="mt-4 text-xl text-gray-800 font-medium">Everything you need to master physics concepts</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: Book,
                  title: "Comprehensive Learning",
                  description: "Detailed notes and explanations for all major physics topics"
                },
                {
                  icon: Microscope,
                  title: "Interactive Simulations",
                  description: "Visualize complex concepts through our interactive simulations"
                },
                {
                  icon: Brain,
                  title: "Practice Problems",
                  description: "Reinforce your understanding with practice problems and solutions"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-6 bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <feature.icon className="mb-4 w-12 h-12 text-blue-600" />
                  <h3 className="mb-2 text-2xl font-extrabold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 font-medium">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="py-24 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Popular Topics</h2>
              <p className="mt-4 text-xl text-gray-800 font-medium">Start learning from our most popular subjects</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Link to={`/topic/${topic.id}`}>
                    <div className="overflow-hidden bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
                      <img 
                        src={topic.image} 
                        alt={topic.title}
                        className="object-cover w-full h-48"
                      />
                      <div className="p-6">
                        <h3 className="mb-2 text-2xl font-extrabold text-gray-900">{topic.title}</h3>
                        <p className="mb-4 text-gray-700 font-medium">{topic.description}</p>
                        <div className="flex items-center text-blue-700 font-semibold">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="relative bg-contain bg-no-repeat bg-center bg-black"
          style={{ backgroundImage: "url('/images/GammaphysicsLogo.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative px-4 py-16 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
            <h2 className="mb-8 text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">Ready to Start Learning?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link to="/concepts">
                <button className="px-8 py-3 text-blue-600 bg-white rounded-full transition-colors hover:bg-blue-50">
                  Start Learning
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-3 text-white bg-transparent rounded-full border-2 border-white transition-colors hover:bg-white/10">
                  Contact Us
                </button>
              </Link>
              <div className="mt-6 md:mt-0 md:ml-6">
                <div className="flex items-center overflow-hidden border-2 border-gray-200 rounded-full">
                  <span className="px-4 py-2 text-sm font-semibold tracking-wider text-black uppercase bg-white">
                    built by
                  </span>
                  <a
                    href="https://lmtsoftware.gammaphysics.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-red-500 underline hover:bg-red-600"
                  >
                    lmtsoftware
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}