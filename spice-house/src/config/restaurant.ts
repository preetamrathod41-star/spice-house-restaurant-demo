// ============================================================
// RESTAURANT CONFIGURATION
// ============================================================
// This file contains ALL restaurant-specific information.
// To rebrand for a new client, simply update the values below.
// ============================================================

export const RESTAURANT_CONFIG = {
  // Basic Info
  name: "The Spice House",
  tagline: "Authentic Flavours. Unforgettable Moments.",
  description:
    "Step into a world of bold spices, rich aromas, and timeless recipes passed down through generations. The Spice House is where tradition meets modern elegance.",
  shortDescription:
    "Award-winning Indian cuisine in the heart of the city, crafted with love and the finest ingredients.",

  // Contact
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // country code + number, no spaces or +
  whatsappMessage:
    "Hi, I found your restaurant website and would like to know more.",
  email: "hello@thespicehouse.in",

  // Address
  address: {
    line1: "12, Heritage Lane",
    line2: "Banjara Hills, Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500034",
    country: "India",
    full: "12, Heritage Lane, Banjara Hills, Hyderabad, Telangana 500034",
  },

  // Google Maps
  // Replace `googleMapsEmbedUrl` with an actual Google Maps embed URL for the client.
  // Replace `googleMapsUrl` with the Google Maps link for "Get Directions".
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7183286282957!2d78.44769231488008!3d17.42282888805696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917f4dbb31c9%3A0x70de55b5e38f8a60!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
  googleMapsUrl:
    "https://maps.google.com/?q=Banjara+Hills+Hyderabad+Telangana",

  // Social Media
  social: {
    instagram: "https://instagram.com/thespicehouse",
    facebook: "https://facebook.com/thespicehouse",
    twitter: "https://twitter.com/thespicehouse",
    youtube: "https://youtube.com/@thespicehouse",
  },

  // Opening Hours
  hours: [
    { day: "Monday – Thursday", open: "11:00 AM", close: "11:00 PM" },
    { day: "Friday – Saturday", open: "11:00 AM", close: "11:30 PM" },
    { day: "Sunday", open: "10:00 AM", close: "11:00 PM" },
  ],

  // Rating
  rating: "4.8",
  reviewCount: "500+",

  // SEO
  seo: {
    title: "The Spice House – Authentic Indian Cuisine | Hyderabad",
    description:
      "Discover The Spice House – Hyderabad's finest Indian restaurant serving authentic flavours with premium ingredients. Book your table or order online today.",
    keywords:
      "Indian restaurant Hyderabad, best biryani, authentic Indian cuisine, The Spice House",
  },

  // Theme Colors (used in inline styles / CSS vars where Tailwind class is dynamic)
  colors: {
    primary: "#C8860A",       // warm gold
    primaryDark: "#A36B00",
    primaryLight: "#F5C842",
    accent: "#1C0A00",        // deep espresso
    bg: "#0D0501",
  },
};

// ============================================================
// MENU DATA
// ============================================================

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  image?: string;
  category: string;
}

