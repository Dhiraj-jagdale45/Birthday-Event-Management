import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Themes", path: "/themes" },
  { label: "Party Ideas", path: "/party-ideas" },
  { label: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { label: "Balloon Decoration", path: "/services/balloon-decoration" },
  { label: "Artist Management", path: "/services/artist" },
  { label: "Fun Activities", path: "/services/fun-activity" },
  { label: "Stage Artists", path: "/services/stage-artists" },
  { label: "Fun Eatables", path: "/services/fun-eatables" },
  { label: "Media (Photo/Video)", path: "/services/media" },
  { label: "Custom Cakes", path: "/services/cakes" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #0d0408;
          font-family: 'Montserrat', sans-serif;
          color: rgba(255,255,255,0.7);
        }
        .footer__top {
          padding: 4rem 1.5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 2.5rem;
        }
        @media (max-width: 1024px) { .footer__top { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .footer__top { grid-template-columns: 1fr; } }

        .footer__brand {}
        .footer__logo {
          display: inline-block;
          text-decoration: none;
          margin-bottom: 1.2rem;
        }
        .footer__logo-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
        }
        .footer__logo-name span { color: #e8194b; }
        .footer__logo-sub {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          display: block;
        }
        .footer__tagline {
          font-size: 0.82rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          color: rgba(255,255,255,0.5);
        }
        .footer__social {
          display: flex; gap: 0.7rem;
        }
        .footer__social-link {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .footer__social-link:hover { background: #e8194b; border-color: #e8194b; transform: translateY(-2px); }

        .footer__col h4 {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 1.2rem;
          position: relative;
          padding-bottom: 0.6rem;
        }
        .footer__col h4::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 24px; height: 2px;
          background: #e8194b;
          border-radius: 2px;
        }
        .footer__links { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .footer__links a {
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          transition: color 0.2s, padding-left 0.2s;
          display: block;
        }
        .footer__links a:hover { color: #f7c948; padding-left: 4px; }

        .footer__contact-item {
          display: flex; align-items: flex-start; gap: 0.7rem;
          margin-bottom: 0.9rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
        }
        .footer__contact-icon { font-size: 1rem; margin-top: 1px; flex-shrink: 0; }
        .footer__contact-item a { color: rgba(255,255,255,0.5); text-decoration: none; }
        .footer__contact-item a:hover { color: #f7c948; }

        .footer__divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 0;
        }
        .footer__bottom {
          padding: 1.4rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer__copy {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
        }
        .footer__copy a { color: #e8194b; text-decoration: none; }
        .footer__bottom-links {
          display: flex; gap: 1.5rem;
          list-style: none;
        }
        .footer__bottom-links a {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer__bottom-links a:hover { color: #fff; }

        .footer__badge {
          background: rgba(232,25,75,0.1);
          border: 1px solid rgba(232,25,75,0.2);
          color: #e8194b;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          display: inline-block;
        }
      `}</style>

      <footer className="footer">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-name">Birthday<span>●</span>Bumps</div>
              <span className="footer__logo-sub">Party Planners · Pune</span>
            </Link>
            <p className="footer__tagline">
              Pune's most trusted birthday party organizers, creating unforgettable celebrations for children of every age since 2026.
            </p>
            <div className="footer__social">
              {[
                { icon: <i class="fa-brands fa-facebook"></i>, label: "Facebook", href: "#" },
                { icon: <i class="fa-brands fa-instagram"></i>, label: "Instagram", href: "#" },
                { icon: <i class="fa-brands fa-twitter"></i>, label: "Twitter", href: "#" },
                { icon: <i class="fa-brands fa-youtube"></i>, label: "YouTube", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="footer__social-link" title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4>Our Services</h4>
            <ul className="footer__links">
              {serviceLinks.map((l) => (
                <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4>Contact Us</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>40, 11th D Cross, next to Iscon temple. RMD School</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <a href="#">12345 67890</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <a href="#">xyz@birthdaybumps.co.in</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">🕐</span>
              <span>Mon – Sun: 9:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} <a href="#">Birthday Bumps</a>. All rights reserved. Made with ❤️ in Pune.
          </p>
          <ul className="footer__bottom-links">
            <li style={{fontSize: "0.8rem"}}>Privacy Policy</li>
            <li style={{fontSize: "0.8rem"}}>Terms of Service</li>
            <li style={{fontSize: "0.8rem"}}>Sitemap</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
