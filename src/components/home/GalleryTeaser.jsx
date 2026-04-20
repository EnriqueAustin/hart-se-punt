import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GALLERY } from "@/lib/siteData";
import SectionHeading from "@/components/ui-blocks/SectionHeading";

export default function GalleryTeaser() {
  const picks = [GALLERY[5], GALLERY[4], GALLERY[6], GALLERY[0], GALLERY[3]];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="Gallery" title="A glimpse inside" description="Step into the spaces you'll soon call home." />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl">
            <img src={picks[0].src} alt={picks[0].caption} className="w-full h-full object-cover image-zoom" />
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img src={picks[1].src} alt={picks[1].caption} className="w-full h-full object-cover image-zoom" />
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img src={picks[2].src} alt={picks[2].caption} className="w-full h-full object-cover image-zoom" />
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img src={picks[3].src} alt={picks[3].caption} className="w-full h-full object-cover image-zoom" />
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img src={picks[4].src} alt={picks[4].caption} className="w-full h-full object-cover image-zoom" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ocean text-ocean hover:bg-ocean hover:text-white transition-colors text-sm font-medium"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}