import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "49-prime-factorization",
    title: "Розклад на прості множники",
    description: "Основна теорема арифметики — кожне число має єдиний розклад на прості множники",
    concepts: [
        "Основна теорема арифметики",
        "Дерево множників",
        "Стандартний вигляд розкладу",
        "Застосування розкладу",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Основна теорема арифметики",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Основна теорема арифметики",
            content:
                "Кожне натуральне число більше за 1 можна єдиним чином представити у вигляді добутку простих чисел (з точністю до порядку множників).",
        },
        {
            type: "math-block",
            content: "12 = 2 \\times 2 \\times 3 = 2^2 \\times 3",
        },
        {
            type: "math-block",
            content: "360 = 2^3 \\times 3^2 \\times 5",
        },
        {
            type: "text",
            content:
                "Прості числа — «атоми» математики. Як хімічні речовини складаються з атомів — так натуральні числа складаються з простих множників.",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод 1: Дерево множників",
        },
        {
            type: "text",
            content:
                "Ділимо число на будь-який простий множник і продовжуємо поки не отримаємо всі прості:",
        },
        {
            type: "callout",
            kind: "example",
            title: "Розклад числа 60",
            content:
                "$60 = 2 \\times 30 = 2 \\times 2 \\times 15 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$. Або інший шлях: $60 = 3 \\times 20 = 3 \\times 4 \\times 5 = 3 \\times 2^2 \\times 5 = 2^2 \\times 3 \\times 5$ — той самий результат!",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод 2: Послідовне ділення",
        },
        {
            type: "text",
            content:
                "Ділимо на найменший простий дільник знову і знову — аж поки не залишиться 1:",
        },
        {
            type: "callout",
            kind: "example",
            title: "Розклад числа 180",
            content:
                "$180 \\div 2 = 90$. $90 \\div 2 = 45$. $45 \\div 3 = 15$. $15 \\div 3 = 5$. $5 \\div 5 = 1$. Результат: $180 = 2^2 \\times 3^2 \\times 5$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Стандартний вигляд",
        },
        {
            type: "text",
            content:
                "Стандартний вигляд розкладу — прості множники у зростаючому порядку зі степенями:",
        },
        {
            type: "math-block",
            content: "n = p_1^{a_1} \\times p_2^{a_2} \\times \\ldots \\times p_k^{a_k}",
        },
        {
            type: "list",
            items: [
                "$72 = 2^3 \\times 3^2$",
                "$100 = 2^2 \\times 5^2$",
                "$1\\,001 = 7 \\times 11 \\times 13$",
                "$1\\,024 = 2^{10}$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Застосування розкладу",
        },
        {
            type: "heading",
            level: 3,
            content: "НСД через розклад",
        },
        {
            type: "text",
            content:
                "НСД — добуток спільних простих множників з найменшими показниками:",
        },
        {
            type: "math-block",
            content: "36 = 2^2 \\times 3^2, \\quad 48 = 2^4 \\times 3",
        },
        {
            type: "math-block",
            content: "\\text{НСД}(36, 48) = 2^2 \\times 3^1 = 12",
        },
        {
            type: "heading",
            level: 3,
            content: "НСК через розклад",
        },
        {
            type: "text",
            content:
                "НСК — добуток всіх простих множників з найбільшими показниками:",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(36, 48) = 2^4 \\times 3^2 = 16 \\times 9 = 144",
        },
        {
            type: "heading",
            level: 3,
            content: "Кількість дільників",
        },
        {
            type: "math-block",
            content: "n = 2^3 \\times 3^2 \\times 5 \\quad \\Rightarrow \\quad \\tau(n) = (3+1)(2+1)(1+1) = 24",
        },
        {
            type: "callout",
            kind: "info",
            title: "Криптографія і розклад",
            content:
                "Знайти розклад числа $n = p \\times q$ де $p, q$ — великі прості — обчислювально складна задача. Найшвидший відомий алгоритм (решето числового поля) має складність $e^{O(n^{1/3})}$. На цьому базується безпека RSA.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Розклади 84 на прості множники",
            choices: [
                "$2^2 \\times 3 \\times 7$",
                "$2 \\times 3 \\times 14$",
                "$4 \\times 21$",
                "$2^3 \\times 3 \\times 7$",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "84 \\div 2 = 42, \\quad 42 \\div 2 = 21, \\quad 21 \\div 3 = 7",
                },
                {
                    type: "math-block",
                    content: "84 = 2^2 \\times 3 \\times 7",
                },
                {
                    type: "text",
                    content: "Перевірка: $4 \\times 3 \\times 7 = 12 \\times 7 = 84$ ✓",
                },
            ],
        },
        {
            id: "q2",
            question: "Яке число має розклад $2^3 \\times 3 \\times 5^2$?",
            choices: ["$200$", "$300$", "$400$", "$600$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "2^3 \\times 3 \\times 5^2 = 8 \\times 3 \\times 25 = 24 \\times 25 = 600",
                },
            ],
        },
        {
            id: "q3",
            question: "Знайди $\\text{НСД}(24, 36)$ через розклад на прості множники",
            choices: ["$4$", "$6$", "$12$", "$72$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "24 = 2^3 \\times 3, \\quad 36 = 2^2 \\times 3^2",
                },
                {
                    type: "math-block",
                    content: "\\text{НСД} = 2^{\\min(3,2)} \\times 3^{\\min(1,2)} = 2^2 \\times 3 = 12",
                },
            ],
        },
        {
            id: "q4",
            question: "Знайди $\\text{НСК}(24, 36)$ через розклад",
            choices: ["$12$", "$48$", "$72$", "$144$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "24 = 2^3 \\times 3, \\quad 36 = 2^2 \\times 3^2",
                },
                {
                    type: "math-block",
                    content: "\\text{НСК} = 2^{\\max(3,2)} \\times 3^{\\max(1,2)} = 2^3 \\times 3^2 = 8 \\times 9 = 72",
                },
            ],
        },
        {
            id: "q5",
            question: "Скільки дільників має число $360 = 2^3 \\times 3^2 \\times 5$?",
            choices: ["$18$", "$24$", "$30$", "$36$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\tau(360) = (3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24",
                },
                {
                    type: "text",
                    content: "Число 360 має 24 дільники — це рекордно багато для числа такого розміру.",
                },
            ],
        },
    ],
};

export default lesson;