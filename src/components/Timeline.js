import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Timeline = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: '2013',
      title: 'Mühendislik Çözümü',
      description: 'Entegreli Darbe Kapasitörü ve Lityum Pil Üretimi',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      year: '2014',
      title: 'Resmi Dağıtıcı',
      description: '50+ Firmanın Yetkili Satıcılığı',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      year: '2018',
      title: 'DC MOTOR',
      description: '+100M Euro DC Motor İthalat Anlaşması',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      year: '2020',
      title: 'Lokomotif Kapısı',
      description: 'Millileştirme Projesi',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v4m-4-4h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2zm-2 4l-2 2m12-2l2 2" />
        </svg>
      )
    },
    {
      year: '2021',
      title: 'Batarya Kutusu',
      description: 'Yerli Üretim',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">MİLLİLEŞTİRME TARİHÇESİ</span>
          <h2 className="section-title text-light">
            Endüstriyel Fikirler <span className="gradient-text">Gelişimi</span> Kaçınılmaz Kılar
          </h2>
        </motion.div>

        {/* Timeline - Horizontal */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          {/* Timeline Items */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="glass-card p-5 rounded-xl text-center h-full"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-accent">
                    {milestone.icon}
                  </div>
                  
                  {/* Year */}
                  <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-semibold text-light mb-1">{milestone.title}</h3>
                  
                  {/* Description */}
                  <p className="text-xs text-light-500 leading-tight">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block glass-card p-6 md:p-8 rounded-2xl max-w-2xl">
            <h3 className="text-xl font-bold mb-3 text-light">
              Millileştirme Yolculuğumuz Devam Ediyor
            </h3>
            <p className="text-light-400 mb-4 text-sm leading-relaxed">
              Savunma sanayii ve raylı sistemlerde Türkiye'nin dışa bağımlılığını azaltmak için 
              AR-GE ve üretim süreçlerine yatırım yapıyoruz.
            </p>
            <motion.a 
              href="#contact" 
              className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Bilgi Alın</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
