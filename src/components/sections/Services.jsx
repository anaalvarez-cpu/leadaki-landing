import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Paid Media orientado a Revenue",
    description: "No optimizamos clics. Optimizamos ventas.",
    tags: ["Estrategia", "Performance", "Media Buying"]
  },
  {
    id: "02",
    title: "Data Analytics & Medición",
    description: "Medimos lo que importa para decidir mejor.",
    tags: ["Tracking", "Dashboards", "Attribution"]
  },
  {
    id: "03",
    title: "UX/UI & CRO",
    description: "Convertimos fricción en experiencias increíbles.",
    tags: ["Auditoría", "Diseño", "Optimización"]
  },
  {
    id: "04",
    title: "Creatividad de Alto Impacto",
    description: "Mensajes que conectan, prueban y convierten.",
    tags: ["Ads Design", "Copywriting", "A/B Testing"]
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="servicios" className="py-24 bg-[#0b1120]">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* === COLUMNA IZQUIERDA (Fija y Limpia) === */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">

             
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
               Todo lo que hacemos tiene un solo objetivo: <br/>
               {/* Solo Magenta Sólido, sin degradados raros */}
               <span className="text-[#EE4587]">
                 vender mejor.
               </span>
             </h2>
                       <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">Por eso sincronizamos nuestros servicios. 
 </p> 
          </div>

          {/* === COLUMNA DERECHA (Acordeón Minimalista) === */}
          <div className="lg:col-span-7 flex flex-col">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={service.id} 
                  className={`border-b border-white/10 last:border-0 transition-colors duration-500 ${isActive ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}
                >
                  {/* Título Clickeable */}
                  <button 
                    onClick={() => setActiveIndex(index)}
                    className="w-full flex items-center justify-between py-8 px-4 md:px-6 text-left focus:outline-none group"
                  >
                    <span className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {service.title}
                    </span>
                    {/* Flecha: Solo se pone magenta cuando está activo */}
                    <ChevronDown 
                      className={`transition-transform duration-300 ${isActive ? 'rotate-180 text-[#EE4587]' : 'text-gray-600'}`} 
                      size={24} 
                    />
                  </button>

                  {/* Contenido Desplegable */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-6 pb-10 pt-2">
                          
                          {/* Tags Minimalistas (Gris/Blanco, nada de arcoíris) */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.tags && service.tags.map((tag, i) => (
                              <span key={i} className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/5">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                            {service.description}
                          </p>

                          {/* Botón Call to Action (El único toque fuerte de color) */}
                          <button className="text-sm font-bold text-white bg-[#EE4587] hover:bg-[#be185d] px-8 py-3 rounded-full transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(238,69,135,0.25)] hover:shadow-[0_4px_25px_rgba(238,69,135,0.4)]">
                            Ver detalles <ArrowRight size={16} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}