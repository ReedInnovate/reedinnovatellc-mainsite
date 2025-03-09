
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  animationType?: 'fade-in' | 'fade-in-left' | 'fade-in-right';
  delay?: number;
}

const AnimatedSection = ({
  id,
  className,
  children,
  animationType = 'fade-in',
  delay = 0,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
          transform: isVisible ? 'none' : 
            animationType === 'fade-in-left' ? 'translateX(-20px)' : 
            animationType === 'fade-in-right' ? 'translateX(20px)' : 
            'translateY(20px)',
          transition: `transform 0.7s ease-out ${delay}ms, opacity 0.7s ease-out ${delay}ms`
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
