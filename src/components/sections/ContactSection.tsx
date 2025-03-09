
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

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
        
        <ContactForm />
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
