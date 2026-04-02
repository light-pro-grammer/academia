import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "26-multiplication-table",
    title: "Таблиця множення та базові факти",
    description: "Стратегії вивчення таблиці множення — від простих закономірностей до складних фактів",
    concepts: [
        "Таблиця множення 0–12",
        "Закономірності для кожного множника",
        "Квадрати чисел",
        "Стратегії запам'ятовування",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Чому важливо знати таблицю напам'ять",
        },
        {
            type: "text",
            content:
                "Таблиця множення — фундамент всієї подальшої математики. Ділення, дроби, алгебра, факторизація — все це стає набагато простішим коли базові факти множення автоматичні. Мета: відповідь за менш ніж 3 секунди без обчислення.",
        },
        {
            type: "heading",
            level: 2,
            content: "Прості множники — тривіальні факти",
        },
        {
            type: "callout",
            kind: "info",
            title: "Множення на 0",
            content: "Завжди 0. $0 \\times n = 0$ для будь-якого $n$. 13 фактів — миттєво.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Множення на 1",
            content: "Завжди те саме число. $1 \\times n = n$. 13 фактів — миттєво.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Множення на 2",
            content: "Подвоєння числа. $2 \\times n = n + n$. $2 \\times 7 = 14$, $2 \\times 9 = 18$. Легко через додавання.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Множення на 10",
            content: "Дописати нуль праворуч. $10 \\times 7 = 70$, $10 \\times 12 = 120$. Миттєво.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на 5",
        },
        {
            type: "text",
            content:
                "Результат завжди закінчується на 0 або 5. Закономірність: $5 \\times n = \\frac{10 \\times n}{2}$:",
        },
        {
            type: "math-block",
            content:
                "5 \\times 6 = \\frac{10 \\times 6}{2} = \\frac{60}{2} = 30",
        },
        {
            type: "list",
            items: [
                "$5 \\times 1 = 5$, $5 \\times 2 = 10$, $5 \\times 3 = 15$, $5 \\times 4 = 20$",
                "$5 \\times 5 = 25$, $5 \\times 6 = 30$, $5 \\times 7 = 35$, $5 \\times 8 = 40$",
                "$5 \\times 9 = 45$, $5 \\times 10 = 50$, $5 \\times 11 = 55$, $5 \\times 12 = 60$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на 9",
        },
        {
            type: "text",
            content:
                "Сума цифр добутку завжди дорівнює 9 (для однозначних множників). І є зручний трюк:",
        },
        {
            type: "math-block",
            content: "9 \\times n = 10 \\times n - n",
        },
        {
            type: "callout",
            kind: "example",
            title: "Трюк з пальцями для 9",
            content:
                "$9 \\times 7$: загни 7-й палець. Зліва від нього — 6 пальців (десятки), справа — 3 пальці (одиниці). Відповідь: 63. Перевірка: $6 + 3 = 9$ ✓",
        },
        {
            type: "list",
            items: [
                "$9 \\times 1 = 9$, $9 \\times 2 = 18$, $9 \\times 3 = 27$, $9 \\times 4 = 36$",
                "$9 \\times 5 = 45$, $9 \\times 6 = 54$, $9 \\times 7 = 63$, $9 \\times 8 = 72$",
                "$9 \\times 9 = 81$, $9 \\times 10 = 90$, $9 \\times 11 = 99$, $9 \\times 12 = 108$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на 11",
        },
        {
            type: "text",
            content:
                "Для однозначних чисел — просто дублюємо цифру:",
        },
        {
            type: "math-block",
            content: "11 \\times 7 = 77, \\quad 11 \\times 8 = 88, \\quad 11 \\times 9 = 99",
        },
        {
            type: "heading",
            level: 2,
            content: "Квадрати чисел",
        },
        {
            type: "text",
            content:
                "Квадрати — діагональ таблиці Піфагора. Варто знати напам'ять до $12^2$:",
        },
        {
            type: "math-block",
            content:
                "1^2=1,\\; 2^2=4,\\; 3^2=9,\\; 4^2=16,\\; 5^2=25,\\; 6^2=36",
        },
        {
            type: "math-block",
            content:
                "7^2=49,\\; 8^2=64,\\; 9^2=81,\\; 10^2=100,\\; 11^2=121,\\; 12^2=144",
        },
        {
            type: "heading",
            level: 2,
            content: "Складні факти — стратегії",
        },
        {
            type: "text",
            content:
                "Найважчі факти: $6 \\times 7$, $6 \\times 8$, $7 \\times 8$. Стратегії:",
        },
        {
            type: "list",
            items: [
                "$6 \\times 7 = 42$: запам'ятати як факт або через $6 \\times 7 = 6 \\times 6 + 6 = 36 + 6 = 42$",
                "$6 \\times 8 = 48$: $6 \\times 8 = 6 \\times 4 \\times 2 = 24 \\times 2 = 48$",
                "$7 \\times 8 = 56$: мнемоніка «5, 6, 7, 8» → $56 = 7 \\times 8$",
                "$8 \\times 9 = 72$: через $8 \\times 10 - 8 = 80 - 8 = 72$",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Скільки фактів треба вивчити?",
            content:
                "Таблиця $10 \\times 10$ = 100 фактів. Завдяки переставній властивості — лише 55 унікальних. Відняти тривіальні (×0, ×1, ×10) — залишається близько 28 фактів що треба активно вивчити.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Використай закономірність для ×9: $9 \\times 8 = ?$",
            choices: ["63", "72", "81", "64"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Використовуємо формулу $9 \\times n = 10n - n$:",
                },
                {
                    type: "math-block",
                    content: "9 \\times 8 = 10 \\times 8 - 8 = 80 - 8 = 72",
                },
                {
                    type: "text",
                    content: "Перевірка: сума цифр $7 + 2 = 9$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Знайди $7 \\times 7$",
            choices: ["42", "48", "49", "56"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "$7^2$ — квадрат числа 7. Це один з фактів що треба знати напам'ять:",
                },
                {
                    type: "math-block",
                    content: "7 \\times 7 = 49",
                },
                {
                    type: "text",
                    content: "Або через розподільну властивість: $7 \\times 7 = 7 \\times (5+2) = 35 + 14 = 49$.",
                },
            ],
        },
        {
            id: "q3",
            question: "Знайди $6 \\times 8$ використовуючи подвоєння",
            choices: ["42", "46", "48", "54"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Стратегія подвоєння: $6 \\times 8 = 6 \\times 4 \\times 2$:",
                },
                {
                    type: "math-block",
                    content: "6 \\times 4 = 24 \\quad \\Rightarrow \\quad 24 \\times 2 = 48",
                },
                {
                    type: "text",
                    content: "Або: $6 \\times 8 = (5+1) \\times 8 = 40 + 8 = 48$.",
                },
            ],
        },
        {
            id: "q4",
            question: "Яке число є квадратом: $\\sqrt{144} = ?$",
            choices: ["11", "12", "13", "14"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Шукаємо число яке помножене само на себе дає 144:",
                },
                {
                    type: "math-block",
                    content: "12 \\times 12 = 144 \\quad \\Rightarrow \\quad \\sqrt{144} = 12",
                },
                {
                    type: "text",
                    content: "Квадрати до 12: ..., $11^2=121$, $12^2=144$, $13^2=169$.",
                },
            ],
        },
        {
            id: "q5",
            question: "Знайди $5 \\times 16$ використовуючи закономірність для ×5",
            choices: ["70", "75", "80", "85"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Використовуємо формулу $5 \\times n = \\frac{10n}{2}$:",
                },
                {
                    type: "math-block",
                    content: "5 \\times 16 = \\frac{10 \\times 16}{2} = \\frac{160}{2} = 80",
                },
                {
                    type: "text",
                    content: "Або: $5 \\times 16 = 5 \\times 10 + 5 \\times 6 = 50 + 30 = 80$.",
                },
            ],
        },
    ],
};

export default lesson;