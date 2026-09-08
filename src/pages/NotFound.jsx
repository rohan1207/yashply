import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-5 pb-16 pt-24 text-center sm:min-h-[80vh] sm:px-6">
      <SEO title="Not found" />
      <p className="eyebrow">404</p>
      <h1 className="mt-4 max-w-[16ch] font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl">
        This sheet is not in the lot.
      </h1>
      <Link to="/" className="btn-primary mt-8 w-full max-w-xs sm:w-auto">
        Back to the yard
      </Link>
    </section>
  );
}
