import Hero from "@/components/ui-blocks/Hero";
import Highlights from "@/components/home/Highlights";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import Testimonials from "@/components/home/Testimonials";
import LocationTeaser from "@/components/home/LocationTeaser";
import FinalCTA from "@/components/home/FinalCTA";
import { BookingCTA, ReserveCTA } from "@/components/ui-blocks/CTAButtons";
import { GALLERY } from "@/lib/siteData";

const HERO_IMG = "/images/hero.jpeg";
const BEACH_IMG = "/images/262336746.jpg";
const COAST_IMG = "/images/262336742.jpg";

export default function Home() {
  return (
    <>
      <Hero
        image={HERO_IMG}
        eyebrow="Paternoster · West Coast · South Africa"
        title="Hart-se-Punt — Your Beach House in Paternoster"
        subtitle="Steps from the beach • Private patio & braai • Fireplace & fully equipped kitchen"
      >
        <BookingCTA variant="white" label="Check Availability" />
        <ReserveCTA variant="outline" label="Reserve Your Stay" />
      </Hero>

      <Highlights />
      <GalleryTeaser />
      <Testimonials />
      <LocationTeaser image={COAST_IMG} />
      <FinalCTA image={BEACH_IMG} />
    </>
  );
}