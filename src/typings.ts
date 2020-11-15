// Question represents an end-customer question.
// Each question must contains unique identifier.
export interface Question {
    id: number;    // Increments with each question.
    text: string;  // User input.
}

export interface Link {
    title: string;
    link: string;
}

// Answer to the end-customer's question.
export interface Answer {
    id: number;    // Identifier of the question.
    text: string;  // Response for the user's question.
    links?: Link[]; // Optional link to the article.
    code?: string; // Error code
}



// End-customer request for the human assistent.
export interface Fallback {
    id: number; // Identifier of the question.
}

// Server error description.
export interface Error {
    id: number;   // Identifier of the question, that 
    code: string; // Error code.
    text?: string; // Human readable error text.
}

// export type Request = Question | Fallback; такой формат не работает, ts берет пересечение 2ух интерфейсов и считает, что тут доступны либо id либо текст


export interface WSResponse {
    data: string;
}