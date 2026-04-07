"use client";

import Link from "next/link";
import { getLessonUrl } from "@/data/registry";
import { subjects } from "@/data/subjects";
import { getCourseLessons, getLessonProgressId } from "@/lib/learningCatalog";
import { useCompletedLessonIds } from "@/lib/progressStore";

export default function ContinueLearningCard() {
    const completedLessonIds = useCompletedLessonIds();
    const completedSet = new Set(completedLessonIds);

    const courseProgress = subjects.flatMap((subject) =>
        subject.courses.map((course) => {
            const lessons = getCourseLessons(subject.id, course.id);
            const done = lessons.filter((lesson) => completedSet.has(getLessonProgressId(lesson))).length;
            const total = lessons.length;
            const percent = total > 0 ? Math.round((done / total) * 100) : 0;
            const nextLesson = lessons.find((lesson) => !completedSet.has(getLessonProgressId(lesson))) ?? lessons[0];

            return {
                subject,
                course,
                done,
                total,
                percent,
                nextLesson,
            };
        })
    );

    const started = courseProgress.find((item) => item.done > 0 && item.done < item.total && item.nextLesson);
    const firstAvailable = courseProgress.find((item) => item.nextLesson);
    const target = started ?? firstAvailable;

    if (!target?.nextLesson) return null;

    return (
        <section className="mx-auto mb-10 max-w-4xl rounded-[32px] border border-slate-900 bg-slate-950 p-6 text-white shadow-[0_24px_50px_rgba(15,23,42,0.22)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Продовжити навчання</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight">{target.nextLesson.title}</h2>
            <p className="mt-2 text-sm text-slate-300">
                {target.subject.title} · {target.course.title}
            </p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#818cf8,#38bdf8)]"
                    style={{ width: `${Math.max(target.percent, 6)}%` }}
                />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>{target.percent}% завершено</span>
                <span>Наступний крок</span>
            </div>
            <Link
                href={getLessonUrl(target.nextLesson)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
            >
                <span>Перейти до уроку</span>
                <span aria-hidden="true">→</span>
            </Link>
        </section>
    );
}
