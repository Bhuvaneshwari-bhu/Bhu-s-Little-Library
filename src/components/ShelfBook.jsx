import { motion } from "framer-motion";

export default function ShelfBook({
  book,
  selected,
  onClick,
  rotation = 0,
  height = 260,
}) {
  return (
    <motion.div
    layout
    animate={{
      y: selected ? -18 : 0,
      scale: selected ? 1.05 : 1,
    }}
    whileHover={{
      y: -26,
      scale: 1.06,
      rotate: 0,
      zIndex: 50,
    }}
    transition={{
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 1,
    }}
    className="relative flex items-end justify-center cursor-pointer shrink-0"
    onClick={() => onClick(book)}
  >
      {/* Shadow */}
      <div className="absolute bottom-0 w-32 h-4 rounded-full bg-black/25 blur-md" />

      {/* Book */}
      <motion.div
  style={{
    rotate: rotation,
    height,
  }}
  className="relative rounded-sm overflow-hidden shadow-[0_20px_35px_rgba(0,0,0,.35)]"
>
  <motion.img
    layoutId={`book-${book.id}`}
    transition={{
      type: "spring",
      stiffness: 90,
      damping: 22,
      mass: 1.2,
    }}
    src={book.coverUrl}
    alt={book.title}
    draggable={false}
    style={{
      height: "100%",
      width: "auto",
      display: "block",
    }}
  />

  {/* Gloss */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,.28) 48%, transparent 62%)",
    }}
  />

  {selected && (
    <motion.div
      layoutId="selectedGlow"
      className="absolute inset-0 ring-4 ring-yellow-300 rounded-sm"
    />
  )}
</motion.div>
    </motion.div>
  );
}