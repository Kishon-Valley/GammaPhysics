import { useEffect } from 'react';

export const SimulationsPage = () => {
  useEffect(() => {
    // Open the external animations site in a new tab
    window.open('https://all-animations-x.vercel.app/', '_blank', 'noopener,noreferrer');
    
    // No need to redirect, user stays on current page
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-2xl font-bold mb-4">Physics Animations</h1>
      <p className="text-gray-700 mb-8 text-center max-w-2xl">
        Our interactive physics animations have opened in a new tab. If the tab didn't open, 
        please click the button below.
      </p>
      
      <a 
        href="https://all-animations-x.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Open Physics Animations
      </a>
    </div>
  );
};