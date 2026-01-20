import React, { useEffect, useState } from 'react';
// Importamos la conexión directa y el servicio
import { supabase } from '../../../lib/supabase'; 
import { productoService } from '../../../services/productos'; 
import { 
  Hammer, PaintRoller, Bolt, Wrench, 
  HardHat, Droplets, ArrowUpRight, Layout, Loader2 
} from 'lucide-react';

const CategoryGrid = () => {
  // 2. Estados para los datos y la carga
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mapa de iconos basado en el slug o nombre que viene de la DB
  const iconMap = {
    'herramientas-manuales': <Hammer />,
    'pinturas': <PaintRoller />,
    'herramientas-electricas': <Bolt />,
    'plomeria': <Wrench />,
    'construccion': <HardHat />,
    'griferia': <Droplets />,
  };

  // 3. Efecto para cargar los datos reales
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        // CORRECCIÓN AQUÍ: Usamos supabase directamente
        const { data, error } = await supabase
          .from('categorias')
          .select('id, nombre, slug');

        if (error) throw error;

        const formattedCats = data.map((cat, index) => ({
          name: cat.nombre,
          count: 'VER CATÁLOGO', 
          icon: iconMap[cat.slug] || <Layout />, 
          code: `UNIT_0${index + 1}`
        }));

        setCategories(formattedCats);
      } catch (err) {
        console.error("Error cargando categorías:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center text-[#1e2948]">
        <Loader2 className="animate-spin mb-4" size={40} />
        <p className="font-mono text-xs uppercase tracking-widest">Sincronizando Inventario...</p>
      </div>
    );
  }

  return (
    <section className="relative py-12 md:py-24 bg-[#f8f9fa] overflow-hidden">
      {/* ... (Tu mismo diseño de fondo y cabecera) ... */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(#1e2948 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Cabecera Adaptativa (Igual a la tuya) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#1e2948] px-3 py-1 rounded-sm w-fit">
              <Layout size={14} className="text-[#d1db3f]" />
              <span className="font-mono text-[9px] md:text-[10px] font-bold text-white tracking-[2px] md:tracking-[3px] uppercase">
                Catálogo Real-Time
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#1e2948] tracking-tighter leading-none">
              MÓDULOS DE <br className="hidden xs:block" /> <span className="text-[#0e7a83]">INVENTARIO.</span>
            </h2>
          </div>
        </div>

        {/* Grid Dinámico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group relative bg-white border-2 border-[#1e2948] p-6 md:p-8 transition-all duration-300 lg:hover:translate-x-[-4px] lg:hover:translate-y-[-4px] lg:hover:shadow-[8px_8px_0px_0px_rgba(209,219,63,1)] active:scale-[0.98] lg:active:scale-100 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <span className="font-mono text-[9px] md:text-[10px] font-bold text-[#1e2948]/40 group-hover:text-[#0e7a83] transition-colors">
                  REF // {cat.code}
                </span>
                <div className="text-[#1e2948] group-hover:text-[#0e7a83] transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 mb-4">
                <div className="p-2.5 md:p-3 bg-[#f8f9fa] border border-slate-100 text-[#1e2948] group-hover:bg-[#1e2948] group-hover:text-[#d1db3f] transition-all duration-300">
                  {/* Clonamos el icono para aplicar los estilos de tu diseño */}
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

              <div className="mt-6 md:mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-[#1e2948]">
                  {cat.count}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#d1db3f]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;