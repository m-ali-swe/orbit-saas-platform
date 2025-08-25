import dynamic from "next/dynamic";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import ProductShowcase from "./components/ProductShowcase";

const LogoTicker = dynamic(() => import("./components/LogoTicker"), {
  ssr: false,
});

const Testimonials = dynamic(() => import("./components/Testimonials"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="font-sans relative">
      <Header />
      <main>
        <Hero />
        <LogoTicker />
        <ProductShowcase />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
