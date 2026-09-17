import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { images } from "../data/content";

const byRoute = [
  {
    test: (p) => p.startsWith("/plywood"),
    eyebrow: "Plywood",
    title: "Ready to pick a sheet?",
    text: "Browse grades and thicknesses, or tell us the room and we will map the right ply.",
    cta: "Explore Plywood",
    href: "/plywood",
    image: images.plywoodHero,
  },
  {
    test: (p) => p.startsWith("/hardware"),
    eyebrow: "Hardware",
    title: "Match the fitting to the sheet.",
    text: "Hinges, channels and sliding systems from brands we stock, ask for the right kit.",
    cta: "Explore Hardware",
    href: "/hardware",
    image: images.hardwareHero,
  },
  {
    test: (p) => p.startsWith("/laminates"),
    eyebrow: "Laminates",
    title: "Lock colour and finish next.",
    text: "Solids, woodgrains, stone looks and textures, enquire with a shade or mood board.",
    cta: "View Laminates",
    href: "/laminates",
    image: images.laminatesHero,
  },
  {
    test: (p) => p.startsWith("/veneers"),
    eyebrow: "Veneers",
    title: "Natural character or matched runs?",
    text: "We help choose natural vs reconstituted and a tone that suits the room.",
    cta: "View Veneers",
    href: "/veneers",
    image: images.veneersHero,
  },
  {
    test: (p) => p.startsWith("/brands"),
    eyebrow: "Brands",
    title: "See who we stock.",
    text: "Hardware and surface brands under one roof, explore the list, then enquire.",
    cta: "View Brands",
    href: "/brands",
    image: images.hardwareHero,
  },
  {
    test: (p) => p === "/products" || p.startsWith("/products"),
    eyebrow: "Need help choosing",
    title: "Four lines. One conversation.",
    text: "Not sure where to start? Tell us the room, we will map plywood, surface and fittings.",
    cta: "Help Me Choose",
    href: "/contact",
    image: images.laminatesHero,
  },
];

const fallback = {
  eyebrow: "General requirement",
  title: "You Bring the Vision. We Bring the Materials.",
  text: "Looking for the right materials for your project? Talk to our team about your requirement.",
  cta: "Get a Quote",
  href: "/quote",
  image: "/general_req.png",
};

export default function FinalCTA() {
  const { pathname } = useLocation();
  const content = byRoute.find((r) => r.test(pathname)) || fallback;

  return (
    <section className="bg-yp-ivory py-12 sm:py-20 lg:py-24">
      <div className="yp-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.25rem] border border-yp-brass/55 sm:rounded-[1.75rem]">
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[12.5rem] sm:min-h-[20rem] lg:col-span-5 lg:min-h-[28rem]">
                <img
                  src={content.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-yp-espresso/20" />
              </div>

              <div className="relative bg-yp-espresso lg:col-span-7">
                <div className="pointer-events-none absolute inset-3 rounded-[1rem] border border-yp-brass/45 sm:inset-5 sm:rounded-[1.25rem]" />

                <div className="relative flex h-full flex-col justify-center px-5 py-9 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-brass sm:text-[14px] sm:tracking-[0.16em] lg:text-[15px] lg:tracking-[0.18em]">
                    {content.eyebrow}
                  </p>
                  <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.55rem,5.5vw,3rem)] font-medium leading-[1.1] tracking-tight text-yp-ivory sm:mt-4 sm:leading-[1.08]">
                    {content.title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-[15px]">
                    {content.text}
                  </p>
                  <div className="mt-7 sm:mt-8">
                    <Link
                      to={content.href}
                      className="hero-cta-solid inline-flex w-full items-center justify-center gap-1 sm:w-auto"
                    >
                      {content.cta}
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
