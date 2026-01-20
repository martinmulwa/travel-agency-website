/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { useNavigate, Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const { login } = useSite();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid Access Code');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-savannah-dark relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-ochre rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-safari-green rounded-full blur-[120px] mix-blend-screen"></div>
       </div>

      <div className="bg-vellum p-10 md:p-14 rounded-sm shadow-2xl w-full max-w-md relative z-10 border border-white/10">
        <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-savannah-dark text-vellum rounded-full flex items-center justify-center mb-6 shadow-xl">
               <Lock size={24} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-savannah-dark mb-2">Staff Portal</h1>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Restricted Access</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Access Code</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
              }}
              className="w-full border border-clay p-4 focus:outline-none focus:border-ochre bg-white text-center font-mono text-lg tracking-widest rounded-sm"
              placeholder="••••••"
              autoFocus
            />
          </div>
          {error && <p className="text-red-500 text-center text-xs font-bold uppercase tracking-widest animate-pulse">{error}</p>}
          <button type="submit" className="w-full bg-savannah-dark text-white py-4 font-bold uppercase tracking-widest hover:bg-moss transition-all shadow-lg text-xs hover:shadow-xl hover:-translate-y-1">
            Authenticate
          </button>
        </form>

        <div className="mt-8 text-center">
            <Link to="/" className="text-gray-400 text-xs hover:text-ochre transition-colors border-b border-transparent hover:border-ochre pb-1">Return to Website</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;