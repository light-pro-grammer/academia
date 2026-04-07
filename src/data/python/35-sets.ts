import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "35-sets",
    title: "Множини",
    description:
        "Вивчаємо створення множин, унікальність елементів, базові методи, операції над множинами та `frozenset`.",
    concepts: [
        "Створення множин",
        "Унікальність елементів",
        "Методи `add`, `remove`, `discard`, `pop`",
        "Операції `|`, `&`, `-`, `^`",
        "`frozenset`",
        "Set comprehensions",
    ],
    content: [
        {
            type: "text",
            content:
                "Множина це невпорядкована колекція унікальних елементів. Вона особливо корисна для видалення дублікатів і швидкої перевірки входження.",
        },
        {
            type: "heading",
            level: 2,
            content: "Створення множин",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = {1, 2, 3}\nb = set()\nc = set([1, 2, 2, 3])\n\nprint(a)\nprint(b)\nprint(c)",
        },
        {
            type: "text",
            content:
                "`{}` створює порожній словник, а не множину. Для порожньої множини треба використовувати `set()`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Змінність і базові методи",
        },
        {
            type: "code",
            language: "python",
            content:
                "s = {1, 2, 3}\ns.add(4)\ns.remove(2)\ns.discard(10)\nprint(s)\nprint(s.pop())\ns.clear()\nprint(s)",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Різниця між `remove()` і `discard()`",
            content:
                "`remove()` викликає `KeyError`, якщо елемент відсутній, а `discard()` ні.",
        },
        {
            type: "heading",
            level: 2,
            content: "Операції над множинами",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = {1, 2, 3}\nb = {3, 4, 5}\n\nprint(a | b)\nprint(a & b)\nprint(a - b)\nprint(a ^ b)",
        },
        {
            type: "heading",
            level: 2,
            content: "Оновлення та відношення між множинами",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = {1, 2, 3}\nb = {2, 3}\na.update({4})\nprint(a)\nprint(b.issubset(a))\nprint(a.issuperset(b))\nprint({1, 2}.isdisjoint({3, 4}))",
        },
        {
            type: "heading",
            level: 2,
            content: "`frozenset` і comprehensions",
        },
        {
            type: "code",
            language: "python",
            content:
                "f = frozenset([1, 2, 3])\nprint(f)\nprint({x * x for x in range(5)})",
        },
        {
            type: "text",
            content:
                "Множини часто використовують для видалення дублікатів, швидкої перевірки входження й задач на алгебру множин.",
        },
    ],
    quiz: [],
};

export default lesson;
