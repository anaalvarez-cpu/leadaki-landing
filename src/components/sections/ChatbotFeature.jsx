import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SpringButton } from '../ui/SpringButton';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ChatbotFeature() {
    return (
        <section className="py-20 bg-[#0f172a]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Intro Text */}
                <AnimatedSection className="mb-12">
                    <p className="text-accent text-sm font-bold tracking-wider uppercase mb-2">
                        Te ayudamos a convertir
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold max-w-3xl leading-tight">
                        Estrategia de Adquisición de Clientes <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                            y a liderar la era de las ventas con IA
                        </span>
                    </h2>
                </AnimatedSection>

                {/* Main Card */}
                <AnimatedSection delay={0.2}>
                    <div className="relative bg-[#1e1b4b] rounded-[2.5rem] overflow-hidden min-h-[500px] flex flex-col md:flex-row">

                        {/* Left decorative sidebar */}
                        <div className="relative w-full md:w-1/4 min-h-[200px] md:min-h-full flex flex-row md:flex-col">
                            <div className="flex-1 bg-pink-600 flex items-end p-6">
                                <ArrowUpRight className="text-white w-8 h-8 rotate-45" />
                            </div>
                            <div className="flex-1 bg-indigo-900 flex items-end p-6">
                                <ArrowUpRight className="text-white w-8 h-8 rotate-45" />
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 md:p-16 flex-1 relative z-10 flex flex-col justify-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                Creamos el primer Chatbot para Ventas
                            </h3>
                            <p className="text-gray-300 text-lg mb-8 max-w-lg">
                                Genera de 1000 visitas de promedio 35 leads. Compra segura, consultiva y 24/7. Esta es una experiencia de venta real a otro nivel.
                            </p>
                            <div>
                                <SpringButton variant="outline" className="rounded-full px-8 border-white/20 hover:bg-white/10">
                                    Ver más casos
                                </SpringButton>
                            </div>
                        </div>

                        {/* Background Image / Overlay */}
                        <div className="absolute inset-0 z-0">
                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b] to-transparent z-10" />
                            <div className="absolute inset-0 bg-black/40 z-0" />

                            {/* Mockup specific background - using a placeholder or gradient if image not available */}
                            <img
                                src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop"
                                alt="Chatbot Interface"
                                className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-50"
                            />
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
