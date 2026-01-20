import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Compass, Zap, Phone } from 'lucide-react';
import TopBar from './TopBar';

const NAV_LINKS = [
  { name: 'Inicio', href: '#' },
  { name: 'Herramientas', href: '#' },
  { name: 'Pinturas', href: '#' },
  { name: 'Electricidad', href: '#' },
  { name: 'Construcción', href: '#' },
  { name: 'Grifería', href: '#' },
  { name: 'Contacto', href: '#' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f9fa] border-b-2 border-[#1e2948]">
      {/* --- TOP BAR TÉCNICA --- */}
      <TopBar></TopBar>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4 lg:py-6 gap-4 md:gap-8">
          
          {/* LOGO INDUSTRIAL */}
          <div className="flex flex-col leading-none cursor-pointer group shrink-0">
            <div className="text-3xl md:text-4xl font-black tracking-tighter flex items-baseline">
              <span className="text-[#1e2948]">O</span>
              <span className="text-[#1e2948] relative">
                N
                <span className="absolute inset-0 text-[#d1db3f] opacity-80 mix-blend-multiply" 
                      style={{ clipPath: 'polygon(65% 0, 100% 0, 35% 100%, 0% 100%)' }}>N</span>
              </span>
              <span className="text-[#0e7a83]">E</span>
            </div>
            <div className="flex items-center gap-1">
               <div className="h-[2px] w-4 bg-[#d1db3f]" />
               <span className="text-[8px] md:text-[10px] font-bold tracking-[2px] text-[#1e2948] uppercase">Central Ferretera</span>
            </div>
          </div>

          {/* BARRA DE BÚSQUEDA TÉCNICA (Desktop & iPad) */}
          <div className="hidden md:flex flex-1 max-w-xl relative group">
            <div className="absolute inset-0 bg-[#d1db3f] translate-x-1 translate-y-1 -z-10 group-focus-within:translate-x-0 group-focus-within:translate-y-0 transition-transform" />
            <input 
              type="text" 
              placeholder="BUSCAR REFERENCIA / SKU..."
              className="w-full border-2 border-[#1e2948] bg-white rounded-none py-2.5 px-6 font-mono text-xs focus:outline-none focus:bg-[#f8f9fa] transition-all placeholder:text-slate-400"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-[#1e2948] text-[#d1db3f] flex items-center justify-center hover:bg-[#0e7a83] hover:text-white transition-colors">
              <Search size={18} />
            </button>
          </div>

          {/* ACCIONES */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="relative group cursor-pointer bg-white border-2 border-[#1e2948] p-2.5 md:px-4 md:py-2 flex items-center gap-3 hover:bg-[#1e2948] transition-all duration-300">
              <div className="relative">
                <ShoppingCart size={20} className="text-[#1e2948] group-hover:text-[#d1db3f] transition-colors" />
                <span className="absolute -top-4 -right-4 bg-[#0e7a83] text-white text-[9px] w-5 h-5 flex items-center justify-center font-black border-2 border-[#f8f9fa]">2</span>
              </div>
              <span className="hidden lg:block font-black text-[10px] tracking-widest text-[#1e2948] group-hover:text-white uppercase">Checkout</span>
            </div>
            
            {/* Botón Menú Móvil */}
            <button 
              className="md:hidden bg-[#1e2948] p-2 text-[#d1db3f]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* NAVEGACIÓN (Desktop) */}
        <nav className="hidden md:block border-t border-[#1e2948]/10">
          <ul className="flex justify-between items-center py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-mono text-[11px] font-bold text-[#1e2948]/70 hover:text-[#0e7a83] uppercase tracking-tighter flex items-center gap-1 group"
                >
                  <span className="text-[#d1db3f] opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MENÚ MÓVIL (Full Screen en móvil) */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-[#0e7a83] py-6 shadow-2xl animate-in slide-in-from-top duration-300 px-6">
             <div className="md:hidden flex mb-6 relative">
              <input 
                type="text" 
                placeholder="BUSCAR SKU..."
                className="w-full border-2 border-[#1e2948] rounded-none py-3 px-4 font-mono text-xs focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-[#1e2948] text-[#d1db3f]">
                <Search size={18} />
              </button>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name} onClick={() => setIsMenuOpen(false)}>
                  <a href={link.href} className="block py-3 px-4 bg-[#f8f9fa] border-l-4 border-[#1e2948] font-black text-xs uppercase tracking-widest hover:bg-[#d1db3f] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;