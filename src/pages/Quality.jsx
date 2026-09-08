import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import ToolsStrip from "../components/ToolsStrip";
import { images, qualityPillars, site } from "../data/content";

const checks = [
 "ISI marks for 303 (commercial / BWR) and 710 (BWP / marine).",
 "Edge cores with minimal gaps, lift a sheet, do not just photograph a face.",
 "Treatment against borers and termites, not a surface spray story.",
 "Nailing that does not split. Ask a carpenter who already buys from us.",
 "Ready stock of 3,000–4,000 sheets, consistency across a lot.",
];

const stamps = [
 {
 n: "303",
 title: "IS 303",
 text: "Commercial MR and BWR. The language for dry interiors and monsoon kitchens.",
 href: "/products/bwr-plywood",
 },
 {
 n: "710",
 title: "IS 710",
 text: "Boiling waterproof. Baths, wet walls, anything a callback cannot survive.",
 href: "/products/bwp-plywood",
 },
 {
 n: "1659",
 title: "IS 1659",
 text: "Block boards. Long shutters that must stay true across a wardrobe door.",
 href: "/products/bwp-block-board",
 },
];

const shots = [
 { src: images.layers, caption: "The glue line", wide: true },
 { src: images.workshop, caption: "The press" },
 { src: images.stack, caption: "Ready stock" },
 { src: images.timber, caption: "Timber in" },
 { src: images.craftsman, caption: "Making" },
];

function Pillar({ title, text, i }) {
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
 className={`w-full rounded-[1.35rem] border p-6 text-left transition duration-300 sm:p-8 ${
 on
 ? "border-yp-red bg-yp-espresso text-yp-ivory"
 : "border-yp-line bg-white hover:border-yp-espresso"
 }`}
 >
 <p className={`font-display text-[11px] tabular-nums ${on ? "text-yp-copper" : "text-yp-espresso/30"}`}>
 {String(i + 1).padStart(2, "0")}
 </p>
 <h3 className="mt-3 font-display text-2xl sm:text-3xl">{title}</h3>
 <div
 className={`grid transition-[grid-template-rows] duration-300 ${
 on ? "grid-rows-[1fr]" : "grid-rows-[0fr] lg:grid-rows-[1fr]"
 }`}
 >
 <div className="overflow-hidden">
 <p className={`mt-3 text-sm leading-relaxed ${on ? "text-white/65" : "text-yp-mist"}`}>{text}</p>
 </div>
 </div>
 <p className={`mt-5 text-[11px] uppercase tracking-[0.16em] lg:hidden ${on ? "text-yp-copper" : "text-yp-espresso/40"}`}>
 {on ? "Tap to close" : "Tap"}
 </p>
 </button>
 );
}

