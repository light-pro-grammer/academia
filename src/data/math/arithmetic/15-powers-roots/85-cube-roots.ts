import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "85-cube-roots",
    title: "Кубічні та вищі корені",
    description: "Кубічний корінь як обернена дія до куба — точні куби, оцінювання і корені вищих степенів",
    concepts: [
        "Означення кубічного кореня",
        "Точні куби",
        "Оцінювання кубічних коренів",
        "Корені вищих степенів",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Кубічний корінь",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Кубічний корінь",
            content:
                "$\\sqrt[3]{a}$ — число яке при піднесенні до куба дає $a$. $\\sqrt[3]{a} = b \\Leftrightarrow b^3 = a$. На відміну від квадратного кореня — кубічний корінь існує для від'ємних чисел теж.",
        },
        {
            type: "math-block",
            content: "\\sqrt[3]{8} = 2 \\quad \\text{бо} \\quad 2^3 = 8",
        },
        {
            type: "math-block",
            content: "\\sqrt[3]{-8} = -2 \\quad \\text{бо} \\quad (-2)^3 = -8",
        },
        {
            type: "callout",
            kind: "info",
            title: "Ключова відмінність від квадратного кореня",
            content:
                "$\\sqrt{-4}$ — не існує в дійсних числах (квадрат не може бути від'ємним). $\\sqrt[3]{-8} = -2$ — існує, бо куб від'ємного числа від'ємний.",
        },
        {
            type: "heading",
            level: 2,
            content: "Точні куби і їх корені",
        },
        {
            type: "list",
            items: [
                "$\\sqrt[3]{1} = 1$ бо $1^3 = 1$",
                "$\\sqrt[3]{8} = 2$ бо $2^3 = 8$",
                "$\\sqrt[3]{27} = 3$ бо $3^3 = 27$",
                "$\\sqrt[3]{64} = 4$ бо $4^3 = 64$",
                "$\\sqrt[3]{125} = 5$ бо $5^3 = 125$",
                "$\\sqrt[3]{216} = 6$ бо $6^3 = 216$",
                "$\\sqrt[3]{343} = 7$ бо $7^3 = 343$",
                "$\\sqrt[3]{512} = 8$ бо $8^3 = 512$",
                "$\\sqrt[3]{729} = 9$ бо $9^3 = 729$",
                "$\\sqrt[3]{1\\,000} = 10$ бо $10^3 = 1\\,000$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Від'ємні кубічні корені",
        },
        {
            type: "list",
            items: [
                "$\\sqrt[3]{-1} = -1$",
                "$\\sqrt[3]{-27} = -3$",
                "$\\sqrt[3]{-125} = -5$",
                "$\\sqrt[3]{-1\\,000} = -10$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Оцінювання кубічних коренів",
        },
        {
            type: "callout",
            kind: "example",
            title: "Оцінити $\\sqrt[3]{20}$",
            content:
                "$2^3 = 8 < 20 < 27 = 3^3$. Отже $2 < \\sqrt[3]{20} < 3$. $20$ ближче до $27$ ніж до $8$ → $\\sqrt[3]{20} \\approx 2{,}71$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Оцінити $\\sqrt[3]{100}$",
            content:
                "$4^3 = 64 < 100 < 125 = 5^3$. Отже $4 < \\sqrt[3]{100} < 5$. $\\sqrt[3]{100} \\approx 4{,}64$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Зв'язок з дробовими показниками",
        },
        {
            type: "math-block",
            content: "\\sqrt[n]{a} = a^{1/n}",
        },
        {
            type: "math-block",
            content: "\\sqrt[3]{8} = 8^{1/3} = 2, \\quad \\sqrt{25} = 25^{1/2} = 5",
        },
        {
            type: "math-block",
            content: "\\sqrt[3]{a^2} = a^{2/3}, \\quad \\sqrt{a^3} = a^{3/2}",
        },
        {
            type: "heading",
            level: 2,
            content: "Корені вищих степенів",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Корінь n-го степеня",
            content:
                "$\\sqrt[n]{a}$ — число яке в $n$-му степені дає $a$. $\\sqrt[4]{16} = 2$ бо $2^4 = 16$. $\\sqrt[5]{32} = 2$ бо $2^5 = 32$.",
        },
        {
            type: "list",
            items: [
                "$\\sqrt[4]{16} = 2$ бо $2^4 = 16$",
                "$\\sqrt[4]{81} = 3$ бо $3^4 = 81$",
                "$\\sqrt[5]{32} = 2$ бо $2^5 = 32$",
                "$\\sqrt[6]{64} = 2$ бо $2^6 = 64$",
                "$\\sqrt[10]{1\\,024} = 2$ бо $2^{10} = 1\\,024$",
            ],
        },
        {
            type: "callout",
            kind: "warning",
            title: "Парні і непарні корені",
            content:
                "Корінь парного степеня з від'ємного числа — не існує в дійсних числах: $\\sqrt[4]{-16}$ — не визначено. Корінь непарного степеня — завжди існує: $\\sqrt[5]{-32} = -2$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Корені у програмуванні",
            content:
                "Python: $8**(1/3) \\approx 2.0$, але через float може бути $1.9999999$. Точніше: $\\text{round}(8**(1/3)) = 2$. Або: $\\text{import math}$, $\\text{math.pow}(8, 1/3)$. JavaScript: $\\text{Math.cbrt}(8) = 2$ — вбудована функція кубічного кореня.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли $\\sqrt[3]{125}$",
            choices: ["$3$", "$4$", "$5$", "$6$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "\\sqrt[3]{125} = 5 \\quad \\text{бо} \\quad 5^3 = 125",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли $\\sqrt[3]{-64}$",
            choices: ["$-8$", "$-4$", "$4$", "Не існує"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\sqrt[3]{-64} = -4 \\quad \\text{бо} \\quad (-4)^3 = -64",
                },
                {
                    type: "text",
                    content: "Кубічний корінь існує для від'ємних чисел.",
                },
            ],
        },
        {
            id: "q3",
            question: "Між якими цілими числами знаходиться $\\sqrt[3]{50}$?",
            choices: ["між 2 і 3", "між 3 і 4", "між 4 і 5", "між 5 і 6"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "3^3 = 27 < 50 < 64 = 4^3",
                },
                {
                    type: "math-block",
                    content: "3 < \\sqrt[3]{50} < 4 \\quad (\\sqrt[3]{50} \\approx 3{,}68)",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли $\\sqrt[4]{81}$",
            choices: ["$2$", "$3$", "$4$", "$9$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\sqrt[4]{81} = 3 \\quad \\text{бо} \\quad 3^4 = 81",
                },
            ],
        },
        {
            id: "q5",
            question: "Запиши $\\sqrt[3]{a^4}$ як степінь",
            choices: ["$a^{3/4}$", "$a^{4/3}$", "$a^{12}$", "$a^7$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\sqrt[3]{a^4} = (a^4)^{1/3} = a^{4/3}",
                },
            ],
        },
    ],
};

export default lesson;