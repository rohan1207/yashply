import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** Format sizes + thicknesses as: 8 × 4 / 7 × 4 | 18 / 12 / 8 / 6 mm */
export function formatAvailable(sizes = [], thicknesses = []) {
  if (!sizes?.length && !thicknesses?.length) return null;

  const sizePart = sizes?.length ? sizes.join(" / ") : "";

  if (!thicknesses?.length) return sizePart;

  const simpleMm = thicknesses.every((t) => /^\d+(\.\d+)?\s*mm$/i.test(String(t).trim()));
  if (simpleMm) {
    const nums = thicknesses.map((t) => String(t).replace(/\s*mm$/i, "").trim()).join(" / ");
    return sizePart ? `${sizePart} | ${nums} mm` : `${nums} mm`;
  }

  const thickPart = thicknesses.join(" · ");
  return sizePart ? `${sizePart} | ${thickPart}` : thickPart;
}

/**
 * Editorial mini-catalogue product card.
 * BEST FOR only renders when `bestFor` is explicitly set (confirmed suitability).
 */
export default function CatalogueCard({
  product,
  href,
  cta = "View Details",
  index = 0,
  className = "",
  id,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  const name = product.name;
  const grade = product.grade || null;
  const bestFor = product.bestFor || null;
  const available =
    product.available ||
    formatAvailable(product.sizes, product.thicknesses);
  const image = product.image;
  const to = href || (product.slug ? `/products/${product.slug}` : "/quote");

  const body = (
    <>
      <div className="relative aspect-square overflow-hidden bg-[#F3F0EC]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-3.5 pt-3 sm:px-6 sm:pb-7 sm:pt-7">
        <h3 className="font-display text-[0.92rem] leading-[1.2] tracking-tight text-yp-espresso sm:text-[1.35rem]">
          {name}
        </h3>

        {(grade || available || bestFor) && (
          <dl className="mt-2.5 space-y-2.5 border-t border-yp-line/80 pt-2.5 sm:mt-5 sm:space-y-4 sm:pt-5">
            {grade ? (
              <div>
                <dt className="text-[8px] font-semibold uppercase tracking-[0.14em] text-yp-red sm:text-[10px] sm:tracking-[0.16em]">
                  Grade
                </dt>
                <dd className="mt-0.5 text-[11px] leading-snug text-yp-espresso/85 sm:mt-1.5 sm:text-sm">
                  {grade}
                </dd>
              </div>
            ) : null}

            {available ? (
              <div>
                <dt className="text-[8px] font-semibold uppercase tracking-[0.14em] text-yp-red sm:text-[10px] sm:tracking-[0.16em]">
                  Available
                </dt>
                <dd className="mt-0.5 text-[11px] leading-snug text-yp-espresso/85 sm:mt-1.5 sm:text-sm sm:leading-relaxed">
                  {available}
                </dd>
              </div>
            ) : null}

            {bestFor ? (
              <div>
                <dt className="text-[8px] font-semibold uppercase tracking-[0.14em] text-yp-red sm:text-[10px] sm:tracking-[0.16em]">
                  Best for
                </dt>
                <dd className="mt-0.5 text-[11px] leading-snug text-yp-espresso/85 sm:mt-1.5 sm:text-sm sm:leading-relaxed">
                  {bestFor}
                </dd>
              </div>
            ) : null}
          </dl>
        )}

        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-yp-espresso transition group-hover:text-yp-red sm:gap-1.5 sm:pt-6 sm:text-[12px] sm:tracking-[0.14em]">
          {cta}
          <ArrowUpRight
            size={12}
            className="sm:hidden"
          />
          <ArrowUpRight
            size={14}
            className="hidden transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:inline"
          />
        </span>
      </div>
    </>
  );

  const shell = `group flex h-full flex-col overflow-hidden rounded-[0.9rem] border border-yp-line bg-white transition duration-300 hover:border-yp-espresso/25 sm:rounded-[1.5rem] ${className}`;

  return (
    <motion.article
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: Math.min(index, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="h-full scroll-mt-[calc(var(--header-h)+1.25rem)]"
    >
      {to.startsWith("http") || to.startsWith("tel:") || to.startsWith("mailto:") ? (
        <a
          href={to}
          className={shell}
          target={to.startsWith("http") ? "_blank" : undefined}
          rel={to.startsWith("http") ? "noreferrer" : undefined}
        >
          {body}
        </a>
      ) : (
        <Link to={to} className={shell}>
          {body}
        </Link>
      )}
    </motion.article>
  );
}
