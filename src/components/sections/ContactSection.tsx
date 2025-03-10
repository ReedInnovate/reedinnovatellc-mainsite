
import { useState, useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const ContactSection = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Load iframe only when user has scrolled close to this section
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection || iframeLoaded) return;

      const rect = contactSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Pre-load when the user is within 500px of the section
      if (rect.top - viewportHeight < 500) {
        setIframeLoaded(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check immediately in case the section is already in view
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [iframeLoaded]);

  return (
    <AnimatedSection id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="section-title text-4xl md:text-5xl">Contact Me</h2>
          <p className="section-description mx-auto text-lg md:text-xl">
            Let's connect and discuss how I can help you achieve your goals. All responses are sent to hunter@reedinnovate.com.
          </p>
        </div>
        
        <div className="flex justify-center w-full">
          {iframeLoaded ? (
            <iframe 
              width="900" 
              height="800" 
              src="https://app.smartsheet.com/b/form/a685c32327c946c085f39484723c9ce9"
              className="border-0 w-full max-w-3xl"
              title="Contact Form"
              loading="lazy"
            ></iframe>
          ) : (
            <div className="border-0 w-full max-w-3xl h-[800px] bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-gray-500">Loading contact form...</div>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
