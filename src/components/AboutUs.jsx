import React from 'react';
import { Globe2, Users, Heart, Car, Bed, Mountain, Camera, Plane, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const services = [
    { icon: <Globe2 className="w-6 h-6" />, name: "Voyages Entrants et Sortants" },
    { icon: <Plane className="w-6 h-6" />, name: "Réservation de Vols" },
    { icon: <Bed className="w-6 h-6" />, name: "Réservation d'Hôtels" },
    { icon: <Car className="w-6 h-6" />, name: "Location de Voitures" },
    { icon: <Mountain className="w-6 h-6" />, name: "Équipements de Camping" },
    { icon: <Calendar className="w-6 h-6" />, name: "Organisation d'Événements" }
  ];

  const experiences = [
    { 
      icon: <Camera className="w-6 h-6" />, 
      title: "Expériences sur mesure", 
      description: "Que vous recherchiez une aventure de trekking à travers les paysages accidentés des Montagnes Simien, l'exploration des anciennes églises taillées dans la roche à Lalibela, ou une immersion dans les traditions vibrantes des tribus de la vallée de l'Omo, nous adaptons chaque expérience à vos intérêts et préférences. Notre entreprise offre des opportunités exceptionnelles pour s'immerger dans les cultures locales en participant et en s'engageant dans les activités quotidiennes des habitants, tout en enrichissant le voyage avec une gamme d'activités touristiques personnalisées selon les intérêts de nos clients."
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Guides experts", 
      description: "Notre équipe de guides locaux compétents et expérimentés est passionnée par le partage de leurs connaissances et de leurs récits, vous offrant une compréhension approfondie des cultures diverses, de l'histoire et de la faune de l'Éthiopie. Notre société est dirigée par des cadres expérimentés, avec une équipe de spécialistes du voyage professionnels, de guides touristiques multilingues et de chauffeurs, possédant une immense connaissance, des compétences et une capacité avec une attention cordiale pour offrir un service exceptionnel aux clients."
    },
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: "Voyage responsable", 
      description: "Nous nous engageons à des pratiques de tourisme responsable qui priorisent le bien-être des communautés locales et la conservation du patrimoine naturel et culturel de l'Éthiopie. KADABA ETHIOPIA TOUR propose des voyages écologiques et durables vers des endroits charmants et passionnants. De la soutien aux initiatives communautaires à la réduction de notre empreinte environnementale, nous nous efforçons d'avoir un impact positif sur les lieux que nous visitons. La préservation et la restauration des attractions naturelles et culturelles guideront chaque voyage."
    }
  ];
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-amber-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            KADABA ETHIOPIA TOUR
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-amber-100">
            Votre passerelle vers des expériences authentiques au cœur de l'Éthiopie
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">À propos de nous</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-700 leading-relaxed space-y-6 text-justify leading-relaxed">
            <p>
              KADABA ETHIOPIA TOUR vous invite à entreprendre un voyage inoubliable à travers le cœur et l'âme de l'une des destinations les plus diversifiées et captivantes d'Afrique. Avec une passion profonde pour mettre en valeur la beauté, la culture et le patrimoine de l'Éthiopie, nous nous spécialisons dans la création d'expériences de voyage immersives qui laissent une impression durable.
            </p>
            <p>
              Notre entreprise est légalement enregistrée et spécialisée dans le secteur du tourisme et des voyages. Nous proposons des services de voyages entrants et sortants en nous spécialisant dans une vaste gamme de services et de conseils couvrant des produits touristiques de bout en bout. Nous travaillons dans la création, la promotion et la vente d'une grande variété de destinations vibrantes à travers le monde.
            </p>
            <p>
              Notre mission est simple : connecter les voyageurs avec la richesse de la culture, de l'histoire et des merveilles naturelles éthiopiennes tout en favorisant des pratiques de tourisme durable qui bénéficient aux communautés locales et préservent l'environnement pour les générations futures.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Nos Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 transform hover:scale-105 transition-transform">
                <div className="text-amber-600">
                  {service.icon}
                </div>
                <span className="text-gray-700 font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Notre Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                <div className="text-amber-600 mb-4">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">{exp.title}</h3>
                <p className="text-gray-700 text-justify leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Prêt à commencer votre aventure éthiopienne ?</h2>
          <p className="mb-6 text-amber-100">
            Contactez KADABA ETHIOPIA TOUR dès aujourd'hui pour commencer à planifier votre voyage sur mesure. Laissez-nous vous aider à créer des souvenirs qui dureront toute une vie.
          </p>
          <button onClick={handleNavigate} className="bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition-colors">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;