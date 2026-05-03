import React, { useState } from 'react';
import { motion } from 'framer-motion';

const doodles = [
  {
    id: 1,
    type: 'custom',
    content: (
      <div className="relative">
        <div style={{ fontFamily: 'Caveat', fontSize: '36px', fontWeight: 700, color: '#e8432d' }}>Hello!</div>
      </div>
    ),
    style: { top: '-10px', left: '-24px', '--rot': '-12deg' } as React.CSSProperties,
    animClass: 'animate-floatUD',
    delay: 0.5,
  },
  {
    id: 2,
    type: 'svg',
    content: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(26,26,26,0.4)" strokeWidth="1">
        <path d="M60 0 A60 60 0 0 0 0 60" />
        <path d="M60 0 A40 40 0 0 0 20 60" />
        <path d="M60 0 A20 20 0 0 0 40 60" />
        <line x1="60" y1="0" x2="10" y2="50" />
        <line x1="60" y1="0" x2="30" y2="60" />
        <line x1="60" y1="0" x2="0" y2="30" />
        <line x1="60" y1="0" x2="50" y2="10" />
      </svg>
    ),
    style: { top: '-8px', right: '-8px' } as React.CSSProperties,
    animClass: '',
    delay: 0.57,
  },
  {
    id: 3,
    type: 'text',
    content: 'with great design...',
    style: { top: '8%', left: '-32px', '--rot': '-8deg', fontFamily: 'Caveat', fontSize: '16px', color: 'rgba(26,26,26,0.6)' } as React.CSSProperties,
    animClass: 'animate-floatUD-medium',
    delay: 0.5 + 0.5,
  },
  {
    id: 4,
    type: 'custom',
    content: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <g>
          <ellipse cx="12" cy="12" rx="6" ry="7" fill="#1a1a1a" />
          <ellipse cx="12" cy="7" rx="4" ry="3.5" fill="#1a1a1a" />
          <line x1="6" y1="9" x2="0" y2="6" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="6" y1="12" x2="0" y2="12" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="6" y1="15" x2="0" y2="18" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="18" y1="9" x2="24" y2="6" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="18" y1="12" x2="24" y2="12" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="18" y1="15" x2="24" y2="18" stroke="#1a1a1a" strokeWidth="1.5" />
          <ellipse cx="10" cy="7" rx="1.5" ry="1" fill="white" />
          <ellipse cx="14" cy="7" rx="1.5" ry="1" fill="white" />
        </g>
      </svg>
    ),
    style: { top: '22%', right: '-18px' } as React.CSSProperties,
    animClass: 'animate-wiggle-spider',
    delay: 0.5 + 1,
  },
  {
    id: 5,
    type: 'custom',
    content: (
      <div className="flex flex-col items-center origin-top animate-swing">
        <div className="w-[1px] h-[40px] bg-[#1a1a1a]/30" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <g>
            <ellipse cx="12" cy="12" rx="6" ry="7" fill="#1a1a1a" />
            <ellipse cx="12" cy="7" rx="4" ry="3.5" fill="#1a1a1a" />
            <line x1="6" y1="9" x2="0" y2="6" stroke="#1a1a1a" strokeWidth="1.5" />
            <line x1="6" y1="12" x2="0" y2="12" stroke="#1a1a1a" strokeWidth="1.5" />
            <line x1="6" y1="15" x2="0" y2="18" stroke="#1a1a1a" strokeWidth="1.5" />
            <line x1="18" y1="9" x2="24" y2="6" stroke="#1a1a1a" strokeWidth="1.5" />
            <line x1="18" y1="12" x2="24" y2="12" stroke="#1a1a1a" strokeWidth="1.5" />
            <line x1="18" y1="15" x2="24" y2="18" stroke="#1a1a1a" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    ),
    style: { top: '0', right: '18%' } as React.CSSProperties,
    animClass: '',
    delay: 0.5 + 0.28,
  },
  {
    id: 6,
    type: 'text',
    content: 'SHIPS AT 2AM',
    style: { top: '38%', right: '-28px', '--rot': '8deg', fontFamily: 'Space Mono', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', backgroundColor: '#f5c842', color: '#1a1a1a', padding: '4px 10px', borderRadius: '3px', border: '1.5px solid #1a1a1a' } as React.CSSProperties,
    animClass: 'animate-floatUD',
    delay: 0.5 + 0.8,
  },
  {
    id: 7,
    type: 'svg',
    content: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="#e8432d" stroke="#1a1a1a" strokeWidth="1.5">
        <path d="M16 2L20.3262 10.7639L30 12.1722L23 18.995L24.6525 28.636L16 24.083L7.34752 28.636L9 18.995L2 12.1722L11.6738 10.7639L16 2Z" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '55%', left: '-20px', '--rot': '-12deg' } as React.CSSProperties,
    animClass: 'animate-floatUD',
    delay: 0.5 + 0.4,
  },
  {
    id: 8,
    type: 'svg',
    content: (
      <svg width="18" height="18" viewBox="0 0 32 32" fill="#f5c842" stroke="#1a1a1a" strokeWidth="1.5">
        <path d="M16 2L20.3262 10.7639L30 12.1722L23 18.995L24.6525 28.636L16 24.083L7.34752 28.636L9 18.995L2 12.1722L11.6738 10.7639L16 2Z" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '65%', left: '-10px', '--rot': '10deg' } as React.CSSProperties,
    animClass: 'animate-floatUD-fast',
    delay: 0.5 + 1,
  },
  {
    id: 9,
    type: 'text',
    content: 'PRODUCT DESIGNER',
    style: { bottom: '22%', right: '-32px', '--rot': '-6deg', fontFamily: 'Space Mono', fontSize: '9px', textTransform: 'uppercase', backgroundColor: '#1a1a1a', color: '#f0ede8', padding: '3px 8px', borderRadius: '2px' } as React.CSSProperties,
    animClass: 'animate-floatUD',
    delay: 0.5 + 1.2,
  },
  {
    id: 11,
    type: 'text',
    content: 'CHENNAI',
    style: { bottom: '-4px', left: '50%', transform: 'translateX(-50%)', '--rot': '-2deg', fontFamily: 'Caveat', fontSize: '16px', color: 'rgba(26,26,26,0.5)' } as React.CSSProperties,
    animClass: 'animate-floatUD',
    delay: 0.5 + 0.7,
  },
];

