import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useAnimationFrame, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- DATOS DE LOS CASOS DE ÉXITO ---
const cases = [
  {
    id: 1,
    tag: "LEAD GEN",
    title: "Más calidad de leads para Cooperación Seguros",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop", 
    description: "Implementamos una estrategia de Lead Generation enfocada en la calidad del prospecto.",
    stats: [
        { value: 40, suffix: "%", label: "Aumento en calidad de leads" },
        { value: 100, suffix: "%", label: "Trazabilidad completa" }
    ]
  },
  {
    id: 2,
    tag: "E-COMMERCE",
    title: "Duplicamos la facturación de Eyelit",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", 
    description: "Estrategia multicanal en Google que logró un crecimiento récord en ventas durante el Hot Sale.",
    stats: [
        { value: 18, suffix: "M", label: "de pesos en solo 7 días" },
        { value: 21, suffix: "M", label: "Récord histórico mensual" }
    ]
  },
  {
    id: 3,
    tag: "FINTECH",
    title: "Eficiencia en costos para InvertirOnline",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", 
    description: "Rediseño del flujo de adquisición de usuarios con foco en la optimización de la inversión.",
    stats: [
        { value: 30, suffix: "%", label: "Reducción del CPA (Costo)" },
        { value: 24, suffix: "/7", label: "Operación digital continua" }
    ]
  }
];

// --- LOGOS REALES Y A COLOR ---
const logos = [
    { name: "Under Armour", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg" },
    { name: "Swarovski", url: "https://i.pinimg.com/736x/71/ca/44/71ca44316e0b479d2cb5ad18b74278b3.jpg" },
    { name: "Rehau", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/REHAU_Logo_sRGB_01.svg/1280px-REHAU_Logo_sRGB_01.svg.png" },
    { name: "Cooperación Seguros", url: "https://www.cooperacionseguros.com.ar/wp-content/uploads/2025/10/logo-nuevo-coop.png" },
    { name: "Supercanal", url: "" }
];

// Duplicamos la lista para asegurar que el carrusel se vea denso
const allLogos = [...logos, ...logos];

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function SocialProof() {
  return (
    <section className="py-24 bg-white text-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* 1. INTRODUCCIÓN */}
        <div className="text-left max-w-4xl mr-auto mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-6 text-[#0f172a]"
            >
                La experiencia que respalda <br />
                <span className="text-[#EE4587]">lo que prometemos.</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-500 max-w-2xl"
            >
                No hablamos de crecimiento desde la teoría. Lo construimos todos los días, con datos, procesos y resultados.
            </motion.p>
        </div>

        {/* 2. CASOS DE ÉXITO */}
        <div className="mb-32">
            <div className="mb-10 text-left">
                <h3 className="text-3xl font-bold text-[#0f172a] mb-2">Casos de éxito</h3>
                <p className="text-gray-500 text-lg">Los resultados que validan nuestro trabajo.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 h-[500px]">
                {cases.map((item) => (
                    <CaseCard key={item.id} data={item} />
                ))}
            </div>
        </div>

        {/* 3. NUESTROS CLIENTES (DOBLE MARQUEE) */}
        <div className="mb-20">
            <div className="mb-12 text-left">
                <h3 className="text-3xl font-bold text-[#0f172a] mb-2">
                    Nuestros clientes
                </h3>
                <p className="text-gray-500 text-lg">Las empresas de LATAM que ya confían en nosotros.</p>
            </div>
            
            {/* Contenedor de las dos filas con espacio entre ellas (gap-10) */}
            <div className="relative flex flex-col gap-10 w-full max-w-[100vw] -mx-4 md:mx-0">
                {/* Degradados laterales para el efecto fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* FILA 1: Mueve hacia la DERECHA (Velocidad positiva) */}
                <ClientMarquee items={allLogos} baseVelocity={1.2} />
                
                {/* FILA 2: Mueve hacia la IZQUIERDA (Velocidad negativa) */}
                <ClientMarquee items={allLogos} baseVelocity={-1.2} />
            </div>
        </div>

      </div>
    </section>
  );
}

// --- COMPONENTES AUXILIARES ---

function ClientMarquee({ items, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef(1);
    
    useAnimationFrame((t, delta) => {
      // La dirección depende del signo de baseVelocity
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      baseX.set(baseX.get() + moveBy);
    });
  
    return (
      <div className="overflow-hidden flex py-4">
        <motion.div className="flex gap-16 md:gap-24" style={{ x }}>
          {/* Repetimos 4 veces para un loop infinito fluido */}
          {[...Array(4)].map((_, i) => (
             <div key={i} className="flex gap-16 md:gap-24 items-center shrink-0">
                {items.map((client, index) => (
                   <img 
                     key={index} 
                     src={client.url} 
                     alt={client.name} 
                     className="h-12 md:h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                     onError={(e) => {e.target.style.display='none';}}
                   />
                ))}
             </div>
          ))}
        </motion.div>
      </div>
    );
}

// (CaseCard y NumberTicker permanecen igual)
function CaseCard({ data }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div 
            className="relative rounded-[2rem] overflow-hidden cursor-pointer group h-full shadow-lg border border-gray-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 z-0">
                <img src={data.image} alt={data.title} className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>
            <div className={`absolute bottom-0 left-0 p-8 w-full z-10 transition-all duration-500 transform ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded text-[10px] font-bold text-white mb-4 uppercase tracking-wider">{data.tag}</span>
                <h3 className="text-2xl font-bold text-white leading-tight">{data.title}</h3>
            </div>
            <div className={`absolute inset-0 z-20 p-8 flex flex-col justify-between bg-[#0f172a]/95 backdrop-blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {isHovered && (
                    <>
                        <div className="flex flex-col gap-6 mt-2">
                            {data.stats.map((stat, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                    <div className="flex items-baseline font-bold text-white leading-none">
                                        <NumberTicker value={stat.value} /><span className="text-4xl text-[#EE4587] ml-1">{stat.suffix}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                            <p className="text-gray-300 text-base leading-relaxed mb-6 font-medium border-l-2 border-[#EE4587] pl-4">{data.description}</p>
                            <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white hover:text-[#EE4587] transition-all group/btn">
                                Ver caso completo
                                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    );
}

function NumberTicker({ value }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100, duration: 2000 });
    useEffect(() => { motionValue.set(value); }, [motionValue, value]);
    useEffect(() => {
        springValue.on("change", (latest) => { if (ref.current) { ref.current.textContent = Math.floor(latest).toFixed(0); } });
        return () => springValue.clearListeners();
    }, [springValue]);
    return <span ref={ref} className="text-6xl font-bold tracking-tighter text-white" />;
}