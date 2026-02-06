import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MessageSquare } from 'lucide-react';

export function GooglePartner() {
  return (
    // 👇 CAMBIO CLAVE: 'pt-8' (muy poquito espacio arriba) para pegarlo a los logos
    <section className="pt-8 pb-24 bg-white overflow-hidden relative">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* === COLUMNA IZQUIERDA === */}
          <div>
   
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Nuestros Partners
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-blue-500/30 pl-6">
              Los socios que potencian nuestra propuesta.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors mt-1">
                   <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-800 font-medium text-lg leading-snug">
                  GMP Sales Partner + 15 años Google Premier Partner
                </p>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors mt-1">
                   <ArrowRight className="w-5 h-5 text-[#7F44F8]" />
                </div>
                <p className="text-gray-800 font-medium text-lg leading-snug">
                  Creadores de Cliengo. CRM de WhatsApp con IA líder en LATAM.
                </p>
              </div>
            </div>
          </div>

          {/* === COLUMNA DERECHA (TARJETAS IGUALES) === */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end items-center">
            
            {/* 1. CARD GOOGLE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all w-full sm:w-64 h-80 flex flex-col"
            >
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-t-3xl"></div>
               
               <div className="mb-6 bg-white p-3 rounded-xl shadow-sm border border-gray-100 w-fit">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                   alt="Google" 
                   className="h-6 w-auto"
                 />
               </div>

               <h3 className="text-2xl font-bold text-gray-900 mb-1">Premier Partner</h3>
               <p className="text-xs text-gray-400 font-bold tracking-wider mb-4 uppercase">+15 AÑOS</p>
               
               <div className="flex items-center gap-1 text-yellow-400 mt-auto pt-4 border-t border-gray-50">
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
               </div>
            </motion.div>

            {/* 2. CARD CLIENGO */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all w-full sm:w-64 h-80 flex flex-col"
            >
               <div className="absolute top-0 left-0 w-full h-1.5 bg-[#7F44F8] rounded-t-3xl"></div>

               <div className="mb-6 bg-white p-3 rounded-xl shadow-sm border border-gray-100 w-fit">
                  <span className="font-bold text-xl tracking-tight text-[#7F44F8]">cliengo</span>
               </div>

               <h3 className="text-2xl font-bold text-gray-900 mb-1">CRM IA</h3>
               <p className="text-xs text-[#7F44F8] font-bold tracking-wider mb-4 uppercase">TECH PARTNER</p>
               
               <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto pt-4 border-t border-gray-50 font-medium">
                 <MessageSquare size={16} className="text-[#7F44F8]" />
                 WhatsApp Leader
               </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}