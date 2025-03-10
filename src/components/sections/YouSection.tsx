
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
    <AnimatedSection id="you" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title text-4xl md:text-5xl">You're Launching Products</h2>
          <p className="section-description mx-auto text-center text-lg md:text-xl">
            And you're looking for a driving force behind getting a product to market and keeping it there.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="h-auto md:h-[300px] w-full mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white p-4 md:p-5">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Go-To-Market Journey</h3>
                
                {/* Current Stage Featured Display */}
                <div className="mb-6">
                  <h4 className="text-xl md:text-2xl font-medium capitalize text-primary mb-2">
                    {currentStage}
                  </h4>
                  <p className="text-base md:text-lg text-gray-700">
                    {stageInfo.description}
                  </p>
                  <div className="h-3 md:h-4 bg-gray-100 rounded-full mt-3 overflow-hidden relative">
                    <div 
                      className="h-full bg-primary transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                    {/* Custom rocket image that moves with the progress */}
                    <div 
                      className="absolute top-1/2 transition-all duration-200"
                      style={{ 
                        left: `${progress}%`, 
                        transform: `translateX(-50%) translateY(-50%)`,
                        height: '30px',
                        width: '24px'
                      }}
                    >
                      <img 
                        src="/lovable-uploads/ac00de8e-a6b4-4788-aad3-5c221ef66148.png" 
                        alt="Rocket" 
                        className="h-full w-full object-contain rotate-90"
                      />
                    </div>
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
                          "w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center mb-1",
                          stage.title === currentStage ? "bg-primary" : "bg-gray-200"
                        )}
                      >
                        {stage.title === currentStage && (
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full" />
                        )}
                      </div>
                      <span 
                        className={cn(
                          "text-sm md:text-base font-medium capitalize",
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
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-light">What You Need</h3>
            <ul className="space-y-3 md:space-y-4 text-lg md:text-xl">
              {[
                "Strategic product positioning in competitive markets",
                "Compelling messaging that resonates with your target audience",
                "Effective go-to-market strategies that drive adoption",
                "Customer-focused approach to product development and marketing",
                "Data-driven insights to optimize your product lifecycle"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 md:h-6 md:w-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5 flex-shrink-0">
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
