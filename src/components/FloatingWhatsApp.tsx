import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone, MapPin, Award } from 'lucide-react';
import { LogoInicial, LogoPrimaria } from './Logo.tsx';

interface FloatingWhatsAppProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  isOpen,
  onToggle,
  onClose,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('vacantes');

  const topics = [
    { id: 'vacantes', label: 'Vacantes e Inscripción' },
    { id: 'aranceles', label: 'Aranceles y Requisitos' },
    { id: 'visita', label: 'Coordinar Entrevista' },
  ];

  const getMessageText = (levelName: string) => {
    let topicText = 'información sobre vacantes y el proyecto pedagógico';
    if (selectedTopic === 'aranceles') topicText = 'información sobre aranceles y requisitos de matriculación';
    if (selectedTopic === 'visita') topicText = 'coordinar una entrevista y visita institucional';

    return `Hola ${levelName}! Quisiera consultar ${topicText} para el ciclo lectivo en el Colegio Benito Quinquela.`;
  };

  const handleOpenChat = (phone: string, levelName: string) => {
    const text = encodeURIComponent(getMessageText(levelName));
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-16 md:bottom-5 right-3.5 md:right-5 z-50 flex flex-col items-end pb-[env(safe-area-inset-bottom,0px)]">
      
      {/* Popover Card */}
      {isOpen && (
        <div 
          className="mb-2.5 w-[calc(100vw-1.75rem)] max-w-[370px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight">
                  Atención por WhatsApp
                </h4>
                <p className="text-[11px] text-emerald-100">
                  Elegí el nivel para chatear directamente
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            
            {/* Quick Topic Chips */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Motivo de tu consulta:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {topics.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(t.id)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      selectedTopic === t.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Level 1: Nivel Inicial */}
            <div
              onClick={() => handleOpenChat('5492214091176', 'Jardín de Infantes')}
              className="group p-3.5 rounded-xl border border-emerald-200/90 hover:border-emerald-500 bg-emerald-50/40 hover:bg-emerald-50 transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-xs shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <LogoInicial className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Nivel Inicial (Jardín)
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 leading-tight">
                    221-4091176
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Calle 44 Nº 759 · Salas 2 a 5 años
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Level 2: Nivel Primario */}
            <div
              onClick={() => handleOpenChat('5492216693513', 'Colegio Primario')}
              className="group p-3.5 rounded-xl border border-blue-200/90 hover:border-blue-500 bg-blue-50/40 hover:bg-blue-50 transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-xs shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <LogoPrimaria className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                    Nivel Primario (Colegio)
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 leading-tight">
                    221-6693513
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Calle 40 Nº 669 · 1º a 6º año
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="text-center text-[11px] text-slate-400">
              Horario de atención: Lun a Vie de 8:00 a 17:00 hs
            </div>

          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={onToggle}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-500"
        aria-label="Abrir selector de WhatsApp para Nivel Inicial o Primario"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-emerald-600 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-emerald-600" />
        </div>
        
        <span className="text-xs sm:text-sm font-extrabold tracking-wide whitespace-nowrap">
          WhatsApp · Elegir Nivel
        </span>
      </button>

    </div>
  );
};
