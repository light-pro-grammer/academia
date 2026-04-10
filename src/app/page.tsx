import Link from "next/link";
import ContinueLearningCard from "@/components/learn/ContinueLearningCard";
import { subjects } from "@/data/subjects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-gray-900">Академія Знань</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14">
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Навчайся безкоштовно</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-500">
            Повний курс від основ арифметики до університетської математики, фізики, хімії та інших наук.
            Українською мовою.
          </p>
        </div>

        <ContinueLearningCard />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const hasContent = subject.courses.some((course) => course.sections.length > 0);

            return (
              <Link
                key={subject.id}
                href={hasContent ? `/learn/${subject.id}` : "#"}
                className={`surface-link group rounded-2xl border bg-white p-6 transition-all ${
                  hasContent
                    ? "cursor-pointer border-gray-200 hover:border-violet-300 hover:bg-violet-50/40 hover:shadow-[0_16px_36px_rgba(79,70,229,0.10)] focus-visible:border-violet-300 focus-visible:bg-violet-50/40 focus-visible:shadow-[0_16px_36px_rgba(79,70,229,0.10)]"
                    : "cursor-not-allowed border-gray-100 opacity-50"
                }`}
              >
                <div className="mb-3 text-4xl">{subject.emoji}</div>
                <h2 className="surface-link-title mb-1 text-lg font-semibold text-gray-900 transition-colors">
                  {subject.title}
                </h2>
                <p className="surface-link-meta text-sm leading-relaxed text-gray-500 transition-colors">
                  {subject.description}
                </p>
                {!hasContent && (
                  <span className="mt-3 inline-block rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-400">
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
