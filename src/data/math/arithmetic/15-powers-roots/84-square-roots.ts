import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "84-square-roots",
    title: "Квадратні корені",
    description: "Квадратний корінь як обернена дія до квадрата — точні значення, оцінювання і спрощення",
    concepts: [
        "Означення квадратного кореня",
        "Точні квадрати",
        "Оцінювання квадратних коренів",
        "Спрощення коренів",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Що таке квадратний корінь?",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Квадратний корінь",
            content:
                "$\\sqrt{a}$ — число яке при піднесенні до квадрата дає $a$. $\\sqrt{a} = b \\Leftrightarrow b^2 = a$ і $b \\geq 0$. Знак $\\sqrt{}$ називається радикалом.",
        },
        {
            type: "math-block",
            content: "\\sqrt{25} = 5 \\quad \\text{бо} \\quad 5^2 = 25",
        },
        {
            type: "callout",
            kind: "info",
            title: "Чому лише невід'ємний корінь?",
            content:
                "І $5$ і $-5$ у квадраті дають $25$. Але за означенням $\\sqrt{25} = 5$ (основний корінь — невід'ємний). Якщо потрібні обидва — пишуть $\\pm\\sqrt{25} = \\pm 5$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Точні квадрати і їх корені",
        },
        {
            type: "text",
            content:
                "Точний квадрат — число що є квадратом цілого числа. Їх корені — цілі числа:",
        },
        {
            type: "list",
            items: [
                "$\\sqrt{1}=1$, $\\sqrt{4}=2$, $\\sqrt{9}=3$, $\\sqrt{16}=4$, $\\sqrt{25}=5$",
                "$\\sqrt{36}=6$, $\\sqrt{49}=7$, $\\sqrt{64}=8$, $\\sqrt{81}=9$, $\\sqrt{100}=10$",
                "$\\sqrt{121}=11$, $\\sqrt{144}=12$, $\\sqrt{169}=13$, $\\sqrt{196}=14$, $\\sqrt{225}=15$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Оцінювання квадратних коренів",
        },
        {
            type: "text",
            content:
                "Для чисел що не є точними квадратами — знаходимо між якими цілими числами знаходиться корінь:",
        },
        {
            type: "callout",
            kind: "example",
            title: "Оцінити $\\sqrt{10}$",
            content:
                "$3^2 = 9 < 10 < 16 = 4^2$. Отже $3 < \\sqrt{10} < 4$. Ближче до 3 бо $10$ ближче до $9$ ніж до $16$. $\\sqrt{10} \\approx 3{,}162$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Оцінити $\\sqrt{50}$",
            content:
                "$7^2 = 49 < 50 < 64 = 8^2$. Отже $7 < \\sqrt{50} < 8$. $50$ дуже близьке до $49$ → $\\sqrt{50} \\approx 7{,}07$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Спрощення квадратних коренів",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Корінь з добутку",
            content:
                "$\\sqrt{ab} = \\sqrt{a} \\times \\sqrt{b}$ (для $a, b \\geq 0$). Дозволяє виносити множники з-під кореня.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\sqrt{12}$",
            content:
                "$\\sqrt{12} = \\sqrt{4 \\times 3} = \\sqrt{4} \\times \\sqrt{3} = 2\\sqrt{3}$. Шукаємо найбільший точний квадрат що ділить 12: це 4.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\sqrt{72}$",
            content:
                "$\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$. Або: $\\sqrt{72} = \\sqrt{4 \\times 18} = 2\\sqrt{18} = 2\\sqrt{9 \\times 2} = 6\\sqrt{2}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\sqrt{200}$",
            content:
                "$\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Корінь з частки",
        },
        {
            type: "math-block",
            content: "\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\quad (b \\neq 0)",
        },
        {
            type: "math-block",
            content: "\\sqrt{\\frac{9}{16}} = \\frac{\\sqrt{9}}{\\sqrt{16}} = \\frac{3}{4}",
        },
        {
            type: "heading",
            level: 2,
            content: "Порівняння квадратних коренів",
        },
        {
            type: "text",
            content:
                "Для порівняння — порівнюємо підкореневі вирази (корінь — функція що зростає):",
        },
        {
            type: "math-block",
            content: "\\sqrt{7} < \\sqrt{11} \\quad \\text{бо} \\quad 7 < 11",
        },
        {
            type: "math-block",
            content: "3 < \\sqrt{10} < 4 \\quad \\text{бо} \\quad 9 < 10 < 16",
        },
        {
            type: "callout",
            kind: "info",
            title: "Корінь у геометрії і фізиці",
            content:
                "Теорема Піфагора: $c = \\sqrt{a^2 + b^2}$. Відстань між точками: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$. Швидкість частинки: $v = \\sqrt{\\frac{2E_k}{m}}$. Квадратний корінь — скрізь де є квадратична залежність.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли $\\sqrt{144}$",
            choices: ["$11$", "$12$", "$13$", "$14$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "\\sqrt{144} = 12 \\quad \\text{бо} \\quad 12^2 = 144",
                },
            ],
        },
        {
            id: "q2",
            question: "Між якими цілими числами знаходиться $\\sqrt{30}$?",
            choices: ["між 4 і 5", "між 5 і 6", "між 6 і 7", "між 7 і 8"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "5^2 = 25 < 30 < 36 = 6^2",
                },
                {
                    type: "math-block",
                    content: "5 < \\sqrt{30} < 6",
                },
                {
                    type: "text",
                    content: "$\\sqrt{30} \\approx 5{,}477$ — ближче до 5.",
                },
            ],
        },
        {
            id: "q3",
            question: "Спрости $\\sqrt{48}$",
            choices: ["$4\\sqrt{3}$", "$6\\sqrt{2}$", "$4\\sqrt{6}$", "$2\\sqrt{12}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\sqrt{48} = \\sqrt{16 \\times 3} = \\sqrt{16} \\times \\sqrt{3} = 4\\sqrt{3}",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли $\\sqrt{\\frac{25}{49}}$",
            choices: ["$\\frac{5}{7}$", "$\\frac{7}{5}$", "$\\frac{25}{49}$", "$5$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\sqrt{\\frac{25}{49}} = \\frac{\\sqrt{25}}{\\sqrt{49}} = \\frac{5}{7}",
                },
            ],
        },
        {
            id: "q5",
            question: "Спрости $\\sqrt{98}$",
            choices: ["$7\\sqrt{2}$", "$9\\sqrt{2}$", "$14\\sqrt{2}$", "$\\sqrt{98}$"],
            correctIndex: 0,
            solution: [
                {
                    type: "math-block",
                    content: "\\sqrt{98} = \\sqrt{49 \\times 2} = \\sqrt{49} \\times \\sqrt{2} = 7\\sqrt{2}",
                },
            ],
        },
    ],
};

export default lesson;