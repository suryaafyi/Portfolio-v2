import React, { useState } from 'react';
import { motion } from 'framer-motion';

const doodles = [
  {
    id: 1,
    type: 'text',
    content: 'SURYA A',
    style: {
      fontFamily: 'Bebas Neue',
      fontSize: '52px',
      color: '#e8432d',
      WebkitTextStroke: '2px #1a1a1a',
      top: '12%',
      left: '8%',
    },
    rot: '-8deg',
    anim: 'floatUD',
    dur: '4s',
  },
  {
    id: 2,
    type: 'text',
    content: 'EX-ENGINEER →',
    style: {
      fontFamily: 'Space Mono',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1a1a1a',
      border: '2px solid #1a1a1a',
      backgroundColor: 'transparent',
      borderRadius: '4px',
      padding: '4px 10px',
      top: '26%',
      left: '6%',
    },
    rot: '2deg',
    anim: 'floatLR',
    dur: '5s',
  },
  {
    id: 3,
    type: 'svg',
    svg: (
      <svg width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 4L6 34H24L20 60L42 26H26L26 4Z" fill="#f5c842" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '15%', left: '28%' },
    rot: '-10deg',
    anim: 'floatUD',
    dur: '3.5s',
  },
  {
    id: 4,
    type: 'text',
    content: 'SHIPS AT 2AM',
    style: {
      fontFamily: 'Caveat, cursive',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1a1a1a',
      top: '40%',
      left: '5%',
    },
    rot: '-6deg',
    anim: 'floatUD',
    dur: '6s',
  },
  {
    id: 5,
    type: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L20.3262 10.7639L30 12.1722L23 18.995L24.6525 28.636L16 24.083L7.34752 28.636L9 18.995L2 12.1722L11.6738 10.7639L16 2Z" fill="#e8432d" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '28%', right: '16%', left: 'auto' },
    rot: '15deg',
    anim: 'floatSpin',
    dur: '7s',
  },
  {
    id: 6,
    type: 'svg',
    svg: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L20.3262 10.7639L30 12.1722L23 18.995L24.6525 28.636L16 24.083L7.34752 28.636L9 18.995L2 12.1722L11.6738 10.7639L16 2Z" fill="#7df9ff" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '50%', left: '22%' },
    rot: '-8deg',
    anim: 'floatUD',
    dur: '4.5s',
  },
  {
    id: 7,
    type: 'text',
    content: 'ART NERD',
    style: {
      fontFamily: 'Bebas Neue',
      fontSize: '38px',
      color: 'transparent',
      WebkitTextStroke: '2px #1a1a1a',
      top: '55%',
      left: '8%',
    },
    rot: '3deg',
    anim: 'floatLR',
    dur: '5.5s',
  },
  {
    id: 8,
    type: 'svg',
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 22C22 22 24 16 30 18C36 20 34 28 28 32C22 36 12 34 10 26C8 18 16 6 28 8C40 10 44 26 36 38" stroke="#168b9d" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    style: { top: '20%', right: '28%', left: 'auto' },
    rot: '0deg',
    anim: 'floatSpin',
    dur: '8s',
  },
  {
    id: 9,
    type: 'text',
    content: 'BATMAN HOURS',
    style: {
      fontFamily: 'Caveat, cursive',
      fontSize: '24px',
      color: '#e8432d',
      top: '72%',
      left: '10%',
    },
    rot: '-3deg',
    anim: 'floatUD',
    dur: '4s',
  },
  {
    id: 10,
    type: 'svg',
    svg: (
      <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15C15 5 45 5 58 15M58 15C50 12 45 15 45 15M58 15C58 15 52 20 48 24" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '55%', right: '28%', left: 'auto' },
    rot: '20deg',
    anim: 'floatUD',
    dur: '6s',
  },
  {
    id: 11,
    type: 'text',
    content: 'FIGMA + CODE',
    style: {
      fontFamily: 'Space Mono',
      fontSize: '14px',
      color: '#f0ede8',
      backgroundColor: '#1a1a1a',
      padding: '5px 12px',
      borderRadius: '100px',
      top: '14%',
      right: '12%',
      left: 'auto',
    },
    rot: '6deg',
    anim: 'floatUD',
    dur: '5s',
  },
  {
    id: 12,
    type: 'svg',
    svg: (
      <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8H24C26.2091 8 28 9.79086 28 12V24C28 28.4183 24.4183 32 20 32H12C7.58172 32 4 28.4183 4 24V12C4 9.79086 5.79086 8 8 8Z" fill="#e8e4de" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
        <path d="M28 14H30C32.2091 14 34 15.7909 34 18C34 20.2091 32.2091 22 30 22H28" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C12 2 12 6 10 6M16 2C16 2 16 6 14 6M20 2C20 2 20 6 18 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    style: { top: '80%', right: '22%', left: 'auto' },
    rot: '8deg',
    anim: 'floatUD',
    dur: '3s',
  },
  {
    id: 13,
    type: 'text',
    content: '22K MINS 🎧',
    style: {
      fontFamily: 'Caveat, cursive',
      fontSize: '22px',
      color: '#1a1a1a',
      backgroundColor: '#f5c842',
      padding: '4px 10px',
      borderRadius: '6px',
      top: '44%',
      right: '10%',
      left: 'auto',
    },
    rot: '-4deg',
    anim: 'floatUD',
    dur: '5s',
  },
  {
    id: 14,
    type: 'svg',
    svg: (
      <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6L10 2L18 10L26 2L34 10L42 2L50 10L58 6" stroke="#e8432d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '20%', left: '22%' },
    rot: '-5deg',
    anim: 'floatLR',
    dur: '4s',
  },
  {
    id: 15,
    type: 'text',
    content: 'DESIGNS THAT SHIP',
    style: {
      fontFamily: 'Bebas Neue',
      fontSize: '30px',
      color: '#e8432d',
      top: '68%',
      right: '8%',
      left: 'auto',
    },
    rot: '-2deg',
    anim: 'floatUD',
    dur: '7s',
  },
];

const AboutHeroImage = () => {
  const [imgError, setImgError] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-[#f0ede8]">
      <style>{`
        @keyframes floatUD {
          0%, 100% { transform: translateY(0) rotate(var(--rot)); }
          50% { transform: translateY(-8px) rotate(var(--rot)); }
        }
        @keyframes floatLR {
          0%, 100% { transform: translateX(0) rotate(var(--rot)); }
          50% { transform: translateX(-6px) rotate(var(--rot)); }
        }
        @keyframes floatSpin {
          0% { transform: rotate(var(--rot)); }
          100% { transform: rotate(calc(var(--rot) + 360deg)); }
        }
        .hero-doodle {
          position: absolute;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          white-space: nowrap;
        }
        .hero-image-vignette::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 40%, rgba(240,237,232,0.3) 100%);
          pointer-events: none;
        }
      `}</style>

      {/* Background Name Overlay */}
      <div
        className="absolute bottom-[60px] left-[-20px] z-[5] pointer-events-none select-none text-[#1a1a1a] opacity-[0.08]"
        style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(18vw, 24vw, 24vw)', lineHeight: 0.8 }}
      >
        SURYA A
      </div>

      {/* Photo / Placeholder */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center hero-image-vignette z-[6]">
        {!imgError ? (
          <img
            src="/surya-about.PNG"
            alt="Surya"
            className="w-full h-full object-cover object-top md:object-[center_top]"
            style={{ filter: 'grayscale(100%) contrast(1.1)' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e8e4de] to-[#d4cfc8]">
            <span className="font-mono text-[12px] text-[#1a1a1a]/30 tracking-widest uppercase">
              [ SURYA'S PHOTO GOES HERE ]
            </span>
          </div>
        )}
      </div>

      {/* Doodles Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center md:block transform scale-70 md:scale-100 origin-center md:origin-top-left">
        <div className="relative w-full h-full max-w-[1200px] mx-auto">
          {doodles.map((d, i) => (
            <motion.div
              key={d.id}
              className="hero-doodle"
              style={{
                ...d.style,
                '--rot': d.rot,
                animationName: d.anim,
                animationDuration: d.dur,
              } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: 0.3 + i * 0.08,
              }}
            >
              {d.type === 'text' ? d.content : d.svg}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity: scrollY > 50 ? 0 : 1, transition: 'opacity 0.3s ease' }}
      >
        scroll to know more ↓
      </motion.div>
    </section>
  );
};

export default AboutHeroImage;
