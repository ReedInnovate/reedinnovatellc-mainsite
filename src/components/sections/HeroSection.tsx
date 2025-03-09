
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-blue-50/20 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight animate-fade-in-left">
              From Liftoff <br />to Orbit.
            </h1>
            <p className="text-2xl text-gray-600 max-w-lg animate-fade-in-left" style={{ animationDelay: '200ms' }}>
              I help you strategize, define, and launch your products to market - and keep them there. I'm your customer obsessed, innovative thinking, go-to-market all rounder.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="flex justify-center items-center animate-float">
                <img 
                  src="/lovable-uploads/85e56610-59b3-4288-a019-b649c29ab134.png" 
                  alt="Rocket launching" 
                  className="w-1/2 h-auto object-contain"
                />
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
  );
};

export default HeroSection;
