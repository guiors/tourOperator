import React from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationGrid from './DestinationGrid';

function CircuitsPreviewSection() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/circuits');
    window.scrollTo(0, 0);
  };
  return (
    <section className="py-16">
      <h1 className="text-4xl sm:text-5xl text-center font-normal mb-8">
        DECOUVREZ NOS CIRCUITS
      </h1>
      
      <DestinationGrid limit={3} />
      
      <div className="text-center mt-12">
        <button 
          onClick={handleNavigate}
          className="border-2 border-[#1aa220] text-[#1aa220] px-8 py-3 hover:bg-[#1aa220] hover:text-white transition-colors duration-300 uppercase"
        >
          Découvrez plus de circuits
        </button>
      </div>
    </section>
  );
}

export default CircuitsPreviewSection;