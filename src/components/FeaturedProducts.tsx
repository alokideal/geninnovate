import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

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
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.name}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              benefits={product.benefits}
              rating={product.rating}
              inStock={product.inStock}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors">
            <a href="/products">View All Products</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;