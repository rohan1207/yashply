import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import CatalogueCard from "../components/CatalogueCard";
import { laminateBrands, laminatesCatalogue } from "../data/content";

const laminatesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Laminates in Pune | Colours, Wood Looks & Finishes | Yashply",
  description:
    "Buy laminates in Pune, plain colours, wood looks, stone looks, textures, gloss and matte from Merino, Royale Touche, Greenlam and Century at Yash Ply & Hardware.",
  url: "https://yashply.com/laminates",
  isPartOf: {
    "@type": "WebSite",
    name: "Yashply",
    url: "https://yashply.com/",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Laminate types at Yashply",
    numberOfItems: laminatesCatalogue.length,
    itemListElement: laminatesCatalogue.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `https://yashply.com/laminates/${item.slug}`,
      description: item.summary || item.eyebrow || undefined,
    })),
  },
  brand: laminateBrands.map((b) => ({
    "@type": "Brand",
    name: b.name,
  })),
  about: {
    "@type": "LocalBusiness",
    name: "Yash Ply & Hardware",
    address: {
      "@type": "PostalAddress",
      streetAddress: "86, New Timber Market, Bhavani Peth",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411042",
      addressCountry: "IN",
    },
  },
};

export default function Laminates() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <SEO
        title="Laminates in Pune | Colours, Wood Looks, Gloss & Matte"
        description="Buy laminates in Pune at Yash Ply & Hardware, plain colours, wood looks, stone looks, textures, gloss and matte. Merino, Royale Touche, Greenlam and Century laminates with advice for your plywood and fittings."
        keywords="laminates Pune, buy laminates Pune, Merino laminates Pune, Greenlam laminates, Century laminates, Royale Touche laminates, woodgrain laminate, gloss laminate, matte laminate, kitchen laminate Pune, wardrobe laminate, Yashply laminates, Yash Ply & Hardware"
        image="/woodgrains_laminate.png"
        path="/laminates"
        jsonLd={laminatesJsonLd}
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[78svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
      >
        <motion.img
          src="/woodgrains_laminate.png"
          alt="Laminate colours and finishes at Yash Ply & Hardware Pune"
          style={{ y: imgY, scale: 1.05 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-yp-espresso/55 to-yp-espresso" />
        <motion.div
          style={{ opacity: titleOp }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-14 pt-[calc(var(--header-h)+3rem)] sm:px-8 sm:pb-16 lg:px-12"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-gold">Laminates</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.3rem,6.5vw,4.8rem)] font-medium leading-[1.02]">
            Colours, Looks & Finishes.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-lg">
            Plain colours, wood looks, stone looks, textures, gloss and matte, from Merino, Royale
            Touche, Greenlam and Century.
          </p>
          <a
            href="#types"
            className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
          >
            See laminate types
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </section>

      <section id="types" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow">Types & options</p>
                <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
                  Pick the look, then the brand.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                  Each type covers colours, finishes and where it works best. Open a type for full
                  details, then ask us for shades available at the yard.
                </p>
              </div>
              <Link to="/quote?product=Laminates" className="btn-ghost w-fit shrink-0">
                Enquire Now
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {laminatesCatalogue.map((item, i) => (
              <CatalogueCard
                key={item.slug}
                id={item.slug}
                product={item}
                index={i}
                href={`/laminates/${item.slug}`}
                cta="See Details"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-yp-line bg-yp-sand yp-section">
        <div className="yp-container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Brands we stock</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl">
                Trusted laminate brands.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist">
                Brand catalogues help you choose colours, textures and finishes. We fulfil your
                order at Yash Ply & Hardware, and help match laminate to your plywood and hardware.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {laminateBrands.map((b) => (
              <div
                key={b.name}
                className="rounded-[1.15rem] border border-yp-line bg-white px-5 py-5 text-center"
              >
                <p className="font-display text-lg text-yp-espresso">{b.name}</p>
                <p className="mt-2 text-[12px] leading-relaxed text-yp-mist">{b.focus}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/brands" className="btn-ghost inline-flex">
              See All Brands
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="yp-container pb-16 sm:pb-24">
        <div className="overflow-hidden rounded-[1.35rem] bg-yp-espresso px-6 py-12 text-center text-yp-ivory sm:rounded-[1.75rem] sm:px-10 sm:py-16">
          <p className="eyebrow text-yp-gold">Need help choosing?</p>
          <h2 className="mx-auto mt-3 max-w-lg font-display text-[clamp(1.55rem,4vw,2.5rem)] leading-tight">
            Not sure between gloss wood look and matte plain colour?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
            Tell us the room, we will suggest finishes and shades that work with your plywood and
            fittings.
          </p>
          <Link
            to="/contact"
            className="hero-cta-solid mt-8 inline-flex items-center justify-center gap-1"
          >
            Help Me Choose
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
