import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "47-multiples",
    title: "Кратні числа та НСК",
    description: "Кратні числа — нескінченна послідовність і найменше спільне кратне двох або більше чисел",
    concepts: [
        "Означення кратного числа",
        "Послідовність кратних",
        "Спільні кратні",
        "Найменше спільне кратне (НСК)",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Що таке кратне число?",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Кратне число",
            content:
                "Число $m$ є кратним числа $n$ якщо $m = n \\times k$ для деякого цілого $k$. Тобто $n$ ділить $m$ без остачі. Позначення: $n \\mid m$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Кратні числа 4",
            content:
                "$4, 8, 12, 16, 20, 24, 28, \\ldots$ — це $4 \\times 1, 4 \\times 2, 4 \\times 3, \\ldots$. Послідовність кратних нескінченна.",
        },
        {
            type: "heading",
            level: 2,
            content: "Зв'язок між дільниками і кратними",
        },
        {
            type: "text",
            content:
                "Дільники і кратні — дві сторони однієї монети:",
        },
        {
            type: "math-block",
            content: "3 \\mid 12 \\quad \\Leftrightarrow \\quad 12 \\text{ кратне } 3 \\quad \\Leftrightarrow \\quad 3 \\text{ дільник } 12",
        },
        {
            type: "text",
            content:
                "«12 є кратним 3» і «3 є дільником 12» — це те саме твердження.",
        },
        {
            type: "heading",
            level: 2,
            content: "Спільні кратні",
        },
        {
            type: "text",
            content:
                "Спільне кратне двох чисел — число яке є кратним обох одночасно:",
        },
        {
            type: "callout",
            kind: "example",
            title: "Спільні кратні 4 і 6",
            content:
                "Кратні 4: $4, 8, 12, 16, 20, 24, 28, \\ldots$. Кратні 6: $6, 12, 18, 24, 30, \\ldots$. Спільні: $12, 24, 36, 48, \\ldots$ — через кожні 12.",
        },
        {
            type: "heading",
            level: 2,
            content: "Найменше спільне кратне (НСК)",
        },
        {
            type: "callout",
            kind: "definition",
            title: "НСК",
            content:
                "Найменше спільне кратне (НСК) двох або більше чисел — найменше додатне число яке ділиться на кожне з них. Позначення: $\\text{НСК}(a, b)$ або $\\text{lcm}(a, b)$.",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(4, 6) = 12",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(3, 5) = 15",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(6, 10) = 30",
        },
        {
            type: "heading",
            level: 2,
            content: "Методи знаходження НСК",
        },
        {
            type: "heading",
            level: 3,
            content: "Метод 1: перелік кратних",
        },
        {
            type: "text",
            content:
                "Виписуємо кратні кожного числа поки не знайдемо спільне:",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(8, 12):",
        },
        {
            type: "list",
            items: [
                "Кратні 8: $8, 16, 24, 32, \\ldots$",
                "Кратні 12: $12, 24, \\ldots$",
                "Перше спільне: $24$",
            ],
        },
        {
            type: "heading",
            level: 3,
            content: "Метод 2: через НСД",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(a, b) = \\frac{a \\times b}{\\text{НСД}(a, b)}",
        },
        {
            type: "callout",
            kind: "example",
            title: "НСК(8, 12) через НСД",
            content:
                "$\\text{НСД}(8, 12) = 4$. $\\text{НСК}(8, 12) = \\frac{8 \\times 12}{4} = \\frac{96}{4} = 24$.",
        },
        {
            type: "heading",
            level: 3,
            content: "Метод 3: через розклад на прості множники",
        },
        {
            type: "text",
            content:
                "Розкладаємо обидва числа і беремо кожен простий множник з найбільшим показником:",
        },
        {
            type: "math-block",
            content: "8 = 2^3, \\quad 12 = 2^2 \\times 3",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(8, 12) = 2^3 \\times 3 = 8 \\times 3 = 24",
        },
        {
            type: "heading",
            level: 2,
            content: "НСК трьох і більше чисел",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(4, 6, 10) = ?",
        },
        {
            type: "math-block",
            content: "4 = 2^2, \\quad 6 = 2 \\times 3, \\quad 10 = 2 \\times 5",
        },
        {
            type: "math-block",
            content: "\\text{НСК} = 2^2 \\times 3 \\times 5 = 60",
        },
        {
            type: "heading",
            level: 2,
            content: "Застосування НСК",
        },
        {
            type: "list",
            items: [
                "Додавання дробів — спільний знаменник",
                "Задачі про повторювані події (через скільки хвилин зустрінуться)",
                "Синхронізація у програмуванні",
                "Розклад занять — коли збігаються предмети",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "Задача про автобуси",
            content:
                "Автобус маршруту А відходить кожні 8 хвилин, маршруту Б — кожні 12 хвилин. Через скільки хвилин вони відійдуть одночасно? $\\text{НСК}(8, 12) = 24$ хвилини.",
        },
        {
            type: "callout",
            kind: "info",
            title: "НСК у програмуванні",
            content:
                "Python 3.9+: $\\text{math.lcm}(a, b)$. Раніше: $\\text{lcm}(a,b) = a * b // \\text{math.gcd}(a, b)$. Використовується для синхронізації таймерів, розрахунку частот і роботи з дробами.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Яке найменше кратне числа 7 що більше за 40?",
            choices: ["$42$", "$46$", "$49$", "$56$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Кратні 7: $7, 14, 21, 28, 35, 42, 49, \\ldots$",
                },
                {
                    type: "text",
                    content: "Перше кратне більше за 40: $42 = 7 \\times 6$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Знайди $\\text{НСК}(6, 9)$",
            choices: ["$3$", "$18$", "$27$", "$54$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "6 = 2 \\times 3, \\quad 9 = 3^2",
                },
                {
                    type: "math-block",
                    content: "\\text{НСК}(6, 9) = 2 \\times 3^2 = 18",
                },
                {
                    type: "text",
                    content: "Перевірка: $18 \\div 6 = 3$ ✓, $18 \\div 9 = 2$ ✓",
                },
            ],
        },
        {
            id: "q3",
            question: "Знайди $\\text{НСК}(15, 20)$",
            choices: ["$5$", "$40$", "$60$", "$300$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "15 = 3 \\times 5, \\quad 20 = 2^2 \\times 5",
                },
                {
                    type: "math-block",
                    content: "\\text{НСК}(15, 20) = 2^2 \\times 3 \\times 5 = 60",
                },
                {
                    type: "text",
                    content: "Або через НСД: $\\text{НСД}(15,20)=5$, $\\text{НСК} = 15 \\times 20 / 5 = 60$ ✓",
                },
            ],
        },
        {
            id: "q4",
            question: "Лампочка А блимає кожні 4 секунди, Б — кожні 6 секунд, В — кожні 10 секунд. Через скільки секунд усі три блиснуть одночасно?",
            choices: ["$20$", "$30$", "$40$", "$60$"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "4 = 2^2, \\quad 6 = 2 \\times 3, \\quad 10 = 2 \\times 5",
                },
                {
                    type: "math-block",
                    content: "\\text{НСК}(4, 6, 10) = 2^2 \\times 3 \\times 5 = 60 \\text{ секунд}",
                },
            ],
        },
        {
            id: "q5",
            question: "Яке твердження правильне для $\\text{НСК}(a, b)$?",
            choices: [
                "$\\text{НСК}(a,b) = a \\times b$ завжди",
                "$\\text{НСК}(a,b) \\leq a \\times b$ завжди",
                "$\\text{НСК}(a,b) \\geq \\max(a,b)$ завжди",
                "Обидві B і C правильні",
            ],
            correctIndex: 3,
            solution: [
                {
                    type: "text",
                    content: "НСК завжди $\\geq$ обох чисел (бо ділиться на кожне):",
                },
                {
                    type: "math-block",
                    content: "\\text{НСК}(a,b) \\geq \\max(a,b)",
                },
                {
                    type: "text",
                    content: "І завжди $\\leq a \\times b$ (бо $a \\times b$ саме є спільним кратним):",
                },
                {
                    type: "math-block",
                    content: "\\text{НСК}(a,b) = \\frac{a \\times b}{\\text{НСД}(a,b)} \\leq a \\times b",
                },
            ],
        },
    ],
};

export default lesson;