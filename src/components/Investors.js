import React from 'react';

const Investors = () => {
  const stats = [
    { number: '4', label: 'Ülkede Ofis', suffix: '' },
    { number: '200', label: 'Firmanın Tedarik Zinciri', suffix: '+' }
  ];

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll">
            <span className="section-subtitle">YATIRIMCILAR İÇİN</span>
            <h2 className="section-title mb-6">
              Global İş Ortaklıkları ve Yatırım Fırsatları
            </h2>
            <div className="space-y-6 text-white/80 text-lg">
              <p>
                Alsancak Grup; dünyanın neresinde olursa olsun, bilim ve aklın ortak kullanılması ile 
                Türkiye'de kendi iş kollarına uygun veya farklı konularda yatırım yapmaya veya iş 
                ortaklığına açık bir şirkettir.
              </p>
              <p>
                Ülkemize ve Dünyadaki insanlığa yapılacak her olumlu yatırımın bir parçası olmayı ve 
                bu yeteneklerin geliştirilip geleceğe taşınmasını hedefleyip, yatırımcılar ile birlikte 
                önerilen projenin gerçekleşmesi için maddi ve insan gücünü paylaşmaya açıktır.
              </p>
            </div>

            <div className="mt-10">
              <a href="#contact" className="btn-primary">
                İş Ortaklığı Başvurusu
              </a>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-on-scroll space-y-6">
            {/* Global Presence */}
            <div className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold gradient-text mb-4">Global Varlık</h3>
              <p className="text-white/70 mb-6">
                Yurtiçi ve yurtdışında birçok firmanın tedarik zincirinde önemli bir rol oynayan 
                ALSANCAK GRUP; 4 farklı ülkede ofislere sahiptir.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/20 rounded-full text-accent text-sm">🇺🇸 Amerika</span>
                <span className="px-4 py-2 bg-accent/20 rounded-full text-accent text-sm">🇮🇱 İsrail</span>
                <span className="px-4 py-2 bg-accent/20 rounded-full text-accent text-sm">🇮🇳 Hindistan</span>
                <span className="px-4 py-2 bg-accent/20 rounded-full text-accent text-sm">🇮🇹 İtalya</span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="glass-effect p-6 rounded-2xl border-l-4 border-accent">
              <h4 className="font-bold text-xl mb-2 text-accent">Yatırım Felsefemiz</h4>
              <p className="text-white/70">
                Bilim ve aklın ortak kullanılması ile sürdürülebilir ve insanlığa faydalı projelere 
                yatırım yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Investors;

