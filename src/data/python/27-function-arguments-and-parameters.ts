import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "27-function-arguments-and-parameters",
    title: "Аргументи та параметри",
    description:
        "Розбираємо позиційні та іменовані аргументи, значення за замовчуванням, `*args`, `**kwargs`, keyword-only і positional-only аргументи.",
    concepts: [
        "Позиційні й іменовані аргументи",
        "Значення за замовчуванням",
        "Пастка mutable default",
        "`*args`, `**kwargs`",
        "Keyword-only і positional-only аргументи",
        "Розпакування `*` і `**`",
    ],
    content: [
        {
            type: "text",
            content:
                "Гнучкість Python-функцій багато в чому тримається на системі параметрів і аргументів. Важливо розуміти, як саме значення передаються у функцію.",
        },
        {
            type: "heading",
            level: 2,
            content: "Позиційні та іменовані аргументи",
        },
        {
            type: "code",
            language: "python",
            content:
                "def greet(name, age):\n    print(name, age)\n\ngreet('Anna', 21)\ngreet(age=21, name='Anna')",
        },
        {
            type: "heading",
            level: 2,
            content: "Значення за замовчуванням",
        },
        {
            type: "code",
            language: "python",
            content:
                "def greet(name, city='Kyiv'):\n    print(name, city)\n\ngreet('Anna')\ngreet('Oleh', 'Lviv')",
        },
        {
            type: "heading",
            level: 2,
            content: "Пастка mutable default",
        },
        {
            type: "code",
            language: "python",
            content:
                "def add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Важливо",
            content:
                "Не використовуй `[]` або `{}` як значення параметра за замовчуванням, якщо не хочеш отримати спільний змінний об'єкт між викликами.",
        },
        {
            type: "heading",
            level: 2,
            content: "`*args` та `**kwargs`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def show(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\nshow(1, 2, 3, name='Anna', city='Kyiv')",
        },
        {
            type: "heading",
            level: 2,
            content: "Keyword-only і positional-only аргументи",
        },
        {
            type: "code",
            language: "python",
            content:
                "def example(a, /, b, *, c):\n    print(a, b, c)\n\nexample(1, 2, c=3)",
        },
        {
            type: "text",
            content:
                "Аргументи перед `/` можна передавати лише позиційно, а параметри після `*` лише за іменем.",
        },
        {
            type: "heading",
            level: 2,
            content: "Розпакування аргументів під час виклику",
        },
        {
            type: "code",
            language: "python",
            content:
                "def greet(name, age):\n    print(name, age)\n\nvalues = ['Anna', 21]\ndata = {'name': 'Oleh', 'age': 25}\n\ngreet(*values)\ngreet(**data)",
        },
    ],
    quiz: [],
};

export default lesson;
