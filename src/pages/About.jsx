import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, HeartHandshake, Package, Truck, Zap } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import { images, site } from "../data/content";

const storyChapters = [
  {
    k: "01",
    title: "It started in 1998.",
    text: "We began with a simple goal: good materials, reliable service, and customers who can always count on us. Mr. Pankaj Pancholi started Yash Ply with plywood and laminates. From day one, selling material was only half the job. Being there when customers needed help was just as important.",
  },
  {
    k: "02",
    title: "The next generation.",
    text: "In 2017, Managing Director Mr. Yash Pancholi joined the business. He kept the same values and brought a clear plan for the future. Over time we added hardware and veneers, so we could serve more needs of the interior and construction industry.",
  },
  {
    k: "03",
    title: "Relationships come first.",
    text: "We work closely with interior designers, architects, contractors and homeowners. Many of these ties have become long-term partnerships, built on trust. When a project has a deadline, every delivery matters and every problem needs a fast answer.",
  },
  {
    k: "04",
    title: "Two generations. One promise.",
    text: "From 1998 to today, our work has grown, but our values have stayed the same. We are proud of where we started, thankful to everyone who trusted us, and ready for what comes next. Yash Ply: growing with you, building with you, and keeping our word.",
  },
];

const founders = [
  {
    name: "Mr. Pankaj Pancholi",
    role: "Founder",
    bio: "Started Yash Ply in 1998 with a simple belief: good materials and reliable service belong together. He built the business on on-time deliveries, quick problem-solving, and honest respect for every customer.",
    image: "/founders/pankaj-pancholi.jpg",
  },
  {
    name: "Mr. Yash Pancholi",
    role: "Managing Director",
    bio: "Joined in 2017 to take the business forward. With the same values and a fresh plan, he added hardware and veneers so we respond faster, solve problems better, and get the right material to site on time.",
    image: images.plywoodHero,
  },
];

