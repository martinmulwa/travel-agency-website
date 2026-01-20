/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LogOut, Trash, Plus, X, Image as ImageIcon, Save, LayoutDashboard, Map, MessageSquare, Menu } from 'lucide-react';
import { Tour } from '../types';

const AdminDashboard: React.FC = () => {
  const { tours, inquiries, siteImages, logout, deleteTour, addTour, updateSiteImage } = useSite();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'tours' | 'inquiries' | 'images'>('overview');
  const [showAddModal, setShowAddModal] = useState(false);
  const [localImages, setLocalImages] = useState(siteImages);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const handleAddTour = (e: React.FormEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const highlightsStr = formData.get('highlights') as string;
      const highlights = highlightsStr.split(',').map(s => s.trim()).filter(s => s.length > 0);

      const newTour: Tour = {
          id: Date.now().toString(),
          title: formData.get('title') as string,
          price: Number(formData.get('price')),
          duration: formData.get('duration') as string,
          location: formData.get('location') as string,
          description: formData.get('description') as string,
          image: formData.get('image') as string || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
          images: [],
          highlights: highlights,
          included: ['Transport', 'Accommodation'],
          itinerary: [],
          featured: false,
          type: 'safari'
      };

      addTour(newTour);
      setShowAddModal(false);
  }

  const handleImageUpdate = (key: string, value: string) => {
    setLocalImages(prev => ({ ...prev, [key]: value }));
  };

  const saveImages = () => {
    Object.keys(localImages).forEach(key => {
      updateSiteImage(key, localImages[key]);
    });
    alert('Site images updated successfully!');
  };

  const data = [
    { name: 'Views', value: 4000 },
    { name: 'Inquiries', value: inquiries.length },
    { name: 'Bookings', value: 12 },
  ];

  const TabButton = ({ id, label, icon: Icon }: { id: typeof activeTab, label: string, icon: any }) => (
    <button 
      onClick={() => {
        setActiveTab(id);
        setIsSidebarOpen(false);
      }} 
      className={`w-full text-left px-6 py-4 flex items-center gap-3 transition-colors duration-200 ${
        activeTab === id 
          ? 'bg-vellum text-savannah-dark border-r-4 border-ochre' 
          : 'text-gray-400 hover:text-vellum hover:bg-white/5'
      }`}
    >
      <Icon size={18} />
      <span className="font-bold tracking-wider text-xs uppercase">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-vellum text-savannah-dark flex font-sans relative">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-savannah-dark flex flex-col shadow-2xl transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 border-b border-gray-800 flex justify-between items-start">
          <div>
            <div className="text-xl font-bold font-serif text-vellum tracking-tight">Admin Portal</div>
            <div className="text-xs text-ochre font-mono uppercase tracking-widest mt-1">Safari Horizons</div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-grow pt-8 overflow-y-auto">
          <TabButton id="overview" label="Overview" icon={LayoutDashboard} />
          <TabButton id="tours" label="Manage Tours" icon={Map} />
          <TabButton id="inquiries" label="Inquiries" icon={MessageSquare} />
          <TabButton id="images" label="Site Images" icon={ImageIcon} />
        </nav>
        
        <div className="p-6 border-t border-gray-800">
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors border border-gray-800 rounded hover:border-red-400">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full lg:ml-64 h-screen overflow-y-auto">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white p-4 sticky top-0 z-10 shadow-sm flex items-center justify-between">
           <span className="font-serif font-bold text-lg text-savannah-dark">Dashboard</span>
           <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-savannah-dark hover:bg-gray-100 rounded">
             <Menu size={24} />
           </button>
        </div>

        <div className="p-4 md:p-8 lg:p-12">
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-savannah-dark hidden lg:block">Dashboard Overview</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 shadow-lg border-t-4 border-ochre rounded-sm">
                  <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Total Inquiries</h3>
                  <p className="text-4xl lg:text-5xl font-serif font-bold">{inquiries.length}</p>
                </div>
                <div className="bg-white p-8 shadow-lg border-t-4 border-safari-green rounded-sm">
                  <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Active Tours</h3>
                  <p className="text-4xl lg:text-5xl font-serif font-bold">{tours.length}</p>
                </div>
                <div className="bg-white p-8 shadow-lg border-t-4 border-savannah-dark rounded-sm">
                  <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Pending Actions</h3>
                  <p className="text-4xl lg:text-5xl font-serif font-bold text-ochre">{inquiries.filter(i => i.status === 'new').length}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 lg:p-8 shadow-lg rounded-sm h-[300px] lg:h-[400px]">
                <h3 className="mb-6 font-bold text-sm uppercase tracking-widest">Monthly Activity</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="name" tick={{fontSize: 12}} />
                    <YAxis tick={{fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1c19', border: 'none', color: '#f9f7f2', fontSize: '12px' }}
                      itemStyle={{ color: '#f9f7f2' }}
                    />
                    <Bar dataKey="value" fill="#b5835a" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'tours' && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                 <h1 className="text-3xl lg:text-4xl font-serif font-bold text-savannah-dark">Manage Tours</h1>
                 <button onClick={() => setShowAddModal(true)} className="w-full sm:w-auto bg-savannah-dark text-vellum px-6 py-3 rounded-sm flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-moss transition-colors shadow-lg">
                   <Plus size={16} /> Add New Tour
                 </button>
              </div>
              <div className="bg-white shadow-lg rounded-sm overflow-hidden border border-clay/20 overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead className="bg-gray-50 border-b border-clay/20">
                    <tr>
                      <th className="p-4 lg:p-6 font-bold text-xs uppercase tracking-widest text-gray-500">Title</th>
                      <th className="p-4 lg:p-6 font-bold text-xs uppercase tracking-widest text-gray-500">Price (KES)</th>
                      <th className="p-4 lg:p-6 font-bold text-xs uppercase tracking-widest text-gray-500">Location</th>
                      <th className="p-4 lg:p-6 font-bold text-xs uppercase tracking-widest text-gray-500 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clay/20">
                    {tours.map(tour => (
                      <tr key={tour.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 lg:p-6">
                          <div className="font-bold text-savannah-dark">{tour.title}</div>
                          <div className="text-xs text-gray-500 mt-1">{tour.duration}</div>
                        </td>
                        <td className="p-4 lg:p-6 font-mono text-sm">{tour.price.toLocaleString()}</td>
                        <td className="p-4 lg:p-6 text-sm">{tour.location}</td>
                        <td className="p-4 lg:p-6 text-right">
                          <button onClick={() => deleteTour(tour.id)} className="text-gray-400 hover:text-red-500 transition-colors p-2">
                            <Trash size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-savannah-dark">Inquiries</h1>
              <div className="bg-white shadow-lg rounded-sm overflow-hidden border border-clay/20 overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[800px]">
                  <thead className="bg-gray-50 border-b border-clay/20">
                    <tr>
                      <th className="p-6 font-bold text-xs uppercase tracking-widest text-gray-500">Date</th>
                      <th className="p-6 font-bold text-xs uppercase tracking-widest text-gray-500">Client</th>
                      <th className="p-6 font-bold text-xs uppercase tracking-widest text-gray-500">Interest</th>
                      <th className="p-6 font-bold text-xs uppercase tracking-widest text-gray-500">Message</th>
                      <th className="p-6 font-bold text-xs uppercase tracking-widest text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clay/20">
                    {inquiries.map(inq => (
                      <tr key={inq.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-6 text-gray-600 whitespace-nowrap">{new Date(inq.date).toLocaleDateString()}</td>
                        <td className="p-6">
                          <div className="font-bold text-savannah-dark">{inq.name}</div>
                          <div className="text-ochre text-xs mt-1">{inq.email}</div>
                          <div className="text-gray-400 text-xs">{inq.phone}</div>
                        </td>
                        <td className="p-6">
                           <div className="font-bold">{inq.tourInterest}</div>
                           <div className="text-xs text-gray-500 mt-1">{inq.groupSize} Guests • {inq.travelDates || 'Flexible'}</div>
                        </td>
                        <td className="p-6 text-gray-600 italic max-w-xs truncate">{inq.message}</td>
                        <td className="p-6"><span className="bg-ochre/20 text-ochre px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest border border-ochre/30">{inq.status}</span></td>
                      </tr>
                    ))}
                    {inquiries.length === 0 && (
                       <tr><td colSpan={5} className="p-12 text-center text-gray-400">No inquiries yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="space-y-8 animate-fade-in-up">
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h1 className="text-3xl lg:text-4xl font-serif font-bold text-savannah-dark">Site Images</h1>
                  <button onClick={saveImages} className="w-full sm:w-auto bg-ochre text-white px-6 py-3 rounded-sm flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-amber-700 transition-colors shadow-lg">
                    <Save size={16} /> Save Changes
                  </button>
               </div>
               <div className="bg-white p-6 lg:p-8 shadow-lg rounded-sm border border-clay/20">
                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
                   {Object.keys(localImages).map((key) => (
                     <div key={key} className="space-y-3">
                       <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">{key.replace('_', ' ')}</label>
                       <div className="flex flex-col sm:flex-row gap-4">
                         <div className="w-full sm:w-24 h-48 sm:h-24 bg-gray-100 flex-shrink-0 overflow-hidden rounded border border-gray-200">
                           <img src={localImages[key]} alt={key} className="w-full h-full object-cover" />
                         </div>
                         <input 
                           type="text" 
                           value={localImages[key]} 
                           onChange={(e) => handleImageUpdate(key, e.target.value)}
                           className="flex-grow w-full border border-clay p-3 text-sm focus:outline-none focus:border-ochre font-mono bg-gray-50 rounded-sm"
                         />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          )}
        </div>
      </main>

      {/* Add Tour Modal */}
      {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="bg-vellum w-full max-w-2xl rounded shadow-2xl p-6 lg:p-10 relative animate-fade-in-up max-h-[90vh] overflow-y-auto border border-clay">
                  <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 lg:top-6 lg:right-6 text-gray-400 hover:text-black transition-colors"><X size={24} /></button>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6 lg:mb-8 text-savannah-dark">Add New Tour</h2>
                  <form onSubmit={handleAddTour} className="space-y-6 lg:space-y-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                         <div className="lg:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Tour Title</label>
                            <input name="title" required className="w-full border border-clay p-4 bg-white focus:outline-none focus:border-ochre rounded-sm" placeholder="e.g. 10-Day Grand Safari" />
                         </div>
                         <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Price (KES)</label>
                            <input name="price" type="number" required className="w-full border border-clay p-4 bg-white focus:outline-none focus:border-ochre rounded-sm" />
                         </div>
                         <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Duration</label>
                            <input name="duration" required placeholder="e.g. 5 Days / 4 Nights" className="w-full border border-clay p-4 bg-white focus:outline-none focus:border-ochre rounded-sm" />
                         </div>
                         <div className="lg:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Main Image URL</label>
                            <input name="image" required placeholder="https://..." className="w-full border border-clay p-4 bg-white focus:outline-none focus:border-ochre rounded-sm" />
                         </div>
                      </div>
                      <div>
                          <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Location</label>
                          <input name="location" required className="w-full border border-clay p-4 bg-white focus:outline-none focus:border-ochre rounded-sm" placeholder="e.g. Maasai Mara, Samburu" />
                      </div>
                       <div>
                          <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Highlights (Comma separated)</label>
                          <input name="highlights" required placeholder="Big 5, Cultural Visit, Night Drive..." className="w-full border border-clay p-4 bg-white focus:outline-none focus:border-ochre rounded-sm" />
                      </div>
                      <div>
                          <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Description</label>
                          <textarea name="description" required rows={5} className="w-full border border-clay p-4 bg-white focus:outline-none focus:border-ochre rounded-sm resize-none"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-savannah-dark text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-moss transition-colors shadow-lg mt-2">Create Listing</button>
                  </form>
              </div>
          </div>
      )}
    </div>
  );
};

export default AdminDashboard;