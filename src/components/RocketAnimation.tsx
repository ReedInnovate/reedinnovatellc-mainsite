
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
    // Speed up by 25% - changing interval from 100ms to 75ms
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
    }, 75); // Reduced from 100ms to 75ms (25% faster)

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
      <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-600 to-blue-900 relative overflow-hidden flex items-center justify-center">
        {/* Stars background */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 4 + 2}s infinite alternate`
              }}
            ></div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {/* Cloud/Smoke base */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-16 bg-white rounded-full opacity-70 transition-opacity duration-700",
              (currentStage === 'launch' || currentStage === 'grow') ? "opacity-70" : "opacity-0"
            )}
          ></div>
          
          {/* Space Shuttle Components */}
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
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-48 rounded-t-full shadow-lg">
              {/* Detailed shuttle body with gradient */}
              <div className="w-full h-full rounded-t-full bg-gradient-to-r from-gray-300 via-white to-gray-300 relative overflow-hidden">
                {/* Heat shield tiles pattern */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-16 gap-[1px]">
                  {Array.from({ length: 128 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "bg-gray-200 opacity-50",
                        i % 2 === 0 ? "bg-gray-300" : "bg-gray-200"
                      )}
                    ></div>
                  ))}
                </div>
                
                {/* Cockpit/Nose cone with window details */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gradient-to-b from-gray-800 to-gray-600 rounded-t-full">
                  {/* Windows */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 rounded-full"></div>
                </div>
                
                {/* NASA logo */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600">
                  <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                    <div className="text-[8px] font-bold text-blue-600">NASA</div>
                  </div>
                </div>
                
                {/* Control surfaces */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-22 h-8 flex justify-between items-center px-1">
                  <div className="w-4 h-3 bg-gray-700 rounded-sm"></div>
                  <div className="w-4 h-3 bg-gray-700 rounded-sm"></div>
                </div>
              </div>
              
              {/* Shuttle wings - enhanced with more details */}
              <div 
                className={cn(
                  "absolute top-1/2 left-0 w-18 h-10 -translate-x-[60%] skew-y-[20deg] transition-opacity duration-500",
                  currentStage === 'discover' ? "opacity-0" : "opacity-100"
                )}
              >
                <div className="w-full h-full bg-gradient-to-r from-gray-300 to-white rounded-l-md"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-400 rounded-l-md"></div>
                <div className="absolute bottom-1 right-0 w-3/4 h-2 bg-gray-600 rounded-bl-sm"></div>
              </div>
              
              <div 
                className={cn(
                  "absolute top-1/2 right-0 w-18 h-10 translate-x-[60%] skew-y-[-20deg] transition-opacity duration-500",
                  currentStage === 'discover' ? "opacity-0" : "opacity-100"
                )}
              >
                <div className="w-full h-full bg-gradient-to-l from-gray-300 to-white rounded-r-md"></div>
                <div className="absolute top-0 right-0 w-full h-1 bg-gray-400 rounded-r-md"></div>
                <div className="absolute bottom-1 left-0 w-3/4 h-2 bg-gray-600 rounded-br-sm"></div>
              </div>
            </div>
            
            {/* External fuel tank - appears during strategize - with more detail */}
            <div 
              className={cn(
                "absolute bottom-16 left-1/2 transform -translate-x-1/2 w-12 h-44 rounded-t-full rounded-b-lg transition-opacity duration-500",
                currentStage === 'discover' ? "opacity-0" : "opacity-100"
              )}
              style={{ zIndex: -1 }}
            >
              {/* Fuel tank with gradient and details */}
              <div className="w-full h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-t-full rounded-b-lg relative">
                {/* Fuel tank stripes/details */}
                <div className="absolute top-4 left-0 w-full h-1 bg-orange-700"></div>
                <div className="absolute top-1/4 left-0 w-full h-1 bg-orange-700"></div>
                <div className="absolute top-2/4 left-0 w-full h-1 bg-orange-700"></div>
                <div className="absolute top-3/4 left-0 w-full h-1 bg-orange-700"></div>
                
                {/* Fuel connections */}
                <div className="absolute top-10 left-0 w-2 h-4 bg-gray-700 rounded-l-md"></div>
                <div className="absolute top-10 right-0 w-2 h-4 bg-gray-700 rounded-r-md"></div>
                
                {/* Bottom engine connection */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-800 rounded-b-md"></div>
              </div>
            </div>
            
            {/* Solid rocket boosters - appear during define - with more detail */}
            <div 
              className={cn(
                "absolute bottom-16 left-1/2 flex justify-between transition-opacity duration-500",
                (currentStage === 'discover' || currentStage === 'strategize') ? "opacity-0" : "opacity-100"
              )}
              style={{ width: '70px', transform: 'translateX(-50%)', zIndex: -2 }}
            >
              {/* Left booster with details */}
              <div className="w-8 h-40 rounded-t-lg rounded-b-lg relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-200 via-white to-gray-200 rounded-t-lg rounded-b-lg"></div>
                {/* Booster segment rings */}
                <div className="absolute top-5 w-full h-1 bg-gray-300"></div>
                <div className="absolute top-15 w-full h-1 bg-gray-300"></div>
                <div className="absolute top-25 w-full h-1 bg-gray-300"></div>
                <div className="absolute top-35 w-full h-1 bg-gray-300"></div>
                {/* Attachment struts */}
                <div className="absolute top-10 right-0 w-3 h-2 bg-gray-700"></div>
                <div className="absolute top-20 right-0 w-3 h-2 bg-gray-700"></div>
                <div className="absolute top-30 right-0 w-3 h-2 bg-gray-700"></div>
                {/* Nozzle */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gray-800 rounded-b-md"></div>
              </div>
              
              {/* Right booster with details */}
              <div className="w-8 h-40 rounded-t-lg rounded-b-lg relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-200 via-white to-gray-200 rounded-t-lg rounded-b-lg"></div>
                {/* Booster segment rings */}
                <div className="absolute top-5 w-full h-1 bg-gray-300"></div>
                <div className="absolute top-15 w-full h-1 bg-gray-300"></div>
                <div className="absolute top-25 w-full h-1 bg-gray-300"></div>
                <div className="absolute top-35 w-full h-1 bg-gray-300"></div>
                {/* Attachment struts */}
                <div className="absolute top-10 left-0 w-3 h-2 bg-gray-700"></div>
                <div className="absolute top-20 left-0 w-3 h-2 bg-gray-700"></div>
                <div className="absolute top-30 left-0 w-3 h-2 bg-gray-700"></div>
                {/* Nozzle */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gray-800 rounded-b-md"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced rocket flames - appear during launch */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-500",
              (currentStage === 'launch' || currentStage === 'grow') ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Center engine flame - more vibrant with multiple layers */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-28">
              <div className="flame-center"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-20 bg-yellow-300 rounded-t-full animate-flicker opacity-70"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-16 bg-white rounded-t-full animate-flicker opacity-50" style={{animationDelay: "150ms"}}></div>
            </div>
            
            {/* Left booster flame - enhanced */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-[35px] w-8 h-20">
              <div className="flame-side"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-14 bg-yellow-400 rounded-t-full animate-flicker opacity-70" style={{animationDelay: "100ms"}}></div>
            </div>
            
            {/* Right booster flame - enhanced */}
            <div className="absolute bottom-0 left-1/2 transform translate-x-[25px] w-8 h-20">
              <div className="flame-side"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-14 bg-yellow-400 rounded-t-full animate-flicker opacity-70" style={{animationDelay: "200ms"}}></div>
            </div>
          </div>
          
          {/* Launch pad structure - appears during define - enhanced */}
          <div 
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-16 transition-opacity duration-700",
              (currentStage === 'discover' || currentStage === 'strategize') ? "opacity-0" : "opacity-100"
            )}
          >
            {/* Left tower */}
            <div className="absolute bottom-0 left-0 w-12 h-24 border-r-2 border-t-2 border-gray-300 flex flex-col items-center">
              <div className="w-2 h-20 bg-gray-400"></div>
              <div className="w-8 h-1 bg-gray-400 mt-1"></div>
              <div className="w-8 h-1 bg-gray-400 mt-2"></div>
            </div>
            
            {/* Right tower */}
            <div className="absolute bottom-0 right-0 w-12 h-24 border-l-2 border-t-2 border-gray-300 flex flex-col items-center">
              <div className="w-2 h-20 bg-gray-400"></div>
              <div className="w-8 h-1 bg-gray-400 mt-1"></div>
              <div className="w-8 h-1 bg-gray-400 mt-2"></div>
            </div>
            
            {/* Launch platform */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gray-500"></div>
          </div>
          
          {/* Enhanced smoke effects during launch */}
          {(currentStage === 'launch' || currentStage === 'grow') && (
            <>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-[70px] w-20 h-10 bg-white rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-[50px] w-24 h-12 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '300ms' }}></div>
              <div className="absolute bottom-8 left-1/2 transform translate-x-[40px] w-18 h-9 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '150ms' }}></div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-[30px] w-15 h-8 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '220ms' }}></div>
              <div className="absolute bottom-6 left-1/2 transform translate-x-[20px] w-16 h-8 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '180ms' }}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
