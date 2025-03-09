
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

      {/* SpaceX Starship and its parts */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-64 -mt-8">
          {/* Starship base (bottom section) */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-28 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg transition-all duration-700 ${currentStageIndex >= 0 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {/* Grid fins */}
            <div className="absolute bottom-2 -left-2 w-4 h-6 bg-gray-500 skew-x-[15deg] origin-bottom-right"></div>
            <div className="absolute bottom-2 -right-2 w-4 h-6 bg-gray-500 skew-x-[-15deg] origin-bottom-left"></div>
          </div>
          
          {/* Starship mid section */}
          <div className={`absolute bottom-28 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-b from-gray-200 to-gray-300 transition-all duration-700 ${currentStageIndex >= 1 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {/* Windows/portholes */}
            <div className="absolute top-6 left-3 w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="absolute top-6 right-3 w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="absolute top-12 left-3 w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="absolute top-12 right-3 w-3 h-3 rounded-full bg-blue-200"></div>
          </div>
          
          {/* Starship upper section */}
          <div className={`absolute bottom-52 left-1/2 transform -translate-x-1/2 w-24 h-28 bg-gradient-to-b from-gray-100 to-gray-200 transition-all duration-700 ${currentStageIndex >= 2 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {/* More windows */}
            <div className="absolute top-8 left-3 w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="absolute top-8 right-3 w-3 h-3 rounded-full bg-blue-200"></div>
          </div>
          
          {/* Starship nose cone */}
          <div className={`absolute bottom-80 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-[70%] transition-all duration-700 ${currentStageIndex >= 3 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}></div>
          
          {/* Engine flames */}
          <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${currentStageIndex >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main engine flames */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-14 animate-pulse bg-orange-500 rounded-b-full opacity-90"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-10 animate-pulse bg-yellow-500 rounded-b-full opacity-80"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-8 animate-pulse bg-white rounded-b-full opacity-70"></div>
              </div>
              
              {/* Side engine flames */}
              <div className="absolute left-1 bottom-2 w-4 h-8 animate-pulse bg-orange-400 rounded-b-full opacity-80"></div>
              <div className="absolute right-1 bottom-2 w-4 h-8 animate-pulse bg-orange-400 rounded-b-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stage information with improved contrast */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-800/90 to-blue-700/60 p-6 text-white">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-2 animate-fade-in text-white drop-shadow-md">{currentStage.title}</h3>
          <p className="text-sm animate-fade-in text-white/90 drop-shadow-sm">{currentStage.description}</p>
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
