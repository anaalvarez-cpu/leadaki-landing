import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Layout, MousePointerClick, Database, Briefcase, 
  Search, Map, ListChecks, TrendingUp, AlertCircle
} from 'lucide-react';

export function DiagnosticoDigital() {
  const analizados = [
    {
      icon: Target,
      color: "blue",
      title: "Estrategia de medios",
      items: ["Estructura de campañas", "Distribución de inversión", "Eficiencia del CPA", "Escalabilidad"]
    },
    {
      icon: Layout,
      color: "purple",
      title: "Creatividad y mensajes",
      items: ["Claridad de la propuesta de valor", "Alineación entre anuncio y landing", "Testing creativo"]
    },
    {
      icon: MousePointerClick,
      color: "pink",
      title: "Experiencia digital",
      items: ["Fricciones en el journey", "Performance de landings", "Usabilidad"]
    },
    {
      icon: Database,
      color: "green",
      title: "Data & medición",
      items: ["Tracking", "Calidad de eventos", "Atribución", "Conexión con CRM"]
    },
    {
      icon: Briefcase,
      color: "orange",
      title: "Procesos comerciales",
      items: ["Gestión de leads", "Tiempos de respuesta", "Conversión a ventas"]
    }
  ];

  const entregables = [
    { icon: Map, text: "Mapa de fugas del funnel" },
    { icon: AlertCircle, text: "Oportunidades priorizadas" },
    { icon: ListChecks, text: "Roadmap de implementación" },
    { icon: TrendingUp, text: "Estimación de impacto en revenue" }
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
            Diagnóstico de Salud Digital
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Antes de invertir más, hay que entender <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              qué está frenando el crecimiento.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Nuestro diagnóstico digital analiza el <span className="text-white font-semibold">sistema completo de adquisición y ventas</span> para detectar oportunidades reales de mejora.
          </p>
        </motion.div>

        {/* COPY PRINCIPAL - QUÉ ANALIZAMOS */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Qué analizamos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestro diagnóstico revisa los factores que más impactan en la conversión:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analizados.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1e293b]/60 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl flex flex-col group hover:bg-[#1e293b]/80 transition-all h-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  item.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400' :
                  item.color === 'purple' ? 'bg-purple-500/20 border border-purple-500/30 text-purple-400' :
                  item.color === 'pink' ? 'bg-pink-500/20 border border-pink-500/30 text-pink-400' :
                  item.color === 'green' ? 'bg-green-500/20 border border-green-500/30 text-green-400' :
                  'bg-orange-500/20 border border-orange-500/30 text-orange-400'
                }`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className={`mr-3 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        item.color === 'blue' ? 'bg-blue-400' :
                        item.color === 'purple' ? 'bg-purple-400' :
                        item.color === 'pink' ? 'bg-pink-400' :
                        item.color === 'green' ? 'bg-green-400' :
                        'bg-orange-400'
                      }`}></span>
                      <span className="leading-relaxed">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COPY SECUNDARIO - QUÉ ENTREGAMOS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl rounded-full"></div>
          <div className="bg-[#1e293b]/80 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-xl relative z-10 shadow-2xl">
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Search size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Qué entregamos</h2>
                <p className="text-xl text-blue-200 mb-8 max-w-lg">
                  El diagnóstico incluye accionables concretos para tu equipo:
                </p>
              </div>

              <div className="flex-1 w-full bg-[#0f172a]/50 p-6 md:p-8 rounded-2xl border border-white/5">
                <div className="space-y-6">
                  {entregables.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                        <item.icon size={20} className="text-cyan-400" />
                      </div>
                      <span className="text-lg text-white font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* CIERRE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block w-20 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-8"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            El objetivo no es <span className="text-gray-500 line-through decoration-red-500 decoration-4">analizar por analizar.</span>
          </h2>
          <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 font-bold">
            Es identificar exactamente qué cambiar para vender más.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
}
