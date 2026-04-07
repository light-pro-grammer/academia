import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "16-string-operations-indexing-slicing",
    title: "Операції, індексація та зрізи",
    description:
        "Вивчаємо конкатенацію, повторення, індексацію, зрізи, перевертання рядка, незмінність `str`, `len()` і перевірку входження.",
    concepts: [
        "Конкатенація рядків",
        "Повторення рядків",
        "Індексація",
        "Зрізи",
        "Перевертання рядка",
        "Незмінність рядків",
        "`len()`",
        "`in` для рядків",
    ],
    content: [
        {
            type: "text",
            content:
                "Після того як ми навчилися створювати рядки, варто розібратися, як із ними працювати: поєднувати, повторювати, отримувати окремі символи та вирізати потрібні частини.",
        },
        {
            type: "heading",
            level: 2,
            content: "Конкатенація рядків за допомогою `+`",
        },
        {
            type: "text",
            content:
                "Оператор `+` для рядків означає не додавання, а об'єднання двох текстових фрагментів в один.",
        },
        {
            type: "code",
            language: "python",
            content:
                'first = "Hello"\nsecond = " world"\nresult = first + second\n\nprint(result)',
        },
        {
            type: "heading",
            level: 2,
            content: "Дублювання рядків за допомогою `*`",
        },
        {
            type: "text",
            content:
                "Оператор `*` дозволяє повторити рядок кілька разів. Це зручно для шаблонів, роздільників і простих текстових ефектів.",
        },
        {
            type: "code",
            language: "python",
            content:
                'print("ha" * 3)\nprint("-" * 10)',
        },
        {
            type: "heading",
            level: 2,
            content: "Індексація рядків",
        },
        {
            type: "text",
            content:
                "Рядок у Python є послідовністю символів, тому до окремих символів можна звертатись за індексом. Індексація починається з `0`, а від'ємні індекси рахують із кінця.",
        },
        {
            type: "code",
            language: "python",
            content:
                's = "hello"\n\nprint(s[0])\nprint(s[1])\nprint(s[-1])\nprint(s[-2])',
        },
        {
            type: "heading",
            level: 2,
            content: "Зрізи рядків",
        },
        {
            type: "text",
            content:
                "Зрізи дозволяють отримати частину рядка. Загальний шаблон виглядає так: `s[start:stop:step]`.",
        },
        {
            type: "code",
            language: "python",
            content:
                's = "Python"\n\nprint(s[0:2])\nprint(s[2:])\nprint(s[:4])\nprint(s[::2])',
        },
        {
            type: "list",
            items: [
                "`start` це індекс початку.",
                "`stop` це індекс, до якого беремо символи, але не включаємо його.",
                "`step` це крок.",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Перевертання рядка через `s[::-1]`",
        },
        {
            type: "text",
            content:
                "Якщо в зрізі задати крок `-1`, Python пройде по рядку в зворотному порядку.",
        },
        {
            type: "code",
            language: "python",
            content:
                's = "Python"\nprint(s[::-1])',
        },
        {
            type: "heading",
            level: 2,
            content: "Незмінність рядків",
        },
        {
            type: "text",
            content:
                "Рядки в Python є `immutable`, тобто після створення їх не можна змінювати по символах.",
        },
        {
            type: "code",
            language: "python",
            content:
                's = "hello"\n# s[0] = "H"   # це викличе помилку',
        },
        {
            type: "callout",
            kind: "warning",
            title: "Чому так відбувається",
            content:
                "У рядка можна створити нове значення, але не можна змінити окремий символ усередині вже існуючого об'єкта `str`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Функція `len()`",
        },
        {
            type: "text",
            content:
                "`len()` повертає кількість символів у рядку.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "Python"\nprint(len(text))',
        },
        {
            type: "heading",
            level: 2,
            content: "Оператор входження `in`",
        },
        {
            type: "text",
            content:
                "Оператор `in` дозволяє перевірити, чи входить підрядок в інший рядок.",
        },
        {
            type: "code",
            language: "python",
            content:
                'print("lo" in "hello")\nprint("py" in "Python")',
        },
        {
            type: "callout",
            kind: "info",
            title: "Нюанс",
            content:
                "Перевірка входження в рядках чутлива до регістру, тому `\"py\" in \"Python\"` дає `False`.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Що поверне вираз `\"ha\" * 3`?",
            choices: ["`ha3`", "`hahaha`", "`ha ha ha`", "помилку"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content:
                        "Оператор `*` повторює рядок потрібну кількість разів, тому результатом буде `hahaha`.",
                },
            ],
        },
    ],
};

export default lesson;
