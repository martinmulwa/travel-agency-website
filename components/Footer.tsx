/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 lg:px-24 bg-savannah-dark text-vellum">
      <div className="grid md:grid-cols-4 gap-12 border-t border-gray-800 pt-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">SH</span>
            </div>
            <span className="uppercase tracking-widest font-extrabold">Safari Horizons Kenya</span>
          </div>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-8 font-sans">
            Award-winning, family-owned safari agency based in Nairobi. Specializing in bespoke, conservation-focused wilderness experiences since 2014.
          </p>
          <div className="flex gap-4">
            <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
            <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Facebook size={20} /></a>
            <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Youtube size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest mb-6 text-ochre">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-sans">
            <li><Link to="/safaris" className="hover:text-white transition-colors">Maasai Mara</Link></li>
            <li><Link to="/safaris" className="hover:text-white transition-colors">Amboseli</Link></li>
            <li><Link to="/safaris" className="hover:text-white transition-colors">Diani Beach</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Custom Safaris</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest mb-6 text-ochre">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-mono">
            <li>Ring Road Plaza, Westlands</li>
            <li>Nairobi, Kenya</li>
            <li><a href="tel:+254700000000" className="hover:text-white">+254 700 000 000</a></li>
            <li><a href="mailto:hello@safarihorizons.co.ke" className="hover:text-white">hello@safarihorizons.co.ke</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between text-[10px] text-gray-500 uppercase tracking-widest font-sans">
        <p>© 2026 Safari Horizons Kenya. All Rights Reserved. Built by Mulwa.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/licensing">KTB License #KTB-2014-00187</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;