"use client";
import { useState } from "react";
import type { QuizQuestion, ContentBlock } from "@/types";
import { renderBlock } from "@/lib/renderBlock";
import { renderInline } from "@/lib/renderBlock";

interface Props {
  questions: QuizQuestion[];
}

type State = "idle" | "correct" | "wrong";

export default function Quiz({ questions }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [state, setState] = useState<State>("idle");
  const [showSolution, setShowSolution] = useState(false);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  const q = questions[current];
  const isLast = current === questions.length - 1;

  function choose(idx: number) {
    if (state !== "idle") return;
    setSelected(idx);
    if (idx === q.correctIndex) {
      setState("correct");
      setScore(s => s + 1);
    } else {
      setState("wrong");
    }
    setShowSolution(true);
  }

  function next() {
    if (isLast) {
      setDone(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setState("idle");
      setShowSolution(false);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setState("idle");
    setShowSolution(false);
    setDone(false);
    setScore(0);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="my-8 rounded-2xl border border-gray-200 bg-white p-8 text-center">
        <div className="text-4xl mb-3">{pct >= 80 ? "🎉" : pct >= 50 ? "💪" : "📚"}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {score} з {questions.length} правильно
        </h3>
        <p className="text-gray-500 mb-6">{pct}% вірних відповідей</p>
        <button
          onClick={restart}
          className="px-6 py-2.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
        >
          Спробувати ще раз
        </button>
      </div>
    );
  }

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-white overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-violet-600">
          Перевірка знань
        </span>
        <span className="text-sm text-gray-400">
          {current + 1} / {questions.length}
        </span>
      </div>

      {/* Question */}
      <div className="px-6 pt-6 pb-4">
        <p className="text-base font-medium text-gray-900 mb-4">
          {renderInline(q.question)}
        </p>

        {/* Choices */}
        <div className="grid grid-cols-2 gap-2.5">
          {q.choices.map((choice, idx) => {
            let cls = "flex items-center justify-center text-center px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ";
            if (state === "idle") {
              cls += "border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-50 text-gray-700";
            } else if (idx === q.correctIndex) {
              cls += "border-emerald-400 bg-emerald-50 text-emerald-800";
            } else if (idx === selected && state === "wrong") {
              cls += "border-red-400 bg-red-50 text-red-800";
            } else {
              cls += "border-gray-200 bg-gray-50 text-gray-400";
            }
            return (
              <button key={idx} className={cls} onClick={() => choose(idx)}>
                {renderInline(choice)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {state !== "idle" && (
        <div className={`mx-6 mb-4 rounded-xl p-4 ${state === "correct"
          ? "bg-emerald-50 border border-emerald-200"
          : "bg-red-50 border border-red-200"
          }`}>
          <p className={`text-sm font-semibold mb-1 ${state === "correct" ? "text-emerald-800" : "text-red-800"
            }`}>
            {state === "correct" ? "✓ Правильно!" : `✗ Правильна відповідь: ${q.choices[q.correctIndex]}`}
          </p>
        </div>
      )}

      {/* Solution */}
      {showSolution && q.solution.length > 0 && (
        <div className="mx-6 mb-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Розв'язання</p>
          <div className="space-y-2 text-sm text-gray-700">
            {q.solution.map((block, i) => (
              <div key={i}>{renderBlock(block)}</div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      {state !== "idle" && (
        <div className="px-6 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i < current
                  ? "bg-violet-400"
                  : i === current
                    ? "bg-violet-600"
                    : "bg-gray-200"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="px-5 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors"
          >
            {isLast ? "Завершити" : "Далі →"}
          </button>
        </div>
      )}
    </div>
  );
}