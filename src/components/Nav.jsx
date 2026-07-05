import { useEffect, useState } from "react";

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-pink-100/70 backdrop-blur-xl border-b border-pink-200/40 transition-all duration-500"
      style={{
        transform: "translateY(0)", // keep stable sticky position
        boxShadow: "0 8px 25px rgba(255, 182, 193, 0.25)",
      }}
    >
      {/* 💖 soft pink glow background */}
      <div className="absolute inset-0 bg-pink-200/30 blur-xl opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-8 h-[72px] flex items-center justify-between">

        {/* 🌸 Logo */}
        <a
          href="#top"
          className={`font-display text-[1.45rem] font-medium tracking-[0.03em] transition-all duration-300 ${
            solid ? "text-ink" : "text-pink-700"
          }`}
        >
          Bhu's Little Library
        </a>

        {/* 🌷 Navigation Links */}
        <div className="flex items-center gap-10 text-[0.95rem] font-medium tracking-[0.08em]">

          {/* Books */}
          <a
            href="#books"
            className={`relative transition-all duration-300 ${
              solid ? "text-ink/70" : "text-pink-800/80"
            }`}
          >
            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full hover:text-pink-500">
              Books
            </span>
          </a>

          {/* About */}
          <a
            href="#about"
            className={`relative transition-all duration-300 ${
              solid ? "text-ink/70" : "text-pink-800/80"
            }`}
          >
            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full hover:text-pink-500">
              About
            </span>
          </a>

        </div>
      </div>
    </nav>
  );
}