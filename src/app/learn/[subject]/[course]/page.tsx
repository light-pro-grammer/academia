import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubject, getCourse } from "@/data/subjects";
import { lessonRegistry, getLessonUrl } from "@/data/registry";

interface Props {
    params: Promise<{ subject: string; course: string }>;
}

export default async function CoursePage({ params }: Props) {
    const { subject, course } = await params;
    const subjectData = getSubject(subject);
    const courseData = getCourse(subject, course);
    if (!subjectData || !courseData) notFound();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-400">
                    <Link href="/" className="hover:text-gray-700 transition-colors">Академія Знань</Link>
                    <span>›</span>
                    <Link href={`/learn/${subject}`} className="hover:text-gray-700 transition-colors">
                        {subjectData.title}
                    </Link>
                    <span>›</span>
                    <span className="text-gray-700">{courseData.title}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Title */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{courseData.title}</h1>
                    <p className="text-gray-500">{courseData.description}</p>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                    {courseData.sections.map((section, si) => {
                        const sectionLessons = lessonRegistry.filter(
                            l => l.subject === subject && l.course === course && l.section === section.id
                        );

                        return (
                            <div key={section.id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                                {/* Section header */}
                                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-700">
                                            {si + 1}
                                        </div>
                                        <h2 className="font-semibold text-gray-900">{section.title}</h2>
                                    </div>
                                    <span className="text-xs text-gray-400">
                                        {sectionLessons.length} уроків
                                    </span>
                                </div>

                                {/* Lessons */}
                                <div className="divide-y divide-gray-50">
                                    {sectionLessons.length > 0 ? (
                                        sectionLessons.map((lesson, li) => (
                                            <Link
                                                key={lesson.lesson}
                                                href={getLessonUrl(lesson)}
                                                className="flex items-center gap-4 px-6 py-3.5 hover:bg-violet-50 transition-colors group"
                                            >
                                                <span className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-400 shrink-0 group-hover:border-violet-300 group-hover:text-violet-600 transition-colors">
                                                    {li + 1}
                                                </span>
                                                <span className="text-sm text-gray-700 group-hover:text-violet-700 transition-colors">
                                                    {lesson.title}
                                                </span>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="px-6 py-4 text-sm text-gray-400">
                                            Уроки незабаром...
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}