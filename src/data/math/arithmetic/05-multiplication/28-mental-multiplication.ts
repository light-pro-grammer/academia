import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "28-mental-multiplication",
    title: "Усне множення та оцінювання",
    description: "Швидкі прийоми множення в умі — розкладання, компенсація і оцінювання добутків",
    concepts: [
        "Розкладання множника",
        "Компенсація при множенні",
        "Подвоєння та ділення навпіл",
        "Оцінювання добутків",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Стратегія 1: Розкладання множника",
        },
        {
            type: "text",
            content:
                "Розкладаємо один множник на зручні частини і множимо окремо. Основа — розподільна властивість:",
        },
        {
            type: "math-block",
            content: "7 \\times 14 = 7 \\times 10 + 7 \\times 4 = 70 + 28 = 98",
        },
        {
            type: "math-block",
            content: "8 \\times 25 = 8 \\times 20 + 8 \\times 5 = 160 + 40 = 200",
        },
        {
            type: "math-block",
            content: "6 \\times 37 = 6 \\times 30 + 6 \\times 7 = 180 + 42 = 222",
        },
        {
            type: "callout",
            kind: "example",
            title: "Розкладання на зручні множники",
            content:
                "$4 \\times 18 = 4 \\times 2 \\times 9 = 8 \\times 9 = 72$. Або: $4 \\times 18 = 4 \\times 20 - 4 \\times 2 = 80 - 8 = 72$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Стратегія 2: Компенсація",
        },
        {
            type: "text",
            content:
                "Округляємо один множник до зручного числа і компенсуємо різницю:",
        },
        {
            type: "math-block",
            content: "6 \\times 99 = 6 \\times 100 - 6 \\times 1 = 600 - 6 = 594",
        },
        {
            type: "math-block",
            content: "7 \\times 98 = 7 \\times 100 - 7 \\times 2 = 700 - 14 = 686",
        },
        {
            type: "math-block",
            content: "4 \\times 51 = 4 \\times 50 + 4 \\times 1 = 200 + 4 = 204",
        },
        {
            type: "callout",
            kind: "info",
            title: "Числа близькі до круглих",
            content:
                "Компенсація найефективніша для чисел типу 99, 98, 101, 102, 49, 51. Множення на 100 тривіальне — тому замінюємо складне на просте.",
        },
        {
            type: "heading",
            level: 2,
            content: "Стратегія 3: Подвоєння та ділення навпіл",
        },
        {
            type: "text",
            content:
                "Один множник ділимо навпіл, другий подвоюємо. Добуток не змінюється але числа стають зручнішими:",
        },
        {
            type: "math-block",
            content: "25 \\times 12 = 50 \\times 6 = 100 \\times 3 = 300",
        },
        {
            type: "math-block",
            content: "16 \\times 15 = 8 \\times 30 = 4 \\times 60 = 240",
        },
        {
            type: "math-block",
            content: "35 \\times 8 = 70 \\times 4 = 140 \\times 2 = 280",
        },
        {
            type: "callout",
            kind: "example",
            title: "Чому це працює?",
            content:
                "$25 \\times 12 = 25 \\times 12$. Подвоюємо 25 і ділимо 12 навпіл: $50 \\times 6$. Ще раз: $100 \\times 3 = 300$. Математично: $(2a) \\times (b/2) = a \\times b$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Зручні пари множників",
        },
        {
            type: "text",
            content:
                "Деякі пари дають особливо зручні результати — варто знати напам'ять:",
        },
        {
            type: "list",
            items: [
                "$2 \\times 5 = 10$, $4 \\times 25 = 100$, $8 \\times 125 = 1\\,000$",
                "$2 \\times 50 = 100$, $4 \\times 250 = 1\\,000$",
                "$20 \\times 5 = 100$, $40 \\times 25 = 1\\,000$",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Оцінювання добутків",
        },
        {
            type: "text",
            content:
                "Перед точним обчисленням — оцінюємо результат. Округляємо множники і рахуємо приблизно:",
        },
        {
            type: "math-block",
            content: "47 \\times 83 \\approx 50 \\times 80 = 4\\,000",
        },
        {
            type: "math-block",
            content: "\\text{Точно: } 47 \\times 83 = 3\\,901 \\quad (\\text{близько до 4 000}) \\checkmark",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Оцінка може бути вищою або нижчою",
            content:
                "Якщо округлили обидва множники вгору — оцінка вища за точну відповідь. Якщо обидва вниз — нижча. Для точнішої оцінки округляй один вгору, другий вниз.",
        },
        {
            type: "heading",
            level: 2,
            content: "Множення на 11 — загальний метод",
        },
        {
            type: "text",
            content:
                "Для двозначних чисел є швидкий прийом:",
        },
        {
            type: "callout",
            kind: "example",
            title: "11 × 36",
            content:
                "Розставляємо крайні цифри: 3 _ 6. Середня цифра = сума крайніх: $3 + 6 = 9$. Результат: 396. Якщо сума $\\geq 10$ — переносимо: $11 \\times 85 = 8\\,(8+5)\\,5 = 8\\,13\\,5 = 935$.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Множення і мозок",
            content:
                "Дослідження показують що регулярне усне множення покращує робочу пам'ять і математичне мислення загалом. Це не просто корисна навичка — це тренування для мозку.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Використай розкладання: $8 \\times 37$",
            choices: ["286", "292", "296", "306"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "8 \\times 37 = 8 \\times 30 + 8 \\times 7 = 240 + 56 = 296",
                },
            ],
        },
        {
            id: "q2",
            question: "Використай компенсацію: $9 \\times 97$",
            choices: ["863", "873", "873", "883"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "9 \\times 97 = 9 \\times 100 - 9 \\times 3 = 900 - 27 = 873",
                },
            ],
        },
        {
            id: "q3",
            question: "Використай подвоєння та ділення навпіл: $16 \\times 25$",
            choices: ["350", "375", "400", "425"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "16 \\times 25 = 8 \\times 50 = 4 \\times 100 = 400",
                },
                {
                    type: "text",
                    content: "Подвоюємо 25 і ділимо 16 навпіл двічі — отримуємо зручне $4 \\times 100$.",
                },
            ],
        },
        {
            id: "q4",
            question: "Оціни добуток: $58 \\times 41$",
            choices: ["Близько 1 800", "Близько 2 400", "Близько 3 000", "Близько 3 600"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "58 \\times 41 \\approx 60 \\times 40 = 2\\,400",
                },
                {
                    type: "text",
                    content:
                        "Точна відповідь: $58 \\times 41 = 2\\,378$. Оцінка 2 400 дуже близька ✓",
                },
            ],
        },
        {
            id: "q5",
            question: "Обчисли $11 \\times 47$ методом для ×11",
            choices: ["507", "517", "517", "527"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Розставляємо крайні цифри 4 і 7. Середня = $4 + 7 = 11$:",
                },
                {
                    type: "math-block",
                    content: "11 \\times 47: \\quad 4\\,(4+7)\\,7 = 4\\,11\\,7",
                },
                {
                    type: "text",
                    content: "Оскільки $4+7=11 \\geq 10$ — переносимо: $4+1=5$, залишок 1. Результат: 517.",
                },
                {
                    type: "math-block",
                    content: "11 \\times 47 = 517",
                },
            ],
        },
    ],
};

export default lesson;