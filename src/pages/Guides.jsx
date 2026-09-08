import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import ToolsStrip from "../components/ToolsStrip";
import { guides, images } from "../data/content";

const cats = ["All", ...[...new Set(guides.map((g) => g.category))]];

function scrollToId(id) {
 const el = document.getElementById(id);
 if (!el) return;
 const header = document.querySelector("header")?.getBoundingClientRect().height ?? 72;
 if (window.__lenis) {
 window.__lenis.scrollTo(el, { offset: -(header + 56), duration: 1.05 });
 } else {
 el.scrollIntoView({ behavior: "smooth", block: "start" });
 }
}

export default function Guides() {
 const [cat, setCat] = useState("All");
 const heroRef = useRef(null);
 const { hash } = useLocation();
 const { scrollYProgress } = useScroll({
 target: heroRef,
 offset: ["start start", "end start"],
 });
 const imgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
 const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
 const rows = cat === "All" ? guides : guides.filter((g) => g.category === cat);
 const featured = rows[0];
 const rest = rows.slice(1);

 useEffect(() => {
 const id = hash.replace("#", "");
 if (!id) return;
 const match = cats.find((c) => c.toLowerCase() === id.toLowerCase());
 if (match) setCat(match);
 const t = window.setTimeout(() => scrollToId("journal"), 80);
 return () => window.clearTimeout(t);
 }, [hash]);

 return (
 <>
 <SEO
 title="Guides"
 description="How to choose plywood grades, ISI 303 vs 710, kitchen sheet counts, monsoon storage, from Yashply."
 />

 <section
 ref={heroRef}
 className="relative isolate flex min-h-[72svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
 >
 <motion.img
 src={images.craftsman}
 alt=""
 style={{ y: imgY, scale: 1.06 }}
 className="absolute inset-0 h-full w-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-yp-espresso" />
 <div className="grain-overlay opacity-[0.12]" />
 <motion.div
 style={{ opacity: titleOp }}
 className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-14 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:px-12"
 >
 <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-copper">Yashply Tools</p>
 <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[0.95]">
 Buy with
 <br />
 a clear head.
 </h1>
 <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
 Grades, stamps, kitchen counts and monsoon storage, written for Pune homes and sites,
 not a catalogue.
 </p>
 <a
 href="#journal"
 className="mt-10 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
 >
 The journal
 <ArrowDown size={14} className="animate-bounce" />
 </a>
 </motion.div>
 </section>

 <div className="overflow-hidden border-y border-yp-line bg-yp-ivory py-4">
 <div className="flex w-max animate-[voice-marquee_28s_linear_infinite] gap-10 pr-10 hover:[animation-play-state:paused]">
 {[0, 1].map((copy) => (
 <p
 key={copy}
 className="flex gap-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-espresso/55"
 aria-hidden={copy === 1 || undefined}
 >
 <span>BWP vs BWR vs MR</span>
 <span className="text-yp-red">·</span>
 <span>ISI 303 & 710</span>
 <span className="text-yp-red">·</span>
 <span>Kitchen counts</span>
 <span className="text-yp-red">·</span>
 <span>Monsoon storage</span>
 <span className="text-yp-red">·</span>
 </p>
 ))}
 </div>
 </div>

 <ToolsStrip />

 <section id="journal" className="yp-section scroll-mt-[calc(var(--header-h)+3.75rem)]">
 <div className="yp-container">
 <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
 <div>
 <p className="eyebrow">Journal</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">Six notes from the yard.</h2>
 </div>
 <div className="no-scrollbar flex gap-2 overflow-x-auto">
 {cats.map((c) => (
 <button
 key={c}
 type="button"
 onClick={() => setCat(c)}
 className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition ${
 cat === c
 ? "border-yp-espresso bg-yp-espresso text-white"
 : "border-yp-line hover:border-yp-espresso"
 }`}
 >
 {c}
 </button>
 ))}
 </div>
 </div>

 {featured && (
 <Link
 to={`/guides/${featured.slug}`}
 className="group mt-10 grid overflow-hidden rounded-[1.35rem] border border-yp-line bg-white lg:grid-cols-12"
 >
 <div className="relative aspect-[16/11] lg:col-span-7 lg:aspect-auto lg:min-h-[22rem]">
 <img
 src={featured.image}
 alt=""
 className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
 />
 </div>
 <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-5">
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-timber">
 {featured.category} · {featured.read}
 </p>
 <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl lg:text-4xl">{featured.title}</h3>
 <p className="mt-4 text-sm leading-relaxed text-yp-mist">{featured.excerpt}</p>
 <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em]">
 Read the note
 <ArrowUpRight className="ml-1 inline" size={14} />
 </p>
 </div>
 </Link>
 )}

 <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
 {rest.map((g, i) => (
 <motion.div key={g.slug} whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
 <Link
 to={`/guides/${g.slug}`}
 className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-yp-line bg-white"
 >
 <div className="relative aspect-[16/10] overflow-hidden">
 <img
 src={g.image}
 alt=""
 className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
 />
 <p className="absolute left-4 top-4 font-display text-xl text-white/80">
 {String(i + 2).padStart(2, "0")}
 </p>
 </div>
 <div className="flex flex-1 flex-col p-5 sm:p-6">
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-timber">
 {g.category} · {g.read}
 </p>
 <h3 className="mt-2 font-display text-xl leading-tight sm:text-2xl">{g.title}</h3>
 <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-yp-mist">{g.excerpt}</p>
 </div>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <section className="yp-container pb-20 sm:pb-28">
 <div className="overflow-hidden rounded-[1.5rem] bg-yp-espresso text-yp-ivory lg:grid lg:grid-cols-12">
 <div className="px-6 py-10 sm:px-10 lg:col-span-7 lg:px-12 lg:py-14">
 <p className="eyebrow text-yp-copper">Still unsure</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">Count the sheets. Then walk the pile.</h2>
 <div className="mt-8 flex flex-wrap gap-3">
 <Link to="/calculator" className="btn-primary">
 Sheet calculator
 <ArrowUpRight size={15} />
 </Link>
 <Link to="/quality" className="btn-ghost-light">
 Quality & ISI
 </Link>
 </div>
 </div>
 <div className="relative min-h-[12rem] lg:col-span-5">
 <img src={images.layers} alt="" className="absolute inset-0 h-full w-full object-cover" />
 </div>
 </div>
 </section>
 </>
 );
}
