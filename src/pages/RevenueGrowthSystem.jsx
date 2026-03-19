import React from 'react';
import { motion } from 'framer-motion';
import { Search, Activity, Settings, RefreshCw, BarChart2, CheckCircle2 } from 'lucide-react';

export function RevenueGrowthSystem() {
  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
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
            Revenue Growth System
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Un sistema diseñado para generar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              revenue,
            </span><br className="hidden lg:block"/> no solo marketing.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Nuestro método conecta <span className="text-white font-semibold">auditoría, diagnóstico, ejecución</span> y <span className="text-white font-semibold">optimización continua</span> para mejorar el rendimiento del negocio digital.
          </p>
        </motion.div>

        {/* COPY PRINCIPAL */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-white mb-6">Cómo funciona</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              El crecimiento sostenible no ocurre por acciones aisladas. <br className="hidden sm:block"/>
              Se construye a partir de <strong className="text-blue-400">ciclos continuos de aprendizaje y optimización.</strong>
            </p>
            <div className="inline-block mt-4 bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20">
              <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm">Nuestro sistema se basa en 4 etapas</p>
            </div>
          </motion.div>
        </div>

        {/* 4 ETAPAS - TIMELINE VERTICAL */}
        <div className="max-w-5xl mx-auto mb-32 relative">
          
          {/* Línea conectora central (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500/20 via-indigo-500/20 to-purple-500/20 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-16 md:space-y-24">
            
            {/* ETAPA 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative"
            >
              {/* Number/Icon Desktop overlay */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#1e293b] border-4 border-[#0f172a] items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>

              {/* Contenido (izq) */}
              <div className="w-full md:w-1/2 md:text-right flex flex-col items-start md:items-end">
                <div className="bg-blue-500/10 p-4 rounded-2xl mb-6 md:hidden">
                  <span className="text-xl font-bold text-blue-400">Etapa 1</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center md:flex-row-reverse gap-3">
                  <Search className="text-blue-400" size={32} />
                  Auditoría
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Analizamos todos los componentes que impactan en tu sistema de ventas digital.
                </p>
                <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6 shadow-lg inline-block text-left w-full md:w-auto">
                  <ul className="space-y-3">
                    {["Estrategia de inversión en medios", "Propuesta de valor y mensajes", "Tracking y calidad de datos", "Experiencia de usuario", "Procesos comerciales y CRM"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                         <div className="mt-1 bg-blue-500/20 rounded-full p-1"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-blue-300 font-medium mt-6 italic bg-blue-500/10 px-4 py-2 rounded-xl">
                  Buscamos entender dónde se están perdiendo oportunidades de revenue.
                </p>
              </div>

              {/* Placeholder Derecho */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>

            {/* ETAPA 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 relative"
            >
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#1e293b] border-4 border-[#0f172a] items-center justify-center z-10 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <span className="text-2xl font-bold text-indigo-400">2</span>
              </div>

              {/* Contenido (der) */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="bg-indigo-500/10 p-4 rounded-2xl mb-6 md:hidden">
                  <span className="text-xl font-bold text-indigo-400">Etapa 2</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Activity className="text-indigo-400" size={32} />
                  Diagnóstico
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  A partir de la auditoría identificamos:
                </p>
                <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-2xl p-6 shadow-lg w-full">
                  <ul className="space-y-3">
                    {[
                      "Puntos de fuga del funnel", 
                      "Fricciones en la experiencia", 
                      "Ineficiencias en la inversión", 
                      "Problemas en la medición"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                         <div className="mt-1 bg-indigo-500/20 rounded-full p-1"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" /></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-indigo-300 font-medium mt-6 italic bg-indigo-500/10 px-4 py-2 rounded-xl">
                  Luego priorizamos las acciones según: impacto en revenue vs esfuerzo de implementación.
                </p>
              </div>

              {/* Placeholder Izquierdo */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>

            {/* ETAPA 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative"
            >
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#1e293b] border-4 border-[#0f172a] items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>

              {/* Contenido (izq) */}
              <div className="w-full md:w-1/2 md:text-right flex flex-col items-start md:items-end">
                <div className="bg-purple-500/10 p-4 rounded-2xl mb-6 md:hidden">
                  <span className="text-xl font-bold text-purple-400">Etapa 3</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center md:flex-row-reverse gap-3">
                  <Settings className="text-purple-400" size={32} />
                  Implementación
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Activamos las mejoras necesarias trabajando de forma integrada sobre:
                </p>
                <div className="grid grid-cols-2 gap-3 w-full md:w-auto text-left">
                    {["Paid media", "Creatividad", "UX/UI", "Data", "Procesos comerciales"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-purple-900/20 border border-purple-500/20 p-3 rounded-xl hover:bg-purple-500/20 transition-colors">
                        <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                </div>
                <p className="text-purple-300 font-medium mt-6 italic bg-purple-500/10 px-4 py-2 rounded-xl text-left md:text-right">
                  El objetivo es eliminar fricciones y mejorar la conversión en cada etapa del funnel.
                </p>
              </div>

              {/* Placeholder Derecho */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>

            {/* ETAPA 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 relative"
            >
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#1e293b] border-4 border-[#0f172a] items-center justify-center z-10 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                <span className="text-2xl font-bold text-pink-400">4</span>
              </div>

               {/* Contenido (der) */}
               <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="bg-pink-500/10 p-4 rounded-2xl mb-6 md:hidden">
                  <span className="text-xl font-bold text-pink-400">Etapa 4</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <RefreshCw className="text-pink-400" size={32} />
                  Optimización continua
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Medimos constantemente el impacto en:
                </p>
                <div className="bg-pink-900/20 border border-pink-500/20 rounded-2xl p-6 shadow-lg w-full flex flex-wrap gap-4">
                    {[
                      "Conversión", 
                      "Revenue", 
                      "Eficiencia de inversión", 
                      "Calidad de clientes"
                    ].map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-pink-500/10 text-pink-200 border border-pink-500/20 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                </div>
                <p className="text-pink-300 font-medium mt-6 italic bg-pink-500/10 px-4 py-2 rounded-xl">
                  Con esos aprendizajes volvemos a auditar los puntos clave y reiniciamos el ciclo de mejora.
                </p>
              </div>

              {/* Placeholder Izquierdo */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>

          </div>
        </div>

        {/* CIERRE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-3xl opacity-20 rounded-full"></div>
          <div className="bg-[#1e293b]/80 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-xl relative z-10 overflow-hidden shadow-2xl">
            {/* Decals */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
            
            <BarChart2 size={64} className="text-blue-400 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-4">
              El crecimiento deja de depender de intuiciones.
            </h2>
            <p className="text-2xl md:text-3xl text-blue-300 font-bold">
              Se convierte en un sistema de mejora continua.
            </p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
