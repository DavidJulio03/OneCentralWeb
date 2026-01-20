import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Tag, 
  Package, 
  AlertCircle, 
  CheckCircle2, 
  Filter, 
  ArrowRight,
  Zap
} from 'lucide-react';
import Header from '../Home/layout/Header';
import Footer from '../Home/layout/Footer';


/**
 * DATOS DE LA PÁGINA Y PRODUCTOS
 * Centralizados para fácil edición.
 */
const PAGE_DATA = {
  meta: {
    categoryName: "HERRAMIENTAS DE POTENCIA",
    categoryCode: "CAT_PWR_001",
    description: "Equipamiento de alto rendimiento para despliegue industrial.",
    breadcrumbs: ["Home", "Inventario", "Power Tools"]
  },
  labels: {
    searchPlaceholder: "BUSCAR REFERENCIA O NOMBRE...",
    sectionDiscounts: "OFERTAS // PRIORIDAD ALTA",
    sectionAll: "INVENTARIO COMPLETO // ESTADO: ACTIVO",
    noResults: "NO SE ENCONTRARON REGISTROS EN LA MATRIZ DE DATOS.",
    addToCart: "AÑADIR",
    viewDetails: "ESPECIFICACIONES"
  },
  products: [
    {
      id: "SKU_8821_X",
      name: "Taladro Percutor Industrial 20V",
      specs: "Brushless / 2 Bat / Maletín",
      price: 450000,
      discountPrice: 380000,
      stock: 15,
      image: "/api/placeholder/400/300",
      tags: ["HEAVY_DUTY", "PROMO"]
    },
    {
      id: "SKU_9901_A",
      name: "Sierra Circular 7-1/4 HP",
      specs: "1800W / Guía Laser / Disco Titanio",
      price: 620000,
      discountPrice: null, // Sin descuento
      stock: 8,
      image: "/api/placeholder/400/300",
      tags: ["PRECISION"]
    },
    {
      id: "SKU_7722_B",
      name: "Kit Esmeriladora Angular",
      specs: "4-1/2 Pulgadas / 11000 RPM",
      price: 290000,
      discountPrice: 245000,
      stock: 42,
      image: "/api/placeholder/400/300",
      tags: ["BEST_SELLER", "PROMO"]
    },
    {
      id: "SKU_3310_Z",
      name: "Lijadora Orbital Neumática",
      specs: "6 Pulgadas / Aspiración Central",
      price: 185000,
      discountPrice: null,
      stock: 0, // Agotado
      image: "/api/placeholder/400/300",
      tags: ["NEUMÁTICA"]
    },
    {
      id: "SKU_5541_M",
      name: "Rotomartillo SDS Plus",
      specs: "3 Modos / 800W / Brocas Inc.",
      price: 550000,
      discountPrice: 495000,
      stock: 5,
      image: "/api/placeholder/400/300",
      tags: ["DEMOLICIÓN"]
    },
    {
      id: "SKU_1102_P",
      name: "Pistola de Calor Digital",
      specs: "LCD / 50-650°C / Boquillas",
      price: 120000,
      discountPrice: null,
      stock: 100,
      image: "/api/placeholder/400/300",
      tags: ["ACABADO"]
    }
  ]
};

const CategoryExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { meta, labels, products } = PAGE_DATA;

  // Lógica de Filtrado
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  // Separación de Grupos
  const discountedProducts = filteredProducts.filter(p => p.discountPrice !== null);
  const allProducts = filteredProducts; // O si prefieres excluir los de oferta abajo, filtra aquí.

  // Formateador de Moneda
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pb-8 bg-[#f8f9fa] text-[#1e2948] font-sans relative selection:bg-[#d1db3f] selection:text-[#1e2948]">
        
        {/* --- FONDO TÉCNICO --- */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e2948' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          
          {/* --- HEADER DE SECCIÓN --- */}
          <header className="mb-12 border-b border-slate-300 pb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {meta.breadcrumbs.join(' / ')}
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#1e2948]">
                  {meta.categoryName} <span className="text-[#d1db3f] text-2xl align-top">●</span>
                </h1>
                <p className="font-mono text-xs md:text-sm text-[#0e7a83] mt-2">
                  // SYSTEM_ID: {meta.categoryCode} // {meta.description}
                </p>
              </div>
              
              {/* Buscador Técnico */}
              <div className="w-full md:w-auto md:min-w-[320px]">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-400 group-focus-within:text-[#0e7a83]" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border-2 border-slate-300 bg-white text-sm font-bold uppercase tracking-wide placeholder:text-slate-300 focus:outline-none focus:border-[#1e2948] focus:ring-0 transition-colors"
                    placeholder={labels.searchPlaceholder}
                  />
                  <div className="absolute top-0 right-0 h-full flex items-center pr-3">
                    <div className="h-1.5 w-1.5 bg-[#d1db3f] rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* --- SECCIÓN 1: DESCUENTOS (Solo si hay resultados y busqueda activa o productos con dcto) --- */}
          {discountedProducts.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#d1db3f] p-1.5 text-[#1e2948]">
                  <Zap size={18} fill="currentColor" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-wider text-[#1e2948]">
                  {labels.sectionDiscounts}
                </h2>
                <span className="ml-auto text-xs font-mono bg-[#1e2948] text-[#d1db3f] px-2 py-0.5 rounded-sm">
                  {discountedProducts.length} ITEMS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {discountedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isDiscounted={true} 
                    formatCurrency={formatCurrency}
                    labels={labels}
                  />
                ))}
              </div>
            </section>
          )}

          {/* --- SECCIÓN 2: TODOS LOS PRODUCTOS --- */}
          <section>
            <div className="flex items-center gap-3 mb-6 pt-6 border-t border-slate-200">
              <div className="bg-[#1e2948] p-1.5 text-white">
                  <Package size={18} />
                </div>
              <h2 className="text-lg font-black uppercase tracking-wider text-[#1e2948]">
                {labels.sectionAll}
              </h2>
              <div className="h-px flex-grow bg-slate-300/50" />
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center border-2 border-dashed border-slate-300 bg-slate-50">
                <AlertCircle className="mx-auto h-10 w-10 text-slate-300 mb-3" />
                <p className="font-mono text-sm text-slate-500 font-bold">{labels.noResults}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16">
                {allProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isDiscounted={false} // Aquí mostramos estilo normal aunque tenga descuento
                    formatCurrency={formatCurrency}
                    labels={labels}
                  />
                ))}
              </div>
            )}
          </section>

        </main>
      </div>
      <Footer />
    </>
  );
};

