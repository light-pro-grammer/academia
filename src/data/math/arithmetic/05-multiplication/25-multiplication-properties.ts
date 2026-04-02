import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "25-multiplication-properties",
    title: "Властивості множення",
    description: "Переставна, сполучна, розподільна властивості та їх практичне застосування для спрощення обчислень",
    concepts: [
        "Переставна властивість",
        "Сполучна властивість",
        "Розподільна властивість",
        "Властивості нуля та одиниці",
    ],
    content: [
        {
            type: "heading",
            level: 2,
            content: "Переставна властивість (комутативність)",
        },
        {
            type: "math-block",
            content: "a \\times b = b \\times a",
        },
        {
            type: "text",
            content:
                "Порядок множників не впливає на добуток. $6 \\times 7 = 7 \\times 6 = 42$. Це вдвічі скорочує таблицю множення яку треба вивчити.",
        },
        {
            type: "callout",
            kind: "example",
            title: "Геометричне пояснення",
            content:
                "Масив $3 \\times 5$ і масив $5 \\times 3$ містять однакову кількість елементів — 15. Перший: 3 рядки по 5. Другий: 5 рядків по 3. Поверни масив на 90° — і отримаєш другий з першого.",
        },
        {
            type: "heading",
            level: 2,
            content: "Сполучна властивість (асоціативність)",
        },
        {
            type: "math-block",
            content: "(a \\times b) \\times c = a \\times (b \\times c)",
        },
        {
            type: "text",
            content:
                "При множенні трьох і більше чисел — групування не впливає на результат. Це дозволяє обирати зручний порядок обчислень:",
        },
        {
            type: "math-block",
            content: "4 \\times 25 \\times 3 = (4 \\times 25) \\times 3 = 100 \\times 3 = 300",
        },
        {
            type: "math-block",
            content: "2 \\times 17 \\times 5 = (2 \\times 5) \\times 17 = 10 \\times 17 = 170",
        },
        {
            type: "callout",
            kind: "info",
            title: "Стратегія: шукай зручні пари",
            content:
                "При множенні кількох чисел — шукай пари що дають круглі числа: $2 \\times 5 = 10$, $4 \\times 25 = 100$, $8 \\times 125 = 1\\,000$. Ці пари перетворюють складне множення на тривіальне.",
        },
        {
            type: "heading",
            level: 2,
            content: "Розподільна властивість (дистрибутивність)",
        },
        {
            type: "math-block",
            content: "a \\times (b + c) = a \\times b + a \\times c",
        },
        {
            type: "text",
            content:
                "Множення розподіляється відносно додавання. Це найважливіша властивість — вона лежить в основі алгоритму множення у стовпчик і всієї алгебри:",
        },
        {
            type: "math-block",
            content: "6 \\times 47 = 6 \\times (40 + 7) = 6 \\times 40 + 6 \\times 7 = 240 + 42 = 282",
        },
        {
            type: "math-block",
            content: "7 \\times 98 = 7 \\times (100 - 2) = 700 - 14 = 686",
        },
        {
            type: "callout",
            kind: "example",
            title: "Розподільна властивість з відніманням",
            content:
                "$a \\times (b - c) = a \\times b - a \\times c$. Приклад: $8 \\times 99 = 8 \\times (100 - 1) = 800 - 8 = 792$. Множити на 99 через 100 набагато простіше.",
        },
        {
            type: "heading",
            level: 2,
            content: "Властивість нуля",
        },
        {
            type: "math-block",
            content: "a \\times 0 = 0 \\times a = 0",
        },
        {
            type: "text",
            content:
                "Добуток будь-якого числа і нуля дорівнює нулю. Це унікальна властивість нуля — жодне інше число не має такої властивості.",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Важливий наслідок",
            content:
                "Якщо добуток кількох чисел дорівнює нулю — хоча б один з множників дорівнює нулю. $a \\times b = 0 \\Rightarrow a = 0$ або $b = 0$. Це використовується для розв'язання рівнянь.",
        },
        {
            type: "heading",
            level: 2,
            content: "Властивість одиниці",
        },
        {
            type: "math-block",
            content: "a \\times 1 = 1 \\times a = a",
        },
        {
            type: "text",
            content:
                "Одиниця — нейтральний елемент множення. Множення на 1 не змінює числа. У теорії груп одиниця є нейтральним елементом мультиплікативної групи.",
        },
        {
            type: "heading",
            level: 2,
            content: "Властивості у алгебрі",
        },
        {
            type: "text",
            content:
                "Ці властивості є фундаментом алгебри. Розкриття дужок — це розподільна властивість. Зведення подібних — теж. Формули скороченого множення побудовані на розподільній властивості:",
        },
        {
            type: "math-block",
            content: "(a + b)^2 = a^2 + 2ab + b^2",
        },
        {
            type: "math-block",
            content: "(a+b)(a-b) = a^2 - b^2",
        },
        {
            type: "callout",
            kind: "info",
            title: "Розподільна властивість у програмуванні",
            content:
                "Оптимізатори компіляторів використовують дистрибутивність для перетворення виразів. Наприклад $a*b + a*c$ може бути замінено на $a*(b+c)$ якщо це швидше на конкретному процесорі.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Яка властивість: $13 \\times 7 = 7 \\times 13$?",
            choices: [
                "Сполучна",
                "Розподільна",
                "Переставна",
                "Властивість одиниці",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Переставна (комутативна) властивість: порядок множників не впливає на добуток:",
                },
                {
                    type: "math-block",
                    content: "a \\times b = b \\times a \\quad \\Rightarrow \\quad 13 \\times 7 = 7 \\times 13 = 91",
                },
            ],
        },
        {
            id: "q2",
            question: "Використай сполучну властивість: $5 \\times 13 \\times 2$",
            choices: ["120", "130", "140", "150"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Шукаємо зручну пару — $5 \\times 2 = 10$:",
                },
                {
                    type: "math-block",
                    content: "5 \\times 13 \\times 2 = (5 \\times 2) \\times 13 = 10 \\times 13 = 130",
                },
            ],
        },
        {
            id: "q3",
            question: "Використай розподільну властивість: $7 \\times 53$",
            choices: ["351", "361", "371", "381"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "Розкладаємо 53 = 50 + 3:",
                },
                {
                    type: "math-block",
                    content: "7 \\times 53 = 7 \\times (50 + 3) = 7 \\times 50 + 7 \\times 3 = 350 + 21 = 371",
                },
            ],
        },
        {
            id: "q4",
            question: "Використай розподільну властивість: $9 \\times 99$",
            choices: ["881", "891", "901", "911"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Записуємо 99 = 100 - 1:",
                },
                {
                    type: "math-block",
                    content: "9 \\times 99 = 9 \\times (100 - 1) = 900 - 9 = 891",
                },
            ],
        },
        {
            id: "q5",
            question: "Якщо $a \\times b \\times c = 0$, що можна стверджувати?",
            choices: [
                "Всі три числа рівні нулю",
                "Хоча б одне з чисел рівне нулю",
                "Сума $a + b + c = 0$",
                "Нічого певного",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "З властивості нуля: добуток дорівнює нулю тоді і тільки тоді коли хоча б один множник нуль:",
                },
                {
                    type: "math-block",
                    content: "a \\times b \\times c = 0 \\quad \\Leftrightarrow \\quad a=0 \\text{ або } b=0 \\text{ або } c=0",
                },
                {
                    type: "text",
                    content:
                        "Наприклад: $5 \\times 0 \\times 3 = 0$ — лише $b=0$, а $a=5$ і $c=3$. Не всі три рівні нулю.",
                },
            ],
        },
    ],
};

export default lesson;