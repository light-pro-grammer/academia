import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "34-dictionaries",
    title: "Словники",
    description:
        "Розбираємо створення словників, доступ за ключем, `get()`, `items()`, `update()`, comprehensions і корисні класи з `collections`.",
    concepts: [
        "Створення словників",
        "Доступ і оновлення значень",
        "`get()`, `keys()`, `values()`, `items()`",
        "`update()`, `|`, `|=`",
        "`setdefault()`, `fromkeys()`, comprehensions",
        "Counter, defaultdict, OrderedDict, ChainMap",
    ],
    content: [
        {
            type: "text",
            content:
                "Словник це структура даних «ключ-значення». Він дуже зручний для швидкого доступу до даних за іменем ключа.",
        },
        {
            type: "heading",
            level: 2,
            content: "Створення та доступ",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = {}\nb = {'name': 'Anna', 'age': 21}\nc = dict(city='Kyiv')\n\nprint(b['name'])\nprint(b.get('email', 'немає'))\nprint('age' in b)",
        },
        {
            type: "heading",
            level: 2,
            content: "Додавання, оновлення й видалення",
        },
        {
            type: "code",
            language: "python",
            content:
                "d = {'a': 1}\nd['b'] = 2\nd['a'] = 10\nprint(d)\ndel d['a']\nprint(d)\nprint(d.pop('b'))",
        },
        {
            type: "heading",
            level: 2,
            content: "`keys()`, `values()`, `items()` та ітерація",
        },
        {
            type: "code",
            language: "python",
            content:
                "user = {'name': 'Anna', 'age': 21}\nprint(user.keys())\nprint(user.values())\nprint(user.items())\n\nfor key, value in user.items():\n    print(key, value)",
        },
        {
            type: "heading",
            level: 2,
            content: "Злиття словників",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = {'x': 1}\nb = {'y': 2}\nprint(a | b)\na |= b\nprint(a)",
        },
        {
            type: "heading",
            level: 2,
            content: "`setdefault()`, `copy()`, `fromkeys()` і comprehensions",
        },
        {
            type: "code",
            language: "python",
            content:
                "d = {}\nprint(d.setdefault('count', 0))\nprint(d)\nprint(dict.fromkeys(['a', 'b'], 0))\nprint({x: x * x for x in range(4)})",
        },
        {
            type: "text",
            content:
                "Починаючи з Python 3.7, звичайний словник зберігає порядок додавання елементів.",
        },
        {
            type: "heading",
            level: 2,
            content: "Словники з `collections`",
        },
        {
            type: "code",
            language: "python",
            content:
                "from collections import Counter, defaultdict, OrderedDict, ChainMap\n\nprint(Counter('banana'))\n\ndd = defaultdict(list)\ndd['a'].append(1)\nprint(dd)\n\nod = OrderedDict([('x', 1), ('y', 2)])\nprint(od)\n\ncm = ChainMap({'a': 1}, {'b': 2})\nprint(cm['a'], cm['b'])",
        },
        {
            type: "text",
            content:
                "Словник часто є хорошою альтернативою конструкції switch/case для зіставлення значень із діями або результатами.",
        },
    ],
    quiz: [],
};

export default lesson;
