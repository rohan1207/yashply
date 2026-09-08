export const site = {
 name: "Yashply",
 legal: "Yash Ply & Hardware",
 tagline: "Plywood, hardware and materials for spaces built with purpose.",
 short: "Quality plywood and hardware from Pune, for furniture, interiors and specialised applications.",
 phone: "+91 93710 40971",
 phoneHref: "tel:+919371040971",
 salesPhone: "+91 20 2644 3040",
 salesPhoneHref: "tel:+912026443040",
 whatsapp: "https://wa.me/919371040971",
 email: "",
 emailHref: "",
 contactPerson: "Our sales team",
 hours: "Mon – Sat · 9:00 AM – 7:00 PM",
 hoursSunday: "Sunday · By appointment",
 address: {
 line1: "86, New Timber Market, Near Ladkat Petrol Pump, Bhavani Peth",
 city: "Pune, Maharashtra 411042",
 map: "https://maps.google.com/?q=86+New+Timber+Market+Bhavani+Peth+Pune+411042",
 },
 social: {
 whatsapp: "https://wa.me/919371040971",
 instagram: "",
 facebook: "",
 linkedin: "",
 },
 stats: [
 { value: "25+", label: "Years in manufacturing & QC" },
 { value: "4,000", label: "Sheets in ready stock" },
 { value: "ISI", label: "303 & 710 certified" },
 { value: "30%", label: "More value vs same grade" },
 ],
};

export const nav = [
 { label: "Collection", href: "/products" },
 { label: "About us", href: "/about" },
 { label: "Inspiration", href: "/inspiration" },
 { label: "Quality", href: "/quality" },
 { label: "Guides", href: "/guides" },
 { label: "Services", href: "/professionals" },
 { label: "Contact us", href: "/contact" },
];

