import { useState, useEffect, useCallback } from "react";

// ============================================================
//  🎨 THEME IMAGE CONFIG — ADD YOUR IMAGES HERE
//  All images must be placed in: public/images/
//
//  Each entry:
//  {
//    file:     "your-filename.jpg",   ← exact filename in public/images/
//    name:     "Theme Display Name",
//    category: "Category",            ← used for filter tabs
//    tag:      "Optional badge text", ← e.g. "Popular", "New", "Premium"
//    color:    "#hexcode",            ← accent color for hover overlay
//  }
// ============================================================
export const themeImages = [
  // ── paste your entries below this line ──────────────────────

  {
    file: "image1.webp", // ← must match file in public/images/
    name: "Spider-Man",
    category: "Superheroes",
    tag: "Popular", // ← or "" for no badge
    color: "#e8194b", // ← accent color for hover
  },
  {
    file: "image2.webp", // ← must match file in public/images/
    name: "Spider-Man",
    category: "Superheroes",
    tag: "Popular", // ← or "" for no badge
    color: "#e8194b", // ← accent color for hover
  },
  {
    file: "image3.webp", // ← must match file in public/images/
    name: "Spider-Man",
    category: "Superheroes",
    tag: "Popular", // ← or "" for no badge
    color: "#e8194b", // ← accent color for hover
  },
  {
    file: "image4.webp", // ← must match file in public/images/
    name: "Spider-Man",
    category: "Superheroes",
    tag: "Popular", // ← or "" for no badge
    color: "#e8194b", // ← accent color for hover
  },
  {
    file: "image5.webp", // ← must match file in public/images/
    name: "Spider-Man",
    category: "Superheroes",
    tag: "Popular", // ← or "" for no badge
    color: "#e8194b", // ← accent color for hover
  },
  {
    file: "image6.webp", // ← must match file in public/images/
    name: "Spider-Man",
    category: "Superheroes",
    tag: "Popular", // ← or "" for no badge
    color: "#e8194b", // ← accent color for hover
  },
  {
    file: "image7.webp", // ← must match file in public/images/
    name: "Spider-Man",
    category: "Superheroes",
    tag: "Popular", // ← or "" for no badge
    color: "#e8194b", // ← accent color for hover
  },
  {
    file: "image8.webp", // ← must match file in public/images/
    name: "Spider-Man",
    category: "Superheroes",
    tag: "Popular", // ← or "" for no badge
    color: "#e8194b", // ← accent color for hover
  },

  // ── add more entries above this line ────────────────────────
];

// Auto-generate category list from the config
const getCategories = (images) => {
  const cats = ["All", ...new Set(images.map((i) => i.category))];
  return cats;
};

