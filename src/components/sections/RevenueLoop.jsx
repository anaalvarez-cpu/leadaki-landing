import React from 'react';
import { motion } from 'framer-motion';
import { Search, Stethoscope, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Auditamos",
    desc: "Analizamos todos los aspectos que impactan en tu estrategia de ventas realizando una auditoría completa del funnel.",
    details: ["Paid Media & estrategia", "Propuesta de valor", "Tracking y calidad de datos", "Procesos comerciales / CRM", "UX/UI y fricción en el journey"],
    color: "text-[#EE4587]",
    bg: "bg-[#EE4587]/10",
  },
  {
    icon: Stethoscope,
    title: "2. Diagnosticamos",
    desc: "Hacemos un diagnóstico de la salud de tus ventas y priorizamos ajustes por impacto/esfuerzo.",
    details: ["Aumentan tu CPA", "Frenan conversión a ventas", "Deterioran tu ROI", "Bajas tempranas", "Perjudican la recompra"],
    subtext:'Definimos qué cambiar primero y por qué.',
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Zap,
    title: "3. Ejecutamos",
    desc: "Activamos de forma sincronizada los accionables priorizados y te acompañamos a implementar os puntos de mejora a nivel interno.",
    subtext: "Paid Media, Creatividad, UX/UI, Data y Gestión de Ventas trabajando integrados, no en silos.",
    color: "text-[#EE4587]", 
    bg: "bg-[#EE4587]/10",
  },
  {
    icon: TrendingUp,
    title: "4. Optimizamos (siempre)",
    desc: "Medimos impacto en revenue, brindamos feedback, hacemos corte y volvemos a auditar.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  }
];

export function RevenueLoop() {
  return (
    // 👇 CAMBIO 1: Fondo #0b1120 (Igual que Servicios) para que no haya corte de color
    <section className="py-24 bg-[#0b1120] relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Encabezado */}
        <div className="mb-16 text-left max-w-4xl mr-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Growth Revenue System ™ 
            <span className="text-[#EE4587] block mt-2">by Leadaki</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Diseñamos y operamos un sistema de crecimiento que conecta paid media, creatividad, data y ventas en ciclos cortos de aprendizaje. Medimos impacto real en revenue, reasignamos inversión de acuerdo a su rendimiento, y optimizamos el negocio mientras sigue creciendo.

          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-full"
            >
              {/* 👇 CAMBIO 2: Quité el 'border' para eliminar cualquier línea fina */}
              <div className={`h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 flex flex-col items-start text-left shadow-xl`}>
                
                {/* Icono */}
                <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 shrink-0`}>
                  <step.icon size={28} />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                
                {/* Descripción */}
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {step.desc}
                </p>
                
                {/* Detalles */}
                {step.details && (
                  <ul className="space-y-3 mt-auto w-full">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${step.color}`} />
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subtexto sin líneas */}
                {step.subtext && (
                   <div className="mt-auto pt-4 w-full">
                     <p className="text-sm text-gray-500 leading-snug italic">
                       {step.subtext}
                     </p>
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}