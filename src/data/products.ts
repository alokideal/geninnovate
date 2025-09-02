// Product images
import neemPowderImage from "@/assets/neem-powder.jpg";
import organicOilImage from "@/assets/organic-oil.jpg";
import turmericPowderImage from "@/assets/turmeric-powder.jpg";
import ashwagandhaPowderImage from "@/assets/ashwagandha-powder.jpg";
import castorOilImage from "@/assets/castor-oil.jpg";
import moringaPowderImage from "@/assets/moringa-powder.jpg";
import amlaPowderImage from "@/assets/amla-powder.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  benefits: string[];
  rating: number;
  inStock: boolean;
  featured?: boolean;
}

export const productCategories = [
  {
    id: "herbal-powders",
    name: "Herbal Powders",
    description: "Pure organic herbal powders for wellness and vitality",
    icon: "Leaf"
  },
  {
    id: "organic-oils", 
    name: "Organic Oils",
    description: "Cold-pressed oils for skin, hair, and therapeutic use",
    icon: "Droplets"
  },
  {
    id: "wellness-products",
    name: "Plant & Tree-Based Wellness",
    description: "Traditional Ayurvedic herbs for complete wellness",
    icon: "Heart"
  }
];

export const products: Product[] = [
  // Herbal Powders
  {
    id: "ashwagandha-powder",
    name: "Ashwagandha Root Powder", 
    description: "A natural adaptogen that rejuvenates energy, reduces stress, and promotes overall vitality.",
    price: "₹349",
    originalPrice: "₹449",
    image: ashwagandhaPowderImage,
    category: "herbal-powders",
    benefits: [
      "100% Pure & Organic",
      "Boosts strength and stamina", 
      "Enhances mental clarity",
      "Reduces stress naturally"
    ],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "brahmi-powder",
    name: "Brahmi Leaf Powder",
    description: "Known as the 'Herb of Grace,' Brahmi supports memory, focus, and cognitive health.",
    price: "₹299",
    image: neemPowderImage, // Using existing image as placeholder
    category: "herbal-powders",
    benefits: [
      "Promotes brain function",
      "Reduces anxiety and stress",
      "Ideal for students & professionals",
      "Improves concentration"
    ],
    rating: 4.7,
    inStock: true
  },
  {
    id: "neem-powder",
    name: "Neem Leaf Powder",
    description: "Detoxifying green powder with antibacterial properties for skin, immunity & wellness.",
    price: "₹299",
    originalPrice: "₹399", 
    image: neemPowderImage,
    category: "herbal-powders",
    benefits: [
      "Clears skin naturally",
      "Supports liver detoxification", 
      "Improves oral & digestive health",
      "Natural antibacterial properties"
    ],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "tulsi-powder",
    name: "Tulsi (Holy Basil) Powder",
    description: "Sacred Ayurvedic herb for respiratory health, immunity, and stress relief.",
    price: "₹249",
    image: turmericPowderImage, // Using existing as placeholder
    category: "herbal-powders", 
    benefits: [
      "Strengthens immune system",
      "Balances mind and body",
      "Reduces respiratory discomfort",
      "Sacred herb benefits"
    ],
    rating: 4.6,
    inStock: true
  },
  {
    id: "moringa-powder",
    name: "Moringa Leaf Powder",
    description: "The 'Miracle Tree' superfood rich in vitamins, minerals & antioxidants.",
    price: "₹399",
    image: moringaPowderImage,
    category: "herbal-powders",
    benefits: [
      "Boosts energy & stamina",
      "Promotes healthy skin & hair",
      "Improves digestion & metabolism", 
      "Rich in antioxidants"
    ],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: "amla-powder",
    name: "Amla (Indian Gooseberry) Powder", 
    description: "A powerful Vitamin C-rich powder for immunity, skin glow & hair growth.",
    price: "₹279",
    originalPrice: "₹349",
    image: amlaPowderImage,
    category: "herbal-powders",
    benefits: [
      "Natural rejuvenator",
      "Prevents premature aging",
      "Supports hair strength & shine",
      "High in Vitamin C"
    ],
    rating: 4.7,
    inStock: true
  },
  {
    id: "turmeric-powder",
    name: "Organic Turmeric Powder",
    description: "Pure turmeric powder with high curcumin content for cooking and medicinal purposes.",
    price: "₹199",
    originalPrice: "₹249",
    image: turmericPowderImage,
    category: "herbal-powders",
    benefits: [
      "High curcumin content",
      "Anti-inflammatory properties",
      "Natural antioxidant", 
      "Freshly ground"
    ],
    rating: 4.7,
    inStock: true
  },

  // Organic Oils
  {
    id: "coconut-oil",
    name: "Cold-Pressed Coconut Oil",
    description: "Luxury-grade coconut oil for cooking, skin & hair care.",
    price: "₹450",
    image: organicOilImage,
    category: "organic-oils",
    benefits: [
      "Chemical-free, pure extraction",
      "Deep nourishes skin",
      "Strengthens hair roots",
      "Multi-purpose usage"
    ],
    rating: 4.6,
    inStock: true,
    featured: true
  },
  {
    id: "neem-oil",
    name: "Neem Seed Oil",
    description: "Powerful therapeutic oil for skin, scalp & natural pest control.",
    price: "₹549",
    image: organicOilImage, // Placeholder
    category: "organic-oils",
    benefits: [
      "Treats dandruff & acne",
      "Natural insect repellent", 
      "Anti-bacterial & anti-fungal",
      "Therapeutic properties"
    ],
    rating: 4.5,
    inStock: true
  },
  {
    id: "castor-oil",
    name: "Castor Oil",
    description: "Rich, nourishing oil for skin rejuvenation and hair thickening.",
    price: "₹399",
    originalPrice: "₹499",
    image: castorOilImage,
    category: "organic-oils",
    benefits: [
      "Boosts hair growth",
      "Softens skin naturally",
      "Helps relieve joint pain",
      "Deep moisturizing"
    ],
    rating: 4.6,
    inStock: true
  },
  {
    id: "moringa-oil",
    name: "Moringa Seed Oil",
    description: "Luxurious antioxidant-rich oil for skin repair & hydration.",
    price: "₹899",
    image: organicOilImage, // Placeholder
    category: "organic-oils", 
    benefits: [
      "Anti-aging benefits",
      "Heals dry skin",
      "Boosts collagen production",
      "Antioxidant-rich formula"
    ],
    rating: 4.8,
    inStock: true
  },
  {
    id: "tulsi-oil",
    name: "Tulsi Essential Oil",
    description: "Aromatic and healing oil for relaxation, immunity, and skin wellness.",
    price: "₹649",
    image: organicOilImage, // Placeholder
    category: "organic-oils",
    benefits: [
      "Reduces stress & anxiety",
      "Clears respiratory passages", 
      "Enhances natural glow",
      "Pure essential oil"
    ],
    rating: 4.7,
    inStock: true
  },

  // Plant & Tree-Based Wellness Products
  {
    id: "giloy-powder",
    name: "Giloy Stem Powder",
    description: "Ayurvedic immunity booster for fever, infections, and chronic fatigue.",
    price: "₹399",
    image: turmericPowderImage, // Placeholder
    category: "wellness-products",
    benefits: [
      "Balances blood sugar",
      "Improves liver health",
      "Natural detoxifier",
      "Boosts immunity"
    ],
    rating: 4.6,
    inStock: true
  },
  {
    id: "haritaki-powder", 
    name: "Haritaki Powder",
    description: "Known as the 'King of Medicines' in Ayurveda, supports digestion & cleansing.",
    price: "₹349",
    image: turmericPowderImage, // Placeholder
    category: "wellness-products",
    benefits: [
      "Improves gut health",
      "Removes toxins",
      "Supports weight balance",
      "Ayurvedic medicine"
    ],
    rating: 4.5,
    inStock: true
  },
  {
    id: "shatavari-powder",
    name: "Shatavari Root Powder", 
    description: "Feminine wellness herb for hormonal balance and vitality.",
    price: "₹449",
    originalPrice: "₹549",
    image: turmericPowderImage, // Placeholder
    category: "wellness-products",
    benefits: [
      "Supports women's reproductive health",
      "Reduces stress & fatigue", 
      "Nourishes overall well-being",
      "Hormonal balance support"
    ],
    rating: 4.7,
    inStock: true
  },
  {
    id: "bael-powder",
    name: "Bael Fruit Powder",
    description: "Sacred fruit for digestion & cooling effect.",
    price: "₹299",
    image: turmericPowderImage, // Placeholder
    category: "wellness-products", 
    benefits: [
      "Treats acidity & constipation",
      "Promotes healthy gut flora",
      "Refreshes body & mind",
      "Natural digestive aid"
    ],
    rating: 4.4,
    inStock: true
  }
];

// Helper functions
export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getProductsByCategory = (categoryId: string) => products.filter(product => product.category === categoryId);
export const getProductById = (id: string) => products.find(product => product.id === id);