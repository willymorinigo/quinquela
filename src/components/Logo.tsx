import React from 'react';
import officialLogoSvg from '../assets/logos/logo.svg';
import logoInicialImg from '../assets/logos/logo_inicial.png';
import logoPrimariaImg from '../assets/logos/logo_primaria.png';

export { logoInicialImg, logoPrimariaImg, officialLogoSvg };

interface LogoProps {
  variant?: 'full' | 'sail' | 'shield' | 'header';
  className?: string;
  theme?: 'dark' | 'light';
  isCompact?: boolean;
}

/**
 * Exact sailboat vector from official logo.svg
 */
export const QuinquelaSailIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="100 130 550 630" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Yellow rim */}
    <path fill="#f5bf22" d="M493.52,594.26l115.33-13.98c7.74-10.74,14.21-21.31,18.86-34.14l-334.66,38.95-196.6,22.73,15.06,32.93,382-46.49Z"/>
    {/* Light green sail */}
    <path fill="#6ab14c" d="M387.91,410.02c-2.85,49.16-15.6,96.38-39.28,139.76l88.46-10.16,137.2-15.85c7.95-50.62,2.52-101.95-15.22-149.82-15.17-39.98-38.4-75.2-67.84-106.22-42.75-44.13-94.86-78.12-153.35-100.31,16.32,39.08,29.72,76.84,38.52,117.1,9.53,41.55,13.68,82.96,11.52,125.5Z"/>
    {/* Red hull */}
    <path fill="#df3b28" d="M496.59,665.54l24,10.15c14.2-9.18,27.37-19.08,39.49-30.98,13.13-12.85,25.67-25.76,35.41-42.4l-475.38,57.83,14.15,31.12c46.8-16.47,95.95-17.25,142.3-2.06l28.08,9.71c51.36-46.64,128.54-60.18,191.94-33.38Z"/>
    {/* Dark green sail */}
    <path fill="#168d49" d="M316.54,551.5l-7.21-256.37-2.88-88.72c-80.46,108.41-133.05,235.97-162.63,366.52l86.58-10.79,86.14-10.64Z"/>
    {/* Navy wave */}
    <path fill="#32528f" d="M272.33,730.27c40.67,15.58,80.58,24.48,124.61,16.87,11.65-2.61,22.28-5.15,31.79-11.21-52.16,7.11-100.25-2.76-147.72-22.47l-25-8.06c-51.6-14.49-107.76-6.3-152.55,24.18l39.06-9.47c43.71-9.05,88.16-5.81,129.81,10.15Z"/>
    {/* Cyan wave */}
    <path fill="#26a9a9" d="M620.01,709.33c-46.58,5.84-86.84-4.67-128.41-23.37-30.62-13.04-63.11-16.75-95.75-10.07-13.13,2.69-24.9,7.39-36.8,13.25-7.26,3.58-14.42,6.9-20,13,46.26-14.66,90.43-20.23,136.14-2.95l27.18,10.28c36.45,13.78,83.67,19.23,117.63-.14Z"/>
  </svg>
);

/**
 * Exact CBQ Shield vector from official logo.svg
 */
