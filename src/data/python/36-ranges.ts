import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "36-ranges",
    title: "Діапазони",
    description:
        "Розбираємо `range()` як ліниву послідовність, її ефективність, атрибути та перетворення в інші структури.",
    concepts: [
        "`range()`",
        "Ліниві послідовності",
        "Ефективність пам'яті",
        "Перевірка входження",
        "`start`, `stop`, `step`",
    ],
    content: [
        {
            type: "text",
            content:
                "`range()` у Python не створює одразу повний список чисел у пам'яті. Це спеціальний об'єкт, який представляє послідовність ліниво та ефективно.",
        },
        {
            type: "heading",
            level: 2,
            content: "Базове використання `range()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "print(range(5))\nprint(list(range(5)))\nprint(list(range(2, 8)))\nprint(list(range(10, 0, -2)))",
        },
        {
            type: "heading",
            level: 2,
            content: "`range` проти списку",
        },
        {
            type: "text",
            content:
                "Список реально зберігає всі числа, а `range` лише описує, як їх згенерувати. Тому `range` набагато ефективніший за пам'яттю.",
        },
        {
            type: "code",
            language: "python",
            content:
                "r = range(1_000_000)\nprint(r)\nprint(999999 in r)",
        },
        {
            type: "text",
            content:
                "Перевірка входження в `range` також працює ефективно, бо Python не перебирає послідовність повністю.",
        },
        {
            type: "heading",
            level: 2,
            content: "Атрибути `start`, `stop`, `step`",
        },
        {
            type: "code",
            language: "python",
            content:
                "r = range(2, 10, 2)\nprint(r.start)\nprint(r.stop)\nprint(r.step)",
        },
        {
            type: "heading",
            level: 2,
            content: "Перетворення `range`",
        },
        {
            type: "code",
            language: "python",
            content:
                "r = range(5)\nprint(list(r))\nprint(tuple(r))\nprint(set(r))",
        },
    ],
    quiz: [],
};

export default lesson;
