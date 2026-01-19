import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// 👇 1. IMPORTAMOS EL LOGO
import logoImg from '../../assets/logo-blanco-01.svg'; 

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el fondo de transparente a "vidrio"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Casos de Éxito', href: '#cases' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* 👇 2. LOGO AQUI (Lado Izquierdo) */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src={logoImg} 
              alt="Leadaki Logo" 
              // Ajusta 'h-8' (32px) o 'h-10' (40px) según el tamaño que quieras
              className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            
            {/* Opcional: Si tu logo es solo el ícono y quieres que diga el nombre al lado, 
                descomenta estas líneas de abajo: */}
            {/* <span className="font-bold text-xl tracking-tight text-white">
              Leadaki
            </span> 
            */}
          </a>

          {/* Menú Desktop (Pantallas grandes) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
            
            <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
              Agendar Llamada
            </button>
          </div>

          {/* Botón Menú Móvil (Hamburguesa) */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-bold">
                Agendar Llamada
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}