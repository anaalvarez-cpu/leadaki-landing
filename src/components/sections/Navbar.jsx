import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Detectamos si el usuario ha bajado para hacer el vidrio más opaco si quieres
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        /* CONTENEDOR PRINCIPAL: Centrado y flotante */
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            {/* LA CÁPSULA DE VIDRIO (PILL) */}
            <div className={cn(
                "flex items-center justify-between transition-all duration-300",
                "backdrop-blur-lg border border-white/10 shadow-2xl", // Efecto Vidrio y Borde sutil
                "rounded-full px-6 py-3", // Forma de pastilla
                "w-full max-w-5xl", // Ancho máximo para que no toque los bordes en PC
                
                // Fondo dinámico: 
                // Al principio es sutil (white/5), al bajar scroleando se hace un pelín más sólido para leer mejor
                isScrolled ? "bg-[#0f172a]/50" : "bg-white/5" 
            )}>

                {/* 1. LOGO */}
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    {/* Icono del logo (simulado) */}
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">
                        Leadaki
                    </span>
                </div>

                {/* 2. MENÚ DE ESCRITORIO (Links con flechitas) */}
                <div className="hidden md:flex items-center gap-1">
                    <NavItem title="Consultoría" hasDropdown />
                    <NavItem title="Paid Media" hasDropdown />
                    <NavItem title="Creative Studio" hasDropdown />
                    <NavItem title="Agentes IA" hasDropdown />
                    <NavItem title="Nosotros" hasDropdown />
                </div>

                {/* 3. BOTÓN / MENÚ MÓVIL */}
                <div className="flex items-center gap-4">
                    {/* Botón CTA pequeño para la navbar */}
                    <button className="hidden md:block px-5 py-2 rounded-full bg-white text-[#0f172a] font-bold text-sm hover:bg-gray-200 transition-colors">
                        Empezar
                    </button>

                    {/* Icono Hambuguesa (Móvil) */}
                    <button className="md:hidden p-2 text-white/80 hover:text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </motion.nav>
    );
}

// Pequeño componente para los links individuales
function NavItem({ title, hasDropdown }) {
    return (
        <div className="relative group px-4 py-2 cursor-pointer">
            <div className="flex items-center gap-1 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {title}
                {hasDropdown && (
                    <ChevronDown className="w-3 h-3 text-gray-500 group-hover:text-white transition-transform group-hover:rotate-180" />
                )}
            </div>
            
            {/* Efecto de luz al hacer hover (opcional) */}
            <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 -z-10" />
        </div>
    );
}