export const MENU_CATEGORIES = [
  "Starters",
  "Main Course",
  "Biryani",
  "Breads",
  "Desserts",
  "Beverages",
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: "s1",
    name: "Hara Bhara Kebab",
    description: "Spinach and green pea patties spiced with ginger and herbs, served with mint chutney.",
    price: 220,
    isVeg: true,
    isBestseller: true,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80",
  },
  {
    id: "s2",
    name: "Chicken Seekh Kebab",
    description: "Minced chicken blended with aromatic spices, skewered and grilled on charcoal.",
    price: 320,
    isVeg: false,
    isBestseller: true,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80",
  },
  {
    id: "s3",
    name: "Paneer Tikka",
    description: "Tender cottage cheese cubes marinated in tandoori spices, grilled to perfection.",
    price: 280,
    isVeg: true,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  },
  {
    id: "s4",
    name: "Prawn Koliwada",
    description: "Crispy coastal-style fried prawns with a tangy chilli-lime marinade.",
    price: 380,
    isVeg: false,
    isNew: true,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
  },
  {
    id: "s5",
    name: "Dahi Ke Sholay",
    description: "Crispy bread rolls stuffed with spiced hung curd and herbs.",
    price: 200,
    isVeg: true,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=400&q=80",
  },

  // MAIN COURSE
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Tender chicken in a velvety tomato-cream sauce with a hint of fenugreek.",
    price: 380,
    isVeg: false,
    isBestseller: true,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
  },
  {
    id: "m2",
    name: "Dal Makhani",
    description: "Slow-cooked black lentils simmered overnight with cream and spices.",
    price: 260,
    isVeg: true,
    isBestseller: true,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
  },
  {
    id: "m3",
    name: "Lamb Rogan Josh",
    description: "Kashmiri-style slow-braised lamb with whole spices and dried red chillies.",
    price: 480,
    isVeg: false,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
  },
  {
    id: "m4",
    name: "Paneer Lababdar",
    description: "Rich and creamy paneer curry with roasted cashew and onion gravy.",
    price: 320,
    isVeg: true,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
  },
  {
    id: "m5",
    name: "Kadhai Chicken",
    description: "Stir-fried chicken with bell peppers and freshly ground kadhai masala.",
    price: 360,
    isVeg: false,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80",
  },
  {
    id: "m6",
    name: "Palak Paneer",
    description: "Fresh cottage cheese in a velvety spinach and spice sauce.",
    price: 290,
    isVeg: true,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
  },

  // BIRYANI
  {
    id: "b1",
    name: "Hyderabadi Dum Biryani",
    description: "Fragrant basmati rice slow-cooked with tender mutton, saffron and whole spices.",
    price: 460,
    isVeg: false,
    isBestseller: true,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
  },
  {
    id: "b2",
    name: "Chicken Dum Biryani",
    description: "Aromatic rice layered with spiced chicken, caramelised onions and herbs.",
    price: 380,
    isVeg: false,
    isBestseller: true,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
  },
  {
    id: "b3",
    name: "Vegetable Dum Biryani",
    description: "Seasonal vegetables and paneer slow-cooked with aromatic basmati rice.",
    price: 280,
    isVeg: true,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
  },
  {
    id: "b4",
    name: "Prawns Biryani",
    description: "Succulent tiger prawns with coastal spices and long-grain basmati rice.",
    price: 520,
    isVeg: false,
    isNew: true,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f2b9a49?w=400&q=80",
  },

  // BREADS
  {
    id: "br1",
    name: "Butter Naan",
    description: "Soft leavened flatbread baked in the tandoor, finished with generous butter.",
    price: 60,
    isVeg: true,
    category: "Breads",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
  },
  {
    id: "br2",
    name: "Garlic Naan",
    description: "Tandoor-baked naan topped with minced garlic, butter and fresh coriander.",
    price: 80,
    isVeg: true,
    isBestseller: true,
    category: "Breads",
    image: "https://images.unsplash.com/photo-1604908177525-6697fe0b7b4c?w=400&q=80",
  },
  {
    id: "br3",
    name: "Stuffed Paratha",
    description: "Whole-wheat flatbread stuffed with spiced potatoes, served with yoghurt.",
    price: 90,
    isVeg: true,
    category: "Breads",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=80",
  },
  {
    id: "br4",
    name: "Roomali Roti",
    description: "Paper-thin handkerchief bread, light and perfect with rich gravies.",
    price: 50,
    isVeg: true,
    category: "Breads",
    image: "https://images.unsplash.com/photo-1609501677155-24bc8db9d7e6?w=400&q=80",
  },

  // DESSERTS
  {
    id: "d1",
    name: "Gulab Jamun",
    description: "Soft milk-solid dumplings soaked in rose-scented sugar syrup.",
    price: 120,
    isVeg: true,
    isBestseller: true,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1666515651701-80f7d0b7a81e?w=400&q=80",
  },
  {
    id: "d2",
    name: "Kulfi Falooda",
    description: "Traditional Indian ice cream with rose syrup, vermicelli and basil seeds.",
    price: 160,
    isVeg: true,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
  },
  {
    id: "d3",
    name: "Phirni",
    description: "Classic ground rice pudding flavoured with cardamom, saffron and pistachios.",
    price: 130,
    isVeg: true,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
  },
  {
    id: "d4",
    name: "Chocolate Shahi Tukda",
    description: "Decadent bread pudding with dark chocolate rabdi and gold leaf.",
    price: 180,
    isVeg: true,
    isNew: true,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&q=80",
  },

  // BEVERAGES
  {
    id: "bv1",
    name: "Mango Lassi",
    description: "Chilled Alphonso mango blended with creamy yoghurt and a pinch of cardamom.",
    price: 120,
    isVeg: true,
    isBestseller: true,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
  },
  {
    id: "bv2",
    name: "Masala Chai",
    description: "Aromatic Indian tea brewed with ginger, cardamom, cinnamon and cloves.",
    price: 60,
    isVeg: true,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca3d9cde9?w=400&q=80",
  },
  {
    id: "bv3",
    name: "Rose Sharbat",
    description: "Chilled rose petal syrup with basil seeds and a twist of lime.",
    price: 90,
    isVeg: true,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80",
  },
  {
    id: "bv4",
    name: "Virgin Mojito",
    description: "Fresh mint, lime juice and soda water – a refreshing palate cleanser.",
    price: 110,
    isVeg: true,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80",
  },
];

