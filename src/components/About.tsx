import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Leaf, Users } from "lucide-react";

const About = () => {
  const certifications = [
    {
      icon: Shield,
      title: "FSSAI Certified",
      description: "Food Safety and Standards Authority of India approved"
    },
    {
      icon: Award,
      title: "100% Organic",
      description: "No chemicals, pesticides, or artificial additives"
    },
    {
      icon: Leaf,
      title: "Sustainable Sourcing", 
      description: "Directly sourced from rural India supporting farmers"
    },
    {
      icon: Users,
      title: "Customer Trusted",
      description: "Over 500+ satisfied customers across India"
    }
  ];

  return (
    <section id="about" className="py-20 bg-natural-cream/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              About Geninnovate Pvt. Ltd.
            </Badge>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Pioneering Natural Wellness Since Our Inception
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Geninnovate Pvt. Ltd., we are committed to bringing you the purest 
              herbal products sourced directly from rural India. Our mission is to 
              preserve traditional wellness wisdom while maintaining modern quality standards.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every product undergoes rigorous quality checks and is processed using 
              time-tested methods to ensure maximum potency and nutritional value. 
              We believe in the power of nature to heal and nourish.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">FSSAI certified manufacturing facility</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Traditional processing methods</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Direct farmer partnerships</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Rigorous quality testing</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card key={index} className="text-center p-6 border-border/50">
                  <CardContent className="p-0">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;