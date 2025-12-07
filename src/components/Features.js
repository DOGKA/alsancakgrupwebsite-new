import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      title: 'Deneyimli Ekip',
      description: 'Türk Silahlı Kuvvetleri, Jandarma ve Emniyet teşkilatlarında görev yapmış, savunma ve güvenlik alanında derin bilgi birikimine sahip profesyonel kadro.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'İhtiyaca Özel Çözümler',
      description: 'Her müşterinin güvenlik ve savunma ihtiyaçlarına özel çözümler. Operasyonel gereksinimlere uygun stratejilerle maksimum koruma.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Millileştirme Projeleri',
      description: 'Lokomotif kapıları, batarya kutuları ve HVAC sistemlerinde yerli üretim. Dışa bağımlılığı azaltan AR-GE ve üretim süreçleri.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      stat: { number: '100%', label: 'Yerli Üretim' }
    },
    {
      title: 'Zamanında Teslimat',
      description: 'Titizlikle planlanan projeler ve etkin süreç yönetimi. Üretim ve lojistikte yüksek verimlilik ile güvenilir teslimat.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyber/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">ÖZELLİKLERİMİZ</span>
          <h2 className="section-title text-light mb-4">
            Neden <span className="gradient-text">Alsancak Grup?</span>
          </h2>
          <p className="text-light-400 text-lg max-w-3xl mx-auto">
            Hizmetlerimizin öne çıkan özellikleri ve rekabet avantajlarımız
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="glass-card p-8 rounded-2xl h-full flex flex-col group"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Icon & Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-light transition-colors duration-300">
                    {feature.icon}
                  </div>
                  {feature.stat && (
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">{feature.stat.number}</div>
                      <div className="text-light-500 text-xs">{feature.stat.label}</div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-light mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-light-400 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 pt-6 border-t border-glass-border">
                  <div className="w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
