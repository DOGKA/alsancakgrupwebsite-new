import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Partners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Alsancak Güvenlik Müşterileri
  const securityClients = [
    { name: 'USAID', logo: '/images/alsancakguvenlik-customer/original_refusaid.webp' },
    { name: 'World Central Kitchen', logo: '/images/alsancakguvenlik-customer/original_wckref.webp' },
    { name: 'İçtaş İnşaat', logo: '/images/alsancakguvenlik-customer/original_ictasref.webp' },
    { name: 'Transatlantic Petroleum', logo: '/images/alsancakguvenlik-customer/original_transref.webp' },
    { name: 'Production Solution', logo: '/images/alsancakguvenlik-customer/original_prodref.webp' },
    { name: 'Perenco', logo: '/images/alsancakguvenlik-customer/original_perref.webp' },
    { name: 'Anagold Madencilik', logo: '/images/alsancakguvenlik-customer/original_refrefmaden.webp' },
    { name: 'Singapur Büyükelçiliği', logo: '/images/alsancakguvenlik-customer/original_singaref.webp' },
    { name: 'Petkim', logo: '/images/alsancakguvenlik-customer/original_petref.webp' },
    { name: 'TMO', logo: '/images/alsancakguvenlik-customer/original_tmoref.webp' },
    { name: 'Tiway Oil', logo: '/images/alsancakguvenlik-customer/original_tiwayred.webp' },
    { name: 'NATO', logo: '/images/alsancakguvenlik-customer/original_natoref.webp' },
    { name: 'UNICEF', logo: '/images/alsancakguvenlik-customer/original_unicefref.webp' },
    { name: 'Maritaş', logo: '/images/alsancakguvenlik-customer/original_maritasref.webp' },
    { name: 'Savronik', logo: '/images/alsancakguvenlik-customer/original_savref.webp' },
    { name: 'Kolin', logo: '/images/alsancakguvenlik-customer/original_kolinref.webp' },
    { name: 'Yapı Merkezi', logo: '/images/alsancakguvenlik-customer/original_refyapi.webp' },
    { name: 'Statkraft', logo: '/images/alsancakguvenlik-customer/original_statref.webp' },
    { name: 'TurkStream', logo: '/images/alsancakguvenlik-customer/original_turkref.webp' }
  ];

  // Alsancak Savunma
  const defensePartners = [
    { name: 'ASELSAN', logo: '/images/alsancaksavunma-main-partners/aselsan-270.png' },
    { name: 'Roketsan', logo: '/images/alsancaksavunma-main-partners/roketsan-805.png' },
    { name: 'MKE', logo: '/images/alsancaksavunma-main-partners/mke-774.png' },
    { name: 'Aspilsan', logo: '/images/alsancaksavunma-main-partners/aspilsan-18.png' },
    { name: 'Savunma Sanayi Başkanlığı', logo: '/images/alsancaksavunma-main-partners/savunma-sanayii-baskanligi-571.png' },
    { name: 'TSK Güçlendirme Vakfı', logo: '/images/alsancaksavunma-main-partners/turk-silahli-kuvvetlerini-guclendirme-vakfi-590.png' }
  ];

  // ASDTC Çözüm Ortakları
  const solutionPartners = [
    { name: 'Fastline PCB', logo: '/images/companylogos/fastlinepcb.webp' },
    { name: 'Lixpen', logo: '/images/companylogos/lixpen.jpg' },
    { name: 'Sharebot', logo: '/images/companylogos/sharebots.jpg' },
    { name: 'Cleeve Technology', logo: '/images/companylogos/cleevetech.png' },
    { name: 'Ftech GNSS', logo: '/images/companylogos/ftech.png' },
    { name: 'Mantis Vision', logo: '/images/companylogos/mantisvision.jpg' },
    { name: 'Xsis Electronics', logo: '/images/companylogos/xsis.png' },
    { name: 'Farnell', logo: '/images/companylogos/farnell.png' },
    { name: 'SIT Integration', logo: '/images/companylogos/sitintegration.jpg' },
    { name: 'Pars Komponenty', logo: '/images/companylogos/partscomp.png' },
    { name: 'Loctite', logo: '/images/companylogos/loctite.jpg' },
    { name: 'Epsilor Industries', logo: '/images/companylogos/epsilo.jpg' },
    { name: 'YIC', logo: '/images/companylogos/YIC.png' },
    { name: 'Scarabee', logo: '/images/companylogos/scrarabee.png' },
    { name: 'Glosec', logo: '/images/companylogos/glosec.jpg' },
    { name: 'RS Components', logo: '/images/companylogos/rscompatentn.jpg' },
    { name: 'Tersus GNSS', logo: '/images/companylogos/tersusgnss.jpg' },
    { name: 'Laipac Technology', logo: '/images/companylogos/laipac.jpg' },
    { name: 'Switchcraft Conxall', logo: '/images/companylogos/switchcraft.png' },
    { name: 'Fastact', logo: '/images/companylogos/fastac.png' }
  ];

  const LogoCard = ({ logo, name }) => (
    <div className="flex-shrink-0 w-52 h-32 bg-white rounded-xl flex items-center justify-center p-5 border border-white/20 hover:border-accent/30 transition-all duration-300 hover:scale-105 shadow-lg">
      <img 
        src={logo}
        alt={name}
        className="max-h-20 max-w-full w-auto object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
  );

  const MarqueeRow = ({ items, reverse = false, speed = 15 }) => (
    <div className="overflow-x-auto md:overflow-hidden py-2 scrollbar-hide touch-pan-x">
      <motion.div 
        className="flex items-center gap-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        dragElastic={0.1}
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear'
          }
        }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {[...items, ...items].map((item, index) => (
          <LogoCard key={index} logo={item.logo} name={item.name} />
        ))}
      </motion.div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-dark-100 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">İŞ ORTAKLARIMIZ</span>
          <h2 className="section-title text-light mb-10">
            Güçlü <span className="gradient-text">İş Ortaklıkları</span>
          </h2>
          
          {/* Stats */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { value: '250+', label: 'Müşteri' },
                { value: '30+', label: 'Ülke' },
                { value: '18+', label: 'Yıllık Deneyim' }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="glass-card p-6 md:p-8 rounded-xl text-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-light-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partner Sections */}
        <div className="space-y-12">
          {/* Alsancak Güvenlik */}
          <div>
            <h3 className="text-lg font-semibold text-light-300 mb-6 text-center">
              Alsancak Güvenlik - Müşterilerimiz
            </h3>
            <MarqueeRow items={securityClients} speed={20} />
          </div>

          {/* Alsancak Savunma */}
          <div>
            <h3 className="text-lg font-semibold text-light-300 mb-6 text-center">
              Alsancak Savunma - Stratejik Partnerler
            </h3>
            <MarqueeRow items={defensePartners} reverse speed={12} />
          </div>

          {/* ASDTC */}
          <div>
            <h3 className="text-lg font-semibold text-light-300 mb-6 text-center">
              ASDTC - Çözüm Ortaklarımız
            </h3>
            <MarqueeRow items={solutionPartners} speed={25} />
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-light-400 mb-4">
            250+ kuruluşla güçlü iş birlikleri
          </p>
          <motion.a 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">İş Ortağımız Olun</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
