import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Award } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <Badge variant="secondary" className="text-sm">
              <Shield className="w-4 h-4 mr-1" />
              FSSAI Certified
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Award className="w-4 h-4 mr-1" />
              100% Organic
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Pure <span className="text-primary">Herbal</span> Products for Natural Wellness
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover the power of nature with our premium collection of organic leaf powders, 
            health oils, and seed powders. Sourced directly from rural India and processed 
            with traditional methods.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6">
              <Leaf className="w-5 h-5 mr-2" />
              <a href="/products">Explore Products</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <a href="#about">Learn More</a>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Pure & Natural</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">FSSAI</div>
              <div className="text-sm text-muted-foreground">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;