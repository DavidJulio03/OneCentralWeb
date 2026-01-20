import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Search, 
  Package, 
  AlertCircle, 
  ArrowRight,
  Zap
} from 'lucide-react';
import Header from '../Home/layout/Header';
import Footer from '../Home/layout/Footer';
import CATEGORIES_DATA from './data';
// Asumiendo que guardaste el subcomponente en este archivo
import ProductDetailsModal from './ProductsDetail'; 

const CategoryExplorer = () => {
  const { categorySlug } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  // ESTADO PARA EL MODAL
  const [selectedProduct, setSelectedProduct] = useState(null);

  const PAGE_DATA = useMemo(() => {
    return CATEGORIES_DATA[categorySlug] || null;
  }, [categorySlug]);

  if (!PAGE_DATA) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-slate-500">
        ERROR_404: CATEGORÍA NO ENCONTRADA EN EL SISTEMA.
      </div>
    );
  }

  const { meta, labels, products } = PAGE_DATA;

  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  const discountedProducts = filteredProducts.filter(p => p.discountPrice !== null);
  const allProducts = filteredProducts;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pb-8 bg-[#f8f9fa] text-[#1e2948] font-sans relative selection:bg-[#d1db3f] selection:text-[#1e2948]">
        
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e2948' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          
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
                </div>
              </div>
            </div>
          </header>

          {/* SECCIÓN DESCUENTOS */}
          {discountedProducts.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#d1db3f] p-1.5 text-[#1e2948]">
                  <Zap size={18} fill="currentColor" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-wider text-[#1e2948]">
                  {labels.sectionDiscounts}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {discountedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isDiscounted={true} 
                    formatCurrency={formatCurrency}
                    labels={labels}
                    onOpenDetails={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* SECCIÓN TODOS */}
          <section>
            <div className="flex items-center gap-3 mb-6 pt-6 border-t border-slate-200">
              <div className="bg-[#1e2948] p-1.5 text-white">
                  <Package size={18} />
                </div>
              <h2 className="text-lg font-black uppercase tracking-wider text-[#1e2948]">
                {labels.sectionAll}
              </h2>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center border-2 border-dashed border-slate-300 bg-slate-50">
                <p className="font-mono text-sm text-slate-500 font-bold">{labels.noResults}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16">
                {allProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isDiscounted={false}
                    formatCurrency={formatCurrency}
                    labels={labels}
                    onOpenDetails={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            )}
          </section>
        </main>

        {/* --- RENDERIZADO DEL SUBCOMPONENTE --- */}
        {selectedProduct && (
          <ProductDetailsModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)}
            formatCurrency={formatCurrency}
            onAddToCart={(p) => console.log("Añadido:", p.name)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

const ProductCard = ({ product, isDiscounted, formatCurrency, labels, onOpenDetails }) => {
  const hasDiscount = product.discountPrice !== null;
  const isOutOfStock = product.stock === 0;

  const containerClasses = isDiscounted
    ? "border-2 border-[#d1db3f] bg-white relative group overflow-hidden shadow-[4px_4px_0px_0px_rgba(209,219,63,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(209,219,63,1)] hover:-translate-y-1 transition-all duration-300"
    : "border border-slate-200 bg-white relative group hover:border-[#1e2948] hover:shadow-lg transition-all duration-300";

  return (
    <article className={containerClasses}>
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

      <div 
        className="w-full h-48 bg-white relative overflow-hidden flex items-center justify-center border-b border-slate-100 cursor-zoom-in"
        onClick={onOpenDetails}
      >
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover p-2 transition-transform duration-500 group-hover:scale-110 ${isOutOfStock ? 'grayscale opacity-50' : ''}`}
          />
        ) : (
          <Package className="text-slate-200 w-16 h-16" />
        )}
      </div>

      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <div className="mb-1 flex justify-between items-start">
          <span className="font-mono text-[9px] text-slate-400 uppercase font-bold">{product.id}</span>
          <button 
            onClick={onOpenDetails}
            className="text-[9px] font-bold text-[#0e7a83] hover:underline"
          >
            {labels.viewDetails}
          </button>
        </div>
        
        <h3 className="text-lg font-black text-[#1e2948] leading-tight mb-2 uppercase tracking-tight">
          {product.name}
        </h3>
        
        <p className="text-xs text-slate-500 font-medium mb-4 line-clamp-2">
          {product.specs}
        </p>

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

      {/* BOTÓN INFERIOR - ACCIÓN DUAL */}
      <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-5 transition-transform duration-300 flex">
        <button 
          onClick={onOpenDetails}
          className="flex-1 bg-slate-100 text-[#1e2948] py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors"
        >
          Ver Ficha
        </button>
        <button 
          disabled={isOutOfStock}
          className={`flex-[2] py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 
          ${isOutOfStock ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#1e2948] text-white hover:bg-[#0e7a83]'}`}
        >
          {labels.addToCart} <ArrowRight size={12} />
        </button>
      </div>
    </article>
  );
};

export default CategoryExplorer;