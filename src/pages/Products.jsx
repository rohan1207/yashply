import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import CatalogueCard from "../components/CatalogueCard";
import {
  hardwareCatalogue,
  images,
  plywoodCatalogue,
  site,
} from "../data/content";

const families = [
  { id: "plywood", label: "Plywood", meta: `${plywoodCatalogue.length} products` },
  { id: "hardware", label: "Hardware", meta: `${hardwareCatalogue.length} categories` },
];

const pick = [
  {
    n: "01",
    title: "Everyday furniture & interiors",
    text: "Cabinets, wardrobes and partitions in dry rooms. Start with Alt Gurjan Commercial or Redcore.",
    href: "/plywood/alt-gurjan-commercial-ply",
    label: "Alt Gurjan Commercial",
  },
  {
    n: "02",
    title: "Kitchens & humid zones",
    text: "Steam and monsoon moisture need a tougher bond. Redcore BWP is the yard pick for wet-adjacent work.",
    href: "/plywood/redcore-bwp-ply",
    label: "Redcore BWP",
  },
  {
    n: "03",
    title: "Long shutters & tops",
    text: "Large flat panels that must stay true. Pine or hardwood blockboard keeps weight and warp in check.",
    href: "/plywood/blockboard-double-core-pine",
    label: "Double Core Pine",
  },
  {
    n: "04",
    title: "Fittings for the same room",
    text: "Hinges, channels and sliding kits stocked next to the sheet — one conversation for the full build.",
    href: "/hardware/hinges",
    label: "Hardware range",
  },
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
  const { hash } = useLocation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = hash.replace("#", "");
    if (!id) return;
    const t = window.setTimeout(() => scrollToId(id), 80);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <>
      <SEO
        title="Products"
        description="Plywood, blockboards, shuttering ply and furniture hardware from Yash Ply & Hardware, Pune."
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[78svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
      >
        <motion.img
          src={images.layers || "/products/plywood.png"}
          alt=""
          style={{ y: imgY, scale: 1.06 }}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-yp-espresso/70 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.1]" />
        <motion.div
          style={{ opacity: titleOp }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-14 pt-[calc(var(--header-h)+3rem)] sm:px-8 sm:pb-16 lg:px-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-gold">
            Products
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.35rem,6.5vw,4.75rem)] font-medium leading-[0.98]">
            Plywood &amp; hardware.
            <br />
            One yard.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70 sm:text-lg">
            From commercial and BWP plywood to blockboards, shuttering sheets and furniture fittings —
            stocked in Pune for furniture, interiors and specialised work.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {families.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold text-white/85 transition hover:border-yp-gold hover:bg-yp-gold hover:text-yp-espresso"
              >
                {f.label}
              </a>
            ))}
          </div>
          <a
            href="#plywood"
            className="mt-10 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white"
          >
            Browse catalogue
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
              <span>Commercial · BWP · Calibrated</span>
              <span className="text-yp-gold">·</span>
              <span>Blockboard · Shuttering</span>
              <span className="text-yp-gold">·</span>
              <span>Hinges · Channels · Sliding</span>
              <span className="text-yp-gold">·</span>
              <span>Pune ready stock</span>
              <span className="text-yp-gold">·</span>
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
              className="shrink-0 rounded-full border border-yp-line px-4 py-2 text-[12px] font-semibold text-yp-espresso transition hover:border-yp-espresso hover:bg-yp-espresso hover:text-yp-gold"
            >
              {f.label}
              <span className="ml-2 hidden text-yp-mist sm:inline">{f.meta}</span>
            </a>
          ))}
          <Link
            to="/quote"
            className="shrink-0 rounded-full bg-yp-gold px-4 py-2 text-[12px] font-semibold text-yp-espresso"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Plywood */}
      <section
        id="plywood"
        className="scroll-mt-[calc(var(--header-h)+3.75rem)] border-b border-yp-line py-12 sm:py-16 lg:py-20"
      >
        <div className="yp-container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Plywood</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] tracking-tight sm:text-3xl lg:text-4xl">
                Sheets for every requirement.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                Commercial, BWP, calibrated, packaging, truck flooring, blockboard and shuttering —
                with sizes and thicknesses ready at the yard.
              </p>
            </div>
            <Link to="/plywood" className="btn-ghost w-fit shrink-0">
              View all plywood
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
            {plywoodCatalogue.map((product, i) => (
              <CatalogueCard
                key={product.slug}
                product={product}
                index={i}
                href={`/plywood/${product.slug}`}
                cta="View Details"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section
        id="hardware"
        className="scroll-mt-[calc(var(--header-h)+3.75rem)] bg-yp-sand py-12 sm:py-16 lg:py-20"
      >
        <div className="yp-container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Hardware</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] tracking-tight sm:text-3xl lg:text-4xl">
                Fittings from leading brands.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                Hinges, telescopic channels, sliding wardrobe systems and more — Hettich, Häfele,
                EBCO, Blum, Godrej and others under one roof.
              </p>
            </div>
            <Link to="/hardware" className="btn-ghost w-fit shrink-0">
              View all hardware
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {hardwareCatalogue.map((item, i) => (
              <CatalogueCard
                key={item.slug}
                product={item}
                index={i}
                href={`/hardware/${item.slug}`}
                cta="View Details"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to pick */}
      <section className="border-t border-yp-line py-12 sm:py-16 lg:py-20">
        <div className="yp-container">
          <p className="eyebrow">How to pick</p>
          <h2 className="mt-3 max-w-2xl font-display text-[1.85rem] leading-tight sm:text-4xl">
            Start with the room, not the rate.
          </h2>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2">
            {pick.map((card) => (
              <Link
                key={card.n}
                to={card.href}
                className="group rounded-[1.25rem] border border-yp-line bg-white p-5 transition duration-300 hover:border-yp-espresso hover:bg-yp-espresso hover:text-yp-ivory sm:rounded-[1.35rem] sm:p-7"
              >
                <p className="font-display text-[11px] text-yp-gold">{card.n}</p>
                <h3 className="mt-3 font-display text-xl leading-tight sm:text-2xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-yp-mist group-hover:text-white/65">
                  {card.text}
                </p>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-yp-espresso/45 group-hover:text-yp-gold">
                  {card.label} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="yp-container pb-16 sm:pb-24">
        <div className="overflow-hidden rounded-[1.25rem] bg-yp-espresso text-yp-ivory sm:rounded-[1.5rem] lg:grid lg:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-9 sm:px-10 sm:py-12 lg:col-span-7 lg:px-12 lg:py-14">
            <p className="eyebrow text-yp-gold">Not sure</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">
              Tell us the room. We map the product.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Share thickness, quantity or a photo of the brief. {site.contactPerson} will confirm
              stock and options from the Pune yard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quote" className="btn-primary">
                Get a Quote
                <ArrowUpRight size={15} />
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light">
                Call {site.phone}
              </a>
            </div>
          </div>
          <div className="relative min-h-[14rem] lg:col-span-5 lg:min-h-[22rem]">
            <img
              src={images.stack || "/about_component_image.png"}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/50 to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </section>
    </>
  );
}
