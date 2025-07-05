
import React, { useState, useRef, useEffect } from 'react';

const healingPathData = [
    {
        title: "Fase 1: Estabilizar y Nutrir",
        subtitle: "Abordar Hambre Arcaica y Celular",
        content: [
            "<strong>Prioridad 1 (Arcaica):</strong> Crear seguridad en el sistema nervioso con técnicas somáticas (respiración, grounding) para salir del modo de defensa.",
            "<strong>Prioridad 2 (Celular):</strong> Usar nutrición funcional para corregir deficiencias de nutrientes y estabilizar la bioquímica del cerebro."
        ]
    },
    {
        title: "Fase 2: Procesar y Regular",
        subtitle: "Abordar Hambre Emocional",
        content: ["Con una base estable, se introducen habilidades para gestionar emociones. Se enseña a diferenciar el hambre física de la emocional y a desarrollar nuevas estrategias de afrontamiento que no sean la comida."]
    },
    {
        title: "Fase 3: Integrar y Conectar",
        subtitle: "Abordar Hambre Simbólica",
        content: ["Se trabaja en la identidad, deconstruyendo narrativas dañinas sobre la comida y el cuerpo. El objetivo es reintegrar la comida como fuente de conexión y celebración, satisfaciendo la necesidad de pertenencia."]
    }
];

interface AccordionItemProps {
    item: typeof healingPathData[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, index, isOpen, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full bg-gray-50 hover:bg-gray-100 p-4 flex items-center justify-between cursor-pointer text-left"
            >
                <div className="flex items-center">
                    <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {index + 1}
                    </span>
                    <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-sm font-normal text-gray-600">{item.subtitle}</p>
                    </div>
                </div>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div
                ref={contentRef}
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
            >
                <div className="p-4 bg-white">
                    {item.content.map((p, i) => (
                        <p key={i} className="text-stone-700 py-2" dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const SectionSolution: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <section id="solucion" className="pt-20 -mt-16">
            <div className="text-center mb-8">
                <span className="text-5xl">🌱</span>
                <h3 className="text-2xl font-bold text-teal-800 mt-2">Un Camino Integrador hacia la Sanación</h3>
                <p className="text-md text-stone-600">Abordando las hambres en el orden correcto.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto card hover:transform-none">
                <p className="mb-6 text-stone-700">La sanación requiere un enfoque secuenciado. No podemos trabajar en nuestras emociones (Hambre Emocional) si nuestro sistema nervioso está en modo de supervivencia (Hambre Arcaica) o si nuestro cuerpo carece de nutrientes básicos (Hambre Celular). El camino es de abajo hacia arriba.</p>
                <div id="healing-path">
                    {healingPathData.map((item, index) => (
                        <AccordionItem 
                            key={index}
                            item={item}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionSolution;
