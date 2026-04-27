import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ThemesPage from "./pages/ThemesPage";
import ContactPage from "./pages/ContactPage";

const Placeholder = ({ title, emoji = "🎉" }) => (
  <div
    style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Montserrat,sans-serif",
      gap: "1rem",
      background: "#fdf8f9",
    }}
  >
    <span style={{ fontSize: "4rem" }}>{emoji}</span>
    <h1
      style={{
        fontSize: "2rem",
        color: "#e8194b",
        fontFamily: "Playfair Display,serif",
      }}
    >
      {title}
    </h1>
    <p style={{ color: "#888", fontSize: "0.9rem" }}>
      This page is coming soon.
    </p>
  </div>
);

export default function App() {
  return (
    <Router>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/balloon-decoration" element={<ServicesPage />} />
        <Route path="/services/artist" element={<ServicesPage />} />
        <Route path="/services/fun-activity" element={<ServicesPage />} />
        <Route path="/services/stage-artists" element={<ServicesPage />} />
        <Route path="/services/fun-eatables" element={<ServicesPage />} />
        <Route path="/services/media" element={<ServicesPage />} />
        <Route path="/services/cakes" element={<ServicesPage />} />
        <Route path="/themes" element={<ThemesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/packages"
          element={<Placeholder title="Packages" emoji="📦" />}
        />
        <Route
          path="/testimonials"
          element={<Placeholder title="Testimonials" emoji="⭐" />}
        />
        <Route
          path="/party-ideas"
          element={<Placeholder title="Party Ideas" emoji="💡" />}
        />
        <Route
          path="/careers"
          element={<Placeholder title="Careers" emoji="👨‍💼" />}
        />
        <Route
          path="/baby-shower"
          element={<Placeholder title="Baby Shower" emoji="👶" />}
        />
        <Route
          path="/naming-cermonies"
          element={<Placeholder title="Naming Ceremonies" emoji="🌟" />}
        />
        <Route
          path="/privacy"
          element={<Placeholder title="Privacy Policy" emoji="🔒" />}
        />
        <Route
          path="/terms"
          element={<Placeholder title="Terms of Service" emoji="📄" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
