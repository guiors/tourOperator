import React from 'react';
import bgImage from "../assets/bg.jpg";

function Background() {
  return (
    <div 
      className="relative w-screen h-[80vh] bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">Découvrez le berceau de l'humanité</h1>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;