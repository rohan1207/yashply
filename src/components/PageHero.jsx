import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, text, image, crumb }) {
  return (
    <section className="relative isolate overflow-hidden bg-yp-umber pt-[var(--header-h)] text-yp-ivory sm:pt-[var(--header-h)]">
      {image && (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F120C] via-yp-umber/85 to-[#3A2418]/50" />
      <div className="grain-overlay" />
      <div className="yp-container relative py-14 sm:py-28">
        {crumb && (
          <p className="mb-5 text-[12px] text-white/50 sm:mb-6">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            {crumb}
          </p>
        )}
        <Reveal>
          {eyebrow && <p className="eyebrow text-yp-copper">{eyebrow}</p>}
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(2rem,7vw,4.6rem)] font-medium leading-[1.05] sm:mt-4">
            {title}
          </h1>
          {text && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:mt-6 sm:text-lg">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
