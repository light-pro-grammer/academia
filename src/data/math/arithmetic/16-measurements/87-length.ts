import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "87-length",
    title: "Довжина та периметр",
    description: "Метрична та американська системи мір довжини, перетворення між ними і формули периметра",
    concepts: [
        "Метрична система довжини",
        "Американська система мір",
        "Периметр многокутників",
        "Довжина кола і число π",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Метрична система мір довжини",
        },
        {
            type: "text",
            content:
                "Метрична система — міжнародний стандарт. Всі перетворення — множення або ділення на степені 10:",
        },
        {
            type: "list",
            items: [
                "1 км = 1 000 м",
                "1 м = 100 см = 1 000 мм",
                "1 см = 10 мм",
                "1 мм = 0{,}1 см = 0{,}001 м",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Метричні префікси СІ",
            content:
                "мілі- ($10^{-3}$), санти- ($10^{-2}$), деци- ($10^{-1}$), дека- ($10^1$), гекто- ($10^2$), кіло- ($10^3$). Ці префікси однакові для всіх одиниць СІ — довжини, маси, об'єму.",
        },
        {
            type: "heading",
            level: 2,
            content: "Американська система мір",
        },
        {
            type: "list",
            items: [
                "12 дюймів (inches) = 1 фут (foot)",
                "3 фути = 1 ярд (yard)",
                "5 280 футів = 1 760 ярдів = 1 миля (mile)",
                "1 дюйм $\\approx 2{,}54$ см",
                "1 миля $\\approx 1{,}609$ км",
                "1 фут $= 30{,}48$ см",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "Перетворення: 5 футів 9 дюймів у сантиметри",
            content:
                "5 фути = $5 \\times 30{,}48 = 152{,}4$ см. 9 дюймів = $9 \\times 2{,}54 = 22{,}86$ см. Разом: $152{,}4 + 22{,}86 = 175{,}26$ см.",
        },
        {
            type: "heading",
            level: 2,
            content: "Периметр многокутників",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Периметр",
            content:
                "Периметр — загальна довжина контуру фігури. Для довільного многокутника: $P = a_1 + a_2 + \\ldots + a_n$.",
        },
        {
            type: "math-block",
            content: "P_{\\text{прямокутника}} = 2l + 2w = 2(l + w)",
        },
        {
            type: "math-block",
            content: "P_{\\text{квадрата}} = 4s",
        },
        {
            type: "callout",
            kind: "example",
            title: "Периметр прямокутника 7 × 4 м",
            content:
                "$P = 2(7 + 4) = 2 \\times 11 = 22$ м.",
        },
        {
            type: "heading",
            level: 2,
            content: "Число π і довжина кола",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Число π",
            content:
                "Число $\\pi$ — відношення довжини кола до його діаметра. $\\pi = 3{,}14159265\\ldots$ — ірраціональне число. Наближення: $\\pi \\approx 3{,}14$ або $\\pi \\approx \\frac{22}{7}$.",
        },
        {
            type: "math-block",
            content: "C = \\pi d = 2\\pi r",
        },
        {
            type: "callout",
            kind: "example",
            title: "Довжина кола з радіусом 5 см",
            content:
                "$C = 2\\pi r = 2 \\times 3{,}14159 \\times 5 \\approx 31{,}42$ см.",
        },
        {
            type: "list",
            items: [
                "$d$ — діаметр (відрізок через центр)",
                "$r$ — радіус ($r = d/2$)",
                "$C$ — довжина кола (circumference)",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "π у програмуванні",
            content:
                "Python: $\\text{import math}$; $\\text{math.pi} = 3.141592653589793$. JavaScript: $\\text{Math.PI}$. C++: $\\text{M\\_PI}$ або $\\text{acos}(-1)$. Ніколи не використовуй $3.14$ у точних обчисленнях — завжди константу мови.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Скільки міліметрів у $3{,}5$ метра?",
            choices: ["$350$ мм", "$3\\,500$ мм", "$35\\,000$ мм", "$350\\,000$ мм"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "3{,}5 \\text{ м} \\times 1\\,000 = 3\\,500 \\text{ мм}",
                },
            ],
        },
        {
            id: "q2",
            question: "Переведи $180$ см у фути і дюйми (1 фут = 30{,}48 см)",
            choices: ["5 фут 8 дюймів", "5 фут 9 дюймів", "5 фут 10 дюймів", "6 фут"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "180 \\div 30{,}48 \\approx 5{,}906 \\text{ фут}",
                },
                {
                    type: "text",
                    content: "$0{,}906 \\times 12 \\approx 10{,}87$ дюймів $\\approx 11$ дюймів. Але $5$ фут $11$ дюймів = $180{,}34$ см. Найближче: приблизно 5 фут 11 дюймів. При виборі з варіантів $\\approx 6$ фут.",
                },
            ],
        },
        {
            id: "q3",
            question: "Периметр прямокутника $12$ м × $7$ м",
            choices: ["$19$ м", "$38$ м", "$84$ м", "$42$ м"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "P = 2(12 + 7) = 2 \\times 19 = 38 \\text{ м}",
                },
            ],
        },
        {
            id: "q4",
            question: "Знайди довжину кола з діаметром $10$ см (використай $\\pi \\approx 3{,}14$)",
            choices: ["$15{,}7$ см", "$31{,}4$ см", "$62{,}8$ см", "$314$ см"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "C = \\pi d = 3{,}14 \\times 10 = 31{,}4 \\text{ см}",
                },
            ],
        },
        {
            id: "q5",
            question: "Периметр квадрата $45$ см. Яка сторона?",
            choices: ["$9$ см", "$11{,}25$ см", "$15$ см", "$180$ см"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "P = 4s \\Rightarrow s = \\frac{P}{4} = \\frac{45}{4} = 11{,}25 \\text{ см}",
                },
            ],
        },
    ],
};

export default lesson;