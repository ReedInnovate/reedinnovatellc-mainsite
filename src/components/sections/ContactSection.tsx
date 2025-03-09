
import AnimatedSection from '@/components/AnimatedSection';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description mx-auto">
            Let's discuss how I can help you achieve your goals.
          </p>
        </div>
        
        <div className="flex justify-center w-full">
          <iframe 
            width="900" 
            height="800" 
            src="https://app.smartsheet.com/b/form/a685c32327c946c085f39484723c9ce9"
            className="border-0 w-full max-w-3xl"
            title="Contact Form"
          ></iframe>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
