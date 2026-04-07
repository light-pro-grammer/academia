import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "37-comprehensions-basics",
    title: "Основи Comprehensions",
    description:
        "Вивчаємо генератори списків, словників і множин, а також умови й вкладені comprehensions.",
    concepts: [
        "List comprehensions",
        "Умови в comprehensions",
        "Вкладені comprehensions",
        "Dictionary comprehensions",
        "Set comprehensions",
    ],
    content: [
        {
            type: "text",
            content:
                "Comprehensions дають змогу коротко й виразно створювати нові колекції на основі інших ітерабельних об'єктів. Це один із найхарактерніших і найкорисніших інструментів Python.",
        },
        {
            type: "heading",
            level: 2,
            content: "Генератори списків",
        },
        {
            type: "code",
            language: "python",
            content:
                "squares = [x * x for x in range(5)]\nprint(squares)",
        },
        {
            type: "text",
            content:
                "Запис `[expr for item in iterable]` означає: пройтися по ітерабельному об'єкту й побудувати новий список із результатів виразу `expr`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Генератори списків з умовою",
        },
        {
            type: "code",
            language: "python",
            content:
                "evens = [x for x in range(10) if x % 2 == 0]\nprint(evens)",
        },
        {
            type: "text",
            content:
                "Умова після `if` дозволяє залишити лише ті елементи, які проходять перевірку.",
        },
        {
            type: "heading",
            level: 2,
            content: "Вкладені генератори списків",
        },
        {
            type: "code",
            language: "python",
            content:
                "pairs = [(x, y) for x in range(2) for y in range(3)]\nprint(pairs)",
        },
        {
            type: "heading",
            level: 2,
            content: "Генератори словників",
        },
        {
            type: "code",
            language: "python",
            content:
                "squares = {x: x * x for x in range(5)}\nprint(squares)",
        },
        {
            type: "heading",
            level: 2,
            content: "Генератори множин",
        },
        {
            type: "code",
            language: "python",
            content:
                "unique_lengths = {len(word) for word in ['cat', 'dog', 'python']}\nprint(unique_lengths)",
        },
    ],
    quiz: [],
};

export default lesson;
