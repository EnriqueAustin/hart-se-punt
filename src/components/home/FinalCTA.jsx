import { BookingCTA, ReserveCTA } from "@/components/ui-blocks/CTAButtons";

export default function FinalCTA({ image }) {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/90 mb-5">Your West Coast Escape Awaits</p>
        <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] mb-6">
          Come home to the sound of the sea.
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Book directly for personalised service, or reserve instantly via Booking.com.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <BookingCTA variant="white" label="Check Availability" />
          <ReserveCTA variant="outline" label="Reserve Directly" />
        </div>
      </div>
    </section>
  );
}