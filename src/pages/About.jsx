import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Compass, Layers, Package, Users } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import { images, site } from "../data/content";

const storyChapters = [
  {
    k: "01",
    title: "Yash Ply & Hardware.",
    text: "Yashply is a Pune materials house built on manufacturing discipline and quality control. For about twenty-five years the same hands that press and inspect the sheet have stood behind what leaves the yard. We are not a pass-through trader. We know what a bad core looks like, and we do not ship it.",
  },
  {
    k: "02",
    title: "A yard in Pune.",
    text: "From our Pune yard we stock ISI 303 and ISI 710 plywood and block boards pressed for Maharashtra humidity, borer and termite treated through the core. Ready stock of roughly 3,000 to 4,000 sheets means kitchens and site programmes do not pause for mill lead times. Walk the pile, check the stamp, then buy.",
  },
  {
    k: "03",
    title: "Plywood and hardware, together.",
    text: "Furniture and interiors need more than a sheet. Yash Ply & Hardware brings plywood and leading hardware brands under one roof, hinges, channels, sliding wardrobe fittings, handles and locks, so carpenters, homeowners and consultants can match the fitting to the board without chasing three suppliers across town.",
  },
  {
    k: "04",
    title: "Still built around the customer.",
    text: `The phone still gets answered. ${site.contactPerson} and the team help map grade and fittings to the room, not just a rate. Doorstep delivery from Pune treats a sheet like furniture, not cargo. Honest value, about 30% more accessible than the same quality elsewhere, without thinning the core or the glue line.`,
  },
];

const founders = [
  {
    name: "Customer Desk",
    role: "Yard & Sales",
    bio: "The team Pune projects call when grade and fittings need to match the room. We help homeowners, architects, contractors and carpenters choose right, and keep yard and delivery honest to the promise.",
    image: images.portrait,
  },
  {
    name: "Founding Leadership",
    role: "Founder / Manufacturing",
    bio: "Yashply was built on mill discipline, timber selection, press quality and stamps you can verify. Full founder name, designation and photograph will be published once confirmed.",
    image: images.craftsman,
  },
];

const whyPoints = [
  {
    icon: Package,
    title: "Wide product range",
    text: "Commercial, BWR and BWP plywood, block boards, flush doors and a full line of furniture hardware, sized for real Pune jobs.",
  },
  {
    icon: Layers,
    title: "Leading hardware brands",
    text: "Hettich, Häfele, EBCO, Blum, Godrej and more, stocked so the fitting matches the sheet under one roof.",
  },
  {
    icon: Compass,
    title: "Better guidance",
    text: "We help you pick the grade for the room, dry joinery, kitchen steam or wet cores, before you commit to a pile.",
  },
  {
    icon: Users,
    title: "A team that shows up",
    text: "Ready stock, clear stamps and doorstep delivery from Pune. Speak with the yard when the drawing, not only the rate, matters.",
  },
];

