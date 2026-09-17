import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import { images, site } from "../data/content";

const details = [
  {
    id: "call",
    label: "Call Us",
    value: site.phone,
    href: site.phoneHref,
    icon: Phone,
    note: "Main contact",
  },
  {
    id: "sales",
    label: "Sales Enquiries",
    value: site.salesPhone,
    href: site.salesPhoneHref,
    icon: Phone,
    note: `Speak with ${site.contactPerson}`,
  },
  ...(site.email
    ? [
        {
          id: "email",
          label: "Email",
          value: site.email,
          href: site.emailHref,
          icon: Mail,
          note: "We reply within one business day",
        },
      ]
    : []),
  {
    id: "visit",
    label: "Visit Us",
    value: `${site.address.line1}\n${site.address.city}`,
    href: site.address.map,
    icon: MapPin,
    note: site.legal,
    external: true,
  },
  {
    id: "hours",
    label: "Business Hours",
    value: `${site.hours}\n${site.hoursSunday}`,
    href: null,
    icon: Clock,
    note: "Pune yard desk",
  },
];

const contactJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Yash Ply & Hardware Pune",
    description:
      "Contact Yash Ply & Hardware in Pune for plywood, hardware, laminates and veneers. Call, WhatsApp or visit our Bhavani Peth yard.",
    url: "https://yashply.com/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://yashply.com/#business",
      name: "Yash Ply & Hardware",
      alternateName: "Yashply",
      telephone: ["+91-93710-40971", "+91-20-2644-3040"],
      url: "https://yashply.com/",
      image: "https://yashply.com/contact.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "86, New Timber Market, Near Ladkat Petrol Pump, Bhavani Peth",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411042",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.5089,
        longitude: 73.866,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      areaServed: { "@type": "City", name: "Pune" },
      priceRange: "₹₹",
    },
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector("header")?.getBoundingClientRect().height ?? 72;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -(header + 12), duration: 1.05 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function DetailCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const Icon = item.icon;
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-yp-line text-yp-red transition group-hover:border-white/20 group-hover:text-yp-copper">
          <Icon size={18} strokeWidth={1.5} />
        </span>
        <span className="font-display text-[11px] tabular-nums text-yp-espresso/25 group-hover:text-white/35">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yp-red group-hover:text-yp-copper">
          {item.label}
        </p>
        <p className="mt-2 whitespace-pre-line font-display text-lg leading-snug sm:text-xl lg:text-[1.35rem]">
          {item.value}
        </p>
        <p className="mt-2 text-xs text-yp-mist group-hover:text-white/55 sm:text-sm">{item.note}</p>
      </div>
    </>
  );

  const cls = `group flex h-full flex-col rounded-[1.1rem] border border-yp-line bg-white p-4 transition duration-300 hover:border-yp-espresso hover:bg-yp-espresso hover:text-yp-ivory sm:rounded-[1.35rem] sm:p-5 lg:p-6 ${
    item.href ? "" : "cursor-default"
  }`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {item.href ? (
        <a
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noreferrer" : undefined}
          className={cls}
        >
          {body}
        </a>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const heroRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { hash } = useLocation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const onHeroMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 16,
      y: ((e.clientY - r.top) / r.height - 0.5) * 10,
    });
  };

  useEffect(() => {
    const id = hash.replace("#", "");
    if (!id) return;
    const t = window.setTimeout(() => scrollToId(id), 80);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <>
      <SEO
        title="Contact Yash Ply & Hardware Pune | Call, Visit or WhatsApp"
        description={`Contact Yash Ply & Hardware in Pune for plywood, hardware, laminates and veneers. Call ${site.phone}, visit 86 New Timber Market, Bhavani Peth, or send a WhatsApp message. Open Mon-Sat 9 AM-7 PM.`}
        keywords="contact Yashply, Yash Ply & Hardware phone, plywood dealer Pune contact, Bhavani Peth plywood shop, New Timber Market Pune, plywood wholesale Pune contact, hardware shop Pune contact, Yashply WhatsApp"
        image="/contact.png"
        path="/contact"
        jsonLd={contactJsonLd}
      />

      <section
        ref={heroRef}
        onMouseMove={onHeroMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="relative isolate flex min-h-[78svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[88svh]"
      >
        <motion.img
          src="/contact.png"
          alt="Contact Yash Ply & Hardware plywood and hardware shop in Pune"
          style={{ y: imgY, x: tilt.x, scale: 1.06 }}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.12]" />
        <motion.div
          style={{ y: titleY, opacity: titleOp }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-14 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:px-12"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-copper sm:text-[14px]">
            Contact us
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.3rem,6.8vw,5rem)] font-medium leading-[1.02] tracking-tight">
            Tell Us What You Need.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Whether you already know the product or need help choosing, our Pune team is here to
            help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={site.phoneHref} className="btn-primary w-full sm:w-auto">
              <Phone size={14} />
              Call Us
            </a>
            <a href="#message" className="btn-ghost-light w-full sm:w-auto">
              Send a message
            </a>
          </div>
          <a
            href="#details"
            className="mt-10 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-white"
          >
            Contact details
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </section>

      <div className="overflow-hidden border-y border-yp-line bg-yp-ivory py-3.5">
        <div className="flex w-max animate-[voice-marquee_32s_linear_infinite] gap-10 pr-10 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex gap-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-yp-espresso/55"
              aria-hidden={copy === 1 || undefined}
            >
              <span>{site.phone}</span>
              <span className="text-yp-red">·</span>
              {site.email ? (
                <>
                  <span>{site.email}</span>
                  <span className="text-yp-red">·</span>
                </>
              ) : null}
              <span>Bhavani Peth, Pune</span>
              <span className="text-yp-red">·</span>
              <span>{site.hours}</span>
              <span className="text-yp-red">·</span>
              <span>{site.contactPerson}</span>
              <span className="text-yp-red">·</span>
            </p>
          ))}
        </div>
      </div>

      <section id="details" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Contact Details</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
                Reach our Pune team.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                Call, WhatsApp or walk in. Main and sales numbers are listed below.
              </p>
            </div>
          </Reveal>

          <div
            className={`mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-3 ${
              details.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
            }`}
          >
            {details.map((item, i) => (
              <DetailCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="message"
        className="border-y border-yp-line bg-yp-sand yp-section scroll-mt-[var(--header-h)]"
      >
        <div className="yp-container">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Contact form</p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
                Send a short message.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                Share your name, phone number and what you need, we will reply on WhatsApp within
                one business day.
              </p>
              <div className="mt-6 space-y-2 text-sm text-yp-espresso/80">
                <p>
                  Prefer to call?{" "}
                  <a href={site.phoneHref} className="font-semibold text-yp-red hover:underline">
                    {site.phone}
                  </a>
                </p>
                <p>
                  Or request a full quote on the{" "}
                  <Link to="/quote" className="font-semibold text-yp-red hover:underline">
                    quote page
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-7">
              <div className="rounded-[1.25rem] border border-yp-line bg-white p-5 sm:rounded-[1.75rem] sm:p-8">
                <QuoteForm contact />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="reach" className="yp-section scroll-mt-[var(--header-h)]">
        <div className="yp-container">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Location</p>
                <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">Find Us</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                  {site.address.line1}
                  <br />
                  {site.address.city}
                </p>
              </div>
              <a
                href={site.address.map}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-fit shrink-0"
              >
                Get Directions
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-yp-line bg-white sm:mt-10 sm:rounded-[1.75rem]">
              <iframe
                title="Yash Ply & Hardware map, New Timber Market, Bhavani Peth, Pune"
                className="h-[16rem] w-full border-0 sm:h-[22rem] lg:h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=86+New+Timber+Market+Bhavani+Peth+Pune+411042&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="yp-container py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.35rem] border border-yp-brass/50 sm:rounded-[1.75rem]">
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[12rem] sm:min-h-[16rem] lg:col-span-5 lg:min-h-[24rem]">
                <img
                  src={images.hardware}
                  alt="Sales help for plywood and hardware at Yash Ply Pune"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-yp-espresso/25" />
              </div>
              <div className="relative bg-yp-espresso lg:col-span-7">
                <div className="pointer-events-none absolute inset-4 rounded-[1rem] border border-yp-brass/40 sm:inset-6 sm:rounded-[1.25rem]" />
                <div className="relative flex h-full flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:px-14">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-brass">
                    Sales desk
                  </p>
                  <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.65rem,4.5vw,2.85rem)] font-medium leading-[1.1] text-yp-ivory">
                    Need help choosing the right material?
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-[15px]">
                    Tell us the room, the grade you are thinking of, or the fittings you need. Our
                    sales team will guide you to the right stock.
                  </p>
                  <div className="mt-8">
                    <Link
                      to="/quote"
                      className="hero-cta-solid inline-flex w-full items-center justify-center gap-1 sm:w-auto"
                    >
                      Talk to Our Sales Team
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
