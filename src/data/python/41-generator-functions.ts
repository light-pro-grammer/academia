import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "41-generator-functions",
    title: "Функції-генератори",
    description:
        "Вивчаємо `yield`, стан генератора, `yield from`, `.send()`, `.throw()`, `.close()`, конвеєри даних і нескінченні генератори.",
    concepts: [
        "`yield`",
        "Об'єкт-генератор",
        "Стан генератора",
        "`yield from`",
        "`.send()`, `.throw()`, `.close()`",
        "Data pipelines",
        "Нескінченні генератори",
    ],
    content: [
        {
            type: "text",
            content:
                "Функція-генератор це функція, яка містить `yield`. Вона не повертає звичайне значення одразу, а видає значення по одному й може зберігати свій стан між викликами.",
        },
        {
            type: "heading",
            level: 2,
            content: "Базовий генератор і `yield`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\ng = countdown(3)\nprint(next(g))\nprint(next(g))\nprint(next(g))",
        },
        {
            type: "text",
            content:
                "Кожен `yield` видає значення й призупиняє виконання. Локальні змінні не втрачаються між цими паузами.",
        },
        {
            type: "heading",
            level: 2,
            content: "`yield from`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def subgen():\n    yield 1\n    yield 2\n\ndef gen():\n    yield from subgen()\n    yield 3\n\nprint(list(gen()))",
        },
        {
            type: "heading",
            level: 2,
            content: "`.send()`, `.throw()`, `.close()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def echo():\n    value = yield 'start'\n    yield f'got: {value}'\n\ng = echo()\nprint(next(g))\nprint(g.send('hello'))",
        },
        {
            type: "text",
            content:
                "`.send()` дозволяє передавати значення назад у генератор, `.throw()` вкидає виняток у нього, а `.close()` завершує його роботу через `GeneratorExit`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Корутини, конвеєри та нескінченні генератори",
        },
        {
            type: "code",
            language: "python",
            content:
                "def naturals():\n    n = 0\n    while True:\n        yield n\n        n += 1\n\nnumbers = naturals()\nfor _ in range(5):\n    print(next(numbers))",
        },
        {
            type: "text",
            content:
                "До появи `async`/`await` генератори використовували навіть для корутин. Також їх дуже зручно поєднувати в ланцюжки для обробки потоків даних.",
        },
    ],
    quiz: [],
};

export default lesson;
