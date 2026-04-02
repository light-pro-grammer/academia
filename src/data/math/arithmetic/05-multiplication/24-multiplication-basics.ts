import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "24-multiplication-basics",
    title: "Основні поняття множення",
    description: "Множення як прискорене додавання — три моделі розуміння і базова термінологія",
    concepts: [
        "Множення як повторне додавання",
        "Модель масиву",
        "Множник, множник, добуток",
        "Знаки множення",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Що таке множення?",
        },
        {
            type: "text",
            content:
                "Множення — це прискорене додавання однакових груп. Замість того щоб записувати довгу суму — використовуємо коротший запис.",
        },
        {
            type: "math-block",
            content: "4 + 4 + 4 + 4 + 4 = 5 \\times 4 = 20",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Множення",
            content:
                "$a \\times b$ означає: взяти $b$ груп по $a$ елементів (або $a$ груп по $b$ елементів). Результат — добуток.",
        },
        {
            type: "heading",
            level: 2,
            content: "Термінологія",
        },
        {
            type: "math-block",
            content:
                "\\underbrace{5}_{\\text{множник}} \\times \\underbrace{4}_{\\text{множник}} = \\underbrace{20}_{\\text{добуток}}",
        },
        {
            type: "text",
            content:
                "Обидва числа що множаться називаються множниками. Результат — добуток. На відміну від додавання де є «перший» і «другий» доданок — у множенні обидва множники рівноправні.",
        },
        {
            type: "heading",
            level: 2,
            content: "Три моделі множення",
        },
        {
            type: "heading",
            level: 3,
            content: "Модель 1: Рівні групи",
        },
        {
            type: "callout",
            kind: "example",
            title: "5 коробок по 4 олівці",
            content:
                "$5 \\times 4 = 20$ олівців. Перший множник — кількість груп (5 коробок). Другий множник — розмір групи (4 олівці).",
        },
        {
            type: "heading",
            level: 3,
            content: "Модель 2: Масив (прямокутна сітка)",
        },
        {
            type: "text",
            content:
                "Прямокутник з рядків і стовпців. $3 \\times 5$ — прямокутник з 3 рядків і 5 стовпців:",
        },
        {
            type: "math-block",
            content:
                "\\begin{array}{ccccc} \\bullet & \\bullet & \\bullet & \\bullet & \\bullet \\\\ \\bullet & \\bullet & \\bullet & \\bullet & \\bullet \\\\ \\bullet & \\bullet & \\bullet & \\bullet & \\bullet \\end{array} \\quad = 3 \\times 5 = 15",
        },
        {
            type: "text",
            content:
                "Модель масиву пов'язує множення з площею прямокутника. $3 \\times 5$ — площа прямокутника 3 на 5.",
        },
        {
            type: "heading",
            level: 3,
            content: "Модель 3: Числова пряма (стрибки)",
        },
        {
            type: "text",
            content:
                "$4 \\times 3$ — чотири стрибки по 3 кроки на числовій прямій:",
        },
        {
            type: "math-block",
            content:
                "0 \\xrightarrow{+3} 3 \\xrightarrow{+3} 6 \\xrightarrow{+3} 9 \\xrightarrow{+3} 12",
        },
        {
            type: "heading",
            level: 2,
            content: "Знаки множення",
        },
        {
            type: "list",
            items: [
                "Знак ×: $3 \\times 4$ — традиційний запис",
                "Крапка: $3 \\cdot 4$ — часто в алгебрі (щоб не плутати з літерою x)",
                "Дужки: $3(4)$ або $(3)(4)$ — в алгебрі",
                "Зірочка: $3 * 4$ — у програмуванні",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на 0 і 1",
        },
        {
            type: "math-block",
            content: "a \\times 0 = 0 \\quad \\text{для будь-якого } a",
        },
        {
            type: "math-block",
            content: "a \\times 1 = a \\quad \\text{для будь-якого } a",
        },
        {
            type: "callout",
            kind: "info",
            title: "Чому a × 0 = 0?",
            content:
                "$5 \\times 0$ означає 5 груп по 0 елементів. У кожній групі нічого немає — разом теж нічого. $0 \\times 5$ — нуль груп по 5 елементів. Груп немає — елементів теж немає.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Зв'язок з площею",
            content:
                "Модель масиву пов'язує множення з геометрією. Площа прямокутника $= \\text{довжина} \\times \\text{ширина}$. Це не збіг — площа прямокутника визначається через підрахунок одиничних квадратів, що і є множенням.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Яке з виразів є записом множення: «6 груп по 7»?",
            choices: ["$6 + 7$", "$6 \\times 7$", "$7 - 6$", "$6 ÷ 7$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "«6 груп по 7» — це повторне додавання 7 шість разів:",
                },
                {
                    type: "math-block",
                    content: "7 + 7 + 7 + 7 + 7 + 7 = 6 \\times 7 = 42",
                },
            ],
        },
        {
            id: "q2",
            question: "У виразі $8 \\times 9 = 72$ яке число є добутком?",
            choices: ["8", "9", "72", "Обидва 8 і 9"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content:
                        "\\underbrace{8}_{\\text{множник}} \\times \\underbrace{9}_{\\text{множник}} = \\underbrace{72}_{\\text{добуток}}",
                },
                {
                    type: "text",
                    content: "Добуток — результат множення. 8 і 9 — множники, 72 — добуток.",
                },
            ],
        },
        {
            id: "q3",
            question: "Масив має 6 рядків і 8 стовпців. Скільки елементів всього?",
            choices: ["14", "28", "42", "48"],
            correctIndex: 3,
            solution: [
                {
                    type: "text",
                    content: "Масив $6 \\times 8$ — прямокутник з 6 рядків і 8 стовпців:",
                },
                {
                    type: "math-block",
                    content: "6 \\times 8 = 48 \\text{ елементів}",
                },
                {
                    type: "text",
                    content: "Це відповідає площі прямокутника $6 \\times 8 = 48$ одиничних квадратів.",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $1\\,847 \\times 0$",
            choices: ["1 847", "1 848", "0", "1"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Будь-яке число помножене на нуль дорівнює нулю:",
                },
                {
                    type: "math-block",
                    content: "a \\times 0 = 0 \\quad \\Rightarrow \\quad 1\\,847 \\times 0 = 0",
                },
                {
                    type: "text",
                    content:
                        "Незалежно від розміру числа — множення на нуль завжди дає нуль.",
                },
            ],
        },
        {
            id: "q5",
            question: "На числовій прямій: 5 стрибків по 6 кроків. Де опиняємось?",
            choices: ["11", "25", "30", "56"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "5 стрибків по 6 — це множення:",
                },
                {
                    type: "math-block",
                    content: "5 \\times 6 = 30",
                },
                {
                    type: "math-block",
                    content:
                        "0 \\xrightarrow{+6} 6 \\xrightarrow{+6} 12 \\xrightarrow{+6} 18 \\xrightarrow{+6} 24 \\xrightarrow{+6} 30",
                },
            ],
        },
    ],
};

export default lesson;