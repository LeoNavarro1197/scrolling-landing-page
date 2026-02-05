import React from 'react';
import { Gamepad2, Settings, ShieldCheck, Battery } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    title: "Palancas de tensión ajustable",
    desc: "Ajusta la resistencia de los joysticks para mejorar tu puntería y control."
  },
  {
    icon: <Settings className="w-8 h-8 text-white" />,
    title: "Gatillos de alta sensibilidad",
    desc: "Bloqueo de recorrido corto para disparar más rápido en cada partida."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Agarre de goma envolvente",
    desc: "Diseño texturizado para mantener el control incluso en sesiones intensas."
  },
  {
    icon: <Battery className="w-8 h-8 text-white" />,
    title: "Batería recargable 40h",
    desc: "Juega sin interrupciones con una batería de larga duración integrada."
  }
];

export default function Features() {
  return (
    <section className="bg-[#050505] py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-white/20">
              <div className="mb-4 p-3 bg-black/50 rounded-full w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
