
export enum HungerType {
    Celular = 'celular',
    Emocional = 'emocional',
    Simbolica = 'simbolica',
    Arcaica = 'arcaica',
}

export interface QuizAnswer {
    text: string;
    type: HungerType;
}

export interface QuizQuestion {
    question: string;
    answers: QuizAnswer[];
}

export interface ResultDetail {
    icon: string;
    title: string;
    color: string;
    description: string;
    link: string;
}
