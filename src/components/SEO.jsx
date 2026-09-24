import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Yash Ply & Hardware";
const DEFAULT_TITLE =
  "Plywood, Hardware, Laminates & Veneers in Pune | Yashply";
const DEFAULT_DESCRIPTION =
  "Buy ISI certified plywood, furniture hardware, laminates and veneers in Pune. Yash Ply & Hardware, Kothrud, since 1998. Ready stock, fair prices, home delivery.";
const DEFAULT_KEYWORDS =
  "plywood Pune, plywood dealer Pune, BWP plywood Pune, commercial plywood, ISI plywood, furniture hardware Pune, hinges Pune, laminates Pune, veneers Pune, block board Pune, Yashply, Yash Ply & Hardware, Kothrud, Paud Road Pune, waterproof plywood, kitchen plywood, wardrobe plywood";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Page SEO, sets document title, meta, Open Graph, Twitter and optional JSON-LD.
 * No react-helmet required (SPA-friendly).
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = "/logo.png",
  type = "website",
  noindex = false,
  jsonLd,
  path,
}) {
  const { pathname } = useLocation();
  const pagePath = path ?? pathname;
  const origin = typeof window !== "undefined" ? window.location.origin : "https://yashply.com";
  const url = `${origin}${pagePath === "/" ? "" : pagePath}`;
  const fullTitle = title
    ? title.includes("Yash")
      ? title
      : `${title} | Yashply`
    : DEFAULT_TITLE;
  const absImage = image.startsWith("http") ? image : `${origin}${image}`;

  useEffect(() => {
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    upsertMeta("name", "geo.region", "IN-MH");
    upsertMeta("name", "geo.placename", "Pune");
    upsertMeta("name", "language", "English");

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:site_name", "Yashply");
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:image", absImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absImage);

    upsertLink("canonical", url);

    if (jsonLd) {
      upsertJsonLd("yp-jsonld", Array.isArray(jsonLd) ? jsonLd : jsonLd);
    }
  }, [fullTitle, description, keywords, absImage, type, noindex, url, jsonLd]);

  return null;
}

export { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, DEFAULT_TITLE, SITE_NAME };
