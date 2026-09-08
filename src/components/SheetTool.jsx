import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { images } from "../data/content";

const specs = [
  { k: "8×4", v: "Sheet size" },
  { k: "10%", v: "Waste factor" },
  { k: "3-way", v: "Use split" },
];

export default function SheetTool() {
  return (
    <section className="yp-section">
      <div className="yp-container">
        <Reveal>
          <div className="grid overflow-hidden rounded-[1.5rem] bg-yp-espresso text-yp-ivory sm:rounded-[1.75rem] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-stretch">
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-11">
              <p className="eyebrow">Tool</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-[1.12] tracking-tight sm:text-3xl lg:text-[2.65rem]">
                How many sheets will the room take?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-[15px]">
                A first-pass estimator for carcasses and shutters. Enter the room, get an 8×4 count,
                then we refine the cut list with your carpenter at the Pune yard.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                {specs.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl bg-white/[0.06] px-2.5 py-3 sm:rounded-2xl sm:px-4 sm:py-3.5"
                  >
                    <dt className="font-display text-base leading-none text-yp-ivory sm:text-xl">{s.k}</dt>
                    <dd className="mt-1.5 text-[10px] leading-snug text-white/45 sm:text-[11px]">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/calculator" className="btn-primary w-fit">
                  Open calculator
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <p className="text-xs leading-relaxed text-white/40 sm:max-w-[16rem]">
                  A 10×12 L-kitchen is usually 14–18 sheets before the cut list.
                </p>
              </div>
            </div>

            <div className="relative h-44 sm:h-52 lg:h-auto">
              <img
                src={images.kitchen}
                alt="Kitchen planning"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/70 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-yp-espresso/25" />
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:w-[12.75rem]">
                <div className="rounded-2xl bg-yp-espresso/92 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-yp-copper">Typical 10×12</p>
                  <div className="mt-1 flex items-end gap-2.5">
                    <p className="font-display text-4xl leading-none sm:text-5xl">16</p>
                    <p className="mb-0.5 text-sm text-white/55">8×4 sheets</p>
                  </div>
                  <dl className="mt-3 hidden space-y-1.5 border-t border-white/10 pt-3 text-[12px] text-white/65 sm:block">
                    <div className="flex justify-between">
                      <dt>Carcass</dt>
                      <dd>9</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Shutters</dt>
                      <dd>5</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Backers</dt>
                      <dd>3</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
