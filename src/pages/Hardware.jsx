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
  images,
} from "../data/content";

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
        title="Hardware"
        description="Hardware that completes the build. Hinges, channels, sliding fittings and more from Hettich, Häfele, EBCO, Blum, Godrej and others at Yash Ply & Hardware."
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[88svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[92svh]"
      >
        <motion.img
          src="/hardware_page_hero.png"
          alt="Hardware fittings at Yash Ply & Hardware"
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
            Hardware That Completes the Build.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            From everyday furniture hardware to specialised fittings, Yash Ply & Hardware offers a
            wide range of products from leading brands.
          </p>
          <a
            href="#categories"
            className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
          >
            Explore categories
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
                A sample of what the yard stocks.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                These are the categories we highlight most often. The actual hardware range is much
                larger. Tell us what you need and we will map it to the right brand and fitting.
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
                cta="View Details"
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
                Leading names. Extensive choice.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                We deal in hardware from Hettich, Häfele, EBCO, Blum, Godrej and more, so the
                fitting can match the sheet under one roof.
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
                  alt={brand.name}
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
              View all brands
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="yp-container py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.35rem] border border-yp-brass/50 sm:rounded-[1.75rem]">
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[12rem] sm:min-h-[18rem] lg:col-span-5 lg:min-h-[26rem]">
                <img
                  src={images.hardwareHero}
                  alt="Hardware guidance at the Pune yard"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-yp-espresso/25" />
              </div>
              <div className="relative bg-yp-espresso lg:col-span-7">
                <div className="pointer-events-none absolute inset-4 rounded-[1rem] border border-yp-brass/40 sm:inset-6 sm:rounded-[1.25rem]" />
                <div className="relative flex h-full flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:px-14">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-brass">
                    Hardware desk
                  </p>
                  <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.65rem,4.5vw,2.85rem)] font-medium leading-[1.1] text-yp-ivory">
                    Looking for a specific hardware product?
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-[15px]">
                    Tell us what you need and our team will help you find it.
                  </p>
                  <div className="mt-8">
                    <Link
                      to="/quote"
                      className="hero-cta-solid inline-flex w-full items-center justify-center gap-1 sm:w-auto"
                    >
                      Get a Quote
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