function WhyCard({ item, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const Icon = item.icon;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-[1.25rem] border border-yp-line bg-white p-6 transition duration-300 hover:border-yp-espresso hover:bg-yp-espresso hover:text-yp-ivory sm:rounded-[1.5rem] sm:p-8"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-yp-line text-yp-red transition group-hover:border-white/20 group-hover:text-yp-copper">
        <Icon size={18} strokeWidth={1.5} />
      </span>
      <p className="mt-5 font-display text-[11px] tabular-nums text-yp-espresso/30 group-hover:text-white/35">
        {String(i + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 font-display text-xl leading-tight sm:text-2xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-yp-mist group-hover:text-white/60">{item.text}</p>
    </motion.article>
  );
}

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const titleOp = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onHeroMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 16,
      y: ((e.clientY - r.top) / r.height - 0.5) * 10,
    });
  };

  return (
    <>
      <SEO
        title="About us"
        description="Yash Ply & Hardware brings plywood and hardware together under one roof in Pune, Maharashtra. ISI 303 & 710, ready stock, and a team that helps you pick the right materials."
      />

      {/* HERO — preserved motion / structure, client copy */}
      <section
        ref={heroRef}
        onMouseMove={onHeroMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="relative isolate flex min-h-[100svh] overflow-hidden bg-yp-espresso text-yp-ivory"
      >
        <motion.img
          src={images.workshop}
          alt="Yash Ply & Hardware yard"
          style={{ y: imgY, x: tilt.x, scale: 1.08 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.12]" />

        <motion.div
          style={{ y: titleY, opacity: titleOp }}
          className="relative z-10 flex w-full flex-col justify-end px-5 pb-16 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:px-12"
        >
          <div className="mx-auto w-full max-w-site">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-copper sm:text-[14px] sm:tracking-[0.16em]">
              About us
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,7.2vw,5.4rem)] font-medium leading-[1.02] tracking-tight">
              Built Around the Materials That Build Spaces.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Yash Ply & Hardware brings plywood and hardware together under one roof, offering
              customers a wide selection of materials for furniture, interiors, construction and
              specialised applications.
            </p>
            <a
              href="#story"
              className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
            >
              Our story
              <ArrowDown size={14} className="animate-bounce" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Trust ticker — preserved below hero */}
      <div className="overflow-hidden border-y border-yp-line bg-yp-ivory py-4">
        <div className="flex w-max animate-[voice-marquee_28s_linear_infinite] gap-10 pr-10 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex gap-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-espresso/55"
              aria-hidden={copy === 1 || undefined}
            >
              <span>ISI 303 & 710</span>
              <span className="text-yp-red">·</span>
              <span>Ready stock 3,000–4,000</span>
              <span className="text-yp-red">·</span>
              <span>Borer & termite treated</span>
              <span className="text-yp-red">·</span>
              <span>Pune, Maharashtra</span>
              <span className="text-yp-red">·</span>
              <span>Plywood + hardware</span>
              <span className="text-yp-red">·</span>
              <span>Doorstep delivery</span>
              <span className="text-yp-red">·</span>
            </p>
          ))}
        </div>
      </div>

      {/* OUR STORY — preserved sticky scroll animation */}
      <section id="story" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:col-span-4 lg:self-start">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
              From the mill to materials under one roof.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-yp-mist">
              Scroll the journey. Exact founding-year detail can be updated once confirmed by Yash,
              the milestones below reflect how the business operates today.
            </p>
          </div>
          <div className="space-y-16 lg:col-span-8 lg:space-y-24">
            {storyChapters.map((c) => (
              <motion.article
                key={c.k}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-5xl leading-none text-yp-red/80 sm:text-6xl">{c.k}</p>
                <h3 className="mt-4 font-display text-2xl leading-tight sm:text-3xl">{c.title}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-yp-mist">{c.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Snapshot strip — Century / LTR blend, real yard numbers */}
      <section className="border-y border-yp-line bg-[#F7F5F2] py-10 sm:py-14">
        <div className="yp-container grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {[
            { k: "25+", v: "Years of manufacturing & QC" },
            { k: "3–4k", v: "Sheets in ready stock" },
            { k: "ISI", v: "303 & 710 certified grades" },
            { k: "1 roof", v: "Plywood and hardware together" },
          ].map((s) => (
            <div key={s.v} className="text-center lg:text-left">
              <p className="font-display text-3xl tracking-tight text-yp-red sm:text-4xl">{s.k}</p>
              <p className="mt-2 text-sm text-yp-mist">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDERS — CenturyPly leadership-style cards */}
      <section id="founders" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Founders</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
              Meet the People Behind Yash Ply & Hardware
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
              The desk and the mill standard that Pune already trusts. Individual founder
              photographs and full bios can be swapped in as soon as Yash shares them.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6 lg:gap-8">
            {founders.map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[1.35rem] border border-yp-line bg-white sm:rounded-[1.75rem]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-yp-espresso/5 sm:aspect-[5/4] lg:aspect-[16/11]">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/55 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 font-display text-[11px] tabular-nums text-white/70 sm:bottom-5 sm:left-5">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl">{f.name}</h3>
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-red">
                    {f.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">{f.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY — LTR-style pillars, Yashply UI */}
      <section id="why" className="border-t border-yp-line bg-yp-ivory yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Yash Ply & Hardware</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
              More Choice. Better Guidance.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
              A wide product range, leading hardware brands and a team that helps customers find
              the right materials for their requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {whyPoints.map((item, i) => (
              <WhyCard key={item.title} item={item} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA — client copy */}
      <section className="yp-container pb-16 sm:pb-24 lg:pb-28">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-yp-espresso text-yp-ivory sm:rounded-[1.75rem]">
          <div className="pointer-events-none absolute inset-4 rounded-[1.1rem] border border-yp-brass/40 sm:inset-6 sm:rounded-[1.35rem]" />
          <div className="relative grid lg:grid-cols-12">
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:col-span-7 lg:px-14 lg:py-20">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-brass sm:text-[14px]">
                Next step
              </p>
              <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.7rem,4.5vw,3rem)] font-medium leading-[1.1]">
                Have a requirement? Let&apos;s talk.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-[15px]">
                Tell us the room, the grade you are considering, or the hardware you need. We will
                help you map it to what is ready in the Pune yard.
              </p>
              <div className="mt-8">
                <Link
                  to="/quote"
                  className="hero-cta-solid inline-flex w-full items-center justify-center gap-1 sm:w-auto"
                >
                  Get a Quote
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[12rem] sm:min-h-[16rem] lg:col-span-5 lg:min-h-full">
              <img
                src={images.stack}
                alt="Ready stock at Yash Ply & Hardware"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/40 to-transparent lg:bg-gradient-to-l lg:from-yp-espresso/30 lg:to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
