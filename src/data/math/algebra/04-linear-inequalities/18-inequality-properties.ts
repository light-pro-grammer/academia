import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "18-inequality-properties",
    title: "Властивості нерівностей",
    description: "Правила маніпуляцій з нерівностями — і чому множення на від'ємне змінює знак",
    concepts: [
        "Властивості додавання і віднімання",
        "Множення і ділення на додатне",
        "Множення і ділення на від'ємне",
        "Чому знак змінюється",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Властивості додавання і віднімання",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Властивість додавання",
            content:
                "Якщо $a < b$, то $a + c < b + c$ для будь-якого $c$. Можна додавати або віднімати однакове число від обох частин — знак нерівності не змінюється.",
        },
        {
            type: "math-block",
            content: "a < b \\Rightarrow a + c < b + c \\quad \\text{і} \\quad a - c < b - c",
        },
        {
            type: "callout",
            kind: "example",
            title: "Приклад",
            content:
                "$3 < 7$. Додамо 5: $3 + 5 < 7 + 5$, тобто $8 < 12$ ✓. Відніміть 10: $3 - 10 < 7 - 10$, тобто $-7 < -3$ ✓.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення і ділення на додатне число",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Множення на додатне",
            content:
                "Якщо $a < b$ і $c > 0$, то $ac < bc$. Знак нерівності зберігається.",
        },
        {
            type: "math-block",
            content: "a < b,\\; c > 0 \\Rightarrow ac < bc \\quad \\text{і} \\quad \\frac{a}{c} < \\frac{b}{c}",
        },
        {
            type: "callout",
            kind: "example",
            title: "Приклад",
            content:
                "$2 < 5$. Множимо на 3: $6 < 15$ ✓. Ділимо на 2: $1 < 2{,}5$ ✓.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення і ділення на від'ємне число",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Множення на від'ємне — знак змінюється!",
            content:
                "Якщо $a < b$ і $c < 0$, то $ac > bc$. При множенні або діленні на від'ємне число знак нерівності змінюється на протилежний.",
        },
        {
            type: "math-block",
            content: "a < b,\\; c < 0 \\Rightarrow ac > bc \\quad \\text{і} \\quad \\frac{a}{c} > \\frac{b}{c}",
        },
        {
            type: "callout",
            kind: "example",
            title: "Чому знак змінюється?",
            content:
                "$2 < 5$. Множимо на $-1$: $-2$ і $-5$. На числовій прямій $-5 < -2$ — порядок reversed! Тому $2 < 5 \\Rightarrow -2 > -5$.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Найчастіша помилка в нерівностях",
            content:
                "$-3x > 12$. Ділимо на $-3$ і ЗМІНЮЄМО знак: $x < -4$. Якщо забути змінити знак: $x > -4$ — неправильна відповідь! Перевірка: $x = -5$: $-3(-5) = 15 > 12$ ✓. $x = -3$: $-3(-3) = 9 \\not> 12$ ✗.",
        },
        {
            type: "heading",
            level: 2,
            content: "Всі властивості разом",
        },
        {
            type: "list",
            items: [
                "$a < b \\Rightarrow a + c < b + c$ (для будь-якого $c$)",
                "$a < b \\Rightarrow a - c < b - c$ (для будь-якого $c$)",
                "$a < b,\\, c > 0 \\Rightarrow ac < bc$ (знак зберігається)",
                "$a < b,\\, c < 0 \\Rightarrow ac > bc$ (знак змінюється!)",
                "$a < b,\\, c > 0 \\Rightarrow \\frac{a}{c} < \\frac{b}{c}$ (знак зберігається)",
                "$a < b,\\, c < 0 \\Rightarrow \\frac{a}{c} > \\frac{b}{c}$ (знак змінюється!)",
            ],
        },
        {
            type: "text",
            content:
                "Ті самі властивості працюють для $>$, $\\leq$, $\\geq$. При $\\leq$ і $\\geq$ результат теж $\\leq$ і $\\geq$ відповідно (після можливої зміни напрямку).",
        },
        {
            type: "callout",
            kind: "info",
            title: "Транзитивність нерівностей",
            content:
                "Якщо $a < b$ і $b < c$, то $a < c$. Це дозволяє «ланцюжки»: $1 < 2 < 5 < 10$ — всі порівняння справедливі.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Якщо $x > 4$, що можна сказати про $x + 3$?",
            choices: ["$x + 3 > 1$", "$x + 3 < 7$", "$x + 3 > 7$", "$x + 3 = 7$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "x > 4 \\Rightarrow x + 3 > 4 + 3 = 7",
                },
            ],
        },
        {
            id: "q2",
            question: "Якщо $a < b$, що вірно для $3a$ і $3b$?",
            choices: ["$3a > 3b$", "$3a < 3b$", "$3a = 3b$", "Неможливо визначити"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Множимо на $3 > 0$ — знак зберігається:",
                },
                {
                    type: "math-block",
                    content: "a < b \\Rightarrow 3a < 3b",
                },
            ],
        },
        {
            id: "q3",
            question: "Якщо $x < -2$, що вірно для $-4x$?",
            choices: ["$-4x < 8$", "$-4x > 8$", "$-4x < -8$", "$-4x = 8$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Множимо на $-4 < 0$ — знак змінюється:",
                },
                {
                    type: "math-block",
                    content: "x < -2 \\Rightarrow -4x > (-4)(-2) = 8",
                },
            ],
        },
        {
            id: "q4",
            question: "Яка з нерівностей неправильна якщо $a > b$?",
            choices: [
                "$a + 5 > b + 5$",
                "$a - 3 > b - 3$",
                "$-2a > -2b$",
                "$\\dfrac{a}{4} > \\dfrac{b}{4}$",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content:
                        "Множення на $-2 < 0$ змінює знак: $a > b \\Rightarrow -2a < -2b$. Отже $-2a > -2b$ — неправильно!",
                },
            ],
        },
        {
            id: "q5",
            question: "Якщо $-\\dfrac{x}{5} < 3$, то $x$...",
            choices: ["$x < -15$", "$x > -15$", "$x < 15$", "$x > 15$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Множимо на $-5 < 0$ — знак змінюється:",
                },
                {
                    type: "math-block",
                    content: "-\\frac{x}{5} < 3 \\Rightarrow x > -15",
                },
            ],
        },
    ],
};

export default lesson;