import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "94-rational-properties",
    title: "Властивості раціональних чисел",
    description: "Щільність, замкненість, арифметичні властивості і впорядкування раціональних чисел",
    concepts: [
        "Щільність раціональних чисел",
        "Замкненість відносно операцій",
        "Адитивно і мультиплікативно обернені",
        "Порівняння і впорядкування",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Щільність раціональних чисел",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Щільність $\\mathbb{Q}$",
            content:
                "Між будь-якими двома різними раціональними числами $a < b$ завжди існує інше раціональне число. Тому між будь-якими двома раціональними числами є нескінченно багато інших раціональних.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Знайти раціональне між $\\frac{1}{3}$ і $\\frac{1}{2}$",
            content:
                "Метод середнього: $\\dfrac{\\frac{1}{3} + \\frac{1}{2}}{2} = \\dfrac{\\frac{5}{6}}{2} = \\dfrac{5}{12}$. Перевірка: $\\frac{1}{3} = \\frac{4}{12} < \\frac{5}{12} < \\frac{6}{12} = \\frac{1}{2}$ ✓",
        },
        {
            type: "heading",
            level: 2,
            content: "Замкненість відносно операцій",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Замкненість",
            content:
                "Множина замкнена відносно операції якщо результат операції завжди належить тій самій множині. $\\mathbb{Q}$ замкнена відносно $+$, $-$, $\\times$, $\\div$ (крім ділення на 0).",
        },
        {
            type: "list",
            items: [
                "$\\frac{p_1}{q_1} + \\frac{p_2}{q_2} = \\frac{p_1 q_2 + p_2 q_1}{q_1 q_2} \\in \\mathbb{Q}$ ✓",
                "$\\frac{p_1}{q_1} \\times \\frac{p_2}{q_2} = \\frac{p_1 p_2}{q_1 q_2} \\in \\mathbb{Q}$ ✓",
                "$\\frac{p_1}{q_1} \\div \\frac{p_2}{q_2} = \\frac{p_1 q_2}{q_1 p_2} \\in \\mathbb{Q}$ (якщо $p_2 \\neq 0$) ✓",
            ],
        },
        {
            type: "callout",
            kind: "warning",
            title: "$\\mathbb{Q}$ не замкнена відносно кореня",
            content:
                "$\\sqrt{2} \\notin \\mathbb{Q}$ — хоча $2 \\in \\mathbb{Q}$. Тому $\\mathbb{Q}$ не замкнена відносно операції квадратного кореня.",
        },
        {
            type: "heading",
            level: 2,
            content: "Арифметичні властивості",
        },
        {
            type: "text",
            content:
                "Для раціональних чисел виконуються всі базові арифметичні властивості:",
        },
        {
            type: "list",
            items: [
                "Переставна: $\\frac{a}{b} + \\frac{c}{d} = \\frac{c}{d} + \\frac{a}{b}$",
                "Сполучна: $\\left(\\frac{a}{b} + \\frac{c}{d}\\right) + \\frac{e}{f} = \\frac{a}{b} + \\left(\\frac{c}{d} + \\frac{e}{f}\\right)$",
                "Розподільна: $\\frac{a}{b} \\times \\left(\\frac{c}{d} + \\frac{e}{f}\\right) = \\frac{a}{b} \\times \\frac{c}{d} + \\frac{a}{b} \\times \\frac{e}{f}$",
                "Нейтральний елемент $+$: $\\frac{a}{b} + 0 = \\frac{a}{b}$",
                "Нейтральний елемент $\\times$: $\\frac{a}{b} \\times 1 = \\frac{a}{b}$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Адитивно обернене число",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Адитивно обернене (протилежне)",
            content:
                "Для $\\dfrac{a}{b}$ адитивно обернене — це $-\\dfrac{a}{b}$. Їх сума дорівнює 0: $\\dfrac{a}{b} + \\left(-\\dfrac{a}{b}\\right) = 0$.",
        },
        {
            type: "math-block",
            content:
                "\\text{Протилежне до } \\frac{3}{7} \\text{ є } -\\frac{3}{7}, \\quad \\text{протилежне до } -\\frac{5}{8} \\text{ є } \\frac{5}{8}",
        },
        {
            type: "heading",
            level: 2,
            content: "Мультиплікативно обернене число",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Мультиплікативно обернене (реципрокальне)",
            content:
                "Для $\\dfrac{a}{b} \\neq 0$ мультиплікативно обернене — це $\\dfrac{b}{a}$. Їх добуток дорівнює 1: $\\dfrac{a}{b} \\times \\dfrac{b}{a} = 1$.",
        },
        {
            type: "math-block",
            content:
                "\\text{Обернене до } \\frac{3}{7} \\text{ є } \\frac{7}{3}, \\quad \\text{обернене до } -\\frac{5}{8} \\text{ є } -\\frac{8}{5}",
        },
        {
            type: "heading",
            level: 2,
            content: "Порівняння і впорядкування раціональних чисел",
        },
        {
            type: "text",
            content:
                "Для порівняння раціональних чисел з різними знаками і знаменниками — зводимо до спільного знаменника або використовуємо перехресне множення:",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} < \\frac{c}{d} \\Leftrightarrow a \\times d < b \\times c \\quad (\\text{якщо } b, d > 0)",
        },
        {
            type: "callout",
            kind: "example",
            title: "Впорядкуй: $-\\frac{3}{4}$, $-\\frac{2}{3}$, $-\\frac{5}{6}$",
            content:
                "НСК(4,3,6)=12: $-\\frac{9}{12}$, $-\\frac{8}{12}$, $-\\frac{10}{12}$. Порядок: $-\\frac{10}{12} < -\\frac{9}{12} < -\\frac{8}{12}$. Отже: $-\\frac{5}{6} < -\\frac{3}{4} < -\\frac{2}{3}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Модуль раціонального числа",
        },
        {
            type: "math-block",
            content:
                "\\left|\\frac{a}{b}\\right| = \\frac{|a|}{|b|}",
        },
        {
            type: "list",
            items: [
                "$\\left|\\frac{3}{4}\\right| = \\frac{3}{4}$",
                "$\\left|-\\frac{5}{7}\\right| = \\frac{5}{7}$",
                "$\\left|-\\frac{2}{-3}\\right| = \\left|\\frac{2}{3}\\right| = \\frac{2}{3}$",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Раціональні числа і програмування",
            content:
                "Python: клас $\\text{Fraction}$ реалізує всі операції з раціональними числами точно. $\\text{Fraction}(1,3) + \\text{Fraction}(1,6) = \\text{Fraction}(1,2)$. Автоматично скорочує і знаходить НСК. Для фінансових розрахунків де потрібна точність — $\\text{Fraction}$ або $\\text{Decimal}$ замість $\\text{float}$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Знайди раціональне число між $\\frac{2}{5}$ і $\\frac{3}{5}$",
            choices: ["$\\frac{1}{2}$", "$\\frac{5}{10}$", "$\\frac{1}{2}$ і $\\frac{5}{10}$ однакові", "$\\frac{2}{10}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Середнє арифметичне:",
                },
                {
                    type: "math-block",
                    content: "\\frac{\\frac{2}{5} + \\frac{3}{5}}{2} = \\frac{1}{2}",
                },
                {
                    type: "text",
                    content: "$\\frac{1}{2} = \\frac{5}{10}$ — це одне і те саме число. Обидва варіанти A і B однакові.",
                },
            ],
        },
        {
            id: "q2",
            question: "Яке мультиплікативно обернене до $-\\frac{7}{3}$?",
            choices: ["$\\frac{7}{3}$", "$-\\frac{3}{7}$", "$\\frac{3}{7}$", "$-\\frac{7}{3}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "-\\frac{7}{3} \\times \\left(-\\frac{3}{7}\\right) = \\frac{21}{21} = 1 \\checkmark",
                },
                {
                    type: "text",
                    content: "Обернене до $-\\frac{7}{3}$ є $-\\frac{3}{7}$ (зберігаємо знак).",
                },
            ],
        },
        {
            id: "q3",
            question: "Чи є $\\mathbb{Q}$ замкненою відносно $\\sqrt{}$?",
            choices: [
                "Так — корінь раціонального завжди раціональний",
                "Ні — $\\sqrt{2} \\notin \\mathbb{Q}$ хоча $2 \\in \\mathbb{Q}$",
                "Так — але лише для додатних раціональних",
                "Ні — але лише для від'ємних раціональних",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content:
                        "$2 \\in \\mathbb{Q}$ але $\\sqrt{2} \\notin \\mathbb{Q}$ — ірраціональне. Тому $\\mathbb{Q}$ не замкнена відносно квадратного кореня.",
                },
            ],
        },
        {
            id: "q4",
            question: "Впорядкуй від найбільшого: $-\\frac{1}{2}$, $-\\frac{1}{3}$, $-\\frac{1}{4}$",
            choices: [
                "$-\\frac{1}{2} > -\\frac{1}{3} > -\\frac{1}{4}$",
                "$-\\frac{1}{4} > -\\frac{1}{3} > -\\frac{1}{2}$",
                "$-\\frac{1}{3} > -\\frac{1}{4} > -\\frac{1}{2}$",
                "Всі рівні",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Чим менший модуль від'ємного числа — тим воно більше:",
                },
                {
                    type: "math-block",
                    content: "\\left|-\\frac{1}{4}\\right| < \\left|-\\frac{1}{3}\\right| < \\left|-\\frac{1}{2}\\right|",
                },
                {
                    type: "math-block",
                    content: "-\\frac{1}{4} > -\\frac{1}{3} > -\\frac{1}{2}",
                },
            ],
        },
        {
            id: "q5",
            question: "Яке адитивно обернене до $-\\frac{5}{9}$?",
            choices: ["$-\\frac{9}{5}$", "$\\frac{9}{5}$", "$\\frac{5}{9}$", "$-\\frac{5}{9}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "-\\frac{5}{9} + \\frac{5}{9} = 0 \\checkmark",
                },
                {
                    type: "text",
                    content: "Адитивно обернене (протилежне) до $-\\frac{5}{9}$ є $\\frac{5}{9}$.",
                },
            ],
        },
    ],
};

export default lesson;