import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "31-docstrings-annotations-introspection",
    title: "Документування, анотації та інтроспекція",
    description:
        "Вивчаємо docstrings, `__doc__`, `help()`, type hints, атрибути функцій і модуль `inspect`.",
    concepts: [
        "Docstrings",
        "`__doc__`",
        "`help()`",
        "Type hints",
        "`__name__`, `__defaults__`, `__annotations__`",
        "`inspect`",
    ],
    content: [
        {
            type: "text",
            content:
                "Функції важливо не лише писати, а й документувати, описувати типами та вміти досліджувати під час виконання програми.",
        },
        {
            type: "heading",
            level: 2,
            content: "Docstrings, `__doc__` і `help()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def add(a, b):\n    \"\"\"Повертає суму двох чисел.\"\"\"\n    return a + b\n\nprint(add.__doc__)\n# help(add)",
        },
        {
            type: "text",
            content:
                "Docstring це рядок документації на початку тіла функції. Його можна отримати через `__doc__` або прочитати через `help()`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Анотації функцій",
        },
        {
            type: "code",
            language: "python",
            content:
                "def add(a: int, b: int) -> int:\n    return a + b",
        },
        {
            type: "text",
            content:
                "Type hints не змінюють поведінку Python під час виконання, але покращують читабельність, автодоповнення і статичний аналіз коду.",
        },
        {
            type: "heading",
            level: 2,
            content: "Інтроспекція функцій",
        },
        {
            type: "code",
            language: "python",
            content:
                "def greet(name='Guest'):\n    return f'Hello, {name}'\n\nprint(greet.__name__)\nprint(greet.__defaults__)\nprint(greet.__annotations__)",
        },
        {
            type: "heading",
            level: 2,
            content: "Модуль `inspect`",
        },
        {
            type: "code",
            language: "python",
            content:
                "import inspect\n\ndef greet(name: str) -> str:\n    return f'Hello, {name}'\n\nprint(inspect.signature(greet))\nprint(inspect.getsource(greet))",
        },
        {
            type: "text",
            content:
                "Модуль `inspect` дозволяє досліджувати «живі» об'єкти під час виконання: сигнатури, джерельний код, модулі, класи та функції.",
        },
    ],
    quiz: [],
};

export default lesson;
