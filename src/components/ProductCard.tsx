import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  benefits: string[];
  rating?: number;
  inStock?: boolean;
}

const ProductCard = ({ 
  image, 
  title, 
  description, 
  price, 
  originalPrice, 
  benefits, 
  rating = 4.5,
  inStock = true 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!inStock && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
          {inStock && originalPrice && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              Sale
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">{rating}</span>
          </div>
        </div>
        
        <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </CardDescription>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          
          <Button 
            size="sm" 
            disabled={!inStock}
            className="group-hover:bg-primary/90 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {inStock ? "Add to Cart" : "Sold Out"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;