import React from 'react';

const Sustainability = () => {
  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-subtitle">VİZYONUMUZ</span>
            <h2 className="section-title mb-6">
              Sürdürülebilir Bir Gelecek
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="card animate-on-scroll group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-500 rounded-2xl flex items-center justify-center mb-6 glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <i className="fas fa-bolt text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Misyonumuz</h3>
              <p className="text-white/80 leading-relaxed">
                Yüksek teknoloji ürünleri geliştirerek ülkemize yenilikçi değerler kazandıran, 
                bilgi paylaşımını teşvik eden, insanlığa faydalı olmayı hedefleyen; çevreye duyarlı 
                ve doğaya saygılı bir üretim anlayışını benimseyen bir ALSANCAK GRUP olmak.
              </p>
            </div>

            {/* Vision Card */}
            <div className="card animate-on-scroll group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <i className="fas fa-eye text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Vizyonumuz</h3>
              <p className="text-white/80 leading-relaxed">
                Sürdürülebilir yetenek havuzumuzdaki bilgi birikimiyle geleceğe yatırım yaparak; 
                üretmeyi, geliştirmeyi ve paylaşmayı temel bir sorumluluk olarak gören, teknolojiyle 
                insanı buluşturan bir topluluk olma yolunda ilerlemek.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 glass-effect p-8 md:p-12 rounded-3xl animate-on-scroll">
            <h3 className="text-3xl font-bold text-center mb-10 gradient-text">
              Temel Değerlerimiz
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'fa-seedling', title: 'Sürdürülebilirlik', desc: 'Çevreye saygılı üretim', gradient: 'from-green-500 to-emerald-500' },
                { icon: 'fa-lightbulb', title: 'İnovasyon', desc: 'Yenilikçi çözümler', gradient: 'from-yellow-500 to-orange-500' },
                { icon: 'fa-handshake', title: 'İşbirliği', desc: 'Bilgi paylaşımı', gradient: 'from-blue-500 to-cyan-500' },
                { icon: 'fa-bullseye', title: 'Mükemmellik', desc: 'Yüksek kalite standartları', gradient: 'from-purple-500 to-pink-500' }
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 glow group-hover:rotate-12 transition-all duration-300`}>
                    <i className={`fas ${value.icon} text-2xl text-white`}></i>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-accent">{value.title}</h4>
                  <p className="text-white/60 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center animate-on-scroll">
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic max-w-3xl mx-auto">
              "Teknolojiyle insanı buluşturan, geleceğe değer katan bir topluluk"
            </blockquote>
            <div className="mt-6 w-20 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
    </section>
  );
};

export default Sustainability;

