import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { hardwareBrands } from "../data/content";

function BrandMark({ brand }) {
  return (
    <div
      className="flex h-11 w-[7.5rem] shrink-0 items-center justify-center px-3 sm:h-14 sm:w-[11rem] sm:px-4"
      title={brand.name}
    >
      <img
        src={brand.src}
        alt={brand.name}
        className="brand-logo max-h-7 max-w-full object-contain sm:max-h-9"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function Track({ hidden }) {
  return (
    <div
      className="flex items-center gap-2 pr-2 sm:gap-3 sm:pr-3"
      aria-hidden={hidden || undefined}
    >
      {hardwareBrands.map((brand) => (
        <div key={brand.name} className="flex items-center gap-2 sm:gap-3">
          <BrandMark brand={brand} />
          <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-yp-espresso/20" />
        </div>
      ))}
    </div>
  );
}

export default function BrandRibbon() {
  return (
    <section className="overflow-hidden border-b border-yp-line bg-white py-10 sm:py-14 lg:py-16">
      <div className="yp-container text-center">
        <p className="eyebrow">Brands</p>
        <h2 className="mt-3 font-display text-[1.65rem] tracking-tight sm:text-2xl lg:text-3xl">
          Top Brands. Wide Choice.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-yp-mist sm:text-[15px]">
          We stock hardware from leading brands like Hettich, Häfele, EBCO, Blum, Godrej and more.
        </p>
        <Link
          to="/brands"
          className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-yp-espresso px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-yp-gold transition hover:bg-yp-ink"
        >
          See All Brands
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="brand-marquee mt-8 sm:mt-12">
        <div className="brand-track flex w-max items-center">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
