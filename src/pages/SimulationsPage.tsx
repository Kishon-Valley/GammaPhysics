

export const SimulationsPage = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-2xl font-bold mb-4">Physics Animations</h1>
      <p className="text-gray-700 mb-8 text-center max-w-2xl">
        Click the button below to open our interactive physics animations in a new tab.
      </p>
      
      <a 
        href="https://www.gammaphysics.app/simulations" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Open Physics Animations
      </a>
    </div>
  );
};