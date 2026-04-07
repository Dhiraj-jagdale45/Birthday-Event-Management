import { Link } from "react-router-dom";

const activities = [
  { emoji: "🏰", title: "Bouncing Castle", path: "/services/fun-activity", color: "#e8194b" },
  { emoji: "🎯", title: "Balloon Fun Shooting", path: "/services/fun-activity", color: "#1976d2" },
  { emoji: "💍", title: "Ring Game with Gifts", path: "/services/fun-activity", color: "#388e3c" },
  { emoji: "🎈", title: "Balloon Modelling", path: "/services/fun-activity", color: "#9b27af" },
  { emoji: "🎨", title: "Face Painting", path: "/services/artist", color: "#f57c00" },
  { emoji: "🏺", title: "Pottery", path: "/services/artist", color: "#795548" },
  { emoji: "✏️", title: "Caricature Art", path: "/services/artist", color: "#00838f" },
  { emoji: "🪄", title: "Magic Show", path: "/services/stage-artists", color: "#e91e8c" },
];

export default function FunActivities() {
  return (
    <>
      <style>{`
        .fun-section {
          padding: 5rem 1.5rem;
          background: #1a0a0f;
          font-family: 'Montserrat', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .fun-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(ellipse, rgba(232,25,75,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .fun-section__header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
          position: relative;
          z-index: 1;
        }
        .fun-section__header .section-tag {
          background: rgba(232,25,75,0.15);
          border-color: rgba(232,25,75,0.3);
          color: #f7c948;
        }
        .fun-section__header .section-title { color: #fff; }
        .fun-section__header .section-desc { color: rgba(255,255,255,0.6); }

        .fun-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .fun-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 1.8rem 1rem;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          position: relative;
          overflow: hidden;
        }
        .fun-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--fc, #e8194b);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .fun-card:hover {
          transform: translateY(-6px);
          border-color: var(--fc, #e8194b);
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
        }
        .fun-card:hover::before { opacity: 0.08; }
        .fun-card__emoji {
          font-size: 2.5rem;
          position: relative;
          z-index: 1;
          transition: transform 0.3s;
        }
        .fun-card:hover .fun-card__emoji { transform: scale(1.2) rotate(-5deg); }
        .fun-card__title {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.04em;
          position: relative;
          z-index: 1;
        }
        .fun-card__tag {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--fc, #e8194b);
          position: relative;
          z-index: 1;
        }

        .fun-cta {
          text-align: center;
          margin-top: 3rem;
          position: relative;
          z-index: 1;
        }
        .fun-cta a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #e8194b;
          color: #fff;
          padding: 0.9rem 2.2rem;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.2s;
        }
        .fun-cta a:hover { background: #b8012e; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(232,25,75,0.4); }
      `}</style>

      <section className="fun-section">
        <div className="fun-section__header">
          <span className="section-tag">Kids Love These</span>
          <h2 className="section-title">Fun Activities for Birthday Parties</h2>
          <p className="section-desc">
            Keep every guest entertained with our wide range of exciting activities — from high-energy games to creative arts and crafts.
          </p>
        </div>

        <div className="fun-grid">
          {activities.map((a) => (
            <Link key={a.title} to={a.path} className="fun-card" style={{ "--fc": a.color }}>
              <div className="fun-card__emoji">{a.emoji}</div>
              <div className="fun-card__title">{a.title}</div>
              <div className="fun-card__tag">Book Now →</div>
            </Link>
          ))}
        </div>

        <div className="fun-cta">
          <Link to="/services/fun-activity">🎠 Explore All Activities</Link>
        </div>
      </section>
    </>
  );
}
