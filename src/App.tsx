import { Atom, Menu, X, Book, Brain, Microscope, Heart } from 'lucide-react';
import { SimulationsPage } from './pages/SimulationsPage';
import { ConceptsPage } from './pages/ConceptsPage';
import { DefinitionsPage } from './pages/DefinitionsPage';
import { TopicPage } from './pages/TopicPage';
import { LandingPage } from './pages/LandingPage';
import { ContactPage } from './pages/ContactPage';
import { DonatePage } from './pages/DonatePage';
import ClassicalMechanicsStudyPage from './pages/ClassicalMechanicsStudyPage';
import ClassicalMechanicsContents from './pages/ClassicalMechanicsContents';
import MarkdownContentPage from './pages/MarkdownContentPage';
import WavesAndOscillationsContents from './pages/WavesAndOscillationsContents';
import ElectromagnetismContents from './pages/ElectromagnetismContents';
import QuantumPhysicsContents from './pages/QuantumPhysicsContents';
import QuantumPhysicsMarkdownContents from './pages/QuantumPhysicsMarkdownContents';
import LightContents from './pages/LightContents';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

export const topics = [
  {
    id: 'mechanics',
    title: 'Classical Mechanics',
    description: 'Learn about motion, forces, and energy in physical systems.',
    image: 'https://images.unsplash.com/photo-1454789476662-53eb23ba5907?auto=format&fit=crop&q=80&w=800',
    simulationAvailable: true
  },
  {
    id: 'waves',
    title: 'Waves & Oscillations',
    description: 'Explore wave phenomena, sound, and light behavior.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800',
    simulationAvailable: true
  },
  {
    id: 'quantum',
    title: 'Quantum Physics',
    description: 'Discover the fascinating world of quantum mechanics.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    simulationAvailable: false
  }
];

const navigationItems = [
  { icon: Book, label: 'Concepts', path: '/concepts' },
  { icon: Microscope, label: 'Simulations', path: '/simulations' },
  { icon: Brain, label: 'Definitions', path: '/definitions' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen text-gray-900 bg-white transition-colors dark:bg-gray-900 dark:text-gray-100">
          <nav className="bg-white shadow-lg dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <Atom className="w-8 h-8 text-blue-600" />
                    <span className="ml-2 text-xl font-bold">GammaPhysics</span>
                  </Link>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden items-center space-x-6 md:flex">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      <item.icon className="mr-2 w-5 h-5" />
                      {item.label}
                    </Link>
                  ))}
                  {/* Separate Donate Button */}
                  <Link
                    to="/donate"
                    className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    <Heart className="mr-2 w-5 h-5" />
                    Donate
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800"
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Menu */}
              {isMenuOpen && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                      >
                        <item.icon className="mr-2 w-5 h-5" />
                        {item.label}
                      </Link>
                    ))}
                    {/* Mobile Donate Button */}
                    <Link
                      to="/donate"
                      className="flex items-center px-3 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      <Heart className="mr-2 w-5 h-5" />
                      Donate
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <ThemeToggle />
          </nav>

          <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/concepts" element={<ConceptsPage />} />
              <Route path="/simulations" element={<SimulationsPage />} />
              <Route path="/definitions" element={<DefinitionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/topic/:id" element={<TopicPage />} />
              
              {/* Classical Mechanics Routes */}
              <Route path="/classical-mechanics" element={<ClassicalMechanicsContents />} />
              <Route path="/content/classical-mechanics" element={<ClassicalMechanicsContents />} />
              <Route path="/classical-mechanics/:sectionId" element={<ClassicalMechanicsStudyPage />} />
              <Route 
                path="/classical-mechanics/:sectionId/:subsectionId" 
                element={<MarkdownContentPage />}
              />
              <Route 
                path="/classical-mechanics/:sectionId/:subsectionId/:contentType" 
                element={<MarkdownContentPage />}
              />

              {/* Waves and Oscillations Routes */}
              <Route path="/waves-and-oscillations" element={<WavesAndOscillationsContents />} />
              <Route path="/content/waves-and-oscillations" element={<WavesAndOscillationsContents />} />
              <Route 
                path="/waves-and-oscillations/:sectionId/:subsectionId" 
                element={<MarkdownContentPage />}
              />
              
              <Route 
                path="/waves-and-oscillations/:sectionId/:subsectionId/:contentType" 
                element={<MarkdownContentPage />}
              />

              {/* Electromagnetism Routes */}
              <Route path="/electromagnetism" element={<ElectromagnetismContents />} />
              <Route path="/electromagnetism/:sectionId/:subsectionId" element={<MarkdownContentPage />} />
              <Route 
                path="/electromagnetism/:sectionId/:subsectionId/:contentType" 
                element={<MarkdownContentPage />}
              />

              {/* Quantum Physics Routes */}
              <Route path="/quantum-physics" element={<QuantumPhysicsContents />} />
              <Route path="/content/quantum-physics" element={<QuantumPhysicsMarkdownContents />} />
              <Route path="/quantum-physics/:sectionId/:subsectionId" element={<MarkdownContentPage />} />
              <Route 
                path="/quantum-physics/:sectionId/:subsectionId/:contentType" 
                element={<MarkdownContentPage />}
              />

              {/* Light Routes */}
              <Route path="/content/light" element={<LightContents />} />
              <Route 
                path="/light/:sectionId/:subsectionId" 
                element={<MarkdownContentPage contentType="light" />} 
              />
              <Route 
                path="/light/:sectionId/:subsectionId/:contentType" 
                element={<MarkdownContentPage />}
              />

              {/* Light Applications routes */}
              <Route 
                path="/light/applications/:subsectionId" 
                element={<MarkdownContentPage contentType="light" />} 
              />

              {/* Add this route */}
              <Route path="/content/electromagnetism" element={<ElectromagnetismContents />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;