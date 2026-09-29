import React, { useRef, useEffect } from 'react';
import { LogoInicial, LogoPrimaria } from './Logo.tsx';
import heroVideo from '../assets/videos/hero.mp4';
import heroPoster from '../assets/images/general/hero_school_learning.jpg';

interface HeroProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenWhatsAppSelector?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToSection,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <section id="inicio" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden bg-slate-950">
      
      {/* Background Video occupying full hero */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        />

        {/* Sophisticated scrim overlay for high legibility & brand mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001d3d]/90 via-[#002b5b]/75 to-[#001428]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,10,25,0.6)_100%)]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md"
          >
            <span className="block">Educación con calidez humana,</span>
            <span className="block">arte, idiomas y tecnología</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-100 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-sm">
            Inspirados en el espíritu transformador de <strong>Benito Quinquela Martín</strong>, acompañamos a las infancias de La Plata desde sus primeros pasos en el jardín hasta la consolidación de su autonomía en la escuela primaria.
          </p>

          {/* Quick Level Highlights with Real Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-3xl mx-auto text-left">
            <div 
              onClick={() => onNavigateToSection('propuesta')}
              className="group p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 hover:border-emerald-400/80 transition-all cursor-pointer shadow-lg"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-white rounded-xl shadow-xs shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <LogoInicial className="w-9 h-9" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-white text-base group-hover:text-emerald-300 transition-colors">
                      Nivel Inicial · Jardín
                    </h3>
                  </div>
                  <p className="text-xs text-slate-200 mt-1 leading-snug">
                    Salas de 2, 3, 4 y 5 años · Juego, estimulación y afecto en Calle 44 Nº 759.
                  </p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => onNavigateToSection('propuesta')}
              className="group p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 hover:border-sky-400/80 transition-all cursor-pointer shadow-lg"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-white rounded-xl shadow-xs shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <LogoPrimaria className="w-9 h-9" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-white text-base group-hover:text-sky-300 transition-colors">
                      Nivel Primario · Colegio
                    </h3>
                  </div>
                  <p className="text-xs text-slate-200 mt-1 leading-snug">
                    1º a 6º año · Doble lengua, robótica y talleres en Calle 40 Nº 669.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
