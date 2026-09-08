import { BadgeCheck, Layers, ShieldCheck, Truck } from "lucide-react";
import { trustBar } from "../data/content";

const icons = [BadgeCheck, Layers, ShieldCheck, Truck];

export default function TrustBar() {
  return (
    <section className="border-b border-yp-line bg-white">
      <div className="yp-container">
        <ul className="grid grid-cols-2 gap-x-3 gap-y-8 py-10 sm:gap-y-10 sm:py-14 lg:grid-cols-4 lg:gap-0 lg:py-16">
          {trustBar.map((item, i) => {
            const Icon = icons[i];
            return (
              <li
                key={item.title}
                className="flex flex-col items-center px-2 text-center sm:px-4 lg:px-8"
              >
                <Icon size={20} strokeWidth={1.25} className="text-yp-espresso sm:h-[22px] sm:w-[22px]" />
                <p className="mt-3 font-display text-[13px] font-medium tracking-tight text-yp-espresso sm:mt-4 sm:text-[15px]">
                  {item.title}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-yp-mist sm:text-[12px]">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
