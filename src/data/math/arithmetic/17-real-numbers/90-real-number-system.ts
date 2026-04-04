import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "90-real-number-system",
    title: "Система дійсних чисел та класифікація",
    description: "Ієрархія числових множин від натуральних до дійсних — і як вони пов'язані між собою",
    concepts: [
        "Ієрархія числових множин",
        "Натуральні, цілі, раціональні, дійсні",
        "Числова пряма дійсних чисел",
        "Класифікація чисел",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Ієрархія числових множин",
        },
        {
            type: "text",
            content:
                "Числові системи розвивались поступово — кожна нова множина розширює попередню. Кожне натуральне число є цілим, кожне ціле — раціональним, кожне раціональне — дійсним.",
        },
        {
            type: "math-block",
            content:
                "\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}",
        },
        {
            type: "heading",
            level: 2,
            content: "Натуральні числа $\\mathbb{N}$",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Натуральні числа",
            content:
                "$\\mathbb{N} = \\{1, 2, 3, 4, 5, \\ldots\\}$. Числа для лічби. Деякі автори включають 0: $\\mathbb{N}_0 = \\{0, 1, 2, 3, \\ldots\\}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Цілі числа $\\mathbb{Z}$",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Цілі числа",
            content:
                "$\\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots\\}$. Додали від'ємні числа і нуль. Назва від нім. «Zahlen» — числа.",
        },
        {
            type: "heading",
            level: 2,
            content: "Раціональні числа $\\mathbb{Q}$",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Раціональні числа",
            content:
                "$\\mathbb{Q} = \\left\\{\\dfrac{p}{q} \\mid p \\in \\mathbb{Z},\\; q \\in \\mathbb{Z},\\; q \\neq 0\\right\\}$. Всі дроби цілих чисел. Назва від лат. «ratio» — відношення.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ірраціональні числа $\\mathbb{I}$",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Ірраціональні числа",
            content:
                "$\\mathbb{I} = \\mathbb{R} \\setminus \\mathbb{Q}$ — числа що не є раціональними. $\\sqrt{2}, \\sqrt{3}, \\pi, e, \\phi$ (золотий перетин). Нескінченний неповторюваний десятковий запис.",
        },
        {
            type: "heading",
            level: 2,
            content: "Дійсні числа $\\mathbb{R}$",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Дійсні числа",
            content:
                "$\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$ — об'єднання раціональних та ірраціональних. Заповнюють всю числову пряму без пропусків (повнота). Кожній точці числової прямої відповідає рівно одне дійсне число.",
        },
        {
            type: "heading",
            level: 2,
            content: "Класифікація конкретних чисел",
        },
        {
            type: "list",
            items: [
                "$7$ — натуральне, ціле, раціональне, дійсне",
                "$-3$ — ціле, раціональне, дійсне (але не натуральне)",
                "$\\frac{2}{3}$ — раціональне, дійсне (але не ціле)",
                "$0{,}\\overline{3}$ — раціональне ($= \\frac{1}{3}$), дійсне",
                "$\\sqrt{2}$ — ірраціональне, дійсне",
                "$\\pi$ — ірраціональне, дійсне",
                "$\\sqrt{9} = 3$ — натуральне, ціле, раціональне, дійсне",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Що за межами дійсних?",
            content:
                "Комплексні числа $\\mathbb{C} = \\{a + bi \\mid a,b \\in \\mathbb{R}\\}$ де $i = \\sqrt{-1}$. $\\mathbb{R} \\subset \\mathbb{C}$. Використовуються в електротехніці, квантовій фізиці, обробці сигналів. Це наступний рівень математики після арифметики.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Яке твердження правильне?",
            choices: [
                "Всі цілі числа є натуральними",
                "Всі раціональні числа є цілими",
                "Всі натуральні числа є раціональними",
                "Всі дійсні числа є раціональними",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}",
                },
                {
                    type: "text",
                    content:
                        "Натуральні $\\subset$ раціональні: будь-яке $n \\in \\mathbb{N}$ можна записати як $\\frac{n}{1} \\in \\mathbb{Q}$. Інші твердження хибні: $-3 \\in \\mathbb{Z}$ але $-3 \\notin \\mathbb{N}$.",
                },
            ],
        },
        {
            id: "q2",
            question: "До яких множин належить число $-\\frac{5}{3}$?",
            choices: [
                "Тільки $\\mathbb{Q}$",
                "$\\mathbb{Q}$ і $\\mathbb{R}$",
                "$\\mathbb{Z}$, $\\mathbb{Q}$ і $\\mathbb{R}$",
                "$\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$ і $\\mathbb{R}$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content:
                        "$-\\frac{5}{3}$ — дріб, не ціле число. Належить $\\mathbb{Q}$ (раціональне) і $\\mathbb{R}$ (дійсне). Не належить $\\mathbb{N}$ і $\\mathbb{Z}$.",
                },
            ],
        },
        {
            id: "q3",
            question: "Яке з чисел є ірраціональним?",
            choices: ["$\\sqrt{4}$", "$\\sqrt{9}$", "$\\sqrt{2}$", "$\\sqrt{\\frac{1}{4}}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "list",
                    items: [
                        "$\\sqrt{4} = 2 \\in \\mathbb{N}$ — раціональне",
                        "$\\sqrt{9} = 3 \\in \\mathbb{N}$ — раціональне",
                        "$\\sqrt{2} = 1{,}41421\\ldots \\in \\mathbb{I}$ — ірраціональне ✓",
                        "$\\sqrt{\\frac{1}{4}} = \\frac{1}{2} \\in \\mathbb{Q}$ — раціональне",
                    ],
                },
            ],
        },
        {
            id: "q4",
            question: "Яке твердження про числову пряму правильне?",
            choices: [
                "На прямій є лише раціональні числа",
                "На прямій є лише цілі числа",
                "Кожній точці прямої відповідає дійсне число",
                "На прямій більше раціональних ніж ірраціональних",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content:
                        "Числова пряма дійсних чисел неперервна — кожна точка відповідає рівно одному дійсному числу. Раціональні числа щільні але ірраціональних насправді «більше» (в сенсі потужності множини).",
                },
            ],
        },
        {
            id: "q5",
            question: "Яке число не є дійсним?",
            choices: ["$\\pi$", "$\\sqrt{-1}$", "$-100$", "$0{,}001$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content:
                        "$\\sqrt{-1} = i$ — уявна одиниця. Не є дійсним числом бо квадрат дійсного числа завжди $\\geq 0$. Це комплексне число поза $\\mathbb{R}$.",
                },
            ],
        },
    ],
};

export default lesson;