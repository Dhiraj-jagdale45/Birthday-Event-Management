import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── shared CSS variables (same palette as the rest of the site) ── */
const BASE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700;800&display=swap');
  :root{
    --red:#e8194b; --red-dk:#b8012e; --gold:#f7c948;
    --dark:#1a0a0f; --white:#fff; --muted:#fdf8f9;
    --text:#333; --subtle:#666; --border:#f0e8ea;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Montserrat',sans-serif;color:var(--text)}
`;

/* ── section-tag & section-title helpers (reused across all pages) ── */
const SHARED_CSS = `
  .stag{display:inline-block;background:#fff5f7;color:var(--red);font-size:.68rem;
    font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:.35rem 1rem;
    border-radius:50px;margin-bottom:.9rem;border:1px solid #ffd0da}
  .stitle{font-family:'Playfair Display',serif;font-size:clamp(1.7rem,3vw,2.6rem);
    font-weight:700;color:var(--dark);line-height:1.25;margin-bottom:.9rem}
  .sdesc{color:var(--subtle);font-size:.88rem;line-height:1.75}
  .page-hero{padding:5rem 1.5rem 3.5rem;text-align:center;
    background:linear-gradient(160deg,var(--dark) 0%,#3d0d1e 100%);
    position:relative;overflow:hidden}
  .page-hero__bg-emoji{position:absolute;font-size:14rem;opacity:.04;
    right:-2rem;top:50%;transform:translateY(-50%);pointer-events:none;line-height:1}
  .page-hero .stag{background:rgba(247,201,72,.15);border-color:rgba(247,201,72,.3);color:var(--gold)}
  .page-hero .stitle{color:#fff;margin-bottom:1rem}
  .page-hero .sdesc{color:rgba(255,255,255,.65);max-width:640px;margin:0 auto 2rem}
  .page-hero__crumb{display:flex;align-items:center;justify-content:center;gap:.5rem;
    font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;
    color:rgba(255,255,255,.4);margin-bottom:1.5rem}
  .page-hero__crumb a{color:var(--gold);text-decoration:none}
  .page-hero__crumb span{color:rgba(255,255,255,.3)}
  .section{padding:5rem 1.5rem;max-width:1200px;margin:0 auto}
  .section--full{padding:5rem 1.5rem;background:var(--muted)}
  .section--dark{padding:5rem 1.5rem;background:var(--dark)}
  .inner{max-width:1200px;margin:0 auto}
`;

/* ── timeline data ── */
const timeline = [
  {
    year: "2016",
    title: "Birthday Bumps is Born",
    desc: "Founded by Shahid with a vision to transform birthday celebrations in Bangalore. Started with a small team of 3 passionate party planners.",
  },
  {
    year: "2018",
    title: "Expanded Our Team",
    desc: "Grew to 15 full-time staff and 100+ verified artists. Launched balloon decoration as a dedicated service after overwhelming demand.",
  },
  {
    year: "2020",
    title: "500+ Happy Families",
    desc: "Hit a major milestone despite challenging times. Introduced virtual party consulting and DIY party kits for at-home celebrations.",
  },
  {
    year: "2022",
    title: "Award & Recognition",
    desc: "Recognized as Bangalore's Top Birthday Party Organizer by local event industry bodies. Expanded to baby showers and naming ceremonies.",
  },
  {
    year: "2024",
    title: "2400+ Celebrations",
    desc: "Today we're proud to have organized over 2405 parties with a team of 35 professionals and 1000+ verified artists across Bangalore.",
  },
];

/* ── values ── */
const values = [
  {
    emoji: "💛",
    title: "Child-First Approach",
    desc: "Every decision we make centers on creating the most joyful, safe, and magical experience for your child.",
  },
  {
    emoji: "🎯",
    title: "Attention to Detail",
    desc: "No detail is too small. From the balloon colors to the cake topper, we craft every element with precision.",
  },
  {
    emoji: "🤝",
    title: "Transparent Pricing",
    desc: "Clear, upfront pricing with no hidden costs. We work within your budget without ever compromising quality.",
  },
  {
    emoji: "⚡",
    title: "Reliable & Punctual",
    desc: "We show up on time, every time. Your event timeline is sacred to us — no delays, no excuses.",
  },
  {
    emoji: "🌟",
    title: "Creative Innovation",
    desc: "We track global party trends and bring fresh, avant-garde concepts to every celebration.",
  },
  {
    emoji: "📞",
    title: "Dedicated Support",
    desc: "A personal event manager is assigned to your party from booking to the final cleanup.",
  },
];

/* ── team ── */
const team = [
  {
    emoji: "👨",
    name: "Shahid",
    role: "Founder & Creative Director",
    color: "#e8194b",
  },
  {
    emoji: "👨‍💼",
    name: "Robin",
    role: "Senior Event Manager",
    color: "#1976d2",
  },
  { emoji: "👩‍🎨", name: "Priya", role: "Lead Balloon Artist", color: "#9b27af" },
  {
    emoji: "👨‍🍳",
    name: "Ravi",
    role: "Fun Eatables Specialist",
    color: "#388e3c",
  },
];

/* ── animated counter hook ── */
function useCountUp(target, duration = 1800, start = false) {
  const [c, setC] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setC(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return c;
}

function StatNum({ v, suffix, label, emoji, started }) {
  const c = useCountUp(v, 1800, started);
  return (
    <div className="abt-stat">
      <div className="abt-stat__emoji">{emoji}</div>
      <div className="abt-stat__val">
        {c.toLocaleString()}
        {suffix}
      </div>
      <div className="abt-stat__lbl">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStatsStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>
        {BASE_CSS +
          SHARED_CSS +
          `
        /* ── hero shapes ── */
        .page-hero__shape{position:absolute;border-radius:50%;pointer-events:none}

        /* ── stats bar ── */
        .abt-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
          gap:1.5rem;max-width:1000px;margin:0 auto;padding:0 1.5rem}
        .abt-stat{text-align:center;padding:2rem 1rem;background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);border-radius:12px;
          transition:background .3s,transform .3s}
        .abt-stat:hover{background:rgba(255,255,255,.1);transform:translateY(-4px)}
        .abt-stat__emoji{font-size:1.8rem;margin-bottom:.6rem}
        .abt-stat__val{font-size:clamp(2rem,3.5vw,2.8rem);font-weight:800;
          color:var(--gold);line-height:1;margin-bottom:.4rem;letter-spacing:-.02em}
        .abt-stat__lbl{font-size:.7rem;font-weight:600;color:rgba(255,255,255,.7);
          letter-spacing:.1em;text-transform:uppercase}

        /* ── story ── */
        .story-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;
          max-width:1200px;margin:0 auto;padding:5rem 1.5rem}
        @media(max-width:768px){.story-grid{grid-template-columns:1fr;gap:2.5rem}}
        .story-visual{position:relative}
        .story-visual__card{background:linear-gradient(135deg,var(--red),#6b1a32);
          border-radius:20px;aspect-ratio:1;display:flex;align-items:center;
          justify-content:center;font-size:7rem;
          box-shadow:0 24px 60px rgba(232,25,75,.3);overflow:hidden;position:relative}
        .story-visual__card::after{content:'';position:absolute;inset:0;
          background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.15),transparent 60%)}
        .story-badge{position:absolute;bottom:-1.2rem;right:-1.2rem;background:var(--gold);
          color:var(--dark);border-radius:50%;width:100px;height:100px;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          font-weight:800;box-shadow:0 8px 24px rgba(247,201,72,.4);text-align:center;
          font-size:.65rem;line-height:1.3;font-family:'Montserrat',sans-serif}
        .story-badge strong{font-size:1.8rem;display:block;line-height:1}
        .story-float{position:absolute;top:-1rem;left:-1rem;background:#fff;
          border-radius:10px;padding:.7rem 1.1rem;
          box-shadow:0 8px 24px rgba(0,0,0,.1);font-size:.72rem;
          font-weight:700;color:var(--dark);display:flex;align-items:center;gap:.5rem}
        .story-content p{font-size:.88rem;color:var(--subtle);line-height:1.8;margin-bottom:1rem}

        /* ── timeline ── */
        .tl{position:relative;max-width:800px;margin:0 auto;padding:0 1.5rem}
        .tl::before{content:'';position:absolute;left:50%;top:0;bottom:0;
          width:2px;background:linear-gradient(to bottom,transparent,var(--red),transparent);
          transform:translateX(-50%)}
        @media(max-width:640px){.tl::before{left:1.5rem}}
        .tl-item{display:flex;gap:2rem;margin-bottom:3rem;position:relative;align-items:flex-start}
        .tl-item:nth-child(even){flex-direction:row-reverse}
        @media(max-width:640px){.tl-item,.tl-item:nth-child(even){flex-direction:row;padding-left:3rem}}
        .tl-dot{position:absolute;left:50%;transform:translateX(-50%);
          width:44px;height:44px;border-radius:50%;background:var(--red);
          display:flex;align-items:center;justify-content:center;
          color:#fff;font-size:.72rem;font-weight:800;
          box-shadow:0 4px 16px rgba(232,25,75,.4);z-index:1;flex-shrink:0;
          top:0;letter-spacing:-.02em;line-height:1;text-align:center;font-family:'Montserrat',sans-serif}
        @media(max-width:640px){.tl-dot{left:1.5rem;transform:translateX(-50%)}}
        .tl-card{flex:1;background:#fff;border:1.5px solid var(--border);border-radius:12px;
          padding:1.4rem;transition:all .3s;max-width:calc(50% - 2.5rem)}
        .tl-card:hover{border-color:var(--red);box-shadow:0 8px 28px rgba(232,25,75,.1);transform:translateY(-3px)}
        @media(max-width:640px){.tl-card{max-width:100%}}
        .tl-card__year{font-size:.65rem;font-weight:700;letter-spacing:.15em;
          text-transform:uppercase;color:var(--red);margin-bottom:.4rem}
        .tl-card__title{font-size:.95rem;font-weight:700;color:var(--dark);margin-bottom:.4rem}
        .tl-card__desc{font-size:.8rem;color:var(--subtle);line-height:1.65}
        .tl-spacer{flex:1;max-width:calc(50% - 2.5rem)}
        @media(max-width:640px){.tl-spacer{display:none}}

        /* ── values ── */
        .values-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
          gap:1.5rem;max-width:1200px;margin:0 auto;padding:0 1.5rem}
        .val-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
          border-radius:14px;padding:2rem;transition:all .3s;position:relative;overflow:hidden}
        .val-card::before{content:'';position:absolute;inset:0;background:var(--red);
          opacity:0;transition:opacity .3s}
        .val-card:hover{border-color:rgba(232,25,75,.4);transform:translateY(-5px);
          box-shadow:0 12px 36px rgba(0,0,0,.3)}
        .val-card:hover::before{opacity:.06}
        .val-card__emoji{font-size:2rem;margin-bottom:.8rem;position:relative;z-index:1}
        .val-card__title{font-size:.9rem;font-weight:700;color:#fff;margin-bottom:.5rem;position:relative;z-index:1}
        .val-card__desc{font-size:.8rem;color:rgba(255,255,255,.55);line-height:1.65;position:relative;z-index:1}

        /* ── team ── */
        .team-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
          gap:1.5rem;max-width:1000px;margin:2.5rem auto 0;padding:0 1.5rem}
        .team-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;
          padding:2rem 1.5rem;text-align:center;transition:all .3s;overflow:hidden;position:relative}
        .team-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;
          background:var(--tc,var(--red));transform:scaleX(0);transition:transform .3s}
        .team-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(0,0,0,.1);border-color:transparent}
        .team-card:hover::before{transform:scaleX(1)}
        .team-card__avatar{width:80px;height:80px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;font-size:2.5rem;
          margin:0 auto 1rem;background:color-mix(in srgb,var(--tc,var(--red)) 15%,transparent)}
        .team-card__name{font-size:1rem;font-weight:700;color:var(--dark);margin-bottom:.3rem}
        .team-card__role{font-size:.72rem;color:var(--subtle);font-weight:500;letter-spacing:.04em}

        /* ── CTA band ── */
        .abt-cta{padding:4rem 1.5rem;background:linear-gradient(135deg,var(--red),#6b1a32);
          text-align:center;position:relative;overflow:hidden}
        .abt-cta::before{content:'🎉';position:absolute;font-size:10rem;opacity:.06;
          right:5%;top:50%;transform:translateY(-50%);pointer-events:none}
        .abt-cta h2{font-family:'Playfair Display',serif;font-size:clamp(1.6rem,3vw,2.4rem);
          color:#fff;margin-bottom:1rem}
        .abt-cta p{color:rgba(255,255,255,.75);font-size:.88rem;margin-bottom:2rem;max-width:520px;margin-left:auto;margin-right:auto}
        .btn-white{display:inline-flex;align-items:center;gap:.5rem;background:#fff;
          color:var(--red);padding:.9rem 2.2rem;border-radius:4px;text-decoration:none;
          font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          transition:all .2s;margin:.4rem}
        .btn-white:hover{background:var(--gold);color:var(--dark);transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(0,0,0,.2)}
        .btn-outline-white{display:inline-flex;align-items:center;gap:.5rem;
          border:2px solid rgba(255,255,255,.6);color:#fff;padding:.85rem 2rem;
          border-radius:4px;text-decoration:none;font-size:.78rem;font-weight:700;
          letter-spacing:.1em;text-transform:uppercase;transition:all .2s;margin:.4rem}
        .btn-outline-white:hover{background:rgba(255,255,255,.1);border-color:#fff;transform:translateY(-2px)}
      `}
      </style>

      {/* ── OUR STORY ── */}
      <div className="story-grid mb-5">
        <div className="story-visual">
          <div className="story-visual__card">🎂</div>
          {/* <div className="story-badge"><strong>8+</strong>Years<br/>in Business</div> */}
          <div className="story-float">⭐ #1 in Pune</div>
        </div>
        <div className="story-content">
          <span className="stag">Who We Are</span>
          <h2 className="stitle">
            We Create,
            <br />
            You Celebrate
          </h2>
          <p>
            Birthday Bumps was founded with a single, passionate belief:{" "}
            <strong>
              every child deserves a birthday that feels like magic.
            </strong>{" "}
            What started as a small team of three party enthusiasts in 2026 has
            grown into Pune's most trusted birthday party organizing company.
          </p>
          <p>
            We are not just event planners — we are dream-builders. Our team
            works tirelessly behind the scenes so that when the big day arrives,
            everything is picture-perfect, seamlessly executed, and utterly
            unforgettable.
          </p>
          <p>
            Being tech-savvy, we have an acute eye for the latest global party
            trends and infuse them into your celebrations to create truly{" "}
            <em>avant-garde</em> events. From a superhero bash to an elegant
            princess tea party — we bring any theme to life.
          </p>
          <div className="mb-5" style={{ marginTop: "2rem" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                background: "var(--red)",
                color: "#fff",
                padding: ".85rem 2rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: ".78rem",
                fontWeight: "700",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                transition: "all .2s",
              }}
            >
              🎉 Plan My Party
            </Link>
          </div>
        </div>
      </div>

      {/* ── TEAM ── */}

      <div className="row text-center mt-5">
        <h1 style={{color: "black", fontSize: "3rem"}}>Team Info</h1>
      </div>
      <div className="row mb-5 p-5">
        <div className="col text-center">
          <img
            src="/images/dhiraj2.png"
            alt="..."
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "10px auto",
              display: "block",
            }}
          />
          <div>
            <h5>Dhiraj Jagdale</h5>
          </div>
        </div>
        <div className="col text-center">
          <img
            src="/images/kunal.png"
            alt="..."
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "10px auto",
              display: "block",
            }}
          />
          <div>
            <h5>Kunal Joshi</h5>
          </div>
        </div>
        <div className="col text-center">
          <img
            src="/images/tanishq.png"
            alt="..."
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "10px auto",
              display: "block",
            }}
          />
          <div>
            <h5 className="card-title">Tanishq Kadam</h5>
          </div>
        </div>
        <div className="col text-center">
          <img
            src="/images/tushar.png"
            alt="..."
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "10px auto",
              display: "block", 
            }}
          />
          <div>
            <h5>Tushar Gadakh</h5>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="abt-cta">
        <h2>Ready to Create an Unforgettable Party?</h2>
        <p>
          Let our team handle every detail while you enjoy the celebration with
          your family.
        </p>
        <div>
          <Link to="/contact" className="btn-white">
            🎉 Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
