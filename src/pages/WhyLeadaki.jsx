import React from 'react';
import { motion } from 'framer-motion';
import { Network, Target, Activity, Shield, Layers } from 'lucide-react';

export function WhyLeadaki() {
  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER / TITULO Y BAJADA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            Por Qué Leadaki
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            El marketing funciona mejor cuando se entiende como un <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              sistema.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            En Leadaki ayudamos a las empresas a ordenar su crecimiento digital conectando adquisición, datos, experiencia y ventas para generar <span className="text-white font-semibold flex-inline bg-blue-500/20 px-2 py-1 rounded ml-1">impacto real en revenue.</span>
          </p>
        </motion.div>

        {/* COPY PRINCIPAL */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-snug">
                Muchas empresas invierten cada vez más en marketing digital, pero los resultados no siempre crecen al mismo ritmo.
              </h2>
              
              <div className="bg-blue-900/40 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <p className="text-xl text-blue-200">
                  <span className="font-bold text-white">No porque falte inversión.</span> <br/>
                  Sino porque el crecimiento depende de muchos factores que no siempre están conectados.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1e293b]/60 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl relative"
            >
              {/* decor elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none"></div>

              <ul className="space-y-6">
                {[
                  { text: "Campañas que generan tráfico pero no ventas.", icon: Target },
                  { text: "Datos que existen pero no se utilizan para decidir.", icon: Activity },
                  { text: "Experiencias digitales que frenan la conversión.", icon: Shield },
                  { text: "Procesos comerciales que no aprovechan las oportunidades.", icon: Layers }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-white/5 p-2 rounded-xl border border-white/10 hover:bg-blue-500/20 transition-colors">
                      <item.icon size={20} className="text-blue-400" />
                    </div>
                    <span className="text-lg text-gray-300 leading-relaxed font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
              <p className="text-2xl text-white font-medium">
                Cuando cada equipo optimiza su parte pero nadie gobierna el sistema completo, 
                <span className="text-red-400 font-bold block mt-2">el crecimiento se vuelve ineficiente.</span>
              </p>
            </div>
            
            <p className="text-3xl font-bold text-white mt-12 bg-white/5 inline-block px-10 py-5 rounded-full border border-white/10">
              En Leadaki trabajamos para <span className="text-blue-400">ordenar ese sistema.</span>
            </p>
          </motion.div>
        </div>

        {/* CIERRE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 rounded-full"></div>
          <div className="bg-[#1e293b]/80 border border-white/10 rounded-3xl p-12 md:p-16 backdrop-blur-xl relative z-10 overflow-hidden shadow-2xl">
            {/* Decals */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
            
            <Network size={64} className="text-blue-400 mx-auto mb-10 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 leading-relaxed mb-6">
              El crecimiento digital no depende de intuiciones ni de esfuerzos aislados.
            </h2>
            <p className="text-2xl md:text-3xl text-blue-300 font-bold mb-10">
              Debería ser un sistema que se pueda entender, optimizar y escalar.
            </p>
            
            <div className="inline-block bg-blue-500/20 px-8 py-4 rounded-2xl border border-blue-500/30 backdrop-blur-md">
              <p className="text-xl text-white font-bold tracking-wide">
                Eso es lo que construimos junto a nuestros clientes.
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