// ─────────────────────────────────────────────────────────────
//  LIGHTBOX COMPONENT
// ─────────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="lb-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Close */}
      <button className="lb-close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      {/* Prev */}
      <button
        className="lb-arrow lb-arrow--prev"
        onClick={onPrev}
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Image */}
      <div className="lb-box">
        <div className="lb-img-wrap">
          <img
            src={`/images/${img.file}`}
            alt={img.name}
            className="lb-img"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/900x600/1a0a0f/e8194b?text=" +
                encodeURIComponent(img.name);
            }}
          />
        </div>
        <div className="lb-footer">
          <div className="lb-footer__left">
            {img.tag && <span className="lb-tag">{img.tag}</span>}
            <span className="lb-name">{img.name}</span>
            <span className="lb-cat">{img.category}</span>
          </div>
          <div className="lb-counter">
            {index + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Next */}
      <button
        className="lb-arrow lb-arrow--next"
        onClick={onNext}
        aria-label="Next"
      >
        ›
      </button>

      {/* Thumbnail strip */}
      <div className="lb-thumbs">
        {images.map((im, i) => (
          <div
            key={i}
            className={`lb-thumb${i === index ? " active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
              setTimeout(() => {}, 0); /* handled by parent */
            }}
            style={{ "--tc": im.color }}
          >
            <img
              src={`/images/${im.file}`}
              alt={im.name}
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/80x60/1a0a0f/e8194b?text=img";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN GALLERY COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ThemeGallery() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loaded, setLoaded] = useState({});

  const categories = getCategories(themeImages);

  const filtered = themeImages.filter(
    (img) =>
      (filter === "All" || img.category === filter) &&
      img.name.toLowerCase().includes(search.toLowerCase()),
  );

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length],
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i + 1) % filtered.length),
    [filtered.length],
  );

  const markLoaded = (file) => setLoaded((prev) => ({ ...prev, [file]: true }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;500;600;700&display=swap');

        .tg-root {
          font-family: 'Montserrat', sans-serif;
          background: #fdf8f9;
          padding: 3rem 1.5rem 5rem;
        }

        /* ── Header ── */
        .tg-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 2.5rem;
        }
        .tg-stag {
          display: inline-block;
          background: #fff5f7;
          color: #e8194b;
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
          padding: .35rem 1rem;
          border-radius: 50px;
          margin-bottom: .8rem;
          border: 1px solid #ffd0da;
        }
        .tg-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #1a0a0f;
          line-height: 1.2;
          margin-bottom: .75rem;
        }
        .tg-desc {
          font-size: .88rem;
          color: #666;
          line-height: 1.75;
        }

        /* ── Controls ── */
        .tg-controls {
          max-width: 1300px;
          margin: 0 auto 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .tg-search-wrap {
          position: relative;
          max-width: 340px;
        }
        .tg-search-icon {
          position: absolute;
          left: .9rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: .95rem;
          pointer-events: none;
        }
        .tg-search {
          width: 100%;
          padding: .7rem 1rem .7rem 2.6rem;
          border: 1.5px solid #f0e8ea;
          border-radius: 8px;
          font-size: .84rem;
          font-family: 'Montserrat', sans-serif;
          outline: none;
          background: #fff;
          color: #333;
          transition: border-color .2s, box-shadow .2s;
        }
        .tg-search:focus {
          border-color: #e8194b;
          box-shadow: 0 0 0 3px rgba(232,25,75,.08);
        }
        .tg-filters {
          display: flex;
          gap: .5rem;
          flex-wrap: wrap;
        }
        .tg-filter {
          padding: .42rem 1rem;
          border-radius: 50px;
          border: 1.5px solid #f0e8ea;
          background: transparent;
          font-size: .7rem;
          font-weight: 600;
          letter-spacing: .05em;
          cursor: pointer;
          transition: all .2s;
          font-family: 'Montserrat', sans-serif;
          color: #555;
          white-space: nowrap;
        }
        .tg-filter:hover { border-color: #e8194b; color: #e8194b; }
        .tg-filter.active {
          background: #e8194b;
          border-color: #e8194b;
          color: #fff;
          box-shadow: 0 4px 14px rgba(232,25,75,.3);
        }
        .tg-count {
          font-size: .75rem;
          color: #999;
          align-self: center;
          margin-left: auto;
        }

        /* ── Grid ── */
        .tg-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.2rem;
        }

        /* ── Card ── */
        .tg-card {
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          border: 1.5px solid #f0e8ea;
          cursor: pointer;
          transition: transform .3s cubic-bezier(.4,0,.2,1),
                      box-shadow .3s cubic-bezier(.4,0,.2,1),
                      border-color .3s;
          position: relative;
          animation: cardIn .4s ease both;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px) scale(.97); }
          to   { opacity: 1; transform: none; }
        }
        .tg-card:hover {
          transform: translateY(-7px) scale(1.01);
          box-shadow: 0 20px 50px rgba(0,0,0,.13);
          border-color: transparent;
        }

        /* Image area */
        .tg-card__img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #f5ecee;
          overflow: hidden;
        }
        .tg-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .45s cubic-bezier(.4,0,.2,1);
          opacity: 0;
          transition: opacity .3s, transform .45s;
        }
        .tg-card__img.loaded { opacity: 1; }
        .tg-card:hover .tg-card__img { transform: scale(1.07); }

        /* Skeleton shimmer while loading */
        .tg-card__skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #f5ecee 25%, #ffe8ee 50%, #f5ecee 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
          transition: opacity .3s;
        }
        .tg-card__skeleton.hide { opacity: 0; pointer-events: none; }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Hover overlay */
        .tg-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.1) 60%, transparent 100%);
          opacity: 0;
          transition: opacity .3s;
          display: flex;
          align-items: flex-end;
          padding: 1.2rem;
        }
        .tg-card:hover .tg-card__overlay { opacity: 1; }
        .tg-card__zoom {
          margin-left: auto;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,.2);
          backdrop-filter: blur(6px);
          border: 1.5px solid rgba(255,255,255,.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: #fff;
          transition: background .2s, transform .2s;
        }
        .tg-card:hover .tg-card__zoom {
          background: rgba(255,255,255,.35);
          transform: scale(1.1);
        }

        /* Tag badge */
        .tg-card__tag {
          position: absolute;
          top: .7rem;
          left: .7rem;
          background: #f7c948;
          color: #1a0a0f;
          font-size: .58rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: .22rem .65rem;
          border-radius: 50px;
          z-index: 2;
        }

        /* Card body */
        .tg-card__body {
          padding: .9rem 1rem 1rem;
        }
        .tg-card__cat {
          font-size: .6rem;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--card-color, #e8194b);
          margin-bottom: .25rem;
        }
        .tg-card__name {
          font-size: .92rem;
          font-weight: 700;
          color: #1a0a0f;
          margin-bottom: .6rem;
        }
        .tg-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tg-card__view {
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--card-color, #e8194b);
          display: flex;
          align-items: center;
          gap: .3rem;
          transition: gap .2s;
        }
        .tg-card:hover .tg-card__view { gap: .55rem; }
        .tg-card__view::after { content: '→'; }
        .tg-card__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--card-color, #e8194b);
          opacity: .35;
        }

        /* ── Empty state ── */
        .tg-empty {
          text-align: center;
          padding: 5rem 1rem;
          color: #999;
        }
        .tg-empty__icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
        .tg-empty__text { font-size: .9rem; }
        .tg-empty__reset {
          margin-top: 1rem;
          display: inline-block;
          color: #e8194b;
          font-weight: 600;
          cursor: pointer;
          font-size: .82rem;
          text-decoration: underline;
        }

        /* ── LIGHTBOX ── */
        .lb-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 2, 5, .95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: lbFadeIn .25s ease;
        }
        @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .lb-close {
          position: fixed;
          top: 1.2rem;
          right: 1.5rem;
          background: rgba(255,255,255,.1);
          border: 1.5px solid rgba(255,255,255,.2);
          color: #fff;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background .2s, transform .2s;
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lb-close:hover { background: #e8194b; border-color: #e8194b; transform: scale(1.1); }

        .lb-arrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,.08);
          border: 1.5px solid rgba(255,255,255,.15);
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.8rem;
          cursor: pointer;
          transition: background .2s, transform .2s;
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .lb-arrow:hover { background: #e8194b; border-color: #e8194b; }
        .lb-arrow--prev { left: 1rem; }
        .lb-arrow--next { right: 1rem; }
        .lb-arrow--prev:hover { transform: translateY(-50%) translateX(-2px); }
        .lb-arrow--next:hover { transform: translateY(-50%) translateX(2px); }

        .lb-box {
          max-width: min(900px, 90vw);
          width: 100%;
          animation: lbBoxIn .3s cubic-bezier(.34,1.26,.64,1);
        }
        @keyframes lbBoxIn {
          from { opacity: 0; transform: scale(.88); }
          to   { opacity: 1; transform: none; }
        }

        .lb-img-wrap {
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          background: #1a0a0f;
          max-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lb-img {
          width: 100%;
          height: 100%;
          max-height: 65vh;
          object-fit: contain;
          display: block;
        }

        .lb-footer {
          background: rgba(255,255,255,.06);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,.1);
          border-top: none;
          border-radius: 0 0 12px 12px;
          padding: 1rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .lb-footer__left { display: flex; align-items: center; gap: .7rem; flex-wrap: wrap; }
        .lb-tag {
          background: #f7c948;
          color: #1a0a0f;
          font-size: .58rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: .2rem .6rem;
          border-radius: 50px;
        }
        .lb-name {
          font-size: .95rem;
          font-weight: 700;
          color: #fff;
        }
        .lb-cat {
          font-size: .7rem;
          color: rgba(255,255,255,.5);
          font-weight: 500;
        }
        .lb-counter {
          font-size: .75rem;
          font-weight: 600;
          color: rgba(255,255,255,.4);
          letter-spacing: .06em;
          white-space: nowrap;
        }

        /* Thumbnail strip */
        .lb-thumbs {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          gap: .4rem;
          padding: .75rem 1rem;
          overflow-x: auto;
          background: rgba(10,2,5,.85);
          backdrop-filter: blur(8px);
          justify-content: center;
          z-index: 10001;
          scrollbar-width: none;
        }
        .lb-thumbs::-webkit-scrollbar { display: none; }
        .lb-thumb {
          width: 52px;
          height: 40px;
          border-radius: 5px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          flex-shrink: 0;
          transition: border-color .2s, transform .2s;
          opacity: .5;
        }
        .lb-thumb:hover { opacity: .8; transform: scale(1.08); }
        .lb-thumb.active {
          border-color: #e8194b;
          opacity: 1;
          transform: scale(1.1);
        }
        .lb-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .tg-grid { grid-template-columns: repeat(2, 1fr); gap: .75rem; }
          .lb-arrow { width: 38px; height: 38px; font-size: 1.4rem; }
          .lb-arrow--prev { left: .4rem; }
          .lb-arrow--next { right: .4rem; }
          .lb-thumbs { display: none; }
        }
        @media (max-width: 400px) {
          .tg-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="tg-root">
        {/* ── Header ── */}
        <div className="tg-header">
          <span className="tg-stag">Real Party Photos</span>
          <h2 className="tg-title">Our Theme Gallery</h2>
          <p className="tg-desc">
            Browse actual parties we've organized — click any image to explore
            it in full detail.
          </p>
        </div>

        {/* ── Controls ── */}
        <div className="tg-controls">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div className="tg-search-wrap">
              <span className="tg-search-icon">🔍</span>
              <input
                className="tg-search"
                type="text"
                placeholder="Search themes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <span className="tg-count">
              {filtered.length} theme{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="tg-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tg-filter${filter === cat ? " active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <div className="tg-empty">
            <span className="tg-empty__icon">🔍</span>
            <div className="tg-empty__text">No themes match your search.</div>
            <span
              className="tg-empty__reset"
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
            >
              Clear filters
            </span>
          </div>
        ) : (
          <div className="tg-grid">
            {filtered.map((img, i) => (
              <div
                key={img.file + i}
                className="tg-card"
                style={{
                  "--card-color": img.color,
                  animationDelay: `${(i % 8) * 0.05}s`,
                }}
                onClick={() => openLightbox(i)}
              >
                {/* Image */}
                <div className="tg-card__img-wrap">
                  <div
                    className={`tg-card__skeleton${loaded[img.file] ? " hide" : ""}`}
                  />
                  <img
                    className={`tg-card__img${loaded[img.file] ? " loaded" : ""}`}
                    src={`/images/${img.file}`}
                    alt={img.name}
                    loading="lazy"
                    onLoad={() => markLoaded(img.file)}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x300/1a0a0f/e8194b?text=${encodeURIComponent(img.name)}`;
                      markLoaded(img.file);
                    }}
                  />
                  {/* Hover overlay */}
                  <div className="tg-card__overlay">
                    <div className="tg-card__zoom">🔍</div>
                  </div>
                  {/* Tag */}
                  {img.tag && <div className="tg-card__tag">{img.tag}</div>}
                </div>

                {/* Body */}
                <div className="tg-card__body">
                  <div className="tg-card__cat">{img.category}</div>
                  <div className="tg-card__name">{img.name}</div>
                  <div className="tg-card__footer">
                    <div className="tg-card__view">View</div>
                    <div className="tg-card__dot" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
