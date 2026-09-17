import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { inspiration } from "../data/content";

export default function Inspiration() {
  return (
    <>
      <SEO
        title="Applications"
        description="Modular kitchens, wardrobes, wet areas, offices and hospitality, where Yash Ply materials are used."
      />
      <PageHero
        eyebrow="Applications / Uses"
        title="Where our materials go to work."
        text="Real spaces, real specs, from modular kitchens to hospitality floors. Tap an application to see how plywood, hardware, laminates and veneers fit the brief."
        image="/modular_kitchen.png"
        crumb="Applications"
      />
      <section className="yp-section">
        <div className="yp-container grid gap-4 sm:gap-6 md:grid-cols-2">
          {inspiration.map((room) => (
            <Link
              key={room.slug}
              to={`/inspiration/${room.slug}`}
              className="group overflow-hidden rounded-[1.25rem] bg-white shadow-soft sm:rounded-[1.75rem]"
            >
              <img
                src={room.image}
                alt={room.title}
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="p-5 sm:p-7">
                <p className="text-[10px] uppercase tracking-[0.14em] text-yp-timber sm:text-[11px] sm:tracking-[0.16em]">
                  {room.room}
                </p>
                <h2 className="mt-2 font-display text-2xl leading-tight sm:text-3xl">{room.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-yp-mist sm:mt-3">{room.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
