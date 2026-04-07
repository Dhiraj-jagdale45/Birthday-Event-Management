import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ria Sharma",
    gender: "female",
    rating: 5,
    text: "All arrangement was awesome with great theme decoration. Initially we faced a serious problem with venue but Birthday Bumps team resolved it quickly. I must admit they have strong production & marketing team. CONFIDENTLY I WILL RECOMMEND BIRTHDAY BUMPS TO ALL MY FRIENDS.",
  },
  {
    name: "Nayana Shashidhar N",
    gender: "female",
    rating: 5,
    text: "This was my first experience with Birthday Bumps. They arranged my daughter's 4th birthday with a Chota Bheem theme. Birthday Bumps had very good reviews, and we do not regret our decision — the party was a huge success! My daughter was thrilled to see the Dholakpur setup.",
  },
  {
    name: "Arun Reddy",
    gender: "male",
    rating: 5,
    text: "Excellent Team & Very Professional in their approach. I engaged them for my son's 1st birthday from Mumbai. The team gave all options, price chart and took care of everything. You can have a successful and hassle-free event if you engage them.",
  },
  {
    name: "Anthony Naveen",
    gender: "male",
    rating: 5,
    text: "Hired Robin and Team for a Birthday Party and the way they organized the entire party was so professional and beyond our expectations. They come up with new concepts for decorations aligned with the latest trends. They have solutions from A to Z for hosting a party.",
  },
  {
    name: "Kavitha Joseph",
    gender: "female",
    rating: 5,
    text: "We wanted to thank all of the people who were involved in putting together this Birthday party — a grand success! We know what a huge effort you took to bring the WOW factor. We had so much fun from the beginning till the end.",
  },
  {
    name: "Kavya Vijaykumar",
    gender: "female",
    rating: 5,
    text: "These guys are absolutely great to work with! Really dedicated. I have personally had the best experience with these guys for my son's first year birthday. Must say one of the best birthday event organisers — keep it going guys!",
  },
];

const avatarColors = { female: "#e91e8c", male: "#1976d2" };
const avatarEmoji = { female: "👩", male: "👨" };

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const perPage = window.innerWidth < 768 ? 1 : 2;

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0) return testimonials.length - perPage;
        if (next > testimonials.length - perPage) return 0;
        return next;
      });
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [current]);

  const visible = testimonials.slice(current, current + perPage);

  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 5rem 1.5rem;
          background: #fdf8f9;
          font-family: 'Montserrat', sans-serif;
        }
        .testimonials-section__header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 3rem;
        }
        .testimonials-section__header .section-desc {
          font-style: italic;
          color: #888;
        }
        .testi-carousel {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }
        .testi-cards {
          display: grid;
          grid-template-columns: repeat(${2}, 1fr);
          gap: 1.5rem;
          transition: opacity 0.3s;
        }
        .testi-cards.fade { opacity: 0; }
        @media (max-width: 768px) { .testi-cards { grid-template-columns: 1fr; } }

        .testi-card {
          background: #fff;
          border-radius: 16px;
          padding: 2rem;
          border: 1.5px solid #f0e8ea;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .testi-card__quote {
          font-size: 4rem;
          color: #e8194b;
          opacity: 0.15;
          line-height: 1;
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          font-family: Georgia, serif;
        }
        .testi-card__stars { color: #f7c948; font-size: 0.9rem; letter-spacing: 0.1em; }
        .testi-card__text {
          font-size: 0.84rem;
          color: #444;
          line-height: 1.75;
          font-style: italic;
          flex: 1;
        }
        .testi-card__author {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border-top: 1px solid #f5eef0;
          padding-top: 1rem;
        }
        .testi-card__avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .testi-card__name {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1a0a0f;
        }
        .testi-card__verified {
          font-size: 0.65rem;
          color: #388e3c;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .testi-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        .testi-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 2px solid #e8194b;
          background: transparent;
          color: #e8194b;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .testi-btn:hover { background: #e8194b; color: #fff; }
        .testi-dots { display: flex; gap: 0.5rem; }
        .testi-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #f0d0d5;
          border: none; cursor: pointer; padding: 0;
          transition: all 0.3s;
        }
        .testi-dot.active { background: #e8194b; transform: scale(1.3); }

        .testi-cta {
          text-align: center;
          margin-top: 2.5rem;
        }
        .testi-cta a {
          display: inline-flex; align-items: center; gap: 0.5rem;
          border: 2px solid #e8194b;
          color: #e8194b;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.2s;
        }
        .testi-cta a:hover { background: #e8194b; color: #fff; }
      `}</style>

      <section className="testimonials-section">
        <div className="testimonials-section__header">
          <span className="section-tag">What Our Clients Say</span>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-desc">
            Serving every client according to their need is an Art — and we specialize in it, taking great pride in achieving their needs with care and precision.
          </p>
        </div>

        <div className="testi-carousel">
          <div className={`testi-cards${animating ? " fade" : ""}`}>
            {visible.map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-card__quote">"</div>
                <div className="testi-card__stars">{"★".repeat(t.rating)}</div>
                <p className="testi-card__text">"{t.text}"</p>
                <div className="testi-card__author">
                  <div className="testi-card__avatar" style={{ background: avatarColors[t.gender] + "22" }}>
                    {avatarEmoji[t.gender]}
                  </div>
                  <div>
                    <div className="testi-card__name">{t.name}</div>
                    <div className="testi-card__verified">✅ Verified Google Review</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testi-controls">
            <button className="testi-btn" onClick={() => go(-1)}>‹</button>
            <div className="testi-dots">
              {Array.from({ length: testimonials.length - (perPage - 1) }).map((_, i) => (
                <button key={i} className={`testi-dot${i === current ? " active" : ""}`} onClick={() => setCurrent(i)} />
              ))}
            </div>
            <button className="testi-btn" onClick={() => go(1)}>›</button>
          </div>

          <div className="testi-cta">
            <a href="https://www.google.co.in/search?q=birthdaybumps.in" target="_blank" rel="noopener noreferrer">
              ⭐ View All Google Reviews
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
