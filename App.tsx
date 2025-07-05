import React from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import SectionCellular from './components/SectionCellular';
import SectionEmotional from './components/SectionEmotional';
import SectionSymbolic from './components/SectionSymbolic';
import SectionArchaic from './components/SectionArchaic';
import SectionSolution from './components/SectionSolution';
import Footer from './components/Footer';
import Publicidad from './components/Publicidad';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 transition-colors duration-300 dark:bg-stone-950 min-h-screen">
                <section className="text-center mb-12 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl font-bold text-orange-900 dark:text-orange-200 mb-4 transition-colors duration-300">Descubre lo que tu cuerpo realmente te pide</h2>
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-stone-700 dark:text-stone-200 transition-colors duration-300">
                        El "hambre" es un lenguaje complejo. Responde este breve test para identificar tu tipo de hambre dominante y empezar a decodificar tus señales internas.
                    </p>
                </section>

                <div className="animate-fade-in-slow">
                  <Quiz />
                </div>
                
                <div id="hunger-sections" className="space-y-16 animate-fade-in-slow">
                    <SectionCellular />
                    <SectionEmotional />
                    <SectionSymbolic />
                    <SectionArchaic />
                    <SectionSolution />
                </div>
                <Publicidad />
            </main>
            <Footer />
            <style>{`
              .animate-fade-in { animation: fadeIn 0.7s ease-in; }
              .animate-fade-in-slow { animation: fadeIn 1.2s ease-in; }
              @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </>
    );
};

export default App;
