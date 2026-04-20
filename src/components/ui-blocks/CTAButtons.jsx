import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/siteData";

export function BookingCTA({ label = "Check Availability", variant = "ocean" }) {
  const base = "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300";
  const styles = {
    ocean: "bg-ocean text-white hover:bg-ocean-deep",
    white: "bg-white text-ocean-deep hover:bg-white/90",
    terracotta: "bg-terracotta text-white hover:brightness-110",
    outline: "border border-white text-white hover:bg-white hover:text-ocean-deep",
  };
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]}`}>
      {label} <ExternalLink className="w-4 h-4" />
    </a>
  );
}

export function ReserveCTA({ label = "Reserve Your Stay", variant = "terracotta" }) {
  const base = "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300";
  const styles = {
    terracotta: "bg-terracotta text-white hover:brightness-110",
    white: "bg-white text-ocean-deep hover:bg-white/90",
    outline: "border border-white text-white hover:bg-white hover:text-ocean-deep",
    outlineDark: "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background",
  };
  return (
    <Link to="/reservations" className={`${base} ${styles[variant]}`}>
      {label} <ArrowRight className="w-4 h-4" />
    </Link>
  );
}