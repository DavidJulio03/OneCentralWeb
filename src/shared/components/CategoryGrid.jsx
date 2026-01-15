import React from 'react';
import { 
  Hammer, PaintRoller, Bolt, Wrench, 
  HardHat, Droplets, ArrowUpRight, Layout 
} from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    { name: 'Herramientas', count: '450+ SKU', icon: <Hammer />, code: 'UNIT_01' },
    { name: 'Pinturas', count: '120+ SKU', icon: <PaintRoller />, code: 'UNIT_02' },
    { name: 'Electricidad', count: '300+ SKU', icon: <Bolt />, code: 'UNIT_03' },
    { name: 'Plomería', count: '215+ SKU', icon: <Wrench />, code: 'UNIT_04' },
    { name: 'Construcción', count: '80+ SKU', icon: <HardHat />, code: 'UNIT_05' },
    { name: 'Grifería', count: '95+ SKU', icon: <Droplets />, code: 'UNIT_06' },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-[#f8f9fa] overflow-hidden">
      {/* --- FONDO TÉCNICO --- */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(#1e2948 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-0 left-[5%] lg:left-[10%] w-px h-full bg-slate-200/60 hidden sm:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Cabecera Adaptativa */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#1e2948] px-3 py-1 rounded-sm w-fit">
              <Layout size={14} className="text-[#d1db3f]" />
              <span className="font-mono text-[9px] md:text-[10px] font-bold text-white tracking-[2px] md:tracking-[3px] uppercase">
                Índice de Suministros
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#1e2948] tracking-tighter leading-none">
              MÓDULOS DE <br className="hidden xs:block" /> <span className="text-[#0e7a83]">INVENTARIO.</span>
            </h2>
          </div>
          <div className="border-l-4 border-[#d1db3f] pl-4 md:pl-6 max-w-xs">
            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed italic uppercase">
              Selección técnica verificada para alta ingeniería y hogar.
            </p>
          </div>
        </div>

        {/* Grid de Categorías: 1 col en móvil, 2 en tablet, 3 en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group relative bg-white border-2 border-[#1e2948] p-6 md:p-8 transition-all duration-300 lg:hover:translate-x-[-4px] lg:hover:translate-y-[-4px] lg:hover:shadow-[8px_8px_0px_0px_rgba(209,219,63,1)] active:scale-[0.98] lg:active:scale-100 cursor-pointer"
            >
              {/* ID Técnico y Flecha */}
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <span className="font-mono text-[9px] md:text-[10px] font-bold text-[#1e2948]/40 group-hover:text-[#0e7a83] transition-colors">
                  REF // {cat.code}
                </span>
                <div className="text-[#1e2948] group-hover:text-[#0e7a83] transition-colors">
                  <ArrowUpRight size={18} md:size={20} />
                </div>
              </div>

              {/* Contenido Central */}
              <div className="flex items-center gap-4 md:gap-6 mb-4">
                <div className="p-2.5 md:p-3 bg-[#f8f9fa] border border-slate-100 text-[#1e2948] group-hover:bg-[#1e2948] group-hover:text-[#d1db3f] transition-all duration-300">
                  {React.cloneElement(cat.icon, { 
                    size: 24, 
                    className: "md:w-7 md:h-7",
                    strokeWidth: 2 
                  })}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#1e2948] uppercase tracking-tighter">
                  {cat.name}
                </h3>
              </div>

              {/* Data técnica inferior */}
              <div className="mt-6 md:mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-[#1e2948]">
                  Stock: {cat.count}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#d1db3f]" />
              </div>

              {/* Detalle de esquina decorativo */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#0e7a83] opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;