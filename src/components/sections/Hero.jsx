import React from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

// --- IMÁGENES ---
const col1Images = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop"
];

const col2Images = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
];

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function Hero() {

  // 👇 FUNCIÓN PARA EL SCROLL SUAVE
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden pt-28 lg:pt-0">
        
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* === COLUMNA IZQUIERDA === */}
                <div className="order-2 lg:order-1">
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
                    >
                        Convertimos crecimiento <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                           en revenue.
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mb-10"
                    >
                        Somos una agencia consultora de Growth Marketing que ordena adquisición, datos, experiencia y ventas para eliminar fugas del funnel y generar impacto real.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        {/* 👇 BOTÓN CON LA ACCIÓN DE SCROLL AGREGADA */}
                        <button 
                            onClick={scrollToBooking}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105"
                        >
                            Agendar <ArrowRight size={20} />
                        </button>

                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-105">
                            <Play size={18} className="fill-current" /> Ver casos
                        </button>
                    </motion.div>
                </div>

                {/* === COLUMNA DERECHA: CARRETE VERTICAL === */}
                <div className="relative z-0 order-1 lg:order-2 h-[500px] lg:h-[700px] w-full overflow-hidden mask-gradient-vertical">
                    
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0F172A] to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F172A] to-transparent z-10 pointer-events-none" />

                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="h-full overflow-hidden relative">
                             <VerticalMarqueeKf images={col1Images} direction={-1} speed={1} />
                        </div>
                        <div className="h-full overflow-hidden relative">
                             <VerticalMarqueeKf images={col2Images} direction={1} speed={1} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}

// --- LÓGICA DEL CARRETE ---
function VerticalMarqueeKf({ images, direction = 1, speed = 10 }) {
    const baseY = useMotionValue(0);
    const y = useTransform(baseY, (v) => `${wrap(-50, 0, v)}%`);

    useAnimationFrame((t, delta) => {
        let moveBy = direction * speed * (delta / 1000);
        baseY.set(baseY.get() + moveBy);
    });

    return (
        <motion.div className="flex flex-col gap-4 w-full" style={{ y }}>
            {[...images, ...images, ...images, ...images].map((src, i) => (
                <div key={i} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-gray-900 border border-white/5">
                    <img src={src} alt="" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" />
                </div>
            ))}
        </motion.div>
    );
}