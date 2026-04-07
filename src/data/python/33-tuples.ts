import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "33-tuples",
    title: "Кортежі",
    description:
        "Вивчаємо створення кортежів, одноелементні кортежі, незмінність, розпакування та іменовані кортежі.",
    concepts: [
        "Створення кортежів",
        "Кортеж з одного елемента",
        "Immutability",
        "Індексація та зрізи",
        "Розпакування",
        "NamedTuple і namedtuple",
    ],
    content: [
        {
            type: "text",
            content:
                "Кортеж це впорядкована, але незмінна колекція. Його часто використовують для фіксованих наборів даних.",
        },
        {
            type: "heading",
            level: 2,
            content: "Створення кортежів",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = ()\nb = (1,)\nc = tuple()\nd = tuple([1, 2, 3])\n\nprint(a, b, c, d)",
        },
        {
            type: "text",
            content:
                "Для кортежу з одного елемента обов'язкова кома: `(1,)`, інакше це буде просто число в дужках.",
        },
        {
            type: "heading",
            level: 2,
            content: "Незмінність, індексація та зрізи",
        },
        {
            type: "code",
            language: "python",
            content:
                "t = (10, 20, 30, 40)\nprint(t[0])\nprint(t[-1])\nprint(t[1:3])\n# t[0] = 99  -> помилка",
        },
        {
            type: "heading",
            level: 2,
            content: "Розпакування кортежів",
        },
        {
            type: "code",
            language: "python",
            content:
                "point = (3, 7)\nx, y = point\nprint(x, y)",
        },
        {
            type: "heading",
            level: 2,
            content: "Іменовані кортежі",
        },
        {
            type: "code",
            language: "python",
            content:
                "from collections import namedtuple\nfrom typing import NamedTuple\n\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(2, 5)\nprint(p.x, p.y)\n\nclass User(NamedTuple):\n    name: str\n    age: int\n\nu = User('Anna', 21)\nprint(u.name, u.age)",
        },
        {
            type: "heading",
            level: 2,
            content: "Коли кортеж, а коли список",
        },
        {
            type: "text",
            content:
                "Кортеж зручний, коли набір значень не повинен змінюватись. Також кортежі можна використовувати як ключі словника, якщо всі їх елементи хешовані.",
        },
        {
            type: "code",
            language: "python",
            content:
                "locations = {(50.45, 30.52): 'Kyiv'}\nprint(locations[(50.45, 30.52)])",
        },
    ],
    quiz: [],
};

export default lesson;
