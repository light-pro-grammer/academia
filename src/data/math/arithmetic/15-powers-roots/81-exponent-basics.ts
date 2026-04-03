import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "81-exponent-basics",
    title: "Основи степенів",
    description: "Степінь як скорочений запис повторного множення — основа, показник і базові правила",
    concepts: [
        "Основа і показник степеня",
        "Квадрат і куб числа",
        "Нульовий і перший степінь",
        "Обчислення степеневих виразів",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Що таке степінь?",
        },
        {
            type: "text",
            content:
                "Степінь — скорочений запис повторного множення однакових множників. Замість $3 \\times 3 \\times 3 \\times 3$ пишемо $3^4$.",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Степінь числа",
            content:
                "$a^n = \\underbrace{a \\times a \\times \\ldots \\times a}_{n \\text{ разів}}$. Тут $a$ — основа степеня, $n$ — показник степеня.",
        },
        {
            type: "math-block",
            content: "3^4 = 3 \\times 3 \\times 3 \\times 3 = 81",
        },
        {
            type: "heading",
            level: 2,
            content: "Квадрат числа",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Квадрат",
            content:
                "$n^2 = n \\times n$ — число помножене само на себе. Читається «$n$ у квадраті» або «$n$ у другому степені». Геометрично — площа квадрата зі стороною $n$.",
        },
        {
            type: "list",
            items: [
                "$1^2 = 1$, $2^2 = 4$, $3^2 = 9$, $4^2 = 16$, $5^2 = 25$",
                "$6^2 = 36$, $7^2 = 49$, $8^2 = 64$, $9^2 = 81$, $10^2 = 100$",
                "$11^2 = 121$, $12^2 = 144$, $13^2 = 169$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Куб числа",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Куб",
            content:
                "$n^3 = n \\times n \\times n$ — число помножене тричі. Читається «$n$ у кубі». Геометрично — об'єм куба з ребром $n$.",
        },
        {
            type: "list",
            items: [
                "$1^3 = 1$, $2^3 = 8$, $3^3 = 27$, $4^3 = 64$, $5^3 = 125$",
                "$6^3 = 216$, $7^3 = 343$, $8^3 = 512$, $9^3 = 729$, $10^3 = 1\\,000$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Перший степінь",
        },
        {
            type: "math-block",
            content: "n^1 = n \\quad \\text{для будь-якого } n",
        },
        {
            type: "text",
            content:
                "Будь-яке число в першому степені дорівнює самому собі. $7^1 = 7$, $100^1 = 100$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нульовий степінь",
        },
        {
            type: "math-block",
            content: "n^0 = 1 \\quad \\text{для будь-якого } n \\neq 0",
        },
        {
            type: "callout",
            kind: "info",
            title: "Чому $n^0 = 1$?",
            content:
                "З закономірності ділення: $\\dfrac{n^3}{n^3} = n^{3-3} = n^0$. Але також $\\dfrac{n^3}{n^3} = 1$. Тому $n^0 = 1$. Або: $n^2 = 9$, $n^1 = 3$, $n^0 = 1$ — кожного разу ділимо на $n = 3$.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "$0^0$ — особливий випадок",
            content:
                "$0^0$ є невизначеним у загальному випадку. У комбінаториці і деяких контекстах домовляються $0^0 = 1$ для зручності формул.",
        },
        {
            type: "heading",
            level: 2,
            content: "Обчислення степеневих виразів",
        },
        {
            type: "math-block",
            content: "2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32",
        },
        {
            type: "math-block",
            content: "5^3 = 5 \\times 5 \\times 5 = 125",
        },
        {
            type: "math-block",
            content: "10^4 = 10\\,000",
        },
        {
            type: "callout",
            kind: "info",
            title: "Степені у програмуванні",
            content:
                "Python: $2**5 = 32$. JavaScript: $2**5 = 32$ або $\\text{Math.pow}(2, 5) = 32$. C++: $\\text{pow}(2, 5) = 32$. SQL: $\\text{POWER}(2, 5) = 32$.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли $3^4$",
            choices: ["$12$", "$64$", "$81$", "$243$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "3^4 = 3 \\times 3 \\times 3 \\times 3 = 9 \\times 9 = 81",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли $2^7$",
            choices: ["$64$", "$128$", "$256$", "$14$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "2^7 = 2^6 \\times 2 = 64 \\times 2 = 128",
                },
            ],
        },
        {
            id: "q3",
            question: "Чому дорівнює $17^0$?",
            choices: ["$0$", "$1$", "$17$", "$170$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "n^0 = 1 \\quad \\Rightarrow \\quad 17^0 = 1",
                },
            ],
        },
        {
            id: "q4",
            question: "Яка площа квадрата зі стороною $13$ см?",
            choices: ["$26$ см²", "$52$ см²", "$169$ см²", "$196$ см²"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "S = 13^2 = 169 \\text{ см}^2",
                },
            ],
        },
        {
            id: "q5",
            question: "Який об'єм куба з ребром $4$ см?",
            choices: ["$12$ см³", "$16$ см³", "$48$ см³", "$64$ см³"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "V = 4^3 = 64 \\text{ см}^3",
                },
            ],
        },
    ],
};

export default lesson;