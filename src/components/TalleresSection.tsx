import React, { useState } from 'react';
import { 
  Bot, 
  Languages, 
  Music, 
  Palette, 
  Sprout, 
  Heart, 
  Activity, 
  Smile, 
  Theater, 
  Info,
  X,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

interface TallerItem {
  id: string;
  name: string;
  category: 'Idiomas' | 'Tecnología' | 'Expresión Artística' | 'Cuerpo & Bienestar' | 'Inclusión & Ecología';
  icon: React.ElementType;
  color: string;
  bgLight: string;
  borderColor: string;
  summary: string;
  description: string;
  skills: string[];
  levels: string;
}

export const TalleresSection: React.FC = () => {
  const [selectedTaller, setSelectedTaller] = useState<TallerItem | null>(null);

  // Exactly 10 unified workshops structured for 5 and 5 modulation
  const talleres: TallerItem[] = [
    {
      id: 'idiomas',
      name: 'Idiomas (Inglés e Italiano)',
      category: 'Idiomas',
      icon: Languages,
      color: 'text-blue-600',
      bgLight: 'bg-blue-50',
      borderColor: 'border-blue-200',
      summary: 'Enseñanza comunicativa del inglés desde el jardín y aproximación cultural al italiano en primaria.',
      description: 'Integramos la formación bilingüe en inglés desde el nivel inicial mediante juegos, canciones y narraciones interactivas, junto con el taller distintivo de lengua y tradiciones italianas en el nivel primario en tributo al legado de Benito Quinquela Martín.',
      skills: ['Bilingüismo temprano en inglés', 'Expresión oral espontánea', 'Tercera lengua y cultura (Italiano)', 'Apertura y sensibilidad global'],
      levels: 'Nivel Inicial & Nivel Primario',
    },
    {
      id: 'robotica',
      name: 'Robótica & Pensamiento Computacional',
      category: 'Tecnología',
      icon: Bot,
      color: 'text-indigo-600',
      bgLight: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      summary: 'Programación en bloques, armado de circuitos, robótica educativa y resolución de problemas.',
      description: 'Los estudiantes dejan de ser consumidores pasivos de tecnología para convertirse en creadores. Desarrollan algoritmos simples, ensamblan piezas mecatrónicas y trabajan cooperativamente para superar desafíos.',
      skills: ['Pensamiento computacional', 'Lógica secuencial', 'Colaboración en equipo', 'Creatividad tecnológica'],
      levels: 'Nivel Inicial & Nivel Primario',
    },
    {
      id: 'arte',
      name: 'Arte Quinquela & Expresión Plástica',
      category: 'Expresión Artística',
      icon: Palette,
      color: 'text-amber-600',
      bgLight: 'bg-amber-50',
      borderColor: 'border-amber-200',
      summary: 'Pintura, modelado, espátula y homenaje vivo al uso libre del color y la identidad comunitaria.',
      description: 'El corazón de nuestra escuela. Exploramos el uso del color, atriles, témperas, arcilla y técnicas mixtas con total libertad creativa, conectando a los alumnos con el patrimonio pictórico argentino e internacional.',
      skills: ['Motricidad fina y precisión', 'Composición visual y color', 'Autoexpresión emocional', 'Apreciación estética'],
      levels: 'Nivel Inicial & Nivel Primario',
    },
    {
      id: 'musica',
      name: 'Música & Ensamble Rítmico',
      category: 'Expresión Artística',
      icon: Music,
      color: 'text-rose-600',
      bgLight: 'bg-rose-50',
      borderColor: 'border-rose-200',
      summary: 'Exploración de instrumentos melódicos, percusión, rítmica corporal y canto colectivo.',
      description: 'La música educa el oído, la atención y el corazón. Abarca desde la exploración sonora y juegos rítmicos en el jardín hasta la ejecución de instrumentos melódicos y ensambles corales en la primaria.',
      skills: ['Afinación y rítmica', 'Concentración y escucha activa', 'Expresión sonora', 'Canto coral colectivo'],
      levels: 'Nivel Inicial & Nivel Primario',
    },
    {
      id: 'huerta',
      name: 'Huerta Orgánica & Ecología',
      category: 'Inclusión & Ecología',
      icon: Sprout,
      color: 'text-emerald-600',
      bgLight: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      summary: 'Conexión con los ciclos naturales, siembra de semillas, compostaje y respeto ambiental.',
      description: 'En nuestro espacio de huerta institucional, los chicos aprenden en contacto directo con la tierra: preparan el suelo, elaboran compost, siembran hortalizas de estación y cosechan sus propios alimentos con orgullo.',
      skills: ['Conciencia ecológica práctica', 'Paciencia y respeto biológico', 'Observación de la naturaleza', 'Trabajo cooperativo'],
      levels: 'Nivel Inicial & Nivel Primario',
    },
    {
      id: 'danza',
      name: 'Danza & Expresión Corporal',
      category: 'Expresión Artística',
      icon: Activity,
      color: 'text-purple-600',
      bgLight: 'bg-purple-50',
      borderColor: 'border-purple-200',
      summary: 'Movimiento rítmico, esquema corporal, coordinación espacial y sincronía grupal.',
      description: 'A través de la danza y el movimiento guiado, los estudiantes descubren las posibilidades expresivas de su cuerpo, la sincronización con la música y el disfrute del espacio colectivo sin inhibiciones.',
      skills: ['Coordinación motriz', 'Conciencia corporal', 'Sentido rítmico', 'Desinhibición y disfrute'],
      levels: 'Nivel Inicial & Nivel Primario',
    },
    {
      id: 'yoga',
      name: 'Yoga Infantil & Mindfulness',
      category: 'Cuerpo & Bienestar',
      icon: Heart,
      color: 'text-teal-600',
      bgLight: 'bg-teal-50',
      borderColor: 'border-teal-200',
      summary: 'Posturas lúdicas, respiración consciente, relajación y autorregulación emocional.',
      description: 'Adaptado a la infancia mediante posturas de animales y cuentos guiados. Brinda herramientas para calmar la mente, mejorar la concentración, corregir posturas y canalizar emociones de forma sana.',
      skills: ['Autorregulación emocional', 'Capacidad de concentración', 'Flexibilidad física', 'Serenidad y calma interior'],
      levels: 'Nivel Inicial & Nivel Primario',
    },
    {
      id: 'teatro',
      name: 'Teatro & Expresión Escénica',
      category: 'Expresión Artística',
      icon: Theater,
      color: 'text-orange-600',
      bgLight: 'bg-orange-50',
      borderColor: 'border-orange-200',
      summary: 'Juegos dramáticos, improvisación, modulación de la voz y confianza frente al público.',
      description: 'El juego teatral ayuda a ponerse en el lugar del otro, perder la timidez y proyectar la voz con claridad. Cada año se preparan pequeñas muestras artísticas donde cada estudiante brilla con luz propia.',
      skills: ['Empatía y cambio de rol', 'Oratoria y proyección vocal', 'Seguridad personal', 'Creatividad narrativa'],
      levels: 'Nivel Primario',
    },
    {
      id: 'lengua-de-senas',
      name: 'Lengua de Señas Argentina (LSA)',
      category: 'Inclusión & Ecología',
      icon: Smile,
      color: 'text-cyan-700',
      bgLight: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      summary: 'Comunicación inclusiva no verbal, empatía ciudadana y apertura a la diversidad.',
      description: 'Un taller pionero que promueve el respeto y la eliminación de barreras en la comunicación. Los chicos aprenden el alfabeto dactilológico, saludos, canciones y frases cotidianas en Lengua de Señas Argentina.',
      skills: ['Inclusión y respeto a la diversidad', 'Expresión gestual y visual', 'Agilidad manual', 'Solidaridad comunitaria'],
      levels: 'Nivel Primario',
    },
    {
      id: 'deporte',
      name: 'Iniciación al Deporte & Fair Play',
      category: 'Cuerpo & Bienestar',
      icon: Activity,
      color: 'text-green-700',
      bgLight: 'bg-green-50',
      borderColor: 'border-green-200',
      summary: 'Juegos motores, destreza física, juego limpio y aprendizaje de hábitos saludables.',
      description: 'Fomenta la actividad física placentera sin presiones competitivas nocivas. Prioriza la cooperación en equipo, el respeto por las normas del juego, el compañerismo y la autosuperación continua.',
      skills: ['Resistencia y motricidad gruesa', 'Juego limpio (Fair Play)', 'Integración grupal', 'Hábitos de vida saludable'],
      levels: 'Nivel Inicial & Nivel Primario',
    },
  ];

  return (
    <section id="talleres" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Formación Integral</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#002b5b] tracking-tight" style={{ textWrap: 'balance' }}>
              Más de 10 Talleres Formativos
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Un programa interdisciplinario que estimula el intelecto, el cuerpo, el arte y la empatía ciudadana en ambas sedes.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 py-2 px-3 rounded-lg border border-slate-200/60">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Toca cualquier taller para ver detalles pedagógicos</span>
          </div>
        </div>

        {/* Talleres Cards Grid — Modulación de 5 y 5 (2 filas de 5 en desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {talleres.map((taller) => {
            const IconComponent = taller.icon;
            return (
              <div
                key={taller.id}
                onClick={() => setSelectedTaller(taller)}
                className="group p-4 sm:p-4.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between active:scale-[0.98]"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className={`p-2 rounded-xl ${taller.bgLight} ${taller.color} group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {taller.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {taller.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {taller.summary}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 text-[10px] truncate max-w-[120px]">{taller.levels}</span>
                  <span className="text-blue-600 group-hover:translate-x-0.5 transition-transform shrink-0">Ver más →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal / App Bottom Sheet Detail for Taller */}
        {selectedTaller && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedTaller(null)}
          >
            <div 
              className="bg-white rounded-t-3xl sm:rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in slide-in-from-bottom sm:zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drag Indicator */}
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />

              <button
                onClick={() => setSelectedTaller(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 cursor-pointer"
                aria-label="Cerrar ventana de detalle"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-4">
                <div className={`p-3 rounded-2xl ${selectedTaller.bgLight} ${selectedTaller.color}`}>
                  {React.createElement(selectedTaller.icon, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    {selectedTaller.category} · {selectedTaller.levels}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    Taller de {selectedTaller.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedTaller.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Capacidades y Aprendizajes que Desarrolla:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedTaller.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedTaller(null)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  Entendido / Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
