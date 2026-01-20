/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { useSite } from '../context/SiteContext';

const About: React.FC = () => {
  const { siteImages } = useSite();

  return (
    <div className="bg-vellum">
      {/* Hero - Immersive, so no top padding, let nav sit on top */}
      <div className="relative h-[60vh] lg:h-[70vh]">
        <img 
          src={siteImages.about_hero}
          alt="Safari Guide" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
           <div className="text-center pt-20 px-4">
               <span className="text-white/80 font-mono text-xs uppercase tracking-[0.3em] block mb-4">Since 2014</span>
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-extrabold text-white drop-shadow-xl">Our Story</h1>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 py-24">
        {/* The Story */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24 lg:mb-32">
           <div className="lg:col-span-4">
              <span className="text-ochre font-mono text-xs uppercase tracking-widest block mb-4">The Beginning</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-savannah-dark mb-6 leading-tight">Born from a love for the wild.</h2>
              <div className="h-1 w-20 bg-safari-green mb-6"></div>
           </div>
           <div className="lg:col-span-8 text-gray-700 space-y-8 text-lg leading-relaxed font-sans">
              <p>
                Safari Horizons Kenya began not in a boardroom, but around a campfire in the heart of the Maasai Mara. George Maina, our founder, had spent two decades guiding photographers and filmmakers across East Africa. He realized that while many companies sold "tours," very few offered true connection.
              </p>
              <p>
                The industry was becoming industrialized. Minivans crowded around lions, and schedules were rigid. George wanted to bring back the golden age of safari—where time is dictated by the rhythm of nature, not a wristwatch. Where the goal isn't just to see an animal, but to understand its life, its struggle, and its role in the ecosystem.
              </p>
              <p>
                In 2014, with a single Land Cruiser and a deep network of conservationist friends, Safari Horizons was born. Our mission was simple: minimal impact, maximum immersion. We partnered with exclusive conservancies that limit vehicle numbers, ensuring our guests enjoy private, unhurried sightings.
              </p>
              <p className="font-serif italic text-xl lg:text-2xl text-savannah-dark pl-6 border-l-4 border-ochre">
                 "We don't have call centers; when you plan a trip with us, you speak to people who have driven the roads, slept in the camps, and walked the trails."
              </p>
           </div>
        </div>

        {/* Team Section */}
        <div className="mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <span className="text-ochre font-mono text-xs uppercase tracking-widest block mb-4">Expertise</span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-savannah-dark">Meet The Family</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map(member => (
              <div key={member.id} className="group text-center">
                <div className="relative overflow-hidden rounded-full w-48 h-48 lg:w-56 lg:h-56 mx-auto mb-8 border-4 border-clay shadow-xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2 text-savannah-dark">{member.name}</h3>
                <p className="text-ochre font-mono text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-savannah-dark text-vellum p-8 lg:p-24 rounded-sm shadow-2xl">
           <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-ochre font-mono text-xs uppercase tracking-widest block mb-6">Why Choose Us</span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-10">The Horizon Standard</h2>
                <ul className="space-y-8">
                   <li className="flex gap-6">
                     <span className="text-safari-green font-bold text-2xl font-serif">01.</span>
                     <div>
                       <h4 className="font-bold mb-2 text-lg">Private Vehicles Only</h4>
                       <p className="text-gray-400 text-sm leading-relaxed">We don't mix groups. Your safari is yours alone, allowing for flexibility and privacy.</p>
                     </div>
                   </li>
                   <li className="flex gap-6">
                     <span className="text-safari-green font-bold text-2xl font-serif">02.</span>
                     <div>
                       <h4 className="font-bold mb-2 text-lg">Silver & Gold Guides</h4>
                       <p className="text-gray-400 text-sm leading-relaxed">Our guides hold the highest qualifications from KPSGA. They are teachers, not just drivers.</p>
                     </div>
                   </li>
                   <li className="flex gap-6">
                     <span className="text-safari-green font-bold text-2xl font-serif">03.</span>
                     <div>
                       <h4 className="font-bold mb-2 text-lg">Seamless Logistics</h4>
                       <p className="text-gray-400 text-sm leading-relaxed">From VIP airport meet-and-greets to flying doctors cover, we handle every detail.</p>
                     </div>
                   </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-full">
                 <img src={siteImages.about_values} className="w-full h-full object-cover rounded-sm shadow-lg opacity-90" alt="Leopard" />
                 <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;