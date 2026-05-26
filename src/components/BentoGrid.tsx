import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'shift',
    title: 'SHIFT',
    description: 'A Career Transition Platform | UX Case Study',
    tags: ['UX Research', 'Product Design', 'Figma'],
    link: '/work/shift',
    color: '#4060ff',
    className: 'col-span-2',
    heroImage: null
  },
  {
    id: 'knot',
    title: 'KNOT',
    description: 'Where Moments Became Memories | UX/UI Case Study',
    tags: ['UI Design', 'Motion', 'Figma'],
    link: '/work/knot',
    color: '#f0c060',
    className: 'row-span-2',
    heroImage: null
  },
  {
    id: 'upcoming',
    title: 'cookin’ something interesting',
    description: 'still in the lab 🧪',
    tags: ['PRODUCT DESIGN', 'AI', 'IN PROGRESS'],
    link: '#',
    color: '#e8432d',
    className: 'row-span-2',
    heroImage: '/case-studies/cookin-grid.png'
  },
  {
    id: 'zendo',
    title: 'ZEN DO',
    description: 'A Mindful Productivity App | UI/UX Case Study',
    tags: ['UX Research', 'UI Design', 'Productivity'],
    link: '/work/zendo',
    color: '#4ade80',
    className: 'col-span-1',
    heroImage: null
  },
  {
    id: 'waaah',
    title: 'WAAAH',
    description: 'AI That Speaks Baby | AI Product Design',
    tags: ['AI Product', 'Web App', 'Research', 'Shipped'],
    link: '/work/waaah',
    color: '#FFB347',
    className: 'col-span-1',
    heroImage: null
  }
];

