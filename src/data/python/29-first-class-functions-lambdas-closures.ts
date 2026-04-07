import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "29-first-class-functions-lambdas-closures",
    title: "Функції першого класу, лямбди та замикання",
    description:
        "Розбираємо функції як об'єкти, `lambda`, closures і фабрики функцій.",
    concepts: [
        "Функції першого класу",
        "Присвоєння та передача функцій",
        "Повернення функцій",
        "`lambda`",
        "Closures",
        "Фабрика функцій",
    ],
    content: [
        {
            type: "text",
            content:
                "У Python функції є об'єктами першого класу. Це означає, що їх можна зберігати в змінних, передавати іншим функціям і повертати з функцій.",
        },
        {
            type: "heading",
            level: 2,
            content: "Функції як об'єкти",
        },
        {
            type: "code",
            language: "python",
            content:
                "def greet(name):\n    return f'Hello, {name}'\n\nsay_hello = greet\nprint(say_hello('Anna'))",
        },
        {
            type: "heading",
            level: 2,
            content: "Передача й повернення функцій",
        },
        {
            type: "code",
            language: "python",
            content:
                "def apply(func, value):\n    return func(value)\n\ndef square(x):\n    return x * x\n\nprint(apply(square, 5))",
        },
        {
            type: "heading",
            level: 2,
            content: "Лямбда-функції",
        },
        {
            type: "code",
            language: "python",
            content:
                "double = lambda x: x * 2\nprint(double(4))",
        },
        {
            type: "text",
            content:
                "`lambda` підходить лише для коротких виразів. Усередині неї не можна писати повноцінні інструкції на кшталт `if`, `for` або `return` як окремі statements.",
        },
        {
            type: "heading",
            level: 2,
            content: "Замикання та фабрика функцій",
        },
        {
            type: "code",
            language: "python",
            content:
                "def make_multiplier(n):\n    def multiplier(x):\n        return x * n\n    return multiplier\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(double(5))\nprint(triple(5))",
        },
        {
            type: "text",
            content:
                "Внутрішня функція пам'ятає значення `n` із зовнішньої області. Саме це і є замикання.",
        },
    ],
    quiz: [],
};

export default lesson;
