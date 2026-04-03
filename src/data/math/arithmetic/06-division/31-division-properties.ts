import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "31-division-properties",
    title: "Властивості та особливі випадки ділення",
    description: "Ділення на 1, на себе, на 0 — і чому ділення некомутативне та неасоціативне",
    concepts: [
        "Ділення на 1 і на себе",
        "Ділення нуля",
        "Неможливість ділення на нуль",
        "Відсутність комутативності та асоціативності",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Ділення на 1",
        },
        {
            type: "math-block",
            content: "a \\div 1 = a \\quad \\text{для будь-якого } a",
        },
        {
            type: "text",
            content:
                "Поділити на 1 — означає скласти одну групу з усіх елементів. Кількість елементів у групі = початкова кількість. $847 \\div 1 = 847$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення числа на себе",
        },
        {
            type: "math-block",
            content: "a \\div a = 1 \\quad \\text{для } a \\neq 0",
        },
        {
            type: "text",
            content:
                "Поділити число на себе — скільки разів воно вміщується в собі. Рівно 1 раз. $1\\,000 \\div 1\\,000 = 1$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нуль у діленні",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Нуль як ділене",
            content:
                "$0 \\div a = 0$ для будь-якого $a \\neq 0$. Розподілити нічого між будь-якою кількістю груп — у кожній групі нічого. $0 \\div 7 = 0$.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Ділення на нуль — не визначено",
            content:
                "$a \\div 0$ — не має сенсу для жодного $a$. Ділення на нуль не визначене в математиці. Це не просто «помилка» — це фундаментальна неможливість.",
        },
        {
            type: "heading",
            level: 2,
            content: "Чому не можна ділити на нуль?",
        },
        {
            type: "text",
            content:
                "Є кілька способів зрозуміти це:",
        },
        {
            type: "callout",
            kind: "example",
            title: "Пояснення через множення",
            content:
                "Якби $12 \\div 0 = x$, то $x \\times 0 = 12$. Але будь-яке число помножене на 0 дає 0, а не 12. Суперечність — такого $x$ не існує.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Пояснення через межу",
            content:
                "$12 \\div 6 = 2$, $12 \\div 3 = 4$, $12 \\div 1 = 12$, $12 \\div 0.1 = 120$, $12 \\div 0.01 = 1\\,200$. Коли дільник прямує до 0 — результат прямує до нескінченності. Нескінченність — не число.",
        },
        {
            type: "callout",
            kind: "info",
            title: "У програмуванні",
            content:
                "Ділення на нуль спричиняє різні наслідки залежно від мови: Python — виняток ZeroDivisionError. C/C++ — невизначена поведінка. JavaScript — повертає Infinity або NaN. Завжди перевіряй дільник перед діленням.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення — некомутативне",
        },
        {
            type: "math-block",
            content: "a \\div b \\neq b \\div a \\quad (\\text{якщо } a \\neq b)",
        },
        {
            type: "math-block",
            content: "12 \\div 4 = 3 \\quad \\text{але} \\quad 4 \\div 12 = \\frac{1}{3}",
        },
        {
            type: "text",
            content:
                "Порядок важливий. Це відрізняє ділення від додавання і множення де порядок не впливає на результат.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення — неасоціативне",
        },
        {
            type: "math-block",
            content: "(a \\div b) \\div c \\neq a \\div (b \\div c)",
        },
        {
            type: "callout",
            kind: "example",
            title: "Перевірка",
            content:
                "$(24 \\div 4) \\div 2 = 6 \\div 2 = 3$. Але $24 \\div (4 \\div 2) = 24 \\div 2 = 12$. Результати різні! Тому при кількох діленнях — виконуємо строго зліва направо.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення і розподільна властивість",
        },
        {
            type: "text",
            content:
                "Ділення частково дистрибутивне відносно додавання (зліва):",
        },
        {
            type: "math-block",
            content: "(a + b) \\div c = a \\div c + b \\div c",
        },
        {
            type: "math-block",
            content: "(24 + 12) \\div 6 = 24 \\div 6 + 12 \\div 6 = 4 + 2 = 6 \\checkmark",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Але не справа",
            content:
                "$a \\div (b + c) \\neq a \\div b + a \\div c$. Перевірка: $12 \\div (2 + 4) = 12 \\div 6 = 2$. Але $12 \\div 2 + 12 \\div 4 = 6 + 3 = 9 \\neq 2$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Чому дорівнює $5\\,847 \\div 1$?",
            choices: ["0", "1", "5 847", "5 848"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "a \\div 1 = a \\quad \\Rightarrow \\quad 5\\,847 \\div 1 = 5\\,847",
                },
            ],
        },
        {
            id: "q2",
            question: "Що відбувається при діленні на нуль?",
            choices: [
                "Результат дорівнює нулю",
                "Результат дорівнює діленому",
                "Результат не визначений",
                "Результат дорівнює нескінченності",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Ділення на нуль математично не визначено. Жодне число не може бути результатом:",
                },
                {
                    type: "text",
                    content:
                        "Якби $12 \\div 0 = x$, то $x \\times 0 = 12$. Але $x \\times 0 = 0 \\neq 12$ для будь-якого $x$. Суперечність.",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $0 \\div 999$",
            choices: ["999", "1", "0", "Не визначено"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "0 \\div a = 0 \\quad (\\text{для } a \\neq 0)",
                },
                {
                    type: "math-block",
                    content: "0 \\div 999 = 0",
                },
                {
                    type: "text",
                    content: "Нуль, поділений на будь-яке ненульове число, дорівнює нулю.",
                },
            ],
        },
        {
            id: "q4",
            question: "Чи правда що $(36 \\div 6) \\div 3 = 36 \\div (6 \\div 3)$?",
            choices: [
                "Так, ділення асоціативне",
                "Ні, ділення неасоціативне",
                "Залежить від чисел",
                "Так, бо результат однаковий",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Перевіряємо обидві частини:",
                },
                {
                    type: "math-block",
                    content: "(36 \\div 6) \\div 3 = 6 \\div 3 = 2",
                },
                {
                    type: "math-block",
                    content: "36 \\div (6 \\div 3) = 36 \\div 2 = 18",
                },
                {
                    type: "text",
                    content: "$2 \\neq 18$ — ділення неасоціативне. Виконуємо строго зліва направо.",
                },
            ],
        },
        {
            id: "q5",
            question: "Використай дистрибутивність: $(48 + 36) \\div 12$",
            choices: ["5", "6", "7", "8"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "(48 + 36) \\div 12 = 48 \\div 12 + 36 \\div 12 = 4 + 3 = 7",
                },
                {
                    type: "text",
                    content: "Перевірка: $84 \\div 12 = 7$ ✓",
                },
            ],
        },
    ],
};

export default lesson;