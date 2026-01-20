/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 */

export interface Tour {
  id: string;
  title: string;
  price: number;
  duration: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; desc: string }[];
  included: string[];
  featured: boolean;
  bestSeller?: boolean;
  type: 'safari' | 'beach' | 'combined' | 'trekking';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  tourInterest: string;
  travelDates: string;
  groupSize: number;
  message: string;
  status: 'new' | 'contacted' | 'booked';
  date: string;
}

export interface SiteStats {
  views: number;
  inquiries: number;
  bookings: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface SiteImages {
  [key: string]: string;
}
