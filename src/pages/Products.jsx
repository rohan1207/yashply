import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import CatalogueCard from "../components/CatalogueCard";
import {
  hardwareCatalogue,
  laminatesCatalogue,
  plywoodCatalogue,
  site,
  veneersCatalogue,
} from "../data/content";

const families = [
  { id: "plywood", label: "Plywood", meta: `${plywoodCatalogue.length} products`, cta: "Explore Plywood", href: "/plywood" },
  { id: "hardware", label: "Hardware", meta: `${hardwareCatalogue.length} categories`, cta: "Explore Hardware", href: "/hardware" },
  { id: "laminates", label: "Laminates", meta: `${laminatesCatalogue.length} types`, cta: "Explore Laminates", href: "/laminates" },
  { id: "veneers", label: "Veneers", meta: `${veneersCatalogue.length} types`, cta: "Explore Veneers", href: "/veneers" },
];

const sections = [
  {
    id: "plywood",
    eyebrow: "Plywood",
    title: "Plywood for every job.",
    text: "Commercial, waterproof (BWP), calibrated, packaging, truck flooring, blockboard and shuttering, with sizes, thicknesses and uses on each product.",
    cta: "Explore Plywood",
    href: "/plywood",
    items: plywoodCatalogue,
    base: "/plywood",
  },
  {
    id: "hardware",
    eyebrow: "Hardware",
    title: "Fittings from trusted brands.",
    text: "Hinges, drawer channels, sliding systems and more, types, brands and where each fitting is used.",
    cta: "Explore Hardware",
    href: "/hardware",
    items: hardwareCatalogue,
    base: "/hardware",
    sand: true,
  },
  {
    id: "laminates",
    eyebrow: "Laminates",
    title: "Colours, looks and finishes.",
    text: "Plain colours, wood looks, stone looks, textures, decorative prints, gloss and matte, from Merino, Royale Touche, Greenlam and Century.",
    cta: "Explore Laminates",
    href: "/laminates",
    items: laminatesCatalogue,
    base: "/laminates",
  },
  {
    id: "veneers",
    eyebrow: "Veneers",
    title: "Natural wood or matching sets.",
    text: "Natural and reconstituted veneers in light, medium and dark shades, with clear uses and finish tips for each type.",
    cta: "Explore Veneers",
    href: "/veneers",
    items: veneersCatalogue,
    base: "/veneers",
    sand: true,
  },
];

