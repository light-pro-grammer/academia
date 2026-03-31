import Link from "next/link";

interface Props {
  subject: string;
  chapter: string;
  title: string;
  children: React.ReactNode;
}

export default function LessonLayout({ subject, chapter, title, children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <nav className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-700">Академія</Link>
          <span>›</span>
          <span className="text-gray-600">{subject}</span>
          <span>›</span>
          <span className="text-gray-600">{chapter}</span>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">{title}</h1>
        <div className="prose prose-gray max-w-none mt-6">
          {children}
        </div>
      </main>
    </div>
  );
}