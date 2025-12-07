import React from 'react';

const Testimonials = () => {
  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">REFERANSLAR</span>
          <h2 className="section-title mb-6">
            Profesyonel güvenlik ve savunma çözümlerimiz hakkında müşterilerimizin yorumlarını keşfedin
          </h2>
        </div>

        {/* Stats */}
        <div className="flex justify-center mb-16 animate-on-scroll">
          <div className="glass-effect px-12 py-8 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="text-center border-r border-white/20 pr-8">
                <div className="text-5xl font-bold gradient-text">0+</div>
                <div className="text-white/70 mt-2">Mutlu Müşteri</div>
              </div>
              <div className="flex gap-1 pl-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <div className="glass-effect p-8 md:p-12 rounded-3xl text-center">
            <svg className="w-16 h-16 text-accent mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Güvenilir İş Ortağınız
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Alsancak Grup olarak, müşterilerimizin güvenlik ve mühendislik ihtiyaçlarına özel 
              çözümler sunarak, sektörde güvenilir bir iş ortağı olma misyonumuzu sürdürüyoruz.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-white/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Profesyonel Hizmet</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>18+ Yıllık Deneyim</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Global Hizmet</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <a href="#contact" className="btn-primary">
            Bizimle İletişime Geçin
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
    </section>
  );
};

export default Testimonials;

