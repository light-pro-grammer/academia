import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "27-multi-digit-multiplication",
    title: "Множення багатоцифрових чисел",
    description: "Стандартний алгоритм множення у стовпчик — від одноцифрового множника до множення двозначних чисел",
    concepts: [
        "Множення на одноцифрове число",
        "Множення на десятки і сотні",
        "Стандартний алгоритм у стовпчик",
        "Метод часткових добутків",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Множення на одноцифрове число",
        },
        {
            type: "text",
            content:
                "Починаємо з простого — множимо кожну цифру зліва направо і враховуємо перенесення:",
        },
        {
            type: "math-block",
            content:
                "\\begin{array}{r} {}^2 \\\\ 347 \\\\ \\times\\;\\; 6 \\\\ \\hline 2\\,082 \\end{array}",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Одиниці: $7 \\times 6 = 42$ → пишемо 2, переносимо 4",
                "Десятки: $4 \\times 6 + 4 = 28$ → пишемо 8, переносимо 2",
                "Сотні: $3 \\times 6 + 2 = 20$ → пишемо 20",
                "Результат: 2 082",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на числа кратні 10",
        },
        {
            type: "text",
            content:
                "Множення на 10, 100, 1000 — просто дописуємо нулі. Для кратних 10 — множимо на значущу частину і дописуємо нулі:",
        },
        {
            type: "math-block",
            content: "47 \\times 30 = 47 \\times 3 \\times 10 = 141 \\times 10 = 1\\,410",
        },
        {
            type: "math-block",
            content: "56 \\times 400 = 56 \\times 4 \\times 100 = 224 \\times 100 = 22\\,400",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод часткових добутків",
        },
        {
            type: "text",
            content:
                "Розкладаємо множники по розрядах і множимо кожну частину окремо. Наочно і без помилок:",
        },
        {
            type: "math-block",
            content: "23 \\times 45 = (20 + 3) \\times (40 + 5)",
        },
        {
            type: "math-block",
            content:
                "= 20 \\times 40 + 20 \\times 5 + 3 \\times 40 + 3 \\times 5",
        },
        {
            type: "math-block",
            content:
                "= 800 + 100 + 120 + 15 = 1\\,035",
        },
        {
            type: "callout",
            kind: "info",
            title: "Зв'язок з площею",
            content:
                "Метод часткових добутків — це площа прямокутника $23 \\times 45$ розбита на 4 менших прямокутники. Кожен часткових добуток — площа одного маленького прямокутника.",
        },
        {
            type: "heading",
            level: 2,
            content: "Стандартний алгоритм: двозначний × двозначний",
        },
        {
            type: "text",
            content:
                "Множимо на кожну цифру другого множника окремо зсуваючи результат:",
        },
        {
            type: "math-block",
            content:
                "\\begin{array}{r} 23 \\\\ \\times\\; 45 \\\\ \\hline 115 \\\\ 920\\phantom{0} \\\\ \\hline 1\\,035 \\end{array}",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Множимо 23 на 5 (одиниці 45): $23 \\times 5 = 115$",
                "Множимо 23 на 4 (десятки 45): $23 \\times 40 = 920$ (зсув на 1 позицію вліво)",
                "Складаємо: $115 + 920 = 1\\,035$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Тризначний × двозначний",
        },
        {
            type: "math-block",
            content:
                "\\begin{array}{r} 234 \\\\ \\times\\;\\; 56 \\\\ \\hline 1\\,404 \\\\ 11\\,700\\phantom{0} \\\\ \\hline 13\\,104 \\end{array}",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "$234 \\times 6 = 1\\,404$",
                "$234 \\times 50 = 11\\,700$ (зсув вліво на 1)",
                "$1\\,404 + 11\\,700 = 13\\,104$",
            ],
        },
        {
            type: "callout",
            kind: "warning",
            title: "Типова помилка — забутий зсув",
            content:
                "При множенні на десятки — результат зсувається на одну позицію вліво (або дописується нуль). При множенні на сотні — на дві позиції. Без зсуву відповідь буде неправильною.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Алгоритм Карацуби",
            content:
                "Стандартний алгоритм множення має складність $O(n^2)$ де $n$ — кількість цифр. У 1960 році Анатолій Карацуба відкрив алгоритм зі складністю $O(n^{1.585})$. Сучасні комп'ютери використовують ще швидші алгоритми для великих чисел.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $247 \\times 8$",
            choices: ["1 876", "1 966", "1 976", "2 076"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content:
                        "\\begin{array}{r} {}^5{}^3 \\\\ 247 \\\\ \\times\\;\\; 8 \\\\ \\hline 1\\,976 \\end{array}",
                },
                {
                    type: "list",
                    items: [
                        "Одиниці: $7 \\times 8 = 56$ → 6, переносимо 5",
                        "Десятки: $4 \\times 8 + 5 = 37$ → 7, переносимо 3",
                        "Сотні: $2 \\times 8 + 3 = 19$",
                    ],
                },
                {
                    type: "math-block",
                    content: "247 \\times 8 = 1\\,976",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $36 \\times 50$",
            choices: ["1 600", "1 700", "1 800", "1 900"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "36 \\times 50 = 36 \\times 5 \\times 10 = 180 \\times 10 = 1\\,800",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли методом часткових добутків: $14 \\times 23$",
            choices: ["302", "312", "322", "332"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Розкладаємо: $14 = 10 + 4$, $23 = 20 + 3$:",
                },
                {
                    type: "math-block",
                    content:
                        "14 \\times 23 = 10 \\times 20 + 10 \\times 3 + 4 \\times 20 + 4 \\times 3",
                },
                {
                    type: "math-block",
                    content:
                        "= 200 + 30 + 80 + 12 = 322",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $67 \\times 43$",
            choices: ["2 771", "2 781", "2 881", "2 891"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content:
                        "\\begin{array}{r} 67 \\\\ \\times\\; 43 \\\\ \\hline 201 \\\\ 2\\,680\\phantom{0} \\\\ \\hline 2\\,881 \\end{array}",
                },
                {
                    type: "list",
                    items: [
                        "$67 \\times 3 = 201$",
                        "$67 \\times 40 = 2\\,680$",
                        "$201 + 2\\,680 = 2\\,881$",
                    ],
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли: $125 \\times 32$",
            choices: ["3 900", "4 000", "4 100", "4 200"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Помічаємо зручну пару: $125 \\times 8 = 1\\,000$:",
                },
                {
                    type: "math-block",
                    content: "125 \\times 32 = 125 \\times 8 \\times 4 = 1\\,000 \\times 4 = 4\\,000",
                },
                {
                    type: "text",
                    content: "Або стандартний алгоритм: $125 \\times 2 = 250$, $125 \\times 30 = 3\\,750$, сума $= 4\\,000$.",
                },
            ],
        },
    ],
};

export default lesson;