const OriginPhotoBlock = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full max-w-[420px] relative mt-[40px] md:mt-0">
      <style>{`
        @keyframes floatUD {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-7px) rotate(var(--rot, 0deg)); }
        }
        @keyframes wiggleSpider {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes swing {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
        
        .animate-floatUD { animation: floatUD 4s ease-in-out infinite; }
        .animate-floatUD-fast { animation: floatUD 3.5s ease-in-out infinite; }
        .animate-floatUD-medium { animation: floatUD 5s ease-in-out infinite; }
        .animate-wiggle-spider { animation: wiggleSpider 2s ease-in-out infinite; }
        .animate-swing { animation: swing 3s ease-in-out infinite; transform-origin: top center; }
      `}</style>

      {/* Main Photo Card */}
      <motion.div 
        className="relative w-full aspect-[3/4] rounded-[16px] overflow-hidden"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      >
        {!imgError ? (
          <img 
            src="/surya-spidy.png" 
            alt="Surya" 
            className="absolute inset-0 w-full h-full object-cover object-top z-[1]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div 
            className="absolute inset-0 w-full h-full flex items-center justify-center z-[1]"
            style={{ background: 'linear-gradient(160deg, #e8c87a 0%, #f5a623 100%)' }}
          >
            <span className="font-mono text-[11px] text-[#1a1a1a]/30 uppercase tracking-widest">
              [ YOUR PHOTO HERE ]
            </span>
          </div>
        )}
      </motion.div>

      {/* Doodles Layer */}
      <div className="absolute inset-[-20px] z-10 pointer-events-none">
        {doodles.map((doodle) => (
          <motion.div
            key={doodle.id}
            className={`absolute ${doodle.animClass} ${doodle.id === 11 ? '!translate-x-0 !left-1/2 !transform-none' : ''}`}
            style={{ 
              ...doodle.style, 
              ...(doodle.id === 11 ? { animation: 'none' } : {})
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: doodle.delay }}
          >
            {doodle.id === 11 ? (
              <div className="animate-floatUD" style={{ '--rot': doodle.style['--rot'] } as React.CSSProperties}>
                <div style={{ transform: 'translateX(-50%)' }}>
                  {doodle.content}
                </div>
              </div>
            ) : (
              doodle.content
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OriginPhotoBlock;
