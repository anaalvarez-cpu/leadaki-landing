import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, AlertTriangle, Blocks, Network, Search, 
  Settings, Target, GitMerge, TrendingUp, CheckCircle2,
  Database, ShoppingCart, Users, Briefcase
} from 'lucide-react';

export function WhyGrowth() {
  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER / TITULO Y BAJADA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            Por Qué Growth
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            El growth no es un hack. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">
              Es un sistema.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            El verdadero crecimiento ocurre cuando adquisición, experiencia, datos y ventas <span className="text-white font-semibold">trabajan de forma integrada</span>.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">El problema con el growth que se popularizó</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                En muchos contextos, el término growth se asoció a:
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { text: "Experimentos rápidos", icon: Zap },
                  { text: "Hacks de adquisición", icon: Target },
                  { text: "Tácticas aisladas", icon: Blocks }
                ].map((badge, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                    <badge.icon size={14} className="text-emerald-400" />
                    {badge.text}
                  </span>
                ))}
              </div>
              
              <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                <p className="text-xl text-white font-medium">
                  Eso puede funcionar para startups digitales.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none"></div>
              
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Network className="text-blue-400" size={24} />
                Pero las empresas reales tienen sistemas mucho más complejos:
              </h3>
              
              <ul className="space-y-6">
                {[
                  { text: "Procesos comerciales", icon: Briefcase },
                  { text: "CRM", icon: Database },
                  { text: "Estructuras organizacionales", icon: Users },
                  { text: "Múltiples canales de adquisición", icon: GitMerge },
                  { text: "Operaciones de eCommerce o ventas consultivas", icon: ShoppingCart }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="bg-blue-500/10 p-2 rounded-xl border border-blue-500/20">
                      <item.icon size={18} className="text-blue-400" />
                    </div>
                    <span className="text-lg leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-8 border-t border-white/10 text-center bg-white/5 rounded-2xl p-6">
                <p className="text-xl font-medium text-gray-300">
                  El crecimiento <span className="text-red-400 font-bold">no depende de un hack</span>.
                </p>
                <p className="text-2xl font-bold text-white mt-2">
                  Depende de optimizar <span className="text-blue-400">todo el sistema.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* COMO ENTENDEMOS EL GROWTH */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-blue-900/40 border border-emerald-500/20 rounded-3xl p-8 md:p-14 mb-32 relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.1)]"
        >
          {/* subtle pattern bg */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-500/20 p-3 rounded-2xl border border-emerald-500/30">
                  <TrendingUp size={28} className="text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Cómo entendemos el growth en Leadaki</h2>
              </div>
              <p className="text-2xl text-gray-200 leading-relaxed mb-10">
                Para nosotros, growth significa: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 font-bold">gestionar el sistema completo de revenue.</span>
              </p>
              
              <p className="text-lg text-emerald-200 mb-6 font-semibold uppercase tracking-wider text-sm">Eso implica trabajar sobre:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Inversión en medios",
                  "Propuesta de valor y mensajes",
                  "Experiencia digital",
                  "Calidad de datos",
                  "Procesos comerciales",
                  "Medición de revenue"
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-3 text-gray-200 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                    <span className="text-md font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl h-full flex flex-col justify-center">
                <div className="mb-0">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-8"></div>
                  
                  <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 p-8 rounded-2xl mb-10">
                    <p className="text-2xl text-white font-medium leading-relaxed italic">
                      "Cuando estos componentes se conectan, el crecimiento se vuelve <span className="text-emerald-400 font-bold not-italic">predecible y escalable</span>."
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6">Nuestro enfoque</h3>
                  <p className="text-lg text-gray-300 mb-6">En Leadaki aplicamos un enfoque de growth que combina:</p>
                  
                  <ul className="space-y-4">
                    {[
                      { text: "Consultoría estratégica", icon: Target },
                      { text: "Auditoría de funnel", icon: Search },
                      { text: "Ejecución integrada", icon: Settings },
                      { text: "Optimización basada en datos", icon: Database }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-300">
                        <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20">
                          <item.icon size={16} className="text-emerald-400" />
                        </div>
                        <span className="text-md">{item.text}</span>
                      </li>
                    ))}
                  </ul>
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 blur-3xl opacity-20 rounded-full"></div>
          <div className="bg-[#1e293b]/80 border border-white/10 rounded-3xl p-12 backdrop-blur-xl relative z-10 overflow-hidden shadow-2xl">
            {/* Decals */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500"></div>
            
            <Target size={56} className="text-emerald-400 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 leading-relaxed mb-6">
              No optimizamos métricas aisladas.
            </h2>
            <div className="inline-block bg-white/10 px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-md">
              <p className="text-2xl md:text-3xl text-emerald-300 font-bold">
                Optimizamos resultados de negocio.
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
