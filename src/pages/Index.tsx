
import { useEffect, lazy, Suspense } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/sections/HeroSection';

// Lazy load non-critical sections
const YouSection = lazy(() => import('@/components/sections/YouSection'));
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const WorkingTogetherSection = lazy(() => import('@/components/sections/WorkingTogetherSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));
const FooterSection = lazy(() => import('@/components/sections/FooterSection'));

const Index = () => {
  useEffect(() => {
    document.title = 'Reed Innovate - Product Marketing Consulting';
    
    // Mobile viewport height fix
    const setMobileHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setMobileHeight();
    window.addEventListener('resize', setMobileHeight);
    
    // Preconnect to external domains for faster loading
    const preconnectLinks = [
      'https://fonts.gstatic.com',
      'https://app.smartsheet.com'
    ];
    
    preconnectLinks.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    
    return () => {
      window.removeEventListener('resize', setMobileHeight);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <Suspense fallback={<div className="py-16 md:py-24 bg-gray-50"></div>}>
        <YouSection />
      </Suspense>
      <Suspense fallback={<div className="py-16 md:py-24"></div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="py-16 md:py-24 bg-gray-50"></div>}>
        <WorkingTogetherSection />
      </Suspense>
      <Suspense fallback={<div className="py-16 md:py-24"></div>}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<div className="py-8 md:py-12 bg-gray-50"></div>}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