const pick = [
  {
    n: "01",
    title: "Everyday furniture & interiors",
    text: "Cabinets and wardrobes in dry rooms. Start with commercial plywood, then choose a laminate or veneer top.",
    href: "/plywood/alt-gurjan-commercial-ply",
    label: "Explore Plywood",
  },
  {
    n: "02",
    title: "Kitchens & wet areas",
    text: "Use BWP waterproof plywood plus the right laminate. We help you match the grade to steam and monsoon.",
    href: "/plywood/redcore-bwp-ply",
    label: "Redcore BWP",
  },
  {
    n: "03",
    title: "Look & finish",
    text: "Plain colour, wood look or stone laminate, or a natural veneer for a premium look. Choose by finish first.",
    href: "/laminates",
    label: "Explore Laminates",
  },
  {
    n: "04",
    title: "Need help choosing?",
    text: "Tell us the room, how many shutters and the look you want. We will suggest plywood, surface and fittings together.",
    href: "/contact",
    label: "Help Me Choose",
  },
];

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Plywood, Hardware, Laminates & Veneers | Yashply Pune",
  description:
    "Browse plywood, furniture hardware, laminates and veneers at Yash Ply & Hardware, Pune. ISI certified sheets, trusted brands, ready stock.",
  url: "https://yashply.com/products",
  isPartOf: {
    "@type": "WebSite",
    name: "Yashply",
    url: "https://yashply.com/",
  },
  about: [
    { "@type": "Thing", name: "Plywood" },
    { "@type": "Thing", name: "Furniture Hardware" },
    { "@type": "Thing", name: "Laminates" },
    { "@type": "Thing", name: "Wood Veneers" },
  ],
  mainEntity: {
    "@type": "ItemList",
    name: "Yashply product lines",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Plywood",
        url: "https://yashply.com/plywood",
        description: `${plywoodCatalogue.length} plywood and board products`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hardware",
        url: "https://yashply.com/hardware",
        description: `${hardwareCatalogue.length} hardware categories`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Laminates",
        url: "https://yashply.com/laminates",
        description: `${laminatesCatalogue.length} laminate types`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Veneers",
        url: "https://yashply.com/veneers",
        description: `${veneersCatalogue.length} veneer types`,
      },
    ],
  },
};

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
        title="Plywood, Hardware, Laminates & Veneers | Products in Pune"
        description="Shop plywood, furniture hardware, laminates and veneers in Pune at Yash Ply & Hardware. Commercial & BWP plywood, hinges, channels, Merino Greenlam Century laminates, wood veneers, ready stock at Kothrud."
        keywords="plywood products Pune, buy plywood Pune, furniture hardware Pune, laminates Pune, veneers Pune, BWP plywood, commercial plywood, blockboard, hinges channels sliding fittings, Merino laminates, Greenlam, Century laminates, Yashply products, Yash Ply & Hardware"
        image="/product_page_desktop.png"
        path="/products"
        jsonLd={productsJsonLd}
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[78svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: imgY }}
            className="absolute inset-x-0 top-0 h-[118%] w-full origin-top will-change-transform"
          >
            <img
              src="/product_page_phone.png"
              alt="Plywood hardware laminates and veneers at Yash Ply Pune"
              className="absolute inset-0 h-full w-full object-cover object-top md:hidden"
            />
            <img
              src="/product_page_desktop.png"
              alt="Plywood hardware laminates and veneers at Yash Ply Pune"
              className="absolute inset-0 hidden h-full w-full object-cover object-top md:block"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-yp-espresso/70 to-yp-espresso" />
        <motion.div
          style={{ opacity: titleOp }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-14 pt-[calc(var(--header-h)+3rem)] sm:px-8 sm:pb-16 lg:px-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-gold">Products</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.35rem,6.5vw,4.75rem)] font-medium leading-[0.98]">
            Plywood. Hardware.
            <br />
            Laminates. Veneers.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70 sm:text-lg">
            Browse each line with clear types, finishes and uses, and a simple next step on every
            product.
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
            Browse products
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </section>

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
            to="/contact"
            className="shrink-0 rounded-full border border-yp-espresso/20 px-4 py-2 text-[12px] font-semibold text-yp-espresso"
          >
            Help Me Choose
          </Link>
          <Link
            to="/quote"
            className="shrink-0 rounded-full bg-yp-gold px-4 py-2 text-[12px] font-semibold text-yp-espresso"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {sections.map((sec) => (
        <section
          key={sec.id}
          id={sec.id}
          className={`scroll-mt-[calc(var(--header-h)+3.75rem)] border-b border-yp-line py-12 sm:py-16 lg:py-20 ${
            sec.sand ? "bg-yp-sand" : "bg-white"
          }`}
        >
          <div className="yp-container">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow">{sec.eyebrow}</p>
                <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] tracking-tight sm:text-3xl lg:text-4xl">
                  {sec.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                  {sec.text}
                </p>
              </div>
              <Link to={sec.href} className="btn-ghost w-fit shrink-0">
                {sec.cta}
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div
              className={`mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-5 lg:gap-6 ${
                sec.items.length > 4 ? "lg:grid-cols-3 xl:grid-cols-4" : "lg:grid-cols-4"
              }`}
            >
              {sec.items.map((product, i) => (
                <CatalogueCard
                  key={product.slug}
                  product={product}
                  index={i}
                  href={`${sec.base}/${product.slug}`}
                  cta="See Details"
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-yp-line py-12 sm:py-16 lg:py-20">
        <div className="yp-container">
          <p className="eyebrow">How to choose</p>
          <h2 className="mt-3 max-w-2xl font-display text-[1.85rem] leading-tight sm:text-4xl">
            Start with the room, not the price.
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

      <section className="yp-container pb-16 sm:pb-24">
        <div className="overflow-hidden rounded-[1.25rem] bg-yp-espresso text-yp-ivory sm:rounded-[1.5rem] lg:grid lg:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-9 sm:px-10 sm:py-12 lg:col-span-7 lg:px-12 lg:py-14">
            <p className="eyebrow text-yp-gold">Full requirement</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">
              Have a full materials list ready?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Send quantities and what you prefer. {site.contactPerson} will confirm stock and
              options from our Pune yard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quote" className="btn-primary">
                Get a Quote
                <ArrowUpRight size={15} />
              </Link>
              <Link to="/contact" className="btn-ghost-light">
                Help Me Choose
              </Link>
            </div>
          </div>
          <div className="relative min-h-[14rem] lg:col-span-5 lg:min-h-[22rem]">
            <img
              src="/general_req.png"
              alt="Ask Yash Ply Pune for a full materials quote"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/50 to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </section>
    </>
  );
}
