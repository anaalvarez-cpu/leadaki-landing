import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SpringButton } from '../ui/SpringButton';

const services = [
    {
        id: 'consultoria',
        title: 'Consultoría',
        tags: ['Webflow', 'Strategy B2B', 'HubSpot CRM', 'Revenue Ops'],
        description: 'Optimizamos tus procesos comerciales y tecnológicos para maximizar el crecimiento.'
    },
    {
        id: 'paid-media',
        title: 'Paid Media',
        tags: ['Google Ads', 'LinkedIn Ads', 'Meta Ads', 'Analytics'],
        description: 'Estrategias de inversión publicitaria enfocadas en ROI y captación de leads cualificados.'
    },
    {
        id: 'creative',
        title: 'Creative Studio',
        tags: ['Branding', 'Web Design', 'UI/UX', 'Video Production'],
        description: 'Diseño de alto impacto que comunica tu propuesta de valor y diferencia tu marca.'
    },
    {
        id: 'ai-agents',
        title: 'Agentes IA',
        tags: ['Chatbots', 'Automation', 'Lead Scoring', 'Predictive Analysis'],
        description: 'Implementación de inteligencia artificial para escalar tu atención y ventas.'
    }
];

export function Services() {
    const [activeService, setActiveService] = useState('consultoria');

    return (
        <section className="py-20 bg-[#0f172a]">
            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16">

                {/* Left: Headers & Description */}
                <div>
                    <AnimatedSection>
                        <div className="flex gap-2 text-white mb-2">
                            <ExternalLink className="w-5 h-5 -rotate-45 text-gray-500" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Nuestros <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Servicios
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-sm mb-8">
                            Conoce nuestros servicios para empresas medianas y empresas B2B.
                        </p>
                    </AnimatedSection>
                </div>

                {/* Right: Service Interactive List */}
                <div className="space-y-4">
                    {services.map((service, index) => (
                        <AnimatedSection key={service.id} delay={index * 0.1}>
                            <div
                                className={`border-b border-white/10 pb-4 transition-all duration-300 ${activeService === service.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                            >
                                <button
                                    onClick={() => setActiveService(service.id)}
                                    className="w-full text-left flex items-center justify-between py-2 group"
                                >
                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                        {service.title}
                                    </h3>
                                    <ChevronRight className={`transition-transform duration-300 ${activeService === service.id ? 'rotate-90 text-accent' : 'text-gray-500'}`} />
                                </button>

                                <AnimatePresence>
                                    {activeService === service.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 pb-2">
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {service.tags.map(tag => (
                                                        <span key={tag} className="text-xs font-semibold px-2 py-1 bg-blue-900/30 text-blue-300 border border-blue-500/30 rounded">
                                                            • {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className="text-gray-400 text-sm mb-4">
                                                    {service.description}
                                                </p>
                                                <SpringButton variant="secondary" className="text-xs px-4 py-2">
                                                    Ver detalles
                                                </SpringButton>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    );
}
