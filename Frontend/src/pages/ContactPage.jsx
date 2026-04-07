import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";

const BASE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700;800&display=swap');
  :root{--red:#e8194b;--red-dk:#b8012e;--gold:#f7c948;--dark:#1a0a0f;
    --white:#fff;--muted:#fdf8f9;--text:#333;--subtle:#666;--border:#f0e8ea}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Montserrat',sans-serif;color:var(--text)}
`;

const faqs = [
  {q:"How far in advance should I book?",a:"We recommend booking at least 2–4 weeks in advance, especially for weekends and peak season (Oct–Feb). However, we do accommodate last-minute bookings whenever possible."},
  {q:"Do you work outside Bangalore?",a:"Our primary service area is Bangalore. For events within 50 km of the city we can accommodate with a small travel surcharge. Contact us to discuss your specific location."},
  {q:"What's your cancellation policy?",a:"Cancellations made 7+ days before the event receive a full refund. Cancellations within 7 days are subject to a 25% service fee. We always try to reschedule before cancelling."},
  {q:"Can I customize a package?",a:"Absolutely! All our packages are fully customizable. We work within your budget and can add, remove, or swap services to create the perfect combination for your event."},
  {q:"Do you handle venue decoration setup?",a:"Yes, our team arrives at the venue 2–3 hours before the event start time to set up all decorations, activities, and equipment. We also handle the cleanup after the party."},
  {q:"Do you have a minimum budget requirement?",a:"We cater to all budgets starting from ₹5,000 for basic decoration packages. Our team will always suggest the best options to maximize value within your budget."},
];

export default function ContactPage() {
  const [form, setForm] = useState({name:"",email:"",phone:"",eventDate:"",eventType:"",guests:"",theme:"",budget:"",message:""});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [tab, setTab] = useState("form");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // Replace with your actual backend API call:
    // await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) });
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <style>{BASE_CSS + `
        /* hero */
        .page-hero{padding:5rem 1.5rem 3.5rem;text-align:center;
          background:linear-gradient(160deg,var(--dark),#3d0d1e);position:relative;overflow:hidden}
        .page-hero__bg{position:absolute;font-size:14rem;opacity:.04;right:-2rem;top:50%;transform:translateY(-50%);pointer-events:none}
        .stag{display:inline-block;background:rgba(247,201,72,.15);color:var(--gold);font-size:.68rem;
          font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:.35rem 1rem;
          border-radius:50px;margin-bottom:.9rem;border:1px solid rgba(247,201,72,.3)}
        .stitle{font-family:'Playfair Display',serif;font-size:clamp(1.7rem,3vw,2.6rem);
          font-weight:700;color:#fff;line-height:1.25;margin-bottom:.9rem}
        .sdesc{color:rgba(255,255,255,.65);font-size:.88rem;line-height:1.75;max-width:580px;margin:0 auto}
        .crumb{display:flex;align-items:center;justify-content:center;gap:.5rem;
          font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;
          color:rgba(255,255,255,.4);margin-bottom:1.5rem}
        .crumb a{color:var(--gold);text-decoration:none}

        /* info strip */
        .info-strip{background:var(--dark);padding:2.5rem 1.5rem}
        .info-strip-inner{max-width:1200px;margin:0 auto;display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem}
        .info-tile{display:flex;align-items:flex-start;gap:1rem;padding:1.2rem;
          background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
          border-radius:12px;transition:all .3s}
        .info-tile:hover{background:rgba(255,255,255,.07);transform:translateY(-3px)}
        .info-tile__icon{font-size:1.8rem;flex-shrink:0}
        .info-tile__label{font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
          color:var(--gold);margin-bottom:.3rem}
        .info-tile__val{font-size:.85rem;color:rgba(255,255,255,.85);line-height:1.5}
        .info-tile__val a{color:rgba(255,255,255,.85);text-decoration:none;transition:color .2s}
        .info-tile__val a:hover{color:var(--gold)}

        /* main layout */
        .contact-main{max-width:1200px;margin:0 auto;padding:4rem 1.5rem;
          display:grid;grid-template-columns:1fr 1.2fr;gap:3.5rem;align-items:start}
        @media(max-width:900px){.contact-main{grid-template-columns:1fr}}

        /* tabs */
        .contact-tabs{display:flex;gap:.5rem;margin-bottom:2rem;background:var(--muted);
          border-radius:8px;padding:.3rem}
        .contact-tab{flex:1;padding:.65rem;border:none;border-radius:6px;cursor:pointer;
          font-size:.75rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
          font-family:'Montserrat',sans-serif;transition:all .2s;background:transparent;color:var(--subtle)}
        .contact-tab.active{background:#fff;color:var(--red);
          box-shadow:0 2px 8px rgba(0,0,0,.08)}

        /* sidebar */
        .sidebar-card{background:var(--dark);border-radius:16px;padding:2rem;margin-bottom:1.5rem;
          position:sticky;top:130px}
        .sidebar-card h3{font-family:'Playfair Display',serif;font-size:1.3rem;color:#fff;
          margin-bottom:.5rem}
        .sidebar-card p{font-size:.82rem;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:1.5rem}
        .sidebar-features{list-style:none;display:flex;flex-direction:column;gap:.7rem}
        .sidebar-features li{display:flex;align-items:center;gap:.7rem;
          font-size:.8rem;color:rgba(255,255,255,.75)}
        .sidebar-features li::before{content:'✓';width:22px;height:22px;border-radius:50%;
          background:rgba(232,25,75,.2);color:var(--red);display:flex;align-items:center;
          justify-content:center;font-size:.65rem;font-weight:800;flex-shrink:0}
        .sidebar-cta{display:flex;flex-direction:column;gap:.75rem;margin-top:1.5rem}
        .sidebar-btn{display:flex;align-items:center;gap:.7rem;padding:.9rem 1.2rem;
          border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:600;transition:all .2s}
        .sidebar-btn--call{background:var(--red);color:#fff}
        .sidebar-btn--call:hover{background:var(--red-dk);transform:translateX(3px)}
        .sidebar-btn--whatsapp{background:#25d366;color:#fff}
        .sidebar-btn--whatsapp:hover{background:#128c7e;transform:translateX(3px)}

        /* form */
        .form-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:2.5rem}
        .form-card h3{font-family:'Playfair Display',serif;font-size:1.4rem;color:var(--dark);
          margin-bottom:.4rem}
        .form-card p{font-size:.82rem;color:var(--subtle);margin-bottom:1.8rem}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
        @media(max-width:580px){.form-row{grid-template-columns:1fr}}
        .fg{display:flex;flex-direction:column;gap:.35rem;margin-bottom:.9rem}
        .fg label{font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--subtle)}
        .fg input,.fg select,.fg textarea{padding:.75rem 1rem;border:1.5px solid var(--border);
          border-radius:8px;font-size:.85rem;font-family:'Montserrat',sans-serif;
          color:var(--text);outline:none;transition:border-color .2s,box-shadow .2s;width:100%}
        .fg input:focus,.fg select:focus,.fg textarea:focus{
          border-color:var(--red);box-shadow:0 0 0 3px rgba(232,25,75,.08)}
        .fg textarea{resize:vertical;min-height:90px}
        .submit-btn{width:100%;padding:1rem;background:var(--red);color:#fff;border:none;
          border-radius:8px;font-size:.82rem;font-weight:700;letter-spacing:.1em;
          text-transform:uppercase;cursor:pointer;font-family:'Montserrat',sans-serif;
          transition:all .2s;display:flex;align-items:center;justify-content:center;gap:.5rem;
          margin-top:.5rem}
        .submit-btn:hover:not(:disabled){background:var(--red-dk);transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(232,25,75,.35)}
        .submit-btn:disabled{opacity:.65;cursor:not-allowed}

        /* success */
        .success-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;
          padding:3rem 2rem;text-align:center}
        .success-card__icon{font-size:4rem;display:block;margin-bottom:1rem;
          animation:successBounce .5s cubic-bezier(.34,1.56,.64,1)}
        @keyframes successBounce{from{transform:scale(0)}to{transform:scale(1)}}
        .success-card h3{font-family:'Playfair Display',serif;font-size:1.6rem;
          color:var(--dark);margin-bottom:.5rem}
        .success-card p{font-size:.86rem;color:var(--subtle);line-height:1.75;margin-bottom:1.5rem}
        .success-actions{display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap}
        .success-btn{display:inline-flex;align-items:center;gap:.4rem;padding:.75rem 1.5rem;
          border-radius:6px;font-size:.75rem;font-weight:700;letter-spacing:.08em;
          text-transform:uppercase;text-decoration:none;transition:all .2s}
        .success-btn--primary{background:var(--red);color:#fff}
        .success-btn--primary:hover{background:var(--red-dk);transform:translateY(-2px)}
        .success-btn--outline{border:2px solid var(--border);color:var(--text)}
        .success-btn--outline:hover{border-color:var(--red);color:var(--red)}

        /* map placeholder */
        .map-placeholder{width:100%;height:300px;background:linear-gradient(135deg,#e8f5e9,#f5f5f5);
          border-radius:12px;display:flex;flex-direction:column;align-items:center;
          justify-content:center;gap:.8rem;border:1.5px solid var(--border)}
        .map-placeholder__icon{font-size:3rem}
        .map-placeholder__text{font-size:.82rem;color:var(--subtle);font-weight:600}
        .map-placeholder a{font-size:.78rem;color:var(--red);font-weight:700;text-decoration:none}

        /* FAQ */
        .faq-section{background:var(--muted);padding:4rem 1.5rem}
        .faq-inner{max-width:800px;margin:0 auto}
        .faq-header{text-align:center;margin-bottom:2.5rem}
        .faq-stag{display:inline-block;background:#fff5f7;color:var(--red);font-size:.68rem;
          font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:.35rem 1rem;
          border-radius:50px;margin-bottom:.8rem;border:1px solid #ffd0da}
        .faq-title{font-family:'Playfair Display',serif;font-size:clamp(1.5rem,3vw,2.2rem);
          font-weight:700;color:var(--dark)}
        .faq-item{background:#fff;border:1.5px solid var(--border);border-radius:12px;
          margin-bottom:.8rem;overflow:hidden;transition:border-color .2s}
        .faq-item.open{border-color:var(--red)}
        .faq-question{padding:1.2rem 1.5rem;display:flex;align-items:center;justify-content:space-between;
          cursor:pointer;gap:1rem;font-size:.88rem;font-weight:600;color:var(--dark)}
        .faq-icon{font-size:1.2rem;transition:transform .3s;flex-shrink:0;color:var(--red)}
        .faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{padding:0 1.5rem 1.2rem;font-size:.84rem;color:var(--subtle);line-height:1.75;
          border-top:1px solid var(--border);padding-top:1rem;margin-top:0}
        .faq-answer-wrap{max-height:0;overflow:hidden;transition:max-height .3s ease}
        .faq-item.open .faq-answer-wrap{max-height:200px}
      `}</style>

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">📞</div>
        <div className="crumb">
          <Link to="/">Home</Link>
          <span style={{color:"rgba(255,255,255,.3)"}}>/</span>
          <span style={{color:"rgba(255,255,255,.6)"}}>Contact Us</span>
        </div>
        <span className="stag">Let's Plan Together</span>
        <h1 className="stitle">Get in Touch with<br />Our Party Experts</h1>
        <p className="sdesc">Have questions about your upcoming party? We'd love to hear from you. Our team responds within 24 hours.</p>
      </section>

      {/* Info strip */}
      <div className="info-strip">
        <div className="info-strip-inner">
          {[
            {icon:"📍", label:"Our Location", val:"40, 11th D Cross, next to Iscon temple. RMD School"},
            {icon:"📞", label:"Call Us", val:<><a href="#">12345 67890</a><br/><span style={{fontSize:".72rem",color:"rgba(255,255,255,.45)"}}>Mon–Sun: 9AM – 8PM</span></>},
            {icon:"✉️", label:"Email Us", val:<><a href="#">xyz@birthdaybumps.in</a><br/><span style={{fontSize:".72rem",color:"rgba(255,255,255,.45)"}}>Reply within 24 hours</span></>},
          ].map(item=>(
            <div key={item.label} className="info-tile">
              <div className="info-tile__icon">{item.icon}</div>
              <div>
                <div className="info-tile__label">{item.label}</div>
                <div className="info-tile__val">{typeof item.val === "string" ? item.val.split("\n").map((l,i)=><span key={i}>{l}{i===0&&<br/>}</span>) : item.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      {/* FAQ */}
      <div className="faq-section">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="faq-stag">Frequently Asked</div>
            <h2 className="faq-title">Common Questions</h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item${openFaq === i ? " open" : ""}`}>
              <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer-wrap">
                <div className="faq-answer">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <AppointmentForm />
    </>
  );
}
