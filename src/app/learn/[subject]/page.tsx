import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubject } from "@/data/subjects";

interface Props {
    params: Promise<{ subject: string }>;
}

export default async function SubjectPage({ params }: Props) {
    const { subject } = await params;
    const data = getSubject(subject);
    if (!data) notFound();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-400">
                    <Link href="/" className="hover:text-gray-700 transition-colors">Академія Знань</Link>
                    <span>›</span>
                    <span className="text-gray-700">{data.title}</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Title */}
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-5xl">{data.emoji}</span>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
                        <p className="text-gray-500 mt-1">{data.description}</p>
                    </div>
                </div>

                {/* Courses */}
                <div className="space-y-4">
                    {data.courses.map((course, i) => {
                        const hasContent = course.sections.length > 0;
                        const totalLessons = course.sections.reduce((sum, s) => sum + s.lessonCount, 0);

                        return (
                            <Link
                                key={course.id}
                                href={hasContent ? `/learn/${subject}/${course.id}` : "#"}
                                className={`block rounded-2xl border bg-white p-6 transition-all ${hasContent
                                        ? "border-gray-200 hover:border-violet-300 hover:shadow-md"
                                        : "border-gray-100 opacity-50 cursor-not-allowed"
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${hasContent ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-400"
                                            }`}>
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">{course.title}</h2>
                                            <p className="text-sm text-gray-500 mt-0.5">{course.description}</p>
                                            {hasContent && (
                                                <p className="text-xs text-gray-400 mt-2">
                                                    {course.sections.length} розділів · {totalLessons} уроків
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {!hasContent && (
                                        <span className="shrink-0 text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                                            Незабаром
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}