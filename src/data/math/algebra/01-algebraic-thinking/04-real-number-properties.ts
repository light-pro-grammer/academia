import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "04-real-number-properties",
    title: "Властивості дійсних чисел та рівностей",
    description: "Фундаментальні закони алгебри — від переставного до розподільного закону і властивості рівностей",
    concepts: [
        "Переставна і сполучна властивості",
        "Розподільна властивість",
        "Нейтральні та обернені елементи",
        "Властивості рівності і нерівності",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Чому властивості важливі?",
        },
        {
            type: "text",
            content:
                "Властивості дійсних чисел — це аксіоми алгебри. Вони завжди виконуються і дозволяють перетворювати вирази не змінюючи їх значення. Всі алгебраїчні маніпуляції спираються на ці закони.",
        },
        {
            type: "heading",
            level: 2,
            content: "Переставна властивість (комутативність)",
        },
        {
            type: "math-block",
            content: "a + b = b + a \\qquad a \\times b = b \\times a",
        },
        {
            type: "text",
            content:
                "Порядок операндів не впливає на результат. Діє для $+$ і $\\times$. НЕ діє для $-$ і $\\div$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Приклади",
            content:
                "$3x + 5 = 5 + 3x$. $(-7) \\times x = x \\times (-7)$. Але: $x - 5 \\neq 5 - x$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Сполучна властивість (асоціативність)",
        },
        {
            type: "math-block",
            content: "(a + b) + c = a + (b + c) \\qquad (ab)c = a(bc)",
        },
        {
            type: "text",
            content:
                "Групування операндів не впливає на результат. Дозволяє перегрупувати для зручності обчислення.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Практичне застосування",
            content:
                "$(2x \\cdot 5) \\cdot 3 = 2x \\cdot (5 \\cdot 3) = 2x \\cdot 15 = 30x$. Зручніше перегрупувати числа окремо.",
        },
        {
            type: "heading",
            level: 2,
            content: "Розподільна властивість (дистрибутивність)",
        },
        {
            type: "math-block",
            content: "a(b + c) = ab + ac \\qquad a(b - c) = ab - ac",
        },
        {
            type: "text",
            content:
                "Найважливіша властивість алгебри. Дозволяє розкривати дужки і виносити спільний множник.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Розкриття дужок",
            content:
                "$3(x + 4) = 3x + 12$. $-2(5x - 3) = -10x + 6$. $x(x + 1) = x^2 + x$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Винесення спільного множника",
            content:
                "$6x + 9 = 3(2x + 3)$. $x^2 + x = x(x + 1)$. Це зворотна операція до розкриття дужок.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нейтральні елементи",
        },
        {
            type: "math-block",
            content: "a + 0 = a \\qquad a \\times 1 = a",
        },
        {
            type: "text",
            content:
                "$0$ — нейтральний елемент додавання. $1$ — нейтральний елемент множення. Вони не змінюють значення виразу.",
        },
        {
            type: "heading",
            level: 2,
            content: "Обернені елементи",
        },
        {
            type: "math-block",
            content: "a + (-a) = 0 \\qquad a \\times \\frac{1}{a} = 1 \\quad (a \\neq 0)",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Адитивно обернене",
            content:
                "До числа $a$ — це $-a$. Їх сума = 0. $x + (-x) = 0$.",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Мультиплікативно обернене",
            content:
                "До числа $a \\neq 0$ — це $\\frac{1}{a}$. Їх добуток = 1. $x \\cdot \\frac{1}{x} = 1$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Властивість нуля при множенні",
        },
        {
            type: "math-block",
            content: "a \\times 0 = 0",
        },
        {
            type: "text",
            content:
                "Добуток будь-якого числа і нуля = нуль. Наслідок: якщо $ab = 0$, то $a = 0$ або $b = 0$ — основа для розв'язання рівнянь.",
        },
        {
            type: "heading",
            level: 2,
            content: "Властивості рівності",
        },
        {
            type: "list",
            items: [
                "Рефлексивна: $a = a$ (будь-яке число рівне собі)",
                "Симетрична: якщо $a = b$, то $b = a$",
                "Транзитивна: якщо $a = b$ і $b = c$, то $a = c$",
                "Підстановки: якщо $a = b$, то $a$ можна замінити на $b$ у будь-якому виразі",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Властивості нерівності",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Множення на від'ємне — змінює знак нерівності",
            content:
                "Якщо $a > b$ і $c > 0$: $ac > bc$ (знак зберігається). Якщо $a > b$ і $c < 0$: $ac < bc$ (знак змінюється!). Наприклад: $3 > 1$, але $3 \\times (-2) = -6 < -2 = 1 \\times (-2)$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Яка властивість використана: $3x + 7 = 7 + 3x$?",
            choices: [
                "Сполучна властивість",
                "Переставна властивість додавання",
                "Розподільна властивість",
                "Властивість нуля",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "a + b = b + a \\quad \\Rightarrow \\quad 3x + 7 = 7 + 3x",
                },
                {
                    type: "text",
                    content: "Переставна (комутативна) властивість додавання.",
                },
            ],
        },
        {
            id: "q2",
            question: "Розкрий дужки: $-4(3x - 5)$",
            choices: ["$-12x - 20$", "$-12x + 20$", "$12x - 20$", "$-12x + 5$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "-4(3x - 5) = -4 \\times 3x + (-4) \\times (-5) = -12x + 20",
                },
            ],
        },
        {
            id: "q3",
            question: "Винеси спільний множник: $8x^2 + 12x$",
            choices: ["$4(2x^2 + 3x)$", "$4x(2x + 3)$", "$2x(4x + 6)$", "$x(8x + 12)$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСД(8, 12) = 4, спільна змінна $x$. Виносимо $4x$:",
                },
                {
                    type: "math-block",
                    content: "8x^2 + 12x = 4x(2x + 3)",
                },
            ],
        },
        {
            id: "q4",
            question: "Яка властивість: якщо $x = 5$ і $y = x$, то $y = 5$?",
            choices: [
                "Рефлексивна",
                "Симетрична",
                "Транзитивна",
                "Підстановки",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content:
                        "Транзитивна: якщо $x = 5$ і $y = x$, то $y = 5$. Ланцюжок рівностей: $a = b$ і $b = c$ → $a = c$.",
                },
            ],
        },
        {
            id: "q5",
            question: "Якщо $x > 3$ і ми множимо обидві частини на $-2$, що отримаємо?",
            choices: [
                "$-2x > -6$",
                "$-2x < -6$",
                "$2x > 6$",
                "$-2x = -6$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "При множенні на від'ємне число знак нерівності змінюється:",
                },
                {
                    type: "math-block",
                    content: "x > 3 \\quad \\xRightarrow{\\times(-2)} \\quad -2x < -6",
                },
            ],
        },
    ],
};

export default lesson;