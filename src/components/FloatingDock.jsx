import { Link } from "react-router-dom";
import { PenLine, Phone } from "lucide-react";
import { site } from "../data/content";

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const items = [
  {
    label: "Enquire",
    icon: PenLine,
    to: "/quote",
    tone: "bg-yp-gold text-yp-espresso shadow-[0_8px_20px_rgba(228,168,35,0.32)]",
  },
  {
    label: "Call",
    icon: Phone,
    href: site.phoneHref,
    tone: "bg-yp-espresso text-yp-gold shadow-[0_8px_20px_rgba(12,22,35,0.28)]",
  },
  {
    label: "WhatsApp",
    icon: WhatsAppIcon,
    href: site.whatsapp,
    external: true,
    tone: "bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.32)]",
  },
];

export default function FloatingDock() {
  return (
    <div
      className="fixed z-40 flex items-center gap-2.5
        bottom-[max(0.85rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 flex-row
        lg:bottom-auto lg:left-auto lg:right-[max(0.85rem,env(safe-area-inset-right))] lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:flex-col lg:items-end lg:gap-3"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const inner = (
          <>
            <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-[13px] font-semibold tracking-tight text-yp-espresso opacity-0 transition-all duration-300 ease-out lg:inline group-hover:max-w-[6.5rem] group-hover:pl-3.5 group-hover:pr-1 group-hover:opacity-100 group-focus-visible:max-w-[6.5rem] group-focus-visible:pl-3.5 group-focus-visible:pr-1 group-focus-visible:opacity-100">
              {item.label}
            </span>
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-[1.03] ${item.tone}`}
            >
              <Icon size={18} strokeWidth={2} />
            </span>
          </>
        );
        const cls =
          "group flex items-center rounded-full bg-white/95 p-1 shadow-[0_10px_28px_rgba(12,22,35,0.12)] ring-1 ring-yp-espresso/[0.06] backdrop-blur-xl transition duration-300 hover:bg-white hover:shadow-[0_16px_40px_rgba(12,22,35,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yp-gold/50 lg:hover:-translate-x-0.5";

        if (item.to) {
          return (
            <Link key={item.label} to={item.to} className={cls} aria-label={item.label}>
              {inner}
            </Link>
          );
        }

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className={cls}
            aria-label={item.label}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}