// Popular dishes shown in the featured section (ids from MENU_ITEMS)
export const POPULAR_DISH_IDS = ["m1", "b1", "b2", "s2", "m2", "d1"];

// ============================================================
// GALLERY IMAGES
// ============================================================
export const GALLERY_IMAGES = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine dining table setting at The Spice House",
    category: "interior",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Chef preparing authentic Indian cuisine",
    category: "kitchen",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    alt: "Signature prawn dish",
    category: "food",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Elegant restaurant interior",
    category: "interior",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    alt: "Aromatic chicken biryani",
    category: "food",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Exquisite plating of our signature dishes",
    category: "food",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
    alt: "Guests enjoying dinner",
    category: "dining",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Cosy restaurant ambience",
    category: "interior",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
    alt: "Butter chicken in rich tomato gravy",
    category: "food",
  },
];

// ============================================================
// REVIEWS
// ============================================================
export const REVIEWS = [
  {
    id: "r1",
    name: "Ananya Sharma",
    avatar: "AS",
    rating: 5,
    date: "August 2026",
    text: "Absolutely outstanding experience! The Hyderabadi Dum Biryani is hands down the best I've ever had. The aroma filled the entire room and each grain of rice was perfectly cooked. The service was warm and attentive. Will definitely be returning!",
    source: "Google",
  },
  {
    id: "r2",
    name: "Rahul Menon",
    avatar: "RM",
    rating: 5,
    date: "July 2026",
    text: "We celebrated our anniversary here and it was magical. The ambience is upscale yet comfortable, the Butter Chicken is divine, and the staff made us feel like royalty. The dessert platter was an incredible ending to a perfect meal.",
    source: "Google",
  },
  {
    id: "r3",
    name: "Priya Nair",
    avatar: "PN",
    rating: 5,
    date: "July 2026",
    text: "As a vegetarian, I'm always worried about variety but The Spice House has an incredible veggie menu. The Paneer Tikka and Dal Makhani were absolutely incredible. The Kulfi Falooda is a must-try! Highly recommend.",
    source: "Zomato",
  },
  {
    id: "r4",
    name: "Vikram Patel",
    avatar: "VP",
    rating: 4,
    date: "June 2026",
    text: "Great food, warm service and a beautiful setting. The kebabs were perfectly charred, the gravies were rich and flavourful. We ordered way too much food because we couldn't resist the menu. A reliable gem in Hyderabad.",
    source: "Google",
  },
  {
    id: "r5",
    name: "Sana Qureshi",
    avatar: "SQ",
    rating: 5,
    date: "June 2026",
    text: "I've dined at many restaurants across the country and The Spice House is genuinely special. Every dish tells a story of tradition and quality. The Lamb Rogan Josh melted in the mouth. Pure culinary bliss.",
    source: "TripAdvisor",
  },
];

// ============================================================
// WHY CHOOSE US
// ============================================================
export const WHY_CHOOSE_US = [
  {
    id: "wc1",
    icon: "Leaf",
    title: "Fresh Ingredients",
    description: "We source only the freshest local and seasonal ingredients, arriving daily at our kitchen.",
  },
  {
    id: "wc2",
    icon: "ChefHat",
    title: "Authentic Taste",
    description: "Our recipes are rooted in generations-old traditions, prepared by master chefs with decades of expertise.",
  },
  {
    id: "wc3",
    icon: "Users",
    title: "Family Friendly",
    description: "A welcoming space for the whole family — from little ones to grandparents — with a warm, inclusive atmosphere.",
  },
  {
    id: "wc4",
    icon: "Shield",
    title: "Hygienic Kitchen",
    description: "Our FSSAI-certified kitchen follows strict hygiene protocols. Cleanliness is never compromised.",
  },
  {
    id: "wc5",
    icon: "Zap",
    title: "Quick Service",
    description: "We respect your time. Hot, fresh food delivered to your table without unnecessary waits.",
  },
  {
    id: "wc6",
    icon: "Award",
    title: "Quality Guaranteed",
    description: "Every dish leaves our kitchen only when it meets our uncompromising quality standards.",
  },
];
