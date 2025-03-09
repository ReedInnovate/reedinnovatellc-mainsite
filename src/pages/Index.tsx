
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/sections/HeroSection';
import YouSection from '@/components/sections/YouSection';
import AboutSection from '@/components/sections/AboutSection';
import WorkingTogetherSection from '@/components/sections/WorkingTogetherSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  useEffect(() => {
    document.title = 'Reed Innovate - Product Marketing Consulting';
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <YouSection />
      <AboutSection />
      <WorkingTogetherSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
