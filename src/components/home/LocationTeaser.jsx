import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui-blocks/SectionHeading";

export default function LocationTeaser({ image }) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Paternoster"
              title="Where the West Coast meets stillness."
              description="Hart-se-Punt is tucked into the quiet northern extension of Paternoster — a historic fishing village on South Africa's West Coast, framed by white-washed cottages, turquoise Atlantic waters and wide-open coastal dunes."
              className="mb-6"
            />
            <div className="flex items-start gap-3 mb-8 text-sm text-muted-foreground">
              <MapPin className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
              <span>11 Mosselbank Street, Paternoster, West Coast, South Africa</span>
            </div>
            <Link
              to="/location"
              className="inline-flex items-center gap-2 text-ocean-deep font-medium border-b-2 border-terracotta hover:gap-3 transition-all"
            >
              Discover the Area <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={image} alt="Paternoster coastline" className="w-full h-full object-cover image-zoom" />
          </div>
        </div>
      </div>
    </section>
  );
}