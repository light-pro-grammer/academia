import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "39-advanced-comprehension-techniques",
    title: "Просунуті техніки",
    description:
        "Пояснюємо читабельність comprehensions, оператор `:=`, flattening вкладених структур і транспонування матриць.",
    concepts: [
        "Читабельність comprehensions",
        "Оператор `:=` у comprehensions",
        "Flattening",
        "Транспонування матриці",
    ],
    content: [
        {
            type: "text",
            content:
                "Comprehensions дуже потужні, але їх легко зробити надто хитрими. У хорошому Python-коді важлива не лише компактність, а й читабельність.",
        },
        {
            type: "heading",
            level: 2,
            content: "Читабельні comprehensions",
        },
        {
            type: "code",
            language: "python",
            content:
                "squares = [x * x for x in range(10) if x % 2 == 0]\nprint(squares)",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Коли краще не ускладнювати",
            content:
                "Якщо comprehension стає занадто довгим або має кілька вкладених умов, інколи краще повернутися до звичайного циклу `for`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Оператор морж `:=` у генераторах",
        },
        {
            type: "code",
            language: "python",
            content:
                "values = [(y := x * 2, y ** 2) for x in range(5)]\nprint(values)",
        },
        {
            type: "text",
            content:
                "Оператор `:=` дозволяє зберегти проміжне значення прямо всередині comprehension, але з ним легко зробити код менш прозорим.",
        },
        {
            type: "heading",
            level: 2,
            content: "Flattening вкладеного списку",
        },
        {
            type: "code",
            language: "python",
            content:
                "matrix = [[1, 2], [3, 4], [5, 6]]\nflat = [item for row in matrix for item in row]\nprint(flat)",
        },
        {
            type: "heading",
            level: 2,
            content: "Транспонування матриці",
        },
        {
            type: "code",
            language: "python",
            content:
                "matrix = [[1, 2, 3], [4, 5, 6]]\ntransposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]\nprint(transposed)",
        },
    ],
    quiz: [],
};

export default lesson;
