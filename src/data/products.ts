export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  tags: string[];
  skinTypes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  productCount: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "1", name: "Cleanser", icon: "🧴", slug: "cleanser" },
  { id: "2", name: "Sunscreen", icon: "☀️", slug: "sunscreen" },
  { id: "3", name: "Moisturizer", icon: "💧", slug: "moisturizer" },
  { id: "4", name: "Toner", icon: "✨", slug: "toner" },
  { id: "5", name: "Serum", icon: "💎", slug: "serum" },
  { id: "6", name: "Retinol", icon: "🌙", slug: "retinol" },
  { id: "7", name: "Eye Cream", icon: "👁️", slug: "eye-cream" },
  { id: "8", name: "Face Mask", icon: "🎭", slug: "face-mask" },
];

export const brands: Brand[] = [
  {
    id: "1",
    name: "Beauty of Joseon",
    logo: "/brands/boj.png",
    description: "Traditional Korean beauty wisdom meets modern skincare science",
    productCount: 24,
  },
  {
    id: "2",
    name: "COSRX",
    logo: "/brands/cosrx.png",
    description: "Effective, minimal ingredient skincare for all skin types",
    productCount: 45,
  },
  {
    id: "3",
    name: "Glow Recipe",
    logo: "/brands/glow.png",
    description: "Fruit-powered skincare that delivers results with joy",
    productCount: 18,
  },
  {
    id: "4",
    name: "Laneige",
    logo: "/brands/laneige.png",
    description: "Water science technology for optimal hydration",
    productCount: 32,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Glow Deep Serum Rice + Alpha Arbutin",
    brand: "Beauty of Joseon",
    category: "Serum",
    price: 17.99,
    originalPrice: 22.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop",
    rating: 4.8,
    reviews: 2847,
    tags: ["Brightening", "Hydrating"],
    skinTypes: ["All", "Dull"],
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Relief Sun Rice + Probiotics SPF50+",
    brand: "Beauty of Joseon",
    category: "Sunscreen",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop",
    rating: 4.9,
    reviews: 5621,
    tags: ["SPF50+", "Lightweight"],
    skinTypes: ["All", "Sensitive"],
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Watermelon Glow Niacinamide Dew Drops",
    brand: "Glow Recipe",
    category: "Serum",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
    rating: 4.7,
    reviews: 1893,
    tags: ["Glow", "Hydrating"],
    skinTypes: ["All"],
    isNew: true,
  },
  {
    id: "4",
    name: "Advanced Snail 96 Mucin Power Essence",
    brand: "COSRX",
    category: "Serum",
    price: 21.99,
    originalPrice: 25.99,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop",
    rating: 4.8,
    reviews: 8234,
    tags: ["Hydrating", "Repair"],
    skinTypes: ["All", "Dry"],
    isBestSeller: true,
  },
  {
    id: "5",
    name: "Water Sleeping Mask",
    brand: "Laneige",
    category: "Face Mask",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=600&fit=crop",
    rating: 4.6,
    reviews: 3456,
    tags: ["Overnight", "Hydrating"],
    skinTypes: ["All", "Dehydrated"],
  },
  {
    id: "6",
    name: "Retinol 0.5 in Squalane",
    brand: "The Ordinary",
    category: "Retinol",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&h=600&fit=crop",
    rating: 4.5,
    reviews: 4521,
    tags: ["Anti-aging", "Night"],
    skinTypes: ["Normal", "Oily"],
  },
  {
    id: "7",
    name: "Low pH Good Morning Cleanser",
    brand: "COSRX",
    category: "Cleanser",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop",
    rating: 4.7,
    reviews: 6789,
    tags: ["Gentle", "pH Balanced"],
    skinTypes: ["All", "Sensitive"],
    isBestSeller: true,
  },
  {
    id: "8",
    name: "Plum Plump Hyaluronic Cream",
    brand: "Glow Recipe",
    category: "Moisturizer",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&h=600&fit=crop",
    rating: 4.8,
    reviews: 1234,
    tags: ["Plumping", "Hydrating"],
    skinTypes: ["All", "Dry"],
    isNew: true,
  },
];

export const trendingProducts = products.filter(p => p.isBestSeller || p.isNew).slice(0, 4);
export const bestSellers = products.filter(p => p.isBestSeller);
export const newArrivals = products.filter(p => p.isNew);
