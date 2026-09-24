import { Link } from "react-router-dom";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "../data/content";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Plywood", href: "/plywood" },
  { label: "Hardware", href: "/hardware" },
  { label: "Laminates", href: "/laminates" },
  { label: "Veneers", href: "/veneers" },
  { label: "Brands", href: "/brands" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Contact Us", href: "/contact" },
];

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialItems = [
  {
    label: "WhatsApp",
    href: site.social?.whatsapp || site.whatsapp,
    icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    href: site.social?.instagram || "/contact",
    icon: Instagram,
    external: Boolean(site.social?.instagram),
  },
  {
    label: "Facebook",
    href: site.social?.facebook || "/contact",
    icon: Facebook,
    external: Boolean(site.social?.facebook),
  },
  {
    label: "LinkedIn",
    href: site.social?.linkedin || "/contact",
    icon: Linkedin,
    external: Boolean(site.social?.linkedin),
  },
];

function SocialRow({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socialItems.map((item) => {
        const Icon = item.icon;
        const cls =
          "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-yp-brass/60 hover:text-yp-brass";
        if (
          item.external ||
          item.href.startsWith("http") ||
          item.href.startsWith("mailto:") ||
          item.href.startsWith("tel:")
        ) {
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className={cls}
              aria-label={item.label}
            >
              <Icon size={16} strokeWidth={1.6} />
            </a>
          );
        }
        return (
          <Link key={item.label} to={item.href} className={cls} aria-label={item.label}>
            <Icon size={16} strokeWidth={1.6} />
          </Link>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-yp-espresso pb-[calc(4.75rem+env(safe-area-inset-bottom))] text-yp-ivory lg:pb-0">
      <div className="grain-overlay opacity-[0.06]" />
      <div className="yp-container relative py-10 sm:py-16 lg:py-20 lg:pb-10">
        {/* --- Mobile layout --- */}
        <div className="space-y-8 lg:hidden">
          <div className="text-center">
            <div className="flex justify-center">
              <Logo />
            </div>
            <p className="mt-3 font-display text-xl tracking-tight text-white">
              Yash Ply &amp; Hardware
            </p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/50">
              Plywood, hardware and materials for spaces built with purpose.
            </p>
            <SocialRow className="mt-5 justify-center" />
          </div>

          <div className="rounded-2xl border border-yp-brass/45 bg-white/[0.04] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yp-brass">
              Next step
            </p>
            <p className="mt-2 font-display text-xl leading-snug text-white">
              Ready to share your requirement?
            </p>
            <Link
              to="/quote"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-yp-gold px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-yp-espresso"
            >
              Get a Quote
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Quick Links
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[14px] text-white/70">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="block py-0.5 transition active:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 text-white/80 transition active:text-white"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-yp-brass">
                    <Phone size={15} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-[14px] font-medium text-white">{site.phone}</span>
                    <span className="mt-0.5 block text-[11px] text-white/35">Call us</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start gap-3 text-white/80 transition active:text-white"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-yp-brass">
                    <Mail size={15} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block break-all text-[14px] font-medium text-white">
                      {site.email}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-white/35">Sales enquiry</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[13px] leading-relaxed text-white/60">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-yp-brass">
                  <MapPin size={15} strokeWidth={1.7} />
                </span>
                <span>
                  <span className="mb-0.5 block text-[11px] uppercase tracking-[0.14em] text-white/35">
                    Visit us
                  </span>
                  {site.address.line1}
                  <br />
                  {site.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Desktop layout --- */}
        <div className="hidden gap-12 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 font-display text-xl tracking-tight text-white">
              Yash Ply &amp; Hardware
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
              Plywood, hardware and materials for spaces built with purpose.
            </p>
            <SocialRow className="mt-6" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/65">
                <li>
                  <a href={site.phoneHref} className="transition hover:text-white">
                    {site.phone}
                  </a>
                  <span className="mt-0.5 block text-[11px] text-white/35">Call us</span>
                </li>
                <li>
                  <a href={site.emailHref} className="break-all transition hover:text-white">
                    {site.email}
                  </a>
                  <span className="mt-0.5 block text-[11px] text-white/35">Sales enquiry</span>
                </li>
                <li>
                  <span className="mb-0.5 block text-[11px] uppercase tracking-[0.14em] text-white/35">
                    Visit us
                  </span>
                  {site.address.line1}
                  <br />
                  {site.address.city}
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-yp-brass/50 bg-white/[0.03] p-6">
              <div className="pointer-events-none absolute inset-2 rounded-[0.9rem] border border-yp-brass/25" />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-yp-brass">
                    Next step
                  </p>
                  <p className="mt-3 font-display text-2xl leading-snug text-white">
                    Ready to share your requirement?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    Tell us what you need. The sales desk will follow up.
                  </p>
                </div>
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-yp-brass transition hover:text-white"
                >
                  Get a Quote
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7">
          <p className="text-center text-[11px] text-white/40 sm:text-xs">
            © {new Date().getFullYear()} Yash Ply &amp; Hardware. All Rights Reserved.
          </p>
          <p className="mt-2.5 text-center text-[10px] tracking-wide text-white/30 sm:mt-3 sm:text-[11px]">
            Designed &amp; developed by : TheSocialKollab
          </p>
          <div className="mt-3.5 flex justify-center gap-5 text-[11px] text-white/35 sm:mt-4">
            <Link to="/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
