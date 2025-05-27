import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { wavesAndOscillationsContent } from '../data/wavesAndOscillations';
import { ArrowLeft, ChevronRight, Waves, Clock, Users, BookOpen } from 'lucide-react';

const WavesAndOscillationsContents: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-slate-50 to-zinc-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900">
      <div className="px-4 py-12 mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center mb-8 text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <div className="flex flex-col mb-12 md:flex-row md:items-center md:space-x-8">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-sky-600 to-cyan-600 rounded-2xl shadow-lg transition-transform duration-200 transform dark:from-sky-500 dark:to-cyan-500 hover:scale-105">
              <Waves className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="mt-4 mb-4 text-4xl font-bold text-gray-900 dark:text-white md:mt-0">
                {wavesAndOscillationsContent.title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {wavesAndOscillationsContent.introduction.mainDescription}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-200 dark:bg-gray-800 hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-sky-500" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Historical Development</h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Ancient to Modern</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-200 dark:bg-gray-800 hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-sky-500" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Key Contributors</h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Hooke, Huygens</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-200 dark:bg-gray-800 hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <BookOpen className="w-8 h-8 text-sky-500" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Sections</h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">{wavesAndOscillationsContent.sections.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content List */}
        <div className="space-y-4">
          {wavesAndOscillationsContent.sections.map((section) => (
            <div 
              key={section.id} 
              className="overflow-hidden bg-white rounded-2xl shadow-md transition-all duration-200 dark:bg-gray-800 hover:shadow-lg"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="flex justify-between items-center px-8 py-6 w-full"
              >
                <div className="flex items-center space-x-4">
                  <span className="flex justify-center items-center w-10 h-10 font-mono text-sm text-sky-600 bg-sky-100 rounded-lg dark:bg-sky-900 dark:text-sky-400">
                    {section.title.split('.')[0].padStart(2, '0')}
                  </span>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {section.title.split('.')[1]}
                  </h2>
                </div>
                <ChevronRight 
                  className={`w-6 h-6 text-sky-600 dark:text-sky-400 transition-transform duration-200 ${
                    expandedSection === section.id ? 'transform rotate-90' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`px-8 pb-6 space-y-4 transition-all duration-200 ${
                  expandedSection === section.id ? 'block' : 'hidden'
                }`}
              >
                {section.subsections.map((subsection) => (
                  <Link
                    key={subsection.id}
                    to={`/waves-and-oscillations/${section.id}/${subsection.id}`}
                    className="flex items-center px-4 py-3 space-x-4 text-gray-700 bg-gray-50 rounded-lg transition-colors duration-200 dark:bg-gray-700/50 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-sky-900/30"
                  >
                    <span className="text-sm font-medium">{subsection.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WavesAndOscillationsContents;
