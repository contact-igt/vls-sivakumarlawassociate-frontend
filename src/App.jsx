import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AdvocateSection from './components/AdvocateSection';
import ExpertiseSection from './components/ExpertiseSection';
import VideoSection from './components/VideoSection';
import TestimonialSection from './components/TestimonialSection';
import AchievementSection from './components/AchievementSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookConsultationModal from './components/BookConsultationModal';
import ThankYou from './pages/ThankYou';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import useUTMSource from './hooks/useUTMSource';

function Home() {
  useUTMSource();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onBookConsultation={() => setIsModalOpen(true)} />
      <main>
        <HeroSection onBookConsultation={() => setIsModalOpen(true)} />
        <AdvocateSection />
        <ExpertiseSection />
        <VideoSection />
        <AchievementSection />
        <TestimonialSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <BookConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </>
  );
}
