
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import AnimatedSection from '@/components/AnimatedSection';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ContactForm from '@/components/ContactForm';
import Button from '@/components/Button';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = 'Reed Innovate - Product Marketing Consulting';
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-blue-50/20 -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight animate-fade-in-left">
                From Liftoff <br />to Orbit.
              </h1>
              <p className="text-xl text-gray-600 max-w-lg animate-fade-in-left" style={{ animationDelay: '200ms' }}>
                I help you strategize, define, and launch your products to market - and keep them there. I'm your customer obsessed, innovative thinking, go-to-market all rounder.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl blur-xl opacity-70"></div>
                <div className="glass-panel rounded-xl p-8 relative animate-float">
                  <div className="space-y-4">
                    <div className="h-2 w-24 bg-blue-100 rounded"></div>
                    <div className="h-2 w-32 bg-blue-100 rounded"></div>
                    <div className="h-2 w-20 bg-blue-100 rounded"></div>
                  </div>
                  <div className="mt-8 flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-24 bg-blue-100 rounded"></div>
                      <div className="h-2 w-32 bg-blue-100 rounded"></div>
                      <div className="h-2 w-20 bg-blue-100 rounded"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-blue-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#you" aria-label="Scroll down">
            <ArrowDown size={24} className="text-gray-400" />
          </a>
        </div>
      </section>

      {/* You Section */}
      <AnimatedSection id="you" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">You're Launching Products</h2>
            <p className="section-description mx-auto text-center">
              You're looking for a driving force behind getting a product to market and keeping it there.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImagePlaceholder 
                height="400px" 
                text="Animation Placeholder" 
                className="rounded-2xl shadow-xl" 
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-light">What You Need</h3>
              <ul className="space-y-4">
                {[
                  "Strategic product positioning in competitive markets",
                  "Compelling messaging that resonates with your target audience",
                  "Effective go-to-market strategies that drive adoption",
                  "Customer-focused approach to product development and marketing",
                  "Data-driven insights to optimize your product lifecycle"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Me Section */}
      <AnimatedSection id="me" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="section-title">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                Motivated self-starter with 7+ years of experience launching disruptive products and shaping market trends. Proven track record of merging innovative solutions with effective go-to-market strategies, driving measurable business impact for over 2M users and influencing $10M+ in annual recurring revenue.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Skilled at managing product life cycles, leading cross-functional teams, and leveraging customer insights to optimize messaging and positioning.
              </p>
              <div className="pt-4">
                <a 
                  href="https://www.linkedin.com/in/hunterjreed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline">
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-blue-100 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/1deb589d-a34d-48c8-afae-6d2c8bc0d31c.png" 
                  alt="Hunter Reed" 
                  className="h-full w-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Working Together Section */}
      <AnimatedSection id="together" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Working Together</h2>
            <p className="section-description mx-auto">
              I can help amplify your product launch, no matter where you are in your product's lifecycle. You can assign me to manage a product's lifecycle, or solicit my help on a specific need of yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Messaging and Positioning",
                description: "Craft compelling narratives that highlight your product's unique value proposition, and answer important questions like: Who's the product for? What unique problems does it solve? Why's it different to the competition? How does it benefit our audience?",
                delay: 0
              },
              {
                title: "Product Launch Management",
                description: "Whether a small-scale feature update or a full-blown new product, coordinate cross-functional launch efforts to ensure successful product introductions.",
                delay: 100
              },
              {
                title: "Go-to-Market Strategy",
                description: "Create comprehensive strategies for introducing or relaunching products to maximize impact.",
                delay: 200
              },
              {
                title: "Customer & Market Research",
                description: "Collect data-driven insights about your target audience, competitors, and market trends before, during, and after any type of launch.",
                delay: 300
              },
              {
                title: "Product Strategy & Roadmap",
                description: "Define clear goals and roadmaps to position your product for success in the market using data-driven customer intel.",
                delay: 400
              },
              {
                title: "Growth Strategy",
                description: "Identify opportunities to scale adoption and expand your product's market presence.",
                delay: 500
              },
              {
                title: "Content Marketing & Automation",
                description: "Creating sales collateral: Depending on the type of launch, demo videos, battlecards, new webpages, sales training, and more. Reporting on product marketing success: Number of daily, active, and/or monthly users, Overall revenue goals, Win rates, Usage of product marketing assets, Sales confidence, Marketing-qualified leads (MQLs) and sales-qualified leads (SQLs), and Customer satisfaction. Content marketing: Anything from blogs, whitepapers, and case studies to social media posts, product guides, sales one-pagers, and more. Managing the website: Making sure new features and products are reflected, messaging elements are up-to-date, and everything is optimized. Product roadmap planning: Shaping roadmaps using data-driven customer intel. Onboarding customers: Ensuring everyone gets off to a good start.",
                delay: 600
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="glass-panel rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-medium">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-description mx-auto">
              Ready to take your product to the next level? Let's discuss how I can help you achieve your goals.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-medium">Reed Innovate</p>
              <p className="text-gray-500 text-sm">Product Marketing Consulting</p>
            </div>
            <div className="flex space-x-6">
              {[
                { name: "You", href: "#you" },
                { name: "Me", href: "#me" },
                { name: "Together", href: "#together" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Reed Innovate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
