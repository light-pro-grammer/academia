"use client";

interface Props {
  min?: number;
  max?: number;
  step?: number;
}

export default function NumberLine({ min = 0, max = 10, step = 1 }: Props) {
  const numbers = [];
  for (let i = min; i <= max; i += step) {
    numbers.push(i);
  }

  return (
    <div className="my-6 not-prose overflow-x-auto">
      <div className="flex items-center gap-0 min-w-max px-4 py-6">
        <div className="w-4 h-0.5 bg-gray-400" />
        {numbers.map((n, i) => (
          <div key={n} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-3 bg-gray-400" />
              <span className="text-xs font-medium text-gray-700 mt-1">{n}</span>
            </div>
            {i < numbers.length - 1 && (
              <div className="h-0.5 bg-gray-400" style={{ width: step === 1 ? "2rem" : "3rem" }} />
            )}
          </div>
        ))}
        <div className="flex items-center">
          <div className="w-4 h-0.5 bg-gray-400" />
          <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-gray-400" />
        </div>
      </div>
    </div>
  );
}