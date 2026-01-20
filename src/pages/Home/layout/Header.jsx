import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import TopBar from './TopBar';
import CartDrawer from './Carrito';

/**
 * DATOS DE PRUEBA PARA EL CARRITO (Simulación de estado global)
 */
const MOCK_CART_ITEMS = [
  {
    id: "SKU_8821_X",
    name: "Taladro Percutor Industrial 20V",
    price: 450000,
    discountPrice: 380000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c"
  },
  {
    id: "GRI_551_K",
    name: "Mezclador Lavaplatos Monocontrol",
    price: 215000,
    discountPrice: 189000,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
  }
];

/**
 * CONFIGURACIÓN INTEGRAL DEL HEADER
 */
const HEADER_CONFIG = {
  identity: {
    logo: {
      part1: "O",
      part2: "N",
      part3: "E",
      subtext: "Central Ferretera"
    }
  },
  labels: {
    searchPlaceholder: "BUSCAR REFERENCIA / SKU...",
    checkoutBtn: "Checkout"
  },
  navigation: [
    { name: 'Inicio', href: '/' },
    { name: 'Herramientas', href: '/category/herramientas' },
    { name: 'Pinturas', href: '/category/pinturas' },
    { name: 'Electricidad', href: '/category/electricidad' },
    { name: 'Construcción', href: '/category/construccion' },
    { name: 'Grifería', href: '/category/griferia' },
    { name: 'Contacto', href: '/contacto' },
  ]
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Usamos los datos de prueba como estado inicial
  const [cartItems, setCartItems] = useState(MOCK_CART_ITEMS);
  
  const { identity, labels, navigation } = HEADER_CONFIG;

  // Formateador de moneda
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP', 
      maximumFractionDigits: 0 
    }).format(amount);
  };

  // Funciones básicas para los datos de prueba
  const updateQuantity = (id, newQty) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQty) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f8f9fa] border-b-2 border-[#1e2948]">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4 lg:py-6 gap-4 md:gap-8">
          
          {/* LOGO INDUSTRIAL */}
          <Link to="/" className="flex flex-col leading-none cursor-pointer group shrink-0">
            <div className="text-3xl md:text-4xl font-black tracking-tighter flex items-baseline">
              <span className="text-[#1e2948]">{identity.logo.part1}</span>
              <span className="text-[#1e2948] relative">
                {identity.logo.part2}
                <span className="absolute inset-0 text-[#d1db3f] opacity-80 mix-blend-multiply" 
                      style={{ clipPath: 'polygon(65% 0, 100% 0, 35% 100%, 0% 100%)' }}>
                  {identity.logo.part2}
                </span>
              </span>
              <span className="text-[#0e7a83]">{identity.logo.part3}</span>
            </div>
            <div className="flex items-center gap-1">
               <div className="h-[2px] w-4 bg-[#d1db3f]" />
               <span className="text-[8px] md:text-[10px] font-bold tracking-[2px] text-[#1e2948] uppercase">
                 {identity.logo.subtext}
               </span>
            </div>
          </Link>

          {/* BARRA DE BÚSQUEDA */}
          <div className="hidden md:flex flex-1 max-w-xl relative group">
            <div className="absolute inset-0 bg-[#d1db3f] translate-x-1 translate-y-1 -z-10 group-focus-within:translate-x-0 group-focus-within:translate-y-0 transition-transform" />
            <input 
              type="text" 
              placeholder={labels.searchPlaceholder}
              className="w-full border-2 border-[#1e2948] bg-white rounded-none py-2.5 px-6 font-mono text-xs focus:outline-none focus:bg-[#f8f9fa] transition-all placeholder:text-slate-400"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-[#1e2948] text-[#d1db3f] flex items-center justify-center hover:bg-[#0e7a83] hover:text-white transition-colors">
              <Search size={18} />
            </button>
          </div>

          {/* ACCIONES */}
          <div className="flex items-center gap-3 md:gap-6">
            <div 
              onClick={() => setIsCartOpen(true)}
              className="relative group cursor-pointer bg-white border-2 border-[#1e2948] p-2.5 md:px-4 md:py-2 flex items-center gap-3 hover:bg-[#1e2948] transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(30,41,72,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              <div className="relative">
                <ShoppingCart size={20} className="text-[#1e2948] group-hover:text-[#d1db3f] transition-colors" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-4 -right-4 bg-[#0e7a83] text-white text-[9px] w-5 h-5 flex items-center justify-center font-black border-2 border-[#f8f9fa] animate-in fade-in zoom-in">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </div>
              <span className="hidden lg:block font-black text-[10px] tracking-widest text-[#1e2948] group-hover:text-white uppercase">
                {labels.checkoutBtn}
              </span>
            </div>
            
            <button 
              className="md:hidden bg-[#1e2948] p-2 text-[#d1db3f]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:block border-t border-[#1e2948]/10">
          <ul className="flex justify-between items-center py-3">
            {navigation.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  className="font-mono text-[11px] font-bold text-[#1e2948]/70 hover:text-[#0e7a83] uppercase tracking-tighter flex items-center gap-1 group"
                >
                  <span className="text-[#d1db3f] opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* MENÚ MÓVIL */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-[#0e7a83] py-6 shadow-2xl animate-in slide-in-from-top duration-300 px-6">
            <ul className="grid grid-cols-1 gap-2">
              {navigation.map((link) => (
                <li key={link.name} onClick={() => setIsMenuOpen(false)}>
                  <Link 
                    to={link.href} 
                    className="block py-3 px-4 bg-[#f8f9fa] border-l-4 border-[#1e2948] font-black text-xs uppercase tracking-widest hover:bg-[#d1db3f] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* DRAWER DEL CARRITO CON DATOS DE PRUEBA */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        formatCurrency={formatCurrency}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </header>
  );
};

export default Header;