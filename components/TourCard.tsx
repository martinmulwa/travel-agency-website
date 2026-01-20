/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Tour } from '../types';
import { Clock, MapPin } from 'lucide-react';

const TourCard: React.FC<{ tour: Tour }> = ({ tour }) => {
  return (
    <div className="group bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        {tour.bestSeller && (
          <div className="absolute top-4 left-4 z-10 bg-savannah-dark text-vellum text-[9px] font-bold px-3 py-1 tracking-widest uppercase">
            Best Seller
          </div>
        )}
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-serif leading-tight">{tour.title}</h3>
        </div>
        <div className="flex gap-4 mb-4 text-[10px] font-mono text-ochre uppercase tracking-widest">
           <span className="flex items-center gap-1"><MapPin size={10} /> {tour.location}</span>
           <span className="flex items-center gap-1"><Clock size={10} /> {tour.duration}</span>
        </div>
        <ul className="text-sm space-y-2 text-gray-600 mb-8 flex-grow">
          {tour.highlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx}>• {highlight}</li>
          ))}
        </ul>
        <div className="mt-auto">
          <p className="text-lg font-bold text-savannah-dark mb-4">KES {tour.price.toLocaleString()}</p>
          <Link to={`/safari/${tour.id}`} className="block w-full text-center border border-savannah-dark py-3 text-xs font-bold tracking-widest hover:bg-savannah-dark hover:text-vellum transition-colors">
            DISCOVER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;