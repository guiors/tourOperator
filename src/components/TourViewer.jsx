import React, { useState, useMemo } from 'react';
import { ChevronRight, Map, Mountain, Thermometer, Calendar, Binoculars, PawPrint, Plane, Hotel, Church, History,
  Footprints, Eye, PersonStanding, Palette, Ship
 } from 'lucide-react';
import { tourData } from '../assets/data/tourData';

const iconComponents = {
  mountain: <Mountain className="text-amber-600" />,
  thermometer: <Thermometer className="text-red-600" />,
  binoculars: <Binoculars className="text-amber-600" />,
  pawprint: <PawPrint className="text-red-600"/>,
  plane: <Plane className="text-amber-600" />,
  hotel: <Hotel className="text-red-600" />,
  church: <Church className="text-amber-600" />,
  history: <History className="text-red-600" />,
  footprints: <Footprints className="text-red-600" />,
  eye: <Eye className="text-red-600" />,
  personStanding: <PersonStanding className="text-amber-600" />,
  palette: <Palette className="text-amber-600" />,
  ship: <Ship className="text-green-600" />
};
const TourViewer = ({ tourName }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  
  const tourInfo = useMemo(() => tourData[tourName], [tourName]);
  
  if (!tourInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8 flex items-center justify-center">
        <p className="text-xl text-amber-900">Tour not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
          {tourInfo.title}
        </h1>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {tourInfo.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                {iconComponents[section.icon]}
                <h3 className="text-lg font-semibold text-amber-900">{section.title}</h3>
              </div>
              <p className="text-gray-700 text-justify leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Day Navigation */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {tourInfo.days.map((day) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`flex-shrink-0 px-4 py-2 rounded-full transition-all ${
                selectedDay === day.day
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-amber-900 hover:bg-amber-100'
              }`}
            >
              Jour {day.day}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {tourInfo.days
          .filter((day) => day.day === selectedDay)
          .map((day) => (
            <div key={day.day} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="text-amber-600 h-8 w-8" />
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900">
                  Jour {day.day}: {day.title}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6 text-lg text-justify leading-relaxed">
                    {day.description}
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h3 className="font-semibold text-amber-900 mb-3">Points forts</h3>
                    <ul className="space-y-2">
                      {day.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ChevronRight className="text-amber-600 h-4 w-4" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Map className="text-amber-600" />
                      <h3 className="font-semibold text-amber-900">Informations</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-justify leading-relaxed">
                        <span className="font-semibold">Durée:</span> {day.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TourViewer;