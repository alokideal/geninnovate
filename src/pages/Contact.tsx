import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Heart } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 text-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-luxury">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Have questions about our products or need personalized wellness guidance? 
              We're here to help you on your natural health journey.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Ready to start your wellness journey? Our expert team is here to guide you 
                    through our premium collection of herbal and organic products.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="luxury-card bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                          <p className="text-muted-foreground">+91 9095346798</p>
                          <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="luxury-card bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                          <p className="text-muted-foreground">geninnovate@gmail.com</p>
                          <p className="text-sm text-muted-foreground">24/7 email support</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="luxury-card bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                          <p className="text-muted-foreground">
                            Preetam Nagar, Nagar Nigam Food Safety Zone-01<br />
                            Prayagraj, Uttar Pradesh - 211011
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="luxury-card bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Saturday: 9:00 AM - 6:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="luxury-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Heart className="w-6 h-6 mr-2 text-primary" />
                      Send us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          First Name *
                        </label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Last Name *
                        </label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="+91 9876543210" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </label>
                      <Input placeholder="What's this regarding?" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-lg">Are your products certified organic?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all our products are certified organic and FSSAI approved. We maintain strict 
                    quality standards and regular testing to ensure purity and potency.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-lg">How long does shipping take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically ship within 1-2 business days. Delivery time varies by location, 
                    generally 3-7 business days within India.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer international shipping?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Currently, we ship within India only. We're working on expanding our international 
                    shipping capabilities soon.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-lg">Can I return products if not satisfied?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer a 30-day return policy for unopened products. Your satisfaction 
                    is our priority, and we'll work to resolve any concerns.
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

export default Contact;