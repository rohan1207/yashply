import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { hardwareBrands, images } from "../data/content";

export default function Brands() {
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
        title="Brands"
        description="Hardware brands stocked at Yash Ply & Hardware, Pune — Hettich, Häfele, EBCO, Blum, Godrej, Ozone, Dorset, Grass, Enox and more."
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[88svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[92svh]"
      >
        <motion.img
          src="/hardware_page_hero.png"
          alt="Hardware brands at Yash Ply & Hardware"
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
            Brands
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[1.02] tracking-tight">
            Leading Names. Extensive Choice.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            We stock hardware from trusted brands so the fitting can match the sheet — under one
            roof in Pune.
          </p>
          <a
            href="#brands"
            className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
          >
            Browse brands
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
              {hardwareBrands.map((b) => (
                <span key={`${copy}-${b.name}`} className="inline-flex items-center gap-8">
                  {b.name}
                  <span className="text-yp-red">·</span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section id="brands" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Our Partners</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
                Brands we deal in every day.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                From kitchen motion systems to locks and glass hardware — ask the yard for the
                exact series and finish you need.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {hardwareBrands.map((brand, i) => (
              <motion.article
                key={brand.name}
                id={brand.name.toLowerCase().replace(/ä/g, "a")}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.55, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-yp-line bg-white transition duration-300 hover:border-yp-espresso/25 sm:rounded-[1.5rem]"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-[#F7F5F2] px-8 transition group-hover:bg-white">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-h-14 max-w-[70%] object-contain sm:max-h-16"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yp-red">
                    Brand
                  </p>
                  <h3 className="mt-2 font-display text-[1.25rem] leading-tight tracking-tight sm:text-[1.4rem]">
                    {brand.name}
                  </h3>
                  {brand.focus ? (
                    <p className="mt-3 text-sm leading-relaxed text-yp-mist">{brand.focus}</p>
                  ) : null}
                  <Link
                    to={`/quote?product=${encodeURIComponent(brand.name)}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-yp-espresso transition group-hover:text-yp-red"
                  >
                    Enquire
                    <ArrowUpRight
                      size={14}
                      className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-yp-line bg-[#F7F5F2] yp-section">
        <div className="yp-container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Hardware</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
                Need a category, not only a brand?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                Browse hinges, channels, sliding fittings and more — then we map the right brand to
                your job.
              </p>
              <Link to="/hardware" className="btn-ghost mt-8 inline-flex">
                View Hardware
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="yp-container py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.35rem] border border-yp-brass/50 sm:rounded-[1.75rem]">
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[12rem] sm:min-h-[18rem] lg:col-span-5 lg:min-h-[26rem]">
                <img
                  src={images.craftsman}
                  alt="Brand guidance at Yash Ply & Hardware"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-yp-espresso/25" />
              </div>
              <div className="relative bg-yp-espresso lg:col-span-7">
                <div className="pointer-events-none absolute inset-4 rounded-[1rem] border border-yp-brass/40 sm:inset-6 sm:rounded-[1.25rem]" />
                <div className="relative flex h-full flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:px-14">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-brass">
                    Sales desk
                  </p>
                  <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.65rem,4.5vw,2.85rem)] font-medium leading-[1.1] text-yp-ivory">
                    Looking for a specific brand or series?
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-[15px]">
                    Tell us the fitting and finish. We will check stock and options at the Pune
                    yard.
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
