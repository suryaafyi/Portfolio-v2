import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { Globe, AppWindow, Layers, ExternalLink, ArrowRight, ArrowLeft, Terminal, ArrowUpRight } from 'lucide-react';

const BuildsSection = () => {
  const act1Ref = useRef(null);
  const act1InView = useInView(act1Ref, { once: true, amount: 0.2 });

  const [containerWidth, setContainerWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const buildCards = [
    {
      id: "01",
      name: "By Bharath.",
      stack: "Next.js · GSAP · TypeScript · Vercel",
      description: "A cinematic, immersive portfolio for a video editor. Full-screen transitions, scroll-driven video reveals, motion-heavy storytelling.",
      stats: ["Client Work", "Live in Production"],
      liveLink: "https://bybharath.vercel.app/",
      caseStudy: null,
      annotation: "first paid client build~",
      type: 'project'
    },
    {
      id: "02",
      name: "Waaah",
      stack: "React · Vite · Node.js · Gemini 2.0 Flash · Supabase",
      description: "AI that decodes baby cries for sleep-deprived parents. Built for a $1K AI challenge.",
      stats: ["3 Days Built", "$0 Stack Cost"],
      liveLink: "https://waaah-ai.vercel.app/",
      caseStudy: "/work/waaah",
      annotation: null,
      type: 'project'
    },
    {
      id: "03",
      name: "This Portfolio",
      stack: "React · Vite · Framer Motion · Tailwind · Lenis",
      description: "A cinematic, interactive portfolio. Site pet, hat rack, scroll-driven animations, custom cursor.",
      stats: ["1 Week Built", "Production Grade"],
      liveLink: window.location.href,
      caseStudy: null,
      annotation: "you're literally on it right now~",
      type: 'project'
    },
    {
      id: "04",
      name: "Something's cooking.",
      description: "Next build is in the lab. Check back soon, or follow along.",
      annotation: "always building~",
      liveLink: "https://www.linkedin.com/in/surya-ux/",
      type: 'teaser'
    }
  ];

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current && trackRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };

    updateWidths();
    const observer = new ResizeObserver(updateWidths);
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener('resize', updateWidths);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidths);
    };
  }, []);

  const getCardWidth = () => {
    if (window.innerWidth < 768) return window.innerWidth * 0.85;
    return (containerWidth / 2) - 12;
  };

  const gap = 24;

  const snapPoints = buildCards.map((_, i) => {
    const cardWidth = getCardWidth();
    return -i * (cardWidth + gap);
  });

  const handleDragEnd = (_: any, info: any) => {
    setIsGrabbing(false);
    const cardWidth = getCardWidth();
    const currentX = x.get();
    const velocity = info.velocity.x;

    // Predict destination based on velocity
    const predictedX = currentX + velocity * 0.2;

    // Find nearest snap point
    const closest = snapPoints.reduce((prev, curr) => {
      return Math.abs(curr - predictedX) < Math.abs(prev - predictedX) ? curr : prev;
    });

    const newIdx = snapPoints.indexOf(closest);
    setCurrentIdx(newIdx);

    animate(x, closest, {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  };

  const scrollToIndex = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, buildCards.length - 1));
    const targetX = snapPoints[safeIndex];
    setCurrentIdx(safeIndex);
    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  };

  const progressValue = useMotionValue(0.25);

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      const cardWidth = getCardWidth();
      const idx = Math.round(Math.abs(latest) / (cardWidth + gap));
      if (idx !== currentIdx) setCurrentIdx(Math.min(idx, buildCards.length - 1));

      const totalScroll = trackWidth - containerWidth;
      const p = totalScroll > 0 ? Math.abs(latest) / totalScroll : 0;
      // Map 0-1 progress to 0.25-1 scale for the bar
      progressValue.set(0.25 + (p * 0.75));
    });
    return () => unsubscribe();
  }, [containerWidth, trackWidth, currentIdx]);

  const progress = Math.min(1, Math.abs(x.get()) / (trackWidth - containerWidth || 1));

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Business Websites",
      description: "Landing pages, portfolio sites, company sites. Fast, SEO-ready, mobile-perfect.",
      price: "₹15,000",
      bullets: ["SEO Optimized", "Responsive Design", "Performance First"]
    },
    {
      icon: <AppWindow className="w-6 h-6" />,
      title: "Web Applications",
      description: "Custom tools, dashboards, AI-powered apps. Full stack.",
      price: "₹40,000",
      bullets: ["Full-Stack Dev", "Database Integration", "AI Features"]
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Design + Dev Bundle",
      description: "Full product: research → design → code → ship. One person, full ownership.",
      price: "₹25,000",
      bullets: ["Full ownership", "Rapid prototyping", "End-to-end delivery"]
    }
  ];

  return (
    <div id="builds" className="w-full">
      {/* ACT 1: THE CONFESSION */}
      <section
        ref={act1Ref}
        className="relative w-full bg-[#1a1a1a] py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-6"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
          <svg className="w-full h-full">
            <filter id="noiseFilterSubtle">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterSubtle)" />
          </svg>
        </div>

        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            className="w-full h-[2px] bg-white/[0.03] absolute top-0"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={act1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#e8432d] mb-8"
          >
            — A DIFFERENT KIND OF DESIGNER —
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={act1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white text-[clamp(60px,12vw,140px)] leading-[0.85] font-black uppercase tracking-tighter"
              style={{ fontFamily: 'Barlow Condensed' }}
            >
              I DON'T JUST
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={act1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-[clamp(50px,10vw,120px)] leading-[0.9] font-bold italic"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              design it.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={act1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-[clamp(60px,12vw,140px)] leading-[0.85] font-black uppercase tracking-tighter"
              style={{ fontFamily: 'Barlow Condensed' }}
            >
              I OPEN THE
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={act1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#e8432d] text-[clamp(50px,10vw,120px)] leading-[0.9] font-bold italic"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              terminal.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={act1InView ? { opacity: 0.4, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white font-normal text-lg md:text-2xl mt-12 italic"
            style={{ fontFamily: 'Caveat' }}
          >
            "figma by day. vscode at 2am. same energy.~"
          </motion.p>
        </div>
      </section>

      {/* ACT 2: SHIPPED BUILDS (Horizontal Scroll) */}
      <section className="w-full bg-[#f0ede8] py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto" ref={containerRef}>
          <div className="mb-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-text-primary/40 mb-4">
              THIS WEEK. REAL. SHIPPED.
            </div>
            <p className="text-xl md:text-2xl text-text-primary/60 max-w-2xl leading-relaxed">
              Not case studies. Not concepts. Code pushed, domain live, users using it.
            </p>
          </div>

          <div className="relative">
            <motion.div
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: -(trackWidth - containerWidth), right: 0 }}
              dragElastic={0.05}
              onDragStart={() => setIsGrabbing(true)}
              onDragEnd={handleDragEnd}
              style={{ x }}
              data-cursor={isGrabbing ? "grabbing" : "grab"}
              className="flex gap-6 cursor-grab active:cursor-grabbing"
            >
              {buildCards.map((card, i) => {
                const isTeaser = card.type === 'teaser';
                return (
                  <motion.div
                    key={card.id}
                    className={`flex-shrink-0 relative bg-[#1a1a1a] rounded-[32px] p-8 md:p-12 overflow-hidden transition-all duration-500
                      w-[85vw] md:w-[calc(50%-12px)]
                      ${isTeaser ? 'border border-dashed border-white/20' : 'border border-white/10'}`}
                  >
                    {!isTeaser && (
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e8432d] scale-y-0 transition-transform duration-500 origin-bottom group-hover:scale-y-100" />
                    )}

                    <div className="absolute -right-4 -bottom-8 text-white/5 text-[200px] font-black pointer-events-none select-none z-0">
                      {card.id}
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      {isTeaser ? (
                        <div className="flex-1 flex flex-col items-center justify-center py-12">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="text-white/20 text-6xl mb-8"
                          >
                            ✦
                          </motion.div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start mb-12">
                          <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-mono text-[10px] text-white/60 tracking-wider">LIVE</span>
                          </div>
                          <div className="flex flex-wrap justify-end gap-2 max-w-[200px]">
                            {card.stack?.split(' · ').map((tech) => (
                              <span key={tech} className="font-mono text-[10px] text-white/30 uppercase tracking-tighter">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <h3 className="text-white text-4xl md:text-5xl font-bold italic mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
                        {card.name}
                      </h3>

                      <p className={`text-white/60 text-lg mb-8 max-w-md ${isTeaser ? 'text-center' : ''}`}>
                        {card.description}
                      </p>

                      {card.annotation && (
                        <p className={`text-[#e8432d] font-normal text-lg mb-8 italic -mt-6 ${isTeaser ? 'text-center w-full' : ''}`} style={{ fontFamily: 'Caveat' }}>
                          {card.annotation}
                        </p>
                      )}

                      {!isTeaser && card.stats && (
                        <div className="flex gap-12 mb-12">
                          {card.stats.map((stat) => (
                            <div key={stat} className="flex flex-col">
                              <span className="text-white font-mono text-xs uppercase tracking-widest text-white/40 mb-1">
                                {stat.split(' ')[stat.split(' ').length - 1]}
                              </span>
                              <span className="text-white text-xl font-bold">
                                {stat.split(' ').slice(0, -1).join(' ')}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto flex items-center gap-6">
                        <a
                          href={card.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white font-mono text-xs uppercase tracking-widest hover:text-[#e8432d] transition-colors"
                        >
                          {isTeaser ? 'Follow the build' : 'View Live'} <ExternalLink className="w-3 h-3" />
                        </a>
                        {!isTeaser && card.caseStudy && (
                          <a
                            href={card.caseStudy}
                            className="flex items-center gap-2 text-white/40 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors"
                          >
                            Case Study <ArrowRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Progress & Navigation */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 font-mono text-[12px] text-text-primary/40 uppercase tracking-[0.2em]">
              <span className="text-text-primary">0{currentIdx + 1}</span>
              <span className="opacity-20">—</span>
              <span>04</span>
            </div>

            <div className="flex items-center gap-8">
              <div className="relative w-32 h-[2px] bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#e8432d] rounded-full"
                  style={{
                    width: '100%',
                    scaleX: useSpring(progressValue, { stiffness: 300, damping: 30 }),
                    transformOrigin: 'left'
                  }}
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => scrollToIndex(currentIdx - 1)}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-text-primary/40 hover:border-[#e8432d] hover:text-[#e8432d] transition-all disabled:opacity-20"
                  disabled={currentIdx === 0}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToIndex(currentIdx + 1)}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-text-primary/40 hover:border-[#e8432d] hover:text-[#e8432d] transition-all disabled:opacity-20"
                  disabled={currentIdx === buildCards.length - 1}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Thin divider */}
          <div className="w-full h-px bg-black/10 mt-16 mb-12" />

          {/* Testimonial Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center gap-4 px-6"
          >
            {/* Line 1 - quote mark */}
            <div className="font-display italic text-[80px] leading-[0.8] text-[#e8432d] opacity-30">
              "
            </div>

            {/* Line 2 - the quote */}
            <div className="font-display italic text-2xl lg:text-3xl text-text-primary max-w-[600px]">
              "finally live and it's actually clean af 🔥 big W"
            </div>

            {/* Line 3 - attribution row */}
            <div className="flex items-center gap-3 justify-center flex-wrap">
              <span className="font-body font-bold text-[14px] text-text-primary">
                — Bharath
              </span>
              <div className="w-1 h-1 rounded-full bg-[#e8432d]" />
              <span className="font-body text-[13px] text-text-primary/50">
                Video Editor & Content Creator
              </span>
              <div className="w-1 h-1 rounded-full bg-black/20" />
              <span className="font-mono text-[9px] uppercase tracking-widest border border-[#e8432d]/30 text-[#e8432d] px-3 py-1 rounded-full">
                ✓ VERIFIED CLIENT
              </span>
            </div>

            {/* Line 4 - client site link */}
            <a 
              href="https://bybharath.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-text-primary/30 hover:text-[#e8432d] transition-colors mt-2"
            >
              bybharath.vercel.app ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* ACT 3: SERVICES OFFER */}
      <section className="w-full bg-[#f0ede8] py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(50px,8vw,100px)] leading-[0.9] font-black uppercase tracking-tighter mb-4"
              style={{ fontFamily: 'Barlow Condensed' }}
            >
              GOT A BUSINESS?
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#e8432d] text-[clamp(40px,7vw,90px)] leading-[0.9] font-bold italic mb-8"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              I'll build your digital presence.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-primary/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              From landing pages to full web apps — designed to convert, built to scale. I handle design AND development, so you get one person who owns the whole thing, not a broken game of telephone between a designer and a dev.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[32px] border border-black/5 p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#e8432d]/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-[#e8432d]/10 group-hover:text-[#e8432d]">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-sm text-text-primary/70 mb-8 leading-relaxed h-[60px]">
                  {service.description}
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  {service.bullets.map(bullet => (
                    <div key={bullet} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#e8432d]" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-text-primary/40">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#1a1a1a] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
          >
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />

            <div className="text-center md:text-left relative z-10">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Ready to build something that works?</h3>
              <p className="text-white/40 text-lg">Let's talk scope, timeline, and budget — no fluff.</p>
            </div>

            <a
              href="mailto:suryaarunachalam2001@gmail.com"
              className="group relative px-8 py-4 bg-[#e8432d] text-white rounded-full font-bold flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 z-10"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BuildsSection;
