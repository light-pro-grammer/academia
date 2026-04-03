import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "60-mixed-number-operations",
    title: "Дії з мішаними числами",
    description: "Додавання, віднімання, множення і ділення мішаних чисел — два підходи і типові помилки",
    concepts: [
        "Додавання мішаних чисел",
        "Віднімання з запозиченням",
        "Множення і ділення мішаних чисел",
        "Вибір оптимального методу",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Два підходи до дій з мішаними числами",
        },
        {
            type: "callout",
            kind: "info",
            title: "Метод А: через неправильні дроби",
            content:
                "Перетворюємо мішані числа на неправильні дроби, виконуємо дію, перетворюємо назад. Зручний для множення і ділення.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Метод Б: окремо цілі і дробові частини",
            content:
                "Додаємо/віднімаємо цілі і дробові частини окремо. Зручний для додавання і простого віднімання.",
        },
        {
            type: "heading",
            level: 2,
            content: "Додавання мішаних чисел",
        },
        {
            type: "callout",
            kind: "example",
            title: "$2\\frac{1}{3} + 1\\frac{1}{4}$ — Метод Б",
            content:
                "Цілі: $2 + 1 = 3$. Дроби: $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$. Результат: $3\\frac{7}{12}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$1\\frac{3}{4} + 2\\frac{2}{3}$ — з перенесенням",
            content:
                "Дроби: $\\frac{3}{4} + \\frac{2}{3} = \\frac{9}{12} + \\frac{8}{12} = \\frac{17}{12} = 1\\frac{5}{12}$. Цілі: $1 + 2 + 1 = 4$. Результат: $4\\frac{5}{12}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Віднімання мішаних чисел",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3\\frac{5}{6} - 1\\frac{1}{4}$ — без запозичення",
            content:
                "Дроби: $\\frac{5}{6} - \\frac{1}{4} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$. Цілі: $3 - 1 = 2$. Результат: $2\\frac{7}{12}$.",
        },
        {
            type: "heading",
            level: 3,
            content: "Запозичення при відніманні",
        },
        {
            type: "text",
            content:
                "Коли дробова частина зменшуваного менша за дробову частину від'ємника — «запозичуємо» одиницю з цілої частини:",
        },
        {
            type: "callout",
            kind: "example",
            title: "$4\\frac{1}{6} - 1\\frac{3}{4}$",
            content:
                "НСК(6,4)=12. $\\frac{1}{6} = \\frac{2}{12} < \\frac{3}{4} = \\frac{9}{12}$ — треба запозичення. $4\\frac{1}{6} = 3\\frac{12+2}{12} = 3\\frac{14}{12}$. Тепер: $3\\frac{14}{12} - 1\\frac{9}{12} = 2\\frac{5}{12}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення мішаних чисел",
        },
        {
            type: "text",
            content:
                "Завжди через неправильні дроби — Метод А:",
        },
        {
            type: "callout",
            kind: "example",
            title: "$2\\frac{1}{2} \\times 1\\frac{3}{5}$",
            content:
                "$2\\frac{1}{2} = \\frac{5}{2}$. $1\\frac{3}{5} = \\frac{8}{5}$. $\\frac{5}{2} \\times \\frac{8}{5} = \\frac{\\cancel{5}^1 \\times \\cancel{8}^4}{\\cancel{2}^1 \\times \\cancel{5}^1} = 4$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$1\\frac{2}{3} \\times 2\\frac{1}{4}$",
            content:
                "$\\frac{5}{3} \\times \\frac{9}{4} = \\frac{5 \\times \\cancel{9}^3}{\\cancel{3}^1 \\times 4} = \\frac{15}{4} = 3\\frac{3}{4}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення мішаних чисел",
        },
        {
            type: "text",
            content:
                "Теж через неправильні дроби — потім ділення як зазвичай:",
        },
        {
            type: "callout",
            kind: "example",
            title: "$3\\frac{1}{2} \\div 1\\frac{3}{4}$",
            content:
                "$\\frac{7}{2} \\div \\frac{7}{4} = \\frac{7}{2} \\times \\frac{4}{7} = \\frac{\\cancel{7}^1 \\times \\cancel{4}^2}{\\cancel{2}^1 \\times \\cancel{7}^1} = 2$.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Типова помилка при множенні",
            content:
                "$2\\frac{1}{3} \\times 3\\frac{1}{2} \\neq 2 \\times 3 + \\frac{1}{3} \\times \\frac{1}{2} = 6\\frac{1}{6}$. Правильно: $\\frac{7}{3} \\times \\frac{7}{2} = \\frac{49}{6} = 8\\frac{1}{6}$. Не можна множити цілі і дробові частини окремо!",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $1\\frac{2}{5} + 2\\frac{1}{3}$",
            choices: ["$3\\frac{3}{8}$", "$3\\frac{11}{15}$", "$3\\frac{3}{15}$", "$4\\frac{1}{15}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСК(5,3)=15. Дроби:",
                },
                {
                    type: "math-block",
                    content: "\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}",
                },
                {
                    type: "math-block",
                    content: "1 + 2 + \\frac{11}{15} = 3\\frac{11}{15}",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $4\\frac{1}{4} - 1\\frac{5}{6}$",
            choices: ["$2\\frac{5}{12}$", "$3\\frac{5}{12}$", "$2\\frac{7}{12}$", "$3\\frac{7}{12}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "НСК(4,6)=12. $\\frac{1}{4}=\\frac{3}{12} < \\frac{5}{6}=\\frac{10}{12}$ — запозичення:",
                },
                {
                    type: "math-block",
                    content: "4\\frac{3}{12} = 3\\frac{15}{12}",
                },
                {
                    type: "math-block",
                    content: "3\\frac{15}{12} - 1\\frac{10}{12} = 2\\frac{5}{12}",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $2\\frac{2}{3} \\times 1\\frac{1}{2}$",
            choices: ["$3\\frac{2}{6}$", "$3$", "$4$", "$3\\frac{1}{3}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "2\\frac{2}{3} = \\frac{8}{3}, \\quad 1\\frac{1}{2} = \\frac{3}{2}",
                },
                {
                    type: "math-block",
                    content: "\\frac{8}{3} \\times \\frac{3}{2} = \\frac{8 \\times \\cancel{3}^1}{\\cancel{3}^1 \\times 2} = \\frac{8}{2} = 4",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $2\\frac{4}{5} \\div 1\\frac{2}{5}$",
            choices: ["$1$", "$2$", "$\\frac{14}{7}$", "$\\frac{14}{5}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "2\\frac{4}{5} = \\frac{14}{5}, \\quad 1\\frac{2}{5} = \\frac{7}{5}",
                },
                {
                    type: "math-block",
                    content: "\\frac{14}{5} \\div \\frac{7}{5} = \\frac{14}{5} \\times \\frac{5}{7} = \\frac{\\cancel{14}^2 \\times \\cancel{5}^1}{\\cancel{5}^1 \\times \\cancel{7}^1} = 2",
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли: $1\\frac{1}{2} + 2\\frac{2}{3} - 1\\frac{1}{6}$",
            choices: ["$2\\frac{1}{2}$", "$3$", "$2\\frac{5}{6}$", "$3\\frac{1}{6}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСК(2,3,6)=6. Перетворюємо дроби:",
                },
                {
                    type: "math-block",
                    content: "\\frac{3}{6} + \\frac{4}{6} - \\frac{1}{6} = \\frac{6}{6} = 1",
                },
                {
                    type: "math-block",
                    content: "\\text{Цілі: } 1 + 2 - 1 = 2. \\quad \\text{Разом: } 2 + 1 = 3",
                },
            ],
        },
    ],
};

export default lesson;