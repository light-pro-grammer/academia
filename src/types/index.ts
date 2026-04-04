// ─── Блоки контенту уроку ───────────────────────────────────────────────────

export type ContentBlock =
    | { type: "text"; content?: string; parts?: Array<{ text: string; href?: string }> }
    | { type: "math"; content: string; display?: boolean }
    | { type: "heading"; level: number; content: string }
    | { type: "list"; items: string[]; ordered?: boolean }
    | { type: "callout"; kind: "info" | "warning" | "example" | "definition"; title?: string; content: string }
    | { type: "math-block"; content: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "link"; href: string; label: string; external?: boolean }
    | { type: "component"; name: string; props?: Record<string, unknown> }
    | { type: "divider" };

// ─── Вправи (Quiz) ──────────────────────────────────────────────────────────

export interface QuizQuestion {
    id: string;
    question: string;                    // текст питання (може містити LaTeX)
    choices: string[];                   // варіанти відповіді
    correctIndex: number;                // індекс правильного
    solution: ContentBlock[];            // повне покрокове розв'язання
}

// ─── Урок ───────────────────────────────────────────────────────────────────

export interface Lesson {
    id: string;
    title: string;
    description?: string;
    concepts: string[];                  // перелік понять які вивчаються
    content: ContentBlock[];
    quiz: QuizQuestion[];
}

// ─── Розділ ─────────────────────────────────────────────────────────────────

export interface Section {
    id: string;
    title: string;
    lessons: Lesson[];
}

// ─── Курс ───────────────────────────────────────────────────────────────────

export interface Course {
    id: string;
    title: string;
    description: string;
    sections: Section[];
}

// ─── Предмет ────────────────────────────────────────────────────────────────

export interface Subject {
    id: string;
    title: string;
    emoji: string;
    description: string;
    courses: CourseRef[];
}

export interface CourseRef {
    id: string;
    title: string;
    description: string;
}