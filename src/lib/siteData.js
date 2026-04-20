// Hart-se-Punt site data — local images from public/images

export const BOOKING_URL = "https://www.booking.com/hotel/za/home-away-from-home-paternoster.html?aid=356980&label=gog235jc-10CAso-wFCH2hvbWUtYXdheS1mcm9tLWhvbWUtcGF0ZXJub3N0ZXJIM1gDaPsBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKn1pjPBsACAdICJDVkZDRjM2NiLWQwNjUtNDc4MS04YTM2LWM1MTdjOGE4NGQ4MNgCAeACAQ&sid=b7d49ca9e2d90abdf4f85f2fdae8d3bc";

export const CONTACT = {
  hosts: "Willie & Elna Esterhuysen",
  address: "11 Mosselbank Street, Paternoster, 7381, South Africa",
  email: "info@hart-se-punt.co.za",
  phone: "+27 82 000 0000",
};

// Local images from public/images folder
export const GALLERY = [
  { src: "/images/hero.jpeg", caption: "Paternoster beach and boats", category: "beach" },
  { src: "/images/263645971.jpg", caption: "Pergola exterior of Hart-se-Punt", category: "exterior" },
  { src: "/images/262336731.jpg", caption: "Main bedroom with double bed", category: "bedrooms" },
  { src: "/images/262336734.jpg", caption: "Second bedroom with twin beds", category: "bedrooms" },
  { src: "/images/262336740.jpg", caption: "Full bathroom with tub and shower", category: "living" },
  { src: "/images/262336695.jpg", caption: "Living room with high ceilings", category: "living" },
  { src: "/images/262336751.jpg", caption: "Living room with sliding doors", category: "living" },
  { src: "/images/262336758.jpg", caption: "Kitchen and living area", category: "living" },
  { src: "/images/262336759.jpg", caption: "Kitchen counter detail", category: "living" },
  { src: "/images/262336761.jpg", caption: "Open plan living and kitchen", category: "living" },
  { src: "/images/262336765.jpg", caption: "Fully equipped modern kitchen", category: "living" },
  { src: "/images/262336754.jpg", caption: "Indoor dining table", category: "living" },
  { src: "/images/263646335.jpg", caption: "Garden with beautiful aloes", category: "garden" },
  { src: "/images/365105943.jpg", caption: "Stunning sunset views", category: "exterior" },
  { src: "/images/262336746.jpg", caption: "Sunset over Paternoster", category: "beach" },
  { src: "/images/262336742.jpg", caption: "Rocky coastline and ocean", category: "beach" },
  { src: "/images/262336738.jpg", caption: "Boats on the beach", category: "beach" },
  { src: "/images/262336748.jpg", caption: "Weskus fishing boat", category: "beach" },
  { src: "/images/262336756.jpg", caption: "Traditional fishing boats", category: "beach" },
];

export const GALLERY_FILTERS = [
  { key: "all", label: "All" },
  { key: "beach", label: "Beach & Views" },
  { key: "living", label: "Living & Kitchen" },
  { key: "bedrooms", label: "Bedrooms" },
  { key: "patio", label: "Patio & Braai" },
  { key: "garden", label: "Garden & Outdoor" },
  { key: "exterior", label: "Exterior" },
];

export const AMENITIES = [
  { icon: "Utensils", label: "Fully Equipped Kitchen" },
  { icon: "Flame", label: "Indoor Fireplace" },
  { icon: "Beef", label: "BBQ / Braai Facilities" },
  { icon: "Sun", label: "Sheltered Patio" },
  { icon: "Trees", label: "Garden Views" },
  { icon: "PawPrint", label: "Pet Friendly" },
  { icon: "Wifi", label: "Free WiFi" },
  { icon: "Car", label: "Free Private Parking" },
  { icon: "Bath", label: "Bathtub" },
  { icon: "Waves", label: "Dishwasher" },
  { icon: "Users", label: "Family Rooms" },
  { icon: "Home", label: "Private Entrance" },
];

