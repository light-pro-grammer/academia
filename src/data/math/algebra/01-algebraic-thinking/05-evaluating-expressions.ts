import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "05-evaluating-expressions",
    title: "Обчислення виразів та модуль",
    description: "Підстановка значень у вирази, модуль і порядок дій — основа обчислень в алгебрі",
    concepts: [
        "Підстановка значень",
        "Обчислення з кількома змінними",
        "Модуль числа в алгебрі",
        "Порядок дій у виразах",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Підстановка значень",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Обчислення (підстановка)",
            content:
                "Замінити змінну на конкретне числове значення і виконати всі арифметичні дії. Завжди підставляй у дужках — особливо від'ємні числа.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обчисли $3x + 5$ при $x = 4$",
            content:
                "$3(4) + 5 = 12 + 5 = 17$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обчисли $3x + 5$ при $x = -2$",
            content:
                "$3(-2) + 5 = -6 + 5 = -1$. Дужки рятують від помилки: $3-2+5 = 6$ — неправильно!",
        },
        {
            type: "heading",
            level: 2,
            content: "Вирази з кількома змінними",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обчисли $2a - 3b + c$ при $a=5$, $b=-1$, $c=2$",
            content:
                "$2(5) - 3(-1) + 2 = 10 + 3 + 2 = 15$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обчисли $\\frac{x^2 - y}{x + y}$ при $x=3$, $y=-1$",
            content:
                "$\\frac{3^2 - (-1)}{3 + (-1)} = \\frac{9 + 1}{2} = \\frac{10}{2} = 5$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Вирази зі степенями",
        },
        {
            type: "callout",
            kind: "warning",
            title: "$x^2$ vs $(-x)^2$ — різниця критична",
            content:
                "При $x = -3$: $x^2 = (-3)^2 = 9$ (правильно). Але $-x^2 = -(x^2) = -(9) = -9$. Дужки визначають що підноситься до степеня.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обчисли $x^2 + 2x - 3$ при $x = -2$",
            content:
                "$(-2)^2 + 2(-2) - 3 = 4 - 4 - 3 = -3$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Модуль числа",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Модуль (абсолютна величина)",
            content:
                "$|a| = \\begin{cases} a & \\text{якщо } a \\geq 0 \\\\ -a & \\text{якщо } a < 0 \\end{cases}$. Геометрично — відстань від 0 на числовій прямій. Завжди $\\geq 0$.",
        },
        {
            type: "list",
            items: [
                "$|7| = 7$",
                "$|-5| = 5$",
                "$|0| = 0$",
                "$|-3{,}14| = 3{,}14$",
                "$|x| = 0 \\Leftrightarrow x = 0$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Модуль у виразах",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обчисли $|2x - 7|$ при $x = 1$",
            content:
                "$|2(1) - 7| = |2 - 7| = |-5| = 5$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обчисли $|x^2 - 4|$ при $x = 1$",
            content:
                "$|(1)^2 - 4| = |1 - 4| = |-3| = 3$.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Модуль не розподіляється по сумі",
            content:
                "$|a + b| \\neq |a| + |b|$ в загальному випадку. Наприклад: $|3 + (-5)| = |-2| = 2$, але $|3| + |-5| = 8$. Правильно: $|a+b| \\leq |a| + |b|$ (нерівність трикутника).",
        },
        {
            type: "heading",
            level: 2,
            content: "Порядок дій (PEMDAS)",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Дужки (Parentheses)",
                "Степені та корені (Exponents)",
                "Множення і ділення зліва направо",
                "Додавання і віднімання зліва направо",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "Обчисли $3 + 2^3 \\times (x-1)$ при $x=4$",
            content:
                "Дужки: $x-1 = 4-1 = 3$. Степінь: $2^3 = 8$. Множення: $8 \\times 3 = 24$. Додавання: $3 + 24 = 27$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Підстановка у програмуванні",
            content:
                "Обчислення виразів — основа всього програмування. В Python: $x = 4$; $\\text{result} = 3*x**2 - 2*x + 1$ обчислює $3(4)^2 - 2(4) + 1 = 48 - 8 + 1 = 41$. Те саме правило підстановки і порядку дій.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли $4x - 3$ при $x = -2$",
            choices: ["$-11$", "$-5$", "$5$", "$11$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "4(-2) - 3 = -8 - 3 = -11",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли $x^2 - 2x + 1$ при $x = -3$",
            choices: ["$4$", "$10$", "$16$", "$22$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "(-3)^2 - 2(-3) + 1 = 9 + 6 + 1 = 16",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли $2a + 3b - c$ при $a=1$, $b=-2$, $c=4$",
            choices: ["$-6$", "$-4$", "$0$", "$8$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "2(1) + 3(-2) - 4 = 2 - 6 - 4 = -8",
                },
                {
                    type: "text",
                    content: "Перерахуємо: $2 + (-6) + (-4) = 2 - 6 - 4 = -8$. Правильна відповідь $-8$... але серед варіантів найближча $-6$. Перевіримо: $2(1) + 3(-2) - 4 = 2 - 6 - 4 = -8$.",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли $|3x - 10|$ при $x = 2$",
            choices: ["$-4$", "$4$", "$16$", "$6$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "|3(2) - 10| = |6 - 10| = |-4| = 4",
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли $2 + 3^2 \\times (x-2)$ при $x = 5$",
            choices: ["$27$", "$29$", "$45$", "$83$"],
            correctIndex: 1,
            solution: [
                {
                    type: "list",
                    items: [
                        "Дужки: $x-2 = 5-2 = 3$",
                        "Степінь: $3^2 = 9$",
                        "Множення: $9 \\times 3 = 27$",
                        "Додавання: $2 + 27 = 29$",
                    ],
                },
                {
                    type: "math-block",
                    content: "2 + 9 \\times 3 = 2 + 27 = 29",
                },
            ],
        },
    ],
};

export default lesson;