import Link from "next/link";
import { renderBlock } from "@/lib/renderBlock";
import type { Lesson } from "@/types";
import ProgressTracker from "./ProgressTracker";

interface Props {
    lesson: Lesson;
    lessonProgressId: string;
    prevLesson?: { title: string; href: string };
    nextLesson?: { title: string; href: string };
}

export default function LessonPage({ lesson, lessonProgressId, prevLesson, nextLesson }: Props) {
    return (
        <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-sm shadow-slate-200/60 lg:px-8">
            <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3">
                    {lesson.concepts.slice(0, 4).map((concept) => (
                        <span
                            key={concept}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                            {concept}
                        </span>
                    ))}
                </div>
            </div>

            <div className="lesson-richtext space-y-4">
                {lesson.content.map((block, index) => (
                    <div key={index}>{renderBlock(block)}</div>
                ))}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
                <ProgressTracker lessonId={lessonProgressId} />
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                {prevLesson ? (
                    <Link
                        href={prevLesson.href}
                        className="surface-link flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
                    >
                        <span className="text-base">←</span>
                        <div>
                            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Попередній урок</p>
                            <p className="font-medium text-slate-900">{prevLesson.title}</p>
                        </div>
                    </Link>
                ) : (
                    <div />
                )}

                {nextLesson && (
                    <Link
                        href={nextLesson.href}
                        className="surface-link ml-auto flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
                    >
                        <div className="text-right">
                            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Наступний урок</p>
                            <p className="font-medium text-slate-900">{nextLesson.title}</p>
                        </div>
                        <span className="text-base">→</span>
                    </Link>
                )}
            </div>
        </div>
    );
}
