import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Compass, MessageSquare, AlertTriangle, Smartphone,
  Palette, TrendingUp, SplitSquareHorizontal, MonitorUp, Route,
  ArrowRight, Globe
} from 'lucide-react';

export function UxUi() {
  const analizamos = [
    { name: "Performance de landings", icon: Zap },
    { name: "Navegación", icon: Compass },
    { name: "Claridad del mensaje", icon: MessageSquare },
    { name: "Fricciones en conversión", icon: AlertTriangle },
    { name: "Experiencia mobile", icon: Smartphone }
  ];

  const hacemos = [
    { title: "Diseño UX/UI", icon: Palette },
    { title: "Optimización de conversiones", icon: TrendingUp },
    { title: "Testing A/B", icon: SplitSquareHorizontal },
    { title: "Rediseño de landings", icon: MonitorUp },
    { title: "Mejora de journeys digitales", icon: Route }
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER / TITULO Y BAJADA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            UX/UI & CRO
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Cada fricción en la experiencia <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
              es una venta perdida.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Diseñamos experiencias digitales que <span className="text-white font-semibold">facilitan la decisión y aumentan la conversión.</span>
          </p>
        </motion.div>

        {/* COPY PRINCIPAL - QUÉ ANALIZAMOS */}
        <div className="max-w-6xl mx-auto mb-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-yellow-600/30 blur-3xl -z-10 rounded-full"></div>
              
              <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-10 h-full flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
                 {/* Decorative background circles */}
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] border-[2px] border-orange-500/10 rounded-full"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] border-[2px] border-yellow-500/10 rounded-full"></div>
                
                <Globe size={120} className="text-orange-400 mb-8 relative z-10 drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]" />
                <h3 className="text-2xl font-bold text-white relative z-10 mb-4">El ecosistema del usuario</h3>
                <p className="text-gray-400 relative z-10 text-lg">Mapeamos cada paso hacia la conversión</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Qué analizamos</h2>
              
              <div className="flex flex-col gap-4">
                {analizamos.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-[#1e293b]/50 to-transparent border-l-4 border-orange-500/50 hover:border-orange-400 hover:from-[#1e293b]/80 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform shrink-0">
                      <item.icon size={22} className="text-orange-400" />
                    </div>
                    <span className="text-xl text-gray-200 font-medium group-hover:text-white transition-colors">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
          </div>

        </div>

        {/* COPY SECUNDARIO - QUÉ HACEMOS */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Qué hacemos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {hacemos.map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-[#1e293b]/60 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#1e293b]/80 hover:border-orange-500/30 transition-all group shadow-lg ${
                  idx === 3 ? "lg:col-start-2 lg:-ml-[50%] lg:mr-[50%]" : "" 
                } ${
                  idx === 4 ? "lg:col-start-3 lg:-ml-[100%] lg:mr-[100%]" : ""
                } ${
                  /* Small hack to center the last 2 items if needed, mostly flex or grid is better */ ""
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-orange-500/30">
                  <item.icon size={32} className="text-orange-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-200 transition-colors">{item.title}</h3>
              </div>
            ))}
          </div>
          
          {/* Fallback for the grid layout hack above, replacing with a cleaner flex layout for the last items if necessary, but above works nicely sometimes. 
              Let's use a cleaner approach: a flex wrap container. */}
        </motion.div>

        {/* CIERRE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 mb-8 opacity-50">
             <div className="w-24 h-1 rounded-full bg-[#0f172a]"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Experiencias que se disfrutan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
              y que convierten.
            </span>
          </h2>
          <button 
            onClick={() => {
              const bookingSection = document.getElementById('booking');
              if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3 mx-auto"
          >
            Mejorar mi UX <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
      </div>
    </div>
  );
}
