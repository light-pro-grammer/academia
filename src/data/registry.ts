export interface LessonRef {
    subject: string;
    course: string;
    section: string;
    lesson: string;
    title: string;
    sectionTitle: string;
}

export const lessonRegistry: LessonRef[] = [
    // ── Розділ 1: Числа та лічба ──────────────────────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "01-numbers",
        lesson: "01-number-basics",
        title: "Основи чисел",
        sectionTitle: "Числа та лічба",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "01-numbers",
        lesson: "02-counting",
        title: "Лічба та її принципи",
        sectionTitle: "Числа та лічба",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "01-numbers",
        lesson: "03-symbols-and-notation",
        title: "Символи та запис чисел",
        sectionTitle: "Числа та лічба",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "01-numbers",
        lesson: "04-comparing-ordering",
        title: "Порівняння та впорядкування",
        sectionTitle: "Числа та лічба",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "01-numbers",
        lesson: "05-number-line",
        title: "Числова пряма",
        sectionTitle: "Числа та лічба",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "01-numbers",
        lesson: "06-even-odd",
        title: "Парні та непарні числа",
        sectionTitle: "Числа та лічба",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "01-numbers",
        lesson: "07-other-number-systems",
        title: "Інші системи лічби та запису",
        sectionTitle: "Числа та лічба",
    },
    // ── Розділ 2: Розряди та десяткова система ────────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "02-place-value",
        lesson: "08-decimal-system",
        title: "Десяткова система та розряди",
        sectionTitle: "Розряди та десяткова система",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "02-place-value",
        lesson: "09-reading-writing-numbers",
        title: "Читання та запис чисел",
        sectionTitle: "Розряди та десяткова система",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "02-place-value",
        lesson: "10-digit-value-regrouping",
        title: "Значення цифр та перегрупування",
        sectionTitle: "Розряди та десяткова система",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "02-place-value",
        lesson: "11-comparing-ordering",
        title: "Порівняння багатоцифрових чисел",
        sectionTitle: "Розряди та десяткова система",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "02-place-value",
        lesson: "12-rounding-estimation",
        title: "Округлення та оцінювання",
        sectionTitle: "Розряди та десяткова система",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "02-place-value",
        lesson: "13-powers-of-ten",
        title: "Роль числа 10 та степені",
        sectionTitle: "Розряди та десяткова система",
    },
    // ── Розділ 3: Додавання ───────────────────────────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "03-addition",
        lesson: "14-addition-basics",
        title: "Основні поняття додавання",
        sectionTitle: "Додавання",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "03-addition",
        lesson: "15-addition-properties",
        title: "Властивості додавання",
        sectionTitle: "Додавання",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "03-addition",
        lesson: "16-mental-addition",
        title: "Стратегії усного додавання",
        sectionTitle: "Додавання",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "03-addition",
        lesson: "17-column-addition",
        title: "Додавання у стовпчик",
        sectionTitle: "Додавання",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "03-addition",
        lesson: "18-addition-applications",
        title: "Перевірка та практичне застосування",
        sectionTitle: "Додавання",
    },
    // ── Розділ 4: Віднімання ──────────────────────────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "04-subtraction",
        lesson: "19-subtraction-basics",
        title: "Основні поняття віднімання",
        sectionTitle: "Віднімання",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "04-subtraction",
        lesson: "20-subtraction-properties",
        title: "Властивості та базові факти",
        sectionTitle: "Віднімання",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "04-subtraction",
        lesson: "21-mental-subtraction",
        title: "Стратегії усного віднімання",
        sectionTitle: "Віднімання",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "04-subtraction",
        lesson: "22-column-subtraction",
        title: "Віднімання у стовпчик",
        sectionTitle: "Віднімання",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "04-subtraction",
        lesson: "23-subtraction-applications",
        title: "Оцінювання та практичне застосування",
        sectionTitle: "Віднімання",
    },
    // ── Розділ 5: Множення ────────────────────────────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "05-multiplication",
        lesson: "24-multiplication-basics",
        title: "Основні поняття множення",
        sectionTitle: "Множення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "05-multiplication",
        lesson: "25-multiplication-properties",
        title: "Властивості множення",
        sectionTitle: "Множення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "05-multiplication",
        lesson: "26-multiplication-table",
        title: "Таблиця множення та базові факти",
        sectionTitle: "Множення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "05-multiplication",
        lesson: "27-multi-digit-multiplication",
        title: "Множення багатоцифрових чисел",
        sectionTitle: "Множення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "05-multiplication",
        lesson: "28-mental-multiplication",
        title: "Усне множення та оцінювання",
        sectionTitle: "Множення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "05-multiplication",
        lesson: "29-multiplication-applications",
        title: "Практичне застосування множення",
        sectionTitle: "Множення",
    },
    // ── Розділ 6: Ділення ─────────────────────────────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "06-division",
        lesson: "30-division-basics",
        title: "Основні поняття ділення",
        sectionTitle: "Ділення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "06-division",
        lesson: "31-division-properties",
        title: "Властивості та особливі випадки ділення",
        sectionTitle: "Ділення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "06-division",
        lesson: "32-division-remainder",
        title: "Ділення з остачею",
        sectionTitle: "Ділення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "06-division",
        lesson: "33-long-division",
        title: "Ділення у стовпчик",
        sectionTitle: "Ділення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "06-division",
        lesson: "34-divisibility",
        title: "Ознаки подільності",
        sectionTitle: "Ділення",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "06-division",
        lesson: "35-division-applications",
        title: "Оцінювання та практичне застосування",
        sectionTitle: "Ділення",
    },
    // ── Розділ 7: Цілі та від'ємні числа ─────────────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "07-integers",
        lesson: "36-negative-numbers",
        title: "Від'ємні числа та числова пряма",
        sectionTitle: "Цілі та від'ємні числа",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "07-integers",
        lesson: "37-absolute-value",
        title: "Модуль числа та відстань",
        sectionTitle: "Цілі та від'ємні числа",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "07-integers",
        lesson: "38-adding-subtracting-integers",
        title: "Додавання і віднімання цілих чисел",
        sectionTitle: "Цілі та від'ємні числа",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "07-integers",
        lesson: "39-multiplying-dividing-integers",
        title: "Множення і ділення цілих чисел",
        sectionTitle: "Цілі та від'ємні числа",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "07-integers",
        lesson: "40-integers-applications",
        title: "Практичне застосування цілих чисел",
        sectionTitle: "Цілі та від'ємні числа",
    },
    // ── Розділ 8: Порядок виконання дій ──────────────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "08-order-of-operations",
        lesson: "41-order-basics",
        title: "Пріоритет операцій та дужки",
        sectionTitle: "Порядок виконання дій",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "08-order-of-operations",
        lesson: "42-pemdas",
        title: "ДМДД — правило порядку дій",
        sectionTitle: "Порядок виконання дій",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "08-order-of-operations",
        lesson: "43-nested-parentheses",
        title: "Вкладені дужки та складні вирази",
        sectionTitle: "Порядок виконання дій",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "08-order-of-operations",
        lesson: "44-expressions-variables",
        title: "Вирази зі змінними",
        sectionTitle: "Порядок виконання дій",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "08-order-of-operations",
        lesson: "45-order-applications",
        title: "Практичне застосування порядку дій",
        sectionTitle: "Порядок виконання дій",
    },
    // ── Розділ 9: Дільники, кратні і теорія чисел ─────────────
    {
        subject: "math",
        course: "arithmetic",
        section: "09-factors-multiples",
        lesson: "46-factors-divisors",
        title: "Дільники та множники числа",
        sectionTitle: "Дільники, кратні і теорія чисел",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "09-factors-multiples",
        lesson: "47-multiples",
        title: "Кратні числа та НСК",
        sectionTitle: "Дільники, кратні і теорія чисел",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "09-factors-multiples",
        lesson: "48-prime-composite",
        title: "Прості та складені числа",
        sectionTitle: "Дільники, кратні і теорія чисел",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "09-factors-multiples",
        lesson: "49-prime-factorization",
        title: "Розклад на прості множники",
        sectionTitle: "Дільники, кратні і теорія чисел",
    },
    {
        subject: "math",
        course: "arithmetic",
        section: "09-factors-multiples",
        lesson: "50-gcd-lcm",
        title: "НСД та НСК — алгоритми знаходження",
        sectionTitle: "Дільники, кратні і теорія чисел",
    },
];

export function getLessonUrl(ref: LessonRef): string {
    return `/learn/${ref.subject}/${ref.course}/${ref.section}/${ref.lesson}`;
}

export function getAdjacentLessons(
    subject: string,
    course: string,
    section: string,
    lesson: string
): { prev: LessonRef | null; next: LessonRef | null } {
    const idx = lessonRegistry.findIndex(
        (r) =>
            r.subject === subject &&
            r.course === course &&
            r.section === section &&
            r.lesson === lesson
    );
    if (idx === -1) return { prev: null, next: null };
    return {
        prev: idx > 0 ? lessonRegistry[idx - 1] : null,
        next: idx < lessonRegistry.length - 1 ? lessonRegistry[idx + 1] : null,
    };
}