import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Hero from "@/components/ui-blocks/Hero";
import { BookingCTA, ReserveCTA } from "@/components/ui-blocks/CTAButtons";
import { FAQS, GALLERY } from "@/lib/siteData";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <Hero
        image={GALLERY[3].src}
        size="sm"
        eyebrow="FAQ"
        title="Everything you'd like to know"
        subtitle="Answers to our most common questions about Hart-se-Punt."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="divide-y divide-border/60 border-t border-b border-border/60">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="py-1">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full py-6 flex items-center justify-between text-left group gap-4"
                  >
                    <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-ocean transition-colors">{f.q}</span>
                    <span className="w-9 h-9 rounded-full bg-sand flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-ocean group-hover:text-white">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={cn(
                    "grid transition-all duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  )}>
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground leading-relaxed pr-12">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center bg-sand rounded-3xl p-10 border border-border/60">
            <h3 className="font-serif text-2xl mb-3">Still have a question?</h3>
            <p className="text-muted-foreground text-sm mb-6">Contact Willie & Elna directly — we're always happy to help.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <BookingCTA label="Check Availability" />
              <ReserveCTA label="Send an Enquiry" variant="outlineDark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}