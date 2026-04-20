import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BOOKING_URL } from "@/lib/siteData";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/house", label: "The House" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/location", label: "Location" },
  { to: "/reservations", label: "Reserve" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={cn(
            "font-serif text-xl md:text-2xl tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}>
            Hart-se-Punt
          </span>
          <span className={cn(
            "hidden md:inline text-[10px] uppercase tracking-[0.2em] transition-colors",
            scrolled ? "text-muted-foreground" : "text-white/75"
          )}>
            Paternoster
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors relative",
                  scrolled ? "text-foreground/80 hover:text-ocean" : "text-white/90 hover:text-white",
                  isActive && (scrolled ? "text-ocean" : "text-white")
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-ocean text-white text-sm font-medium hover:bg-ocean-deep transition-colors"
          >
            Check Availability
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/60 mt-3">
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-base py-1 border-b border-border/40",
                    isActive ? "text-ocean" : "text-foreground/80"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-ocean text-white text-sm font-medium"
            >
              Check Availability
            </a>
          </div>
        </div>
      )}
    </header>
  );
}