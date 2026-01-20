/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will respond within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-32 min-h-screen bg-vellum pb-24">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="mb-20">
            <h1 className="text-4xl lg:text-7xl font-serif font-bold text-savannah-dark mb-8">Let's Talk Safari</h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-sans leading-relaxed">
            Whether you have a rough idea or a detailed plan, our team is ready to help you craft the journey of a lifetime.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
             <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white p-8 lg:p-10 shadow-sm border-t-4 border-ochre rounded-sm hover:shadow-md transition-shadow">
                   <Phone className="text-ochre mb-6" size={28} />
                   <h3 className="font-bold mb-3 text-lg font-serif">Phone / WhatsApp</h3>
                   <p className="text-sm text-gray-600 mb-2">Main: +254 700 000 000</p>
                   <p className="text-sm text-gray-600">US Toll Free: +1 800 123 4567</p>
                </div>
                <div className="bg-white p-8 lg:p-10 shadow-sm border-t-4 border-ochre rounded-sm hover:shadow-md transition-shadow">
                   <Mail className="text-ochre mb-6" size={28} />
                   <h3 className="font-bold mb-3 text-lg font-serif">Email</h3>
                   <p className="text-sm text-gray-600 mb-2">General: hello@safarihorizons.co.ke</p>
                   <p className="text-sm text-gray-600">Bookings: plan@safarihorizons.co.ke</p>
                </div>
                <div className="bg-white p-8 lg:p-10 shadow-sm border-t-4 border-ochre rounded-sm hover:shadow-md transition-shadow">
                   <MapPin className="text-ochre mb-6" size={28} />
                   <h3 className="font-bold mb-3 text-lg font-serif">Head Office</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">Ring Road Plaza, 4th Floor<br/>Westlands, Nairobi, Kenya</p>
                </div>
                <div className="bg-white p-8 lg:p-10 shadow-sm border-t-4 border-ochre rounded-sm hover:shadow-md transition-shadow">
                   <Clock className="text-ochre mb-6" size={28} />
                   <h3 className="font-bold mb-3 text-lg font-serif">Office Hours</h3>
                   <p className="text-sm text-gray-600 mb-2">Mon - Fri: 8:00 AM - 6:00 PM (EAT)</p>
                   <p className="text-sm text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="w-full h-64 lg:h-80 bg-clay/20 rounded-sm flex items-center justify-center border border-clay/50">
                <span className="text-gray-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                    <MapPin size={16} /> Google Map Integration
                </span>
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-16 shadow-2xl rounded-sm h-fit">
             <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-10 text-savannah-dark">Send a Message</h3>
             <form onSubmit={handleSubmit} name="contact-form" className="space-y-6 lg:space-y-8">
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                   <div>
                     <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">First Name</label>
                     <input name="firstName" required type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-ochre focus:bg-white transition-all rounded-sm" />
                   </div>
                   <div>
                     <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Last Name</label>
                     <input name="lastName" required type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-ochre focus:bg-white transition-all rounded-sm" />
                   </div>
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Email Address</label>
                   <input name="email" required type="email" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-ochre focus:bg-white transition-all rounded-sm" />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Subject</label>
                   <input name="subject" required type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-ochre focus:bg-white transition-all rounded-sm" />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Message</label>
                   <textarea name="message" required rows={6} className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-ochre focus:bg-white transition-all rounded-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-savannah-dark text-white py-5 font-bold uppercase tracking-widest hover:bg-moss transition-colors shadow-lg mt-4 text-xs">
                   Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;