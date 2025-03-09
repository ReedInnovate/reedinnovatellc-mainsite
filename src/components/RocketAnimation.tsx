
import { useEffect, useState } from 'react';

const RocketAnimation = () => {
  const [animationStage, setAnimationStage] = useState<'initial' | 'liftoff' | 'orbit'>('initial');

  useEffect(() => {
    // Start liftoff animation after a delay
    const liftoffTimer = setTimeout(() => {
      setAnimationStage('liftoff');
    }, 1000);

    // Transition to orbit animation after liftoff completes
    const orbitTimer = setTimeout(() => {
      setAnimationStage('orbit');
    }, 3500);

    return () => {
      clearTimeout(liftoffTimer);
      clearTimeout(orbitTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Earth */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80">
        {/* Land masses */}
        <div className="absolute top-1/4 left-1/4 w-10 h-8 bg-green-500 rounded-full opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-6 bg-green-500 rounded-full opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-5 bg-green-500 rounded-full opacity-70"></div>
      </div>

      {/* Rocket */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out
          ${animationStage === 'initial' ? 'bottom-10' : 
            animationStage === 'liftoff' ? 'bottom-40' : 'bottom-40'}`}
        style={{
          animation: animationStage === 'orbit' ? 'orbit 10s linear infinite' : 'none'
        }}
      >
        <div className="relative w-10 h-24">
          {/* Rocket body */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-blue-50 to-blue-100 rounded-t-full"></div>
          
          {/* Rocket nose cone */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-t-full"></div>
          
          {/* Rocket fins */}
          <div className="absolute bottom-0 left-0 w-3 h-5 bg-blue-300 skew-x-[30deg]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-5 bg-blue-300 skew-x-[-30deg]"></div>
          
          {/* Rocket exhaust/flames */}
          {(animationStage === 'initial' || animationStage === 'liftoff') && (
            <>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-orange-500 rounded-b-full animate-flame"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-yellow-400 rounded-b-full animate-flame-inner"></div>
            </>
          )}
        </div>
      </div>

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
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
    </div>
  );
};

export default RocketAnimation;
