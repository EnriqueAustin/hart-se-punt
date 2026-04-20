import { MapPin, Compass } from "lucide-react";
import Hero from "@/components/ui-blocks/Hero";
import SectionHeading from "@/components/ui-blocks/SectionHeading";
import { BookingCTA } from "@/components/ui-blocks/CTAButtons";
import { ATTRACTIONS, CONTACT, GALLERY } from "@/lib/siteData";

export default function Location() {
  return (
    <>
      <Hero
        image={GALLERY[0].src}
        size="sm"
        eyebrow="Location & Attractions"
        title="Moments from the sea."
        subtitle={CONTACT.address}
      />

      {/* Map */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="rounded-3xl overflow-hidden border border-border/60 aspect-[16/9] shadow-sm">
            <iframe
              title="Hart-se-Punt location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=17.88%2C-32.807%2C17.905%2C-32.795&layer=mapnik&marker=-32.8017%2C17.8931"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-2 justify-center mt-4 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-terracotta" />
            <span>{CONTACT.address}</span>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Nearby"
            title="Explore the West Coast"
            description="From long beach walks to nature reserves and West Coast seafood — everything worth discovering is within easy reach."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ATTRACTIONS.map((a, i) => (
              <div
                key={i}
                className="bg-card border border-border/60 rounded-2xl p-7 hover:border-ocean/40 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <Compass className="w-5 h-5 text-ocean" />
                  <span className="text-xs text-terracotta font-medium">{a.distance}</span>
                </div>
                <h3 className="font-serif text-xl mb-2">{a.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <BookingCTA label="Check Availability" />
          </div>
        </div>
      </section>
    </>
  );
}