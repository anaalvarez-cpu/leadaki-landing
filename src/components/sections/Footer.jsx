import React from "react";
import { motion } from "framer-motion";
import { SpringButton } from "../ui/SpringButton";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Call to Action Wrapper */}
          <div>
            <AnimatedSection>
              <h2 className="text-5xl font-bold mb-6 ">
                Si querés vender más, no alcanza con hacer más marketing.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
              Hay que optimizar el sistema completo. Eso es lo que hacemos en Leadaki.
              </p>

              <div className="flex gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-bold text-sm text-[#EE4587]">Hablemos</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection
            delay={0.2}
            className="bg-[#0f172a] p-8 rounded-3xl border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition-colors"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Sitio Web
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition-colors"
                    placeholder="www.tuempresa.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Objetivo
                  </label>
                  <select className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition-colors text-gray-400">
                    <option>Seleccionar</option>
                    <option>Más Ventas</option>
                    <option>Mejores Leads</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <SpringButton className="w-full rounded-xl" variant="primary">
                  Enviar
                </SpringButton>
              </div>
            </form>
          </AnimatedSection>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            {
              title: "Compañía",
              links: ["Sobre Leadaki", "Casos de éxito", "Contacto"],
            },
            {
              title: "Servicios",
              links: [
                "Consultoría",
                "Paid Media",
                "Creative Studio",
                "Agentes IA",
              ],
            },
            {
              title: "Recursos",
              links: ["Blog", "Ebooks", "Webinars"],
            },
            {
              title: "Legal",
              links: ["Privacidad", "Términos"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {col.links.map((link) => (
                  <li
                    key={link}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-black text-gray-800 tracking-tighter select-none">
            LEADAKI
          </h1>

          <div className="flex gap-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
