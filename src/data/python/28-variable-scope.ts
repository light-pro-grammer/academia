import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "28-variable-scope",
    title: "Область видимості (Variable Scope)",
    description:
        "Вивчаємо правило LEGB, `global` і `nonlocal` у Python.",
    concepts: ["LEGB", "локальна область", "глобальна область", "`global`", "`nonlocal`"],
    content: [
        {
            type: "text",
            content:
                "Область видимості визначає, де саме змінна доступна в коді. У Python для пошуку імен діє правило LEGB: local, enclosing, global, built-in.",
        },
        {
            type: "heading",
            level: 2,
            content: "Правило LEGB",
        },
        {
            type: "list",
            items: [
                "Local: змінні всередині поточної функції.",
                "Enclosing: змінні з зовнішньої функції.",
                "Global: змінні рівня модуля.",
                "Built-in: вбудовані імена Python.",
            ],
        },
        {
            type: "code",
            language: "python",
            content:
                "x = 'global'\n\ndef outer():\n    x = 'enclosing'\n\n    def inner():\n        x = 'local'\n        print(x)\n\n    inner()\n\nouter()",
        },
        {
            type: "heading",
            level: 2,
            content: "`global`",
        },
        {
            type: "code",
            language: "python",
            content:
                "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)",
        },
        {
            type: "heading",
            level: 2,
            content: "`nonlocal`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def outer():\n    count = 0\n\n    def inner():\n        nonlocal count\n        count += 1\n        print(count)\n\n    inner()\n\nouter()",
        },
        {
            type: "text",
            content:
                "`nonlocal` дає змогу змінювати змінну з батьківської, але не глобальної області видимості.",
        },
    ],
    quiz: [],
};

export default lesson;
