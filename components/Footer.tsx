import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-10 md:py-16 px-4 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">Domina el juego.</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto">
          El mando más avanzado del mundo, rediseñado para un rendimiento sin precedentes.
        </p>
        <button className="bg-white text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-200 transition-colors mb-16 md:mb-20">
          Comprar Xbox Elite Series 2
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/10 pt-10 md:pt-16">
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer">Visión General</li>
              <li className="hover:text-white cursor-pointer">Especificaciones</li>
              <li className="hover:text-white cursor-pointer">Accesorios</li>
              <li className="hover:text-white cursor-pointer">Comparar</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer">Garantía</li>
              <li className="hover:text-white cursor-pointer">Manuales</li>
              <li className="hover:text-white cursor-pointer">Estado del servicio</li>
              <li className="hover:text-white cursor-pointer">Contacto</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Xbox</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer">Game Pass</li>
              <li className="hover:text-white cursor-pointer">Consolas</li>
              <li className="hover:text-white cursor-pointer">Juegos</li>
              <li className="hover:text-white cursor-pointer">Comunidad</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer">Privacidad</li>
              <li className="hover:text-white cursor-pointer">Términos de uso</li>
              <li className="hover:text-white cursor-pointer">Cookies</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Microsoft Corporation. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">Twitter</span>
            <span className="cursor-pointer hover:text-white">Instagram</span>
            <span className="cursor-pointer hover:text-white">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
