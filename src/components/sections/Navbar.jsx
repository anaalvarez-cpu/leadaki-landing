import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo-blanco-01.svg'; 

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Casos de Éxito', href: '#cases' },
  ];

  return (
    <>
      {/* Contenedor Principal Centrado */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        
        {/* LA PASTILLA (Pill) */}
        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between w-full max-w-4xl transition-all duration-300 hover:border-white/20">
          
          {/* 1. LOGO */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img 
              src={logoImg} 
              alt="Leadaki Logo" 
              className="h-8 w-auto object-contain" 
            />
          </a>

          {/* 2. MENÚ DESKTOP (Links centrados) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. BOTÓN Y HAMBURGUESA (Derecha) */}
          <div className="flex items-center gap-4">
            {/* Botón Desktop */}
            <button className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200 transition-all hover:scale-105">
              Agendar
            </button>

            {/* Icono Menú Móvil */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* MENÚ MÓVIL (Desplegable separado) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-white/5 font-medium px-4 py-3 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button className="w-full px-4 py-3 rounded-xl bg-blue-600 text-white font-bold">
                Agendar Llamada
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}