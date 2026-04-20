import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/ui-blocks/Hero";
import { GALLERY, GALLERY_FILTERS } from "@/lib/siteData";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Deterministic span classes for masonry variety
const SPANS = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightIdx, setLightIdx] = useState(null);

  const filtered = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((g) => mapCategory(g.category) === filter)),
    [filter]
  );

  const openAt = (i) => setLightIdx(i);
  const close = () => setLightIdx(null);
  const prev = () => setLightIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightIdx((i) => (i === null ? null : (i + 1) % filtered.length));

  const currentImage = lightIdx !== null ? filtered[lightIdx] : null;

  return (
    <>
      <Hero
        image={GALLERY[4]?.src || "/images/gallery-5.jpg"}
        size="sm"
        eyebrow="Gallery"
        title="Moments at Hart-se-Punt"
        subtitle="Explore every corner — from ocean views to the cosy fireplace."
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm transition-all duration-300 border",
                  filter === f.key
                    ? "bg-ocean text-white border-ocean shadow-md"
                    : "bg-transparent text-foreground/70 border-border hover:border-ocean hover:text-ocean"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.button
                  layout
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => openAt(i)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl group cursor-zoom-in bg-muted",
                    SPANS[i % SPANS.length]
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-xs font-medium">{img.caption}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={lightIdx !== null} onOpenChange={close}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            {filtered.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Image */}
            {currentImage && (
              <div className="flex flex-col items-center">
                <img
                  src={currentImage.src}
                  alt={currentImage.caption}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <p className="text-white mt-4 text-lg">{currentImage.caption}</p>
                <p className="text-white/60 text-sm">
                  {lightIdx !== null ? lightIdx + 1 : 0} / {filtered.length}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Simple mapper so our data categories align with filter keys
function mapCategory(cat) {
  const map = {
    beach: "beach",
    living: "living",
    bedrooms: "bedrooms",
    patio: "patio",
    garden: "garden",
    exterior: "exterior",
  };
  return map[cat] || "all";
}