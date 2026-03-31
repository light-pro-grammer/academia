import Link from "next/link";

interface LessonNav {
  title: string;
  href: string;
}

interface Props {
  subject: string;
  chapter: string;
  title: string;
  prev?: LessonNav;
  next?: LessonNav;
  children: React.ReactNode;
}

export default function LessonLayout({ subject, chapter, title, prev, next, children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <nav className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-700">Академія</Link>
          <span>›</span>
          <Link href={`/learn/${subject.toLowerCase()}`} className="hover:text-gray-700">{subject}</Link>
          <span>›</span>
          <span className="text-gray-600">{chapter}</span>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">{title}</h1>
        <div className="prose prose-gray max-w-none mt-6">
          {children}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={prev.href}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 hover:border-green-400 hover:text-green-700 transition-all"
            >
              <span>←</span>
              <div>
                <p className="text-xs text-gray-400">Попередній урок</p>
                <p className="font-medium">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={next.href}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 hover:border-green-400 hover:text-green-700 transition-all ml-auto"
            >
              <div className="text-right">
                <p className="text-xs text-gray-400">Наступний урок</p>
                <p className="font-medium">{next.title}</p>
              </div>
              <span>→</span>
            </Link>
          ) : <div />}
        </div>
      </main>
    </div>
  );
}