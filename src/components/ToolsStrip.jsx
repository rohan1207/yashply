import { NavLink, useLocation } from "react-router-dom";

export const toolPages = [
  { href: "/calculator", label: "Calculator", meta: "Sheet count" },
  { href: "/guides", label: "Guides", meta: "Grades & monsoon" },
  { href: "/quality", label: "Quality", meta: "ISI 303 & 710" },
  { href: "/faq", label: "FAQ", meta: "Yard answers" },
];

export default function ToolsStrip() {
  const { pathname } = useLocation();

  return (
    <div className="sticky top-[var(--header-h)] z-30 border-b border-yp-line bg-white/92 backdrop-blur-md">
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:justify-center lg:px-12">
        {toolPages.map((t) => {
          const on = pathname === t.href || pathname.startsWith(`${t.href}/`);
          return (
            <NavLink
              key={t.href}
              to={t.href}
              className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition ${
                on
                  ? "border-yp-espresso bg-yp-espresso text-white"
                  : "border-yp-line text-yp-espresso hover:border-yp-espresso hover:bg-yp-espresso hover:text-white"
              }`}
            >
              {t.label}
              <span className="ml-2 hidden opacity-50 sm:inline">{t.meta}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
