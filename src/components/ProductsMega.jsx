import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { hardwareCatalogue, images, plywoodCatalogue } from "../data/content";

/** Products mega: Plywood (full catalogue) + Hardware (full catalogue) */
export const productsMegaColumns = [
  {
    title: "Plywood",
    href: "/plywood",
    image: plywoodCatalogue[0]?.image || images.stack,
    multiCol: true,
    items: plywoodCatalogue.map((p) => ({
      label: p.name,
      href: `/plywood#${p.slug}`,
      image: p.image,
      meta: p.grade || null,
    })),
  },
  {
    title: "Hardware",
    href: "/hardware",
    image: hardwareCatalogue[0]?.image || images.kitchen,
    multiCol: false,
    items: hardwareCatalogue.map((h) => ({
      label: h.name,
      href: `/hardware#${h.slug}`,
      image: h.image,
      meta: null,
    })),
  },
];

const megaImages = () =>
  [
    ...new Set(
      productsMegaColumns.flatMap((col) => [col.image, ...col.items.map((item) => item.image)]),
    ),
  ];

export default function ProductsMega({ onNavigate }) {
  const [active, setActive] = useState({ col: 0, item: -1 });
  const imageList = useMemo(megaImages, []);
  const column = productsMegaColumns[active.col];
  const item = active.item >= 0 ? column.items[active.item] : null;
  const bg = item?.image || column.image;

  return (
    <div className="products-mega relative h-full w-full overflow-hidden bg-yp-espresso">
      <div className="absolute inset-0">
        {imageList.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
              src === bg ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Soft wash — readable type without heavy dark cards */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="yp-container grid flex-1 grid-cols-1 content-start gap-10 pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-12 xl:gap-16">
          {productsMegaColumns.map((col, ci) => {
            const colOn = active.col === ci;
            const span = col.multiCol ? "lg:col-span-8" : "lg:col-span-4";
            return (
              <div
                key={col.title}
                className={`${span}`}
                onMouseEnter={() => setActive({ col: ci, item: -1 })}
              >
                <Link
                  to={col.href}
                  onClick={onNavigate}
                  className={`text-[17px] font-semibold tracking-tight text-white transition ${
                    colOn ? "text-white" : "text-white/90"
                  }`}
                >
                  {col.title}
                </Link>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  {col.items.length} products
                </p>

                <ul
                  className={`mt-5 ${
                    col.multiCol
                      ? "grid grid-cols-1 gap-x-8 sm:grid-cols-2"
                      : "grid grid-cols-1"
                  }`}
                >
                  {col.items.map((row, ii) => {
                    const on = colOn && active.item === ii;
                    return (
                      <li key={`${col.title}-${row.label}`} className="border-b border-white/15">
                        <Link
                          to={row.href}
                          onClick={onNavigate}
                          onMouseEnter={() => setActive({ col: ci, item: ii })}
                          className={`flex items-start gap-2 py-2.5 text-[14px] leading-snug transition ${
                            on ? "font-semibold text-white" : "text-white/85 hover:text-white"
                          }`}
                        >
                          <ArrowRight
                            size={13}
                            strokeWidth={2.5}
                            className={`mt-0.5 shrink-0 transition ${on ? "opacity-100 text-yp-copper" : "opacity-0"}`}
                          />
                          <span className="min-w-0 flex-1">
                            {row.label}
                            {row.meta ? (
                              <span className="mt-0.5 block text-[11px] font-normal text-white/45">
                                {row.meta}
                              </span>
                            ) : null}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  to={col.href}
                  onClick={onNavigate}
                  className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-yp-copper transition hover:text-white"
                >
                  View all {col.title}
                  <ArrowRight size={13} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="yp-container pointer-events-none mt-auto pb-8 pt-6 lg:pb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            {column.title}
          </p>
          <p className="font-display mt-1 max-w-xl text-3xl font-medium tracking-tight text-white xl:text-4xl">
            {item?.label || column.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProductsMobileList({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [colOpen, setColOpen] = useState(0);

  return (
    <div className="border-b border-yp-line">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-lg font-medium"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        Products
        <ChevronDown size={18} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="space-y-1 pb-4">
          {productsMegaColumns.map((col, ci) => {
            const expanded = colOpen === ci;
            return (
              <div key={col.title} className="overflow-hidden rounded-xl bg-yp-sand/70">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-[15px] font-semibold"
                  onClick={() => setColOpen(expanded ? -1 : ci)}
                  aria-expanded={expanded}
                >
                  {col.title}
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-yp-mist transition ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
                {expanded && (
                  <ul className="border-t border-yp-line px-3 pb-2">
                    <li>
                      <Link
                        to={col.href}
                        onClick={onNavigate}
                        className="block py-2.5 text-sm font-semibold text-yp-red"
                      >
                        View all {col.title}
                      </Link>
                    </li>
                    {col.items.map((row) => (
                      <li key={`${col.title}-${row.label}`}>
                        <Link
                          to={row.href}
                          onClick={onNavigate}
                          className="block border-t border-yp-line/80 py-2.5 text-[15px] text-yp-espresso"
                        >
                          {row.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
