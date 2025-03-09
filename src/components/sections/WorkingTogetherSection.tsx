
import AnimatedSection from '@/components/AnimatedSection';
import { 
  Search, 
  MessageSquare, 
  Target, 
  ArrowUpRight, 
  Rocket, 
  ScrollText, 
  Zap, 
  BarChart3, 
  PenTool 
} from 'lucide-react';

const serviceItems = [
  {
    title: "Customer & Market Research",
    description: "Collect data-driven insights about your target audience, competitors, and market trends before, during, and after any type of launch",
    delay: 0,
    icon: <Search className="text-blue-600" />
  },
  {
    title: "Messaging & Positioning",
    description: "Craft compelling narratives that highlight your product's unique value proposition, and unify internal teams around a source of truth for the answers to your product's most import questions.",
    delay: 100,
    icon: <MessageSquare className="text-blue-600" />
  },
  {
    title: "Product Strategy & Roadmap",
    description: "Define clear goals and roadmaps to position your product for success in the market using data-driven customer intel",
    delay: 200,
    icon: <Target className="text-blue-600" />
  },
  {
    title: "Go-to-Market Strategy",
    description: "Implement strategy covering market research & target audience, value proposition & positioning, distribution & sales channels, marketing & demand generation, customer experience & retention, measurement & optimization.",
    delay: 300,
    icon: <ArrowUpRight className="text-blue-600" />
  },
  {
    title: "Product Launch Management",
    description: "Whether a small-scale feature update or a full-blown new product, coordinate cross-functional launch efforts to ensure successful product introductions.",
    delay: 400,
    icon: <Rocket className="text-blue-600" />
  },
  {
    title: "Content Marketing",
    description: "Create anything from blogs, whitepapers, and case studies to social media posts, product guides, sales one-pagers, and more",
    delay: 500,
    icon: <ScrollText className="text-blue-600" />
  },
  {
    title: "Content Automation",
    description: "Harness and implement emerging AI technologies to automate content creation, increase throughput, and improve performance.",
    delay: 600,
    icon: <Zap className="text-blue-600" />
  },
  {
    title: "Strategic Project Management",
    description: "Effectively plan, manage, and report on any strategic or special project linked to business objectives and key results.",
    delay: 700,
    icon: <BarChart3 className="text-blue-600" />
  },
  {
    title: "Growth Strategy",
    description: "Identify opportunities to scale adoption, drive engagement, build pipeline, and expand your product's market presence.",
    delay: 800,
    icon: <PenTool className="text-blue-600" />
  }
];

const WorkingTogetherSection = () => {
  return (
    <AnimatedSection id="together" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description mx-auto">
            I can help amplify your product launch—no matter where you are in your product's lifecycle. Whether you need full lifecycle management or targeted support in a specific area, I'm here to drive impact and ensure success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WorkingTogetherSection;
