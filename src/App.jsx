import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RankingsBanner from "./components/RankingsBanner";
import WhyTis from "./components/WhyTis";
import SportsSection from "./components/SportsSection";
import CampusBento from "./components/CampusBento";
import DailyRoutine from "./components/DailyRoutine";
import DignitariesSection from "./components/DignitariesSection";
import Testimonials from "./components/Testimonials";
import AdmissionProcess from "./components/AdmissionProcess";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import QuickEnquiryModal from "./components/QuickEnquiryModal";

export default function App() {
  const { toggleTheme, isDark } = useTheme();
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* 1. Reading Progress Bar */}
      <ScrollProgress />

      {/* 2. Interactive Custom Cursor (auto-disabled on touch) */}
      <CustomCursor />

      {/* 3. Sticky Navigation Header */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* 4. Main Page Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Accredited Rankings & Awards Banner */}
        <RankingsBanner />

        {/* Modern Gurukul Philosophy & Pillars */}
        <WhyTis onOpenEnquiry={handleOpenEnquiry} />

        {/* 16+ Olympic & Modern Sports Foundation */}
        <SportsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 22-Acre Residential Campus Bento Grid */}
        <CampusBento onOpenEnquiry={handleOpenEnquiry} />

        {/* A Day in the Life (Daily Routine Timeline) */}
        <DailyRoutine />

        {/* Influential Champions & Dignitaries On Campus */}
        <DignitariesSection />

        {/* Parent & Alumni Testimonials */}
        <Testimonials />

        {/* 4-Step Admission Journey */}
        <AdmissionProcess onOpenEnquiry={handleOpenEnquiry} />

        {/* Parent FAQ Accordion */}
        <FaqSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* 5. Rich Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* 6. Quick Enquiry & Campus Tour Booking Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
      />
    </div>
  );
}
