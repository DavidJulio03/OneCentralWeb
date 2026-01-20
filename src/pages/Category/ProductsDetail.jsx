import React from 'react';
import { X, ShieldCheck, Box, Gauge, ShoppingCart, Tag } from 'lucide-react';

const ProductDetailsModal = ({ product, onClose, onAddToCart, formatCurrency }) => {
  if (!product) return null;

  const hasDiscount = product.discountPrice !== null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end bg-[#1e2948]/60 backdrop-blur-sm">
      {/* Modal Container (Slide-over) */}
      <article className="h-full w-full max-w-2xl bg-white shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white border-b border-slate-100 p-6">
          <span className="font-mono text-xs font-bold text-slate-400 tracking-widest uppercase">
            ID: {product.id}
          </span>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={24} className="text-[#1e2948]" />
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-square bg-[#f8fafc] rounded-lg border border-slate-100 flex items-center justify-center p-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-[10px] font-black bg-slate-100 text-[#1e2948] px-2 py-1 uppercase tracking-tighter border border-slate-200">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-black text-[#1e2948] uppercase leading-none mb-2">
                {product.name}
              </h2>
              <p className="text-sm font-bold text-[#0e7a83] mb-6">{product.specs}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Descripción Técnica</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.details?.fullDescription || "No hay descripción adicional disponible."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <ShieldCheck size={18} className="text-[#1e2948] shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Garantía</p>
                      <p className="text-xs font-bold text-slate-700">{product.details?.warranty}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Box size={18} className="text-[#1e2948] shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Dimensiones</p>
                      <p className="text-xs font-bold text-slate-700">{product.details?.dimensions}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="flex items-end gap-3 mb-6">
                   <div className="flex flex-col">
                    {hasDiscount && (
                      <span className="text-sm text-slate-400 line-through font-mono">
                        {formatCurrency(product.price)}
                      </span>
                    )}
                    <span className="text-4xl font-black font-mono tracking-tighter text-[#1e2948]">
                      {formatCurrency(hasDiscount ? product.discountPrice : product.price)}
                    </span>
                   </div>
                   {hasDiscount && (
                     <span className="mb-2 bg-[#d1db3f] text-[#1e2948] text-[10px] font-bold px-2 py-1 uppercase">
                       Ahorras {formatCurrency(product.price - product.discountPrice)}
                     </span>
                   )}
                </div>

                <button 
                  onClick={() => onAddToCart(product)}
                  disabled={product.stock === 0}
                  className={`w-full py-4 px-6 flex items-center justify-center gap-3 font-black uppercase tracking-widest transition-all
                    ${product.stock === 0 
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                      : 'bg-[#1e2948] text-white hover:bg-[#0e7a83] active:scale-[0.98]'}`}
                >
                  <ShoppingCart size={20} />
                  {product.stock === 0 ? 'Sin Stock' : 'Añadir al Pedido'}
                </button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-6 rounded-lg border border-slate-100">
            {product.details?.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 bg-[#0e7a83] rotate-45" />
                <span className="text-xs font-bold uppercase">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductDetailsModal;