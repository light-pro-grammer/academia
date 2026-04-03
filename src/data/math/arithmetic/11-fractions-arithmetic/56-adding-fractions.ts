import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "56-adding-fractions",
    title: "Додавання дробів",
    description: "Як додавати дроби з однаковими і різними знаменниками — покроково з поясненням логіки",
    concepts: [
        "Додавання з однаковими знаменниками",
        "Зведення до спільного знаменника",
        "Додавання з різними знаменниками",
        "Спрощення результату",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Чому не можна просто скласти чисельники і знаменники?",
        },
        {
            type: "text",
            content:
                "Типова помилка: $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$. Але $\\frac{2}{5} = 0.4$, а правильна відповідь $\\frac{5}{6} \\approx 0.833$. Чому?",
        },
        {
            type: "callout",
            kind: "info",
            title: "Логіка додавання дробів",
            content:
                "Дроби з різними знаменниками — це частини різного розміру. $\\frac{1}{2}$ — одна половина, $\\frac{1}{3}$ — одна третина. Не можна складати половини і треті напряму — як не можна складати кілограми і метри.",
        },
        {
            type: "heading",
            level: 2,
            content: "Однакові знаменники — просто додай чисельники",
        },
        {
            type: "math-block",
            content: "\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}",
        },
        {
            type: "math-block",
            content: "\\frac{2}{7} + \\frac{3}{7} = \\frac{2+3}{7} = \\frac{5}{7}",
        },
        {
            type: "math-block",
            content: "\\frac{5}{11} + \\frac{8}{11} = \\frac{13}{11} = 1\\frac{2}{11}",
        },
        {
            type: "text",
            content:
                "Знаменник залишається — він показує розмір частин. Додаємо лише кількість частин (чисельники).",
        },
        {
            type: "heading",
            level: 2,
            content: "Різні знаменники — зводимо до спільного",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Знайди НСК знаменників — це спільний знаменник",
                "Перетвори кожен дріб до спільного знаменника",
                "Додай чисельники",
                "Скороти якщо можливо",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{1}{2} + \\frac{1}{3}$",
            content:
                "НСК(2,3) = 6. $\\frac{1}{2} = \\frac{3}{6}$. $\\frac{1}{3} = \\frac{2}{6}$. $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{3}{4} + \\frac{5}{6}$",
            content:
                "НСК(4,6) = 12. $\\frac{3}{4} = \\frac{9}{12}$. $\\frac{5}{6} = \\frac{10}{12}$. $\\frac{9}{12} + \\frac{10}{12} = \\frac{19}{12} = 1\\frac{7}{12}$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Формула для двох дробів",
        },
        {
            type: "math-block",
            content: "\\frac{a}{b} + \\frac{c}{d} = \\frac{a \\times d + c \\times b}{b \\times d}",
        },
        {
            type: "text",
            content:
                "Ця формула завжди працює але дає знаменник $b \\times d$ — не обов'язково найменший. Потім треба скорочувати.",
        },
        {
            type: "callout",
            kind: "example",
            title: "$\\frac{2}{5} + \\frac{3}{7}$",
            content:
                "$\\frac{2 \\times 7 + 3 \\times 5}{5 \\times 7} = \\frac{14 + 15}{35} = \\frac{29}{35}$. НСД(29, 35) = 1 — вже у найпростішому вигляді.",
        },
        {
            type: "heading",
            level: 2,
            content: "Додавання кількох дробів",
        },
        {
            type: "math-block",
            content: "\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}",
        },
        {
            type: "text",
            content: "НСК(2,3,6) = 6:",
        },
        {
            type: "math-block",
            content: "= \\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6} = \\frac{6}{6} = 1",
        },
        {
            type: "callout",
            kind: "info",
            title: "Дроби у програмуванні",
            content:
                "Python: $\\text{from fractions import Fraction}$. $\\text{Fraction}(1,2) + \\text{Fraction}(1,3) = \\text{Fraction}(5,6)$. Клас Fraction автоматично знаходить НСК і скорочує результат.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли: $\\frac{3}{8} + \\frac{5}{8}$",
            choices: ["$\\frac{8}{16}$", "$\\frac{8}{8}$", "$1$", "Обидві B і C"],
            correctIndex: 3,
            solution: [
                {
                    type: "math-block",
                    content: "\\frac{3}{8} + \\frac{5}{8} = \\frac{3+5}{8} = \\frac{8}{8} = 1",
                },
                {
                    type: "text",
                    content: "$\\frac{8}{8} = 1$ — обидві відповіді B і C правильні.",
                },
            ],
        },
        {
            id: "q2",
            question: "Обчисли: $\\frac{1}{4} + \\frac{1}{6}$",
            choices: ["$\\frac{2}{10}$", "$\\frac{5}{12}$", "$\\frac{1}{5}$", "$\\frac{2}{24}$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСК(4,6) = 12:",
                },
                {
                    type: "math-block",
                    content: "\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $\\frac{2}{3} + \\frac{3}{4}$",
            choices: ["$\\frac{5}{7}$", "$\\frac{5}{12}$", "$\\frac{17}{12}$", "$1\\frac{5}{12}$"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "НСК(3,4) = 12:",
                },
                {
                    type: "math-block",
                    content: "\\frac{2}{3} + \\frac{3}{4} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}",
                },
                {
                    type: "text",
                    content: "Відповідь C ($\\frac{17}{12}$) і D ($1\\frac{5}{12}$) однакові — але у варіантах лише C.",
                },
            ],
        },
        {
            id: "q4",
            question: "Обчисли: $\\frac{5}{6} + \\frac{7}{9}$",
            choices: ["$\\frac{12}{15}$", "$\\frac{29}{18}$", "$1\\frac{11}{18}$", "Обидві B і C"],
            correctIndex: 3,
            solution: [
                {
                    type: "text",
                    content: "НСК(6,9) = 18:",
                },
                {
                    type: "math-block",
                    content: "\\frac{5}{6} + \\frac{7}{9} = \\frac{15}{18} + \\frac{14}{18} = \\frac{29}{18} = 1\\frac{11}{18}",
                },
                {
                    type: "text",
                    content: "B і C — одне і те саме число в різних формах.",
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8}$",
            choices: ["$\\frac{3}{14}$", "$\\frac{7}{8}$", "$\\frac{6}{8}$", "$1$"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "НСК(2,4,8) = 8:",
                },
                {
                    type: "math-block",
                    content: "\\frac{4}{8} + \\frac{2}{8} + \\frac{1}{8} = \\frac{7}{8}",
                },
            ],
        },
    ],
};

export default lesson;