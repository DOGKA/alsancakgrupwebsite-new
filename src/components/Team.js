import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Team = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: 'Yönetim Kurulu Başkanı',
      role: 'Genel Müdür',
      expertise: 'Stratejik Yönetim',
      experience: '25+ yıl deneyim'
    },
    {
      name: 'Güvenlik Direktörü',
      role: 'Emekli Albay',
      expertise: 'Taktik ve Operasyon',
      experience: '30+ yıl TSK deneyimi'
    },
    {
      name: 'Mühendislik Direktörü',
      role: 'Makine Mühendisi',
      expertise: 'Raylı Sistemler',
      experience: '20+ yıl sektör deneyimi'
    },
    {
      name: 'AR-GE Müdürü',
      role: 'PhD Mühendis',
      expertise: 'İnovasyon ve Geliştirme',
      experience: '15+ yıl AR-GE'
    },
    {
      name: 'İnsan Kaynakları Müdürü',
      role: 'İK Uzmanı',
      expertise: 'Yetenek Yönetimi',
      experience: '12+ yıl deneyim'
    },
    {
      name: 'Operasyon Direktörü',
      role: 'Emekli Binbaşı',
      expertise: 'Lojistik ve Operasyon',
      experience: '22+ yıl deneyim'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">EKİBİMİZ</span>
          <h2 className="section-title text-light mb-4">
            Deneyimli ve <span className="gradient-text">Uzman Kadromuz</span>
          </h2>
          <p className="text-light-400 max-w-3xl mx-auto">
            TSK, Jandarma ve Emniyet teşkilatlarında görev yapmış profesyoneller
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="glass-card p-6 rounded-xl text-center group"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Member Info */}
                <h3 className="text-lg font-semibold text-light mb-1 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <div className="text-accent text-sm font-medium mb-2">{member.role}</div>
                <div className="text-light-400 text-sm mb-3">{member.expertise}</div>
                <div className="flex items-center justify-center gap-2 text-light-500 text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {member.experience}
              </div>

                {/* Social Links */}
                <div className="mt-4 pt-4 border-t border-glass-border flex justify-center gap-2">
                  <a href="#" className="w-8 h-8 bg-dark-300 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors text-light-500 hover:text-accent">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
              </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
