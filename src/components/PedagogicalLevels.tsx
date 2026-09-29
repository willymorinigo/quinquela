import React from 'react';
import { 
  Check, 
  ArrowRight, 
  MapPin, 
  Clock, 
  BookOpen, 
  Languages, 
  Cpu
} from 'lucide-react';
import { LogoInicial, LogoPrimaria } from './Logo.tsx';
import inicialImg from '../assets/images/general/inicial.jpeg';
import primariaImg from '../assets/images/general/primaria.jpeg';

interface PedagogicalLevelsProps {
  onSelectLevelForContact: (level: 'inicial' | 'primario') => void;
  onOpenWhatsAppSelector: () => void;
}

export const PedagogicalLevels: React.FC<PedagogicalLevelsProps> = ({
  onSelectLevelForContact,
}) => {
  const inicialFeatures = [
    'Salas de 2, 3, 4 y 5 años con mobiliario e instalaciones adaptadas.',
    'Jornada optativa: Simple, Extendida y Completa para adaptarse a las necesidades familiares.',
    'Pedagogía del juego, la exploración sensorial y el descubrimiento continuo.',
    'Iniciación artística intensiva inspirada en Quinquela Martín (dibujo, pintura, modelado).',
    'Taller de Huerta infantil: contacto directo con la tierra, siembra y cuidado ambiental.',
    'Iniciación temprana al idioma inglés a través de rimas, canciones y cuentos.',
    'Estimulación corporal y psicomotricidad en patios amplios y seguros.',
  ];

  const primarioFeatures = [
    'Ciclo completo de 1º a 6º grado de Educación Primaria.',
    'Jornada optativa: Simple y Completa con acompañamiento pedagógico enriquecido.',
    'Sólida base en Prácticas del Lenguaje, Matemática reflexiva y Ciencias.',
    'Doble formación lingüística: intensificación en Inglés y taller de Italiano.',
    'Robótica educativa y pensamiento computacional aplicados a proyectos reales.',
    'Talleres artísticos integrados: Arte visual, Teatro, Danza y Música instrumental.',
    'Formación inclusiva y ciudadana: Taller formativo de Lengua de Señas.',
  ];

  return (
    <section id="propuesta" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Propuesta Pedagógica
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b5b] tracking-tight" style={{ textWrap: 'balance' }}>
            Dos niveles educativos articulados en una misma identidad
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Acompañamos cada etapa de madurez con proyectos pedagógicos diseñados para despertar la curiosidad intelectual y el amor por el conocimiento.
          </p>
        </div>

        {/* Level Cards Grid: Both levels side-by-side */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* NIVEL INICIAL CARD */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md">
            {/* Card Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-emerald-500/10 via-emerald-50 to-white border-b border-slate-100">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-xs border border-emerald-100 flex items-center justify-center">
                    <LogoInicial className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Jardín de Infantes
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Nivel Inicial
                    </h3>
                  </div>
                </div>
                <div className="text-right text-xs font-semibold text-slate-500">
                  <div>Salas de 2, 3, 4 y 5 años</div>
                  <div className="text-emerald-700 font-bold">Simple, Extendida y Completa</div>
                </div>
              </div>

              <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
                Un entorno seguro y lúdico pensado para el desarrollo socioemocional, la creatividad artística, el primer contacto con el inglés y el aprendizaje a través del juego.
              </p>

              {/* Location metadata */}
              <div className="mt-4 pt-3 border-t border-emerald-100/60 flex items-center flex-wrap gap-2 text-xs text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">Calle 44 N° 759 (10 y 11)</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>La Plata</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>WhatsApp: 221-4091176</span>
              </div>
            </div>

            {/* Visual Image Banner */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src={inicialImg} 
                alt="Actividades didácticas y artísticas en el Nivel Inicial" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white drop-shadow-sm flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-300" />
                  Jornada: Simple, Extendida y Completa · Calle 44
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Ejes del Proyecto Pedagógico
                </h4>
                <ul className="space-y-3">
                  {inicialFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectLevelForContact('inicial')}
                  className="w-full py-3 px-4 text-center font-bold text-sm text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Consultar Vacantes Inicial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* NIVEL PRIMARIO CARD */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md">
            {/* Card Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 via-blue-50 to-white border-b border-slate-100">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-xs border border-blue-100 flex items-center justify-center">
                    <LogoPrimaria className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      Educación Primaria
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Nivel Primario
                    </h3>
                  </div>
                </div>
                <div className="text-right text-xs font-semibold text-slate-500">
                  <div>De 1º a 6º grado</div>
                  <div className="text-blue-700 font-bold">Simple y Completa</div>
                </div>
              </div>

              <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
                Formación académica sólida con pensamiento crítico, intensificación en idiomas, robótica experimental y una nutrida oferta de talleres para el desarrollo integral.
              </p>

              {/* Location metadata */}
              <div className="mt-4 pt-3 border-t border-blue-100/60 flex items-center flex-wrap gap-2 text-xs text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-800">Calle 40 N° 669 (8 y 9)</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>La Plata</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>WhatsApp: 221-6693513</span>
              </div>
            </div>

            {/* Visual Image Banner */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src={primariaImg} 
                alt="Clases de robótica, ciencias y arte en Nivel Primario" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white drop-shadow-sm flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-300" />
                  Jornada: Simple y Completa · Calle 40
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Ejes Destacados del Ciclo
                </h4>
                <ul className="space-y-3">
                  {primarioFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectLevelForContact('primario')}
                  className="w-full py-3 px-4 text-center font-bold text-sm text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Consultar Vacantes Primario</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
