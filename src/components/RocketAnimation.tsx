
import React, { useState, useEffect } from 'react';
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

const RocketAnimation = () => {
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
    }, 100);

    return () => clearInterval(interval);
  }, [currentStage]);

  const stageInfo = stages.find(s => s.title === currentStage) || stages[0];

  return (
    <div className="flex flex-col md:flex-row h-[400px] w-full border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white">
      {/* Text side - 50% width */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-medium capitalize mb-2">{stageInfo.title}</h3>
        <p className="text-gray-600 mb-4">{stageInfo.description}</p>
        
        <div className="flex flex-col gap-2 mt-4">
          {stages.map((stage) => (
            <div key={stage.title} className="flex items-center gap-2">
              <div 
                className={cn(
                  "w-4 h-4 rounded-full flex-shrink-0",
                  stage.title === currentStage ? "bg-primary" : "bg-gray-200"
                )}
              />
              <span 
                className={cn(
                  "text-sm capitalize",
                  stage.title === currentStage ? "text-primary font-medium" : "text-gray-500"
                )}
              >
                {stage.title}
              </span>
              {stage.title === currentStage && (
                <div className="flex-grow h-1 bg-gray-100 rounded overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Animation side - 50% width */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-50 to-sky-100 relative overflow-hidden flex items-center justify-center">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[300px]">
          {/* Rocket parts - Fuselage */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-60 bg-white rounded-t-full border-2 border-gray-300 transition-all duration-700",
              currentStage !== 'discover' && "translate-y-0",
              currentStage === 'discover' && progress > 50 && "translate-y-0",
              currentStage === 'discover' && progress <= 50 && "translate-y-[100px]",
            )}
          />
          
          {/* Rocket parts - Boosters & Nose cone */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-24 flex justify-between transition-all duration-700",
              currentStage !== 'discover' && currentStage !== 'strategize' && "opacity-100",
              currentStage === 'strategize' && progress > 50 && "opacity-100",
              (currentStage === 'discover' || (currentStage === 'strategize' && progress <= 50)) && "opacity-0"
            )}
          >
            <div className="w-5 h-40 bg-orange-500 rounded-b-lg rounded-t-sm -mb-[50px]"></div>
            <div className="w-5 h-40 bg-orange-500 rounded-b-lg rounded-t-sm -mb-[50px]"></div>
          </div>
          
          <div 
            className={cn(
              "absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-20 bg-gray-300 rounded-t-full transition-all duration-700",
              currentStage !== 'discover' && currentStage !== 'strategize' && "opacity-100",
              currentStage === 'strategize' && progress > 50 && "opacity-100",
              (currentStage === 'discover' || (currentStage === 'strategize' && progress <= 50)) && "opacity-0"
            )}
          />
          
          {/* Rocket parts - Winglets, launch tower */}
          <div 
            className={cn(
              "absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-700",
              currentStage !== 'discover' && currentStage !== 'strategize' && currentStage !== 'define' && "opacity-100",
              currentStage === 'define' && progress > 50 && "opacity-100",
              (currentStage === 'discover' || currentStage === 'strategize' || (currentStage === 'define' && progress <= 50)) && "opacity-0"
            )}
          >
            <div className="w-24 h-10 flex justify-between">
              <div className="w-8 h-10 bg-gray-400 skew-x-[30deg] -mr-2"></div>
              <div className="w-8 h-10 bg-gray-400 skew-x-[-30deg] -ml-2"></div>
            </div>
          </div>
          
          <div 
            className={cn(
              "absolute bottom-0 -left-40 h-80 w-20 border-r-2 border-t-2 border-gray-400 transition-all duration-700",
              currentStage !== 'discover' && currentStage !== 'strategize' && currentStage !== 'define' && "opacity-100",
              currentStage === 'define' && progress > 50 && "opacity-100",
              (currentStage === 'discover' || currentStage === 'strategize' || (currentStage === 'define' && progress <= 50)) && "opacity-0"
            )}
          />
          
          {/* Rocket parts - Engines on */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-700",
              currentStage !== 'discover' && currentStage !== 'strategize' && currentStage !== 'define' && currentStage !== 'launch' && "opacity-100",
              currentStage === 'launch' && progress > 20 && "opacity-100",
              (currentStage === 'discover' || currentStage === 'strategize' || currentStage === 'define' || (currentStage === 'launch' && progress <= 20)) && "opacity-0"
            )}
          >
            <div 
              className={cn(
                "w-16 -mb-10 flex justify-center transition-opacity duration-300",
                (currentStage === 'launch' || currentStage === 'grow') && "opacity-100",
                currentStage !== 'launch' && currentStage !== 'grow' && "opacity-0"
              )}
            >
              <div className="fire-animation"></div>
            </div>
          </div>
          
          {/* Smoke */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 transition-all duration-700",
              currentStage !== 'discover' && currentStage !== 'strategize' && currentStage !== 'define' && currentStage !== 'launch' && "opacity-100",
              currentStage === 'launch' && progress > 50 && "opacity-100",
              (currentStage === 'discover' || currentStage === 'strategize' || currentStage === 'define' || (currentStage === 'launch' && progress <= 50)) && "opacity-0"
            )}
          >
            <div className="smoke-cloud"></div>
          </div>
          
          {/* Moving up animation */}
          <div 
            className={cn(
              "absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 w-full h-full",
              currentStage === 'grow' && `translate-y-[-${progress}%]`,
              currentStage !== 'grow' && "translate-y-0"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
