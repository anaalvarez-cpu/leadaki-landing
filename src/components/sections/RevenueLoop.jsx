import React from 'react';
import { motion } from 'framer-motion';
// 👇 AQUÍ ESTABA EL ERROR. Ahora está limpio:
import { Target, Zap, Users, ArrowRight } from 'lucide-react'; 

const steps = [
  {
    icon: Target,
    title: "Atraer",
    desc: "Capturamos la atención de clientes ideales con estrategias de alto impacto y segmentación precisa.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50"
  },
  {
    icon: Zap,
    title: "Empoderar",
    desc: "Nutrimos a los prospectos con contenido relevante y automatización inteligente para prepararlos para la venta.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50"
  },
  {
    icon: Users,
    title: "Conectar",
    desc: "Facilitamos la conversión final conectando leads calificados directamente con tu equipo comercial.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  }
];

export function RevenueLoop() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Encabezado */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            IA Revenue Loop
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Alineamos tus equipos de Marketing y Ventas con un sistema cíclico que acelera la conversión.
          </motion.p>
        </div>

        {/* Grid de Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Tarjeta Glassmorphism */}
              <div className={`h-full p-8 rounded-2xl bg-[#1e293b]/60 backdrop-blur-sm border border-white/5 transition-all duration-300 ${step.border} hover:bg-[#1e293b] hover:-translate-y-1`}>
                
                {/* Icono con brillo */}
                <div className={`w-14 h-14 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={28} />
                </div>

                {/* Título y Texto */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.desc}
                </p>

                {/* Flecha decorativa (solo visual) */}
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/50">
                  <span className={step.color}>Fase {index + 1}</span>
                </div>
              </div>

              {/* Flecha conectora entre tarjetas (Solo desktop, y no en la última) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 text-white/20">
                  <ArrowRight size={32} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}