import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mic, Search, X } from "lucide-react";
import { guides, inspiration, products } from "../data/content";

export default function HeaderSearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (s.length < 1) return [];
    const hit = (t) => t.toLowerCase().includes(s);
    return [
      ...products
        .filter((p) => hit(p.name) || hit(p.grade) || hit(p.summary))
        .map((p) => ({ href: `/products/${p.slug}`, label: p.name, meta: p.grade })),
      ...inspiration
        .filter((r) => hit(r.title) || hit(r.excerpt))
        .map((r) => ({ href: `/inspiration/${r.slug}`, label: r.title, meta: "Inspiration" })),
      ...guides
        .filter((g) => hit(g.title) || hit(g.excerpt))
        .map((g) => ({ href: `/guides/${g.slug}`, label: g.title, meta: g.category })),
    ].slice(0, 7);
  }, [q]);

  useEffect(() => {
    const onDoc = (e) => {
      if (!wrap.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const go = (href) => {
    navigate(href);
    setQ("");
    setOpen(false);
  };

  return (
    <div ref={wrap} className="relative w-full max-w-xl">
      <label className="flex items-center gap-2 rounded-full border border-yp-line bg-yp-sand px-4 py-2.5">
        <Search size={16} className="shrink-0 text-yp-stone" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="What are you looking for?"
          className="w-full bg-transparent text-sm outline-none placeholder:text-yp-stone/70"
        />
        {q && (
          <button type="button" onClick={() => setQ("")} aria-label="Clear search">
            <X size={14} className="text-yp-stone" />
          </button>
        )}
        <span className="h-5 w-px bg-yp-line" />
        <Mic size={16} className="shrink-0 text-yp-stone" aria-hidden />
      </label>
      {open && results.length > 0 && (
        <ul className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-yp-line bg-white py-2 shadow-float">
          {results.map((r) => (
            <li key={r.href}>
              <button
                type="button"
                onClick={() => go(r.href)}
                className="flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left hover:bg-yp-sand/60"
              >
                <span className="text-sm font-medium">{r.label}</span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-yp-stone">{r.meta}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
