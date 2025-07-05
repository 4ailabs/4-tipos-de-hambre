import React, { useState } from 'react';
import { questions, resultDetails } from '../constants';
import { HungerType } from '../types';

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Record<HungerType, number>>({
        [HungerType.Celular]: 0,
        [HungerType.Emocional]: 0,
        [HungerType.Simbolica]: 0,
        [HungerType.Arcaica]: 0,
    });
    const [result, setResult] = useState<HungerType | null>(null);

    const handleSelectAnswer = (type: HungerType) => {
        const newScores = { ...scores, [type]: scores[type] + 1 };
        setScores(newScores);

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            // Determine the dominant hunger type
            const dominantHunger = Object.keys(newScores).reduce((a, b) => newScores[a as HungerType] > newScores[b as HungerType] ? a : b) as HungerType;
            setResult(dominantHunger);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];
    const resultData = result ? resultDetails[result] : null;

    return (
        <section className="max-w-2xl mx-auto bg-white dark:bg-stone-900 rounded-xl shadow-lg p-6 sm:p-10 mb-12 animate-fade-in-slow transition-colors duration-300">
            <h3 className="text-2xl font-bold text-center text-orange-800 dark:text-orange-200 mb-6 transition-colors duration-300">Test: ¿Qué tipo de hambre predomina en ti?</h3>
            {!result ? (
                <div className="flex flex-col gap-6">
                    <div className="text-lg sm:text-xl font-semibold text-stone-800 dark:text-stone-100 text-center mb-2 transition-colors duration-300 animate-fade-in">
                        {currentQuestion.question}
                    </div>
                    <div className="flex flex-col gap-4">
                        {currentQuestion.answers.map((answer, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSelectAnswer(answer.type)}
                                className="w-full py-3 px-4 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-200 font-bold shadow hover:bg-orange-200 dark:hover:bg-orange-800 transition-all duration-200 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 animate-fade-in"
                            >
                                {answer.text}
                            </button>
                        ))}
                    </div>
                    <div className="text-sm text-stone-500 dark:text-stone-300 text-center mt-2">Pregunta {currentQuestionIndex + 1} de {questions.length}</div>
                </div>
            ) : result && resultData ? (
                <div id="result-container" className="text-center animate-fade-in-slow">
                    <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">Tu Punto de Partida</h3>
                    <div id="result-icon" className="text-6xl mb-4">{resultData.icon}</div>
                    <h4 id="result-title" className={`text-xl font-bold mb-2 ${resultData.color}`}>{resultData.title}</h4>
                    <p id="result-description" className="text-stone-700 dark:text-stone-200 mb-6 transition-colors duration-300">
                        {resultData.description}
                    </p>
                    <a id="result-link" href={resultData.link} className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg">
                        Explorar mi resultado
                    </a>
                </div>
            ) : null}
            <style>{`
                .animate-fade-in { animation: fadeIn 0.7s ease-in; }
                .animate-fade-in-slow { animation: fadeIn 1.2s ease-in; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </section>
    );
};

export default Quiz;