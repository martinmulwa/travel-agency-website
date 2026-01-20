/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React from 'react';
import { useSite } from '../context/SiteContext';
import { Clock, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  const { blogs } = useSite();

  return (
    <div className="pt-32 min-h-screen bg-vellum px-6 lg:px-24 pb-32">
      <div className="text-center max-w-3xl mx-auto mb-20">
         <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-6 text-savannah-dark">Safari Journal</h1>
         <p className="text-gray-600 font-sans text-lg lg:text-xl leading-relaxed">
           Stories from the bush, photography tips, and updates on conservation efforts across East Africa.
         </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
         {blogs.map(post => (
           <article key={post.id} className="bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group rounded-sm overflow-hidden border border-clay/20">
              <div className="h-64 overflow-hidden relative">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-savannah-dark">
                   {post.category}
                 </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                 <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                 </div>
                 <h2 className="text-2xl font-serif font-bold mb-4 group-hover:text-ochre transition-colors leading-tight">{post.title}</h2>
                 <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                 <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-serif font-bold text-gray-600">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-500">By {post.author}</span>
                 </div>
              </div>
           </article>
         ))}
      </div>
    </div>
  );
};

export default Blog;