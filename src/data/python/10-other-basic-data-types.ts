import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "10-other-basic-data-types",
    title: "Інші базові типи даних",
    description:
        "Знайомимось із `bool`, `str`, `bytes` і `bytearray`, їх призначенням та ключовими відмінностями.",
    concepts: [
        "`bool`: `True` і `False`",
        "`str` як Unicode-рядки",
        "`bytes` як незмінні байти",
        "`bytearray` як змінні байти",
        "Відмінність між текстом і сирими даними",
    ],
    content: [
        {
            type: "text",
            content:
                "Окрім чисел, у Python є ще кілька дуже важливих базових типів. Частина з них відповідає за логіку програми, частина за роботу з текстом, а частина за сирі двійкові дані.",
        },
        {
            type: "heading",
            level: 2,
            content: "Булеві значення: `bool`",
        },
        {
            type: "text",
            content:
                "Тип `bool` має лише два значення: `True` і `False`. Він використовується для умов, перевірок і керування потоком виконання.",
        },
        {
            type: "code",
            language: "python",
            content:
                "is_python_fun = True\nis_sky_green = False\n\nprint(type(is_python_fun))\nprint(is_sky_green)",
        },
        {
            type: "text",
            content:
                "Найчастіше `bool` з'являється в умовах `if`, у порівняннях і в логічних операціях.",
        },
        {
            type: "heading",
            level: 2,
            content: "Рядки: `str`",
        },
        {
            type: "text",
            content:
                "`str` це тип для тексту. У Python рядки є послідовностями символів Unicode, тому вони добре підходять для роботи з українським, англійським та іншими мовами.",
        },
        {
            type: "code",
            language: "python",
            content:
                'message = "Привіт, Python!"\nname = \'Олена\'\n\nprint(type(message))\nprint(message)\nprint(name)',
        },
        {
            type: "callout",
            kind: "definition",
            title: "Unicode",
            content:
                "Unicode це стандарт, який дозволяє представляти символи багатьох мов світу в одному узгодженому форматі.",
        },
        {
            type: "text",
            content:
                "Рядки в Python є `immutable`, тобто змінити окремий символ усередині вже створеного рядка не можна.",
        },
        {
            type: "heading",
            level: 2,
            content: "Байти: `bytes`",
        },
        {
            type: "text",
            content:
                "`bytes` це незмінна послідовність сирих байтів. Вона потрібна тоді, коли ми працюємо не з текстом як набором символів, а з двійковими даними: файлами, мережею, зображеннями, протоколами чи кодуванням.",
        },
        {
            type: "code",
            language: "python",
            content:
                "data = b'ABC'\n\nprint(type(data))\nprint(data)\nprint(data[0])",
        },
        {
            type: "text",
            content:
                "Префікс `b` перед літералом означає, що це не `str`, а саме `bytes`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Масиви байтів: `bytearray`",
        },
        {
            type: "text",
            content:
                "`bytearray` схожий на `bytes`, але на відміну від нього є змінним типом. Це зручно, коли байтові дані треба редагувати.",
        },
        {
            type: "code",
            language: "python",
            content:
                "data = bytearray(b'ABC')\ndata[0] = 90\n\nprint(type(data))\nprint(data)",
        },
        {
            type: "text",
            content:
                "Тут число `90` це ASCII-код символу `Z`, тому після зміни отримаємо байтову послідовність, що починається із `Z`.",
        },
        {
            type: "heading",
            level: 2,
            content: "`str` проти `bytes`",
        },
        {
            type: "list",
            items: [
                "`str` це текстові символи Unicode.",
                "`bytes` це сирі байти.",
                "`bytearray` це сирі байти, які можна змінювати.",
            ],
        },
        {
            type: "callout",
            kind: "info",
            title: "Добра інтуїція",
            content:
                "Якщо ти працюєш із людським текстом, зазвичай потрібен `str`. Якщо працюєш із файлами, мережею або кодуванням на низьчому рівні, часто потрібні `bytes` або `bytearray`.",
        },
        {
            type: "code",
            language: "python",
            content:
                'text = "Привіт"\nencoded = text.encode("utf-8")\nrestored = encoded.decode("utf-8")\n\nprint(text)\nprint(encoded)\nprint(restored)',
        },
        {
            type: "text",
            content:
                "Метод `encode()` перетворює рядок на байти, а `decode()` повертає байти назад у текст.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Які два значення має тип `bool`?",
            choices: ["`0` і `1`", "`yes` і `no`", "`True` і `False`", "`on` і `off`"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "У Python тип `bool` має рівно два значення: `True` і `False`.",
                },
            ],
        },
        {
            id: "q2",
            question: "Який тип використовують для тексту Unicode?",
            choices: ["`bytes`", "`str`", "`bytearray`", "`bool`"],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "`str` це тип для текстових рядків у Python.",
                },
            ],
        },
        {
            id: "q3",
            question: "Який тип є змінною послідовністю байтів?",
            choices: ["`bytes`", "`str`", "`bytearray`", "`complex`"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "`bytearray` це змінна послідовність байтів, а `bytes` незмінна.",
                },
            ],
        },
        {
            id: "q4",
            question: "Що робить метод `encode()` для рядка?",
            choices: [
                "Перетворює байти на рядок",
                "Перетворює рядок на байти",
                "Розбиває рядок на список",
                "Перевіряє тип об'єкта",
            ],
            correctIndex: 1,
            solution: [
                {
                    type: "text",
                    content: "Метод `encode()` перетворює текстовий рядок `str` на байтове представлення `bytes`.",
                },
            ],
        },
    ],
};

export default lesson;
