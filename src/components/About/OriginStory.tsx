import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import OriginPhotoBlock from './OriginPhotoBlock';

const AnimatedStat = ({ endVal, isFloat, label, isAccent }: { endVal: number, isFloat?: boolean, label: string, isAccent?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setVal(easeOut * endVal);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }, [isInView, endVal]);

  const displayVal = isFloat ? val.toFixed(1) : Math.floor(val).toString();

  return (
    <div ref={ref} className="flex-1 px-0 md:px-[24px] border-r-0 md:border-r border-[#1a1a1a]/12 last:border-r-0 flex flex-col py-4 md:py-0">
      <span
        className="text-[52px] md:text-[72px] leading-[1]"
        style={{ fontFamily: 'Bebas Neue', color: isAccent ? '#e8432d' : '#1a1a1a' }}
      >
        {displayVal}
      </span>
      <span className="text-[10px] uppercase tracking-[0.12em] text-[#1a1a1a]/50 mt-[4px]" style={{ fontFamily: 'Space Mono' }}>
        {label}
      </span>
    </div>
  );
};

const OriginStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f0ede8] overflow-hidden min-h-[100vh] px-[24px] py-[80px] md:px-[6vw] md:py-[120px]"
    >
      {/* Background Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 whitespace-nowrap text-[#1a1a1a]/[0.03]"
        style={{ fontFamily: 'Bebas Neue', fontSize: '38vw' }}
      >
        DESIGN
      </div>

      {/* Poster Label */}
      <div
        className="absolute top-[32px] right-[32px] hidden md:block text-[#1a1a1a]/30 uppercase tracking-[0.2em] text-[10px] z-10"
        style={{ fontFamily: 'Space Mono' }}
      >
        (01) ORIGIN STORY
      </div>

      {/* PART 1 — HEADLINE */}
      <div className="relative block z-10">
        <motion.span
          className="block text-[#1a1a1a] lowercase tracking-[-0.03em] leading-[0.8] text-[clamp(120px,18vw,200px)]"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
        >
          i
        </motion.span>

        <motion.span
          className="block text-[#1a1a1a] italic tracking-[-0.01em] leading-[0.85] text-[clamp(90px,14vw,160px)] mt-[-16px] md:mt-[-24px]"
          style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
        >
          didn't
        </motion.span>

        <motion.span
          className="block text-[#1a1a1a] lowercase tracking-[-0.03em] leading-[0.85] text-[clamp(100px,15vw,175px)] mt-[-11px] md:mt-[-16px]"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.22 }}
        >
          choose
        </motion.span>

        <motion.span
          className="block text-[#e8432d] italic tracking-[-0.02em] leading-[0.8] text-[clamp(110px,18vw,210px)] mt-[-14px] md:mt-[-20px] ml-[-4px] md:ml-[-6px]"
          style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.32 }}
        >
          design.
        </motion.span>

        {/* Floating Annotation */}
        <motion.div
          className="hidden md:flex absolute top-[6%] right-[6%] flex-col gap-[4px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <svg width="40" height="8" viewBox="0 0 40 8">
            <line x1="0" y1="4" x2="34" y2="4" stroke="#e8432d" strokeWidth="1.5" />
            <polyline points="30,1 36,4 30,7" stroke="#e8432d" strokeWidth="1.5" fill="none" />
          </svg>
          <div className="text-[#1a1a1a]/45 uppercase tracking-[0.15em] text-[10px] leading-[1.7]" style={{ fontFamily: 'Space Mono' }}>
            <div>THE CONCEPT</div>
            <div>OF DESIGN?</div>
          </div>
        </motion.div>

        {/* Sub-line */}
        <motion.div
          className="flex items-center gap-[10px] mt-[28px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <svg width="32" height="8" viewBox="0 0 32 8">
            <line x1="32" y1="4" x2="6" y2="4" stroke="#1a1a1a" strokeWidth="1.5" />
            <polyline points="10,1 4,4 10,7" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
          </svg>
          <div className="text-[#1a1a1a] uppercase tracking-[0.2em] text-[12px]" style={{ fontFamily: 'Space Mono' }}>
            design chose <strong className="font-bold underline decoration-[#1a1a1a]/30 underline-offset-4">me.</strong>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM RULE */}
      <motion.div
        className="flex flex-row items-center gap-[24px] mt-[64px] z-10 relative overflow-hidden"
      >
        <motion.div
          className="h-[1px] bg-[#1a1a1a]/15 origin-left flex items-center justify-end"
          initial={{ width: '0%' }}
          animate={isInView ? { width: '100%' } : { width: '0%' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        >
          <svg width="20" height="8" viewBox="0 0 20 8" className="translate-x-[18px]">
            <polyline points="14,1 18,4 14,7" stroke="#e8432d" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>
        <motion.div
          className="text-[#1a1a1a]/40 uppercase tracking-[0.35em] text-[12px] whitespace-nowrap" style={{ fontFamily: 'Space Mono' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          WATCH THIS SPACE.
        </motion.div>
      </motion.div>

      {/* PART 2 — BODY BLOCK & PHOTO BLOCK */}
      <div className="mt-[80px] grid grid-cols-1 md:grid-cols-[55%_45%] gap-y-[48px] md:gap-x-[40px] lg:gap-x-[80px] z-10 relative">
        {/* Cell 1: Body & Pull Quote */}
        <div className="flex flex-col md:col-start-1 md:row-start-1">
          <motion.p
            className="text-[#1a1a1a] leading-[1.9] text-[17px] max-w-[540px] font-normal"
            style={{ fontFamily: 'DM Sans' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Long before Figma, there was a sketchbook. I was always the kid
            making things look good, winning art competitions in school,
            obsessing over how things felt, not just how they worked.
            Then I became a software engineer. 2.6 years at AVASOFT, writing code, shipping products, learning how things break in
            production. In 2025, I picked up Figma. I never put it down.
            3 case studies later, I realised this was always where I was headed.
          </motion.p>

          <div className="mt-[56px] pl-[24px] relative flex flex-col items-start">
            <motion.span
              className="block text-[#1a1a1a] font-bold leading-[1.1] text-[clamp(24px,6vw,36px)] md:text-[clamp(28px,4vw,52px)] relative"
              style={{ fontFamily: 'DM Sans' }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-[#e8432d]" />
              an artist's eye.
            </motion.span>

            <motion.span
              className="block italic font-bold leading-[1.1] text-[clamp(24px,6vw,36px)] md:text-[clamp(28px,4vw,52px)] text-[#f0ede8] relative p-[4px_12px_4px_8px] ml-[-8px] mt-[4px]"
              style={{ fontFamily: 'DM Sans' }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.42 }}
            >
              <div className="absolute inset-0 bg-[#e8432d] z-[-1]" />
              an engineer's brain.
              <div className="absolute right-[-16px] bottom-[-16px] w-[14px] h-[14px] rounded-full bg-[#e8432d]" />
            </motion.span>

            <motion.span
              className="block text-[#1a1a1a]/50 font-normal text-[16px] mt-[12px] tracking-[0.01em]"
              style={{ fontFamily: 'DM Sans' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              a designer who ships.
            </motion.span>
          </div>
        </div>

        {/* Cell 2: Photo Block (Right column on desktop, middle on mobile) */}
        <div className="flex items-start justify-center pt-0 md:pt-[40px] md:sticky md:top-[100px] h-max md:col-start-2 md:row-start-1 md:row-span-2">
          <OriginPhotoBlock />
        </div>

        {/* Cell 3: Stats Row (Below body on desktop, bottom on mobile) */}
        <div className="w-full max-w-[540px] flex flex-row flex-wrap md:flex-nowrap items-start justify-between border-t border-[#1a1a1a]/12 pt-4 md:border-t-0 md:pt-0 mt-[16px] md:mt-[64px] md:col-start-1 md:row-start-2">
          <AnimatedStat endVal={3} label="case studies" isAccent={true} />
          <AnimatedStat endVal={2.6} isFloat={true} label="yrs engineering" />
          <AnimatedStat endVal={0} label="unrealistic specs" />
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
