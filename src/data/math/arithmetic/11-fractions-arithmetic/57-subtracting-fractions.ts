import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "57-subtracting-fractions",
    title: "Віднімання дробів",
    description: "Від'ємні дроби, різниця дробів з різними знаменниками і типові помилки",
    concepts: [
        "Віднімання з однаковими знаменниками",
        "Віднімання з різними знаменниками",
        "Від'ємні результати",
        "Віднімання від цілого числа",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Однакові знаменники",
        },
        {
            type: "math-block",
            content: "\\frac{a}{c} - \\frac{b}{c} = \\frac{a-b}{c}",
        },
        {
            type: "math-block",
            content: "\\frac{7}{9} - \\frac{4}{9} = \\frac{7-4}{9} = \\frac{3}{9} = \\frac{1}{3}",
        },
        {
            type: "math-block",
            content: "\\frac{3}{8} - \\frac{5}{8} = \\frac{3-5}{8} = \\frac{-2}{8} = -\\frac{1}{4}",
        },
        {
            type: "text",
            content:
                "Коли чисельник результату від'ємний — дріб від'ємний. Скорочуємо модуль: $\\frac{-2}{8} = -\\frac{1}{4}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Різні знаменники",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Знайди НСК знаменників",
                "Перетвори обидва дроби до спільного знаменника",
                "Відніми чисельники",
                "Скороти результат",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{3}{4} - \\frac{1}{6}$",
            content:
                "НСК(4,6) = 12. $\\frac{3}{4} = \\frac{9}{12}$. $\\frac{1}{6} = \\frac{2}{12}$. $\\frac{9}{12} - \\frac{2}{12} = \\frac{7}{12}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{5}{6} - \\frac{3}{4}$",
            content:
                "НСК(6,4) = 12. $\\frac{5}{6} = \\frac{10}{12}$. $\\frac{3}{4} = \\frac{9}{12}$. $\\frac{10}{12} - \\frac{9}{12} = \\frac{1}{12}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Формула для двох дробів",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} - \\frac{c}{d} = \\frac{a \\times d - c \\times b}{b \\times d}",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{5}{8} - \\frac{2}{5}$",
            content:
                "$\\frac{5 \\times 5 - 2 \\times 8}{8 \\times 5} = \\frac{25 - 16}{40} = \\frac{9}{40}$. НСД(9,40) = 1 — вже найпростіший.",
        },
        {
            type: "heading",
            level: 2,
            content: "Віднімання від цілого числа",
        },
        {
            type: "text",
            content:
                "Представляємо ціле число як дріб зі знаменником спільного знаменника:",
        },
        {
            type: "math-block",
            content: "1 - \\frac{3}{7} = \\frac{7}{7} - \\frac{3}{7} = \\frac{4}{7}",
        },
        {
            type: "math-block",
            content: "3 - \\frac{5}{6} = \\frac{18}{6} - \\frac{5}{6} = \\frac{13}{6} = 2\\frac{1}{6}",
        },
        {
            type: "callout",
            kind: "info",
            title: "Зручний прийом",
            content:
                "$n - \\frac{a}{b} = (n-1) + \\frac{b-a}{b}$. Наприклад: $5 - \\frac{3}{7} = 4\\frac{4}{7}$. Зменшуємо ціле на 1, дробова частина: $\\frac{7-3}{7} = \\frac{4}{7}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Перевірка результату",
        },
        {
            type: "text",
            content:
                "Завжди перевіряємо: різниця + від'ємник = зменшуване:",
        },
        {
            type: "math-block",
            content: "\\frac{3}{4} - \\frac{1}{6} = \\frac{7}{12} \\quad \\xrightarrow{\\text{перевірка}} \\quad \\frac{7}{12} + \\frac{1}{6} = \\frac{7}{12} + \\frac{2}{12} = \\frac{9}{12} = \\frac{3}{4} \\checkmark",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Порядок має значення",
            content:
                "$\\frac{3}{4} - \\frac{1}{6} = \\frac{7}{12}$ але $\\frac{1}{6} - \\frac{3}{4} = -\\frac{7}{12}$. Віднімання не комутативне — порядок критичний.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $\\frac{8}{11} - \\frac{3}{11}$",
            choices: ["$\\frac{5}{22}$", "$\\frac{5}{11}$", "$\\frac{11}{11}$", "$\\frac{5}{0}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{8}{11} - \\frac{3}{11} = \\frac{8-3}{11} = \\frac{5}{11}",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $\\frac{5}{6} - \\frac{2}{9}$",
            choices: ["$\\frac{3}{3}$", "$\\frac{7}{18}$", "$\\frac{11}{18}$", "$\\frac{3}{18}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "НСК(6,9) = 18:",
                },
                {
                    type: "math-block",
                    content: "\\frac{5}{6} - \\frac{2}{9} = \\frac{15}{18} - \\frac{4}{18} = \\frac{11}{18}",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $1 - \\frac{5}{8}$",
            choices: ["$\\frac{3}{8}$", "$\\frac{5}{8}$", "$\\frac{4}{8}$", "$\\frac{3}{7}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "1 - \\frac{5}{8} = \\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $\\frac{7}{10} - \\frac{3}{4}$",
            choices: ["$-\\frac{1}{20}$", "$\\frac{1}{20}$", "$\\frac{4}{6}$", "$-\\frac{4}{6}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "НСК(10,4) = 20:",
                },
                {
                    type: "math-block",
                    content: "\\frac{7}{10} - \\frac{3}{4} = \\frac{14}{20} - \\frac{15}{20} = \\frac{-1}{20} = -\\frac{1}{20}",
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли: $4 - \\frac{5}{7}$",
            choices: ["$3\\frac{2}{7}$", "$3\\frac{5}{7}$", "$4\\frac{2}{7}$", "$\\frac{23}{7}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Використовуємо зручний прийом:",
                },
                {
                    type: "math-block",
                    content: "4 - \\frac{5}{7} = 3 + \\frac{7-5}{7} = 3\\frac{2}{7}",
                },
                {
                    type: "text",
                    content: "Або: $\\frac{28}{7} - \\frac{5}{7} = \\frac{23}{7} = 3\\frac{2}{7}$ ✓",
                },
            ],
        },
    ],
};

export default lesson;