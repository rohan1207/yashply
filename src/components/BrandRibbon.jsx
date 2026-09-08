const brands = [
  { name: "Hettich", src: "/brands/hettich.svg" },
  { name: "Häfele", src: "/brands/hafele.svg" },
  { name: "EBCO", src: "/brands/ebco.png" },
  { name: "Blum", src: "/brands/blum.svg" },
  { name: "Godrej", src: "/brands/godrej.svg" },
  { name: "Ozone", src: "/brands/ozone.png" },
  { name: "Dorset", src: "/brands/dorset.svg" },
  { name: "Grass", src: "/brands/grass.svg" },
  { name: "Enox", src: "/brands/enox.png" },
];

function BrandMark({ brand }) {
  return (
    <div
      className="flex h-11 w-[7.5rem] shrink-0 items-center justify-center px-3 sm:h-14 sm:w-[11rem] sm:px-4"
      title={brand.name}
    >
      <img
        src={brand.src}
        alt={brand.name}
        className="brand-logo max-h-7 max-w-full object-contain sm:max-h-9"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function Track({ hidden }) {
  return (
    <div
      className="flex items-center gap-2 pr-2 sm:gap-3 sm:pr-3"
      aria-hidden={hidden || undefined}
    >
      {brands.map((brand) => (
        <div key={brand.name} className="flex items-center gap-2 sm:gap-3">
          <BrandMark brand={brand} />
          <span
            aria-hidden
            className="h-1 w-1 shrink-0 rounded-full bg-yp-espresso/20"
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandRibbon() {
  return (
    <section className="overflow-hidden border-b border-yp-line bg-white py-10 sm:py-14 lg:py-16">
      <div className="yp-container text-center">
        <p className="eyebrow">Brands</p>
        <h2 className="mt-3 font-display text-[1.65rem] tracking-tight sm:text-2xl lg:text-3xl">
          Leading Brands. Extensive Choice.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-yp-mist sm:text-[15px]">
          We deal in a wide range of hardware products from leading brands including
          Hettich, Häfele, EBCO, Blum, Godrej and more.
        </p>
      </div>

      <div className="brand-marquee mt-8 sm:mt-12">
        <div className="brand-track flex w-max items-center">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
