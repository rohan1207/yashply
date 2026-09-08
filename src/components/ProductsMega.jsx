import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { productMega } from "../data/content";

const megaImages = () =>
  [...new Set(productMega.flatMap((col) => [col.image, ...col.items.map((item) => item.image)]))];

export default function ProductsMega({ onNavigate }) {
  const [active, setActive] = useState({ col: 0, item: -1 });
  const images = useMemo(megaImages, []);
  const column = productMega[active.col];
  const item = active.item >= 0 ? column.items[active.item] : null;
  const bg = item?.image || column.image;

  return (
    <div className="products-mega relative h-full w-full overflow-hidden bg-[#0b0d12]">
      <div className="absolute inset-0">
        {images.map((src) => (
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

      <div className="products-mega-scrim pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="yp-container grid flex-1 grid-cols-6 gap-4 pt-8 lg:gap-6 lg:pt-10 xl:pt-12">
          {productMega.map((col, ci) => {
            const colOn = active.col === ci;
            return (
              <div
                key={col.title}
                className={`h-fit rounded-xl px-3 py-3 transition-colors duration-300 ${
                  colOn ? "bg-[#111318] ring-1 ring-white/15" : ""
                }`}
                onMouseEnter={() => setActive({ col: ci, item: -1 })}
              >
                <Link
                  to={col.href}
                  onClick={onNavigate}
                  className="block text-[16px] font-semibold tracking-tight text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]"
                >
                  {col.title}
                </Link>
                <ul className="mt-4">
                  {col.items.map((row, ii) => {
                    const on = colOn && active.item === ii;
                    return (
                      <li key={`${col.title}-${row.label}`} className="border-b border-white/25 last:border-b-0">
                        <Link
                          to={row.href}
                          onClick={onNavigate}
                          onMouseEnter={() => setActive({ col: ci, item: ii })}
                          className={`flex items-center gap-2 py-3 text-[14px] leading-snug text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.9)] transition ${
                            on ? "font-semibold" : "text-white/95 hover:text-white"
                          }`}
                        >
                          <ArrowRight
                            size={13}
                            strokeWidth={2.5}
                            className={`shrink-0 transition ${on ? "opacity-100" : "opacity-0"}`}
                          />
                          <span>{row.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="yp-container pointer-events-none pb-10 pt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            {column.title}
          </p>
          <p className="font-display mt-1 max-w-xl text-3xl font-medium tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.7)] xl:text-4xl">
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
          {productMega.map((col, ci) => {
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
                  <ChevronDown size={16} className={`shrink-0 text-yp-mist transition ${expanded ? "rotate-180" : ""}`} />
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
