export interface CourseInfo {
    id: string;
    title: string;
    description: string;
    sections: SectionInfo[];
}

export interface SectionInfo {
    id: string;
    title: string;
    lessonCount: number;
}

export interface SubjectInfo {
    id: string;
    title: string;
    emoji: string;
    description: string;
    courses: CourseInfo[];
}

export const subjects: SubjectInfo[] = [
    {
        id: "math",
        title: "Математика",
        emoji: "🔢",
        description: "Від основ арифметики до математичного аналізу і лінійної алгебри",
        courses: [
            {
                id: "arithmetic",
                title: "Арифметика та вступ до алгебри",
                description: "Числа, дії з числами, дроби, відсотки і початки алгебри",
                sections: [
                    { id: "01-numbers", title: "Числа та лічба", lessonCount: 7 },
                    { id: "02-place-value", title: "Розряди та десяткова система", lessonCount: 6 },
                    { id: "03-addition", title: "Додавання", lessonCount: 5 },
                    { id: "04-subtraction", title: "Віднімання", lessonCount: 5 },
                    { id: "05-multiplication", title: "Множення", lessonCount: 6 },
                    { id: "06-division", title: "Ділення", lessonCount: 6 },
                    { id: "07-integers", title: "Цілі та від'ємні числа", lessonCount: 5 },
                    { id: "08-order-of-operations", title: "Порядок виконання дій", lessonCount: 5 },
                    { id: "09-factors-multiples", title: "Дільники, кратні і теорія чисел", lessonCount: 5 },
                    { id: "10-fractions-intro", title: "Дроби: вступ та основні поняття", lessonCount: 5 },
                    { id: "11-fractions-arithmetic", title: "Дроби: арифметичні дії", lessonCount: 6 },
                    { id: "12-decimals", title: "Десяткові дроби", lessonCount: 6 },
                    { id: "13-ratios", title: "Відношення і пропорції", lessonCount: 4 },
                    { id: "14-percentages", title: "Відсотки", lessonCount: 7 },
                    { id: "15-powers-roots", title: "Степені та корені", lessonCount: 6 },
                    { id: "16-measurements", title: "Вимірювання", lessonCount: 3 },
                    { id: "17-real-numbers", title: "Раціональні числа та система дійсних чисел", lessonCount: 5 },
                ],
            },
            {
                id: "algebra",
                title: "Алгебра",
                description: "Рівняння, нерівності, функції та поліноми",
                sections: [],
            },
            {
                id: "geometry",
                title: "Геометрія та тригонометрія",
                description: "Планіметрія, стереометрія і тригонометричні функції",
                sections: [],
            },
            {
                id: "calculus-intro",
                title: "Функції та вступ до матаналізу",
                description: "Границі, похідна і інтеграл — перше знайомство",
                sections: [],
            },
            {
                id: "calculus",
                title: "Математичний аналіз",
                description: "Повний курс диференціального та інтегрального числення",
                sections: [],
            },
            {
                id: "linear-algebra",
                title: "Лінійна алгебра",
                description: "Вектори, матриці, визначники і власні значення",
                sections: [],
            },
            {
                id: "probability",
                title: "Теорія ймовірностей та статистика",
                description: "Ймовірність, розподіли, вибірки і статистичний аналіз",
                sections: [],
            },
            {
                id: "discrete",
                title: "Дискретна математика та логіка",
                description: "Графи, комбінаторика, логіка і теорія множин",
                sections: [],
            },
        ],
    },
    {
        id: "physics",
        title: "Фізика",
        emoji: "⚛️",
        description: "Механіка, термодинаміка, електромагнетизм і квантова фізика",
        courses: [],
    },
    {
        id: "chemistry",
        title: "Хімія",
        emoji: "🧪",
        description: "Будова речовини, хімічні реакції і органічна хімія",
        courses: [],
    },
    {
        id: "biology",
        title: "Біологія",
        emoji: "🧬",
        description: "Клітина, генетика, еволюція і екологія",
        courses: [],
    },
    {
        id: "cs",
        title: "Інформатика",
        emoji: "💻",
        description: "Алгоритми, структури даних, програмування і теорія обчислень",
        courses: [],
    },
    {
        id: "history",
        title: "Історія",
        emoji: "🏛️",
        description: "Від стародавнього світу до сучасності",
        courses: [],
    },
    {
        id: "linguistics",
        title: "Мови та лінгвістика",
        emoji: "🗣️",
        description: "Мовознавство, фонетика, граматика і порівняльна лінгвістика",
        courses: [],
    },
    {
        id: "economics",
        title: "Економіка",
        emoji: "📈",
        description: "Мікро- і макроекономіка, фінанси і економічна теорія",
        courses: [],
    },
    {
        id: "philosophy",
        title: "Філософія",
        emoji: "🤔",
        description: "Логіка, етика, онтологія і історія філософської думки",
        courses: [],
    },
];

export function getSubject(id: string): SubjectInfo | undefined {
    return subjects.find(s => s.id === id);
}

export function getCourse(subjectId: string, courseId: string): CourseInfo | undefined {
    return getSubject(subjectId)?.courses.find(c => c.id === courseId);
}