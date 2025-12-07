import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'services', 'about', 'hr', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Kurumsal', href: '#about' },
    { name: 'Grup Şirketleri', href: '#services' },
    { name: 'İK Yaklaşımı', href: '#hr' },
    { name: 'Blog', href: '#blog' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3' 
            : 'py-5'
        }`}
      >
        {/* Glassmorphism Background */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled 
              ? 'bg-dark/80 backdrop-blur-xl border-b border-glass-border shadow-glass' 
              : 'bg-transparent'
          }`}
        />
        
        <div className="container-custom relative">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <motion.a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="relative z-10 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/alsancaklogo.png" 
                alt="Alsancak Grup" 
                className="h-10 lg:h-12 w-auto transition-all duration-300 filter brightness-0 invert group-hover:drop-shadow-[0_0_10px_rgba(139,37,37,0.5)]"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full group ${
                    activeSection === item.href.slice(1)
                      ? 'text-accent'
                      : 'text-light-300 hover:text-light'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-glass-white rounded-full opacity-0 group-hover:opacity-100"
                    layoutId="navHover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                  
                  {/* Active Indicator */}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>
              
            {/* CTA Button - Desktop */}
            <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden lg:flex btn-primary text-sm px-6 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              <span className="relative z-10 flex items-center gap-2">
                İletişime Geç
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center glass-card rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-light rounded-full origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-light rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scaleX: isMobileMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-light rounded-full origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40"
      >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-dark/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
        
        {/* Menu Content */}
            <motion.nav 
              className="relative h-full flex flex-col items-center justify-center gap-6 p-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {menuItems.map((item, index) => (
                <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
                  className="text-2xl font-bold text-light hover:text-accent transition-colors relative group"
                  custom={index}
                  variants={menuItemVariants}
            >
              {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </motion.a>
          ))}
              
              <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="btn-primary mt-6"
                custom={menuItems.length}
                variants={menuItemVariants}
              >
                <span className="relative z-10">İletişime Geç</span>
              </motion.a>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-4 mt-8"
                custom={menuItems.length + 1}
                variants={menuItemVariants}
              >
                <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <svg className="w-5 h-5 text-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <svg className="w-5 h-5 text-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <svg className="w-5 h-5 text-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
