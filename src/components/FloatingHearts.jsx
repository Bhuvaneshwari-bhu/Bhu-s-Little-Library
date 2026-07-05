import { useEffect, useState } from "react";

const COLORS = [
  "text-pink-300",
  "text-pink-200",
  "text-purple-300",
  "text-purple-200",
];

const HEARTS = [ "💜", "💗","💜", "💗"];

export default function FloatingHearts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const heart = {
        id: Math.random(),
        x: Math.random() * 100, // % instead of px (IMPORTANT FIX)
        size: Math.random() * 18 + 10,
        duration: Math.random() * 10 + 12,
        opacity: Math.random() * 0.6 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        symbol: HEARTS[Math.floor(Math.random() * HEARTS.length)],
      };

      setItems((prev) => [...prev.slice(-25), heart]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {items.map((h) => (
        <span
          key={h.id}
          className={`absolute animate-floatUp ${h.color}`}
          style={{
            left: `${h.x}%`,
            bottom: "-40px",
            fontSize: h.size,
            opacity: h.opacity,
            animationDuration: `${h.duration}s`,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
}