/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import TourCard from '../components/TourCard';
import { Leaf, Shield, Users, Star } from 'lucide-react';

const Home: React.FC = () => {
  const { tours, siteImages } = useSite();
  const featuredTours = tours.filter(t => t.featured).slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center w-full max-w-8xl mx-auto">
          {/* Text Content: Order 2 on Mobile, Order 1 on Desktop */}
          <div className="lg:col-span-6 z-10 animate-fade-in-up order-2 lg:order-1">
            <p className="font-mono text-ochre text-xs mb-8 tracking-tighter uppercase">Est. 2014 — Award Winning Boutique Travel</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif font-extrabold leading-[1.1] lg:leading-[0.95] mb-10 tracking-tight text-savannah-dark">
              Experience<br/>The <span className="text-safari-green italic">Real</span> Africa.
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-lg leading-relaxed font-sans">
              Personalized, conservation-focused Kenyan journeys led by certified naturalists with 25+ years of wilderness expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/safaris" className="bg-savannah-dark text-vellum px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-moss transition-all hover:-translate-y-1 text-center">
                Explore Experiences
              </Link>
              <Link to="/about" className="border border-savannah-dark px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-savannah-dark hover:text-vellum transition-all text-center">
                Our Story
              </Link>
            </div>
            
            <div className="mt-20 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col">
                <span className="font-bold text-xl">4.9/5</span>
                <div className="flex text-yellow-500 gap-1 mt-1"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                <span className="text-[9px] uppercase tracking-widest mt-1">TripAdvisor</span>
              </div>
              <div className="h-10 w-px bg-gray-400"></div>
              <span className="font-mono text-[10px] max-w-[100px] leading-tight uppercase">Member of KATO & Travel Trust</span>
            </div>
          </div>
          
          {/* Image Content: Order 1 on Mobile, Order 2 on Desktop */}
          <div className="lg:col-span-6 relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative rounded-sm shadow-2xl overflow-hidden aspect-[4/5] lg:aspect-square group">
              <img src={siteImages.home_hero}
                   className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt="Kenyan Wilderness" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Topographic Floating Overlay */}
            <div className="absolute -bottom-12 -left-12 bg-white/90 backdrop-blur-md p-8 hidden lg:block max-w-[280px] border border-white shadow-xl z-20">
              <p className="font-mono text-[10px] text-ochre mb-3 uppercase tracking-widest">Live from the Mara</p>
              <p className="text-sm font-serif italic text-gray-800 leading-relaxed">"The Great Migration has officially begun near the Sand River. Large crossings expected this week."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 lg:py-32 px-6 lg:px-24 bg-savannah-dark text-vellum">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-8xl mx-auto">
          {[
            { id: '01', title: 'Veteran Naturalists', desc: 'Guides with 25+ years tracking experience.', icon: Users },
            { id: '02', title: 'Family Owned', desc: 'Direct access to the Maina family, no corporate layers.', icon: Shield },
            { id: '03', title: 'Conservation First', desc: 'Percentage of booking funds local conservancies.', icon: Leaf },
            { id: '04', title: '100% Tailored', desc: 'Hand-drawn itineraries for your specific interests.', icon: Star }
          ].map((item) => (
            <div key={item.id} className="group">
              <span className="font-mono text-ochre text-xs mb-6 block group-hover:text-vellum transition-colors">{item.id}</span>
              <h3 className="text-2xl font-bold mb-4 font-serif">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="py-24 lg:py-32 px-6 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 max-w-8xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-serif font-extrabold tracking-tight mb-8 text-savannah-dark">Iconic Journeys</h2>
            <p className="text-gray-600 max-w-lg font-sans text-lg leading-relaxed">The most revered Kenyan experiences, hand-crafted for the discerning explorer seeking authenticity.</p>
          </div>
          <Link to="/safaris" className="font-mono text-xs uppercase tracking-widest border-b border-savannah-dark pb-3 hover:text-ochre hover:border-ochre transition-colors">View All Experiences</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* Conservation Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-24 bg-vellum">
        <div className="bg-moss text-vellum rounded-sm overflow-hidden grid lg:grid-cols-2 max-w-8xl mx-auto shadow-2xl">
          <div className="p-10 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
            <span className="font-mono text-xs uppercase tracking-widest mb-8 text-clay">Our Ethos</span>
            <h2 className="text-3xl lg:text-5xl font-serif font-extrabold mb-10 leading-tight">Safari with Purpose</h2>
            <p className="text-lg leading-relaxed mb-12 opacity-90 font-sans">
              We believe travel should be a force for regeneration. By choosing Safari Horizons, you are directly investing in the protection of Kenya's biodiversity and empowering local communities.
            </p>
            <div className="grid grid-cols-2 gap-8 lg:gap-12 mb-16">
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold mb-2">15%</p>
                <p className="font-mono text-[10px] uppercase tracking-wider opacity-70">Profit Share to Conservation</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold mb-2">12k+</p>
                <p className="font-mono text-[10px] uppercase tracking-wider opacity-70">Acres Protected Since 2014</p>
              </div>
            </div>
            <Link to="/conservation" className="bg-vellum text-savannah-dark w-fit px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-clay transition-colors">How We Give Back</Link>
          </div>
          <div className="relative h-[300px] lg:h-auto order-1 lg:order-2">
            <img src={siteImages.home_conservation} className="w-full h-full object-cover" alt="Conservation Efforts" />
            <div className="absolute inset-0 bg-moss/20 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-24 bg-clay/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-7xl font-serif font-extrabold mb-10 tracking-tight text-savannah-dark">Ready for the wild?</h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-16 font-sans max-w-2xl mx-auto leading-relaxed">Start a conversation today. No obligations, just expert advice from the Maina family to help you plan your dream trip.</p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            <Link to="/contact" className="bg-sunset-orange text-white px-10 lg:px-12 py-5 text-xs font-bold tracking-widest uppercase hover:bg-orange-600 transition-colors shadow-2xl shadow-orange-500/20 hover:-translate-y-1">
              Schedule Consultation
            </Link>
            <a href="https://wa.me/254700000000" className="bg-white border border-gray-200 text-savannah-dark px-10 lg:px-12 py-5 text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors hover:-translate-y-1">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;