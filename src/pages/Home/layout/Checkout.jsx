import React, { useState, useEffect } from 'react';
import { CreditCard, Truck, Clock, MapPin, Hash, ShieldCheck, Box } from 'lucide-react';

// --- CONFIGURACIÓN DE ESTILO (Theme Tokens) ---
const THEME = {
  colors: {
    primary: "#1e2948",    // Navy
    secondary: "#0e7a83",  // Teal
    accent: "#d1db3f",     // Lime
    bg: "#f8f9fa",         // Light Gray
    border: "#e2e8f0"
  }
};

// Configuración simulada de Zonas y Costos (Lógica Original)
const DELIVERY_ZONES = {
  'default': { price: 0, label: 'SELECCIONA SECTOR...' },
  'zona-norte': { price: 5.00, label: 'ZONA NORTE (+$5.00)' },
  'zona-centro': { price: 3.50, label: 'ZONA CENTRO (+$3.50)' },
  'zona-sur': { price: 6.00, label: 'ZONA SUR (+$6.00)' },
  'recogida': { price: 0.00, label: 'RECOGER EN TIENDA (GRATIS)' }
};

const CheckoutLocal = () => {
  // Estado del Carrito (Simulado)
  const cartSubtotal = 45.00;

  // Estados del Formulario
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    telefono: '',
    direccion: '',
    zona: 'default',
    instrucciones: '',
    horarioEntrega: 'lo-antes-posible'
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingCost, setShippingCost] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Actualizar costo de envío
  useEffect(() => {
    const zone = DELIVERY_ZONES[formData.zona] || DELIVERY_ZONES['default'];
    setShippingCost(zone.price);
  }, [formData.zona]);

  const total = cartSubtotal + shippingCost;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.zona === 'default') {
      alert("Por favor selecciona una zona de entrega válida.");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      if (paymentMethod === 'card') {
        console.log("--> Enviando datos a Pasarela...");
        console.log("--> Pago Aprobado.");
      } else {
        console.log("--> Orden creada para Pago Contra Entrega.");
      }
      console.log("Pedido Final:", { ...formData, total, metodoPago: paymentMethod });
      alert(`¡Pedido ${paymentMethod === 'card' ? 'pagado' : 'registrado'} con éxito!`);
      setIsProcessing(false);
    }, 2000);
  };

  // --- ESTILOS REUTILIZABLES ---
  const inputStyle = `w-full p-3 bg-white border border-slate-300 rounded-sm font-mono text-sm text-[${THEME.colors.primary}] focus:border-[${THEME.colors.secondary}] focus:ring-1 focus:ring-[${THEME.colors.secondary}] outline-none transition-all placeholder:text-slate-400`;
  const labelStyle = `block text-[10px] font-bold text-[${THEME.colors.secondary}] mb-1 uppercase tracking-widest`;
  const sectionTitleStyle = `text-2xl font-black text-[${THEME.colors.primary}] uppercase tracking-tight flex items-center gap-3`;

  return (
    <div className={`bg-[${THEME.colors.bg}] min-h-screen py-12 px-4 font-sans relative overflow-hidden`}>
      
      {/* FONDO TÉCNICO */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(${THEME.colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-[5%] w-px h-full bg-slate-300 hidden xl:block" />
      <div className="absolute top-[10%] left-0 w-full h-px bg-slate-300 hidden xl:block" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* === SECCIÓN IZQUIERDA: FORMULARIO (Columnas 1-8) === */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header del Formulario */}
          <div className={`border-l-8 border-[${THEME.colors.secondary}] pl-6`}>
            <div className={`inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[${THEME.colors.primary}] bg-[${THEME.colors.accent}] px-2 py-1 mb-2`}>
              <Hash size={12} /> CHECKOUT_SYSTEM_V.2.0
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1e2948] uppercase leading-[0.9]">
              Finalizar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e7a83] to-[#1e2948]">Pedido</span>
            </h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. Datos de Entrega */}
            <div className="bg-white p-6 md:p-8 border-2 border-[#1e2948] shadow-sm relative group">
              {/* Decoración esquina */}
              <div className={`absolute top-0 right-0 w-8 h-8 bg-[${THEME.colors.bg}] border-l-2 border-b-2 border-[#1e2948]`} />
              
              <h2 className={sectionTitleStyle}>
                <MapPin className={`text-[${THEME.colors.secondary}]`} strokeWidth={3} /> 
                Datos de Logística
              </h2>
              <div className="h-1 w-full bg-slate-100 my-4 relative overflow-hidden">
                <div className={`absolute left-0 top-0 h-full w-20 bg-[${THEME.colors.accent}]`} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelStyle}>Correo Electrónico</label>
                  <input type="email" name="email" placeholder="ej. ingenieria@empresa.com" required className={inputStyle} onChange={handleChange} />
                </div>
                <div>
                  <label className={labelStyle}>Contacto Directo</label>
                  <input type="tel" name="telefono" placeholder="+57 300 000 0000" required className={inputStyle} onChange={handleChange} />
                </div>
              </div>
              
              <div className="mb-5">
                <label className={labelStyle}>Responsable (Receptor)</label>
                <input type="text" name="nombre" placeholder="Nombre completo del encargado" required className={inputStyle} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelStyle}>Zona de Cobertura</label>
                  <select name="zona" value={formData.zona} onChange={handleChange} className={`${inputStyle} appearance-none cursor-pointer`}>
                    {Object.entries(DELIVERY_ZONES).map(([key, value]) => (
                      <option key={key} value={key}>{value.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className={labelStyle}>Ventana Horaria</label>
                  <div className="relative">
                    <select name="horarioEntrega" onChange={handleChange} className={`${inputStyle} appearance-none cursor-pointer`}>
                      <option value="lo-antes-posible">PRIORIDAD ALTA (45-60 MIN)</option>
                      <option value="manana">TURNO MAÑANA (09:00 - 12:00)</option>
                      <option value="tarde">TURNO TARDE (14:00 - 18:00)</option>
                      <option value="noche">TURNO NOCHE (18:00 - 21:00)</option>
                    </select>
                    <Clock className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none"/>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelStyle}>Referencias Exactas</label>
                <textarea name="instrucciones" placeholder="INDICACIONES TÉCNICAS DE LLEGADA..." rows="2" className={inputStyle} required onChange={handleChange}></textarea>
              </div>
            </div>

            {/* 2. Método de Pago */}
            <div className="bg-white p-6 md:p-8 border-2 border-[#1e2948] relative">
               <h2 className={sectionTitleStyle}>
                <CreditCard className={`text-[${THEME.colors.secondary}]`} strokeWidth={3} /> 
                Método de Pago
              </h2>
              <div className="h-1 w-full bg-slate-100 my-4" />

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 py-4 px-4 border-2 transition-all flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-xs md:text-sm ${
                    paymentMethod === 'card' 
                    ? `border-[${THEME.colors.primary}] bg-[${THEME.colors.primary}] text-white shadow-[4px_4px_0px_0px_rgba(209,219,63,1)]` 
                    : 'border-slate-200 text-slate-400 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  <CreditCard size={18} /> Tarjeta / PSE
                </button>
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`flex-1 py-4 px-4 border-2 transition-all flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-xs md:text-sm ${
                    paymentMethod === 'cash' 
                    ? `border-[${THEME.colors.secondary}] bg-[${THEME.colors.secondary}] text-white shadow-[4px_4px_0px_0px_rgba(30,41,72,1)]` 
                    : 'border-slate-200 text-slate-400 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  <Truck size={18} /> Contra Entrega
                </button>
              </div>

              {/* Contenido condicional PSE */}
              {paymentMethod === 'card' && (
                <div className="bg-[#f1f5f9] p-5 border border-slate-300 border-l-4 border-l-[#1e2948] animate-fadeIn">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-white p-2 border border-slate-200">
                        <img src="https://inmobiliarialamansion.com/wp-content/uploads/2019/01/logo-pse.png" alt="PSE" className="h-8 w-auto grayscale opacity-80" />
                    </div>
                    <p className="text-[10px] md:text-xs text-[#1e2948] font-mono leading-relaxed mt-1">
                      <strong className="block mb-1">TRANSACCIÓN SEGURA ENCRIPTADA</strong>
                      Redirección segura a pasarela bancaria.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className={labelStyle}>Entidad Bancaria</label>
                        <select className={inputStyle}>
                        <option value="">SELECCIONAR BANCO...</option>
                        <option value="bancolombia">BANCOLOMBIA</option>
                        <option value="davivienda">DAVIVIENDA</option>
                        <option value="nequi">NEQUI / DAVIPLATA</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelStyle}>Tipo de Cliente</label>
                        <select className={inputStyle}>
                        <option value="natural">PERSONA NATURAL</option>
                        <option value="juridica">PERSONA JURÍDICA</option>
                        </select>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'cash' && (
                <div className={`bg-[#f0fdf4] p-4 border border-green-200 text-green-800 text-xs font-mono flex items-center gap-3`}>
                  <ShieldCheck size={20} />
                  <span>PAGO VERIFICADO AL MOMENTO DE LA ENTREGA FÍSICA.</span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* === SECCIÓN DERECHA: RESUMEN (Columnas 9-12) === */}
        <div className="lg:col-span-4">
          <div className="sticky top-8">
            <div className={`bg-white border-2 border-[${THEME.colors.primary}] shadow-[8px_8px_0px_0px_rgba(30,41,72,1)]`}>
              
              {/* Encabezado del Ticket */}
              <div className={`bg-[${THEME.colors.primary}] p-4 text-white flex justify-between items-center`}>
                <span className="font-black uppercase tracking-widest text-sm">Resumen Orden</span>
                <Box size={16} className={`text-[${THEME.colors.accent}]`} />
              </div>

              <div className="p-6">
                {/* Lista de Items */}
                <div className="space-y-3 mb-6 font-mono text-xs text-slate-600">
                  <div className="flex justify-between items-center border-b border-dashed border-slate-300 pb-2">
                    <span>2x Item1</span>
                    <span className="font-bold text-[#1e2948]">$20.00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dashed border-slate-300 pb-2">
                    <span>1x Item2</span>
                    <span className="font-bold text-[#1e2948]">$15.00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dashed border-slate-300 pb-2">
                    <span>2x Item3</span>
                    <span className="font-bold text-[#1e2948]">$10.00</span>
                  </div>
                </div>

                {/* Cálculos */}
                <div className="space-y-2 font-mono text-xs mb-6 bg-slate-50 p-3 border border-slate-100">
                  <div className="flex justify-between text-slate-500">
                    <span>SUBTOTAL NETO</span>
                    <span>${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 items-center">
                    <span className="max-w-[120px] truncate">
                        ENVÍO ({formData.zona !== 'default' ? DELIVERY_ZONES[formData.zona]?.label.split('(')[0] : '...'})
                    </span>
                    <span className={shippingCost === 0 ? `text-[${THEME.colors.secondary}] font-bold` : ""}>
                      {shippingCost === 0 ? 'GRATIS' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-end mb-6 border-t-2 border-[#1e2948] pt-4">
                  <span className="text-sm font-bold text-[#1e2948] uppercase">Total a Pagar</span>
                  <span className={`text-3xl font-black text-[${THEME.colors.secondary}] tracking-tighter`}>
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button 
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className={`group w-full py-4 px-4 font-black uppercase tracking-widest text-xs transition-all flex items-center justify-between border-2 border-[${THEME.colors.primary}] ${
                    isProcessing 
                      ? 'bg-slate-300 cursor-not-allowed text-slate-500 border-slate-300' 
                      : `bg-[${THEME.colors.accent}] text-[${THEME.colors.primary}] hover:bg-white hover:shadow-[4px_4px_0px_0px_#1e2948]`
                  }`}
                >
                  <span>
                    {isProcessing ? 'PROCESANDO...' : (paymentMethod === 'card' ? 'CONFIRMAR PAGO' : 'CONFIRMAR PEDIDO')}
                  </span>
                  {!isProcessing && <Truck size={16} className="group-hover:translate-x-1 transition-transform"/>}
                </button>

                <div className="mt-4 text-center">
                   <span className="text-[9px] font-mono text-slate-400 uppercase">
                    ID Transacción: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                   </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutLocal;