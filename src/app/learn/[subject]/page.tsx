"use client";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface Lesson {
    id: string;
    title: string;
}

interface Chapter {
    id: string;
    title: string;
    lessons: Lesson[];
}

interface Level {
    id: string;
    title: string;
    description: string;
    chapters: Chapter[];
}

interface SubjectData {
    title: string;
    emoji: string;
    levels: Level[];
}

const curriculum: Record<string, SubjectData> = {
    math: {
        title: "Математика",
        emoji: "🔢",
        levels: [
            {
                id: "basics",
                title: "Рівень 1 — Основи",
                description: "Числа, арифметика, дроби, геометрія",
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
                            { id: "07-zero", title: "Число 0" },
                            { id: "08-number-line", title: "Місце числа в ряду" },
                            { id: "09-number-composition", title: "Склад числа" },
                            { id: "10-tens-and-units", title: "Десятки і одиниці" },
                            { id: "11-skip-counting", title: "Лічба двійками, п'ятірками, десятками" },
                            { id: "12-number-line-visual", title: "Числова пряма" },
                            { id: "13-rounding", title: "Округлення до десятка" },
                            { id: "14-review", title: "Повторення: Числа" },
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
                            { id: "06-multiplication-by-6", title: "Таблиця множення на 6" },
                            { id: "07-multiplication-by-7", title: "Таблиця множення на 7" },
                            { id: "08-multiplication-by-8", title: "Таблиця множення на 8" },
                            { id: "09-multiplication-by-9", title: "Таблиця множення на 9" },
                            { id: "10-multiplication-by-10", title: "Таблиця множення на 10" },
                            { id: "11-multiplication-table", title: "Повна таблиця множення" },
                            { id: "12-multiplication-problems", title: "Задачі на множення" },
                            { id: "13-multiplication-review", title: "Повторення: Множення" },
                        ],
                    },
                    {
                        id: "5-division",
                        title: "Ділення",
                        lessons: [
                            { id: "01-what-is-division", title: "Що таке ділення?" },
                            { id: "02-division-by-2-3", title: "Ділення на 2 і 3" },
                            { id: "03-division-by-4-5", title: "Ділення на 4 і 5" },
                            { id: "04-division-by-6-9", title: "Ділення на 6, 7, 8, 9" },
                            { id: "05-division-with-remainder", title: "Ділення з остачею" },
                            { id: "06-division-problems", title: "Задачі на ділення" },
                            { id: "07-division-review", title: "Повторення: Ділення" },
                        ],
                    },
                    {
                        id: "6-fractions",
                        title: "Дроби",
                        lessons: [
                            { id: "01-what-is-fraction", title: "Що таке дріб?" },
                            { id: "02-fractions-visual", title: "Дріб на малюнку" },
                            { id: "03-comparing-fractions", title: "Порівняння дробів" },
                            { id: "04-equivalent-fractions", title: "Рівні дроби" },
                            { id: "05-adding-fractions", title: "Додавання дробів" },
                            { id: "06-subtracting-fractions", title: "Віднімання дробів" },
                            { id: "07-fractions-in-life", title: "Дроби у житті" },
                            { id: "08-fractions-review", title: "Повторення: Дроби" },
                        ],
                    },
                    {
                        id: "7-decimals",
                        title: "Десяткові дроби",
                        lessons: [
                            { id: "01-what-is-decimal", title: "Що таке десятковий дріб?" },
                            { id: "02-comparing-decimals", title: "Порівняння десяткових дробів" },
                            { id: "03-adding-decimals", title: "Додавання десяткових дробів" },
                            { id: "04-subtracting-decimals", title: "Віднімання десяткових дробів" },
                            { id: "05-multiplying-decimals", title: "Множення десяткових дробів" },
                            { id: "06-dividing-decimals", title: "Ділення десяткових дробів" },
                            { id: "07-rounding-decimals", title: "Округлення десяткових дробів" },
                            { id: "08-decimals-review", title: "Повторення: Десяткові дроби" },
                        ],
                    },
                    {
                        id: "8-geometry",
                        title: "Геометрія — основи",
                        lessons: [
                            { id: "01-points-lines", title: "Точка, пряма, відрізок" },
                            { id: "02-angles", title: "Кути" },
                            { id: "03-triangles", title: "Трикутники" },
                            { id: "04-quadrilaterals", title: "Чотирикутники" },
                            { id: "05-circle", title: "Коло і круг" },
                            { id: "06-perimeter", title: "Периметр" },
                            { id: "07-area", title: "Площа" },
                            { id: "08-volume", title: "Об'єм" },
                            { id: "09-geometry-review", title: "Повторення: Геометрія" },
                        ],
                    },
                    {
                        id: "9-percentages",
                        title: "Відсотки",
                        lessons: [
                            { id: "01-what-is-percentage", title: "Що таке відсоток?" },
                            { id: "02-finding-percentage", title: "Знаходження відсотка від числа" },
                            { id: "03-finding-number-by-percentage", title: "Знаходження числа за відсотком" },
                            { id: "04-percentage-ratio", title: "Знаходження відсоткового відношення" },
                            { id: "05-percentages-in-finance", title: "Відсотки у фінансах" },
                            { id: "06-percentages-review", title: "Повторення: Відсотки" },
                        ],
                    },
                ],
            },
            {
                id: "middle",
                title: "Рівень 2 — Середня школа",
                description: "Від'ємні числа, рівняння, функції, ймовірність",
                chapters: [
                    {
                        id: "10-negative-numbers",
                        title: "Від'ємні числа",
                        lessons: [
                            { id: "01-what-is-negative", title: "Що таке від'ємні числа?" },
                            { id: "02-adding-subtracting-negatives", title: "Додавання і віднімання від'ємних чисел" },
                            { id: "03-multiplying-dividing-negatives", title: "Множення і ділення від'ємних чисел" },
                            { id: "04-coordinate-plane", title: "Координатна пряма і площина" },
                            { id: "05-negative-numbers-review", title: "Повторення: Від'ємні числа" },
                        ],
                    },
                    {
                        id: "11-powers-roots",
                        title: "Степені і корені",
                        lessons: [
                            { id: "01-powers", title: "Степені" },
                            { id: "02-roots", title: "Корені" },
                            { id: "03-scientific-notation", title: "Наукова нотація" },
                            { id: "04-powers-roots-review", title: "Повторення: Степені і корені" },
                        ],
                    },
                    {
                        id: "12-ratios",
                        title: "Пропорції і відношення",
                        lessons: [
                            { id: "01-ratios", title: "Відношення" },
                            { id: "02-proportions", title: "Пропорції" },
                            { id: "03-ratios-review", title: "Повторення: Пропорції і відношення" },
                        ],
                    },
                    {
                        id: "13-equations",
                        title: "Рівняння першого ступеня",
                        lessons: [
                            { id: "01-what-is-equation", title: "Що таке рівняння?" },
                            { id: "02-equations-brackets-fractions", title: "Рівняння з дужками і дробами" },
                            { id: "03-word-problems", title: "Текстові задачі через рівняння" },
                            { id: "04-equations-review", title: "Повторення: Рівняння першого ступеня" },
                        ],
                    },
                    {
                        id: "14-inequalities",
                        title: "Нерівності",
                        lessons: [
                            { id: "01-what-is-inequality", title: "Що таке нерівність?" },
                            { id: "02-systems-of-inequalities", title: "Системи нерівностей" },
                        ],
                    },
                    {
                        id: "15-functions-intro",
                        title: "Функції — введення",
                        lessons: [
                            { id: "01-what-is-function", title: "Що таке функція?" },
                        ],
                    },
                    {
                        id: "16-linear-function",
                        title: "Лінійна функція",
                        lessons: [],
                    },
                    {
                        id: "17-systems",
                        title: "Системи рівнянь",
                        lessons: [],
                    },
                    {
                        id: "18-quadratic",
                        title: "Квадратні рівняння",
                        lessons: [],
                    },
                    {
                        id: "19-quadratic-function",
                        title: "Квадратична функція",
                        lessons: [],
                    },
                    {
                        id: "20-combinatorics",
                        title: "Комбінаторика",
                        lessons: [],
                    },
                    {
                        id: "21-probability",
                        title: "Теорія ймовірностей",
                        lessons: [],
                    },
                    {
                        id: "22-statistics",
                        title: "Статистика",
                        lessons: [],
                    },
                ],
            },
            {
                id: "advanced",
                title: "Рівень 3 — Старша школа",
                description: "Тригонометрія, логарифми, похідна, інтеграл",
                chapters: [],
            },
            {
                id: "university",
                title: "Рівень 4 — Університет",
                description: "Математичний аналіз, лінійна алгебра, тензори",
                chapters: [],
            },
        ],
    },
};

