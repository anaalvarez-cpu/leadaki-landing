import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react'; // Cambié iconos a flechas simples
import { AnimatedSection } from '../ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    text: "Gracias a Leadaki hemos realizado con éxito una fuerte migración hacia lo digital, profesionalizando nuestra estrategia y escalando nuestros resultados.",
    author: "Micaela Narducci",
    role: "Gerente de Marketing Brandlive",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" 
  },
  {
    id: 2,
    text: "La implementación del Chatbot con IA transformó nuestra atención al cliente. Pasamos de perder leads por demora a responder en segundos 24/7.",
    author: "Sebastián Gomez",
    role: "CEO de Eyelit",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop" 
  },
  {
    id: 3,
    text: "Un partner estratégico real. No solo gestionan campañas, entienden el negocio y proponen soluciones que impactan directamente en la facturación.",
    author: "Carolina Herrera",
    role: "Directora Comercial Cooperación Seguros",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play pausado si el usuario interactúa (opcional, aquí lo dejamos simple)
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* === COLUMNA IZQUIERDA: Solo Texto === */}
          <div className="lg:col-span-5">
            <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
                  ¿Qué dicen <br/>
                  <span className="text-[#8b5cf6]">de nosotros?</span>
                </h2>
                
                <div className="w-24 h-2 bg-[#a78bfa] rounded-full mb-8"></div>

                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  La confianza de nuestros clientes es nuestro activo más valioso. Descubre por qué las empresas líderes eligen escalar con Leadaki.
                </p>
                
                {/* (Hemos quitado los botones de aquí) */}
            </AnimatedSection>
          </div>

          {/* === COLUMNA DERECHA: Tarjeta con Controles === */}
          <div className="lg:col-span-7 relative h-[450px] flex items-center">
             
             {/* Fondo decorativo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-50 to-pink-50 rounded-full blur-3xl -z-10 opacity-60" />

             <AnimatePresence mode='wait'>
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full"
                >
                   {/* LA TARJETA */}
                   <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative flex flex-col justify-between min-h-[300px]">
                      
                      {/* 1. Comillas y Texto */}
                      <div>
                        <Quote className="w-10 h-10 text-[#ddd6fe] mb-6 transform -scale-x-100" />
                        <p className="text-xl md:text-2xl font-medium text-gray-700 italic leading-relaxed mb-8">
                            "{testimonials[currentIndex].text}"
                        </p>
                      </div>

                      {/* 2. Footer de la tarjeta: Autor + Botones */}
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                         
                         {/* Info Autor */}
                         <div className="flex items-center gap-4">
                             <img 
                               src={testimonials[currentIndex].image} 
                               alt={testimonials[currentIndex].author}
                               className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                             />
                             <div>
                                <h4 className="font-bold text-[#0f172a] text-lg leading-tight">
                                    {testimonials[currentIndex].author}
                                </h4>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">
                                    {testimonials[currentIndex].role}
                                </p>
                             </div>
                         </div>

                         {/* LOS BOTONES (Ahora dentro de la tarjeta) */}
                         <div className="flex gap-2">
                           <button 
                             onClick={prevTestimonial}
                             className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#8b5cf6] hover:text-white hover:border-[#8b5cf6] transition-all duration-300"
                           >
                             <ArrowLeft className="w-4 h-4" />
                           </button>
                           <button 
                             onClick={nextTestimonial}
                             className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#8b5cf6] hover:text-white hover:border-[#8b5cf6] transition-all duration-300"
                           >
                             <ArrowRight className="w-4 h-4" />
                           </button>
                         </div>

                      </div>

                   </div>
                </motion.div>
             </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}