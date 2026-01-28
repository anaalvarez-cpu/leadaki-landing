import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, Repeat, Users, Target, TrendingUp, ArrowRight } from 'lucide-react';

export function WhyLeadaki() {
  const differentials = [
    {
      title: "Diagnóstico integral",
      desc: "Salud digital completa: Campañas, propuesta de valor, inversión, medición, procesos comerciales, CRM y UX.",
      icon: Activity
    },
    {
      title: "Revenue Loop",
      desc: "No funnel roto. Diseñamos y operamos un círculo virtuoso donde adquisición, conversión y retención se retroalimentan.",
      icon: Repeat
    },
    {
      title: "Modelo Partner",
      desc: "No proveedor. Trabajamos con tus equipos de Marketing, Ventas, IT y CX, alineando objetivos y prioridades reales.",
      icon: Users
    },
    {
      title: "Decisiones por Impacto",
      desc: "No por intuición. Probamos hipótesis donde realmente mueve el negocio, no cambios aleatorios.",
      icon: Target
    },
    {
      title: "Vamos a Variable",
      desc: "Confiamos en lo que hacemos. Si estás dispuesto, alineamos incentivos al crecimiento real.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20">
      
      {/* SECCIÓN 1: EL MANIFIESTO */}
      <div className="container mx-auto px-4 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            No somos un proveedor. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Somos un socio.
            </span>
          </h1>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <ul className="space-y-6">
            {[
              "Nos involucramos en tus procesos, sistemas y herramientas.",
              "Trabajamos con Marketing, Ventas, IT y CX alineados.",
              "Priorizamos por impacto económico, no por intuición.",
              "Ejecutamos y acompañamos en la implementación.",
              "Podemos ir a variable porque confiamos en el modelo."
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 text-gray-300 text-lg md:text-xl"
              >
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECCIÓN 2: DIFERENCIALES */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Nuestros Diferenciales</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1e293b]/50 border border-white/5 p-8 rounded-2xl hover:bg-[#1e293b] hover:border-blue-500/30 transition-all group"
            >
              <div className="bg-blue-500/10 w-fit p-3 rounded-xl mb-6 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}