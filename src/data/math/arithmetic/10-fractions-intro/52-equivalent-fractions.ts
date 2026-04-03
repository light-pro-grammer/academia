import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "52-equivalent-fractions",
    title: "Рівносильні дроби та скорочення",
    description: "Різні дроби що позначають одну й ту саму величину — і як знайти найпростіший вигляд",
    concepts: [
        "Рівносильні (еквівалентні) дроби",
        "Основна властивість дробу",
        "Скорочення дробу",
        "Найпростіший вигляд",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Рівносильні дроби",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Рівносильні дроби",
            content:
                "Два дроби рівносильні якщо вони позначають однакову величину. $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{50}{100}$ — всі рівні $0{,}5$.",
        },
        {
            type: "text",
            content:
                "Геометрично: якщо розрізати піцу на 4 частини і взяти 2, або розрізати на 8 і взяти 4 — кількість їжі однакова. $\\frac{2}{4} = \\frac{4}{8} = \\frac{1}{2}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Основна властивість дробу",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Основна властивість",
            content:
                "Значення дробу не змінюється якщо чисельник і знаменник помножити або поділити на одне і те саме ненульове число: $\\dfrac{a}{b} = \\dfrac{a \\times k}{b \\times k} = \\dfrac{a \\div k}{b \\div k}$",
        },
        {
            type: "math-block",
            content: "\\frac{3}{5} = \\frac{3 \\times 4}{5 \\times 4} = \\frac{12}{20}",
        },
        {
            type: "math-block",
            content: "\\frac{12}{20} = \\frac{12 \\div 4}{20 \\div 4} = \\frac{3}{5}",
        },
        {
            type: "heading",
            level: 2,
            content: "Утворення рівносильних дробів",
        },
        {
            type: "text",
            content:
                "Щоб отримати дріб рівносильний даному — множимо чисельник і знаменник на одне число:",
        },
        {
            type: "math-block",
            content: "\\frac{2}{3} = \\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6} = \\frac{2 \\times 5}{3 \\times 5} = \\frac{10}{15}",
        },
        {
            type: "callout",
            kind: "example",
            title: "Знайди невідоме",
            content:
                "$\\frac{3}{4} = \\frac{?}{20}$. Знаменник збільшився в $20 \\div 4 = 5$ разів. Тому чисельник теж: $3 \\times 5 = 15$. Відповідь: $\\frac{15}{20}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Скорочення дробу",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Скорочення дробу",
            content:
                "Ділення чисельника і знаменника на їх спільний дільник. Дріб у найпростішому вигляді — коли НСД чисельника і знаменника дорівнює 1 (вони взаємно прості).",
        },
        {
            type: "math-block",
            content: "\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}",
        },
        {
            type: "text",
            content:
                "Тут $\\text{НСД}(18, 24) = 6$. Можна скорочувати покроково або одразу на НСД:",
        },
        {
            type: "math-block",
            content: "\\frac{18}{24} = \\frac{18 \\div 2}{24 \\div 2} = \\frac{9}{12} = \\frac{9 \\div 3}{12 \\div 3} = \\frac{3}{4}",
        },
        {
            type: "callout",
            kind: "info",
            title: "Найпростіший вигляд",
            content:
                "Дріб $\\frac{a}{b}$ у найпростішому вигляді коли $\\text{НСД}(a, b) = 1$. Це єдиний представник класу рівносильних дробів з найменшими числами.",
        },
        {
            type: "heading",
            level: 2,
            content: "Перевірка рівносильності",
        },
        {
            type: "text",
            content:
                "Два дроби $\\frac{a}{b}$ і $\\ frac{c}{d}$ рівносильні тоді і тільки тоді коли $a \\times d = b \\times c$ (перехресне множення):",
        },
        {
            type: "math-block",
            content: "\\frac{3}{4} = \\frac{9}{12}? \\quad 3 \\times 12 = 36, \\quad 4 \\times 9 = 36 \\quad \\checkmark",
        },
        {
            type: "math-block",
            content: "\\frac{2}{3} = \\frac{5}{8}? \\quad 2 \\times 8 = 16, \\quad 3 \\times 5 = 15 \\quad 16 \\neq 15 \\quad ✗",
        },
        {
            type: "callout",
            kind: "info",
            title: "Дроби у програмуванні",
            content:
                "Бібліотеки для точної арифметики (Python Fraction, Java BigDecimal) автоматично скорочують дроби. $\\text{Fraction}(6, 9)$ повертає $\\text{Fraction}(2, 3)$. Це запобігає накопиченню похибки при обчисленнях з дробами.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Який дріб рівносильний $\\frac{2}{5}$?",
            choices: ["$\\frac{4}{9}$", "$\\frac{6}{15}$", "$\\frac{4}{15}$", "$\\frac{3}{8}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{2}{5} = \\frac{2 \\times 3}{5 \\times 3} = \\frac{6}{15} \\checkmark",
                },
                {
                    type: "text",
                    content: "Перевірка: $2 \\times 15 = 30 = 5 \\times 6$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Знайди невідоме: $\\frac{5}{6} = \\frac{?}{30}$",
            choices: ["$20$", "$25$", "$28$", "$30$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "30 \\div 6 = 5 \\quad \\Rightarrow \\quad 5 \\times 5 = 25",
                },
                {
                    type: "math-block",
                    content: "\\frac{5}{6} = \\frac{25}{30} \\checkmark",
                },
            ],
        },
        {
            id: "q3",
            question: "Скороти дріб $\\frac{36}{48}$ до найпростішого вигляду",
            choices: ["$\\frac{3}{4}$", "$\\frac{4}{6}$", "$\\frac{6}{8}$", "$\\frac{9}{12}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\text{НСД}(36, 48) = 12",
                },
                {
                    type: "math-block",
                    content: "\\frac{36}{48} = \\frac{36 \\div 12}{48 \\div 12} = \\frac{3}{4}",
                },
                {
                    type: "text",
                    content: "Перевірка: $\\text{НСД}(3, 4) = 1$ — найпростіший вигляд ✓",
                },
            ],
        },
        {
            id: "q4",
            question: "Чи рівносильні $\\frac{7}{9}$ і $\\frac{21}{28}$?",
            choices: [
                "Так — обидва менші за 1",
                "Ні — перехресне множення дає різні результати",
                "Так — перехресне множення однакове",
                "Неможливо визначити",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "7 \\times 28 = 196, \\quad 9 \\times 21 = 189",
                },
                {
                    type: "math-block",
                    content: "196 \\neq 189 \\quad \\Rightarrow \\quad \\frac{7}{9} \\neq \\frac{21}{28}",
                },
                {
                    type: "text",
                    content: "$\\frac{21}{28} = \\frac{3}{4}$ (скорочення на 7). $\\frac{7}{9} \\neq \\frac{3}{4}$.",
                },
            ],
        },
        {
            id: "q5",
            question: "Скороти $\\frac{120}{180}$",
            choices: ["$\\frac{2}{3}$", "$\\frac{3}{4}$", "$\\frac{4}{5}$", "$\\frac{5}{6}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\text{НСД}(120, 180) = 60",
                },
                {
                    type: "math-block",
                    content: "\\frac{120}{180} = \\frac{120 \\div 60}{180 \\div 60} = \\frac{2}{3}",
                },
            ],
        },
    ],
};

export default lesson;