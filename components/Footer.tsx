import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-100 mt-16 animate-fade-in-slow transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-stone-600">
                <p className="text-base sm:text-lg">Aplicación interactiva basada en el informe <span className="font-semibold text-orange-800">"Los 4 Tipos de Hambre: Fundamentos y Evidencia Multidisciplinaria"</span>.</p>
                <p className="text-sm mt-1">Diseñada para la exploración y la educación.</p>
            </div>
            <style>{`
                .animate-fade-in-slow { animation: fadeIn 1.2s ease-in; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </footer>
    );
};

export default Footer;
  