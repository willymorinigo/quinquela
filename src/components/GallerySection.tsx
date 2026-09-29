import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2
} from 'lucide-react';

import galeria1 from '../assets/images/general/galeria1.jpeg';
import galeria2 from '../assets/images/general/galeria2.jpeg';
import galeria3 from '../assets/images/general/galeria3.jpeg';
import galeria4 from '../assets/images/general/galeria4.jpeg';
import galeria5 from '../assets/images/general/galeria5.jpeg';
import galeria6 from '../assets/images/general/galeria6.jpeg';
import galeria7 from '../assets/images/general/galeria7.jpeg';
import galeria8 from '../assets/images/general/galeria8.jpeg';
import galeria9 from '../assets/images/general/galeria9.jpeg';
import galeria10 from '../assets/images/general/galeria10.jpeg';
import galeria11 from '../assets/images/general/galeria11.jpeg';
import galeria12 from '../assets/images/general/galeria12.jpeg';

interface GalleryItem {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
}

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Actividades Pedagógicas en el Aula',
      imageSrc: galeria1,
      description: 'Espacios iluminados y acondicionados para el aprendizaje colaborativo e interactivo.',
    },
    {
      id: 'g2',
      title: 'Juegos y Estimulación Temprana',
      imageSrc: galeria2,
      description: 'Experiencias lúdicas y desarrollo motriz en las salas de Nivel Inicial.',
    },
    {
      id: 'g3',
      title: 'Espacios Escolarizados y Convivencia',
      imageSrc: galeria3,
      description: 'Entornos cuidados diseñados para el desarrollo integral de nuestras alumnas y alumnos.',
    },
    {
      id: 'g4',
      title: 'Expresión Plástica y Talleres de Arte',
      imageSrc: galeria4,
      description: 'Proyectos creativos inspirados en la obra artística y comunitaria de Benito Quinquela Martín.',
    },
    {
      id: 'g5',
      title: 'Proyectos Curriculares y Aprendizaje Activo',
      imageSrc: galeria5,
      description: 'Interacción docente-estudiante para la comprensión profunda y reflexiva.',
    },
    {
      id: 'g6',
      title: 'Recreos y Patios al Aire Libre',
      imageSrc: galeria6,
      description: 'Momentos de juego, esparcimiento y amistad en nuestras sedes de La Plata.',
    },
    {
      id: 'g7',
      title: 'Robótica y Pensamiento Computacional',
      imageSrc: galeria7,
      description: 'Innovación tecnológica aplicada a proyectos prácticos de ciencia y tecnología (STEAM).',
    },
    {
      id: 'g8',
      title: 'Fomento Lector y Lectura Compartida',
      imageSrc: galeria8,
      description: 'Acompañamiento en el desarrollo de la lectocomprensión y amor por la literatura.',
    },
    {
      id: 'g9',
      title: 'Intensificación en Idiomas y Comunicación',
      imageSrc: galeria9,
      description: 'Formación en Inglés e Italiano con dinámicas participativas y multiculturales.',
    },
    {
      id: 'g10',
      title: 'Encuentros y Talleres Especiales',
      imageSrc: galeria10,
      description: 'Actividades vivenciales que integran expresión musical, corporal y comunitaria.',
    },
    {
      id: 'g11',
      title: 'Taller de Huerta y Cuidado del Medio Ambiente',
      imageSrc: galeria11,
      description: 'Conexión con la naturaleza, siembra y responsabilidad ambiental en la escuela.',
    },
    {
      id: 'g12',
      title: 'Comunidad Educativa Quinquela',
      imageSrc: galeria12,
      description: 'Celebraciones y valores compartidos en el trayecto escolar cotidiano.',
    },
  ];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(selectedPhotoIndex === 0 ? galleryItems.length - 1 : selectedPhotoIndex - 1);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(selectedPhotoIndex === galleryItems.length - 1 ? 0 : selectedPhotoIndex + 1);
  };

  // Handle keyboard navigation inside Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex(prev => (prev === null || prev === 0 ? galleryItems.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex(prev => (prev === null || prev === galleryItems.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, galleryItems.length]);

  return (
    <section id="galeria" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Galería Fotográfica Oficial
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b5b] tracking-tight" style={{ textWrap: 'balance' }}>
            Vida cotidiana y proyectos en nuestras sedes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Un recorrido visual por las aulas, talleres, patios y actividades del Nivel Inicial y Nivel Primario. Haz clic en cualquier foto para ampliarla y navegar la galería.
          </p>
        </div>

        {/* Gallery Grid: 3 rows of 4 columns (12 photos total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200/90 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Expand Icon */}
              <div className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-xl text-white opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-sm font-bold leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 line-clamp-1 opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && galleryItems[selectedPhotoIndex] && (
          <div 
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header Bar */}
              <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4 text-white">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    Fotografía {selectedPhotoIndex + 1} de {galleryItems.length}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold truncate">
                    {galleryItems[selectedPhotoIndex].title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors cursor-pointer shrink-0"
                  aria-label="Cerrar visor de imágenes"
                  title="Cerrar (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image View Container */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] overflow-hidden p-2 sm:p-4">
                {/* Previous Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 text-white/90 hover:text-white bg-slate-900/70 hover:bg-slate-900 rounded-full transition-all cursor-pointer shadow-lg hover:scale-105 border border-slate-700/50"
                  aria-label="Foto anterior"
                  title="Anterior (flecha izquierda)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Photo */}
                <img
                  src={galleryItems[selectedPhotoIndex].imageSrc}
                  alt={galleryItems[selectedPhotoIndex].title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
                />

                {/* Next Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 text-white/90 hover:text-white bg-slate-900/70 hover:bg-slate-900 rounded-full transition-all cursor-pointer shadow-lg hover:scale-105 border border-slate-700/50"
                  aria-label="Foto siguiente"
                  title="Siguiente (flecha derecha)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Footer Caption */}
              <div className="p-4 bg-slate-900 text-white border-t border-slate-800 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {galleryItems[selectedPhotoIndex].description}
                </p>

                <div className="flex items-center justify-center gap-2 shrink-0 text-[11px] text-slate-400 font-medium">
                  <span>Navegar con flechas ◀ ▶</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
