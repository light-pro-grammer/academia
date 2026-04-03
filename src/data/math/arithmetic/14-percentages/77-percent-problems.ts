import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "77-percent-problems",
    title: "Основні типи задач на відсотки",
    description: "Три типи задач на відсотки — знайти частину, знайти відсоток, знайти ціле",
    concepts: [
        "Тип 1: знайти частину від цілого",
        "Тип 2: знайти відсоток",
        "Тип 3: знайти ціле за частиною",
        "Метод рівняння та метод пропорції",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Формула відсотків",
        },
        {
            type: "math-block",
            content: "\\text{Частина} = \\text{Відсоток} \\times \\text{Ціле}",
        },
        {
            type: "math-block",
            content: "P = r \\times W \\quad \\text{де } r = \\frac{\\%}{100}",
        },
        {
            type: "text",
            content:
                "З цієї однієї формули отримуємо три типи задач залежно від того що невідоме.",
        },
        {
            type: "heading",
            level: 2,
            content: "Тип 1: Знайти частину (частину від цілого)",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Задача типу 1",
            content:
                "Дано: відсоток і ціле. Знайти: частину. $P = r \\times W$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$30\\%$ від $80$",
            content:
                "$P = 0{,}30 \\times 80 = 24$. Або через пропорцію: $\\frac{P}{80} = \\frac{30}{100}$, $P = \\frac{80 \\times 30}{100} = 24$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Задача: знижка $15\\%$ на товар вартістю $1\\,200$ грн",
            content:
                "Сума знижки: $0{,}15 \\times 1\\,200 = 180$ грн. Ціна зі знижкою: $1\\,200 - 180 = 1\\,020$ грн.",
        },
        {
            type: "heading",
            level: 2,
            content: "Тип 2: Знайти відсоток",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Задача типу 2",
            content:
                "Дано: частина і ціле. Знайти: відсоток. $r = \\dfrac{P}{W} \\times 100\\%$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Скільки відсотків становить 18 від 72?",
            content:
                "$r = \\dfrac{18}{72} \\times 100\\% = 0{,}25 \\times 100\\% = 25\\%$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Задача: з 40 питань правильно відповіли на 34",
            content:
                "$r = \\dfrac{34}{40} \\times 100\\% = 0{,}85 \\times 100\\% = 85\\%$ правильних відповідей.",
        },
        {
            type: "heading",
            level: 2,
            content: "Тип 3: Знайти ціле",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Задача типу 3",
            content:
                "Дано: частина і відсоток. Знайти: ціле. $W = \\dfrac{P}{r} = \\dfrac{P \\times 100}{\\%}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$24$ — це $30\\%$ від якого числа?",
            content:
                "$W = \\dfrac{24}{0{,}30} = 80$. Або: $\\dfrac{24}{W} = \\dfrac{30}{100}$, $W = \\dfrac{24 \\times 100}{30} = 80$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Задача: після знижки $20\\%$ товар коштує $640$ грн. Яка початкова ціна?",
            content:
                "$640$ грн = $80\\%$ початкової ціни. $W = \\dfrac{640}{0{,}80} = 800$ грн.",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод пропорції",
        },
        {
            type: "math-block",
            content: "\\frac{\\text{Частина}}{\\text{Ціле}} = \\frac{\\%}{100}",
        },
        {
            type: "text",
            content:
                "Цей запис зручний для всіх трьох типів — просто X ставимо на місце невідомого і розв'язуємо пропорцію:",
        },
        {
            type: "math-block",
            content: "\\frac{x}{80} = \\frac{30}{100} \\quad \\Rightarrow \\quad x = 24 \\quad \\text{(тип 1)}",
        },
        {
            type: "math-block",
            content: "\\frac{18}{72} = \\frac{x}{100} \\quad \\Rightarrow \\quad x = 25 \\quad \\text{(тип 2)}",
        },
        {
            type: "math-block",
            content: "\\frac{24}{x} = \\frac{30}{100} \\quad \\Rightarrow \\quad x = 80 \\quad \\text{(тип 3)}",
        },
        {
            type: "callout",
            kind: "info",
            title: "Який метод обирати?",
            content:
                "Метод рівняння ($P = rW$) швидший для простих обчислень. Метод пропорції наочніший і систематичніший — особливо зручний для типу 3.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Знайди $45\\%$ від $360$",
            choices: ["$144$", "$162$", "$180$", "$198$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "P = 0{,}45 \\times 360 = 162",
                },
                {
                    type: "text",
                    content: "Або: $10\\% = 36$, $40\\% = 144$, $5\\% = 18$. $45\\% = 144 + 18 = 162$.",
                },
            ],
        },
        {
            id: "q2",
            question: "Скільки відсотків становить $45$ від $180$?",
            choices: ["$20\\%$", "$25\\%$", "$30\\%$", "$35\\%$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "r = \\frac{45}{180} \\times 100\\% = 0{,}25 \\times 100\\% = 25\\%",
                },
            ],
        },
        {
            id: "q3",
            question: "$56$ — це $70\\%$ від якого числа?",
            choices: ["$70$", "$80$", "$90$", "$100$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "W = \\frac{56}{0{,}70} = \\frac{56 \\times 100}{70} = \\frac{5600}{70} = 80",
                },
            ],
        },
        {
            id: "q4",
            question: "У класі $60\\%$ учнів — дівчата. Всього $15$ дівчат. Скільки учнів у класі?",
            choices: ["$20$", "$25$", "$30$", "$35$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "W = \\frac{15}{0{,}60} = 25 \\text{ учнів}",
                },
                {
                    type: "text",
                    content: "Перевірка: $60\\%$ від $25 = 15$ дівчат ✓",
                },
            ],
        },
        {
            id: "q5",
            question: "Після підвищення на $25\\%$ зарплата стала $31\\,250$ грн. Яка була зарплата?",
            choices: ["$23\\,000$", "$24\\,000$", "$25\\,000$", "$26\\,000$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "$31\\,250$ грн $= 125\\%$ початкової зарплати:",
                },
                {
                    type: "math-block",
                    content: "W = \\frac{31\\,250}{1{,}25} = 25\\,000 \\text{ грн}",
                },
            ],
        },
    ],
};

export default lesson;