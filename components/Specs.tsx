import React from 'react';

const specs = [
  { label: "Conectividad", value: "Xbox Wireless, Bluetooth, USB-C" },
  { label: "Batería", value: "Interna recargable, hasta 40 horas" },
  { label: "Compatibilidad", value: "Xbox Series X|S, Xbox One, PC, Móviles" },
  { label: "Audio", value: "Jack de 3.5mm estéreo" },
  { label: "Peso", value: "345g (+/- 15g) con palancas y D-pad" },
  { label: "Gatillos", value: "Impulse Triggers y bloqueo de recorrido" },
  { label: "Joysticks", value: "Tensión ajustable (3 niveles)" },
  { label: "Palancas", value: "4 palancas traseras extraíbles" },
  { label: "Perfiles", value: "3 perfiles personalizados + 1 por defecto" },
  { label: "Contenido", value: "Mando, Estuche, Set de 6 joysticks, 2 D-pads" },
];

export default function Specs() {
  return (
    <section id="specs" className="bg-[#050505] py-24 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">Especificaciones Técnicas</h2>
        <div className="divide-y divide-white/10">
          {specs.map((spec, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 py-4 gap-2 md:gap-8">
              <dt className="text-gray-400 font-medium">{spec.label}</dt>
              <dd className="text-white font-light text-lg">{spec.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
