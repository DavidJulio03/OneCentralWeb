import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Menu, Hammer, PaintRoller, 
  Bolt, Wrench, Phone, MapPin, Truck, Headset, 
  Facebook, Instagram, MessageCircle, ArrowRight, Plus 
} from 'lucide-react';
import Footer from './layout/Footer';
import TopBar from './layout/TopBar';
import Header from './layout/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import CategoryGrid from './components/CategoryGrid'
import MonthlyOffers from './components/MonthlyOffers';

const OneCentralStore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Datos de ejemplo
  const categories = [
    { name: 'Herramientas', icon: <Hammer className="w-8 h-8" /> },
    { name: 'Pinturas', icon: <PaintRoller className="w-8 h-8" /> },
    { name: 'Electricidad', icon: <Bolt className="w-8 h-8" /> },
    { name: 'Plomería', icon: <Wrench className="w-8 h-8" /> },
  ];

  const products = [
    {
      id: 1,
      tag: 'NUEVO',
      category: 'Herramientas',
      title: "Taladro Percutor 1/2' Industrial",
      price: '$280.000',
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      category: 'Pinturas',
      title: "Pintura Vinilo Tipo 1 Blanco",
      price: '$85.000',
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      category: 'Manuales',
      title: "Juego de Destornilladores x6",
      price: '$45.000',
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      category: 'Construcción',
      title: "Cemento Gris Uso General 50kg",
      price: '$32.000',
      image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      {/* --- HEADER --- */}
      <Header></Header>

      {/* --- HERO SECTION --- */}
      <Hero></Hero>

      {/* --- CATEGORIES --- */}
     <CategoryGrid></CategoryGrid>

      {/* --- PRODUCTS --- */}
      <MonthlyOffers></MonthlyOffers>

      {/* --- TRUST SECTION --- */}
      <TrustSection></TrustSection>

      {/* --- FOOTER --- */}
      <Footer></Footer>
    </div>
  );
};

export default OneCentralStore;