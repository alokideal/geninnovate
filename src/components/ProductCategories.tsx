import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplets, Sparkles, Heart } from "lucide-react";

const categories = [
  {
    icon: Leaf,
    title: "Leaf Powders",
    description: "Pure organic leaf powders including neem, moringa, and curry leaves",
    productCount: "12+ Products",
    color: "text-green-600"
  },
  {
    icon: Droplets,
    title: "Health Oils",
    description: "Premium cold-pressed oils for skincare and haircare",
    productCount: "8+ Products", 
    color: "text-blue-600"
  },
  {
    icon: Sparkles,
    title: "Seed Powders",
    description: "Nutrient-rich seed powders for natural wellness",
    productCount: "6+ Products",
    color: "text-yellow-600"
  },
  {
    icon: Heart,
    title: "Wellness Blends",
    description: "Specially formulated herbal blends for complete health",
    productCount: "10+ Products",
    color: "text-red-500"
  }
];

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <div className="text-sm text-primary font-semibold">
                    {category.productCount}
                  </div>
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