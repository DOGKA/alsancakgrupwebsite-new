import React from 'react';

const ScrollingText = ({ text, direction = 'left', className = '', textClass = 'text-white/10' }) => {
  const scrollClass = direction === 'left' ? 'scroll-text' : 'scroll-text-reverse';
  
  return (
    <div className={`overflow-hidden py-8 ${className}`}>
      <div className={scrollClass}>
        <span className={`text-6xl md:text-8xl font-bold ${textClass} mr-8`}>
          {text}
        </span>
        <span className={`text-6xl md:text-8xl font-bold ${textClass} mr-8`}>
          {text}
        </span>
        <span className={`text-6xl md:text-8xl font-bold ${textClass} mr-8`}>
          {text}
        </span>
        <span className={`text-6xl md:text-8xl font-bold ${textClass} mr-8`}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;

