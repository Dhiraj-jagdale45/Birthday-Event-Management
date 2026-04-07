import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    tag: "We Create You Celebrate",
    heading: "Planning a Birthday Party in our busy city is not so easy, and it takes skills and time to make it all look easy-going",
    bg: "linear-gradient(135deg, #1a0a0f 0%, #3d0d1e 50%, #6b1a32 100%)",
    emoji: "🎂",
  },
  {
    id: 2,
    tag: "Theme Party Specialists",
    heading: "Unforgettable themed parties tailored for every child, every age, every dream — we bring the magic to life",
    bg: "linear-gradient(135deg, #0a1a3d 0%, #1a2d6b 50%, #2a3d8b 100%)",
    emoji: "🎪",
  },
  {
    id: 3,
    tag: "Balloon Decoration Experts",
    heading: "From elegant arches to whimsical sculptures — our balloon artists transform venues into wonderlands",
    bg: "linear-gradient(135deg, #1a0a2e 0%, #3d1a6b 50%, #5a2d8b 100%)",
    emoji: "🎈",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 400);
  };

  const slide = slides[current];

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
        }
        .hero__bg {
          position: absolute; inset: 0;
          transition: background 0.8s ease;
          z-index: 0;
        }
        .hero__particles {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          overflow: hidden;
        }
        .hero__particle {
          position: absolute;
          border-radius: 50%;
          animation: floatUp linear infinite;
          opacity: 0.18;
        }
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.18; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }
        .hero__content {
          position: relative; z-index: 2;
          text-align: center;
          max-width: 860px;
          // padding: 1rem 1.5rem;
          transition: opacity 0.4s, transform 0.4s;
        }
        .hero__content.fade { opacity: 0; transform: translateY(20px); }
        .hero__emoji {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .hero__tag {
          display: inline-block;
          background: rgba(247,201,72,0.2);
          border: 1px solid rgba(247,201,72,0.5);
          color: #f7c948;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }
        .hero__heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 1rem;
          text-shadow: 0 2px 20px rgba(0,0,0,0.4);
        }
        .hero__heading em { color: #f7c948; font-style: normal; }
        .hero__actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero__btn {
          padding: 0.9rem 2.2rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
        }
        .hero__btn--primary {
          background: #e8194b;
          color: #fff;
          box-shadow: 0 4px 20px rgba(232,25,75,0.4);
        }
        .hero__btn--primary:hover { background: #b8012e; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,25,75,0.5); }
        .hero__btn--outline {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.6);
        }
        .hero__btn--outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; transform: translateY(-2px); }

        .hero__dots {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; gap: 0.6rem; z-index: 3;
        }
        .hero__dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.4);
          border: none; cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          padding: 0;
        }
        .hero__dot.active { background: #f7c948; transform: scale(1.3); }

        .hero__scroll {
          position: absolute; bottom: 2rem; right: 2rem; z-index: 3;
          display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
          color: rgba(255,255,255,0.5); font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
        .hero__scroll-line {
          width: 1px; height: 40px; background: rgba(255,255,255,0.3);
          animation: scrollPulse 1.5s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%,100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        /* Quick links bar */
        .hero__quicklinks {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          overflow-x: auto;
        }
        .hero__quicklink {
          display: flex; flex-direction: column; align-items: center;
          padding: 1rem 2rem; gap: 0.4rem;
          text-decoration: none;
          color: rgba(255,255,255,0.8);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-right: 1px solid rgba(255,255,255,0.1);
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
          flex: 1;
        }
        .hero__quicklink:hover { background: rgba(232,25,75,0.2); color: #fff; }
        .hero__quicklink span:first-child { font-size: 1.5rem; }
      `}</style>

      <section className="hero">
        <div className="hero__bg" style={{ background: slide.bg }} />

        {/* Floating particles */}
        <div className="hero__particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="hero__particle" style={{
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              left: `${(i * 8.5) % 100}%`,
              animationDuration: `${6 + (i % 5) * 2}s`,
              animationDelay: `${i * 0.7}s`,
              background: i % 3 === 0 ? "#f7c948" : i % 3 === 1 ? "#e8194b" : "#fff",
            }} />
          ))}
        </div>

        <div className={`hero__content${animating ? " fade" : ""}`}>
          <span className="hero__emoji">{slide.emoji}</span>
          <div className="hero__tag">{slide.tag}</div>
          <h1 className="hero__heading">{slide.heading}</h1>
          <div className="hero__actions">
            <Link to="/contact" className="hero__btn hero__btn--primary">🎉 Book Your Party</Link>
            <Link to="/themes" className="hero__btn hero__btn--outline">🎨 View Themes</Link>
          </div>
        </div>

        <div className="hero__dots">
          {slides.map((_, i) => (
            <button key={i} className={`hero__dot${current === i ? " active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>

        <div className="hero__quicklinks">
          {[
            { emoji: "🎈", label: "Balloon Decoration", path: "/services/balloon-decoration" },
            { emoji: "🎭", label: "Theme Parties", path: "/themes" },
            { emoji: "🎨", label: "Artist Management", path: "/services/artist" },
            { emoji: "🍭", label: "Fun Eatables", path: "/services/fun-eatables" },
            { emoji: "📦", label: "Packages", path: "/packages" },
          ].map((q) => (
            <Link key={q.label} to={q.path} className="hero__quicklink">
              <span>{q.emoji}</span>
              <span>{q.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
