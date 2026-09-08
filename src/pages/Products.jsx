import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import CatalogueCard from "../components/CatalogueCard";
import { images, products, site } from "../data/content";

const families = [
 { id: "plywood", label: "Plywood", meta: "IS 303 & 710" },
 { id: "boards", label: "Block boards", meta: "IS 1659" },
 { id: "doors", label: "Doors", meta: "Solid core" },
 { id: "hardware", label: "Hardware", meta: "Fittings" },
 { id: "compare", label: "Compare", meta: "At a glance" },
];

const hardwareLines = [
 "Hinges & soft-close systems",
 "Telescopic channels",
 "Sliding wardrobe fittings",
 "Handles, locks & more",
];

const compare = [
 { slug: "commercial-plywood", wet: "Dry rooms", stamp: "IS 303 MR", use: "Wardrobes, partitions" },
 { slug: "bwr-plywood", wet: "Steam & humidity", stamp: "IS 303 BWR", use: "Kitchens, vanities" },
 { slug: "bwp-plywood", wet: "Boiling waterproof", stamp: "IS 710", use: "Baths, wet cores" },
 { slug: "bwp-block-board", wet: "Waterproof faces", stamp: "IS 1659 BWP", use: "Long shutters" },
 { slug: "mr-block-board", wet: "Dry interiors", stamp: "IS 1659 MR", use: "Value shutters" },
 { slug: "flush-doors", wet: "Indoor leaf", stamp: "ISI flush", use: "Bedrooms, offices" },
];

const pick = [
 {
 n: "01",
 title: "The room is dry.",
 text: "Wardrobes, TV units, partitions. Commercial plywood, or MR block board if the shutter is long.",
 href: "/products/commercial-plywood",
 label: "Commercial plywood",
 },
 {
 n: "02",
 title: "The kitchen steams.",
 text: "Pune’s default. BWR takes monsoon humidity and cooking steam without jumping to marine spend.",
 href: "/products/bwr-plywood",
 label: "BWR plywood",
 },
 {
 n: "03",
 title: "Water will find it.",
 text: "Bathrooms, wet walls, anything a callback cannot survive. That is IS 710 BWP, on the sheet.",
 href: "/products/bwp-plywood",
 label: "BWP plywood",
 },
 {
 n: "04",
 title: "The shutter is long.",
 text: "Plywood can feel heavy and telegraph. Block board stays true across a wardrobe door.",
 href: "/products/bwp-block-board",
 label: "BWP block board",
 },
];

const rooms = [
 { src: images.kitchen, caption: "Modular kitchens", href: "/products/bwr-plywood" },
 { src: images.wardrobe, caption: "Wardrobes", href: "/products/commercial-plywood" },
 { src: images.wet, caption: "Wet cores", href: "/products/bwp-plywood" },
 { src: images.dining, caption: "Tables & spans", href: "/products/bwp-block-board" },
 { src: images.door, caption: "Flush doors", href: "/products/flush-doors" },
];

function scrollToId(id) {
 const el = document.getElementById(id);
 if (!el) return;
 const header = document.querySelector("header")?.getBoundingClientRect().height ?? 72;
 if (window.__lenis) {
 window.__lenis.scrollTo(el, { offset: -(header + 8), duration: 1.05 });
 } else {
 el.scrollIntoView({ behavior: "smooth", block: "start" });
 }
}

