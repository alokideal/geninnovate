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
import mustardOilImage from "@/assets/mustard-oil.jpg";
import sunflowerOilImage from "@/assets/sunflower-oil.jpg";
import flaxseedOilImage from "@/assets/flaxseed-oil.jpg";
import almondOilImage from "@/assets/almond-oil.jpg";
import blackSeedOilImage from "@/assets/black-seed-oil.jpg";
import walnutOilImage from "@/assets/walnut-oil.jpg";
import sesameOilImage from "@/assets/sesame-oil.jpg";
import chiaSeedsImage from "@/assets/chia-seeds.jpg";
import pumpkinSeedsImage from "@/assets/pumpkin-seeds.jpg";
import sunflowerSeedsImage from "@/assets/sunflower-seeds.jpg";
import sesameSeedsImage from "@/assets/sesame-seeds.jpg";
import mustardSeedsImage from "@/assets/mustard-seeds.jpg";
import fenugreekSeedsImage from "@/assets/fenugreek-seeds.jpg";
import flaxseedsImage from "@/assets/flaxseeds.jpg";

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
  },
  {
    id: "super-seeds",
    name: "Super Seeds",
    description: "Nutrient-rich organic seeds for health and wellness",
    icon: "Zap"
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
  },

  // Additional Organic Oils
  {
    id: "mustard-oil",
    name: "Organic Mustard Oil (Cold-pressed)",
    description: "Traditional cold-pressed edible mustard oil with high omega-3 profile for kitchen & topical uses.",
    detailedDescription: "Premium quality cold-pressed mustard oil extracted using traditional methods. High in omega-3 fatty acids, this versatile oil is perfect for cooking and topical applications. Known for its warming properties and health benefits.",
    price: "₹249",
    image: mustardOilImage,
    category: "organic-oils",
    benefits: [
      "High omega-3 profile",
      "Warming properties",
      "Dual-purpose: cooking & topical",
      "Traditional extraction",
      "Rich in beneficial fats",
      "Supports heart health"
    ],
    keyFeatures: [
      "Cold-pressed virgin oil",
      "No chemical processing",
      "Edible grade quality",
      "Traditional methods"
    ],
    usage: "Use for cooking vegetables, fish, and curries. Can be applied topically for massage and hair care.",
    ingredients: "100% Pure Cold-Pressed Mustard Oil (Brassica nigra)",
    rating: 4.5,
    reviewCount: 87,
    inStock: true,
    weightVariants: [
      { weight: "500ml", price: "₹249" },
      { weight: "1L", price: "₹449" }
    ],
    tags: ["edible", "omega-3", "traditional", "warming"]
  },
  {
    id: "sunflower-oil",
    name: "Organic Sunflower Oil (Cold-pressed)",
    description: "Light edible oil for cooking and dressings. Cold-pressed premium quality oil.",
    detailedDescription: "Premium cold-pressed sunflower oil perfect for cooking and salad dressings. Light in texture with a neutral flavor, making it ideal for various culinary applications.",
    price: "₹299",
    image: sunflowerOilImage,
    category: "organic-oils",
    benefits: [
      "Light texture & neutral flavor",
      "High in Vitamin E",
      "Heart-healthy fats",
      "Versatile cooking oil",
      "Cold-pressed quality",
      "No artificial additives"
    ],
    keyFeatures: [
      "Cold-pressed extraction",
      "Light golden color",
      "High smoke point",
      "Premium quality"
    ],
    usage: "Perfect for frying, cooking, and salad dressings. Can be used for baking and general cooking needs.",
    ingredients: "100% Pure Cold-Pressed Sunflower Oil (Helianthus annuus)",
    rating: 4.4,
    reviewCount: 112,
    inStock: true,
    weightVariants: [
      { weight: "500ml", price: "₹249" },
      { weight: "1L", price: "₹299" }
    ],
    tags: ["cooking", "neutral-flavor", "vitamin-e", "versatile"]
  },
  {
    id: "flaxseed-oil",
    name: "Organic Flaxseed (Linseed) Oil (Cold-pressed)",
    description: "Rich plant omega-3 (ALA) oil for culinary & topical uses. Store refrigerated.",
    detailedDescription: "Premium flaxseed oil rich in alpha-linolenic acid (ALA), a plant-based omega-3 fatty acid. Perfect for salad dressings and topical applications. Requires refrigerated storage to maintain freshness.",
    price: "₹399",
    image: flaxseedOilImage,
    category: "organic-oils",
    benefits: [
      "Rich in plant omega-3 (ALA)",
      "Supports heart health",
      "Anti-inflammatory properties",
      "Brain health support",
      "Skin nourishment",
      "Cold-pressed purity"
    ],
    keyFeatures: [
      "High ALA content",
      "Refrigerated storage",
      "Golden amber color",
      "Premium extraction"
    ],
    usage: "Add to salads, smoothies, or take directly. Can be applied topically for skin care. Keep refrigerated.",
    ingredients: "100% Pure Cold-Pressed Flaxseed Oil (Linum usitatissimum)",
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    weightVariants: [
      { weight: "100ml", price: "₹399" },
      { weight: "250ml", price: "₹899" },
      { weight: "500ml", price: "₹1699" }
    ],
    tags: ["omega-3", "ala", "brain-health", "anti-inflammatory"]
  },
  {
    id: "almond-oil",
    name: "Organic Sweet Almond Oil (Cold-pressed)",
    description: "Carrier oil for topical use & edible grade - excellent for skin and hair care.",
    detailedDescription: "Pure sweet almond oil extracted from organic almonds. This versatile oil is perfect for skin and hair care, with edible grade quality. Rich in vitamin E and beneficial fatty acids.",
    price: "₹349",
    image: almondOilImage,
    category: "organic-oils",
    benefits: [
      "Rich in Vitamin E",
      "Gentle on sensitive skin",
      "Hair strengthening",
      "Deep moisturizing",
      "Anti-aging properties",
      "Edible grade quality"
    ],
    keyFeatures: [
      "Food & cosmetic grade",
      "Light golden color",
      "Mild sweet aroma",
      "Cold-pressed purity"
    ],
    usage: "Apply to skin and hair for nourishment. Can be used as carrier oil for essential oils or consumed in small quantities.",
    ingredients: "100% Pure Cold-Pressed Sweet Almond Oil (Prunus dulcis)",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    weightVariants: [
      { weight: "50ml", price: "₹199" },
      { weight: "100ml", price: "₹349" }
    ],
    tags: ["vitamin-e", "carrier-oil", "skin-care", "hair-care"]
  },
  {
    id: "black-seed-oil",
    name: "Organic Black-seed (Kalonji) Oil",
    description: "Cold-pressed Nigella sativa oil for hair & wellness (edible & topical).",
    detailedDescription: "Premium black seed oil from Nigella sativa seeds. Known for its powerful therapeutic properties, this oil supports hair health and overall wellness. Can be used both internally and topically.",
    price: "₹399",
    image: blackSeedOilImage,
    category: "organic-oils",
    benefits: [
      "Hair growth stimulation",
      "Immune system support",
      "Anti-inflammatory properties",
      "Skin health improvement",
      "Antioxidant rich",
      "Traditional wellness oil"
    ],
    keyFeatures: [
      "Nigella sativa source",
      "Dark amber color",
      "Therapeutic grade",
      "Dual-purpose use"
    ],
    usage: "Take 1 teaspoon daily for wellness benefits or apply to hair and scalp for hair health. Can be mixed with honey.",
    ingredients: "100% Pure Cold-Pressed Black Seed Oil (Nigella sativa)",
    rating: 4.5,
    reviewCount: 134,
    inStock: true,
    weightVariants: [
      { weight: "50ml", price: "₹249" },
      { weight: "100ml", price: "₹399" }
    ],
    tags: ["nigella-sativa", "hair-growth", "therapeutic", "immunity"]
  },
  {
    id: "walnut-oil",
    name: "Organic Walnut Oil (Cold-pressed)",
    description: "Gourmet cold-pressed walnut oil for salads & topical uses (fragile, store cool).",
    detailedDescription: "Premium walnut oil with rich, nutty flavor perfect for gourmet cooking and topical applications. High in omega-3 fatty acids and requires cool storage to maintain quality.",
    price: "₹450",
    image: walnutOilImage,
    category: "organic-oils",
    benefits: [
      "Rich nutty flavor",
      "High in omega-3",
      "Brain health support",
      "Gourmet cooking oil",
      "Skin nourishment",
      "Antioxidant properties"
    ],
    keyFeatures: [
      "Gourmet grade quality",
      "Rich amber color",
      "Distinctive nutty aroma",
      "Premium extraction"
    ],
    usage: "Perfect for salad dressings and finishing dishes. Can be applied to skin for nourishment. Store in cool place.",
    ingredients: "100% Pure Cold-Pressed Walnut Oil (Juglans regia)",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    weightVariants: [
      { weight: "100ml", price: "₹450" },
      { weight: "250ml", price: "₹999" }
    ],
    tags: ["gourmet", "omega-3", "nutty-flavor", "brain-health"]
  },
  {
    id: "sesame-oil",
    name: "Organic Cold-pressed Sesame Oil (Til oil)",
    description: "Cold-pressed sesame oil for cooking and ayurvedic topical use.",
    detailedDescription: "Traditional cold-pressed sesame oil perfect for cooking and Ayurvedic practices. Known for its warming properties and rich nutritional profile, ideal for both culinary and therapeutic uses.",
    price: "₹349",
    image: sesameOilImage,
    category: "organic-oils",
    benefits: [
      "Warming properties",
      "Rich in antioxidants",
      "Ayurvedic uses",
      "Heart-healthy fats",
      "Skin nourishment",
      "Traditional oil pulling"
    ],
    keyFeatures: [
      "Cold-pressed quality",
      "Golden amber color",
      "Rich nutty aroma",
      "Traditional extraction"
    ],
    usage: "Use for cooking, oil pulling, and massage. Perfect for Ayurvedic practices and general cooking needs.",
    ingredients: "100% Pure Cold-Pressed Sesame Oil (Sesamum indicum)",
    rating: 4.5,
    reviewCount: 167,
    inStock: true,
    weightVariants: [
      { weight: "200ml", price: "₹349" },
      { weight: "500ml", price: "₹799" }
    ],
    tags: ["ayurvedic", "oil-pulling", "warming", "antioxidants"]
  },

  // Super Seeds
  {
    id: "chia-seeds",
    name: "Organic Chia Seeds",
    description: "Plant-based omega-3 & fiber powerhouse; ideal for puddings, smoothies, and healthy snacks.",
    detailedDescription: "Premium organic chia seeds packed with omega-3 fatty acids, fiber, and complete proteins. These tiny superfoods are perfect for creating nutritious puddings, smoothies, and adding to various dishes.",
    price: "₹249",
    image: chiaSeedsImage,
    category: "super-seeds",
    benefits: [
      "High in omega-3 fatty acids",
      "Complete protein source",
      "Rich in fiber",
      "Supports digestion",
      "Energy sustaining",
      "Versatile superfood"
    ],
    keyFeatures: [
      "Organic certification",
      "High nutritional density",
      "Gel-forming properties",
      "Long shelf life"
    ],
    usage: "Soak in water to create puddings, add to smoothies, yogurt, or sprinkle on salads. Use 1-2 tablespoons daily.",
    ingredients: "100% Organic Chia Seeds (Salvia hispanica)",
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    featured: true,
    weightVariants: [
      { weight: "125g", price: "₹149" },
      { weight: "250g", price: "₹249" },
      { weight: "500g", price: "₹449" }
    ],
    tags: ["superfood", "omega-3", "protein", "fiber"]
  },
  {
    id: "pumpkin-seeds",
    name: "Organic Pumpkin Seeds (Shelled)",
    description: "High-protein snack & baking ingredient rich in minerals and healthy fats.",
    detailedDescription: "Premium shelled pumpkin seeds packed with protein, zinc, and healthy fats. Perfect as a nutritious snack or for adding to baked goods and salads.",
    price: "₹299",
    image: pumpkinSeedsImage,
    category: "super-seeds",
    benefits: [
      "High protein content",
      "Rich in zinc & magnesium",
      "Healthy fats",
      "Supports prostate health",
      "Heart-healthy snack",
      "Versatile ingredient"
    ],
    keyFeatures: [
      "Shelled for convenience",
      "Roasted to perfection",
      "Premium quality",
      "Rich green color"
    ],
    usage: "Enjoy as a snack, add to salads, cereals, or use in baking. Recommended serving: 1-2 tablespoons daily.",
    ingredients: "100% Organic Shelled Pumpkin Seeds (Cucurbita pepo)",
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    weightVariants: [
      { weight: "100g", price: "₹169" },
      { weight: "200g", price: "₹299" }
    ],
    tags: ["protein", "zinc", "snack", "heart-healthy"]
  },
  {
    id: "sunflower-seeds",
    name: "Roasted Sunflower Seeds",
    description: "Nutritious snack and topping for salads & baking with rich vitamin E content.",
    detailedDescription: "Premium roasted sunflower seeds perfect for snacking and culinary use. Rich in vitamin E, healthy fats, and minerals, these seeds add crunch and nutrition to any dish.",
    price: "₹179",
    image: sunflowerSeedsImage,
    category: "super-seeds",
    benefits: [
      "High in vitamin E",
      "Heart-healthy fats",
      "Rich in selenium",
      "Antioxidant properties",
      "Supports skin health",
      "Energy boosting"
    ],
    keyFeatures: [
      "Perfectly roasted",
      "Striped variety",
      "Crunchy texture",
      "Fresh packaging"
    ],
    usage: "Enjoy as a snack, sprinkle on salads, add to trail mix, or use in baking recipes.",
    ingredients: "100% Roasted Sunflower Seeds (Helianthus annuus)",
    rating: 4.4,
    reviewCount: 123,
    inStock: true,
    weightVariants: [
      { weight: "200g", price: "₹179" }
    ],
    tags: ["vitamin-e", "roasted", "snack", "antioxidants"]
  },
  {
    id: "sesame-seeds",
    name: "Organic Sesame Seeds (Til)",
    description: "Hulled sesame seeds for culinary, baking, and oil extraction purposes.",
    detailedDescription: "Premium organic sesame seeds perfect for cooking, baking, and traditional preparations. Rich in calcium, healthy fats, and minerals, these versatile seeds are a staple in many cuisines.",
    price: "₹199",
    image: sesameSeedsImage,
    category: "super-seeds",
    benefits: [
      "High in calcium",
      "Rich in healthy fats",
      "Supports bone health",
      "Traditional superfood",
      "Versatile culinary use",
      "Natural flavor enhancer"
    ],
    keyFeatures: [
      "Hulled variety",
      "Organic certification",
      "White sesame seeds",
      "Premium quality"
    ],
    usage: "Use in cooking, baking, making tahini, or sprinkle on dishes. Can be roasted for enhanced flavor.",
    ingredients: "100% Organic Hulled Sesame Seeds (Sesamum indicum)",
    rating: 4.5,
    reviewCount: 187,
    inStock: true,
    weightVariants: [
      { weight: "200g", price: "₹199" },
      { weight: "500g", price: "₹449" }
    ],
    tags: ["calcium", "culinary", "tahini", "traditional"]
  },
  {
    id: "mustard-seeds",
    name: "Organic Mustard Seeds",
    description: "Whole mustard seeds for pickles, cooking, and oil pressing with pungent flavor.",
    detailedDescription: "Premium organic mustard seeds perfect for traditional cooking, pickling, and oil extraction. These small yellow seeds pack a powerful flavor punch and are essential in Indian cuisine.",
    price: "₹129",
    image: mustardSeedsImage,
    category: "super-seeds",
    benefits: [
      "Rich in antioxidants",
      "Anti-inflammatory properties",
      "Digestive support",
      "Traditional spice",
      "Versatile cooking use",
      "Natural preservative"
    ],
    keyFeatures: [
      "Yellow variety",
      "Organic certification",
      "Pungent flavor",
      "Small round seeds"
    ],
    usage: "Use in tempering, pickling, grinding for paste, or oil extraction. Essential for traditional Indian cooking.",
    ingredients: "100% Organic Mustard Seeds (Brassica nigra)",
    rating: 4.3,
    reviewCount: 98,
    inStock: true,
    weightVariants: [
      { weight: "200g", price: "₹129" },
      { weight: "1kg", price: "₹549" }
    ],
    tags: ["spice", "pickling", "traditional", "pungent"]
  },
  {
    id: "fenugreek-seeds",
    name: "Organic Fenugreek Seeds (Methi)",
    description: "Aromatic seeds for spices & hair-care uses with distinctive maple-like flavor.",
    detailedDescription: "Premium organic fenugreek seeds with a distinctive maple-like aroma and bitter taste. Used in cooking, traditional medicine, and hair care preparations. Rich in fiber and beneficial compounds.",
    price: "₹129",
    image: fenugreekSeedsImage,
    category: "super-seeds",
    benefits: [
      "Supports digestion",
      "Hair care benefits",
      "Blood sugar support",
      "Rich in fiber",
      "Traditional medicine",
      "Distinctive flavor"
    ],
    keyFeatures: [
      "Angular shaped seeds",
      "Maple-like aroma",
      "Organic certification",
      "Golden brown color"
    ],
    usage: "Use in cooking, soak overnight and consume, grind for hair masks, or use in spice blends.",
    ingredients: "100% Organic Fenugreek Seeds (Trigonella foenum-graecum)",
    rating: 4.4,
    reviewCount: 145,
    inStock: true,
    weightVariants: [
      { weight: "200g", price: "₹129" },
      { weight: "500g", price: "₹279" }
    ],
    tags: ["methi", "hair-care", "digestion", "traditional"]
  },
  {
    id: "flaxseeds",
    name: "Organic Flaxseeds (Alsi)",
    description: "Whole brown flaxseeds - grind for meal or press for oil, rich in omega-3.",
    detailedDescription: "Premium organic brown flaxseeds packed with omega-3 fatty acids, fiber, and lignans. Can be ground into meal for easy consumption or used whole in various preparations.",
    price: "₹149",
    image: flaxseedsImage,
    category: "super-seeds",
    benefits: [
      "Rich in omega-3 (ALA)",
      "High fiber content",
      "Lignan antioxidants",
      "Heart health support",
      "Digestive wellness",
      "Versatile superfood"
    ],
    keyFeatures: [
      "Brown variety",
      "Organic certification",
      "Fresh packaging",
      "Whole seeds"
    ],
    usage: "Grind before consuming for better absorption. Add to smoothies, yogurt, cereals, or use in baking.",
    ingredients: "100% Organic Brown Flaxseeds (Linum usitatissimum)",
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    weightVariants: [
      { weight: "200g", price: "₹149" },
      { weight: "500g", price: "₹329" }
    ],
    tags: ["omega-3", "fiber", "lignans", "superfood"]
  }
];

// Helper functions
export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getProductsByCategory = (categoryId: string) => products.filter(product => product.category === categoryId);
export const getProductById = (id: string) => products.find(product => product.id === id);