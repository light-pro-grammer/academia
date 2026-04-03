import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "61-fractions-applications",
    title: "Практичне застосування дробів",
    description: "Дроби у вимірюваннях, кулінарії, фінансах і текстових задачах — реальне застосування",
    concepts: [
        "Ключові слова задач з дробами",
        "Дроби у вимірюваннях",
        "Дроби у кулінарії і масштабуванні",
        "Багатокрокові задачі з дробами",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Ключові слова задач з дробами",
        },
        {
            type: "list",
            items: [
                "«Частина від», «$\\frac{a}{b}$ від числа» → множення",
                "«Розділити на рівні частини» → ділення",
                "«Разом», «всього» → додавання",
                "«Залишилось», «різниця» → віднімання",
                "«У скільки разів» → ділення або множення",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Знаходження дробу від числа",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} \\text{ від } N = \\frac{a}{b} \\times N",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{3}{5}$ від 120",
            content:
                "$\\frac{3}{5} \\times 120 = \\frac{3 \\times 120}{5} = \\frac{360}{5} = 72$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Знайди число якщо $\\frac{2}{3}$ від нього = 48",
            content:
                "$\\frac{2}{3} \\times N = 48 \\Rightarrow N = 48 \\div \\frac{2}{3} = 48 \\times \\frac{3}{2} = 72$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Дроби у вимірюваннях",
        },
        {
            type: "callout",
            kind: "example",
            title: "Мотузка",
            content:
                "Мотузка $7\\frac{1}{2}$ м. Відрізали $2\\frac{3}{4}$ м. Скільки залишилось? $7\\frac{1}{2} - 2\\frac{3}{4} = \\frac{15}{2} - \\frac{11}{4} = \\frac{30}{4} - \\frac{11}{4} = \\frac{19}{4} = 4\\frac{3}{4}$ м.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Дорога",
            content:
                "Дорога $12$ км. Пройшли $\\frac{3}{4}$ шляху. Скільки залишилось? Пройшли: $\\frac{3}{4} \\times 12 = 9$ км. Залишилось: $12 - 9 = 3$ км. Або: $\\frac{1}{4} \\times 12 = 3$ км.",
        },
        {
            type: "heading",
            level: 2,
            content: "Масштабування рецептів",
        },
        {
            type: "callout",
            kind: "example",
            title: "Рецепт на 4 порції → 6 порцій",
            content:
                "Коефіцієнт: $6 \\div 4 = \\frac{3}{2}$. Якщо потрібно $\\frac{2}{3}$ склянки борошна на 4 порції: $\\frac{2}{3} \\times \\frac{3}{2} = 1$ склянка на 6 порцій.",
        },
        {
            type: "heading",
            level: 2,
            content: "Дроби у фінансах",
        },
        {
            type: "callout",
            kind: "example",
            title: "Бюджет родини",
            content:
                "Зарплата 30 000 грн. $\\frac{1}{3}$ — оренда, $\\frac{1}{4}$ — їжа, $\\frac{1}{6}$ — транспорт. Скільки залишається? Витрати: $\\frac{1}{3} + \\frac{1}{4} + \\frac{1}{6} = \\frac{4}{12} + \\frac{3}{12} + \\frac{2}{12} = \\frac{9}{12} = \\frac{3}{4}$. Залишається: $\\frac{1}{4}$. $\\frac{1}{4} \\times 30\\,000 = 7\\,500$ грн.",
        },
        {
            type: "heading",
            level: 2,
            content: "Багатокрокові задачі",
        },
        {
            type: "callout",
            kind: "example",
            title: "Задача про запаси",
            content:
                "Склад мав $N$ кг зерна. Перший день витратили $\\frac{1}{4}$, другий день — $\\frac{1}{3}$ того що залишилось. Після двох днів залишилось 300 кг. Знайди $N$. Після 1-го дня: $N \\times \\frac{3}{4}$. Після 2-го дня: $\\frac{3}{4}N \\times \\frac{2}{3} = \\frac{1}{2}N = 300$. Отже $N = 600$ кг.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Задача про роботу",
            content:
                "Перший майстер виконує роботу за $3$ дні, другий — за $4$ дні. За скільки днів вони виконають разом? За день перший робить $\\frac{1}{3}$, другий — $\\frac{1}{4}$. Разом за день: $\\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$. Всю роботу: $1 \\div \\frac{7}{12} = \\frac{12}{7} = 1\\frac{5}{7}$ дні.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Дроби в науці",
            content:
                "Ймовірність події — дріб від 0 до 1. Концентрація розчину — $\\frac{\\text{маса речовини}}{\\text{маса розчину}}$. Коефіцієнт корисної дії — $\\frac{\\text{корисна робота}}{\\text{загальна робота}}$. Дроби повсюди де є відношення двох величин.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Знайди $\\frac{5}{8}$ від числа 240",
            choices: ["$120$", "$140$", "$150$", "$160$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{5}{8} \\times 240 = \\frac{5 \\times 240}{8} = \\frac{1200}{8} = 150",
                },
            ],
        },
        {
            id: "q2",
            question: "$\\frac{3}{7}$ від невідомого числа дорівнює 42. Знайди число.",
            choices: ["$18$", "$56$", "$84$", "$98$"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "N = 42 \\div \\frac{3}{7} = 42 \\times \\frac{7}{3} = \\frac{42 \\times 7}{3} = \\frac{294}{3} = 98",
                },
            ],
        },
        {
            id: "q3",
            question: "Дошка $5\\frac{1}{2}$ м. Відпиляли $1\\frac{3}{4}$ м і $2\\frac{1}{4}$ м. Скільки залишилось?",
            choices: ["$1\\frac{1}{2}$ м", "$1\\frac{3}{4}$ м", "$2$ м", "$1\\frac{1}{4}$ м"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Спочатку загальна відпиляна частина:",
                },
                {
                    type: "math-block",
                    content: "1\\frac{3}{4} + 2\\frac{1}{4} = 3\\frac{4}{4} = 4 \\text{ м}",
                },
                {
                    type: "math-block",
                    content: "5\\frac{1}{2} - 4 = 1\\frac{1}{2} \\text{ м}",
                },
            ],
        },
        {
            id: "q4",
            question: "Зарплата 24 000 грн. $\\frac{1}{4}$ — оренда, $\\frac{1}{3}$ — їжа. Скільки залишилось?",
            choices: ["$4 000$ грн", "$6 000$ грн", "$8 000$ грн", "$10 000$ грн"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{1}{4} + \\frac{1}{3} = \\frac{3}{12} + \\frac{4}{12} = \\frac{7}{12}",
                },
                {
                    type: "math-block",
                    content: "\\text{Залишилось: } 1 - \\frac{7}{12} = \\frac{5}{12}",
                },
                {
                    type: "math-block",
                    content: "\\frac{5}{12} \\times 24\\,000 = 5 \\times 2\\,000 = 10\\,000 \\text{ грн}",
                },
            ],
        },
        {
            id: "q5",
            question: "Один насос наповнює басейн за 6 годин, другий — за 4 години. За скільки годин наповнять разом?",
            choices: ["$2$ год", "$2\\frac{2}{5}$ год", "$3$ год", "$5$ год"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "За годину перший заповнює $\\frac{1}{6}$, другий $\\frac{1}{4}$. Разом:",
                },
                {
                    type: "math-block",
                    content: "\\frac{1}{6} + \\frac{1}{4} = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}",
                },
                {
                    type: "math-block",
                    content: "t = 1 \\div \\frac{5}{12} = \\frac{12}{5} = 2\\frac{2}{5} \\text{ год}",
                },
            ],
        },
    ],
};

export default lesson;