
import React, { useState } from 'react';

const stressCycleData = [
    { id: 'stress', label: 'Estrés', info: "El estrés crónico eleva los niveles de cortisol, la hormona de 'lucha o huida'.", color: 'red' },
    { id: 'deficit', label: 'Déficit Nutricional', info: "El cortisol agota nutrientes vitales como el magnesio y las vitaminas B, necesarios para la calma y la producción de energía.", color: 'yellow' },
    { id: 'cravings', label: 'Antojos', info: "El cerebro busca un alivio rápido. Impulsa antojos de alimentos de alta recompensa (azúcar, grasa) para obtener una dosis de dopamina.", color: 'orange' },
    { id: 'moreStress', label: 'Más Estrés', info: "Los alimentos de 'consuelo' son pobres en nutrientes, lo que profundiza el déficit inicial y prepara el terreno para más estrés, perpetuando el ciclo.", color: 'red' }
];

const SectionCellular: React.FC = () => {
    const [selectedStep, setSelectedStep] = useState<string | null>(null);

    const getInfo = () => {
        if (!selectedStep) return "Selecciona un paso para ver su descripción.";
        const step = stressCycleData.find(s => s.id === selectedStep);
        return step ? step.info : "";
    };

    return (
        <section id="celular" className="pt-20 -mt-16">
            <div className="text-center mb-8">
                <span className="text-5xl">🧠</span>
                <h3 className="text-2xl font-bold text-green-800 mt-2">Hambre Celular o Nutricional</h3>
                <p className="text-md text-stone-600">La demanda bioquímica de tu cuerpo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto card hover:transform-none">
                <p className="mb-6 text-stone-700">Se basa en deficiencias reales de micronutrientes (magnesio, zinc, omega-3, vitaminas B) que generan antojos fisiológicos o síntomas como fatiga, niebla mental e irritabilidad. No es falta de voluntad, es tu cuerpo pidiendo lo que necesita a nivel microscópico.</p>
                <h4 className="font-bold text-lg mb-4 text-green-700">Herramienta Interactiva: El Círculo Vicioso del Estrés y el Antojo</h4>
                <p className="text-sm mb-4 text-stone-600">Haz clic en cada paso para ver cómo se conectan.</p>
                <div id="stress-cycle" className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 text-center">
                    {stressCycleData.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <div className="stress-step" onClick={() => setSelectedStep(step.id)}>
                                <div className={`w-24 h-24 bg-${step.color}-100 rounded-full flex items-center justify-center font-bold text-${step.color}-800 border-2 border-${step.color}-200 cursor-pointer transition-all duration-300 ${selectedStep === step.id ? 'ring-2 ring-offset-2 ring-red-500' : ''}`}>
                                    {step.label}
                                </div>
                            </div>
                            {index < stressCycleData.length - 1 && <div className={`text-2xl text-${stressCycleData[index + 1] ? stressCycleData[index + 1].color : step.color}-400`}>→</div>}
                        </React.Fragment>
                    ))}
                </div>
                <div id="stress-info" className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-stone-700 min-h-[50px] transition-all">
                    {getInfo()}
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h5 className="font-bold text-green-800">Herramienta Terapéutica</h5>
                    <p className="text-green-700">Evaluación nutricional funcional para identificar déficits, seguida de una alimentación reguladora y suplementos dirigidos para reponer las reservas del cuerpo y romper el ciclo.</p>
                </div>
            </div>
        </section>
    );
};

export default SectionCellular;
