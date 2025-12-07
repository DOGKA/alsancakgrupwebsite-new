import React from 'react';

const ImageMockup = ({ 
  width = '100%', 
  height = '300px', 
  text = 'NO IMAGE',
  icon = 'image',
  gradient = 'from-accent/30 via-blue-500/20 to-purple-500/30',
  className = '' 
}) => {
  const icons = {
    image: (
      <svg className="w-16 h-16 md:w-20 md:h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    logo: (
      <svg className="w-16 h-16 md:w-20 md:h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    person: (
      <svg className="w-16 h-16 md:w-20 md:h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    building: (
      <svg className="w-16 h-16 md:w-20 md:h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  };

  return (
    <div 
      className={`relative rounded-2xl overflow-hidden glass-effect ${className}`}
      style={{ width, height: height === 'auto' ? 'auto' : height }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {icons[icon]}
        <div className="mt-4 text-white/40 text-sm md:text-base font-semibold tracking-wider">
          {text}
        </div>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full"></div>
    </div>
  );
};

export default ImageMockup;

