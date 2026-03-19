import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, CheckCircle2, Target, MousePointerClick, 
  Users, LayoutDashboard, Activity, Zap, Coins, Search,
  ArrowRight
} from 'lucide-react';

export function DataAnalytics() {
  const hacemos = [
    { name: "Implementación de tracking", icon: Target },
    { name: "Definición de eventos clave", icon: MousePointerClick },
    { name: "Integración con CRM", icon: Users },
    { name: "Dashboards de negocio", icon: LayoutDashboard },
    { name: "Análisis de performance", icon: Activity }
  ];

  const buscamos = [
    { text: "Qué canales generan clientes rentables", icon: Coins },
    { text: "Dónde se pierden oportunidades", icon: Search },
    { text: "Cómo mejorar la eficiencia de inversión", icon: Zap }
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER / TITULO Y BAJADA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-semibold mb-6 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            Data Analytics
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Los datos no sirven si no ayudan a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              tomar mejores decisiones.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Diseñamos sistemas de medición que conectan <span className="text-white font-semibold">marketing con resultados de negocio.</span>
          </p>
        </motion.div>

        {/* COPY PRINCIPAL - QUÉ HACEMOS */}
        <div className="max-w-6xl mx-auto mb-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Qué hacemos</h2>
              
              <div className="space-y-4">
                {hacemos.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#1e293b]/50 border border-white/5 hover:border-pink-500/30 hover:bg-[#1e293b]/80 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:scale-110 transition-transform">
                      <item.icon size={24} className="text-pink-400" />
                    </div>
                    <span className="text-xl text-gray-200 font-medium group-hover:text-white">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-purple-600/30 blur-3xl -z-10 rounded-full"></div>
              
              <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-10 h-full flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
                 {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                <LineChart size={120} className="text-pink-400 mb-8 relative z-10 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]" />
                <h3 className="text-2xl font-bold text-white relative z-10">Métricas accionables</h3>
                <p className="text-gray-400 mt-4 relative z-10 text-lg">De la recolección a la interpretación</p>
              </div>
            </motion.div>
            
          </div>

        </div>

        {/* COPY SECUNDARIO - QUÉ BUSCAMOS */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-32"
        >
          <div className="relative p-[1px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-50"></div>
            
            <div className="bg-[#1e293b]/95 rounded-3xl p-10 md:p-14 relative z-10 backdrop-blur-xl flex flex-col items-center text-center">
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold mb-8">
                No buscamos acumular más datos.
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Sino entender:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {buscamos.map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-6 hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <item.icon size={32} className="text-white" />
                    </div>
                    <p className="text-xl text-gray-200 font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Transformaremos los datos en <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              decisiones de crecimiento.
            </span>
          </h2>
          <button 
            onClick={() => {
              const bookingSection = document.getElementById('booking');
              if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3 mx-auto"
          >
            Hablemos con datos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
      </div>
    </div>
  );
}
