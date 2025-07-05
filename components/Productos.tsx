import React from 'react';
import { Link } from 'react-router-dom';

const productos = [
  {
    image: '/producto1.jpg',
    title: 'Vitamina D3',
    beneficios: [
      'Mejora tu estado de ánimo',
      'Fortalece huesos y articulaciones',
      'Refuerza tu sistema inmunológico',
    ],
    precio: '',
  },
  {
    image: '/producto2.jpg',
    title: 'Resverasor (Várices y piernas pesadas)',
    beneficios: [
      'Alivia la sensación de pesadez',
      'Apoya tu circulación',
      'Te ayuda a prevenir que el problema avance',
    ],
    precio: '$630.00',
  },
  {
    image: '/producto3.jpg',
    title: 'Nervit (Sueño)',
    beneficios: [
      'Conciliar el sueño',
      'Reducir el estrés',
      'Equilibrar tu sistema nervioso',
    ],
    precio: '',
  },
  {
    image: '/producto4.jpg',
    title: 'Vitamina E (Sorivid)',
    beneficios: [
      'Suplemento antioxidante',
      'Apoya la salud de tu piel y sistema inmunológico',
      'Ideal para proteger tus células del estrés oxidativo',
      'Fórmula de liberación retardada para absorción óptima',
    ],
    precio: '',
  },
  {
    image: '/producto5.jpg',
    title: 'Lisina (Lis-AM)',
    beneficios: [
      'Refuerza tu sistema inmunológico',
      'Mejora producción de colágeno',
      'Piel más firme y luminosa',
    ],
    precio: 'Lisam 60 caps - $190.00 | Lisam 200 caps - $475.00',
  },
  {
    image: '/producto6.jpg',
    title: 'Oligosor con Zinc',
    beneficios: [
      'Fortalece tu sistema inmunológico',
      'Ayuda a la cicatrización de heridas',
      'Apoya la salud de la piel, cabello y uñas',
      'Con dosificador integrado para mayor comodidad',
    ],
    precio: '',
  },
  {
    image: '/producto7.jpg',
    title: 'Mincartil',
    beneficios: [
      'Rico en colágeno, calcio, magnesio, vitamina C y D',
      'Apoya la regeneración del cartílago',
      'Mejora la movilidad y flexibilidad',
      'Reduce el desgaste y la fatiga articular',
    ],
    precio: '',
  },
  {
    image: '/producto8.jpg',
    title: 'Diatonato 5.2',
    beneficios: [
      'Regula el metabolismo desde la raíz',
      'Apoya en casos de diabetes, obesidad y desequilibrios metabólicos',
      'Poderosa mezcla de oligoelementos (Zinc, Níquel y Cobalto)',
    ],
    precio: '',
  },
];

const contacto = {
  phone: '+52 55 7907 6626',
  address: 'Acapulco 36, Interior 104, Roma Nte., Cuauhtémoc',
};

const Productos: React.FC = () => {
  return (
    <section className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 min-h-screen transition-colors duration-300 dark:bg-stone-950">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-700 dark:text-yellow-300 mb-8 transition-colors duration-300 animate-fade-in">Productos y Suplementos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-slow">
        {productos.map((producto, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center group">
            <img src={producto.image} alt={producto.title} className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-2 text-center transition-colors duration-300">{producto.title}</h3>
            <ul className="text-stone-700 dark:text-stone-200 text-left mb-2 list-disc list-inside transition-colors duration-300">
              {producto.beneficios.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {producto.precio && <div className="text-lg font-bold text-green-700 dark:text-green-400 mb-1 transition-colors duration-300">{producto.precio}</div>}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center animate-fade-in-slow">
        <a
          href="https://wa.me/+525579076626"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow"
        >
          Contactar por WhatsApp
        </a>
      </div>
      <div className="mt-8 flex justify-center animate-fade-in-slow">
        <Link to="/" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          Volver a la página principal
        </Link>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s ease-in; }
        .animate-fade-in-slow { animation: fadeIn 1.2s ease-in; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default Productos; 