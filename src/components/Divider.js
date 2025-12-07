import React from 'react';
import { motion } from 'framer-motion';

const Divider = ({ withText = false, text = '', bgClass = 'bg-dark', textClass = 'text-light-500' }) => {
  
  if (withText) {
    return (
      <section className={`relative py-12 overflow-hidden ${bgClass}`}>
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        {/* Marquee Container */}
        <div className="relative marquee-container">
          <motion.div 
            className="marquee-content"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear'
              }
            }}
          >
            {/* Duplicate text for seamless loop */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-8">
                {text.split('—').map((segment, idx) => (
                  <React.Fragment key={idx}>
                    <span className={`text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap ${textClass} opacity-20 hover:opacity-40 transition-opacity duration-500`}>
                      {segment.trim()}
                    </span>
                    {idx < text.split('—').length - 1 && (
                      <span className="text-accent text-3xl">✦</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
      </section>
    );
  }

  // Simple line divider
  return (
    <section className={`relative py-8 ${bgClass}`}>
      <div className="container-custom">
        <div className="relative">
          {/* Main line with glow */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          
          {/* Center accent */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-accent rounded-full glow animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divider;
