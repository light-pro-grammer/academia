import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "40-iterator-protocol",
    title: "Протокол ітератора",
    description:
        "Розбираємо iterable, iterator, `__iter__()`, `__next__()`, `StopIteration`, `iter()`, `next()` і ліниві обчислення.",
    concepts: [
        "Iterable",
        "Iterator",
        "`__iter__()` і `__next__()`",
        "`StopIteration`",
        "`iter()` і `next()`",
        "Ліниві обчислення",
    ],
    content: [
        {
            type: "text",
            content:
                "Багато конструкцій Python працюють через ітерацію: цикли `for`, comprehensions, `sum()`, `list()` і не тільки. Щоб добре розуміти ці механізми, корисно знати протокол ітератора.",
        },
        {
            type: "heading",
            level: 2,
            content: "Iterable та iterator",
        },
        {
            type: "text",
            content:
                "Ітерований об'єкт це будь-що, по чому можна пройтись у циклі `for`. Ітератор це спеціальний об'єкт, який знає, яке значення віддати далі.",
        },
        {
            type: "code",
            language: "python",
            content:
                "items = [10, 20, 30]\nit = iter(items)\n\nprint(next(it))\nprint(next(it))\nprint(next(it))",
        },
        {
            type: "heading",
            level: 2,
            content: "Протокол ітератора",
        },
        {
            type: "text",
            content:
                "Ітератор повинен мати методи `__iter__()` і `__next__()`. Коли елементи закінчуються, `__next__()` сигналізує про це винятком `StopIteration`.",
        },
        {
            type: "code",
            language: "python",
            content:
                "class Counter:\n    def __init__(self, limit):\n        self.current = 0\n        self.limit = limit\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current >= self.limit:\n            raise StopIteration\n        value = self.current\n        self.current += 1\n        return value\n\nfor x in Counter(3):\n    print(x)",
        },
        {
            type: "heading",
            level: 2,
            content: "`iter()` і `next()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "text = 'abc'\nit = iter(text)\n\nprint(next(it))\nprint(next(it))\nprint(next(it))",
        },
        {
            type: "text",
            content:
                "`iter()` отримує ітератор із iterable, а `next()` вручну просуває його вперед.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ліниві обчислення",
        },
        {
            type: "text",
            content:
                "Ітератори часто працюють ліниво: вони не створюють усі значення наперед, а генерують їх лише тоді, коли вони справді потрібні.",
        },
    ],
    quiz: [],
};

export default lesson;
