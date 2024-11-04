import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Map, ChevronRight } from 'lucide-react';
import { circuitData } from '../assets/data/circuitData';

const CircuitViewer = ({ circuitName }) => {
  const circuitInfo = circuitData[circuitName];
  const location = useLocation();
  const circuitsPrefix = location.pathname.includes("/circuits")
    ? location.pathname.substring(location.pathname.indexOf("/circuits"))
    : "";
  if (!circuitInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8 flex items-center justify-center">
        <p className="text-xl text-amber-900">Circuit not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Map className="text-amber-600 h-8 w-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900">
            {circuitInfo.title}
          </h1>
        </div>

        <div className="space-y-4">
          {circuitInfo.data.map((tour) => (
            <Link 
              key={tour.id}
              to={`${circuitsPrefix}${tour.link}`}
              className="block transform transition-all hover:scale-[1.02] duration-300"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-amber-900 text-left">
                      {tour.name}
                    </h2>
                    <p className="text-gray-600">
                      {tour.description}
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-amber-600">{tour.duration}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-amber-600">{tour.type}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-amber-600">{tour.difficulty}</span>
                    </div>
                  </div>
                  <ChevronRight className="text-amber-600 h-6 w-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircuitViewer;