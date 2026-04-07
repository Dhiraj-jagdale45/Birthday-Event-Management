import { Link } from "react-router-dom";

const services = [
  {
    emoji: "🎈",
    title: "Balloon Decoration",
    desc: "Stunning balloon arches, columns, bouquets and custom sculptures that transform any venue.",
    path: "/services/balloon-decoration",
    color: "#e8194b",
  },
  {
    emoji: "🎭",
    title: "Artist Management",
    desc: "Professional entertainers — magicians, clowns, puppeteers and more to keep guests thrilled.",
    path: "/services/artist",
    color: "#9b27af",
  },
  {
    emoji: "🎠",
    title: "Fun Activities",
    desc: "Bouncing castles, face painting, pottery, caricature art and dozens of exciting games.",
    path: "/services/fun-activity",
    color: "#1976d2",
  },
  {
    emoji: "🎤",
    title: "Stage Artists",
    desc: "Live performances, anchors, dance troupes and stage productions for spectacular shows.",
    path: "/services/stage-artists",
    color: "#f57c00",
  },
  {
    emoji: "🍭",
    title: "Fun Eatables",
    desc: "Candy floss, popcorn machines, chocolate fountains and themed food stalls for pure delight.",
    path: "/services/fun-eatables",
    color: "#388e3c",
  },
  {
    emoji: "📸",
    title: "Media",
    desc: "Professional photographers and videographers to capture every precious moment forever.",
    path: "/services/media",
    color: "#00838f",
  },
  {
    emoji: "🎂",
    title: "Cakes",
    desc: "Custom themed cakes, cupcakes and dessert tables crafted by our talented pastry artists.",
    path: "/services/cakes",
    color: "#c2185b",
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services-section {
          padding: 5rem 1.5rem;
          background: #fff;
          font-family: 'Montserrat', sans-serif;
        }
        .services-section__header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3.5rem;
        }
        .section-tag {
          display: inline-block;
          background: #fff5f7;
          color: #e8194b;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.35rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
          border: 1px solid #ffd0da;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #1a0a0f;
          line-height: 1.25;
          margin-bottom: 1rem;
        }
        .section-desc {
          color: #666;
          font-size: 0.88rem;
          line-height: 1.7;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .service-card {
          background: #fff;
          border: 1.5px solid #f0e8ea;
          border-radius: 12px;
          padding: 2rem 1.5rem;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-color, #e8194b);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          border-color: transparent;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card__emoji {
          font-size: 2.4rem;
          display: block;
        }
        .service-card__title {
          font-size: 1rem;
          font-weight: 700;
          color: #1a0a0f;
          letter-spacing: 0.02em;
        }
        .service-card__desc {
          font-size: 0.82rem;
          color: #666;
          line-height: 1.6;
          flex: 1;
        }
        .service-card__link {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--card-color, #e8194b);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 0.5rem;
        }
        .service-card__link::after {
          content: '→';
          transition: transform 0.2s;
        }
        .service-card:hover .service-card__link::after { transform: translateX(4px); }
      `}</style>

      <section className="services-section">
        <div className="services-section__header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Complete Birthday Party Services</h2>
          <p className="section-desc">
            From balloon decorations to live performances — we handle everything
            so you can focus on making memories with your little one.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.path}
              className="service-card"
              style={{ "--card-color": s.color }}
            >
              <span className="service-card__emoji">{s.emoji}</span>
              <div className="service-card__title">{s.title}</div>
              <div className="service-card__desc">{s.desc}</div>
              <div className="service-card__link">Learn More</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
