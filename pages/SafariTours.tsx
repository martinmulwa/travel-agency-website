/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import TourCard from '../components/TourCard';

const SafariTours: React.FC = () => {
  const { tours } = useSite();
  const [filter, setFilter] = useState<'all' | 'safari' | 'beach' | 'combined'>('all');

  const filteredTours = filter === 'all' ? tours : tours.filter(t => t.type === filter);

  return (
    <div className="pt-32 px-6 lg:px-24 pb-32 min-h-screen bg-vellum">
      <div className="mb-20 pt-8">
        <h1 className="text-4xl lg:text-7xl font-serif font-extrabold mb-8 text-savannah-dark">Our Collections</h1>
        <p className="text-gray-600 max-w-2xl text-lg lg:text-xl font-sans leading-relaxed">
          From the dusty plains of the Mara to the turquoise waters of Diani, choose an itinerary that speaks to your spirit of adventure.
        </p>
      </div>

      <div className="flex gap-10 mb-16 border-b border-gray-200 pb-1 overflow-x-auto no-scrollbar">
        {['all', 'safari', 'beach', 'combined'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`text-xs font-bold uppercase tracking-widest pb-5 border-b-2 transition-all whitespace-nowrap ${
              filter === f ? 'border-ochre text-savannah-dark' : 'border-transparent text-gray-400 hover:text-savannah-dark'
            }`}
          >
            {f === 'all' ? 'All Journeys' : f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredTours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
        {filteredTours.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-400 italic">No tours found in this category.</div>
        )}
      </div>
    </div>
  );
};

export default SafariTours;