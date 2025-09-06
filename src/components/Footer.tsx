import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Leaf, Heart, Award } from "lucide-react";
import genlLogo from "@/assets/genl-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={genlLogo} alt="GenInnovate Logo" className="h-12 w-12 transition-transform group-hover:scale-105" />
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  GenInnovate
                </h3>
                <p className="text-xs text-muted-foreground">Solutions Pvt. Ltd.</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Premium luxury herbal and organic products crafted with traditional wisdom 
              and modern quality standards for your wellness journey.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <Leaf className="w-5 h-5 mr-2 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-primary" />
              Categories
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/products?category=herbal-powders" className="text-muted-foreground hover:text-primary transition-colors">
                  Herbal Powders
                </Link>
              </li>
              <li>
                <Link to="/products?category=organic-oils" className="text-muted-foreground hover:text-primary transition-colors">
                  Organic Oils
                </Link>
              </li>
              <li>
                <Link to="/products?category=super-seeds" className="text-muted-foreground hover:text-primary transition-colors">
                  Super Seeds
                </Link>
              </li>
              <li>
                <Link to="/products?category=wellness-products" className="text-muted-foreground hover:text-primary transition-colors">
                  Wellness Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary" />
              Stay Connected
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 9095346798</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">geninnovate@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Preetam Nagar, Prayagraj,<br />Uttar Pradesh - 211011
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Subscribe for wellness tips & offers</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="flex-1 h-9 text-sm"
                />
                <Button size="sm" className="luxury-gradient text-white px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p className="mb-1">
                © 2024 GenInnovate Solutions Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-xs">
                FSSAI Lic No: 22725592000176 | GSTIN: 09AALCG6791J1ZU
              </p>
            </div>
            <div className="flex space-x-6 text-xs text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund" className="hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;