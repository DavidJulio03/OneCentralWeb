import React from 'react';
import { Link } from 'react-router-dom';
import { Frown, ArrowLeft } from 'lucide-react'; // Iconos relevantes para Not Found

// --- CONFIGURACIÓN DE CONTENIDO ---
const NOT_FOUND_CONTENT = {
  title: "404",
  subtitle: "Página No Encontrada",
  description: "Lo sentimos, la página que buscas no existe o ha sido movida.",
  button: {
    label: "Volver al Inicio",
    path: "/"
  },
  image: {
    src: "https://images.unsplash.com/photo-1543286386-778816d25287?auto=format&fit=crop&w=800&q=80", // Imagen de construcción o algo "perdido"
    alt: "Página no encontrada - herramientas desordenadas"
  }
};

const NotFound = () => {
  return (
    <section className="relative min-h-screen bg-[#f8f9fa] overflow-hidden flex items-center py-12 md:py-20 lg:py-0">
      
      {/* --- FONDO TÉCNICO --- */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(#1e2948 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Líneas de eje (opcional, si quieres mantener la estética de "ingeniería") */}
      <div className="absolute top-0 left-[10%] w-px h-full bg-slate-200/60 hidden xl:block" />
      <div className="absolute top-[20%] left-0 w-full h-px bg-slate-200/60 hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* BLOQUE IZQUIERDO: TEXTO DE ERROR */}
          <div className="lg:col-span-7 bg-[#1e2948] p-8 md:p-12 lg:p-16 border-b-[8px] md:border-b-[12px] lg:border-r-[12px] border-[#d1db3f] shadow-2xl lg:shadow-none">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] md:text-xs font-bold text-[#d1db3f] border border-[#d1db3f]/30 px-3 py-1.5 rounded-sm bg-white/5">
                <Frown size={14} />
                ERROR DE NAVEGACIÓN
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] tracking-tighter">
                {NOT_FOUND_CONTENT.title}
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-[#d1db3f] mt-2">
                {NOT_FOUND_CONTENT.subtitle}
              </h2>

              <p className="text-slate-300 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed pt-4">
                {NOT_FOUND_CONTENT.description}
              </p>

              <div className="pt-6">
                <Link 
                  to={NOT_FOUND_CONTENT.button.path}
                  className="inline-flex items-center justify-center gap-3 bg-[#0e7a83] text-white px-8 md:px-10 py-4 font-black hover:bg-[#0a5e65] transition-all group rounded-sm shadow-lg"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                  {NOT_FOUND_CONTENT.button.label}
                </Link>
              </div>
            </div>
          </div>

          {/* BLOQUE DERECHO: IMAGEN DE NOT FOUND */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:pl-12">
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-square group">
              
              <div className="absolute inset-0 border-[1px] border-slate-300 translate-x-6 -translate-y-6 hidden xl:block" />
              
              <div className="relative h-full w-full overflow-hidden border-2 border-[#1e2948] bg-slate-200 shadow-xl">
                <img 
                  src={NOT_FOUND_CONTENT.image.src} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                  alt={NOT_FOUND_CONTENT.image.alt}
                />
                
                {/* Detalles pequeños para mantener la estética */}
                <div className="absolute bottom-0 right-0 bg-white p-4 md:p-6 border-t-2 border-l-2 border-[#1e2948]">
                  <Frown size={24} className="text-[#1e2948] mb-2" />
                  <div className="font-mono text-[9px] md:text-[10px] text-slate-500 leading-tight uppercase font-bold">
                    Página <br />
                    Desconocida
                  </div>
                </div>
              </div>

              {/* Icono flotante con temática de "error" o "no encontrado" */}
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-[#d1db3f] p-4 md:p-5 shadow-xl animate-float border-2 border-[#1e2948] z-20">
                <Frown size={28} className="text-[#1e2948] md:w-8 md:h-8" />
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
      `}} />
    </section>
  );
};

export default NotFound;