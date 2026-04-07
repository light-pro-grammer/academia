import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "20-string-encoding-and-memory",
    title: "Кодування та оптимізація пам'яті",
    description:
        "Розбираємо `encode()` і `decode()`, функції `ord()` та `chr()`, а також ідею string interning у Python.",
    concepts: [
        "`encode()` та `decode()`",
        "`str` і `bytes`",
        "`ord()` та `chr()`",
        "Unicode-коди символів",
        "String interning",
    ],
    content: [
        {
            type: "text",
            content:
                "Рядки в Python є Unicode-текстом, але під час роботи з файлами, мережею або зовнішніми системами часто потрібно переходити між текстом і байтами. Також корисно розуміти, як Python інколи оптимізує зберігання рядків у пам'яті.",
        },
        {
            type: "heading",
            level: 2,
            content: "`encode()` та `decode()`",
        },
        {
            type: "text",
            content:
                "Метод `encode()` перетворює рядок `str` на байти `bytes`, а `decode()` виконує зворотне перетворення.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "Привіт"\nencoded = text.encode("utf-8")\ndecoded = encoded.decode("utf-8")\n\nprint(text)\nprint(encoded)\nprint(decoded)\nprint(type(encoded))',
        },
        {
            type: "callout",
            kind: "info",
            title: "Коли це потрібно",
            content:
                "Кодування й декодування часто потрібні під час читання файлів, роботи з HTTP, сокетами, API та будь-якими зовнішніми системами.",
        },
        {
            type: "heading",
            level: 2,
            content: "`ord()` та `chr()`",
        },
        {
            type: "text",
            content:
                "`ord()` повертає числовий Unicode-код символу, а `chr()` робить навпаки: бере код і повертає символ.",
        },
        {
            type: "code",
            language: "python",
            content:
                'print(ord("A"))\nprint(ord("Я"))\nprint(chr(65))\nprint(chr(9786))',
        },
        {
            type: "text",
            content:
                "Ці функції корисні, коли потрібно працювати з символами на рівні кодів або зрозуміти, як конкретний символ представлений у Unicode.",
        },
        {
            type: "heading",
            level: 2,
            content: "Інтернування рядків",
        },
        {
            type: "text",
            content:
                "Python інколи повторно використовує однакові короткі рядки в пам'яті. Це називається string interning. Через це два однакові короткі рядки можуть мати той самий `id()`.",
        },
        {
            type: "code",
            language: "python",
            content:
                'a = "hello"\nb = "hello"\n\nprint(a == b)\nprint(a is b)\nprint(id(a))\nprint(id(b))',
        },
        {
            type: "callout",
            kind: "warning",
            title: "Не покладайся на це",
            content:
                "String interning це внутрішня оптимізація. Для порівняння рядків використовуй `==`, а не `is`.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Що робить метод `encode()` для рядка `str`?",
            choices: [
                "Перетворює `str` у `bytes`",
                "Перетворює `bytes` у `str`",
                "Повертає `id()` рядка",
                "Підраховує символи",
            ],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content:
                        "Метод `encode()` перетворює рядок `str` на байтове представлення `bytes`.",
                },
            ],
        },
    ],
};

export default lesson;
