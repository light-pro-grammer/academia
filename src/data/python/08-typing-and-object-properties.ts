import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "08-typing-and-object-properties",
    title: "Типізація та властивості об'єктів",
    description: "Розбираємо, як Python працює з типами, ідентичністю об'єктів, `None`, змінюваністю та качиною типізацією.",
    concepts: [
        "Функція `type()`",
        "Функція `id()`",
        "`None` як спеціальне порожнє значення",
        "Mutable та immutable типи",
        "Динамічна типізація в Python",
        "Duck typing",
    ],
    content: [
        {
            type: "text",
            content:
                "У Python майже все є об'єктами: числа, рядки, списки, словники, функції й навіть `None`. Тому, коли ми говоримо про типізацію, ми фактично говоримо про властивості об'єктів, на які посилаються змінні.",
        },
        {
            type: "heading",
            level: 2,
            content: "Функція `type()`",
        },
        {
            type: "text",
            content:
                "Функція `type()` показує тип об'єкта. Це один із найзручніших інструментів для навчання, бо допомагає побачити, з чим саме зараз працює програма.",
        },
        {
            type: "code",
            language: "python",
            content:
                'print(type(5))\nprint(type(3.14))\nprint(type("Привіт"))\nprint(type([1, 2, 3]))',
        },
        {
            type: "text",
            content:
                "Так можна швидко перевірити, чи маєш ти `int`, `float`, `str`, `list` або будь-який інший тип.",
        },
        {
            type: "heading",
            level: 2,
            content: "Функція `id()`",
        },
        {
            type: "text",
            content:
                "Функція `id()` повертає ідентифікатор об'єкта. У реалізації CPython його часто пояснюють як адресу об'єкта в пам'яті, хоча для навчання достатньо думати про це як про унікальний номер конкретного об'єкта під час виконання програми.",
        },
        {
            type: "code",
            language: "python",
            content:
                "x = 10\ny = x\nprint(id(x))\nprint(id(y))",
        },
        {
            type: "text",
            content:
                "Якщо два імені посилаються на той самий об'єкт, їхні `id()` будуть однакові.",
        },
        {
            type: "callout",
            kind: "info",
            title: "Корисна інтуїція",
            content:
                "`type()` відповідає на питання «що це за об'єкт?», а `id()` відповідає на питання «це саме той самий об'єкт чи інший?».",
        },
        {
            type: "heading",
            level: 2,
            content: "`None` у Python",
        },
        {
            type: "text",
            content:
                "`None` це спеціальне значення, яке означає відсутність корисного результату або відсутність значення взагалі. Його часто порівнюють із `null` в інших мовах.",
        },
        {
            type: "code",
            language: "python",
            content:
                "result = None\nprint(result)\nprint(type(result))",
        },
        {
            type: "text",
            content:
                "`None` це окремий спеціальний об'єкт. Він не дорівнює нулю, порожньому рядку або `False`, хоча інколи новачки їх плутають.",
        },
        {
            type: "heading",
            level: 2,
            content: "Mutable та immutable типи",
        },
        {
            type: "text",
            content:
                "Деякі об'єкти в Python можна змінювати після створення, а деякі ні. Це одна з найважливіших властивостей типів.",
        },
        {
            type: "list",
            items: [
                "`mutable` означає змінюваний тип.",
                "`immutable` означає незмінюваний тип.",
            ],
        },
        {
            type: "callout",
            kind: "example",
            title: "Поширені immutable типи",
            content: "`int`, `float`, `str`, `tuple`, `bool`, `NoneType`",
        },
        {
            type: "callout",
            kind: "example",
            title: "Поширені mutable типи",
            content: "`list`, `dict`, `set`",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "Привіт"\n# text[0] = "п"  -> помилка, рядок незмінний\n\nnumbers = [1, 2, 3]\nnumbers[0] = 99\nprint(numbers)',
        },
        {
            type: "text",
            content:
                "Рядок змінити «всередині» не можна, а список можна. Саме тому список є mutable, а рядок immutable.",
        },
        {
            type: "heading",
            level: 2,
            content: "Динамічна типізація в Python",
        },
        {
            type: "text",
            content:
                "Python є мовою з динамічною типізацією. Це означає, що тип значення визначається під час виконання програми, а не жорстко задається наперед у синтаксисі змінної.",
        },
        {
            type: "code",
            language: "python",
            content:
                'x = 10\nprint(type(x))\n\nx = "десять"\nprint(type(x))',
        },
        {
            type: "text",
            content:
                "Ім'я `x` спочатку посилається на число, а потім на рядок. Для Python це нормально. У мовах зі статичною типізацією такий самий код часто був би або заборонений, або вимагав би явного оголошення типів.",
        },
        {
            type: "heading",
            level: 2,
            content: "Динамічна проти статичної типізації",
        },
        {
            type: "list",
            items: [
                "У динамічній типізації тип значення перевіряється під час виконання.",
                "У статичній типізації значна частина перевірок відбувається ще до запуску програми.",
                "Python робить акцент на гнучкості й швидкості розробки.",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Важливий нюанс",
            content:
                "Python підтримує анотації типів, але сам по собі все одно лишається динамічно типізованою мовою.",
        },
        {
            type: "heading",
            level: 2,
            content: "Качина типізація (Duck typing)",
        },
        {
            type: "text",
            content:
                "У Python часто важливо не те, як офіційно називається тип, а те, що об'єкт уміє робити. Це і є duck typing: якщо об'єкт поводиться як качка, то з ним можна працювати як з качкою.",
        },
        {
            type: "callout",
            kind: "definition",
            title: "Duck typing",
            content:
                "Якщо об'єкт підтримує потрібні операції або методи, Python-код часто працює з ним без перевірки «офіційного» типу.",
        },
        {
            type: "code",
            language: "python",
            content:
                "def make_it_quack(obj):\n    obj.quack()\n\n# Якщо в obj є метод quack(), код спрацює",
        },
        {
            type: "text",
            content:
                "Тобто нас цікавить не стільки назва класу, скільки поведінка об'єкта. Це робить Python дуже гнучким, але водночас вимагає уважності під час проєктування коду.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Що показує функція `type()`?",
            choices: [
                "Адресу об'єкта в пам'яті",
                "Тип об'єкта",
                "Ім'я змінної",
                "Довжину об'єкта",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "`type()` повертає тип об'єкта, наприклад `int`, `str` або `list`.",
                },
            ],
        },
        {
            id: "q2",
            question: "Що означає `None` у Python?",
            choices: [
                "Це те саме, що 0",
                "Це порожній рядок",
                "Це спеціальне значення відсутності значення",
                "Це список без елементів",
            ],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "`None` це спеціальний об'єкт, який означає відсутність значення або результату.",
                },
            ],
        },
        {
            id: "q3",
            question: "Який із цих типів є mutable?",
            choices: ["`str`", "`tuple`", "`list`", "`int`"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "`list` є змінюваним типом, його вміст можна змінювати після створення.",
                },
            ],
        },
        {
            id: "q4",
            question: "Що найкраще описує duck typing у Python?",
            choices: [
                "Python завжди вимагає точного збігу типів",
                "Головне те, як об'єкт поводиться і які методи має",
                "Усі об'єкти автоматично стають списками",
                "Типи в Python не існують",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Duck typing означає, що Python часто цікавить поведінка об'єкта, а не його формальна назва типу.",
                },
            ],
        },
    ],
};

export default lesson;
