import type { Lesson } from "@/types";

const lesson: Lesson = {
    id: "32-lists",
    title: "Списки",
    description:
        "Розбираємо створення списків, індексацію, зрізи, змінність, основні методи, сортування, копіювання та вкладені списки.",
    concepts: [
        "Створення списків",
        "Індексація та зрізи",
        "Mutability",
        "Методи списків",
        "Сортування й копіювання",
        "Вкладені списки",
    ],
    content: [
        {
            type: "text",
            content:
                "Список у Python це змінна впорядкована колекція елементів. Це одна з найуживаніших структур даних у мові.",
        },
        {
            type: "heading",
            level: 2,
            content: "Створення списків",
        },
        {
            type: "code",
            language: "python",
            content:
                "a = []\nb = list()\nc = list('abc')\nd = [1, 2, 3]\n\nprint(a, b, c, d)",
        },
        {
            type: "heading",
            level: 2,
            content: "Індексація, зрізи та змінність",
        },
        {
            type: "code",
            language: "python",
            content:
                "nums = [10, 20, 30, 40, 50]\nprint(nums[0])\nprint(nums[-1])\nprint(nums[1:4])\n\nnums[0] = 99\nprint(nums)",
        },
        {
            type: "text",
            content:
                "На відміну від рядків, списки є змінними: їх можна модифікувати на місці.",
        },
        {
            type: "heading",
            level: 2,
            content: "Додавання елементів",
        },
        {
            type: "code",
            language: "python",
            content:
                "items = [1, 2]\nitems.append(3)\nitems.insert(1, 99)\nitems.extend([4, 5])\nprint(items)",
        },
        {
            type: "heading",
            level: 2,
            content: "Видалення елементів",
        },
        {
            type: "code",
            language: "python",
            content:
                "items = [1, 2, 3, 2]\nitems.remove(2)\nprint(items)\nprint(items.pop(1))\ndel items[0]\nprint(items)\nitems.clear()\nprint(items)",
        },
        {
            type: "heading",
            level: 2,
            content: "Пошук і базові функції",
        },
        {
            type: "code",
            language: "python",
            content:
                "nums = [3, 1, 3, 7]\nprint(nums.index(3))\nprint(nums.count(3))\nprint(7 in nums)\nprint(len(nums), min(nums), max(nums), sum(nums))",
        },
        {
            type: "heading",
            level: 2,
            content: "Сортування, розворот і копія",
        },
        {
            type: "code",
            language: "python",
            content:
                "words = ['pear', 'apple', 'banana']\nwords.sort()\nprint(words)\nwords.sort(key=len, reverse=True)\nprint(words)\nprint(sorted(words))\nwords.reverse()\nprint(words)\ncopy_words = words.copy()\nprint(copy_words)",
        },
        {
            type: "heading",
            level: 2,
            content: "Вкладені списки, `+`, `*` і розпакування",
        },
        {
            type: "code",
            language: "python",
            content:
                "matrix = [[1, 2], [3, 4]]\nprint(matrix[1][0])\n\nprint([1, 2] + [3, 4])\nprint(['ha'] * 3)\n\na, b, *rest = [1, 2, 3, 4, 5]\nprint(a, b, rest)",
        },
    ],
    quiz: [],
};

export default lesson;
