
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import { Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <AnimatedSection id="me" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="section-title">About Hunter Reed</h2>
            <p className="text-gray-600 leading-relaxed">
              Motivated self-starter with 7+ years of B2B SaaS experience launching disruptive products and shaping market trends. Proven track record of merging innovative solutions with effective go-to-market strategies, driving measurable business impact for over 2M users and influencing $10M+ in annual recurring revenue.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Skilled at managing product lifecycles, leading cross-functional teams, and leveraging customer insights to optimize message and positioning.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/hunterjreed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </Button>
              </a>
              <a 
                href="mailto:hunter@reedinnovate.com" 
                className="inline-flex items-center"
              >
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail size={18} />
                  Email Me
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
  );
};

export default AboutSection;
