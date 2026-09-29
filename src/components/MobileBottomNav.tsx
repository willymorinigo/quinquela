import React, { useState, useEffect } from 'react';
import { 
  Home, 
  GraduationCap, 
  Palette, 
  MapPin, 
  PhoneCall, 
  MessageCircle 
} from 'lucide-react';

interface MobileBottomNavProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenWhatsAppSelector: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onNavigateToSection,
  onOpenWhatsAppSelector,
}) => {
  const [activeTab, setActiveTab] = useState<string>('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'propuesta', 'talleres', 'ubicacion', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'inicio',
      label: 'Inicio',
      icon: Home,
      action: () => onNavigateToSection('inicio'),
    },
    {
      id: 'propuesta',
      label: 'Niveles',
      icon: GraduationCap,
      action: () => onNavigateToSection('propuesta'),
    },
    {
      id: 'talleres',
      label: 'Talleres',
      badge: '+10',
      icon: Palette,
      action: () => onNavigateToSection('talleres'),
    },
    {
      id: 'ubicacion',
      label: 'Sedes',
      icon: MapPin,
      action: () => onNavigateToSection('ubicacion'),
    },
    {
      id: 'contacto',
      label: 'Contacto',
      icon: PhoneCall,
      action: () => onNavigateToSection('contacto'),
    },
  ];

  return (
    <nav 
      aria-label="Navegación móvil inferior"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1.5 pb-[calc(0.4rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                item.action();
              }}
              className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer relative active:scale-90 ${
                isActive 
                  ? 'text-blue-700 font-bold' 
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {item.badge && (
                  <span className="absolute -top-1.5 -right-3 text-[9px] font-black bg-amber-500 text-white px-1 py-0.2 rounded-full leading-none shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 leading-tight tracking-tight">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-0.5 animate-in fade-in zoom-in" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
