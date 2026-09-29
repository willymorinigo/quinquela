import React from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Phone, 
  Mail, 
  Clock, 
  Bus, 
  Navigation
} from 'lucide-react';
import { LogoInicial, LogoPrimaria } from './Logo.tsx';

export const InteractiveMapSection: React.FC = () => {
  const campuses = [
    {
      id: 'inicial',
      name: 'Sede Nivel Inicial',
      subname: 'Jardín de Infantes Benito Quinquela',
      level: 'Nivel Inicial',
      icon: LogoInicial,
      accentColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      badgeBorder: 'border-emerald-200',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      buttonBg: 'bg-emerald-700 hover:bg-emerald-800',
      address: 'Calle 44 #759 (entre 10 y 11)',
      city: 'La Plata, Buenos Aires',
      lat: -34.913574,
      lng: -57.958345,
      // Google Maps Embed with exact GPS coordinate pin
      embedMapUrl: 'https://maps.google.com/maps?q=-34.913574,-57.958345&t=&z=17&ie=UTF8&iwloc=B&output=embed',
      googleMapsUrl: 'https://www.google.com/maps?q=-34.913574,-57.958345',
      phone: '221-4091176',
      phoneClean: '5492214091176',
      email: 'jardinbquinquela@gmail.com',
      hours: 'Lunes a Viernes de 08:00 a 17:30 hs',
      transit: 'Líneas 273, 214, 506, Este, Oeste y Norte con parada sobre Av. 44 y diagonales cercanas.',
      description: 'Espacio adaptado a las primeras infancias, con patios seguros al aire libre, salas maternales y de infantes climatizadas y sala de psicomotricidad.',
    },
    {
      id: 'primario',
      name: 'Sede Nivel Primario',
      subname: 'Colegio Benito Quinquela',
      level: 'Nivel Primario',
      icon: LogoPrimaria,
      accentColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      badgeBorder: 'border-blue-200',
      badgeBg: 'bg-blue-100 text-blue-800',
      buttonBg: 'bg-blue-700 hover:bg-blue-800',
      address: 'Calle 40 #669 (entre 8 y 9)',
      city: 'La Plata, Buenos Aires',
      lat: -34.908613,
      lng: -57.961340,
      // Google Maps Embed with exact GPS coordinate pin
      embedMapUrl: 'https://maps.google.com/maps?q=-34.908613,-57.961340&t=&z=17&ie=UTF8&iwloc=B&output=embed',
      googleMapsUrl: 'https://www.google.com/maps?q=-34.908613,-57.961340',
      phone: '0221-4215224',
      phoneClean: '5492214215224',
      email: 'quinquelacolegio@gmail.com',
      hours: 'Lunes a Viernes de 07:45 a 16:45 hs (Secretaría hasta 16:30 hs)',
      transit: 'Líneas por Av. 7 (273, 214, Sur, Norte) a solo 1 cuadra y media; corredores de Plaza Olazábal.',
      description: 'Casona clásica platense con aulas informatizadas, laboratorio de robótica y ciencias, biblioteca y talleres artísticos e idiomas integrados.',
    },
  ];

  return (
    <section id="ubicacion" className="py-20 bg-slate-100/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Ubicación Estratégica
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b5b] tracking-tight" style={{ textWrap: 'balance' }}>
            Nuestras 2 Sedes en la Ciudad de La Plata
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Ambas sedes están ubicadas a solo 6 cuadras de distancia en el casco urbano platense, brindando comodidad y cercanía para las familias.
          </p>
        </div>

        {/* 2 Columns: Each campus card with its dedicated Google Map right on top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {campuses.map((campus) => {
            const IconComp = campus.icon;

            return (
              <div
                key={campus.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Campus Header */}
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl ${campus.bgColor} ${campus.accentColor} shrink-0 border ${campus.badgeBorder}`}>
                        <IconComp className="w-8 h-8" />
                      </div>
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wide mb-1 ${campus.badgeBg}`}>
                          {campus.level}
                        </span>
                        <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                          {campus.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {campus.subname}
                        </p>
                      </div>
                    </div>

                    <a
                      href={campus.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors shrink-0"
                      title="Abrir en app de mapas"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Cómo llegar</span>
                    </a>
                  </div>

                  {/* Respective Google Map above campus details with explicit pin coordinates */}
                  <div className="relative w-full h-[280px] sm:h-[320px] bg-slate-100 border-b border-slate-200">
                    {/* Floating badge confirming pinned location */}
                    <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-sm text-xs flex items-center gap-2 pointer-events-none">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                      <span className="font-bold text-slate-800">{campus.address}</span>
                    </div>

                    <iframe
                      title={`Mapa de ubicación ${campus.name}`}
                      src={campus.embedMapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Campus Information & Details */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {campus.description}
                    </p>

                    <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 text-sm block">
                            {campus.address}
                          </span>
                          <span className="text-slate-500 font-medium">
                            {campus.city}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{campus.hours}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">{campus.phone}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="truncate">{campus.email}</span>
                      </div>

                      <div className="flex items-start gap-3 text-slate-500 pt-1">
                        <Bus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{campus.transit}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-2">
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <a
                      href={campus.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2.5 px-4 text-center text-xs font-bold text-white ${campus.buttonBg} rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2`}
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Abrir en Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`https://wa.me/${campus.phoneClean}?text=Hola!%20Quisiera%20consultar%20sobre%20el%20${encodeURIComponent(campus.level)}%20del%20Colegio%20Benito%20Quinquela`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                      title="Contactar por WhatsApp"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
