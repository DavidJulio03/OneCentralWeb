import React from 'react';
import { 
  Facebook, Instagram, MessageCircle, 
  MapPin, Phone, Mail, ExternalLink,
  ShieldCheck, ArrowUpRight, Cpu
} from 'lucide-react';

const FOOTER_DATA = {
  company: {
    name: "ONE",
    suffix: "CENTRAL",
    description: "Suministros de alto rendimiento y logística geolocalizada para el desarrollo de infraestructura en Ocaña.",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Instagram, href: "#" },
      { icon: MessageCircle, href: "#" },
    ]
  },
  columns: [
    {
      title: "Exploración",
      links: [
        { label: "Catálogo Digital", id: "01" },
        { label: "Nuevas Llegadas", id: "02" },
        { label: "Marcas Aliadas", id: "03" },
        { label: "Soporte Técnico", id: "04" }
      ]
    },
    {
      title: "Corporativo",
      links: [
        { label: "Nuestra Historia", id: "05" },
        { label: "Logística de Envío", id: "06" },
        { label: "Ventas al Mayor", id: "07" },
        { label: "Privacidad", id: "08" }
      ]
    }
  ],
  contact: [
    { icon: Phone, value: "+57 300 987 6543", label: "Protocolo_Voz" },
    { icon: Mail, value: "ventas@onecentral.com.co", label: "Enlace_Mail" },
    { icon: MapPin, value: "Calle 11 # 12-34, Ocaña", label: "Geo_Ubicación" }
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-20 pb-10 relative overflow-hidden border-t border-[#1e2948]">
      
      {/* --- DISEÑO INDUSTRIAL --- */}
      {/* Regla milimetrada en color cian tenue */}
      <div className="absolute right-0 top-0 h-full w-8 border-l border-white/5 flex flex-col justify-between py-10 opacity-20">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-[9px] font-mono text-[#0e7a83] rotate-90">{i * 50}ms</span>
        ))}
      </div>
      
      {/* Glows de profundidad para que no se vea plano */}
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#0e7a83]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#d1db3f]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* SECCIÓN 1: IDENTIDAD VISUAL */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-2">
               <h2 className="text-4xl font-black tracking-tighter italic uppercase text-white">
                {FOOTER_DATA.company.name}<span className="text-[#0e7a83]">{FOOTER_DATA.company.suffix}</span>
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-12 bg-[#d1db3f]" />
                <span className="text-[10px] font-mono text-[#d1db3f] tracking-widest uppercase">Heavy Duty Division</span>
              </div>
            </div>
            
            <p className="text-sm font-medium leading-relaxed text-slate-500 italic border-l-2 border-[#1e2948] pl-4">
              {FOOTER_DATA.company.description}
            </p>

            <div className="flex gap-2">
              {FOOTER_DATA.company.socials.map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 bg-[#1e2948] text-white/50 border border-white/5 flex items-center justify-center hover:bg-[#0e7a83] hover:text-white hover:border-[#0e7a83] transition-all duration-300">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* SECCIÓN 2: INDEX DE NAVEGACIÓN */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {FOOTER_DATA.columns.map((col, i) => (
              <div key={i} className="space-y-6">
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#0e7a83] flex items-center gap-2">
                   {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                        <span className="text-[9px] font-mono text-[#1e2948] group-hover:text-[#d1db3f] font-black">[{link.id}]</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SECCIÓN 3: TERMINAL DE CONTACTO */}
          <div className="lg:col-span-4">
            <div className="bg-[#1e2948]/30 border border-white/5 p-6 backdrop-blur-sm relative group">
              {/* Esquina decorativa */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d1db3f]/30 group-hover:border-[#d1db3f] transition-colors" />
              
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-[#d1db3f]">
                // DATA_CONNECTION_POINT
              </h4>
              <div className="space-y-6">
                {FOOTER_DATA.contact.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer">
                    <div className="p-2 bg-[#1e2948] text-[#0e7a83] group-hover:bg-[#d1db3f] group-hover:text-[#1e2948] transition-all">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- BARRA INFERIOR: STATUS DE SISTEMA --- */}
        <div className="mt-20 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1e2948] border border-white/5 text-[#d1db3f] font-mono text-[9px]">
              <Cpu size={12} className="animate-pulse" />
              SYSTEM_SYNC_OK
            </div>
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
              © {currentYear} OC_FERRETERA_LOGS
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-[10px] font-bold">
            <span className="flex items-center gap-1 text-slate-500 hover:text-[#0e7a83] cursor-pointer transition-colors">
              <ShieldCheck size={14} /> ASTM_CERT
            </span>
            <span className="flex items-center gap-1 text-[#d1db3f] hover:brightness-110 cursor-pointer">
              GEO_OCAÑA_NODE <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;