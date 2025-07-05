
import React from 'react';

const symbolCards = [
    { icon: '🎂', title: 'Pastel de Cumpleaños', description: 'Simboliza celebración, comunidad, y el paso del tiempo.' },
    { icon: '🍲', title: 'Sopa Casera', description: 'Representa cuidado maternal, hogar, consuelo y seguridad afectiva.' },
    { icon: '🍷', title: 'Vino o Comida Gourmet', description: 'Puede señalar estatus, sofisticación, y "capital cultural".' },
];

const SymbolCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="card bg-purple-50 p-4 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg">
        <div className="text-3xl mb-2">{icon}</div>
        <div className="font-bold">{title}</div>
        <div className="text-sm text-purple-800">{description}</div>
    </div>
);

const SectionSymbolic: React.FC = () => {
    return (
        <section id="simbolica" className="pt-20 -mt-16">
             <div className="text-center mb-8">
                <span className="text-5xl">🫂</span>
                <h3 className="text-2xl font-bold text-purple-800 mt-2">Hambre Simbólica</h3>
                <p className="text-md text-stone-600">La necesidad de pertenencia y significado.</p>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto card hover:transform-none">
                <p className="mb-6 text-stone-700">Aquí, la comida trasciende la nutrición para convertirse en un símbolo. Ciertos alimentos cargan representaciones inconscientes de hogar, afecto, estatus o pertenencia a una comunidad. Comer se convierte en un acto social y cultural profundo.</p>
                <h4 className="font-bold text-lg mb-4 text-purple-700">Herramienta Interactiva: El Significado Oculto de la Comida</h4>
                <p className="text-sm mb-4 text-stone-600">Explora cómo diferentes alimentos pueden tener un significado simbólico.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    {symbolCards.map(card => (
                        <SymbolCard key={card.title} {...card} />
                    ))}
                </div>
                 <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h5 className="font-bold text-purple-800">Herramienta Terapéutica</h5>
                    <p className="text-purple-700">Técnicas de terapia narrativa y visualización simbólica. Explorar memorias y rituales familiares ligados a la comida para descubrir qué carencia afectiva o de conexión se está intentando "comer".</p>
                </div>
            </div>
        </section>
    );
};

export default SectionSymbolic;
