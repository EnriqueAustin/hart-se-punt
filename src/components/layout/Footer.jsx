import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { BOOKING_URL, CONTACT } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-ocean-deep text-white/85">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-white mb-3">Hart-se-Punt</h3>
          <p className="text-sm leading-relaxed max-w-md">
            A spacious self-catering beach house in the quiet northern extension of Paternoster — just 80 metres from the sea. Hosted personally by {CONTACT.hosts}.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/house" className="hover:text-white transition-colors">The House</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/location" className="hover:text-white transition-colors">Location</Link></li>
            <li><Link to="/reservations" className="hover:text-white transition-colors">Reserve</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /><a href={`tel:${CONTACT.phone}`} className="hover:text-white">{CONTACT.phone}</a>
            </li>
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-sm text-terracotta hover:text-white transition-colors"
          >
            Book on Booking.com <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Hart-se-Punt Paternoster. All rights reserved.</span>
          <span>Designed with love on the West Coast</span>
        </div>
      </div>
    </footer>
  );
}