/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
      const newState = !isOpen;
      setIsOpen(newState);
      document.body.style.overflow = newState ? 'hidden' : 'unset';
  };

  return (
    <>
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-savannah-dark rounded-full flex items-center justify-center group-hover:bg-ochre transition-colors">
            <span className="text-vellum font-bold text-sm tracking-tighter">SH</span>
          </div>
          <div className="block">
             <span className="uppercase tracking-[0.2em] font-extrabold text-sm block leading-none">Safari Horizons</span>
             <span className="text-[9px] uppercase tracking-widest text-ochre font-mono">Kenya</span>
          </div>
        </Link>

        <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-widest font-semibold items-center text-savannah-dark">
          <Link to="/safaris" className="hover:text-ochre transition-colors">Safaris</Link>
          <Link to="/about" className="hover:text-ochre transition-colors">About Us</Link>
          <Link to="/conservation" className="hover:text-ochre transition-colors">Conservation</Link>
          <Link to="/gallery" className="hover:text-ochre transition-colors">Gallery</Link>
          <Link to="/blog" className="hover:text-ochre transition-colors">Journal</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+254700000000" className="hidden lg:flex items-center gap-2 font-mono text-xs hover:text-ochre">
            <Phone size={14} />
            +254 700 000000
          </a>
          <Link to="/contact" className="hidden sm:block bg-savannah-dark text-vellum hover:bg-moss text-[10px] py-3 px-6 tracking-widest font-bold uppercase transition-all transform hover:-translate-y-0.5">
            Plan Your Safari
          </Link>
          <button className="lg:hidden text-savannah-dark hover:text-ochre transition-colors focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 bg-vellum/95 backdrop-blur-md z-40 lg:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
            <Link to="/" className="text-3xl font-serif font-bold text-savannah-dark hover:text-ochre transition-colors">Home</Link>
            <Link to="/safaris" className="text-3xl font-serif font-bold text-savannah-dark hover:text-ochre transition-colors">Safaris & Tours</Link>
            <Link to="/about" className="text-3xl font-serif font-bold text-savannah-dark hover:text-ochre transition-colors">Our Story</Link>
            <Link to="/conservation" className="text-3xl font-serif font-bold text-savannah-dark hover:text-ochre transition-colors">Conservation</Link>
            <Link to="/blog" className="text-3xl font-serif font-bold text-savannah-dark hover:text-ochre transition-colors">Journal</Link>
            <Link to="/gallery" className="text-3xl font-serif font-bold text-savannah-dark hover:text-ochre transition-colors">Gallery</Link>
            <Link to="/contact" className="text-3xl font-serif font-bold text-ochre hover:text-savannah-dark transition-colors">Contact Us</Link>
            
            <div className="mt-12 pt-12 border-t border-clay w-full max-w-xs text-center">
                 <Link to="/admin" className="text-xs text-gray-400 font-mono uppercase tracking-widest hover:text-savannah-dark">Staff Login</Link>
            </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;