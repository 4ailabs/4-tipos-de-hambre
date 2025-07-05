
import { QuizQuestion, ResultDetail, HungerType } from './types';

export const questions: QuizQuestion[] = [
    {
        question: "Cuando sientes un fuerte impulso de comer fuera de horas, ¿qué suele ocurrir justo antes?",
        answers: [
            { text: "Siento un bajón de energía, cansancio o niebla mental.", type: HungerType.Celular },
            { text: "Estoy estresado, aburrido, triste o ansioso.", type: HungerType.Emocional },
            { text: "Veo a otros comiendo o recuerdo una comida familiar.", type: HungerType.Simbolica },
            { text: "Me siento inseguro, con una sensación de 'no hay suficiente'.", type: HungerType.Arcaica }
        ]
    },
    {
        question: "¿Qué tipo de comida buscas en esos momentos?",
        answers: [
            { text: "Mi cuerpo parece pedir energía rápida: carbohidratos o azúcar.", type: HungerType.Celular },
            { text: "Un 'alimento consuelo' muy concreto que me hace sentir mejor.", type: HungerType.Emocional },
            { text: "Algo que me recuerda a mi infancia o a una celebración.", type: HungerType.Simbolica },
            { text: "Siento la necesidad de comer mucho, casi cualquier cosa.", type: HungerType.Arcaica }
        ]
    },
    {
        question: "¿Dónde sientes este 'hambre' principalmente?",
        answers: [
            { text: "Es una sensación física de debilidad o irritabilidad.", type: HungerType.Celular },
            { text: "Es más una idea en mi cabeza, una fijación mental.", type: HungerType.Emocional },
            { text: "Es un antojo que se despierta por la vista o el olfato.", type: HungerType.Simbolica },
            { text: "Es una tensión profunda en el cuerpo, una urgencia que no se calma.", type: HungerType.Arcaica }
        ]
    },
    {
        question: "¿Cómo te sientes DESPUÉS de comer en respuesta a este impulso?",
        answers: [
            { text: "Temporalmente mejor, pero el antojo puede volver pronto.", type: HungerType.Celular },
            { text: "A menudo con culpa, vergüenza o arrepentimiento.", type: HungerType.Emocional },
            { text: "Satisfecho de una manera nostálgica, como si hubiera conectado con algo.", type: HungerType.Simbolica },
            { text: "Todavía tenso, o con una sensación de haber comido en exceso.", type: HungerType.Arcaica }
        ]
    },
    {
        question: "¿En qué situaciones es más probable que aparezca este impulso?",
        answers: [
            { text: "Cuando he dormido mal, he trabajado mucho o me he saltado comidas.", type: HungerType.Celular },
            { text: "Cuando estoy solo y me siento abrumado por mis emociones.", type: HungerType.Emocional },
            { text: "En reuniones sociales, fiestas o al ver anuncios de comida.", type: HungerType.Simbolica },
            { text: "Cuando me siento amenazado o después de un período de dieta estricta.", type: HungerType.Arcaica }
        ]
    }
];

export const resultDetails: Record<HungerType, ResultDetail> = {
    [HungerType.Celular]: {
        icon: "🧠",
        title: "Hambre Celular",
        color: "text-green-800",
        description: "Tu punto de partida es el Hambre Celular. Esto sugiere que tu cuerpo a menudo te envía señales bioquímicas claras pidiendo nutrientes específicos. Tus antojos podrían ser un eco de una necesidad de más energía, vitaminas o minerales. Explorar esta sección te ayudará a entender el lenguaje de tu biología.",
        link: "#celular"
    },
    [HungerType.Emocional]: {
        icon: "❤️",
        title: "Hambre Emocional",
        color: "text-blue-800",
        description: "Tu punto de partida es el Hambre Emocional. Parece que la comida y las emociones están muy conectadas para ti. A menudo, el impulso de comer puede ser una forma de gestionar sentimientos como el estrés o la tristeza. Explorar esta sección te dará herramientas para encontrar consuelo sin necesidad de recurrir a la comida.",
        link: "#emocional"
    },
    [HungerType.Simbolica]: {
        icon: "🫂",
        title: "Hambre Simbólica",
        color: "text-purple-800",
        description: "Tu punto de partida es el Hambre Simbólica. Para ti, la comida es mucho más que combustible; es conexión, cultura y recuerdos. Tus antojos pueden estar ligados a una necesidad de pertenencia o nostalgia. Explorar esta sección te ayudará a descifrar los significados ocultos en tus platos.",
        link: "#simbolica"
    },
    [HungerType.Arcaica]: {
        icon: "🛡️",
        title: "Hambre Arcaica",
        color: "text-red-800",
        description: "Tu punto de partida es el Hambre Arcaica. Esto indica que tu sistema nervioso puede estar operando en modo de supervivencia. Tus impulsos de comer pueden estar arraigados en una profunda necesidad de seguridad y una memoria de escasez. Explorar esta sección te enseñará a calmar tu cuerpo y a sentirte seguro.",
        link: "#arcaica"
    }
};
