import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomeSection() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl sm:text-5xl text-center font-normal mb-8">
        DECOUVREZ L'ÉTHIOPIE AVEC KADABA ETHIOPIA TOUR 
      </h1>

      <p className="text-center mb-12 text-xl italic text-[#1aa220] font-light">
      Désirs d’aventures, de cultures authentiques, de peuples chaleureux, de nature luxuriante et de panoramas époustouflants ! KADABA ETHIOPIA TOUR vous guide en Éthiopie pour explorer ce pays aux multiples facettes.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12 text-gray-700">
        <div className="space-y-4">
          <p className="text-justify leading-relaxed">
          Nous vous invitons à entreprendre un voyage inoubliable à travers le cœur et l'âme de l'une des destinations les plus diversifiées et captivantes d'Afrique. Avec une passion profonde pour mettre en valeur la beauté, la culture et le patrimoine de l'Éthiopie, nous nous spécialisons dans la création d'expériences de voyage immersives qui laissent une impression durable.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-justify leading-relaxed">
          Notre mission est simple : connecter les voyageurs avec la richesse de la culture, de l'histoire et des merveilles naturelles éthiopiennes tout en favorisant des pratiques de tourisme durable qui bénéficient aux communautés locales et préservent l'environnement pour les générations futures.
          </p>

        </div>
      </div>

      <div className="text-center">
        <button onClick={handleNavigate} className="border-2 border-[#1aa220] text-[#1aa220] px-8 py-3 hover:bg-[#1aa220] hover:text-white transition-colors duration-300 uppercase">
          Découvrir KADABA ETHIOPIA TOUR
        </button>
      </div>
    </div>
  );
}

export default WelcomeSection;