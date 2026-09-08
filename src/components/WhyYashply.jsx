import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Hammer,
  Layers,
  MapPin,
  Scale,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { why } from "../data/content";

const icons = [Layers, BadgeCheck, Award, MapPin, ShieldCheck, Hammer, Truck, Scale];

export default function WhyYashply() {
  const [active, setActive] = useState(0);
  const current = why[active];
  const CurrentIcon = icons[active];

  return (
    <section className="yp-section">
      <div className="yp-container grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:col-span-5 lg:self-start">
          <p className="eyebrow">Why Yashply</p>
          <h2 className="mt-3 max-w-md font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
            Eight reasons a carpenter sends the next client.
          </h2>

          <div className="mt-10 hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-[6.5rem] leading-none tracking-[-0.06em] text-yp-red/90">
                  {String(active + 1).padStart(2, "0")}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <CurrentIcon size={18} strokeWidth={1.4} />
                  <p className="font-display text-2xl tracking-tight">{current.title}</p>
                </div>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-yp-mist">{current.text}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-1.5" aria-hidden>
              {why.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-7 bg-yp-red" : "w-1.5 bg-yp-espresso/15 hover:bg-yp-espresso/30"
                  }`}
                  aria-label={`Reason ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <ul className="lg:col-span-7">
          {why.map((item, i) => {
            const open = active === i;
            const Icon = icons[i];
            return (
              <li key={item.title} className="border-b border-yp-line first:border-t">
                <button
                  type="button"
                  className="why-row group relative flex w-full items-start gap-3.5 py-4 pl-2.5 text-left sm:gap-6 sm:py-6 sm:pl-4"
                  aria-expanded={open}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  {open && (
                    <motion.span
                      layoutId="why-rail"
                      className="absolute inset-y-3 left-0 w-[2px] bg-yp-red"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}

                  <span
                    className={`mt-0.5 w-8 shrink-0 font-display text-sm tabular-nums transition-colors duration-300 ${
                      open ? "text-yp-red" : "text-yp-espresso/30 group-hover:text-yp-espresso/55"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-3">
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className={`shrink-0 transition-colors duration-300 ${
                          open ? "text-yp-red" : "text-yp-espresso/35"
                        }`}
                      />
                      <span
                        className={`font-display text-lg tracking-tight transition-colors duration-300 sm:text-[1.35rem] ${
                          open ? "text-yp-espresso" : "text-yp-espresso/70 group-hover:text-yp-espresso"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>

                    <span className={`why-copy ${open ? "why-copy-open" : ""}`}>
                      <span className="block overflow-hidden">
                        <span className="block pt-2 text-[14px] leading-relaxed text-yp-mist sm:text-[15px] lg:hidden">
                          {item.text}
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
