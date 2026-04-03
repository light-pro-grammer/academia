import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "58-multiplying-fractions",
    title: "Множення дробів",
    description: "Множення дробів — найпростіша дія з дробами і її геометричний зміст",
    concepts: [
        "Правило множення дробів",
        "Геометричний зміст",
        "Скорочення перед множенням",
        "Множення дробу на ціле число",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Правило множення дробів",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Множення дробів",
            content:
                "$\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$. Множимо чисельники і множимо знаменники окремо.",
        },
        {
            type: "math-block",
            content: "\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}",
        },
        {
            type: "math-block",
            content: "\\frac{3}{7} \\times \\frac{5}{6} = \\frac{15}{42} = \\frac{5}{14}",
        },
        {
            type: "text",
            content:
                "На відміну від додавання — при множенні не потрібен спільний знаменник. Це робить множення дробів простішим за додавання.",
        },
        {
            type: "heading",
            level: 2,
            content: "Геометричний зміст",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{2}{3}$ від $\\frac{3}{4}$",
            content:
                "«$\\frac{2}{3}$ від $\\frac{3}{4}$» означає $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$. Геометрично: прямокутник $\\frac{3}{4} \\times \\frac{2}{3}$ від одиничного квадрата має площу $\\frac{1}{2}$.",
        },
        {
            type: "text",
            content:
                "Множення дробу на дріб менший за 1 завжди дає результат менший за початковий дріб. $\\frac{3}{4} \\times \\frac{2}{3} = \\frac{1}{2} < \\frac{3}{4}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Скорочення перед множенням",
        },
        {
            type: "text",
            content:
                "Можна скорочувати чисельник одного дробу зі знаменником іншого до множення — це спрощує обчислення:",
        },
        {
            type: "math-block",
            content: "\\frac{3}{8} \\times \\frac{4}{9} = \\frac{\\cancel{3}^1}{\\cancel{8}^2} \\times \\frac{\\cancel{4}^1}{\\cancel{9}^3} = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}",
        },
        {
            type: "callout",
            kind: "example",
            title: "Скорочення діагонально",
            content:
                "$\\frac{7}{12} \\times \\frac{8}{21}$: $7$ і $21$ — НСД = 7. $12$ і $8$ — НСД = 4. $\\frac{\\cancel{7}^1}{\\cancel{12}^3} \\times \\frac{\\cancel{8}^2}{\\cancel{21}^3} = \\frac{1}{3} \\times \\frac{2}{3} = \\frac{2}{9}$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Чому можна скорочувати до множення?",
            content:
                "$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$. Якщо $k$ ділить $a$ і $d$: $\\frac{(a/k) \\cdot c}{b \\cdot (d/k)}$ — те саме число. Скорочення — застосування основної властивості дробу до добутку.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення дробу на ціле число",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} \\times n = \\frac{a \\times n}{b}",
        },
        {
            type: "math-block",
            content: "\\frac{3}{5} \\times 4 = \\frac{3 \\times 4}{5} = \\frac{12}{5} = 2\\frac{2}{5}",
        },
        {
            type: "math-block",
            content: "\\frac{7}{6} \\times 3 = \\frac{7 \\times \\cancel{3}^1}{\\cancel{6}^2} = \\frac{7}{2} = 3\\frac{1}{2}",
        },
        {
            type: "heading",
            level: 2,
            content: "Степінь дробу",
        },
        {
            type: "math-block",
            content: "\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}",
        },
        {
            type: "math-block",
            content: "\\left(\\frac{2}{3}\\right)^3 = \\frac{2^3}{3^3} = \\frac{8}{27}",
        },
        {
            type: "math-block",
            content: "\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Дріб менший за 1 у степені — стає ще меншим",
            content:
                "$\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4} < \\frac{1}{2}$. $\\left(\\frac{1}{2}\\right)^{10} = \\frac{1}{1024}$ — дуже мале. Навпаки: $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4} > \\frac{3}{2}$ — більше за 1 у степені зростає.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $\\frac{3}{5} \\times \\frac{2}{7}$",
            choices: ["$\\frac{5}{12}$", "$\\frac{6}{35}$", "$\\frac{6}{12}$", "$\\frac{1}{6}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{3}{5} \\times \\frac{2}{7} = \\frac{3 \\times 2}{5 \\times 7} = \\frac{6}{35}",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли зі скороченням: $\\frac{4}{9} \\times \\frac{3}{8}$",
            choices: ["$\\frac{12}{72}$", "$\\frac{1}{6}$", "$\\frac{7}{17}$", "$\\frac{1}{4}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Скорочуємо 4 і 8 (на 4), скорочуємо 3 і 9 (на 3):",
                },
                {
                    type: "math-block",
                    content: "\\frac{\\cancel{4}^1}{\\cancel{9}^3} \\times \\frac{\\cancel{3}^1}{\\cancel{8}^2} = \\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $\\frac{5}{6} \\times 9$",
            choices: ["$\\frac{45}{6}$", "$\\frac{14}{6}$", "$\\frac{15}{2}$", "$7\\frac{1}{2}$"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{5}{6} \\times 9 = \\frac{5 \\times \\cancel{9}^3}{\\cancel{6}^2} = \\frac{15}{2} = 7\\frac{1}{2}",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $\\left(\\frac{2}{5}\\right)^2$",
            choices: ["$\\frac{4}{5}$", "$\\frac{4}{10}$", "$\\frac{4}{25}$", "$\\frac{2}{25}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "\\left(\\frac{2}{5}\\right)^2 = \\frac{2^2}{5^2} = \\frac{4}{25}",
                },
            ],
        },
        {
            id: "q5",
            question: "Знайди $\\frac{3}{4}$ від числа 48",
            choices: ["$32$", "$36$", "$40$", "$44$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{3}{4} \\times 48 = \\frac{3 \\times \\cancel{48}^{12}}{\\cancel{4}} = 3 \\times 12 = 36",
                },
            ],
        },
    ],
};

export default lesson;