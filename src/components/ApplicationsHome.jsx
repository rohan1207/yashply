import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { applications } from "../data/content";

export default function ApplicationsHome() {
  const [featured, ...rest] = applications;

  return (
    <section className="border-b border-yp-line bg-yp-ivory py-12 sm:py-20 lg:py-24">
      <div className="yp-container">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Where We Are Used</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Where our materials are used.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-yp-mist sm:mt-4 sm:text-[15px]">
                From modular kitchens to hotels, see how plywood, hardware, laminates and veneers
                work together in real spaces.
              </p>
            </div>
            <Link to="/inspiration" className="btn-ghost w-fit shrink-0">
              See all uses
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>

        {/*
          Bento:
          Desktop, large left tile + 2×2 equal tiles on the right
          Mobile , featured full width, then 2×2 mosaic
        */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-2 lg:items-stretch">
          <Reveal className="h-full">
            <Link
              to={featured.href}
              className="group relative block h-full min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:min-h-[26rem] sm:rounded-[1.5rem] lg:min-h-[34rem]"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="img-zoom absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/90 via-yp-espresso/30 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yp-gold sm:text-[11px]">
                  {featured.label}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl lg:text-[2.5rem]">
                  {featured.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70 sm:mt-3 sm:text-[15px]">
                  {featured.text}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  {featured.products}
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {rest.map((app, i) => (
              <Reveal key={app.slug} delay={0.06 + i * 0.05} className="h-full">
                <Link
                  to={app.href}
                  className="group relative block h-full min-h-[11rem] overflow-hidden rounded-[1.15rem] sm:min-h-[13rem] sm:rounded-[1.35rem] lg:min-h-[16.25rem]"
                >
                  <img
                    src={app.image}
                    alt={app.title}
                    className="img-zoom absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/90 via-yp-espresso/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 lg:p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-yp-gold sm:text-[10px]">
                      {app.label}
                    </p>
                    <h3 className="mt-1 font-display text-[0.95rem] leading-tight text-white sm:text-lg lg:text-xl">
                      {app.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-white/65 sm:text-[12px] lg:mt-1.5 lg:text-[13px]">
                      {app.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
