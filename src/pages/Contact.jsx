import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import Hero from "@/components/ui-blocks/Hero";
import { BookingCTA, ReserveCTA } from "@/components/ui-blocks/CTAButtons";
import { CONTACT, GALLERY } from "@/lib/siteData";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Hero
        image={GALLERY[4].src}
        size="sm"
        eyebrow="Contact"
        title="Get in touch"
        subtitle="We'd love to hear from you — send us a message anytime."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-sand border border-border/60 rounded-3xl p-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-ocean mx-auto mb-4" />
                <h3 className="font-serif text-2xl mb-3">Message sent</h3>
                <p className="text-muted-foreground mb-6">Thank you — Willie & Elna will get back to you shortly.</p>
                <button onClick={() => setSent(false)} className="text-sm text-ocean border-b border-terracotta">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-card border border-border/60 rounded-3xl p-7 md:p-10 space-y-5">
                <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                </div>
                <Field label="Message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} required />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ocean text-white text-sm font-medium hover:bg-ocean-deep transition-colors"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <InfoCard icon={MapPin} title="Address" value={CONTACT.address} />
            <InfoCard icon={Mail} title="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <InfoCard icon={Phone} title="Phone" value={CONTACT.phone} href={`tel:${CONTACT.phone}`} />

            <div className="bg-sand rounded-3xl p-7 border border-border/60">
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-3">Ready to Book?</p>
              <div className="flex flex-col gap-2.5">
                <BookingCTA label="Check Availability" />
                <ReserveCTA label="Reserve Directly" variant="outlineDark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required, textarea }) {
  const base = "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">{label}{required && "*"}</span>
      {textarea ? (
        <textarea rows={5} className={base} value={value} onChange={(e) => onChange(e.target.value)} required={required} />
      ) : (
        <input type={type} className={base} value={value} onChange={(e) => onChange(e.target.value)} required={required} />
      )}
    </label>
  );
}

function InfoCard({ icon: Icon, title, value, href }) {
  const content = (
    <div className="bg-card border border-border/60 rounded-2xl p-6 hover:border-ocean/40 transition-all">
      <Icon className="w-5 h-5 text-ocean mb-3" />
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{title}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}