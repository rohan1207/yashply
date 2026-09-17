import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowUpRight, PenTool, Ruler, Truck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import { images, site } from "../data/content";

function scrollToId(id) {
 const el = document.getElementById(id);
 if (!el) return;
 const header = document.querySelector("header")?.getBoundingClientRect().height ?? 72;
 if (window.__lenis) {
 window.__lenis.scrollTo(el, { offset: -(header + 12), duration: 1.05 });
 } else {
 el.scrollIntoView({ behavior: "smooth", block: "start" });
 }
}

const tracks = [
 {
 id: "architects",
 icon: PenTool,
 kicker: "Specify",
 title: "Architects & IDs",
 text: "Spec-ready IS 303 / 710 language, consistent lots for a floor plate, and a yard that can match a drawing. We would rather lose a rate than ship a mixed core.",
 points: ["Sample sheets for moodboards", "Lot reservation for phased sites", "Grade mapping on your GA"],
 image: images.office,
 },
 {
 id: "contractors",
 icon: Truck,
 kicker: "Programme",
 title: "Contractors & builders",
 text: "Volume without theatre. Ready stock so a programme does not stall. Delivery that respects a crane slot. Speak to our sales team for project rates.",
 points: ["3,000-4,000 sheets on the floor", "Staged delivery across Pune", "One grade language for BOQ and site"],
 image: images.commercial,
 },
 {
 id: "carpenters",
 icon: Ruler,
 kicker: "Cut list",
 title: "Carpenters & factories",
 text: "Calibrated faces, nailing that holds, edges that take banding. Tell us if you nest on CNC, we will pick the flattest faces in the lot.",
 points: ["Does not split while nailing", "Borer & termite treated cores", "Repeat thicknesses, no surprises"],
 image: images.craftsman,
 },
];

const steps = [
 { n: "01", title: "Brief", text: "Share the drawing, climate, and carpenter. We map grade to use, not the other way around." },
 { n: "02", title: "Reserve", text: "Walk the Pune yard or send the spec. We hold a consistent lot so floor two matches floor one." },
 { n: "03", title: "Quote", text: "Same-grade pricing. Typically about 30% more value than comparable ISI plywood." },
 { n: "04", title: "Deliver", text: "Staged drops that respect a programme. No cracked corners, no monsoon surprises." },
];

const vows = [
 {
 title: "No mixed cores",
 text: "A floor plate gets one lot language. We would rather lose a rate than send two mills in one lift.",
 },
 {
 title: "Stock before theatre",
 text: "3,000-4,000 sheets on the floor so a programme does not wait on a mill in another state.",
 },
 {
 title: "The stamp on the sheet",
 text: "IS 303 and 710 live on the plywood, not only on a brochure. Ask to see it at the Pune yard.",
 },
];

