import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
 motion,
 useInView,
 useReducedMotion,
} from "framer-motion";

const categories = [
 {
 id: "plywood",
 title: "Plywood",
 image: "/products/plywood.png",
 alt: "Stack of plywood sheets",
 text: "From commercial and BWP plywood to blockboards, shuttering ply, packaging ply, truck flooring ply and more.",
 href: "/plywood",
 cta: "Explore Plywood",
 },
 {
 id: "hardware",
 title: "Hardware",
 image: "/products/hardware.png",
 alt: "Furniture and interior hardware fittings",
 text: "A wide range of furniture and interior hardware including hinges, telescopic channels, sliding wardrobe fittings and more.",
 href: "/hardware",
 cta: "Explore Hardware",
 },
];

function CategoryCard({ item, index, inView, reduceMotion }) {
 return (
 <motion.article
 initial={{ opacity: 0, y: 36 }}
 animate={inView ? { opacity: 1, y: 0 } : {}}
 transition={{
 duration: 0.75,
 delay: 0.08 + index * 0.1,
 ease: [0.22, 1, 0.36, 1],
 }}
 className="group relative flex h-full flex-col"
 >
 <Link
 to={item.href}
 className="relative mx-auto flex h-full w-full max-w-[22rem] flex-col items-center outline-none"
 >
 <div className="relative flex h-[11rem] w-full shrink-0 items-end justify-center sm:h-[17.5rem] lg:h-[19rem]">
 {/* soft floor glow, sells the floating cutout */}
 <div
 aria-hidden
 className="absolute bottom-2 left-1/2 h-8 w-[68%] -translate-x-1/2 rounded-[100%] bg-yp-espresso/[0.12] blur-xl transition duration-500 group-hover:w-[74%] group-hover:bg-yp-espresso/[0.16] sm:h-10"
 />
 <div
 aria-hidden
 className="absolute bottom-5 left-1/2 h-3 w-[48%] -translate-x-1/2 rounded-[100%] bg-yp-espresso/20 blur-[6px] transition duration-500 group-hover:scale-x-110"
 />

 <motion.img
 src={item.image}
 alt={item.alt}
 draggable={false}
 className="relative z-10 max-h-full w-[88%] select-none object-contain drop-shadow-[0_28px_40px_rgba(26,26,26,0.18)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:scale-[1.035] group-hover:drop-shadow-[0_36px_48px_rgba(26,26,26,0.22)] sm:w-[84%]"
 animate={
 reduceMotion
 ? undefined
 : {
 y: [0, -6, 0],
 }
 }
 transition={
 reduceMotion
 ? undefined
 : {
 duration: 5.5 + index * 0.4,
 repeat: Infinity,
 ease: "easeInOut",
 delay: index * 0.35,
 }
 }
 />
 </div>

 <div className="mt-5 flex w-full flex-1 flex-col text-center sm:mt-8">
 <h3 className="font-display text-lg tracking-tight text-yp-espresso sm:text-[1.75rem]">
 {item.title}
 </h3>
 <p className="mx-auto mt-2 max-w-sm text-[12px] leading-relaxed text-yp-mist sm:mt-3 sm:text-[15px]">
 {item.text}
 </p>
 <span className="btn-ghost mt-auto inline-flex self-center pt-4 sm:pt-6">
 {item.cta}
 <ArrowUpRight
 size={15}
 className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
 />
 </span>
 </div>
 </Link>
 </motion.article>
 );
}

export default function OurProducts() {
 const ref = useRef(null);
 const inView = useInView(ref, { once: true, margin: "-12%" });
 const reduceMotion = useReducedMotion();

 return (
 <section
 ref={ref}
 className="relative overflow-hidden border-b border-yp-line bg-[#F7F5F2] py-12 sm:py-20 lg:py-24"
 >
 <div
 aria-hidden
 className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
 />

 <div className="yp-container relative">
 <motion.div
 className="mx-auto max-w-2xl text-center"
 initial={{ opacity: 0, y: 22 }}
 animate={inView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 >
 <p className="eyebrow">Our Products</p>
 <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
 Two lines. Everything you need.
 </h2>
 </motion.div>

 <div className="mt-10 grid grid-cols-2 items-stretch gap-2.5 sm:mt-16 sm:gap-14 lg:mt-18 lg:grid-cols-2 lg:gap-10 xl:gap-16">
 {categories.map((item, i) => (
 <CategoryCard
 key={item.id}
 item={item}
 index={i}
 inView={inView}
 reduceMotion={reduceMotion}
 />
 ))}
 </div>
 </div>
 </section>
 );
}
