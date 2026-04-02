"use client";
import { useState } from "react";

const modes = [
  { id: "forward",   label: "Вперед",    step: 1,  start: 1,   dir: 1,  desc: "Додаємо 1 щоразу — кожне число",                color: "purple" },
  { id: "backward",  label: "Назад",     step: 1,  start: 100, dir: -1, desc: "Віднімаємо 1 щоразу — лічба у зворотному порядку", color: "green"  },
  { id: "2",         label: "Кроком 2",  step: 2,  start: 2,   dir: 1,  desc: "Додаємо 2 щоразу — парні числа",                  color: "blue"   },
  { id: "5",         label: "Кроком 5",  step: 5,  start: 5,   dir: 1,  desc: "Додаємо 5 щоразу — завжди закінчується на 5 або 0", color: "orange" },
  { id: "10",        label: "Кроком 10", step: 10, start: 10,  dir: 1,  desc: "Додаємо 10 щоразу — завжди закінчується на 0",    color: "red"    },
  { id: "3",         label: "Кроком 3",  step: 3,  start: 3,   dir: 1,  desc: "Додаємо 3 щоразу — таблиця множення на 3",        color: "pink"   },
  { id: "4",         label: "Кроком 4",  step: 4,  start: 4,   dir: 1,  desc: "Додаємо 4 щоразу — таблиця множення на 4",        color: "lime"   },
];

const colorMap: Record<string, { cell: string; active: string }> = {
  purple: { cell: "bg-purple-100 border-purple-400 text-purple-900", active: "bg-purple-100 border-purple-400 text-purple-700" },
  green:  { cell: "bg-emerald-100 border-emerald-400 text-emerald-900", active: "bg-emerald-100 border-emerald-400 text-emerald-700" },
  blue:   { cell: "bg-blue-100 border-blue-400 text-blue-900", active: "bg-blue-100 border-blue-400 text-blue-700" },
  orange: { cell: "bg-orange-100 border-orange-400 text-orange-900", active: "bg-orange-100 border-orange-400 text-orange-700" },
  red:    { cell: "bg-red-100 border-red-400 text-red-900", active: "bg-red-100 border-red-400 text-red-700" },
  pink:   { cell: "bg-pink-100 border-pink-400 text-pink-900", active: "bg-pink-100 border-pink-400 text-pink-700" },
  lime:   { cell: "bg-lime-100 border-lime-400 text-lime-900", active: "bg-lime-100 border-lime-400 text-lime-700" },
};

function getLitSet(mode: typeof modes[0]): Set<number> {
  const s = new Set<number>();
  if (mode.dir === -1) {
    for (let n = mode.start; n >= 1; n -= mode.step) s.add(n);
  } else {
    for (let n = mode.start; n <= 100; n += mode.step) s.add(n);
  }
  return s;
}

function getSeq(mode: typeof modes[0]): string {
  const arr: number[] = [];
  if (mode.dir === -1) {
    for (let n = mode.start; n >= 1 && arr.length < 8; n -= mode.step) arr.push(n);
  } else {
    for (let n = mode.start; n <= 100 && arr.length < 8; n += mode.step) arr.push(n);
  }
  return arr.join(", ") + " …";
}

export default function SkipCountingExplorer() {
  const [activeId, setActiveId] = useState("forward");
  const activeMode = modes.find(m => m.id === activeId)!;
  const lit = getLitSet(activeMode);
  const colors = colorMap[activeMode.color];

  return (
    <div className="my-6 p-4 rounded-xl border border-gray-200 bg-gray-50">
      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {modes.map(m => (
          <button
            key={m.id}
            onClick={() => setActiveId(m.id)}
            className={`px-3 py-1.5 rounded-lg border text-sm transition-all ${
              activeId === m.id
                ? `${colorMap[m.color].active} font-medium`
                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Sequence display */}
      <div className="mb-1 text-base font-medium text-gray-900">{getSeq(activeMode)}</div>
      <div className="mb-4 text-xs text-gray-500">{activeMode.desc}</div>

      {/* Grid */}
      <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(10, 1fr)" }}>
        {Array.from({ length: 100 }, (_, i) => i + 1).map(n => (
          <div
            key={n}
            className={`flex items-center justify-center rounded-md border text-sm transition-all select-none
              ${lit.has(n)
                ? `${colors.cell} font-medium scale-105`
                : "bg-gray-100 border-gray-200 text-gray-400"
              }`}
            style={{ height: 36 }}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
