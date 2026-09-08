import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { site } from "../data/content";

export function Privacy() {
  return (
    <>
      <SEO title="Privacy" description="Privacy policy for Yashply / Yash Ply & Hardware." />
      <PageHero eyebrow="Legal" title="Privacy." crumb="Privacy" />
      <section className="yp-section">
        <div className="yp-container max-w-3xl space-y-4 text-[15px] leading-relaxed text-yp-mist sm:text-base">
          <p>
            Enquiries sent via this website or WhatsApp are used only to respond to your request for
            plywood, boards or delivery. We do not sell personal data. Contact {site.email} to update
            or delete a record we hold about you.
          </p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO title="Terms" description="Terms of use for the Yashply website." />
      <PageHero eyebrow="Legal" title="Terms." crumb="Terms" />
      <section className="yp-section">
        <div className="yp-container max-w-3xl space-y-4 text-[15px] leading-relaxed text-yp-mist sm:text-base">
          <p>
            Product descriptions, thicknesses and estimates on this site are a guide. Final grade,
            quantity and rate are confirmed at {site.legal}, {site.address.city}. The sheet calculator
            is not a quotation. ISI marks on physical sheets govern over marketing copy.
          </p>
        </div>
      </section>
    </>
  );
}
