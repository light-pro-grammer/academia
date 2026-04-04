import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "07-distributive-property",
    title: "Розподільний закон та розкриття дужок",
    description: "Розкриття дужок з додатним і від'ємним множником, дробами і знаками ±",
    concepts: [
        "Розкриття з додатним множником",
        "Розкриття з від'ємним множником",
        "Знаки + і - перед дужками",
        "Усна лічба через розподільний закон",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Розподільний закон — нагадування",
        },
        {
            type: "math-block",
            content: "a(b + c) = ab + ac \\qquad a(b - c) = ab - ac",
        },
        {
            type: "text",
            content:
                "Множник перед дужками множиться на кожен член всередині. Знаки членів при цьому враховуються.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на додатний одночлен",
        },
        {
            type: "callout",
            kind: "example",
            title: "$4(3x - 2)$",
            content:
                "$4 \\cdot 3x + 4 \\cdot (-2) = 12x - 8$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$5(2x + 3y - 1)$",
            content:
                "$5 \\cdot 2x + 5 \\cdot 3y + 5 \\cdot (-1) = 10x + 15y - 5$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на від'ємне число",
        },
        {
            type: "callout",
            kind: "example",
            title: "$-3(2x + 5)$",
            content:
                "$(-3)(2x) + (-3)(5) = -6x - 15$. Всі знаки змінюються на протилежні.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$-2(4x - 7)$",
            content:
                "$(-2)(4x) + (-2)(-7) = -8x + 14$. Мінус на мінус дає плюс.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Множення на від'ємне — всі знаки змінюються",
            content:
                "$-(3x - 5) = -3x + 5$. $-(-2x + 1) = 2x - 1$. Перевіряй кожен член.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на дріб",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{1}{2}(6x - 4)$",
            content:
                "$\\frac{1}{2} \\cdot 6x - \\frac{1}{2} \\cdot 4 = 3x - 2$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{2}{3}(9x + 6)$",
            content:
                "$\\frac{2}{3} \\cdot 9x + \\frac{2}{3} \\cdot 6 = 6x + 4$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Знак + і − перед дужками",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Знак + перед дужками",
            content:
                "$+(3x - 2) = 3x - 2$. Знак «плюс» перед дужками не змінює членів. Можна просто прибрати дужки.",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Знак − перед дужками",
            content:
                "$-(3x - 2) = -3x + 2$. Знак «мінус» перед дужками змінює знак кожного члена на протилежний. Це множення на $-1$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Усна лічба через розподільний закон",
        },
        {
            type: "callout",
            kind: "example",
            title: "$7 \\times 98$",
            content:
                "$7 \\times (100 - 2) = 700 - 14 = 686$. Складне множення → просте через розкладання.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$6 \\times 47$",
            content:
                "$6 \\times (40 + 7) = 240 + 42 = 282$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Розподільний закон у коді",
            content:
                "Компілятори автоматично застосовують дистрибутивність для оптимізації: $a*(b+c)$ може бути перетворено на $a*b + a*c$ або навпаки залежно від контексту. Це один з найчастіших алгебраїчних перетворень у програмуванні.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Розкрий дужки: $6(2x - 5)$",
            choices: ["$12x - 30$", "$12x - 5$", "$12x + 30$", "$8x - 30$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "6(2x - 5) = 6 \\cdot 2x + 6 \\cdot (-5) = 12x - 30",
                },
            ],
        },
        {
            id: "q2",
            question: "Розкрий дужки: $-4(3x - 7)$",
            choices: ["$-12x - 28$", "$-12x + 28$", "$12x - 28$", "$-7x + 28$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "-4(3x - 7) = (-4)(3x) + (-4)(-7) = -12x + 28",
                },
            ],
        },
        {
            id: "q3",
            question: "Розкрий дужки: $-(5x - 3)$",
            choices: ["$5x - 3$", "$5x + 3$", "$-5x - 3$", "$-5x + 3$"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "-(5x - 3) = -1 \\cdot 5x + (-1)(-3) = -5x + 3",
                },
            ],
        },
        {
            id: "q4",
            question: "Розкрий дужки: $\\frac{1}{3}(9x + 12)$",
            choices: ["$3x + 4$", "$3x + 12$", "$9x + 4$", "$27x + 36$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{1}{3}(9x + 12) = \\frac{9x}{3} + \\frac{12}{3} = 3x + 4",
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли усно: $8 \\times 97$",
            choices: ["$756$", "$776$", "$796$", "$816$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "8 \\times 97 = 8(100 - 3) = 800 - 24 = 776",
                },
            ],
        },
    ],
};

export default lesson;