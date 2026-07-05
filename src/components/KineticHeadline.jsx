import { motion } from 'framer-motion';

export default function KineticHeadline({ text, start, className = '' }) {
  const words = text.split(' ');
  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotate: 4 }}
            animate={start ? { y: '0%', rotate: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.08 * i,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
