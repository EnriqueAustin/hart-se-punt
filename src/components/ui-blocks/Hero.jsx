import { cn } from "@/lib/utils";

/**
 * Strict hero: dark overlay + pure white text only.
 */
export default function Hero({ image, eyebrow, title, subtitle, children, size = "lg", align = "center" }) {
  const heights = {
    sm: "h-[55vh] min-h-[420px]",
    md: "h-[70vh] min-h-[520px]",
    lg: "h-[92vh] min-h-[640px]",
  };

  return (
    <section className={cn("relative w-full overflow-hidden", heights[size])}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className={cn(
        "relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-16 md:pb-24",
        align === "center" && "items-center text-center",
      )}>
        <div className={cn("max-w-4xl fade-in-up", align === "center" && "mx-auto")}>
          {eyebrow && (
            <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-white mb-5 opacity-90">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && (
            <div className={cn("mt-8 flex flex-wrap gap-3", align === "center" && "justify-center")}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}