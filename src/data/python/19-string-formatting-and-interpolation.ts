import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "19-string-formatting-and-interpolation",
    title: "Форматування рядків та інтерполяція",
    description:
        "Вивчаємо `%`-форматування, `str.format()`, f-рядки, форматні специфікатори, вкладені f-рядки та `string.Template`.",
    concepts: [
        "Форматування через `%`",
        "`str.format()`",
        "f-рядки",
        "Вирази у f-рядках",
        "Форматні специфікатори",
        "Вкладені f-рядки",
        "`string.Template`",
    ],
    content: [
        {
            type: "text",
            content:
                "Форматування рядків потрібне майже в кожній програмі: для повідомлень, звітів, логів, роботи з числами та зручного виведення значень. У Python існує кілька підходів до цього.",
        },
        {
            type: "heading",
            level: 2,
            content: "Форматування через оператор `%`",
        },
        {
            type: "text",
            content:
                "Старіший спосіб форматування рядків у Python використовує оператор `%`. Він досі трапляється в старому коді, але сьогодні зазвичай вважається застарілим.",
        },
        {
            type: "code",
            language: "python",
            content:
                'name = "Anna"\nage = 21\nprint("Мене звати %s і мені %d рік" % (name, age))',
        },
        {
            type: "callout",
            kind: "warning",
            title: "Практична порада",
            content:
                "Для нового Python-коду зазвичай краще використовувати `str.format()` або f-рядки.",
        },
        {
            type: "heading",
            level: 2,
            content: "Форматування через `str.format()`",
        },
        {
            type: "text",
            content:
                "Метод `str.format()` зробив форматування гнучкішим. Він дозволяє вставляти значення в шаблон через фігурні дужки.",
        },
        {
            type: "code",
            language: "python",
            content:
                'name = "Anna"\nage = 21\nprint("Мене звати {} і мені {} рік".format(name, age))\nprint("Мене звати {name} і мені {age} рік".format(name=name, age=age))',
        },
        {
            type: "heading",
            level: 2,
            content: "f-рядки",
        },
        {
            type: "text",
            content:
                "f-рядки з’явилися в Python 3.6 і стали найзручнішим сучасним способом інтерполяції. У них змінні та вирази вставляються прямо в рядок через `{...}`.",
        },
        {
            type: "code",
            language: "python",
            content:
                'name = "Anna"\nage = 21\nprint(f"Мене звати {name} і мені {age} рік")',
        },
        {
            type: "heading",
            level: 2,
            content: "Вирази у f-рядках",
        },
        {
            type: "text",
            content:
                "У f-рядках можна вставляти не лише змінні, а й цілі вирази, включно з арифметикою та форматуванням чисел.",
        },
        {
            type: "code",
            language: "python",
            content:
                'value = 3.14159\nx = 5\nprint(f"x = {x}")\nprint(f"x * 2 = {x * 2}")\nprint(f"pi ≈ {value:.2f}")',
        },
        {
            type: "heading",
            level: 2,
            content: "Специфікатори формату у f-рядках",
        },
        {
            type: "text",
            content:
                "Після двокрапки у фігурних дужках можна вказати формат: ширину, точність, вирівнювання або тип представлення.",
        },
        {
            type: "code",
            language: "python",
            content:
                'value = 42\npi = 3.14159\n\nprint(f"|{value:>6}|")\nprint(f"|{value:<6}|")\nprint(f"|{value:^6}|")\nprint(f"{pi:.2f}")\nprint(f"{value:b}")\nprint(f"{value:x}")',
        },
        {
            type: "list",
            items: [
                "`>`, `<`, `^` задають вирівнювання.",
                "Число перед ними задає ширину поля.",
                "`.2f` означає число з двома знаками після крапки.",
                "`b` показує число в двійковому вигляді, `x` у шістнадцятковому.",
            ],
        },
        {
            type: "heading",
            level: 2,
            content: "Вкладені f-рядки",
        },
        {
            type: "text",
            content:
                "У складніших випадках можна будувати один форматований рядок усередині іншого або використовувати проміжні шаблони для гнучкого виведення.",
        },
        {
            type: "code",
            language: "python",
            content:
                'name = "Anna"\nwidth = 10\nprint(f"{f\'Ім\\\'я: {name}\':<{width + 5}}!")',
        },
        {
            type: "callout",
            kind: "info",
            title: "Нюанс",
            content:
                "Вкладені f-рядки існують, але з ними легко зробити код заплутаним. У простих випадках краще не ускладнювати форматування зайвими вкладеннями.",
        },
        {
            type: "heading",
            level: 2,
            content: "Шаблонні рядки через `string.Template`",
        },
        {
            type: "text",
            content:
                "`string.Template` це ще один спосіб підставляти значення в шаблон. Він простіший і корисний там, де потрібен безпечніший або більш обмежений шаблонний механізм.",
        },
        {
            type: "code",
            language: "python",
            content:
                "from string import Template\n\nt = Template('Привіт, $name!')\nprint(t.substitute(name='Anna'))",
        },
    ],
    quiz: [
        {
            id: "q1",
            question: "Який сучасний спосіб форматування рядків у Python зазвичай є найзручнішим?",
            choices: ["Оператор `%`", "`eval()`", "f-рядки", "`bytes()`"],
            correctIndex: 2,
            solution: [
                {
                    type: "text",
                    content:
                        "У сучасному Python найчастіше використовують f-рядки, бо вони короткі, читабельні й дозволяють вставляти вирази прямо в рядок.",
                },
            ],
        },
    ],
};

export default lesson;
