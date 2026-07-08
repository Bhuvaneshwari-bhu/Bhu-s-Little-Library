import { AnimatePresence, motion } from "framer-motion";

export default function BookDetails({ book, onClose }) {
  return (
    
    <motion.div
    key={book.id}
    initial={{ opacity: 0, y: 80, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 40, scale: 0.95 }}
    transition={{
      type: "spring",
      stiffness: 85,
      damping: 20,
      mass: 1.3,
    }}
        className="mt-16"
      >
        <div
          
  className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.18)]"
          style={{
            background:
  "linear-gradient(180deg,#FFFDF8 0%,#F8F2E8 100%)",
          }}
        >
          <div className="grid md:grid-cols-[220px_1fr]">
            {/* Book */}
            <div className="relative p-8 flex justify-center items-center bg-[#F8F1E5]">
            <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.1 }}
  className="absolute w-52 h-52 rounded-full blur-3xl z-0"
  style={{
    background:
      "radial-gradient(circle, rgba(255,214,120,.45) 0%, transparent 70%)",
  }}
/>
<motion.img
  layoutId={`book-${book.id}`}
  transition={{
    type: "spring",
    stiffness: 90,
    damping: 22,
    mass: 1.2,
    delay: 0.03,
  }}
  src={book.coverUrl}
  alt={book.title}
  className="relative z-10 w-40 rounded shadow-xl"
/>
            </div>

            {/* Details */}
            <div className="p-10">
            <button
  onClick={onClose}
  className="
    absolute
    top-6
    right-6
    w-10
    h-10
    rounded-full
    bg-white/80
backdrop-blur
shadow-lg
hover:rotate-90
transition-all
duration-300
    hover:bg-amber-200
    text-xl
  "
>
  ✕
</button>

{book.category && (
  <div className="mb-4">
    <span className="
      inline-flex
      items-center
      px-4 py-1
      rounded-full
      text-xs
      tracking-[0.25em]
      uppercase
      bg-amber-100/60
      text-amber-800
      border border-amber-200
      shadow-sm
      backdrop-blur
    ">
      {book.category}
    </span>
  </div>
)}


              <h2 className="font-display text-5xl leading-tight text-amber-950">
                {book.title}
              </h2>

              <p className="mt-2 text-xl italic text-stone-500">
                {book.subtitle}
              </p>

              <p className="mt-6 text-stone-700 leading-9 text-lg">
                {book.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

  {book.flipbookUrl && (
    <a
      href={book.flipbookUrl}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        px-7
        py-3
        rounded-full
        bg-emerald-600
        hover:bg-emerald-700
        text-white
        shadow-xl
        hover:-translate-y-1
        hover:shadow-emerald-500/30
        transition-all
        duration-300
      "
    >
       Read Flipbook
    </a>
  )}

  {book.amazonUrl && (
    <a
      href={book.amazonUrl}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        px-7
        py-3
        rounded-full
        bg-gradient-to-r
        from-amber-600
        to-orange-700
        text-white
        shadow-xl
        hover:-translate-y-1
        hover:shadow-amber-500/40
        transition-all
        duration-300
      "
    >
       Buy on Amazon
    </a>
  )}

</div>
            </div>
          </div>
        </div>
      </motion.div>
    
  );
}