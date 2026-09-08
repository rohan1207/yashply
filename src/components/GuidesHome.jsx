import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { homeQuality } from "../data/content";

export default function GuidesHome() {
  const featured = homeQuality[0];
  const list = homeQuality.slice(1, 4);

  return (
    <section className="yp-section">
      <div className="yp-container">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Quality</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
              Built to the stamp.
            </h2>
          </div>
          <Link to="/quality" className="btn-ghost w-fit">
            Our quality
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 lg:grid-cols-12 lg:items-stretch">
          <Link
            to={featured.href}
            className="group relative isolate overflow-hidden rounded-[1.15rem] sm:rounded-[1.5rem] lg:col-span-7"
          >
            <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[26rem]">
              <img
                src={featured.image}
                alt=""
                className="img-zoom absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso via-yp-espresso/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-yp-ivory sm:p-8">
                <p className="text-[10px] uppercase tracking-[0.14em] text-yp-copper sm:text-[11px] sm:tracking-[0.16em]">
                  {featured.category} · {featured.read}
                </p>
                <h3 className="mt-2 max-w-lg font-display text-xl leading-tight sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65 sm:mt-3">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-2.5 sm:gap-3 lg:col-span-5">
            {list.map((g, i) => (
              <Link
                key={g.slug}
                to={g.href}
                className="group flex min-h-0 flex-1 gap-3 rounded-[1.15rem] border border-yp-line bg-white p-4 transition hover:border-yp-espresso sm:gap-4 sm:rounded-[1.25rem] sm:p-6"
              >
                <span
                  aria-hidden
                  className="hidden font-display text-2xl leading-none text-yp-espresso/20 tabular-nums sm:block"
                >
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-yp-timber sm:text-[11px] sm:tracking-[0.16em]">
                    {g.category} · {g.read}
                  </p>
                  <h3 className="mt-1.5 font-display text-base leading-snug sm:text-xl">
                    {g.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-yp-mist sm:mt-2">
                    {g.excerpt}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="mt-0.5 shrink-0 text-yp-espresso/30 transition group-hover:text-yp-red"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
