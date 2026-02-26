"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CFPSection from "@/components/sections/CFPSection";
import TracksSection from "@/components/sections/TracksSection";
import DatesSection from "@/components/sections/DatesSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import CommitteesSection from "@/components/sections/CommitteesSection";
import VenueSection from "@/components/sections/VenueSection";
import BrochureSection from "@/components/sections/BrochureSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import CountdownWrapper from "@/components/FlipClock/CountdownWrapper";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reveal content right as the navbar animation gets triggered
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 3-second wait: 2s loading hold + 1s navbar collapse animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <Navbar />

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSection />
          <AboutSection />
          <CFPSection />
          <TracksSection />
          <DatesSection />
          <SpeakersSection />
          <CommitteesSection />
          <VenueSection />
          <BrochureSection />
          <CountdownWrapper />
          <ContactSection />

          <Footer />
        </motion.div>
      )}

      <BackToTop />
    </main>
  );
}
