import { useState } from "react";

const API_URL = "http://localhost:5000";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", date: "", eventType: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .appt-section {
          padding: 5rem 1.5rem;
          background: #1a0a0f;
          font-family: 'Montserrat', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .appt-section::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 40%; height: 100%;
          background: linear-gradient(135deg, transparent, rgba(232,25,75,0.05));
          pointer-events: none;
        }
        .appt-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .appt-inner { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        .appt-info h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: #fff;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .appt-info h2 span { color: #f7c948; }
        .appt-info p { color: rgba(255,255,255,0.6); font-size: 0.88rem; line-height: 1.8; margin-bottom: 2rem; }
        .section-tag {
          display: inline-block;
          background: rgba(247,201,72,0.1);
          border: 1px solid rgba(247,201,72,0.3);
          color: #f7c948;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          padding: 0.35rem 1rem; border-radius: 50px; margin-bottom: 0.9rem;
        }
        .appt-perks { display: flex; flex-direction: column; gap: 0.9rem; }
        .appt-perk { display: flex; align-items: center; gap: 0.8rem; color: rgba(255,255,255,0.8); font-size: 0.82rem; }
        .appt-perk__icon {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(232,25,75,0.15); border: 1px solid rgba(232,25,75,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
        }
        .appt-form {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px; padding: 2.5rem;
        }
        .appt-form h3 { color: #fff; font-size: 1.1rem; font-weight: 700; margin-bottom: 1.5rem; letter-spacing: 0.04em; }
        .appt-form h3 span { color: #f7c948; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
        .form-group { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }
        .form-group label {
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 6px; padding: 0.75rem 1rem;
          color: #fff; font-size: 0.85rem;
          font-family: 'Montserrat', sans-serif;
          outline: none; width: 100%;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder { color: rgba(255,255,255,0.3); }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #e8194b;
          background: rgba(232,25,75,0.06);
          box-shadow: 0 0 0 3px rgba(232,25,75,0.12);
        }
        .form-group select option { background: #2d1020; color: #fff; }
        .form-group textarea { resize: vertical; min-height: 80px; }

        /* Error banner */
        .appt-error {
          background: rgba(232,25,75,0.12);
          border: 1px solid rgba(232,25,75,0.35);
          border-radius: 8px; padding: 0.85rem 1rem;
          color: #ff8fa3; font-size: 0.82rem;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.6rem;
          animation: shakeError 0.35s ease;
        }
        @keyframes shakeError {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }

        /* Submit button */
        .appt-submit {
          width: 100%; padding: 1rem;
          background: #e8194b; color: #fff; border: none;
          border-radius: 6px; font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; font-family: 'Montserrat', sans-serif;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          margin-top: 0.5rem; position: relative; overflow: hidden;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .appt-submit:hover:not(:disabled) {
          background: #b8012e; transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(232,25,75,0.4);
        }
        .appt-submit:disabled { opacity: 0.65; cursor: not-allowed; }

        /* Spinner */
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.7s linear infinite; flex-shrink: 0;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success */
        .appt-success {
          text-align: center; padding: 2.5rem 1rem; color: #fff;
          animation: successPop 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes successPop {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: none; }
        }
        .appt-success__icon {
          font-size: 4rem; display: block; margin-bottom: 1rem;
          animation: bounceIcon 1s ease-in-out 0.3s;
        }
        @keyframes bounceIcon {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .appt-success h3 { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.6rem; color: #f7c948; }
        .appt-success p { color: rgba(255,255,255,0.65); font-size: 0.84rem; line-height: 1.75; margin-bottom: 0.5rem; }
        .appt-success__ref { font-size: 0.72rem; color: rgba(255,255,255,0.35); letter-spacing: 0.08em; margin-top: 0.5rem; }
        .appt-success__again {
          background: transparent; border: 1.5px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.7); border-radius: 6px;
          padding: 0.65rem 1.5rem; font-size: 0.75rem; font-weight: 600;
          cursor: pointer; font-family: 'Montserrat', sans-serif;
          margin-top: 1.2rem; transition: all 0.2s; display: inline-block;
        }
        .appt-success__again:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
      `}</style>

      <section className="appt-section" id="appointment">
        <div className="appt-inner">

          {/* Info side */}
          <div className="appt-info">
            <span className="section-tag">Let's Plan Together</span>
            <h2>Make an <span>Appointment</span> with Our Event Manager</h2>
            <p>
              Meeting your Event Manager is the most effective way to plan your
              personalised birthday party. We'll understand your vision and craft
              the perfect celebration.
            </p>
            <div className="appt-perks">
              {[
                { icon: "🎯", text: "Personalised party planning consultation" },
                { icon: "💰", text: "Transparent pricing with no hidden costs" },
                { icon: "📋", text: "Complete event checklist & timeline" },
                { icon: "📞", text: "Dedicated manager assigned to your event" },
                { icon: "⚡", text: "Quick response within 24 hours" },
              ].map((p) => (
                <div key={p.text} className="appt-perk">
                  <div className="appt-perk__icon">{p.icon}</div>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div className="appt-form">
            {submitted ? (
              <div className="appt-success">
                <span className="appt-success__icon">🎉</span>
                <h3>Appointment Booked!</h3>
                <p>
                  Your appointment request has been <strong>saved successfully</strong>.
                  Our team will contact you within 24 hours to confirm your appointment
                  and begin planning your perfect party.
                </p>
                <p className="appt-success__ref">
                  ✅ Details saved to our system securely.
                </p>
                <button
                  className="appt-success__again"
                  onClick={() => setSubmitted(false)}
                >
                  ＋ Book Another Appointment
                </button>
              </div>
            ) : (
              <>
                <h3>Book a <span>Free</span> Consultation</h3>

                {error && (
                  <div className="appt-error">
                    <span>⚠️</span>
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Event Date</label>
                      <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Event Type</label>
                      <select name="eventType" value={form.eventType} onChange={handleChange}>
                        <option value="">Select type</option>
                        <option>Birthday Party</option>
                        <option>Baby Shower</option>
                        <option>Naming Ceremony</option>
                        <option>School Event</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream party — theme, number of guests, special requirements..."
                    />
                  </div>

                  <button type="submit" className="appt-submit" disabled={loading}>
                    {loading ? (
                      <><span className="spinner" /> Saving your appointment...</>
                    ) : (
                      "🎉 Book Appointment"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
