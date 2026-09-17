import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import CatalogueCard from "../components/CatalogueCard";
import { plywoodCatalogue } from "../data/content";

const plywoodJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Plywood in Pune | Commercial, BWP, Blockboard | Yashply",
  description:
    "Buy ISI certified plywood in Pune, commercial, BWP waterproof, calibrated, packaging, truck flooring, blockboard and shuttering. Ready stock at Yash Ply & Hardware, Bhavani Peth.",
  url: "https://yashply.com/plywood",
  isPartOf: {
    "@type": "WebSite",
    name: "Yashply",
    url: "https://yashply.com/",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Plywood products at Yashply",
    numberOfItems: plywoodCatalogue.length,
    itemListElement: plywoodCatalogue.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://yashply.com/plywood/${p.slug}`,
      description: p.summary || p.grade || undefined,
    })),
  },
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

export default function Plywood() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [active, setActive] = useState(plywoodCatalogue[0]?.slug);

  useEffect(() => {
    const nodes = plywoodCatalogue
      .map((p) => document.getElementById(p.slug))
      .filter(Boolean);
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Plywood in Pune | Commercial, BWP, Blockboard & More"
        description="Buy plywood in Pune from Yash Ply & Hardware, commercial ply, BWP waterproof, calibrated, packaging, truck flooring, blockboard and shuttering. ISI grades, sizes and thicknesses ready at Bhavani Peth."
        keywords="plywood Pune, buy plywood Pune, commercial plywood Pune, BWP plywood Pune, waterproof plywood, marine plywood Pune, calibrated plywood, blockboard Pune, shuttering ply, truck flooring ply, packaging ply, ISI plywood, Yashply plywood, Yash Ply & Hardware, Bhavani Peth"
        image="/plywood_page_hero.png"
        path="/plywood"
        jsonLd={plywoodJsonLd}
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[88svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[92svh]"
      >
        <motion.img
          src="/plywood_page_hero.png"
          alt="Plywood sheets for sale at Yash Ply & Hardware Pune"
          style={{ y: imgY, scale: 1.08 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.1]" />

        <motion.div
          style={{ y: titleY, opacity: titleOp }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-16 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:px-12"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-copper sm:text-[14px]">
            Plywood
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[1.02] tracking-tight">
            Plywood for Every Job.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            See our plywood and boards in different grades, sizes and thicknesses, for furniture,
            kitchens, packaging and more.
          </p>
          <a
            href="#range"
            className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
          >
            See product range
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </section>

      <div className="overflow-hidden border-y border-yp-line bg-yp-ivory py-3.5">
        <div className="flex w-max animate-[voice-marquee_32s_linear_infinite] gap-8 pr-8 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-yp-espresso/50"
              aria-hidden={copy === 1 || undefined}
            >
              {plywoodCatalogue.map((p) => (
                <span key={`${copy}-${p.slug}`} className="inline-flex items-center gap-8">
                  {p.name}
                  <span className="text-yp-red">·</span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section id="range" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow">Product Range</p>
                <h2 className="mt-3 max-w-xl font-display text-[1.85rem] leading-tight sm:text-4xl">
                  Grades, sizes and thicknesses ready in Pune.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-yp-mist">
                Each card shows the product image, grade and available sizes. Open a product for full
                details.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-[calc(var(--header-h)+1.5rem)] space-y-1">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-yp-mist">
                  Jump to
                </p>
                {plywoodCatalogue.map((p, i) => (
                  <a
                    key={p.slug}
                    href={`#${p.slug}`}
                    className={`flex items-baseline gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                      active === p.slug
                        ? "bg-yp-espresso text-yp-ivory"
                        : "text-yp-mist hover:bg-yp-espresso/[0.04] hover:text-yp-espresso"
                    }`}
                  >
                    <span
                      className={`font-display text-[11px] tabular-nums ${
                        active === p.slug ? "text-yp-copper" : "text-yp-espresso/25"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug">{p.name}</span>
                  </a>
                ))}
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="no-scrollbar -mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
                {plywoodCatalogue.map((p) => (
                  <a
                    key={p.slug}
                    href={`#${p.slug}`}
                    className={`shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-medium transition ${
                      active === p.slug
                        ? "border-yp-espresso bg-yp-espresso text-white"
                        : "border-yp-line bg-white text-yp-espresso"
                    }`}
                  >
                    {p.name}
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-6 xl:grid-cols-2">
                {plywoodCatalogue.map((product, i) => (
                  <CatalogueCard
                    key={product.slug}
                    id={product.slug}
                    product={product}
                    index={i}
                    href={`/plywood/${product.slug}`}
                    cta="See Details"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="yp-container pb-16 sm:pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[1.35rem] bg-yp-espresso px-6 py-12 text-center text-yp-ivory sm:rounded-[1.75rem] sm:px-10 sm:py-16">
            <p className="eyebrow text-yp-copper">Not sure which grade?</p>
            <h2 className="mx-auto mt-3 max-w-lg font-display text-[clamp(1.6rem,4vw,2.6rem)] leading-tight">
              Visit our Pune yard, or tell us about your room.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
              We will help you pick the right plywood for your kitchen, wardrobe or project.
            </p>
            <Link
              to="/contact"
              className="hero-cta-solid mt-8 inline-flex items-center justify-center gap-1"
            >
              Help Me Choose
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
