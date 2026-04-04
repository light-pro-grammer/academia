import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "14-fraction-equations",
    title: "Рівняння з дробами та особливі випадки",
    description: "Множення на НСЗ для усунення дробів, рівняння з десятковими і особливі випадки",
    concepts: [
        "Множення на НСЗ",
        "Рівняння з десятковими дробами",
        "Суперечність — немає розв'язків",
        "Тотожність — нескінченно багато розв'язків",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Рівняння зі звичайними дробами",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Метод НСЗ",
            content:
                "Щоб позбутись дробів — множимо обидві частини рівняння на НСЗ (найменший спільний знаменник) всіх дробів. Це перетворює рівняння на цілочисельне.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{x}{2} + \\dfrac{x}{3} = 5$",
            content:
                "НСЗ$(2,3) = 6$. Множимо на 6: $6 \\cdot \\dfrac{x}{2} + 6 \\cdot \\dfrac{x}{3} = 6 \\cdot 5$. $3x + 2x = 30$. $5x = 30$. $x = 6$. Перевірка: $\\frac{6}{2}+\\frac{6}{3}=3+2=5$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{x+1}{4} - \\dfrac{x-2}{3} = 1$",
            content:
                "НСЗ$(4,3) = 12$. Множимо на 12: $3(x+1) - 4(x-2) = 12$. $3x+3-4x+8=12$. $-x+11=12$. $-x=1$. $x=-1$. Перевірка: $\\frac{0}{4}-\\frac{-3}{3}=0+1=1$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\dfrac{2x}{5} = \\dfrac{x+3}{4}$",
            content:
                "НСЗ$(5,4) = 20$. Множимо: $20 \\cdot \\dfrac{2x}{5} = 20 \\cdot \\dfrac{x+3}{4}$. $8x = 5(x+3)$. $8x = 5x + 15$. $3x = 15$. $x = 5$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Рівняння з десятковими дробами",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Метод множення на степінь 10",
            content:
                "Множимо обидві частини на $10^n$ де $n$ — найбільша кількість знаків після коми серед усіх коефіцієнтів. Це перетворює рівняння на цілочисельне.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$0{,}3x + 1{,}2 = 2{,}7$",
            content:
                "Множимо на 10: $3x + 12 = 27$. $3x = 15$. $x = 5$. Перевірка: $0{,}3(5)+1{,}2=1{,}5+1{,}2=2{,}7$ ✓",
        },
        {
            type: "callout",
            kind: "example",
            title: "$0{,}05x - 0{,}1 = 0{,}25$",
            content:
                "Множимо на 100: $5x - 10 = 25$. $5x = 35$. $x = 7$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Особливий випадок 1: Суперечність",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Суперечність — жодного розв'язку",
            content:
                "Якщо при розв'язуванні змінна зникає і залишається хибне твердження ($3 = 7$, $0 = 5$) — рівняння не має розв'язків. Множина розв'язків: $\\emptyset$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$2x + 1 = 2x + 5$",
            content:
                "Віднімаємо $2x$: $1 = 5$ — хибне твердження. Жодного розв'язку немає. Геометрично: два паралельних рядки що ніколи не перетинаються.",
        },
        {
            type: "heading",
            level: 2,
            content: "Особливий випадок 2: Тотожність",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Тотожність — нескінченно багато розв'язків",
            content:
                "Якщо при розв'язуванні змінна зникає і залишається істинне твердження ($0 = 0$, $5 = 5$) — рівняння є тотожністю. Розв'язком є будь-яке дійсне число. $x \\in \\mathbb{R}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$2(x + 3) = 2x + 6$",
            content:
                "Розкриваємо: $2x + 6 = 2x + 6$. Віднімаємо $2x$: $6 = 6$ — істинне твердження. Будь-яке $x$ є розв'язком.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3(2x - 1) = 6x - 3$",
            content:
                "$6x - 3 = 6x - 3$. $0 = 0$ — тотожність. Нескінченно багато розв'язків.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Три можливих результати лінійного рівняння",
            content:
                "1. Один розв'язок: $x = c$ — звичайний випадок. 2. Жодного розв'язку: суперечність ($a = b$ де $a \\neq b$). 3. Нескінченно багато: тотожність ($0 = 0$). Ці три випадки вичерпують всі можливості для лінійних рівнянь.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Розв'яжи: $\\dfrac{x}{3} + \\dfrac{x}{6} = 4$",
            choices: ["$x = 6$", "$x = 8$", "$x = 12$", "$x = 16$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСЗ$(3,6) = 6$. Множимо на 6:",
                },
                {
                    type: "math-block",
                    content: "2x + x = 24 \\Rightarrow 3x = 24 \\Rightarrow x = 8",
                },
                {
                    type: "text",
                    content: "Перевірка: $\\frac{8}{3}+\\frac{8}{6}=\\frac{16}{6}+\\frac{8}{6}=\\frac{24}{6}=4$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Розв'яжи: $0{,}4x - 0{,}7 = 1{,}3$",
            choices: ["$x = 3$", "$x = 4$", "$x = 5$", "$x = 6$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Множимо на 10:",
                },
                {
                    type: "math-block",
                    content: "4x - 7 = 13 \\Rightarrow 4x = 20 \\Rightarrow x = 5",
                },
            ],
        },
        {
            id: "q3",
            question: "Скільки розв'язків має $5x + 3 = 5x - 2$?",
            choices: ["Один: $x = 0$", "Один: $x = 1$", "Жодного", "Нескінченно багато"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "5x + 3 = 5x - 2 \\Rightarrow 3 = -2",
                },
                {
                    type: "text",
                    content: "Суперечність ($3 \\neq -2$) — жодного розв'язку.",
                },
            ],
        },
        {
            id: "q4",
            question: "Скільки розв'язків має $4(x + 2) = 4x + 8$?",
            choices: ["Один: $x = 0$", "Один: $x = 2$", "Жодного", "Нескінченно багато"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "4x + 8 = 4x + 8 \\Rightarrow 0 = 0",
                },
                {
                    type: "text",
                    content: "Тотожність — нескінченно багато розв'язків.",
                },
            ],
        },
        {
            id: "q5",
            question: "Розв'яжи: $\\dfrac{x+2}{3} = \\dfrac{x-1}{2}$",
            choices: ["$x = 5$", "$x = 7$", "$x = 8$", "$x = 10$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСЗ$(3,2) = 6$. Множимо:",
                },
                {
                    type: "math-block",
                    content: "2(x+2) = 3(x-1)",
                },
                {
                    type: "math-block",
                    content: "2x + 4 = 3x - 3 \\Rightarrow 7 = x",
                },
                {
                    type: "text",
                    content: "Перевірка: $\\frac{9}{3}=3$, $\\frac{6}{2}=3$ ✓",
                },
            ],
        },
    ],
};

export default lesson;