import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  return (
    <div className={cn(
      "max-w-2xl mb-12 md:mb-16",
      align === "center" && "mx-auto text-center",
      className
    )}>
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta mb-4">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}