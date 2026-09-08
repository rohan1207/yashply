import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({
 title,
 description,
}) {
 const { pathname } = useLocation();
  const full = title
    ? `${title} | Yashply`
    : "Yashply | ISI Certified Plywood & Block Boards | Pune";

 useEffect(() => {
 document.title = full;
 const set = (name, content, prop = false) => {
 const attr = prop ? "property" : "name";
 let el = document.head.querySelector(`meta[${attr}="${name}"]`);
 if (!el) {
 el = document.createElement("meta");
 el.setAttribute(attr, name);
 document.head.appendChild(el);
 }
 el.setAttribute("content", content);
 };
 if (description) {
 set("description", description);
 set("og:description", description, true);
 }
 set("og:title", full, true);
 }, [full, description, pathname]);

 return null;
}
