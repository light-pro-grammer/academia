import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "17-string-methods-formatting-search",
    title: "Методи рядків: форматування та пошук",
    description:
        "Вивчаємо основні методи рядків для зміни регістру, очищення, розбиття, об'єднання, пошуку, заміни та вирівнювання тексту.",
    concepts: [
        "Зміна регістру",
        "`strip()`, `lstrip()`, `rstrip()`",
        "`split()`, `rsplit()`, `splitlines()`",
        "`join()`",
        "`replace()`",
        "`find()`, `rfind()`, `index()`, `rindex()`",
        "`count()`, `startswith()`, `endswith()`",
        "`center()`, `ljust()`, `rjust()`, `zfill()`",
    ],
    content: [
        {
            type: "text",
            content:
                "Python має багато вбудованих методів для роботи з рядками. Вони допомагають очищати текст, шукати підрядки, змінювати формат і зручно готувати рядки до виведення або обробки.",
        },
        {
            type: "heading",
            level: 2,
            content: "Зміна регістру",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "hello python"\n\nprint(text.upper())\nprint(text.lower())\nprint(text.title())\nprint(text.capitalize())\nprint(text.swapcase())',
        },
        {
            type: "list",
            items: [
                "`upper()` робить усі літери великими.",
                "`lower()` робить усі літери малими.",
                "`title()` робить кожне слово з великої літери.",
                "`capitalize()` робить великою лише першу літеру рядка.",
                "`swapcase()` міняє великий регістр на малий і навпаки.",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "`strip()`, `lstrip()`, `rstrip()`",
        },
        {
            type: "text",
            content:
                "Ці методи видаляють пробіли або інші вказані символи з країв рядка.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "   hello   "\nprint(text.strip())\nprint(text.lstrip())\nprint(text.rstrip())\n\nfilename = "---report---"\nprint(filename.strip("-"))',
        },
        {
            type: "heading",
            level: 2,
            content: "`split()` та `rsplit()`",
        },
        {
            type: "text",
            content:
                "Метод `split()` розбиває рядок на список частин. `rsplit()` робить те саме, але починає розділення з правого боку.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "one two three four"\nprint(text.split())\nprint(text.split(" ", 2))\nprint(text.rsplit(" ", 2))',
        },
        {
            type: "heading",
            level: 2,
            content: "`splitlines()`",
        },
        {
            type: "text",
            content:
                "Метод `splitlines()` розбиває багаторядковий текст за символами перенесення рядка.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "line 1\\nline 2\\nline 3"\nprint(text.splitlines())',
        },
        {
            type: "heading",
            level: 2,
            content: "`join()`",
        },
        {
            type: "text",
            content:
                "`join()` об'єднує список рядків в один рядок, використовуючи поточний рядок як роздільник.",
        },
        {
            type: "code",
            language: "python",
            content:
                'words = ["Python", "is", "fun"]\nprint(" ".join(words))\nprint("-".join(words))',
        },
        {
            type: "heading",
            level: 2,
            content: "`replace()`",
        },
        {
            type: "text",
            content:
                "Метод `replace()` замінює один підрядок на інший.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "I like Java"\nprint(text.replace("Java", "Python"))',
        },
        {
            type: "heading",
            level: 2,
            content: "`find()` та `rfind()`",
        },
        {
            type: "text",
            content:
                "Ці методи шукають підрядок і повертають індекс входження. Якщо нічого не знайдено, повертають `-1`.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "banana"\nprint(text.find("an"))\nprint(text.rfind("an"))\nprint(text.find("xy"))',
        },
        {
            type: "heading",
            level: 2,
            content: "`index()` та `rindex()`",
        },
        {
            type: "text",
            content:
                "Схожі на `find()` та `rfind()`, але якщо підрядок не знайдено, викликають `ValueError`.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "banana"\nprint(text.index("an"))\nprint(text.rindex("an"))',
        },
        {
            type: "callout",
            kind: "warning",
            title: "Різниця між `find()` та `index()`",
            content:
                "`find()` безпечніший для перевірок, бо повертає `-1`, а `index()` зламає програму, якщо підрядка немає.",
        },
        {
            type: "heading",
            level: 2,
            content: "`count()`, `startswith()`, `endswith()`",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "banana"\nprint(text.count("an"))\nprint(text.startswith("ba"))\nprint(text.endswith("na"))',
        },
        {
            type: "heading",
            level: 2,
            content: "Вирівнювання: `center()`, `ljust()`, `rjust()`",
        },
        {
            type: "text",
            content:
                "Ці методи допомагають красиво вирівнювати текст у фіксованій ширині.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "cat"\nprint(text.center(10, "-"))\nprint(text.ljust(10, "."))\nprint(text.rjust(10, "."))',
        },
        {
            type: "heading",
            level: 2,
            content: "`zfill()`",
        },
        {
            type: "text",
            content:
                "Метод `zfill()` доповнює рядок нулями зліва до потрібної довжини. Це часто корисно для номерів, кодів або форматування часу.",
        },
        {
            type: "code",
            language: "python",
            content:
                'print("42".zfill(5))\nprint("7".zfill(3))',
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Чим `find()` відрізняється від `index()`, якщо підрядок не знайдено?",
            choices: [
                "`find()` повертає `-1`, а `index()` викликає `ValueError`",
                "`find()` повертає `None`, а `index()` `-1`",
                "Вони поводяться однаково",
                "`find()` завжди повертає `True` або `False`",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content:
                        "Якщо підрядок не знайдено, `find()` повертає `-1`, а `index()` викликає `ValueError`.",
                },
            ],
        },
    ],
};

export default lesson;
