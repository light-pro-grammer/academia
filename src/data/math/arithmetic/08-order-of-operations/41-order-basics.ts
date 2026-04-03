import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "41-order-basics",
    title: "Пріоритет операцій та дужки",
    description: "Чому порядок виконання дій важливий і як дужки змінюють результат обчислень",
    concepts: [
        "Проблема неоднозначності виразів",
        "Роль дужок",
        "Пріоритет операцій",
        "Обчислення зліва направо",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Проблема неоднозначності",
        },
        {
            type: "text",
            content:
                "Вираз $2 + 3 \\times 4$ має два можливих результати залежно від порядку дій:",
        },
        {
            type: "math-block",
            content: "\\text{Спочатку} + : (2+3) \\times 4 = 5 \\times 4 = 20",
        },
        {
            type: "math-block",
            content: "\\text{Спочатку} \\times : 2 + (3 \\times 4) = 2 + 12 = 14",
        },
        {
            type: "text",
            content:
                "Математика потребує єдиної домовленості — щоб кожен вираз мав рівно одне значення. Ця домовленість — порядок виконання дій.",
        },
        {
            type: "heading",
            level: 2,
            content: "Дужки — найвищий пріоритет",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Дужки",
            content:
                "Вираз у дужках завжди обчислюється першим — незалежно від того які операції знаходяться зовні. Дужки явно вказують порядок обчислень.",
        },
        {
            type: "math-block",
            content: "(2 + 3) \\times 4 = 5 \\times 4 = 20",
        },
        {
            type: "math-block",
            content: "2 + (3 \\times 4) = 2 + 12 = 14",
        },
        {
            type: "text",
            content:
                "Коли дужок немає — діє стандартний пріоритет операцій.",
        },
        {
            type: "heading",
            level: 2,
            content: "Пріоритет операцій",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Дужки — найвищий пріоритет",
                "Степені і корені",
                "Множення і ділення — однаковий пріоритет",
                "Додавання і віднімання — однаковий пріоритет, найнижчий",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Множення і ділення — рівноправні",
            content:
                "Множення і ділення мають однаковий пріоритет — вони виконуються зліва направо в порядку появи. Аналогічно додавання і віднімання. $12 \\div 4 \\times 3 = (12 \\div 4) \\times 3 = 3 \\times 3 = 9$, а не $12 \\div (4 \\times 3) = 1$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Обчислення зліва направо",
        },
        {
            type: "text",
            content:
                "Операції одного рівня пріоритету виконуються зліва направо:",
        },
        {
            type: "math-block",
            content: "20 - 5 + 3 = (20-5)+3 = 15+3 = 18",
        },
        {
            type: "math-block",
            content: "20 - (5+3) = 20 - 8 = 12 \\quad (\\text{інший результат!})",
        },
        {
            type: "math-block",
            content: "24 \\div 6 \\times 2 = (24 \\div 6) \\times 2 = 4 \\times 2 = 8",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Типова помилка",
            content:
                "$24 \\div 6 \\times 2 \\neq 24 \\div 12 = 2$. Ділення і множення виконуються зліва направо — не можна «переставляти» множника.",
        },
        {
            type: "heading",
            level: 2,
            content: "Приклади з повним порядком",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вираз: $3 + 4 \\times 2 - 1$",
            content:
                "Спочатку множення: $4 \\times 2 = 8$. Потім зліва направо: $3 + 8 - 1 = 11 - 1 = 10$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вираз: $10 - 2 \\times 3 + 4 \\div 2$",
            content:
                "Спочатку множення і ділення: $2 \\times 3 = 6$, $4 \\div 2 = 2$. Потім: $10 - 6 + 2 = 6$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Порядок дій у програмуванні",
            content:
                "Мови програмування мають власні таблиці пріоритетів операторів. У більшості мов: $**$ або $^$ (степінь) > $*, /, \\%$ > $+, -$ > оператори порівняння > логічні оператори. Дужки скрізь мають найвищий пріоритет.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $5 + 3 \\times 4$",
            choices: ["$17$", "$20$", "$32$", "$60$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Множення виконується перед додаванням:",
                },
                {
                    type: "math-block",
                    content: "5 + 3 \\times 4 = 5 + 12 = 17",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $(5 + 3) \\times 4$",
            choices: ["$17$", "$20$", "$32$", "$60$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Дужки мають найвищий пріоритет:",
                },
                {
                    type: "math-block",
                    content: "(5+3) \\times 4 = 8 \\times 4 = 32",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $24 \\div 4 \\times 2$",
            choices: ["$3$", "$6$", "$12$", "$48$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Ділення і множення виконуються зліва направо:",
                },
                {
                    type: "math-block",
                    content: "24 \\div 4 \\times 2 = (24 \\div 4) \\times 2 = 6 \\times 2 = 12",
                },
                {
                    type: "text",
                    content: "Якби спочатку помножили: $24 \\div (4 \\times 2) = 24 \\div 8 = 3$ — інший результат!",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $15 - 3 \\times 2 + 8 \\div 4$",
            choices: ["$7$", "$9$", "$11$", "$13$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Спочатку множення і ділення:",
                },
                {
                    type: "math-block",
                    content: "3 \\times 2 = 6, \\quad 8 \\div 4 = 2",
                },
                {
                    type: "text",
                    content: "Потім зліва направо:",
                },
                {
                    type: "math-block",
                    content: "15 - 6 + 2 = 9 + 2 = 11",
                },
            ],
        },
        {
            id: "q5",
            question: "Розстав дужки щоб вираз $6 + 2 \\times 5 - 1$ дав результат $39$",
            choices: [
                "$(6+2) \\times (5-1)$",
                "$(6+2) \\times 5 - 1$",
                "$6 + 2 \\times (5-1)$",
                "$6 + (2 \\times 5) - 1$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Перевіряємо кожен варіант:",
                },
                {
                    type: "math-block",
                    content: "(6+2) \\times (5-1) = 8 \\times 4 = 32",
                },
                {
                    type: "math-block",
                    content: "(6+2) \\times 5 - 1 = 8 \\times 5 - 1 = 40 - 1 = 39 \\checkmark",
                },
                {
                    type: "math-block",
                    content: "6 + 2 \\times (5-1) = 6 + 8 = 14",
                },
            ],
        },
    ],
};

export default lesson;