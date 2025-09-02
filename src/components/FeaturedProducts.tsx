import ProductCard from "./ProductCard";
import neemPowderImage from "@/assets/neem-powder.jpg";
import organicOilImage from "@/assets/organic-oil.jpg";
import turmericPowderImage from "@/assets/turmeric-powder.jpg";

const products = [
  {
    image: neemPowderImage,
    title: "Pure Neem Leaf Powder",
    description: "100% organic neem leaves powder for skincare, haircare, and natural detox. Shade-dried to preserve nutrients.",
    price: "₹299",
    originalPrice: "₹399",
    benefits: [
      "Fights acne and clears blemishes",
      "Natural hair strengthener", 
      "Boosts immunity naturally",
      "No additives or fillers"
    ],
    rating: 4.8
  },
  {
    image: organicOilImage,
    title: "Organic Coconut Oil",
    description: "Premium cold-pressed coconut oil perfect for cooking, skincare, and haircare needs.",
    price: "₹450",
    benefits: [
      "Cold-pressed for purity",
      "Multi-purpose usage",
      "Rich in vitamins",
      "Chemical-free processing"
    ],
    rating: 4.6
  },
  {
    image: turmericPowderImage,
    title: "Organic Turmeric Powder",
    description: "Pure turmeric powder with high curcumin content for cooking and medicinal purposes.",
    price: "₹199",
    originalPrice: "₹249",
    benefits: [
      "High curcumin content",
      "Anti-inflammatory properties", 
      "Natural antioxidant",
      "Freshly ground"
    ],
    rating: 4.7
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular herbal products, trusted by thousands of customers 
            for their purity, quality, and effectiveness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;