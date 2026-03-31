"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

// Типізація для структури навчального плану
interface Lesson {
    id: string;
    title: string;
}

interface Chapter {
    id: string;
    title: string;
    lessons: Lesson[];
}

interface SubjectData {
    title: string;
    emoji: string;
    chapters: Chapter[];
}

const curriculum: Record<string, SubjectData> = {
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
                ],
            },
        ],
    },
};

// В Next.js 15 params — це Promise
interface SubjectPageProps {
    params: Promise<{ subject: string }>;
}

export default function SubjectPage({ params }: SubjectPageProps) {
    // Розпаковуємо params за допомогою React.use()
    const { subject } = React.use(params);

    const data = curriculum[subject];
    if (!data) notFound();

    const [completed, setCompleted] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const result: Record<string, boolean> = {};
        data.chapters.forEach((chapter) => {
            chapter.lessons.forEach((lesson) => {
                const key = `lesson-${subject}-${chapter.id}-${lesson.id}`;
                result[key] = localStorage.getItem(key) === "done";
            });
        });
        setCompleted(result);
    }, [subject, data]);

    const totalLessons = data.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
    const completedCount = Object.values(completed).filter(Boolean).length;
    const progressPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

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

                <div className="mb-8">
                    <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-500">Прогрес: {completedCount} з {totalLessons} уроків</span>
                        <span className="text-green-700 font-medium">{progressPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    {data.chapters.map((chapter) => {
                        const chapterLessonsKeys = chapter.lessons.map(l => `lesson-${subject}-${chapter.id}-${l.id}`);
                        const chapterCompletedCount = chapterLessonsKeys.filter(key => completed[key]).length;

                        return (
                            <div key={chapter.id}>
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                                        {chapter.title}
                                    </h2>
                                    <span className="text-xs text-gray-400">
                                        {chapterCompletedCount}/{chapter.lessons.length}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    {chapter.lessons.map((lesson, i) => {
                                        const key = `lesson-${subject}-${chapter.id}-${lesson.id}`;
                                        const isDone = completed[key];
                                        return (
                                            <Link
                                                key={lesson.id}
                                                href={`/learn/${subject}/${chapter.id}/${lesson.id}`}
                                                className={`flex items-center gap-4 rounded-xl border px-5 py-4 transition-all group ${isDone
                                                    ? "border-green-200 bg-green-50 hover:border-green-400"
                                                    : "border-gray-200 bg-white hover:border-green-400"
                                                    }`}
                                            >
                                                <span className={`text-sm font-medium w-6 ${isDone ? "text-green-500" : "text-gray-300"}`}>
                                                    {isDone ? "✓" : i + 1}
                                                </span>
                                                <span className={`transition-colors ${isDone ? "text-green-700" : "text-gray-800 group-hover:text-green-700"}`}>
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
            </main>
        </div>
    );
}