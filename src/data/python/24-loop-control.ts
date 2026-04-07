import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "24-loop-control",
    title: "Управління циклами",
    description:
        "Розбираємо `break`, `continue`, `pass`, блоки `for / else`, `while / else` і вкладені цикли.",
    concepts: [
        "`break`",
        "`continue`",
        "`pass`",
        "`for / else`, `while / else`",
        "Вкладені цикли",
    ],
    content: [
        {
            type: "text",
            content:
                "Окрім самих циклів, Python дає інструменти, щоб керувати їх поведінкою: виходити достроково, пропускати ітерації або залишати тимчасові заглушки в коді.",
        },
        {
            type: "heading",
            level: 2,
            content: "`break`, `continue`, `pass`",
        },
        {
            type: "code",
            language: "python",
            content:
                "for n in range(5):\n    if n == 3:\n        break\n    print(n)\n\nfor n in range(5):\n    if n == 2:\n        continue\n    print(n)\n\nfor _ in range(1):\n    pass",
        },
        {
            type: "list",
            items: [
                "`break` повністю зупиняє цикл.",
                "`continue` пропускає поточну ітерацію.",
                "`pass` нічого не робить і часто використовується як тимчасова заглушка.",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "`for / else` та `while / else`",
        },
        {
            type: "code",
            language: "python",
            content:
                "for n in [1, 3, 5]:\n    if n == 2:\n        break\nelse:\n    print('Не знайдено')",
        },
        {
            type: "text",
            content:
                "Блок `else` у циклі виконується, якщо цикл завершився природно, тобто без `break`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Вкладені цикли",
        },
        {
            type: "code",
            language: "python",
            content:
                "for i in range(2):\n    for j in range(3):\n        print(i, j)",
        },
    ],
    quiz: [],
};

export default lesson;
