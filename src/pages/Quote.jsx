import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowDown, CheckCircle2, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { images, site } from "../data/content";

const lookingFor = ["Plywood", "Hardware", "Plywood & Hardware", "Not Sure"];

const workingOn = [
  "Furniture",
  "Wardrobe",
  "Home Interior",
  "Commercial Interior",
  "Packaging",
  "Truck / Vehicle Flooring",
  "Construction / Shuttering",
  "Other",
  "Not Sure",
];

const empty = {
  name: "",
  phone: "",
  email: "",
  looking: "",
  project: "",
  product: "",
  quantity: "",
  details: "",
};

function FieldLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="mb-2.5 block text-[13px] font-semibold text-yp-espresso">
      {children}
    </label>
  );
}

function ChoiceGroup({ label, options, value, onChange, name }) {
  return (
    <fieldset>
      <legend className="mb-3 text-[13px] font-semibold text-yp-espresso">{label}</legend>
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {options.map((opt) => {
          const on = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(name, opt)}
              className={`rounded-full border px-3.5 py-2 text-[12px] font-medium transition sm:px-4 sm:text-[13px] ${
                on
                  ? "border-yp-espresso bg-yp-espresso text-white"
                  : "border-yp-line bg-white text-yp-espresso hover:border-yp-espresso/35"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function GetQuoteForm({ defaultProduct = "" }) {
  const [form, setForm] = useState({ ...empty, product: defaultProduct });
  const [sent, setSent] = useState(false);

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const update = (e) => set(e.target.name, e.target.value);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;

    const lines = [
      `Yashply quote request from ${form.name}`,
      `Mobile: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.looking ? `Looking for: ${form.looking}` : null,
      form.project ? `Working on: ${form.project}` : null,
      form.product ? `Product / requirement: ${form.product}` : null,
      form.quantity ? `Quantity: ${form.quantity}` : null,
      form.details ? `Details: ${form.details}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${site.whatsapp}?text=${encodeURIComponent(lines)}`, "_blank", "noopener");
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.35rem] border border-yp-brass/45 bg-[#F7F5F2] px-6 py-12 text-center sm:rounded-[1.75rem] sm:px-10 sm:py-16"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yp-espresso text-yp-brass">
          <CheckCircle2 size={28} strokeWidth={1.5} />
        </span>
        <h2 className="mt-6 font-display text-[1.65rem] leading-tight sm:text-3xl">
          Thank you for your enquiry.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-yp-mist sm:text-[15px]">
          Our sales team will get in touch with you shortly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-ghost inline-flex items-center gap-2">
            <Phone size={14} />
            {site.phone}
          </a>
          <button type="button" className="btn-ghost" onClick={() => setSent(false)}>
            Send another enquiry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-7 sm:space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
        <div>
          <FieldLabel htmlFor="quote-name">Full Name</FieldLabel>
          <input
            id="quote-name"
            className="field"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={update}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <FieldLabel htmlFor="quote-phone">Mobile Number</FieldLabel>
          <input
            id="quote-phone"
            className="field"
            name="phone"
            type="tel"
            placeholder="Enter your mobile number"
            value={form.phone}
            onChange={update}
            required
            autoComplete="tel"
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="quote-email">Email Address</FieldLabel>
          <input
            id="quote-email"
            className="field"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={update}
            autoComplete="email"
          />
        </div>
      </div>

      <ChoiceGroup
        label="What are you looking for?"
        options={lookingFor}
        value={form.looking}
        onChange={set}
        name="looking"
      />

      <ChoiceGroup
        label="What are you working on?"
        options={workingOn}
        value={form.project}
        onChange={set}
        name="project"
      />

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="quote-product">Product / Requirement</FieldLabel>
          <input
            id="quote-product"
            className="field"
            name="product"
            placeholder="Enter product name or requirement"
            value={form.product}
            onChange={update}
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="quote-qty">Quantity / Approximate Requirement</FieldLabel>
          <input
            id="quote-qty"
            className="field"
            name="quantity"
            placeholder="Enter quantity, if known"
            value={form.quantity}
            onChange={update}
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="quote-details">Additional Details</FieldLabel>
          <textarea
            id="quote-details"
            className="field min-h-[140px] resize-y"
            name="details"
            placeholder="Tell us more about your requirement"
            value={form.details}
            onChange={update}
          />
        </div>
      </div>

      <div className="pt-1">
        <button
          type="submit"
          className="group relative inline-flex h-12 w-full items-center justify-center rounded-full bg-yp-red px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-yp-bronze sm:h-[3.25rem] sm:w-auto sm:min-w-[14rem] sm:text-[13px]"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-[3px] rounded-full border border-yp-brass/80 transition group-hover:border-yp-brass"
          />
          <span className="relative">Get My Quote</span>
        </button>
        <p className="mt-4 text-xs leading-relaxed text-yp-mist">
          We reply within one business day. Prefer a call?{" "}
          <a href={site.phoneHref} className="font-semibold text-yp-red hover:underline">
            {site.phone}
          </a>
        </p>
      </div>
    </form>
  );
}

export default function Quote() {
  const [params] = useSearchParams();
  const defaultProduct = params.get("product") || "";
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const titleOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <SEO
        title="Get a Quote"
        description="Tell us what you’re looking for. Share your plywood or hardware requirement and the Yash Ply & Hardware sales team will get in touch."
      />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[72svh] overflow-hidden bg-yp-espresso text-yp-ivory sm:min-h-[78svh]"
      >
        <motion.img
          src={images.workshop}
          alt="Yash Ply & Hardware yard"
          style={{ y: imgY, scale: 1.08 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-yp-espresso" />
        <div className="grain-overlay opacity-[0.1]" />

        <motion.div
          style={{ y: titleY, opacity: titleOp }}
          className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-end px-5 pb-14 pt-[calc(var(--header-h)+3rem)] sm:px-8 sm:pb-16 lg:px-12"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-copper sm:text-[14px]">
            Get a Quote
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6.5vw,4.8rem)] font-medium leading-[1.02] tracking-tight">
            Tell Us What You’re Looking For.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Whether you need plywood, hardware or both, share your requirement and our sales team
            will get in touch with you.
          </p>
          <a
            href="#quote-form"
            className="mt-9 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
          >
            Open the form
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </section>

      <section
        id="quote-form"
        className="scroll-mt-[var(--header-h)] border-b border-yp-line bg-yp-ivory yp-section"
      >
        <div className="yp-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
                <p className="eyebrow">Your requirement</p>
                <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
                  A simple form. A clear reply.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-yp-mist sm:text-[15px]">
                  Share as much as you know. Grade, fittings, room or approximate quantity. The
                  Pune desk will follow up with honest options.
                </p>
                <ul className="mt-8 space-y-4 text-sm text-yp-espresso/80">
                  {[
                    "Plywood and hardware under one roof",
                    "Ready stock you can verify at the yard",
                    "Reply within one business day",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yp-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-10 text-sm text-yp-mist">
                  Prefer WhatsApp or a call?{" "}
                  <Link to="/contact" className="font-semibold text-yp-red hover:underline">
                    Contact us
                  </Link>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-8">
              <div className="rounded-[1.35rem] border border-yp-line bg-white p-5 shadow-soft sm:rounded-[1.75rem] sm:p-8 lg:p-10">
                <GetQuoteForm defaultProduct={defaultProduct} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
