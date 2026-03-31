import Link from "next/link";
import { notFound } from "next/navigation";

const curriculum: Record<string, {
    title: string;
    emoji: string;
    chapters: {
        id: string;
        title: string;
        lessons: { id: string; title: string }[];
    }[];
}> = {
    math: {
        title: "Математика",
        emoji: "🔢",
        chapters: [
            {
                id: "1-numbers",
                title: "Числа і лічба",
                lessons: [
                    { id: "01-counting-1-10", title: "Числа від 1 до 10" },
                    { id: "02-counting-11-20", title: "Числа від 11 до 20" },
                    { id: "03-counting-20-100", title: "Числа від 20 до 100" },
                    { id: "04-comparing-numbers", title: "Порівняння чисел" },
                    { id: "05-ordinal-numbers", title: "Порядкові числа" },
                    { id: "06-even-odd-numbers", title: "Парні та непарні числа" },
                    { id: "07-zero", title: "Число 0 — що це таке?" },
                    { id: "08-number-line", title: "Місце числа в ряду" },
                    { id: "09-number-composition", title: "Склад числа" },
                    { id: "10-tens-and-units", title: "Десятки і одиниці" },
                    { id: "11-skip-counting", title: "Лічба двійками, п'ятірками, десятками" },
                    { id: "12-number-line-visual", title: "Число на числовій прямій" },
                    { id: "13-rounding", title: "Округлення до десятка" },
                    { id: "14-review", title: "Повторення і перевірка знань" },
                ],
            },
            {
                id: "2-addition",
                title: "Додавання",
                lessons: [
                    { id: "01-what-is-addition", title: "Що таке додавання?" },
                    { id: "02-addition-to-10", title: "Додавання в межах 10" },
                    { id: "03-addition-to-20", title: "Додавання в межах 20" },
                    { id: "04-addition-two-digit", title: "Додавання двозначних чисел" },
                    { id: "05-addition-problems", title: "Задачі на додавання" },
                    { id: "06-addition-properties", title: "Властивості додавання" },
                    { id: "07-checking-addition", title: "Перевірка додавання" },
                    { id: "08-addition-review", title: "Повторення: Додавання" },
                ],
            },
            {
                id: "3-subtraction",
                title: "Віднімання",
                lessons: [
                    { id: "01-what-is-subtraction", title: "Що таке віднімання?" },
                    { id: "02-subtraction-to-10", title: "Віднімання в межах 10" },
                    { id: "03-subtraction-to-20", title: "Віднімання в межах 20" },
                    { id: "04-subtraction-two-digit", title: "Віднімання двозначних чисел" },
                    { id: "05-subtraction-problems", title: "Задачі на віднімання" },
                    { id: "06-addition-subtraction-connection", title: "Зв'язок додавання і віднімання" },
                    { id: "07-subtraction-review", title: "Повторення: Віднімання" },
                ],
            },
            {
                id: "4-multiplication",
                title: "Множення",
                lessons: [
                    { id: "01-what-is-multiplication", title: "Що таке множення?" },
                    { id: "02-multiplication-by-2", title: "Таблиця множення на 2" },
                    { id: "03-multiplication-by-3", title: "Таблиця множення на 3" },
                    { id: "04-multiplication-by-4", title: "Таблиця множення на 4" },
                    { id: "05-multiplication-by-5", title: "Таблиця множення на 5" },
                ],
            },
        ],
    },
};

interface Props {
    params: Promise<{ subject: string }>;
}

export default async function SubjectPage({ params }: Props) {
    const { subject } = await params;
    const data = curriculum[subject];
    if (!data) notFound();

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-gray-400">
                    <Link href="/" className="hover:text-gray-700">Академія</Link>
                    <span>›</span>
                    <span className="text-gray-700">{data.title}</span>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 py-12">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-5xl">{data.emoji}</span>
                    <h1 className="text-3xl font-semibold text-gray-900">{data.title}</h1>
                </div>

                <div className="space-y-8">
                    {data.chapters.map((chapter) => (
                        <div key={chapter.id}>
                            <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                                {chapter.title}
                            </h2>
                            <div className="space-y-2">
                                {chapter.lessons.map((lesson, i) => (
                                    <Link
                                        key={lesson.id}
                                        href={`/learn/${subject}/${chapter.id}/${lesson.id}`}
                                        className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 hover:border-green-400 transition-all group"
                                    >
                                        <span className="text-sm font-medium text-gray-300 w-6">{i + 1}</span>
                                        <span className="text-gray-800 group-hover:text-green-700 transition-colors">
                                            {lesson.title}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}