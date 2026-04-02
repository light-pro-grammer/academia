import type { Lesson } from "@/types";
import { renderBlock } from "@/lib/renderBlock";
import Quiz from "@/components/lessons/Quiz";
import Link from "next/link";

interface Breadcrumb {
    title: string;
    href: string;
}

interface Props {
    lesson: Lesson;
    breadcrumbs?: Breadcrumb[];
    prevLesson?: { title: string; href: string };
    nextLesson?: { title: string; href: string };
}

export default function LessonPage({ lesson, breadcrumbs, prevLesson, nextLesson }: Props) {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header з breadcrumbs */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-2xl mx-auto flex items-center gap-2 text-sm text-gray-400 flex-wrap">
                    <Link href="/" className="hover:text-gray-700 transition-colors">
                        Академія Знань
                    </Link>
                    {breadcrumbs?.map((crumb, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span>›</span>
                            <Link href={crumb.href} className="hover:text-gray-700 transition-colors">
                                {crumb.title}
                            </Link>
                        </span>
                    ))}
                    <span>›</span>
                    <span className="text-gray-700">{lesson.title}</span>
                </div>
            </header>

            <div className="max-w-2xl mx-auto px-6 py-12">

                {/* Header уроку */}
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-3">
                        {lesson.title}
                    </h1>
                    {lesson.description && (
                        <p className="text-gray-500 text-lg leading-relaxed">
                            {lesson.description}
                        </p>
                    )}
                    {lesson.concepts.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {lesson.concepts.map((c, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-3 py-1 rounded-full bg-violet-100 text-violet-700 font-medium"
                                >
                                    {c}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Контент */}
                <div className="space-y-4">
                    {lesson.content.map((block, i) => (
                        <div key={i}>{renderBlock(block)}</div>
                    ))}
                </div>

                {/* Quiz */}
                {lesson.quiz.length > 0 && (
                    <div className="mt-12">
                        <Quiz questions={lesson.quiz} />
                    </div>
                )}

                {/* Навігація */}
                <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between">
                    {prevLesson ? (
                        <Link
                            href={prevLesson.href}
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <span>←</span>
                            <span>{prevLesson.title}</span>
                        </Link>
                    ) : <div />}

                    {nextLesson && (
                        <Link
                            href={nextLesson.href}
                            className="flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-900 transition-colors"
                        >
                            <span>{nextLesson.title}</span>
                            <span>→</span>
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
}