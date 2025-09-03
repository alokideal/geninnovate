import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Leaf } from "lucide-react";
import genlLogo from "@/assets/genl-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={genlLogo} alt="Genl Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">GenInnovate Solutions Pvt. Ltd.</h3>
                <p className="text-primary-foreground/80 text-sm">Pure Herbal Products</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Leading manufacturer of premium organic herbal products. We are committed to 
              bringing you the purest, most potent natural remedies sourced directly from 
              rural India with FSSAI certification.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Leaf className="w-4 h-4" />
              <span className="text-sm">100% Organic • FSSAI Certified • Made in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </a>
              <a href="#products" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Products
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Email</p>
                  <p className="text-sm">geninnovate@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Phone</p>
                  <p className="text-sm">+91 9095346798</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Address</p>
                  <p className="text-sm">Preetam Nagar, Nagar Nigam Food Safety Zone-01, Prayagraj, UP - 211011</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <div className="space-y-2">
            <p>© 2024 GenInnovate Solutions Pvt. Ltd. All rights reserved.</p>
            <div className="text-xs space-y-1">
              <p>FSSAI Lic No.: 22725592000176 | GSTIN: 09AALCG6791J1ZU</p>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              FSSAI Certificate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;