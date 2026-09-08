import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center" aria-label="Yash Ply home">
      <img
        src="/logo.png"
        alt="Yash Ply"
        className={`w-auto max-w-[min(72vw,20rem)] object-contain object-left sm:max-w-[22rem] lg:max-w-[26rem] ${
          compact ? "h-12 sm:h-14" : "h-[3.35rem] sm:h-16 lg:h-[4.25rem]"
        }`}
      />
    </Link>
  );
}
