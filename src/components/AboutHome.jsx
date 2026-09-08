import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
 motion,
 useScroll,
 useTransform,
 useInView,
 useReducedMotion,
} from "framer-motion";

const facts = [
 {
 n: "01",
 title: "Plywood",
 text: "ISI 303 & 710 grades for kitchens, wet cores and dry joinery.",
 },
 {
 n: "02",
 title: "Hardware",
 text: "Leading brands under one roof, fittings that match the sheet.",
 },
 {
 n: "03",
 title: "Pune yard",
 text: "Walk the pile. Ready stock, clear stamps, honest mapping to the room.",
 },
];

function FactCard({ fact, open, onOpen }) {
 return (
 <motion.button
 type="button"
 onClick={onOpen}
 onMouseEnter={onOpen}
 whileTap={{ scale: 0.985 }}
 className={`rounded-2xl border px-4 py-3.5 text-left transition duration-300 sm:px-5 sm:py-4 ${
 open
 ? "border-yp-red/35 bg-yp-espresso text-yp-ivory shadow-soft"
 : "border-yp-line bg-white text-yp-espresso hover:border-yp-espresso/25"
 }`}
 >
 <div className="flex items-baseline gap-3">
 <p
 className={`shrink-0 font-display text-[11px] tabular-nums ${
 open ? "text-yp-copper" : "text-yp-espresso/30"
 }`}
 >
 {fact.n}
 </p>
 <p className="min-w-0 font-display text-lg leading-none sm:text-xl">{fact.title}</p>
 </div>
 <div
 className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
 open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
 }`}
 >
 <div className="overflow-hidden">
 <p
 className={`mt-2.5 text-xs leading-relaxed sm:text-[13px] ${
 open ? "text-white/65" : "text-yp-mist"
 }`}
 >
 {fact.text}
 </p>
 </div>
 </div>
 </motion.button>
 );
}

export default function AboutHome() {
 const [active, setActive] = useState(0);
 const [imgHover, setImgHover] = useState(false);
 const reduceMotion = useReducedMotion();
 const sectionRef = useRef(null);
 const inView = useInView(sectionRef, { once: true, margin: "-12%" });
 const { scrollYProgress } = useScroll({
 target: sectionRef,
 offset: ["start end", "end start"],
 });
 const imgY = useTransform(
 scrollYProgress,
 [0, 1],
 reduceMotion ? [0, 0] : [24, -24],
 );
 const imgScale = useTransform(
 scrollYProgress,
 [0, 0.5, 1],
 reduceMotion ? [1, 1, 1] : [1.05, 1, 1.03],
 );

 return (
 <section ref={sectionRef} className="border-b border-yp-line bg-white py-12 sm:py-16 lg:py-18">
 <div className="yp-container grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
 <motion.div
 className="order-2 lg:order-1 lg:col-span-6"
 initial={{ opacity: 0, y: 28 }}
 animate={inView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 >
 <p className="eyebrow">About Yash Ply &amp; Hardware</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] sm:text-3xl lg:text-4xl">
 The Right Materials.
 <br className="hidden sm:block" /> Under One Roof.
 </h2>
 <p className="mt-4 max-w-xl text-sm leading-relaxed text-yp-mist sm:text-[15px]">
 Yash Ply &amp; Hardware offers a wide range of plywood and hardware solutions for
 furniture, interiors, construction and other applications. With a broad product
 selection across plywood and leading hardware brands, we help customers find materials
 suited to their requirements.
 </p>

 <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
 {facts.map((fact, i) => (
 <FactCard
 key={fact.n}
 fact={fact}
 open={active === i}
 onOpen={() => setActive(i)}
 />
 ))}
 </div>

 <motion.div
 className="mt-7 sm:mt-8"
 whileHover={{ x: 2 }}
 transition={{ type: "spring", stiffness: 400, damping: 28 }}
 >
 <Link to="/about" className="btn-ghost group w-full sm:w-auto">
 Know More About Us
 <ArrowUpRight
 size={15}
 className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
 />
 </Link>
 </motion.div>
 </motion.div>

 <motion.div
 className="order-1 lg:order-2 lg:col-span-6"
 initial={{ opacity: 0, y: 36 }}
 animate={inView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
 >
 <motion.div
 onHoverStart={() => setImgHover(true)}
 onHoverEnd={() => setImgHover(false)}
 whileHover={{ scale: 0.985 }}
 whileTap={{ scale: 0.97 }}
 transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
 className="relative overflow-hidden rounded-[1.25rem]"
 >
 <motion.img
 src="/about_component_image.png"
 alt="Yash Ply & Hardware materials and interiors"
 style={reduceMotion ? undefined : { y: imgY, scale: imgScale }}
 className="aspect-[16/11] w-full object-cover sm:aspect-[5/4] lg:aspect-[16/12]"
 animate={{
 filter: imgHover && !reduceMotion ? "brightness(1.04)" : "brightness(1)",
 }}
 transition={{ duration: 0.5 }}
 />
 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yp-espresso/40 via-transparent to-transparent" />
 {!reduceMotion && (
 <motion.div
 className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
 animate={{ x: imgHover ? "280%" : "-10%" }}
 transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
 />
 )}
 <p className="absolute bottom-4 left-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85 sm:bottom-5 sm:left-5">
 Bhavani Peth · Pune
 </p>
 </motion.div>
 </motion.div>
 </div>
 </section>
 );
}
