import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { images } from "../data/content";

export default function FinalCTA() {
  return (
    <section className="bg-yp-ivory py-12 sm:py-20 lg:py-24">
      <div className="yp-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.25rem] border border-yp-brass/55 sm:rounded-[1.75rem]">
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[12.5rem] sm:min-h-[20rem] lg:col-span-5 lg:min-h-[28rem]">
                <img
                  src={images.about}
                  alt="Yash Ply & Hardware materials yard"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yp-espresso/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-yp-espresso/20" />
              </div>

              <div className="relative bg-yp-espresso lg:col-span-7">
                <div className="pointer-events-none absolute inset-3 rounded-[1rem] border border-yp-brass/45 sm:inset-5 sm:rounded-[1.25rem]" />

                <div className="relative flex h-full flex-col justify-center px-5 py-9 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-yp-brass sm:text-[14px] sm:tracking-[0.16em] lg:text-[15px] lg:tracking-[0.18em]">
                    Final word
                  </p>
                  <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.55rem,5.5vw,3rem)] font-medium leading-[1.1] tracking-tight text-yp-ivory sm:mt-4 sm:leading-[1.08]">
                    You Bring the Vision. We Bring the Materials.
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-[15px]">
                    Looking for the right plywood or hardware for your project? Talk to our team
                    about your requirement.
                  </p>
                  <div className="mt-7 sm:mt-8">
                    <Link
                      to="/quote"
                      className="hero-cta-solid inline-flex w-full items-center justify-center gap-1 sm:w-auto"
                    >
                      Get a Quote
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
