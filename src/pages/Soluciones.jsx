import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, Layout, LineChart, Globe, 
  ArrowRight, Workflow, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Soluciones() {
  const solucionesList = [
    {
      title: "Paid Media orientado a revenue",
      desc: "Estrategias de inversión en medios digitales diseñadas para generar clientes y ventas, no solo tráfico.",
      icon: Megaphone,
      color: "blue",
      href: "/paid-media"
    },
    {
      title: "Creatividad de alto impacto",
      desc: "Mensajes y piezas creativas pensadas para captar atención, generar intención y convertir.",
      icon: Layout,
      color: "purple"
    },
    {
      title: "Data Analytics y medición",
      desc: "Sistemas de datos que conectan marketing con resultados de negocio y permiten tomar mejores decisiones.",
      icon: LineChart,
      color: "pink",
      href: "/data-analytics"
    },
    {
      title: "UX/UI y CRO",
      desc: "Optimización de experiencias digitales para eliminar fricciones y aumentar la conversión.",
      icon: Globe,
      color: "orange",
      href: "/ux-ui"
    }
  ];

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
            Soluciones
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Servicios diseñados para <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              impactar en revenue.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Integramos medios, creatividad, experiencia y datos para <span className="text-white font-semibold">mejorar la conversión</span> en cada etapa del funnel.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                En Leadaki no trabajamos los servicios como disciplinas aisladas.
              </h2>
              
              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <p className="text-xl text-blue-200">
                  Los integramos dentro de un sistema de crecimiento donde cada componente cumple un rol para mejorar el rendimiento del negocio digital.
                </p>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Desde la adquisición de tráfico hasta la conversión final, buscamos optimizar cada punto de contacto con el usuario.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl p-1 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-2xl -z-10 rounded-full"></div>
              <div className="bg-[#0f172a] rounded-[22px] p-8 md:p-14 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                
                <Workflow size={100} className="text-purple-400 mb-8 relative z-10 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
                <h3 className="text-2xl font-bold text-white relative z-10">Un ecosistema conectado</h3>
              </div>
            </motion.div>
            
          </div>

        </div>

        {/* COPY SECUNDARIO - SOLUCIONES ENFOCADAS EN GENERAR REVENUE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Conocé nuestras soluciones enfocadas en generar revenue:</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solucionesList.map((sol, index) => {
              const CardContent = (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#1e293b]/60 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-xl flex flex-col group hover:bg-[#1e293b]/80 transition-all h-full"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                      sol.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400' :
                      sol.color === 'purple' ? 'bg-purple-500/20 border border-purple-500/30 text-purple-400' :
                      sol.color === 'pink' ? 'bg-pink-500/20 border border-pink-500/30 text-pink-400' :
                      'bg-orange-500/20 border border-orange-500/30 text-orange-400'
                    }`}>
                      <sol.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{sol.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {sol.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );

              return sol.href ? (
                <Link key={index} to={sol.href} className="block h-full">
                  {CardContent}
                </Link>
              ) : (
                <div key={index} className="block h-full">
                  {CardContent}
                </div>
              );
            })}
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-20 rounded-full"></div>
          <div className="bg-[#1e293b]/80 border border-white/10 rounded-3xl p-12 md:p-16 backdrop-blur-xl relative z-10 overflow-hidden shadow-2xl">
            {/* Decals */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
            
             <Zap size={64} className="text-purple-400 mx-auto mb-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-6">
              Cada uno de nuestros servicios está diseñado para mejorar una parte del sistema.
            </h2>
            <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold">
              Pero el verdadero impacto ocurre cuando todos trabajan juntos.
            </p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
