import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "42-itertools-module",
    title: "Модуль itertools",
    description:
        "Огляд `itertools` і найважливіших інструментів для комбінування, нарізання, фільтрації й групування ітераторів.",
    concepts: [
        "`count`, `cycle`, `repeat`",
        "`chain`, `chain.from_iterable`, `islice`",
        "`takewhile`, `dropwhile`, `filterfalse`, `compress`",
        "`starmap`, `accumulate`, `groupby`",
        "`product`, `permutations`, `combinations`",
        "`zip_longest`, `pairwise`, `batched`",
    ],
    content: [
        {
            type: "text",
            content:
                "Модуль `itertools` містить потужні інструменти для роботи з ітераторами. Він дозволяє писати обробку послідовностей коротше, швидше й часто ефективніше за пам'яттю.",
        },
        {
            type: "heading",
            level: 2,
            content: "Нескінченні ітератори",
        },
        {
            type: "code",
            language: "python",
            content:
                "from itertools import count, cycle, repeat\n\nprint(next(count(10)))\ncycler = cycle(['A', 'B'])\nprint(next(cycler), next(cycler), next(cycler))\nprint(list(repeat('x', 3)))",
        },
        {
            type: "heading",
            level: 2,
            content: "Об'єднання, зрізи й фільтрація",
        },
        {
            type: "code",
            language: "python",
            content:
                "from itertools import chain, islice, takewhile, dropwhile, filterfalse, compress\n\nprint(list(chain([1, 2], [3, 4])))\nprint(list(chain.from_iterable([[1, 2], [3, 4]])))\nprint(list(islice(range(10), 2, 8, 2)))\nprint(list(takewhile(lambda x: x < 5, range(10))))\nprint(list(dropwhile(lambda x: x < 5, range(10))))\nprint(list(filterfalse(lambda x: x % 2 == 0, range(6))))\nprint(list(compress('abcdef', [1, 0, 1, 0, 1, 0])))",
        },
        {
            type: "heading",
            level: 2,
            content: "Накопичення, групування й комбінаторика",
        },
        {
            type: "code",
            language: "python",
            content:
                "from itertools import starmap, accumulate, groupby, product, permutations, combinations, combinations_with_replacement, zip_longest, pairwise\nfrom operator import mul\n\nprint(list(starmap(mul, [(2, 3), (4, 5)])))\nprint(list(accumulate([1, 2, 3, 4])))\nprint([(k, list(g)) for k, g in groupby('aaabbc')])\nprint(list(product([1, 2], ['a', 'b'])))\nprint(list(permutations([1, 2, 3], 2)))\nprint(list(combinations([1, 2, 3], 2)))\nprint(list(combinations_with_replacement([1, 2, 3], 2)))\nprint(list(zip_longest([1, 2], ['a'], fillvalue='-')))\nprint(list(pairwise([10, 20, 30, 40])))",
        },
        {
            type: "text",
            content:
                "`pairwise()` доступний із Python 3.10+, а `batched()` з Python 3.12+.",
        },
        {
            type: "code",
            language: "python",
            content:
                "from itertools import batched\n\nprint(list(batched(range(10), 3)))",
        },
    ],
    quiz: [],
};

export default lesson;
