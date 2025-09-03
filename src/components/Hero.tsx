import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Award, Star } from "lucide-react";
import heroBannerImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBannerImage} 
          alt="Organic herbal products background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 luxury-gradient opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="w-12 h-12 text-gold-accent opacity-60" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{animationDelay: '1s'}}>
        <Award className="w-10 h-10 text-gold-accent opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Premium Badge */}
          <Badge className="luxury-gradient text-white px-6 py-2 text-sm font-medium animate-glow">
            GenInnovate – Luxury Herbal & Organic Product Collection
          </Badge>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Pure
              <span className="text-luxury block">Organic</span>
              Wellness
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Premium herbal products sourced from rural India. 100% organic, FSSAI certified, 
              and crafted with ancient Ayurvedic wisdom.
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 py-6">
            <div className="flex items-center space-x-2 text-white/90">
              <Shield className="w-5 h-5 text-gold-accent" />
              <span className="text-sm font-medium">FSSAI Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Leaf className="w-5 h-5 text-gold-accent" />
              <span className="text-sm font-medium">100% Organic</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Award className="w-5 h-5 text-gold-accent" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Star className="w-5 h-5 text-gold-accent" />
              <span className="text-sm font-medium">Made in India</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gold-accent hover:bg-gold-accent/90 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-glow"
            >
              <a href="/products">Explore Products</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
          
          {/* Quality Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
              Third-Party Tested
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
              Chemical-Free
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
              Traditional Processing
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
              Rural Sourced
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;