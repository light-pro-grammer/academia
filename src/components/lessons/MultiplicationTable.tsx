"use client";
import { useState } from "react";

export default function MultiplicationTable() {
  const [highlighted, setHighlighted] = useState<{ row: number; col: number } | null>(null);

  return (
    <div className="my-6 not-prose overflow-x-auto">
      <table className="border-collapse text-sm">
        <thead>
          <tr>
            <th className="w-10 h-10 bg-gray-100 border border-gray-200" />
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <th
                key={n}
                className={`w-10 h-10 border border-gray-200 font-semibold text-center ${
                  highlighted?.col === n ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"
                }`}
              >
                {n}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((row) => (
            <tr key={row}>
              <th
                className={`w-10 h-10 border border-gray-200 font-semibold text-center ${
                  highlighted?.row === row ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"
                }`}
              >
                {row}
              </th>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((col) => {
                const isResult = highlighted?.row === row && highlighted?.col === col;
                const isRowOrCol = highlighted?.row === row || highlighted?.col === col;
                const isDiagonal = row === col;
                return (
                  <td
                    key={col}
                    className={`w-10 h-10 border border-gray-200 text-center cursor-pointer transition-colors font-medium ${
                      isResult
                        ? "bg-green-500 text-white"
                        : isRowOrCol
                        ? "bg-green-50 text-green-700"
                        : isDiagonal
                        ? "bg-blue-50 text-blue-700"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                    onMouseEnter={() => setHighlighted({ row, col })}
                    onMouseLeave={() => setHighlighted(null)}
                  >
                    {row * col}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-2">
        Наведи мишкою на будь-яку клітинку щоб виділити рядок і стовпець
      </p>
    </div>
  );
}