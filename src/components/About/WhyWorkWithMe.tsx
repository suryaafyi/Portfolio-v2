import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const cards = [
  {
    id: "01",
    title: "RESEARCH FIRST",
    body: "I start with understanding people, not pixels. Every design decision has a reason rooted in real user behavior, not assumptions. No guesswork. No vibes-based design.",
    annotation: "→ empathy is the actual tool~"
  },
  {
    id: "02",
    title: "DEV FRIENDLY",
    body: "2.6 years writing code means I speak developer. I know what's feasible, what breaks in production, and how to design things that actually ship without 47 revision rounds.",
    annotation: "→ i've been on both sides~"
  },
  {
    id: "03",
    title: "FAST EXECUTOR",
    body: "I move fast without breaking things. 3 case studies from scratch in under a year — research, design, prototype, test. Full cycle, no hand-holding required.",
    annotation: "→ ships at 2am. literally~"
  },
  {
    id: "04",
    title: "BIG PICTURE",
    body: "I don't just design the screen in front of me. I think about the flow, the system, the edge cases, and the user who's exhausted at 11pm trying to get something done.",
    annotation: "→ zoom out. always~"
  }
];

const WhyWorkWithMe = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:surya@email.com';
    }
  };

  return (
    <section 
      id="why-work-with-me"
      ref={sectionRef}
      className="relative w-full bg-[#f0ede8] overflow-hidden min-h-[100vh] px-[24px] py-[80px] md:px-[6vw] md:py-[120px]"
    >
      <style>{`
        @keyframes floatUD {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-7px) rotate(var(--rot, 0deg)); }
        }
        @keyframes spin {
          from { transform: rotate(-15deg); }
          to { transform: rotate(345deg); }
        }
        .animate-floatUD { animation: floatUD ease-in-out infinite; }
        .animate-spin-slow { animation: spin 14s linear infinite; }
      `}</style>

      {/* BACKGROUND GHOST TEXT */}
      <div 
        className="absolute top-[8%] left-[-2%] pointer-events-none select-none z-0 whitespace-nowrap text-[#1a1a1a]/[0.03]"
        style={{ fontFamily: 'Bebas Neue', fontSize: '32vw' }}
      >
        WHY
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* SECTION LABEL */}
        <div 
          className="text-[#1a1a1a]/40 uppercase tracking-[0.2em] text-[11px] mb-[48px]"
          style={{ fontFamily: 'Space Mono' }}
        >
          WHY WORK WITH ME
        </div>

        {/* HEADLINE BLOCK */}
        <div className="relative block">
          <motion.span 
            className="block text-[#1a1a1a] uppercase leading-[0.85] text-[clamp(56px,9vw,110px)] tracking-[-0.02em] relative z-10"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
          >
            I DON'T JUST
          </motion.span>
          <motion.span 
            className="block text-[#1a1a1a] italic leading-[0.85] text-[clamp(52px,8.5vw,104px)] tracking-[-0.01em] mt-[-8px] relative z-10"
            style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
          >
            design screens.
          </motion.span>
          <motion.span 
            className="block text-[#1a1a1a] uppercase leading-[0.85] text-[clamp(64px,10vw,124px)] mt-[-10px] relative z-10"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }}
          >
            I SOLVE
          </motion.span>
          <motion.span 
            className="block text-[#e8432d] italic leading-[0.82] text-[clamp(72px,11.5vw,140px)] tracking-[-0.02em] mt-[-12px] relative z-10"
            style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.36 }}
          >
            problems.
          </motion.span>

          {/* ANNOTATION STICKERS */}
          {isInView && (
            <>
              <motion.div
                className="hidden md:flex absolute top-0 left-[34%] bg-[#f5c842] rounded-[8px] px-[16px] py-[8px] text-[#1a1a1a] text-[13px] font-medium z-20 animate-floatUD"
                style={{ fontFamily: 'DM Sans', '--rot': '-6deg', animationDuration: '4s' } as React.CSSProperties}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.4 }}
              >
                here's what you actually get.
              </motion.div>

              <motion.div
                className="absolute top-[35%] md:top-[28%] right-[2%] md:right-[6%] bg-[#c8d8f0] rounded-[12px] px-[16px] py-[10px] text-[#1a1a1a] text-[12px] font-normal z-20 animate-floatUD scale-[0.75] md:scale-100 origin-right"
                style={{ fontFamily: 'DM Sans', '--rot': '4deg', animationDuration: '5s', animationDelay: '0.6s' } as React.CSSProperties}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: window.innerWidth < 768 ? 0.75 : 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.5 }}
              >
                no fluff. just work.
              </motion.div>

              <motion.div
                className="hidden md:flex absolute bottom-[-20px] right-[22%] bg-[#e8432d] rounded-full w-[82px] h-[82px] items-center justify-center text-center text-[#f0ede8] text-[7px] uppercase tracking-[0.12em] z-20 animate-spin-slow"
                style={{ fontFamily: 'Space Mono' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.6 }}
              >
                IT'S THE REAL DEAL
              </motion.div>
            </>
          )}
        </div>

        {/* CARDS SECTION */}
        <motion.div 
          className="mt-[100px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {cards.map((card, index) => {
            const isOpen = activeCard === index;
            const isLast = index === cards.length - 1;

            return (
              <motion.div 
                layout
                key={card.id}
                onClick={() => toggleCard(index)}
                className={`w-full group ${isLast && !isOpen ? 'border-b border-[#1a1a1a]/12' : ''}`}
                style={{
                  borderTop: isOpen ? 'none' : '1px solid rgba(26,26,26,0.12)',
                  backgroundColor: isOpen ? '#1a1a1a' : 'transparent',
                  borderRadius: isOpen ? '20px' : '0',
                  margin: isOpen ? '6px 0' : '0',
                  overflow: 'hidden',
                  cursor: isOpen ? 'default' : 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <motion.div layout className={`w-full ${!isOpen && 'hover:bg-[#1a1a1a]/[0.03]'}`}>
                  {isOpen ? (
                    <div className="p-[24px] md:p-[52px] lg:p-[40px] xl:p-[52px]">
                      {/* TOP ROW inside expanded card */}
                      <div className="flex justify-between items-start">
                        <div className="flex flex-row items-center gap-[20px]">
                          <span className="text-[#f0ede8]/25 text-[11px] font-mono mt-2" style={{ fontFamily: 'Space Mono' }}>
                            {card.id}
                          </span>
                          <span 
                            className="text-[#f0ede8] uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(40px,6vw,80px)]"
                            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                          >
                            {card.title}
                          </span>
                        </div>
                        <div 
                          className="text-[#f0ede8]/30 text-[32px] font-light leading-[0.5] pb-[4px] cursor-pointer hover:text-[#f0ede8] transition-colors"
                          style={{ fontFamily: 'DM Sans' }}
                          onClick={(e) => { e.stopPropagation(); toggleCard(index); }}
                        >
                          -
                        </div>
                      </div>

                      {/* DIVIDER */}
                      <div className="w-full h-[1px] bg-[#f0ede8]/[0.08] my-[28px]" />

                      {/* CONTENT */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                          >
                            <p 
                              className="text-[#f0ede8]/80 text-[20px] md:text-[clamp(22px,2.8vw,32px)] leading-[1.65] max-w-[700px] not-italic font-normal"
                              style={{ fontFamily: 'Gebuk, sans-serif' }}
                            >
                              {card.body}
                            </p>
                            <span 
                              className="inline-block text-[#e8432d] text-[18px] mt-[36px] -rotate-1"
                              style={{ fontFamily: 'Caveat', transform: 'rotate(-1.5deg)' }}
                            >
                              {card.annotation}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="h-[60px] md:h-[72px] flex items-center justify-between px-[8px]">
                      <div className="flex flex-row items-center gap-[20px]">
                        <span className="text-[#1a1a1a]/25 text-[11px] font-mono" style={{ fontFamily: 'Space Mono' }}>
                          {card.id}
                        </span>
                        <span 
                          className="text-[#1a1a1a] uppercase leading-[1] tracking-[-0.02em] text-[clamp(28px,4.5vw,56px)] group-hover:text-[#e8432d] transition-colors duration-200"
                          style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                        >
                          {card.title}
                        </span>
                      </div>
                      <div 
                        className="text-[#1a1a1a]/30 text-[28px] transition-transform duration-300 group-hover:text-[#1a1a1a]/50"
                        style={{ fontFamily: 'DM Sans', transform: 'rotate(0deg)' }}
                      >
                        +
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CLOSING LINE */}
        <motion.div 
          className="mt-[72px] pt-[40px] border-t border-[#1a1a1a]/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-[24px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div 
            className="text-[#1a1a1a]/55 italic text-[clamp(20px,2.5vw,30px)]"
            style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700 }}
          >
            an artist's eye. an engineer's brain.
          </div>
          <button 
            onClick={handleCtaClick}
            className="w-full md:w-auto px-[30px] py-[13px] rounded-[100px] border-[1.5px] border-[#1a1a1a] bg-transparent text-[#1a1a1a] text-[14px] font-medium transition-all duration-250 ease-out hover:bg-[#e8432d] hover:border-[#e8432d] hover:text-[#f0ede8] text-center cursor-pointer"
            style={{ fontFamily: 'DM Sans' }}
          >
            Let's build something →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
