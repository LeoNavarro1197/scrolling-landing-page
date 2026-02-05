import React from 'react';

const modules = [
  {
    title: "Competitivo",
    bullets: ["Mapeo de botones ilimitado", "Perfiles personalizados", "Palancas traseras"],
    desc: "Diseñado para darte ventaja en cada partida con opciones de configuración avanzadas."
  },
  {
    title: "Personalización",
    bullets: ["D-pads intercambiables", "Joysticks de diferentes alturas", "App Accesorios Xbox"],
    desc: "Adapta el mando a tu estilo de juego único con componentes físicos intercambiables."
  },
  {
    title: "Durabilidad",
    bullets: ["Materiales premium", "Estuche de carga incluido", "Componentes reforzados"],
    desc: "Construido para resistir el uso intensivo y viajar contigo a cualquier torneo."
  }
];

export default function Modules() {
  return (
    <section className="bg-[#050505] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 md:mb-16 text-center leading-tight">Juega como un Profesional</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {modules.map((mod, idx) => (
            <div key={idx} className="relative min-h-[320px] md:h-96 rounded-3xl overflow-hidden bg-zinc-900 p-6 md:p-8 flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{mod.title}</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {mod.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="relative z-10 text-gray-400 text-sm border-t border-white/10 pt-4 mt-4 leading-relaxed">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
