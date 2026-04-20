import Hero from "@/components/ui-blocks/Hero";
import SectionHeading from "@/components/ui-blocks/SectionHeading";
import { BookingCTA, ReserveCTA } from "@/components/ui-blocks/CTAButtons";
import { GALLERY, CONTACT } from "@/lib/siteData";

export default function About() {
  return (
    <>
      <Hero
        image={GALLERY[5].src}
        size="sm"
        eyebrow="About"
        title="A true home away from home."
        subtitle="Personally hosted by Willie & Elna Esterhuysen"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="The heart of Paternoster, with space to breathe."
            description="Hart-se-Punt — affectionately meaning 'heart's point' — is our small tribute to the peaceful West Coast lifestyle."
          />

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Nestled on Mosselbank Street in the quiet northern extension of Paternoster, Hart-se-Punt sits approximately 80 metres from the sea — close enough to hear the waves, far enough to sleep soundly.
            </p>
            <p>
              We built this beach house with one intention: to create the kind of place we would want to escape to ourselves. Spacious, light-filled and thoughtfully equipped, it's a home where families, couples and four-legged friends all feel welcome.
            </p>
            <p>
              Inside, a crackling fireplace warms winter evenings. The fully fitted kitchen has everything you need — from a gas stove and dishwasher to every piece of crockery and cutlery you could think of. Two bedrooms (a double and twin), beautiful linen, and even hot water bottles on each bed when it's cold.
            </p>
            <p>
              Outside, a sheltered patio with braai facilities looks onto our garden — a contained grassed space ideal for small dogs to play safely. It's the kind of setting where time slows down, the wine lasts longer, and conversations drift into the evening breeze.
            </p>
            <p>
              We live nearby and are always on hand for a welcome, a recommendation or a helping hand. Whatever you need — you'll find us just a call away.
            </p>
          </div>

          <div className="mt-14 p-8 md:p-10 bg-sand rounded-3xl border border-border/60">
            <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta mb-3">Your Hosts</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-4">{CONTACT.hosts}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We warmly welcome every guest personally and are always available to answer any questions during your stay. It is our joy to see Hart-se-Punt become your home.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookingCTA label="Check Availability" />
              <ReserveCTA label="Reserve Your Stay" variant="outlineDark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}