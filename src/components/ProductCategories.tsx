import { productCategories, getProductsByCategory } from "@/data/products";
import ProductCardEnhanced from "./ProductCardEnhanced";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplets, Heart, Zap } from "lucide-react";

const iconMap = {
  Leaf: Leaf,
  Droplets: Droplets, 
  Heart: Heart,
  Zap: Zap
};

const ProductCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Luxury Herbal 
            <span className="text-luxury"> Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our premium categories of organic wellness products, each crafted with 
            traditional wisdom and modern quality standards.
          </p>
        </div>

        {productCategories.map((category) => {
          const products = getProductsByCategory(category.id);
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          
          return (
            <div key={category.id} className="mb-20">
              {/* Category Header */}
              <Card className="luxury-card mb-12 bg-gradient-card">
                <CardHeader className="text-center py-12">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full luxury-gradient">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 6).map((product) => (
                  <ProductCardEnhanced 
                    key={product.id} 
                    product={product}
                  />
                ))}
              </div>

              {products.length > 6 && (
                <div className="text-center mt-8">
                  <a 
                    href={`/products?category=${category.id}`}
                    className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    View All {category.name}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCategories;