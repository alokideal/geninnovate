// Product images
import neemPowderImage from "@/assets/neem-powder.jpg";
import organicOilImage from "@/assets/organic-oil.jpg";
import turmericPowderImage from "@/assets/turmeric-powder.jpg";
import ashwagandhaPowderImage from "@/assets/ashwagandha-powder.jpg";
import castorOilImage from "@/assets/castor-oil.jpg";
import moringaPowderImage from "@/assets/moringa-powder.jpg";
import amlaPowderImage from "@/assets/amla-powder.jpg";
import brahmiPowderImage from "@/assets/brahmi-powder.jpg";
import tulsiPowderImage from "@/assets/tulsi-powder.jpg";
import coconutOilImage from "@/assets/coconut-oil.jpg";
import neemOilImage from "@/assets/neem-oil.jpg";
import giloyPowderImage from "@/assets/giloy-powder.jpg";
import shatavariPowderImage from "@/assets/shatavari-powder.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  benefits: string[];
  keyFeatures: string[];
  usage: string;
  ingredients: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  weightVariants: {
    weight: string;
    price: string;
    originalPrice?: string;
  }[];
  tags: string[];
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
    detailedDescription: "Premium quality Ashwagandha root powder sourced from organic farms. This ancient adaptogenic herb has been used for centuries in Ayurveda to support stress management, energy levels, and overall wellness. Our pure, unadulterated powder retains maximum potency through careful processing.",
    price: "₹349",
    originalPrice: "₹449",
    image: ashwagandhaPowderImage,
    category: "herbal-powders",
    benefits: [
      "100% Pure & Organic",
      "Boosts strength and stamina", 
      "Enhances mental clarity",
      "Reduces stress naturally",
      "Supports healthy sleep",
      "Balances cortisol levels"
    ],
    keyFeatures: [
      "Certified Organic",
      "Third-party tested",
      "No artificial additives",
      "Traditional processing methods"
    ],
    usage: "Mix 1-2 teaspoons with warm milk or water. Best taken before bedtime or as directed by healthcare practitioner.",
    ingredients: "100% Pure Ashwagandha Root Powder (Withania somnifera)",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    featured: true,
    weightVariants: [
      { weight: "250g", price: "₹349", originalPrice: "₹449" },
      { weight: "500g", price: "₹649", originalPrice: "₹799" }
    ],
    tags: ["adaptogen", "stress-relief", "energy", "organic"]
  },
  {
    id: "brahmi-powder",
    name: "Brahmi Leaf Powder",
    description: "Known as the 'Herb of Grace,' Brahmi supports memory, focus, and cognitive health.",
    detailedDescription: "Premium Brahmi leaf powder from organically grown plants. This revered herb has been traditionally used to enhance cognitive function, improve memory, and support mental clarity. Perfect for students, professionals, and anyone seeking natural brain support.",
    price: "₹299",
    image: brahmiPowderImage,
    category: "herbal-powders",
    benefits: [
      "Promotes brain function",
      "Reduces anxiety and stress",
      "Ideal for students & professionals",
      "Improves concentration",
      "Enhances memory retention",
      "Supports nervous system health"
    ],
    keyFeatures: [
      "Pure leaf powder",
      "No chemical processing",
      "Fresh harvest",
      "Traditional preparation"
    ],
    usage: "Take 1/2 to 1 teaspoon twice daily with water or as recommended by healthcare practitioner.",
    ingredients: "100% Pure Brahmi Leaf Powder (Bacopa monnieri)",
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    weightVariants: [
      { weight: "250g", price: "₹299" },
      { weight: "500g", price: "₹549" }
    ],
    tags: ["brain-health", "memory", "cognitive", "ayurvedic"]
  },
  {
    id: "neem-powder",
    name: "Neem Leaf Powder",
    description: "Detoxifying green powder with antibacterial properties for skin, immunity & wellness.",
    detailedDescription: "Pure neem leaf powder from organically grown neem trees. Known as 'Nature's Pharmacy,' neem has powerful detoxifying and purifying properties. Our carefully processed powder maintains all the natural compounds that make neem so beneficial.",
    price: "₹299",
    originalPrice: "₹399", 
    image: neemPowderImage,
    category: "herbal-powders",
    benefits: [
      "Clears skin naturally",
      "Supports liver detoxification", 
      "Improves oral & digestive health",
      "Natural antibacterial properties",
      "Boosts immunity",
      "Purifies blood naturally"
    ],
    keyFeatures: [
      "Organically grown",
      "Sun-dried leaves",
      "Fine powder texture",
      "Maximum potency retained"
    ],
    usage: "Mix 1/2 teaspoon with water, honey, or as face mask. Can be taken internally as directed.",
    ingredients: "100% Pure Neem Leaf Powder (Azadirachta indica)",
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    featured: true,
    weightVariants: [
      { weight: "250g", price: "₹299", originalPrice: "₹399" },
      { weight: "500g", price: "₹549", originalPrice: "₹699" }
    ],
    tags: ["detox", "skin-care", "antibacterial", "immunity"]
  },
  {
    id: "tulsi-powder",
    name: "Tulsi (Holy Basil) Powder",
    description: "Sacred Ayurvedic herb for respiratory health, immunity, and stress relief.",
    detailedDescription: "Sacred Tulsi powder from premium quality Holy Basil plants. Revered in Ayurveda as the 'Queen of Herbs,' Tulsi provides comprehensive wellness support with its adaptogenic and immunomodulating properties.",
    price: "₹249",
    image: tulsiPowderImage,
    category: "herbal-powders", 
    benefits: [
      "Strengthens immune system",
      "Balances mind and body",
      "Reduces respiratory discomfort",
      "Sacred herb benefits",
      "Natural stress reliever",
      "Supports healthy aging"
    ],
    keyFeatures: [
      "Sacred variety",
      "Hand-picked leaves",
      "Traditional drying",
      "Pure powder form"
    ],
    usage: "Mix 1/2 to 1 teaspoon in warm water or tea. Best taken on empty stomach or as advised.",
    ingredients: "100% Pure Tulsi Leaf Powder (Ocimum tenuiflorum)",
    rating: 4.6,
    reviewCount: 73,
    inStock: true,
    weightVariants: [
      { weight: "250g", price: "₹249" },
      { weight: "500g", price: "₹449" }
    ],
    tags: ["holy-basil", "immunity", "respiratory", "sacred"]
  },
  {
    id: "moringa-powder",
    name: "Moringa Leaf Powder",
    description: "The 'Miracle Tree' superfood rich in vitamins, minerals & antioxidants.",
    detailedDescription: "Premium Moringa leaf powder from organically grown trees. Known as the 'Miracle Tree,' Moringa is one of nature's most nutrient-dense superfoods, packed with vitamins, minerals, amino acids, and antioxidants.",
    price: "₹399",
    image: moringaPowderImage,
    category: "herbal-powders",
    benefits: [
      "Boosts energy & stamina",
      "Promotes healthy skin & hair",
      "Improves digestion & metabolism", 
      "Rich in antioxidants",
      "Complete amino acid profile",
      "Natural multivitamin"
    ],
    keyFeatures: [
      "Superfood nutrition",
      "90+ nutrients",
      "Fresh leaf powder",
      "No artificial additives"
    ],
    usage: "Add 1-2 teaspoons to smoothies, juice, or water. Can be mixed with food or taken directly.",
    ingredients: "100% Pure Moringa Leaf Powder (Moringa oleifera)",
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    featured: true,
    weightVariants: [
      { weight: "250g", price: "₹399" },
      { weight: "500g", price: "₹749" }
    ],
    tags: ["superfood", "nutrition", "antioxidants", "energy"]
  },
  {
    id: "amla-powder",
    name: "Amla (Indian Gooseberry) Powder", 
    description: "A powerful Vitamin C-rich powder for immunity, skin glow & hair growth.",
    detailedDescription: "Pure Amla powder from fresh Indian gooseberries. Known as one of nature's richest sources of Vitamin C, Amla has been treasured in Ayurveda for its rejuvenating and anti-aging properties.",
    price: "₹279",
    originalPrice: "₹349",
    image: amlaPowderImage,
    category: "herbal-powders",
    benefits: [
      "Natural rejuvenator",
      "Prevents premature aging",
      "Supports hair strength & shine",
      "High in Vitamin C",
      "Boosts immunity naturally",
      "Enhances skin radiance"
    ],
    keyFeatures: [
      "Fresh gooseberry powder",
      "High Vitamin C content",
      "Natural preservation",
      "Pure and unadulterated"
    ],
    usage: "Take 1 teaspoon with honey or water daily. Can be mixed with hair oil for external use.",
    ingredients: "100% Pure Amla Powder (Phyllanthus emblica)",
    rating: 4.7,
    reviewCount: 134,
    inStock: true,
    weightVariants: [
      { weight: "250g", price: "₹279", originalPrice: "₹349" },
      { weight: "500g", price: "₹519", originalPrice: "₹649" }
    ],
    tags: ["vitamin-c", "immunity", "hair-care", "anti-aging"]
  },

  // Organic Oils
  {
    id: "coconut-oil",
    name: "Cold-Pressed Coconut Oil",
    description: "Luxury-grade coconut oil for cooking, skin & hair care.",
    detailedDescription: "Premium cold-pressed coconut oil extracted using traditional methods. Our virgin coconut oil retains all natural nutrients and has a fresh, tropical aroma. Perfect for cooking, skin care, and hair nourishment.",
    price: "₹450",
    image: coconutOilImage,
    category: "organic-oils",
    benefits: [
      "Chemical-free, pure extraction",
      "Deep nourishes skin",
      "Strengthens hair roots",
      "Multi-purpose usage",
      "Rich in healthy fats",
      "Natural moisturizer"
    ],
    keyFeatures: [
      "Cold-pressed virgin oil",
      "No chemical processing",
      "Fresh coconut aroma",
      "Glass bottle packaging"
    ],
    usage: "Use for cooking, apply on skin and hair, or take 1-2 teaspoons daily for health benefits.",
    ingredients: "100% Pure Cold-Pressed Coconut Oil (Cocos nucifera)",
    rating: 4.6,
    reviewCount: 198,
    inStock: true,
    featured: true,
    weightVariants: [
      { weight: "250ml", price: "₹450" },
      { weight: "500ml", price: "₹849" }
    ],
    tags: ["cold-pressed", "virgin", "multi-purpose", "cooking"]
  },
  {
    id: "neem-oil",
    name: "Neem Seed Oil",
    description: "Powerful therapeutic oil for skin, scalp & natural pest control.",
    detailedDescription: "Pure neem seed oil extracted from organic neem seeds. This therapeutic oil has been used for centuries for its powerful anti-bacterial, anti-fungal, and healing properties.",
    price: "₹549",
    image: neemOilImage,
    category: "organic-oils",
    benefits: [
      "Treats dandruff & acne",
      "Natural insect repellent", 
      "Anti-bacterial & anti-fungal",
      "Therapeutic properties",
      "Heals skin conditions",
      "Organic pest control"
    ],
    keyFeatures: [
      "Pure seed oil",
      "Therapeutic grade",
      "Organic extraction",
      "Dark amber color"
    ],
    usage: "Apply directly to affected areas or dilute with carrier oil. For pest control, mix with water and spray.",
    ingredients: "100% Pure Neem Seed Oil (Azadirachta indica)",
    rating: 4.5,
    reviewCount: 87,
    inStock: true,
    weightVariants: [
      { weight: "250ml", price: "₹549" },
      { weight: "500ml", price: "₹999" }
    ],
    tags: ["therapeutic", "anti-bacterial", "pest-control", "healing"]
  },
  {
    id: "castor-oil",
    name: "Castor Oil",
    description: "Rich, nourishing oil for skin rejuvenation and hair thickening.",
    detailedDescription: "Premium quality castor oil from organically grown castor seeds. Known for its thick consistency and powerful nourishing properties, this oil is excellent for hair growth and skin care.",
    price: "₹399",
    originalPrice: "₹499",
    image: castorOilImage,
    category: "organic-oils",
    benefits: [
      "Boosts hair growth",
      "Softens skin naturally",
      "Helps relieve joint pain",
      "Deep moisturizing",
      "Strengthens eyebrows & lashes",
      "Natural anti-inflammatory"
    ],
    keyFeatures: [
      "Hexane-free extraction",
      "Rich in ricinoleic acid",
      "Pure and unrefined",
      "Premium quality"
    ],
    usage: "Massage into hair and scalp or apply to skin. For joint pain, massage gently on affected areas.",
    ingredients: "100% Pure Castor Oil (Ricinus communis)",
    rating: 4.6,
    reviewCount: 167,
    inStock: true,
    weightVariants: [
      { weight: "250ml", price: "₹399", originalPrice: "₹499" },
      { weight: "500ml", price: "₹749", originalPrice: "₹899" }
    ],
    tags: ["hair-growth", "moisturizing", "unrefined", "natural"]
  },

  // Plant & Tree-Based Wellness Products
  {
    id: "giloy-powder",
    name: "Giloy Stem Powder",
    description: "Ayurvedic immunity booster for fever, infections, and chronic fatigue.",
    detailedDescription: "Pure Giloy stem powder from organically grown plants. Known as 'Amrita' or the root of immortality in Ayurveda, Giloy is a powerful immunity booster and natural detoxifier.",
    price: "₹399",
    image: giloyPowderImage,
    category: "wellness-products",
    benefits: [
      "Balances blood sugar",
      "Improves liver health",
      "Natural detoxifier",
      "Boosts immunity",
      "Reduces chronic fatigue",
      "Supports respiratory health"
    ],
    keyFeatures: [
      "Pure stem powder",
      "Traditional processing",
      "No preservatives",
      "Ayurvedic grade"
    ],
    usage: "Take 1/2 to 1 teaspoon with honey or warm water twice daily or as directed.",
    ingredients: "100% Pure Giloy Stem Powder (Tinospora cordifolia)",
    rating: 4.6,
    reviewCount: 92,
    inStock: true,
    weightVariants: [
      { weight: "250g", price: "₹399" },
      { weight: "500g", price: "₹749" }
    ],
    tags: ["immunity", "detox", "ayurvedic", "amrita"]
  },
  {
    id: "shatavari-powder",
    name: "Shatavari Root Powder", 
    description: "Feminine wellness herb for hormonal balance and vitality.",
    detailedDescription: "Premium Shatavari root powder from organically grown plants. Known as the 'Queen of Herbs' for women's health, Shatavari supports hormonal balance, reproductive health, and overall vitality.",
    price: "₹449",
    originalPrice: "₹549",
    image: shatavariPowderImage,
    category: "wellness-products",
    benefits: [
      "Supports women's reproductive health",
      "Reduces stress & fatigue", 
      "Nourishes overall well-being",
      "Hormonal balance support",
      "Natural rejuvenator",
      "Enhances lactation"
    ],
    keyFeatures: [
      "Premium root powder",
      "Women's wellness herb",
      "Adaptogenic properties",
      "Traditional preparation"
    ],
    usage: "Take 1/2 to 1 teaspoon with milk or water twice daily or as recommended by healthcare practitioner.",
    ingredients: "100% Pure Shatavari Root Powder (Asparagus racemosus)",
    rating: 4.7,
    reviewCount: 143,
    inStock: true,
    weightVariants: [
      { weight: "250g", price: "₹449", originalPrice: "₹549" },
      { weight: "500g", price: "₹849", originalPrice: "₹999" }
    ],
    tags: ["women-health", "hormonal-balance", "reproductive", "adaptogen"]
  }
];

// Helper functions
export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getProductsByCategory = (categoryId: string) => products.filter(product => product.category === categoryId);
export const getProductById = (id: string) => products.find(product => product.id === id);