import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "91-rational-representations",
    title: "Раціональні числа та їх подання",
    description: "Три форми запису раціональних чисел — дріб, десятковий і відсоток — і перетворення між ними",
    concepts: [
        "Раціональні числа як дроби",
        "Скінченні і повторювані десяткові дроби",
        "Перетворення повторюваних дробів",
        "Єдиний погляд: дріб, десятковий, відсоток",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Що є раціональним числом?",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Раціональне число",
            content:
                "Число $r$ раціональне якщо його можна записати у вигляді $r = \\dfrac{p}{q}$ де $p, q \\in \\mathbb{Z}$ і $q \\neq 0$.",
        },
        {
            type: "list",
            items: [
                "Будь-яке ціле число: $5 = \\dfrac{5}{1}$, $-3 = \\dfrac{-3}{1}$",
                "Будь-який звичайний дріб: $\\dfrac{3}{7}$, $-\\dfrac{11}{4}$",
                "Скінченний десятковий дріб: $0{,}25 = \\dfrac{1}{4}$",
                "Повторюваний десятковий дріб: $0{,}\\overline{3} = \\dfrac{1}{3}$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Скінченні десяткові → Дріб",
        },
        {
            type: "math-block",
            content: "0{,}7 = \\frac{7}{10}, \\quad 0{,}25 = \\frac{25}{100} = \\frac{1}{4}, \\quad 0{,}125 = \\frac{125}{1000} = \\frac{1}{8}",
        },
        {
            type: "heading",
            level: 2,
            content: "Повторювані десяткові → Дріб",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Алгебраїчний метод",
            content:
                "Нехай $x$ = повторюваний дріб. Множимо на $10^n$ де $n$ — довжина блоку. Віднімаємо $x$. Розв'язуємо рівняння.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$0{,}\\overline{6} = ?$",
            content:
                "$x = 0{,}6666\\ldots$. $10x = 6{,}6666\\ldots$. $10x - x = 6$. $9x = 6$. $x = \\frac{6}{9} = \\frac{2}{3}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$0{,}\\overline{27} = ?$",
            content:
                "$x = 0{,}272727\\ldots$. $100x = 27{,}272727\\ldots$. $100x - x = 27$. $99x = 27$. $x = \\frac{27}{99} = \\frac{3}{11}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$0{,}4\\overline{5} = ?$",
            content:
                "$x = 0{,}4555\\ldots$. $10x = 4{,}555\\ldots$. $100x = 45{,}555\\ldots$. $100x - 10x = 41$. $90x = 41$. $x = \\frac{41}{90}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Єдиний погляд: три форми одного числа",
        },
        {
            type: "text",
            content:
                "Дріб, десятковий дріб і відсоток — три різних записи одного і того ж раціонального числа:",
        },
        {
            type: "list",
            items: [
                "$\\frac{1}{4} = 0{,}25 = 25\\%$",
                "$\\frac{1}{3} = 0{,}\\overline{3} \\approx 33{,}3\\%$",
                "$\\frac{3}{8} = 0{,}375 = 37{,}5\\%$",
                "$\\frac{5}{4} = 1{,}25 = 125\\%$",
                "$\\frac{7}{20} = 0{,}35 = 35\\%$",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Яку форму обирати?",
            content:
                "Дріб — точна форма, зручна для обчислень. Десятковий — зручний для порівняння і введення в калькулятор. Відсоток — зручний для комунікації (знижки, зростання, частки). Математично всі три еквівалентні.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Яке з чисел є раціональним?",
            choices: ["$\\sqrt{3}$", "$\\pi$", "$0{,}\\overline{142857}$", "$e$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "$0{,}\\overline{142857}$ — повторюваний десятковий дріб:",
                },
                {
                    type: "math-block",
                    content: "0{,}\\overline{142857} = \\frac{1}{7} \\in \\mathbb{Q}",
                },
                {
                    type: "text",
                    content: "$\\sqrt{3}$, $\\pi$, $e$ — ірраціональні числа.",
                },
            ],
        },
        {
            id: "q2",
            question: "Перетвори $0{,}\\overline{4}$ у звичайний дріб",
            choices: ["$\\frac{4}{10}$", "$\\frac{2}{5}$", "$\\frac{4}{9}$", "$\\frac{1}{4}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "x = 0{,}\\overline{4}, \\quad 10x = 4{,}\\overline{4}",
                },
                {
                    type: "math-block",
                    content: "9x = 4 \\quad \\Rightarrow \\quad x = \\frac{4}{9}",
                },
            ],
        },
        {
            id: "q3",
            question: "Перетвори $0{,}\\overline{18}$ у звичайний дріб",
            choices: ["$\\frac{18}{100}$", "$\\frac{2}{11}$", "$\\frac{18}{99}$", "B і C однакові"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "x = 0{,}\\overline{18}, \\quad 100x = 18{,}\\overline{18}",
                },
                {
                    type: "math-block",
                    content: "99x = 18 \\quad \\Rightarrow \\quad x = \\frac{18}{99} = \\frac{2}{11}",
                },
                {
                    type: "text",
                    content: "B ($\\frac{2}{11}$) і C ($\\frac{18}{99}$) — одне і те саме число.",
                },
            ],
        },
        {
            id: "q4",
            question: "Запиши $\\frac{7}{8}$ у всіх трьох формах",
            choices: [
                "$0{,}875$ і $87{,}5\\%$",
                "$0{,}78$ і $78\\%$",
                "$0{,}7\\overline{8}$ і $78{,}\\overline{8}\\%$",
                "$0{,}875$ і $78\\%$",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{7}{8} = 7 \\div 8 = 0{,}875",
                },
                {
                    type: "math-block",
                    content: "0{,}875 \\times 100\\% = 87{,}5\\%",
                },
            ],
        },
        {
            id: "q5",
            question: "Перетвори $0{,}1\\overline{6}$ у звичайний дріб",
            choices: ["$\\frac{1}{6}$", "$\\frac{1}{5}$", "$\\frac{2}{11}$", "$\\frac{1}{7}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "x = 0{,}1666\\ldots, \\quad 10x = 1{,}\\overline{6}, \\quad 100x = 16{,}\\overline{6}",
                },
                {
                    type: "math-block",
                    content: "90x = 15 \\quad \\Rightarrow \\quad x = \\frac{15}{90} = \\frac{1}{6}",
                },
            ],
        },
    ],
};

export default lesson;