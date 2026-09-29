import React from 'react';
import { SchoolLogo } from './Logo.tsx';
import { MapPin, Phone, Mail, Facebook, Instagram, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenWhatsAppSelector: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSection,
  onOpenWhatsAppSelector,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001d3d] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <SchoolLogo variant="full" theme="dark" />
            
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Comunidad educativa inspirada en el ideario de Benito Quinquela Martín. Educación integral, humanista, artística y tecnológica en la ciudad de La Plata.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/bquinquela/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook del Colegio Benito Quinquela"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/bquinquela"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram del Colegio Benito Quinquela"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenWhatsAppSelector}
                className="px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-400 text-xs font-bold transition-colors cursor-pointer"
              >
                Canal WhatsApp
              </button>
            </div>
          </div>

          {/* Col 2: Nivel Inicial Sede */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Sede Nivel Inicial (Jardín)
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Calle 44 Nº 759 (entre 10 y 11), La Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:2214091176" className="hover:text-white">221-4091176</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:jardinbquinquela@gmail.com" className="hover:text-white truncate">
                  jardinbquinquela@gmail.com
                </a>
              </div>
              <div className="pt-1 text-[11px] text-slate-400">
                Salas de 2, 3, 4 y 5 años · Turnos Mañana y Tarde
              </div>
            </div>
          </div>

          {/* Col 3: Nivel Primario Sede */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Sede Nivel Primario (Colegio)
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Calle 40 Nº 669 (entre 8 y 9), La Plata</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="https://wa.me/5492216693513" target="_blank" rel="noopener noreferrer" className="hover:text-white">221-6693513</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:quinquelacolegio@gmail.com" className="hover:text-white truncate">
                  quinquelacolegio@gmail.com
                </a>
              </div>
              <div className="pt-1 text-[11px] text-slate-400">
                1º a 6º año · Doble lengua, Robótica & Talleres
              </div>
            </div>
          </div>

          {/* Col 4: Enlaces rápidos */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Propuesta Pedagógica', id: 'propuesta' },
                { label: 'Valores Quinquela', id: 'valores' },
                { label: '11 Talleres Formativos', id: 'talleres' },
                { label: 'Galería de Fotos', id: 'galeria' },
                { label: 'Testimonios Familias', id: 'comunidad' },
                { label: 'Ubicación de Sedes', id: 'ubicacion' },
                { label: 'Formulario de Contacto', id: 'contacto' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigateToSection(item.id)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Colegio Benito Quinquela · Nivel Inicial & Primario · La Plata, Buenos Aires.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
