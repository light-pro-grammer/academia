import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "21-conditional-statements",
    title: "Умовні конструкції",
    description:
        "Вивчаємо `if`, `elif`, `else`, вкладені умови та однорядкові умовні вирази в Python.",
    concepts: [
        "`if`",
        "`if / elif / else`",
        "Вкладені умови",
        "Тернарний оператор",
    ],
    content: [
        {
            type: "text",
            content:
                "Умовні конструкції дозволяють програмі вибирати різні гілки виконання залежно від умов. Це один із базових інструментів керування потоком у Python.",
        },
        {
            type: "heading",
            level: 2,
            content: "Інструкція `if`",
        },
        {
            type: "code",
            language: "python",
            content:
                "age = 18\n\nif age >= 18:\n    print('Повнолітній')",
        },
        {
            type: "text",
            content:
                "Блок після `if` виконується лише тоді, коли умова істинна.",
        },
        {
            type: "heading",
            level: 2,
            content: "`if / elif / else`",
        },
        {
            type: "code",
            language: "python",
            content:
                "score = 85\n\nif score >= 90:\n    print('Відмінно')\nelif score >= 75:\n    print('Добре')\nelse:\n    print('Потрібно ще попрацювати')",
        },
        {
            type: "text",
            content:
                "`elif` дозволяє додати ще одну перевірку, а `else` спрацьовує, якщо жодна попередня умова не виконалась.",
        },
        {
            type: "heading",
            level: 2,
            content: "Вкладені інструкції `if`",
        },
        {
            type: "code",
            language: "python",
            content:
                "age = 20\nhas_ticket = True\n\nif age >= 18:\n    if has_ticket:\n        print('Можна заходити')",
        },
        {
            type: "text",
            content:
                "Один `if` можна вкладати в інший, але якщо вкладень стає забагато, код стає важче читати.",
        },
        {
            type: "heading",
            level: 2,
            content: "Однорядкові вирази `if`",
        },
        {
            type: "text",
            content:
                "У Python є тернарний оператор у вигляді `value_if_true if condition else value_if_false`.",
        },
        {
            type: "code",
            language: "python",
            content:
                "age = 17\nstatus = 'дорослий' if age >= 18 else 'неповнолітній'\nprint(status)",
        },
    ],
    quiz: [],
};

export default lesson;
