import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center" aria-label="Yashply home">
      <img
        src="/logo.png"
        alt="Yashply"
        className={`w-auto object-contain object-left ${compact ? "h-9" : "h-9 sm:h-[3.35rem] lg:h-14"}`}
      />
    </Link>
  );
}
