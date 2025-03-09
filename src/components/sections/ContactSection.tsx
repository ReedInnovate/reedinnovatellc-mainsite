
import AnimatedSection from '@/components/AnimatedSection';
import { useState, useEffect } from 'react';

const ContactSection = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  
  // Lazy load the iframe
  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <AnimatedSection id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="section-title text-4xl md:text-5xl mb-4 md:mb-6 text-left">Contact Me</h2>
          <p className="section-description mx-auto text-lg md:text-xl text-left">
            Let's connect and discuss how I can help you achieve your goals. All responses are sent to hunter@reedinnovate.com.
          </p>
        </div>
        
        <div className="flex justify-center w-full">
          {iframeLoaded ? (
            <iframe 
              width="900" 
              height="800" 
              src="https://app.smartsheet.com/b/form/a685c32327c946c085f39484723c9ce9" 
              className="border-0 w-full max-w-3xl h-[600px] md:h-[800px]" 
              title="Contact Form"
              loading="lazy"
            />
          ) : (
            <div className="border-0 w-full max-w-3xl h-[600px] md:h-[800px] flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-gray-500">Loading form...</div>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