const img = (id, w = 1600) =>
 `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
 hero: img("photo-1600585154340-be6161a56a0c", 2000),
 heroAlt: img("photo-1600210492493-0946911123ea", 2000),
 workshop: img("photo-1504148455328-c376907d081c", 1600),
 grain: img("photo-1416879595882-3373a0480b5b", 1400),
 layers: img("photo-1581858726788-75bc0f6a952d", 1400),
 walnut: img("photo-1600566753190-17f0baa2a6c3", 1400),
 kitchen: img("photo-1556912173-46c336c7fd55", 1600),
 kitchen2: img("photo-1600489000022-c2086d91d9ca", 1600),
 bedroom: img("photo-1616486338812-3dadae4b4ace", 1600),
 living: img("photo-1618221195710-dd6b41faaea6", 1600),
 office: img("photo-1497366216548-37526070297c", 1600),
 wardrobe: img("photo-1558997519-83ea9252cd60", 1600),
 dining: img("photo-1617806118233-18e1de3ddd5a", 1600),
 wet: img("photo-1552321554-5fefe8c9ef14", 1600),
 commercial: img("photo-1497366811353-6870744d04b2", 1600),
 craftsman: img("photo-1589939705384-5185137a7f0f", 1400),
 ambassador: img("photo-1589939705384-5185137a7f0f", 1200),
 timber: img("photo-1441974231531-c6227db76b6e", 1400),
 stack: img("photo-1560184897-ae75f418493e", 1600),
 minimal: img("photo-1600607687939-ce8a6c25118c", 1600),
 door: img("photo-1505693416388-ac5ce068fe85", 1400),
 portrait: img("photo-1560250097-0b93528c311a", 900),
 heroPoster: img("photo-1600489000022-c2086d91d9ca", 1400),
};

export const trustBar = [
 { title: "ISI 303 & 710", text: "Certified grades" },
 { title: "Ready stock", text: "3,000–4,000 sheets" },
 { title: "Borer & termite", text: "Treated every sheet" },
 { title: "Doorstep delivery", text: "Pune to your site" },
];

export const products = [
 {
 slug: "commercial-plywood",
 name: "Commercial Plywood",
 family: "plywood",
 grade: "IS 303 · MR",
 eyebrow: "Everyday interiors",
 summary:
 "The workhorse sheet for dry interiors, wardrobes, partitions, furniture carcasses and panelling where moisture is controlled.",
 description:
 "Yashply commercial plywood is pressed from selected hardwood cores, calibrated for a true face, and thoroughly treated against borers and termites. Built for carpenters who nailing, routing and edge-banding every day, the sheet will not split or open at the nail.",
 image: images.stack,
 gallery: [images.stack, images.wardrobe, images.living, images.office],
 thicknesses: ["6 mm", "9 mm", "12 mm", "16 mm", "18 mm", "19 mm"],
 sizes: ["8 × 4 ft", "7 × 4 ft", "6 × 3 ft"],
 applications: ["Wardrobes", "TV units", "Partitions", "Furniture carcass", "Wall panelling"],
 specs: [
 ["Standard", "IS 303 (MR)"],
 ["Core", "Hardwood, gap-minimised"],
 ["Glue", "Urea formaldehyde, interior grade"],
 ["Treatment", "Borer & termite"],
 ["Face", "Calibrated, sanded"],
 ["Nailing", "Does not split or open"],
 ],
 warranty: "Manufacturer-backed interior performance warranty.",
 },
 {
 slug: "bwr-plywood",
 name: "BWR Plywood",
 family: "plywood",
 grade: "Boiling Water Resistant",
 eyebrow: "Kitchens & monsoon homes",
 summary:
 "The Pune default. Resists kitchen steam, seasonal humidity and occasional wetness without the cost of full marine grade.",
 description:
 "Maharashtra kitchens and monsoon months punish ordinary MR sheets. Yashply BWR is bonded for boiling-water resistance, making it the honest choice for modular kitchens, vanity carcasses and homes that breathe humidity eight months a year. Tailor-made for Pune’s climate, not a generic north-India spec.",
 image: images.kitchen,
 gallery: [images.kitchen, images.kitchen2, images.layers, images.dining],
 thicknesses: ["12 mm", "16 mm", "18 mm", "19 mm"],
 sizes: ["8 × 4 ft", "7 × 4 ft"],
 applications: ["Modular kitchens", "Vanities", "Utility rooms", "Balcony furniture"],
 specs: [
 ["Standard", "IS 303 BWR"],
 ["Glue", "Phenol formaldehyde, BWR"],
 ["Boil test", "Passes cyclic boil"],
 ["Treatment", "Borer & termite"],
 ["Density", "Furniture-grade calibrated"],
 ["Best for", "Wet-adjacent dry rooms"],
 ],
 warranty: "BWR performance warranty for kitchen & vanity carcasses.",
 },
 {
 slug: "bwp-plywood",
 name: "BWP Plywood",
 family: "plywood",
 grade: "IS 710 · Marine",
 eyebrow: "Boiling waterproof",
 summary:
 "True boiling-waterproof plywood for wet cores, coastal projects and anywhere a carpenter cannot afford a callback.",
 description:
 "Yashply BWP (IS 710) is our flagship marine-grade sheet, phenolic bonded, boil-proof, and built for bathrooms, kitchen wet walls, exterior-adjacent joinery and commercial wet areas. 25 years of quality control sit behind every press. If it is going near water, this is the sheet.",
 image: images.layers,
 gallery: [images.layers, images.wet, images.craftsman, images.kitchen2],
 thicknesses: ["6 mm", "9 mm", "12 mm", "16 mm", "18 mm", "19 mm", "25 mm"],
 sizes: ["8 × 4 ft", "7 × 4 ft"],
 applications: ["Bathrooms", "Kitchen wet walls", "Boat & wet labs", "Exterior-adjacent joinery"],
 specs: [
 ["Standard", "IS 710 (BWP / Marine)"],
 ["Glue", "Phenol formaldehyde, boil-proof"],
 ["Moisture", "Boiling waterproof"],
 ["Treatment", "Borer & termite, vacuum-pressure"],
 ["Core", "Hardwood, marine construction"],
 ["Face", "Calibrated both sides"],
 ],
 warranty: "Extended BWP / marine-grade warranty.",
 },
 {
 slug: "bwp-block-board",
 name: "BWP Block Board",
 family: "boards",
 grade: "IS 1659 · Waterproof",
 eyebrow: "Long spans, no warp",
 summary:
 "Solid-wood stave core with boiling-waterproof faces. The board for shutters, tables and long wardrobe doors that must stay true.",
 description:
 "Where plywood can telegraph or feel heavy, Yashply BWP block board uses kiln-dried wooden battens sandwiched between waterproof plywood faces. Ideal for large shutters and tabletops, lighter than equivalent ply, more stable across monsoon swings.",
 image: images.walnut,
 gallery: [images.walnut, images.dining, images.door, images.wardrobe],
 thicknesses: ["16 mm", "19 mm", "25 mm"],
 sizes: ["8 × 4 ft", "7 × 4 ft"],
 applications: ["Wardrobe shutters", "Tabletops", "Partition doors", "Shelving spans"],
 specs: [
 ["Standard", "IS 1659 BWP"],
 ["Core", "Kiln-dried wooden battens"],
 ["Faces", "BWP plywood"],
 ["Stability", "Anti-warp stave layout"],
 ["Treatment", "Borer & termite"],
 ["Weight", "Lighter than equivalent ply"],
 ],
 warranty: "Dimensional stability warranty for interior shutters.",
 },
 {
 slug: "mr-block-board",
 name: "MR Block Board",
 family: "boards",
 grade: "Moisture Resistant",
 eyebrow: "Value, still serious",
 summary:
 "Moisture-resistant block board for dry interiors, an economical, carpenter-friendly sheet for doors and furniture lids.",
 description:
 "Same stave-core construction as our BWP board, specified for dry rooms. Perfect when the project needs shutter stability without marine-grade spend. Still fully treated against borers and termites, still nailing-safe.",
 image: images.door,
 gallery: [images.door, images.bedroom, images.grain, images.living],
 thicknesses: ["16 mm", "19 mm", "25 mm"],
 sizes: ["8 × 4 ft", "7 × 4 ft"],
 applications: ["Internal doors", "Study tables", "Loft shutters", "Partition frames"],
 specs: [
 ["Standard", "IS 1659 MR"],
 ["Core", "Seasoned wooden battens"],
 ["Faces", "MR plywood"],
 ["Use", "Dry interiors only"],
 ["Treatment", "Borer & termite"],
 ["Finish", "Sanded, ready to laminate"],
 ],
 warranty: "Interior MR performance warranty.",
 },
 {
 slug: "flush-doors",
 name: "Flush Doors",
 family: "doors",
 grade: "Solid core · ISI",
 eyebrow: "Quiet, true, lasting",
 summary:
 "Factory-pressed flush doors with hardwood frames and block-board or plywood infill, ready for laminate, veneer or paint.",
 description:
 "A door that stays square is a door that never gets a complaint call. Yashply flush doors are framed in hardwood, filled with seasoned core, and faced for a flat, paint-ready or laminate-ready surface. Available in standard and custom sizes for Pune projects.",
 image: images.minimal,
 gallery: [images.minimal, images.door, images.living, images.bedroom],
 thicknesses: ["30 mm", "32 mm", "35 mm"],
 sizes: ["6'6\" × 2'6\"", "7' × 3'", "Custom"],
 applications: ["Bedrooms", "Offices", "Hotels", "Apartments"],
 specs: [
 ["Construction", "Hardwood frame + solid infill"],
 ["Face", "Plywood / block board"],
 ["Lip", "Hardwood all four edges"],
 ["Treatment", "Borer & termite"],
 ["Finish", "Primer / raw for laminate"],
 ["Hardware", "Ready for lock & hinge"],
 ],
 warranty: "Warp-resistance warranty when stored and hung correctly.",
 },
];

export const plywoodFeatured = [
 "commercial-plywood",
 "bwr-plywood",
 "bwp-plywood",
 "bwp-block-board",
];

export const hardwareItems = [
 {
 slug: "hinges",
 name: "Hinges",
 eyebrow: "Soft-close & concealed",
 summary: "Cabinet and wardrobe hinges from leading brands, smooth close, lasting alignment.",
 image: images.kitchen,
 },
 {
 slug: "telescopic-channels",
 name: "Telescopic Channels",
 eyebrow: "Drawer systems",
 summary: "Full-extension runners and channels built for everyday kitchen and furniture use.",
 image: images.office,
 },
 {
 slug: "sliding-fittings",
 name: "Sliding Wardrobe Fittings",
 eyebrow: "Wardrobe systems",
 summary: "Rollers, tracks and kits for sliding wardrobes that stay quiet and true.",
 image: images.wardrobe,
 },
 {
 slug: "handles-locks",
 name: "Handles & Locks",
 eyebrow: "Finishing hardware",
 summary: "Handles, locks and complementary fittings to complete the furniture and door set.",
 image: images.door,
 },
];

export const productMega = [
 {
 title: "Plywood",
 href: "/products#plywood",
 image: images.stack,
 items: [
 { label: "Commercial · IS 303", href: "/products/commercial-plywood", image: images.stack },
 { label: "Water Resistant · BWR", href: "/products/bwr-plywood", image: images.kitchen },
 { label: "Waterproof · IS 710", href: "/products/bwp-plywood", image: images.layers },
 { label: "Made to order", href: "/contact", image: images.workshop },
 ],
 },
 {
 title: "Block Boards",
 href: "/products#boards",
 image: images.walnut,
 items: [
 { label: "BWP Block Board", href: "/products/bwp-block-board", image: images.walnut },
 { label: "MR Block Board", href: "/products/mr-block-board", image: images.door },
 { label: "For lofts & shutters", href: "/inspiration/wardrobes", image: images.wardrobe },
 ],
 },
 {
 title: "Doors",
 href: "/products/flush-doors",
 image: images.minimal,
 items: [
 { label: "Flush Doors", href: "/products/flush-doors", image: images.minimal },
 { label: "Site-ready sizes", href: "/contact", image: images.door },
 { label: "Hardware-ready", href: "/products/flush-doors", image: images.bedroom },
 ],
 },
 {
 title: "By room",
 href: "/inspiration",
 image: images.living,
 items: [
 { label: "Modular kitchens", href: "/inspiration/modular-kitchens", image: images.kitchen },
 { label: "Wardrobes & lofts", href: "/inspiration/wardrobes", image: images.wardrobe },
 { label: "Living & media walls", href: "/inspiration/living", image: images.living },
 { label: "Baths & wet cores", href: "/inspiration/wet-areas", image: images.wet },
 ],
 },
 {
 title: "Yashply Tools",
 href: "/calculator",
 image: images.workshop,
 items: [
 { label: "Sheet calculator", href: "/calculator", image: images.kitchen2 },
 { label: "Buying guides", href: "/guides", image: images.grain },
 { label: "Quality & ISI", href: "/quality", image: images.layers },
 { label: "FAQs", href: "/faq", image: images.office },
 ],
 },
 {
 title: "More",
 href: "/gallery",
 image: images.timber,
 items: [
 { label: "Gallery", href: "/gallery", image: images.timber },
 { label: "Services", href: "/professionals", image: images.office },
 { label: "About us", href: "/about", image: images.craftsman },
 { label: "Contact the yard", href: "/contact", image: images.workshop },
 ],
 },
];

export const process = [
 {
 n: "01",
 title: "Consult",
 text: "Share the room, the climate, the carpenter’s brief. We map grade to use, not the other way around.",
 },
 {
 n: "02",
 title: "Select",
 text: "Walk the yard at the Pune yard. Check faces, edges, stamps. 3,000–4,000 sheets sit ready so you are not waiting on a mill.",
 },
 {
 n: "03",
 title: "Quote",
 text: "Transparent, same-grade pricing, typically 30% more value than comparable ISI plywood in the market.",
 },
 {
 n: "04",
 title: "Deliver",
 text: "Careful handling, doorstep drop across Pune and surrounding districts. No cracked corners, no monsoon surprises.",
 },
];

export const why = [
 {
 title: "Ready stock",
 text: "3,000 to 4,000 sheets on the floor. Kitchens and site programmes do not pause for mill lead times.",
 },
 {
 title: "ISI 303 & 710",
 text: "Certified commercial and boiling-waterproof grades. Stamps you can show a consultant without flinching.",
 },
 {
 title: "25 years of QC",
 text: "Manufacturing and quality control in the same hands. We know what a bad core looks like, and we do not ship it.",
 },
 {
 title: "Pune-spec",
 text: "Pressed and stocked for Maharashtra humidity, not a generic catalogue. Local climate is a specification, not a footnote.",
 },
 {
 title: "Borer & termite",
 text: "Every sheet is thoroughly treated. The invisible work that shows up five years later, or never does.",
 },
 {
 title: "Nailing integrity",
 text: "Will not break or open while nailing. Carpenters notice. That is why they come back.",
 },
 {
 title: "Doorstep delivery",
 text: "From New Timber Market, Pune to your site. We treat a sheet like furniture, not cargo.",
 },
 {
 title: "Honest value",
 text: "About 30% more accessible than the same quality elsewhere, without thinning the core or the glue line.",
 },
];

export const audiences = [
 {
 title: "Homeowners",
 text: "The sheet behind your kitchen should outlast the trend. We help you buy the right grade once.",
 href: "/contact",
 },
 {
 title: "Architects & IDs",
 text: "Spec-ready grades, consistent faces, and a yard that can match a drawing, not just a rate.",
 href: "/professionals",
 },
 {
 title: "Contractors",
 text: "Volume, credit conversations, and delivery that respects a programme. Call our sales team.",
 href: "/professionals",
 },
 {
 title: "Carpenters",
 text: "Nailing that holds, edges that band, cores that do not surprise you at 6 pm on a Saturday.",
 href: "/products",
 },
];

export const inspiration = [
 {
 slug: "modular-kitchens",
 title: "Modular kitchens",
 room: "Kitchen",
 image: images.kitchen,
 excerpt: "BWR carcasses, BWP at the sink wall, block-board shutters that stay true in steam.",
 body: "A Pune kitchen is a humidity machine. We spec BWR for the run of carcasses, IS 710 at the wet wall and around the sink, and BWP block board for large shutters so they do not banana after the first monsoon. Laminate and hardware are your aesthetic; the sheet is the structure. Get the structure right and the kitchen still looks new when the trend has moved on.",
 products: ["bwr-plywood", "bwp-plywood", "bwp-block-board"],
 },
 {
 slug: "wardrobes",
 title: "Wardrobes & lofts",
 room: "Bedroom",
 image: images.wardrobe,
 excerpt: "Commercial or MR for dry bedrooms. Block board where doors are tall and unforgiving.",
 body: "Tall wardrobe doors are where cheap plywood confesses. Use commercial or MR ply for carcasses in dry rooms, and step up to block board for shutters over 600 mm. Calibrated faces take laminate cleanly; treated cores keep silverfish and borers out of the season’s clothes.",
 products: ["commercial-plywood", "mr-block-board", "bwp-block-board"],
 },
 {
 slug: "living",
 title: "Living & media walls",
 room: "Living",
 image: images.living,
 excerpt: "Panelling, TV units and display joinery that should feel architectural, not temporary.",
 body: "Living-room joinery is seen every evening. Commercial plywood, well-calibrated, takes veneer and laminate with a furniture-grade flatness. For floating media walls we recommend 18 mm carcass and 6–8 mm backing, with BWR if the wall sits against an exterior.",
 products: ["commercial-plywood", "bwr-plywood"],
 },
 {
 slug: "wet-areas",
 title: "Baths & wet cores",
 room: "Wet",
 image: images.wet,
 excerpt: "There is no almost-marine. If water is in the brief, the stamp should say 710.",
 body: "Vanity carcasses, bath panelling and utility wet walls are callback territory. Yashply BWP (IS 710) is boil-proof, not merely splash-resistant. Pair with proper edge-sealing and a competent carpenter, the sheet cannot compensate for an open edge in a shower.",
 products: ["bwp-plywood"],
 },
 {
 slug: "workspaces",
 title: "Offices & studios",
 room: "Work",
 image: images.office,
 excerpt: "Partitions, worktops and storage that take daily abuse and still look specified.",
 body: "Commercial interiors cycle through tenants; the joinery should not. We supply consistent commercial and BWR lots for workstations, meeting-room panelling and storage banks, with flush doors that stay square through HVAC seasons.",
 products: ["commercial-plywood", "flush-doors", "bwr-plywood"],
 },
 {
 slug: "hospitality",
 title: "Hospitality & retail",
 room: "Commercial",
 image: images.commercial,
 excerpt: "Volume, repeatability and a yard that can stage a floor plate without drama.",
 body: "Hotels, clinics and stores need sheets that match across lots. Yashply keeps deep ready stock so a 40-key renovation does not arrive in three shades of ‘almost’. BWP for F&B wet, commercial for guest rooms, flush doors throughout.",
 products: ["bwp-plywood", "commercial-plywood", "flush-doors"],
 },
];

export const textures = [
 { name: "Walnut", image: images.walnut },
 { name: "Oak grain", image: images.grain },
 { name: "Ply layers", image: images.layers },
 { name: "Warm timber", image: images.timber },
 { name: "Crafted core", image: images.craftsman },
 { name: "Stone-calm", image: images.minimal },
];

export const testimonials = [
 {
 quote:
 "We used Yashply for our full house interiors. Quality is very good and prices are reasonable. Highly recommend.",
 name: "Deepak S.",
 role: "Homeowner, Pune",
 },
 {
 quote:
 "My civil contractor and carpenter are very happy with Yashply. Great quality, affordable pricing and great customer service.",
 name: "Aparna S.",
 role: "Residence project, Pune",
 },
 {
 quote:
 "Premium plywood at honest pricing. They stock materials suited to Pune’s climate, which makes users feel looked after, not sold to.",
 name: "Monish J.",
 role: "Interior project",
 },
 {
 quote:
 "We recommended Yashply for a colleague’s new house. The product and the service were so sound he now recommends Yashply to everyone he trusts.",
 name: "Dr. Mrinal L.",
 role: "Referral client",
 },
];

export const guides = [
 {
 slug: "bwp-vs-bwr-vs-mr",
 title: "BWP vs BWR vs MR, which grade belongs where",
 category: "Grades",
 read: "7 min",
 image: images.layers,
 excerpt:
 "The three letters on a stamp decide whether a kitchen survives monsoon. A clear map for homeowners and site engineers.",
 content: [
 {
 h: "Start from the room, not the rate",
 p: "MR (moisture resistant) is for dry interiors, bedrooms, studies, living joinery away from steam. BWR (boiling water resistant) is the honest kitchen and vanity grade in Maharashtra. BWP / IS 710 is boiling waterproof: baths, wet walls, anything that will see standing water or exterior-adjacent humidity.",
 },
 {
 h: "A common Pune spec",
 p: "Carcasses in a modular kitchen: BWR. Sink cabinet and breakfast counter against a wet wall: BWP. Wardrobes in an AC bedroom: commercial / MR. Large wardrobe shutters: block board in the matching moisture grade. This mix is cheaper than ‘all marine’ and safer than ‘all commercial’.",
 },
 {
 h: "What the stamp must show",
 p: "Ask to see IS 303 for commercial / BWR and IS 710 for marine. Yashply is an ISI 303 & 710 certified company, we would rather you check the stamp at the Pune yard than trust a WhatsApp photo from a trader.",
 },
 ],
 },
 {
 slug: "how-to-choose-plywood",
 title: "How to choose plywood without getting sold a story",
 category: "Buying",
 read: "8 min",
 image: images.workshop,
 excerpt:
 "Edges, weight, boil talk, and the five questions a good dealer is happy to answer in the yard.",
 content: [
 {
 h: "Look at the edge, not the brochure",
 p: "A clean, even core with minimal gaps is the first tell. Voids mean nails wander and screws lose purchase. Lift the sheet, calibrated hardwood feels dense, not hollow. Yashply cores are built so nailing will not split or open the face.",
 },
 {
 h: "Treatment is not optional in the south",
 p: "Termites and borers are a climate fact. Every Yashply sheet is thoroughly treated. If a cheaper sheet cannot tell you how it was treated, it was probably not.",
 },
 {
 h: "Ready stock is a quality signal",
 p: "A yard sitting on 3,000–4,000 sheets has to stand behind what it stocks. Transit-only traders can vanish after a bad lot. Walk the Pune yard. See the pile.",
 },
 ],
 },
 {
 slug: "kitchen-sheet-count",
 title: "How many sheets does a kitchen actually need?",
 category: "Planning",
 read: "6 min",
 image: images.kitchen2,
 excerpt:
 "A practical estimator for a 10×12 modular kitchen, plus why thickness is not a place to save money.",
 content: [
 {
 h: "A working rule",
 p: "A typical 10×12 L-shaped modular kitchen consumes 14–18 sheets of 18 mm for carcasses, 3–5 sheets of 6–8 mm for backers, and 6–10 sheets of 18–19 mm block board or ply for shutters, before wastage. Add 8–12% cutting loss. Use our calculator for a first pass, then confirm with your carpenter’s cut list.",
 },
 {
 h: "Do not down-gauge the carcass",
 p: "16 mm carcasses flex under stone and dishwashers. 18 mm is the civilised minimum. Soft-close hardware expects a true, thick side wall.",
 },
 ],
 },
 {
 slug: "why-isi-matters",
 title: "Why ISI 303 and 710 still matter in 2026",
 category: "Standards",
 read: "5 min",
 image: images.craftsman,
 excerpt:
 "Certification is not nostalgia. It is the only shared language between mill, dealer, architect and carpenter.",
 content: [
 {
 h: "A stamp is a test, not a logo",
 p: "IS 303 covers moisture-resistant and boiling-water-resistant plywood. IS 710 is marine / boiling waterproof. The numbers describe glue, boil cycles, strength and treatment, the things a laminate photograph cannot.",
 },
 {
 h: "Yashply’s position",
 p: "We manufacture and quality-check as an ISI 303 & 710 certified company. If a project specification names those standards, we can supply without translation or ‘equivalent’ hedging.",
 },
 ],
 },
 {
 slug: "monsoon-storage",
 title: "Storing plywood through a Maharashtra monsoon",
 category: "Site",
 read: "4 min",
 image: images.timber,
 excerpt:
 "Even IS 710 will punish you if it sits on wet PCC for a week. Site habits that protect a good sheet.",
 content: [
 {
 h: "Keep it off the floor",
 p: "Stack on battens, under cover, with spacers so air can move. Never against a freshly plastered wall. Cover the top sheet; do not wrap so tightly that condensation farms inside the pack.",
 },
 {
 h: "Sequence the delivery",
 p: "Because we hold ready stock, you do not need to dump the entire kitchen on site in June. Call for lots as the carpenter is ready. That is the cheapest waterproofing there is.",
 },
 ],
 },
 {
 slug: "for-carpenters",
 title: "Notes for carpenters who will actually cut the sheet",
 category: "Trade",
 read: "5 min",
 image: images.craftsman,
 excerpt:
 "Nailing, banding, screws and the small mill details that show up on a Saturday evening.",
 content: [
 {
 h: "Nailing and screws",
 p: "Yashply is pressed so the face will not open at the nail. Still: pre-drill near edges, keep screws out of the outer 12 mm, and seal every cut edge in wet rooms before the laminate goes on.",
 },
 {
 h: "Calibration",
 p: "A true thickness makes edge-banding and CNC predictable. If you are running a nest on a router, tell us, we will pick the flattest faces in the lot.",
 },
 ],
 },
];

export const faqs = [
 {
 q: "Where is Yashply based?",
 a: `Yash Ply & Hardware, ${site.address.line1}, ${site.address.city}. Visit the yard to inspect sheets before you buy.`,
 },
 {
 q: "What products do you manufacture and stock?",
 a: "Commercial plywood, BWR plywood, boiling-waterproof (IS 710) plywood, BWP block board, moisture-resistant block board, and flush doors, in the thicknesses and sizes Maharashtra joinery actually uses.",
 },
 {
 q: "Are you ISI certified?",
 a: "Yes. Yashply is an ISI 303 and ISI 710 certified company. Ask to see the stamp on the sheet, not only on the website.",
 },
 {
 q: "Do you keep ready stock?",
 a: "3,000 to 4,000 sheets sit ready so projects are not held hostage by mill queues. Call ahead for special thicknesses.",
 },
 {
 q: "Do you deliver?",
 a: "Yes. Doorstep delivery to the customer, handled as joinery, not as loose cargo. Pune and surrounding districts as standard; further by arrangement.",
 },
 {
 q: "Why do carpenters like the sheet?",
 a: "It will not break or open while nailing, cores are treated against borers and termites, and faces are calibrated for laminate and veneer.",
 },
 {
 q: "How do you compare on price?",
 a: "For the same quality, Yashply is typically about 30% more accessible than comparable ISI plywood. We would rather you compare a sheet in the yard than a rate on paper.",
 },
 {
 q: "Who do I speak to?",
 a: `The Yashply sales team. Phone ${site.phone}${site.email ? ` or email ${site.email}` : ""}. We try to answer every enquiry within one business day.`,
 },
];

export const qualityPillars = [
 {
 title: "Timber",
 text: "Selected hardwood cores. No mystery filler. Density you can feel when you lift the sheet.",
 },
 {
 title: "Glue line",
 text: "Interior UF or phenolic BWR / BWP as the grade demands. The boil test is a factory habit, not a marketing line.",
 },
 {
 title: "Press & calibrate",
 text: "World-class machinery, skilled operators, and a flatness that edge-banding machines do not argue with.",
 },
 {
 title: "Protect",
 text: "Thorough borer and termite treatment through the core, because Maharashtra does not forgive untreated timber.",
 },
];

/** Homepage quality showcase, same card shape as guides, quality-focused copy. */
export const homeQuality = [
 {
 slug: "isi-certified",
 title: "ISI 303 & 710, stamped, tested, ready to verify",
 category: "Certification",
 read: "Yard check",
 image: images.layers,
 excerpt:
 "Every grade we sell can be checked against the stamp. IS 303 for commercial and BWR, IS 710 for boiling waterproof, no ‘equivalent’ hedging.",
 href: "/quality#stamps",
 },
 {
 slug: "core-and-glue",
 title: "Hardwood cores. Honest glue lines.",
 category: "Mill",
 read: "Process",
 image: images.workshop,
 excerpt:
 "Selected timber, gap-minimised cores, and glue matched to the room, UF for dry, phenolic where steam and boil matter.",
 href: "/quality",
 },
 {
 slug: "borer-termite",
 title: "Treated through the core for Maharashtra",
 category: "Protection",
 read: "Standard",
 image: images.timber,
 excerpt:
 "Borer and termite treatment is not optional here. Every sheet is protected so joinery lasts past the first monsoon season.",
 href: "/quality",
 },
 {
 slug: "ready-stock",
 title: "3,000–4,000 sheets you can walk today",
 category: "Yard",
 read: "Pune",
 image: images.craftsman,
 excerpt:
 "Ready stock means you check faces, edges and stamps before you buy, and you are not waiting on a mill for the next lot.",
 href: "/quality",
 },
];

export const gallery = [
 { src: images.kitchen, caption: "Kitchen carcass, BWR" },
 { src: images.kitchen2, caption: "Warm timber kitchen" },
 { src: images.bedroom, caption: "Bedroom joinery" },
 { src: images.wardrobe, caption: "Wardrobe shutters" },
 { src: images.living, caption: "Living panelling" },
 { src: images.office, caption: "Workspace" },
 { src: images.layers, caption: "Marine layers" },
 { src: images.grain, caption: "Natural grain" },
 { src: images.walnut, caption: "Walnut tone" },
 { src: images.workshop, caption: "The yard" },
 { src: images.craftsman, caption: "Making" },
 { src: images.minimal, caption: "Quiet interiors" },
];

/** Client plywood catalogue — Yash Ply & Hardware */
export const plywoodCatalogue = [
 {
 slug: "alt-gurjan-commercial-ply",
 name: "Alt Gurjan Commercial Ply",
 grade: "Silver Grade",
 sizes: ["8 × 4", "7 × 4"],
 thicknesses: ["18 mm", "12 mm", "8 mm", "6 mm"],
 image: images.stack,
 edge: images.layers,
 },
 {
 slug: "redcore-ply",
 name: "Redcore Ply",
 grade: "Gold Grade",
 sizes: ["8 × 4", "7 × 4"],
 thicknesses: ["18 mm", "12 mm", "8 mm", "6 mm"],
 image: images.walnut,
 edge: images.grain,
 },
 {
 slug: "redcore-bwp-ply",
 name: "Redcore BWP Ply",
 grade: "Platinum Grade",
 sizes: ["8 × 4", "7 × 4"],
 thicknesses: ["18 mm", "12 mm", "8 mm", "6 mm"],
 image: images.layers,
 edge: images.wet,
 },
 {
 slug: "rubber-packaging-ply",
 name: "Rubber Packaging Ply",
 grade: null,
 sizes: ["8 × 4"],
 thicknesses: ["17 mm", "14 mm", "10 mm", "6.5 mm"],
 image: images.timber,
 edge: images.stack,
 },
 {
 slug: "calibrated-ply",
 name: "Calibrated Ply",
 grade: null,
 sizes: ["8 × 4"],
 thicknesses: ["16 mm"],
 image: images.minimal,
 edge: images.layers,
 },
 {
 slug: "truck-flooring-ply",
 name: "Truck Flooring Ply",
 grade: null,
 sizes: ["8 × 4"],
 thicknesses: ["25 mm", "18 mm", "16 mm", "12 mm"],
 image: images.workshop,
 edge: images.craftsman,
 },
 {
 slug: "blockboard-double-core-pine",
 name: "Blockboard — Double Core Pine",
 grade: null,
 sizes: ["8 × 4", "7 × 4", "7 × 3", "6 × 3"],
 thicknesses: ["25 mm", "19 mm"],
 image: images.wardrobe,
 edge: images.timber,
 },
 {
 slug: "blockboard-hardwood",
 name: "Blockboard — Hardwood",
 grade: null,
 sizes: ["8 × 4", "7 × 4"],
 thicknesses: ["25 mm"],
 image: images.door,
 edge: images.stack,
 },
 {
 slug: "shuttering-ply-red-film",
 name: "Shuttering Ply — Red Film Faced",
 grade: null,
 sizes: ["8 × 4"],
 thicknesses: ["12 mm — 24 kg, 30 kg, 34 kg", "18 mm — 45 kg"],
 image: images.commercial,
 edge: images.workshop,
 },
 {
 slug: "chequered-plywood",
 name: "Chequered Plywood",
 grade: null,
 sizes: ["8 × 4"],
 thicknesses: ["12 mm — 30 kg"],
 image: images.office,
 edge: images.layers,
 },
];

export const hardwareCatalogue = [
 {
 slug: "hinges",
 name: "Hinges",
 text: "Soft-close and concealed cabinet hinges from leading brands.",
 image: images.kitchen,
 },
 {
 slug: "telescopic-channels",
 name: "Telescopic Channels",
 text: "Full-extension runners built for everyday drawers and kitchens.",
 image: images.office,
 },
 {
 slug: "sliding-wardrobe-fittings",
 name: "Sliding Wardrobe Fittings",
 text: "Rollers, tracks and kits for quiet, true sliding wardrobes.",
 image: images.wardrobe,
 },
 {
 slug: "and-more",
 name: "And More",
 text: "Handles, locks, connectors and specialised fittings. Ask the yard for the full range.",
 image: images.door,
 highlight: true,
 },
];

export const hardwareBrands = [
 { name: "Hettich", src: "/brands/hettich.svg" },
 { name: "Häfele", src: "/brands/hafele.svg" },
 { name: "EBCO", src: "/brands/ebco.png" },
 { name: "Blum", src: "/brands/blum.svg" },
 { name: "Godrej", src: "/brands/godrej.svg" },
];
