import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BASE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700;800&display=swap');
  :root{--red:#e8194b;--red-dk:#b8012e;--gold:#f7c948;--dark:#1a0a0f;
    --white:#fff;--muted:#fdf8f9;--text:#333;--subtle:#666;--border:#f0e8ea}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Montserrat',sans-serif;color:var(--text)}
  .stag{display:inline-block;background:#fff5f7;color:var(--red);font-size:.68rem;
    font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:.35rem 1rem;
    border-radius:50px;margin-bottom:.9rem;border:1px solid #ffd0da}
  .stitle{font-family:'Playfair Display',serif;font-size:clamp(1.7rem,3vw,2.6rem);
    font-weight:700;color:var(--dark);line-height:1.25;margin-bottom:.9rem}
  .sdesc{color:var(--subtle);font-size:.88rem;line-height:1.75}
`;

const services = [
  {
    id: "balloon",
    emoji: "🎈",
    title: "Balloon Decoration",
    tagline: "Transform any space into a wonderland",
    color: "#e8194b",
    bg: "linear-gradient(135deg,#e8194b,#6b1a32)",
    desc: "Our balloon artists are experts at creating breathtaking setups that leave guests in awe. From classic balloon bouquets to elaborate custom sculptures, we do it all.",
    features: ["Balloon Arches & Gates","Column Bouquets","Custom Balloon Sculptures","Ceiling Installations","Photo Booth Backdrops","Letter & Number Balloons","Outdoor Balloon Décor","Foil & Latex Combinations"],
    path: "/services/balloon-decoration",
  },
  {
    id: "artist",
    emoji: "🎭",
    title: "Artist Management",
    tagline: "Professional entertainers for every taste",
    color: "#9b27af",
    bg: "linear-gradient(135deg,#9b27af,#4a0d5c)",
    desc: "We manage a curated roster of talented artists who know exactly how to engage children of all ages, keeping every guest entertained from start to finish.",
    features: ["Magicians & Illusionists","Clowns & Jesters","Puppeteers","Balloon Modelling Artists","Face Painters","Caricature Artists","Pottery & Clay Artists","Mehendi Artists"],
    path: "/services/artist",
  },
  {
    id: "fun-activity",
    emoji: "🎠",
    title: "Fun Activities",
    tagline: "Non-stop excitement for kids",
    color: "#1976d2",
    bg: "linear-gradient(135deg,#1976d2,#0d47a1)",
    desc: "Keep every child active, engaged, and giggling with our wide range of interactive games and activities, carefully selected for different age groups.",
    features: ["Bouncing Castle","Balloon Fun Shooting","Hoopla Ring Game","Treasure Hunt","Musical Chairs","Relay Races","Pin the Tail","Lego Building Contest"],
    path: "/services/fun-activity",
  },
  {
    id: "stage",
    emoji: "🎤",
    title: "Stage Artists",
    tagline: "Live performances that wow the crowd",
    color: "#f57c00",
    bg: "linear-gradient(135deg,#f57c00,#7c3500)",
    desc: "From professional MCs and anchors to dance troupes and live bands, our stage artists ensure your event has the high-energy entertainment it deserves.",
    features: ["Professional Anchors / MCs","Dance Troupes","Live Band Performances","Stand-up Comedy (Age-appropriate)","Puppet Theatre Shows","Drama & Storytelling","Ventriloquist Acts","Character Appearances"],
    path: "/services/stage-artists",
  },
  {
    id: "eatables",
    emoji: "🍭",
    title: "Fun Eatables",
    tagline: "Delicious treats kids absolutely love",
    color: "#388e3c",
    bg: "linear-gradient(135deg,#388e3c,#1b5e20)",
    desc: "Complete your party with irresistible themed food stations that add excitement and color to the celebration. Kids and adults alike love our fun eatables!",
    features: ["Candy Floss Machine","Popcorn Machine","Chocolate Fountain","Slush Machine","Waffle Station","Nachos & Dip Counter","Mini Donut Station","Ice Cream Cart"],
    path: "/services/fun-eatables",
  },
  {
    id: "media",
    emoji: "📸",
    title: "Media",
    tagline: "Every precious moment, captured forever",
    color: "#00838f",
    bg: "linear-gradient(135deg,#00838f,#004d57)",
    desc: "Professional photographers and videographers who specialize in children's events. We capture not just moments, but the emotions, laughter, and pure joy of your celebration.",
    features: ["Professional Photography","Cinematic Videography","Drone Shots (Outdoor)","Photo Booth Setup","Instant Photo Printing","Slideshow Creation","Social Media Ready Edits","Same-Day Highlight Reel"],
    path: "/services/media",
  },
  {
    id: "cakes",
    emoji: "🎂",
    title: "Cakes",
    tagline: "Custom cakes as unique as your child",
    color: "#c2185b",
    bg: "linear-gradient(135deg,#c2185b,#6a0930)",
    desc: "Our talented pastry team crafts stunning custom-designed cakes that match your party theme perfectly — almost too beautiful to cut!",
    features: ["Custom Themed Cakes","Multi-Tier Wedding Style","Cupcake Towers","Dessert Tables","Character Cakes","Photo Print Cakes","Eggless & Vegan Options","Cake Smash Setups"],
    path: "/services/cakes",
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState("balloon");
  const activeService = services.find(s => s.id === active);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{BASE_CSS + `
        /* ── hero ── */
        .page-hero{padding:5rem 1.5rem 3.5rem;text-align:center;
          background:linear-gradient(160deg,var(--dark),#3d0d1e);position:relative;overflow:hidden}
        .page-hero__bg{position:absolute;font-size:14rem;opacity:.04;right:-2rem;top:50%;
          transform:translateY(-50%);pointer-events:none}
        .page-hero .stag{background:rgba(247,201,72,.15);border-color:rgba(247,201,72,.3);color:var(--gold)}
        .page-hero .stitle{color:#fff}
        .page-hero .sdesc{color:rgba(255,255,255,.65);max-width:600px;margin:0 auto 0}
        .crumb{display:flex;align-items:center;justify-content:center;gap:.5rem;
          font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;
          color:rgba(255,255,255,.4);margin-bottom:1.5rem}
        .crumb a{color:var(--gold);text-decoration:none}

        /* ── layout ── */
        .svc-layout{display:grid;grid-template-columns:280px 1fr;min-height:70vh;
          max-width:1200px;margin:0 auto;padding:3rem 1.5rem;gap:2.5rem}
        @media(max-width:900px){.svc-layout{grid-template-columns:1fr}}

        /* ── sidebar tabs ── */
        .svc-tabs{display:flex;flex-direction:column;gap:.5rem;position:sticky;top:130px;
          align-self:flex-start}
        @media(max-width:900px){.svc-tabs{flex-direction:row;overflow-x:auto;position:static;
          padding-bottom:.5rem;flex-wrap:wrap}}
        .svc-tab{display:flex;align-items:center;gap:.8rem;padding:.85rem 1.1rem;
          border-radius:10px;cursor:pointer;transition:all .25s;
          background:transparent;border:1.5px solid var(--border);
          font-family:'Montserrat',sans-serif;text-align:left;width:100%;white-space:nowrap}
        @media(max-width:900px){.svc-tab{width:auto;flex-shrink:0}}
        .svc-tab:hover{border-color:var(--red);background:#fff5f7}
        .svc-tab.active{background:var(--red);border-color:var(--red);color:#fff;
          box-shadow:0 6px 20px rgba(232,25,75,.3)}
        .svc-tab__emoji{font-size:1.2rem;flex-shrink:0}
        .svc-tab__label{font-size:.78rem;font-weight:600;letter-spacing:.03em}

        /* ── detail panel ── */
        .svc-detail{animation:fadeSlide .35s ease}
        @keyframes fadeSlide{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        .svc-detail__hero{border-radius:20px;padding:3rem 2.5rem;
          display:flex;align-items:flex-end;justify-content:space-between;
          flex-wrap:wrap;gap:1.5rem;margin-bottom:2rem;position:relative;overflow:hidden}
        .svc-detail__hero::before{content:'';position:absolute;inset:0;
          background:rgba(0,0,0,.25)}
        .svc-detail__hero-text{position:relative;z-index:1}
        .svc-detail__emoji{font-size:5rem;position:relative;z-index:1;
          filter:drop-shadow(0 8px 16px rgba(0,0,0,.3));
          animation:floatEmoji 3s ease-in-out infinite}
        @keyframes floatEmoji{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .svc-detail__tag{font-size:.65rem;font-weight:700;letter-spacing:.18em;
          text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:.5rem}
        .svc-detail__title{font-family:'Playfair Display',serif;font-size:2.2rem;
          font-weight:700;color:#fff;margin-bottom:.4rem}
        .svc-detail__tagline{font-size:.9rem;color:rgba(255,255,255,.8);font-style:italic}
        .svc-detail__body{display:grid;grid-template-columns:1fr 1fr;gap:2rem}
        @media(max-width:700px){.svc-detail__body{grid-template-columns:1fr}}
        .svc-detail__desc{font-size:.88rem;color:var(--subtle);line-height:1.8;margin-bottom:1.5rem}
        .svc-detail__cta{display:inline-flex;align-items:center;gap:.5rem;
          background:var(--red);color:#fff;padding:.8rem 1.8rem;border-radius:4px;
          text-decoration:none;font-size:.75rem;font-weight:700;letter-spacing:.1em;
          text-transform:uppercase;transition:all .2s}
        .svc-detail__cta:hover{background:var(--red-dk);transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(232,25,75,.35)}
        .features-heading{font-size:.7rem;font-weight:700;letter-spacing:.14em;
          text-transform:uppercase;color:var(--red);margin-bottom:1rem}
        .features-list{list-style:none;display:flex;flex-direction:column;gap:.6rem}
        .features-list li{display:flex;align-items:center;gap:.6rem;
          font-size:.82rem;color:var(--text)}
        .features-list li::before{content:'✓';width:20px;height:20px;border-radius:50%;
          background:color-mix(in srgb,var(--active-color,var(--red)) 12%,transparent);
          color:var(--active-color,var(--red));display:flex;align-items:center;
          justify-content:center;font-size:.65rem;font-weight:800;flex-shrink:0}

        /* ── all services grid (mobile fallback) ── */
        .all-svc-grid{display:none;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
          gap:1.5rem;max-width:1200px;margin:2rem auto;padding:0 1.5rem}
        @media(max-width:600px){.all-svc-grid{display:grid}.svc-layout{display:none}}
        .all-svc-card{background:#fff;border:1.5px solid var(--border);border-radius:14px;
          padding:2rem 1.5rem;text-decoration:none;color:inherit;display:flex;
          flex-direction:column;gap:.8rem;transition:all .3s;position:relative;overflow:hidden}
        .all-svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:var(--sc,var(--red));transform:scaleX(0);transition:transform .3s}
        .all-svc-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(0,0,0,.1);border-color:transparent}
        .all-svc-card:hover::before{transform:scaleX(1)}
        .all-svc-card__emoji{font-size:2.2rem}
        .all-svc-card__title{font-size:.95rem;font-weight:700;color:var(--dark)}
        .all-svc-card__desc{font-size:.8rem;color:var(--subtle);line-height:1.6;flex:1}
        .all-svc-card__link{font-size:.7rem;font-weight:700;letter-spacing:.1em;
          text-transform:uppercase;color:var(--sc,var(--red))}
      `}</style>

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">🎪</div>
        <div className="crumb">
          <Link to="/">Home</Link><span>/</span>
          <span style={{color:"rgba(255,255,255,.6)"}}>Services</span>
        </div>
        <span className="stag">What We Offer</span>
        <h1 className="stitle">Complete Birthday Party Services</h1>
        <p className="sdesc">From balloon décor to live entertainment — everything you need for the perfect celebration, under one roof.</p>
      </section>

      {/* Interactive layout (tablet+) */}
      <div className="svc-layout">
        {/* Sidebar */}
        <div className="svc-tabs">
          {services.map(s => (
            <button key={s.id} className={`svc-tab${active === s.id ? " active" : ""}`} onClick={() => setActive(s.id)}>
              <span className="svc-tab__emoji">{s.emoji}</span>
              <span className="svc-tab__label">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div key={active} className="svc-detail">
          <div className="svc-detail__hero" style={{background: activeService.bg}}>
            <div className="svc-detail__hero-text">
              <div className="svc-detail__tag">Birthday Bumps Service</div>
              <div className="svc-detail__title">{activeService.title}</div>
              <div className="svc-detail__tagline">"{activeService.tagline}"</div>
            </div>
            <div className="svc-detail__emoji">{activeService.emoji}</div>
          </div>

          <div className="svc-detail__body">
            <div>
              <p className="svc-detail__desc">{activeService.desc}</p>
              <p className="svc-detail__desc">
                Our {activeService.title.toLowerCase()} service can be customised to match your party theme, budget, and venue. We've handled everything from intimate house parties to grand venue celebrations.
              </p>
              <Link to="/contact" className="svc-detail__cta">🎉 Book This Service</Link>
            </div>
            <div>
              <div className="features-heading">What's Included</div>
              <ul className="features-list" style={{"--active-color": activeService.color}}>
                {activeService.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile card grid */}
      <div className="all-svc-grid">
        {services.map(s => (
          <Link key={s.id} to={s.path} className="all-svc-card" style={{"--sc": s.color}}>
            <div className="all-svc-card__emoji">{s.emoji}</div>
            <div className="all-svc-card__title">{s.title}</div>
            <div className="all-svc-card__desc">{s.desc}</div>
            <div className="all-svc-card__link">Learn More →</div>
          </Link>
        ))}
      </div>

      {/* CTA band */}
      <div style={{background:"linear-gradient(135deg,var(--red),#6b1a32)",padding:"4rem 1.5rem",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",fontSize:"10rem",opacity:.06,right:"5%",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}>🎈</div>
        <h2 style={{fontFamily:"Playfair Display,serif",fontSize:"clamp(1.6rem,3vw,2.4rem)",color:"#fff",marginBottom:"1rem"}}>
          Mix & Match Our Services
        </h2>
        <p style={{color:"rgba(255,255,255,.75)",fontSize:".88rem",marginBottom:"2rem",maxWidth:"500px",margin:"0 auto 2rem"}}>
          Create your perfect party package by combining any of our services. Our team will help you pick the right mix for your budget.
        </p>
        <Link to="/packages" style={{display:"inline-flex",alignItems:"center",gap:".5rem",background:"#fff",color:"var(--red)",padding:".9rem 2.2rem",borderRadius:"4px",textDecoration:"none",fontSize:".78rem",fontWeight:"700",letterSpacing:".1em",textTransform:"uppercase",transition:"all .2s",marginRight:"1rem"}}>
          📦 View Packages
        </Link>
        <Link to="/contact" style={{display:"inline-flex",alignItems:"center",gap:".5rem",border:"2px solid rgba(255,255,255,.6)",color:"#fff",padding:".85rem 2rem",borderRadius:"4px",textDecoration:"none",fontSize:".78rem",fontWeight:"700",letterSpacing:".1em",textTransform:"uppercase",transition:"all .2s"}}>
          📞 Talk to Us
        </Link>
      </div>
    </>
  );
}
