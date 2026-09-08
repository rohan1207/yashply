import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import QuoteForm from "../components/QuoteForm";
import CatalogueCard from "../components/CatalogueCard";
import { products, site } from "../data/content";
import NotFound from "./NotFound";

function shotsOf(product) {
  return [...new Set([product.image, ...product.gallery])];
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [shot, setShot] = useState(0);
  useEffect(() => {
    setShot(0);
  }, [slug]);
  if (!product) return <NotFound />;

  const shots = shotsOf(product);
  const related = products.filter((p) => p.slug !== slug);
  const familyLabel =
    product.family === "boards" ? "Block boards" : product.family === "doors" ? "Doors" : "Plywood";

  return (
    <>
      <SEO title={product.name} description={product.summary} />

      <section className="relative isolate min-h-[70svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[85svh]">
        <img
          src={shots[shot]}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.1]" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] w-full max-w-site flex-col justify-end px-5 pb-12 pt-[calc(var(--header-h)+2.5rem)] sm:min-h-[85svh] sm:px-8 sm:pb-16 lg:px-12">
          <p className="text-[12px] text-white/50">
            <Link to="/products" className="hover:text-white">
              Collection
            </Link>
            <span className="mx-2">/</span>
            <Link to={`/products#${product.family}`} className="hover:text-white">
              {familyLabel}
            </Link>
          </p>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-copper">
            {product.grade}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[0.95]">
            {product.name}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">{product.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.thicknesses.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full border border-white/25 px-3 py-1 text-[12px]">
                {t}
              </span>
            ))}
            {product.thicknesses.length > 4 && (
              <span className="rounded-full border border-white/25 px-3 py-1 text-[12px]">
                +{product.thicknesses.length - 4}
              </span>
            )}
          </div>
          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
            {shots.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setShot(i)}
                aria-label={`View ${product.name} photo ${i + 1}`}
                className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16 ${
                  i === shot ? "ring-2 ring-white" : "opacity-70"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-yp-line bg-yp-ivory py-4">
        <div className="flex w-max animate-[voice-marquee_28s_linear_infinite] gap-10 pr-10 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex gap-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-espresso/55"
              aria-hidden={copy === 1 || undefined}
            >
              <span>{product.grade}</span>
              <span className="text-yp-red">·</span>
              {product.thicknesses.map((t) => (
                <span key={`${copy}-${t}`}>
                  {t}
                  <span className="ml-10 text-yp-red">·</span>
                </span>
              ))}
              <span>{product.sizes.join(" · ")}</span>
              <span className="text-yp-red">·</span>
            </p>
          ))}
        </div>
      </div>

      <section className="yp-section">
        <div className="yp-container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {shots.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setShot(shots.indexOf(src))}
                  className="overflow-hidden rounded-[1.15rem]"
                >
                  <img src={src} alt="" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" />
                </button>
              ))}
            </div>

            <p className="mt-10 text-[15px] leading-relaxed text-yp-mist sm:text-lg">{product.description}</p>

            <h2 className="mt-10 font-display text-2xl sm:mt-12 sm:text-3xl">Where it works</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <li key={a} className="rounded-full bg-yp-sand px-4 py-2 text-sm">
                  {a}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl sm:mt-12 sm:text-3xl">Thicknesses & sizes</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.thicknesses.map((t) => (
                <span key={t} className="rounded-full border border-yp-line px-3 py-1.5 text-sm font-semibold">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-yp-mist">{product.sizes.join(" · ")} · ready stock at the Pune yard</p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-[1.35rem] border border-yp-line bg-white p-6 sm:p-8 lg:sticky lg:top-[calc(var(--header-h)+1.25rem)]">
              <p className="eyebrow">Technical sheet</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl">{product.name}</h2>
              <dl className="mt-6 divide-y divide-yp-line">
                {product.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 py-3 text-sm sm:gap-4">
                    <dt className="min-w-0 shrink-0 text-yp-mist">{k}</dt>
                    <dd className="min-w-0 break-words text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-yp-mist">{product.warranty}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enquire" className="btn-primary">
                  Enquire this grade
                  <ArrowUpRight size={15} />
                </a>
                <a href={site.phoneHref} className="btn-ghost">
                  Call {site.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="enquire" className="yp-container pb-10 scroll-mt-[var(--header-h)] sm:pb-14">
        <div className="grid overflow-hidden rounded-[1.5rem] bg-yp-espresso text-yp-ivory lg:grid-cols-12">
          <div className="px-6 py-10 sm:px-10 lg:col-span-5 lg:px-12 lg:py-14">
            <p className="eyebrow text-yp-copper">Enquiry</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">Ask for this lot.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Name and phone are enough. We check ready stock and map thickness to the room.
            </p>
            <p className="mt-6 text-sm text-white/45">
              Desk · {site.contactPerson}
              <br />
              {site.hours}
            </p>
          </div>
          <div className="bg-yp-ivory p-6 text-yp-espresso sm:p-10 lg:col-span-7 lg:p-12">
            <h3 className="font-display text-2xl">Request a quote</h3>
            <p className="mb-6 mt-2 text-sm text-yp-mist">Opens WhatsApp with {product.name} in the message.</p>
            <QuoteForm compact defaultProduct={product.name} />
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-20 sm:pb-28">
        <div className="yp-container">
          <p className="eyebrow">Also in the yard</p>
          <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">Other grades on the floor.</h2>
        </div>
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-12 xl:grid-cols-3">
          {related.slice(0, 3).map((p, i) => (
            <div key={p.slug} className="w-[78vw] max-w-sm shrink-0 snap-start lg:w-auto">
              <CatalogueCard product={p} index={i} href={`/products/${p.slug}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
