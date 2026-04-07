import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "22-pattern-matching",
    title: "Структурне зіставлення шаблонів",
    description:
        "Розбираємо `match`, літеральні шаблони, захоплення, `_`, OR-патерни, guard clauses і шаблони для послідовностей, словників та класів.",
    concepts: [
        "`match`",
        "Literal patterns",
        "Capture patterns",
        "Wildcard `_`",
        "OR patterns",
        "Guard clauses",
        "Sequence, mapping і class patterns",
    ],
    content: [
        {
            type: "text",
            content:
                "Починаючи з Python 3.10, у мові з'явилась інструкція `match`, яка дозволяє зіставляти значення з різними шаблонами. Це гнучкіший підхід, ніж довгі ланцюжки `if / elif` у деяких задачах.",
        },
        {
            type: "heading",
            level: 2,
            content: "Базовий `match`",
        },
        {
            type: "code",
            language: "python",
            content:
                "command = 'start'\n\nmatch command:\n    case 'start':\n        print('Запуск')\n    case 'stop':\n        print('Зупинка')",
        },
        {
            type: "heading",
            level: 2,
            content: "Літеральні, capture і wildcard-шаблони",
        },
        {
            type: "code",
            language: "python",
            content:
                "value = 42\n\nmatch value:\n    case 0:\n        print('Нуль')\n    case x:\n        print(f'Захоплене значення: {x}')\n    case _:\n        print('Щось інше')",
        },
        {
            type: "text",
            content:
                "`_` це шаблон-заглушка, який означає «все інше». Capture pattern зберігає значення в нову змінну.",
        },
        {
            type: "heading",
            level: 2,
            content: "OR-патерни та guard clauses",
        },
        {
            type: "code",
            language: "python",
            content:
                "day = 'sat'\n\nmatch day:\n    case 'sat' | 'sun':\n        print('Вихідний')\n    case name if len(name) > 3:\n        print('Рядок довший за 3 символи')",
        },
        {
            type: "heading",
            level: 2,
            content: "Шаблони послідовностей і словників",
        },
        {
            type: "code",
            language: "python",
            content:
                "data = [1, 2]\n\nmatch data:\n    case [x, y]:\n        print(x, y)\n\nuser = {'name': 'Anna', 'age': 21}\n\nmatch user:\n    case {'name': name, 'age': age}:\n        print(name, age)",
        },
        {
            type: "heading",
            level: 2,
            content: "Шаблони класів",
        },
        {
            type: "code",
            language: "python",
            content:
                "class Point:\n    __match_args__ = ('x', 'y')\n\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(2, 3)\n\nmatch p:\n    case Point(x, y):\n        print(x, y)",
        },
    ],
    quiz: [],
};

export default lesson;
