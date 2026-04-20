import { useState } from "react";
import { CheckCircle2, Send, Users, Heart, MessageCircle, ExternalLink } from "lucide-react";
import Hero from "@/components/ui-blocks/Hero";
import { BOOKING_URL, GALLERY } from "@/lib/siteData";

export default function Reservations() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    checkin: "", checkout: "",
    guests: 2, requests: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: document.getElementById("form-section")?.offsetTop - 100, behavior: "smooth" });
  };

  const trust = [
    { icon: Heart, title: "Personalised Service", text: "Direct communication with your hosts Willie & Elna for a warm, tailored welcome." },
    { icon: MessageCircle, title: "Flexible Requests", text: "Arriving late? Travelling with pets? Just ask — we're happy to accommodate." },
    { icon: Users, title: "Direct with Owners", text: "Skip the intermediary. Every message comes straight to us." },
  ];

  return (
    <>
      <Hero
        image={GALLERY[0].src}
        size="sm"
        eyebrow="Reservations"
        title="Reserve Hart-se-Punt Beach House"
        subtitle="Book directly for personalised service and flexible requests."
      />

      <section id="form-section" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-sand border border-border/60 rounded-3xl p-10 md:p-14 text-center">
                <CheckCircle2 className="w-14 h-14 text-ocean mx-auto mb-5" />
                <h3 className="font-serif text-3xl mb-4">Reservation request sent</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
                  Your reservation request has been sent. We will contact you shortly to confirm your booking.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:"", email:"", phone:"", checkin:"", checkout:"", guests:2, requests:"" }); }}
                  className="text-sm text-ocean border-b border-terracotta"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-card border border-border/60 rounded-3xl p-7 md:p-10 space-y-5">
                <h3 className="font-serif text-2xl mb-2">Direct Reservation Enquiry</h3>
                <p className="text-sm text-muted-foreground mb-4">Tell us about your stay and we'll be in touch.</p>

                <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  <Field label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  <Field label="Check-in" type="date" value={form.checkin} onChange={(v) => setForm({ ...form, checkin: v })} required />
                  <Field label="Check-out" type="date" value={form.checkout} onChange={(v) => setForm({ ...form, checkout: v })} required />
                  <Field label="Guests" type="number" min={1} max={4} value={form.guests} onChange={(v) => setForm({ ...form, guests: v })} required />
                </div>
                <Field
                  label="Special Requests (mention pets if applicable)"
                  textarea
                  value={form.requests}
                  onChange={(v) => setForm({ ...form, requests: v })}
                  placeholder="Any requests, arrival time, pets travelling with you, etc."
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terracotta text-white text-sm font-medium hover:brightness-110 transition-all"
                >
                  Send Reservation Request <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Alternative CTA */}
            <div className="mt-8 bg-ocean-deep text-white rounded-3xl p-7 md:p-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-2">Prefer instant booking?</p>
                <p className="font-serif text-xl">Check live availability and book in seconds.</p>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ocean-deep text-sm font-medium hover:bg-white/90 transition whitespace-nowrap"
              >
                Book on Booking.com <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Trust panel */}
          <aside className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl mb-3">Why book direct?</h3>
            {trust.map((t, i) => (
              <div key={i} className="bg-card border border-border/60 rounded-2xl p-6 hover:border-ocean/40 transition-all">
                <t.icon className="w-5 h-5 text-ocean mb-3" />
                <p className="font-serif text-lg mb-1.5">{t.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required, textarea, placeholder, min, max }) {
  const base = "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">{label}{required && "*"}</span>
      {textarea ? (
        <textarea rows={4} className={base} value={value} onChange={(e) => onChange(e.target.value)} required={required} placeholder={placeholder} />
      ) : (
        <input
          type={type}
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          min={min}
          max={max}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}