import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// SVG Icon Component
const Icon = ({ name, className = "w-5 h-5" }) => {
  const icons = {
    shield: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    building: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    hardhat: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    bolt: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    camera: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    chip: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    plug: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    truck: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    flask: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    train: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v4m-4-4h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2zm-2 4l-2 2m12-2l2 2" />
      </svg>
    ),
    door: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10zm8 11V10m-4 4h.01M8 17h.01" />
      </svg>
    ),
    subway: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 18l-2 3m10-3l2 3M6 6h12M6 6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2M9 14h.01M15 14h.01" />
      </svg>
    ),
    wrench: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    ),
    box: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  };
  
  return icons[name] || null;
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const mainServices = [
    {
      company: 'Alsancak Güvenlik',
      tagline: '2007\'den beri güvenlik ve koruma hizmetleri',
      description: 'Türkiye ve dünyada enerji sektöründe güvenlik ve danışmanlık hizmetleri sunuyoruz. Türk Silahlı Kuvvetleri, Jandarma ve Emniyet\'te görev yapmış uzman kadrolarımızla uluslararası standartlarda hizmet.',
      services: [
        { name: 'İnsanlı Güvenlik', desc: 'Yakın Koruma ve Seyahat Yönetimi', icon: 'shield' },
        { name: 'Fiziksel Güvenlik', desc: 'Büyükelçilik, Şirket Merkezi, Fabrika', icon: 'building' },
        { name: 'Kritik Altyapı Güvenliği', desc: 'Baraj, Köprü, Karayolu İnşaatları', icon: 'hardhat' },
        { name: 'Enerji Tesisi Güvenliği', desc: 'Petrol/Gaz Hattı, Hidroelektrik', icon: 'bolt' },
        { name: 'Uzaktan İzleme', desc: 'CCTV, Alarm Merkezi', icon: 'camera' }
      ],
      stats: { number: '30+', label: 'Ülke' },
      link: 'https://www.alsancakguvenlik.com/',
      media: { type: 'image', src: '/images/alsancakguvenlikslider2.webp' },
      accent: '#8b2525'
    },
    {
      company: 'ASDTC Mühendislik',
      tagline: 'Endüstriyel Fikirlerin Gerçekleşme Merkezi',
      description: 'Savunma sanayi ve ulaşım teknolojisinde kritik malzeme tedariki. Elektronik komponent, tüketim elektroniği, kablo, soğuk zincir ve kimyasal ürünlerde 40+ global çözüm ortağı ile hizmet.',
      services: [
        { name: 'Elektronik Komponent', desc: 'Tüketim elektroniği ve bileşenler', icon: 'chip' },
        { name: 'Kablo Çözümleri', desc: 'Nitelikli kablolar ve bağlantı elemanları', icon: 'plug' },
        { name: 'Soğuk Zincir', desc: 'Ürün teslimi ve lojistik', icon: 'truck' },
        { name: 'Kimyasal Malzemeler', desc: 'Endüstriyel kimyasal tedarik', icon: 'flask' },
        { name: 'Raylı Sistem Üretimi', desc: 'EN 15085-2 CL1 sertifikalı imalat', icon: 'train' }
      ],
      stats: { number: '40+', label: 'Çözüm Ortağı' },
      link: 'https://asdtc.co.uk/',
      media: { type: 'video', src: '/videos/asdtc-video2.mp4' },
      accent: '#66ccff'
    },
    {
      company: 'Locomotive Door',
      tagline: 'Raylı Sistem Kapı Çözümleri',
      description: '%100 yerli sermaye ile E5000 Elektrikli Lokomotifler için iç ve dış kapıların seri üretimi. Avrupa ülkelerinde geçerli kullanım ve satış lisanslarına sahip.',
      services: [
        { name: 'Lokomotif Kapıları', desc: 'Sürücü iç ve dış kapılar', icon: 'door' },
        { name: 'Metro Kapıları', desc: 'Hafif raylı sistemler için', icon: 'subway' },
        { name: 'Bakım Hizmetleri', desc: 'Periyodik bakım ve onarım', icon: 'wrench' },
        { name: 'Yedek Parça', desc: 'Orijinal ve uyumlu parçalar', icon: 'box' }
      ],
      stats: { number: '100%', label: 'Yerli' },
      link: 'https://locomotivedoor.com/',
      media: { type: 'video', src: '/locomotive-loop.mp4' },
      accent: '#E5A835'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyber/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">GRUP ŞİRKETLERİ</span>
          <h2 className="section-title text-light mb-6">
            Stratejik Güvenlik ve <br />
            <span className="gradient-text">Mühendislik Çözümleri</span>
          </h2>
          <p className="text-light-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Alsancak Grup bünyesinde 3 şirket ile savunma, güvenlik ve mühendislik sektörlerinde hizmet veriyoruz
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div 
                className="glass-card rounded-2xl overflow-hidden"
                style={{ borderColor: `${service.accent}20` }}
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  
                  {/* Content Side */}
                  <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <a 
                          href={service.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2"
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-light group-hover/link:text-accent transition-colors">
                            {service.company}
                          </h3>
                          <svg 
                            className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-all transform group-hover/link:translate-x-1" 
                            style={{ color: service.accent }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ 
                            backgroundColor: `${service.accent}20`,
                            color: service.accent
                          }}
                        >
                          {service.stats.number} {service.stats.label}
                        </div>
                      </div>
                      
                      <p className="text-light-400 text-sm mb-4">{service.tagline}</p>
                      <p className="text-light-300 leading-relaxed mb-6">{service.description}</p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {service.services.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 rounded-xl bg-dark-300/50 hover:bg-dark-300 border border-glass-border hover:border-accent/20 transition-all duration-300 group/item"
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                            style={{ backgroundColor: `${service.accent}20`, color: service.accent }}
                          >
                            <Icon name={item.icon} className="w-4 h-4" />
                          </div>
                          <h5 className="font-semibold text-light text-sm mb-1 group-hover/item:text-accent transition-colors">
                            {item.name}
                          </h5>
                          <p className="text-light-500 text-xs">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Media Side */}
                  <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                    {service.media.type === 'video' ? (
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        autoPlay
                      >
                        <source src={service.media.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img 
                        src={service.media.src}
                        alt={service.company}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    
                    {/* Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to right, ${service.accent}10, transparent)`
                      }}
                    />
                    
                    {/* Accent Line */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: service.accent }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
