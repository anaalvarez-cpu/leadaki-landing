import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, CheckCircle2, Award, Zap,
  Target, TrendingUp, Search, MonitorPlay, Users, Coins
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function PaidMedia() {
  const plataformas = [
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "LinkedIn Ads",
    "YouTube"
  ];

  const metricasMarketing = [
    "CTR",
    "CPC",
    "Volumen de leads"
  ];

  const metricasFoco = [
    { name: "Costo por venta", icon: Coins },
    { name: "Revenue generado", icon: TrendingUp },
    { name: "Rentabilidad de la inversión", icon: Target },
    { name: "Calidad de clientes", icon: Users }
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER / TITULO Y BAJADA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            Paid Media
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            No optimizamos campañas. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Optimizamos revenue.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Diseñamos estrategias de inversión que conectan <span className="text-white font-semibold">adquisición con resultados de negocio</span>.
          </p>
        </motion.div>

        {/* COPY PRINCIPAL - PLATAFORMAS & ECO SISTEMA */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Plataformas */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#1e293b]/60 border border-white/10 rounded-3xl p-10 backdrop-blur-md shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Plataformas</h2>
              <p className="text-lg text-gray-300 mb-8">
                Trabajamos con todo el ecosistema de medios digitales:
              </p>
              <div className="flex flex-wrap gap-4">
                {plataformas.map((plat, idx) => (
                  <div key={idx} className="bg-blue-900/40 border border-blue-500/30 px-5 py-2.5 rounded-full text-blue-200 font-medium flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-blue-400" />
                    {plat}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ecosistema Google avanzado */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-500/20 rounded-3xl p-10 backdrop-blur-md shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full"></div>
              
              <h2 className="text-3xl font-bold text-white mb-6">Ecosistema Google avanzado</h2>
              <p className="text-lg text-cyan-200 mb-8">
                Somos especialistas en el ecosistema avanzado de Google:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center shrink-0 border border-cyan-500/30">
                    <Search size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Search Ads 360</h4>
                    <p className="text-gray-400 mt-1">Gestión avanzada de campañas de búsqueda para grandes anunciantes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/30">
                    <MonitorPlay size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Display & Video 360</h4>
                    <p className="text-gray-400 mt-1">Compra programática con segmentación avanzada y control total de inventario.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0f172a]/50 p-4 rounded-xl border border-white/5">
                <p className="text-gray-300 italic">
                  "Esto nos permite diseñar estrategias de medios mucho más sofisticadas y eficientes."
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* COPY SECUNDARIO - QUÉ OPTIMIZAMOS REALMENTE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Qué optimizamos realmente</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-8 relative">
            
            {/* Métricas de marketing */}
            <div className="flex-1 bg-[#1e293b]/40 border border-white/5 rounded-3xl p-10 opacity-70">
              <p className="text-xl text-gray-400 mb-6 font-medium">
                No nos enfocamos solo en métricas de marketing como:
              </p>
              <ul className="space-y-4">
                {metricasMarketing.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-500 line-through decoration-red-500/50 decoration-2 text-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500/50 mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Foco Real */}
            <div className="flex-1 bg-gradient-to-br from-blue-900/60 to-slate-900/90 border border-blue-500/30 rounded-3xl p-10 transform md:-translate-y-4 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
              
              <p className="text-2xl text-blue-200 mb-8 font-bold relative z-10">
                Nuestro foco está en:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {metricasFoco.map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                    <item.icon size={28} className="text-cyan-400" />
                    <span className="text-white font-medium text-lg">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* CERTIFICACIONES */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-32 bg-[#1e293b]/60 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-md text-center"
        >
          <Award size={48} className="text-yellow-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          <h2 className="text-3xl font-bold text-white mb-8">Certificaciones</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            {[
              { name: "Google Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
              { name: "Google Marketing Platform", logo: "https://static.mparticle.com/providerimg/forwarderlogo_41_DoubleclickDFP.svg" },
              { name: "Meta Business Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white px-8 py-5 rounded-2xl flex items-center justify-center min-w-[240px] h-[90px] shadow-lg hover:scale-105 transition-transform border border-white/20">
                <img src={cert.logo} alt={cert.name} className="max-h-full max-w-[180px] object-contain" />
              </div>
            ))}
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto border-t border-white/10 pt-8">
            Somos <span className="text-white font-bold">Google Premier Partner</span> desde hace más de 12 años y una de las pocas agencias de LATAM <span className="text-white font-bold">GMP Sales Partner</span>.
          </p>
        </motion.div>

        {/* CIERRE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl opacity-50 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
              Generamos mucho más tráfico. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Te acercamos a tu próximo cliente.
              </span>
            </h2>
            <button 
              onClick={() => {
                const bookingSection = document.getElementById('booking');
                if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center gap-3 mx-auto"
            >
              Contactar a un especialista <Zap size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
