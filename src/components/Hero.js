import React, { useState, useRef, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleGlobe from './ParticleGlobe';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHeroActive, setIsHeroActive] = useState(true);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isScrolling = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      type: 'globe', // 3D Particle Globe for main slide
      company: 'ALSANCAK GRUP',
      tagline: '18 Yıldır Güvenin Adresi',
      title: 'Savunma, Güvenlik ve\nMühendislik Çözümleri',
      description: 'Türkiye ve dünyada 250+ müşteri, 30+ ülkede operasyonel deneyim ile stratejik güvenlik çözümleri sunuyoruz.',
      features: ['TSK Tecrübeli Kadro', '24 ISO Sertifikası', '3 Grup Şirketi'],
      accent: '#8b2525'
    },
    {
      type: 'image',
      company: 'ALSANCAK GÜVENLİK',
      tagline: 'Uluslararası Operasyonlar',
      title: 'Sınır Ötesi Güvenlik:\nÖzel Koruma Geleceği',
      description: 'NATO, UNICEF, USAID için güvenlik hizmetleri. Afganistan, Irak, Libya, Somali\'de başarılı operasyonlar.',
      imageSrc: '/images/alsancakslider-görsel.webp',
      features: ['30+ Ülke', '7 Zorlu Bölge', '11 ISO Sertifikası'],
      accent: '#8b2525'
    },
    {
      type: 'asdtc',
      company: 'ASDTC MÜHENDİSLİK',
      tagline: 'Perfection at Every Level',
      title: 'Güç, Güvenlik ve\nMükemmellik',
      description: 'Zorlu koşullarda çalışan profesyoneller için teknoloji odaklı ürünler. Solar jeneratör, yüksek voltaj ekipmanları ve iş güvenliği çözümleri.',
      videoSrc: 'https://cdn.midjourney.com/video/f17abd48-a22e-4667-be8c-fa9c621893f7/0.mp4',
      features: ['Solar Jeneratör', 'Yüksek Voltaj', 'İş Güvenliği'],
      accent: '#66ccff'
    },
    {
      type: 'railway',
      company: 'LOCOMOTIVE DOOR',
      tagline: 'Millileştirme Projesi',
      title: '%100 Yerli\nLokomotif Kapısı',
      description: 'E5000 Elektrikli Lokomotifler. Avrupa\'da geçerli kullanım ve satış lisansları.',
      features: ['%100 Yerli', 'EN 45545', 'Avrupa Lisanslı'],
      accent: '#E5A835'
    }
  ];

  // Smooth scroll-based slider navigation
  useEffect(() => {
    const handleWheel = (e) => {
      const heroElement = heroRef.current;
      if (!heroElement) return;
      
      const heroRect = heroElement.getBoundingClientRect();
      const isInHero = heroRect.top <= 0 && heroRect.bottom > window.innerHeight * 0.5;
      
      // Only handle scroll when hero is in view and active
      if (!isInHero || !isHeroActive) return;
      
      // Prevent rapid firing
      if (isScrolling.current) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      
      if (direction > 0) {
        // Scrolling down
        if (currentSlide < slides.length - 1) {
          e.preventDefault();
          isScrolling.current = true;
          setCurrentSlide(prev => prev + 1);
          setTimeout(() => { isScrolling.current = false; }, 600);
        } else {
          // Last slide - allow normal scroll
          setIsHeroActive(false);
        }
      } else {
        // Scrolling up
        if (currentSlide > 0) {
          e.preventDefault();
          isScrolling.current = true;
          setCurrentSlide(prev => prev - 1);
          setTimeout(() => { isScrolling.current = false; }, 600);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, slides.length, isHeroActive]);

  // Re-activate hero when scrolling back to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50 && !isHeroActive) {
        setIsHeroActive(true);
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeroActive, slides.length]);

  // Touch/Swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isScrolling.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;
    
    // Only trigger if horizontal swipe is more significant than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      isScrolling.current = true;
      
      if (diffX > 0) {
        // Swipe left - next slide
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(prev => prev + 1);
        }
      } else {
        // Swipe right - previous slide
        if (currentSlide > 0) {
          setCurrentSlide(prev => prev - 1);
        }
      }
      
      setTimeout(() => { isScrolling.current = false; }, 600);
    }
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const goToSlide = (index) => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    setCurrentSlide(index);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-200 to-dark-100" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 37, 37, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 37, 37, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 3D Globe Background - Only for first slide */}
      <AnimatePresence mode="wait">
        {currentSlideData.type === 'globe' && (
          <motion.div
            key="globe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <Suspense fallback={null}>
              <ParticleGlobe />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Background Visual */}
      <div className="absolute inset-0 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {currentSlideData.type === 'globe' && (
              <div className="absolute inset-0">
                <Suspense fallback={<div className="w-full h-full bg-dark" />}>
                  <ParticleGlobe />
                </Suspense>
              </div>
            )}
            
            {currentSlideData.type === 'image' && (
              <div className="absolute inset-0">
                {/* HUD Background for Alsancak Guvenlik */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-grid-slate opacity-30" />
                    
                    {/* Radar Effect - Hidden on mobile */}
                    <div className="hidden md:block absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
                      <div className="absolute inset-0 rounded-full border border-accent/20" />
                      <div className="absolute inset-8 rounded-full border border-accent/15" />
                      <div className="absolute inset-16 rounded-full border border-accent/10" />
                      <div className="absolute inset-0 rounded-full radar-sweep animate-spin-slow opacity-40" style={{ animationDuration: '8s' }} />
                      
                      {/* Center Point */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full animate-pulse" style={{ boxShadow: '0 0 30px rgba(139, 37, 37, 0.6)' }} />
                      
                      {/* Target Points */}
                      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-accent/60 rounded-full animate-pulse" />
                      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

                    {/* Floating Data Cards - Hidden on mobile */}
                    <motion.div 
                      className="hidden lg:block absolute top-1/4 right-16 glass-card p-4 rounded-lg border border-accent/30"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <div className="text-accent text-xs font-mono mb-1">OPERASYON</div>
                      <div className="text-light text-2xl font-bold">30+</div>
                      <div className="text-light-400 text-xs">Ülke</div>
                    </motion.div>
                    
                    <motion.div 
                      className="hidden lg:block absolute bottom-1/3 right-24 glass-card p-4 rounded-lg border border-accent/30"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                      <div className="text-green-400 text-xs font-mono mb-1">AKTİF</div>
                      <div className="text-light text-2xl font-bold">7</div>
                      <div className="text-light-400 text-xs">Zorlu Bölge</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            
            {currentSlideData.type === 'asdtc' && (
              <div className="absolute inset-0">
                {/* Fullscreen video on both mobile and desktop */}
                <video 
                  src={currentSlideData.videoSrc}
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark/90 via-dark/50 md:via-dark/40 to-transparent" />
              </div>
            )}
            
            {currentSlideData.type === 'railway' && (
              <div className="absolute inset-0">
                {/* Fullscreen video on both mobile and desktop */}
                <video 
                  src="/locomotive-intro.webm"
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark via-dark/70 md:via-dark/60 to-transparent" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
            </div>

      {/* Main Content - Overlay */}
      <div className="container-custom relative z-20 w-full py-20 md:py-24 lg:py-32 px-4 md:px-8">
        <div className="max-w-xl md:max-w-2xl">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-3 md:space-y-6"
            key={currentSlide}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Company Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div 
                className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 glass-card rounded-full"
                style={{ borderColor: `${currentSlideData.accent}40` }}
              >
                <div 
                  className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: currentSlideData.accent }}
                />
                <span 
                  className="text-xs md:text-sm font-bold tracking-wider"
                  style={{ color: currentSlideData.accent }}
                >
                  {currentSlideData.company}
                </span>
            </div>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              variants={itemVariants}
              className="text-light-400 text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium"
            >
              {currentSlideData.tagline}
            </motion.p>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-light leading-[1.15] md:leading-[1.1]"
            >
              {currentSlideData.title.split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  <span className={i === 1 ? 'gradient-text' : ''}>{line}</span>
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-light-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-md md:max-w-xl"
            >
              {currentSlideData.description}
            </motion.p>
          </motion.div>

          {/* Features - Bottom positioned on mobile */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-32 md:bottom-24 left-4 md:left-8 lg:left-16 right-4 md:right-auto z-20"
          >
            <div className="flex flex-wrap gap-2 md:gap-3">
              {currentSlideData.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="glass-card px-3 md:px-4 py-1.5 md:py-2 rounded-lg"
                >
                  <span className="text-light-200 text-xs md:text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Media */}
          <div className="lg:col-span-6 xl:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {currentSlideData.type === 'globe' ? (
                  // For globe slide - only the 3D globe, no stats card
                  <div className="relative h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
                    {/* Globe is already rendered in background */}
                  </div>
                ) : currentSlideData.type === 'asdtc' ? (
                  // ASDTC - Video is in background, empty space here
                  <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
                    {/* Video is in full screen background */}
            </div>
                ) : currentSlideData.type === 'railway' ? (
                  // Locomotive Door - Video is in background, just show empty space here
                  <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
                    {/* Video is in full screen background */}
          </div>
                ) : currentSlideData.type === 'video' ? (
                  <div className="relative rounded-2xl overflow-hidden glass-card">
                  <video
                    ref={videoRef}
                      className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
                    muted
                    playsInline
                      loop
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src={currentSlideData.videoSrc} type="video/mp4" />
                  </video>
                  
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                    
                    {/* Play Button */}
                    <button 
                      onClick={toggleVideo}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        isVideoPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                      }`}
                    >
                      <div className="w-20 h-20 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center glow hover:scale-110 transition-transform">
                        {isVideoPlaying ? (
                          <svg className="w-8 h-8 text-light" fill="currentColor" viewBox="0 0 24 24">
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-light ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        )}
                      </div>
                    </button>
                  </div>
                ) : (
                  // DELFLO Style HUD Elements for Alsancak Güvenlik - Hidden on mobile
                  <div className="relative h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
                    {/* Radar Background - Visible on all */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                        {/* Radar Sweep */}
                        <div className="absolute inset-0 rounded-full animate-radar-sweep">
                          <div className="w-full h-full rounded-full" style={{
                            background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, transparent 200deg, rgba(139, 37, 37, 0.05) 240deg, rgba(139, 37, 37, 0.4) 360deg)'
                          }} />
                          <div className="absolute top-0 left-1/2 w-[1px] h-1/2 bg-gradient-to-b from-accent via-accent-light to-transparent origin-bottom -translate-x-1/2" style={{ boxShadow: '0 0 30px rgba(139, 37, 37, 1)' }} />
                        </div>
                        {/* Rings */}
                        <div className="absolute inset-[10%] rounded-full border border-accent/20 opacity-60" />
                        <div className="absolute inset-[20%] rounded-full border border-dashed border-accent/10 opacity-40 animate-spin-slow" />
                        <div className="absolute inset-[30%] rounded-full border border-accent/20 opacity-30" />
                        {/* Crosshairs */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-accent" />
                          <div className="absolute left-0 right-0 top-1/2 h-px bg-accent" />
                        </div>
                </div>
            </div>

                    {/* HUD Card Top Left - Smaller on mobile */}
                    <motion.div 
                      className="absolute top-2 left-2 md:top-4 md:left-4 z-10 opacity-80 md:opacity-90 scale-75 md:scale-100 origin-top-left"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-accent/30 rounded blur opacity-20 group-hover:opacity-40 transition duration-500" />
                        <div className="relative w-36 md:w-48 rounded glass-card overflow-hidden">
                          <div className="h-1 w-full bg-accent/50" />
                          <div className="p-1.5 md:p-2 relative">
                            <div className="absolute top-1 right-1 md:top-2 md:right-2 flex gap-1">
                              <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                              <div className="w-1 h-1 bg-accent/50 rounded-full" />
                            </div>
                            <div className="h-14 md:h-20 w-full overflow-hidden rounded border border-white/5 relative bg-dark-200">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-8 h-8 md:w-12 md:h-12 text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <div className="absolute bottom-0.5 left-1 md:bottom-1 md:left-2 text-[8px] md:text-[10px] font-mono text-accent">CAM_01 // LIVE</div>
                            </div>
                            <div className="mt-1 md:mt-2 flex justify-between items-end">
                              <div className="flex flex-col">
                                <span className="text-[7px] md:text-[9px] text-light-500 font-mono uppercase">Status</span>
                                <span className="text-[10px] md:text-xs font-bold text-light font-mono">SECURE</span>
                              </div>
                              <div className="text-[8px] md:text-[10px] text-accent font-mono">ACTIVE</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* HUD Card Top Right - Smaller on mobile */}
                    <motion.div 
                      className="absolute top-2 right-2 md:top-4 md:right-4 z-10 opacity-80 md:opacity-90 scale-75 md:scale-100 origin-top-right"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-cyber/30 rounded blur opacity-20 group-hover:opacity-40 transition duration-500" />
                        <div className="relative w-40 md:w-52 rounded glass-card overflow-hidden">
                          <div className="p-2 md:p-3 relative">
                            <div className="flex justify-between items-center mb-1 md:mb-2 border-b border-white/5 pb-1 md:pb-2">
                              <div className="flex items-center gap-1 md:gap-2">
                                <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" r="10" />
                                  <line x1="22" x2="18" y1="12" y2="12" />
                                  <line x1="6" x2="2" y1="12" y2="12" />
                                  <line x1="12" x2="12" y1="6" y2="2" />
                                  <line x1="12" x2="12" y1="22" y2="18" />
                                </svg>
                                <span className="text-[7px] md:text-[9px] text-cyber font-mono uppercase tracking-wider md:tracking-widest">AERIAL RECON</span>
                              </div>
                              <span className="text-[7px] md:text-[9px] text-accent font-mono animate-pulse">REC</span>
                            </div>
                            <div className="h-16 md:h-24 w-full overflow-hidden rounded border border-cyber/20 relative bg-dark-200">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-10 h-10 md:w-16 md:h-16 text-cyber/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              {/* Corner brackets */}
                              <div className="absolute top-1 left-1 w-1.5 h-1.5 md:w-2 md:h-2 border-t border-l border-white/50" />
                              <div className="absolute top-1 right-1 w-1.5 h-1.5 md:w-2 md:h-2 border-t border-r border-white/50" />
                              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 md:w-2 md:h-2 border-b border-l border-white/50" />
                              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 md:w-2 md:h-2 border-b border-r border-white/50" />
                            </div>
                            <div className="mt-1 md:mt-2 grid grid-cols-2 gap-1 md:gap-2 text-[7px] md:text-[9px] font-mono text-light-400">
                              <div className="flex justify-between bg-white/5 px-1 py-0.5 rounded">
                                <span>ZONES</span>
                                <span className="text-light">30+</span>
                              </div>
                              <div className="flex justify-between bg-white/5 px-1 py-0.5 rounded">
                                <span>OPS</span>
                                <span className="text-light">ACTIVE</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* HUD Card Bottom Left - Smaller on mobile, positioned higher */}
                    <motion.div 
                      className="absolute bottom-28 md:bottom-16 left-2 md:left-4 z-10 opacity-70 md:opacity-80 scale-[0.65] md:scale-100 origin-bottom-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-accent/30 rounded blur opacity-20" />
                        <div className="relative w-44 md:w-52 rounded-lg glass-card overflow-hidden">
                          <div className="bg-accent/10 border-b border-accent/20 px-2 md:px-3 py-1 md:py-1.5 flex justify-between items-center">
                            <span className="text-[8px] md:text-[9px] text-accent font-mono font-bold tracking-tight">THREAT ANALYSIS</span>
                            <div className="flex gap-0.5">
                              <div className="w-1 h-1 bg-accent rounded-full" />
                              <div className="w-1 h-1 bg-accent/30 rounded-full" />
                              <div className="w-1 h-1 bg-accent/30 rounded-full" />
                            </div>
                          </div>
                          <div className="p-2 md:p-3">
                            <div className="flex items-end gap-0.5 h-6 md:h-8 opacity-70">
                              <div className="w-1.5 md:w-2 h-2 md:h-3 bg-accent animate-pulse" style={{ animationDelay: '0s' }} />
                              <div className="w-1.5 md:w-2 h-4 md:h-5 bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                              <div className="w-1.5 md:w-2 h-6 md:h-8 bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
                              <div className="w-1.5 md:w-2 h-3 md:h-4 bg-accent animate-pulse" style={{ animationDelay: '0.6s' }} />
                              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-accent animate-pulse" style={{ animationDelay: '0.8s' }} />
                              <div className="flex-1 border-b border-accent/30 mb-0.5 ml-1" />
                            </div>
                            <div className="mt-1.5 md:mt-2 text-[8px] md:text-[9px] text-light-400 font-mono">
                              STATUS: <span className="text-accent">MONITORING</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* HUD Card Bottom Right - Smaller on mobile, positioned higher */}
                    <motion.div 
                      className="absolute bottom-28 md:bottom-16 right-2 md:right-4 z-10 opacity-70 md:opacity-80 scale-[0.65] md:scale-100 origin-bottom-right"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-cyber/30 rounded blur opacity-20" />
                        <div className="relative w-36 md:w-44 rounded glass-card overflow-hidden">
                          <div className="p-1.5 md:p-2">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[8px] md:text-[9px] text-cyber font-mono uppercase">SECTOR SCAN</span>
                              <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12h-2.48a2 2 0 00-1.93 1.46l-2.35 8.36a.25.25 0 01-.48 0L9.24 2.18a.25.25 0 00-.48 0l-2.35 8.36A2 2 0 014.49 12H2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="h-12 md:h-16 w-full overflow-hidden rounded border border-white/5 relative bg-dark-200 flex items-center justify-center">
                              <svg className="w-8 h-8 md:w-10 md:h-10 text-cyber/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                            </div>
                            <div className="mt-1.5 md:mt-2 grid grid-cols-2 gap-1">
                              <div className="bg-cyber/10 h-1 rounded w-full" />
                              <div className="bg-cyber/10 h-1 rounded w-3/4" />
                            </div>
                          </div>
                          <div className="h-1 w-full bg-cyber/50" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
              
            {/* Slide Indicators - Bottom Center */}
            <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentSlide
                      ? 'w-12 bg-gradient-to-r from-accent to-accent-light'
                      : 'w-6 bg-light-500/30 hover:bg-light-500/50'
                    }`}
                />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop only (mobile uses scroll) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 glass-card rounded-full items-center justify-center hover:bg-glass-hover transition-all duration-300 hover:scale-110"
      >
        <svg className="w-5 h-5 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 glass-card rounded-full items-center justify-center hover:bg-glass-hover transition-all duration-300 hover:scale-110"
      >
        <svg className="w-5 h-5 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-cyber/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/3 rounded-full blur-2xl animate-float" />
    </section>
  );
};

export default Hero;
