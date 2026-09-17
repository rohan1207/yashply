import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";
import SEO from "../components/SEO";
import QuoteForm from "../components/QuoteForm";
import CatalogueCard from "../components/CatalogueCard";
import { getCatalogueList, getCatalogueProduct, site } from "../data/content";
import NotFound from "./NotFound";

function categoryFromPath(pathname) {
  if (pathname.startsWith("/hardware")) return "hardware";
  if (pathname.startsWith("/laminates")) return "laminates";
  if (pathname.startsWith("/veneers")) return "veneers";
  return "plywood";
}

function ChipGroup({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="mt-5 sm:mt-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-yp-mist">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-yp-line bg-yp-sand/80 px-3 py-1.5 text-[11px] font-semibold text-yp-espresso sm:text-[12px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CatalogueDetail() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const category = categoryFromPath(pathname);
  const product = getCatalogueProduct(category, slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, category]);

  if (!product) return <NotFound />;

  const list = getCatalogueList(category);
  const base = `/${category}`;
  const related = list.filter((p) => p.slug !== product.slug).slice(0, 4);
  const label = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <SEO title={product.name} description={product.summary} />

      <article className="bg-white pb-28 sm:pb-16">
        <div className="border-b border-yp-line bg-yp-sand/60">
          <div className="yp-container flex items-center gap-3 py-3 pt-[calc(var(--header-h)+0.65rem)] sm:py-4 sm:pt-[calc(var(--header-h)+0.85rem)]">
            <Link
              to={base}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-yp-line bg-white text-yp-espresso transition hover:border-yp-espresso"
              aria-label={`Back to ${label}`}
            >
              <ArrowLeft size={16} />
            </Link>
            <nav className="min-w-0 truncate text-[12px] text-yp-mist sm:text-[13px]">
              <Link to={base} className="hover:text-yp-espresso">
                {label}
              </Link>
              <span className="mx-1.5 text-yp-line">/</span>
              <span className="text-yp-espresso">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="yp-container">
          <div className="grid gap-8 pt-6 sm:gap-10 sm:pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-12">
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[1.15rem] border border-yp-line bg-yp-sand sm:rounded-[1.5rem]">
                <div className="flex aspect-square items-center justify-center p-6 sm:p-10 lg:aspect-[4/5] lg:p-12">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_24px_40px_rgba(12,22,35,0.12)]"
                  />
                </div>
              </div>
              {product.features?.length ? (
                <ul className="mt-5 hidden grid-cols-2 gap-2 sm:grid lg:mt-6">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-xl border border-yp-line bg-white px-3.5 py-3 text-[13px] leading-snug text-yp-espresso/85"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="lg:col-span-6">
              {product.eyebrow || product.grade ? (
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-yp-gold sm:text-[12px]">
                  {[product.eyebrow, product.grade].filter(Boolean).join(" · ")}
                </p>
              ) : null}
              <h1 className="mt-2 font-display text-[1.85rem] leading-[1.1] tracking-tight text-yp-espresso sm:mt-3 sm:text-4xl lg:text-[2.65rem]">
                {product.name}
              </h1>
              <p className="mt-3 text-[14px] leading-relaxed text-yp-mist sm:mt-4 sm:text-[16px]">
                {product.summary}
              </p>

              <ChipGroup title="Colours / tones" items={product.colours} />
              <ChipGroup title="Finishes & textures" items={product.finishes} />
              <ChipGroup title="Designs / patterns" items={product.designs} />
              <ChipGroup title="Options" items={product.options?.slice(0, 6)} />
              <ChipGroup title="Sizes" items={product.sizes} />
              <ChipGroup title="Thicknesses" items={product.thicknesses} />

              <div className="mt-7 hidden flex-wrap gap-3 sm:mt-8 sm:flex">
                <Link
                  to={`/quote?product=${encodeURIComponent(product.name)}`}
                  className="btn-primary"
                >
                  Enquire Now
                  <ArrowUpRight size={15} />
                </Link>
                <a href={site.phoneHref} className="btn-ghost">
                  <Phone size={14} />
                  Call yard
                </a>
              </div>

              <div className="mt-8 rounded-[1.15rem] border border-yp-line bg-white p-5 sm:mt-10 sm:rounded-[1.35rem] sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-yp-mist">
                  Specifications
                </p>
                <dl className="mt-4 divide-y divide-yp-line">
                  {product.specs.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-start justify-between gap-4 py-3 text-[13px] sm:text-sm"
                    >
                      <dt className="shrink-0 text-yp-mist">{k}</dt>
                      <dd className="min-w-0 text-right font-medium leading-snug text-yp-espresso">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                {product.note ? (
                  <p className="mt-4 border-t border-yp-line pt-4 text-[12px] leading-relaxed text-yp-mist sm:text-[13px]">
                    {product.note}
                  </p>
                ) : null}
              </div>

              {product.features?.length ? (
                <ul className="mt-5 grid gap-2 sm:hidden">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-xl border border-yp-line bg-yp-sand/50 px-3.5 py-3 text-[13px] leading-snug"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <div className="mt-10 grid gap-10 border-t border-yp-line pt-10 sm:mt-14 sm:gap-12 sm:pt-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">About this product</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-yp-mist sm:text-[16px]">
                {product.description}
              </p>

              {product.applications?.length ? (
                <>
                  <h3 className="mt-8 font-display text-xl sm:mt-10 sm:text-2xl">Where it works</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.applications.map((a) => (
                      <li
                        key={a}
                        className="rounded-full bg-yp-sand px-3.5 py-2 text-[12px] font-medium sm:text-[13px]"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {product.brands?.length ? (
                <>
                  <h3 className="mt-8 font-display text-xl sm:mt-10 sm:text-2xl">Brands</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.brands.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-yp-line px-3.5 py-2 text-[12px] font-semibold sm:text-[13px]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {product.collections?.length ? (
                <>
                  <h3 className="mt-8 font-display text-xl sm:mt-10 sm:text-2xl">Collections</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.collections.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-yp-sand px-3.5 py-2 text-[12px] font-medium sm:text-[13px]"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>

            <aside className="lg:col-span-5">
              <div className="overflow-hidden rounded-[1.25rem] bg-yp-espresso text-yp-ivory sm:rounded-[1.5rem] lg:sticky lg:top-[calc(var(--header-h)+1rem)]">
                <div className="px-5 py-7 sm:px-7 sm:py-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-yp-gold">
                    Next step
                  </p>
                  <h2 className="mt-2 font-display text-[1.65rem] leading-tight sm:text-2xl">
                    Enquire about this product
                  </h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/55 sm:text-sm">
                    Share shade, finish, quantity or a photo. The Pune desk confirms what is available
                    and what pairs with your sheet and fittings.
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5 sm:mt-6">
                    <Link
                      to={`/quote?product=${encodeURIComponent(product.name)}`}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-yp-gold px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-yp-espresso"
                    >
                      Enquire Now
                      <ArrowUpRight size={15} />
                    </Link>
                    <a
                      href={site.phoneHref}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
                    >
                      <Phone size={14} />
                      {site.phone}
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/85"
                    >
                      Help Me Choose
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <section id="enquire" className="mt-12 scroll-mt-[var(--header-h)] sm:mt-16 lg:mt-20">
            <div className="grid overflow-hidden rounded-[1.25rem] border border-yp-line bg-yp-sand/40 sm:rounded-[1.5rem] lg:grid-cols-12">
              <div className="px-5 py-8 sm:px-8 sm:py-10 lg:col-span-5 lg:px-10 lg:py-12">
                <p className="eyebrow">Enquiry</p>
                <h2 className="mt-3 font-display text-[1.65rem] leading-tight sm:text-3xl">
                  Request this product
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-yp-mist">
                  Name and phone are enough. We prefill {product.name} in the message.
                </p>
              </div>
              <div className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:col-span-7 lg:px-10 lg:py-12">
                <QuoteForm compact defaultProduct={product.name} />
              </div>
            </div>
          </section>

          {related.length > 0 ? (
            <section className="mt-12 pb-4 sm:mt-16 sm:pb-8">
              <p className="eyebrow">Also in {label}</p>
              <h2 className="mt-2 font-display text-[1.65rem] leading-tight sm:text-3xl">
                Related options
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-5 lg:grid-cols-4">
                {related.map((p, i) => (
                  <CatalogueCard
                    key={p.slug}
                    product={p}
                    index={i}
                    href={`${base}/${p.slug}`}
                    cta="View Details"
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-yp-line bg-white/95 px-4 py-3 backdrop-blur-md sm:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <Link
            to="/contact"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-yp-espresso bg-white text-[11px] font-semibold uppercase tracking-[0.1em] text-yp-espresso"
          >
            Help Me Choose
          </Link>
          <Link
            to={`/quote?product=${encodeURIComponent(product.name)}`}
            className="inline-flex h-11 flex-[1.35] items-center justify-center gap-1.5 rounded-full bg-yp-gold text-[11px] font-semibold uppercase tracking-[0.1em] text-yp-espresso"
          >
            Enquire Now
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}