export default function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
    const { subject } = React.use(params);
    const data = curriculum[subject];
    if (!data) notFound();

    const [completed, setCompleted] = useState<Record<string, boolean>>({});
    const [openLevel, setOpenLevel] = useState<string>("basics");

    useEffect(() => {
        const result: Record<string, boolean> = {};
        data.levels.forEach((level) => {
            level.chapters.forEach((chapter) => {
                chapter.lessons.forEach((lesson) => {
                    const key = `lesson-${subject}-${chapter.id}-${lesson.id}`;
                    result[key] = localStorage.getItem(key) === "done";
                });
            });
        });
        setCompleted(result);
    }, [subject, data]);

    const totalLessons = data.levels.reduce((acc, level) =>
        acc + level.chapters.reduce((a, ch) => a + ch.lessons.length, 0), 0);
    const completedCount = Object.values(completed).filter(Boolean).length;

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
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{data.emoji}</span>
                    <h1 className="text-3xl font-semibold text-gray-900">{data.title}</h1>
                </div>

                <div className="mb-10">
                    <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-500">Пройдено: {completedCount} з {totalLessons} уроків</span>
                        <span className="text-green-700 font-medium">
                            {totalLessons > 0 ? Math.round(completedCount / totalLessons * 100) : 0}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${totalLessons > 0 ? completedCount / totalLessons * 100 : 0}%` }}
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    {data.levels.map((level) => {
                        const levelLessons = level.chapters.reduce((a, ch) => a + ch.lessons.length, 0);
                        const levelCompleted = level.chapters.reduce((a, ch) =>
                            a + ch.lessons.filter(l =>
                                completed[`lesson-${subject}-${ch.id}-${l.id}`]
                            ).length, 0);
                        const isOpen = openLevel === level.id;
                        const isEmpty = level.chapters.length === 0;

                        return (
                            <div key={level.id} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                                <button
                                    onClick={() => !isEmpty && setOpenLevel(isOpen ? "" : level.id)}
                                    className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${isEmpty ? "cursor-not-allowed opacity-50" : "hover:bg-gray-50"
                                        }`}
                                >
                                    <div>
                                        <p className="font-medium text-gray-900">{level.title}</p>
                                        <p className="text-sm text-gray-400 mt-0.5">{level.description}</p>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0 ml-4">
                                        {levelLessons > 0 && (
                                            <span className="text-xs text-gray-400">
                                                {levelCompleted}/{levelLessons}
                                            </span>
                                        )}
                                        {isEmpty ? (
                                            <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                                                Незабаром
                                            </span>
                                        ) : (
                                            <span className="text-gray-400 text-lg">{isOpen ? "↑" : "↓"}</span>
                                        )}
                                    </div>
                                </button>

                                {isOpen && !isEmpty && (
                                    <div className="border-t border-gray-100 px-6 py-4 space-y-6">
                                        {level.chapters.map((chapter) => {
                                            const chapterCompleted = chapter.lessons.filter(
                                                l => completed[`lesson-${subject}-${chapter.id}-${l.id}`]
                                            ).length;

                                            return (
                                                <div key={chapter.id}>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                                                            {chapter.title}
                                                        </h3>
                                                        <span className="text-xs text-gray-400">
                                                            {chapterCompleted}/{chapter.lessons.length}
                                                        </span>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        {chapter.lessons.map((lesson, i) => {
                                                            const key = `lesson-${subject}-${chapter.id}-${lesson.id}`;
                                                            const isDone = completed[key];
                                                            return (
                                                                <Link
                                                                    key={lesson.id}
                                                                    href={`/learn/${subject}/${chapter.id}/${lesson.id}`}
                                                                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-all group text-sm ${isDone
                                                                        ? "border-green-200 bg-green-50 hover:border-green-400"
                                                                        : "border-gray-100 bg-gray-50 hover:border-green-300 hover:bg-white"
                                                                        }`}
                                                                >
                                                                    <span className={`font-medium w-5 shrink-0 ${isDone ? "text-green-500" : "text-gray-300"}`}>
                                                                        {isDone ? "✓" : i + 1}
                                                                    </span>
                                                                    <span className={isDone ? "text-green-700" : "text-gray-700 group-hover:text-gray-900"}>
                                                                        {lesson.title}
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}