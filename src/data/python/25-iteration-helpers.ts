import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "25-iteration-helpers",
    title: "Вбудовані функції для зручної ітерації",
    description:
        "Вивчаємо `enumerate()`, `zip()`, `zip_longest()`, `reversed()` і `sorted()` для зручнішої роботи з циклами.",
    concepts: [
        "`enumerate()`",
        "`zip()`",
        "`zip_longest()`",
        "`reversed()`",
        "`sorted()`",
    ],
    content: [
        {
            type: "text",
            content:
                "Python має кілька вбудованих функцій, які роблять ітерацію значно зручнішою і чистішою, ніж ручна робота з індексами.",
        },
        {
            type: "heading",
            level: 2,
            content: "`enumerate()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "items = ['a', 'b', 'c']\n\nfor index, value in enumerate(items):\n    print(index, value)",
        },
        {
            type: "heading",
            level: 2,
            content: "`zip()` і різна довжина",
        },
        {
            type: "code",
            language: "python",
            content:
                "names = ['Anna', 'Oleh', 'Ira']\nscores = [90, 85]\n\nfor name, score in zip(names, scores):\n    print(name, score)",
        },
        {
            type: "text",
            content:
                "`zip()` зупиняється на найкоротшому з переданих об'єктів.",
        },
        {
            type: "heading",
            level: 2,
            content: "`zip_longest()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "from itertools import zip_longest\n\nnames = ['Anna', 'Oleh', 'Ira']\nscores = [90, 85]\n\nfor name, score in zip_longest(names, scores, fillvalue='-'):\n    print(name, score)",
        },
        {
            type: "heading",
            level: 2,
            content: "`reversed()` та `sorted()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "for ch in reversed('Python'):\n    print(ch)\n\nfor x in sorted([3, 1, 2]):\n    print(x)",
        },
    ],
    quiz: [],
};

export default lesson;
