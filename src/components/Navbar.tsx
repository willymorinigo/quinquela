import React, { useState, useEffect } from 'react';
import { SchoolLogo } from './Logo.tsx';
import { Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenWhatsAppSelector?: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWhatsAppSelector,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const navLinks = [
    { label: 'Propuesta', id: 'propuesta' },
    { label: 'Valores', id: 'valores' },
    { label: 'Talleres', id: 'talleres' },
    { label: 'Galería', id: 'galeria' },
    { label: 'Comunidad', id: 'comunidad' },
    { label: 'Ubicación', id: 'ubicacion' },
  ];

  const sectionIds = ['inicio', 'propuesta', 'valores', 'talleres', 'galeria', 'comunidad', 'ubicacion', 'contacto'];

  useEffect(() => {
    const handleScroll = () => {
      // Contract header when user scrolls down
      setIsScrolled(window.scrollY > 30);

      // ScrollSpy: identify which section is currently active
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('inicio');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  const isContactActive = activeSection === 'contacto';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2 sm:py-2.5'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5 lg:py-6 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Logo (larger when at top, contracts smoothly when scrolled) */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600 rounded-lg group"
            aria-label="Colegio Benito Quinquela - Inicio"
          >
            <SchoolLogo variant="header" isCompact={isScrolled} />
          </a>

          {/* Zone 2: Navigation Links with Active State */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1.5 px-3.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold shadow-xs ring-1 ring-blue-600/30'
                      : 'text-slate-600 hover:text-[#002b5b] hover:bg-slate-100/70 font-medium'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse shrink-0" />
                  )}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button with active state indicator */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => handleLinkClick('contacto')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white rounded-xl transition-all whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 flex items-center gap-1.5 ${
                isContactActive
                  ? 'bg-[#002b5b] ring-2 ring-blue-500 ring-offset-2 shadow-lg scale-105'
                  : 'bg-blue-700 hover:bg-blue-800 shadow-sm hover:shadow'
              }`}
            >
              {isContactActive && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              )}
              <span>Consultar Vacantes</span>
            </button>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600 pl-3'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-blue-700'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </button>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => handleLinkClick('contacto')}
              className={`w-full py-2.5 px-4 text-center font-bold text-sm text-white rounded-xl shadow-sm transition-all ${
                isContactActive ? 'bg-[#002b5b] ring-2 ring-blue-400' : 'bg-blue-700 hover:bg-blue-800'
              }`}
            >
              Inscripciones y Vacantes
            </button>
            {onOpenWhatsAppSelector && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppSelector();
                }}
                className="w-full py-2.5 px-4 text-center font-semibold text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Elegir Nivel en WhatsApp
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
