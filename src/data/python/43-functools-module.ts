import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "43-functools-module",
    title: "Модуль functools",
    description:
        "Огляд `functools`: `reduce`, `partial`, кешування, `cached_property`, `total_ordering`, `wraps` і `singledispatch`.",
    concepts: [
        "`reduce()`",
        "`partial()`",
        "`lru_cache()` і `cache()`",
        "`cached_property`",
        "`total_ordering`",
        "`wraps()`",
        "`singledispatch()`",
    ],
    content: [
        {
            type: "text",
            content:
                "Модуль `functools` містить інструменти для роботи з функціями: від згортки послідовностей до кешування та побудови декораторів.",
        },
        {
            type: "heading",
            level: 2,
            content: "`reduce()` і `partial()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "from functools import reduce, partial\nfrom operator import add\n\nprint(reduce(add, [1, 2, 3, 4]))\n\npow2 = partial(pow, exp=2)\nprint(pow2(5))",
        },
        {
            type: "heading",
            level: 2,
            content: "Кешування",
        },
        {
            type: "code",
            language: "python",
            content:
                "from functools import lru_cache, cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\n@cache\ndef double(n):\n    return n * 2\n\nprint(fib(20))\nprint(double(10))",
        },
        {
            type: "text",
            content:
                "`cache()` це необмежений кеш, доступний з Python 3.9+, а `lru_cache()` дає більше контролю.",
        },
        {
            type: "heading",
            level: 2,
            content: "`cached_property` і `total_ordering`",
        },
        {
            type: "code",
            language: "python",
            content:
                "from functools import cached_property, total_ordering\n\n@total_ordering\nclass Box:\n    def __init__(self, value):\n        self.value = value\n\n    def __eq__(self, other):\n        return self.value == other.value\n\n    def __lt__(self, other):\n        return self.value < other.value\n\nclass Data:\n    @cached_property\n    def heavy(self):\n        print('computed')\n        return 42\n\nd = Data()\nprint(d.heavy)\nprint(d.heavy)",
        },
        {
            type: "heading",
            level: 2,
            content: "`wraps()` і `singledispatch()`",
        },
        {
            type: "code",
            language: "python",
            content:
                "from functools import wraps, singledispatch\n\ndef decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper\n\n@singledispatch\ndef show(value):\n    print('default', value)\n\n@show.register\ndef _(value: int):\n    print('int', value)\n\nshow('hi')\nshow(5)",
        },
        {
            type: "text",
            content:
                "`wraps()` допомагає зберегти метадані оригінальної функції в декораторах, а `singledispatch()` дозволяє будувати generic-функції з поведінкою для різних типів.",
        },
    ],
    quiz: [],
};

export default lesson;
