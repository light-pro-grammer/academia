import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "06-combining-like-terms",
    title: "Зведення подібних доданків",
    description: "Спрощення виразів шляхом об'єднання членів з однаковими змінними і показниками",
    concepts: [
        "Подібні члени — повторення",
        "Зведення в лінійних виразах",
        "Від'ємні коефіцієнти",
        "Вирази з дробами",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Що означає «звести подібні»?",
        },
        {
            type: "text",
            content:
                "Зведення подібних членів — це спрощення виразу шляхом об'єднання членів що мають однакові змінні з однаковими показниками. Це як підраховувати яблука окремо від апельсинів.",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Алгоритм зведення",
            content:
                "1. Визнач подібні члени (однакові змінні і степені). 2. Згрупуй їх разом. 3. Склади або відніми коефіцієнти. 4. Залиш змінну частину.",
        },
        {
            type: "heading",
            level: 2,
            content: "Лінійні вирази",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3x + 5 + 2x - 1$",
            content:
                "Групуємо: $(3x + 2x) + (5 - 1) = 5x + 4$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$7x - 3x + 8 - 5$",
            content:
                "$(7x - 3x) + (8 - 5) = 4x + 3$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Від'ємні коефіцієнти",
        },
        {
            type: "callout",
            kind: "example",
            title: "$5x - 8x + 3$",
            content:
                "$(5 - 8)x + 3 = -3x + 3$. Коефіцієнт стає від'ємним.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$-4x + 7 - 2x - 3$",
            content:
                "$(-4x - 2x) + (7 - 3) = -6x + 4$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Вирази з двома змінними",
        },
        {
            type: "callout",
            kind: "example",
            title: "$4x + 3y - x + 2y$",
            content:
                "$(4x - x) + (3y + 2y) = 3x + 5y$. Члени з $x$ і члени з $y$ — різні групи подібних.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$5a - 2b + 3a + b - 7$",
            content:
                "$(5a + 3a) + (-2b + b) - 7 = 8a - b - 7$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Вирази з дробовими коефіцієнтами",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{1}{2}x + \\frac{3}{4}x$",
            content:
                "$\\left(\\frac{1}{2} + \\frac{3}{4}\\right)x = \\left(\\frac{2}{4} + \\frac{3}{4}\\right)x = \\frac{5}{4}x$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$0{,}3x + 1{,}2x - 0{,}5x$",
            content:
                "$(0{,}3 + 1{,}2 - 0{,}5)x = 1{,}0x = x$.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Типові помилки",
            content:
                "$3x + 5 \\neq 8x$ (різні члени — не можна зводити). $x^2 + x \\neq 2x^2$ і $\\neq 2x$ (різні степені). $3x + 3y \\neq 6xy$ (різні змінні).",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Спрости: $8x + 3 - 5x + 7$",
            choices: ["$3x + 10$", "$13x + 10$", "$3x + 4$", "$13x + 4$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "(8x - 5x) + (3 + 7) = 3x + 10",
                },
            ],
        },
        {
            id: "q2",
            question: "Спрости: $-2x + 9 + 5x - 4$",
            choices: ["$3x + 5$", "$-7x + 5$", "$3x + 13$", "$7x - 5$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "(-2x + 5x) + (9 - 4) = 3x + 5",
                },
            ],
        },
        {
            id: "q3",
            question: "Спрости: $5a + 3b - 2a - b$",
            choices: ["$3a + 2b$", "$3a - 2b$", "$7a + 4b$", "$3a + 4b$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "(5a - 2a) + (3b - b) = 3a + 2b",
                },
            ],
        },
        {
            id: "q4",
            question: "Спрости: $\\frac{2}{3}x - \\frac{1}{6}x + 4$",
            choices: ["$\\frac{1}{2}x + 4$", "$\\frac{3}{4}x + 4$", "$\\frac{5}{6}x + 4$", "$x + 4$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\left(\\frac{4}{6} - \\frac{1}{6}\\right)x + 4 = \\frac{3}{6}x + 4 = \\frac{1}{2}x + 4",
                },
            ],
        },
        {
            id: "q5",
            question: "Спрости: $4x^2 + 3x - x^2 - 5x + 2$",
            choices: ["$3x^2 - 2x + 2$", "$5x^2 + 8x + 2$", "$3x^2 + 8x + 2$", "$3x^2 - 2x - 2$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "(4x^2 - x^2) + (3x - 5x) + 2 = 3x^2 - 2x + 2",
                },
            ],
        },
    ],
};

export default lesson;