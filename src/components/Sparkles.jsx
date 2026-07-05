import { useEffect, useState } from "react";

export default function Sparkles() {
  const [trail, setTrail] = useState([]);
  const COLORS = ["#ffb6d9", "#ff9ecf", "#ffc1dd", "#ff8fc7", "#ff6fb5"];

  useEffect(() => {
    let last = { x: 0, y: 0 };

    const handleMove = (e) => {
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;

      // only add sparkle if movement is significant (prevents noise)
      if (Math.abs(dx) + Math.abs(dy) < 6) return;

      last = { x: e.clientX, y: e.clientY };

      const particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        dx: Math.random() * 20 - 10,
        dy: Math.random() * 20 - 20,
        size: Math.random() * 8 + 10,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };

      setTrail((prev) => [...prev.slice(-40), particle]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trail.map((p) => (
        <span
        key={p.id}
        className="absolute fairy-trail"
        style={{
          left: p.x,
          top: p.y,
          fontSize: "16px",
          "--dx": `${p.dx}px`,
          "--dy": `${p.dy}px`,
          color: p.color,
          textShadow:
            "0 0 8px rgba(255,182,217,0.9), 0 0 16px rgba(255,105,180,0.6)",
        }}
      >
        ✦
      </span>
      ))}
    </div>
  );
}