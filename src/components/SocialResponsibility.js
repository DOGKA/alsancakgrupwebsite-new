import React from 'react';

const SocialResponsibility = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="text-center animate-on-scroll">
            <span className="section-subtitle">TOPLULUK</span>
            <h2 className="section-title mb-8">
              Sosyal Sorumluluklarımızı Biliyoruz
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Topluma karşı sorumluluklarımızın farkındayız, toplum yararına çalışan sivil toplum 
              kuruluşlarının düzenli bağışcısı olarak yanındayız.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-on-scroll">
            {/* Social Impact */}
            <div className="card text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <i className="fas fa-heart text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 gradient-text">Toplumsal Etki</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Sürdürülebilir kalkınma hedeflerine katkı sağlayan projeler
              </p>
            </div>

            {/* Education */}
            <div className="card text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <i className="fas fa-book-open text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 gradient-text">Eğitim Desteği</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Gençlerin ve çalışanların gelişimine yatırım
              </p>
            </div>

            {/* Environment */}
            <div className="card text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <i className="fas fa-leaf text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 gradient-text">Çevre Bilinci</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Doğaya saygılı ve sürdürülebilir üretim anlayışı
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center animate-on-scroll">
            <div className="glass-effect p-8 md:p-12 rounded-3xl inline-block">
              <i className="fas fa-quote-left text-5xl text-accent/50 mx-auto mb-4"></i>
              <p className="text-2xl text-white/90 italic font-light mb-4">
                Topluma karşı sorumluluklarımızın farkındayız
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default SocialResponsibility;

