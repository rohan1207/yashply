import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { inspiration, products } from "../data/content";
import NotFound from "./NotFound";

export default function InspirationDetail() {
  const { slug } = useParams();
  const room = inspiration.find((r) => r.slug === slug);
  if (!room) return <NotFound />;
  const recs = products.filter((p) => room.products.includes(p.slug));

  return (
    <>
      <SEO title={room.title} description={room.excerpt} />
      <PageHero
        eyebrow={room.room}
        title={room.title}
        text={room.excerpt}
        image={room.image}
        crumb={<Link to="/inspiration">Inspiration</Link>}
      />
      <section className="yp-section">
        <div className="yp-container grid gap-8 lg:grid-cols-12 lg:gap-12">
          <article className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-yp-mist sm:text-lg">{room.body}</p>
          </article>
          <aside className="space-y-3 sm:space-y-4 lg:col-span-5">
            <h2 className="font-display text-xl sm:text-2xl">Specify these grades</h2>
            {recs.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="flex gap-3 rounded-2xl bg-white p-3 shadow-soft sm:gap-4"
              >
                <img src={p.image} alt="" className="h-16 w-16 shrink-0 rounded-xl object-cover sm:h-20 sm:w-20" />
                <div className="min-w-0">
                  <p className="font-semibold leading-snug">{p.name}</p>
                  <p className="mt-0.5 text-sm text-yp-mist">{p.grade}</p>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
