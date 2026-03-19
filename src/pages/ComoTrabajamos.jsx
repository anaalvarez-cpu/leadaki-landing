import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, BarChart3, Users, Network, TrendingUp, Target } from 'lucide-react';

export function ComoTrabajamos() {
  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER / TITULO Y BAJADA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-semibold mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            Cómo Trabajamos
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Un sistema de trabajo pensado para <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              mejorar resultados de negocio.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            En Leadaki combinamos <span className="text-white font-semibold">consultoría estratégica</span> y <span className="text-white font-semibold">ejecución operativa</span> para optimizar el sistema completo de crecimiento digital.
          </p>
        </motion.div>

        {/* COPY PRINCIPAL */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                El crecimiento sostenible no ocurre por acciones aisladas.
              </h2>
              
              <div className="bg-purple-900/40 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
                <p className="text-xl text-purple-200">
                  Se construye a partir de entender el negocio, identificar oportunidades reales de mejora e implementar cambios de forma coordinada.
                </p>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Por eso desarrollamos un sistema de trabajo que nos permite analizar, priorizar y optimizar todos los factores que impactan en las ventas digitales.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-full backdrop-blur-xl relative z-10 shadow-2xl">
                <Network size={120} className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* COPY SECUNDARIO (3 CARDS) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Te invitamos a conocer nuestro:</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tarjeta 1 */}
            <Link to="/revenue-growth-system">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#1e293b]/60 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl flex flex-col items-center text-center group hover:bg-[#1e293b]/80 transition-all h-full"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  <Settings size={32} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Método</h3>
                <p className="text-gray-400 leading-relaxed">
                  El sistema que utilizamos para auditar, diagnosticar, implementar y optimizar continuamente el crecimiento digital.
                </p>
              </motion.div>
            </Link>

            {/* Tarjeta 2 */}
            <Link to="/diagnostico-digital">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#1e293b]/60 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl flex flex-col items-center text-center group hover:bg-[#1e293b]/80 transition-all h-full"
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/30 group-hover:scale-110 transition-transform">
                  <BarChart3 size={32} className="text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Diagnóstico digital</h3>
                <p className="text-gray-400 leading-relaxed">
                  Un análisis profundo del funnel de adquisición y ventas para detectar los principales puntos de fuga y oportunidades de mejora.
                </p>
              </motion.div>
            </Link>

            {/* Tarjeta 3 */}
            <Link to="/modelo-partnership">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#1e293b]/60 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl flex flex-col items-center text-center group hover:bg-[#1e293b]/80 transition-all h-full"
              >
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-500/30 group-hover:scale-110 transition-transform">
                  <Users size={32} className="text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Modelo de partnership</h3>
                <p className="text-gray-400 leading-relaxed">
                  Nuestra forma de trabajar con los clientes como socios estratégicos, comprometidos con el impacto real en el negocio.
                </p>
              </motion.div>
            </Link>

          </div>
        </motion.div>

        {/* CIERRE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-20 rounded-full"></div>
          <div className="bg-[#1e293b]/80 border border-white/10 rounded-3xl p-12 md:p-16 backdrop-blur-xl relative z-10 overflow-hidden shadow-2xl">
            {/* Decals */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
            
            <Target size={64} className="text-purple-400 mx-auto mb-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-6">
              Nuestro trabajo no consiste solo en ejecutar marketing.
            </h2>
            <p className="text-2xl md:text-3xl text-purple-300 font-bold">
              Consiste en entender el sistema de crecimiento del cliente y ayudarlo a mejorar de forma constante.
            </p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
