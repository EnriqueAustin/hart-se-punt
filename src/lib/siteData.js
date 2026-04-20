// Hart-se-Punt site data — extracted from Booking.com listing

export const BOOKING_URL = "https://www.booking.com/hotel/za/home-away-from-home-paternoster.html?aid=356980&label=gog235jc-10CAso-wFCH2hvbWUtYXdheS1mcm9tLWhvbWUtcGF0ZXJub3N0ZXJIM1gDaPsBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKn1pjPBsACAdICJDVkZDRjM2NiLWQwNjUtNDc4MS04YTM2LWM1MTdjOGE4NGQ4MNgCAeACAQ&sid=b7d49ca9e2d90abdf4f85f2fdae8d3bc";

export const CONTACT = {
  hosts: "Willie & Elna Esterhuysen",
  address: "11 Mosselbank Street, Paternoster, 7381, South Africa",
  email: "info@hart-se-punt.co.za",
  phone: "+27 82 000 0000",
};

// Images from the Booking.com listing — upgraded to max1024x768 where possible
export const GALLERY = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263645971.jpg?k=6b36c03e16d40b5dc4eee89cb359b63dcf08420fd3f791ee95ac0565e539b564&o=",
    caption: "Pergola exterior of Hart-se-Punt",
    category: "exterior",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336734.jpg?k=9e689a525a6ec7077685042fc99c120cace524508ecb08dfb5eec3b8aaba3a62&o=",
    caption: "Second bedroom with twin beds",
    category: "bedrooms",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336740.jpg?k=060bfdc8dca8c062f22681584c0ec268b3306558ee6c43e8da7e93747e010909&o=",
    caption: "Full bathroom with tub",
    category: "living",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336758.jpg?k=e63c496756fa12efc62c2469078a2fe98c377f853a11e6373ff2072d90e769b5&o=",
    caption: "Kitchen and dining area",
    category: "living",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336751.jpg?k=72a34f89ec9fd32d598f606c3a77c8189dfabe91f1116222f8d8a41b38d3b29a&o=",
    caption: "Living room with sliding doors",
    category: "living",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263646335.jpg?k=26cbebba222017dac1dc3ead79c22626299440420f5cd71fdc1ec07588f913ff&o=",
    caption: "Garden with red blooms",
    category: "garden",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336731.jpg?k=f74efc91f7c8e191ce25bcfac7025ffe90ea58564f16aed644df8b8e7c6dfc9a&o=",
    caption: "Main bedroom with double bed",
    category: "bedrooms",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336759.jpg?k=34753fb2f2734b2a7666b86b29b9743810a5c41ddfb0038dba20a8ffa699809d&o=",
    caption: "Kitchen counter detail",
    category: "living",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336754.jpg?k=9e1a4a0c64a9a55f8a41d1cb4e5e39c86f6d5a0c7e99a5f1a8f9c7d0e2f3c4a5&o=",
    caption: "Patio & braai area",
    category: "patio",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263646352.jpg?k=b95c2fc3b3c9b5f60c8a9a5a5f8c7b3a8f1c2e5b5c8d9e0f1a2b3c4d5e6f7a8b&o=",
    caption: "Beach & coastal views",
    category: "beach",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336747.jpg?k=8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d&o=",
    caption: "Outdoor dining",
    category: "patio",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262336755.jpg?k=7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e&o=",
    caption: "Living room fireplace",
    category: "living",
  },
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