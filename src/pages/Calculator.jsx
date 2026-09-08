import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import ToolsStrip from "../components/ToolsStrip";
import { images, products, site } from "../data/content";

const SHEET = { w: 8, h: 4 };

const presets = [
 { label: "10×12 kitchen", length: 10, width: 12, height: 7, waste: 10, grade: "bwr-plywood" },
 { label: "12×14 bedroom", length: 12, width: 14, height: 8, waste: 8, grade: "commercial-plywood" },
 { label: "8×10 vanity", length: 8, width: 10, height: 7, waste: 12, grade: "bwp-plywood" },
];

function Field({ label, value, min, max, step = 1, suffix, onChange }) {
 return (
 <label className="block">
 <span className="flex items-baseline justify-between text-sm font-medium">
 {label}
 <span className="font-display text-lg tabular-nums">
 {value}
 {suffix ? <span className="ml-1 text-xs text-yp-mist">{suffix}</span> : null}
 </span>
 </span>
 <input
 className="mt-3 w-full accent-yp-red"
 type="range"
 min={min}
 max={max}
 step={step}
 value={value}
 onChange={(e) => onChange(Number(e.target.value))}
 />
 </label>
 );
}

export default function Calculator() {
 const [length, setLength] = useState(10);
 const [width, setWidth] = useState(12);
 const [height, setHeight] = useState(7);
 const [waste, setWaste] = useState(10);
 const [grade, setGrade] = useState("bwr-plywood");
 const heroRef = useRef(null);
 const { scrollYProgress } = useScroll({
 target: heroRef,
 offset: ["start start", "end start"],
 });
 const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
 const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

 const result = useMemo(() => {
 const wallArea = 2 * (Number(length) + Number(width)) * Number(height);
 const sheetArea = SHEET.w * SHEET.h;
 const raw = wallArea / sheetArea;
 const withWaste = raw * (1 + Number(waste) / 100);
 const sheets = Math.max(1, Math.ceil(withWaste));
 const carcass = Math.ceil(sheets * 0.55);
 const shutters = Math.ceil(sheets * 0.3);
 const backers = Math.max(2, Math.ceil(sheets * 0.15));
 return { wallArea: wallArea.toFixed(0), sheets, carcass, shutters, backers };
 }, [length, width, height, waste]);

 const product = products.find((p) => p.slug === grade);
 const split = [
 { k: "Carcass 18 mm", v: result.carcass, share: 0.55 },
 { k: "Shutters 18–19 mm", v: result.shutters, share: 0.3 },
 { k: "Backers 6–8 mm", v: result.backers, share: 0.15 },
 ];

 return (
 <>
 <SEO
 title="Sheet calculator"
 description="Estimate plywood sheets for a kitchen or room. First-pass planning tool from Yashply Pune."
 />

 <section
 ref={heroRef}
 className="relative isolate flex min-h-[72svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
 >
 <motion.img
 src={images.kitchen2}
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
 <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[0.95]">
 Count the room.
 <br />
 Then buy the lot.
 </h1>
 <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
 A first-pass 8×4 estimator. Confirm with a cut list, then we pick the grade at the Pune yard.
 </p>
 <a
 href="#tool"
 className="mt-10 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
 >
 Open the tool
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
 <span>8 × 4 sheets</span>
 <span className="text-yp-red">·</span>
 <span>10% waste default</span>
 <span className="text-yp-red">·</span>
 <span>Carcass · shutter · backer</span>
 <span className="text-yp-red">·</span>
 <span>Not a quotation</span>
 <span className="text-yp-red">·</span>
 </p>
 ))}
 </div>
 </div>

 <ToolsStrip />

 <section id="tool" className="yp-section scroll-mt-[calc(var(--header-h)+3.75rem)]">
 <div className="yp-container">
 <p className="eyebrow">Presets</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">Tap a room. Then tune it.</h2>
 <div className="mt-6 flex flex-wrap gap-2">
 {presets.map((p) => (
 <button
 key={p.label}
 type="button"
 onClick={() => {
 setLength(p.length);
 setWidth(p.width);
 setHeight(p.height);
 setWaste(p.waste);
 setGrade(p.grade);
 }}
 className="rounded-full border border-yp-line px-4 py-2 text-[12px] font-semibold transition hover:border-yp-espresso hover:bg-yp-espresso hover:text-white"
 >
 {p.label}
 </button>
 ))}
 </div>
 </div>

 <div className="yp-container mt-8 grid gap-3 lg:grid-cols-12">
 <form className="rounded-[1.35rem] border border-yp-line bg-white p-6 sm:p-8 lg:col-span-6">
 <div className="space-y-7">
 <Field label="Room length" value={length} min={6} max={24} suffix="ft" onChange={setLength} />
 <Field label="Room width" value={width} min={6} max={24} suffix="ft" onChange={setWidth} />
 <Field label="Joinery height" value={height} min={3} max={10} step={0.5} suffix="ft" onChange={setHeight} />
 <Field label="Cutting waste" value={waste} min={5} max={20} suffix="%" onChange={setWaste} />
 <label className="block">
 <span className="text-sm font-medium">Primary grade</span>
 <select className="field mt-2" value={grade} onChange={(e) => setGrade(e.target.value)}>
 {products.map((p) => (
 <option key={p.slug} value={p.slug}>
 {p.name} · {p.grade}
 </option>
 ))}
 </select>
 </label>
 </div>
 </form>

 <div className="overflow-hidden rounded-[1.35rem] bg-yp-espresso p-6 text-yp-ivory sm:p-8 lg:col-span-6">
 <p className="text-[11px] uppercase tracking-[0.2em] text-yp-copper">Estimate</p>
 <p className="mt-3 font-display text-[clamp(2.75rem,14vw,6.5rem)] leading-none tabular-nums">{result.sheets}</p>
 <p className="mt-2 text-white/55">8×4 sheets · ~{result.wallArea} sq.ft of joinery wall</p>

 <ul className="mt-8 space-y-4">
 {split.map((s) => (
 <li key={s.k}>
 <div className="flex justify-between text-sm">
 <span className="text-white/65">{s.k}</span>
 <span className="font-semibold tabular-nums">{s.v}</span>
 </div>
 <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
 <div className="h-full rounded-full bg-yp-red" style={{ width: `${s.share * 100}%` }} />
 </div>
 </li>
 ))}
 </ul>

 {product && (
 <Link to={`/products/${product.slug}`} className="btn-primary mt-8">
 View {product.name}
 <ArrowUpRight size={15} />
 </Link>
 )}
 <p className="mt-6 text-xs leading-relaxed text-white/40">
 Not a quotation. Wet walls still need BWP even if you estimated commercial. {site.contactPerson}{" "}
 will map the cut list at the Pune yard.
 </p>
 </div>
 </div>
 </section>

 <section className="yp-container pb-20 sm:pb-28">
 <div className="grid gap-3 sm:grid-cols-3">
 <Link
 to="/guides/kitchen-sheet-count"
 className="rounded-[1.35rem] border border-yp-line bg-white p-6 transition hover:border-yp-espresso"
 >
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-timber">Guide</p>
 <p className="mt-2 font-display text-xl sm:text-2xl">Kitchen sheet count</p>
 <p className="mt-2 text-sm text-yp-mist">Why 18 mm carcasses and how a 10×12 usually lands.</p>
 </Link>
 <Link
 to="/guides/bwp-vs-bwr-vs-mr"
 className="rounded-[1.35rem] border border-yp-line bg-white p-6 transition hover:border-yp-espresso"
 >
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-timber">Guide</p>
 <p className="mt-2 font-display text-xl sm:text-2xl">Pick the stamp</p>
 <p className="mt-2 text-sm text-yp-mist">BWP, BWR or MR, start from the room.</p>
 </Link>
 <Link
 to="/contact"
 className="rounded-[1.35rem] bg-yp-espresso p-6 text-yp-ivory transition hover:bg-yp-ink"
 >
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-copper">Yard</p>
 <p className="mt-2 font-display text-xl sm:text-2xl">Send the drawing</p>
 <p className="mt-2 text-sm text-white/55">We refine this estimate against a real cut list.</p>
 </Link>
 </div>
 </section>
 </>
 );
}
