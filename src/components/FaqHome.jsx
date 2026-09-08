import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";
import { faqs, site } from "../data/content";

export function FaqAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-yp-line bg-white sm:rounded-[1.5rem]">
      {items.map((f, i) => {
        const on = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <div key={f.q} className="border-b border-yp-line last:border-b-0">
            <button
              type="button"
              id={btnId}
              aria-expanded={on}
              aria-controls={panelId}
              onClick={() => setOpen(on ? -1 : i)}
              className="flex w-full items-start gap-4 px-5 py-5 text-left sm:items-center sm:gap-5 sm:px-7 sm:py-6"
            >
              <span
                aria-hidden
                className="mt-0.5 font-display text-base tabular-nums text-yp-espresso/25 sm:text-lg"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1 font-display text-[1.05rem] leading-snug sm:text-xl">
                {f.q}
              </span>
              <Plus
                size={18}
                strokeWidth={1.75}
                className={`mt-1 shrink-0 transition-transform duration-300 sm:mt-0 ${
                  on ? "rotate-45 text-yp-red" : "text-yp-espresso/35"
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-yp-mist sm:px-7 sm:pb-6 sm:pl-[4.35rem] sm:text-[15px]"
                >
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FaqHome() {
  return (
    <section className="yp-section">
      <div className="yp-container">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
              Common questions.
            </h2>
          </div>
          <Link to="/faq" className="btn-ghost w-fit">
            Full FAQ
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-10">
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>

        <div className="mt-3 flex flex-col gap-4 rounded-[1.15rem] bg-yp-espresso px-4 py-4 text-yp-ivory sm:flex-row sm:items-center sm:justify-between sm:rounded-[1.5rem] sm:px-7 sm:py-5">
          <p className="text-sm leading-relaxed text-white/65">
            Still deciding a grade? Speak with {site.contactPerson} at the Pune yard.
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <a href={site.phoneHref} className="btn-ghost-light flex-1 sm:flex-none">
              Call
            </a>
            <a
              href={site.whatsapp}
              className="btn-primary flex-1 sm:flex-none"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
