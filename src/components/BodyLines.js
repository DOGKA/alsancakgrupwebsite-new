import React from 'react';

const BodyLines = () => {
  return (
    <>
      {/* Vertical Grid Lines */}
    <div className="body-lines">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="body-line"
            style={{
              left: `${(i + 1) * (100 / 7)}%`,
            }}
          />
        ))}
      </div>
      
      {/* Horizontal gradient accents */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent z-0" />
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent z-0" />
      
      {/* Corner accents */}
      <div className="fixed top-0 left-0 w-32 h-32 opacity-30 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent/30 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-accent/30 to-transparent" />
      </div>
      
      <div className="fixed top-0 right-0 w-32 h-32 opacity-30 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-accent/30 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-accent/30 to-transparent" />
      </div>
      
      <div className="fixed bottom-0 left-0 w-32 h-32 opacity-30 pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-accent/30 to-transparent" />
      </div>
      
      <div className="fixed bottom-0 right-0 w-32 h-32 opacity-30 pointer-events-none z-0">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-accent/30 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-accent/30 to-transparent" />
    </div>
    </>
  );
};

export default BodyLines;
