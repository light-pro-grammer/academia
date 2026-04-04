import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "12-one-two-step-equations",
    title: "Рівняння на одну та дві дії",
    description: "Розв'язування простих рівнянь через одну або дві обернені операції",
    concepts: [
        "Рівняння на одну дію",
        "Рівняння з дробовими коефіцієнтами",
        "Рівняння на дві дії",
        "Змінна у знаменнику",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Рівняння на одну дію — додавання і віднімання",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Принцип",
            content:
                "Щоб розв'язати $x + a = b$ — відніми $a$ від обох частин. Щоб розв'язати $x - a = b$ — додай $a$ до обох частин.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$x + 7 = 12$",
            content:
                "Віднімаємо 7 від обох частин: $x + 7 - 7 = 12 - 7$. $x = 5$. Перевірка: $5 + 7 = 12$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$x - 4 = -3$",
            content:
                "Додаємо 4 до обох частин: $x - 4 + 4 = -3 + 4$. $x = 1$. Перевірка: $1 - 4 = -3$ ✓",
        },
        {
            type: "heading",
            level: 2,
            content: "Рівняння на одну дію — множення і ділення",
        },
        {
            type: "callout",
            kind: "example",
            title: "$5x = 35$",
            content:
                "Ділимо обидві частини на 5: $\\dfrac{5x}{5} = \\dfrac{35}{5}$. $x = 7$. Перевірка: $5(7) = 35$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{x}{4} = -6$",
            content:
                "Множимо обидві частини на 4: $\\dfrac{x}{4} \\times 4 = -6 \\times 4$. $x = -24$. Перевірка: $\\dfrac{-24}{4} = -6$ ✓",
        },
        {
            type: "heading",
            level: 2,
            content: "Рівняння з дробовими коефіцієнтами",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{3}{4}x = 12$",
            content:
                "Множимо на обернений дріб $\\dfrac{4}{3}$: $x = 12 \\times \\dfrac{4}{3} = \\dfrac{48}{3} = 16$. Перевірка: $\\dfrac{3}{4}(16) = 12$ ✓",
        },
        {
            type: "callout",
            kind: "info",
            title: "Прийом: множити на обернений дріб",
            content:
                "Для $\\dfrac{a}{b}x = c$ → $x = c \\times \\dfrac{b}{a} = \\dfrac{bc}{a}$. Швидше ніж ділити на дріб.",
        },
        {
            type: "heading",
            level: 2,
            content: "Рівняння на дві дії",
        },
        {
            type: "text",
            content:
                "Стратегія: спочатку скасовуємо додавання/віднімання, потім множення/ділення — зворотній порядок до порядку дій.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$2x + 5 = 13$",
            content:
                "Крок 1 — відніми 5: $2x = 8$. Крок 2 — поділи на 2: $x = 4$. Перевірка: $2(4)+5=13$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$-3x - 4 = 11$",
            content:
                "Крок 1 — додай 4: $-3x = 15$. Крок 2 — поділи на $-3$: $x = -5$. Перевірка: $-3(-5)-4=15-4=11$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{x}{3} - 2 = 4$",
            content:
                "Крок 1 — додай 2: $\\dfrac{x}{3} = 6$. Крок 2 — помножи на 3: $x = 18$. Перевірка: $\\dfrac{18}{3}-2=6-2=4$ ✓",
        },
        {
            type: "heading",
            level: 2,
            content: "Змінна у знаменнику",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{5}{x} = 2$",
            content:
                "Множимо обидві частини на $x$ (при $x \\neq 0$): $5 = 2x$. Ділимо на 2: $x = \\dfrac{5}{2} = 2{,}5$. Перевірка: $\\dfrac{5}{2{,}5} = 2$ ✓",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Змінна у знаменнику: обов'язкова умова",
            content:
                "При $\\dfrac{a}{x} = b$ — множимо на $x$ і одразу зазначаємо $x \\neq 0$. Знаменник не може дорівнювати нулю.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Розв'яжи: $x + 13 = 5$",
            choices: ["$x = 18$", "$x = -8$", "$x = 8$", "$x = -18$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "x + 13 - 13 = 5 - 13 \\quad \\Rightarrow \\quad x = -8",
                },
                {
                    type: "text",
                    content: "Перевірка: $-8 + 13 = 5$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Розв'яжи: $-7x = 42$",
            choices: ["$x = 6$", "$x = -6$", "$x = 49$", "$x = -49$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "x = \\frac{42}{-7} = -6",
                },
                {
                    type: "text",
                    content: "Перевірка: $-7(-6) = 42$ ✓",
                },
            ],
        },
        {
            id: "q3",
            question: "Розв'яжи: $\\dfrac{2}{3}x = 18$",
            choices: ["$x = 12$", "$x = 24$", "$x = 27$", "$x = 36$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "x = 18 \\times \\frac{3}{2} = \\frac{54}{2} = 27",
                },
                {
                    type: "text",
                    content: "Перевірка: $\\frac{2}{3}(27) = 18$ ✓",
                },
            ],
        },
        {
            id: "q4",
            question: "Розв'яжи: $4x - 9 = 15$",
            choices: ["$x = 1{,}5$", "$x = 4$", "$x = 6$", "$x = 24$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "4x = 15 + 9 = 24 \\quad \\Rightarrow \\quad x = 6",
                },
                {
                    type: "text",
                    content: "Перевірка: $4(6)-9=24-9=15$ ✓",
                },
            ],
        },
        {
            id: "q5",
            question: "Розв'яжи: $\\dfrac{12}{x} = 4$",
            choices: ["$x = 3$", "$x = 8$", "$x = 16$", "$x = 48$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "12 = 4x \\quad \\Rightarrow \\quad x = \\frac{12}{4} = 3",
                },
                {
                    type: "text",
                    content: "Перевірка: $\\frac{12}{3} = 4$ ✓",
                },
            ],
        },
    ],
};

export default lesson;