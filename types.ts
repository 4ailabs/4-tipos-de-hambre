
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

export interface SlideContent {
    id: number;
    title: string;
    subtitle?: string;
    highlight?: string;
    points?: string[];
    icon?: string;
    visuals?: string[];
    notes?: string[];
    footerNote?: string;
}
