import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "20-compound-inequalities",
    title: "Складені нерівності",
    description: "Нерівності з «і» (перетин) і «або» (об'єднання) — подвійні нерівності і два промені",
    concepts: [
        "Складені нерівності з «і» — перетин",
        "Подвійні нерівності",
        "Складені нерівності з «або» — об'єднання",
        "Зображення на числовій прямій",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Два типи складених нерівностей",
        },
        {
            type: "callout",
            kind: "definition",
            title: "«І» — перетин",
            content:
                "Розв'язком є значення $x$ що задовольняють обидві нерівності одночасно. Множина розв'язків — перетин ($\\cap$) двох множин.",
        },
        {
            type: "callout",
            kind: "definition",
            title: "«Або» — об'єднання",
            content:
                "Розв'язком є значення $x$ що задовольняють хоча б одну нерівність. Множина розв'язків — об'єднання ($\\cup$) двох множин.",
        },
        {
            type: "heading",
            level: 2,
            content: "Подвійні нерівності (тип «і»)",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Подвійна нерівність",
            content:
                "$a < x < b$ означає $x > a$ «і» $x < b$ одночасно. Розв'язується діями на всі три частини одночасно.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Розв'яжи $-2 < 2x + 3 \\leq 9$",
            content:
                "Віднімаємо 3 від усіх частин: $-5 < 2x \\leq 6$. Ділимо на 2: $-\\dfrac{5}{2} < x \\leq 3$. Відповідь: $\\left(-\\dfrac{5}{2}, 3\\right]$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Розв'яжи $1 \\leq 3x - 2 < 10$",
            content:
                "Додаємо 2: $3 \\leq 3x < 12$. Ділимо на 3: $1 \\leq x < 4$. Відповідь: $[1, 4)$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Окремі нерівності з «і»",
        },
        {
            type: "callout",
            kind: "example",
            title: "$x > -1$ і $x < 4$",
            content:
                "Розв'язуємо кожну окремо і беремо перетин. Обидві: $-1 < x < 4$. Відповідь: $(-1, 4)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$2x - 1 > 5$ і $x + 3 < 10$",
            content:
                "Перша: $x > 3$. Друга: $x < 7$. Перетин: $3 < x < 7$. Відповідь: $(3, 7)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Перетин — порожня множина",
            content:
                "$x > 5$ і $x < 2$. Немає значення $x$ що задовольняє обидві одночасно. Відповідь: $\\emptyset$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нерівності з «або»",
        },
        {
            type: "callout",
            kind: "example",
            title: "$x < -3$ або $x > 2$",
            content:
                "Два окремі промені на числовій прямій. Відповідь: $(-\\infty, -3) \\cup (2, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$2x + 1 < -5$ або $3x - 2 > 7$",
            content:
                "Перша: $x < -3$. Друга: $x > 3$. Об'єднання: $(-\\infty, -3) \\cup (3, +\\infty)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Об'єднання — всі дійсні числа",
            content:
                "$x < 5$ або $x > 2$. Перша покриває $(-\\infty, 5)$, друга — $(2, +\\infty)$. Разом: всі $\\mathbb{R}$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Складені нерівності у програмуванні",
            content:
                "Python: $\\text{if } -5 < x < 10$ — прямо як математичний запис! JavaScript: $\\text{if}\\;(x > -5\\;\\&\\&\\;x < 10)$ — оператор $\\&\\&$ для «і». $\\text{if}\\;(x < -5\\;||\\;x > 10)$ — оператор $||$ для «або». Логічні оператори AND і OR відповідають математичним $\\cap$ і $\\cup$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Розв'яжи: $-3 \\leq 2x + 1 < 9$",
            choices: [
                "$-2 \\leq x < 4$, тобто $[-2, 4)$",
                "$-1 \\leq x < 5$, тобто $[-1, 5)$",
                "$-2 < x \\leq 4$, тобто $(-2, 4]$",
                "$-4 \\leq x < 8$, тобто $[-4, 8)$",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Віднімаємо 1 від усіх частин:",
                },
                {
                    type: "math-block",
                    content: "-3 - 1 \\leq 2x < 9 - 1 \\Rightarrow -4 \\leq 2x < 8",
                },
                {
                    type: "math-block",
                    content: "\\Rightarrow -2 \\leq x < 4, \\quad \\text{тобто } [-2, 4)",
                },
            ],
        },
        {
            id: "q2",
            question: "Знайди перетин: $x \\geq -1$ і $x < 3$",
            choices: [
                "$(-\\infty, -1] \\cup [3, +\\infty)$",
                "$[-1, 3)$",
                "$(-1, 3]$",
                "$(-\\infty, +\\infty)$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Перетин двох умов: $x \\geq -1$ і $x < 3$ одночасно:",
                },
                {
                    type: "math-block",
                    content: "-1 \\leq x < 3 \\quad \\Rightarrow \\quad [-1, 3)",
                },
            ],
        },
        {
            id: "q3",
            question: "Запиши у вигляді проміжку: $x < -2$ або $x \\geq 5$",
            choices: [
                "$(-2, 5)$",
                "$[-2, 5]$",
                "$(-\\infty, -2) \\cup [5, +\\infty)$",
                "$(-\\infty, -2] \\cup (5, +\\infty)$",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "«Або» — об'єднання двох множин:",
                },
                {
                    type: "math-block",
                    content: "(-\\infty, -2) \\cup [5, +\\infty)",
                },
                {
                    type: "text",
                    content: "$-2$ не включається (строга), $5$ включається ($\\geq$).",
                },
            ],
        },
        {
            id: "q4",
            question: "Розв'яжи: $3x - 2 < 7$ і $2x + 1 > 5$",
            choices: [
                "$x < 3$ і $x > 2$, тобто $(2, 3)$",
                "$x < 3$ і $x > 2$, тобто $(-\\infty, 3)$",
                "$x > 3$ і $x > 2$, тобто $(3, +\\infty)$",
                "Порожня множина",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "list",
                    items: [
                        "Перша: $3x < 9 \\Rightarrow x < 3$",
                        "Друга: $2x > 4 \\Rightarrow x > 2$",
                        "Перетин: $2 < x < 3$, тобто $(2, 3)$",
                    ],
                },
            ],
        },
        {
            id: "q5",
            question: "Яку множину описує: $x < 1$ або $x > -3$?",
            choices: [
                "$(-3, 1)$",
                "$(-\\infty, 1) \\cup (-3, +\\infty)$",
                "Всі дійсні числа $\\mathbb{R}$",
                "Порожня множина",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content:
                        "$x < 1$ покриває $(-\\infty, 1)$. $x > -3$ покриває $(-3, +\\infty)$. Кожне дійсне число задовольняє хоча б одну умову. Об'єднання = $\\mathbb{R}$.",
                },
            ],
        },
    ],
};

export default lesson;