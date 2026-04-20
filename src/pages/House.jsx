import { useState } from "react";
import {
  Users, BedDouble, Ruler, Star,
  Utensils, Flame, Beef, Sun, Trees, PawPrint, Wifi, Car, Bath, Waves, Home as HomeIcon, Check,
} from "lucide-react";
import Hero from "@/components/ui-blocks/Hero";
import SectionHeading from "@/components/ui-blocks/SectionHeading";
import { BookingCTA, ReserveCTA } from "@/components/ui-blocks/CTAButtons";
import { GALLERY, HOUSE, AMENITIES } from "@/lib/siteData";
import { cn } from "@/lib/utils";

const ICONS = {
  Utensils, Flame, Beef, Sun, Trees, PawPrint, Wifi, Car, Bath, Waves,
  Users, Home: HomeIcon,
};

export default function House() {
  const [active, setActive] = useState(0);
  const showcase = GALLERY.slice(0, 6);

  return (
    <>
      <Hero
        image={GALLERY[0].src}
        size="md"
        eyebrow="The Beach House"
        title="Two-Bedroom House · 140 m²"
        subtitle="The entire place is yours — spacious, sunlit, and steps from the sea."
      />

      {/* Showcase */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 aspect-[4/3] overflow-hidden rounded-3xl">
              <img key={active} src={showcase[active].src} alt={showcase[active].caption} className="w-full h-full object-cover transition-opacity duration-500" />
            </div>
            <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-2 gap-3">
              {showcase.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "aspect-square overflow-hidden rounded-xl transition-all",
                    active === i ? "ring-2 ring-ocean opacity-100" : "opacity-80 hover:opacity-100"
                  )}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description + price */}
      <section className="py-20 md:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta mb-4">About this Property</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">Spacious Holiday Home in Paternoster</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {HOUSE.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="mt-8">
              <h3 className="font-serif text-xl mb-4">Property Highlights</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {HOUSE.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-card border border-border/60 rounded-2xl p-7 sticky top-28">
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-terracotta text-terracotta" />
                <span className="font-semibold text-sm">{HOUSE.rating}</span>
                <span className="text-muted-foreground text-xs">· {HOUSE.reviewCount} reviews</span>
              </div>
              <h3 className="font-serif text-2xl mb-5">{HOUSE.name}</h3>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <Stat icon={Users} label={`${HOUSE.capacity} guests`} />
                <Stat icon={BedDouble} label="2 bedrooms" />
                <Stat icon={Ruler} label="140 m²" />
              </div>

              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{HOUSE.beds}</p>

              <div className="border-t border-border/60 pt-5 mb-6">
                <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                <p className="font-serif text-3xl text-ocean-deep">{HOUSE.priceFrom}</p>
                <p className="text-xs text-muted-foreground">{HOUSE.priceNote}</p>
              </div>

              <div className="flex flex-col gap-2.5">
                <BookingCTA label="Book on Booking.com" />
                <ReserveCTA label="Reserve Directly" variant="outlineDark" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Amenities" title="Everything you need to feel at home" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AMENITIES.map((a, i) => {
              const Icon = ICONS[a.icon] || Check;
              return (
                <div key={i} className="flex items-center gap-3 bg-card border border-border/60 rounded-xl p-5 hover:border-ocean/40 hover:-translate-y-0.5 transition-all">
                  <Icon className="w-5 h-5 text-ocean flex-shrink-0" />
                  <span className="text-sm">{a.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, label }) {
  return (
    <div className="text-center bg-sand rounded-xl p-3">
      <Icon className="w-4 h-4 text-ocean mx-auto mb-1" />
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}