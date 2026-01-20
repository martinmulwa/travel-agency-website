/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React from 'react';
import { useSite } from '../context/SiteContext';

const Conservation: React.FC = () => {
  const { siteImages } = useSite();

  return (
    <div className="bg-vellum pt-32 pb-32">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-safari-green font-mono text-xs uppercase tracking-widest block mb-4">Sustainability</span>
          <h1 className="text-5xl lg:text-7xl font-serif font-extrabold mb-8 text-savannah-dark">Travel as a Force for Good</h1>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-serif italic">
            "We do not inherit the earth from our ancestors; we borrow it from our children."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
           <img 
             src={siteImages.conservation_hero}
             className="w-full h-[500px] object-cover rounded-sm shadow-2xl" 
             alt="Rangers in the field" 
           />
           <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-4xl font-serif font-bold text-savannah-dark">Community & Wildlife</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Safari Horizons, we recognize that the true custodians of African wildlife are the local communities who live alongside it. Without their support and benefit, conservation is unsustainable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                That is why we exclusively partner with conservancies rather than just national parks. In conservancies, land is leased from Maasai landowners, ensuring a direct monthly income for families that is not dependent on rain or cattle. This model creates a buffer zone for wildlife and creates economic resilience for the community.
              </p>
              <div className="bg-white p-8 border-l-4 border-ochre shadow-lg rounded-sm">
                <p className="font-bold text-savannah-dark mb-2 text-lg">Did You Know?</p>
                <p className="text-gray-500 leading-relaxed">
                  Over 65% of Kenya's wildlife lives outside formal National Parks. Private conservancies are critical for the survival of migratory corridors.
                </p>
              </div>
           </div>
        </div>

        {/* Metrics */}
        <div className="bg-savannah-dark text-vellum rounded-sm py-20 px-8 mb-24 shadow-2xl">
           <div className="grid md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
              <div className="pt-8 md:pt-0">
                 <div className="text-5xl font-bold text-ochre mb-3">15%</div>
                 <div className="text-xs uppercase tracking-widest font-mono text-gray-400">Of Profits Donated</div>
              </div>
              <div className="pt-8 md:pt-0">
                 <div className="text-5xl font-bold text-ochre mb-3">350+</div>
                 <div className="text-xs uppercase tracking-widest font-mono text-gray-400">Students Sponsored</div>
              </div>
              <div className="pt-8 md:pt-0">
                 <div className="text-5xl font-bold text-ochre mb-3">12k</div>
                 <div className="text-xs uppercase tracking-widest font-mono text-gray-400">Trees Planted</div>
              </div>
              <div className="pt-8 md:pt-0">
                 <div className="text-5xl font-bold text-ochre mb-3">100%</div>
                 <div className="text-xs uppercase tracking-widest font-mono text-gray-400">Carbon Neutral</div>
              </div>
           </div>
        </div>

        {/* Partners */}
        <div className="text-center mb-16">
           <h3 className="text-2xl font-serif font-bold mb-16 text-savannah-dark">Our Conservation Partners</h3>
           <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simulated logos */}
              <div className="text-lg font-bold border-2 border-clay text-gray-500 px-8 py-4 rounded-sm hover:border-ochre hover:text-ochre transition-colors">Mara Elephant Project</div>
              <div className="text-lg font-bold border-2 border-clay text-gray-500 px-8 py-4 rounded-sm hover:border-ochre hover:text-ochre transition-colors">The Sheldrick Trust</div>
              <div className="text-lg font-bold border-2 border-clay text-gray-500 px-8 py-4 rounded-sm hover:border-ochre hover:text-ochre transition-colors">Ecotourism Kenya</div>
              <div className="text-lg font-bold border-2 border-clay text-gray-500 px-8 py-4 rounded-sm hover:border-ochre hover:text-ochre transition-colors">Lion Guardians</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Conservation;