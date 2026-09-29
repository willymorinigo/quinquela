import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageCircle, 
  Copy, 
  Check, 
  Facebook, 
  Instagram,
  GraduationCap,
  Baby
} from 'lucide-react';
import { LogoInicial, LogoPrimaria } from './Logo.tsx';

interface ContactSectionProps {
  initialLevel?: 'inicial' | 'primario';
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialLevel = 'inicial',
}) => {
  const [level, setLevel] = useState<'inicial' | 'primario'>(initialLevel === 'primario' ? 'primario' : 'inicial');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [selectedClass, setSelectedClass] = useState('Sala de 3 años');
  const [shift, setShift] = useState<'manana' | 'tarde' | 'indistinto'>('manana');
  const [message, setMessage] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const salitasInicial = [
    'Sala de 2 años (Maternal)',
    'Sala de 3 años',
    'Sala de 4 años',
    'Sala de 5 años (Preescolar)',
  ];

  const gradosPrimaria = [
    '1º Año / Grado de Primaria',
    '2º Año / Grado de Primaria',
    '3º Año / Grado de Primaria',
    '4º Año / Grado de Primaria',
    '5º Año / Grado de Primaria',
    '6º Año / Grado de Primaria',
  ];

  // Sync selected level from props
  useEffect(() => {
    if (initialLevel) {
      setLevel(initialLevel);
      setSelectedClass(initialLevel === 'inicial' ? salitasInicial[1] : gradosPrimaria[0]);
    }
  }, [initialLevel]);

  // When user toggles level, automatically switch class options
  const handleLevelChange = (newLevel: 'inicial' | 'primario') => {
    setLevel(newLevel);
    setSelectedClass(newLevel === 'inicial' ? salitasInicial[1] : gradosPrimaria[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getTargetWhatsAppNumber = () => {
    if (level === 'inicial') return '5492214091176'; // Jardin 44
    return '5492214215224'; // Primaria 40
  };

  const formatSummaryMessage = () => {
    const levelLabel = level === 'inicial' 
      ? 'Nivel Inicial (Jardín Calle 44)' 
      : 'Nivel Primario (Colegio Calle 40)';
    const shiftLabel = shift === 'manana' ? 'Turno Mañana' : shift === 'tarde' ? 'Turno Tarde' : 'Turno Indistinto / Jornada Completa';

    return `Hola Colegio Benito Quinquela!
Quisiera consultar vacantes para: ${levelLabel}
• Sala o Grado: ${selectedClass}
• Adulto responsable: ${parentName || 'No indicado'}
• Teléfono: ${phone || 'No indicado'}
• Correo: ${email || 'No indicado'}
• Alumno/a: ${studentName || 'Aspirante'}
• Preferencia de turno: ${shiftLabel}
• Consulta: ${message || 'Solicito entrevista informativa y detalles del arancel.'}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatSummaryMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenDirectWhatsApp = () => {
    const text = encodeURIComponent(formatSummaryMessage());
    window.open(`https://wa.me/${getTargetWhatsAppNumber()}?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Inscripciones & Contacto
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b5b] tracking-tight" style={{ textWrap: 'balance' }}>
            Consultá por Vacantes y Entrevistas Informativas
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Completá el formulario para solicitar vacante en Nivel Inicial o Primario, o contactate directamente con cada sede.
          </p>
        </div>

        {/* 1. Full-Width 1-Column Form Container */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-50/90 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-black text-slate-900">
                    ¡Consulta registrada con éxito!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Gracias por tu interés en el Colegio Benito Quinquela. Podés enviar tu consulta ahora mismo por WhatsApp al número directo del ciclo seleccionado para una respuesta ágil:
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleOpenDirectWhatsApp}
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar a WhatsApp ({level === 'inicial' ? 'Nivel Inicial' : 'Nivel Primario'})</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                    <span>{copied ? 'Copiado al portapapeles' : 'Copiar texto'}</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs text-blue-700 font-semibold hover:underline cursor-pointer"
                  >
                    ← Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Selector de Ciclo (Inicial vs Primario) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    1. Elegí el nivel que deseas consultar *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <button
                      type="button"
                      onClick={() => handleLevelChange('inicial')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                        level === 'inicial'
                          ? 'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-bold ring-2 ring-emerald-400/40 shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-100/70 text-slate-700'
                      }`}
                    >
                      <LogoInicial className="w-9 h-9 shrink-0" />
                      <div>
                        <div className="text-base font-extrabold leading-tight">Nivel Inicial</div>
                        <div className="text-xs text-slate-500 mt-0.5">Jardín de Infantes · Calle 44 Nº 759</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLevelChange('primario')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                        level === 'primario'
                          ? 'border-blue-600 bg-blue-50/90 text-blue-950 font-bold ring-2 ring-blue-400/40 shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-100/70 text-slate-700'
                      }`}
                    >
                      <LogoPrimaria className="w-9 h-9 shrink-0" />
                      <div>
                        <div className="text-base font-extrabold leading-tight">Nivel Primario</div>
                        <div className="text-xs text-slate-500 mt-0.5">Colegio Primario · Calle 40 Nº 669</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 2. Responsable Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Adulto Responsable *
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Nombre y Apellido"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej: 221 123 4567"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu-email@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* 3. Student info + Dynamic Dropdown for Salitas / Grados + Shift */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nombre del Alumno/a *
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Nombre del aspirante"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                    />
                  </div>

                  {/* Dynamic Dropdown: Salitas for Inicial or Grados for Primario */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center justify-between">
                      <span>
                        {level === 'inicial' ? 'Salita a la que aspira *' : 'Grado al que aspira *'}
                      </span>
                      <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                        {level === 'inicial' ? 'Nivel Inicial' : 'Nivel Primario'}
                      </span>
                    </label>
                    <select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 cursor-pointer font-medium"
                    >
                      {level === 'inicial' ? (
                        salitasInicial.map((salita) => (
                          <option key={salita} value={salita}>
                            {salita}
                          </option>
                        ))
                      ) : (
                        gradosPrimaria.map((grado) => (
                          <option key={grado} value={grado}>
                            {grado}
                          </option>
                        ))
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Turno Preferido
                    </label>
                    <select
                      value={shift}
                      onChange={(e) => setShift(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 cursor-pointer"
                    >
                      <option value="manana">Turno Mañana</option>
                      <option value="tarde">Turno Tarde</option>
                      <option value="indistinto">Indistinto / Jornada Completa</option>
                    </select>
                  </div>
                </div>

                {/* 4. Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Consulta o Mensaje particular (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Contanos tus inquietudes, si querés coordinar una visita al colegio o solicitar aranceles y documentación."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 font-bold text-sm text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Formulario de Consulta</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 2. Contactos por Niveles Abajo en 2 Columnas */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-extrabold text-slate-900">
              Canales Directos por Sede y Nivel
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Atención telefónica, correos y contacto directo por WhatsApp con secretaría y directivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column 1: Nivel Inicial Contact Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-emerald-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 pb-4 border-b border-emerald-100">
                  <div className="p-2 bg-emerald-50 rounded-2xl shrink-0">
                    <LogoInicial className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">
                      JARDÍN DE INFANTES
                    </span>
                    <h4 className="text-xl font-black text-slate-900">
                      Nivel Inicial · Sede Calle 44
                    </h4>
                  </div>
                </div>

                <div className="mt-5 space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Calle 44 Nº 759 (entre 10 y 11)</span>
                      <div className="text-slate-500">La Plata, Buenos Aires</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <a href="mailto:jardinbquinquela@gmail.com" className="font-semibold text-blue-700 hover:underline">
                      jardinbquinquela@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <a href="tel:2214091176" className="font-bold text-slate-900 hover:text-emerald-700">
                      221-4091176
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/5492214091176?text=Hola%20Jard%C3%ADn%20Benito%20Quinquela!%20Quisiera%20consultar%20por%20vacantes%20para%20Nivel%20Inicial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-center text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chatear por WhatsApp con Nivel Inicial</span>
                </a>
              </div>
            </div>

            {/* Column 2: Nivel Primario Contact Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-blue-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 pb-4 border-b border-blue-100">
                  <div className="p-2 bg-blue-50 rounded-2xl shrink-0">
                    <LogoPrimaria className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-blue-700">
                      COLEGIO PRIMARIO
                    </span>
                    <h4 className="text-xl font-black text-slate-900">
                      Nivel Primario · Sede Calle 40
                    </h4>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Calle 40 Nº 669 (entre 8 y 9)</span>
                      <div className="text-slate-500">La Plata, Buenos Aires</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                    <a href="tel:02214215224" className="font-bold text-slate-900 hover:text-blue-700">
                      0221-4215224
                    </a>
                  </div>

                  <div className="space-y-1 pl-7 border-l-2 border-slate-100 pt-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Dirección:</span>
                      <a href="mailto:quinquelacolegio@gmail.com" className="font-medium text-blue-700 hover:underline">
                        quinquelacolegio@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-[11px] pt-0.5">
                      <span className="text-slate-500">Secretaría:</span>
                      <a href="mailto:quinquelasecretaria@gmail.com" className="font-medium text-blue-700 hover:underline">
                        quinquelasecretaria@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-[11px] pt-0.5">
                      <span className="text-slate-500">Administración:</span>
                      <a href="mailto:benitoquinquela.deptoadm@gmail.com" className="font-medium text-blue-700 hover:underline">
                        benitoquinquela.deptoadm@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/5492214215224?text=Hola%20Colegio%20Benito%20Quinquela!%20Quisiera%20consultar%20por%20vacantes%20para%20Nivel%20Primario."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-center text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                  <span>Chatear por WhatsApp con Nivel Primario</span>
                </a>
              </div>
            </div>

          </div>

          {/* Social Media Channels Strip */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="text-xs font-bold text-slate-900">Canales Digitales Oficiales</div>
              <div className="text-[11px] text-slate-500">Comunidad, novedades y actividades escolares</div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/bquinquela/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-xs font-semibold flex items-center gap-1.5"
                title="Facebook Colegio Benito Quinquela"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/bquinquela"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white hover:opacity-90 transition-opacity text-xs font-semibold flex items-center gap-1.5"
                title="Instagram Colegio Benito Quinquela"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
