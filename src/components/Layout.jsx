import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FinalCTA from "./FinalCTA";
import FaqHome from "./FaqHome";
import Preloader from "./Preloader";
import FloatingDock from "./FloatingDock";
import SmoothScroll from "./SmoothScroll";

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";
  const hideFinalCta = pathname === "/quote" || pathname === "/contact";
  const [booting, setBooting] = useState(() => {
    try {
      return !sessionStorage.getItem("yp-booted");
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!booting) return;
    const t = setTimeout(() => {
      setBooting(false);
      try {
        sessionStorage.setItem("yp-booted", "1");
      } catch {
        /* ignore */
      }
    }, 1100);
    return () => clearTimeout(t);
  }, [booting]);

  useEffect(() => {
    const goQuote = () => navigate("/quote");
    window.addEventListener("yp-enquire", goQuote);
    return () => window.removeEventListener("yp-enquire", goQuote);
  }, [navigate]);

  return (
    <SmoothScroll>
      <AnimatePresence>{booting && <Preloader key="boot" />}</AnimatePresence>
      <Navbar />
      <main className="min-h-screen pb-[calc(5.75rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Outlet />
      </main>
      {!hideFinalCta && <FinalCTA />}
      {isHome && <FaqHome />}
      <Footer />
      <FloatingDock />
    </SmoothScroll>
  );
}
