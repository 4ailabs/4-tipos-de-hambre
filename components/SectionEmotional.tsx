
import React from 'react';

const comparisonData = [
    { characteristic: 'Aparición', emotional: 'Súbita, urgente.', physical: 'Gradual, puede esperar.' },
    { characteristic: 'Especificidad', emotional: 'Antojo de algo específico (pizza, helado).', physical: 'Abierta a varias opciones.' },
    { characteristic: 'Ubicación', emotional: 'Sensación "del cuello para arriba", en la mente.', physical: 'En el estómago (vacío, ruidos).' },
    { characteristic: 'Emoción', emotional: 'Ligada a una emoción (estrés, aburrimiento).', physical: 'No ligada a una emoción específica.' },
    { characteristic: 'Consecuencia', emotional: 'Suele ir seguida de culpa o vergüenza.', physical: 'Sensación de satisfacción y autocuidado.' },
];

const SectionEmotional: React.FC = () => {
    return (
        <section id="emocional" className="pt-20 -mt-16">
             <div className="text-center mb-8">
                <span className="text-5xl">❤️</span>
                <h3 className="text-2xl font-bold text-blue-800 mt-2">Hambre Emocional</h3>
                <p className="text-md text-stone-600">Comer para regular lo que sientes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto card hover:transform-none">
                <p className="mb-6 text-stone-700">Comer no por necesidad energética, sino para gestionar emociones displacenteras como el estrés, la tristeza o el aburrimiento. La comida, especialmente dulce y grasa, activa el sistema de recompensa del cerebro, generando un alivio transitorio.</p>
                <h4 className="font-bold text-lg mb-4 text-blue-700">Herramienta Interactiva: ¿Hambre Física o Emocional?</h4>
                <p className="text-sm mb-4 text-stone-600">Compara las características clave para aprender a diferenciarlas.</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 bg-gray-50 font-bold text-stone-700 rounded-tl-lg">Característica</th>
                                <th className="py-2 px-4 bg-blue-50 font-bold text-blue-800">Hambre Emocional</th>
                                <th className="py-2 px-4 bg-green-50 font-bold text-green-800 rounded-tr-lg">Hambre Física</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={row.characteristic} className={`border-b ${index % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                                    <td className="py-3 px-4 font-semibold">{row.characteristic}</td>
                                    <td className="py-3 px-4">{row.emotional}</td>
                                    <td className="py-3 px-4">{row.physical}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-800">Herramienta Terapéutica</h5>
                    <p className="text-blue-700">Intervenciones como el "mindful eating" (comer con atención plena) y el registro emocional antes de comer ayudan a crear una pausa consciente, reduciendo la automaticidad del patrón.</p>
                </div>
            </div>
        </section>
    );
};

export default SectionEmotional;
