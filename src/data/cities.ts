// ============================================================
// City data for local proxy support pages. Each city links to
// its country and carries a hiring hook for unique intros.
// ============================================================

export interface City {
  slug: string;
  name: string;
  countrySlug: string;
  country: string;
  hook: string; // one-line local hiring angle
}

export const cities: City[] = [
  // USA
  { slug: 'new-york', name: 'New York', countrySlug: 'usa', country: 'USA', hook: 'BFSI, media and product companies with dense C2C and W2 demand.' },
  { slug: 'dallas', name: 'Dallas', countrySlug: 'usa', country: 'USA', hook: 'A major vendor and consulting hub with heavy C2C requirements.' },
  { slug: 'austin', name: 'Austin', countrySlug: 'usa', country: 'USA', hook: 'A fast-growing product and startup scene hiring cloud and AI talent.' },
  { slug: 'houston', name: 'Houston', countrySlug: 'usa', country: 'USA', hook: 'Energy, healthcare and enterprise IT with steady demand.' },
  { slug: 'chicago', name: 'Chicago', countrySlug: 'usa', country: 'USA', hook: 'Finance, insurance and enterprise engineering roles.' },
  { slug: 'atlanta', name: 'Atlanta', countrySlug: 'usa', country: 'USA', hook: 'Fintech, telecom and a strong consulting corridor.' },
  { slug: 'charlotte', name: 'Charlotte', countrySlug: 'usa', country: 'USA', hook: 'Banking and financial-services engineering roles.' },
  { slug: 'phoenix', name: 'Phoenix', countrySlug: 'usa', country: 'USA', hook: 'Growing enterprise and semiconductor-adjacent IT demand.' },
  { slug: 'seattle', name: 'Seattle', countrySlug: 'usa', country: 'USA', hook: 'Big-tech and cloud-heavy hiring with high bars.' },
  { slug: 'san-francisco', name: 'San Francisco', countrySlug: 'usa', country: 'USA', hook: 'AI, product and startup roles with the toughest loops.' },
  { slug: 'san-jose', name: 'San Jose', countrySlug: 'usa', country: 'USA', hook: 'Silicon Valley hardware, platform and AI engineering.' },
  { slug: 'los-angeles', name: 'Los Angeles', countrySlug: 'usa', country: 'USA', hook: 'Media, entertainment-tech and enterprise roles.' },
  { slug: 'boston', name: 'Boston', countrySlug: 'usa', country: 'USA', hook: 'Biotech, fintech and deep-tech engineering.' },
  { slug: 'washington-dc', name: 'Washington DC', countrySlug: 'usa', country: 'USA', hook: 'Government, security and cleared-adjacent IT roles.' },
  { slug: 'jersey-city', name: 'Jersey City', countrySlug: 'usa', country: 'USA', hook: 'Wall-Street-adjacent BFSI and consulting demand.' },
  { slug: 'tampa', name: 'Tampa', countrySlug: 'usa', country: 'USA', hook: 'Growing finance and back-office tech hub.' },
  // Canada
  { slug: 'toronto', name: 'Toronto', countrySlug: 'canada', country: 'Canada', hook: 'Canada’s largest tech and banking hub.' },
  { slug: 'vancouver', name: 'Vancouver', countrySlug: 'canada', country: 'Canada', hook: 'Product, gaming and cloud engineering roles.' },
  { slug: 'calgary', name: 'Calgary', countrySlug: 'canada', country: 'Canada', hook: 'Energy-tech and growing enterprise IT.' },
  { slug: 'montreal', name: 'Montreal', countrySlug: 'canada', country: 'Canada', hook: 'AI research, gaming and enterprise engineering.' },
  { slug: 'ottawa', name: 'Ottawa', countrySlug: 'canada', country: 'Canada', hook: 'Government and telecom technology roles.' },
  // UK
  { slug: 'london', name: 'London', countrySlug: 'uk', country: 'UK', hook: 'Fintech, banking and product roles with sponsor licences.' },
  { slug: 'manchester', name: 'Manchester', countrySlug: 'uk', country: 'UK', hook: 'A growing northern tech and media hub.' },
  { slug: 'birmingham', name: 'Birmingham', countrySlug: 'uk', country: 'UK', hook: 'Enterprise, banking and consulting IT.' },
  { slug: 'leeds', name: 'Leeds', countrySlug: 'uk', country: 'UK', hook: 'Digital, health-tech and finance roles.' },
  { slug: 'glasgow', name: 'Glasgow', countrySlug: 'uk', country: 'UK', hook: 'Finance, engineering and public-sector tech.' },
  // Australia
  { slug: 'sydney', name: 'Sydney', countrySlug: 'australia', country: 'Australia', hook: 'Banking, cloud and product engineering.' },
  { slug: 'melbourne', name: 'Melbourne', countrySlug: 'australia', country: 'Australia', hook: 'Enterprise, government and startup tech.' },
  { slug: 'brisbane', name: 'Brisbane', countrySlug: 'australia', country: 'Australia', hook: 'Growing tech and infrastructure roles.' },
  { slug: 'perth', name: 'Perth', countrySlug: 'australia', country: 'Australia', hook: 'Resources-tech and enterprise IT demand.' },
  // Singapore
  { slug: 'singapore-city', name: 'Singapore', countrySlug: 'singapore', country: 'Singapore', hook: 'APAC HQ hub for banking and product tech.' },
  // Japan
  { slug: 'tokyo', name: 'Tokyo', countrySlug: 'japan', country: 'Japan', hook: 'Global product, fintech and gaming engineering.' },
  { slug: 'osaka', name: 'Osaka', countrySlug: 'japan', country: 'Japan', hook: 'Enterprise and manufacturing-tech roles.' },
  // New Zealand
  { slug: 'auckland', name: 'Auckland', countrySlug: 'new-zealand', country: 'New Zealand', hook: 'The country’s main tech and product hub.' },
  { slug: 'wellington', name: 'Wellington', countrySlug: 'new-zealand', country: 'New Zealand', hook: 'Government and product engineering roles.' },
  // India
  { slug: 'bangalore', name: 'Bangalore', countrySlug: 'india', country: 'India', hook: 'India’s biggest product, GCC and startup hub.' },
  { slug: 'hyderabad', name: 'Hyderabad', countrySlug: 'india', country: 'India', hook: 'Major product and global-capability-center hub.' },
  { slug: 'pune', name: 'Pune', countrySlug: 'india', country: 'India', hook: 'Product, services and engineering-center roles.' },
  { slug: 'chennai', name: 'Chennai', countrySlug: 'india', country: 'India', hook: 'Services, product and BFSI engineering.' },
  { slug: 'delhi-ncr', name: 'Delhi NCR', countrySlug: 'india', country: 'India', hook: 'Startups, product and enterprise across the capital region.' },
  { slug: 'noida', name: 'Noida', countrySlug: 'india', country: 'India', hook: 'IT services, product and GCC roles.' },
  { slug: 'gurgaon', name: 'Gurgaon', countrySlug: 'india', country: 'India', hook: 'Fintech, product and consulting engineering.' },
  { slug: 'mumbai', name: 'Mumbai', countrySlug: 'india', country: 'India', hook: 'BFSI, fintech and enterprise technology.' },
  { slug: 'ahmedabad', name: 'Ahmedabad', countrySlug: 'india', country: 'India', hook: 'Growing product and services tech scene.' },
  { slug: 'jaipur', name: 'Jaipur', countrySlug: 'india', country: 'India', hook: 'Emerging IT services and product roles.' },
  { slug: 'kochi', name: 'Kochi', countrySlug: 'india', country: 'India', hook: 'Growing IT-park product and services hub.' },
  { slug: 'kolkata', name: 'Kolkata', countrySlug: 'india', country: 'India', hook: 'Services, product and enterprise IT roles.' },
  // Additional USA
  { slug: 'irving', name: 'Irving', countrySlug: 'usa', country: 'USA', hook: 'A Dallas-area corporate and IT-services hub.' },
  { slug: 'plano', name: 'Plano', countrySlug: 'usa', country: 'USA', hook: 'Corporate HQs and enterprise IT north of Dallas.' },
  { slug: 'raleigh', name: 'Raleigh', countrySlug: 'usa', country: 'USA', hook: 'Research Triangle tech, product and cloud roles.' },
  { slug: 'miami', name: 'Miami', countrySlug: 'usa', country: 'USA', hook: 'Fast-growing fintech, crypto and startup scene.' },
  // Additional Canada
  { slug: 'mississauga', name: 'Mississauga', countrySlug: 'canada', country: 'Canada', hook: 'Greater Toronto enterprise and IT-services roles.' },
  { slug: 'brampton', name: 'Brampton', countrySlug: 'canada', country: 'Canada', hook: 'GTA enterprise and services IT demand.' },
  { slug: 'edmonton', name: 'Edmonton', countrySlug: 'canada', country: 'Canada', hook: 'Energy-tech and enterprise IT roles.' },
  { slug: 'waterloo', name: 'Waterloo', countrySlug: 'canada', country: 'Canada', hook: 'A strong product and startup engineering hub.' },
  // Additional UK
  { slug: 'edinburgh', name: 'Edinburgh', countrySlug: 'uk', country: 'UK', hook: 'Fintech, data and product engineering in Scotland.' },
  { slug: 'bristol', name: 'Bristol', countrySlug: 'uk', country: 'UK', hook: 'Aerospace, tech and product engineering.' },
  { slug: 'reading', name: 'Reading', countrySlug: 'uk', country: 'UK', hook: 'Thames-Valley enterprise and tech corridor.' },
  // Europe (mapped to specific country pages)
  { slug: 'dublin', name: 'Dublin', countrySlug: 'ireland', country: 'Ireland', hook: 'EU HQ of major product companies.' },
  { slug: 'cork', name: 'Cork', countrySlug: 'ireland', country: 'Ireland', hook: 'Growing product and enterprise-tech hub.' },
  { slug: 'berlin', name: 'Berlin', countrySlug: 'germany', country: 'Germany', hook: 'Startup and product engineering capital of Germany.' },
  { slug: 'munich', name: 'Munich', countrySlug: 'germany', country: 'Germany', hook: 'Automotive-software and enterprise engineering.' },
  { slug: 'frankfurt', name: 'Frankfurt', countrySlug: 'germany', country: 'Germany', hook: 'Banking, fintech and enterprise IT.' },
  { slug: 'hamburg', name: 'Hamburg', countrySlug: 'germany', country: 'Germany', hook: 'Media, logistics and product tech.' },
  { slug: 'amsterdam', name: 'Amsterdam', countrySlug: 'netherlands', country: 'Netherlands', hook: 'English-first product and platform engineering.' },
  { slug: 'rotterdam', name: 'Rotterdam', countrySlug: 'netherlands', country: 'Netherlands', hook: 'Logistics-tech and enterprise IT.' },
  { slug: 'paris', name: 'Paris', countrySlug: 'france', country: 'France', hook: 'AI, data and enterprise engineering hub.' },
  { slug: 'lyon', name: 'Lyon', countrySlug: 'france', country: 'France', hook: 'Growing tech and enterprise roles.' },
  { slug: 'stockholm', name: 'Stockholm', countrySlug: 'sweden', country: 'Sweden', hook: 'Product-led and startup engineering.' },
  { slug: 'zurich', name: 'Zurich', countrySlug: 'switzerland', country: 'Switzerland', hook: 'Banking and quant/fintech engineering.' },
  { slug: 'geneva', name: 'Geneva', countrySlug: 'switzerland', country: 'Switzerland', hook: 'Finance and international-org tech roles.' },
  // Additional Australia / Japan / NZ
  { slug: 'adelaide', name: 'Adelaide', countrySlug: 'australia', country: 'Australia', hook: 'Defence-tech and growing IT demand.' },
  { slug: 'canberra', name: 'Canberra', countrySlug: 'australia', country: 'Australia', hook: 'Government and security-cleared IT roles.' },
  { slug: 'yokohama', name: 'Yokohama', countrySlug: 'japan', country: 'Japan', hook: 'Enterprise and product engineering near Tokyo.' },
  { slug: 'nagoya', name: 'Nagoya', countrySlug: 'japan', country: 'Japan', hook: 'Manufacturing-tech and enterprise IT.' },
  { slug: 'fukuoka', name: 'Fukuoka', countrySlug: 'japan', country: 'Japan', hook: 'A growing startup and product hub.' },
  { slug: 'christchurch', name: 'Christchurch', countrySlug: 'new-zealand', country: 'New Zealand', hook: 'Product and enterprise engineering roles.' },
  // Gulf
  { slug: 'dubai', name: 'Dubai', countrySlug: 'uae', country: 'UAE', hook: 'The Gulf’s biggest tech and enterprise hub.' },
  { slug: 'abu-dhabi', name: 'Abu Dhabi', countrySlug: 'uae', country: 'UAE', hook: 'Government, energy and enterprise digital programs.' },
  { slug: 'riyadh', name: 'Riyadh', countrySlug: 'saudi-arabia', country: 'Saudi Arabia', hook: 'Vision 2030 enterprise and cloud programs.' },
  { slug: 'jeddah', name: 'Jeddah', countrySlug: 'saudi-arabia', country: 'Saudi Arabia', hook: 'Enterprise and services IT demand.' },
  // Additional India
  { slug: 'coimbatore', name: 'Coimbatore', countrySlug: 'india', country: 'India', hook: 'Growing IT services and product roles.' },
  { slug: 'indore', name: 'Indore', countrySlug: 'india', country: 'India', hook: 'Emerging IT and product-engineering hub.' },
  { slug: 'chandigarh', name: 'Chandigarh', countrySlug: 'india', country: 'India', hook: 'Growing IT services and startup scene.' },
  { slug: 'mysore', name: 'Mysore', countrySlug: 'india', country: 'India', hook: 'Product and services engineering near Bangalore.' },
  { slug: 'trivandrum', name: 'Trivandrum', countrySlug: 'india', country: 'India', hook: 'Technopark IT services and product roles.' },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
