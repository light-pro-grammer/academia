"use client";

import Link from "next/link";
import { getSubject } from "@/data/subjects";
import { getCourseLessons, getLessonProgressId, getSubjectLessons } from "@/lib/learningCatalog";
import { useCompletedLessonIds } from "@/lib/progressStore";

interface SubjectCourseListProps {
    subjectId: string;
}

function getCourseState(done: number, total: number): "not-started" | "in-progress" | "completed" {
    if (done === 0) return "not-started";
    if (total > 0 && done >= total) return "completed";
    return "in-progress";
}

function getCourseStateLabel(state: ReturnType<typeof getCourseState>): string {
    switch (state) {
        case "completed":
            return "Завершено";
        case "in-progress":
            return "У процесі";
        default:
            return "Ще не почато";
    }
}

function getCourseStateClasses(state: ReturnType<typeof getCourseState>): string {
    switch (state) {
        case "completed":
            return "bg-emerald-100 text-emerald-700";
        case "in-progress":
            return "bg-amber-100 text-amber-700";
        default:
            return "bg-slate-100 text-slate-500";
    }
}

export default function SubjectCourseList({ subjectId }: SubjectCourseListProps) {
    const subject = getSubject(subjectId);
    const completedLessonIds = useCompletedLessonIds();

    if (!subject) return null;

    const completedSet = new Set(completedLessonIds);
    const subjectLessons = getSubjectLessons(subjectId);
    const completedSubjectLessons = subjectLessons.filter((lesson) => completedSet.has(getLessonProgressId(lesson))).length;
    const subjectPercent = subjectLessons.length > 0 ? Math.round((completedSubjectLessons / subjectLessons.length) * 100) : 0;

    return (
        <div className="space-y-6">
            <section className="rounded-[32px] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_45%),linear-gradient(180deg,#ffffff,#f8faff)] p-6 shadow-sm">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-950">
                            {subject.emoji} {subject.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,0.85fr)_minmax(0,1.35fr)] gap-3">
                        <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Курси</p>
                            <p className="mt-1 text-2xl font-semibold text-slate-950">{subject.courses.length}</p>
                        </div>
                        <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Уроки</p>
                            <p className="mt-1 text-2xl font-semibold text-slate-950">{subjectLessons.length}</p>
                        </div>
                        <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Пройдено</p>
                                <span className="text-sm font-semibold text-slate-950">{subjectPercent}%</span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="h-full rounded-full bg-[linear-gradient(90deg,#818cf8,#38bdf8)]"
                                    style={{ width: `${subjectPercent}%` }}
                                />
                            </div>
                            <p className="mt-2 text-sm text-slate-600">{completedSubjectLessons}/{subjectLessons.length} уроків</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="space-y-4">
                {subject.courses.map((course, index) => {
                    const hasContent = course.sections.length > 0;
                    const lessons = getCourseLessons(subjectId, course.id);
                    const done = lessons.filter((lesson) => completedSet.has(getLessonProgressId(lesson))).length;
                    const total = lessons.length;
                    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
                    const state = getCourseState(done, total);

                    return (
                        <Link
                            key={course.id}
                            href={hasContent ? `/learn/${subjectId}/${course.id}` : "#"}
                            className={`surface-link block rounded-[28px] border bg-white p-6 transition-all ${
                                hasContent
                                    ? "cursor-pointer border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/35 hover:shadow-[0_20px_45px_rgba(79,70,229,0.10)] focus-visible:border-indigo-300 focus-visible:bg-indigo-50/35 focus-visible:shadow-[0_20px_45px_rgba(79,70,229,0.10)]"
                                    : "cursor-not-allowed border-slate-100 opacity-55"
                            }`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${
                                            hasContent ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-400"
                                        }`}
                                    >
                                        {index + 1}
                                    </div>
                                    <div className="min-w-0">
                                        <h2 className="surface-link-title text-lg font-semibold text-slate-900 transition-colors">
                                            {course.title}
                                        </h2>
                                        <p className="surface-link-meta mt-1 text-sm leading-6 text-slate-500 transition-colors">
                                            {course.description}
                                        </p>
                                        {hasContent && (
                                            <>
                                                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.14em] text-slate-400">
                                                    <span>{course.sections.length} розділів</span>
                                                    <span>{total} уроків</span>
                                                    <span
                                                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium normal-case tracking-normal ${getCourseStateClasses(
                                                            state
                                                        )}`}
                                                    >
                                                        {getCourseStateLabel(state)}
                                                    </span>
                                                </div>
                                                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                                                    <div
                                                        className={`h-full rounded-full ${
                                                            state === "completed"
                                                                ? "bg-emerald-500"
                                                                : state === "in-progress"
                                                                  ? "bg-amber-400"
                                                                  : "bg-slate-200"
                                                        }`}
                                                        style={{ width: `${percent}%` }}
                                                    />
                                                </div>
                                                <p className="mt-2 text-sm text-slate-500">{done}/{total} уроків пройдено</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {!hasContent && (
                                    <span className="shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-400">
                                        Незабаром
                                    </span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
