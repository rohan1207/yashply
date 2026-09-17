import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import CatalogueCard from "./CatalogueCard";
import { hardwareItems } from "../data/content";

export default function HardwareHome() {
  return (
    <section className="border-b border-yp-line bg-yp-sand py-12 sm:py-20 lg:py-24">
      <div className="yp-container">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Hardware</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] tracking-tight sm:text-3xl lg:text-4xl">
                Fittings That Work Every Day.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-yp-mist sm:mt-4 sm:text-[15px]">
                Hinges, drawer channels, sliding wardrobe fittings and more, from trusted brands,
                all under one roof.
              </p>
            </div>
            <Link to="/hardware" className="btn-ghost w-fit shrink-0">
              Explore Hardware
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {hardwareItems.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <CatalogueCard
                product={{
                  name: item.name,
                  image: item.image,
                }}
                index={i}
                href={`/hardware/${item.slug}`}
                cta="View Details"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex justify-center sm:mt-8">
          <Link to="/hardware" className="btn-ghost w-fit">
            Explore Hardware
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
