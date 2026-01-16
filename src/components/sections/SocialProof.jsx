import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useAnimationFrame, useTransform } from 'framer-motion';
import { 
    ArrowUpRight, 
    Car,                // Volkswagen
    Banknote,           // Western Union
    Dumbbell,           // SportsWorld
    CreditCard,         // Naranja
    Landmark,           // Solventis
    Pipette,            // Evacopa (Industrial)
    Building2,          // Trump Tower
    ShieldCheck,        // 123Seguro
    Umbrella,           // Zurich
    Briefcase,          // Adecco
    Gem                 // Icono genérico
} from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

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

// --- LOGOS DE CLIENTES (Representados con ÍCONOS) ---
// Fila 1
const row1 = [
    { name: "Volkswagen", icon: <Car className="w-8 h-8" /> },
    { name: "Western Union", icon: <Banknote className="w-8 h-8" /> },
    { name: "SportsWorld", icon: <Dumbbell className="w-8 h-8" /> },
    { name: "Naranja", icon: <CreditCard className="w-8 h-8" /> },
    { name: "Solventis", icon: <Landmark className="w-8 h-8" /> }
];

// Fila 2
const row2 = [
    { name: "Evacopa", icon: <Pipette className="w-8 h-8" /> },
    { name: "Trump Tower", icon: <Building2 className="w-8 h-8" /> },
    { name: "123Seguro", icon: <ShieldCheck className="w-8 h-8" /> },
    { name: "Zurich", icon: <Umbrella className="w-8 h-8" /> },
    { name: "Adecco", icon: <Briefcase className="w-8 h-8" /> }
];

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function SocialProof() {
  return (
    <section className="py-24 bg-white text-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Encabezado */}
        <AnimatedSection className="mb-12 flex items-center gap-2">
            <h2 className="text-4xl md:text-5xl font-bold">
                Casos de <span className="text-[#581c87]">éxito</span>
            </h2>
        </AnimatedSection>

        {/* GRID DE CASOS */}
        <div className="grid md:grid-cols-3 gap-6 h-[500px] mb-32">
            {cases.map((item) => (
                <CaseCard key={item.id} data={item} />
            ))}
        </div>

        {/* --- SECCIÓN DE CLIENTES (MARQUEE DE ÍCONOS) --- */}
        <AnimatedSection>
            <div className="mb-12 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Nuestros <span className="text-pink-500">clientes</span>
                </h3>
            </div>
            
            <div className="relative flex flex-col gap-8 w-full max-w-[100vw] -mx-4 md:mx-0">
                {/* Degradados laterales (Fade effect) */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* FILA 1: Hacia Izquierda (Velocidad controlada) */}
                <ClientMarquee items={row1} baseVelocity={-0.5} />
                
                {/* FILA 2: Hacia Derecha (Velocidad controlada) */}
                <ClientMarquee items={row2} baseVelocity={0.5} />
            </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

// --- COMPONENTE CARRUSEL ---
function ClientMarquee({ items, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef(1);
    
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      // Sin multiplicador loco, velocidad natural 1:1
      baseX.set(baseX.get() + moveBy);
    });
  
    return (
      <div className="overflow-hidden flex">
        <motion.div className="flex gap-4 md:gap-8" style={{ x }}>
          {[...Array(10)].map((_, i) => (
             <div key={i} className="flex gap-4 md:gap-8">
                {items.map((client, index) => (
                   <LogoItem key={index} client={client} />
                ))}
             </div>
          ))}
        </motion.div>
      </div>
    );
}

// --- ITEM LOGO (CAJA CON ÍCONO) ---
function LogoItem({ client }) {
    return (
        <div className="
            flex items-center justify-center 
            w-32 h-24 md:w-40 md:h-28
            bg-gray-50/80 border border-gray-100 rounded-2xl
            text-gray-400
            hover:text-pink-600 hover:border-pink-200 hover:bg-white hover:shadow-lg hover:-translate-y-1
            transition-all duration-300 cursor-default group
        ">
            {/* El Ícono escala un poco al hacer hover */}
            <div className="transform group-hover:scale-110 transition-transform duration-300">
                {client.icon}
            </div>
        </div>
    );
}

// --- (SIN CAMBIOS) COMPONENTES DE CASOS Y CONTADOR ---
function CaseCard({ data }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div 
            className="relative rounded-[2rem] overflow-hidden cursor-pointer group h-full shadow-lg border border-gray-100"
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
                                        <NumberTicker value={stat.value} /><span className="text-4xl text-[#ec4899] ml-1">{stat.suffix}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                            <p className="text-gray-300 text-base leading-relaxed mb-6 font-medium border-l-2 border-pink-500 pl-4">{data.description}</p>
                            <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white hover:text-black transition-all group/btn">Ver caso completo<ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /></button>
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