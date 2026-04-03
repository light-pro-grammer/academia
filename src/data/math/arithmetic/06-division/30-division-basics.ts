import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "30-division-basics",
    title: "Основні поняття ділення",
    description: "Дві моделі ділення, термінологія і зв'язок з множенням",
    concepts: [
        "Ділення як рівний розподіл",
        "Ділення як групування",
        "Ділене, дільник, частка",
        "Зв'язок з множенням",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Дві моделі ділення",
        },
        {
            type: "text",
            content:
                "Ділення має два принципово різних але математично еквівалентних тлумачення. Розуміння обох робить задачі набагато яснішими.",
        },
        {
            type: "heading",
            level: 2,
            content: "Модель 1: Рівний розподіл",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Ділення як рівний розподіл",
            content:
                "Маємо певну кількість — ділимо порівну між групами. $12 \\div 3 = 4$: розподілити 12 предметів між 3 групами — в кожній групі по 4.",
        },
        {
            type: "text",
            content:
                "Питання: «скільки в кожній групі?» Кількість груп відома, розмір групи — шукаємо.",
        },
        {
            type: "heading",
            level: 2,
            content: "Модель 2: Групування (вимірювання)",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Ділення як групування",
            content:
                "$12 \\div 3 = 4$: скільки груп по 3 можна скласти з 12 предметів? Відповідь: 4 групи.",
        },
        {
            type: "text",
            content:
                "Питання: «скільки груп?» Розмір групи відомий, кількість груп — шукаємо.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Та сама формула — різний зміст",
            content:
                "$20 \\div 4$: «Розподілити 20 між 4 групами — по 5 у кожній» (розподіл). АБО «Скільки груп по 4 в 20 — рівно 5 груп» (групування). Результат однаковий: 5.",
        },
        {
            type: "heading",
            level: 2,
            content: "Термінологія",
        },
        {
            type: "math-block",
            content:
                "\\underbrace{12}_{\\text{ділене}} \\div \\underbrace{3}_{\\text{дільник}} = \\underbrace{4}_{\\text{частка}}",
        },
        {
            type: "list",
            items: [
                "Ділене — число яке ділять (12)",
                "Дільник — число на яке ділять (3)",
                "Частка — результат ділення (4)",
            ],
        },
        {
            type: "text",
            content: "Знаки ділення: $\\div$, $/$, дробова риска $\\frac{12}{3}$, і у програмуванні $*$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення як обернене множення",
        },
        {
            type: "text",
            content:
                "Множення і ділення — обернені операції. Кожне рівняння множення породжує два рівняння ділення:",
        },
        {
            type: "math-block",
            content:
                "\\text{Якщо } a \\times b = c, \\text{ то } c \\div a = b \\text{ і } c \\div b = a",
        },
        {
            type: "callout",
            kind: "example",
            title: "Родина фактів",
            content:
                "$5 \\times 7 = 35 \\Rightarrow 35 \\div 5 = 7$ і $35 \\div 7 = 5$. Знаючи таблицю множення — автоматично знаєш таблицю ділення.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ділення на числовій прямій",
        },
        {
            type: "text",
            content:
                "Ділення — це підрахунок кількості рівних стрибків від нуля до діленого:",
        },
        {
            type: "math-block",
            content:
                "12 \\div 3 = 4: \\quad 0 \\xrightarrow{+3} 3 \\xrightarrow{+3} 6 \\xrightarrow{+3} 9 \\xrightarrow{+3} 12 \\quad (4 \\text{ стрибки})",
        },
        {
            type: "callout",
            kind: "info",
            title: "Ділення у програмуванні",
            content:
                "У більшості мов програмування є два типи ділення: звичайне ($/$) і цілочисельне ($//$). $7 / 2 = 3.5$ — з десятковим результатом. $7 // 2 = 3$ — лише ціла частина. $7 \\% 2 = 1$ — остача. Все це різні аспекти ділення.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "У виразі $56 \\div 8 = 7$ яке число є дільником?",
            choices: ["56", "8", "7", "Немає дільника"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content:
                        "\\underbrace{56}_{\\text{ділене}} \\div \\underbrace{8}_{\\text{дільник}} = \\underbrace{7}_{\\text{частка}}",
                },
                {
                    type: "text",
                    content: "Дільник — число на яке ділять. У цьому виразі дільник = 8.",
                },
            ],
        },
        {
            id: "q2",
            question: "Яка модель ділення: «Скільки груп по 6 можна скласти з 42 предметів?»",
            choices: [
                "Рівний розподіл",
                "Групування",
                "Обидві моделі",
                "Жодна з моделей",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Питання «скільки груп?» при відомому розмірі групи — це групування:",
                },
                {
                    type: "math-block",
                    content: "42 \\div 6 = 7 \\text{ груп}",
                },
                {
                    type: "text",
                    content: "Модель рівного розподілу звучала б: «Розподілити 42 між 6 групами — по скільки?»",
                },
            ],
        },
        {
            id: "q3",
            question: "Використай таблицю множення: $63 \\div 9 = ?$",
            choices: ["6", "7", "8", "9"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Думаємо: «$9 \\times$ скільки $= 63$?»",
                },
                {
                    type: "math-block",
                    content: "9 \\times 7 = 63 \\quad \\Rightarrow \\quad 63 \\div 9 = 7",
                },
                {
                    type: "text",
                    content: "Перевірка: $7 \\times 9 = 63$ ✓",
                },
            ],
        },
        {
            id: "q4",
            question: "Запиши родину фактів для чисел 6, 8 і 48",
            choices: [
                "$6+8=48$, $8+6=48$, $48-6=8$, $48-8=6$",
                "$6 \\times 8=48$, $8 \\times 6=48$, $48 \\div 6=8$, $48 \\div 8=6$",
                "$6 \\times 8=48$, $48 \\div 6=8$ (лише два факти)",
                "$6 \\times 8=48$, $48 \\div 48=1$",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Родина фактів для $\\{6, 8, 48\\}$ де $6 \\times 8 = 48$:",
                },
                {
                    type: "math-block",
                    content:
                        "\\begin{array}{rcl} 6 \\times 8 &=& 48 \\\\ 8 \\times 6 &=& 48 \\\\ 48 \\div 6 &=& 8 \\\\ 48 \\div 8 &=& 6 \\end{array}",
                },
            ],
        },
        {
            id: "q5",
            question: "На числовій прямій: скільки стрибків по 7 від 0 до 35?",
            choices: ["4", "5", "6", "7"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content:
                        "0 \\xrightarrow{+7} 7 \\xrightarrow{+7} 14 \\xrightarrow{+7} 21 \\xrightarrow{+7} 28 \\xrightarrow{+7} 35",
                },
                {
                    type: "math-block",
                    content: "35 \\div 7 = 5 \\text{ стрибків}",
                },
            ],
        },
    ],
};

export default lesson;