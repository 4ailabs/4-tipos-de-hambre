
import React, { useState } from 'react';

type TabId = 'ventral' | 'sympathetic' | 'dorsal';

const tabData = {
    ventral: {
        title: 'Seguridad (Vagal Ventral)',
        contentTitle: 'Estado de Seguridad y Conexión',
        content: 'Nos sentimos calmados, conectados y seguros. La digestión funciona óptimamente. Es el estado ideal para una relación sana con la comida.',
        bgColor: 'bg-green-50',
        textColor: 'text-green-800',
    },
    sympathetic: {
        title: 'Lucha/Huida (Simpático)',
        contentTitle: 'Estado de Movilización',
        content: 'Ante una amenaza, el cuerpo se prepara para luchar o huir. La digestión se detiene. Puede manifestarse como ansiedad, hiperactividad o la urgencia de un atracón.',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-800',
    },
    dorsal: {
        title: 'Bloqueo (Vagal Dorsal)',
        contentTitle: 'Estado de Colapso o Congelación',
        content: 'Cuando la amenaza es abrumadora, el sistema se "apaga". Causa desconexión, entumecimiento y depresión. El deseo es "desaparecer".',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-800',
    },
};

const SectionArchaic: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabId>('ventral');
    const activeTabData = tabData[activeTab];

    return (
        <section id="arcaica" className="pt-20 -mt-16">
            <div className="text-center mb-8">
                <span className="text-5xl">🛡️</span>
                <h3 className="text-2xl font-bold text-red-800 mt-2">Hambre Evolutiva o Arcaica</h3>
                <p className="text-md text-stone-600">La memoria de supervivencia de tu cuerpo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto card hover:transform-none">
                <p className="mb-6 text-stone-700">Es una respuesta del cerebro más primitivo ante memorias de escasez o trauma (personales o heredadas epigenéticamente). Activa patrones antiguos de "acumulación" o "sobreingesta" para protegerse de una hambruna que solo existe en la memoria del sistema nervioso.</p>
                <h4 className="font-bold text-lg mb-4 text-red-700">Herramienta Interactiva: Estados de Supervivencia del Sistema Nervioso</h4>
                <p className="text-sm mb-4 text-stone-600">Nuestro sistema nervioso reacciona al peligro en una jerarquía. Explora los estados.</p>
                <div className="flex flex-wrap justify-center border-b border-gray-200 mb-4">
                    {(Object.keys(tabData) as TabId[]).map(tabId => (
                        <button
                            key={tabId}
                            onClick={() => setActiveTab(tabId)}
                            className={`px-4 py-2 font-semibold transition-colors duration-300 border-b-2 ${activeTab === tabId ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-500 hover:text-blue-600'}`}
                        >
                            {tabData[tabId].title}
                        </button>
                    ))}
                </div>
                
                <div className="relative overflow-hidden">
                    {(Object.keys(tabData) as TabId[]).map(tabId => (
                         <div key={tabId} className={`transition-opacity duration-500 ease-in-out ${activeTab === tabId ? 'opacity-100 static' : 'opacity-0 absolute'}`}>
                            {activeTab === tabId && (
                                <div className={`p-4 rounded-lg ${tabData[tabId].bgColor} ${tabData[tabId].textColor}`}>
                                    <h5 className="font-bold">{tabData[tabId].contentTitle}</h5>
                                    <p>{tabData[tabId].content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h5 className="font-bold text-red-800">Herramienta Terapéutica</h5>
                    <p className="text-red-700">Enfoques somáticos (que trabajan con el cuerpo) como la Coherencia Cardíaca o el "Grounding" (anclaje). El objetivo es enseñar al sistema nervioso a sentirse seguro en el presente para desactivar las antiguas alarmas de supervivencia.</p>
                </div>
            </div>
        </section>
    );
};

export default SectionArchaic;
