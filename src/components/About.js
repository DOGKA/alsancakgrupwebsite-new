import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = [
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ), 
      label: 'Kalite'
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ), 
      label: 'Güvenlik'
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ), 
      label: 'Müşteri Odaklı'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-dark-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyber/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">KURUMSAL</span>
          <h2 className="section-title text-light">
            Hakkımızda <span className="gradient-text">Bilmeniz Gerekenler</span>
          </h2>
        </motion.div>

        {/* Main Content - 3 Column */}
        <motion.div 
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Left - Text */}
          <motion.div className="lg:col-span-5 space-y-6" variants={itemVariants}>
            <div className="space-y-4 text-light-300 text-base leading-relaxed">
              <p>
                Alsancak Grup; güvenlik, savunma ve mühendislik alanlarında uçtan uca çözümler sunan, 
                operasyonel mükemmellik ve bilgi güvenliğini merkezine alan bir teknoloji ve hizmet organizasyonudur.
              </p>
              <p>
                Enerji, raylı sistemler, kritik altyapılar ve endüstriyel üretim sektörlerinde; risk analizi, saha operasyonu, 
                sistem entegrasyonu, üretim ve bakım hizmetlerini tek çatı altında yönetiriz.
              </p>
              <p>
                Tüm süreçlerimiz ölçülebilir KPI'lar, denetim döngüleri ve sürekli iyileştirme prensipleriyle yürütülür.
              </p>
            </div>

            {/* Values - Horizontal */}
            <div className="flex gap-3 pt-4">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex-1 glass-card p-4 rounded-xl text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-accent mb-2 flex justify-center">
                    {value.icon}
                </div>
                  <span className="text-light-400 text-xs font-semibold">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center - LOGO */}
          <motion.div 
            className="lg:col-span-3 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Animated Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border border-accent/20 rounded-full animate-ping opacity-30" style={{ animationDuration: '4s' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border border-accent/10 rounded-full animate-pulse" />
              </div>
              
              {/* Logo - Orijinal boyut korunuyor */}
              <img 
                src="/alsancaklogo.png" 
                alt="Alsancak Grup" 
                className="relative z-10 w-40 h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
                style={{
                  filter: 'drop-shadow(0 10px 25px rgba(139, 37, 37, 0.3))'
                }}
              />
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div className="lg:col-span-4 space-y-4" variants={itemVariants}>
            {[
              'Operasyonel mükemmellik, bilgi güvenliği ve müşteri odaklı süreç yönetimiyle uçtan uca hizmet sunuyoruz.',
              'Enerji, raylı sistemler ve kritik altyapılarda tecrübeye dayalı risk yönetimi ve saha operasyonları yürütüyoruz.',
              'Tedarik zinciri ve üretim süreçlerinde izlenebilirlik, denetim döngüleri ve sürekli iyileştirme uygularız.'
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                className="glass-card p-5 rounded-xl"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <p className="text-light-300 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
