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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
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
      <ContactSection />
      <Footer />
    </main>
  );
}
