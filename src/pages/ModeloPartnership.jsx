import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, TrendingUp, Handshake, Target, CheckCircle2, 
  BarChart3, Settings, ShieldCheck, ArrowRight
} from 'lucide-react';

export function ModeloPartnership() {
  const modeloTransaccional = [
    "Ejecutan campañas",
    "Entregan reportes",
    "Optimizan métricas de marketing"
  ];

  const instancias = [
    { name: "Estrategia de adquisición", icon: Target },
    { name: "Experiencia digital", icon: Settings },
    { name: "Estructura de medición", icon: BarChart3 },
    { name: "Integración con CRM", icon: ShieldCheck },
    { name: "Procesos comerciales", icon: Users }
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen pt-28 pb-20 overflow-hidden relative">
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER / TITULO Y BAJADA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            Modelo de Partnership
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            No somos un proveedor. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Somos parte del sistema de crecimiento.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Trabajamos con nuestros clientes como <span className="text-white font-semibold">socios estratégicos</span>, comprometidos con los resultados del negocio.
          </p>
        </motion.div>

        {/* COPY PRINCIPAL */}
        <div className="max-w-6xl mx-auto mb-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Cómo entendemos... */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Cómo entendemos la relación con nuestros clientes
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Muchas agencias operan bajo un modelo transaccional:
              </p>
              
              <ul className="space-y-4 mb-8">
                {modeloTransaccional.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-400 p-4 bg-[#1e293b]/50 rounded-xl border border-white/5 opacity-70">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-sm font-bold">{idx + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-xl text-red-200">
                  Pero el negocio del cliente ocurre mucho más allá de las campañas. En Leadaki trabajamos como <strong className="text-white">partners de crecimiento.</strong>
                </p>
              </div>
            </motion.div>

            {/* Illustración / Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl p-1 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-transparent shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-orange-600/30 blur-2xl -z-10 rounded-full"></div>
              <div className="bg-[#0f172a] rounded-[22px] p-8 md:p-12 h-full flex items-center justify-center text-center">
                 <Handshake size={120} className="text-red-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]" />
              </div>
            </motion.div>
          </div>

          {/* Qué significa esto en la práctica */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#1e293b]/60 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-md shadow-xl"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Qué significa esto en la práctica</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nos involucramos en <span className="text-white font-semibold">todas las instancias</span> que impactan en ventas:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {instancias.map((inst, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#0f172a]/80 px-6 py-4 rounded-full border border-white/5 hover:border-red-500/30 transition-colors group">
                  <inst.icon size={20} className="text-orange-400 group-hover:text-red-400 transition-colors" />
                  <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{inst.name}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
               <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 inline-flex items-center gap-3">
                 <TrendingUp size={28} className="text-red-400" />
                 Porque sabemos que las ventas dependen de todo el sistema.
               </p>
            </div>
          </motion.div>

        </div>

        {/* COPY SECUNDARIO - Compromiso con el resultado */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-32"
        >
          <div className="relative p-[1px] rounded-3xl overflow-hidden">
             {/* Gradient Border Animado (simulado) */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 opacity-50"></div>
            
            <div className="bg-[#1e293b]/95 rounded-3xl p-10 md:p-14 relative z-10 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                   <Target size={40} className="text-white" />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Compromiso con el resultado</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    Nuestro objetivo no es solo ejecutar marketing. Es ayudar a que el negocio del cliente <span className="text-white font-semibold">crezca de forma real y sostenible.</span>
                  </p>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    Por eso en algunos proyectos incluso evaluamos modelos de compensación vinculados a resultados.
                  </p>
                  <div className="inline-flex py-2 px-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-300 font-bold text-lg">
                    Cuando el sistema funciona, todos crecen.
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Si sentís que tu marketing puede rendir, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              probablemente podamos ayudarte.
            </span>
          </h2>
          <button 
            onClick={() => {
              const bookingSection = document.getElementById('booking');
              if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3 mx-auto"
          >
            Hablemos de tu crecimiento <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
      </div>
    </div>
  );
}
