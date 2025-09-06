import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Award, Users, Heart, Shield, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 text-sm">
              <Leaf className="w-4 h-4 mr-2" />
              Trusted Since Inception
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-luxury">GenInnovate</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the luxury herbal and organic product industry, dedicated to bringing you 
              the finest traditional remedies with modern quality standards.
            </p>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">Our Story</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    GenInnovate Solutions Pvt. Ltd. was founded with a vision to bridge the gap between 
                    ancient Ayurvedic wisdom and modern wellness needs. Our commitment to purity, 
                    authenticity, and quality has made us a trusted name in the organic herbal industry.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="luxury-card">
                    <CardContent className="p-6 text-center">
                      <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-bold text-lg">10K+</h3>
                      <p className="text-sm text-muted-foreground">Happy Customers</p>
                    </CardContent>
                  </Card>
                  <Card className="luxury-card">
                    <CardContent className="p-6 text-center">
                      <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-bold text-lg">50+</h3>
                      <p className="text-sm text-muted-foreground">Premium Products</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="luxury-card bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Quality Assurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every product undergoes rigorous testing and quality checks to ensure 
                      maximum potency and purity, meeting international standards.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="luxury-card bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="w-5 h-5 mr-2 text-primary" />
                      Organic Sourcing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We partner with certified organic farms and traditional growers to 
                      source the finest herbs and natural ingredients.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="luxury-card bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-primary" />
                      Customer Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our dedicated team provides personalized support and guidance to 
                      help you achieve your wellness goals naturally.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Company Information</h2>
              <p className="text-xl text-muted-foreground">Complete regulatory and contact details</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Company Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Manufactured & Marketed by:</p>
                    <p className="text-muted-foreground">GenInnovate Solutions Pvt. Ltd.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address:</p>
                    <p className="text-muted-foreground">
                      Preetam Nagar, Nagar Nigam Food Safety Zone-01<br />
                      Prayagraj, Uttar Pradesh - 211011
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">FSSAI License No.:</p>
                    <p className="text-muted-foreground">22725592000176</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">GSTIN:</p>
                    <p className="text-muted-foreground">09AALCG6791J1ZU</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Customer Support:</p>
                    <p className="text-muted-foreground">+91 9095346798</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email:</p>
                    <p className="text-muted-foreground">geninnovate@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Feedback & Queries:</p>
                    <p className="text-muted-foreground">geninnovate@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Hours:</p>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="luxury-card bg-gradient-card h-full">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    To make authentic Ayurvedic and herbal wellness accessible to modern lifestyles 
                    through premium quality products that honor traditional wisdom while meeting 
                    contemporary safety and efficacy standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="luxury-card bg-gradient-card h-full">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    To become the leading global brand for luxury herbal and organic products, 
                    fostering wellness communities and preserving ancient healing traditions 
                    for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;