const numbers = [
  { n: 1, word: "один", example: "одне сонце ☀️" },
  { n: 2, word: "два", example: "два ока 👀" },
  { n: 3, word: "три", example: "три кольори світлофора 🚦" },
  { n: 4, word: "чотири", example: "чотири лапи у кота 🐱" },
  { n: 5, word: "п'ять", example: "п'ять пальців на руці ✋" },
  { n: 6, word: "шість", example: "шість ніг у комахи 🐛" },
  { n: 7, word: "сім", example: "сім кольорів веселки 🌈" },
  { n: 8, word: "вісім", example: "вісім ніг у павука 🕷️" },
  { n: 9, word: "дев'ять", example: "дев'ять планет 🪐" },
  { n: 10, word: "десять", example: "десять пальців на руках 👐" },
];

export default function NumberTable() {
  return (
    <div className="grid grid-cols-2 gap-3 my-6 not-prose">
      {numbers.map(({ n, word, example }) => (
        <div
          key={n}
          className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3"
        >
          <span className="text-3xl font-semibold text-green-700 w-8 shrink-0">
            {n}
          </span>
          <div>
            <p className="font-medium text-gray-900 text-sm">{word}</p>
            <p className="text-gray-500 text-xs">{example}</p>
          </div>
        </div>
      ))}
    </div>
  );
}