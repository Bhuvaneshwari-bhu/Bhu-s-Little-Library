import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import KineticHeadline from './KineticHeadline';
import { useParallax } from '../lib/useParallax';
import heroPhoto from '../assets/hero-photo.jpg';
import Petals from './Petals';
import Sparkles from './Sparkles';
import FloatingHearts from './FloatingHearts';

const LINE_1 = "Hi, I'm Bhuvaneshwari.";
const LINE_2 = "Welcome to my little library.";

function useTypewriter(text, start, speed = 30) {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!start) return;
    setOut('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, start, speed]);
  return out;
}

export default function Hero() {
  const [wake, setWake] = useState(false);
  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);
  const parallax = useParallax(1);

  const typed1 = useTypewriter(LINE_1, wake);
  const typed2 = useTypewriter(LINE_2, line1Done);

  useEffect(() => {
    const t = setTimeout(() => setWake(true), 450);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typed1 === LINE_1) {
      const t = setTimeout(() => setLine1Done(true), 220);
      return () => clearTimeout(t);
    }
  }, [typed1]);

  useEffect(() => {
    if (typed2 === LINE_2) setLine2Done(true);
  }, [typed2]);

  return (
    <>
    <Sparkles />
    <Petals />
   
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  style={{ transformOrigin: "top" }}
  className="relative min-h-screen bg-dusk-800 overflow-hidden flex flex-col"
>
      <div className="absolute inset-0 bg-[#F7F2FF]" />
      <div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(180deg, #F7F3FF 0%, #EDE7FF 100%)"
  }}
/>
<div className="absolute inset-0 pointer-events-none z-0">
  <div className="absolute inset-0 bg-gradient-to-t from-[#F7F2FF] via-transparent to-[#F7F2FF] opacity-60" />
  <div className="absolute inset-0 bg-radial-gradient opacity-40" />
</div>
<div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse" />
<div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
{/*Floating magical doodles layer */}
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
  <div className="absolute top-16 left-12 text-pink-300 text-xl animate-bounce">♡</div>
  <div className="absolute top-40 right-20 text-yellow-300 text-lg animate-pulse">✦</div>
  <div className="absolute bottom-32 left-24 text-purple-300 text-xl animate-[spin_12s_linear_infinite]">❀</div>
  <div className="absolute bottom-40 right-12 text-pink-200 text-lg animate-bounce">☁</div>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.15),transparent_70%)]" />
      
      
      <Petals/>
      <FloatingHearts />

      <div className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-6 grid md:grid-cols-[1.15fr_1fr] gap-10 items-center pt-16 pb-16
                before:content-[''] before:absolute before:inset-6 before:border before:border-white/30 before:rounded-[40px] before:pointer-events-none">
        {/* Left: kinetic headline + copy + CTA */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={wake ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-mono text-[11px] tracking-[0.35em] opacity-100 uppercase text-pink-900/70 mb-5"
          >
            Creating Books Children Love to Explore.
          </motion.span>

          <KineticHeadline
            text="Where Imagination Becomes Book"
            start={wake}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-pink-900 leading-[1.08] drop-shadow-sm"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={wake ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-pink-900/60 text-lg max-w-md mx-auto md:mx-0"
          >
            Discover a collection of illustrated children's books and coloring books, thoughtfully designed to spark imagination, curiosity, and joy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={wake ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
  href="#books"
  className="inline-flex items-center gap-2 bg-pink-200 hover:bg-pink-300 text-pink-900 font-display font-semibold px-7 py-3 rounded-full shadow-md shadow-pink-200/40 hover:shadow-[0_0_25px_rgba(255,182,193,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
>
              Explore the Collection
              <span aria-hidden="true">→</span>
            </a>
           
          </motion.div>
        </div>

        {/* Right: photo + speech bubble */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={wake ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative order-1 md:order-2 flex flex-col items-center"
          style={{ transform: `translate(${parallax.x * -10}px, ${parallax.y * -6}px)` }}
        >
          <div
            className="absolute w-[360px] h-[360px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(244,162,89,0.22) 0%, rgba(244,162,89,0) 70%)' }}
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="relative w-48 sm:w-56 md:w-64 aspect-[4/5]">
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-[28px] animate-pulse" />
  
  {/* dreamy glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-yellow-100/20 to-purple-200/30 blur-xl rounded-[28px]" />

  {/* sketch frame */}
  <div className="absolute inset-0 rounded-[28px] border-2 border-dashed border-marigold/40 scale-105 rotate-1" />

  {/* image card */}
  <div className="relative rounded-[28px] overflow-hidden shadow-2xl ring-4 ring-white/20">
    <img
      src={heroPhoto}
      alt="Bhuvaneshwari"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
  </div>

</div>
            <span className="absolute -inset-2 rounded-[32px] border border-marigold/30 pointer-events-none" />
          </motion.div>

          <div
            className="mt-5 min-h-[92px] sm:min-h-[76px] max-w-xs sm:max-w-sm text-center bg-paper text-pink-900 rounded-2xl px-6 py-4 shadow-xl relative font-body animate-[float_3s_ease-in-out_infinite]"
            style={{ opacity: wake ? 1 : 0, transition: 'opacity 0.6s ease 0.35s' }}
          >
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-paper rotate-45" aria-hidden="true" />
            <p className="font-display font-medium text-lg ink-text">
  {typed1}
</p>
            {line1Done && <p className="font-display font-medium text-lg mt-1 ink-text">
  {typed2}
</p>}
          </div>
        </motion.div>
      </div>

      
      </motion.section>
    </>
  );
}
