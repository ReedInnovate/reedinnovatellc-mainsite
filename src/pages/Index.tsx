
import { useEffect, lazy, Suspense } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/sections/HeroSection';
import { Loader2 } from 'lucide-react';

// Lazy load non-critical sections
const YouSection = lazy(() => import('@/components/sections/YouSection'));
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const WorkingTogetherSection = lazy(() => import('@/components/sections/WorkingTogetherSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));
const FooterSection = lazy(() => import('@/components/sections/FooterSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-16 md:py-24">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

const Index = () => {
  useEffect(() => {
    document.title = 'Reed Innovate - Product Marketing Consulting';
    
    // Preload critical components after initial render
    const preloadComponents = async () => {
      const importPromises = [
        import('@/components/sections/YouSection'),
        import('@/components/sections/AboutSection'),
        import('@/components/sections/WorkingTogetherSection')
      ];
      await Promise.all(importPromises);
    };
    
    // Add a small timeout to ensure critical content loads first
    const timeoutId = setTimeout(() => {
      preloadComponents();
    }, 1000);
    
    // Add a class to the body for mobile-specific styling
    document.body.classList.add('mobile-text-left');
    
    return () => {
      clearTimeout(timeoutId);
      document.body.classList.remove('mobile-text-left');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <YouSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WorkingTogetherSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
