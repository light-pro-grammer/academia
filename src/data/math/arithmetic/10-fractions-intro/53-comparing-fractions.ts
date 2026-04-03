import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "53-comparing-fractions",
    title: "Порівняння дробів",
    description: "Як порівнювати дроби з різними знаменниками — три методи і практичні стратегії",
    concepts: [
        "Порівняння з однаковими знаменниками",
        "Порівняння з однаковими чисельниками",
        "Зведення до спільного знаменника",
        "Перехресне множення",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Метод 1: Однакові знаменники",
        },
        {
            type: "text",
            content:
                "Якщо знаменники однакові — більший той дріб у якого більший чисельник. Логіка: частини однакового розміру — більше частин означає більше загалом.",
        },
        {
            type: "math-block",
            content: "\\frac{3}{7} < \\frac{5}{7} \\quad (\\text{однаковий знаменник, } 3 < 5)",
        },
        {
            type: "math-block",
            content: "\\frac{11}{15} > \\frac{8}{15} \\quad (\\text{однаковий знаменник, } 11 > 8)",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод 2: Однакові чисельники",
        },
        {
            type: "text",
            content:
                "Якщо чисельники однакові — більший той дріб у якого менший знаменник. Логіка: однакова кількість частин, але менший знаменник означає більші частини.",
        },
        {
            type: "math-block",
            content: "\\frac{3}{4} > \\frac{3}{7} \\quad (\\text{однаковий чисельник, } 4 < 7)",
        },
        {
            type: "math-block",
            content: "\\frac{5}{9} < \\frac{5}{6} \\quad (\\text{однаковий чисельник, } 9 > 6)",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод 3: Зведення до спільного знаменника",
        },
        {
            type: "text",
            content:
                "Знаходимо НСК знаменників і перетворюємо обидва дроби — потім порівнюємо чисельники:",
        },
        {
            type: "callout",
            kind: "example",
            title: "Порівняй $\\frac{3}{4}$ і $\\frac{5}{6}$",
            content:
                "$\\text{НСК}(4, 6) = 12$. $\\frac{3}{4} = \\frac{9}{12}$. $\\frac{5}{6} = \\frac{10}{12}$. Тепер: $\\frac{9}{12} < \\frac{10}{12}$. Отже $\\frac{3}{4} < \\frac{5}{6}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод 4: Перехресне множення",
        },
        {
            type: "text",
            content:
                "Швидкий метод без пошуку НСК. Порівнюємо $\\frac{a}{b}$ і $\\frac{c}{d}$: множимо «навхрест» і порівнюємо добутки:",
        },
        {
            type: "math-block",
            content:
                "\\frac{a}{b} \\;\\square\\; \\frac{c}{d} \\quad \\Leftrightarrow \\quad a \\times d \\;\\square\\; b \\times c",
        },
        {
            type: "callout",
            kind: "example",
            title: "Порівняй $\\frac{5}{8}$ і $\\frac{7}{11}$",
            content:
                "$5 \\times 11 = 55$ і $8 \\times 7 = 56$. $55 < 56$ → $\\frac{5}{8} < \\frac{7}{11}$.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Перехресне множення — лише для додатних знаменників",
            content:
                "Якщо знаменник від'ємний — знак нерівності змінюється при множенні. Для простоти завжди записуй дроби з додатним знаменником перед застосуванням методу.",
        },
        {
            type: "heading",
            level: 2,
            content: "Порівняння з еталонним числом",
        },
        {
            type: "text",
            content:
                "Часто зручно порівнювати дроби з $\\frac{1}{2}$ або 1 як орієнтиром:",
        },
        {
            type: "list",
            items: [
                "$\\frac{a}{b} < \\frac{1}{2}$ якщо $2a < b$",
                "$\\frac{a}{b} > \\frac{1}{2}$ якщо $2a > b$",
                "$\\frac{a}{b} < 1$ якщо $a < b$ (правильний дріб)",
                "$\\frac{a}{b} > 1$ якщо $a > b$ (неправильний дріб)",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "Порівняй $\\frac{5}{9}$ і $\\frac{7}{13}$",
            content:
                "Обидва порівнюємо з $\\frac{1}{2}$: $\\frac{5}{9}$: $2 \\times 5 = 10 > 9$ → більше $\\frac{1}{2}$. $\\frac{7}{13}$: $2 \\times 7 = 14 > 13$ → більше $\\frac{1}{2}$. Тоді перехресне: $5 \\times 13 = 65$, $9 \\times 7 = 63$. $65 > 63$ → $\\frac{5}{9} > \\frac{7}{13}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Впорядкування кількох дробів",
        },
        {
            type: "callout",
            kind: "example",
            title: "Впорядкуй від найменшого: $\\frac{2}{3}$, $\\frac{3}{5}$, $\\frac{5}{8}$",
            content:
                "НСК(3,5,8) = 120. $\\frac{2}{3} = \\frac{80}{120}$. $\\frac{3}{5} = \\frac{72}{120}$. $\\frac{5}{8} = \\frac{75}{120}$. Порядок: $\\frac{72}{120} < \\frac{75}{120} < \\frac{80}{120}$. Тобто $\\frac{3}{5} < \\frac{5}{8} < \\frac{2}{3}$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Який дріб більший: $\\frac{5}{9}$ чи $\\frac{7}{9}$?",
            choices: [
                "$\\frac{5}{9}$ — бо 5 просте число",
                "$\\frac{7}{9}$ — бо однакові знаменники і $7 > 5$",
                "Рівні",
                "Неможливо порівняти",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Однакові знаменники — порівнюємо чисельники:",
                },
                {
                    type: "math-block",
                    content: "\\frac{5}{9} < \\frac{7}{9} \\quad (5 < 7)",
                },
            ],
        },
        {
            id: "q2",
            question: "Який дріб більший: $\\frac{4}{5}$ чи $\\frac{4}{7}$?",
            choices: [
                "$\\frac{4}{7}$ — більший знаменник",
                "$\\frac{4}{5}$ — менший знаменник означає більші частини",
                "Рівні — однакові чисельники",
                "Неможливо порівняти без зведення до спільного знаменника",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Однакові чисельники — менший знаменник дає більший дріб:",
                },
                {
                    type: "math-block",
                    content: "\\frac{4}{5} > \\frac{4}{7} \\quad (5 < 7 \\Rightarrow \\text{частини більші})",
                },
            ],
        },
        {
            id: "q3",
            question: "Порівняй методом перехресного множення: $\\frac{7}{9}$ і $\\frac{5}{6}$",
            choices: [
                "$\\frac{7}{9} > \\frac{5}{6}$",
                "$\\frac{7}{9} = \\frac{5}{6}$",
                "$\\frac{7}{9} < \\frac{5}{6}$",
                "Неможливо визначити",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "7 \\times 6 = 42, \\quad 9 \\times 5 = 45",
                },
                {
                    type: "math-block",
                    content: "42 < 45 \\quad \\Rightarrow \\quad \\frac{7}{9} < \\frac{5}{6}",
                },
            ],
        },
        {
            id: "q4",
            question: "Впорядкуй від найменшого до найбільшого: $\\frac{1}{2}$, $\\frac{2}{5}$, $\\frac{3}{7}$",
            choices: [
                "$\\frac{1}{2} < \\frac{2}{5} < \\frac{3}{7}$",
                "$\\frac{2}{5} < \\frac{3}{7} < \\frac{1}{2}$",
                "$\\frac{3}{7} < \\frac{2}{5} < \\frac{1}{2}$",
                "$\\frac{2}{5} < \\frac{1}{2} < \\frac{3}{7}$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСК(2,5,7)=70. Зводимо:",
                },
                {
                    type: "math-block",
                    content: "\\frac{1}{2}=\\frac{35}{70}, \\quad \\frac{2}{5}=\\frac{28}{70}, \\quad \\frac{3}{7}=\\frac{30}{70}",
                },
                {
                    type: "math-block",
                    content: "\\frac{28}{70} < \\frac{30}{70} < \\frac{35}{70} \\quad \\Rightarrow \\quad \\frac{2}{5} < \\frac{3}{7} < \\frac{1}{2}",
                },
            ],
        },
        {
            id: "q5",
            question: "Чи більше $\\frac{8}{15}$ за $\\frac{1}{2}$?",
            choices: [
                "Ні — $\\frac{8}{15} < \\frac{1}{2}$",
                "Так — $\\frac{8}{15} > \\frac{1}{2}$",
                "Рівні",
                "Потрібно зводити до спільного знаменника",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Порівнюємо $\\frac{8}{15}$ з $\\frac{1}{2}$: $2 \\times 8 = 16 > 15$:",
                },
                {
                    type: "math-block",
                    content: "2 \\times 8 = 16 > 15 = 15 \\times 1 \\quad \\Rightarrow \\quad \\frac{8}{15} > \\frac{1}{2}",
                },
                {
                    type: "text",
                    content: "Або: $\\frac{1}{2} = \\frac{7.5}{15}$ і $8 > 7.5$ ✓",
                },
            ],
        },
    ],
};

export default lesson;