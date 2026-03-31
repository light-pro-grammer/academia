"use client";
import { useState } from "react";

interface Question {
  q: string;
  answer: number | string;
  choices: (number | string)[];
  explanation: string;
}

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | string | null>(null);
  const [done, setDone] = useState(false);

  const q = questions[current];

  function pick(val: number | string) {
    if (answered) return;
    setAnswered(true);
    setSelected(val);
    if (val === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setAnswered(false);
      setSelected(null);
    }
  }

  if (done) {
    const pct = score / questions.length;
    const stars = pct === 1 ? 3 : pct >= 0.6 ? 2 : 1;
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <div className="mb-2 text-2xl">{"⭐".repeat(stars)}{"☆".repeat(3 - stars)}</div>
        <p className="text-lg font-medium text-green-800">
          {pct === 1 ? "Ідеально! Всі відповіді правильні!" : `${score} з ${questions.length} правильно`}
        </p>
        <p className="mt-1 text-sm text-green-600">
          {pct === 1 ? "Готовий до наступного уроку!" : pct >= 0.6 ? "Ще трохи практики!" : "Повтори урок іще раз."}
        </p>
        <button
          onClick={() => { setCurrent(0); setScore(0); setAnswered(false); setSelected(null); setDone(false); }}
          className="mt-4 rounded-lg border px-4 py-2 text-sm hover:bg-white transition-colors"
        >
          Спробувати знову
        </button>
      </div>
    );
  }

  return (
    <div className="my-6 rounded-xl border border-gray-200 p-6">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-green-700">
        Перевірка знань · {current + 1} / {questions.length}
      </p>
      <p className="mb-4 text-base font-medium text-gray-900">{q.q}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {q.choices.map((c) => {
          const isCorrect = c === q.answer;
          const isSelected = c === selected;
          let cls = "rounded-lg border px-4 py-2 text-sm cursor-pointer transition-colors ";
          if (!answered) cls += "hover:border-gray-400 bg-gray-50";
          else if (isCorrect) cls += "border-green-500 bg-green-50 text-green-800 font-medium";
          else if (isSelected) cls += "border-red-400 bg-red-50 text-red-700";
          else cls += "border-gray-200 bg-gray-50 text-gray-400";
          return (
            <button key={String(c)} className={cls} onClick={() => pick(c)}>
              {c}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`mb-4 rounded-lg p-3 text-sm ${selected === q.answer ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {selected === q.answer ? "✓ Правильно! " : `✗ Правильна відповідь: ${q.answer}. `}
          {q.explanation}
        </div>
      )}
      {answered && (
        <button onClick={next} className="rounded-lg bg-green-700 px-5 py-2 text-sm font-medium text-white hover:bg-green-800 transition-colors">
          {current + 1 >= questions.length ? "Завершити" : "Далі →"}
        </button>
      )}
    </div>
  );
}