export const REVIEWS = [
  { name: "Murray", country: "South Africa", text: "Lovely house, well furnished with all kitchen appliances etc. for an easy comfortable weekend stay. Easy to get to the shops and restaurants, close to the main beach." },
  { name: "Verushka", country: "South Africa", text: "The house was fully kitted for everything you may need, even hot water bottles on each bed. Spitting distance from the beach and restaurants!" },
  { name: "Jocelyn", country: "United Kingdom", text: "Accommodating hosts who welcomed us. Very comfy beds with beautiful linen and decor. Lovely outdoor seating area with shade and contained grassed area for two small doggies to play safely." },
  { name: "Pieter", country: "South Africa", text: "The property was well positioned, very clean and comfortable. The property is pet friendly and worked perfectly for our dog children!" },
  { name: "Michelle", country: "South Africa", text: "Top quality furniture, including a dishwasher, gas stove. All cutlery and crockery that you could think of was there. View excellent and private." },
  { name: "Aneska", country: "South Africa", text: "Quiet, beautiful area. Very comfortable house. Wonderful hosts." },
];

export const HOUSE = {
  name: "Two-Bedroom House",
  size: "140 m² (1,507 ft²)",
  capacity: 4,
  beds: "Bedroom 1: 1 full bed • Bedroom 2: 2 twin beds",
  priceFrom: "ZAR 1,850",
  priceNote: "per night (from)",
  rating: 9.2,
  reviewCount: 104,
  description: [
    "Hart-se-Punt offers a spacious holiday home in Paternoster, South Africa. Guests enjoy a beautiful garden and free WiFi throughout the property.",
    "The home features two bedrooms and a bathroom, equipped with a fully fitted kitchen, fireplace, and outdoor dining area. Family rooms and a private entrance ensure comfort for all guests.",
    "Amenities include a 24-hour front desk, outdoor seating area, picnic area, bicycle parking, and free on-site private parking. Additional facilities include a patio, barbecue, and garden views.",
    "Paternoster Main Beach is just a few steps away, while Columbine Nature Reserve is 4.3 mi distant. Cape Town International Airport is 99 mi from the property.",
  ],
  highlights: [
    "Excellent location — rated 9.5/10",
    "1,507 ft² entire place is yours",
    "Free on-site private parking",
    "Pet friendly",
    "Family rooms available",
    "80 m from Paternoster Main Beach",
  ],
};

export const ATTRACTIONS = [
  { name: "Paternoster Main Beach", distance: "80 m", description: "Pristine white-sand beach, a few steps from the house" },
  { name: "Cape Columbine Nature Reserve", distance: "7 km", description: "Rugged coastline, lighthouse and hiking trails" },
  { name: "Voorstrandt Restaurant", distance: "400 m", description: "Iconic red-and-white beachfront seafood restaurant" },
  { name: "Gaaitjie Seafood Restaurant", distance: "600 m", description: "Coastal dining with exceptional West Coast cuisine" },
  { name: "West Coast National Park", distance: "60 km", description: "Flower season, lagoons and water activities" },
  { name: "Cape Town International", distance: "160 km", description: "Nearest major airport" },
];

export const FAQS = [
  { q: "What time is check-in and check-out?", a: "Check-in is from 14:00 and check-out by 10:00. Flexible arrangements may be possible — please contact us directly." },
  { q: "Is the property pet friendly?", a: "Yes. Hart-se-Punt warmly welcomes well-behaved pets. The contained grassed garden is ideal for small dogs to play safely." },
  { q: "How far is the beach?", a: "Paternoster Main Beach is approximately 80 metres away — a short walk from the front door." },
  { q: "Is there a braai (BBQ) and fireplace?", a: "Yes — the house features a sheltered outdoor patio with braai facilities and a cosy indoor fireplace for winter evenings." },
  { q: "How many guests can stay?", a: "The house comfortably sleeps 4 — one double bed in Bedroom 1 and two twin beds in Bedroom 2." },
  { q: "Is parking available?", a: "Yes, free private on-site parking is included with your stay." },
  { q: "Is the kitchen fully equipped?", a: "Absolutely — gas stove, dishwasher, full crockery and cutlery, plus all appliances you need for a comfortable self-catering stay." },
  { q: "Is there WiFi?", a: "Yes, free WiFi is available throughout the property." },
  { q: "Can I book directly?", a: "Yes — use our Reservation page to send an enquiry and we'll respond personally, or book instantly via Booking.com." },
];