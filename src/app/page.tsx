import Link from "next/link";

const subjects = [
  { id: "math", title: "Математика", desc: "Числа, арифметика, геометрія, алгебра", emoji: "🔢", ready: true },
  { id: "physics", title: "Фізика", desc: "Механіка, електрика, оптика", emoji: "⚡", ready: false },
  { id: "chemistry", title: "Хімія", desc: "Атоми, молекули, реакції", emoji: "🧪", ready: false },
  { id: "biology", title: "Біологія", desc: "Клітини, організми, еволюція", emoji: "🌿", ready: false },
  { id: "history", title: "Історія", desc: "Україна і світ від давнини до сьогодні", emoji: "📜", ready: false },
  { id: "english", title: "Англійська", desc: "Алфавіт, граматика, розмова", emoji: "🇬🇧", ready: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-900">Академія Знань</span>
          <span className="text-sm text-gray-400">Безкоштовно · Українською</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-14">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Вчись всьому.<br />З нуля до майстра.
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            Безкоштовна освітня платформа українською мовою. Математика, фізика, хімія, біологія, історія — з поясненнями, інтерактивними вправами і перевіркою знань.
          </p>
        </div>

        <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">
          Предмети
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {subjects.map((s) => (
            s.ready ? (
              <Link
                key={s.id}
                href={`/learn/${s.id}`}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 hover:border-green-400 hover:shadow-sm transition-all group"
              >
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">{s.title}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{s.desc}</p>
                </div>
              </Link>
            ) : (
              <div
                key={s.id}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 opacity-60 cursor-not-allowed"
              >
                <span className="text-3xl grayscale">{s.emoji}</span>
                <div>
                  <p className="font-medium text-gray-500">{s.title}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{s.desc}</p>
                  <span className="text-xs text-gray-400 mt-1 inline-block">Незабаром</span>
                </div>
              </div>
            )
          ))}
        </div>
      </main>
    </div>
  );
}