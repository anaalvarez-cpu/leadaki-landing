import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 👇 1. IMPORTAMOS "Link" PARA QUE LA NAVEGACIÓN SEA INSTANTÁNEA
import { Link } from 'react-router-dom'; 
import { 
  Menu, X, ChevronDown, 
  Target, Zap, BarChart3, Users, Layout, 
  Megaphone, LineChart, Globe, Award, ArrowRight 
} from 'lucide-react';
import logoImg from '../../assets/logo-blanco-01.svg'; 

// --- DATOS DEL MEGA MENU (Con los enlaces configurados) ---
const menuData = [
  {
    title: "Por qué Leadaki",
    items: [
      { 
        name: "Propósito y Visión", 
        desc: "Nuestra misión de transformar agencias.", 
        icon: Target,
        href: "/por-que-leadaki" // 👈 ¡ESTE ES EL ENLACE QUE CREAMOS!
      },
      { 
        name: "Por qué Growth", 
        desc: "La metodología detrás del crecimiento.", 
        icon: Zap,
        href: "#" // Los demás quedan en espera
      }
    ],
    featured: {
      title: "Auditoría Gratuita",
      desc: "¿Tu agencia está lista para escalar? Descúbrelo hoy.",
      bg: "from-blue-600 to-cyan-500"
    }
  },
  {
    title: "Cómo trabajamos",
    items: [
      { name: "Método Revenue Loop", desc: "Sistema cíclico de generación de ingresos.", icon: BarChart3, href: "#" },
      { name: "Diagnóstico Digital", desc: "Evaluación profunda de tus activos.", icon: LineChart, href: "#" },
      { name: "Modelo de Partnership", desc: "Crecemos contigo, no solo para ti.", icon: Users, href: "#" }
    ],
    featured: {
      title: "El Método",
      desc: "Conoce el Revenue Loop en profundidad.",
      bg: "from-purple-600 to-pink-500"
    }
  },
  {
    title: "Soluciones",
    items: [
      { name: "Paid Media", desc: "Meta & Google Ads de alto rendimiento.", icon: Megaphone, href: "#" },
      { name: "Creatividad", desc: "Diseño que convierte clics en clientes.", icon: Layout, href: "#" },
      { name: "Data Analytics", desc: "Dashboards y atribución precisa.", icon: LineChart, href: "#" },
      { name: "UX/UI & CRO", desc: "Optimización de tasa de conversión.", icon: Globe, href: "#" }
    ],
    featured: {
      title: "Casos Recientes",
      desc: "Mira cómo escalamos una e-commerce al 300%.",
      bg: "from-orange-500 to-red-500"
    }
  },
  {
    title: "Resultados",
    items: [
      { name: "Casos de éxito", desc: "Resultados reales, números reales.", icon: Award, href: "#" },
      { name: "Clientes y Verticales", desc: "Sectores donde somos expertos.", icon: Users, href: "#" }
    ],
    featured: {
      title: "Resultados",
      desc: "Más de $10M gestionados en ad spend.",
      bg: "from-green-500 to-emerald-600"
    }
  },
  {
    title: "Nosotros",
    items: [
      { name: "Manifiesto Leadaki", desc: "Nuestros valores no negociables.", icon: Target, href: "#" },
      { name: "Equipo y Partners", desc: "Conoce a los expertos detrás.", icon: Users, href: "#" },
      { name: "Reconocimientos", desc: "Premios y certificaciones.", icon: Award, href: "#" }
    ],
    featured: {
      title: "Únete al equipo",
      desc: "Estamos buscando talento A-Player.",
      bg: "from-blue-800 to-indigo-900"
    }
  }
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <>
      {/* --- NAVBAR --- */}
      <nav 
        className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4"
        onMouseLeave={handleMouseLeave} 
      >
        
        {/* BARRA PRINCIPAL */}
        <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between w-full max-w-7xl relative z-50">
          
          {/* Logo (Ahora también es un Link al inicio) */}
          <Link to="/" className="flex items-center gap-2 shrink-0 mr-8">
            <img src={logoImg} alt="Leadaki Logo" className="h-9 w-auto object-contain" />
          </Link>

          {/* Enlaces Desktop */}
          <div className="hidden lg:flex items-center gap-1 justify-center flex-1">
            {menuData.map((category, index) => (
              <button 
                key={index}
                className={`px-5 py-2.5 flex items-center gap-2 text-base font-medium transition-all rounded-full
                  ${activeMenu === index ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                onMouseEnter={() => setActiveMenu(index)}
              >
                {category.title}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${activeMenu === index ? "rotate-180 text-blue-400" : "text-gray-500"}`} 
                />
              </button>
            ))}
          </div>

          {/* Botones Derecha */}
          <div className="flex items-center gap-4 ml-auto lg:ml-8">
            <button className="hidden sm:block px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Agendar
            </button>
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MEGA MENU DESPLEGABLE (ANCHO COMPLETO) */}
        <AnimatePresence>
          {activeMenu !== null && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-7xl mt-2 z-40"
            >
              <div 
                className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[350px]"
              >
                
                {/* COLUMNA IZQUIERDA: LISTA DE ITEMS */}
                <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 content-start">
                  {menuData[activeMenu].items.map((item, idx) => (
                    // 👇 AQUÍ USAMOS <Link> EN LUGAR DE <a>
                    <Link 
                      key={idx} 
                      to={item.href || "#"} // Si no tiene link, usa #
                      onClick={() => setActiveMenu(null)} // Cierra el menú al hacer click
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="p-3 bg-white/5 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner shrink-0">
                        <item.icon size={26} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* COLUMNA DERECHA: CTA VISUAL */}
                <div className={`w-full md:w-[35%] p-10 hidden md:flex flex-col justify-end relative overflow-hidden bg-gradient-to-br ${menuData[activeMenu].featured.bg}`}>
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-white border border-white/10">
                      DESTACADO
                    </div>
                    <h4 className="text-white font-bold text-3xl mb-4 leading-tight">
                      {menuData[activeMenu].featured.title}
                    </h4>
                    <p className="text-white/90 text-base mb-8 leading-relaxed">
                      {menuData[activeMenu].featured.desc}
                    </p>
                    <button className="w-fit px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                      Ver Detalles <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- MENU MOVIL --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#0f172a] pt-32 px-6 pb-10 overflow-y-auto lg:hidden"
          >
            <button 
              className="absolute top-8 right-6 text-white p-2 bg-white/10 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-6 max-w-md mx-auto">
              {menuData.map((category, index) => (
                <div key={index} className="border-b border-white/5 pb-4">
                  <button 
                    onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index)}
                    className="flex items-center justify-between w-full text-left text-xl font-bold text-white py-2"
                  >
                    {category.title}
                    <ChevronDown size={24} className={`transition-transform ${activeMobileSubmenu === index ? 'rotate-180 text-blue-400' : 'text-gray-500'}`} />
                  </button>
                  <AnimatePresence>
                    {activeMobileSubmenu === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 py-4 pl-2">
                          {category.items.map((item, subIndex) => (
                            // 👇 ENLACE MÓVIL TAMBIÉN ACTUALIZADO
                            <Link 
                              key={subIndex} 
                              to={item.href || "#"} 
                              onClick={() => setMobileMenuOpen(false)} // Cierra todo al hacer click
                              className="flex items-center gap-4 p-2 rounded-lg active:bg-white/10"
                            >
                              <item.icon size={22} className="text-blue-500" />
                              <div>
                                <span className="text-lg text-gray-200 block">{item.name}</span>
                                <span className="text-sm text-gray-500 block">{item.desc}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <button className="w-full mt-8 px-5 py-4 rounded-xl bg-blue-600 text-white font-bold text-xl shadow-lg">
                Agendar Auditoría
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}