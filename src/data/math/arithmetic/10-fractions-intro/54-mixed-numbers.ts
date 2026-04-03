import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "54-mixed-numbers",
    title: "Мішані числа та неправильні дроби",
    description: "Мішані числа — комбінація цілої частини і правильного дробу — і перетворення між формами",
    concepts: [
        "Мішане число",
        "Перетворення неправильного дробу в мішане число",
        "Перетворення мішаного числа в неправильний дріб",
        "Порівняння мішаних чисел",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Що таке мішане число?",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Мішане число",
            content:
                "Мішане число складається з цілої частини і правильного дробу: $a\\frac{b}{c}$ де $a$ — ціла частина, $\\frac{b}{c}$ — дробова частина ($0 < b < c$). Приклади: $2\\frac{1}{3}$, $5\\frac{3}{4}$, $1\\frac{7}{8}$.",
        },
        {
            type: "text",
            content:
                "Мішане число $2\\frac{1}{3}$ означає «два і одна третина» — рівно $2 + \\frac{1}{3}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Неправильний дріб → Мішане число",
        },
        {
            type: "text",
            content:
                "Ділимо чисельник на знаменник. Частка — ціла частина, остача — новий чисельник:",
        },
        {
            type: "math-block",
            content: "\\frac{17}{5} = 17 \\div 5 = 3 \\text{ ост. } 2 = 3\\frac{2}{5}",
        },
        {
            type: "math-block",
            content: "\\frac{23}{6} = 23 \\div 6 = 3 \\text{ ост. } 5 = 3\\frac{5}{6}",
        },
        {
            type: "math-block",
            content: "\\frac{28}{7} = 28 \\div 7 = 4 \\text{ ост. } 0 = 4 \\quad (\\text{ціле число})",
        },
        {
            type: "callout",
            kind: "example",
            title: "Алгоритм",
            content:
                "$\\frac{47}{8}$: $47 \\div 8 = 5$ ост. $7$. Ціла частина: $5$, дробова: $\\frac{7}{8}$. Результат: $5\\frac{7}{8}$. Перевірка: $5 \\times 8 + 7 = 47$ ✓",
        },
        {
            type: "heading",
            level: 2,
            content: "Мішане число → Неправильний дріб",
        },
        {
            type: "text",
            content:
                "Ціла частина × знаменник + чисельник = новий чисельник. Знаменник залишається:",
        },
        {
            type: "math-block",
            content: "3\\frac{2}{5} = \\frac{3 \\times 5 + 2}{5} = \\frac{17}{5}",
        },
        {
            type: "math-block",
            content: "4\\frac{3}{7} = \\frac{4 \\times 7 + 3}{7} = \\frac{31}{7}",
        },
        {
            type: "math-block",
            content: "2\\frac{5}{8} = \\frac{2 \\times 8 + 5}{8} = \\frac{21}{8}",
        },
        {
            type: "callout",
            kind: "info",
            title: "Мнемоніка",
            content:
                "«Ціле на дно, потім додай верх». $a\\frac{b}{c} = \\frac{a \\times c + b}{c}$. Знаменник не змінюється — він визначає розмір частин.",
        },
        {
            type: "heading",
            level: 2,
            content: "Порівняння мішаних чисел",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Порівняй цілі частини",
                "Якщо цілі однакові — порівняй дробові частини",
                "Або перетвори обидва на неправильні дроби і порівняй",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "Порівняй $3\\frac{2}{5}$ і $3\\frac{3}{7}$",
            content:
                "Цілі частини однакові (3). Порівнюємо дроби: $\\frac{2}{5}$ і $\\frac{3}{7}$. Перехресне: $2 \\times 7 = 14$, $5 \\times 3 = 15$. $14 < 15$ → $\\frac{2}{5} < \\frac{3}{7}$ → $3\\frac{2}{5} < 3\\frac{3}{7}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Від'ємні мішані числа",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Увага: від'ємні мішані числа",
            content:
                "$-2\\frac{1}{3} = -(2 + \\frac{1}{3}) = -2 - \\frac{1}{3} = -\\frac{7}{3}$. Мінус стосується всього мішаного числа — і цілої і дробової частини. Часта помилка: $-2\\frac{1}{3} \\neq -2 + \\frac{1}{3} = -\\frac{5}{3}$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Коли використовувати яку форму?",
            content:
                "Мішані числа зручні для читання і розуміння розміру: $3\\frac{1}{2}$ км легше сприймається ніж $\\frac{7}{2}$ км. Неправильні дроби зручні для обчислень: множення і ділення мішаних чисел простіше через неправильні дроби.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Перетвори $\\frac{19}{4}$ на мішане число",
            choices: ["$4\\frac{1}{4}$", "$4\\frac{3}{4}$", "$5\\frac{1}{4}$", "$5\\frac{3}{4}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "19 \\div 4 = 4 \\text{ ост. } 3",
                },
                {
                    type: "math-block",
                    content: "\\frac{19}{4} = 4\\frac{3}{4}",
                },
                {
                    type: "text",
                    content: "Перевірка: $4 \\times 4 + 3 = 19$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Перетвори $5\\frac{2}{7}$ на неправильний дріб",
            choices: ["$\\frac{35}{7}$", "$\\frac{37}{7}$", "$\\frac{39}{7}$", "$\\frac{12}{7}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "5\\frac{2}{7} = \\frac{5 \\times 7 + 2}{7} = \\frac{35 + 2}{7} = \\frac{37}{7}",
                },
                {
                    type: "text",
                    content: "Перевірка: $37 \\div 7 = 5$ ост. $2$ → $5\\frac{2}{7}$ ✓",
                },
            ],
        },
        {
            id: "q3",
            question: "Який з дробів найбільший: $\\frac{13}{4}$, $3\\frac{1}{5}$, $3\\frac{2}{7}$?",
            choices: [
                "$\\frac{13}{4}$",
                "$3\\frac{1}{5}$",
                "$3\\frac{2}{7}$",
                "Всі рівні",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Перетворюємо всі на мішані числа:",
                },
                {
                    type: "math-block",
                    content: "\\frac{13}{4} = 3\\frac{1}{4}",
                },
                {
                    type: "text",
                    content: "Всі мають цілу частину 3. Порівнюємо дробові: $\\frac{1}{4}$, $\\frac{1}{5}$, $\\frac{2}{7}$.",
                },
                {
                    type: "math-block",
                    content: "\\frac{1}{4} = 0.25, \\quad \\frac{1}{5} = 0.2, \\quad \\frac{2}{7} \\approx 0.286",
                },
                {
                    type: "text",
                    content: "$\\frac{2}{7} > \\frac{1}{4} > \\frac{1}{5}$. Найбільший: $3\\frac{2}{7}$... Стоп: $\\frac{13}{4} = 3\\frac{1}{4} = 3.25 > 3\\frac{2}{7} \\approx 3.286$? Ні: $3.286 > 3.25$. Найбільший $3\\frac{2}{7}$.",
                },
            ],
        },
        {
            id: "q4",
            question: "Чому дорівнює $-3\\frac{2}{5}$ у вигляді неправильного дробу?",
            choices: ["$\\frac{-13}{5}$", "$\\frac{-17}{5}$", "$\\frac{-8}{5}$", "$\\frac{13}{-5}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "-3\\frac{2}{5} = -\\left(3\\frac{2}{5}\\right) = -\\frac{3 \\times 5 + 2}{5} = -\\frac{17}{5}",
                },
                {
                    type: "text",
                    content: "Мінус стосується всього мішаного числа.",
                },
            ],
        },
        {
            id: "q5",
            question: "Порівняй $4\\frac{5}{6}$ і $4\\frac{7}{9}$",
            choices: [
                "$4\\frac{5}{6} < 4\\frac{7}{9}$",
                "$4\\frac{5}{6} = 4\\frac{7}{9}$",
                "$4\\frac{5}{6} > 4\\frac{7}{9}$",
                "Неможливо порівняти",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Цілі частини однакові. Порівнюємо $\\frac{5}{6}$ і $\\frac{7}{9}$:",
                },
                {
                    type: "math-block",
                    content: "5 \\times 9 = 45, \\quad 6 \\times 7 = 42",
                },
                {
                    type: "math-block",
                    content: "45 > 42 \\quad \\Rightarrow \\quad \\frac{5}{6} > \\frac{7}{9} \\quad \\Rightarrow \\quad 4\\frac{5}{6} > 4\\frac{7}{9}",
                },
            ],
        },
    ],
};

export default lesson;