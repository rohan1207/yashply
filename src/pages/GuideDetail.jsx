import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import ToolsStrip from "../components/ToolsStrip";
import { guides, site } from "../data/content";
import NotFound from "./NotFound";

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.slug === slug);
  const others = guides.filter((g) => g.slug !== slug);

  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
  }, [slug]);

  if (!guide) return <NotFound />;

  return (
    <>
      <SEO title={guide.title} description={guide.excerpt} />

      <section className="relative isolate min-h-[70svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[85svh]">
        <img src={guide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.1]" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] w-full max-w-site flex-col justify-end px-5 pb-12 pt-[calc(var(--header-h)+2.5rem)] sm:min-h-[85svh] sm:px-8 sm:pb-16 lg:px-12">
          <p className="text-[12px] text-white/50">
            <Link to="/guides" className="hover:text-white">
              Guides
            </Link>
            <span className="mx-2">/</span>
            {guide.category}
          </p>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-copper">
            {guide.category} · {guide.read}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.2rem,6vw,4.6rem)] font-medium leading-[0.98]">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">{guide.excerpt}</p>
        </div>
      </section>

      <ToolsStrip />

      <section className="yp-section">
        <div className="yp-container grid gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-[calc(var(--header-h)+4.5rem)]">
              <p className="eyebrow">On this page</p>
              <ol className="mt-5 space-y-3">
                {guide.content.map((block, i) => (
                  <li key={block.h}>
                    <a
                      href={`#c-${i}`}
                      className="flex gap-3 text-sm leading-snug text-yp-mist transition hover:text-yp-espresso"
                    >
                      <span className="font-display text-yp-red/70">{String(i + 1).padStart(2, "0")}</span>
                      {block.h}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="lg:col-span-8">
            {guide.content.map((block, i) => (
              <motion.article
                key={block.h}
                id={`c-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="mb-12 scroll-mt-[calc(var(--header-h)+4.5rem)] sm:mb-16"
              >
                <p className="font-display text-3xl text-yp-red/75 sm:text-4xl">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{block.h}</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-yp-mist sm:text-lg">{block.p}</p>
              </motion.article>
            ))}

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Talk to the yard
                <ArrowUpRight size={15} />
              </Link>
              <Link to="/calculator" className="btn-ghost">
                Sheet calculator
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-20 sm:pb-28">
        <div className="yp-container">
          <p className="eyebrow">Continue</p>
          <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">Other notes from the yard.</h2>
        </div>
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-12 xl:grid-cols-5">
          {others.map((g) => (
            <motion.div key={g.slug} whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
              <Link
                to={`/guides/${g.slug}`}
                className="block w-[72vw] max-w-xs shrink-0 snap-start overflow-hidden rounded-[1.35rem] border border-yp-line bg-white lg:w-auto"
              >
                <img src={g.image} alt="" className="aspect-[16/10] w-full object-cover" />
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-yp-timber">
                    {g.category} · {g.read}
                  </p>
                  <p className="mt-1 font-display text-lg leading-tight">{g.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
