import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';

const cards = [
  {
    id: 0,
    title: "1. Auditamos",
    shortTitle: "Auditoría",
    description: "Analizamos todos los aspectos que impactan en tu estrategia de ventas realizando una auditoría completa del funnel.",
    details: [
      "Paid Media & estrategia de inversión",
      "Propuesta de valor y creatividad",
      "Tracking, eventos y calidad de datos",
      "Procesos comerciales y CRM",
      "UX/UI y fricción en el journey"
    ],
    footer: "Investigamos todo lo que impacta en ventas, no solo tu estrategia de medios.",
    color: "bg-[#2563EB]", // Azul Vibrante
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 1,
    title: "2. Diagnosticamos",
    shortTitle: "Diagnóstico",
    description: "Hacemos un diagnóstico de la salud de tus ventas y priorizamos los ajustes de acuerdo a su nivel de impacto y esfuerzo.",
    details: [
      "Aumentan tu CPA",
      "Frenan tu conversión a ventas",
      "Deterioran tu ROI",
      "Incrementan las bajas tempranas",
      "Perjudican la recompra"
    ],
    footer: "Investigamos todo lo que impacta en ventas, no solo tu estrategia de medios.",
    color: "bg-[#9333EA]", // Violeta Leadaki
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "3. Ejecutamos",
    shortTitle: "Ejecución",
    description: "Activamos de forma sincronizada los accionables priorizados y te acompañamos a implementar los puntos de mejora.",
    details: [
      "Paid Media y Creatividad integrados",
      "Optimización UX/UI",
      "Data y Gestión de Ventas integradas"
    ],
    color: "bg-[#DB2777]", // Magenta Leadaki
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "4. Optimizamos",
    shortTitle: "Optimización",
    description: "Medimos constantemente el impacto de la ejecución en tus ventas y te brindamos feedback. Hacemos un corte y volvemos a auditar.",
    color: "bg-[#059669]", // Esmeralda Vibrante
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

export function ExpandingCards() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="py-24 bg-[#0f172a] px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Growth Revenue System ™ <br />
            <span className="text-[#EE4587] text-3xl md:text-5xl">
              by Leadaki
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl border-l-4 border-blue-500/30 pl-6"
          >
            Diseñamos y operamos un sistema de crecimiento que conecta paid media, creatividad, data y ventas en ciclos cortos de aprendizaje. Medimos impacto real en revenue.
          </motion.p>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        {/* Ajusté la altura a 750px para asegurar que entre todo en pantallas chicas */}
        <div className="flex flex-col md:flex-row h-[550px] gap-4 w-full">
          {cards.map((card) => (
            <CardItem 
              key={card.id} 
              card={card} 
              isOpen={activeId === card.id} 
              onClick={() => setActiveId(card.id)} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function CardItem({ card, isOpen, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[0.32,0.72,0,1] group border border-white/5
        ${isOpen ? 'md:flex-[3] flex-[3]' : 'md:flex-[0.5] flex-[1]'} 
        ${!isOpen && 'hover:md:flex-[0.6] hover:brightness-110'} 
      `}
    >
      
      {/* Imagen de fondo */}
      <img 
        src={card.image} 
        alt={card.title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 
          ${isOpen ? 'scale-105' : 'scale-150 grayscale group-hover:grayscale-0 group-hover:scale-125'}
        `}
      />
      
      {/* Capas de Color */}
      <div className={`absolute inset-0 ${card.color} mix-blend-multiply transition-opacity duration-500 ${isOpen ? 'opacity-85' : 'opacity-90'}`} />
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent transition-opacity duration-500 ${isOpen ? 'opacity-90' : 'opacity-60'}`} />

      {/* --- CONTENIDO TARJETA ABIERTA --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end"
          >
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.5 }}
             >
                {/* Icono decorativo */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-base md:text-lg text-gray-200 mb-6 font-medium leading-relaxed border-l-2 border-white/30 pl-4 max-w-2xl">
                  {card.description}
                </p>
                
                {/* Bullets en 2 Columnas para ahorrar espacio */}
                {card.details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4 bg-black/20 p-4 rounded-2xl backdrop-blur-md border border-white/5">
                    {card.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-white/90" />
                        <span className="text-sm text-gray-100 leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* FOOTER (Conclusión) */}
                {card.footer && (
                  <div className="mt-2 bg-white/10 border border-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <p className="text-white font-bold italic text-sm md:text-base flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#EE4587] animate-pulse shrink-0"/>
                      {card.footer}
                    </p>
                  </div>
                )}

             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CONTENIDO TARJETA CERRADA --- */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute inset-0 flex flex-col items-center justify-between py-10"
          >
             <div className="text-white/40 font-bold text-xl font-mono">
               0{card.id + 1}
             </div>

             <div className="flex-1 flex items-center justify-center">
                <h3 
                  className="text-xl md:text-2xl font-bold text-white/70 tracking-widest uppercase whitespace-nowrap group-hover:text-white transition-all duration-300"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {card.shortTitle}
                </h3>
             </div>
            
            <div className="p-3 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black group-hover:-translate-y-2 transition-all duration-300 shadow-lg">
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}