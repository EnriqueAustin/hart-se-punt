import { Star, Quote } from "lucide-react";
import { REVIEWS, HOUSE } from "@/lib/siteData";
import SectionHeading from "@/components/ui-blocks/SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ocean-deep text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta mb-4">Guest Stories</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-5">
            Rated <span className="text-terracotta">{HOUSE.rating}/10</span> by {HOUSE.reviewCount} guests
          </h2>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 6).map((r, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Quote className="w-5 h-5 text-terracotta mb-4 opacity-80" />
              <p className="text-white/90 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div>
                <p className="font-serif text-base text-white">{r.name}</p>
                <p className="text-xs text-white/60">{r.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}