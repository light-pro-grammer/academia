import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "26-function-basics",
    title: "Основи функцій",
    description:
        "Вивчаємо `def`, виклик функцій, `return`, неявне повернення `None` і повернення кількох значень.",
    concepts: ["`def`", "виклик функції", "`return`", "`None`", "кілька значень"],
    content: [
        {
            type: "text",
            content:
                "Функції дозволяють згрупувати код у повторно використовувані блоки. Це одна з головних основ структурування програм у Python.",
        },
        {
            type: "heading",
            level: 2,
            content: "Оголошення функції через `def`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def greet():\n    print('Привіт!')",
        },
        {
            type: "heading",
            level: 2,
            content: "Виклик функції",
        },
        {
            type: "code",
            language: "python",
            content:
                "def greet():\n    print('Привіт!')\n\ngreet()",
        },
        {
            type: "heading",
            level: 2,
            content: "`return`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def add(a, b):\n    return a + b\n\nresult = add(2, 3)\nprint(result)",
        },
        {
            type: "text",
            content:
                "`return` завершує виконання функції й повертає значення назад у місце виклику.",
        },
        {
            type: "heading",
            level: 2,
            content: "Неявне повернення `None`",
        },
        {
            type: "code",
            language: "python",
            content:
                "def show_message():\n    print('hello')\n\nvalue = show_message()\nprint(value)",
        },
        {
            type: "text",
            content:
                "Якщо в функції немає `return`, Python автоматично повертає `None`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Повернення кількох значень",
        },
        {
            type: "code",
            language: "python",
            content:
                "def min_max(numbers):\n    return min(numbers), max(numbers)\n\nsmallest, largest = min_max([3, 1, 9])\nprint(smallest, largest)",
        },
        {
            type: "text",
            content:
                "Насправді Python упаковує кілька значень у кортеж, а потім їх можна розпакувати.",
        },
    ],
    quiz: [],
};

export default lesson;
