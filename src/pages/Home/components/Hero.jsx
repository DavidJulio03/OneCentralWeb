import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Maximize, 
  Construction, 
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';

// --- CONFIGURACIÓN DE CONTENIDO Y RUTAS ---
const HERO_CONTENT = {
  version: "SISTEMA DE SUMINISTRO INDUSTRIAL • V.2026",
  title: {
    main: "POTENCIA",
    highlight: "ESTRUCTURAL",
    end: "PARA TU OBRA."
  },
  description: {
    text: "No solo entregamos materiales, proveemos la ",
    italic: "precisión técnica",
    suffix: " que tu proyecto de ingeniería exige."
  },
  buttons: {
    primary: { label: "VER CATÁLOGO", path: "/category/herramientas" },
    secondary: { label: "COTIZAR PROYECTO", path: "/" }
  },
  badges: [
    { icon: CheckCircle2, text: "Stock Real Ocaña" },
    { icon: Clock, text: "Logística Express" }
  ],
  image: {
    src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    alt: "Maquinaria y Herramientas",
    unitId: "ID_UNIT: 884-OCN",
    scale: "Escala 1:1",
    certification: "Calidad Certificada"
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[750px] bg-[#f8f9fa] overflow-hidden flex items-center py-12 md:py-20 lg:py-0">
      
      {/* --- FONDO TÉCNICO --- */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(#1e2948 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-0 left-[10%] w-px h-full bg-slate-200/60 hidden xl:block" />
      <div className="absolute top-[20%] left-0 w-full h-px bg-slate-200/60 hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* BLOQUE IZQUIERDO: TEXTO */}
          <div className="lg:col-span-7 bg-[#1e2948] p-8 md:p-12 lg:p-16 border-b-[8px] md:border-b-[12px] lg:border-r-[12px] border-[#0e7a83] shadow-2xl lg:shadow-none">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] md:text-xs font-bold text-[#d1db3f] border border-[#d1db3f]/30 px-3 py-1.5 rounded-sm bg-white/5">
                <Compass size={14} className="animate-spin-slow" />
                {HERO_CONTENT.version}
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter">
                {HERO_CONTENT.title.main} <br />
                <span className="text-[#d1db3f]">{HERO_CONTENT.title.highlight}</span> <br />
                {HERO_CONTENT.title.end}
              </h1>

              <p className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed">
                {HERO_CONTENT.description.text} 
                <span className="text-white font-bold italic">{HERO_CONTENT.description.italic}</span> 
                {HERO_CONTENT.description.suffix}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
                {/* Botón Primario con Link */}
                <Link 
                  to={HERO_CONTENT.buttons.primary.path}
                  className="flex items-center justify-center gap-3 bg-[#d1db3f] text-[#1e2948] px-8 md:px-10 py-4 font-black hover:bg-white transition-all group rounded-sm shadow-lg"
                >
                  {HERO_CONTENT.buttons.primary.label}
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>

                {/* Botón Secundario con Link */}
                <Link 
                  to={HERO_CONTENT.buttons.secondary.path}
                  className="flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors rounded-sm backdrop-blur-sm"
                >
                  {HERO_CONTENT.buttons.secondary.label}
                </Link>
              </div>

              {/* Checklist de confianza */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                {HERO_CONTENT.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">
                    <badge.icon size={16} className="text-[#0e7a83]" /> {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BLOQUE DERECHO: IMAGEN */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:pl-12">
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-square group">
              
              <div className="absolute inset-0 border-[1px] border-slate-300 translate-x-6 -translate-y-6 hidden xl:block" />
              
              <div className="relative h-full w-full overflow-hidden border-2 border-[#1e2948] bg-slate-200 shadow-xl">
                <img 
                  src={HERO_CONTENT.image.src} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                  alt={HERO_CONTENT.image.alt}
                />
                
                <div className="absolute top-0 right-0 bg-[#0e7a83] text-white p-3 md:p-4 font-mono text-[10px]">
                  {HERO_CONTENT.image.unitId}
                </div>
                
                <div className="absolute bottom-0 left-0 bg-white p-4 md:p-6 border-t-2 border-r-2 border-[#1e2948]">
                  <Maximize size={24} className="text-[#1e2948] mb-2" />
                  <div className="font-mono text-[9px] md:text-[10px] text-slate-500 leading-tight uppercase font-bold">
                    {HERO_CONTENT.image.scale} <br />
                    {HERO_CONTENT.image.certification}
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-[#d1db3f] p-4 md:p-5 shadow-xl animate-float border-2 border-[#1e2948] z-20">
                <Construction size={28} className="text-[#1e2948] md:w-8 md:h-8" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-5px, -15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
};

export default Hero;