import React from "react";
import { AlertCircle, GitMerge, DollarSign, MousePointer2 } from "lucide-react";

export function Problem() {
  const problems = [
    {
      text: "Campañas que traen tráfico que no convierte.",
      icon: MousePointer2,
    },
    { text: "Datos que existen pero no se conectan.", icon: GitMerge },
    {
      text: "Inversión que genera leads pero no clientes rentables.",
      icon: DollarSign,
    },
    {
      text: "Experiencias que se rompen y frenan intenciones.",
      icon: AlertCircle,
    },
  ];

  return (
    <section className="py-24 bg-[#0f172a]">
      {" "}
      {/* Fondo igual al resto */}
      <div className="container mx-auto px-4">
        {/* Encabezado Alineado a la Izquierda */}
        <div className="max-w-4xl mr-auto mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            El crecimiento no siempre falla por falta de inversión. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Falla por desorden.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-pink-500/30 pl-6">
            Cuando cada equipo optimiza su parte, pero nadie gobierna el todo,
            el crecimiento se estanca.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b]/40 border border-white/5 p-8 rounded-2xl hover:bg-[#1e293b] hover:border-pink-500/20 transition-all group"
            >
              {/* Icono a la izquierda */}
              <div className="mb-6 p-3 bg-pink-500/10 w-fit rounded-xl group-hover:bg-pink-500/20 transition-colors">
                <item.icon className="text-pink-400 w-8 h-8" />
              </div>

              {/* Texto alineado a la izquierda */}
              <p className="text-gray-200 font-medium text-lg leading-snug text-left">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