function VowCard({ title, text, i }) {
 const [on, setOn] = useState(false);

 return (
 <button
 type="button"
 onClick={() => {
 if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
 setOn((v) => !v);
 }}
 onMouseEnter={() => setOn(true)}
 onMouseLeave={() => setOn(false)}
 className={`group w-full rounded-[1.35rem] border p-6 text-left transition duration-300 sm:p-8 ${
 on
 ? "border-yp-red bg-yp-espresso text-yp-ivory"
 : "border-yp-line bg-white text-yp-espresso hover:border-yp-espresso"
 }`}
 >
 <p className={`font-display text-[11px] tabular-nums ${on ? "text-yp-copper" : "text-yp-espresso/30"}`}>
 {String(i + 1).padStart(2, "0")}
 </p>
 <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{title}</h3>
 <div
 className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
 on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
 }`}
 >
 <div className="overflow-hidden">
 <p className={`mt-4 text-sm leading-relaxed ${on ? "text-white/65" : "text-yp-mist"}`}>{text}</p>
 </div>
 </div>
 <p className={`mt-5 text-[11px] uppercase tracking-[0.16em] ${on ? "text-yp-copper" : "text-yp-espresso/40"}`}>
 {on ? "Hold · tap to close" : "Hover or tap"}
 </p>
 </button>
 );
}

function TrackCard({ track, active, onOpen }) {
 const Icon = track.icon;
 return (
 <motion.article
 id={track.id}
 onMouseEnter={onOpen}
 onClick={onOpen}
 whileTap={{ scale: 0.985 }}
 className={`group relative min-h-[18rem] cursor-pointer overflow-hidden rounded-[1.25rem] sm:min-h-[26rem] sm:rounded-[1.5rem] lg:min-h-[32rem] scroll-mt-[calc(var(--header-h)+1rem)] ${
 active ? "ring-2 ring-yp-red" : ""
 }`}
 >
 <img
 src={track.image}
 alt=""
 className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
 active ? "scale-105" : "group-hover:scale-105"
 }`}
 />
 <div
 className={`absolute inset-0 transition duration-500 ${
 active ? "bg-yp-espresso/80" : "bg-gradient-to-t from-yp-espresso via-yp-espresso/40 to-black/20"
 }`}
 />
 <div className="absolute inset-0 flex flex-col justify-end p-6 text-yp-ivory sm:p-8">
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-copper">{track.kicker}</p>
 <div className="mt-2 flex items-center gap-2">
 <Icon size={18} strokeWidth={1.5} />
 <h2 className="font-display text-2xl sm:text-3xl">{track.title}</h2>
 </div>
 <div
 className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
 active ? "grid-rows-[1fr]" : "grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]"
 }`}
 >
 <div className="overflow-hidden">
 <p className="mt-3 text-sm leading-relaxed text-white/70">{track.text}</p>
 <ul className="mt-4 space-y-2 text-sm text-white/85">
 {track.points.map((p) => (
 <li key={p} className="flex gap-2">
 <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yp-red" />
 {p}
 </li>
 ))}
 </ul>
 </div>
 </div>
 <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-white/40">
 {active ? "Selected" : "Hover or tap"}
 </p>
 </div>
 </motion.article>
 );
}

export default function Professionals() {
 const [active, setActive] = useState(0);
 const [tilt, setTilt] = useState({ x: 0, y: 0 });
 const heroRef = useRef(null);
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
 const i = tracks.findIndex((t) => t.id === id);
 if (i >= 0) setActive(i);
 const t = window.setTimeout(() => scrollToId(id), 80);
 return () => window.clearTimeout(t);
 }, [hash]);

 return (
 <>
 <SEO
 title="Services"
 description="Architects, contractors and carpenters, specify and buy Yashply ISI plywood in Pune."
 />

 <section
 ref={heroRef}
 onMouseMove={onHeroMove}
 onMouseLeave={() => setTilt({ x: 0, y: 0 })}
 className="relative isolate flex min-h-[88svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[100svh]"
 >
 <motion.img
 src={images.office}
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
 <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-copper">Services</p>
 <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.6rem)] font-medium leading-[0.95]">
 Specified.
 <br />
 Stocked. Delivered.
 </h1>
 <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
 The professional desk, local, reachable, sitting on real inventory. Architects, contractors,
 carpenters: one yard, one stamp language.
 </p>
 <div className="mt-8 flex flex-wrap gap-2">
 {tracks.map((t, i) => (
 <a
 key={t.id}
 href={`#${t.id}`}
 onClick={() => setActive(i)}
 className="rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold text-white/80 transition hover:border-white hover:bg-white hover:text-yp-espresso"
 >
 {t.title.split("&")[0].trim()}
 </a>
 ))}
 </div>
 <a
 href="#desks"
 className="mt-10 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
 >
 The three desks
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
 <span>Spec-ready IS 303 / 710</span>
 <span className="text-yp-red">·</span>
 <span>Lot reservation</span>
 <span className="text-yp-red">·</span>
 <span>Staged delivery</span>
 <span className="text-yp-red">·</span>
 <span>CNC-flat faces</span>
 <span className="text-yp-red">·</span>
 <span>Project rates</span>
 <span className="text-yp-red">·</span>
 </p>
 ))}
 </div>
 </div>

 <section id="desks" className="yp-section scroll-mt-[var(--header-h)]">
 <div className="yp-container">
 <p className="eyebrow">Who we sit with</p>
 <h2 className="mt-3 max-w-xl font-display text-[1.85rem] leading-tight sm:text-4xl">Three desks. Same mill.</h2>
 </div>
 <div className="yp-container mt-10 grid gap-3 lg:grid-cols-3">
 {tracks.map((track, i) => (
 <TrackCard
 key={track.id}
 track={track}
 active={active === i}
 onOpen={() => setActive(i)}
 />
 ))}
 </div>
 </section>

 <section className="overflow-hidden bg-yp-ivory yp-section">
 <div className="yp-container">
 <p className="eyebrow">Programme</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">How a job actually runs.</h2>
 <p className="mt-3 max-w-md text-sm text-yp-mist">Swipe the path on a phone. Hover a step on desktop.</p>
 </div>
 <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-12">
 {steps.map((s) => (
 <motion.article
 key={s.n}
 whileHover={{ y: -8 }}
 whileTap={{ scale: 0.98 }}
 className="w-[78vw] max-w-sm shrink-0 snap-start rounded-[1.35rem] border border-yp-line bg-white p-6 lg:w-auto"
 >
 <p className="font-display text-3xl text-yp-red/80">{s.n}</p>
 <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
 <p className="mt-2 text-sm leading-relaxed text-yp-mist">{s.text}</p>
 </motion.article>
 ))}
 </div>
 </section>

 <section className="bg-yp-ivory yp-section">
 <div className="yp-container">
 <p className="eyebrow">The desk contract</p>
 <h2 className="mt-3 max-w-2xl font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
 Three things trade does not have to chase.
 </h2>
 <div className="mt-10 grid gap-3 md:grid-cols-3">
 {vows.map((v, i) => (
 <VowCard key={v.title} {...v} i={i} />
 ))}
 </div>
 </div>
 </section>

 <section className="yp-container pb-20 sm:pb-28">
 <div className="overflow-hidden rounded-[1.5rem] bg-yp-espresso text-yp-ivory lg:grid lg:grid-cols-12">
 <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:col-span-7 lg:px-12 lg:py-14">
 <p className="eyebrow text-yp-copper">The desk</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">Send the drawing. Or walk in.</h2>
 <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
 {site.contactPerson} takes trade calls. Email the spec, WhatsApp a GA, or stand in the
 pile at the Pune yard until you are sure.
 </p>
 <div className="mt-8 flex flex-wrap gap-3">
 <Link to="/contact" className="btn-primary">
 Contact the yard
 <ArrowUpRight size={15} />
 </Link>
 <a href={site.phoneHref} className="btn-ghost-light">
 Call {site.phone}
 </a>
 <Link to="/calculator" className="btn-ghost-light">
 Sheet calculator
 </Link>
 </div>
 </div>
 <div className="relative min-h-[14rem] lg:col-span-5 lg:min-h-[22rem]">
 <img src={images.workshop} alt="" className="absolute inset-0 h-full w-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/50 to-transparent lg:bg-gradient-to-l" />
 </div>
 </div>
 </section>
 </>
 );
}
