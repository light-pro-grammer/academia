const allNumbers: Record<number, { word: string; example: string }> = {
  1:  { word: "один",        example: "одне сонце ☀️" },
  2:  { word: "два",         example: "два ока 👀" },
  3:  { word: "три",         example: "три кольори світлофора 🚦" },
  4:  { word: "чотири",      example: "чотири лапи у кота 🐱" },
  5:  { word: "п'ять",       example: "п'ять пальців на руці ✋" },
  6:  { word: "шість",       example: "шість ніг у комахи 🐛" },
  7:  { word: "сім",         example: "сім кольорів веселки 🌈" },
  8:  { word: "вісім",       example: "вісім ніг у павука 🕷️" },
  9:  { word: "дев'ять",     example: "дев'ять планет 🪐" },
  10: { word: "десять",      example: "десять пальців на руках 👐" },
  11: { word: "одинадцять",  example: "одинадцять гравців у футболі ⚽" },
  12: { word: "дванадцять",  example: "дванадцять місяців у році 📅" },
  13: { word: "тринадцять",  example: "тринадцять — улюблене число магів 🔮" },
  14: { word: "чотирнадцять",example: "чотирнадцять днів у двох тижнях 📆" },
  15: { word: "п'ятнадцять", example: "п'ятнадцять хвилин — чверть години ⏰" },
  16: { word: "шістнадцять", example: "шістнадцять команд у турнірі 🏆" },
  17: { word: "сімнадцять",  example: "сімнадцять — просте число 🔢" },
  18: { word: "вісімнадцять",example: "вісімнадцять отворів на полі для гольфу ⛳" },
  19: { word: "дев'ятнадцять",example: "дев'ятнадцять — останнє підліткове число 🎒" },
  20: { word: "двадцять",    example: "двадцять пальців на руках і ногах 🖐️" },
};

interface Props {
  start?: number;
}

export default function NumberTable({ start = 1 }: Props) {
  const end = start <= 10 ? 10 : 20;
  const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="grid grid-cols-2 gap-3 my-6 not-prose">
      {numbers.map((n) => {
        const data = allNumbers[n];
        return (
          <div
            key={n}
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3"
          >
            <span className="text-3xl font-semibold text-green-700 w-10 shrink-0">
              {n}
            </span>
            <div>
              <p className="font-medium text-gray-900 text-sm">{data.word}</p>
              <p className="text-gray-500 text-xs">{data.example}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}