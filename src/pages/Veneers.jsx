import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import CatalogueCard from "../components/CatalogueCard";
import { veneersCatalogue } from "../data/content";

const veneersJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Wood Veneers in Pune | Natural & Reconstituted | Yashply",
  description:
    "Buy wood veneers in Pune, natural and reconstituted veneers in light, medium and dark tones for furniture and panelling. CenturyVeneers reference ranges at Yash Ply & Hardware.",
  url: "https://yashply.com/veneers",
  isPartOf: {
    "@type": "WebSite",
    name: "Yashply",
    url: "https://yashply.com/",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Veneer types at Yashply",
    numberOfItems: veneersCatalogue.length,
    itemListElement: veneersCatalogue.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `https://yashply.com/veneers/${item.slug}`,
      description: item.summary || item.eyebrow || undefined,
    })),
  },
  brand: veneerBrands.map((b) => ({
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

export default function Veneers() {
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
        title="Wood Veneers in Pune | Natural & Reconstituted Veneers"
        description="Buy wood veneers in Pune at Yash Ply & Hardware, natural and reconstituted veneers in light, medium and dark tones for furniture, wardrobes and wall panelling. CenturyVeneers collections as reference."
        keywords="veneers Pune, wood veneers Pune, buy veneers Pune, natural veneers, reconstituted veneers, engineered veneers, CenturyVeneers Pune, light oak veneer, dark veneer, furniture veneer Pune, Yashply veneers, Yash Ply & Hardware"
        image="/natural_veneers.png"
        path="/veneers"
        jsonLd={veneersJsonLd}
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[78svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
      >
        <motion.img
          src="/natural_veneers.png"
          alt="Natural and reconstituted wood veneers at Yash Ply & Hardware Pune"
          style={{ y: imgY, scale: 1.05 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-yp-espresso/50 to-yp-espresso" />
        <motion.div
          style={{ opacity: titleOp }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-14 pt-[calc(var(--header-h)+3rem)] sm:px-8 sm:pb-16 lg:px-12"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-gold">Veneers</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.3rem,6.5vw,4.8rem)] font-medium leading-[1.02]">
            Real Wood Look. Easy to Match.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-lg">
            Natural and reconstituted veneers in light, medium and dark shades, for furniture, wall
            panels and premium doors.
          </p>
          <a
            href="#types"
            className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
          >
            See veneer types
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
                  Natural look or matching sets.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                  Choose by type and shade. Each page covers finishes, uses and how we help you pair
                  veneer with the right plywood base.
                </p>
              </div>
              <Link to="/quote?product=Veneers" className="btn-ghost w-fit shrink-0">
                Enquire Now
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {veneersCatalogue.map((item, i) => (
              <CatalogueCard
                key={item.slug}
                id={item.slug}
                product={item}
                index={i}
                href={`/veneers/${item.slug}`}
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
              <p className="eyebrow">How we help you choose</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl">
                Four veneer paths. Clear advice.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist">
                We use CenturyVeneers collections as a guide for types, shades and finishes, then
                help you pick the right path for your room and shutter count.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {veneersCatalogue.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.04}>
                <Link
                  to={`/veneers/${item.slug}`}
                  className="group flex h-full flex-col rounded-[1.15rem] border border-yp-line bg-white p-4 transition hover:border-yp-espresso sm:rounded-[1.35rem] sm:p-5"
                >
                  <p className="font-display text-[11px] tabular-nums text-yp-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-[0.95rem] leading-tight text-yp-espresso sm:text-lg">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[12px] leading-snug text-yp-mist sm:text-[13px]">
                    {item.grade}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-yp-espresso/50 transition group-hover:text-yp-red">
                    See type
                    <ArrowUpRight size={13} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-yp-line bg-white sm:mt-10 sm:rounded-[1.5rem]">
            <div className="grid items-center gap-4 px-5 py-5 sm:grid-cols-[1fr_auto] sm:gap-6 sm:px-8 sm:py-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yp-gold">
                  Brand reference
                </p>
                <p className="mt-1.5 font-display text-xl text-yp-espresso sm:text-2xl">
                  CenturyVeneers
                </p>
                <p className="mt-1 text-sm text-yp-mist">
                  Natural and reconstituted collections used as a guide for tone and finish.
                </p>
              </div>
              <Link
                to="/quote?product=Veneers"
                className="btn-ghost w-fit shrink-0"
              >
                Enquire for veneers
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="yp-container pb-16 sm:pb-24">
        <div className="overflow-hidden rounded-[1.35rem] bg-yp-espresso px-6 py-12 text-center text-yp-ivory sm:rounded-[1.75rem] sm:px-10 sm:py-16">
          <p className="eyebrow text-yp-gold">Need help choosing?</p>
          <h2 className="mx-auto mt-3 max-w-lg font-display text-[clamp(1.55rem,4vw,2.5rem)] leading-tight">
            Natural wood look or matching doors for a big run?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
            Tell us the room and how many doors, we will suggest natural or reconstituted veneer and
            a shade family.
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
