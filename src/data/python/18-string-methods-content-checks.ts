import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "18-string-methods-content-checks",
    title: "Методи рядків: перевірка вмісту",
    description:
        "Розбираємо методи `isalpha()`, `isdigit()`, `isnumeric()`, `isalnum()`, `isspace()`, `isupper()`, `islower()` та `istitle()`.",
    concepts: [
        "Перевірка типу символів",
        "`isalpha()`, `isdigit()`, `isnumeric()`, `isalnum()`, `isspace()`",
        "Перевірка регістру",
        "`isupper()`, `islower()`, `istitle()`",
    ],
    content: [
        {
            type: "text",
            content:
                "Python має багато зручних методів, які дозволяють швидко перевірити, з яких символів складається рядок і чи відповідає він певному шаблону. Це особливо корисно для валідації введення користувача.",
        },
        {
            type: "heading",
            level: 2,
            content: "Перевірка типу символів",
        },
        {
            type: "text",
            content:
                "Методи цієї групи повертають `True` або `False` залежно від того, чи весь рядок складається з певного типу символів.",
        },
        {
            type: "code",
            language: "python",
            content:
                'print("Python".isalpha())\nprint("123".isdigit())\nprint("123".isnumeric())\nprint("Python3".isalnum())\nprint("   ".isspace())',
        },
        {
            type: "list",
            items: [
                "`isalpha()` перевіряє, чи рядок складається лише з літер.",
                "`isdigit()` перевіряє, чи рядок складається лише з цифр.",
                "`isnumeric()` теж перевіряє числовий вміст, але трохи ширше за `isdigit()`.",
                "`isalnum()` перевіряє, чи рядок складається лише з літер і цифр.",
                "`isspace()` перевіряє, чи рядок містить лише пробільні символи.",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Нюанс",
            content:
                "`isnumeric()` зазвичай підтримує ширший набір числових символів Unicode, ніж `isdigit()`, тому ці методи не завжди повністю взаємозамінні.",
        },
        {
            type: "heading",
            level: 2,
            content: "Перевірка регістру",
        },
        {
            type: "text",
            content:
                "Python також уміє перевіряти, в якому регістрі записаний текст.",
        },
        {
            type: "code",
            language: "python",
            content:
                'print("HELLO".isupper())\nprint("hello".islower())\nprint("Hello World".istitle())',
        },
        {
            type: "list",
            items: [
                "`isupper()` перевіряє, чи всі літери у верхньому регістрі.",
                "`islower()` перевіряє, чи всі літери в нижньому регістрі.",
                "`istitle()` перевіряє, чи кожне слово починається з великої літери, а далі має малі.",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Практичне застосування",
        },
        {
            type: "text",
            content:
                "Такі методи часто використовують для простих перевірок: чи ввів користувач число, чи містить логін лише букви й цифри, чи текст не складається лише з пробілів.",
        },
        {
            type: "code",
            language: "python",
            content:
                'user_input = "12345"\nif user_input.isdigit():\n    print("Це число")\n\nusername = "user2025"\nif username.isalnum():\n    print("Логін валідний")',
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Який метод перевіряє, чи рядок складається лише з літер і цифр?",
            choices: ["`isalpha()`", "`isdigit()`", "`isalnum()`", "`isspace()`"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content:
                        "Метод `isalnum()` повертає `True`, якщо рядок складається лише з літер і цифр.",
                },
            ],
        },
    ],
};

export default lesson;
