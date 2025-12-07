import React from 'react';

const Awards = () => {
  const awards = [
    {
      year: '2023',
      title: 'En İyi Savunma Sanayii Tedarikçisi',
      organization: 'Türkiye Savunma Sanayii Birliği',
      icon: 'fa-trophy',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2022',
      title: 'İnovasyon Ödülü',
      organization: 'Raylı Sistemler Derneği',
      icon: 'fa-lightbulb',
      gradient: 'from-accent to-blue-500'
    },
    {
      year: '2021',
      title: 'Kalite Mükemmellik Sertifikası',
      organization: 'ISO Türkiye',
      icon: 'fa-star',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      year: '2020',
      title: 'Yılın İhracatçısı',
      organization: 'TİM - Türkiye İhracatçılar Meclisi',
      icon: 'fa-earth-americas',
      gradient: 'from-green-500 to-blue-500'
    }
  ];

  const certifications = [
    { name: 'EN 15085-2 CL1', desc: 'Kaynaklı İmalat Sertifikası' },
    { name: 'EN 45545', desc: 'Yangın Güvenlik Standardı' },
    { name: 'TSI Loc&Pas', desc: 'Demiryolu Standartları' },
    { name: 'ISO 9001', desc: 'Kalite Yönetim Sistemi' },
    { name: 'ISO 14001', desc: 'Çevre Yönetim Sistemi' },
    { name: 'OHSAS 18001', desc: 'İş Sağlığı ve Güvenliği' }
  ];

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">BAŞARILARIMIZ</span>
          <h2 className="section-title mb-6">
            Ödüller ve Sertifikasyonlar
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Kalite ve mükemmellik yolculuğumuzda aldığımız ödüller ve sertifikalar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Ödüllerimiz</h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${award.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <i className={`fas ${award.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-bold">
                          {award.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors">
                        {award.title}
                      </h4>
                      <p className="text-white/60 text-sm">{award.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 gradient-text">Sertifikalarımız</h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 glow group-hover:rotate-12 transition-transform duration-300">
                    <i className="fas fa-certificate text-2xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-lg mb-1 text-white">{cert.name}</h4>
                  <p className="text-white/60 text-xs">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass-effect p-8 md:p-12 rounded-3xl animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
            Kalite ve Mükemmellik Taahhüdümüz
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Uluslararası standartlarda hizmet kalitesi ve müşteri memnuniyeti odaklı çalışma anlayışımız
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Sertifikalarımızı İnceleyin
            </a>
            <a href="#about" className="btn-outline">
              Kalite Politikamız
            </a>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Awards;

