import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "93-rational-arithmetic",
    title: "Арифметичні дії з раціональними числами",
    description: "Всі чотири арифметичні операції з раціональними числами — загальні формули і приклади",
    concepts: [
        "Додавання раціональних чисел",
        "Віднімання раціональних чисел",
        "Множення раціональних чисел",
        "Ділення раціональних чисел",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Раціональні числа — узагальнення дробів",
        },
        {
            type: "text",
            content:
                "Раціональні числа включають і від'ємні дроби. Всі правила арифметики дробів поширюються на раціональні числа — просто треба враховувати знак.",
        },
        {
            type: "heading",
            level: 2,
            content: "Додавання раціональних чисел",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} + \\frac{c}{d} = \\frac{a \\times d + c \\times b}{b \\times d}",
        },
        {
            type: "list",
            items: [
                "$\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{4 + 3}{12} = \\dfrac{7}{12}$",
                "$\\dfrac{-2}{5} + \\dfrac{3}{5} = \\dfrac{1}{5}$",
                "$\\dfrac{3}{4} + \\dfrac{-7}{8} = \\dfrac{6}{8} + \\dfrac{-7}{8} = \\dfrac{-1}{8}$",
                "$-\\dfrac{2}{3} + \\left(-\\dfrac{1}{4}\\right) = \\dfrac{-8-3}{12} = -\\dfrac{11}{12}$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Віднімання раціональних чисел",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} - \\frac{c}{d} = \\frac{a \\times d - c \\times b}{b \\times d}",
        },
        {
            type: "list",
            items: [
                "$\\dfrac{3}{4} - \\dfrac{1}{6} = \\dfrac{18 - 4}{24} = \\dfrac{14}{24} = \\dfrac{7}{12}$",
                "$\\dfrac{-1}{2} - \\dfrac{3}{4} = \\dfrac{-2 - 3}{4} = -\\dfrac{5}{4}$",
                "$\\dfrac{2}{3} - \\left(-\\dfrac{1}{5}\\right) = \\dfrac{2}{3} + \\dfrac{1}{5} = \\dfrac{13}{15}$",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Знак мінус перед дробом",
            content:
                "$-\\dfrac{a}{b} = \\dfrac{-a}{b} = \\dfrac{a}{-b}$. Всі три записи рівносильні. Зазвичай мінус пишуть перед рискою або у чисельнику, але не у знаменнику.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення раціональних чисел",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}",
        },
        {
            type: "list",
            items: [
                "$\\dfrac{2}{3} \\times \\dfrac{3}{4} = \\dfrac{6}{12} = \\dfrac{1}{2}$",
                "$\\dfrac{-3}{5} \\times \\dfrac{2}{7} = \\dfrac{-6}{35}$",
                "$\\dfrac{-2}{3} \\times \\dfrac{-5}{4} = \\dfrac{10}{12} = \\dfrac{5}{6}$",
                "$\\dfrac{4}{9} \\times \\dfrac{-3}{8} = \\dfrac{-12}{72} = -\\dfrac{1}{6}$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення раціональних чисел",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c} \\quad (c \\neq 0)",
        },
        {
            type: "list",
            items: [
                "$\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{3}{4} \\times \\dfrac{5}{2} = \\dfrac{15}{8} = 1\\dfrac{7}{8}$",
                "$\\dfrac{-2}{3} \\div \\dfrac{4}{9} = \\dfrac{-2}{3} \\times \\dfrac{9}{4} = \\dfrac{-18}{12} = -\\dfrac{3}{2}$",
                "$\\dfrac{-5}{6} \\div \\dfrac{-5}{6} = 1$ (ділення на себе)",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Правило знаків у дробах",
        },
        {
            type: "list",
            items: [
                "$\\frac{+}{+} = +$: $\\dfrac{2}{3} \\times \\dfrac{1}{4} = \\dfrac{2}{12} > 0$",
                "$\\frac{-}{+} = -$: $\\dfrac{-2}{3} \\times \\dfrac{1}{4} = -\\dfrac{2}{12} < 0$",
                "$\\frac{+}{-}$: записуємо як $-\\dfrac{2}{3}$",
                "$\\frac{-}{-} = +$: $\\dfrac{-2}{-3} = \\dfrac{2}{3} > 0$",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Раціональні числа утворюють поле",
            content:
                "Множина $\\mathbb{Q}$ з операціями $+$ і $\\times$ утворює поле — алгебраїчну структуру де виконуються всі основні властивості. Це означає що $\\mathbb{Q}$ замкнена відносно всіх чотирьох операцій (крім ділення на 0) і всі аксіоми поля виконуються.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $\\dfrac{-3}{4} + \\dfrac{5}{6}$",
            choices: ["$\\dfrac{1}{12}$", "$\\dfrac{-1}{12}$", "$\\dfrac{1}{6}$", "$\\dfrac{2}{10}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "НСК(4,6) = 12:",
                },
                {
                    type: "math-block",
                    content: "\\frac{-3}{4} + \\frac{5}{6} = \\frac{-9}{12} + \\frac{10}{12} = \\frac{1}{12}",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $\\dfrac{1}{2} - \\dfrac{3}{4} - \\dfrac{1}{8}$",
            choices: ["$-\\dfrac{3}{8}$", "$-\\dfrac{1}{8}$", "$\\dfrac{1}{8}$", "$\\dfrac{3}{8}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "НСК(2,4,8) = 8:",
                },
                {
                    type: "math-block",
                    content: "\\frac{4}{8} - \\frac{6}{8} - \\frac{1}{8} = \\frac{4-6-1}{8} = \\frac{-3}{8}",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $\\dfrac{-3}{5} \\times \\dfrac{-10}{9}$",
            choices: ["$-\\dfrac{2}{3}$", "$\\dfrac{2}{3}$", "$-\\dfrac{30}{45}$", "$\\dfrac{1}{3}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{-3}{5} \\times \\frac{-10}{9} = \\frac{30}{45} = \\frac{2}{3}",
                },
                {
                    type: "text",
                    content: "Мінус на мінус = плюс. Скорочуємо: $\\frac{30}{45} = \\frac{2}{3}$.",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $\\dfrac{-4}{7} \\div \\dfrac{8}{21}$",
            choices: ["$-\\dfrac{3}{2}$", "$\\dfrac{3}{2}$", "$-\\dfrac{32}{147}$", "$\\dfrac{3}{7}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{-4}{7} \\div \\frac{8}{21} = \\frac{-4}{7} \\times \\frac{21}{8} = \\frac{-4 \\times 21}{7 \\times 8} = \\frac{-84}{56} = -\\frac{3}{2}",
                },
            ],
        },
        {
            id: "q5",
            question: "Спрости: $\\dfrac{-2}{3} \\times \\dfrac{9}{4} \\div \\dfrac{-3}{2}$",
            choices: ["$-1$", "$1$", "$\\dfrac{3}{2}$", "$-\\dfrac{3}{2}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{-2}{3} \\times \\frac{9}{4} = \\frac{-18}{12} = -\\frac{3}{2}",
                },
                {
                    type: "math-block",
                    content: "-\\frac{3}{2} \\div \\frac{-3}{2} = -\\frac{3}{2} \\times \\frac{-2}{3} = \\frac{6}{6} = 1",
                },
            ],
        },
    ],
};

export default lesson;