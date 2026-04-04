import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "15-literal-equations",
    title: "Буквені рівняння (Формули)",
    description: "Вираження однієї змінної через інші — перетворення формул з науки і геометрії",
    concepts: [
        "Буквене рівняння і формула",
        "Вираження змінної з формули",
        "Формули геометрії і фізики",
        "Багатокрокові перетворення формул",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Що таке буквене рівняння?",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Буквене рівняння",
            content:
                "Рівняння де більшість або всі величини позначені літерами. Задача — виразити одну змінну через інші. Ті самі правила що й для числових рівнянь — ізолюємо потрібну змінну.",
        },
        {
            type: "text",
            content:
                "Принцип той самий: виконуємо обернені операції щоб ізолювати потрібну змінну. Інші літери поводимо як константи.",
        },
        {
            type: "heading",
            level: 2,
            content: "Прості формули",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $l$ з $A = lw$",
            content:
                "Ділимо обидві частини на $w$: $\\dfrac{A}{w} = \\dfrac{lw}{w}$. $l = \\dfrac{A}{w}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $t$ з $d = rt$",
            content:
                "Ділимо на $r$: $t = \\dfrac{d}{r}$. Формула часу через відстань і швидкість.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $b$ з $A = \\dfrac{1}{2}bh$",
            content:
                "Множимо на 2: $2A = bh$. Ділимо на $h$: $b = \\dfrac{2A}{h}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Формули з кількома кроками",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $m$ з $y = mx + b$",
            content:
                "Віднімаємо $b$: $y - b = mx$. Ділимо на $x$: $m = \\dfrac{y-b}{x}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $w$ з $V = lwh$",
            content:
                "Ділимо на $lh$: $w = \\dfrac{V}{lh}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $l$ з $P = 2l + 2w$",
            content:
                "Віднімаємо $2w$: $P - 2w = 2l$. Ділимо на 2: $l = \\dfrac{P - 2w}{2}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Складні формули",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $C$ з $F = \\dfrac{9}{5}C + 32$",
            content:
                "Віднімаємо 32: $F - 32 = \\dfrac{9}{5}C$. Множимо на $\\dfrac{5}{9}$: $C = \\dfrac{5}{9}(F - 32)$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $x$ з $y = \\dfrac{2x - 3}{5}$",
            content:
                "Множимо на 5: $5y = 2x - 3$. Додаємо 3: $5y + 3 = 2x$. Ділимо на 2: $x = \\dfrac{5y + 3}{2}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Вирази $r$ з $A = \\pi r^2$",
            content:
                "Ділимо на $\\pi$: $\\dfrac{A}{\\pi} = r^2$. Беремо корінь: $r = \\sqrt{\\dfrac{A}{\\pi}}$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Навіщо перетворювати формули?",
            content:
                "Фізика: $v = \\dfrac{d}{t}$ → $t = \\dfrac{d}{v}$ або $d = vt$ — три форми однієї формули. Програмування: функція може повертати різні величини залежно від вхідних даних. Інженерія: розрахунок невідомого параметра за відомими. Одна формула — кілька задач.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Вирази $w$ з $P = 2l + 2w$",
            choices: [
                "$w = P - 2l$",
                "$w = \\dfrac{P - l}{2}$",
                "$w = \\dfrac{P - 2l}{2}$",
                "$w = \\dfrac{P}{2} - l$",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "P - 2l = 2w \\quad \\Rightarrow \\quad w = \\frac{P - 2l}{2}",
                },
                {
                    type: "text",
                    content: "Зауваж: відповідь D також правильна бо $\\frac{P-2l}{2} = \\frac{P}{2} - l$.",
                },
            ],
        },
        {
            id: "q2",
            question: "Вирази $h$ з $A = \\dfrac{1}{2}bh$",
            choices: [
                "$h = 2Ab$",
                "$h = \\dfrac{A}{2b}$",
                "$h = \\dfrac{2A}{b}$",
                "$h = \\dfrac{b}{2A}$",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "2A = bh \\quad \\Rightarrow \\quad h = \\frac{2A}{b}",
                },
            ],
        },
        {
            id: "q3",
            question: "Вирази $b$ з $y = mx + b$",
            choices: [
                "$b = y + mx$",
                "$b = y - mx$",
                "$b = \\dfrac{y}{mx}$",
                "$b = mx - y$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "y - mx = b \\quad \\Rightarrow \\quad b = y - mx",
                },
            ],
        },
        {
            id: "q4",
            question: "Вирази $C$ з $F = \\dfrac{9}{5}C + 32$",
            choices: [
                "$C = \\dfrac{5}{9}F - 32$",
                "$C = \\dfrac{9}{5}(F - 32)$",
                "$C = \\dfrac{5(F-32)}{9}$",
                "$C = 5(F-32) \\div 9$",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "F - 32 = \\frac{9}{5}C \\quad \\Rightarrow \\quad C = \\frac{5(F-32)}{9}",
                },
                {
                    type: "text",
                    content: "Відповіді C і D однакові — обидві правильні.",
                },
            ],
        },
        {
            id: "q5",
            question: "Вирази $x$ з $y = \\dfrac{3x + 1}{4}$",
            choices: [
                "$x = \\dfrac{4y - 1}{3}$",
                "$x = \\dfrac{4y + 1}{3}$",
                "$x = 4y - 3$",
                "$x = \\dfrac{y - 1}{12}$",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "4y = 3x + 1 \\Rightarrow 3x = 4y - 1 \\Rightarrow x = \\frac{4y-1}{3}",
                },
            ],
        },
    ],
};

export default lesson;