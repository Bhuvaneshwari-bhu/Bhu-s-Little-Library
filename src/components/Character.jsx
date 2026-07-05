import { useEffect, useState } from 'react';

/**
 * Illustrated semi-3D storybook-host character — refined pass.
 * Layers: back dupatta (flowing), hair back, body/dress, dupatta front drape,
 * head with rim-lit shading, front hair, waving arm, sparkle particles while talking.
 */
export default function Character({ talking = false, className = '' }) {
  const [blink, setBlink] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let timeout;
    const scheduleBlink = () => {
      timeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 130);
        scheduleBlink();
      }, 2400 + Math.random() * 2200);
    };
    scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!talking) {
      setMouthOpen(false);
      return;
    }
    const id = setInterval(() => setMouthOpen((m) => !m), 130);
    return () => clearInterval(id);
  }, [talking]);

  // gentle sparkle emission while talking
  useEffect(() => {
    if (!talking) return;
    const id = setInterval(() => {
      setSparkles((prev) => [
        ...prev.slice(-6),
        {
          id: Math.random(),
          x: 250 + Math.random() * 60,
          y: 190 + Math.random() * 30,
        },
      ]);
    }, 420);
    return () => clearInterval(id);
  }, [talking]);

  return (
    <svg
      viewBox="0 0 420 580"
      className={className}
      role="img"
      aria-label="Illustrated character of Bhuvaneshwari waving hello"
    >
      <defs>
        <radialGradient id="skinGrad" cx="40%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#fbd8b0" />
          <stop offset="55%" stopColor="#eeb287" />
          <stop offset="100%" stopColor="#d99a66" />
        </radialGradient>
        <radialGradient id="cheekGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f2897a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f2897a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hairGrad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#4a3733" />
          <stop offset="45%" stopColor="#2a1e1b" />
          <stop offset="100%" stopColor="#160f0e" />
        </linearGradient>
        <linearGradient id="hairShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a6b5f" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8a6b5f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="dressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8dad6" />
          <stop offset="100%" stopColor="#e5a099" />
        </linearGradient>
        <linearGradient id="dressShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9827c" stopOpacity="0" />
          <stop offset="100%" stopColor="#b06f69" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="sageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a5cabd" />
          <stop offset="100%" stopColor="#6f9587" />
        </linearGradient>
        <linearGradient id="dupattaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4a259" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#d98a45" stopOpacity="0.92" />
        </linearGradient>
        <radialGradient id="rimLight" cx="80%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#fff3df" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff3df" stopOpacity="0" />
        </radialGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0c0c22" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* soft contact shadow */}
      <ellipse cx="212" cy="562" rx="120" ry="16" fill="#0c0c22" opacity="0.28" />

      {/* dupatta back drape - independent gentle sway */}
      <g className="char-dupatta-back">
        <path
          d="M120 300 C60 340 30 420 55 520 C65 545 90 555 110 548
             C96 480 100 400 140 330 Z"
          fill="url(#dupattaGrad)"
          opacity="0.9"
        />
      </g>

      {/* idle breathing group */}
      <g className="char-idle" filter="url(#softShadow)">
        {/* hair back layer */}
        <path
          d="M118 195 C96 88 152 26 212 26 C272 26 322 88 302 195
             C313 268 307 350 286 434 L275 412
             C281 328 275 244 254 195
             C255 268 249 350 233 442 L212 436
             C218 350 216 268 208 200
             C200 268 197 350 191 442 L163 436
             C158 350 156 268 148 195
             C142 268 148 328 133 412 L118 195 Z"
          fill="url(#hairGrad)"
        />
        <path
          d="M130 130 C150 90 180 68 212 66"
          stroke="url(#hairShine)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* neck */}
        <rect x="188" y="248" width="46" height="58" rx="15" fill="url(#skinGrad)" />
        <rect x="188" y="274" width="46" height="32" rx="11" fill="#c9895e" opacity="0.32" />

        {/* torso / dress */}
        <g>
          <path
            d="M88 566 C88 432 119 320 156 287 C177 270 249 270 269 287
               C304 320 335 432 335 566 Z"
            fill="url(#dressGrad)"
          />
          <path
            d="M88 566 C88 432 119 320 156 287 C177 270 249 270 269 287
               C304 320 335 432 335 566 Z"
            fill="url(#dressShade)"
          />
          {/* sage sash */}
          <path d="M120 400 C170 416 255 416 302 400 L300 424 C252 440 172 440 122 424 Z" fill="url(#sageGrad)" opacity="0.9" />
          {/* collar */}
          <path
            d="M166 289 C187 309 238 309 258 289 C247 304 196 304 166 289 Z"
            fill="url(#sageGrad)"
          />
          {/* embroidery dots along hem */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx={130 + i * 30} cy={540 - Math.abs(i - 2.5) * 6} r="3" fill="#f4a259" opacity="0.7" />
          ))}
          {/* left sleeve */}
          <path
            d="M156 293 C110 312 76 364 80 436 C82 468 95 488 112 492
               C119 462 116 424 129 382 C135 358 145 322 159 297 Z"
            fill="url(#dressGrad)"
          />
          <path
            d="M156 293 C110 312 76 364 80 436 C82 468 95 488 112 492
               C119 462 116 424 129 382 C135 358 145 322 159 297 Z"
            fill="url(#dressShade)"
          />
          {/* right sleeve + waving hand */}
          <g className="char-wave-arm">
            <path
              d="M268 293 C316 302 348 334 352 376 C354 403 339 420 318 420
               C307 386 300 348 285 316 C279 304 273 297 268 293 Z"
              fill="url(#dressGrad)"
            />
            <ellipse cx="322" cy="410" rx="16" ry="18" fill="url(#skinGrad)" />
            <path d="M312 402 Q322 392 332 402" stroke="#c9895e" strokeWidth="2" fill="none" opacity="0.5" />
          </g>
          <ellipse cx="100" cy="486" rx="16" ry="17" fill="url(#skinGrad)" />
        </g>

        {/* dupatta front drape crossing torso */}
        <path
          d="M170 300 C210 330 250 340 300 320 L296 345 C250 366 208 356 168 328 Z"
          fill="url(#dupattaGrad)"
          opacity="0.85"
        />

        {/* head */}
        <g>
          <ellipse cx="212" cy="178" rx="80" ry="90" fill="url(#skinGrad)" />
          <ellipse cx="212" cy="178" rx="80" ry="90" fill="url(#rimLight)" />

          {/* ears + earrings */}
          <ellipse cx="130" cy="182" rx="9" ry="14" fill="url(#skinGrad)" />
          <ellipse cx="294" cy="182" rx="9" ry="14" fill="url(#skinGrad)" />
          <circle cx="130" cy="196" r="3.4" fill="#f4a259" />
          <circle cx="294" cy="196" r="3.4" fill="#f4a259" />

          {/* cheeks */}
          <ellipse cx="161" cy="200" rx="27" ry="18" fill="url(#cheekGrad)" />
          <ellipse cx="263" cy="200" rx="27" ry="18" fill="url(#cheekGrad)" />

          {/* eyebrows */}
          <path d="M148 140 Q170 124 195 135" stroke="#2a1c18" strokeWidth="6.5" strokeLinecap="round" fill="none" />
          <path d="M229 135 Q254 124 276 140" stroke="#2a1c18" strokeWidth="6.5" strokeLinecap="round" fill="none" />

          {/* eyes with lashes */}
          <g>
            <ellipse cx="173" cy="167" rx="18" ry="13.5" fill="#fff" />
            <circle cx="175" cy="168" r="9" fill="#3a2418" />
            <circle cx="178" cy="164" r="2.6" fill="#fff" />
            <path d="M156 160 L149 155 M160 156 L155 149 M167 154 L164 147" stroke="#2a1c18" strokeWidth="2" strokeLinecap="round" />

            <ellipse cx="251" cy="167" rx="18" ry="13.5" fill="#fff" />
            <circle cx="249" cy="168" r="9" fill="#3a2418" />
            <circle cx="252" cy="164" r="2.6" fill="#fff" />
            <path d="M268 160 L275 155 M264 156 L269 149 M257 154 L260 147" stroke="#2a1c18" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* eyelids for blink */}
          <rect x="153" y="153" width="42" height={blink ? 27 : 0} fill="url(#skinGrad)" style={{ transition: 'height 0.08s ease' }} />
          <rect x="229" y="153" width="42" height={blink ? 27 : 0} fill="url(#skinGrad)" style={{ transition: 'height 0.08s ease' }} />

          {/* bindi */}
          <circle cx="212" cy="122" r="3.6" fill="#2f6b52" />

          {/* nose */}
          <path d="M212 171 Q208 186 214 192 Q218 194 222 191" stroke="#c9895e" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* mouth */}
          {mouthOpen ? (
            <>
              <ellipse cx="212" cy="216" rx="18" ry="13" fill="#7a3b34" />
              <ellipse cx="212" cy="211" rx="16" ry="4" fill="#fff" opacity="0.85" />
            </>
          ) : (
            <path d="M186 211 Q212 230 238 211 Q212 224 186 211 Z" fill="#b5544a" />
          )}
          {!mouthOpen && (
            <path d="M188 212 Q212 202 236 212" stroke="#7a3b34" strokeWidth="2" fill="none" opacity="0.35" />
          )}

          {/* hair front / face frame */}
          <path
            d="M132 152 C120 98 152 60 212 58 C272 60 304 98 292 152
               C289 130 272 108 250 102 C257 88 240 76 212 76
               C184 76 167 88 174 102 C152 108 135 130 132 152 Z"
            fill="url(#hairGrad)"
          />
          <path d="M174 102 C181 90 197 82 212 82" stroke="url(#hairShine)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7" />

          {/* small flower accessory */}
          <g transform="translate(268,96)">
            <circle r="5" fill="#f4a259" />
            <circle cx="7" cy="-2" r="4" fill="#f2c6c2" />
            <circle cx="-6" cy="-3" r="4" fill="#f2c6c2" />
            <circle cx="2" cy="8" r="4" fill="#f2c6c2" />
          </g>
        </g>
      </g>

      {/* sparkle particles while talking */}
      {sparkles.map((s) => (
        <circle key={s.id} className="char-sparkle" cx={s.x} cy={s.y} r="3" fill="#f4a259" />
      ))}
    </svg>
  );
}
