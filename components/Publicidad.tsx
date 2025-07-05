import React from 'react';

const ads = [
  {
    image: 'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/3a4bd77d-b855-4da2-9c45-ef0882fa5241/1.png?format=1000w',
    alt: 'Acupuntura Facial y Estética',
    title: '¡Luce radiante en tu graduación y eventos especiales!',
    description: 'Este mes de vacaciones, regálate un cambio visible y natural con Acupuntura Facial y Estética',
    discount: '15% de descuento todos los jueves y viernes',
    details: 'Reduce líneas de expresión, mejora la firmeza de tu piel y dale un brillo natural a tu rostro.',
    phone: '+52 55 7907 6626',
    address: 'Acapulco 36, Interior 104, Roma Nte., Cuauhtémoc',
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/3b1e5b14-4e99-430a-a4ee-67a8f0eee977/2.png?format=1000w',
    alt: 'Protocolo Bio Regeneración Facial',
    title: 'Protocolo Bio Regeneración Facial',
    description: 'El reseteo profundo que tu piel necesita.',
    details: 'INCLUYE: 1 Suero Bioenergético (Carzilasa + Vit C) y 2 Sesiones de Acupuntura Facial',
    price: 'Precio especial $2,950 (Valor real: $4,150)',
    phone: '+52 55 7907 6626',
    address: 'Acapulco 36, Interior 104, Roma Nte., Cuauhtémoc',
  },
];

const contacto = {
  phone: '+52 55 7907 6626',
  address: 'Acapulco 36, Interior 104, Roma Nte., Cuauhtémoc',
};

const Publicidad: React.FC = () => {
  return (
    <>
              <section className="my-12 transition-colors duration-300 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-orange-900 transition-colors duration-300">Promociones Especiales</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch animate-fade-in-slow">
          {ads.map((ad, idx) => (
            <div
              key={idx}
                              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden flex-1 max-w-md mx-auto md:mx-0 transition-shadow duration-300 group"
            >
              <img
                src={ad.image}
                alt={ad.alt}
                className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 flex flex-col gap-2">
                <h4 className="text-xl font-bold text-orange-900 mb-2 transition-colors duration-300">{ad.title}</h4>
                <p className="text-stone-700 mb-1 transition-colors duration-300">{ad.description}</p>
                {ad.discount && (
                  <div className="text-pink-700 font-semibold mb-1 transition-colors duration-300">{ad.discount}</div>
                )}
                <p className="text-stone-700 mb-1 transition-colors duration-300">{ad.details}</p>
                {ad.price && (
                  <div className="text-lg font-bold text-red-600 mb-1 transition-colors duration-300">{ad.price}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="my-8 border-t border-dashed border-orange-300 w-full max-w-4xl mx-auto"></div>
      <div className="text-center text-stone-600 text-sm mb-4">
        <div className="font-semibold text-base mb-1">Contacto</div>
        <div>📞 {contacto.phone}</div>
        <div>📍 {contacto.address}</div>
      </div>
      <div className="mb-8 flex flex-col items-center gap-4 animate-fade-in-slow">
        <a
          href="https://wa.me/+525579076626"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow"
        >
          Haz tu cita
        </a>
        <div className="flex gap-4 mt-2">
          <a href="/servicios" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow">Ver Servicios</a>
          <a href="/productos" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow">Ver Productos</a>
        </div>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s ease-in; }
        .animate-fade-in-slow { animation: fadeIn 1.2s ease-in; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};

export default Publicidad; 