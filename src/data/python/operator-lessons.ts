import type { Lesson } from "@/types";

export const operatorLessons: Record<string, Lesson> = {
    "11-arithmetic-operators": {
        id: "11-arithmetic-operators",
        title: "Арифметичні оператори",
        description:
            "Розбираємо арифметичні оператори Python, різницю між `/` і `//`, остачу від ділення, степені, пріоритет операторів і роль дужок.",
        concepts: [
            "`+`, `-`, `*`, `/`, `//`, `%`",
            "Цілочисельне ділення проти звичайного",
            "Остача від ділення",
            "`**` проти `math.pow()`",
            "Пріоритет операторів",
            "Дужки у виразах",
        ],
        content: [
            {
                type: "text",
                content:
                    "Арифметичні оператори в Python дозволяють будувати числові вирази, виконувати базові обчислення та контролювати порядок їх виконання.",
            },
            {
                type: "heading",
                level: 2,
                content: "Базові арифметичні оператори",
            },
            {
                type: "code",
                language: "python",
                content:
                    "a = 10\nb = 3\n\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)",
            },
            {
                type: "list",
                items: [
                    "`+` додає.",
                    "`-` віднімає.",
                    "`*` множить.",
                    "`/` виконує звичайне ділення.",
                    "`//` виконує цілочисельне ділення.",
                    "`%` повертає остачу від ділення.",
                ],
            },
            {
                type: "heading",
                level: 2,
                content: "Цілочисельне ділення `//` проти звичайного `/`",
            },
            {
                type: "code",
                language: "python",
                content:
                    "print(7 / 2)\nprint(7 // 2)\nprint(-7 / 2)\nprint(-7 // 2)",
            },
            {
                type: "callout",
                kind: "warning",
                title: "Нюанс",
                content:
                    "Для від'ємних чисел `//` округлює вниз. Наприклад, `-7 // 2` дає `-4`.",
            },
            {
                type: "heading",
                level: 2,
                content: "Оператор остачі `%`",
            },
            {
                type: "text",
                content:
                    "Оператор `%` часто використовують для перевірки парності, циклічних шаблонів і задач із розбиттям на групи.",
            },
            {
                type: "code",
                language: "python",
                content:
                    "n = 7\nprint(n % 2)\nprint(n % 2 == 0)",
            },
            {
                type: "heading",
                level: 2,
                content: "Піднесення до степеня: `**` проти `math.pow()`",
            },
            {
                type: "code",
                language: "python",
                content:
                    "import math\n\nprint(2 ** 3)\nprint(math.pow(2, 3))\nprint(type(2 ** 3))\nprint(type(math.pow(2, 3)))",
            },
            {
                type: "text",
                content:
                    "У звичайному Python-коді для степенів найчастіше використовують `**`. Функція `math.pow()` зазвичай повертає `float`.",
            },
            {
                type: "heading",
                level: 2,
                content: "Пріоритет операторів і дужки",
            },
            {
                type: "code",
                language: "python",
                content:
                    "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(2 + 3 * 4 ** 2)",
            },
            {
                type: "text",
                content:
                    "Python виконує вирази за правилами пріоритету. Якщо хочеш явно змінити порядок обчислень або зробити вираз зрозумілішим, використовуй дужки.",
            },
        ],
        quiz: [
            {
                id: "q1",
                question: "Який оператор у Python повертає остачу від ділення?",
                choices: ["`/`", "`//`", "`%`", "`*`"],
                correctIndex: 2,
                solution: [
                    {
                        type: "text",
                        content: "Оператор `%` повертає остачу від ділення одного числа на інше.",
                    },
                ],
            },
        ],
    },
    "12-comparison-identity-membership": {
        id: "12-comparison-identity-membership",
        title: "Порівняння, ідентичність та входження",
        description:
            "Оператори порівняння, ланцюжкові порівняння, `is` і `is not`, різниця між `==` та `is`, оператори `in` і `not in`, а також truthiness і falsiness.",
        concepts: [
            "`==`, `!=`, `<`, `>`, `<=`, `>=`",
            "Ланцюжкові порівняння",
            "`is` та `is not`",
            "`==` проти `is`",
            "`in` та `not in`",
            "Truthiness і falsiness",
        ],
        content: [
            {
                type: "text",
                content:
                    "Ця група операторів відповідає за перевірки: чи рівні значення, чи це той самий об'єкт, чи міститься елемент у колекції, і як Python трактує значення в умовах.",
            },
            {
                type: "heading",
                level: 2,
                content: "Оператори порівняння",
            },
            {
                type: "code",
                language: "python",
                content:
                    "print(5 == 5)\nprint(5 != 3)\nprint(2 < 7)\nprint(10 >= 10)",
            },
            {
                type: "heading",
                level: 2,
                content: "Ланцюжкові порівняння",
            },
            {
                type: "code",
                language: "python",
                content:
                    "x = 7\nprint(0 < x < 10)\nprint(10 < x < 20)",
            },
            {
                type: "text",
                content:
                    "Запис `0 < x < 10` читається природно: `x` більше 0 і менше 10.",
            },
            {
                type: "heading",
                level: 2,
                content: "Ідентичність: `is` та `is not`",
            },
            {
                type: "code",
                language: "python",
                content:
                    "value = None\nprint(value is None)\nprint(value is not None)",
            },
            {
                type: "text",
                content:
                    "`is` перевіряє, чи це саме той самий об'єкт. Найчастіше його використовують для перевірки на `None`.",
            },
            {
                type: "heading",
                level: 2,
                content: "`==` проти `is`",
            },
            {
                type: "code",
                language: "python",
                content:
                    "a = [1, 2]\nb = [1, 2]\n\nprint(a == b)\nprint(a is b)",
            },
            {
                type: "text",
                content:
                    "`==` перевіряє рівність значень, а `is` перевіряє ідентичність об'єктів.",
            },
            {
                type: "heading",
                level: 2,
                content: "Оператори входження: `in` та `not in`",
            },
            {
                type: "code",
                language: "python",
                content:
                    "letters = ['a', 'b', 'c']\nprint('a' in letters)\nprint('z' not in letters)\nprint('Py' in 'Python')",
            },
            {
                type: "heading",
                level: 2,
                content: "Істинність та хибність значень",
            },
            {
                type: "code",
                language: "python",
                content:
                    "print(bool(0))\nprint(bool(1))\nprint(bool(''))\nprint(bool('Python'))\nprint(bool([]))\nprint(bool([1]))",
            },
            {
                type: "list",
                items: [
                    "Хибними часто є `0`, `0.0`, `''`, `[]`, `{}`, `set()` і `None`.",
                    "Більшість інших значень Python вважає істинними.",
                ],
            },
        ],
        quiz: [
            {
                id: "q1",
                question: "Що перевіряє оператор `is`?",
                choices: [
                    "Чи однакові значення",
                    "Чи це той самий об'єкт",
                    "Чи це число",
                    "Чи це рядок",
                ],
                correctIndex: 1,
                solution: [
                    {
                        type: "text",
                        content: "Оператор `is` перевіряє ідентичність, тобто чи йдеться про той самий об'єкт.",
                    },
                ],
            },
        ],
    },
    "13-logical-and-bitwise-operators": {
        id: "13-logical-and-bitwise-operators",
        title: "Логічні та побітові оператори",
        description:
            "Логічні оператори `and`, `or`, `not`, short-circuit evaluation і базові побітові оператори.",
        concepts: [
            "`and`, `or`, `not`",
            "Short-circuit evaluation",
            "`&`, `|`, `^`, `~`, `<<`, `>>`",
            "Побітове І, АБО, XOR, НЕ та зсуви",
        ],
        content: [
            {
                type: "text",
                content:
                    "Логічні оператори працюють із умовами, а побітові з двійковим представленням чисел. Це різні рівні абстракції, але обидві групи часто трапляються в Python-коді.",
            },
            {
                type: "heading",
                level: 2,
                content: "Логічні оператори",
            },
            {
                type: "code",
                language: "python",
                content:
                    "age = 20\nhas_ticket = True\n\nprint(age >= 18 and has_ticket)\nprint(age < 18 or has_ticket)\nprint(not has_ticket)",
            },
            {
                type: "heading",
                level: 2,
                content: "Short-circuit evaluation",
            },
            {
                type: "code",
                language: "python",
                content:
                    "x = 0\nprint(x != 0 and 10 / x > 1)\nprint(x == 0 or 10 / 2 > 1)",
            },
            {
                type: "text",
                content:
                    "Python не обчислює праву частину логічного виразу, якщо результат уже визначений лівою. Це допомагає уникати зайвих обчислень і деяких помилок.",
            },
            {
                type: "heading",
                level: 2,
                content: "Побітові оператори",
            },
            {
                type: "code",
                language: "python",
                content:
                    "a = 6\nb = 3\n\nprint(a & b)\nprint(a | b)\nprint(a ^ b)\nprint(a << 1)\nprint(a >> 1)",
            },
            {
                type: "list",
                items: [
                    "`&` це побітове І.",
                    "`|` це побітове АБО.",
                    "`^` це побітове виключне АБО.",
                    "`~` інвертує біти.",
                    "`<<` зсуває біти вліво.",
                    "`>>` зсуває біти вправо.",
                ],
            },
        ],
        quiz: [
            {
                id: "q1",
                question: "Який оператор у Python означає логічне «і»?",
                choices: ["`or`", "`not`", "`and`", "`is`"],
                correctIndex: 2,
                solution: [
                    {
                        type: "text",
                        content: "Оператор `and` означає логічне «і».",
                    },
                ],
            },
        ],
    },
    "14-special-operators-and-overloading": {
        id: "14-special-operators-and-overloading",
        title: "Спеціальні оператори та перевантаження",
        description:
            "Оператор морж `:=`, ідея перевантаження операторів, а також поведінка `+` і `*` для нечислових типів.",
        concepts: [
            "`:=`",
            "Dunder methods",
            "`+` для рядків",
            "`*` для послідовностей",
        ],
        content: [
            {
                type: "text",
                content:
                    "Деякі оператори в Python мають спеціальні ролі або поводяться по-різному залежно від типів об'єктів. Саме це робить мову гнучкою, але вимагає уважності.",
            },
            {
                type: "heading",
                level: 2,
                content: "Оператор морж `:=`",
            },
            {
                type: "code",
                language: "python",
                content:
                    "if (length := len('Python')) > 3:\n    print(length)",
            },
            {
                type: "text",
                content:
                    "Оператор `:=` дозволяє присвоїти значення прямо всередині виразу. Він доступний починаючи з Python 3.8.",
            },
            {
                type: "heading",
                level: 2,
                content: "Перевантаження операторів",
            },
            {
                type: "code",
                language: "python",
                content:
                    "class Vector:\n    def __init__(self, x):\n        self.x = x\n\n    def __add__(self, other):\n        return Vector(self.x + other.x)",
            },
            {
                type: "text",
                content:
                    "Поведінку операторів для власних класів можна налаштовувати через магічні методи, наприклад `__add__`.",
            },
            {
                type: "heading",
                level: 2,
                content: "Оператор `+` для рядків порівняно з числами",
            },
            {
                type: "code",
                language: "python",
                content:
                    "print(2 + 3)\nprint('Py' + 'thon')",
            },
            {
                type: "text",
                content:
                    "Для чисел `+` означає додавання, а для рядків конкатенацію, тобто об'єднання.",
            },
            {
                type: "heading",
                level: 2,
                content: "Оператор `*` для послідовностей",
            },
            {
                type: "code",
                language: "python",
                content:
                    "print('ha' * 3)\nprint([1, 2] * 2)",
            },
            {
                type: "text",
                content:
                    "Оператор `*` може не лише множити числа, а й дублювати рядки, списки та інші послідовності.",
            },
        ],
        quiz: [
            {
                id: "q1",
                question: "Що робить оператор `:=`?",
                choices: [
                    "Присвоює значення всередині виразу",
                    "Завжди створює список",
                    "Імпортує модуль",
                    "Перетворює рядок у число",
                ],
                correctIndex: 0,
                solution: [
                    {
                        type: "text",
                        content: "Оператор `:=` дозволяє присвоювати значення прямо всередині виразу.",
                    },
                ],
            },
        ],
    },
};

export function getOperatorLesson(lessonId: string): Lesson | null {
    return operatorLessons[lessonId] ?? null;
}