export default function Quality() {
 const heroRef = useRef(null);
 const { scrollYProgress } = useScroll({
 target: heroRef,
 offset: ["start start", "end start"],
 });
 const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
 const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

 return (
 <>
 <SEO
 title="Quality & certifications"
 description="ISI 303 and ISI 710 certified plywood. Borer and termite treatment. 25 years of QC in Pune."
 />

 <section
 ref={heroRef}
 className="relative isolate flex min-h-[72svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
 >
 <motion.img
 src={images.layers}
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
 <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.4rem)] font-medium leading-[0.95]">
 ISI is a test.
 <br />
 We take it.
 </h1>
 <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Stamps on the sheet. Treatment through the core. A boil test that is a factory habit,
            not a brochure line.
 </p>
 <a
 href="#stamps"
 className="mt-10 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
 >
 The stamps
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
 <span>IS 303</span>
 <span className="text-yp-red">·</span>
 <span>IS 710</span>
 <span className="text-yp-red">·</span>
 <span>Borer & termite</span>
 <span className="text-yp-red">·</span>
 <span>Boil test</span>
 <span className="text-yp-red">·</span>
 <span>25 years of QC</span>
 <span className="text-yp-red">·</span>
 </p>
 ))}
 </div>
 </div>

 <ToolsStrip />

 <section id="stamps" className="yp-section scroll-mt-[calc(var(--header-h)+3.75rem)]">
 <div className="yp-container">
 <p className="eyebrow">The language</p>
 <h2 className="mt-3 max-w-xl font-display text-[1.85rem] leading-tight sm:text-4xl">Three numbers. No “equivalent”.</h2>
 <div className="mt-10 grid gap-3 md:grid-cols-3">
 {stamps.map((s) => (
 <Link
 key={s.n}
 to={s.href}
 className="group rounded-[1.35rem] border border-yp-line bg-white p-6 transition hover:border-yp-red hover:bg-yp-espresso hover:text-yp-ivory sm:p-8"
 >
 <p className="font-display text-4xl text-yp-red group-hover:text-yp-copper sm:text-5xl">{s.n}</p>
 <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
 <p className="mt-3 text-sm leading-relaxed text-yp-mist group-hover:text-white/65">{s.text}</p>
 </Link>
 ))}
 </div>
 </div>
 </section>

 <section className="yp-section pt-0">
 <div className="yp-container">
 <p className="eyebrow">The mill</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">Four things we will not skip.</h2>
 <div className="mt-10 grid gap-3 sm:grid-cols-2">
 {qualityPillars.map((p, i) => (
 <Pillar key={p.title} {...p} i={i} />
 ))}
 </div>
 </div>
 </section>

 <section className="bg-yp-espresso text-yp-ivory yp-section">
 <div className="yp-container grid gap-12 lg:grid-cols-12">
 <div className="lg:col-span-6">
 <p className="eyebrow text-yp-copper">In the yard</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">What we will show you.</h2>
 <ol className="mt-8 space-y-5">
 {checks.map((c, i) => (
 <li key={c} className="flex gap-4">
 <span className="font-display text-xl text-yp-copper">{String(i + 1).padStart(2, "0")}</span>
 <p className="text-sm leading-relaxed text-white/70 sm:text-[15px]">{c}</p>
 </li>
 ))}
 </ol>
 </div>
 <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:col-span-6">
 <p className="text-[11px] uppercase tracking-[0.2em] text-yp-copper">Warranty posture</p>
 <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
 We stand behind grade performance when the sheet is stored, cut and sealed as a wet
 room requires.
 </p>
 <p className="mt-4 text-sm text-white/50">
 The honest conversation happens at {site.address.line1}, {site.address.city}.
 </p>
 <Link to="/contact" className="btn-primary mt-8">
 Inspect a lot
 <ArrowUpRight size={15} />
 </Link>
 </div>
 </div>
 </section>

 <section className="yp-section">
 <div className="yp-container">
 <p className="eyebrow">Pune</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">The test is on the sheet.</h2>
 <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2">
 {shots.map((shot, i) => (
 <figure
 key={shot.caption}
 className={`group relative overflow-hidden rounded-[1.25rem] ${
 i === 0 ? "col-span-2 row-span-2 min-h-[16rem] lg:min-h-[28rem]" : "aspect-[4/5] lg:aspect-auto"
 }`}
 >
 <img
 src={shot.src}
 alt={shot.caption}
 className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
 />
 <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-yp-espresso/80 to-transparent p-4 text-sm text-white">
 {shot.caption}
 </figcaption>
 </figure>
 ))}
 </div>
 </div>
 </section>

 <section className="yp-container pb-20 sm:pb-28">
 <div className="flex flex-wrap gap-3">
 <Link to="/guides/why-isi-matters" className="btn-ghost">
 Why ISI still matters
 </Link>
 <Link to="/calculator" className="btn-ghost">
 Sheet calculator
 </Link>
 <a href={site.phoneHref} className="btn-primary">
 Call {site.phone}
 </a>
 </div>
 </section>
 </>
 );
}
