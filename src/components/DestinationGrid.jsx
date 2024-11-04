import React from 'react';
import volcano from "../assets/volcano.jpg";
import raven from "../assets/raven.jpg";
import portrait from "../assets/portrait.jpg";
import lalibela from "../assets/lalibela.jpg";
import randonne from "../assets/randonne.jpg";
import est from "../assets/est.jpg";
import addis from "../assets/addis.jpg";
const allDestinations = [
  {
    title: "Sud",
    image: portrait,
    href: "circuits/sud"
  },
  {
    title: "Addis Abeba et ses environs",
    image: addis,
    href: "circuits/addis-abeba"
  },
  {
    title: "Nord",
    image: lalibela,
    href: "circuits/nord"
  },
  {
    title: "Aventure",
    image: volcano,
    href: "circuits/aventure"
  },
  {
    title: "Observation des oiseaux",
    image: raven,
    href: "circuits/oiseaux"
  },
  {
    title: "Ethiopie Orientale",
    image: est,
    href: "circuits/ethiopieOrientale",
  },
  {
    title: "Randonnée",
    image: randonne,
    href: "circuits/randonnee"
  }
];

const DestinationGrid = ({ onDestinationClick, limit }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    if (onDestinationClick) {
      onDestinationClick(href);
    } else {
      window.location.href = href;
    }
  };

  const destinations = limit ? allDestinations.slice(0, limit) : allDestinations;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <a 
            key={destination.title}
            href={destination.href}
            onClick={(e) => handleClick(e, destination.href)}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-0 pb-[40vh] w-full">
              <img
                src={destination.image}
                alt={destination.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h2 className="text-2xl font-bold mb-2">
                  {destination.title}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DestinationGrid;