import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "50-gcd-lcm",
    title: "НСД та НСК — алгоритми знаходження",
    description: "Найбільший спільний дільник і найменше спільне кратне — алгоритм Евкліда і практичне застосування",
    concepts: [
        "Найбільший спільний дільник (НСД)",
        "Алгоритм Евкліда",
        "Зв'язок НСД і НСК",
        "Взаємно прості числа",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Найбільший спільний дільник",
        },
        {
            type: "callout",
            kind: "definition",
            title: "НСД (найбільший спільний дільник)",
            content:
                "НСД двох або більше чисел — найбільше число яке ділить кожне з них без остачі. Позначення: $\\text{НСД}(a, b)$ або $\\gcd(a, b)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "НСД(18, 24)",
            content:
                "Дільники 18: $\\{1,2,3,6,9,18\\}$. Дільники 24: $\\{1,2,3,4,6,8,12,24\\}$. Спільні: $\\{1,2,3,6\\}$. НСД = 6.",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод 1: перелік дільників",
        },
        {
            type: "text",
            content:
                "Знаходимо всі дільники кожного числа і беремо найбільший спільний. Працює для малих чисел але неефективний для великих.",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод 2: розклад на прості множники",
        },
        {
            type: "math-block",
            content: "120 = 2^3 \\times 3 \\times 5, \\quad 180 = 2^2 \\times 3^2 \\times 5",
        },
        {
            type: "math-block",
            content: "\\text{НСД}(120, 180) = 2^2 \\times 3 \\times 5 = 60",
        },
        {
            type: "text",
            content:
                "Беремо кожен спільний простий множник з найменшим показником.",
        },
        {
            type: "heading",
            level: 2,
            content: "Метод 3: Алгоритм Евкліда",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Алгоритм Евкліда",
            content:
                "$\\gcd(a, b) = \\gcd(b, a \\bmod b)$ поки $b \\neq 0$. Коли $b = 0$ — відповідь $a$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "НСД(252, 105) алгоритмом Евкліда",
            content:
                "$\\gcd(252, 105)$: $252 = 2 \\times 105 + 42$. $\\gcd(105, 42)$: $105 = 2 \\times 42 + 21$. $\\gcd(42, 21)$: $42 = 2 \\times 21 + 0$. $\\gcd(21, 0) = 21$. Відповідь: НСД = 21.",
        },
        {
            type: "text",
            content:
                "Алгоритм Евкліда дуже швидкий — він знаходить НСД за $O(\\log(\\min(a,b)))$ кроків. Для чисел з мільярдами цифр — все одно швидко.",
        },
        {
            type: "heading",
            level: 2,
            content: "Зв'язок НСД і НСК",
        },
        {
            type: "math-block",
            content: "\\text{НСД}(a,b) \\times \\text{НСК}(a,b) = a \\times b",
        },
        {
            type: "math-block",
            content: "\\text{НСК}(a,b) = \\frac{a \\times b}{\\text{НСД}(a,b)}",
        },
        {
            type: "callout",
            kind: "example",
            title: "НСК через НСД",
            content:
                "$\\text{НСД}(12, 18) = 6$. $\\text{НСК}(12, 18) = \\frac{12 \\times 18}{6} = \\frac{216}{6} = 36$. Перевірка: $36/12=3$ ✓, $36/18=2$ ✓",
        },
        {
            type: "heading",
            level: 2,
            content: "Взаємно прості числа",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Взаємно прості числа",
            content:
                "Числа $a$ і $b$ взаємно прості якщо $\\text{НСД}(a, b) = 1$. Вони не мають спільних простих дільників. Приклади: $(8, 9)$, $(4, 9)$, $(5, 7)$, $(15, 28)$.",
        },
        {
            type: "text",
            content:
                "Для взаємно простих: $\\text{НСК}(a, b) = a \\times b$. Наприклад: $\\text{НСК}(8, 9) = 72 = 8 \\times 9$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Практичне застосування",
        },
        {
            type: "list",
            items: [
                "Спрощення дробів: $\\frac{24}{36} = \\frac{24 \\div 6}{36 \\div 6} = \\frac{4}{6}$... ні, $\\frac{2}{3}$",
                "Спільний знаменник: $\\frac{1}{6} + \\frac{1}{4} = \\frac{2}{12} + \\frac{3}{12}$, де $\\text{НСК}(6,4) = 12$",
                "Задачі на синхронізацію — коли збігаються події",
                "Криптографія — алгоритм Евкліда у RSA",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "Спрощення дробу",
            content:
                "$\\frac{48}{72}$: $\\text{НСД}(48, 72) = 24$. $\\frac{48}{72} = \\frac{48 \\div 24}{72 \\div 24} = \\frac{2}{3}$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Розширений алгоритм Евкліда",
            content:
                "Існує розширена версія що знаходить не лише $\\gcd(a,b)$ але й цілі $x, y$ такі що $ax + by = \\gcd(a,b)$. Це лінійне діофантове рівняння — основа RSA і модульної арифметики.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Знайди $\\text{НСД}(36, 48)$ алгоритмом Евкліда",
            choices: ["$6$", "$12$", "$18$", "$24$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\gcd(48, 36): \\quad 48 = 1 \\times 36 + 12",
                },
                {
                    type: "math-block",
                    content: "\\gcd(36, 12): \\quad 36 = 3 \\times 12 + 0",
                },
                {
                    type: "math-block",
                    content: "\\gcd(12, 0) = 12",
                },
            ],
        },
        {
            id: "q2",
            question: "Знайди $\\text{НСК}(15, 25)$",
            choices: ["$5$", "$25$", "$75$", "$375$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "\\text{НСД}(15, 25) = 5",
                },
                {
                    type: "math-block",
                    content: "\\text{НСК}(15, 25) = \\frac{15 \\times 25}{5} = \\frac{375}{5} = 75",
                },
                {
                    type: "text",
                    content: "Перевірка: $75/15=5$ ✓, $75/25=3$ ✓",
                },
            ],
        },
        {
            id: "q3",
            question: "Чи є числа 35 і 48 взаємно простими?",
            choices: [
                "Ні — мають спільний дільник 7",
                "Ні — мають спільний дільник 3",
                "Так — $\\text{НСД}(35,48)=1$",
                "Ні — обидва непарні",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "35 = 5 \\times 7, \\quad 48 = 2^4 \\times 3",
                },
                {
                    type: "text",
                    content: "Спільних простих множників немає → $\\text{НСД}(35, 48) = 1$ → взаємно прості ✓",
                },
            ],
        },
        {
            id: "q4",
            question: "Спрости дріб $\\frac{84}{126}$",
            choices: ["$\\frac{2}{3}$", "$\\frac{3}{4}$", "$\\frac{4}{6}$", "$\\frac{7}{9}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "84 = 2^2 \\times 3 \\times 7, \\quad 126 = 2 \\times 3^2 \\times 7",
                },
                {
                    type: "math-block",
                    content: "\\text{НСД}(84, 126) = 2 \\times 3 \\times 7 = 42",
                },
                {
                    type: "math-block",
                    content: "\\frac{84}{126} = \\frac{84 \\div 42}{126 \\div 42} = \\frac{2}{3}",
                },
            ],
        },
        {
            id: "q5",
            question: "Знайди $\\text{НСД}(144, 0)$",
            choices: ["$0$", "$1$", "$72$", "$144$"],
            correctIndex: 3,
            solution: [
                {
                    type: "text",
                    content: "За алгоритмом Евкліда: коли один з аргументів 0 — відповідь інший аргумент:",
                },
                {
                    type: "math-block",
                    content: "\\gcd(144, 0) = 144",
                },
                {
                    type: "text",
                    content: "Логіка: кожне число ділить 0 (бо $0 = 0 \\times k$), тому НСД(a, 0) = a.",
                },
            ],
        },
    ],
};

export default lesson;