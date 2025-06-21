import React from "react";

const Footer: React.FC = () => (
  <footer className="relative w-full mt-8" style={{ minHeight: '120px' }}>
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-80"
      style={{ backgroundImage: "url('/images/GammaphysicsLogo.jpg')", zIndex: 1 }}
      aria-hidden="true"
    ></div>
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black opacity-60" style={{ zIndex: 2 }}></div>
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full py-8">
      <span className="text-white text-lg font-medium">
        built by{' '}
        <a
          href="https://lmtsoftware.gammaphysics.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300 hover:text-blue-400"
        >
          lmtsoftware
        </a>
      </span>
    </div>
  </footer>
);

export default Footer; 