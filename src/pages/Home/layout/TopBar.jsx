import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1 hover:text-[#d1db3f] cursor-pointer transition-colors">
            <Phone size={14} className="text-[#d1db3f]" /> 
            +57 300 123 4567
          </span>
          <span className="hidden md:flex items-center gap-1">
            <MapPin size={14} className="text-[#d1db3f]" /> 
            Ocaña, Norte de Santander
          </span>
        </div>
        <div className="font-medium tracking-wide">
          Envíos a todo Ocaña y alrededores
        </div>
      </div>
    </div>
  );
};

export default TopBar;