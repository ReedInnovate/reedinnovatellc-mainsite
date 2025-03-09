
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
        
        {/* Launch pad */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gray-400 rounded"></div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-60 h-5 bg-gray-600 rounded-lg"></div>
        
        {/* Rocket parts assembly */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          {/* Stage 1: Fuselage (Discover) */}
          <div 
            className={`relative transition-all duration-500 ease-out ${
              currentStageIndex >= 0 ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Main fuselage body */}
            <div className="w-16 h-44 bg-white rounded-t-full rounded-b-lg shadow-lg z-10"></div>
            
            {/* Detail lines on fuselage */}
            <div className="absolute top-10 left-0 w-16 h-1 bg-gray-200"></div>
            <div className="absolute top-20 left-0 w-16 h-1 bg-gray-200"></div>
            <div className="absolute top-30 left-0 w-16 h-1 bg-gray-200"></div>
          </div>
          
          {/* Stage 2: Boosters & Nose Cone (Strategize) */}
          <div 
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full transition-all duration-500 ease-out ${
              currentStageIndex >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Nose cone */}
            <div className="w-16 h-16 bg-gray-300 rounded-t-full"></div>
            
            {/* Side boosters */}
            <div className="absolute top-36 -left-7 w-6 h-30 bg-orange-500 rounded-lg"></div>
            <div className="absolute top-36 -right-7 w-6 h-30 bg-orange-500 rounded-lg"></div>
          </div>
          
          {/* Stage 3: Winglets & Launch Tower (Define) */}
          <div 
            className={`transition-all duration-500 ease-out ${
              currentStageIndex >= 2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Winglets */}
            <div className="absolute top-32 -left-10 w-10 h-6 bg-white skew-y-[20deg] rotate-12"></div>
            <div className="absolute top-32 -right-10 w-10 h-6 bg-white skew-y-[-20deg] rotate-[-12deg]"></div>
            
            {/* Launch tower */}
            <div className="absolute -top-10 -right-40 w-8 h-64 bg-gray-700"></div>
            <div className="absolute -top-10 -right-36 w-16 h-2 bg-gray-600"></div>
            <div className="absolute top-10 -right-36 w-16 h-2 bg-gray-600"></div>
            <div className="absolute top-30 -right-36 w-16 h-2 bg-gray-600"></div>
          </div>
          
          {/* Stage 4: Engines firing (Launch) */}
          <div 
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out ${
              currentStageIndex >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Main engine flames */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 w-8 h-12 animate-pulse bg-orange-500 rounded-b-full opacity-80"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-9 w-6 h-9 animate-pulse bg-yellow-500 rounded-b-full opacity-70"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-7 w-4 h-7 animate-pulse bg-white rounded-b-full opacity-60"></div>
            </div>
            
            {/* Smoke clouds */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="absolute -left-20 bottom-0 w-12 h-8 rounded-full bg-gray-300 opacity-60"></div>
              <div className="absolute -left-10 bottom-2 w-14 h-9 rounded-full bg-gray-300 opacity-60"></div>
              <div className="absolute left-0 bottom-0 w-16 h-10 rounded-full bg-gray-300 opacity-60"></div>
              <div className="absolute left-10 bottom-2 w-14 h-9 rounded-full bg-gray-300 opacity-60"></div>
              <div className="absolute left-20 bottom-0 w-12 h-8 rounded-full bg-gray-300 opacity-60"></div>
            </div>
            
            {/* Side booster flames */}
            <div className="absolute -left-7 -bottom-8 w-4 h-8 animate-pulse bg-orange-400 rounded-b-full opacity-70"></div>
            <div className="absolute -right-7 -bottom-8 w-4 h-8 animate-pulse bg-orange-400 rounded-b-full opacity-70"></div>
          </div>
        </div>
        
        {/* Stage 5: Liftoff animation (Grow) */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
            currentStageIndex >= 4 
              ? 'bottom-40 opacity-100' 
              : 'bottom-12 opacity-100'
          }`}
        >
          {/* Shadow that fades as rocket rises */}
          <div 
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-full filter blur-md transition-all duration-1000 ease-out ${
              currentStageIndex >= 4 ? 'opacity-0 scale-50' : 'opacity-30 scale-100'
            }`}
          ></div>
        </div>
        
        {/* Stage labels for animation */}
        <div className={`absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm transition-opacity duration-500 ${
          currentStageIndex === 3 ? 'opacity-100' : 'opacity-0'
        }`}>
          LAUNCH SEQUENCE INITIATED
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
