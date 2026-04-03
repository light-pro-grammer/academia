import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "83-exponent-rules",
    title: "Властивості та правила дій зі степенями",
    description: "П'ять основних правил дій зі степенями — множення, ділення, піднесення до степеня і розподільні властивості",
    concepts: [
        "Правило множення степенів",
        "Правило ділення степенів",
        "Піднесення степеня до степеня",
        "Степінь добутку і частки",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Правило 1: Множення степенів з однаковою основою",
        },
        {
            type: "math-block",
            content: "a^m \\times a^n = a^{m+n}",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обґрунтування",
            content:
                "$2^3 \\times 2^4 = (2 \\times 2 \\times 2) \\times (2 \\times 2 \\times 2 \\times 2) = 2^7 = 2^{3+4}$. При множенні показники складаються.",
        },
        {
            type: "list",
            items: [
                "$x^3 \\times x^5 = x^8$",
                "$5^2 \\times 5^3 = 5^5 = 3\\,125$",
                "$a^4 \\times a = a^5$ (бо $a = a^1$)",
                "$2^3 \\times 2^{-1} = 2^2 = 4$",
            ],
        },
        {
            type: "callout",
            kind: "warning",
            title: "Тільки однакові основи!",
            content:
                "$2^3 \\times 3^2 \\neq 6^5$ — різні основи, правило НЕ застосовується. $2^3 \\times 3^2 = 8 \\times 9 = 72$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Правило 2: Ділення степенів з однаковою основою",
        },
        {
            type: "math-block",
            content: "a^m \\div a^n = a^{m-n} \\quad (a \\neq 0)",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обґрунтування",
            content:
                "$\\dfrac{2^5}{2^3} = \\dfrac{2 \\times 2 \\times 2 \\times 2 \\times 2}{2 \\times 2 \\times 2} = 2^2 = 2^{5-3}$. При діленні показники віднімаються.",
        },
        {
            type: "list",
            items: [
                "$x^7 \\div x^3 = x^4$",
                "$\\dfrac{10^6}{10^4} = 10^2 = 100$",
                "$a^3 \\div a^3 = a^0 = 1$ — підтвердження нульового степеня",
                "$\\dfrac{5^2}{5^4} = 5^{-2} = \\dfrac{1}{25}$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Правило 3: Піднесення степеня до степеня",
        },
        {
            type: "math-block",
            content: "(a^m)^n = a^{m \\times n}",
        },
        {
            type: "callout",
            kind: "example",
            title: "Обґрунтування",
            content:
                "$(2^3)^4 = 2^3 \\times 2^3 \\times 2^3 \\times 2^3 = 2^{3+3+3+3} = 2^{12}$. Показники множаться.",
        },
        {
            type: "list",
            items: [
                "$(x^4)^3 = x^{12}$",
                "$(2^5)^2 = 2^{10} = 1\\,024$",
                "$(a^2)^0 = a^0 = 1$",
                "$(10^3)^2 = 10^6 = 1\\,000\\,000$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Правило 4: Степінь добутку",
        },
        {
            type: "math-block",
            content: "(ab)^n = a^n \\times b^n",
        },
        {
            type: "list",
            items: [
                "$(2x)^3 = 2^3 \\times x^3 = 8x^3$",
                "$(3y)^2 = 9y^2$",
                "$(2 \\times 5)^3 = 2^3 \\times 5^3 = 8 \\times 125 = 1\\,000 = 10^3$ ✓",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Правило 5: Степінь частки",
        },
        {
            type: "math-block",
            content: "\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} \\quad (b \\neq 0)",
        },
        {
            type: "list",
            items: [
                "$\\left(\\dfrac{2}{3}\\right)^3 = \\dfrac{8}{27}$",
                "$\\left(\\dfrac{x}{y}\\right)^4 = \\dfrac{x^4}{y^4}$",
                "$\\left(\\dfrac{1}{2}\\right)^5 = \\dfrac{1}{32}$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Комбінування правил",
        },
        {
            type: "callout",
            kind: "example",
            title: "Спрости: $(2x^3)^4 \\div x^5$",
            content:
                "Крок 1 — степінь добутку: $(2x^3)^4 = 2^4 \\times x^{12} = 16x^{12}$. Крок 2 — ділення: $16x^{12} \\div x^5 = 16x^7$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Правила у програмуванні",
            content:
                "Компілятори оптимізують вирази зі степенями автоматично. $x**2 * x**3$ замінюється на $x**5$. Але це не завжди безпечно для чисел з плаваючою крапкою — заокруглення може дати різні результати.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Спрости: $x^4 \\times x^7$",
            choices: ["$x^{11}$", "$x^{28}$", "$2x^{11}$", "$x^3$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "x^4 \\times x^7 = x^{4+7} = x^{11}",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $\\dfrac{3^7}{3^4}$",
            choices: ["$3$", "$9$", "$27$", "$81$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{3^7}{3^4} = 3^{7-4} = 3^3 = 27",
                },
            ],
        },
        {
            id: "q3",
            question: "Спрости: $(a^3)^5$",
            choices: ["$a^8$", "$a^{15}$", "$a^{53}$", "$5a^3$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "(a^3)^5 = a^{3 \\times 5} = a^{15}",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $(2 \\times 3)^4$",
            choices: ["$24$", "$48$", "$1\\,296$", "$1\\,024$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Два способи:",
                },
                {
                    type: "math-block",
                    content: "(2 \\times 3)^4 = 6^4 = 1\\,296",
                },
                {
                    type: "math-block",
                    content: "\\text{або: } 2^4 \\times 3^4 = 16 \\times 81 = 1\\,296 \\checkmark",
                },
            ],
        },
        {
            id: "q5",
            question: "Спрости: $(3x^2)^3 \\times x^4$",
            choices: ["$27x^{10}$", "$27x^{9}$", "$9x^{10}$", "$27x^{6}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "(3x^2)^3 = 3^3 \\times x^6 = 27x^6",
                },
                {
                    type: "math-block",
                    content: "27x^6 \\times x^4 = 27x^{10}",
                },
            ],
        },
    ],
};

export default lesson;