import React from 'react';
import { motion } from 'framer-motion';
import { Target, AlertTriangle, XCircle, TrendingDown, ArrowRight, Zap, Database, MousePointerClick, TrendingUp, CheckCircle2, Layout, Users } from 'lucide-react';

export function WhyLeadaki() {
  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER / TITULO Y BAJADA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            Propósito y Visión
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            El marketing no existe para generar tráfico. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Existe para generar negocio.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            En Leadaki creemos que el verdadero crecimiento ocurre cuando marketing, experiencia, datos y ventas funcionan como un <span className="text-white font-semibold">sistema integrado</span>.
          </p>
        </motion.div>

        {/* EL PROBLEMA */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">El problema del marketing moderno</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Durante años, el marketing digital se organizó en disciplinas separadas:
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { text: "Agencias de medios", icon: Zap },
                  { text: "Agencias creativas", icon: Layout },
                  { text: "Consultores de datos", icon: Database },
                  { text: "Equipos de UX", icon: MousePointerClick },
                  { text: "Equipos comerciales", icon: Users }
                ].map((badge, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                    <badge.icon size={14} className="text-blue-400" />
                    {badge.text}
                  </span>
                ))}
              </div>
              
              <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl">
                <p className="text-xl text-white font-medium">
                  Cada uno optimiza su parte del proceso, pero nadie gobierna el sistema completo.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full pointer-events-none"></div>
              
              <h3 className="text-xl font-bold text-red-400 mb-8 flex items-center gap-3">
                <AlertTriangle size={24} />
                El resultado es conocido:
              </h3>
              
              <ul className="space-y-6">
                {[
                  { text: "Inversión en medios que no se convierte en ventas", icon: TrendingDown },
                  { text: "Leads que no avanzan en el funnel", icon: XCircle },
                  { text: "Experiencias digitales que frenan decisiones", icon: MousePointerClick },
                  { text: "Datos que existen pero no se utilizan para mejorar el negocio", icon: Database }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <div className="mt-1 bg-red-500/10 p-2 rounded-xl border border-red-500/20">
                      <item.icon size={18} className="text-red-400" />
                    </div>
                    <span className="text-lg leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-2xl font-bold text-white">
                  El crecimiento se vuelve <span className="text-red-400 relative inline-block">ineficiente.<span className="absolute bottom-1 left-0 w-full h-2 bg-red-500/30 -z-10 transform -rotate-2"></span></span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* LA VISION */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-blue-500/20 rounded-3xl p-8 md:p-14 mb-32 relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.1)]"
        >
          {/* subtle pattern bg */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-500/20 p-3 rounded-2xl border border-blue-500/30">
                  <Target size={28} className="text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Nuestra visión</h2>
              </div>
              <p className="text-2xl text-gray-200 leading-relaxed mb-10">
                Creemos en un modelo diferente: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 font-bold">el marketing como sistema de revenue.</span>
              </p>
              
              <p className="text-lg text-blue-200 mb-6 font-semibold uppercase tracking-wider text-sm">Un sistema donde:</p>
              <ul className="space-y-5">
                {[
                  "La inversión en medios se decide en función del revenue.",
                  "La creatividad se diseña para generar intención real.",
                  "Los datos conectan marketing con ventas.",
                  "La experiencia digital facilita la decisión."
                ].map((item, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-start gap-4 text-gray-200 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 size={24} className="text-blue-400 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 relative">
                <div className="absolute -left-3 -top-3 text-4xl text-blue-500/40">"</div>
                <p className="text-lg text-white leading-relaxed italic relative z-10 px-4">
                  Cuando estos elementos funcionan de forma sincronizada, el crecimiento deja de ser una promesa y se convierte en un <span className="text-blue-400 font-bold not-italic">proceso gestionable</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
                <div className="mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
                  <h3 className="text-3xl font-bold text-white mb-6">Nuestro propósito</h3>
                  
                  <p className="text-xl text-gray-200 leading-relaxed mb-6">
                    Ayudar a las empresas a <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">vender mejor en el entorno digital.</span>
                  </p>
                  
                  <p className="text-lg text-gray-400 leading-relaxed mb-8 border-l-2 border-gray-600 pl-4">
                    No solo generando más tráfico o más leads.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-6 rounded-2xl">
                    <p className="text-xl text-white font-medium leading-relaxed">
                      Sino ordenando el sistema completo de crecimiento para que cada esfuerzo de marketing impacte directamente en el negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CIERRE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 rounded-full"></div>
          <div className="bg-[#1e293b]/80 border border-white/10 rounded-3xl p-12 backdrop-blur-xl relative z-10 overflow-hidden shadow-2xl">
            {/* Decals */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
            
            <TrendingUp size={56} className="text-blue-400 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
              En Leadaki trabajamos con empresas que entienden que el crecimiento sostenible <span className="text-gray-400">no depende solo de invertir más.</span>
            </h2>
            <div className="inline-block bg-white/10 px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-md">
              <p className="text-2xl text-blue-300 font-bold">
                Depende de hacer que todo el sistema funcione mejor.
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}