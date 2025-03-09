
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
      <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-500 to-blue-700 relative overflow-hidden flex items-center justify-center">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {/* Cloud/Smoke base */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-16 bg-white rounded-full opacity-70 transition-opacity duration-700",
              (currentStage === 'launch' || currentStage === 'grow') ? "opacity-70" : "opacity-0"
            )}
          ></div>
          
          {/* Space Shuttle Components - Only visible after discover stage */}
          <div 
            className={cn(
              "transition-all duration-700",
              currentStage === 'discover' ? "opacity-30" : "opacity-100", 
              currentStage === 'grow' && `translate-y-[-${progress * 2}px]`
            )}
            style={{ 
              transform: currentStage === 'grow' ? `translateY(-${progress * 2}px)` : 'translateY(0)'
            }}
          >
            {/* Main shuttle body */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-48 bg-white rounded-t-full shadow-lg">
              {/* Shuttle windows */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-gray-800 rounded-full"></div>
              {/* Shuttle nose cone */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-10 bg-gray-700 rounded-t-full"></div>
              
              {/* Wings - appear during strategize */}
              <div 
                className={cn(
                  "absolute top-1/2 left-0 w-16 h-8 bg-gray-200 -translate-x-[60%] skew-y-[20deg] transition-opacity duration-500",
                  currentStage === 'discover' ? "opacity-0" : "opacity-100"
                )}
              ></div>
              <div 
                className={cn(
                  "absolute top-1/2 right-0 w-16 h-8 bg-gray-200 translate-x-[60%] skew-y-[-20deg] transition-opacity duration-500",
                  currentStage === 'discover' ? "opacity-0" : "opacity-100"
                )}
              ></div>
            </div>
            
            {/* External fuel tank - appears during strategize */}
            <div 
              className={cn(
                "absolute bottom-16 left-1/2 transform -translate-x-1/2 w-12 h-44 bg-orange-500 rounded-t-full rounded-b-lg transition-opacity duration-500",
                currentStage === 'discover' ? "opacity-0" : "opacity-100"
              )}
              style={{ zIndex: -1 }}
            ></div>
            
            {/* Solid rocket boosters - appear during define */}
            <div 
              className={cn(
                "absolute bottom-16 left-1/2 flex justify-between transition-opacity duration-500",
                (currentStage === 'discover' || currentStage === 'strategize') ? "opacity-0" : "opacity-100"
              )}
              style={{ width: '70px', transform: 'translateX(-50%)', zIndex: -2 }}
            >
              <div className="w-8 h-40 bg-white rounded-t-lg rounded-b-lg"></div>
              <div className="w-8 h-40 bg-white rounded-t-lg rounded-b-lg"></div>
            </div>
          </div>
          
          {/* Rocket flames - appear during launch */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-500",
              (currentStage === 'launch' || currentStage === 'grow') ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Center engine flame */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-20">
              <div className="flame-center"></div>
            </div>
            
            {/* Left booster flame */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-[35px] w-6 h-16">
              <div className="flame-side"></div>
            </div>
            
            {/* Right booster flame */}
            <div className="absolute bottom-0 left-1/2 transform translate-x-[15px] w-6 h-16">
              <div className="flame-side"></div>
            </div>
          </div>
          
          {/* Launch pad structure - appears during define */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-16 transition-opacity duration-700",
              (currentStage === 'discover' || currentStage === 'strategize') ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="absolute bottom-0 left-0 w-12 h-20 border-r-2 border-t-2 border-gray-300"></div>
            <div className="absolute bottom-0 right-0 w-12 h-20 border-l-2 border-t-2 border-gray-300"></div>
          </div>
          
          {/* Additional smoke effects during launch */}
          {(currentStage === 'launch' || currentStage === 'grow') && (
            <>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-[60px] w-16 h-8 bg-white rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-[40px] w-20 h-10 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '300ms' }}></div>
              <div className="absolute bottom-8 left-1/2 transform translate-x-[30px] w-14 h-7 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '150ms' }}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
