"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import ProductShowcase from "./components/ProductShowcase";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => {
    setWaitlistOpen(true);
  };

  return (
    <>
      <Header onOpenWaitlist={handleOpenWaitlist} />
      <main className="relative bg-[#06050a] overflow-hidden">
        <Hero onOpenWaitlist={handleOpenWaitlist} />
        <LogoTicker />
        <ProductShowcase />
        <Pricing onOpenWaitlist={handleOpenWaitlist} />
        <Testimonials />
        <CallToAction onOpenWaitlist={handleOpenWaitlist} />
      </main>
      <Footer />
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </>
  );
}
