import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

const features = [
    {
        icon: <Target className="w-8 h-8 text-white" />,
        title: "Atraer",
        description: "Capturamos la atención de potenciales clientes con estrategias de alto impacto.",
        color: "bg-pink-600"
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Empoderar",
        description: "Nutrimos a los prospectos con contenido relevante y automatización inteligente.",
        color: "bg-purple-600"
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Conectar",
        description: "Facilitamos la conversión final conectando leads calificados con tu equipo.",
        color: "bg-indigo-600"
    }
];

export function RevenueLoop() {
    return (
        <section className="py-20 bg-[#0f172a] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection>
                    <div className="mb-16 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            IA Revenue Loop
                        </h2>
                        <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
                            Equipos de Marketing <br />y Ventas de alto rendimiento
                        </h3>
                        <p className="text-gray-400">
                            Alineamos sus objetivos generando estrategias y planes de acción que aceleran la conversión de manera predecible y escalable.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <AnimatedSection key={index} delay={index * 0.2}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative h-full bg-[#1e1b4b]/50 border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-colors"
                            >
                                {/* Header Color Accent */}
                                <div className={`absolute top-0 left-0 w-full h-1 ${feature.color}`} />

                                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>

                                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative background glow */}
                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${feature.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
