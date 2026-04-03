import type { Lesson } from "@/types";

const lesson: Lesson = {
  id: "44-expressions-variables",
  title: "Вирази зі змінними",
  description: "Від числових виразів до алгебраїчних — змінні, підстановка і спрощення",
  concepts: [
    "Змінна як невідоме число",
    "Підстановка значень",
    "Порядок дій у виразах зі змінними",
    "Подібні доданки",
  ],
  content: [
    {
      type: "heading",
      level: 2,
      content: "Що таке змінна?",
    },
    {
      type: "text",
      content:
        "Змінна — це літера що позначає невідоме або змінне число. Вирази зі змінними підпорядковуються тим самим правилам порядку дій що і числові.",
    },
    {
      type: "callout",
      kind: "definition",
      title: "Алгебраїчний вираз",
      content:
        "Алгебраїчний вираз містить числа, змінні і знаки операцій. Приклади: $3x + 5$, $2(a - b)$, $x^2 + 2x + 1$. На відміну від числового виразу — не можна обчислити без знання значень змінних.",
    },
    {
      type: "heading",
      level: 2,
      content: "Підстановка значень",
    },
    {
      type: "text",
      content:
        "Щоб обчислити вираз — підставляємо конкретні значення замість змінних і застосовуємо порядок дій:",
    },
    {
      type: "math-block",
      content: "\\text{Вираз } 3x + 5 \\text{ при } x = 4:",
    },
    {
      type: "math-block",
      content: "3 \\times 4 + 5 = 12 + 5 = 17",
    },
    {
      type: "math-block",
      content: "\\text{Вираз } 2(a - b) \\text{ при } a = 7, b = 3:",
    },
    {
      type: "math-block",
      content: "2 \\times (7 - 3) = 2 \\times 4 = 8",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Підставляй у дужках",
      content:
        "При підстановці від'ємного значення — завжди бери в дужки. $x^2$ при $x = -3$: $(-3)^2 = 9$, а не $-3^2 = -9$. Дужки рятують від помилок.",
    },
    {
      type: "heading",
      level: 2,
      content: "Порядок дій у виразах зі змінними",
    },
    {
      type: "text",
      content:
        "Правила ті самі: степінь → множення/ділення → додавання/віднімання:",
    },
    {
      type: "math-block",
      content: "x^2 + 3x - 5 \\text{ при } x = 2:",
    },
    {
      type: "math-block",
      content: "2^2 + 3 \\times 2 - 5 = 4 + 6 - 5 = 5",
    },
    {
      type: "math-block",
      content: "2a^2 - (a + b)^2 \\text{ при } a=3, b=1:",
    },
    {
      type: "math-block",
      content: "2 \\times 3^2 - (3+1)^2 = 2 \\times 9 - 4^2 = 18 - 16 = 2",
    },
    {
      type: "heading",
      level: 2,
      content: "Коефіцієнт і термін",
    },
    {
      type: "callout",
      kind: "definition",
      title: "Термінологія",
      content:
        "У виразі $5x^2 - 3x + 7$: $5x^2$, $-3x$, $7$ — члени (терміни). $5$ — коефіцієнт при $x^2$. $-3$ — коефіцієнт при $x$. $7$ — вільний член (константа).",
    },
    {
      type: "heading",
      level: 2,
      content: "Подібні доданки",
    },
    {
      type: "callout",
      kind: "definition",
      title: "Подібні доданки",
      content:
        "Члени виразу що мають однакову змінну з однаковим степенем. Подібні доданки можна зводити — додавати або віднімати їх коефіцієнти.",
    },
    {
      type: "math-block",
      content: "3x + 5x = (3+5)x = 8x",
    },
    {
      type: "math-block",
      content: "7x^2 - 3x^2 = (7-3)x^2 = 4x^2",
    },
    {
      type: "math-block",
      content: "2x + 3y + 5x - y = (2+5)x + (3-1)y = 7x + 2y",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Не можна зводити різні члени",
      content:
        "$3x + 5x^2 \\neq 8x^2$ і $\\neq 8x$. Члени $3x$ і $5x^2$ — НЕ подібні (різний степінь). Їх не можна об'єднати.",
    },
    {
      type: "heading",
      level: 2,
      content: "Спрощення виразів",
    },
    {
      type: "callout",
      kind: "example",
      title: "Спрости: $4x + 3 - 2x + 7 - x$",
      content:
        "Зводимо подібні: $x$-члени: $4x - 2x - x = (4-2-1)x = x$. Константи: $3 + 7 = 10$. Результат: $x + 10$.",
    },
    {
      type: "callout",
      kind: "example",
      title: "Спрости: $3(x + 2) - 2(x - 1)$",
      content:
        "Розкриваємо дужки: $3x + 6 - 2x + 2$. Зводимо подібні: $(3x-2x) + (6+2) = x + 8$.",
    },
    {
      type: "callout",
      kind: "info",
      title: "Змінні у програмуванні",
      content:
        "У програмуванні змінна — це іменована область пам'яті. $x = 5$ означає: записати значення 5 у змінну $x$. Вирази зі змінними обчислюються за тими самими правилами пріоритету. $y = 3 * x + 5$ при $x=4$ дасть $y=17$.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Обчисли $3x^2 - 2x + 1$ при $x = 3$",
      choices: ["$20$", "$22$", "$24$", "$28$"],
      correctIndex: 3,
      solution: [
        {
          type: "text",
          content: "Підставляємо $x = 3$:",
        },
        {
          type: "math-block",
          content: "3 \\times 3^2 - 2 \\times 3 + 1 = 3 \\times 9 - 6 + 1 = 27 - 6 + 1 = 22",
        },
      ],
    },
    {
      id: "q2",
      question: "Обчисли $x^2 + 2x - 3$ при $x = -2$",
      choices: ["$-3$", "$-1$", "$1$", "$5$"],
      correctIndex: 0,
      solution: [
        {
          type: "text",
          content: "Підставляємо $x = -2$ (в дужках):",
        },
        {
          type: "math-block",
          content: "(-2)^2 + 2 \\times (-2) - 3 = 4 - 4 - 3 = -3",
        },
      ],
    },
    {
      id: "q3",
      question: "Зведи подібні: $5x + 3y - 2x + y - x$",
      choices: ["$2x + 4y$", "$3x + 4y$", "$2x + 3y$", "$4x + 3y$"],
      correctIndex: 0,
      solution: [
        {
          type: "math-block",
          content: "x\\text{-члени: } 5x - 2x - x = (5-2-1)x = 2x",
        },
        {
          type: "math-block",
          content: "y\\text{-члени: } 3y + y = 4y",
        },
        {
          type: "math-block",
          content: "\\text{Результат: } 2x + 4y",
        },
      ],
    },
    {
      id: "q4",
      question: "Спрости: $4(x + 3) - 3(x - 2)$",
      choices: ["$x + 6$", "$x + 18$", "$7x + 6$", "$x + 6$"],
      correctIndex: 1,
      solution: [
        {
          type: "text",
          content: "Розкриваємо дужки:",
        },
        {
          type: "math-block",
          content: "4x + 12 - 3x + 6 = (4x - 3x) + (12+6) = x + 18",
        },
      ],
    },
    {
      id: "q5",
      question: "Обчисли $2(a+b)^2 - ab$ при $a=2$, $b=3$",
      choices: ["$44$", "$50$", "$44$", "$56$"],
      correctIndex: 1,
      solution: [
        {
          type: "text",
          content: "Підставляємо $a=2$, $b=3$:",
        },
        {
          type: "math-block",
          content: "2(2+3)^2 - 2 \\times 3 = 2 \\times 5^2 - 6 = 2 \\times 25 - 6 = 50 - 6 = 44",
        },
      ],
    },
  ],
};

export default lesson;