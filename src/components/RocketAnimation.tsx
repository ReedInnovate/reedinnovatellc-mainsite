
import { useEffect, useState } from 'react';

const RocketAnimation = () => {
  const [animationStage, setAnimationStage] = useState<'initial' | 'engines' | 'liftoff' | 'clouds' | 'space'>('initial');

  useEffect(() => {
    // Animation sequence with timers
    const enginesTimer = setTimeout(() => {
      setAnimationStage('engines');
    }, 1000);

    const liftoffTimer = setTimeout(() => {
      setAnimationStage('liftoff');
    }, 3000);

    const cloudsTimer = setTimeout(() => {
      setAnimationStage('clouds');
    }, 5000);

    const spaceTimer = setTimeout(() => {
      setAnimationStage('space');
    }, 7000);

    // Reset animation after full cycle to create a loop
    const resetTimer = setTimeout(() => {
      setAnimationStage('initial');
    }, 12000);

    return () => {
      clearTimeout(enginesTimer);
      clearTimeout(liftoffTimer);
      clearTimeout(cloudsTimer);
      clearTimeout(spaceTimer);
      clearTimeout(resetTimer);
    };
  }, [animationStage]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Earth/Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800 to-green-600">
        {/* Launch Platform */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gray-700 rounded-t-lg"></div>
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-12 h-40 bg-gray-500"></div>
      </div>

      {/* Clouds - visible during certain animation stages */}
      <div className={`transition-opacity duration-1000 ${animationStage === 'clouds' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-1/4 w-20 h-8 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-10 bg-white rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-16 h-6 bg-white rounded-full"></div>
      </div>

      {/* Space background - gradually appears */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-blue-900 to-indigo-900 transition-opacity duration-2000
          ${animationStage === 'space' ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Stars - only visible in space */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          ></div>
        ))}
      </div>

      {/* Rocket */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out
          ${animationStage === 'initial' ? 'bottom-32' : 
            animationStage === 'engines' ? 'bottom-32' : 
            animationStage === 'liftoff' ? 'bottom-60' : 
            animationStage === 'clouds' ? 'bottom-96' : 'bottom-[700px]'}`}
      >
        <div className="relative w-10 h-24">
          {/* Rocket body */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-blue-50 to-blue-100 rounded-t-full"></div>
          
          {/* Rocket nose cone */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-t-full"></div>
          
          {/* Rocket fins */}
          <div className="absolute bottom-0 left-0 w-3 h-5 bg-blue-300 skew-x-[30deg]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-5 bg-blue-300 skew-x-[-30deg]"></div>
          
          {/* Rocket windows */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-200 rounded-full"></div>
          
          {/* Rocket exhaust/flames - changes based on animation stage */}
          {(animationStage === 'engines' || animationStage === 'liftoff' || animationStage === 'clouds' || animationStage === 'space') && (
            <>
              <div className={`
                absolute -bottom-5 left-1/2 transform -translate-x-1/2 
                w-4 h-8 bg-orange-500 rounded-b-full animate-flame
                ${animationStage === 'engines' ? 'h-6' : 
                  animationStage === 'liftoff' ? 'h-12' : 
                  animationStage === 'clouds' || animationStage === 'space' ? 'h-16' : 'h-0'}`}
              ></div>
              <div className={`
                absolute -bottom-3 left-1/2 transform -translate-x-1/2 
                w-3 h-6 bg-yellow-400 rounded-b-full animate-flame-inner
                ${animationStage === 'engines' ? 'h-4' : 
                  animationStage === 'liftoff' ? 'h-8' : 
                  animationStage === 'clouds' || animationStage === 'space' ? 'h-12' : 'h-0'}`}
              ></div>
            </>
          )}
        </div>
      </div>

      {/* Launch smoke - appears during engine start and liftoff */}
      {(animationStage === 'engines' || animationStage === 'liftoff') && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="w-40 h-20 bg-gray-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="w-32 h-16 bg-gray-300 rounded-full opacity-40 mt-2 ml-6 animate-pulse" 
               style={{ animationDelay: '0.3s' }}></div>
          <div className="w-36 h-14 bg-gray-100 rounded-full opacity-50 mt-1 -ml-4 animate-pulse" 
               style={{ animationDelay: '0.6s' }}></div>
        </div>
      )}
    </div>
  );
};

export default RocketAnimation;
