import { Link } from "react-router-dom";
import ThemeGallery from "../components/ThemeGallery";

export default function ThemesPage() {
  return (
    <>
      {/* ── REAL PHOTO GALLERY ── */}
      <ThemeGallery />

      {/* Divider */}
      <div
        style={{
          height: "4px",
          background:
            "linear-gradient(to right,transparent,#e8194b,transparent)",
        }}
      />

      {/* CTA */}
      <div
        style={{
          background: "linear-gradient(135deg,var(--red),#6b1a32)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Playfair Display,serif",
            fontSize: "clamp(1.5rem,3vw,2.2rem)",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Don't See Your Dream Theme?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,.75)",
            fontSize: ".88rem",
            marginBottom: "2rem",
            maxWidth: "480px",
            margin: "0 auto 2rem",
          }}
        >
          We create fully custom themes! Tell us your child's favorite
          character, movie, or idea — and we'll make it happen.
        </p>
        <Link
          to="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".5rem",
            background: "#fff",
            color: "var(--red)",
            padding: ".9rem 2.2rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: ".78rem",
            fontWeight: "700",
            letterSpacing: ".1em",
            textTransform: "uppercase",
          }}
        >
          💬 Request Custom Theme
        </Link>
      </div>
    </>
  );
}
