import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "59-dividing-fractions",
    title: "Ділення дробів",
    description: "Ділення дробів через обернений дріб — чому перевертаємо і множимо, і що це означає",
    concepts: [
        "Обернений дріб (реципрокальний)",
        "Правило ділення дробів",
        "Ділення на ціле число та навпаки",
        "Комплексні дроби",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Обернений дріб",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Обернений дріб (реципрокальний)",
            content:
                "Обернений до $\\frac{a}{b}$ — це $\\frac{b}{a}$. Добуток числа і його оберненого дорівнює 1: $\\frac{a}{b} \\times \\frac{b}{a} = 1$.",
        },
        {
            type: "list",
            items: [
                "Обернений до $\\frac{3}{4}$ — це $\\frac{4}{3}$",
                "Обернений до $\\frac{2}{7}$ — це $\\frac{7}{2}$",
                "Обернений до $5 = \\frac{5}{1}$ — це $\\frac{1}{5}$",
                "Обернений до $\\frac{1}{n}$ — це $n$",
            ],
        },
        {
            type: "callout",
            kind: "warning",
            title: "Нуль не має оберненого",
            content:
                "Обернений до 0 не існує — бо $\\frac{1}{0}$ не визначено. Це пов'язано з тим що ділення на нуль заборонено.",
        },
        {
            type: "heading",
            level: 2,
            content: "Правило ділення дробів",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Ділення дробів",
            content:
                "$\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{a \\times d}{b \\times c}$. «Перевертаємо другий дріб і множимо».",
        },
        {
            type: "math-block",
            content: "\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}",
        },
        {
            type: "math-block",
            content: "\\frac{7}{8} \\div \\frac{3}{4} = \\frac{7}{8} \\times \\frac{4}{3} = \\frac{28}{24} = \\frac{7}{6} = 1\\frac{1}{6}",
        },
        {
            type: "heading",
            level: 2,
            content: "Чому перевертаємо і множимо?",
        },
        {
            type: "callout",
            kind: "info",
            title: "Математичне обґрунтування",
            content:
                "$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a/b}{c/d} = \\frac{a}{b} \\times \\frac{d}{c}$ (множимо чисельник і знаменник на $\\frac{d}{c}$). Або: ділення на $x$ = множення на $\\frac{1}{x}$. Обернений до $\\frac{c}{d}$ є $\\frac{d}{c}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Інтуїтивне пояснення",
            content:
                "$6 \\div \\frac{1}{2}$ = «скільки половин у 6?» = 12. Перевіряємо: $6 \\times \\frac{2}{1} = 12$ ✓. Поділити на $\\frac{1}{2}$ — означає помножити на 2.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення на ціле число",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} \\div n = \\frac{a}{b} \\times \\frac{1}{n} = \\frac{a}{b \\times n}",
        },
        {
            type: "math-block",
            content: "\\frac{3}{4} \\div 6 = \\frac{3}{4} \\times \\frac{1}{6} = \\frac{3}{24} = \\frac{1}{8}",
        },
        {
            type: "math-block",
            content: "\\frac{5}{6} \\div 5 = \\frac{5}{6} \\times \\frac{1}{5} = \\frac{\\cancel{5}^1}{6 \\times \\cancel{5}^1} = \\frac{1}{6}",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення цілого числа на дріб",
        },
        {
            type: "math-block",
            content: "n \\div \\frac{a}{b} = n \\times \\frac{b}{a} = \\frac{n \\times b}{a}",
        },
        {
            type: "math-block",
            content: "4 \\div \\frac{2}{3} = 4 \\times \\frac{3}{2} = \\frac{12}{2} = 6",
        },
        {
            type: "math-block",
            content: "3 \\div \\frac{3}{4} = 3 \\times \\frac{4}{3} = \\frac{\\cancel{3}^1 \\times 4}{\\cancel{3}^1} = 4",
        },
        {
            type: "heading",
            level: 2,
            content: "Комплексні дроби",
        },
        {
            type: "text",
            content:
                "Комплексний дріб — дріб у чисельнику або знаменнику якого теж є дріб:",
        },
        {
            type: "math-block",
            content: "\\frac{\\frac{3}{4}}{\\frac{2}{5}} = \\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}",
        },
        {
            type: "math-block",
            content: "\\frac{\\frac{a}{b}}{c} = \\frac{a}{bc}, \\qquad \\frac{a}{\\frac{b}{c}} = \\frac{ac}{b}",
        },
        {
            type: "callout",
            kind: "info",
            title: "Ділення дробів у програмуванні",
            content:
                "Python: $\\text{Fraction}(3,4) / \\text{Fraction}(2,5) = \\text{Fraction}(15,8)$. У мовах без дробового типу: $a/b \\div c/d = (a*d)/(b*c)$ — але обережно з цілочисельним переповненням для великих чисел.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Яке число обернене до $\\frac{5}{9}$?",
            choices: ["$\\frac{9}{5}$", "$-\\frac{5}{9}$", "$\\frac{5}{9}$", "$\\frac{1}{5}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\text{Обернений до } \\frac{5}{9} = \\frac{9}{5}",
                },
                {
                    type: "text",
                    content: "Перевірка: $\\frac{5}{9} \\times \\frac{9}{5} = \\frac{45}{45} = 1$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $\\frac{3}{5} \\div \\frac{9}{10}$",
            choices: ["$\\frac{27}{50}$", "$\\frac{2}{3}$", "$\\frac{3}{2}$", "$\\frac{6}{5}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9} = \\frac{\\cancel{3}^1 \\times \\cancel{10}^2}{\\cancel{5}^1 \\times \\cancel{9}^3} = \\frac{2}{3}",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $\\frac{7}{8} \\div 7$",
            choices: ["$\\frac{49}{8}$", "$\\frac{7}{56}$", "$\\frac{1}{8}$", "$\\frac{7}{1}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{7}{8} \\div 7 = \\frac{7}{8} \\times \\frac{1}{7} = \\frac{\\cancel{7}^1}{8 \\times \\cancel{7}^1} = \\frac{1}{8}",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $5 \\div \\frac{5}{6}$",
            choices: ["$\\frac{25}{6}$", "$\\frac{1}{6}$", "$6$", "$\\frac{6}{5}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "5 \\div \\frac{5}{6} = 5 \\times \\frac{6}{5} = \\frac{\\cancel{5}^1 \\times 6}{\\cancel{5}^1} = 6",
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли комплексний дріб: $\\dfrac{\\frac{4}{5}}{\\frac{8}{15}}$",
            choices: ["$\\frac{32}{75}$", "$\\frac{3}{2}$", "$\\frac{2}{3}$", "$\\frac{12}{40}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{4}{5} \\div \\frac{8}{15} = \\frac{4}{5} \\times \\frac{15}{8} = \\frac{\\cancel{4}^1 \\times \\cancel{15}^3}{\\cancel{5}^1 \\times \\cancel{8}^2} = \\frac{3}{2} = 1\\frac{1}{2}",
                },
            ],
        },
    ],
};

export default lesson;