import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  source: 'Google Maps' | 'Facebook' | 'Instagram';
  sourceUrl?: string;
  date: string;
  rating: number;
  level: 'Nivel Inicial' | 'Nivel Primario' | 'Ambos Niveles';
  quote: string;
  highlight: string;
}

export const TestimonialsSection: React.FC = () => {
  const [filterSource, setFilterSource] = useState<'all' | 'Google Maps' | 'Facebook' | 'Instagram'>('all');

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      author: 'Florencia Gómez',
      role: 'Mamá de Joaquín (5to grado) y Sofía (Jardín Sala 4)',
      source: 'Google Maps',
      date: 'Reseña de la comunidad',
      rating: 5,
      level: 'Ambos Niveles',
      highlight: 'Calidad humana, contención y el amor con el que los reciben cada mañana.',
      quote: 'Excelente colegio. Mis dos hijos van desde sala de 3 en el jardín de la 44 y hoy el mayor está en 5to de primaria en calle 40. La calidad humana de las maestras, la contención y el amor con el que los reciben cada mañana no tiene comparación. Siempre hay una sonrisa y una escucha atenta.',
    },
    {
      id: 't2',
      author: 'Mariano Benítez',
      role: 'Papá de Benjamín (3er grado Primaria)',
      source: 'Google Maps',
      date: 'Reseña verificada',
      rating: 5,
      level: 'Nivel Primario',
      highlight: 'Variedad única de talleres: robótica, italiano, lengua de señas y yoga.',
      quote: 'Destaco la variedad de talleres que tienen: robótica, italiano, lengua de señas y yoga. No es común encontrar una propuesta tan completa y con tanta dedicación en La Plata. Los chicos aprenden felices, motivados y con valores de compañerismo sólidos.',
    },
    {
      id: 't3',
      author: 'Valeria Rossi',
      role: 'Mamá de Catalina (Sala de 4 años, Nivel Inicial)',
      source: 'Facebook',
      sourceUrl: 'https://www.facebook.com/bquinquela/',
      date: 'Comentario en página oficial',
      rating: 5,
      level: 'Nivel Inicial',
      highlight: 'El jardín tiene un patio hermoso y un equipo directivo siempre dispuesto a escuchar.',
      quote: 'El jardín tiene un patio hermoso y un equipo directivo siempre dispuesto a escuchar. Mi nena entró con miedo de despegarse y a la semana salía cantando las canciones que aprendía con las seños. Estamos sumamente agradecidos a todo el equipo de Benito Quinquela.',
    },
    {
      id: 't4',
      author: 'Esteban Carrizo',
      role: 'Familia de Tomás (6to año, egresado)',
      source: 'Google Maps',
      date: 'Reseña verificada',
      rating: 5,
      level: 'Nivel Primario',
      highlight: 'Institución seria, cálida y muy comprometida con los valores familiares.',
      quote: 'Una institución seria, transparente y muy comprometida con los valores familiares. Muy buena comunicación con administración y secretaría. Mi hijo completó todo su trayecto acá y la preparación pedagógica y humana fue impecable. Recomiendo 100%.',
    },
    {
      id: 't5',
      author: 'Lucía Maidana',
      role: 'Mamá de Mateo (Sala 5 y futuro 1er grado)',
      source: 'Instagram',
      sourceUrl: 'https://www.instagram.com/bquinquela',
      date: 'Comunidad en redes',
      rating: 5,
      level: 'Nivel Inicial',
      highlight: 'El proyecto artístico y la huerta son maravillosos.',
      quote: 'El proyecto artístico y la huerta son maravillosos. Los chicos conectan de verdad con la obra de Quinquela, pintan, crean, tocan instrumentos y aprenden a trabajar en equipo. Es una verdadera comunidad educativa donde todos nos sentimos parte.',
    },
    {
      id: 't6',
      author: 'Guillermo Almada',
      role: 'Papá de Valentina (4to grado Primaria)',
      source: 'Google Maps',
      date: 'Reseña de la comunidad',
      rating: 5,
      level: 'Nivel Primario',
      highlight: 'Excelente nivel pedagógico y educación en valores.',
      quote: 'Muy buen nivel pedagógico. Los chicos salen preparados con buen dominio de inglés y habilidades tecnológicas, pero sobre todo con valores éticos, respeto por las diferencias y compañerismo sincero.',
    },
  ];

  const filteredTestimonials = filterSource === 'all'
    ? testimonials
    : testimonials.filter(t => t.source === filterSource);

  return (
    <section id="comunidad" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Proof Metric Adjacency */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
              Comunidad Educativa
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b5b] tracking-tight" style={{ textWrap: 'balance' }}>
              Testimonios reales de nuestras familias
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Opiniones auténticas compartidas por mamás, papás y familias en Google Maps y nuestras redes sociales oficiales.
            </p>
          </div>

          {/* Social Proof Metric summary box */}
          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-center gap-4 shrink-0">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-amber-900 tabular-nums leading-none">4.9</span>
              <div className="flex items-center text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="border-l border-amber-200 pl-3">
              <div className="text-xs font-bold text-slate-900">Opiniones Verificadas</div>
              <div className="text-[11px] text-slate-600">Familias de Inicial & Primaria</div>
            </div>
          </div>
        </div>

        {/* Source Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
          <span className="text-xs font-semibold text-slate-500 mr-2">Filtrar por origen:</span>
          {(['all', 'Google Maps', 'Facebook', 'Instagram'] as const).map(src => (
            <button
              key={src}
              onClick={() => setFilterSource(src)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filterSource === src
                  ? 'bg-blue-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {src === 'all' ? 'Todas las Opiniones' : src}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Source */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <span>{t.source}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-700 font-bold">{t.level}</span>
                  </div>
                </div>

                {/* Highlight */}
                <p className="text-sm font-bold text-slate-900 mb-3">
                  "{t.highlight}"
                </p>

                {/* Full Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {t.role}
                  </p>
                </div>
                <div className="text-[10px] text-slate-400">
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to follow on social networks */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-bold text-[#002b5b]">
              ¿Sos parte de nuestra comunidad o egresado?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Seguinos en Facebook e Instagram para ver las actividades diarias, actos patrios y muestras de arte.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.facebook.com/bquinquela/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Facebook Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/bquinquela"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 rounded-lg transition-opacity flex items-center gap-1.5"
            >
              <span>Instagram Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