export default function Products() {
 const heroRef = useRef(null);
 const [tilt, setTilt] = useState({ x: 0, y: 0 });
 const { hash } = useLocation();
 const { scrollYProgress } = useScroll({
 target: heroRef,
 offset: ["start start", "end start"],
 });
 const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
 const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

 const onHeroMove = (e) => {
 if (window.matchMedia("(pointer: coarse)").matches) return;
 const r = e.currentTarget.getBoundingClientRect();
 setTilt({
 x: ((e.clientX - r.left) / r.width - 0.5) * 16,
 y: ((e.clientY - r.top) / r.height - 0.5) * 10,
 });
 };

 useEffect(() => {
 const id = hash.replace("#", "");
 if (!id) return;
 const t = window.setTimeout(() => scrollToId(id), 80);
 return () => window.clearTimeout(t);
 }, [hash]);

 return (
 <>
 <SEO
 title="Collection"
 description="Commercial, BWR and IS 710 BWP plywood, block boards and flush doors from Yashply, Pune."
 />

 <section
 ref={heroRef}
 onMouseMove={onHeroMove}
 onMouseLeave={() => setTilt({ x: 0, y: 0 })}
 className="relative isolate flex min-h-[88svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[100svh]"
 >
 <motion.img
 src={images.layers}
 alt=""
 style={{ y: imgY, x: tilt.x, scale: 1.08 }}
 className="absolute inset-0 h-full w-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-yp-espresso" />
 <div className="grain-overlay opacity-[0.12]" />
 <motion.div
 style={{ opacity: titleOp }}
 className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-16 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:px-12"
 >
 <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-copper">Collection</p>
 <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.6rem)] font-medium leading-[0.95]">
 Six grades.
 <br />
 No mystery filler.
 </h1>
 <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
 Plywood, block boards and flush doors, stamped IS 303, 710 and 1659. Thicknesses a
 carpenter actually cuts. Walk the pile at the Pune yard, or tap a grade.
 </p>
 <div className="mt-8 flex flex-wrap gap-2">
 {families.map((f) => (
 <a
 key={f.id}
 href={`#${f.id}`}
 className="rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold text-white/80 transition hover:border-white hover:bg-white hover:text-yp-espresso"
 >
 {f.label}
 </a>
 ))}
 </div>
 <a
 href="#index"
 className="mt-10 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
 >
 The yard
 <ArrowDown size={14} className="animate-bounce" />
 </a>
 </motion.div>
 </section>

 <div className="overflow-hidden border-y border-yp-line bg-yp-ivory py-4">
 <div className="flex w-max animate-[voice-marquee_32s_linear_infinite] gap-10 pr-10 hover:[animation-play-state:paused]">
 {[0, 1].map((copy) => (
 <p
 key={copy}
 className="flex gap-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-espresso/55"
 aria-hidden={copy === 1 || undefined}
 >
 <span>IS 303 · MR & BWR</span>
 <span className="text-yp-red">·</span>
 <span>IS 710 BWP</span>
 <span className="text-yp-red">·</span>
 <span>IS 1659 boards</span>
 <span className="text-yp-red">·</span>
 <span>6–25 mm</span>
 <span className="text-yp-red">·</span>
 <span>8 × 4 ready stock</span>
 <span className="text-yp-red">·</span>
 <span>Borer & termite</span>
 <span className="text-yp-red">·</span>
 </p>
 ))}
 </div>
 </div>

 <div className="sticky top-[var(--header-h)] z-30 border-b border-yp-line bg-white/92 backdrop-blur-md">
 <div className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:justify-center lg:px-12">
 {families.map((f) => (
 <a
 key={f.id}
 href={`#${f.id}`}
 className="shrink-0 rounded-full border border-yp-line px-4 py-2 text-[12px] font-semibold text-yp-espresso transition hover:border-yp-espresso hover:bg-yp-espresso hover:text-white"
 >
 {f.label}
 <span className="ml-2 hidden text-yp-mist sm:inline">{f.meta}</span>
 </a>
 ))}
 </div>
 </div>

 <section id="index" className="yp-section scroll-mt-[calc(var(--header-h)+3.5rem)]">
 <div className="yp-container">
 <p className="eyebrow">The yard</p>
 <h2 className="mt-3 max-w-xl font-display text-[1.85rem] leading-tight sm:text-4xl">
 Tap a face. Then read the stamp.
 </h2>
 <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
 {products.map((p) => (
 <a
 key={p.slug}
 href={`#${p.family}`}
 className="group relative aspect-[4/5] overflow-hidden rounded-[1.15rem] sm:rounded-[1.25rem]"
 >
 <img
 src={p.image}
 alt=""
 className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso via-yp-espresso/10 to-transparent" />
 <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
 <p className="text-[10px] uppercase tracking-[0.14em] text-yp-copper">{p.grade}</p>
 <p className="mt-1 font-display text-base leading-tight text-white sm:text-xl">{p.name}</p>
 </div>
 </a>
 ))}
 </div>
 </div>
 </section>

 {families
 .filter((f) => f.id !== "compare" && f.id !== "hardware")
 .map((f) => {
 const rows = products.filter((p) => p.family === f.id);
 return (
 <section
 key={f.id}
 id={f.id}
 className="scroll-mt-[calc(var(--header-h)+3.75rem)] pb-8 sm:pb-12"
 >
 <div className="yp-container mb-6">
 <p className="eyebrow">{f.meta}</p>
 <h2 className="mt-2 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">
 {f.label}
 </h2>
 </div>
 <div className="yp-container grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
 {rows.map((p, i) => (
 <CatalogueCard key={p.slug} product={p} index={i} href={`/products/${p.slug}`} />
 ))}
 </div>
 </section>
 );
 })}

 <section
 id="hardware"
 className="scroll-mt-[calc(var(--header-h)+3.75rem)] border-y border-yp-line bg-[#F7F5F2] py-12 sm:py-20"
 >
 <div className="yp-container grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
 <div className="lg:col-span-5">
 <div className="relative mx-auto flex h-56 max-w-sm items-end justify-center sm:h-64">
 <div
 aria-hidden
 className="absolute bottom-4 left-1/2 h-8 w-[65%] -translate-x-1/2 rounded-[100%] bg-yp-espresso/15 blur-xl"
 />
 <img
 src="/products/hardware.png"
 alt="Furniture hardware fittings"
 className="relative z-10 max-h-full w-[85%] object-contain drop-shadow-[0_24px_36px_rgba(26,26,26,0.16)]"
 />
 </div>
 </div>
 <div className="lg:col-span-7">
 <p className="eyebrow">Fittings</p>
 <h2 className="mt-2 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">Hardware</h2>
 <p className="mt-4 max-w-xl text-sm leading-relaxed text-yp-mist sm:text-[15px]">
 A wide range of furniture and interior hardware including hinges, telescopic channels,
 sliding wardrobe fittings and more, stocked alongside the sheet so the room stays one
 conversation.
 </p>
 <ul className="mt-6 grid gap-2 sm:grid-cols-2">
 {hardwareLines.map((line) => (
 <li
 key={line}
 className="rounded-xl border border-yp-line/80 bg-white px-4 py-3 text-sm text-yp-espresso"
 >
 {line}
 </li>
 ))}
 </ul>
 <Link to="/quote" className="btn-primary mt-8 inline-flex">
 Ask for hardware
 </Link>
 </div>
 </div>
 </section>

 <section id="compare" className="overflow-hidden bg-yp-ivory yp-section scroll-mt-[calc(var(--header-h)+3.75rem)]">
 <div className="yp-container">
 <p className="eyebrow">At a glance</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">Which stamp for which room.</h2>
 <p className="mt-3 max-w-md text-sm text-yp-mist">Swipe the grades on a phone. Hover a card on desktop.</p>
 </div>
 <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-12">
 {compare.map((c, i) => {
 const p = products.find((x) => x.slug === c.slug);
 return (
 <motion.div key={c.slug} whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }}>
 <Link
 to={`/products/${c.slug}`}
 className="flex h-full w-[72vw] max-w-xs shrink-0 snap-start flex-col overflow-hidden rounded-[1.35rem] border border-yp-line bg-white lg:w-auto"
 >
 <div className="relative aspect-[4/5] overflow-hidden">
 <img src={p.image} alt="" className="h-full w-full object-cover" />
 <p className="absolute left-3 top-3 font-display text-2xl text-white/80">
 {String(i + 1).padStart(2, "0")}
 </p>
 </div>
 <div className="flex flex-1 flex-col p-4">
 <p className="font-display text-xl leading-tight">{p.name}</p>
 <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-yp-timber">{c.stamp}</p>
 <p className="mt-3 text-sm text-yp-mist">{c.wet}</p>
 <p className="mt-1 text-sm font-medium">{c.use}</p>
 </div>
 </Link>
 </motion.div>
 );
 })}
 </div>
 </section>

 <section className="yp-section">
 <div className="yp-container">
 <p className="eyebrow">How to pick</p>
 <h2 className="mt-3 max-w-2xl font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">Start with the room, not the rate.</h2>
 <div className="mt-10 grid gap-3 sm:grid-cols-2">
 {pick.map((card) => (
 <Link
 key={card.n}
 to={card.href}
 className="group rounded-[1.35rem] border border-yp-line bg-white p-6 transition duration-300 hover:border-yp-red hover:bg-yp-espresso hover:text-yp-ivory sm:p-8"
 >
 <p className="font-display text-[11px] text-yp-red group-hover:text-yp-copper">{card.n}</p>
 <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{card.title}</h3>
 <p className="mt-3 text-sm leading-relaxed text-yp-mist group-hover:text-white/65">{card.text}</p>
 <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-yp-espresso/40 group-hover:text-yp-copper">
 {card.label} →
 </p>
 </Link>
 ))}
 </div>
 </div>
 </section>

 <section className="yp-section pt-0">
 <div className="yp-container">
 <p className="eyebrow">In the room</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">Where the sheet lives.</h2>
 <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 lg:grid-cols-4 lg:grid-rows-2">
 {rooms.map((room, i) => (
 <motion.div
 key={room.caption}
 whileHover={{ scale: 0.985 }}
 whileTap={{ scale: 0.97 }}
 className={i === 0 ? "col-span-2 row-span-2 min-h-[16rem] lg:min-h-[28rem]" : ""}
 >
 <Link
 to={room.href}
 className={`group relative block h-full overflow-hidden rounded-[1.15rem] sm:rounded-[1.25rem] ${
 i === 0 ? "min-h-[16rem] lg:min-h-[28rem]" : "aspect-[4/5] lg:aspect-auto lg:h-full"
 }`}
 >
 <img
 src={room.src}
 alt={room.caption}
 className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
 />
 <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-yp-espresso/80 to-transparent p-4 text-sm text-white">
 {room.caption}
 </span>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <section className="yp-container pb-16 sm:pb-24">
 <div className="overflow-hidden rounded-[1.25rem] bg-yp-espresso text-yp-ivory sm:rounded-[1.5rem] lg:grid lg:grid-cols-12">
 <div className="flex flex-col justify-center px-5 py-9 sm:px-10 sm:py-12 lg:col-span-7 lg:px-12 lg:py-14">
 <p className="eyebrow text-yp-copper">Not sure</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">Send the drawing. We map the grade.</h2>
 <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
 {site.contactPerson} will not upsell marine into a dry wardrobe. Tell us the room and the
 carpenter, or count the sheets first.
 </p>
 <div className="mt-8 flex flex-wrap gap-3">
 <Link to="/contact" className="btn-primary">
 Contact the yard
 <ArrowUpRight size={15} />
 </Link>
 <Link to="/calculator" className="btn-ghost-light">
 Sheet calculator
 </Link>
 <Link to="/guides" className="btn-ghost-light">
 Buying guides
 </Link>
 </div>
 </div>
 <div className="relative min-h-[14rem] lg:col-span-5 lg:min-h-[22rem]">
 <img src={images.stack} alt="" className="absolute inset-0 h-full w-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/50 to-transparent lg:bg-gradient-to-l" />
 </div>
 </div>
 </section>
 </>
 );
}
