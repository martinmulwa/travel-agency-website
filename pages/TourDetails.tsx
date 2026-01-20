/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { Check, Clock, MapPin, Calendar, ChevronLeft, ChevronRight, Share2, X } from 'lucide-react';

const TourDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tours, addInquiry } = useSite();
  const tour = tours.find(t => t.id === id);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!tour) return <div className="pt-32 text-center">Tour not found</div>;

  const hasMultipleImages = tour.images && tour.images.length > 1;

  const nextImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex(prev => (prev === tour.images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex(prev => (prev === 0 ? tour.images.length - 1 : prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    addInquiry({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      tourInterest: tour.title,
      travelDates: formData.get('travelDates') as string,
      groupSize: Number(formData.get('groupSize')),
      message: formData.get('message') as string,
    });
    alert('Inquiry Sent! Grace will contact you shortly.');
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-vellum">
      {/* Hero Gallery Slider - Immersive Top */}
      <div className="h-[60vh] lg:h-[85vh] w-full relative group bg-gray-900">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={(tour.images && tour.images[currentImageIndex]) || tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-all duration-700 ease-in-out" 
        />
        
        {hasMultipleImages && (
          <div className="absolute inset-0 z-20 flex items-center justify-between px-4 lg:px-12 opacity-0 group-hover:opacity-100 transition-opacity">
             <button onClick={prevImage} className="bg-white/10 hover:bg-white/30 p-4 rounded-full backdrop-blur-md text-white border border-white/20 transition-all"><ChevronLeft size={32} /></button>
             <button onClick={nextImage} className="bg-white/10 hover:bg-white/30 p-4 rounded-full backdrop-blur-md text-white border border-white/20 transition-all"><ChevronRight size={32} /></button>
          </div>
        )}

        {hasMultipleImages && (
          <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-3">
             {tour.images.map((_, idx) => (
               <button 
                 key={idx} 
                 onClick={() => setCurrentImageIndex(idx)}
                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-10 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
               />
             ))}
          </div>
        )}

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white px-4 max-w-4xl animate-fade-in-up pt-20">
            <span className="font-mono text-ochre text-xs lg:text-sm uppercase tracking-[0.2em] mb-6 block drop-shadow-md">{tour.duration} • {tour.location}</span>
            <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-8 drop-shadow-xl leading-tight">{tour.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 py-24 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-20">
          <section>
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
               <h2 className="text-3xl font-serif font-bold text-savannah-dark">Overview</h2>
               <button className="text-gray-400 hover:text-ochre flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Share2 size={16} /> Share</button>
            </div>
            <p className="text-gray-600 leading-loose font-sans text-lg">{tour.description}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold mb-10 text-savannah-dark">Itinerary</h2>
            <div className="space-y-12 border-l border-gray-200 ml-3 pl-10 relative">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="relative group">
                  <div className="absolute -left-[49px] top-1.5 w-6 h-6 rounded-full bg-clay group-hover:bg-ochre transition-colors border-4 border-vellum shadow-sm"></div>
                  <h3 className="text-xl font-bold text-savannah-dark mb-3 font-serif">Day {day.day}: {day.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{day.desc}</p>
                </div>
              ))}
              {tour.itinerary.length === 0 && <p className="text-gray-400 italic">Detailed itinerary available upon request.</p>}
            </div>
          </section>

          <section className="bg-white p-10 border border-clay/20 shadow-lg rounded-sm">
            <h2 className="text-2xl font-serif font-bold mb-8">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {tour.included.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-sm text-gray-700">
                  <div className="min-w-[20px] mt-0.5"><Check size={20} className="text-safari-green" /></div>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 bg-white p-10 shadow-2xl border-t-4 border-savannah-dark rounded-sm">
            <div className="mb-8">
               <div className="text-3xl font-bold text-savannah-dark mb-1">KES {tour.price.toLocaleString()}</div>
               <p className="text-xs text-gray-500 uppercase tracking-widest">Per Person Sharing</p>
            </div>
            
            <button onClick={() => setShowModal(true)} className="w-full bg-savannah-dark text-white py-5 text-xs font-bold tracking-widest uppercase mb-4 hover:bg-moss transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
              Request Quote
            </button>
            <a href={`https://wa.me/254700000000?text=Hi, I am interested in ${tour.title}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full border border-savannah-dark text-savannah-dark py-5 text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors">
              WhatsApp Inquiry
            </a>
            
            <div className="mt-10 pt-10 border-t border-gray-100">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Why Book With Us?</h4>
              <ul className="text-xs space-y-4 text-gray-600 font-medium">
                <li className="flex gap-3 items-center"><Check size={16} className="text-ochre" /> KATO Bonded (Safe & Secure)</li>
                <li className="flex gap-3 items-center"><Check size={16} className="text-ochre" /> 24/7 On-Safari Support</li>
                <li className="flex gap-3 items-center"><Check size={16} className="text-ochre" /> Expert Local Guides</li>
                <li className="flex gap-3 items-center"><Check size={16} className="text-ochre" /> Sustainable Travel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Action */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-6 lg:hidden z-40 flex justify-between items-center shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
         <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Starting From</p>
            <p className="font-bold text-xl text-savannah-dark">KES {tour.price.toLocaleString()}</p>
         </div>
         <button onClick={() => setShowModal(true)} className="bg-savannah-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm">
            Book Now
         </button>
      </div>

      {/* Inquiry Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-vellum w-full max-w-xl p-10 relative shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto rounded-sm border border-clay">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"><X size={24} /></button>
            <h3 className="text-3xl font-serif font-bold mb-2">Plan Your Adventure</h3>
            <p className="text-gray-600 mb-8 text-sm">Tell us about your dream trip to {tour.location}.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="tour-inquiry" />
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Full Name</label>
                <input name="name" type="text" required className="w-full bg-white border border-clay p-4 focus:outline-none focus:border-ochre rounded-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Email Address</label>
                <input name="email" type="email" required className="w-full bg-white border border-clay p-4 focus:outline-none focus:border-ochre rounded-sm" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Preferred Date</label>
                  <input name="travelDates" type="date" className="w-full bg-white border border-clay p-4 focus:outline-none focus:border-ochre rounded-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Guest Count</label>
                  <input name="groupSize" type="number" min="1" className="w-full bg-white border border-clay p-4 focus:outline-none focus:border-ochre rounded-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Special Requests / Message</label>
                <textarea name="message" rows={4} className="w-full bg-white border border-clay p-4 focus:outline-none focus:border-ochre rounded-sm resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-savannah-dark text-white py-5 text-xs font-bold tracking-widest uppercase hover:bg-moss transition-colors shadow-lg mt-2">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetails;