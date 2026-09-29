import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { InstitutionalValues } from './components/InstitutionalValues.tsx';
import { PedagogicalLevels } from './components/PedagogicalLevels.tsx';
import { TalleresSection } from './components/TalleresSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { InteractiveMapSection } from './components/InteractiveMapSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { MobileBottomNav } from './components/MobileBottomNav.tsx';
import { InscriptionModal } from './components/InscriptionModal.tsx';

export default function App() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [contactInitialLevel, setContactInitialLevel] = useState<'inicial' | 'primario'>('inicial');
  const [isInscriptionModalOpen, setIsInscriptionModalOpen] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLevelForContact = (level: 'inicial' | 'primario') => {
    setContactInitialLevel(level);
    scrollToSection('contacto');
  };

  const handleGoToFormFromModal = () => {
    setIsInscriptionModalOpen(false);
    scrollToSection('contacto');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900 pb-16 md:pb-0">
      {/* Strict Top Bar Navigation */}
      <Navbar
        onOpenWhatsAppSelector={() => setIsWhatsAppOpen(true)}
        onNavigateToSection={scrollToSection}
      />

      {/* Main One Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onNavigateToSection={scrollToSection}
          onOpenWhatsAppSelector={() => setIsWhatsAppOpen(true)}
        />

        {/* Institutional Values & Legacy of Quinquela */}
        <InstitutionalValues />

        {/* Pedagogical Proposal per Cycle (Inicial & Primario) */}
        <PedagogicalLevels
          onSelectLevelForContact={handleSelectLevelForContact}
          onOpenWhatsAppSelector={() => setIsWhatsAppOpen(true)}
        />

        {/* Official Workshops: Más de 10 Talleres (Modulación 5 y 5) */}
        <TalleresSection />

        {/* Image Gallery with Lightbox */}
        <GallerySection />

        {/* Real Testimonials from Google Maps and Social Media */}
        <TestimonialsSection />

        {/* Dual-Campus Interactive Map (Calle 44 & Calle 40) */}
        <InteractiveMapSection />

        {/* Contact & Inscription Form with Level Selection */}
        <ContactSection
          initialLevel={contactInitialLevel}
        />
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigateToSection={scrollToSection}
        onOpenWhatsAppSelector={() => setIsWhatsAppOpen(true)}
      />

      {/* App-like Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        onNavigateToSection={scrollToSection}
        onOpenWhatsAppSelector={() => setIsWhatsAppOpen(true)}
      />

      {/* Floating Multi-Level WhatsApp Selector */}
      <FloatingWhatsApp
        isOpen={isWhatsAppOpen}
        onToggle={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      {/* Auto-opening Inscription 2027 Popup Modal */}
      <InscriptionModal
        isOpen={isInscriptionModalOpen}
        onClose={() => setIsInscriptionModalOpen(false)}
        onGoToForm={handleGoToFormFromModal}
      />
    </div>
  );
}
