import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Magnet, Users, Blocks, Mountain, Brain, Salad, Ear, Flower2, Contact2, UserCog, Baby, Syringe } from 'lucide-react';

const servicios = [
  {
    image: '/servicio1.jpg',
    title: 'Consulta médica presencial y online',
    description: 'Atención personalizada para evaluar y tratar problemas de salud a través de un enfoque integrativo, ya sea de forma presencial o mediante videollamada, para mayor comodidad.',
    duracion: '30 min',
    costo: '$600 mxn',
    incluye: 'Diagnóstico y receta del tratamiento',
    nota: 'NO incluye terapia de Biomagnetismo',
  },
  {
    image: '/servicio2.jpg',
    title: 'Terapia de Biomagnetismo',
    description: 'Exploración del cuerpo mediante el uso de imanes para detectar desequilibrios en órganos y tejidos, facilitando la identificación de posibles infecciones o disfunciones.',
    duracion: '30 min',
    costo: '$700 mxn',
  },
  {
    image: '/servicio3.jpg',
    title: 'Consulta médica + terapia de biomagnetismo',
    description: 'Evaluación médica personalizada que combina un diagnóstico integral con la aplicación de terapia de biomagnetismo.',
    duracion: '1 hr',
    costo: '$1,200 mxn',
  },
  {
    image: '/servicio4.jpg',
    title: 'Terapia Sistémica con Playmobil',
    description: 'Terapia que utiliza muñecos y figuras Playmobil para representar situaciones personales o familiares, permitiendo explorar emociones, resolver conflictos y generar comprensión profunda.',
    duracion: '1 hr',
    costo: '$1,200 mxn',
  },
  {
    image: '/servicio5.jpg',
    title: 'Sesión de Lego Serious Play (LSP)',
    description: 'Técnica que utiliza piezas de Lego para fomentar la creatividad, el pensamiento estratégico y la resolución de problemas en diferentes ámbitos, como el desarrollo personal, empresarial y educativo.',
    duracion: '1 hr 30 min',
    costo: '$1,200 mxn',
  },
  {
    image: '/servicio6.jpg',
    title: 'Terapia Sand Play (Caja de Arena)',
    description: 'Terapia expresiva en la que el paciente representa su mundo interno mediante figuras y arena, facilitando el procesamiento de emociones y la resolución de traumas de manera simbólica.',
    duracion: '1 hr',
    costo: '$1,200 mxn',
  },
  {
    image: '/servicio7.jpg',
    title: 'Terapia de conflictología biológica y reprocesamiento',
    description: 'Aborda conflictos emocionales desde una perspectiva biológica, ayudando a identificar su origen, su impacto en la salud y facilitando su procesamiento para una resolución efectiva.',
    duracion: '1 hr',
    costo: '$1,200 mxn',
  },
  {
    image: '/servicio8.jpg',
    title: 'Plan de Alimentación',
    description: 'Evaluación personalizada en la que se analizan las características biológicas y genéticas del paciente. Se elabora un plan de alimentación individualizado y se proporciona una lista de compras y snacks adaptados.',
    duracion: '30 min',
    costo: '$700 mxn',
  },
  {
    image: '/servicio9.jpg',
    title: 'Control de peso con auriculoterapia',
    description: 'Uso de técnicas como la estimulación de puntos específicos en la oreja para regular el apetito, mejorar la digestión y apoyar el proceso de control y pérdida de peso.',
    duracion: '30 min',
    costo: '$200 mxn',
  },
  {
    image: '/servicio10.jpg',
    title: 'Consulta Online de Productos Nutricionales',
    description: 'Consulta a través de un formulario y supervisado por el médico y receta online.',
    costo: '$200 mxn',
  },
  {
    image: '/servicio11.jpg',
    title: 'Consulta de Flores de Bach',
    description: 'Consulta que utiliza esencias florales para equilibrar emociones, reducir el estrés y promover un estado de bienestar general a nivel físico y mental.',
    duracion: '30 min',
    costo: '$500 mxn',
  },
  {
    image: '/servicio12.jpg',
    title: 'Terapia con cartas asociativas (OH)',
    description: 'Herramienta de exploración emocional mediante cartas proyectivas que facilitan la introspección, el autoconocimiento y la resolución de bloqueos emocionales.',
    duracion: '1 hr',
    costo: '$1,200 mxn',
  },
  {
    image: '/servicio13.jpg',
    title: 'Terapia de metaposiciones (Neuro imaginative Gestalting)',
    description: 'Explora la conexión energética entre seres vivos a través de patrones invisibles de información que influyen en la conducta, las emociones y la salud.',
    duracion: '1 hr 30 min',
    costo: '$1,500 mxn',
  },
  {
    image: '/servicio14.jpg',
    title: 'Neuroaprendizaje y brain gym en niños',
    description: 'Técnicas que estimulan el cerebro infantil para mejorar la memoria, la concentración y el aprendizaje, utilizando ejercicios físicos y estrategias de desarrollo cognitivo.',
    duracion: '1 hr',
    costo: '$1,200 mxn',
  },
];

