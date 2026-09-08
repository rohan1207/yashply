import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import TrustBar from "../components/TrustBar";
import AboutHome from "../components/AboutHome";
import OurProducts from "../components/OurProducts";
import PlywoodHome from "../components/PlywoodHome";
import HardwareHome from "../components/HardwareHome";
import BrandRibbon from "../components/BrandRibbon";
import WhyYashply from "../components/WhyYashply";
import Voices from "../components/Voices";
import GuidesHome from "../components/GuidesHome";
import QuoteForm from "../components/QuoteForm";
import {
  audiences,
  inspiration,
  site,
} from "../data/content";
import HeroVideo from "../components/HeroVideo";

export default function Home() {
  return (
    <>
      <SEO
        title="ISI Certified Plywood & Block Boards"
        description={site.short}
      />

      <section className="relative isolate min-h-[100svh] overflow-hidden bg-yp-espresso text-white">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]" />

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-10 pt-[calc(var(--header-h)+0.75rem)] text-center sm:px-6 sm:pb-12 sm:pt-[var(--header-h)]">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-[11px] sm:tracking-[0.28em]">
            Pune, Maharashtra
          </p>
          <span className="mt-4 h-px w-8 bg-white/40 sm:mt-6 sm:w-10" />
          <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2rem,8.2vw,4.75rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:mt-7">
            Everything Behind a Beautiful Space.
          </h1>
          <p className="mt-4 max-w-md text-[14px] font-normal leading-relaxed text-white/72 sm:mt-6 sm:max-w-lg sm:text-[16px]">
            Quality plywood and hardware for furniture, interiors and spaces built to last.
          </p>
          <div className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link to="/quote" className="hero-cta-solid w-full sm:w-auto">
              Get a Quote
            </Link>
            <Link to="/products" className="hero-cta-line w-full sm:w-auto">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <AboutHome />

      <OurProducts />

      <PlywoodHome />

      <HardwareHome />

      <BrandRibbon />

      <WhyYashply />

      <section className="bg-yp-ivory yp-section">
        <div className="yp-container">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Inspiration</p>
                <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl md:text-5xl">
                  Rooms, then sheets.
                </h2>
              </div>
              <Link to="/inspiration" className="btn-ghost w-fit">
                All rooms
              </Link>
            </div>
          </Reveal>

          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:mt-10 lg:h-[38rem] lg:grid-cols-3 lg:grid-rows-3">
            {inspiration.slice(0, 6).map((room, i) => (
              <Reveal
                key={room.slug}
                delay={i * 0.04}
                className={`h-full min-h-0 ${i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <Link
                  to={`/inspiration/${room.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] lg:aspect-auto lg:h-full"
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className="img-zoom absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/85 via-yp-espresso/15 to-transparent" />
                  <div
                    className={`absolute inset-x-0 bottom-0 text-yp-ivory ${
                      i === 0 ? "p-3.5 sm:p-7" : "p-2.5 sm:p-5"
                    }`}
                  >
                    <p className="text-[9px] uppercase tracking-[0.14em] text-yp-copper sm:text-[11px] sm:tracking-[0.16em]">
                      {room.room}
                    </p>
                    <h3
                      className={`mt-1 font-display leading-tight ${
                        i === 0 ? "text-lg sm:text-3xl" : "text-[0.85rem] leading-snug sm:text-xl"
                      }`}
                    >
                      {room.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:grid-cols-4">
            {audiences.map((a) => (
              <Reveal key={a.title}>
                <Link
                  to={a.href}
                  className="flex h-full flex-col justify-between rounded-[1.15rem] bg-yp-espresso p-5 text-yp-ivory transition hover:-translate-y-1 sm:rounded-[1.5rem] sm:p-7"
                >
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl">{a.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/60 sm:mt-3">{a.text}</p>
                  </div>
                  <span className="mt-5 text-sm text-yp-copper sm:mt-6">Enter →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Voices />

      <GuidesHome />

      <section className="yp-container pb-14 sm:pb-16 lg:pb-20">
        <div className="grid overflow-hidden rounded-[1.35rem] bg-yp-espresso sm:rounded-[1.75rem] lg:grid-cols-2 lg:rounded-[2rem]">
          <div className="p-6 text-yp-ivory sm:p-8 lg:p-12">
            <p className="eyebrow text-yp-copper">Visit</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">
              Bhavani Peth, Pune.
            </h2>
            <p className="mt-4 text-sm text-white/65 sm:text-base">
              {site.address.line1}
              <br />
              {site.address.city}
            </p>
            <p className="mt-4 text-sm text-white/50">
              {site.hours}
              <br />
              Speak with {site.contactPerson}
            </p>
            <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href={site.address.map}
                className="btn-copper w-full sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
              <a href={site.phoneHref} className="btn-ghost-light w-full sm:w-auto">
                Call
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 bg-yp-ivory p-6 sm:p-8 lg:border-t-0 lg:p-12">
            <h3 className="font-display text-2xl sm:text-3xl">Request a quote</h3>
            <p className="mb-5 mt-2 text-sm text-yp-mist sm:mb-6">WhatsApp goes straight to the yard.</p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
