/**
 * Developer: Mulwa
 * Project: Safari Horizons Kenya
 * Description: Initial data population
 */
import { Tour, BlogPost, TeamMember, SiteImages } from './types';

export const INITIAL_SITE_IMAGES: SiteImages = {
  home_hero: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1600',
  home_conservation: 'https://images.unsplash.com/photo-1519095616597-29b13970b97b?auto=format&fit=crop&q=80&w=1200',
  about_hero: 'https://images.unsplash.com/photo-1547471080-75451c1c6381?auto=format&fit=crop&q=80&w=1600',
  about_values: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&q=80&w=800',
  conservation_hero: 'https://images.unsplash.com/photo-1576620593674-ee546522c153?auto=format&fit=crop&q=80&w=1200',
  gallery_1: 'https://images.unsplash.com/photo-1547471080-75451c1c6381',
  gallery_2: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
  gallery_3: 'https://images.unsplash.com/photo-1534469640422-909562762295',
  gallery_4: 'https://images.unsplash.com/photo-1550157962-d6a8a25c1024',
  gallery_5: 'https://images.unsplash.com/photo-1518709386345-a76c8c49553c',
  gallery_6: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62',
};

export const SAFARI_PACKAGES: Tour[] = [
  {
    id: '3day-mara',
    title: '3-Day Maasai Mara Classic',
    price: 75000,
    duration: '3 Days / 2 Nights',
    location: 'Maasai Mara',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      'https://images.unsplash.com/photo-1543832923-44667a44c804',
      'https://images.unsplash.com/photo-1612130835384-59cb4a59578e',
      'https://images.unsplash.com/photo-1519095616597-29b13970b97b'
    ],
    description: 'Experience the world-famous Maasai Mara with expert guides. Witness the Big Five in their natural habitat. This short but intense safari is perfect for those with limited time who still want to see the best of Kenya\'s wildlife. We stay in intimate camps located inside the conservancies for the best viewing opportunities.',
    highlights: ['Big 5 game drives', 'Conservancy lodge stay', 'Expert naturalist guide', 'Bush breakfast experience'],
    itinerary: [
      { day: 1, title: 'Arrival & Evening Game Drive', desc: 'Depart Nairobi for the Mara via the Great Rift Valley. Lunch at camp, followed by an evening game drive chasing the sunset.' },
      { day: 2, title: 'Full Day Maasai Mara', desc: 'Full day exploring the reserve with a picnic lunch by the Mara River, watching hippos and crocodiles.' },
      { day: 3, title: 'Morning Drive & Departure', desc: 'Early morning drive to catch predators on the hunt. Breakfast and return to Nairobi by afternoon.' }
    ],
    included: ['Transport in 4x4 Cruiser', 'Full board accommodation', 'Park fees', 'Guide fees', 'Water'],
    featured: true,
    bestSeller: true,
    type: 'safari'
  },
  {
    id: '5day-amboseli-mara',
    title: '5-Day Giants of the Savannah',
    price: 145000,
    duration: '5 Days / 4 Nights',
    location: 'Amboseli & Maasai Mara',
    image: 'https://images.unsplash.com/photo-1534469640422-909562762295?auto=format&fit=crop&q=80&w=800',
    images: [
        'https://images.unsplash.com/photo-1534469640422-909562762295',
        'https://images.unsplash.com/photo-1550157962-d6a8a25c1024',
        'https://images.unsplash.com/photo-1476990786526-748f21e51b66'
    ],
    description: 'Combine the legendary elephant herds of Amboseli with the predator-dense plains of the Mara. Includes flights between parks to maximize your time viewing wildlife, not driving on roads.',
    highlights: ['Mt Kilimanjaro views', 'Large Elephant herds', 'Luxury tented camps', 'Internal flights included', 'Maasai cultural visit'],
    itinerary: [
      { day: 1, title: 'Nairobi to Amboseli', desc: 'Drive to Amboseli. Afternoon game drive viewing Mt Kilimanjaro and the swamps.' },
      { day: 2, title: 'Amboseli National Park', desc: 'Full day with the elephants. Visit Observation Hill for a panoramic view.' },
      { day: 3, title: 'Fly to Maasai Mara', desc: 'Scheduled flight to the Mara. Transfer to camp and immediate evening game drive.' },
      { day: 4, title: 'Maasai Mara', desc: 'Full day game drive in the Mara triangle looking for the Big Cats.' },
      { day: 5, title: 'Return to Nairobi', desc: 'Morning game drive and flight back to Wilson Airport.' }
    ],
    included: ['Internal flights', 'Luxury accommodation', 'Park fees', 'Amref evacuation cover'],
    featured: true,
    bestSeller: false,
    type: 'safari'
  },
  {
    id: '7day-best-kenya',
    title: '7-Day Rift Valley Explorer',
    price: 215000,
    duration: '7 Days / 6 Nights',
    location: 'Samburu, Nakuru, Mara',
    image: 'https://images.unsplash.com/photo-1518709386345-a76c8c49553c?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1518709386345-a76c8c49553c', 'https://images.unsplash.com/photo-1526488733261-26c6246f4812'],
    description: 'The ultimate week-long adventure covering Kenya’s most diverse ecosystems. From the semi-arid north and the unique "Special Five" to the pink lakes of Nakuru and the rolling Mara plains.',
    highlights: ['Rhinos in Lake Nakuru', 'Flamingos', 'Samburu Special 5', 'Cultural Maasai Visit', 'Equator crossing'],
    itinerary: [
      { day: 1, title: 'Nairobi to Samburu', desc: 'Drive north past Mt Kenya to the arid landscapes of Samburu.' },
      { day: 2, title: 'Samburu Reserve', desc: 'Search for the endemic species: Gerenuk, Grevy Zebra, and Reticulated Giraffe.' },
      { day: 3, title: 'To Lake Nakuru', desc: 'Drive to the Rift Valley floor. Afternoon bird watching and rhino tracking.' },
      { day: 4, title: 'Nakuru to Maasai Mara', desc: 'Scenic drive to the Mara, arriving in time for an evening game drive.' },
      { day: 5, title: 'Maasai Mara', desc: 'Full day game tracking lions, leopards, and cheetahs.' },
      { day: 6, title: 'Maasai Mara', desc: 'Morning balloon safari (optional) and game drives.' },
      { day: 7, title: 'Nairobi', desc: 'Return to Nairobi with a stop at the Great Rift Valley viewpoint.' }
    ],
    included: ['Private 4x4', 'Mid-range lodges', 'All park fees', 'Water', 'Guide'],
    featured: true,
    type: 'safari'
  },
  {
    id: '12day-bush-beach',
    title: '12-Day Bush & Turquoise',
    price: 295000,
    duration: '12 Days / 11 Nights',
    location: 'Mara, Tsavo & Diani',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1544644181-1484b3fdfc62', 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b'],
    description: 'The perfect balance of dusty adventure and ocean relaxation. Spend a week in the bush followed by pure bliss on the white sands of Diani Beach. Ideal for honeymooners.',
    highlights: ['Private beach villa', 'Mzima Springs', 'SGR Train Experience', 'Dhow Cruise', 'Snorkeling'],
    itinerary: [
        { day: 1, title: 'Arrival Nairobi', desc: 'VIP Meet and Greet. Transfer to Hemingway\'s Nairobi.' },
        { day: 2, title: 'Nairobi to Mara', desc: 'Flight to the Mara. Afternoon game drive.' },
        { day: 3, title: 'Maasai Mara', desc: 'Full day game viewing.' },
        { day: 4, title: 'Maasai Mara', desc: 'Morning balloon safari and champagne breakfast.' },
        { day: 5, title: 'Mara to Tsavo', desc: 'Flight to Tsavo West. Visit Mzima Springs underwater hide.' },
        { day: 6, title: 'Tsavo West', desc: 'Game drives and Shetani lava flows.' },
        { day: 7, title: 'To Diani Beach', desc: 'Transfer to Voi, SGR train to coast, transfer to resort.' },
        { day: 8, title: 'Diani Beach', desc: 'Relaxation and water sports.' },
        { day: 9, title: 'Wasini Island', desc: 'Dolphin watching and snorkeling tour at Kisite Mpunguti.' },
        { day: 10, title: 'Diani Beach', desc: 'Leisure day.' },
        { day: 11, title: 'Diani Beach', desc: 'Sunset dhow cruise with seafood dinner.' },
        { day: 12, title: 'Departure', desc: 'Flight back to Nairobi for international connection.' }
    ],
    included: ['Internal Flights', 'All Inclusive Beach Resort', 'Safari Lodges', 'SGR Tickets'],
    featured: true,
    type: 'combined'
  },
  {
    id: 'photo-safari',
    title: '8-Day Photography Masterclass',
    price: 320000,
    duration: '8 Days',
    location: 'Amboseli & Mara',
    image: 'https://images.unsplash.com/photo-1534234557677-2f63f2747123?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1534234557677-2f63f2747123'],
    description: 'Led by award-winning photographers. Dedicated photography vehicles with open sides for the perfect angle. We focus on lighting, behavior anticipation, and post-processing.',
    highlights: ['Off-road permits', 'Golden hour focus', 'Bean bags & mounts', 'Editing workshops'],
    itinerary: [
        { day: 1, title: 'Nairobi', desc: 'Briefing, gear check and welcome dinner.' },
        { day: 2, title: 'Amboseli', desc: 'Sunset shoots with elephants against Kilimanjaro.' },
        { day: 3, title: 'Amboseli', desc: 'Full day in the field maximizing light.' },
        { day: 4, title: 'Lake Nakuru', desc: 'Bird photography masterclass.' },
        { day: 5, title: 'Maasai Mara', desc: 'Predator action shots.' },
        { day: 6, title: 'Maasai Mara', desc: 'Silhouette photography and night sky shooting.' },
        { day: 7, title: 'Maasai Mara', desc: 'Macro photography session.' },
        { day: 8, title: 'Return', desc: 'Image review and editing workshop in Nairobi.' }
    ],
    included: ['Photo guide', 'Modified vehicle', 'Editing workshops', 'Extra luggage allowance'],
    featured: false,
    type: 'safari'
  },
  {
    id: 'mt-kenya-trek',
    title: '5-Day Mt Kenya Sirimon',
    price: 65000,
    duration: '5 Days / 4 Nights',
    location: 'Mt Kenya',
    image: 'https://images.unsplash.com/photo-1625401395982-f54817a56113?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1625401395982-f54817a56113'],
    description: 'Conquer the second highest peak in Africa. The Sirimon route offers the most scenic ascent through diverse vegetation zones, from rainforest to moorland to ice.',
    highlights: ['Point Lenana Summit', 'Mackinder\'s Valley', 'Giant Lobelias', 'Experienced porters'],
    itinerary: [
        { day: 1, title: 'Nairobi to Nanyuki', desc: 'Drive to the mountain base. Acclimatization walk.' },
        { day: 2, title: 'Old Moses Camp', desc: 'Trek through the rainforest (3-4 hours).' },
        { day: 3, title: 'Shiptons Camp', desc: 'Hike through the moorland to Shiptons (6-7 hours).' },
        { day: 4, title: 'Summit Day', desc: 'Pre-dawn attempt of Point Lenana (4985m). Descent to Old Moses.' },
        { day: 5, title: 'Descent', desc: 'Final descent to gate and return to Nairobi.' }
    ],
    included: ['Porters', 'Mountain Guide', 'Hut Fees', 'Food', 'Cook'],
    featured: false,
    type: 'trekking'
  },
  {
    id: 'uganda-gorilla',
    title: '4-Day Bwindi Gorilla Trek',
    price: 280000,
    duration: '4 Days / 3 Nights',
    location: 'Bwindi, Uganda',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1575550959106-5a7defe28b56'],
    description: 'A once-in-a-lifetime encounter with the gentle giants of the forest. Trek deep into the impenetrable forest of Bwindi to spend an hour with a habituated gorilla family.',
    highlights: ['Gorilla Permits Included', 'Batwa Cultural Experience', 'Cloud Forest Scenery'],
    itinerary: [
        { day: 1, title: 'Entebbe to Bwindi', desc: 'Flight to Kihihi airstrip, transfer to Bwindi Lodge.' },
        { day: 2, title: 'Gorilla Trekking', desc: 'The big day. Trekking can take 2-6 hours. 1 hour with gorillas.' },
        { day: 3, title: 'Community Walk', desc: 'Visit the Batwa pygmy community or relax at the lodge.' },
        { day: 4, title: 'Return', desc: 'Flight back to Entebbe.' }
    ],
    included: ['Gorilla Permit ($700)', 'Flights', 'Accommodation', 'Transfers'],
    featured: true,
    type: 'safari'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Best Time to Visit Maasai Mara',
    excerpt: 'A complete month-by-month guide to planning your migration safari.',
    content: 'The Great Migration is a year-round event...',
    author: 'George Maina',
    date: 'Jan 15, 2026',
    image: 'https://images.unsplash.com/photo-1490237708577-62e9c20a9a6c?auto=format&fit=crop&q=80&w=800',
    category: 'Guides',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Packing for Your First Safari',
    excerpt: 'What to bring and what to leave behind for the bush. Hint: Leave the bright colors at home.',
    content: 'Neutral colors are key...',
    author: 'Grace Wanjiku',
    date: 'Jan 02, 2026',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800',
    category: 'Tips',
    readTime: '4 min'
  },
  {
    id: '3',
    title: 'Conservation: Why It Matters',
    excerpt: 'How your trip directly supports local communities and protects habitat.',
    content: 'We believe travel should be a force for regeneration...',
    author: 'George Maina',
    date: 'Dec 20, 2025',
    image: 'https://images.unsplash.com/photo-1519095616597-29b13970b97b?auto=format&fit=crop&q=80&w=800',
    category: 'Conservation',
    readTime: '6 min'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'George Maina',
        role: 'Founder & Head Guide',
        bio: 'With over 25 years in the bush, George knows every corner of the Mara. A Silver-level KPSGA guide.',
        image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '2',
        name: 'Grace Wanjiku',
        role: 'Travel Consultant',
        bio: 'Grace crafts the perfect itineraries. Her attention to detail ensures your trip is seamless.',
        image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '3',
        name: 'David Kamau',
        role: 'Senior Naturalist',
        bio: 'An expert ornithologist and photographer, David helps guests capture the perfect moment.',
        image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=400'
    }
];
