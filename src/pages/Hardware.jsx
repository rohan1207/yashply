import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import CatalogueCard from "../components/CatalogueCard";
import {
  hardwareBrands,
  hardwareCatalogue,
} from "../data/content";

const hardwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Furniture Hardware in Pune | Hinges, Channels, Sliding Fittings | Yashply",
  description:
    "Buy furniture hardware in Pune, hinges, telescopic channels, sliding wardrobe fittings and more from Hettich, Häfele, EBCO, Blum, Godrej and other brands at Yash Ply & Hardware.",
  url: "https://yashply.com/hardware",
  isPartOf: {
    "@type": "WebSite",
    name: "Yashply",
    url: "https://yashply.com/",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Hardware categories at Yashply",
    numberOfItems: hardwareCatalogue.length,
    itemListElement: hardwareCatalogue.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `https://yashply.com/hardware/${item.slug}`,
      description: item.summary || item.eyebrow || undefined,
    })),
  },
  about: {
    "@type": "LocalBusiness",
    name: "Yash Ply & Hardware",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop no. 1 Seyash Aadya, Paud Road, Bhusari Colony, Kothrud",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411038",
      addressCountry: "IN",
    },
  },
  brand: hardwareBrands.map((b) => ({
    "@type": "Brand",
    name: b.name,
  })),
};

export default function Hardware() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <SEO
        title="Furniture Hardware in Pune | Hinges, Channels & Sliding Fittings"
        description="Buy furniture hardware in Pune at Yash Ply & Hardware, hinges, telescopic channels, sliding wardrobe fittings and more from Hettich, Häfele, EBCO, Blum, Godrej and other leading brands. Ready stock at Kothrud."
        keywords="furniture hardware Pune, hinges Pune, soft close hinges, telescopic channels Pune, drawer channels, sliding wardrobe fittings Pune, Hettich Pune, Häfele Pune, EBCO, Blum, Godrej hardware, kitchen hardware Pune, Yashply hardware, Yash Ply & Hardware"
        image="/hardware_page_hero.png"
        path="/hardware"
        jsonLd={hardwareJsonLd}
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[88svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[92svh]"
      >
        <motion.img
          src="/hardware_page_hero.png"
          alt="Furniture hinges channels and fittings at Yash Ply & Hardware Pune"
          style={{ y: imgY, scale: 1.08 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.1]" />

        <motion.div
          style={{ y: titleY, opacity: titleOp }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-16 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:px-12"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-copper sm:text-[14px]">
            Hardware
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[1.02] tracking-tight">
            Hardware That Completes Your Furniture.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            From everyday furniture fittings to special hardware, a wide range from trusted brands,
            all under one roof.
          </p>
          <a
            href="#categories"
            className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
          >
            See categories
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </section>

      <section id="categories" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Common Categories</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
                Popular hardware we stock every day.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                These are the categories customers ask for most. Our full hardware range is much
                larger, tell us what you need and we will match the right brand and fitting.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {hardwareCatalogue.map((item, i) => (
              <CatalogueCard
                key={item.slug}
                id={item.slug}
                product={item}
                index={i}
                href={`/hardware/${item.slug}`}
                cta="See Details"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-yp-line bg-yp-sand yp-section">
        <div className="yp-container">
          <Reveal>
            <div id="brands" className="mx-auto max-w-2xl scroll-mt-[var(--header-h)] text-center">
              <p className="eyebrow">Brands</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
                Top brands. Wide choice.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                We stock hardware from Hettich, Häfele, EBCO, Blum, Godrej and more, so the fitting
                can match your plywood, in one place.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {hardwareBrands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="flex h-24 items-center justify-center rounded-[1.15rem] border border-yp-line bg-white px-4 transition hover:border-yp-espresso/20 hover:shadow-soft sm:h-28 sm:rounded-[1.35rem]"
              >
                <img
                  src={brand.src}
                  alt={`${brand.name} hardware at Yash Ply Pune`}
                  className="max-h-9 max-w-full object-contain sm:max-h-11"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/brands"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-yp-espresso transition hover:text-yp-red"
            >
              See All Brands
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="yp-container pb-16 sm:pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[1.35rem] bg-yp-espresso px-6 py-12 text-center text-yp-ivory sm:rounded-[1.75rem] sm:px-10 sm:py-16">
            <p className="eyebrow text-yp-gold">Need help choosing?</p>
            <h2 className="mx-auto mt-3 max-w-lg font-display text-[clamp(1.6rem,4vw,2.6rem)] leading-tight">
              Not sure which fitting for your doors?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
              Tell us the door type and thickness, we will suggest hinges, channels or sliding
              kits.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="hero-cta-solid inline-flex items-center justify-center gap-1"
              >
                Help Me Choose
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/quote" className="btn-ghost-light">
                Get a Quote
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
