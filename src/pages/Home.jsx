import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import TrustBar from "../components/TrustBar";
import AboutHome from "../components/AboutHome";
import OurProducts from "../components/OurProducts";
import PlywoodHome from "../components/PlywoodHome";
import HardwareHome from "../components/HardwareHome";
import LaminatesHome from "../components/LaminatesHome";
import VeneersHome from "../components/VeneersHome";
import BrandRibbon from "../components/BrandRibbon";
import WhyYashply from "../components/WhyYashply";
import ApplicationsHome from "../components/ApplicationsHome";
import Voices from "../components/Voices";
import GuidesHome from "../components/GuidesHome";
import QuoteForm from "../components/QuoteForm";
import { site } from "../data/content";
import HeroVideo from "../components/HeroVideo";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://yashply.com/#business",
    name: "Yash Ply & Hardware",
    alternateName: ["Yashply", "Yash Ply"],
    description:
      "Plywood, furniture hardware, laminates and veneers dealer in Pune. ISI certified sheets, ready stock since 1998.",
    url: "https://yashply.com/",
    telephone: "+91-86984-96699",
    email: "yashpancholi1995@gmail.com",
    image: "https://yashply.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop no. 1 Seyash Aadya, Paud Road, Bhusari Colony, Kothrud",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411038",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5074,
      longitude: 73.8077,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
    priceRange: "₹₹",
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yashply",
    url: "https://yashply.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yashply.com/products?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yashply product lines",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Plywood", url: "https://yashply.com/plywood" },
      { "@type": "ListItem", position: 2, name: "Hardware", url: "https://yashply.com/hardware" },
      { "@type": "ListItem", position: 3, name: "Laminates", url: "https://yashply.com/laminates" },
      { "@type": "ListItem", position: 4, name: "Veneers", url: "https://yashply.com/veneers" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Plywood, Hardware, Laminates & Veneers in Pune | Yashply"
        description="Buy ISI certified plywood, furniture hardware, laminates and veneers in Pune. Yash Ply & Hardware, Kothrud, since 1998. Ready stock, fair prices, home delivery across Pune."
        keywords="plywood Pune, plywood dealer Pune, BWP plywood, commercial plywood, ISI plywood Pune, furniture hardware Pune, hinges channels sliding fittings, laminates Pune, Merino Greenlam Century laminates, wood veneers Pune, block board Pune, Yashply, Yash Ply & Hardware, Kothrud, Paud Road"
        image="/contact.png"
        path="/"
        jsonLd={homeJsonLd}
      />

      <section className="relative isolate min-h-[100svh] overflow-hidden bg-yp-espresso text-white">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]" />

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-10 pt-[calc(var(--header-h)+0.75rem)] text-center sm:px-6 sm:pb-12 sm:pt-[var(--header-h)]">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-[11px] sm:tracking-[0.28em]">
            Plywood & Hardware Dealer · Pune
          </p>
          <span className="mt-4 h-px w-8 bg-white/40 sm:mt-6 sm:w-10" />
          <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2rem,8.2vw,4.75rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:mt-7">
            Everything Behind a Beautiful Space.
          </h1>
          <p className="mt-4 max-w-md text-[14px] font-normal leading-relaxed text-white/72 sm:mt-6 sm:max-w-lg sm:text-[16px]">
            ISI certified plywood, furniture hardware, laminates and veneers, ready stock at our
            Kothrud shop since 1998.
          </p>
          <div className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link to="/quote" className="hero-cta-solid w-full sm:w-auto">
              Get a Quote
            </Link>
            <Link to="/products" className="hero-cta-line w-full sm:w-auto">
              See Products
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <AboutHome />

      <OurProducts />

      <PlywoodHome />

      <HardwareHome />

      <LaminatesHome />

      <VeneersHome />

      <BrandRibbon />

      <WhyYashply />

      <ApplicationsHome />

      <Voices />

      <GuidesHome />

      <section className="yp-container pb-14 sm:pb-16 lg:pb-20">
        <div className="grid overflow-hidden rounded-[1.35rem] bg-yp-espresso sm:rounded-[1.75rem] lg:grid-cols-2 lg:rounded-[2rem]">
          <div className="p-6 text-yp-ivory sm:p-8 lg:p-12">
            <p className="eyebrow text-yp-copper">Visit us</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-3xl lg:text-4xl">
              Kothrud, Pune
            </h2>
            <p className="mt-4 text-sm text-white/65 sm:text-base">
              {site.address.line1}
              <br />
              {site.address.city}
            </p>
            <p className="mt-4 text-sm text-white/50">
              {site.hours}
              <br />
              Talk to {site.contactPerson}
            </p>
            <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href={site.address.map}
                className="btn-copper w-full sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <a href={site.phoneHref} className="btn-ghost-light w-full sm:w-auto">
                Call Us
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 bg-yp-ivory p-6 sm:p-8 lg:border-t-0 lg:p-12">
            <h3 className="font-display text-2xl sm:text-3xl">Ask for a quote</h3>
            <p className="mb-5 mt-2 text-sm text-yp-mist sm:mb-6">
              Send your need on WhatsApp. We reply quickly.
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
