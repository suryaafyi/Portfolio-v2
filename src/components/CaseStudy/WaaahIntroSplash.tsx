import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';

const FloatingBalloon = ({ color, delay, x }: { color: string, delay: number, x: string }) => (
  <motion.div
    initial={{ y: '120vh', x: x, opacity: 0 }}
    animate={{
      y: '-20vh',
      opacity: [0, 1, 1, 0],
      x: [x, `calc(${x} + 20px)`, `calc(${x} - 20px)`, x]
    }}
    transition={{
      duration: 15,
      delay: delay,
      ease: "linear",
      repeat: Infinity,
      x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
    className="absolute pointer-events-none"
    style={{ zIndex: 5 }}
  >
    <div className="relative">
      <div
        className="w-12 h-16 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] shadow-lg"
        style={{ backgroundColor: color }}
      />
      <div className="w-0.5 h-12 bg-black/10 absolute top-full left-1/2 -translate-x-1/2" />
    </div>
  </motion.div>
);

const ConfettiPiece = ({ color, x, delay }: { color: string, x: number, delay: number }) => (
  <motion.div
    initial={{ y: -20, x: `${x}vw`, opacity: 0, rotate: 0 }}
    animate={{
      y: '110vh',
      opacity: [0, 1, 1, 0],
      rotate: 360,
      x: [`${x}vw`, `${x + (Math.random() * 10 - 5)}vw`]
    }}
    transition={{
      duration: Math.random() * 3 + 4,
      delay: delay,
      ease: "linear",
      repeat: Infinity
    }}
    className="absolute w-2 h-4 rounded-sm pointer-events-none"
    style={{ backgroundColor: color, zIndex: 10 }}
  />
);

export const WaaahIntroSplash = ({ onEnter }: { onEnter: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onEnter, 1000);
  };

  const colors = ['#FF6B6B', '#FFB347', '#4ECDC4', '#C77DFF', '#FF99BC'];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[5000] bg-[#F9EEE5] overflow-hidden flex flex-col items-center justify-center cursor-default"
        >
          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[100]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

          {/* Background celebration glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent-gold/20 blur-[120px] rounded-full pointer-events-none" />

          {/* Floating Balloons */}
          {[...Array(8)].map((_, i) => (
            <FloatingBalloon
              key={`balloon-${i}`}
              color={colors[i % colors.length]}
              delay={i * 2}
              x={`${10 + i * 12}vw`}
            />
          ))}

          {/* Confetti */}
          {[...Array(40)].map((_, i) => (
            <ConfettiPiece
              key={`confetti-${i}`}
              color={colors[i % colors.length]}
              x={Math.random() * 100}
              delay={Math.random() * 5}
            />
          ))}

          {/* Party Emoji (Top Left) */}
          <motion.img
            src="/case-studies/Party-Emoji.png"
            className="absolute top-[10%] left-[5%] w-24 h-auto pointer-events-none"
            style={{
              x: springX.get() * 50,
              y: springY.get() * 50,
              zIndex: 30
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Blue Popper (Top Right) */}
          <motion.img
            src="/case-studies/Blue-Popper.png"
            className="absolute top-[5%] right-[5%] w-32 h-auto rotate-[15deg] pointer-events-none"
            style={{
              x: springX.get() * -30,
              y: springY.get() * -30,
              zIndex: 30
            }}
            animate={{ y: [0, -10, 0], rotate: [15, 10, 15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Yellow Popper (Bottom Left) */}
          <motion.img
            src="/case-studies/Yellow-Popper.png"
            className="absolute bottom-[15%] left-[8%] w-24 h-auto pointer-events-none"
            style={{
              x: springX.get() * 40,
              y: springY.get() * 40,
              zIndex: 30
            }}
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main Content */}
          <div className="relative z-[60] flex flex-col items-center text-center max-w-2xl px-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="/case-studies/Dancing-Blob.gif"
                  alt="Waaah Celebration"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain"
                />
                <div className="absolute inset-0 bg-accent-gold/20 blur-[60px] rounded-full -z-10" />
              </motion.div>

              {/* Shipped Badge
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-[#4ade80] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white uppercase tracking-wider"
              >
                Shipped
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block bg-accent-gold/10 text-accent-gold text-[10px] font-mono font-bold px-4 py-1.5 rounded-full border border-accent-gold/20 tracking-widest uppercase">
                AI That Speaks Baby
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lowercase tracking-tight text-text-primary mb-6">
              {"Waaah is shipped 🚀".split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="font-body text-lg text-text-primary/60 mb-12 leading-relaxed"
            >
              Built with love, chaos, late nights, and way too many iterations.
            </motion.p>

            <div className="flex flex-col items-center gap-6">
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 1.6 }}
                onClick={handleEnter}
                data-cursor="view"
                className="bg-accent-red text-white font-mono text-xs uppercase tracking-widest px-12 py-5 rounded-full shadow-xl shadow-accent-red/20 hover:bg-accent-red/90 transition-all cursor-none"
              >
                Enter Case Study
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="font-mono text-[10px] text-text-primary/40 uppercase tracking-widest"
              >
                Try the product link waiting at the end ↓
              </motion.div>
            </div>
          </div>

          {/* Skip Button
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            onClick={handleEnter}
            className="absolute top-8 right-8 font-mono text-[10px] text-text-primary/30 hover:text-text-primary uppercase tracking-widest transition-colors p-4"
          >
            Skip Intro
          </motion.button> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
