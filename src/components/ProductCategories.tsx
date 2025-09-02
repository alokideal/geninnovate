import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplets, Heart, Sparkles } from "lucide-react";
import { productCategories } from "@/data/products";

const iconMap = {
  Leaf: Leaf,
  Droplets: Droplets, 
  Heart: Heart,
  Sparkles: Sparkles
};

const ProductCategories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of organic herbal products, 
            each category crafted with traditional wisdom and modern quality standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Leaf;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;