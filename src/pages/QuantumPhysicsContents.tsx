import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { quantumPhysicsContent } from '../data/quantumPhysics';
import { ArrowLeft, ChevronRight, Atom, Clock, Users, BookOpen, Sparkles } from 'lucide-react';

const QuantumPhysicsContents: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-zinc-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900">
      <div className="px-4 py-12 mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16">
          <Link 
            to="/concepts" 
            className="inline-flex items-center mb-8 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Concepts
          </Link>
          
          <div className="flex flex-col mb-12 md:flex-row md:items-center md:space-x-8">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg transition-transform duration-200 transform dark:from-purple-500 dark:to-indigo-500 hover:scale-105">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="mt-4 mb-4 text-4xl font-bold text-gray-900 dark:text-white md:mt-0">
                {quantumPhysicsContent.title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {quantumPhysicsContent.introduction.mainDescription}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-200 dark:bg-gray-800 hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Historical Period</h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Early 20th Century</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-200 dark:bg-gray-800 hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Key Contributors</h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Planck, Bohr, Schrödinger</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-200 dark:bg-gray-800 hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <BookOpen className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Sections</h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">{quantumPhysicsContent.sections.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content List */}
        <div className="space-y-4">
          {quantumPhysicsContent.sections.map((section) => (
            <div 
              key={section.id} 
              className="overflow-hidden bg-white rounded-2xl shadow-md transition-all duration-200 dark:bg-gray-800 hover:shadow-lg"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="flex justify-between items-center w-full px-8 py-6 text-left"
              >
                <div className="flex items-center space-x-4">
                  <span className="flex justify-center items-center w-10 h-10 font-mono text-sm text-purple-600 bg-purple-100 rounded-lg dark:bg-purple-900 dark:text-purple-400">
                    {section.title.split('.')[0]}
                  </span>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {section.title.split('.')[1].trim()}
                  </h2>
                </div>
                <ChevronRight 
                  className={`w-6 h-6 text-purple-600 dark:text-purple-400 transition-transform duration-200 ${
                    expandedSection === section.id ? 'transform rotate-90' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`${
                  expandedSection === section.id ? 'max-h-[500px] border-t' : 'max-h-0'
                } transition-all duration-200 border-gray-100 dark:border-gray-700 overflow-hidden`}
              >
                <div className="px-8 py-6 space-y-4">
                  {section.subsections.map((subsection) => (
                    <Link
                      key={subsection.id}
                      to={`/quantum-physics/${section.id}/${subsection.id}`}
                      className="block p-4 -mx-4 text-gray-600 bg-white hover:bg-purple-50 transition-colors rounded-lg dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700/50"
                    >
                      <div className="flex items-center">
                        <span className="w-16 text-sm font-medium text-gray-400 dark:text-gray-500">
                          {subsection.title.split(' ')[0]}
                        </span>
                        <span className="flex-1 ml-4">
                          {subsection.title.split(' ').slice(1).join(' ')}
                        </span>
                        <ChevronRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 dark:text-slate-500 transition-all duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuantumPhysicsContents;
