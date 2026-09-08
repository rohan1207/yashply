import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import ToolsStrip from "../components/ToolsStrip";
import { FaqAccordion } from "../components/FaqHome";
import { faqs, images, site } from "../data/content";

const groups = [
 { id: "yard", label: "The yard", items: faqs.slice(0, 2) },
 { id: "sheet", label: "The sheet", items: faqs.slice(2, 4) },
 { id: "buy", label: "The buy", items: faqs.slice(4) },
];

export default function FAQ() {
 const heroRef = useRef(null);
 const { scrollYProgress } = useScroll({
 target: heroRef,
 offset: ["start start", "end start"],
 });
 const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
 const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

 return (
 <>
 <SEO title="FAQs" description="Yashply location, ISI certification, delivery, stock and pricing, answered." />

 <section
 ref={heroRef}
 className="relative isolate flex min-h-[72svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
 >
 <motion.img
 src={images.stack}
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
 Ask before
 <br />
 you buy.
 </h1>
 <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
 Location, stamps, stock, delivery and price, answered the way the yard answers the
 phone.
 </p>
 <div className="mt-8 flex flex-wrap gap-2">
 {groups.map((g) => (
 <a
 key={g.id}
 href={`#${g.id}`}
 className="rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold text-white/80 transition hover:border-white hover:bg-white hover:text-yp-espresso"
 >
 {g.label}
 </a>
 ))}
 </div>
 <a
 href="#yard"
 className="mt-10 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
 >
 The answers
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
 <span>Pune yard</span>
 <span className="text-yp-red">·</span>
 <span>ISI 303 & 710</span>
 <span className="text-yp-red">·</span>
 <span>3,000–4,000 sheets</span>
 <span className="text-yp-red">·</span>
 <span>Doorstep delivery</span>
 <span className="text-yp-red">·</span>
 </p>
 ))}
 </div>
 </div>

 <ToolsStrip />

 <section className="yp-section">
 <div className="yp-container max-w-3xl space-y-12">
 {groups.map((g) => (
 <div key={g.id} id={g.id} className="scroll-mt-[calc(var(--header-h)+3.75rem)]">
 <p className="eyebrow">{g.label}</p>
 <h2 className="mb-6 mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">
 {g.id === "yard" ? "Where and what." : g.id === "sheet" ? "Stamps and stock." : "Price and people."}
 </h2>
 <FaqAccordion items={g.items} defaultOpen={0} />
 </div>
 ))}

 <div className="flex flex-col gap-4 rounded-[1.35rem] bg-yp-espresso px-5 py-6 text-yp-ivory sm:flex-row sm:items-center sm:justify-between sm:px-8">
 <p className="text-sm leading-relaxed text-white/65">
 Still deciding a grade? Speak with {site.contactPerson} at the Pune yard.
 </p>
 <div className="flex flex-wrap gap-3">
 <a href={site.phoneHref} className="btn-ghost-light">
 Call
 </a>
 <a href={site.whatsapp} className="btn-primary" target="_blank" rel="noreferrer">
 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>

 <section className="yp-container pb-20 sm:pb-28">
 <div className="grid gap-3 sm:grid-cols-3">
 <Link to="/guides" className="rounded-[1.35rem] border border-yp-line bg-white p-6">
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-timber">Guides</p>
 <p className="mt-2 font-display text-xl sm:text-2xl">Read the notes</p>
 </Link>
 <Link to="/calculator" className="rounded-[1.35rem] border border-yp-line bg-white p-6">
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-timber">Tool</p>
 <p className="mt-2 font-display text-xl sm:text-2xl">Count the sheets</p>
 </Link>
 <Link to="/quality" className="rounded-[1.35rem] border border-yp-line bg-white p-6">
 <p className="text-[11px] uppercase tracking-[0.16em] text-yp-timber">Quality</p>
 <p className="mt-2 font-display text-xl sm:text-2xl">See the stamps</p>
 </Link>
 </div>
 </section>
 </>
 );
}
