import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Terminal, Layers, ArrowUpRight } from 'lucide-react';

const ScrambleText = ({ text, startAnimation = true }: { text: string, startAnimation?: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

  useEffect(() => {
    if (!startAnimation) return;

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev =>
        text.split('').map((char, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, startAnimation]);

  return <span className="font-display">{displayText}</span>;
};

const LiveBuildsCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      icon: <Globe size={20} />,
      heading: "Open for Projects",
      bullets: ["Business Websites", "Web Applications", "Design + Dev Bundles"],
      label: "DESIGN · CODE · SHIP"
    },
    {
      icon: <Terminal size={20} />,
      heading: "Building",
      bullets: ["Waaah — AI baby cry decoder", "surya.fyi — this portfolio", "bybharath — client work"],
      label: "THREE SHIPPED THIS MONTH"
    },
    {
      icon: <Layers size={20} />,
      heading: "The Stack",
      bullets: ["React · Next.js · TypeScript", "Node.js · Express · PostgreSQL", "Gemini AI · REST APIs · Vercel · Git"],
      label: "FULL STACK. FULL OWNERSHIP. FIGMA TO PRODUCTION."
    },
    {
      icon: <ArrowUpRight size={20} />,
      heading: "Got a project?",
      bullets: ["I handle design AND dev", "One person. No telephone game.", "From idea to live URL"],
      label: "LET'S BUILD SOMETHING"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSeeAllBuilds = (e: React.MouseEvent) => {
    e.preventDefault();
    const buildsSection = document.getElementById('builds');
    if (buildsSection) {
      buildsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-[#1a1a1a] rounded-[32px] w-[380px] border border-white/10 p-8 shadow-[0_32px_64px_rgba(0,0,0,0.18)] overflow-hidden group"
    >
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg className="w-full h-full">
          <filter id="noiseFilterCard">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterCard)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Top Bar */}
        <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.2em]">
          <span className="text-white/30">FRONT PAGE TODAY</span>
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
              <div className="relative w-1.5 h-1.5 bg-green-400 rounded-full" />
            </div>
            <span className="text-white/50">{currentSlide + 1} / 04</span>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mt-4 mb-6" />

        {/* Slides */}
        <div className="min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div className="text-white/40 mb-4">
                {slides[currentSlide].icon}
              </div>
              <h3 className="font-display italic text-4xl text-white leading-tight mb-4">
                {slides[currentSlide].heading}
              </h3>
              <ul className="flex flex-col gap-1 mb-6">
                {slides[currentSlide].bullets.map((bullet, idx) => (
                  <li key={idx} className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
                    · {bullet}
                  </li>
                ))}
              </ul>
              <div className="text-white/25 text-[10px] uppercase tracking-widest">
                {slides[currentSlide].label}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full h-px bg-white/10 mt-6 mb-5" />

        {/* Bottom Bar */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className="relative h-1.5 flex items-center"
              >
                {idx === currentSlide ? (
                  <motion.div
                    layoutId="activeDot"
                    className="bg-accent-red w-5 h-1.5 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <div className="bg-white/20 w-1.5 h-1.5 rounded-full" />
                )}
              </div>
            ))}
          </div>
          <a
            href="#builds"
            onClick={handleSeeAllBuilds}
            className="font-mono text-[10px] text-white/40 uppercase tracking-widest hover:text-accent-red transition-colors"
          >
            See all builds →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = ({ splashDonePhase = true }: { splashDonePhase?: boolean }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* Floating Doodles */}
      <motion.div
        animate={{
          rotate: [0, 360],
          y: [0, -10, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] lg:right-[460px] text-accent-red/20 pointer-events-none hidden lg:block"
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 10L60 40L90 50L60 60L50 90L40 60L10 50L40 40Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -360],
          x: [0, 15, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] left-[10%] text-accent-gold/20 pointer-events-none hidden lg:block"
      >
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="50" cy="50" r="30" strokeDasharray="10 5" />
        </svg>
      </motion.div>

      {/* Marquee Ticker - Full Width */}
      <div className="w-full overflow-hidden bg-bg-secondary py-6 border-y border-black/5 mb-20 relative z-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center flex-shrink-0">
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ PRODUCT DESIGN</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ AI-FIRST EXPERIENCE</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ DESIGN SYSTEMS</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ FIGMA TO CODE</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-[11px] uppercase tracking-[0.4em] text-accent-red font-bold mb-12"
            >
              Product Designer · Full-Stack Developer · 2026
            </motion.div>

            <h1 className="text-[clamp(3.5rem,10vw,12rem)] leading-[0.9] text-text-primary mb-12 lowercase tracking-tight">
              <div className="overflow-hidden mb-4">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                  <ScrambleText text="surya a." startAnimation={splashDonePhase} />
                </motion.div>
              </div>

              <div className="flex flex-wrap items-center gap-x-[0.2em]">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-body font-bold"
                >
                  designs
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-display"
                >
                  that
                </motion.span>
              </div>
              <div className="flex flex-wrap items-center gap-x-[0.2em] font-display italic relative">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative z-10"
                >
                  ship.
                  <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 z-[-1]" viewBox="0 0 200 20" fill="none">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
                      d="M5 15C40 5 160 5 195 15"
                      stroke="#e8432d"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-[600px] text-text-primary text-2xl font-body leading-tight mb-12 tracking-tight"
            >
              I'm Surya, a product designer crafting high-fidelity
              digital experiences that feel human. Mixed with
              engineering precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-4 mb-24"
            >
              <a href="#work" className="magnetic px-10 py-5 bg-black text-white rounded-full font-body font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-accent-red transition-all duration-300 hover:-rotate-1">
                Selected Work
              </a>
              <a href="#contact" className="px-10 py-5 border border-black/10 rounded-full font-body font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
                Get in touch
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex w-[420px] items-center justify-end">
            <LiveBuildsCard />
          </div>
        </div>
      </div>


      {/* Marquee Ticker */}
      <div className="w-full overflow-hidden bg-bg-secondary py-6 border-y border-black/5">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap px-16"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center flex-shrink-0">
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ UX Research</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ Wireframeing & Prototyping</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ AI First Design</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ Interaction Design</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ UI/UX</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ Typography</span>
              <span className="text-[12px] font-body uppercase tracking-[0.3em] font-bold text-text-primary/40">✦ Color Theory</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
