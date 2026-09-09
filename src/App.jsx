import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Plywood from "./pages/Plywood";
import Hardware from "./pages/Hardware";
import CatalogueDetail from "./pages/CatalogueDetail";
import Brands from "./pages/Brands";
import Inspiration from "./pages/Inspiration";
import InspirationDetail from "./pages/InspirationDetail";
import Quality from "./pages/Quality";
import Calculator from "./pages/Calculator";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
import Professionals from "./pages/Professionals";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import { Privacy, Terms } from "./pages/Legal";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/plywood" element={<Plywood />} />
        <Route path="/plywood/:slug" element={<CatalogueDetail />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/hardware/:slug" element={<CatalogueDetail />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/inspiration/:slug" element={<InspirationDetail />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:slug" element={<GuideDetail />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
