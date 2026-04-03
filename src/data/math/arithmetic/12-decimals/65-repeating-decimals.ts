import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "65-repeating-decimals",
    title: "Нескінченні і повторювані десяткові дроби",
    description: "Чому деякі дроби мають нескінченний десятковий запис і як перетворити повторюваний дріб у звичайний",
    concepts: [
        "Повторювані десяткові дроби",
        "Позначення повторення",
        "Перетворення у звичайний дріб",
        "Нескінченні неповторювані дроби",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Типи нескінченних десяткових дробів",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Повторюваний десятковий дріб",
            content:
                "Десятковий дріб у якому після певного знаку одна або кілька цифр повторюються нескінченно. Позначається рискою над повторюваною частиною: $0{,}\\overline{3} = 0{,}333\\ldots$ або $0{,}\\overline{142857} = 0{,}142857142857\\ldots$",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Нескінченний неповторюваний дріб",
            content:
                "Десятковий дріб без жодного повторення — ірраціональне число. $\\pi = 3{,}14159265\\ldots$, $\\sqrt{2} = 1{,}41421356\\ldots$ — нескінченні без закономірності.",
        },
        {
            type: "heading",
            level: 2,
            content: "Позначення повторення",
        },
        {
            type: "list",
            items: [
                "$0{,}\\overline{3} = 0{,}3333\\ldots$ — повторюється 3",
                "$0{,}\\overline{12} = 0{,}121212\\ldots$ — повторюється 12",
                "$0{,}1\\overline{6} = 0{,}1666\\ldots$ — повторюється 6 (після 1)",
                "$0{,}\\overline{142857} = 0{,}142857142857\\ldots$ — це $\\frac{1}{7}$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Перетворення повторюваного дробу у звичайний",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Алгоритм",
            content:
                "Нехай $x = 0{,}\\overline{d_1 d_2 \\ldots d_n}$. Множимо $x$ на $10^n$ (де $n$ — довжина повторюваного блоку). Віднімаємо $x$. Розв'язуємо рівняння.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Перетвори $0{,}\\overline{3}$ у звичайний дріб",
            content:
                "Нехай $x = 0{,}333\\ldots$. Множимо на 10: $10x = 3{,}333\\ldots$. Віднімаємо: $10x - x = 3{,}333\\ldots - 0{,}333\\ldots = 3$. $9x = 3$. $x = \\frac{3}{9} = \\frac{1}{3}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Перетвори $0{,}\\overline{12}$ у звичайний дріб",
            content:
                "Нехай $x = 0{,}121212\\ldots$. Блок з 2 цифр → множимо на 100: $100x = 12{,}1212\\ldots$. $100x - x = 12$. $99x = 12$. $x = \\frac{12}{99} = \\frac{4}{33}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Перетвори $0{,}1\\overline{6}$ у звичайний дріб",
            content:
                "Нехай $x = 0{,}1666\\ldots$. $10x = 1{,}666\\ldots = 1{,}\\overline{6}$. $100x = 16{,}\\overline{6}$. $100x - 10x = 16{,}\\overline{6} - 1{,}\\overline{6} = 15$. $90x = 15$. $x = \\frac{15}{90} = \\frac{1}{6}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Загальна формула",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Формула для чистого повторення",
            content:
                "$0{,}\\overline{d_1 d_2 \\ldots d_n} = \\frac{d_1 d_2 \\ldots d_n}{\\underbrace{99\\ldots9}_{n}}$. Наприклад: $0{,}\\overline{7} = \\frac{7}{9}$, $0{,}\\overline{13} = \\frac{13}{99}$, $0{,}\\overline{142857} = \\frac{142857}{999999} = \\frac{1}{7}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Усі раціональні числа — повторювані або скінченні",
        },
        {
            type: "callout",
            kind: "info",
            title: "Важливий факт",
            content:
                "Число є раціональним тоді і тільки тоді коли його десятковий запис або скінченний або повторюваний. Нескінченні неповторювані дроби ($\\pi$, $\\sqrt{2}$, $e$) — ірраціональні числа. Вони не можуть бути записані як $\\frac{a}{b}$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Доведення що $0{,}\\overline{9} = 1$",
            content:
                "Нехай $x = 0{,}999\\ldots$. $10x = 9{,}999\\ldots$. $10x - x = 9$. $9x = 9$. $x = 1$. Отже $0{,}\\overline{9} = 1$ — не «майже 1», а рівно 1. Це математичний факт.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Яке позначення для числа $0{,}454545\\ldots$?",
            choices: ["$0{,}4\\overline{5}$", "$0{,}\\overline{45}$", "$0{,}\\overline{4}5$", "$0{,}45\\overline{0}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Блок «45» повторюється з самого початку після коми:",
                },
                {
                    type: "math-block",
                    content: "0{,}454545\\ldots = 0{,}\\overline{45}",
                },
            ],
        },
        {
            id: "q2",
            question: "Перетвори $0{,}\\overline{7}$ у звичайний дріб",
            choices: ["$\\frac{7}{10}$", "$\\frac{7}{9}$", "$\\frac{7}{99}$", "$\\frac{1}{7}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "За формулою: один повторюваний знак → знаменник 9:",
                },
                {
                    type: "math-block",
                    content: "0{,}\\overline{7} = \\frac{7}{9}",
                },
                {
                    type: "text",
                    content: "Перевірка: $7 \\div 9 = 0{,}777\\ldots = 0{,}\\overline{7}$ ✓",
                },
            ],
        },
        {
            id: "q3",
            question: "Перетвори $0{,}\\overline{36}$ у звичайний дріб",
            choices: ["$\\frac{36}{100}$", "$\\frac{4}{11}$", "$\\frac{36}{99}$", "B і C однакові"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "0{,}\\overline{36} = \\frac{36}{99} = \\frac{4}{11}",
                },
                {
                    type: "text",
                    content: "Перевірка: $4 \\div 11 = 0{,}363636\\ldots = 0{,}\\overline{36}$ ✓. Обидві відповіді B і C правильні.",
                },
            ],
        },
        {
            id: "q4",
            question: "Яке з чисел є ірраціональним?",
            choices: [
                "$0{,}\\overline{3}$",
                "$0{,}1010010001\\ldots$ (без закономірності)",
                "$0{,}\\overline{142857}$",
                "$0{,}125$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "list",
                    items: [
                        "$0{,}\\overline{3} = \\frac{1}{3}$ — раціональне",
                        "$0{,}1010010001\\ldots$ — нескінченне неповторюване → ірраціональне ✓",
                        "$0{,}\\overline{142857} = \\frac{1}{7}$ — раціональне",
                        "$0{,}125 = \\frac{1}{8}$ — раціональне",
                    ],
                },
            ],
        },
        {
            id: "q5",
            question: "Чому дорівнює $0{,}\\overline{9}$?",
            choices: ["$0{,}99999$", "Нескінченно близько до 1 але не 1", "$1$", "$\\frac{9}{10}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Доводимо алгебраїчно:",
                },
                {
                    type: "math-block",
                    content: "x = 0{,}\\overline{9} \\Rightarrow 10x = 9{,}\\overline{9}",
                },
                {
                    type: "math-block",
                    content: "10x - x = 9 \\Rightarrow 9x = 9 \\Rightarrow x = 1",
                },
                {
                    type: "text",
                    content: "$0{,}\\overline{9} = 1$ — математичний факт, не наближення.",
                },
            ],
        },
    ],
};

export default lesson;