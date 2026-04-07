import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "23-loops-and-iteration",
    title: "Цикли та ітерація",
    description:
        "Вивчаємо цикли `while` і `for`, `while True`, `range()`, а також ітерацію по рядках, списках і словниках.",
    concepts: [
        "`while`",
        "`while True`",
        "`for`",
        "`range()`",
        "Ітерація по рядках, списках і словниках",
    ],
    content: [
        {
            type: "text",
            content:
                "Цикли дозволяють повторювати код багато разів без дублювання. У Python найчастіше використовують `while` і `for`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Цикл `while`",
        },
        {
            type: "code",
            language: "python",
            content:
                "count = 1\n\nwhile count <= 3:\n    print(count)\n    count += 1",
        },
        {
            type: "text",
            content:
                "`while` повторює блок, поки умова лишається істинною.",
        },
        {
            type: "heading",
            level: 2,
            content: "`while True`",
        },
        {
            type: "code",
            language: "python",
            content:
                "while True:\n    text = input('Введи exit для виходу: ')\n    if text == 'exit':\n        break",
        },
        {
            type: "heading",
            level: 2,
            content: "Цикл `for` і `range()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "for i in range(5):\n    print(i)\n\nfor i in range(2, 8):\n    print(i)\n\nfor i in range(10, 0, -2):\n    print(i)",
        },
        {
            type: "text",
            content:
                "`range(stop)`, `range(start, stop)` і `range(start, stop, step)` це три основні варіанти використання `range()`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ітерація по рядку, списку та словнику",
        },
        {
            type: "code",
            language: "python",
            content:
                "for ch in 'cat':\n    print(ch)\n\nfor item in [10, 20, 30]:\n    print(item)\n\nfor key in {'a': 1, 'b': 2}:\n    print(key)",
        },
    ],
    quiz: [],
};

export default lesson;
