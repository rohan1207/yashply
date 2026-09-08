import { useEffect, useState } from "react";
import { products, site } from "../data/content";

const defaultForm = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

export default function QuoteForm({ compact = false, onSent, defaultProduct = "" }) {
  const [form, setForm] = useState({ ...defaultForm, product: defaultProduct });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, product: defaultProduct }));
  }, [defaultProduct]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    const lines = [
      `Yashply enquiry from ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.product ? `Product: ${form.product}` : null,
      form.message ? `Need: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${site.whatsapp}?text=${encodeURIComponent(lines)}`, "_blank", "noopener");
    setSent(true);
    onSent?.();
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-yp-timber/20 bg-yp-sand/50 p-8 text-center">
        <p className="font-display text-2xl">WhatsApp is opening.</p>
        <p className="mt-2 text-sm text-yp-mist">
          If it did not, call {site.phone} or write to {site.email}.
        </p>
        <button type="button" className="btn-ghost mt-6" onClick={() => setSent(false)}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className={compact ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
        <input className="field" name="name" placeholder="Your name *" value={form.name} onChange={update} required />
        <input className="field" name="phone" placeholder="Phone *" value={form.phone} onChange={update} required />
        {!compact && (
          <input className="field sm:col-span-2" name="email" type="email" placeholder="Email" value={form.email} onChange={update} />
        )}
        <select className="field sm:col-span-2" name="product" value={form.product} onChange={update}>
          <option value="">Product of interest</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Project mix">Project mix / not sure</option>
        </select>
        <textarea
          className="field min-h-[110px] sm:col-span-2"
          name="message"
          placeholder="Room, quantity, timeline…"
          value={form.message}
          onChange={update}
        />
      </div>
      <button type="submit" className="btn-copper w-full sm:w-auto">
        Send via WhatsApp
      </button>
      <p className="text-xs text-yp-mist/90">
        We reply within one business day. Prefer a call? {site.phone}
      </p>
    </form>
  );
}
