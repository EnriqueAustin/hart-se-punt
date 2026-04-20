import { Waves, Home, Flame, PawPrint } from "lucide-react";

const items = [
  { icon: Waves, title: "Steps to the Beach", text: "Just 80 m to Paternoster Main Beach" },
  { icon: Home, title: "Spacious 140 m²", text: "Two-bedroom self-catering house" },
  { icon: Flame, title: "Patio, Braai & Fire", text: "Sheltered patio with fireplace inside" },
  { icon: PawPrint, title: "Pet & Family Friendly", text: "Safe grassed garden, welcome pets" },
];

export default function Highlights() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {items.map((it, i) => (
          <div
            key={i}
            className="group relative bg-card border border-border/60 rounded-2xl p-6 md:p-8 hover:border-ocean/40 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-11 h-11 rounded-full bg-sand flex items-center justify-center mb-5 group-hover:bg-ocean group-hover:text-white transition-colors">
              <it.icon className="w-5 h-5 text-ocean group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-serif text-lg md:text-xl mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}