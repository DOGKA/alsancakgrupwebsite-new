import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Divider from './components/Divider';
import BodyLines from './components/BodyLines';

// Lazy load components for performance
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Timeline = lazy(() => import('./components/Timeline'));
const Certifications = lazy(() => import('./components/Certifications'));
const Team = lazy(() => import('./components/Team'));
const HR = lazy(() => import('./components/HR'));
const Features = lazy(() => import('./components/Features'));
const Partners = lazy(() => import('./components/Partners'));
const Blog = lazy(() => import('./components/Blog'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-12 h-12 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
  </div>
);

function App() {
  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-cyber origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Background Grid Lines */}
      <BodyLines />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Header */}
      <Header />
      
      <main>
        {/* Hero Section - 3D Particle Globe */}
        <Hero />
        
        {/* Divider with Scrolling Text */}
        <Divider 
          withText={true} 
          text="Alsancak Grup — Savunma, Güvenlik ve Mühendislik Çözümleri — 18 Yıllık Deneyim —" 
        />
        
        <Suspense fallback={<LoadingFallback />}>
          {/* Services Section */}
          <Services />
          
          {/* About + Video Combined */}
          <About />
          
          {/* Timeline Section */}
          <Timeline />
          
          {/* Certifications Section */}
          <Certifications />
        </Suspense>
        
        {/* Divider with Text */}
        <Divider 
          withText={true} 
          text="250+ Müşteri — 40+ Çözüm Ortağı — 24 Uluslararası Sertifika —" 
        />
        
        <Suspense fallback={<LoadingFallback />}>
          {/* Features Section */}
          <Features />
          
          {/* Partners Section */}
          <Partners />
        </Suspense>
        
        {/* Divider */}
        <Divider />
        
        <Suspense fallback={<LoadingFallback />}>
          {/* Team Section */}
          <Team />
          
          {/* HR Section */}
          <HR />
          
          {/* Blog Section */}
          <Blog />
        </Suspense>
        
        {/* Divider with Text */}
        <Divider 
          withText={true} 
          text="Bizimle İletişime Geçin — Projenizi Birlikte Geliştirelim —" 
        />
        
        <Suspense fallback={<LoadingFallback />}>
          {/* FAQ Section */}
          <FAQ />
          
          {/* Contact Section */}
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      
      {/* Cursor Glow Effect */}
      <CursorGlow />
    </div>
  );
}

// Cursor Glow Component
const CursorGlow = () => {
  const glowRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div 
      ref={glowRef}
      className="cursor-glow hidden lg:block"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default App;
