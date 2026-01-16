import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, Tag, MonitorPlay, Layers, PieChart, Circle } from 'lucide-react';

export function GooglePartner() {
  const containerRef = useRef(null);
  
  // Detectamos el scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // --- CONFIGURACIÓN DE MOVIMIENTO (MÁS ESPACIO) ---
  // Hemos aumentado drásticamente los valores (de 180 a 280 y de 90 a 140).
  // Esto asegura que las tarjetas se separen completamente y no se toquen.
  
  // Tarjetas Exteriores (Van muy lejos)
  const xLeftOuter = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const xRightOuter = useTransform(scrollYProgress, [0, 1], [0, 280]);
  
  // Tarjetas Interiores (Van lejos)
  const xLeftInner = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const xRightInner = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* === COLUMNA IZQUIERDA (Texto) === */}
          <div className="lg:col-span-5 z-20 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <Circle className="w-3 h-3 text-[#ea4335] fill-current" />
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                Google Marketing Platform
              </h3>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Datos que impulsan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                resultados reales
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Conectamos todo tu ecosistema digital. Como partners certificados, integramos la suite completa para que tengas una visión unificada.
            </p>

            <div className="flex gap-3">
                <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-[3px] border-blue-500 border-t-red-500 border-r-yellow-500 border-l-green-500"></div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 block leading-none mb-0.5">GOOGLE PARTNER</span>
                      <span className="text-xs font-bold text-blue-600 leading-none">PREMIER 2024</span>
                    </div>
                </div>
            </div>
          </div>

          {/* === COLUMNA DERECHA (Cartas con Espacio) === */}
          {/* h-[320px] es suficiente para contenerlas */}
          <div className="lg:col-span-7 h-[320px] flex items-center justify-center relative perspective-1000">
             
             {/* 1. IZQUIERDA EXTERIOR */}
             <motion.div style={{ x: xLeftOuter, zIndex: 10 }} className="absolute">
                <Card 
                  icon={<Layers className="w-5 h-5 text-green-600" />} 
                  name="Campaign Manager" 
                  color="bg-green-50"
                />
             </motion.div>

             {/* 2. IZQUIERDA INTERIOR */}
             <motion.div style={{ x: xLeftInner, zIndex: 20 }} className="absolute">
                <Card 
                  icon={<Tag className="w-5 h-5 text-blue-500" />} 
                  name="Tag Manager" 
                  color="bg-blue-50"
                />
             </motion.div>

             {/* 3. DERECHA INTERIOR */}
             <motion.div style={{ x: xRightInner, zIndex: 20 }} className="absolute">
                <Card 
                  icon={<MonitorPlay className="w-5 h-5 text-green-500" />} 
                  name="Display & Video 360" 
                  color="bg-green-50"
                />
             </motion.div>

             {/* 4. DERECHA EXTERIOR */}
             <motion.div style={{ x: xRightOuter, zIndex: 10 }} className="absolute">
                <Card 
                  icon={<PieChart className="w-5 h-5 text-blue-600" />} 
                  name="Looker Studio" 
                  color="bg-blue-50"
                />
             </motion.div>

             {/* 5. CENTRAL (Analytics) */}
             <motion.div className="relative z-30 shadow-2xl rounded-2xl">
                <div className="w-32 h-32 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col items-center justify-center gap-2">
                   <div className="w-10 h-10 rounded-xl bg-[#fef7e0] flex items-center justify-center scale-105">
                     <BarChart3 className="w-6 h-6 text-[#fbbc05]" />
                   </div>
                   <span className="text-xs font-bold text-gray-800">Analytics 4</span>
                   <div className="px-2 py-0.5 bg-yellow-100 text-[8px] font-bold text-yellow-700 rounded-full uppercase tracking-wider">
                     Hub Central
                   </div>
                </div>
             </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-componente (Igual que antes, tamaño mini)
function Card({ icon, name, color }) {
  return (
    <div className="w-28 h-28 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-2 transition-colors hover:bg-white">
       <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center`}>
         {icon}
       </div>
       <span className="text-[10px] font-bold text-gray-500 text-center px-1 leading-tight max-w-[95%]">
         {name}
       </span>
    </div>
  );
}