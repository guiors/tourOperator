import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      text:"Grace à Naty Tadesse notre guide nous venons de vivre l’un de nos plus beau voyage dans un pays souvent décrié pour son insécurité.Nous avons grace à ses connaissances, sa culture et son excellent français découvert des sites, des ethnies et des tribus avec respect et humilité.",
      source: 'Guide du Routard',
      link: "https://www.routard.com/forums/t/guide-naty-tadesse-en-ethiopie/298384"
    },
    {
      text: 'Ah , vous avez réveillé en moi des souvenirs inoubliables ! Oui , l’Ethiopie est un pays exceptionnel . j’avais fait comme vous à partir d’un français établi à AA et qui m’avais fourni le 4-4 , le chauffeur + le guide parlant parfaitement français + un cuisinier car j’avais voulu aller PARTOUT , sauf au sud-est vers la Somalie par sécurité sinon du Dallol au Kenya et avec la fameuse Timkat à Lalibella . Pour les tribus du sud , le guide fut indispensable…pour payer le droit de pouvoir photographier/filmer car je ne sais pas vous , mais sauf les premiers jours , IMPOSSIBLE d’obternir des petites coupures : toujours des billets de 100 alors lui s’arrangeait avec les locaux et je l’ai remboursé à la fin . A Harar , pour les hyènes , je me suis dégonflé ! Je me disais : un bout de fer de 30 cm , pas plus ,dans la bouche , avec le reflet des lunettes à cause des phares et mon odeur corporelle de blanc, hum ! Une déception : le parc Bale ; à part quelques phacochères aperçus au loin , je n’ai RIEN vu !Photo 1 : Lalibella 2 : demeure-souvenir de Rimbaud 3 : elle se croit belle…et elle l’est !',
      source: 'Guide du Routard',
      link: 'https://www.routard.com/forums/t/guide-naty-tadesse-en-ethiopie/298384',
    },
    {
      text: 'Bonjour, avec une copine nous sommes rentrées dimanche. C’est un pays magnifique , des paysages sublimes, des gens merveilleux, des ethnies wow, des enfants adorables… On en a eu plein les yeux dans tous les sens du terme...',
      source: 'Guide du Routard',
      link: 'https://www.routard.com/forums/t/de-retour-dun-fabuleux-voyage-en-ethiopie/289428/2',
    },
    {
      text: 'Je suis allé en Ethiopie en octobre 2020, sans probleme en faisant attention avec le Covid19. Je vous recommande 2 guides tres sérieux, sympathiques et très compétents comme guides touristiques... ',
      source: 'Guide du Routard',
      link: 'https://www.routard.com/forums/t/voyage-magnifique-en-ethiopie-avec-2-guides-competents-et-serieux/276624',
    },
    {
      text:"bonjour les routards, je viens de rentrer d’Ethiopie et j’ai voulu partager avec vous mon expérience et surtout, vous conseiller un TRES bon guide...",
      source: 'Guide du Routard',
      link: "https://www.routard.com/forums/t/le-meilleur-guide-dethiopie/325148"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };
  const truncateReviewText = (text, maxLength = 250) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl sm:text-5xl text-center font-normal mb-8 uppercase">
        Les recommandations de nos clients
      </h1>

      <div className="bg-[#e1c9ab] shadow-lg rounded-lg p-6 text-center relative text-black">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-100"
          onClick={handlePrev}
        >
          <ChevronLeftIcon size={24} color='black' />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-100"
          onClick={handleNext}
        >
          <ChevronRightIcon size={24} color='black' />
        </button>
        <p className="text-lg sm:text-xl mb-4 italic">"{truncateReviewText(reviews[currentIndex].text)}"</p>
        <p className="text-sm sm:text-base font-semibold mb-4">— {reviews[currentIndex].source}</p>
        <a
          href={reviews[currentIndex].link}
          className="text-[#1aa220] font-medium underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default Reviews;