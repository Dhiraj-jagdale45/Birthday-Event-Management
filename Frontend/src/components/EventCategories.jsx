import { Link } from "react-router-dom";

const events = [
  { emoji: "🎂", title: "Birthday Party", desc: "Themed birthday celebrations for kids of all ages, complete with decor, activities and cake.", path: "/themes", color: "#e8194b", bg: "linear-gradient(135deg,#e8194b,#6b1a32)" },
  { emoji: "👶", title: "Baby Shower", desc: "Elegant and heartwarming baby shower setups to celebrate the newest arrival with style.", path: "/baby-shower", color: "#e91e8c", bg: "linear-gradient(135deg,#e91e8c,#880e4f)" },
  { emoji: "🏫", title: "Activities in Schools", desc: "Fun-filled activity sessions for school events, annual days and children's celebrations.", path: "/services/fun-activity", color: "#1976d2", bg: "linear-gradient(135deg,#1976d2,#0d47a1)" },
  { emoji: "🌟", title: "Naming Ceremonies", desc: "Beautiful naming ceremony setups that create a magical welcome for your newborn.", path: "/naming-cermonies", color: "#388e3c", bg: "linear-gradient(135deg,#388e3c,#1b5e20)" },
];

export default function EventCategories() {
  return (
    <>
      <style>{`
        .events-section {
          padding: 5rem 1.5rem;
          background: #fff;
          font-family: 'Montserrat', sans-serif;
        }
        .events-section__header {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 3rem;
        }
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .event-card {
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
          border: 1.5px solid #f0e8ea;
        }
        .event-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.14);
        }
        .event-card__top {
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          position: relative;
          overflow: hidden;
        }
        .event-card__top::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.15);
        }
        .event-card__top span { position: relative; z-index: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3)); }
        .event-card__body {
          padding: 1.4rem 1.2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          background: #fff;
        }
        .event-card__title {
          font-size: 1rem;
          font-weight: 700;
          color: #1a0a0f;
        }
        .event-card__desc {
          font-size: 0.8rem;
          color: #666;
          line-height: 1.6;
          flex: 1;
        }
        .event-card__cta {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ec-color, #e8194b);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          transition: gap 0.2s;
        }
        .event-card:hover .event-card__cta { gap: 0.6rem; }
        .event-card__cta::after { content: '→'; }
      `}</style>

      <section className="events-section">
        <div className="events-section__header">
          <span className="section-tag">Best Event Manager</span>
          <h2 className="section-title">Events We Specialize In</h2>
          <p className="section-desc">
            From intimate birthday gatherings to grand school events — we bring joy, creativity, and professionalism to every celebration.
          </p>
        </div>

        <div className="events-grid">
          {events.map((e) => (
            <Link key={e.title} to={e.path} className="event-card" style={{ "--ec-color": e.color }}>
              <div className="event-card__top" style={{ background: e.bg }}>
                <span>{e.emoji}</span>
              </div>
              <div className="event-card__body">
                <div className="event-card__title">{e.title}</div>
                <div className="event-card__desc">{e.desc}</div>
                <div className="event-card__cta">Explore</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
