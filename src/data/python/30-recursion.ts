import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "30-recursion",
    title: "Рекурсія",
    description:
        "Вивчаємо рекурсивні функції, базовий випадок, переповнення стека, `sys.setrecursionlimit()` і мемоізацію.",
    concepts: [
        "Рекурсія",
        "Базовий випадок",
        "Stack overflow",
        "`sys.setrecursionlimit()`",
        "Tail recursion",
        "Мемоізація",
    ],
    content: [
        {
            type: "text",
            content:
                "Рекурсія це підхід, коли функція викликає саму себе. Вона корисна в деяких задачах, але вимагає чіткого базового випадку.",
        },
        {
            type: "heading",
            level: 2,
            content: "Базовий і рекурсивний випадки",
        },
        {
            type: "code",
            language: "python",
            content:
                "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))",
        },
        {
            type: "text",
            content:
                "Базовий випадок зупиняє рекурсію, а рекурсивний випадок зменшує задачу до простішої версії.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нескінченна рекурсія та ліміт",
        },
        {
            type: "code",
            language: "python",
            content:
                "import sys\n\nprint(sys.getrecursionlimit())\n# sys.setrecursionlimit(2000)",
        },
        {
            type: "callout",
            kind: "warning",
            title: "Обережно",
            content:
                "Якщо рекурсія не має коректного базового випадку, програма впаде через переповнення стека. Піднімати ліміт рекурсії слід дуже обережно.",
        },
        {
            type: "heading",
            level: 2,
            content: "Tail recursion і мемоізація",
        },
        {
            type: "text",
            content:
                "Python не оптимізує хвостову рекурсію автоматично, тому рекурсивний код не отримає такого ж виграшу, як у деяких інших мовах.",
        },
        {
            type: "code",
            language: "python",
            content:
                "from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(30))",
        },
        {
            type: "text",
            content:
                "Мемоізація зберігає вже обчислені результати і може різко прискорити рекурсивні алгоритми.",
        },
    ],
    quiz: [],
};

export default lesson;
