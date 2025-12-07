import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Certifications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // ASDTC Mühendislik Sertifikaları
  const engineeringCerts = [
    'EN 15085-2 CL1', 'ISO 3834:2005', 'ISO 9001:2015', 'ISO 10002:2018',
    'ISO 14001:2015', 'ISO 22301:2012', 'ISO 27001:2013', 'ISO 31000:2018',
    'ISO 37001:2016', 'ISO 45001:2018', 'ISO 50001:2018', 'ISO 28000:2022'
  ];

  // Alsancak Güvenlik Sertifikaları
  const securityCerts = [
    'ISO 18788', 'ISO 45001', 'ISO 27001', 'ISO 31000',
    'ISO 41001', 'ISO 37001', 'ISO 44001', 'ISO 9001',
    'ISO 10002', 'ISO 22301', 'ISO 14001'
  ];

  const CertBadge = ({ text }) => (
    <div className="px-4 py-2 bg-dark-300 rounded-lg border border-glass-border text-light-300 text-xs font-medium whitespace-nowrap hover:border-accent/30 transition-colors">
      {text}
    </div>
  );

  const MarqueeRow = ({ items, reverse = false }) => (
    <div className="overflow-hidden py-2">
      <motion.div 
        className="flex items-center gap-3"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear'
          }
        }}
      >
        {[...items, ...items].map((item, index) => (
          <CertBadge key={index} text={item} />
        ))}
      </motion.div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-dark-100 relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">SERTİFİKALARIMIZ</span>
          <h2 className="section-title text-light mb-4">
            Uluslararası <span className="gradient-text">Standartlar</span>
          </h2>
          <p className="text-light-400">24 ISO sertifikası ile kalite güvencesi</p>
        </motion.div>

        {/* Certification Rows */}
        <div className="space-y-8">
          {/* ASDTC */}
          <div>
            <h3 className="text-sm font-medium text-light-400 text-center mb-4">ASDTC Mühendislik</h3>
            <MarqueeRow items={engineeringCerts} />
        </div>

          {/* Alsancak Güvenlik */}
          <div>
            <h3 className="text-sm font-medium text-light-400 text-center mb-4">Alsancak Güvenlik</h3>
            <MarqueeRow items={securityCerts} reverse />
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-12 flex justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: '24', label: 'ISO Sertifikası' },
            { value: 'EN 15085-2', label: 'CL1 Kaynak' },
            { value: '100%', label: 'Uyumluluk' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-light-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
