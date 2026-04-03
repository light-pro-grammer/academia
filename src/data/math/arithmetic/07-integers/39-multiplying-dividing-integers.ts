import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "39-multiplying-dividing-integers",
    title: "Множення і ділення цілих чисел",
    description: "Правила знаків при множенні і діленні — і чому мінус на мінус дає плюс",
    concepts: [
        "Правило знаків при множенні",
        "Правило знаків при діленні",
        "Множення кількох від'ємних чисел",
        "Зведення степенів від'ємних чисел",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Правило знаків при множенні",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Правило знаків",
            content:
                "Плюс на плюс = плюс. Плюс на мінус = мінус. Мінус на плюс = мінус. Мінус на мінус = плюс. Коротко: однакові знаки → плюс, різні знаки → мінус.",
        },
        {
            type: "math-block",
            content:
                "\\begin{array}{rcl} (+3) \\times (+4) &=& +12 \\\\ (+3) \\times (-4) &=& -12 \\\\ (-3) \\times (+4) &=& -12 \\\\ (-3) \\times (-4) &=& +12 \\end{array}",
        },
        {
            type: "heading",
            level: 2,
            content: "Чому мінус на мінус = плюс?",
        },
        {
            type: "text",
            content:
                "Це найчастіше питання учнів. Є кілька способів зрозуміти:",
        },
        {
            type: "callout",
            kind: "example",
            title: "Пояснення через закономірність",
            content:
                "$3 \\times 3 = 9$, $3 \\times 2 = 6$, $3 \\times 1 = 3$, $3 \\times 0 = 0$, $3 \\times (-1) = -3$, $3 \\times (-2) = -6$. Тепер: $(-3) \\times 2 = -6$, $(-3) \\times 1 = -3$, $(-3) \\times 0 = 0$, $(-3) \\times (-1) = ?$. Щоразу збільшується на 3: $0, 3, 6, \\ldots$ Отже $(-3) \\times (-1) = +3$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Пояснення через дистрибутивність",
            content:
                "$(-3) \\times (-4 + 4) = (-3) \\times 0 = 0$. Але також $(-3) \\times (-4) + (-3) \\times 4 = (-3) \\times (-4) + (-12) = 0$. Тому $(-3) \\times (-4) = 12$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Правило знаків при діленні",
        },
        {
            type: "text",
            content:
                "Те саме правило що і для множення — ділення є оберненим множенням:",
        },
        {
            type: "math-block",
            content:
                "\\begin{array}{rcl} (+12) \\div (+4) &=& +3 \\\\ (-12) \\div (+4) &=& -3 \\\\ (+12) \\div (-4) &=& -3 \\\\ (-12) \\div (-4) &=& +3 \\end{array}",
        },
        {
            type: "callout",
            kind: "info",
            title: "Просте правило",
            content:
                "Для множення і ділення: підрахуй кількість від'ємних множників. Якщо парна кількість → результат додатний. Якщо непарна → результат від'ємний.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення кількох чисел",
        },
        {
            type: "math-block",
            content: "(-2) \\times (-3) \\times (-4) = ?",
        },
        {
            type: "text",
            content:
                "Три від'ємних множники — непарна кількість → результат від'ємний:",
        },
        {
            type: "math-block",
            content: "(-2) \\times (-3) \\times (-4) = -(2 \\times 3 \\times 4) = -24",
        },
        {
            type: "math-block",
            content: "(-1) \\times (-2) \\times (-3) \\times (-4) = +(1 \\times 2 \\times 3 \\times 4) = 24",
        },
        {
            type: "heading",
            level: 2,
            content: "Степені від'ємних чисел",
        },
        {
            type: "text",
            content:
                "Від'ємне число у степені підпорядковується правилу знаків:",
        },
        {
            type: "math-block",
            content: "(-2)^1 = -2",
        },
        {
            type: "math-block",
            content: "(-2)^2 = (-2) \\times (-2) = +4",
        },
        {
            type: "math-block",
            content: "(-2)^3 = (-2) \\times (-2) \\times (-2) = -8",
        },
        {
            type: "math-block",
            content: "(-2)^4 = +16, \\quad (-2)^5 = -32",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Закономірність",
            content:
                "Від'ємне число у парному степені — додатне. У непарному степені — від'ємне. $(-a)^{2n} = a^{2n} > 0$ і $(-a)^{2n+1} = -a^{2n+1} < 0$ (для $a > 0$).",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Важлива різниця: $(-2)^2$ vs $-2^2$",
            content:
                "$(-2)^2 = (-2) \\times (-2) = +4$ — піднімаємо $-2$ до степеня. $-2^2 = -(2^2) = -4$ — піднімаємо $2$ до степеня потім ставимо мінус. Дужки мають значення!",
        },
        {
            type: "heading",
            level: 2,
            content: "Практичні приклади",
        },
        {
            type: "callout",
            kind: "example",
            title: "Зміна напрямку",
            content:
                "Човен рухається зі швидкістю $-5$ м/с (назад). Через $3$ секунди: переміщення $= (-5) \\times 3 = -15$ м (на 15 м назад). Якщо повернути час назад на $3$ секунди: $(-5) \\times (-3) = +15$ м (на 15 м вперед від теперішнього).",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $(-7) \\times (-8)$",
            choices: ["$-56$", "$-15$", "$15$", "$56$"],
            correctIndex: 3,
            solution: [
                {
                    type: "text",
                    content: "Мінус на мінус = плюс. Множимо модулі:",
                },
                {
                    type: "math-block",
                    content: "(-7) \\times (-8) = +(7 \\times 8) = +56",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $(-48) \\div 6$",
            choices: ["$-8$", "$-6$", "$6$", "$8$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Від'ємне ÷ додатне = від'ємне:",
                },
                {
                    type: "math-block",
                    content: "(-48) \\div 6 = -(48 \\div 6) = -8",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $(-3) \\times (-2) \\times (-5)$",
            choices: ["$-30$", "$-10$", "$10$", "$30$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Три від'ємних множники — непарна кількість → результат від'ємний:",
                },
                {
                    type: "math-block",
                    content: "(-3) \\times (-2) \\times (-5) = -(3 \\times 2 \\times 5) = -30",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $(-3)^4$",
            choices: ["$-81$", "$-12$", "$12$", "$81$"],
            correctIndex: 3,
            solution: [
                {
                    type: "text",
                    content: "Парний степінь від'ємного числа — завжди додатний:",
                },
                {
                    type: "math-block",
                    content: "(-3)^4 = (-3) \\times (-3) \\times (-3) \\times (-3) = 9 \\times 9 = 81",
                },
                {
                    type: "text",
                    content: "Або: 4 від'ємних множники — парна кількість → плюс. $3^4 = 81$.",
                },
            ],
        },
        {
            id: "q5",
            question: "Яка різниця між $(-5)^2$ і $-5^2$?",
            choices: [
                "Різниці немає — обидва рівні $25$",
                "Різниці немає — обидва рівні $-25$",
                "$(-5)^2 = 25$, але $-5^2 = -25$",
                "$(-5)^2 = -25$, але $-5^2 = 25$",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "(-5)^2 = (-5) \\times (-5) = +25",
                },
                {
                    type: "math-block",
                    content: "-5^2 = -(5 \\times 5) = -25",
                },
                {
                    type: "text",
                    content:
                        "У $(-5)^2$ дужки включають мінус у піднесення до степеня. У $-5^2$ спочатку обчислюється $5^2=25$, потім ставиться мінус.",
                },
            ],
        },
    ],
};

export default lesson;