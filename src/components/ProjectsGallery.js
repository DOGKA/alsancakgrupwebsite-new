import React from 'react';
import ImageMockup from './ImageMockup';

const ProjectsGallery = () => {
  const projects = [
    {
      title: 'Uluslararası Güvenlik Operasyonları',
      subtitle: 'Güvenlik Hizmetleri',
      description: 'Afganistan, Irak, Libya, Uganda, Somali, Etiyopya ve Aden Körfezi\'nde başarılı güvenlik operasyonları',
      category: 'Güvenlik',
      client: 'NATO, UNICEF, USAID',
      icon: 'fa-shield-halved'
    },
    {
      title: 'Lokomotif Kapısı Millileştirmesi',
      subtitle: 'Yerli Üretim',
      description: 'E5000 Elektrikli Lokomotifler için EN 45545 ve TSI Loc&Pas standartlarında iç ve dış kapı üretimi',
      category: 'Mühendislik',
      client: 'Türkiye Raylı Sistemler',
      icon: 'fa-train'
    },
    {
      title: 'Yüksek Gerilim Batarya Kutuları',
      subtitle: 'Güç Sistemleri',
      description: 'Elektrikli raylı sistem araçları için yüksek gerilim batarya kutuları ve güç üniteleri üretimi',
      category: 'Mühendislik',
      client: 'Raylı Sistem Şirketleri',
      icon: 'fa-battery-full'
    },
    {
      title: 'Risk Analizi ve Danışmanlık',
      subtitle: 'Güvenlik Stratejisi',
      description: 'Kritik tesisler için kapsamlı tehdit değerlendirmesi ve risk yönetimi danışmanlık hizmetleri',
      category: 'Danışmanlık',
      client: 'Enerji Sektörü',
      icon: 'fa-chart-line'
    },
    {
      title: 'HVAC Klima Sistemleri',
      subtitle: 'Havalandırma Çözümleri',
      description: 'Raylı sistem araçları için özel tasarım klima şaseleri ve havalandırma sistemleri üretimi',
      category: 'Mühendislik',
      client: 'Lokomotif Üreticileri',
      icon: 'fa-wind'
    },
    {
      title: 'Petrol ve Gaz Hattı Güvenliği',
      subtitle: 'Kritik Altyapı',
      description: 'BTC ve TurkStream gibi stratejik enerji hatlarında 7/24 profesyonel güvenlik hizmeti',
      category: 'Güvenlik',
      client: 'Botaş, Perenco',
      icon: 'fa-oil-well'
    }
  ];

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-subtitle">PROJELERİMİZ</span>
          <h2 className="section-title mb-4">
            Gerçekleştirdiğimiz Projeler ve Çözümler
          </h2>
          <p className="text-lg text-light max-w-3xl mx-auto leading-relaxed">
            Savunma, güvenlik ve mühendislik alanlarında hayata geçirdiğimiz yenilikçi projeler
          </p>
        </div>

        {/* Projects Grid - Eşit Card Boyutları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-effect rounded-2xl overflow-hidden hover:bg-neutral/30 transition-all duration-300 h-full flex flex-col">
                {/* Image Mockup */}
                <div className="relative">
                  <ImageMockup 
                    height="220px"
                    text={project.title.toUpperCase()}
                    icon="image"
                    gradient="from-accent/15 to-neutral/40"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-accent/90 backdrop-blur-sm text-light rounded-full text-xs font-bold flex items-center gap-2">
                      <i className={`fas ${project.icon}`}></i>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-accent text-xs font-bold mb-2 uppercase tracking-wider">{project.subtitle}</div>
                  <h3 className="text-xl font-bold text-light mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-light-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Client */}
                  <div className="flex items-center gap-2 text-light-dim text-xs mb-4">
                    <i className="fas fa-building text-accent"></i>
                    <span>{project.client}</span>
                  </div>

                  {/* Button */}
                  <button className="w-full px-4 py-3 bg-accent/10 hover:bg-accent text-light rounded-lg transition-all duration-300 hover:scale-[1.02] font-semibold text-sm flex items-center justify-center gap-2 group/btn">
                    <span>Detayları Gör</span>
                    <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-block glass-effect p-8 md:p-10 rounded-2xl max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 text-light">
              Daha Fazla Proje ve Referans
            </h3>
            <p className="text-light-muted mb-6 leading-relaxed">
              Tamamladığımız 1000+ proje ve devam eden çalışmalarımız hakkında detaylı bilgi almak için iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-primary">
                Tüm Projelerimiz
                <i className="fas fa-folder-open ml-2"></i>
              </a>
              <a href="#partners" className="btn-outline">
                Referanslarımız
                <i className="fas fa-handshake ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration - Minimal */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProjectsGallery;
