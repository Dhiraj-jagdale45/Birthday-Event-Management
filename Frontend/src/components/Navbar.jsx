import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  {
    label: "SERVICES",
    path: "/services",
    dropdown: [
      { label: "Balloon Decoration", path: "/services/balloon-decoration" },
      { label: "Artist", path: "/services/artist" },
      { label: "Fun Activity", path: "/services/fun-activity" },
      { label: "Stage Artists", path: "/services/stage-artists" },
      { label: "Fun Eatables", path: "/services/fun-eatables" },
      { label: "Media", path: "/services/media" },
      { label: "Cakes", path: "/services/cakes" },
    ],
  },
  { label: "THEMES", path: "/themes" },
  { label: "PARTY IDEAS", path: "/party-ideas" },
  { label: "CONTACT US", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;500;600;700&display=swap');

        :root {
          --clr-primary: #e8194b;
          --clr-primary-dark: #b8012e;
          --clr-gold: #f7c948;
          --clr-dark: #1a0a0f;
          --clr-white: #fff;
          --clr-muted: #f9f3f5;
          --nav-height: 72px;
          --top-bar-height: 40px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .bb-topbar {
          background: var(--clr-primary);
          height: var(--top-bar-height);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--clr-white);
          position: sticky;
          top: 0;
          z-index: 1001;
          transition: transform 0.3s ease;
        }
        .bb-topbar.hide { transform: translateY(-100%); }

        .bb-topbar a {
          color: var(--clr-white);
          text-decoration: none;
          opacity: 0.9;
          transition: opacity 0.2s;
        }
        .bb-topbar a:hover { opacity: 1; text-decoration: underline; }

        .bb-topbar__right { display: flex; align-items: center; gap: 1.4rem; }
        .bb-topbar__phone {
          background: var(--clr-gold);
          color: var(--clr-dark) !important;
          font-weight: 700;
          padding: 0.25rem 0.9rem;
          border-radius: 2px;
          letter-spacing: 0.03em;
          font-size: 0.75rem;
        }
        .bb-topbar__appt {
          border: 1px solid rgba(255,255,255,0.6);
          padding: 0.22rem 0.85rem;
          border-radius: 2px;
          font-size: 0.72rem;
        }
        .bb-topbar__appt:hover { background: rgba(255,255,255,0.15); }

        /* ── MAIN NAV ── */
        .bb-navbar {
          position: sticky;
          top: var(--top-bar-height);
          z-index: 1000;
          width: 100%;
          background: var(--clr-white);
          box-shadow: 0 2px 18px rgba(0,0,0,0.08);
          font-family: 'Montserrat', sans-serif;
          transition: box-shadow 0.3s;
        }
        .bb-navbar.scrolled {
          box-shadow: 0 4px 28px rgba(232,25,75,0.12);
        }

        .bb-navbar__inner {
          max-width: 1280px;
          margin: 0 auto;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          gap: 1rem;
        }

        /* Logo */
        .bb-logo {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          line-height: 1.1;
          flex-shrink: 0;
        }
        .bb-logo__top {
          font-family: 'Playfair Display', serif;
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--clr-primary);
          letter-spacing: -0.01em;
        }
        .bb-logo__sub {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: var(--clr-dark);
          text-transform: uppercase;
        }
        .bb-logo__dot { color: var(--clr-gold); }

        /* Nav links */
        .bb-nav {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 0;
        }

        .bb-nav__item { position: relative; }

        .bb-nav__link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0 0.78rem;
          height: var(--nav-height);
          color: var(--clr-dark);
          text-decoration: none;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          white-space: nowrap;
          transition: color 0.2s;
          cursor: pointer;
          border: none;
          background: none;
          font-family: 'Montserrat', sans-serif;
          position: relative;
        }
        .bb-nav__link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0.78rem;
          right: 0.78rem;
          height: 3px;
          background: var(--clr-primary);
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(.4,0,.2,1);
          border-radius: 2px 2px 0 0;
        }
        .bb-nav__link:hover, .bb-nav__link.active { color: var(--clr-primary); }
        .bb-nav__link:hover::after, .bb-nav__link.active::after { transform: scaleX(1); }

        .bb-nav__arrow {
          font-size: 0.55rem;
          transition: transform 0.22s;
          margin-left: 1px;
        }
        .bb-nav__item:hover .bb-nav__arrow { transform: rotate(180deg); }

        /* Dropdown */
        .bb-dropdown {
          position: absolute;
          top: calc(100% - 1px);
          left: 0;
          min-width: 220px;
          background: var(--clr-white);
          border-top: 3px solid var(--clr-primary);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          list-style: none;
          opacity: 0;
          pointer-events: none;
          transform: translateY(10px);
          transition: opacity 0.2s, transform 0.22s cubic-bezier(.4,0,.2,1);
          z-index: 9999;
        }
        .bb-nav__item:hover .bb-dropdown {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .bb-dropdown li a {
          display: block;
          padding: 0.72rem 1.2rem;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--clr-dark);
          text-decoration: none;
          letter-spacing: 0.04em;
          border-bottom: 1px solid #f5eef0;
          transition: background 0.15s, color 0.15s, padding-left 0.18s;
        }
        .bb-dropdown li:last-child a { border-bottom: none; }
        .bb-dropdown li a:hover {
          background: #fff5f7;
          color: var(--clr-primary);
          padding-left: 1.5rem;
        }

        /* CTA button */
        .bb-nav__cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--clr-primary);
          color: var(--clr-white) !important;
          padding: 0.5rem 1.1rem;
          border-radius: 3px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
          margin-left: 0.5rem;
          flex-shrink: 0;
        }
        .bb-nav__cta:hover {
          background: var(--clr-primary-dark);
          transform: translateY(-1px);
          color: var(--clr-white) !important;
        }
        .bb-nav__cta::after { display: none !important; }

        /* Hamburger */
        .bb-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          background: none;
          border: 1.5px solid #e0d0d4;
          border-radius: 4px;
          padding: 6px;
        }
        .bb-hamburger span {
          display: block;
          height: 2px;
          background: var(--clr-dark);
          border-radius: 2px;
          transition: all 0.3s;
          transform-origin: center;
        }
        .bb-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .bb-hamburger.open span:nth-child(2) { opacity: 0; }
        .bb-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .bb-mobile-menu {
          display: none;
          flex-direction: column;
          background: var(--clr-white);
          border-top: 2px solid var(--clr-primary);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.38s cubic-bezier(.4,0,.2,1);
        }
        .bb-mobile-menu.open { max-height: 600px; }

        .bb-mobile-menu a,
        .bb-mobile-menu__service-toggle {
          display: block;
          padding: 0.78rem 1.5rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          color: var(--clr-dark);
          text-decoration: none;
          border-bottom: 1px solid #f5eef0;
          transition: background 0.15s, color 0.15s;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          width: 100%;
          text-align: left;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
        }
        .bb-mobile-menu a:hover,
        .bb-mobile-menu__service-toggle:hover { background: #fff5f7; color: var(--clr-primary); }

        .bb-mobile-submenu { background: #fdf8f9; }
        .bb-mobile-submenu a {
          padding-left: 2.2rem;
          font-weight: 500;
          font-size: 0.74rem;
          color: #555;
        }
        .bb-mobile-submenu a:hover { color: var(--clr-primary); }

        .bb-mobile-menu__service-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f5eef0;
        }
        .bb-mobile-cta {
          margin: 1rem 1.5rem;
          display: block;
          background: var(--clr-primary);
          color: var(--clr-white) !important;
          text-align: center;
          padding: 0.75rem;
          border-radius: 3px;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.07em;
        }

        @media (max-width: 1100px) {
          .bb-nav, .bb-nav__cta { display: none; }
          .bb-hamburger { display: flex; }
          .bb-mobile-menu { display: flex; }
        }
        @media (max-width: 500px) {
          .bb-topbar { font-size: 0.62rem; padding: 0 0.8rem; }
          .bb-topbar__phone { padding: 0.2rem 0.6rem; }
        }
      `}</style>

      {/* Top Bar */}
      <div className={`bb-topbar${scrolled ? " hide" : ""}`}>
        <span>📍Pune, Maharashtra 411048</span>
        <div className="bb-topbar__right">
          <a href="#" >xyz@birthdaybumps.in</a>
          <a href="#" className="bb-topbar__phone">📞 12345 67890</a>
          <a href="/contact" className="bb-topbar__appt">+ MAKE AN APPOINTMENT</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bb-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="bb-navbar__inner">
          {/* Logo */}
          <Link to="/" className="bb-logo">
            <span className="bb-logo__top">
              Birthday<span className="bb-logo__dot">●</span>Bumps
            </span>
            <span className="bb-logo__sub">Party Planners · Pune</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="bb-nav">
            {navLinks.map((item) =>
              item.dropdown ? (
                <li key={item.label} className="bb-nav__item">
                  <button
                    className={`bb-nav__link${location.pathname.startsWith("/services") ? " active" : ""}`}
                  >
                    {item.label}
                    <span className="bb-nav__arrow">▼</span>
                  </button>
                  <ul className="bb-dropdown">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.path}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label} className="bb-nav__item">
                  <Link
                    to={item.path}
                    className={`bb-nav__link${location.pathname === item.path ? " active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <a href="/contact" className="bb-nav__cta">
            🎉 Book Now
          </a>

          {/* Hamburger */}
          <button
            className={`bb-hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`bb-mobile-menu${mobileOpen ? " open" : ""}`}>
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  className="bb-mobile-menu__service-toggle"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {item.label}
                  <span style={{ fontSize: "0.6rem", transition: "transform 0.2s", display: "inline-block", transform: mobileServicesOpen ? "rotate(180deg)" : "none" }}>▼</span>
                </button>
                {mobileServicesOpen && (
                  <div className="bb-mobile-submenu">
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} to={sub.path}>{sub.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.path}>
                {item.label}
              </Link>
            )
          )}
          <a href="/contact" className="bb-mobile-cta">🎉 MAKE AN APPOINTMENT</a>
        </div>
      </nav>
    </>
  );
}
