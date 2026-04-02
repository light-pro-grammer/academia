import Link from "next/link";
import { subjects } from "@/data/subjects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">А</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Академія Знань</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-14">
        {/* Hero */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Навчайся безкоштовно
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Повний курс від основ арифметики до університетської математики,
            фізики, хімії та інших наук. Українською мовою.
          </p>
        </div>

        {/* Subjects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map(subject => {
            const hasContent = subject.courses.some(c => c.sections.length > 0);
            return (
              <Link
                key={subject.id}
                href={hasContent ? `/learn/${subject.id}` : "#"}
                className={`group rounded-2xl border bg-white p-6 transition-all ${
                  hasContent
                    ? "border-gray-200 hover:border-violet-300 hover:shadow-md cursor-pointer"
                    : "border-gray-100 opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="text-4xl mb-3">{subject.emoji}</div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-violet-700 transition-colors">
                  {subject.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {subject.description}
                </p>
                {!hasContent && (
                  <span className="mt-3 inline-block text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                    Незабаром
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}