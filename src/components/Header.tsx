import { Button } from "@/components/ui/button";
import genlLogo from "@/assets/genl-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={genlLogo} alt="Genl Logo" className="h-12 w-12" />
          <div>
            <h1 className="text-xl font-bold text-primary">Geninnovate Pvt. Ltd.</h1>
            <p className="text-sm text-muted-foreground">Pure Herbal Products</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="/products" className="text-foreground hover:text-primary transition-colors">Products</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <Button variant="default" className="hidden md:inline-flex">
          <a href="/products">Shop Now</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;