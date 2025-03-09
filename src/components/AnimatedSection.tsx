
import { useRef, useEffect, useState, memo } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  animationType?: 'fade-in' | 'fade-in-left' | 'fade-in-right';
  delay?: number;
}

// Using memo to prevent unnecessary re-renders
const AnimatedSection = memo(({
  id,
  className,
  children,
  animationType = 'fade-in',
  delay = 0,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use passive listener to improve performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Create transform style based on animation type
  const getTransformStyle = () => {
    if (!isVisible) {
      switch (animationType) {
        case 'fade-in-left': return 'translateX(-20px)';
        case 'fade-in-right': return 'translateX(20px)';
        default: return 'translateY(20px)';
      }
    }
    return 'none';
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn('section', className)}
    >
      <div
        className={cn(
          'transition-opacity duration-700 opacity-0',
          isVisible && 'opacity-100'
        )}
        style={{
          transform: getTransformStyle(),
          transition: `transform 0.7s ease-out ${delay}ms, opacity 0.7s ease-out ${delay}ms`
        }}
      >
        {children}
      </div>
    </section>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
