import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { gallery, images } from "../data/content";

export default function Gallery() {
  return (
    <>
      <SEO title="Gallery" description="Interiors, grains and the Yashply yard, a visual index of the collection." />
      <PageHero
        eyebrow="Gallery"
        title="Material, then space."
        image={images.grain}
        crumb="Gallery"
      />
      <section className="yp-section">
        <div className="yp-container columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
          {gallery.map((g) => (
            <figure
              key={g.src}
              className="mb-3 break-inside-avoid overflow-hidden rounded-[1.15rem] sm:mb-4 sm:rounded-[1.5rem]"
            >
              <img src={g.src} alt={g.caption} className="w-full object-cover" />
              <figcaption className="px-1 py-2 text-[10px] uppercase tracking-[0.12em] text-yp-mist sm:text-xs sm:tracking-[0.14em]">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
