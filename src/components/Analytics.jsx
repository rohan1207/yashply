import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";
const GTM_ID = import.meta.env.VITE_GTM_ID || "";

function loadGtag(id) {
  if (!id || window.gtag) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false });
}

function loadGtm(id) {
  if (!id || window.__ypGtmLoaded) return;
  window.__ypGtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(s);
}

/**
 * Optional GA4 / GTM. Set in .env:
 *   VITE_GA_MEASUREMENT_ID=G-XXXXXXXX
 *   VITE_GTM_ID=GTM-XXXXXXX
 */
export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (GTM_ID) loadGtm(GTM_ID);
    if (GA_ID) loadGtag(GA_ID);
  }, []);

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: `${pathname}${search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
