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
    alt: "Plywood sheets for furniture and interiors in Pune",
    text: "Commercial, waterproof, calibrated, packaging, truck flooring, blockboard and shuttering, in sizes you need.",
    href: "/plywood",
    cta: "Explore Plywood",
  },
  {
    id: "hardware",
    title: "Hardware",
    image: "/products/hardware.png",
    alt: "Furniture hinges channels and fittings in Pune",
    text: "Hinges, drawer channels, sliding wardrobe fittings and more from trusted brands, all in one place.",
    href: "/hardware",
    cta: "Explore Hardware",
  },
  {
    id: "laminates",
    title: "Laminates",
    image: "/solid_laminate.png",
    alt: "Laminate sheets colours and woodgrains in Pune",
    text: "Plain colours, wood looks, stone looks, textures, gloss and matte, Merino, Royale Touche, Greenlam and Century.",
    href: "/laminates",
    cta: "Explore Laminates",
  },
  {
    id: "veneers",
    title: "Veneers",
    image: "/natural_veneers.png",
    alt: "Natural wood veneers for furniture in Pune",
    text: "Natural and reconstituted veneers in light, medium and dark shades for furniture and wall panels.",
    href: "/veneers",
    cta: "Explore Veneers",
  },
];

function CategoryCard({ item, index, inView, reduceMotion }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: 0.08 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col"
    >
      <Link
        to={item.href}
        className="relative mx-auto flex h-full w-full max-w-[22rem] flex-col items-center outline-none"
      >
        <div className="relative flex h-[9.5rem] w-full shrink-0 items-end justify-center sm:h-[14rem] lg:h-[15.5rem]">
          <div
            aria-hidden
            className="absolute bottom-2 left-1/2 h-8 w-[68%] -translate-x-1/2 rounded-[100%] bg-yp-espresso/[0.12] blur-xl transition duration-500 group-hover:w-[74%] group-hover:bg-yp-espresso/[0.16] sm:h-10"
          />
          <motion.img
            src={item.image}
            alt={item.alt}
            draggable={false}
            className="relative z-10 max-h-full w-[82%] select-none object-contain drop-shadow-[0_28px_40px_rgba(26,26,26,0.16)] transition duration-500 group-hover:-translate-y-2 group-hover:scale-[1.035] sm:w-[78%]"
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 5.5 + index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }
            }
          />
        </div>

        <div className="mt-5 flex w-full flex-1 flex-col items-center text-center sm:mt-8">
          <h3 className="font-display text-lg tracking-tight text-yp-espresso sm:text-[1.65rem]">
            {item.title}
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-[12px] leading-relaxed text-yp-mist sm:mt-4 sm:text-[14px]">
            {item.text}
          </p>
          <span className="btn-ghost mt-6 inline-flex shrink-0 items-center justify-center self-center sm:mt-8">
            <span className="leading-none">{item.cta}</span>
            <ArrowUpRight
              size={15}
              className="shrink-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
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
      className="relative overflow-hidden border-b border-yp-line bg-yp-sand py-12 sm:py-20 lg:py-24"
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
            Four product lines. Everything you need.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-yp-mist sm:text-[15px]">
            Plywood, hardware, laminates and veneers, each with clear options and a simple next
            step.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 items-stretch gap-x-2.5 gap-y-10 sm:mt-14 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4 lg:gap-6 xl:gap-8">
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
