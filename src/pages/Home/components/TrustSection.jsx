import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Wrench, 
  ArrowUpRight,
  Info,
  Layers
} from 'lucide-react';

/**
 * CONFIGURACIÓN DE CONTENIDO ESTRATÉGICO
 */
const TRUST_CONTENT = {
  backgroundText: "TRUST",
  ticker: [
    "OCAÑA_WAREHOUSE_SYNCED",
    "CATATUMBO_LOGISTICS_ACTIVE",
    "PRECISION_LEVEL_MAX"
  ],
  cards: [
    {
      id: "001_DISTRIBUTION",
      title: <>DISTRIBUCIÓN <br/>ALTO IMPACTO</>,
      description: "Logística geolocalizada para entregas en Ocaña en tiempo récord. Su proyecto no se detiene.",
      icon: <Truck size={24} />,
      cta: "Ver protocolo",
      type: "logistic" // Para estilos específicos si fuera necesario
    },
    {
      id: "002_SPECIFICATIONS",
      title: <>MATERIALES <br/>CERTIFICADOS</>,
      description: "Cada perno, cada bulto y cada herramienta cumple con el estándar de resistencia ASTM.",
      icon: <ShieldCheck size={60} />,
      type: "quality"
    },
    {
      id: "003_ENGINEERING",
      title: <>ASISTENCIA <br/>DE CAMPO</>,
      description: "Expertos técnicos listos para asesorar la viabilidad de sus suministros en sitio.",
      icon: <Wrench size={32} />,
      cta: "Contactar Ingeniero",
      type: "support"
    }
  ]
};

const TrustSection = () => {
  const { backgroundText, ticker, cards } = TRUST_CONTENT;

  return (
    <section className="py-12 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(#1e2948 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-0 left-[5%] lg:left-[10%] w-px h-full bg-slate-200/60 hidden md:block" />

      <div className="absolute -right-20 top-20 w-64 h-64 md:w-96 md:h-96 border border-[#0e7a83]/10 rounded-full pointer-events-none" />
      <div className="absolute -right-10 top-32 w-64 h-64 md:w-96 md:h-96 border border-[#d1db3f]/20 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LADO 1: EJE TIPOGRÁFICO */}
          <div className="lg:w-1/6 flex flex-row lg:flex-col justify-between items-center lg:items-start border-l-4 lg:border-l-2 border-[#1e2948] pl-4 md:pl-6 py-2 md:py-4">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1e2948] opacity-10 select-none lg:[writing-mode:vertical-lr] lg:rotate-180 leading-none">
              {backgroundText}
            </h2>
            <div className="flex lg:flex flex-col gap-4 lg:gap-6 text-[#0e7a83] opacity-40 lg:opacity-100">
              <Layers size={24} className="md:w-8 md:h-8" />
              <Info size={24} className="md:w-8 md:h-8 hidden md:block" />
            </div>
          </div>

          {/* LADO 2: GRID ASIMÉTRICO */}
          <div className="lg:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            
            {/* Tarjeta 1: Logística */}
            <div className="relative bg-white p-6 md:p-8 lg:mt-12 border-t-8 border-[#1e2948] shadow-xl transition-all duration-500 lg:hover:-translate-y-4 group">
              <div className="absolute -top-4 -left-2 md:-left-4 bg-[#d1db3f] p-3 text-[#1e2948] shadow-lg group-hover:rotate-12 transition-transform">
                {React.cloneElement(cards[0].icon, { size: 24 })}
              </div>
              <div className="mt-4">
                <span className="font-mono text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">#{cards[0].id}</span>
                <h3 className="text-xl md:text-2xl font-black text-[#1e2948] mt-2 mb-4 tracking-tighter uppercase leading-tight">{cards[0].title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cards[0].description}</p>
                <div className="mt-8 flex items-center gap-2 text-[#0e7a83] font-bold text-xs uppercase cursor-pointer hover:gap-3 transition-all">
                  {cards[0].cta} <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Calidad */}
            <div className="relative bg-[#1e2948] p-6 md:p-8 lg:-mt-6 shadow-2xl transition-transform duration-500 lg:hover:scale-[1.02]">
              <div className="absolute top-4 right-4 text-[#d1db3f]/10">
                {cards[1].icon}
              </div>
              <div className="relative z-10">
                <span className="font-mono text-[9px] md:text-[10px] text-[#d1db3f] font-bold uppercase">#{cards[1].id}</span>
                <h3 className="text-xl md:text-2xl font-black text-white mt-2 mb-4 tracking-tighter uppercase leading-tight">{cards[1].title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{cards[1].description}</p>
                <div className="mt-10 h-1 w-full bg-[#0e7a83]/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#d1db3f] animate-loading-bar" />
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Soporte */}
            <div className="relative bg-[#d1db3f] p-6 md:p-8 md:mt-0 lg:mt-24 border-2 border-[#1e2948] group md:col-span-2 lg:col-span-1">
              <div className="absolute -bottom-6 -right-6 bg-white p-4 border-2 border-[#1e2948] hidden xl:block group-hover:bg-[#0e7a83] transition-colors">
                {React.cloneElement(cards[2].icon, { className: "group-hover:text-white" })}
              </div>
              <div>
                <span className="font-mono text-[9px] md:text-[10px] text-[#1e2948]/60 font-bold uppercase">#{cards[2].id}</span>
                <h3 className="text-xl md:text-2xl font-black text-[#1e2948] mt-2 mb-4 tracking-tighter uppercase leading-tight">{cards[2].title}</h3>
                <p className="text-[#1e2948]/80 text-sm leading-relaxed font-bold">{cards[2].description}</p>
                <button className="mt-6 w-full py-4 bg-[#1e2948] text-white font-black text-[10px] uppercase tracking-[2px] hover:bg-[#0e7a83] transition-colors active:scale-95 duration-200">
                  {cards[2].cta}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* --- DATA STRIP --- */}
        <div className="mt-16 md:mt-24 border-y border-slate-300 py-4 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10" />
          
          <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
            <span className="flex items-center gap-2 font-mono text-[10px] font-bold text-[#1e2948] italic shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 
              DATA_STREAM: LIVE
            </span>
            {[1, 2, 3].map(i => (
              <span key={i} className="text-slate-400 font-mono text-[10px] uppercase tracking-widest shrink-0">
                // {ticker.join(' // ')}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading-bar { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        .animate-loading-bar { animation: loading-bar 3s infinite linear; }
        .animate-marquee { animation: marquee 20s infinite linear; }
      `}} />
    </section>
  );
};

export default TrustSection;