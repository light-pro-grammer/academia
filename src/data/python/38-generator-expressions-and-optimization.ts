import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "38-generator-expressions-and-optimization",
    title: "Генераторні вирази та оптимізація",
    description:
        "Розбираємо generator expressions, різницю між lazy та eager обчисленнями, ефективність пам'яті та вибір відповідного підходу.",
    concepts: [
        "Generator expressions",
        "Lazy vs eager",
        "Ефективність пам'яті",
        "Коли що використовувати",
    ],
    content: [
        {
            type: "text",
            content:
                "Генераторні вирази схожі на list comprehensions, але вони не створюють усю колекцію одразу. Замість цього вони обчислюють значення поступово, коли вони реально потрібні.",
        },
        {
            type: "heading",
            level: 2,
            content: "Генераторні вирази",
        },
        {
            type: "code",
            language: "python",
            content:
                "gen = (x * x for x in range(5))\nprint(gen)\nprint(next(gen))\nprint(next(gen))",
        },
        {
            type: "heading",
            level: 2,
            content: "Lazy проти eager",
        },
        {
            type: "code",
            language: "python",
            content:
                "list_comp = [x * x for x in range(5)]\ngen_expr = (x * x for x in range(5))\n\nprint(list_comp)\nprint(gen_expr)",
        },
        {
            type: "text",
            content:
                "Генератор списку обчислює всі елементи одразу, а generator expression робить це ліниво, тобто по одному на вимогу.",
        },
        {
            type: "heading",
            level: 2,
            content: "Ефективність пам'яті",
        },
        {
            type: "code",
            language: "python",
            content:
                "total = sum(x * x for x in range(1_000_000))\nprint(total)",
        },
        {
            type: "text",
            content:
                "Для великих обчислень генераторні вирази часто вигідніші, бо не зберігають усі значення в пам'яті одночасно.",
        },
        {
            type: "heading",
            level: 2,
            content: "Коли який підхід використовувати",
        },
        {
            type: "list",
            items: [
                "Використовуй list comprehension, коли тобі справді потрібен готовий список.",
                "Використовуй generator expression, коли достатньо поступової ітерації.",
                "Для великих потоків даних generator expression часто кращий за пам'яттю.",
            ],
        },
    ],
    quiz: [],
};

export default lesson;
