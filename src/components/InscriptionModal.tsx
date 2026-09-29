import React, { useEffect } from 'react';
import { X, ArrowRight, GraduationCap } from 'lucide-react';
import inscripcionImg from '../assets/images/general/inscripcion2027.jpeg';

interface InscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToForm: () => void;
}

export const InscriptionModal: React.FC<InscriptionModalProps> = ({
  isOpen,
  onClose,
  onGoToForm,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 flex flex-col max-h-[92vh] transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 bg-slate-900/60 hover:bg-slate-900 text-white hover:text-amber-300 rounded-full backdrop-blur-md transition-all cursor-pointer shadow-md"
          aria-label="Cerrar ventana emergente"
          title="Cerrar (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Container */}
        <div 
          onClick={onGoToForm}
          className="relative w-full h-56 sm:h-64 bg-slate-900 cursor-pointer overflow-hidden group"
        >
          <img 
            src={inscripcionImg} 
            alt="Abierta la inscripción ciclo lectivo 2027 - Colegio Quinquela Martín" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-5">
            <span className="inline-flex items-center px-3 py-1 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-full shadow-md">
              Inscripciones 2027
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 flex flex-col text-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-extrabold text-blue-700 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            Nivel Inicial & Nivel Primario
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#002b5b] leading-snug tracking-tight">
            Abierta la inscripción para el ciclo lectivo 2027 en todos nuestros niveles
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Te invitamos a formar parte de nuestra comunidad educativa en La Plata. Asegurá la vacante de tu hijo/a completando el formulario de solicitud de información o reserva.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onGoToForm}
              className="w-full sm:flex-1 py-3.5 px-6 font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Ir al formulario de inscripción</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-5 font-semibold text-sm text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer text-center"
            >
              Más tarde
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
