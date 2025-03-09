
import React, { useState, useEffect } from 'react';

type Stage = {
  title: string;
  description: string;
};

const stages: Stage[] = [
  {
    title: "Discover",
    description: "Gather insights to understand the market, customers, and competitive landscape."
  },
  {
    title: "Strategize",
    description: "Develop a go-to-market (GTM) strategy that aligns with business goals and market opportunities."
  },
  {
    title: "Define",
    description: "Craft and refine messaging, positioning, and assets for a compelling launch."
  },
  {
    title: "Launch",
    description: "Execute the go-to-market plan and introduce the product to the target audience."
  },
  {
    title: "Grow",
    description: "Drive ongoing adoption, retention, and expansion."
  }
];

const RocketAnimation: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStageIndex((prevIndex) => (prevIndex + 1) % stages.length);
    }, 4000); // Change stage every 4 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const currentStage = stages[currentStageIndex];
  
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col md:flex-row">
      {/* Text section on the left */}
      <div className="w-full md:w-3/5 p-6 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800">Go-to-Market Journey</h3>
          
          {/* Progress indicators as pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {stages.map((stage, i) => (
              <div 
                key={i} 
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  i === currentStageIndex 
                    ? 'bg-blue-600 text-white font-medium shadow-md' 
                    : 'bg-blue-100 text-blue-600'
                }`}
              >
                {stage.title}
              </div>
            ))}
          </div>
          
          {/* Current stage information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-blue-100 transform transition-all duration-500">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">{currentStage.title}</h4>
            <p className="text-gray-700">{currentStage.description}</p>
          </div>
        </div>
      </div>
      
      {/* Rocket animation section on the right */}
      <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated stars in background */}
        <div className="absolute inset-0 opacity-60">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
                animation: 'twinkle 3s infinite alternate'
              }}
            />
          ))}
        </div>
        
        {/* Launch platform */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-gray-700 rounded"></div>
        
        {/* Space Shuttle and its parts */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-56">
            {/* External fuel tank (orange) */}
            <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-36 bg-orange-500 rounded-lg transition-all duration-700 ${currentStageIndex >= 0 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}></div>
            
            {/* Solid rocket boosters (white) */}
            <div className={`absolute bottom-4 left-1/2 transform -translate-x-[140%] w-5 h-32 bg-gray-200 rounded-lg transition-all duration-700 ${currentStageIndex >= 1 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}></div>
            <div className={`absolute bottom-4 left-1/2 transform -translate-x-[-40%] w-5 h-32 bg-gray-200 rounded-lg transition-all duration-700 ${currentStageIndex >= 1 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}></div>
            
            {/* Orbiter body (white with black details) */}
            <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-16 transition-all duration-700 ${currentStageIndex >= 2 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              {/* Main body */}
              <div className="absolute bottom-0 w-full h-full bg-white rounded-t-xl"></div>
              
              {/* Cockpit window */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-black rounded-t-lg"></div>
              
              {/* Wings */}
              <div className="absolute bottom-3 -left-5 w-10 h-4 bg-white skew-y-[20deg] rotate-12"></div>
              <div className="absolute bottom-3 -right-5 w-10 h-4 bg-white skew-y-[-20deg] rotate-[-12deg]"></div>
              
              {/* Tail fin */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-8 bg-white"></div>
            </div>
            
            {/* Payload bay doors open (at launch stage) */}
            <div className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${currentStageIndex >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-16 h-4 bg-gray-800 rounded"></div>
            </div>
            
            {/* Engine flames */}
            <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${currentStageIndex >= 4 ? 'opacity-100' : 'opacity-0'}`}>
              {/* Main engine flames */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-12">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-14 animate-pulse bg-orange-500 rounded-b-full opacity-90"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-10 animate-pulse bg-yellow-500 rounded-b-full opacity-80"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-8 animate-pulse bg-white rounded-b-full opacity-70"></div>
                </div>
                
                {/* SRB flames */}
                <div className="absolute -left-8 w-4 h-8 animate-pulse bg-orange-400 rounded-b-full opacity-80"></div>
                <div className="absolute left-6 w-4 h-8 animate-pulse bg-orange-400 rounded-b-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Launch text overlay */}
        <div className={`absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm transition-opacity duration-500 ${currentStageIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>
          LAUNCH
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
