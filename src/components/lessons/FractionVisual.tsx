interface Props {
    numerator: number;
    denominator: number;
}

export default function FractionVisual({ numerator, denominator }: Props) {
    const parts = Array.from({ length: denominator }, (_, i) => i < numerator);

    return (
        <div className="my-6 not-prose">
            <div className="flex items-center gap-6">
                <div
                    className="flex rounded-xl overflow-hidden border border-gray-300"
                    style={{ height: "60px", width: `${denominator * 60}px`, maxWidth: "480px" }}
                >
                    {parts.map((filled, i) => (
                        <div
                            key={i}
                            className={`flex-1 flex items-center justify-center text-xs font-medium transition-colors ${filled ? "bg-green-400 text-white" : "bg-gray-100 text-gray-400"
                                } ${i > 0 ? "border-l border-gray-300" : ""}`}
                        >
                            {filled ? "✓" : ""}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-semibold text-gray-900 leading-none">{numerator}</span>
                    <div className="w-8 h-0.5 bg-gray-900 my-1" />
                    <span className="text-2xl font-semibold text-gray-900 leading-none">{denominator}</span>
                </div>
                <div className="text-sm text-gray-500">
                    {numerator === denominator
                        ? "ціле"
                        : numerator === 1 && denominator === 2
                            ? "половина"
                            : numerator === 1 && denominator === 4
                                ? "чверть"
                                : `${numerator} з ${denominator} частин`}
                </div>
            </div>
        </div>
    );
}