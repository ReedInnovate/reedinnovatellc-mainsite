
import AnimatedSection from '@/components/AnimatedSection';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type Stage = 'discover' | 'strategize' | 'define' | 'launch' | 'grow';

interface StageInfo {
  title: Stage;
  description: string;
}

const stages: StageInfo[] = [
  {
    title: 'discover',
    description: 'Gather insights to understand the market, customers, and competitive landscape.'
  },
  {
    title: 'strategize',
    description: 'Develop a go-to-market (GTM) strategy that aligns with business goals and market opportunities.'
  },
  {
    title: 'define',
    description: 'Craft and refine messaging, positioning, and assets for a compelling launch.'
  },
  {
    title: 'launch',
    description: 'Execute the go-to-market plan and introduce the product to the target audience.'
  },
  {
    title: 'grow',
    description: 'Drive ongoing adoption, retention, and expansion.'
  }
];

const YouSection = () => {
  const [currentStage, setCurrentStage] = useState<Stage>('discover');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stageIndex = stages.findIndex(s => s.title === currentStage);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Move to next stage or loop back to the first
          const nextIndex = (stageIndex + 1) % stages.length;
          setCurrentStage(stages[nextIndex].title);
          return 0;
        }
        return prev + 1;
      });
    }, 56); // Keep the same speed as the original animation

    return () => clearInterval(interval);
  }, [currentStage]);

  const stageInfo = stages.find(s => s.title === currentStage) || stages[0];

  return (
    <AnimatedSection id="you" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">You're Launching Products</h2>
          <p className="section-description mx-auto text-center">
            And you're looking for a driving force behind getting a product to market and keeping it there.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="h-[400px] w-full border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white">
              <div className="flex flex-col h-full p-6">
                <h3 className="text-2xl font-bold mb-6">Go-To-Market Journey</h3>
                
                {/* Current Stage Featured Display */}
                <div className="mb-8">
                  <h4 className="text-2xl font-medium capitalize text-primary mb-3">
                    {currentStage}
                  </h4>
                  <p className="text-lg text-gray-700">
                    {stageInfo.description}
                  </p>
                  <div className="h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                
                {/* Stage Indicators */}
                <div className="flex justify-between items-center mt-auto">
                  {stages.map(stage => (
                    <div 
                      key={stage.title} 
                      className={cn(
                        "flex flex-col items-center transition-all duration-300",
                        stage.title === currentStage ? "scale-110" : "opacity-60"
                      )}
                    >
                      <div 
                        className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center mb-2",
                          stage.title === currentStage ? "bg-primary" : "bg-gray-200"
                        )}
                      >
                        {stage.title === currentStage && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span 
                        className={cn(
                          "text-sm font-medium capitalize",
                          stage.title === currentStage ? "text-primary" : "text-gray-500"
                        )}
                      >
                        {stage.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
  );
};

export default YouSection;
