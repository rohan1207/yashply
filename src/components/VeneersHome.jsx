import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import CatalogueCard from "./CatalogueCard";
import { veneersCatalogue } from "../data/content";

export default function VeneersHome() {
  const cards = veneersCatalogue.slice(0, 4);

  return (
    <section className="border-b border-yp-line bg-yp-sand py-12 sm:py-20 lg:py-24">
      <div className="yp-container">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Veneers</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] tracking-tight sm:text-3xl lg:text-4xl">
                Real Wood Look. Easy to Match.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-yp-mist sm:mt-4 sm:text-[15px]">
                Natural and reconstituted veneers in light, medium and dark shades, with clear
                uses and finish tips for each type.
              </p>
            </div>
            <Link to="/veneers" className="btn-ghost w-fit shrink-0">
              Explore Veneers
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {cards.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <CatalogueCard
                product={p}
                index={i}
                href={`/veneers/${p.slug}`}
                cta="View Details"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex justify-center sm:mt-8">
          <Link to="/veneers" className="btn-ghost w-fit">
            Explore Veneers
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
