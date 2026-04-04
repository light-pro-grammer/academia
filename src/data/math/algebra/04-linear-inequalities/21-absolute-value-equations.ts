import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "21-absolute-value-equations",
    title: "Рівняння та нерівності з модулем",
    description: "Рівняння і нерівності з абсолютною величиною — два випадки і зв'язок з відстанню",
    concepts: [
        "Рівняння з модулем — два випадки",
        "Нерівності з модулем типу < (перетин)",
        "Нерівності з модулем типу > (об'єднання)",
        "Рівняння без розв'язків",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Рівняння з модулем",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Принцип розв'язання",
            content:
                "$|A| = a$ (де $a > 0$) означає $A = a$ або $A = -a$. Модуль виразу дорівнює числу — розглядаємо два випадки: вираз додатній або від'ємний.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$|x| = 5$",
            content:
                "$x = 5$ або $x = -5$. Два розв'язки. Геометрично: числа на відстані 5 від нуля.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$|2x - 3| = 7$",
            content:
                "Випадок 1: $2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$. Випадок 2: $2x - 3 = -7 \\Rightarrow 2x = -4 \\Rightarrow x = -2$. Відповідь: $x = 5$ або $x = -2$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$|3x + 1| = |x - 5|$",
            content:
                "Випадок 1: $3x+1 = x-5 \\Rightarrow 2x = -6 \\Rightarrow x = -3$. Випадок 2: $3x+1 = -(x-5) \\Rightarrow 3x+1 = -x+5 \\Rightarrow 4x = 4 \\Rightarrow x = 1$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Рівняння без розв'язків",
        },
        {
            type: "callout",
            kind: "definition",
            title: "$|A| = a$ де $a < 0$",
            content:
                "Модуль завжди $\\geq 0$. Тому $|A| = -4$ не має розв'язків — неможливо щоб модуль дорівнював від'ємному числу. Відповідь: $\\emptyset$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$|x + 2| = -4$",
            content:
                "Жодного розв'язку — $|x+2| \\geq 0$ для будь-якого $x$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нерівності з модулем: $|A| < a$",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Тип «менше» — перетин",
            content:
                "$|A| < a$ (де $a > 0$) означає $-a < A < a$. Подвійна нерівність — розв'язок є відрізком.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$|x| < 3$",
            content:
                "$-3 < x < 3$. Відповідь: $(-3, 3)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$|3x + 1| < 8$",
            content:
                "$-8 < 3x + 1 < 8$. Віднімаємо 1: $-9 < 3x < 7$. Ділимо на 3: $-3 < x < \\dfrac{7}{3}$. Відповідь: $\\left(-3, \\dfrac{7}{3}\\right)$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нерівності з модулем: $|A| > a$",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Тип «більше» — об'єднання",
            content:
                "$|A| > a$ (де $a > 0$) означає $A < -a$ або $A > a$. Два промені — розв'язок є об'єднанням.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$|x| > 4$",
            content:
                "$x < -4$ або $x > 4$. Відповідь: $(-\\infty, -4) \\cup (4, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$|2x - 5| \\geq 3$",
            content:
                "$2x - 5 \\leq -3$ або $2x - 5 \\geq 3$. Перше: $2x \\leq 2 \\Rightarrow x \\leq 1$. Друге: $2x \\geq 8 \\Rightarrow x \\geq 4$. Відповідь: $(-\\infty, 1] \\cup [4, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Модуль як відстань",
            content:
                "$|x - a|$ — відстань від $x$ до $a$ на числовій прямій. $|x - 3| < 2$: «відстань від $x$ до 3 менша за 2» → $1 < x < 5$. $|x - 3| > 2$: «відстань від $x$ до 3 більша за 2» → $x < 1$ або $x > 5$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Розв'яжи: $|x - 4| = 6$",
            choices: [
                "$x = 10$ або $x = -2$",
                "$x = 10$ або $x = 2$",
                "$x = -10$ або $x = 2$",
                "$x = 10$ або $x = -10$",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "list",
                    items: [
                        "Випадок 1: $x - 4 = 6 \\Rightarrow x = 10$",
                        "Випадок 2: $x - 4 = -6 \\Rightarrow x = -2$",
                    ],
                },
                {
                    type: "text",
                    content: "Перевірка: $|10-4|=6$ ✓, $|-2-4|=6$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Скільки розв'язків має $|2x + 1| = -3$?",
            choices: ["$0$", "$1$", "$2$", "$3$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content:
                        "Модуль завжди $\\geq 0$. $|2x+1| = -3$ — неможливо. Жодного розв'язку.",
                },
            ],
        },
        {
            id: "q3",
            question: "Розв'яжи: $|x + 2| < 5$",
            choices: [
                "$x < 3$, тобто $(-\\infty, 3)$",
                "$-7 < x < 3$, тобто $(-7, 3)$",
                "$x < -7$ або $x > 3$",
                "$-3 < x < 7$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "-5 < x + 2 < 5 \\Rightarrow -7 < x < 3",
                },
                {
                    type: "text",
                    content: "Відповідь: $(-7, 3)$.",
                },
            ],
        },
        {
            id: "q4",
            question: "Розв'яжи: $|3x - 6| \\geq 9$",
            choices: [
                "$-1 \\leq x \\leq 5$",
                "$x \\leq -1$ або $x \\geq 5$",
                "$x \\leq 1$ або $x \\geq 5$",
                "$-5 \\leq x \\leq 1$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "list",
                    items: [
                        "Випадок 1: $3x - 6 \\leq -9 \\Rightarrow 3x \\leq -3 \\Rightarrow x \\leq -1$",
                        "Випадок 2: $3x - 6 \\geq 9 \\Rightarrow 3x \\geq 15 \\Rightarrow x \\geq 5$",
                    ],
                },
                {
                    type: "math-block",
                    content: "(-\\infty, -1] \\cup [5, +\\infty)",
                },
            ],
        },
        {
            id: "q5",
            question: "Що описує $|x - 7| < 3$ геометрично?",
            choices: [
                "Числа далі ніж 3 від точки 7",
                "Числа ближче ніж 3 до точки 7",
                "Числа ближче ніж 7 до точки 3",
                "Числа далі ніж 7 від точки 3",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content:
                        "$|x - 7|$ — відстань від $x$ до 7. $|x-7| < 3$: відстань від $x$ до 7 менша за 3. Тобто числа в радіусі 3 від точки 7: $(4, 10)$.",
                },
            ],
        },
    ],
};

export default lesson;