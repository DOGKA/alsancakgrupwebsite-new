import React, { useState } from 'react';
import ImageMockup from './ImageMockup';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-subtitle">KURUMSAL VİDEO</span>
            <h2 className="section-title mb-6">
              Alsancak Grup'u Tanıyın
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              18 yıllık deneyimimiz, global operasyonlarımız ve yenilikçi projelerimiz
            </p>
          </div>

          {/* Video Player Mockup */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-video rounded-3xl overflow-hidden relative group">
              {/* Video Thumbnail Mockup */}
              <ImageMockup 
                height="100%"
                text="KURUMSAL TANITIM VİDEOSU"
                icon="image"
                gradient="from-accent/40 via-blue-500/30 to-purple-500/40"
              />

              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center z-10 group"
              >
                <div className="relative">
                  {/* Pulse Rings */}
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-accent/30 rounded-full pulse-ring"></div>
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-accent/20 rounded-full pulse-ring" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Play Button */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Video Duration Badge */}
              <div className="absolute bottom-4 right-4 z-10">
                <div className="glass-effect px-4 py-2 rounded-lg text-white font-semibold text-sm">
                  <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  5:30
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="glass-effect p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2007</div>
                <div className="text-white/70">Kuruluş Yılı</div>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-white/70">Tamamlanan Proje</div>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-white/70">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>

          {/* Features Below Video */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 gradient-text">Global Operasyonlar</h4>
                <p className="text-white/70">7+ ülkede başarılı operasyonlar yürüttük</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 gradient-text">Sertifikasyonlar</h4>
                <p className="text-white/70">Uluslararası standartlarda sertifikalı üretim</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
    </section>
  );
};

export default VideoSection;

