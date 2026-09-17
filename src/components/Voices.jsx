import { testimonials } from "../data/content";

function Row({ hidden }) {
  return (
    <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-5" aria-hidden={hidden || undefined}>
      {testimonials.map((t) => (
        <blockquote
          key={t.name}
          className="flex w-[min(18.5rem,82vw)] shrink-0 flex-col justify-between rounded-[1.25rem] border border-yp-line bg-white p-5 sm:w-[26rem] sm:rounded-[1.5rem] sm:p-8"
        >
          <p className="font-display text-base leading-snug sm:text-xl">“{t.quote}”</p>
          <footer className="mt-6 text-sm">
            <span className="font-semibold">{t.name}</span>
            <span className="text-yp-mist"> · {t.role}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}

export default function Voices() {
  return (
    <section className="overflow-hidden yp-section">
      <div className="yp-container">
        <p className="eyebrow">Customer Voices</p>
        <h2 className="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl">
          What our Pune customers say.
        </h2>
      </div>

      <div className="voice-marquee mt-10 sm:mt-12">
        <div className="voice-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
