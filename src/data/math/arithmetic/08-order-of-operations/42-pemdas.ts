import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "42-pemdas",
    title: "ДМДД — правило порядку дій",
    description: "Повне правило порядку виконання математичних операцій зі степенями і коренями",
    concepts: [
        "Акронім ДМДД",
        "Степені у порядку дій",
        "Унарний мінус і порядок дій",
        "Складні вирази покроково",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Акронім ДМДД",
        },
        {
            type: "text",
            content:
                "Для запам'ятовування порядку дій використовують мнемоніку. В англійській — PEMDAS або BODMAS. В українській математиці порядок такий:",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "**Д**ужки — все що всередині дужок",
                "**С**тепені та корені",
                "**М**ноження і **Д**ілення — зліва направо",
                "**Д**одавання і **В**іднімання — зліва направо",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "PEMDAS vs BODMAS",
            content:
                "У США використовують PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction. У Британії — BODMAS: Brackets, Orders, Division, Multiplication, Addition, Subtraction. Результат однаковий — бо множення і ділення рівноправні, як і додавання і віднімання.",
        },
        {
            type: "heading",
            level: 2,
            content: "Степені у порядку дій",
        },
        {
            type: "text",
            content:
                "Степені виконуються після дужок але перед множенням і діленням:",
        },
        {
            type: "math-block",
            content: "2 + 3^2 = 2 + 9 = 11",
        },
        {
            type: "math-block",
            content: "(2 + 3)^2 = 5^2 = 25",
        },
        {
            type: "math-block",
            content: "2 \\times 3^2 = 2 \\times 9 = 18",
        },
        {
            type: "math-block",
            content: "(2 \\times 3)^2 = 6^2 = 36",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Степінь і унарний мінус",
            content:
                "$-3^2 = -(3^2) = -9$ — спочатку степінь, потім мінус. $(-3)^2 = 9$ — дужки змінюють результат. Без дужок мінус перед числом застосовується після піднесення до степеня.",
        },
        {
            type: "heading",
            level: 2,
            content: "Корені у порядку дій",
        },
        {
            type: "text",
            content:
                "Корінь має той самий пріоритет що і степінь — вищий за множення:",
        },
        {
            type: "math-block",
            content: "4 + \\sqrt{9} \\times 2 = 4 + 3 \\times 2 = 4 + 6 = 10",
        },
        {
            type: "math-block",
            content: "\\sqrt{4 + 12} = \\sqrt{16} = 4",
        },
        {
            type: "text",
            content:
                "У другому прикладі: вираз під коренем — це неявні дужки. $\\sqrt{4+12}$ означає $\\sqrt{(4+12)}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Покроковий розбір складних виразів",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3 + 2^3 \\times 4 - 12 \\div (2+4)$",
            content:
                "Крок 1 — дужки: $(2+4) = 6$. Вираз: $3 + 2^3 \\times 4 - 12 \\div 6$. Крок 2 — степінь: $2^3 = 8$. Вираз: $3 + 8 \\times 4 - 12 \\div 6$. Крок 3 — множення і ділення: $8 \\times 4 = 32$, $12 \\div 6 = 2$. Вираз: $3 + 32 - 2$. Крок 4 — зліва направо: $3 + 32 - 2 = 35 - 2 = 33$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$5 \\times (2 + 1)^2 - 4 \\times 3$",
            content:
                "Дужки: $(2+1) = 3$. Вираз: $5 \\times 3^2 - 4 \\times 3$. Степінь: $3^2 = 9$. Вираз: $5 \\times 9 - 4 \\times 3$. Множення: $5 \\times 9 = 45$, $4 \\times 3 = 12$. Підсумок: $45 - 12 = 33$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Порядок дій у програмуванні",
        },
        {
            type: "text",
            content:
                "У більшості мов програмування порядок операторів відповідає математичному:",
        },
        {
            type: "list",
            items: [
                "Python: $2 + 3 ** 2 = 11$ (** — степінь)",
                "JavaScript: $2 + 3 ** 2 = 11$",
                "C++: $2 + \\text{pow}(3, 2) = 11$ (функція pow)",
                "У всіх мовах: дужки змінюють пріоритет",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Асоціативність степеня",
            content:
                "У математиці $2^{3^2} = 2^9 = 512$ (правоасоціативно). У Python: $2**3**2 = 512$ (теж правоасоціативно). Але в деяких калькуляторах $2^{3^2}$ може обчислюватись як $(2^3)^2 = 64$ — лівоасоціативно. Завжди використовуй дужки для ясності.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $2 + 3^2 \\times 4$",
            choices: ["$38$", "$44$", "$56$", "$100$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Застосовуємо порядок: степінь → множення → додавання:",
                },
                {
                    type: "math-block",
                    content: "2 + 3^2 \\times 4 = 2 + 9 \\times 4 = 2 + 36 = 38",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $(2 + 3)^2 \\times 4$",
            choices: ["$38$", "$44$", "$100$", "$400$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Дужки → степінь → множення:",
                },
                {
                    type: "math-block",
                    content: "(2+3)^2 \\times 4 = 5^2 \\times 4 = 25 \\times 4 = 100",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $-4^2 + (−4)^2$",
            choices: ["$-32$", "$0$", "$16$", "$32$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "-4^2 = -(4^2) = -16",
                },
                {
                    type: "math-block",
                    content: "(-4)^2 = (-4) \\times (-4) = +16",
                },
                {
                    type: "math-block",
                    content: "-4^2 + (-4)^2 = -16 + 16 = 0",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли покроково: $10 - 2^3 + 4 \\times (6 - 4) \\div 2$",
            choices: ["$2$", "$4$", "$6$", "$8$"],
            correctIndex: 2,
            solution: [
                {
                    type: "list",
                    items: [
                        "Дужки: $(6-4) = 2$",
                        "Степінь: $2^3 = 8$",
                        "Множення і ділення: $4 \\times 2 \\div 2 = 8 \\div 2 = 4$",
                        "Додавання і віднімання: $10 - 8 + 4 = 6$",
                    ],
                },
                {
                    type: "math-block",
                    content: "10 - 8 + 4 = 6",
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли: $\\sqrt{25} + 2^3 \\times 3 - 4$",
            choices: ["$21$", "$25$", "$29$", "$33$"],
            correctIndex: 2,
            solution: [
                {
                    type: "list",
                    items: [
                        "Корінь і степінь: $\\sqrt{25} = 5$, $2^3 = 8$",
                        "Множення: $8 \\times 3 = 24$",
                        "Зліва направо: $5 + 24 - 4 = 25$",
                    ],
                },
                {
                    type: "math-block",
                    content: "\\sqrt{25} + 2^3 \\times 3 - 4 = 5 + 24 - 4 = 25",
                },
            ],
        },
    ],
};

export default lesson;