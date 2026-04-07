"use client";

import Link from "next/link";
import { getLessonUrl, type LessonRef } from "@/data/registry";
import { getLessonProgressId } from "@/lib/learningCatalog";
import { useCompletedLessonIds } from "@/lib/progressStore";

interface SectionGroup {
    id: string;
    title: string;
    lessons: LessonRef[];
}

interface Props {
    sections: SectionGroup[];
}

export default function CourseSectionList({ sections }: Props) {
    const completedLessonIds = useCompletedLessonIds();
    const completedSet = new Set(completedLessonIds);

    return (
        <div className="space-y-6">
            {sections.map((section, sectionIndex) => (
                <section
                    key={section.id}
                    className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm shadow-slate-200/50"
                >
                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-100 text-xs font-bold text-indigo-700">
                                {sectionIndex + 1}
                            </div>
                            <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
                        </div>
                        <span className="text-xs uppercase tracking-[0.14em] text-slate-400">
                            {section.lessons.length} уроків
                        </span>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {section.lessons.length > 0 ? (
                            section.lessons.map((lesson, lessonIndex) => {
                                const isCompleted = completedSet.has(getLessonProgressId(lesson));

                                return (
                                    <Link
                                        key={lesson.lesson}
                                        href={getLessonUrl(lesson)}
                                        className="surface-link group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-indigo-50/70 focus-visible:bg-indigo-50/70"
                                    >
                                        <span
                                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors ${
                                                isCompleted
                                                    ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                                                    : "border-slate-200 text-slate-400 group-hover:border-indigo-300 group-hover:bg-white group-hover:text-indigo-600 group-focus-visible:border-indigo-300 group-focus-visible:bg-white group-focus-visible:text-indigo-600"
                                            }`}
                                        >
                                            {isCompleted ? "✓" : lessonIndex + 1}
                                        </span>
                                        <span className="surface-link-title text-sm text-slate-700 transition-all group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">
                                            {lesson.title}
                                        </span>
                                    </Link>
                                );
                            })
                        ) : (
                            <div className="px-6 py-5 text-sm text-slate-400">Уроки з’являться незабаром.</div>
                        )}
                    </div>
                </section>
            ))}
        </div>
    );
}
