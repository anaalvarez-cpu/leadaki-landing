import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 0,
    title: "No decimos IA, aplicamos IA",
    description: "Para atraer prospectos de calidad, convertirlos rápidamente en clientes y elevar su experiencia de compra.",
    shortTitle: "Estrategia con IA", // Texto corto para la barra
    color: "bg-[#be185d]", 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop", 
    theme: "pink"
  },
  {
    id: 1,
    title: "Somos Google Marketing Platform Sales Partner",
    description: "Trabajamos con la mejor plataforma publicitaria para impactar a la persona correcta en el momento ideal.",
    shortTitle: "Partner Google GMP", // Texto corto para la barra
    color: "bg-[#1e1b4b]", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    theme: "blue"
  },
  {
    id: 2,
    title: "Creamos el primer Chatbot para Ventas",
    description: "Cliengo mejora tu conversión a venta y brinda una experiencia superadora a los clientes.",
    shortTitle: "Chatbot de Ventas", // Texto corto para la barra
    color: "bg-[#581c87]", 
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", 
    theme: "purple"
  }
];

export function ExpandingCards() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="py-20 bg-[#0f172a] px-4 md:px-6">
      <div className="container mx-auto">
        
        {/* Header de la sección */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-start gap-2 mb-2"
          >
             <ArrowUpRight className="text-white w-6 h-6 rotate-45" />
             <p className="text-base font-semibold text-white">Te ayudamos a reinventar tu Estrategia</p>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#ec4899]"
          >
            y a liderar la era de las ventas con IA
          </motion.h2>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="flex flex-col md:flex-row h-[600px] gap-2 md:gap-3 w-full">
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
      // CAMBIOS CLAVE AQUÍ: 
      // 1. md:flex-[4] para la abierta (muy grande)
      // 2. md:flex-[0.4] para la cerrada (muy fina)
      className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[0.32,0.72,0,1] group
        ${isOpen ? 'md:flex-[4] flex-[3]' : 'md:flex-[0.4] flex-[1]'} 
        ${!isOpen && 'hover:md:flex-[0.5] hover:brightness-110'} 
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
      <div className={`absolute inset-0 opacity-90 ${card.color} mix-blend-multiply transition-opacity duration-500 ${isOpen ? 'opacity-80' : 'opacity-95'}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* --- CONTENIDO TARJETA ABIERTA --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end"
          >
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.5 }}
             >
                <div className="absolute top-8 right-8">
                  <ArrowUpRight className="w-10 h-10 text-white/50" />
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl">
                  {card.title}
                </h3>
                <p className="text-lg text-gray-200 mb-8 max-w-lg font-medium">
                  {card.description}
                </p>
                <button className="px-8 py-3 rounded-full border border-white/50 text-white hover:bg-white hover:text-black transition-all font-semibold">
                  Conocer más
                </button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CONTENIDO TARJETA CERRADA (Vertical) --- */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute inset-0 flex flex-col items-center justify-between py-10"
          >
             {/* Número o Icono arriba */}
             <div className="text-white/40 font-bold text-xl">
               0{card.id + 1}
             </div>

             {/* Título Vertical */}
             {/* Usamos writing-mode para texto vertical real y elegante */}
             <div className="flex-1 flex items-center justify-center">
                <h3 
                  className="text-xl md:text-2xl font-bold text-white/70 tracking-widest uppercase whitespace-nowrap group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {card.shortTitle}
                </h3>
             </div>
            
            {/* Flecha animada al Hover */}
            <div className="p-3 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black group-hover:-translate-y-2 transition-all duration-300">
              <ArrowRight className="w-5 h-5 md:rotate-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}