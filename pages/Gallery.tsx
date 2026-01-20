/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React from 'react';
import { useSite } from '../context/SiteContext';

const Gallery: React.FC = () => {
  const { siteImages } = useSite();

  // Create an array from the gallery specific keys in siteImages
  const galleryImages = [
    siteImages.gallery_1,
    siteImages.gallery_2,
    siteImages.gallery_3,
    siteImages.gallery_4,
    siteImages.gallery_5,
    siteImages.gallery_6,
    // Add some random ones from the other sections to fill the grid if needed
    siteImages.home_hero,
    siteImages.about_hero,
    siteImages.conservation_hero,
  ];

  return (
    <div className="pt-32 min-h-screen bg-savannah-dark text-vellum px-6 lg:px-24 pb-32">
       <div className="mb-20">
          <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-6">Through The Lens</h1>
          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl font-sans">Moments captured by our guests and guides in the field. The raw beauty of Kenya, frozen in time.</p>
       </div>
       
       <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((src, idx) => (
             <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-sm cursor-pointer">
                <img 
                  src={`${src}?auto=format&fit=crop&q=80&w=800`} 
                  alt="Gallery" 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-xs font-bold uppercase tracking-widest border border-white px-4 py-2 text-white">View Full</span>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

export default Gallery;