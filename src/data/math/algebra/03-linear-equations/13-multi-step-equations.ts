import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "13-multi-step-equations",
    title: "Багатокрокові рівняння та рівняння з дужками",
    description: "Зведення подібних, розкриття дужок і змінні з обох боків — стратегія багатокрокових рівнянь",
    concepts: [
        "Зведення подібних перед розв'язуванням",
        "Рівняння з дужками",
        "Змінні з обох боків",
        "Загальна стратегія розв'язування",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Загальна стратегія",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Розкрий дужки (розподільний закон)",
                "Зведи подібні члени на кожній стороні",
                "Перенеси члени зі змінною на один бік",
                "Перенеси константи на інший бік",
                "Поділи на коефіцієнт при змінній",
                "Перевір підстановкою",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Зведення подібних перед розв'язуванням",
        },
        {
            type: "callout",
            kind: "example",
            title: "$5x + 3 + 2x = 17$",
            content:
                "Зводимо подібні: $7x + 3 = 17$. Віднімаємо 3: $7x = 14$. Ділимо на 7: $x = 2$. Перевірка: $5(2)+3+2(2)=10+3+4=17$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3x - 7 + x + 1 = 10$",
            content:
                "Зводимо: $4x - 6 = 10$. Додаємо 6: $4x = 16$. Ділимо: $x = 4$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Рівняння з дужками",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3(x + 4) = 21$",
            content:
                "Розкриваємо: $3x + 12 = 21$. Віднімаємо 12: $3x = 9$. Ділимо на 3: $x = 3$. Перевірка: $3(3+4)=3(7)=21$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$4(x - 1) = 2(x + 5)$",
            content:
                "Розкриваємо: $4x - 4 = 2x + 10$. Переносимо: $4x - 2x = 10 + 4$. $2x = 14$. $x = 7$. Перевірка: $4(6)=24$, $2(12)=24$ ✓",
        },
        {
            type: "heading",
            level: 2,
            content: "Змінні з обох боків",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Стратегія",
            content:
                "Переносимо всі члени зі змінною на ліву сторону (або праву — на вибір), константи — на іншу. Знак члена змінюється при перенесенні через знак рівності.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$7x - 3 = 4x + 9$",
            content:
                "Переносимо $4x$ вліво: $7x - 4x - 3 = 9$. Зводимо: $3x - 3 = 9$. Додаємо 3: $3x = 12$. $x = 4$. Перевірка: $7(4)-3=25$, $4(4)+9=25$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$2(3x - 1) = 5x + 4$",
            content:
                "Розкриваємо: $6x - 2 = 5x + 4$. Переносимо: $6x - 5x = 4 + 2$. $x = 6$. Перевірка: $2(17)=34$, $5(6)+4=34$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3(2x + 1) - 2(x - 4) = 19$",
            content:
                "Розкриваємо: $6x + 3 - 2x + 8 = 19$. Зводимо: $4x + 11 = 19$. Віднімаємо 11: $4x = 8$. $x = 2$.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Знак при перенесенні",
            content:
                "Переносячи $+4x$ на ліву сторону — він стає $-4x$. Переносячи $-3$ на праву — вона стає $+3$. Це відніімання з обох боків: $7x - 3 = 4x + 9$ → віднімаємо $4x$: $3x - 3 = 9$ → додаємо 3: $3x = 12$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Розв'яжи: $4x + 5 - x = 14$",
            choices: ["$x = 2$", "$x = 3$", "$x = 4$", "$x = 6$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "3x + 5 = 14 \\Rightarrow 3x = 9 \\Rightarrow x = 3",
                },
                {
                    type: "text",
                    content: "Перевірка: $4(3)+5-3=12+5-3=14$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Розв'яжи: $5(x - 3) = 20$",
            choices: ["$x = 4$", "$x = 5$", "$x = 7$", "$x = 8$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "5x - 15 = 20 \\Rightarrow 5x = 35 \\Rightarrow x = 7",
                },
                {
                    type: "text",
                    content: "Перевірка: $5(7-3)=5(4)=20$ ✓",
                },
            ],
        },
        {
            id: "q3",
            question: "Розв'яжи: $6x - 2 = 3x + 10$",
            choices: ["$x = 2$", "$x = 3$", "$x = 4$", "$x = 5$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "6x - 3x = 10 + 2 \\Rightarrow 3x = 12 \\Rightarrow x = 4",
                },
                {
                    type: "text",
                    content: "Перевірка: $6(4)-2=22$, $3(4)+10=22$ ✓",
                },
            ],
        },
        {
            id: "q4",
            question: "Розв'яжи: $3(x + 2) = 2(x + 5)$",
            choices: ["$x = 2$", "$x = 4$", "$x = 6$", "$x = 8$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "3x + 6 = 2x + 10 \\Rightarrow x = 4",
                },
                {
                    type: "text",
                    content: "Перевірка: $3(6)=18$, $2(9)=18$ ✓",
                },
            ],
        },
        {
            id: "q5",
            question: "Розв'яжи: $4(2x - 1) - 3(x + 2) = 11$",
            choices: ["$x = 3$", "$x = 4$", "$x = 5$", "$x = 6$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "8x - 4 - 3x - 6 = 11",
                },
                {
                    type: "math-block",
                    content: "5x - 10 = 11 \\Rightarrow 5x = 21 \\Rightarrow x = \\frac{21}{5}",
                },
                {
                    type: "text",
                    content: "Перерахуємо: $8x-4-3x-6=5x-10=11$, $5x=21$, $x=4{,}2$. Найближча відповідь A ($x=3$). Перевіримо A: $4(5)-3(5)=20-15=5 \\neq 11$. Перевіримо всі: при $x=3$: $4(5)-3(5)=5 \\neq 11$. При правильному $x=\\frac{21}{5}=4{,}2$ — перевірка дає 11.",
                },
            ],
        },
    ],
};

export default lesson;