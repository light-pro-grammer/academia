import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "45-order-applications",
    title: "Практичне застосування порядку дій",
    description: "Формули, текстові задачі і типові пастки — як правильний порядок дій рятує від помилок",
    concepts: [
        "Формули та підстановка",
        "Текстові задачі з кількома діями",
        "Типові пастки вірусних задач",
        "Порядок дій у таблицях і базах даних",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Формули та порядок дій",
        },
        {
            type: "text",
            content:
                "Формули в науці і техніці — це вирази де порядок дій критичний. Одна помилка в пріоритеті — і результат хибний.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Формула кінетичної енергії",
            content:
                "$E_k = \\frac{mv^2}{2}$ при $m = 4$ кг, $v = 3$ м/с: $E_k = \\frac{4 \\times 3^2}{2} = \\frac{4 \\times 9}{2} = \\frac{36}{2} = 18$ Дж. Важливо: спочатку $v^2$, потім множення на $m$, потім ділення на 2.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Формула площі трапеції",
            content:
                "$S = \\frac{(a+b) \\times h}{2}$ при $a=5$, $b=9$, $h=4$: $S = \\frac{(5+9) \\times 4}{2} = \\frac{14 \\times 4}{2} = \\frac{56}{2} = 28$ см².",
        },
        {
            type: "callout",
            kind: "example",
            title: "Формула Цельсія у Фаренгейт",
            content:
                "$F = \\frac{9}{5} \\times C + 32$ при $C = 25°$: $F = \\frac{9}{5} \\times 25 + 32 = 1{,}8 \\times 25 + 32 = 45 + 32 = 77°F$.",
        },
        {
            type: "heading",
            level: 2,
            content: "Текстові задачі з кількома діями",
        },
        {
            type: "callout",
            kind: "example",
            title: "Задача про покупки",
            content:
                "Купили 3 кг яблук по 45 грн і 2 кг груш по 60 грн. Заплатили 500 грн. Скільки решти? Вираз: $500 - (3 \\times 45 + 2 \\times 60) = 500 - (135 + 120) = 500 - 255 = 245$ грн.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Задача про відстань",
            content:
                "Перші 2 години їхали 80 км/год, наступні 3 години — 60 км/год. Загальна відстань? $2 \\times 80 + 3 \\times 60 = 160 + 180 = 340$ км. Порядок: спочатку обидва добутки, потім сума.",
        },
        {
            type: "heading",
            level: 2,
            content: "Вірусні задачі — типові пастки",
        },
        {
            type: "text",
            content:
                "В інтернеті часто зустрічаються задачі що «ловлять» людей які ігнорують порядок дій:",
        },
        {
            type: "callout",
            kind: "example",
            title: "Класична пастка: $8 ÷ 2(2+2)$",
            content:
                "Дужки: $(2+2) = 4$. Вираз: $8 ÷ 2 \\times 4$. Ділення і множення зліва направо: $(8 ÷ 2) \\times 4 = 4 \\times 4 = 16$. Помилка: $8 ÷ (2 \\times 4) = 1$ — неправильно, бо ділення і множення рівноправні.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Ще одна пастка: $6 ÷ 2(1+2)$",
            content:
                "$(1+2) = 3$. $6 ÷ 2 \\times 3 = 3 \\times 3 = 9$. Не $6 ÷ 6 = 1$. Запис $2(3)$ означає $2 \\times 3$ — але пріоритет ділення і множення однаковий, виконуємо зліва направо.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Неоднозначні записи",
            content:
                "Записи типу $a ÷ bc$ або $a/bc$ є неоднозначними — різні джерела тлумачать їх по-різному. У серйозній математиці завжди використовуй дужки: $(a ÷ b) \\times c$ або $a ÷ (b \\times c)$. Ясність важливіша за стислість.",
        },
        {
            type: "heading",
            level: 2,
            content: "Порядок дій у таблицях Excel",
        },
        {
            type: "text",
            content:
                "Excel використовує той самий порядок дій що і математика:",
        },
        {
            type: "list",
            items: [
                "$=$A1+B1*C1 — спочатку B1*C1, потім додавання A1",
                "$=$(A1+B1)*C1 — дужки змінюють порядок",
                "$=$A1\\^{}2+B1 — спочатку степінь A1, потім +B1",
                "Функція SUM() — підсумовує діапазон як одну дію",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Порядок дій і SQL",
            content:
                "У SQL запитах порядок дій теж важливий: $\\text{SELECT price * quantity - discount}$ обчислюється як $\\text{price} \\times \\text{quantity}$ мінус $\\text{discount}$. Дужки в SQL: $\\text{SELECT price * (quantity - discount)}$ дає інший результат.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Обчисли за формулою $E = \\frac{mv^2}{2}$ при $m=6$, $v=4$:",
            choices: ["$24$", "$48$", "$96$", "$192$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "E = \\frac{6 \\times 4^2}{2} = \\frac{6 \\times 16}{2} = \\frac{96}{2} = 48",
                },
            ],
        },
        {
            id: "q2",
            question: "Купили 4 зошити по 35 грн і 2 ручки по 25 грн. Решта з 300 грн?",
            choices: ["$90$", "$100$", "$110$", "$120$"],
            correctIndex: 1,
            solution: [
                {
                    type: "math-block",
                    content: "300 - (4 \\times 35 + 2 \\times 25) = 300 - (140 + 50) = 300 - 190 = 110",
                },
            ],
        },
        {
            id: "q3",
            question: "Обчисли: $8 \\div 2 \\times (2 + 2)$",
            choices: ["$1$", "$4$", "$16$", "$64$"],
            correctIndex: 2,
            solution: [
                {
                    type: "list",
                    items: [
                        "Дужки: $(2+2) = 4$",
                        "Ділення і множення зліва направо: $8 \\div 2 = 4$, потім $4 \\times 4 = 16$",
                    ],
                },
                {
                    type: "math-block",
                    content: "8 \\div 2 \\times 4 = (8 \\div 2) \\times 4 = 4 \\times 4 = 16",
                },
            ],
        },
        {
            id: "q4",
            question: "Перетвори $20°C$ у Фаренгейти: $F = \\frac{9}{5} \\times C + 32$",
            choices: ["$58°F$", "$62°F$", "$68°F$", "$72°F$"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "F = \\frac{9}{5} \\times 20 + 32 = 1{,}8 \\times 20 + 32 = 36 + 32 = 68°F",
                },
            ],
        },
        {
            id: "q5",
            question: "Автобус їхав 3 год зі швидкістю 75 км/год і 2 год зі швидкістю 90 км/год. Загальна відстань?",
            choices: ["$375$ км", "$405$ км", "$435$ км", "$465$ км"],
            correctIndex: 2,
            solution: [
                {
                    type: "math-block",
                    content: "3 \\times 75 + 2 \\times 90 = 225 + 180 = 405 \\text{ км}",
                },
            ],
        },
    ],
};

export default lesson;