import { getFeaturedProducts } from "@/data/products";
import ProductCardEnhanced from "./ProductCardEnhanced";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-natural-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured 
            <span className="text-luxury"> Premium</span> Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our most popular organic herbal products, carefully selected for their 
            exceptional quality and traditional benefits.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCardEnhanced 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/products" 
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-soft"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;