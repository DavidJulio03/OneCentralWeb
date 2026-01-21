import React from 'react';
import { X, Trash2, Plus, Minus, CreditCard, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove, formatCurrency }) => {
  // Cálculo de totales
  const subtotal = cartItems.reduce((acc, item) => 
    acc + (item.discountPrice || item.price) * item.quantity, 0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1e2948]/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer Container */}
      <aside className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header Técnico */}
        <div className="p-6 border-b-2 border-[#1e2948] bg-[#f8f9fa] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#1e2948]" />
            <h2 className="font-black text-sm uppercase tracking-[0.2em] text-[#1e2948]">
              ORDEN DE COMPRA
            </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 transition-colors rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Lista de Productos */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <div className="w-16 h-16 border-2 border-dashed border-slate-200 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={24} />
              </div>
              <p className="font-mono text-xs uppercase font-bold tracking-widest">Carrito Vacío</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                {/* Miniatura */}
                <div className="w-20 h-20 bg-[#f8f9fa] border border-slate-100 p-2 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[11px] font-black uppercase text-[#1e2948] leading-tight line-clamp-1">
                      {item.name}
                    </h4>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <span className="font-mono text-[9px] text-[#0e7a83] font-bold mb-2">
                    ID: {item.id}
                  </span>

                  {/* Controles de Cantidad */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-slate-200">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-slate-100 disabled:opacity-30"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 font-mono text-xs font-black">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-slate-100"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="font-mono text-sm font-black text-[#1e2948]">
                      {formatCurrency((item.discountPrice || item.price) * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer con Totales */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-[#f8f9fa] border-t-2 border-[#1e2948]">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                <span>Subtotal</span>
                <span className="font-mono">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                <span>Impuestos (IVA 19%)</span>
                <span className="font-mono text-[#0e7a83]">Incluido</span>
              </div>
              <div className="flex justify-between items-end pt-2 border-t border-slate-200">
                <span className="text-sm font-black text-[#1e2948] uppercase">Total Estimado</span>
                <span className="text-2xl font-black font-mono text-[#1e2948] tracking-tighter">
                  {formatCurrency(subtotal)}
                </span>
              </div>
            </div>

            <Link to='/Comprar'>
              <button className="w-full bg-[#1e2948] text-[#d1db3f] py-4 font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#0e7a83] hover:text-white transition-all group">
                <CreditCard size={18} />
                Finalizar Pedido
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>          
            <p className="text-center mt-4 text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
              Transacción encriptada bajo protocolo de seguridad industrial
            </p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;