export const CBQShieldIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="2870 140 520 640" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path fill="#69b34a" d="M2923.45,642.74c48.25,61.76,118.14,100.61,192.71,126.33,82.64-29.29,159.2-73.29,206.18-146.76,17.48-27.34,28.6-56.05,31.32-88.82V232.91c0-5.97-4.88-7.84-9.62-9.4l-225.84-74.68c-5.7-1.88-9.44,1.35-14.64,3.07l-217.58,72.03c-4.29,1.42-8.54,3.77-8.54,8.99l.05,302.1c4.47,40.5,21.24,76.1,45.95,107.73ZM3115.98,167.74l140.62,46.44,78.66,26.69-.87,292.61c-.09,31.71-15.81,60.77-32.8,86.26-41.79,62.68-115.5,104.53-186.11,129.26l-63.66-27.33c-54.12-28.25-104.49-66.7-133.78-121.01-15.4-26.98-23.01-55.59-21.65-87.22l-.22-273.08,219.83-72.61Z"/>
    <path fill="#fefefe" d="M2941.22,605.14c41.57,61.63,105.68,97.63,174.83,123.09,21.21-8.62,41.9-16.44,62.32-27.45,26.85-14.07,51.21-30.31,73.45-50.78,15.66-14.98,29.38-29.94,41.25-49.71-39.21,5.17-65.2-16.56-100.94-21.81-25.42-2.59-50.02,2.68-73.48,12.34-2.4.99-5.25-1.14-5.59-2.87-1.47-7.54,55.81-50.7,122.03-20.4,21.73,9.94,43.55,16.4,67.58,15.67,11.24-22.19,16.22-44.85,15.41-69.81l.18-257.24-202.38-66.93-202.67,67.04.14,269.44c1.53,29.47,11.51,55.36,27.86,79.41ZM3176.13,609.28c-22.93,8.86-47.2,6.35-70.74.4l-44.96-14.85c-27.13-8.96-54.75-4.74-83.54-.13,28.87-15.73,62.2-17.95,92.55-7.47l37.79,13.06c22.51,7.78,44.19,9.62,68.91,9Z"/>
    <path fill="#0a3e73" d="M3069.43,587.22c-30.34-10.48-63.67-8.26-92.55,7.47,28.79-4.61,56.42-8.83,83.54.13l44.96,14.85c23.54,5.95,47.81,8.46,70.74-.4-24.71.61-46.39-1.22-68.91-9l-37.79-13.06Z"/>
    <path fill="#06417e" d="M3134.94,505.03l148.69-16.9c4.35-.49,6.09-3.61,5.02-6.67,7.03-68.73-19.1-133.93-69.87-180.26-27.34-24.95-58.33-45.25-92.65-58.98,36.29,86.99,53.21,176.26,8.82,262.8Z"/>
    <path fill="#0e3e6e" d="M2919.72,591.42c40.69,76.72,116.75,122.28,196.61,150.9,39.35-15.14,76.65-31.5,110.18-56.41,35.2-24.49,63.79-55.77,84.58-93.35,9.66-19.44,15.49-38.62,17.7-60.66l.12-286.68-212.73-70.78-213.74,70.57v280.76c.26,23.86,7.72,44.32,17.29,65.65ZM3115.88,189.25l202.38,66.93-.18,257.24c.81,24.95-4.17,47.61-15.41,69.81-24.02.73-45.85-5.74-67.58-15.67-66.22-30.29-123.5,12.87-122.03,20.4.34,1.74,3.19,3.86,5.59,2.87,23.46-9.66,48.06-14.93,73.48-12.34,35.74,5.26,61.72,26.98,100.94,21.81-11.87,19.78-25.59,34.73-41.25,49.71-22.24,20.46-46.6,36.7-73.45,50.78-20.42,11.01-41.11,18.83-62.32,27.45-69.15-25.46-133.26-61.47-174.83-123.09-16.35-24.05-26.34-49.94-27.86-79.41l-.14-269.44,202.67-67.04Z"/>
    <path fill="#06417e" d="M2936.16,316.17c0-28.17,21.56-48.14,50.92-48.14,17.06,0,30.81,6.22,39.81,17.46l-16.66,15.08c-5.82-7.01-12.96-10.84-21.82-10.84-15.21,0-25.79,10.58-25.79,26.45s10.58,26.45,25.79,26.45c8.86,0,16-3.84,21.82-10.84l16.66,15.08c-8.99,11.24-22.75,17.46-39.81,17.46-29.36,0-50.92-19.97-50.92-48.14Z"/>
    <path fill="#06417e" d="M3137.55,391.71c0,16-13.23,25.39-38.09,25.39h-49.99v-92.58h47.35c24.33,0,36.24,9.92,36.24,24.2,0,8.86-4.5,16-12.43,20.1,10.45,3.7,16.93,11.64,16.93,22.88ZM3075.39,343.44v17.85h17.99c8.73,0,13.22-3.04,13.22-8.99s-4.5-8.86-13.22-8.86h-17.99ZM3111.1,388.8c0-6.35-4.76-9.39-13.75-9.39h-21.95v18.78h21.95c8.99,0,13.75-3.04,13.75-9.39Z"/>
    <path fill="#06417e" d="M3106.49,555.34c-6.22,7.54-15.34,11.64-25.92,11.64-15.08,0-25-5.16-40.47-21.29-24.33-4.1-41.26-22.88-41.26-47.35,0-27.77,21.82-48.14,51.45-48.14s51.45,20.37,51.45,48.14c0,21.03-12.56,37.82-31.48,44.7,3.7,3.97,6.88,5.29,10.84,5.29,5.03,0,9.92-2.25,14.02-6.48l11.37,13.49ZM3050.28,524.79c14.02,0,25-10.45,25-26.45s-10.98-26.45-25-26.45-25,10.45-25,26.45,10.98,26.45,25,26.45Z"/>
  </svg>
);

/**
 * Logo oficial Nivel Inicial
 */
export const LogoInicial: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img
    src={logoInicialImg}
    alt="Logo Nivel Inicial - Colegio Benito Quinquela"
    className={`${className} object-contain`}
  />
);

/**
 * Logo oficial Nivel Primario
 */
export const LogoPrimaria: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img
    src={logoPrimariaImg}
    alt="Logo Nivel Primario - Colegio Benito Quinquela"
    className={`${className} object-contain`}
  />
);

export const SchoolLogo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  theme = 'light',
  isCompact = false,
}) => {
  const isLight = theme === 'light';

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2 transition-all duration-300 ease-in-out ${className}`}>
        <img
          src={officialLogoSvg}
          alt="Colegio Benito Quinquela - Nivel Inicial y Primario"
          className={`w-auto object-contain transition-all duration-300 ease-in-out ${
            isCompact
              ? 'h-9 sm:h-10 md:h-11 max-w-[210px] sm:max-w-[280px]'
              : 'h-14 sm:h-16 md:h-18 lg:h-20 max-w-[280px] sm:max-w-[380px] lg:max-w-[460px]'
          }`}
        />
      </div>
    );
  }

  if (variant === 'sail') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <LogoInicial className="w-12 h-12 shrink-0" />
        <div className="flex flex-col">
          <span className={`font-bold text-lg leading-tight tracking-tight ${isLight ? 'text-[#06417e]' : 'text-white'}`}>
            BENITO QUINQUELA
          </span>
          <span className={`text-xs font-semibold tracking-wider uppercase ${isLight ? 'text-[#168d49]' : 'text-emerald-400'}`}>
            NIVEL INICIAL · JARDÍN
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'shield') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <LogoPrimaria className="w-12 h-12 shrink-0" />
        <div className="flex flex-col">
          <span className={`font-bold text-lg leading-tight tracking-tight ${isLight ? 'text-[#06417e]' : 'text-white'}`}>
            BENITO QUINQUELA
          </span>
          <span className={`text-xs font-semibold tracking-wider uppercase ${isLight ? 'text-[#0e3e6e]' : 'text-sky-300'}`}>
            NIVEL PRIMARIO · COLEGIO
          </span>
        </div>
      </div>
    );
  }

  // Full variant (e.g. Footer, large display)
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {theme === 'dark' ? (
        <div className="bg-white/95 rounded-xl p-3 shadow-md inline-block">
          <img
            src={officialLogoSvg}
            alt="Colegio Benito Quinquela - Nivel Inicial y Primario"
            className="h-12 sm:h-14 w-auto max-w-[320px] sm:max-w-[420px] object-contain"
          />
        </div>
      ) : (
        <img
          src={officialLogoSvg}
          alt="Colegio Benito Quinquela - Nivel Inicial y Primario"
          className="h-12 sm:h-16 w-auto max-w-[320px] sm:max-w-[440px] object-contain"
        />
      )}
    </div>
  );
};