const iconMap: Record<string, React.ReactNode> = {
  'Consulta médica presencial y online': <Stethoscope className="w-8 h-8 text-teal-600 mb-2" />,
  'Terapia de Biomagnetismo': <Magnet className="w-8 h-8 text-pink-600 mb-2" />,
  'Consulta médica + terapia de biomagnetismo': <Magnet className="w-8 h-8 text-pink-600 mb-2" />,
  'Terapia Sistémica con Playmobil': <Users className="w-8 h-8 text-blue-600 mb-2" />,
  'Sesión de Lego Serious Play (LSP)': <Blocks className="w-8 h-8 text-yellow-600 mb-2" />,
  'Terapia Sand Play (Caja de Arena)': <Mountain className="w-8 h-8 text-yellow-700 mb-2" />,
  'Terapia de conflictología biológica y reprocesamiento': <Brain className="w-8 h-8 text-purple-600 mb-2" />,
  'Plan de Alimentación': undefined,
  'Control de peso con auriculoterapia': <Ear className="w-8 h-8 text-orange-600 mb-2" />,
  'Consulta Online de Productos Nutricionales': <Syringe className="w-8 h-8 text-green-600 mb-2" />,
  'Consulta de Flores de Bach': <Flower2 className="w-8 h-8 text-pink-600 mb-2" />,
  'Terapia con cartas asociativas (OH)': <Contact2 className="w-8 h-8 text-orange-600 mb-2" />,
  'Terapia de metaposiciones (Neuro imaginative Gestalting)': <UserCog className="w-8 h-8 text-purple-600 mb-2" />,
  'Neuroaprendizaje y brain gym en niños': <Baby className="w-8 h-8 text-blue-600 mb-2" />,
};

const Servicios: React.FC = () => {
  return (
            <section className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 min-h-screen transition-colors duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-8 transition-colors duration-300 animate-fade-in">Servicios de la Clínica Centrobioenergetica</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-slow">
        {servicios.map((servicio, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center group">
            {iconMap[servicio.title]}
            {/* <img src={servicio.image} alt={servicio.title} className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300" /> */}
                          <h3 className="text-xl font-bold text-teal-800 mb-2 text-center transition-colors duration-300">{servicio.title}</h3>
              <p className="text-stone-700 text-center mb-2 transition-colors duration-300">{servicio.description}</p>
              <div className="text-sm text-stone-600 mb-1 transition-colors duration-300">
              {servicio.duracion && <span className="mr-2">⏱️ {servicio.duracion}</span>}
              {servicio.costo && <span>💲{servicio.costo}</span>}
            </div>
                          {servicio.incluye && <div className="text-xs text-green-700 mb-1">Incluye: {servicio.incluye}</div>}
              {servicio.nota && <div className="text-xs text-red-600 mb-1">{servicio.nota}</div>}
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

export default Servicios; 