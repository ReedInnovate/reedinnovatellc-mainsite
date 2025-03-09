
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
    <div className="w-full h-[400px] rounded-2xl overflow-hidden flex flex-col md:flex-row">
      {/* Text section on the left - 50% width */}
      <div className="w-full md:w-1/2 p-6 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
        <div className="space-y-4">
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
      
      {/* Rocket animation section on the right - 50% width */}
      <div className="w-full md:w-1/2 h-full bg-gradient-to-br from-blue-900 to-indigo-900 relative">
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
                animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Launch platform */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-60 h-3 bg-gray-500 rounded-md"></div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-6 bg-gray-700 rounded-lg"></div>
        
        {/* Rocket */}
        <div 
          className={`absolute transition-all duration-1000 ease-out ${
            currentStageIndex >= 4 
              ? 'bottom-40 opacity-100' 
              : 'bottom-14 opacity-100'
          }`}
          style={{
            left: 'calc(50% - 20px)',
          }}
        >
          {/* Rocket Body */}
          <div className={`relative transition-all duration-500 ease-out ${
            currentStageIndex >= 0 ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Main rocket body */}
            <div className="w-40 h-60 relative">
              {/* Fuselage - Stage 1 */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                currentStageIndex >= 0 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-20 h-54 bg-white rounded-t-3xl rounded-b-lg"></div>
                {/* Detail lines on fuselage */}
                <div className="absolute top-10 left-0 w-20 h-1 bg-gray-200"></div>
                <div className="absolute top-20 left-0 w-20 h-1 bg-gray-200"></div>
                <div className="absolute top-30 left-0 w-20 h-1 bg-gray-200"></div>
              </div>

              {/* Boosters & Nose Cone - Stage 2 */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                currentStageIndex >= 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Nose cone */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gray-300 rounded-t-full"></div>
                
                {/* Side boosters */}
                <div className="absolute bottom-10 -left-12 w-8 h-36 bg-orange-500 rounded-lg"></div>
                <div className="absolute bottom-10 -right-12 w-8 h-36 bg-orange-500 rounded-lg"></div>
                
                {/* Booster caps */}
                <div className="absolute bottom-46 -left-12 w-8 h-4 bg-gray-400 rounded-t-lg"></div>
                <div className="absolute bottom-46 -right-12 w-8 h-4 bg-gray-400 rounded-t-lg"></div>
              </div>

              {/* Winglets & Launch Tower - Stage 3 */}
              <div className={`transition-all duration-500 ${
                currentStageIndex >= 2 ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Winglets */}
                <div className="absolute bottom-14 -left-14 w-12 h-8 bg-white skew-y-[20deg] rotate-12"></div>
                <div className="absolute bottom-14 -right-14 w-12 h-8 bg-white skew-y-[-20deg] rotate-[-12deg]"></div>
                
                {/* Launch tower */}
                <div className="absolute bottom-0 -right-40 w-6 h-80 bg-gray-700"></div>
                <div className="absolute bottom-20 -right-40 w-20 h-2 bg-gray-600"></div>
                <div className="absolute bottom-40 -right-40 w-20 h-2 bg-gray-600"></div>
                <div className="absolute bottom-60 -right-40 w-20 h-2 bg-gray-600"></div>
              </div>
              
              {/* Engines firing - Stage 4 */}
              <div className={`absolute transition-all duration-500 ${
                currentStageIndex >= 3 ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Main engine flames */}
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
                  <div className="absolute -left-5 bottom-0 w-10 h-14 animate-pulse bg-orange-500 rounded-b-full opacity-80"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-8 h-12 animate-pulse bg-yellow-500 rounded-b-full opacity-70"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 w-4 h-10 animate-pulse bg-white rounded-b-full opacity-60"></div>
                </div>
                
                {/* Side booster flames */}
                <div className="absolute -bottom-10 -left-12 w-6 h-10 animate-pulse bg-orange-400 rounded-b-full opacity-70"></div>
                <div className="absolute -bottom-10 -right-12 w-6 h-10 animate-pulse bg-orange-400 rounded-b-full opacity-70"></div>
                
                {/* Smoke clouds */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                  <div className="absolute -left-24 bottom-0 w-16 h-10 rounded-full bg-gray-300 opacity-60"></div>
                  <div className="absolute -left-12 bottom-4 w-20 h-12 rounded-full bg-gray-300 opacity-60"></div>
                  <div className="absolute left-0 bottom-0 w-24 h-14 rounded-full bg-gray-300 opacity-60"></div>
                  <div className="absolute left-16 bottom-4 w-20 h-12 rounded-full bg-gray-300 opacity-60"></div>
                  <div className="absolute left-30 bottom-0 w-16 h-10 rounded-full bg-gray-300 opacity-60"></div>
                </div>
              </div>

              {/* NASA logo/text */}
              <div className={`absolute top-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                currentStageIndex >= 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px] font-bold">
                  USA
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Shadow fades as rocket rises */}
        <div 
          className={`absolute bottom-9 left-1/2 transform -translate-x-1/2 w-30 h-4 bg-black rounded-full filter blur-md transition-all duration-1000 ease-out ${
            currentStageIndex >= 4 ? 'opacity-0 scale-50' : 'opacity-30 scale-100'
          }`}
        ></div>
        
        {/* Launch status text */}
        <div className={`absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm transition-opacity duration-500 ${
          currentStageIndex === 3 ? 'opacity-100' : 'opacity-0'
        }`}>
          LAUNCH SEQUENCE INITIATED
        </div>
        
        {/* Stage 5 text */}
        <div className={`absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm transition-opacity duration-500 ${
          currentStageIndex === 4 ? 'opacity-100' : 'opacity-0'
        }`}>
          MISSION UNDERWAY
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
