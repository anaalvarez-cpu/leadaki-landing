import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useAnimationFrame, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
  return (
    <section className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden pt-20 lg:pt-0">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* === COLUMNA IZQUIERDA: TEXTO === */}
                <div className="relative z-10 order-2 lg:order-1">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="flex -space-x-2">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border border-black bg-gray-800 flex items-center justify-center overflow-hidden">
                                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            <span className="text-gray-400 text-xs font-medium tracking-wide">TRUSTED BY 500+ BRANDS</span>
                        </div>
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[0.95] mb-6"
                        >
                            Vender es <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                                dar ventaja.
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-400 max-w-lg leading-relaxed mb-10"
                    >
                        En el espacio entre la creatividad y el código, creamos experiencias digitales construidas para el futuro.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="px-8 py-5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 group">
                            Book a Call
                            <span className="group-hover:translate-x-1 transition-transform">↗</span>
                        </button>
                        <button className="px-8 py-5 bg-white hover:bg-gray-100 text-black font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3">
                            Explore Work
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                {/* === COLUMNA DERECHA: MARQUEE VERTICAL === */}
                <div className="relative z-0 order-1 lg:order-2 h-[500px] lg:h-[700px] w-full overflow-hidden mask-gradient-vertical">
                    
                    {/* Degradados arriba y abajo (Fade) */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10" />

                    <div className="grid grid-cols-2 gap-4 h-full">
                        
                        {/* COLUMNA 1 (IZQ): SUBE LENTAMENTE (direction = -1) */}
                        <div className="h-full overflow-hidden relative">
                             <VerticalMarquee images={col1Images} direction={-1} speed={0.5} />
                        </div>

                        {/* COLUMNA 2 (DER): BAJA LENTAMENTE (direction = 1) */}
                        <div className="h-full overflow-hidden relative">
                             <VerticalMarquee images={col2Images} direction={1} speed={0.5} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}

// --- COMPONENTE LÓGICO ---
function VerticalMarquee({ images, direction = 1, speed = 10 }) {
    const baseY = useMotionValue(0);
    const y = useTransform(baseY, (v) => `${wrap(-50, 0, v)}%`);

    useAnimationFrame((t, delta) => {
        // Multiplicador de velocidad (delta/1000 convierte ms a segundos)
        let moveBy = direction * speed * (delta / 1000);
        
        if (direction === 1) {
             baseY.set(baseY.get() + moveBy); // Baja
        } else {
             baseY.set(baseY.get() + moveBy); // Sube (como es negativo, al sumar negativo se va hacia arriba en el wrap)
        }
    });

    return (
        <motion.div className="flex flex-col gap-4 w-full" style={{ y }}>
            {/* Duplicamos contenido para efecto infinito */}
            {images.map((src, i) => (
                <div key={`a-${i}`} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-gray-900">
                    <img src={src} alt="" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" />
                </div>
            ))}
            {images.map((src, i) => (
                <div key={`b-${i}`} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-gray-900">
                    <img src={src} alt="" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" />
                </div>
            ))}
        </motion.div>
    );
}