const whyPoints = [
  {
    icon: Truck,
    title: "On-time delivery",
    text: "We deliver to your site on time so the right material is there when your work needs it.",
  },
  {
    icon: Zap,
    title: "Quick help",
    text: "Fast answers for designers, architects, contractors and homeowners when something needs fixing.",
  },
  {
    icon: Package,
    title: "Good materials",
    text: "Plywood, laminates, hardware and veneers chosen for furniture, interiors and work that must last.",
  },
  {
    icon: HeartHandshake,
    title: "Real relationships",
    text: "Long-term trust with our customers, not just a one-time sale.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Yash Ply & Hardware",
  description:
    "Yash Ply & Hardware, Pune, plywood, hardware, laminates and veneers dealer since 1998. Founded by Mr. Pankaj Pancholi, led by MD Mr. Yash Pancholi.",
  url: "https://yashply.com/about",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Yash Ply & Hardware",
    alternateName: "Yashply",
    foundingDate: "1998",
    founder: {
      "@type": "Person",
      name: "Pankaj Pancholi",
    },
    employee: {
      "@type": "Person",
      name: "Yash Pancholi",
      jobTitle: "Managing Director",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "86, New Timber Market, Near Ladkat Petrol Pump, Bhavani Peth",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411042",
      addressCountry: "IN",
    },
    telephone: "+91-93710-40971",
  },
};

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
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-yp-line text-yp-gold transition group-hover:border-white/20 group-hover:text-yp-gold">
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
        title="About Yash Ply & Hardware | Plywood Dealer in Pune Since 1998"
        description="Know Yash Ply & Hardware, Pune, plywood, hardware, laminates and veneers since 1998. Founded by Mr. Pankaj Pancholi, led by MD Mr. Yash Pancholi. Quality materials, on-time delivery and honest service at Bhavani Peth."
        keywords="about Yashply, Yash Ply & Hardware Pune, plywood dealer Pune since 1998, Pankaj Pancholi, Yash Pancholi, Bhavani Peth plywood, New Timber Market Pune, hardware laminates veneers Pune"
        image="/about_page_desktop.png"
        path="/about"
        jsonLd={aboutJsonLd}
      />

      <section
        ref={heroRef}
        onMouseMove={onHeroMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="relative isolate flex min-h-[100svh] overflow-hidden bg-yp-espresso text-yp-ivory"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: imgY, x: tilt.x }}
            className="absolute inset-x-0 top-0 h-[118%] w-full origin-top will-change-transform"
          >
            <img
              src="/about_page_phone.png"
              alt="Yash Ply & Hardware plywood and materials yard in Pune"
              className="absolute inset-0 h-full w-full object-cover object-top md:hidden"
            />
            <img
              src="/about_page_desktop.png"
              alt="Yash Ply & Hardware plywood and materials yard in Pune"
              className="absolute inset-0 hidden h-full w-full object-cover object-top md:block"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.12]" />

        <motion.div
          style={{ y: titleY, opacity: titleOp }}
          className="relative z-10 flex w-full flex-col justify-end px-5 pb-16 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:px-12"
        >
          <div className="mx-auto w-full max-w-site">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-gold sm:text-[14px] sm:tracking-[0.16em]">
              About Yash Ply
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.2rem,6.8vw,5rem)] font-medium leading-[1.05] tracking-tight">
              Trusted Since 1998.
              <br />
              Built on Relationships.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              We started in 1998 with a simple goal, good materials, reliable service, and
              customers who can always count on us.
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

      <div className="overflow-hidden border-y border-yp-line bg-yp-ivory py-4">
        <div className="flex w-max animate-[voice-marquee_28s_linear_infinite] gap-10 pr-10 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex gap-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-yp-espresso/55"
              aria-hidden={copy === 1 || undefined}
            >
              <span>Since 1998</span>
              <span className="text-yp-gold">·</span>
              <span>Two generations</span>
              <span className="text-yp-gold">·</span>
              <span>On-time delivery</span>
              <span className="text-yp-gold">·</span>
              <span>Quick help</span>
              <span className="text-yp-gold">·</span>
              <span>Good materials</span>
              <span className="text-yp-gold">·</span>
              <span>Real relationships</span>
              <span className="text-yp-gold">·</span>
            </p>
          ))}
        </div>
      </div>

      <section id="story" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:col-span-4 lg:self-start">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
              From plywood and laminates to a full materials store.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-yp-mist">
              Read how Yash Ply grew with our customers, without losing what made us different from
              the start.
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
                <p className="font-display text-5xl leading-none text-yp-gold/80 sm:text-6xl">{c.k}</p>
                <h3 className="mt-4 font-display text-2xl leading-tight sm:text-3xl">{c.title}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-yp-mist">{c.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-yp-line bg-yp-sand py-10 sm:py-14">
        <div className="yp-container grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {[
            { k: "1998", v: "Year we started" },
            { k: "2017", v: "Next generation joined" },
            { k: "2", v: "Generations. One promise." },
            { k: "1", v: "Promise we still keep" },
          ].map((s) => (
            <div key={s.v} className="text-center lg:text-left">
              <p className="font-display text-3xl tracking-tight text-yp-gold sm:text-4xl">{s.k}</p>
              <p className="mt-2 text-sm text-yp-mist">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="founders" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Leaders</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
              Two Generations. One Promise.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
              The people who built Yash Ply, and still grow it with the same values.
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
                    alt={`${f.name}, ${f.role} of Yash Ply & Hardware`}
                    className="h-full w-full object-cover object-[center_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/55 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 font-display text-[11px] tabular-nums text-white/70 sm:bottom-5 sm:left-5">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl">{f.name}</h3>
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-gold">
                    {f.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">{f.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-lg text-center text-[12px] text-yp-mist sm:mt-8">
            Photo for Mr. Yash Pancholi can be added when ready.
          </p>
        </div>
      </section>

      <section id="why" className="border-t border-yp-line bg-yp-ivory yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <div className="max-w-2xl">
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
              The same focus. Every project.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
              These are the things that have always defined Yash Ply, and still do.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {whyPoints.map((item, i) => (
              <WhyCard key={item.title} item={item} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="yp-container pb-16 sm:pb-24 lg:pb-28">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-yp-espresso text-yp-ivory sm:rounded-[1.75rem]">
          <div className="pointer-events-none absolute inset-4 rounded-[1.1rem] border border-yp-brass/40 sm:inset-6 sm:rounded-[1.35rem]" />
          <div className="relative grid lg:grid-cols-12">
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:col-span-7 lg:px-14 lg:py-20">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-brass sm:text-[14px]">
                Growing with you
              </p>
              <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.7rem,4.5vw,3rem)] font-medium leading-[1.1]">
                Building with you. Keeping our promise.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-[15px]">
                Need materials for your project? Tell us what you need. Our Pune team will help you
                choose the right product, and get it to you on time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/quote"
                  className="hero-cta-solid inline-flex w-full items-center justify-center gap-1 sm:w-auto"
                >
                  Get a Quote
                  <ArrowUpRight size={16} />
                </Link>
                <a href={site.phoneHref} className="btn-ghost-light w-full sm:w-auto">
                  Call {site.phone}
                </a>
              </div>
            </div>
            <div className="relative min-h-[12rem] sm:min-h-[16rem] lg:col-span-5 lg:min-h-full">
              <img
                src={images.plywoodHero}
                alt="Plywood and materials at Yash Ply & Hardware Pune"
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