/**
 * SUB-COMPONENTE: TARJETA DE PRODUCTO
 * Renderiza la estética técnica de cada item.
 */
const ProductCard = ({ product, isDiscounted, formatCurrency, labels }) => {
  const hasDiscount = product.discountPrice !== null;
  const isOutOfStock = product.stock === 0;

  // Clases condicionales según si es tarjeta destacada (Oferta) o normal
  const containerClasses = isDiscounted
    ? "border-2 border-[#d1db3f] bg-white relative group overflow-hidden shadow-[4px_4px_0px_0px_rgba(209,219,63,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(209,219,63,1)] hover:-translate-y-1 transition-all duration-300"
    : "border border-slate-200 bg-white relative group hover:border-[#1e2948] hover:shadow-lg transition-all duration-300";

  return (
    <article className={containerClasses}>
      
      {/* Badge de Estado / Descuento */}
      <div className="absolute top-0 left-0 z-10 flex flex-col items-start gap-1 p-2">
         {hasDiscount && isDiscounted && (
            <span className="bg-[#1e2948] text-[#d1db3f] text-[10px] font-black uppercase px-2 py-1 tracking-widest shadow-sm">
               -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
            </span>
         )}
         {isOutOfStock && (
            <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">
               SOLD OUT
            </span>
         )}
      </div>

      {/* Imagen Placeholder */}
      <div className="w-full h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
        <Package className="text-slate-200 w-16 h-16" /> 
        {/* Simulación de imagen */}
        <div className="absolute inset-0 bg-[#1e2948]/0 group-hover:bg-[#1e2948]/5 transition-colors" />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <div className="mb-1 flex justify-between items-start">
           <span className="font-mono text-[9px] text-slate-400 uppercase font-bold">{product.id}</span>
           {product.stock < 10 && !isOutOfStock && (
             <span className="text-[9px] font-bold text-orange-500 flex items-center gap-1">
               <AlertCircle size={10} /> BAJO STOCK
             </span>
           )}
        </div>
        
        <h3 className="text-lg font-black text-[#1e2948] leading-tight mb-2 uppercase tracking-tight">
          {product.name}
        </h3>
        
        <p className="text-xs text-slate-500 font-medium mb-4 line-clamp-2">
          {product.specs}
        </p>

        {/* Zona de Precio */}
        <div className="mt-auto pt-4 border-t border-slate-100 border-dashed">
          {hasDiscount ? (
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 line-through font-mono">
                {formatCurrency(product.price)}
              </span>
              <span className={`text-xl font-bold font-mono tracking-tighter ${isDiscounted ? 'text-[#0e7a83]' : 'text-[#1e2948]'}`}>
                {formatCurrency(product.discountPrice)}
              </span>
            </div>
          ) : (
             <span className="text-xl font-bold text-[#1e2948] font-mono tracking-tighter">
                {formatCurrency(product.price)}
             </span>
          )}
        </div>
      </div>

      {/* Acciones Hover (Se revelan en Desktop) */}
      <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex">
        <button className="flex-1 bg-[#1e2948] text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#0e7a83] transition-colors flex items-center justify-center gap-2">
          {labels.addToCart} <ArrowRight size={12} />
        </button>
      </div>
    </article>
  );
};

export default CategoryExplorer;