const CaseStudyCard = ({ project }: { project: typeof projects[0] }) => {
  const isInProgress = project.tags.includes('IN PROGRESS');
  const isExternal = project.link.startsWith('http');
  const Component = isExternal ? motion.a : isInProgress ? motion.div : motion(Link);

  const visualConfig: Record<string, any> = {
    shift: {
      number: "01",
      numSize: "180px",
      numClass: "opacity-[0.18] group-hover:opacity-[0.24] text-[#4060ff]",
      gradient: "linear-gradient(135deg, transparent 65%, rgba(64, 96, 255, 0.18) 65%)",
      svg: (
        <svg className="absolute bottom-6 right-8 opacity-[0.28] transition-opacity duration-400 group-hover:opacity-[0.34] pointer-events-none z-0 w-[120px]" viewBox="0 0 100 100" style={{ stroke: '#4060ff', strokeWidth: 2, fill: 'none', strokeLinecap: 'round' }}>
          <path d="M 20 80 Q 50 80, 50 50 T 80 20 M 60 20 L 80 20 L 80 40" />
        </svg>
      )
    },
    knot: {
      number: "02",
      numSize: "180px",
      numClass: "opacity-[0.18] group-hover:opacity-[0.24] text-[#f0c060]",
      gradient: "linear-gradient(135deg, transparent 65%, rgba(240, 192, 96, 0.18) 65%)",
      svg: (
        <svg className="absolute bottom-6 right-8 opacity-[0.28] transition-opacity duration-400 group-hover:opacity-[0.34] pointer-events-none z-0 w-[100px]" viewBox="0 0 100 50" style={{ stroke: '#f0c060', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          <path d="M 25,25 C 5,5 5,45 25,45 C 50,45 50,5 75,5 C 95,5 95,45 75,45 C 50,45 50,5 25,25 Z" />
        </svg>
      )
    },
    zendo: {
      number: "03",
      numSize: "140px",
      numClass: "opacity-[0.18] group-hover:opacity-[0.24] text-[#4ade80]",
      gradient: "linear-gradient(135deg, transparent 60%, rgba(74, 222, 128, 0.18) 60%)",
      svg: (
        <svg className="absolute bottom-6 right-8 opacity-[0.28] transition-opacity duration-400 group-hover:opacity-[0.34] pointer-events-none z-0 w-[80px]" viewBox="0 0 100 100" style={{ stroke: '#4ade80', strokeWidth: 2.5, fill: 'none', strokeLinecap: 'round' }}>
          <path d="M 50 10 A 40 40 0 1 1 20 25" />
        </svg>
      )
    },
    waaah: {
      number: "04",
      numSize: "140px",
      numClass: "opacity-[0.18] group-hover:opacity-[0.24] text-[#FFB347]",
      gradient: "linear-gradient(135deg, transparent 60%, rgba(255, 179, 71, 0.18) 60%)",
      svg: (
        <svg className="absolute bottom-6 right-8 opacity-[0.28] transition-opacity duration-400 group-hover:opacity-[0.34] pointer-events-none z-0 w-[90px] h-[50px]" viewBox="0 0 100 50" style={{ stroke: '#FFB347', strokeWidth: 2.5, strokeLinecap: 'round' }}>
          <line x1="20" y1="20" x2="20" y2="30" />
          <line x1="35" y1="10" x2="35" y2="40" />
          <line x1="50" y1="5" x2="50" y2="45" />
          <line x1="65" y1="15" x2="65" y2="35" />
          <line x1="80" y1="22" x2="80" y2="28" />
        </svg>
      )
    }
  };

  const visual = visualConfig[project.id];

  return (
    <Component
      {...(isExternal ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : !isInProgress ? { to: project.link } : {})}
      data-cursor={isInProgress ? 'default' : 'view'}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`bg-card group relative p-6 lg:p-8 flex flex-col justify-between overflow-hidden cursor-none border border-black/5 shadow-sm rounded-3xl ${project.className}`}
    >
      {/* Background Tint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 z-0"
        style={{ backgroundColor: project.color }}
      />

      {/* Hero Image */}
      {project.heroImage && (
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-all duration-700 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
        />
      )}

      {/* Visual Enhancements */}
      {visual && (
        <>
          {/* Option 5: Diagonal color accent */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ background: visual.gradient }}
          />
          {/* Option 1: Large ghost number */}
          <div
            className={`absolute font-display font-black pointer-events-none z-0 leading-none transition-opacity duration-400 ${visual.numClass}`}
            style={{
              bottom: '-20px',
              right: '16px',
              fontSize: visual.numSize,
            }}
          >
            {visual.number}
          </div>
          {/* Option 4: SVG doodle */}
          {visual.svg}
        </>
      )}

      {/* Card Content */}
      <div className="relative z-10">
        <div className={`font-body text-[10px] tracking-widest mb-2 uppercase font-bold text-text-primary/40 transition-colors duration-300 ${project.heroImage ? 'group-hover:text-white/90' : ''}`}>
          {project.tags.join(' · ')}
        </div>
        <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] leading-[0.9] font-display text-text-primary group-hover:text-accent-red transition-colors lowercase tracking-tight">
          {project.title}{project.title.endsWith('.') ? '' : '.'}
        </h3>
        <p className={`font-body text-sm mt-2 max-w-[380px] leading-tight line-clamp-2 text-text-primary/60 transition-colors duration-300 ${project.heroImage ? 'group-hover:text-white/90' : ''}`}>
          {project.description}
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-4 flex justify-between items-center">
        <span className={`font-body text-[10px] uppercase tracking-[0.2em] font-bold text-text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ${project.heroImage ? 'group-hover:text-white' : ''}`}>
          {isInProgress ? 'Coming Soon' : 'View Case Study'}
        </span>
        <div className="flex-none w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-accent-red group-hover:border-accent-red group-hover:text-white transition-all duration-300">
          {isInProgress ? '→' : '↗'}
        </div>
      </div>
    </Component>
  );
};

const BentoGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const x = useTransform(progress, (p) => `calc(${-p * 100}% + ${p * 100}vw)`);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.05) setShowHint(false);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section id="work" ref={sectionRef} className="relative h-[300vh] bg-bg-primary">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-start overflow-hidden">

        {/* Section Header */}
        <div className="mb-12 relative z-20 px-6 lg:px-24">
          <div className="font-body text-[11px] uppercase tracking-[0.4em] text-accent-red font-bold mb-4">Selected Work</div>
          <h2 className="text-6xl md:text-[clamp(4rem,9vw,11rem)] font-display text-text-primary leading-[0.9] lowercase tracking-tight">
            <span className="font-body font-bold">case</span> <span className="font-display italic">studies.</span>
          </h2>
        </div>

        {/* Scroll Hint */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 font-body text-[10px] uppercase tracking-[0.2em] font-bold text-text-primary/40 flex items-center gap-4 z-30"
            >
              scroll to explore
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Horizontal Container */}
        <div className="w-full h-[60vh] flex items-center">
          <motion.div
            ref={containerRef}
            style={{ x }}
            className="flex gap-8 min-w-max pl-6 lg:pl-24 pr-6 lg:pr-24"
          >
            <div className="grid grid-cols-4 grid-rows-2 gap-8 h-[65vh] min-w-[160vw]">
              {projects.map((project) => (
                <CaseStudyCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
