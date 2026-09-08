import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import HeaderSearch from "./HeaderSearch";
import ProductsMega, { ProductsMobileList } from "./ProductsMega";
import { hardwareCatalogue, plywoodCatalogue, site } from "../data/content";

const plywoodLinks = [
  { label: "All plywood", href: "/plywood", meta: "Full product range" },
  ...plywoodCatalogue.slice(0, 5).map((p) => ({
    label: p.name,
    href: `/plywood#${p.slug}`,
    meta: p.grade || p.sizes.join(" · "),
  })),
];

const hardwareLinks = [
  { label: "All hardware", href: "/hardware", meta: "Categories & brands" },
  ...hardwareCatalogue.map((item) => ({
    label: item.name,
    href: `/hardware#${item.slug}`,
    meta: item.highlight ? "Full yard range" : "Popular category",
  })),
];

const contactLinks = [
  { label: "Get a Quote", href: "/quote", meta: "Share your requirement" },
  { label: "Call", href: site.phoneHref, meta: site.phone },
  { label: "WhatsApp", href: site.whatsapp, meta: "Chat with the yard" },
  { label: "Visit us", href: "/contact#reach", meta: "Address & hours" },
];

function Mega({ items, open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          className="absolute left-0 top-full z-50 w-[520px] rounded-b-xl border border-t-0 border-yp-line bg-white p-3 shadow-float"
        >
          <div className="grid grid-cols-2 gap-1">
            {items.map((item) => {
              const external = /^(https?:|tel:|mailto:)/.test(item.href);
              const cls = "rounded-lg p-3 transition hover:bg-yp-sand";
              const inner = (
                <>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="mt-0.5 text-xs text-yp-mist">{item.meta}</p>
                </>
              );
              return external ? (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <Link key={`${item.label}-${item.href}`} to={item.href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(null);
  const megaClose = useRef(null);
  const { pathname } = useLocation();

  const openCollection = () => {
    clearTimeout(megaClose.current);
    setMega("collection");
  };

  const closeCollection = () => {
    clearTimeout(megaClose.current);
    megaClose.current = setTimeout(() => {
      setMega((current) => (current === "collection" ? null : current));
    }, 120);
  };

  useEffect(() => {
    setOpen(false);
    setMega(null);
    clearTimeout(megaClose.current);
  }, [pathname]);

  useEffect(() => {
    if (mega !== "collection") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mega]);

  const linkClass = ({ isActive }) =>
    `inline-flex items-center gap-1 py-3 text-[13px] font-semibold ${
      isActive ? "text-yp-red" : "text-yp-espresso hover:text-yp-red"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-soft">
      <div className="border-b border-yp-line">
        <div className="yp-container flex h-14 min-w-0 items-center gap-2 sm:gap-3 lg:h-[4.25rem] lg:gap-4">
          <Logo compact={open} />

          <Link
            to="/quality"
            className="hidden shrink-0 rounded-full bg-yp-red px-4 py-1.5 text-[11px] font-bold text-white md:inline-flex"
          >
            ISI Total Cover
          </Link>

          <div className="relative hidden md:block">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-yp-line px-3 py-1.5 text-[12px] font-semibold"
              onMouseEnter={() => setMega("consumer")}
              onMouseLeave={() => setMega(null)}
            >
              Consumer <ChevronDown size={14} />
            </button>
            <div onMouseEnter={() => setMega("consumer")} onMouseLeave={() => setMega(null)}>
              <Mega
                open={mega === "consumer"}
                items={[
                  { href: "/", label: "Homeowner", meta: "Buy the right grade once" },
                  { href: "/professionals", label: "Architect / ID", meta: "Spec-ready lots" },
                  { href: "/professionals", label: "Contractor", meta: "Volume & delivery" },
                ]}
              />
            </div>
          </div>

          <div className="hidden flex-1 lg:block">
            <HeaderSearch />
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <Link
              to="/quote"
              className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-yp-red px-3.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(227,6,19,0.22)] transition hover:bg-yp-bronze sm:h-10 sm:px-5 sm:text-[12px] sm:tracking-[0.16em]"
            >
              <span className="sm:hidden">Quote</span>
              <span className="hidden sm:inline">Get a Quote</span>
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-yp-line lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block" onMouseLeave={closeCollection}>
        <div className="yp-container flex h-12 items-center justify-between gap-6">
          <nav className="flex items-center gap-6 xl:gap-7">
            <NavLink to="/about" className={linkClass} onMouseEnter={() => setMega(null)}>
              About us
            </NavLink>
            <div onMouseEnter={openCollection}>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 py-3 text-[13px] font-semibold ${
                    isActive || mega === "collection" ? "text-yp-red" : "text-yp-espresso hover:text-yp-red"
                  }`
                }
              >
                Products{" "}
                <ChevronDown size={13} className={`transition ${mega === "collection" ? "rotate-180" : ""}`} />
              </NavLink>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setMega("plywood")}
              onMouseLeave={() => {
                if (mega === "plywood") setMega(null);
              }}
            >
              <NavLink to="/plywood" className={linkClass}>
                Plywood <ChevronDown size={13} />
              </NavLink>
              <Mega open={mega === "plywood"} items={plywoodLinks} />
            </div>
            <div
              className="relative"
              onMouseEnter={() => setMega("hardware")}
              onMouseLeave={() => {
                if (mega === "hardware") setMega(null);
              }}
            >
              <NavLink to="/hardware" className={linkClass}>
                Hardware <ChevronDown size={13} />
              </NavLink>
              <Mega open={mega === "hardware"} items={hardwareLinks} />
            </div>
            <div
              className="relative"
              onMouseEnter={() => setMega("contact")}
              onMouseLeave={() => {
                if (mega === "contact") setMega(null);
              }}
            >
              <NavLink to="/contact" className={linkClass}>
                Contact Us <ChevronDown size={13} />
              </NavLink>
              <Mega open={mega === "contact"} items={contactLinks} />
            </div>
          </nav>

          <div className="flex items-center gap-3 text-[13px]">
            <Link to="/quote" className="text-yp-espresso" aria-label="Get a Quote">
              <Menu size={18} />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
            <span className="h-5 w-px bg-yp-line" />
            <p className="hidden xl:block text-yp-mist">Dial Customer Care</p>
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-bold text-yp-red">
              <Phone size={14} />
              {site.phone}
            </a>
          </div>
        </div>

        <AnimatePresence>
          {mega === "collection" && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-x-0 bottom-0 top-[calc(var(--header-h)-2px)] z-[45] bg-[#0b0d12]"
              onMouseEnter={openCollection}
              onMouseLeave={closeCollection}
            >
              <ProductsMega onNavigate={() => setMega(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-h-[calc(100svh-3.5rem)] overflow-y-auto overflow-x-hidden border-t border-yp-line bg-white lg:hidden"
          >
            <div className="yp-container space-y-4 py-5">
              <HeaderSearch />
              <div className="flex flex-col">
                <ProductsMobileList onNavigate={() => setOpen(false)} />
                <Link
                  to="/plywood"
                  className="rounded-xl px-2 py-3 text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Plywood
                </Link>
                <Link
                  to="/hardware"
                  className="rounded-xl px-2 py-3 text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Hardware
                </Link>
                {[
                  { label: "About us", href: "/about" },
                  { label: "Inspiration", href: "/inspiration" },
                  { label: "Quality", href: "/quality" },
                  { label: "Guides", href: "/guides" },
                  { label: "Contact us", href: "/contact" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="rounded-xl px-2 py-3 text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-bold text-yp-red">
                <Phone size={16} /> {site.phone}
              </a>
              <Link to="/quote" className="btn-copper w-full text-center" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
