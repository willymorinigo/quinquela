import React from 'react';
import { Palette, Heart, Cpu, Users, Compass, BookOpen, CheckCircle2 } from 'lucide-react';
import { QuinquelaSailIcon } from './Logo.tsx';

export const InstitutionalValues: React.FC = () => {
  const values = [
    {
      icon: Palette,
      iconColor: 'text-amber-600 bg-amber-50',
      title: 'El Arte como Motor de Aprendizaje',
      desc: 'Inspirados en Benito Quinquela Martín, el arte no es una materia aislada, sino una lente para explorar el mundo: potencia la creatividad, la resolución de problemas y la sensibilidad estética.',
    },
    {
      icon: Heart,
      iconColor: 'text-rose-600 bg-rose-50',
      title: 'Calidez, Afecto y Contención Familiar',
      desc: 'Sostenemos grupos que permiten el conocimiento profundo de cada estudiante y sus familias. La seguridad emocional es la base irremplazable de todo aprendizaje significativo.',
    },
    {
      icon: Cpu,
      iconColor: 'text-sky-600 bg-sky-50',
      title: 'Pensamiento Crítico & Nuevas Tecnologías',
      desc: 'Integramos robótica educativa, informática y lenguas extranjeras (inglés e italiano) como herramientas vivas de creación colaborativa y comprensión del mundo global.',
    },
    {
      icon: Users,
      iconColor: 'text-emerald-600 bg-emerald-50',
      title: 'Inclusión, Diversidad y Ciudadanía',
      desc: 'Formamos en empatía activa y ciudadanía solidaria a través de proyectos como Lengua de Señas, cuidado del medio ambiente en la huerta y deportes cooperativos.',
    },
  ];

  return (
    <section id="valores" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Identidad Institucional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b5b] tracking-tight" style={{ textWrap: 'balance' }}>
            Nuestros Valores: El espíritu de Quinquela en cada aula
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Benito Quinquela Martín fue un faro de generosidad popular: construyó escuelas, teatros y museos para su comunidad. En nuestro colegio en La Plata mantenemos vivo ese legado formando personas libres, creativas y solidarias.
          </p>
        </div>

        {/* Highlight Quote Banner */}
        <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-blue-900 to-[#002b5b] text-white rounded-2xl shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-10 pointer-events-none">
            <QuinquelaSailIcon className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <p 
              className="italic text-sky-100 leading-relaxed"
              style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif', fontSize: '27px', fontWeight: 'bold' }}
            >
              «El arte no es un privilegio de pocos, sino un derecho de todos para soñar, trabajar y transformar la realidad con color y dignidad.»
            </p>
            <div 
              className="mt-4 flex items-center justify-center gap-3"
              style={{ textAlign: 'center' }}
            >
              <div className="w-8 h-0.5 bg-amber-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300">
                Ideario del Colegio Benito Quinquela
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((v, idx) => {
            const IconComponent = v.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${v.iconColor} shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Points */}
        <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">Seguimiento Personalizado</div>
              <div className="text-xs text-slate-500 mt-1">
                Diálogo fluido con los equipos directivos y docentes en cada etapa.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">Continuidad Pedagógica</div>
              <div className="text-xs text-slate-500 mt-1">
                Articulación cuidada y natural entre el Jardín y la Escuela Primaria.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">Educación Emocional</div>
              <div className="text-xs text-slate-500 mt-1">
                Estrategias de escucha, resolución pacífica de conflictos y empatía.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
