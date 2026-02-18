"use client";

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
import LoadingScreen from "@/components/ui/LoadingScreen";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CountdownWrapper from "@/components/FlipClock/CountdownWrapper";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <main className="min-h-screen">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <ScrollProgress />
      {/* <Header /> */}
      <Navbar />
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
      <BackToTop />
    </main>
  );
}
