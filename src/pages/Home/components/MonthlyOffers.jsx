import React from 'react';
import { 
  Tag, Zap, ShoppingCart, Plus, ArrowRight, LayoutGrid, TrendingDown 
} from 'lucide-react';

// 1. EXTRACCIÓN DE TODA LA INFORMACIÓN EN UN OBJETO DE CONFIGURACIÓN
const UI_CONFIG = {
  metadata: {
    systemTag: "Batch_Update: Offers_2026",
    title: "REVISIÓN",
    subtitle: "MENSUAL.",
    expiration: "12D : 04H : 55M",
    expirationLabel: "Vence en:"
  },
  colors: {
    primary: "#1e2948",    // Navy Dark
    secondary: "#0e7a83",  // Teal
    accent: "#d1db3f",     // Lime/Yellow
    background: "#f8f9fa"  // Light Grey
  },
  offers: [
    { id: "P-01", name: "Taladro Bosch 1/2", price: "$389.9", old: "$450k", tag: "-15%", img: "https://maquitecdecolombia.com/wp-content/uploads/2019/05/Taladro-Percutor-Reversible-Bosch-0.5pulg-650W-GSB-13-RE-060123D5G0-vista-ppal.webp" },
    { id: "P-02", name: "Kit Stanley 50pzs", price: "$199.0", old: "$280k", tag: "-30%", img: "https://media.falabella.com/sodimacCO/876551_1/w=1500,h=1500,fit=cover" },
    { id: "P-03", name: "Pintura Terinsa 5G", price: "$245.0", old: "$310k", tag: "-20%", img: "https://www.terinsa.com/wp-content/uploads/2020/06/VINIL_LATEX.png" },
    { id: "P-04", name: "Pulidora DeWalt", price: "$315.9", old: "$380k", tag: "-18%", img: "https://media.falabella.com/sodimacCO/405337_1/w=1500,h=1500,fit=cover" },
    { id: "P-05", name: "Nivel Láser Bosch", price: "$520.0", old: "$600k", tag: "-12%", img: "https://maquitecdecolombia.com/wp-content/uploads/2021/07/Nivel-laser-GCL-2-50G-0601066M01-vista-ppal-001.png" },
    { id: "P-06", name: "Sierra Circular", price: "$410.0", old: "$490k", tag: "-16%", img: "https://almaceneshj.com/cdn/shop/files/DWE5615-B3_001.jpg?v=1711836863" },
  ],
  labels: {
    actionBtn: "ADQUIRIR EQUIPO",
    stockStatus: "STOCK_OK",
    footerLink: "VER TODA LA LISTA DE OFERTAS"
  }
};

const MonthlyOffers = () => {
  const { metadata, colors, offers, labels } = UI_CONFIG;

  return (
    <section className={`relative py-12 md:py-24 bg-[${colors.background}] overflow-hidden`}>
      {/* FONDO TÉCNICO */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `radial-gradient(${colors.primary} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="absolute top-0 left-[10%] w-px h-full bg-slate-200/60 hidden lg:block" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className={`border-l-4 md:border-l-8 border-[${colors.primary}] pl-4 md:pl-6`}>
            <div className={`flex items-center gap-2 text-[${colors.secondary}] font-mono text-[9px] md:text-[10px] font-bold tracking-[2px] md:tracking-[4px] mb-2 uppercase`}>
              <Zap size={14} className={`fill-[${colors.accent}] text-[${colors.accent}]`} />
              {metadata.systemTag}
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-6xl font-black text-[${colors.primary}] tracking-tighter uppercase leading-[0.9]`}>
              {metadata.title} <span className={`text-[${colors.secondary}]`}>{metadata.subtitle}</span>
            </h2>
          </div>
          
          <div className={`w-full md:w-auto bg-[${colors.primary}] text-white p-4 flex items-center justify-between md:justify-start gap-6 shadow-[6px_6px_0px_0px_rgba(209,219,63,1)] md:shadow-[8px_8px_0px_0px_rgba(209,219,63,1)]`}>
            <div className="font-mono leading-none">
              <span className={`block text-[9px] md:text-[10px] text-[${colors.accent}] mb-1 uppercase tracking-wider`}>
                {metadata.expirationLabel}
              </span>
              <span className="text-lg md:text-xl font-black">{metadata.expiration}</span>
            </div>
            <LayoutGrid className={`text-[${colors.accent}] shrink-0`} />
          </div>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((item) => (
            <div key={item.id} className={`group relative bg-white border border-slate-200 overflow-hidden lg:hover:border-[${colors.primary}] transition-all duration-300 flex flex-col`}>
              
              <div className={`absolute top-0 right-0 bg-[${colors.accent}] text-[${colors.primary}] px-3 py-1 font-black text-xs z-20`}>
                {item.tag}
              </div>

              <div className="h-48 sm:h-56 bg-slate-100 relative overflow-hidden shrink-0">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover p-1 grayscale group-hover:grayscale-0 sm:group-hover:scale-110 transition-all duration-700" />
                <div className={`absolute bottom-0 left-0 bg-[${colors.primary}] text-white font-mono text-[9px] px-2 py-1`}>
                  {item.id} // {labels.stockStatus}
                </div>
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className={`text-base md:text-lg font-black text-[${colors.primary}] leading-tight uppercase group-hover:text-[${colors.secondary}] transition-colors mb-2`}>
                  {item.name}
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-xl md:text-2xl font-black text-[${colors.primary}]`}>{item.price}</span>
                  <span className="text-[10px] md:text-xs text-slate-400 line-through font-bold">{item.old}</span>
                  <TrendingDown size={14} className={`text-[${colors.secondary}]`} />
                </div>

                <button className={`mt-auto w-full flex items-center justify-between bg-[${colors.background}] border-2 border-[${colors.primary}] p-3.5 md:p-3 text-[${colors.primary}] font-black text-[9px] md:text-[10px] tracking-widest hover:bg-[${colors.primary}] hover:text-white transition-all lg:group-hover:shadow-[4px_4px_0px_0px_rgba(209,219,63,1)]`}>
                  <span className="flex items-center gap-2">
                    <Plus size={14} /> {labels.actionBtn}
                  </span>
                  <ShoppingCart size={14} className={`text-[${colors.secondary}] group-hover:text-[${colors.accent}]`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button className={`inline-flex items-center gap-4 text-[${colors.primary}] font-black tracking-[2px] md:tracking-[4px] text-[10px] md:text-xs hover:text-[${colors.secondary}] transition-colors group`}>
            {labels.footerLink} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonthlyOffers;