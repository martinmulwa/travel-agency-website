/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, BlogPost, Inquiry, SiteImages } from '../types';
import { SAFARI_PACKAGES, BLOG_POSTS, INITIAL_SITE_IMAGES } from '../constants';

interface SiteContextType {
  tours: Tour[];
  blogs: BlogPost[];
  inquiries: Inquiry[];
  siteImages: SiteImages;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  deleteTour: (id: string) => void;
  addTour: (tour: Tour) => void;
  deleteBlog: (id: string) => void;
  updateSiteImage: (key: string, url: string) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [siteImages, setSiteImages] = useState<SiteImages>(INITIAL_SITE_IMAGES);
  const [isAdmin, setIsAdmin] = useState(false);

  // Initialize data from localStorage or constants
  useEffect(() => {
    const storedTours = localStorage.getItem('sh_tours');
    const storedBlogs = localStorage.getItem('sh_blogs');
    const storedInquiries = localStorage.getItem('sh_inquiries');
    const storedImages = localStorage.getItem('sh_images');
    const storedAuth = localStorage.getItem('sh_auth');

    if (storedTours) setTours(JSON.parse(storedTours));
    else setTours(SAFARI_PACKAGES);

    if (storedBlogs) setBlogs(JSON.parse(storedBlogs));
    else setBlogs(BLOG_POSTS);

    if (storedInquiries) setInquiries(JSON.parse(storedInquiries));

    if (storedImages) setSiteImages(JSON.parse(storedImages));

    if (storedAuth === 'true') setIsAdmin(true);
  }, []);

  // Sync with localStorage
  useEffect(() => {
    if (tours.length > 0) localStorage.setItem('sh_tours', JSON.stringify(tours));
    if (blogs.length > 0) localStorage.setItem('sh_blogs', JSON.stringify(blogs));
    localStorage.setItem('sh_inquiries', JSON.stringify(inquiries));
    localStorage.setItem('sh_images', JSON.stringify(siteImages));
    localStorage.setItem('sh_auth', String(isAdmin));
  }, [tours, blogs, inquiries, siteImages, isAdmin]);

  const login = (password: string) => {
    if (password === 'mulwa') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  const addInquiry = (data: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'new'
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const deleteTour = (id: string) => {
    setTours(prev => prev.filter(t => t.id !== id));
  };
  
  const addTour = (tour: Tour) => {
      setTours(prev => [tour, ...prev]);
  }

  const deleteBlog = (id: string) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  const updateSiteImage = (key: string, url: string) => {
    setSiteImages(prev => ({
      ...prev,
      [key]: url
    }));
  };

  return (
    <SiteContext.Provider value={{ tours, blogs, inquiries, siteImages, isAdmin, login, logout, addInquiry, deleteTour, addTour, deleteBlog, updateSiteImage }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within a SiteProvider');
  return context;
};
