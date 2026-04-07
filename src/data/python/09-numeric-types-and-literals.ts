import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "09-numeric-types-and-literals",
    title: "Числові типи та їх літерали",
    description:
        "Розбираємо `int`, `float`, `complex`, системи запису чисел, спеціальні значення `float` і практичні нюанси числових літералів у Python.",
    concepts: [
        "`int`, `float`, `complex`",
        "Літерали цілих чисел: `0b`, `0o`, `0x`",
        "Експоненціальний запис: `1.5e10`",
        "Підкреслення в літералах: `1_000_000`",
        "`float('inf')`, `float('-inf')`, `float('nan')`",
        "`sys.maxsize`",
    ],
    content: [
        {
            type: "text",
            content:
                "Python має кілька базових числових типів. Найчастіше ти працюватимеш із `int` і `float`, рідше з `complex`. Важливо розуміти не лише самі типи, а й те, як числа записуються прямо в коді через літерали.",
        },
        {
            type: "heading",
            level: 2,
            content: "Цілі числа: `int`",
        },
        {
            type: "text",
            content:
                "`int` у Python представляє цілі числа без дробової частини. На відміну від багатьох інших мов, Python не обмежує `int` строго 32 або 64 бітами: число може зростати настільки, наскільки це дозволяє пам'ять комп'ютера.",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = 5\nb = -120\nc = 10 ** 50\n\nprint(type(a))\nprint(c)",
        },
        {
            type: "callout",
            kind: "info",
            title: "Практичний висновок",
            content:
                "Для більшості повсякденних обчислень у Python тобі не потрібно переживати про переповнення `int` так, як у C, Java або C++.",
        },
        {
            type: "heading",
            level: 2,
            content: "Числа з плаваючою комою: `float`",
        },
        {
            type: "text",
            content:
                "`float` використовується для дробових чисел. У Python він реалізований як число подвійної точності за стандартом IEEE 754, тому інколи значення зберігаються не абсолютно точно.",
        },
        {
            type: "code",
            language: "python",
            content:
                "x = 3.14\ny = 0.1 + 0.2\n\nprint(type(x))\nprint(y)",
        },
        {
            type: "text",
            content:
                "Через особливості зберігання десяткових дробів `0.1 + 0.2` може дати не рівно `0.3`, а дуже близьке число. Це нормально для `float`.",
        },
        {
            type: "heading",
            level: 2,
            content: "Комплексні числа: `complex`",
        },
        {
            type: "text",
            content:
                "Python має вбудовану підтримку комплексних чисел. Уявна частина записується через суфікс `j`.",
        },
        {
            type: "code",
            language: "python",
            content:
                "z = 3 + 4j\n\nprint(type(z))\nprint(z.real)\nprint(z.imag)",
        },
        {
            type: "text",
            content:
                "Комплексні числа рідше трапляються в базовому коді, але корисні в математиці, фізиці, інженерії та сигнальній обробці.",
        },
        {
            type: "heading",
            level: 2,
            content: "Літерали цілих чисел",
        },
        {
            type: "text",
            content:
                "Те саме число можна записати в різних системах числення. Для цього Python має спеціальні префікси.",
        },
        {
            type: "code",
            language: "python",
            content:
                "decimal_number = 42\nbinary_number = 0b101010\noctal_number = 0o52\nhex_number = 0x2A\n\nprint(decimal_number)\nprint(binary_number)\nprint(octal_number)\nprint(hex_number)",
        },
        {
            type: "list",
            items: [
                "`42` це десятковий запис.",
                "`0b101010` це двійковий запис.",
                "`0o52` це вісімковий запис.",
                "`0x2A` це шістнадцятковий запис.",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Літерали `float` та експоненціальний запис",
        },
        {
            type: "text",
            content:
                "Для дуже великих або дуже малих чисел зручно використовувати експоненціальний запис. Наприклад, `1.5e10` означає `1.5 * 10^10`.",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = 1.5e10\nb = 2.3e-4\n\nprint(a)\nprint(b)",
        },
        {
            type: "heading",
            level: 2,
            content: "Підкреслення в числових літералах",
        },
        {
            type: "text",
            content:
                "Щоб великі числа було легше читати, Python дозволяє вставляти нижні підкреслення всередині літерала. На саме значення вони не впливають.",
        },
        {
            type: "code",
            language: "python",
            content:
                "population = 41_000_000\nseconds = 3_600\nhex_color = 0xFF_EE_AA\n\nprint(population)\nprint(seconds)\nprint(hex_color)",
        },
        {
            type: "callout",
            kind: "example",
            title: "Навіщо це корисно",
            content:
                "Запис `1_000_000` читається набагато легше, ніж `1000000`, особливо у фінансовому, статистичному або технічному коді.",
        },
        {
            type: "heading",
            level: 2,
            content: "Спеціальні значення `float`",
        },
        {
            type: "text",
            content:
                "Тип `float` має спеціальні значення для нескінченності та нечисла.",
        },
        {
            type: "code",
            language: "python",
            content:
                "positive_inf = float('inf')\nnegative_inf = float('-inf')\nnot_a_number = float('nan')\n\nprint(positive_inf)\nprint(negative_inf)\nprint(not_a_number)",
        },
        {
            type: "list",
            items: [
                "`float('inf')` означає додатну нескінченність.",
                "`float('-inf')` означає від'ємну нескінченність.",
                "`float('nan')` означає `not a number`.",
            ],
        },
        {
            type: "callout",
            kind: "warning",
            title: "Нюанс із `nan`",
            content:
                "`nan` поводиться незвично: навіть порівняння `nan == nan` дає `False`.",
        },
        {
            type: "heading",
            level: 2,
            content: "`sys.maxsize` та системні обмеження",
        },
        {
            type: "text",
            content:
                "Хоча `int` у Python не має звичного жорсткого максимуму, у системі все одно є деякі практичні межі. Наприклад, `sys.maxsize` часто показує типовий найбільший розмір індексів або контейнерів на поточній платформі.",
        },
        {
            type: "code",
            language: "python",
            content:
                "import sys\n\nprint(sys.maxsize)",
        },
        {
            type: "text",
            content:
                "`sys.maxsize` не є максимально можливим значенням для `int`, але він корисний як орієнтир для системних структур і платформних меж.",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Який тип у Python використовують для цілих чисел без дробової частини?",
            choices: ["`float`", "`complex`", "`int`", "`bytes`"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "`int` це вбудований тип для цілих чисел у Python.",
                },
            ],
        },
        {
            id: "q2",
            question: "Який запис є шістнадцятковим літералом?",
            choices: ["`0b1010`", "`0o12`", "`10e2`", "`0x1A`"],
            correctIndex: 3,
            solution: [
                {
                    type: "text",
                    content: "Префікс `0x` означає шістнадцятковий запис числа.",
                },
            ],
        },
        {
            id: "q3",
            question: "Що означає запис `1.5e10`?",
            choices: ["`1.5 * 10^10`", "`1.5 + 10`", "`15 / 10`", "`1.5 * 2^10`"],
            correctIndex: 0,
            solution: [
                {
                    type: "text",
                    content: "Експоненціальний запис `1.5e10` означає `1.5 * 10^10`.",
                },
            ],
        },
        {
            id: "q4",
            question: "Яке з цих значень створює `not a number`?",
            choices: ["`float('inf')`", "`float('-inf')`", "`float('nan')`", "`float('0')`"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content: "`float('nan')` створює спеціальне значення `not a number`.",
                },
            ],
        },
    ],
};

export default lesson;
