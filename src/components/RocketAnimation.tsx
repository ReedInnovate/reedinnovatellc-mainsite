
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
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Animated stars in background */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-200"
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

      {/* Rocket and its parts */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-80">
          {/* Rocket base */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-40 bg-blue-500 rounded-t-2xl transition-all duration-700 ${currentStageIndex >= 0 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}></div>
          
          {/* Rocket body */}
          <div className={`absolute bottom-40 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-white rounded-lg transition-all duration-700 ${currentStageIndex >= 1 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-20 bg-blue-100 rounded-lg"></div>
          </div>
          
          {/* Rocket tip */}
          <div className={`absolute bottom-72 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-red-500 rounded-t-full transition-all duration-700 ${currentStageIndex >= 2 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}></div>
          
          {/* Rocket fins */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-14 w-8 h-12 bg-blue-700 skew-x-[25deg] transition-all duration-700 ${currentStageIndex >= 3 ? 'opacity-100' : 'opacity-0 translate-x-10'}`}></div>
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-x-6 w-8 h-12 bg-blue-700 skew-x-[-25deg] transition-all duration-700 ${currentStageIndex >= 3 ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}></div>
          
          {/* Rocket flame */}
          <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${currentStageIndex >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-12 h-20">
              <div className="absolute inset-0 animate-pulse bg-yellow-500 rounded-b-full"></div>
              <div className="absolute inset-1 animate-pulse bg-orange-500 rounded-b-full"></div>
              <div className="absolute inset-3 animate-pulse bg-red-500 rounded-b-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stage information */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-700/80 to-blue-700/0 p-6 text-white">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-2 animate-fade-in">{currentStage.title}</h3>
          <p className="text-sm animate-fade-in">{currentStage.description}</p>
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {stages.map((_, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentStageIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
