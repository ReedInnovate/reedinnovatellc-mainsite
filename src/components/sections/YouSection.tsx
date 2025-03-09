
import AnimatedSection from '@/components/AnimatedSection';

const YouSection = () => {
  return (
    <AnimatedSection id="you" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">You're launching products</h2>
          <p className="section-description mx-auto text-center">
            You're looking for a driving force behind getting a product to market and keeping it there.
          </p>
        </div>
        
        <div className="space-y-6 max-w-3xl mx-auto">
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
    </AnimatedSection>
  );
};

export default YouSection;
