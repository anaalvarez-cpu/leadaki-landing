import React from 'react';
import { motion } from 'framer-motion';

export function Booking() {
  return (
    <section className="relative py-24 bg-[#0F172A] overflow-hidden" id="booking">

      {/* --- FONDO DE LUCES MEJORADO --- */}
      {/* Un solo foco de luz central grande y muy suave detrás del calendario */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Encabezado más compacto y directo */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Agenda tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              sesión estratégica
            </span>
          </motion.h2>
          <p className="text-gray-400 text-base md:text-lg">
             Reserva el momento que mejor te quede. Sin vueltas.
          </p>
        </div>

        {/* --- CONTENEDOR PREMIUM (El marco de vidrio) --- */}
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // CAMBIOS AQUÍ:
            // 1. 'max-w-3xl': Más angosto para que se vea más exclusivo.
            // 2. 'h-[580px]': Altura controlada, ya no es gigante.
            // 3. Bordes y fondo mucho más sutiles (opacity 0.03 y 0.08).
            className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[580px]"
        >
          {/* Decoración: Brillo sutil en el borde superior */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />

          {/* Contenedor interno para el iframe (padding para crear el efecto "tarjeta dentro de tarjeta") */}
          <div className="w-full h-full p-3 md:p-4 relative z-10">
              <iframe
                // ¡IMPORTANTE! VUELVE A PEGAR TU LINK DE GOOGLE AQUÍ ABAJO 👇
                src="https://calendar.app.google/XZmPC8HbFQYkxTto9"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Agendar cita"
                // 'rounded-3xl' para que las esquinas del calendario blanco sean suaves y encajen en el diseño.
                className="w-full h-full bg-white rounded-3xl shadow-inner"
              ></iframe>
          </div>

        </motion.div>

      </div>
    </section>
  );
}