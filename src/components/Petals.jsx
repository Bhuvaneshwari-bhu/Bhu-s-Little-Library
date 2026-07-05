import { useEffect, useState } from "react";

const PETAL_COLORS = ["#F8BBD0", "#F48FB1", "#FCE4EC", "#F3E5F5"];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Petals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: random(0, 100),
      delay: random(0, 8),
      duration: random(8, 16),
      size: random(8, 16),
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    }));

    setPetals(arr);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-[-10%] animate-fall"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
            color: p.color,
          }}
        >
          ❀
        </span>
      ))}
    </div>
  );
}