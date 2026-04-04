import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "19-solving-inequalities",
    title: "Розв'язування лінійних нерівностей",
    description: "Покрокове розв'язування нерівностей — від простих до багатокрокових з дробами і дужками",
    concepts: [
        "Нерівності на одну дію",
        "Багатокрокові нерівності",
        "Нерівності зі змінними з обох боків",
        "Особливі випадки нерівностей",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Нерівності на одну дію",
        },
        {
            type: "callout",
            kind: "example",
            title: "$x + 5 > 8$",
            content:
                "Віднімаємо 5: $x > 3$. Відповідь: $(3, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$-4x \\geq 20$",
            content:
                "Ділимо на $-4$ і змінюємо знак: $x \\leq -5$. Відповідь: $(-\\infty, -5]$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{x}{3} < -2$",
            content:
                "Множимо на $3 > 0$ — знак зберігається: $x < -6$. Відповідь: $(-\\infty, -6)$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Багатокрокові нерівності",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3x - 7 > 8$",
            content:
                "Додаємо 7: $3x > 15$. Ділимо на 3: $x > 5$. Відповідь: $(5, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$-2x + 3 \\leq 11$",
            content:
                "Віднімаємо 3: $-2x \\leq 8$. Ділимо на $-2$ і змінюємо: $x \\geq -4$. Відповідь: $[-4, +\\infty)$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нерівності зі змінними з обох боків",
        },
        {
            type: "callout",
            kind: "example",
            title: "$5x - 3 > 2x + 9$",
            content:
                "Переносимо $2x$: $3x - 3 > 9$. Додаємо 3: $3x > 12$. Ділимо: $x > 4$. Відповідь: $(4, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3(x + 2) \\leq 4x - 1$",
            content:
                "Розкриваємо: $3x + 6 \\leq 4x - 1$. Переносимо: $6 + 1 \\leq 4x - 3x$. $7 \\leq x$. Або: $x \\geq 7$. Відповідь: $[7, +\\infty)$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нерівності з дробами",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{x}{2} - \\dfrac{x}{3} > 1$",
            content:
                "НСЗ = 6. Множимо на 6: $3x - 2x > 6$. $x > 6$. Відповідь: $(6, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{2x+1}{3} \\leq \\dfrac{x-2}{2}$",
            content:
                "НСЗ = 6. Множимо: $2(2x+1) \\leq 3(x-2)$. $4x+2 \\leq 3x-6$. $x \\leq -8$. Відповідь: $(-\\infty, -8]$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Особливі випадки",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Порожня множина розв'язків",
            content:
                "Якщо при розв'язуванні отримуємо хибне твердження ($5 > 8$) — нерівність не має розв'язків. $\\emptyset$ або $\\{\\}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$x + 5 > x + 8$",
            content:
                "Віднімаємо $x$: $5 > 8$ — хибне. Жодного розв'язку: $\\emptyset$.",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Всі дійсні числа",
            content:
                "Якщо отримуємо істинне твердження ($3 < 8$) — нерівність справедлива для всіх $x \\in \\mathbb{R}$. Відповідь: $(-\\infty, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$x - 3 < x + 5$",
            content:
                "Віднімаємо $x$: $-3 < 5$ — істинне для будь-якого $x$. Відповідь: $(-\\infty, +\\infty)$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Розв'яжи: $2x + 3 < 11$",
            choices: [
                "$x < 4$, тобто $(-\\infty, 4)$",
                "$x > 4$, тобто $(4, +\\infty)$",
                "$x < 7$, тобто $(-\\infty, 7)$",
                "$x > 7$, тобто $(7, +\\infty)$",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "2x + 3 < 11 \\Rightarrow 2x < 8 \\Rightarrow x < 4",
                },
            ],
        },
        {
            id: "q2",
            question: "Розв'яжи: $-5x \\leq 20$",
            choices: [
                "$x \\leq -4$, тобто $(-\\infty, -4]$",
                "$x \\geq -4$, тобто $[-4, +\\infty)$",
                "$x \\leq 4$, тобто $(-\\infty, 4]$",
                "$x \\geq 4$, тобто $[4, +\\infty)$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Ділимо на $-5 < 0$ — знак змінюється:",
                },
                {
                    type: "math-block",
                    content: "-5x \\leq 20 \\Rightarrow x \\geq -4",
                },
            ],
        },
        {
            id: "q3",
            question: "Розв'яжи: $4x - 5 > 2x + 7$",
            choices: [
                "$x > 1$",
                "$x > 6$",
                "$x < 6$",
                "$x > 12$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "4x - 2x > 7 + 5 \\Rightarrow 2x > 12 \\Rightarrow x > 6",
                },
            ],
        },
        {
            id: "q4",
            question: "Розв'яжи: $\\dfrac{x}{4} - 1 \\geq \\dfrac{x}{6}$",
            choices: [
                "$x \\geq 8$",
                "$x \\geq 12$",
                "$x \\leq 12$",
                "$x \\geq 24$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСЗ = 12. Множимо на 12:",
                },
                {
                    type: "math-block",
                    content: "3x - 12 \\geq 2x \\Rightarrow x \\geq 12",
                },
            ],
        },
        {
            id: "q5",
            question: "Скільки розв'язків має $3x + 7 > 3x + 2$?",
            choices: [
                "Жодного",
                "Один: $x = 0$",
                "Нескінченно багато — всі дійсні числа",
                "Один: $x = 5$",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "3x + 7 > 3x + 2 \\Rightarrow 7 > 2",
                },
                {
                    type: "text",
                    content: "Істинне для будь-якого $x$ — нескінченно багато розв'язків: $(-\\infty, +\\infty)$.",
                },
            ],
        },
    ],
};

export default lesson;