import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Leaf, Award, Heart, Info } from "lucide-react";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardEnhancedProps {
  product: Product;
  showDetails?: boolean;
}

const ProductCardEnhanced = ({ product, showDetails = false }: ProductCardEnhancedProps) => {
  const [selectedWeight, setSelectedWeight] = useState(product.weightVariants[0]);

  const ProductDetails = () => (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.detailedDescription}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center">
                <Award className="w-4 h-4 mr-2 text-gold-accent" />
                Key Features
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {product.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center">
                <Leaf className="w-4 h-4 mr-2 text-green-600" />
                Product Tags
              </h4>
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="benefits" className="space-y-3">
          <div className="grid gap-3">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                <Heart className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-3">
          <div className="p-4 rounded-lg bg-natural-cream border border-primary/20">
            <h4 className="font-semibold text-sm mb-2 flex items-center">
              <Info className="w-4 h-4 mr-2 text-primary" />
              How to Use
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.usage}
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="ingredients" className="space-y-3">
          <div className="p-4 rounded-lg bg-muted/30 border border-primary/20">
            <h4 className="font-semibold text-sm mb-2">Pure Ingredients</h4>
            <p className="text-sm text-muted-foreground font-mono">
              {product.ingredients}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <Card className="luxury-card group animate-slide-up">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-3 right-3">
              Out of Stock
            </Badge>
          )}
          {product.inStock && product.originalPrice && (
            <Badge className="absolute top-3 right-3 bg-gold-accent text-black">
              Sale
            </Badge>
          )}
          {product.featured && (
            <Badge className="absolute top-3 left-3 luxury-gradient text-white">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
              {product.name}
            </CardTitle>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary">
                <Info className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl">{product.name}</DialogTitle>
                <DialogDescription>{product.description}</DialogDescription>
              </DialogHeader>
              <ProductDetails />
            </DialogContent>
          </Dialog>
        </div>
        
        <CardDescription className="text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </CardDescription>
        
        {/* Weight Selection */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Choose Weight:</h4>
          <div className="flex gap-2">
            {product.weightVariants.map((variant, index) => (
              <Button
                key={index}
                variant={selectedWeight.weight === variant.weight ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedWeight(variant)}
                className="text-xs"
              >
                {variant.weight}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Key Benefits Preview */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Key Benefits:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {product.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                {benefit}
              </li>
            ))}
            {product.benefits.length > 3 && (
              <li className="text-xs text-primary font-medium">
                +{product.benefits.length - 3} more benefits
              </li>
            )}
          </ul>
        </div>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">{selectedWeight.price}</span>
            {selectedWeight.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">{selectedWeight.originalPrice}</span>
            )}
          </div>
          
          <Button 
            size="sm" 
            disabled={!product.inStock}
            className="group-hover:bg-primary/90 transition-colors px-6"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? "Add to Cart" : "Sold Out"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardEnhanced;