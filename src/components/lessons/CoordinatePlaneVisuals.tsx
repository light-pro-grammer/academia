"use client";

import { useId, useState } from "react";

type PlanePoint = {
    id: number;
    x: number;
    y: number;
};

type NumberPoint = {
    id: number;
    value: number;
};

const COLORS = [
    { bg: "#DBEAFE", border: "#2563EB", text: "#1D4ED8" },
    { bg: "#DCFCE7", border: "#16A34A", text: "#15803D" },
    { bg: "#FCE7F3", border: "#DB2777", text: "#BE185D" },
    { bg: "#FEF3C7", border: "#D97706", text: "#B45309" },
    { bg: "#E9D5FF", border: "#9333EA", text: "#7E22CE" },
];

const PLANE_MIN = -6;
const PLANE_MAX = 6;
const NUMBER_LINE_MIN = -6;
const NUMBER_LINE_MAX = 6;

function getColor(index: number) {
    return COLORS[index % COLORS.length];
}

function quadrantLabel(x: number, y: number) {
    if (x === 0 && y === 0) return "початок координат";
    if (x === 0) return "вісь y";
    if (y === 0) return "вісь x";
    if (x > 0 && y > 0) return "I чверть";
    if (x < 0 && y > 0) return "II чверть";
    if (x < 0 && y < 0) return "III чверть";
    return "IV чверть";
}

function describePoint(x: number, y: number) {
    if (x === 0 && y === 0) {
        return "Точка (0; 0) лежить у початку координат, де перетинаються осі x та y.";
    }

    if (x === 0) {
        return `Точка (0; ${y}) лежить на осі y, бо x = 0. Координата y показує, що від початку треба ${y > 0 ? "піднятися" : "опуститися"} на ${Math.abs(y)}.`;
    }

    if (y === 0) {
        return `Точка (${x}; 0) лежить на осі x, бо y = 0. Координата x показує, що від початку треба ${x > 0 ? "піти вправо" : "піти вліво"} на ${Math.abs(x)}.`;
    }

    return `Точка (${x}; ${y}) лежить у ${quadrantLabel(x, y)}, бо x ${x > 0 ? "додатний" : "від'ємний"}, а y ${y > 0 ? "додатний" : "від'ємний"}.`;
}

function describeNumber(value: number) {
    if (value === 0) {
        return "Число 0 лежить у початку відліку. Воно не є ні додатним, ні від'ємним.";
    }

    return `Число ${value} лежить ${value > 0 ? "праворуч" : "ліворуч"} від нуля, бо воно ${value > 0 ? "додатне" : "від'ємне"}. Відстань до початку відліку: ${Math.abs(value)}.`;
}

function sectionCardClassName() {
    return "my-5 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm shadow-slate-200/70";
}

function badgeClassName() {
    return "rounded-full border px-3 py-1 text-xs font-semibold transition hover:-translate-y-0.5";
}

export function CoordinateNumberLineInteractive() {
    const [input, setInput] = useState("3");
    const [points, setPoints] = useState<NumberPoint[]>([]);
    const [status, setStatus] = useState(
        "Введи число від -6 до 6, натисни «Показати» і подивись, де воно стоїть на прямій."
    );
    const [nextId, setNextId] = useState(1);
    const [recentId, setRecentId] = useState<number | null>(null);
    const markerId = useId().replace(/:/g, "");

    const lineLeft = 32;
    const lineRight = 388;
    const centerY = 78;
    const step = (lineRight - lineLeft) / (NUMBER_LINE_MAX - NUMBER_LINE_MIN);

    function toX(value: number) {
        return lineLeft + (value - NUMBER_LINE_MIN) * step;
    }

    function handleAdd() {
        const parsed = Number.parseInt(input, 10);

        if (!Number.isInteger(parsed) || parsed < NUMBER_LINE_MIN || parsed > NUMBER_LINE_MAX) {
            setStatus("Потрібно ввести ціле число від -6 до 6.");
            return;
        }

        const point = { id: nextId, value: parsed };
        const nextPoints = [...points, point].slice(-5);
        setPoints(nextPoints);
        setNextId((current) => current + 1);
        setRecentId(point.id);
        setStatus(describeNumber(parsed));
    }

    function handleRemove(id: number) {
        setPoints((current) => current.filter((point) => point.id !== id));
        setStatus("Позначку прибрано з числової прямої.");
        if (recentId === id) {
            setRecentId(null);
        }
    }

    function handleClear() {
        setPoints([]);
        setRecentId(null);
        setStatus("Числову пряму очищено.");
    }

    return (
        <section className={sectionCardClassName()}>
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex flex-wrap items-center gap-3">
                    <label className="text-sm font-medium text-slate-700" htmlFor="number-line-input">
                        Число
                    </label>
                    <input
                        id="number-line-input"
                        type="number"
                        inputMode="numeric"
                        min={NUMBER_LINE_MIN}
                        max={NUMBER_LINE_MAX}
                        step={1}
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleAdd();
                            }
                        }}
                        className="w-20 rounded-xl border border-slate-300 bg-white px-3 py-2 text-center text-sm text-slate-900 outline-none ring-0 transition focus:border-slate-400"
                    />
                    <button
                        type="button"
                        onClick={handleAdd}
                        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Показати
                    </button>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        Очистити
                    </button>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{status}</p>
            </div>

            <div className="px-5 py-4">
                <div className="mb-4 flex min-h-8 flex-wrap gap-2">
                    {points.map((point, index) => {
                        const color = getColor(index);

                        return (
                            <button
                                key={point.id}
                                type="button"
                                onClick={() => handleRemove(point.id)}
                                className={badgeClassName()}
                                style={{
                                    backgroundColor: color.bg,
                                    borderColor: color.border,
                                    color: color.text,
                                }}
                                title="Натисни, щоб видалити позначку"
                            >
                                {point.value}
                            </button>
                        );
                    })}
                </div>

                <svg viewBox="0 0 420 140" className="mx-auto block w-full max-w-2xl">
                    <defs>
                        <marker
                            id={`number-line-arrow-${markerId}`}
                            viewBox="0 0 10 10"
                            refX="8"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                        >
                            <path
                                d="M2 1L8 5L2 9"
                                fill="none"
                                stroke="#64748B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </marker>
                    </defs>

                    <line
                        x1={lineLeft}
                        y1={centerY}
                        x2={lineRight}
                        y2={centerY}
                        stroke="#64748B"
                        strokeWidth="1.5"
                        markerStart={`url(#number-line-arrow-${markerId})`}
                        markerEnd={`url(#number-line-arrow-${markerId})`}
                    />

                    {Array.from({ length: NUMBER_LINE_MAX - NUMBER_LINE_MIN + 1 }, (_, index) => {
                        const value = NUMBER_LINE_MIN + index;
                        const x = toX(value);
                        const isZero = value === 0;

                        return (
                            <g key={value}>
                                <line
                                    x1={x}
                                    y1={centerY - (isZero ? 11 : 7)}
                                    x2={x}
                                    y2={centerY + (isZero ? 11 : 7)}
                                    stroke="#475569"
                                    strokeWidth={isZero ? "1.5" : "1"}
                                />
                                <text
                                    x={x}
                                    y={centerY + 28}
                                    textAnchor="middle"
                                    fontSize={isZero ? "13" : "11"}
                                    fontWeight={isZero ? "600" : "400"}
                                    fill={isZero ? "#0F172A" : "#64748B"}
                                >
                                    {value}
                                </text>
                            </g>
                        );
                    })}

                    <text x={toX(-3)} y={36} textAnchor="middle" fontSize="11" fill="#94A3B8">
                        від&apos;ємні
                    </text>
                    <text x={toX(3)} y={36} textAnchor="middle" fontSize="11" fill="#94A3B8">
                        додатні
                    </text>

                    {points.map((point, index) => {
                        const color = getColor(index);
                        const x = toX(point.value);
                        const isRecent = recentId === point.id;

                        return (
                            <g key={point.id}>
                                {isRecent ? (
                                    <circle
                                        cx={x}
                                        cy={centerY}
                                        r="15"
                                        fill={color.border}
                                        opacity="0.18"
                                        className="animate-ping"
                                    />
                                ) : null}
                                <circle cx={x} cy={centerY} r="7" fill={color.bg} stroke={color.border} strokeWidth="2" />
                                <text
                                    x={x}
                                    y={centerY - 18}
                                    textAnchor="middle"
                                    fontSize="12"
                                    fontWeight="600"
                                    fill={color.text}
                                >
                                    {point.value}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </section>
    );
}

export function CoordinatePlaneInteractive() {
    const [xInput, setXInput] = useState("3");
    const [yInput, setYInput] = useState("2");
    const [points, setPoints] = useState<PlanePoint[]>([]);
    const [status, setStatus] = useState(
        "Введи x і y від -6 до 6, натисни «Побудувати» і спостерігай шлях: спочатку по горизонталі, потім по вертикалі."
    );
    const [nextId, setNextId] = useState(1);
    const [recentId, setRecentId] = useState<number | null>(null);
    const markerId = useId().replace(/:/g, "");

    const size = 420;
    const pad = 42;
    const center = size / 2;
    const step = (size - pad * 2) / (PLANE_MAX - PLANE_MIN);

    function toSvgPoint(x: number, y: number) {
        return {
            sx: center + x * step,
            sy: center - y * step,
        };
    }

    function handleAdd() {
        const x = Number.parseInt(xInput, 10);
        const y = Number.parseInt(yInput, 10);

        if (
            !Number.isInteger(x) ||
            !Number.isInteger(y) ||
            x < PLANE_MIN ||
            x > PLANE_MAX ||
            y < PLANE_MIN ||
            y > PLANE_MAX
        ) {
            setStatus("Потрібно ввести цілі x і y від -6 до 6.");
            return;
        }

        const point = { id: nextId, x, y };
        const nextPoints = [...points, point].slice(-5);
        setPoints(nextPoints);
        setNextId((current) => current + 1);
        setRecentId(point.id);
        setStatus(describePoint(x, y));
    }

    function handleRemove(id: number) {
        setPoints((current) => current.filter((point) => point.id !== id));
        setStatus("Точку прибрано з площини.");
        if (recentId === id) {
            setRecentId(null);
        }
    }

    function handleClear() {
        setPoints([]);
        setRecentId(null);
        setStatus("Координатну площину очищено.");
    }

    return (
        <section className={sectionCardClassName()}>
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex flex-wrap items-center gap-3">
                    <label className="text-sm font-medium text-slate-700" htmlFor="plane-x-input">
                        x
                    </label>
                    <input
                        id="plane-x-input"
                        type="number"
                        inputMode="numeric"
                        min={PLANE_MIN}
                        max={PLANE_MAX}
                        step={1}
                        value={xInput}
                        onChange={(event) => setXInput(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleAdd();
                            }
                        }}
                        className="w-20 rounded-xl border border-slate-300 bg-white px-3 py-2 text-center text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                    <label className="text-sm font-medium text-slate-700" htmlFor="plane-y-input">
                        y
                    </label>
                    <input
                        id="plane-y-input"
                        type="number"
                        inputMode="numeric"
                        min={PLANE_MIN}
                        max={PLANE_MAX}
                        step={1}
                        value={yInput}
                        onChange={(event) => setYInput(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleAdd();
                            }
                        }}
                        className="w-20 rounded-xl border border-slate-300 bg-white px-3 py-2 text-center text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                    <button
                        type="button"
                        onClick={handleAdd}
                        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Побудувати
                    </button>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        Очистити
                    </button>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{status}</p>
            </div>

            <div className="px-5 py-4">
                <div className="mb-4 flex min-h-8 flex-wrap gap-2">
                    {points.map((point, index) => {
                        const color = getColor(index);

                        return (
                            <button
                                key={point.id}
                                type="button"
                                onClick={() => handleRemove(point.id)}
                                className={badgeClassName()}
                                style={{
                                    backgroundColor: color.bg,
                                    borderColor: color.border,
                                    color: color.text,
                                }}
                                title="Натисни, щоб видалити точку"
                            >
                                ({point.x}; {point.y})
                            </button>
                        );
                    })}
                </div>

                <svg viewBox="0 0 420 420" className="mx-auto block w-full max-w-2xl">
                    <defs>
                        <marker
                            id={`plane-arrow-${markerId}`}
                            viewBox="0 0 10 10"
                            refX="8"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                        >
                            <path
                                d="M2 1L8 5L2 9"
                                fill="none"
                                stroke="#64748B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </marker>
                    </defs>

                    {Array.from({ length: PLANE_MAX - PLANE_MIN + 1 }, (_, index) => {
                        const value = PLANE_MIN + index;
                        const offset = value * step;
                        const x = center + offset;
                        const y = center - offset;

                        return (
                            <g key={value}>
                                <line x1={x} y1={pad} x2={x} y2={size - pad} stroke="#E2E8F0" strokeWidth="1" />
                                <line x1={pad} y1={y} x2={size - pad} y2={y} stroke="#E2E8F0" strokeWidth="1" />
                            </g>
                        );
                    })}

                    <line
                        x1={pad}
                        y1={center}
                        x2={size - pad}
                        y2={center}
                        stroke="#64748B"
                        strokeWidth="1.5"
                        markerStart={`url(#plane-arrow-${markerId})`}
                        markerEnd={`url(#plane-arrow-${markerId})`}
                    />
                    <line
                        x1={center}
                        y1={size - pad}
                        x2={center}
                        y2={pad}
                        stroke="#64748B"
                        strokeWidth="1.5"
                        markerStart={`url(#plane-arrow-${markerId})`}
                        markerEnd={`url(#plane-arrow-${markerId})`}
                    />

                    {Array.from({ length: PLANE_MAX - PLANE_MIN + 1 }, (_, index) => {
                        const value = PLANE_MIN + index;
                        if (value === 0) return null;

                        const x = center + value * step;
                        const y = center - value * step;

                        return (
                            <g key={`tick-${value}`}>
                                <line x1={x} y1={center - 4} x2={x} y2={center + 4} stroke="#94A3B8" strokeWidth="1" />
                                <text x={x} y={center + 18} textAnchor="middle" fontSize="11" fill="#64748B">
                                    {value}
                                </text>
                                <line x1={center - 4} y1={y} x2={center + 4} y2={y} stroke="#94A3B8" strokeWidth="1" />
                                <text x={center - 12} y={y + 4} textAnchor="end" fontSize="11" fill="#64748B">
                                    {value}
                                </text>
                            </g>
                        );
                    })}

                    <text x={size - pad + 10} y={center + 4} fontSize="13" fontWeight="600" fill="#475569">
                        x
                    </text>
                    <text x={center + 8} y={pad - 10} fontSize="13" fontWeight="600" fill="#475569">
                        y
                    </text>
                    <text x={center - 10} y={center + 18} fontSize="11" fill="#94A3B8">
                        0
                    </text>

                    {points.map((point, index) => {
                        const color = getColor(index);
                        const { sx, sy } = toSvgPoint(point.x, point.y);
                        const projectionX = center;
                        const projectionY = sy;
                        const labelX = sx + (point.x >= 0 ? 14 : -14);
                        const labelAnchor = point.x >= 0 ? "start" : "end";
                        const labelY = sy + (point.y > 0 ? -12 : 18);
                        const isRecent = recentId === point.id;

                        return (
                            <g key={point.id}>
                                <line
                                    x1={projectionX}
                                    y1={projectionY}
                                    x2={sx}
                                    y2={sy}
                                    stroke={color.border}
                                    strokeWidth="1.5"
                                    strokeDasharray="5 4"
                                    opacity="0.55"
                                />
                                <line
                                    x1={sx}
                                    y1={center}
                                    x2={sx}
                                    y2={sy}
                                    stroke={color.border}
                                    strokeWidth="1.5"
                                    strokeDasharray="5 4"
                                    opacity="0.55"
                                />
                                {isRecent ? (
                                    <circle
                                        cx={sx}
                                        cy={sy}
                                        r="16"
                                        fill={color.border}
                                        opacity="0.18"
                                        className="animate-ping"
                                    />
                                ) : null}
                                <circle cx={sx} cy={sy} r="6.5" fill={color.bg} stroke={color.border} strokeWidth="2" />
                                <text
                                    x={labelX}
                                    y={labelY}
                                    textAnchor={labelAnchor}
                                    fontSize="12"
                                    fontWeight="600"
                                    fill={color.text}
                                >
                                    ({point.x}; {point.y})
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </section>
    );
}

export function CoordinateQuadrantsVisual() {
    const markerId = useId().replace(/:/g, "");

    return (
        <section className={sectionCardClassName()}>
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">Схема чвертей координатної площини</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                    Кольори допомагають швидко зв&apos;язати знаки координат із місцем точки на площині.
                </p>
            </div>

            <div className="px-5 py-5">
                <svg viewBox="0 0 420 340" className="mx-auto block w-full max-w-2xl">
                    <defs>
                        <marker
                            id={`quadrants-arrow-${markerId}`}
                            viewBox="0 0 10 10"
                            refX="8"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                        >
                            <path
                                d="M2 1L8 5L2 9"
                                fill="none"
                                stroke="#64748B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </marker>
                    </defs>

                    <rect x="34" y="22" width="176" height="136" fill="#E0F2FE" opacity="0.9" />
                    <rect x="210" y="22" width="176" height="136" fill="#DCFCE7" opacity="0.9" />
                    <rect x="34" y="158" width="176" height="136" fill="#FCE7F3" opacity="0.9" />
                    <rect x="210" y="158" width="176" height="136" fill="#FEF3C7" opacity="0.95" />

                    <line
                        x1="28"
                        y1="158"
                        x2="396"
                        y2="158"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        markerStart={`url(#quadrants-arrow-${markerId})`}
                        markerEnd={`url(#quadrants-arrow-${markerId})`}
                    />
                    <line
                        x1="210"
                        y1="306"
                        x2="210"
                        y2="12"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        markerStart={`url(#quadrants-arrow-${markerId})`}
                        markerEnd={`url(#quadrants-arrow-${markerId})`}
                    />

                    <text x="302" y="58" textAnchor="middle" fontSize="16" fontWeight="600" fill="#166534">
                        I чверть
                    </text>
                    <text x="302" y="78" textAnchor="middle" fontSize="12" fill="#15803D">
                        x &gt; 0, y &gt; 0
                    </text>
                    <text x="302" y="98" textAnchor="middle" fontSize="12" fill="#15803D">
                        приклад: (4; 3)
                    </text>

                    <text x="122" y="58" textAnchor="middle" fontSize="16" fontWeight="600" fill="#1D4ED8">
                        II чверть
                    </text>
                    <text x="122" y="78" textAnchor="middle" fontSize="12" fill="#2563EB">
                        x &lt; 0, y &gt; 0
                    </text>
                    <text x="122" y="98" textAnchor="middle" fontSize="12" fill="#2563EB">
                        приклад: (-2; 5)
                    </text>

                    <text x="122" y="230" textAnchor="middle" fontSize="16" fontWeight="600" fill="#BE185D">
                        III чверть
                    </text>
                    <text x="122" y="250" textAnchor="middle" fontSize="12" fill="#DB2777">
                        x &lt; 0, y &lt; 0
                    </text>
                    <text x="122" y="270" textAnchor="middle" fontSize="12" fill="#DB2777">
                        приклад: (-3; -1)
                    </text>

                    <text x="302" y="230" textAnchor="middle" fontSize="16" fontWeight="600" fill="#B45309">
                        IV чверть
                    </text>
                    <text x="302" y="250" textAnchor="middle" fontSize="12" fill="#D97706">
                        x &gt; 0, y &lt; 0
                    </text>
                    <text x="302" y="270" textAnchor="middle" fontSize="12" fill="#D97706">
                        приклад: (2; -4)
                    </text>

                    <text x="401" y="162" fontSize="13" fontWeight="600" fill="#475569">
                        x
                    </text>
                    <text x="216" y="18" fontSize="13" fontWeight="600" fill="#475569">
                        y
                    </text>
                    <text x="198" y="176" fontSize="11" fill="#94A3B8">
                        0
                    </text>
                </svg>
            </div>
        </section>
    );
}

export function CoordinateOrderComparisonVisual() {
    const markerId = useId().replace(/:/g, "");

    return (
        <section className={sectionCardClassName()}>
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">Порядок координат змінює точку</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                    Порівняй шлях до двох точок: однакові числа, але інший порядок дає інше місце на площині.
                </p>
            </div>

            <div className="grid gap-5 px-5 py-5 lg:grid-cols-[1.3fr_1fr]">
                <svg viewBox="0 0 420 240" className="mx-auto block w-full max-w-2xl">
                    <defs>
                        <marker
                            id={`order-arrow-${markerId}`}
                            viewBox="0 0 10 10"
                            refX="8"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                        >
                            <path
                                d="M2 1L8 5L2 9"
                                fill="none"
                                stroke="#64748B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </marker>
                    </defs>

                    <line
                        x1="32"
                        y1="120"
                        x2="206"
                        y2="120"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        markerStart={`url(#order-arrow-${markerId})`}
                        markerEnd={`url(#order-arrow-${markerId})`}
                    />
                    <line
                        x1="120"
                        y1="208"
                        x2="120"
                        y2="24"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        markerStart={`url(#order-arrow-${markerId})`}
                        markerEnd={`url(#order-arrow-${markerId})`}
                    />

                    {[-2, -1, 1, 2, 3, 4, 5].map((value) => {
                        const x = 120 + value * 20;
                        return (
                            <g key={`x-${value}`}>
                                <line x1={x} y1="116" x2={x} y2="124" stroke="#94A3B8" strokeWidth="1" />
                                <text x={x} y="138" textAnchor="middle" fontSize="10" fill="#64748B">
                                    {value}
                                </text>
                            </g>
                        );
                    })}

                    {[-2, -1, 1, 2, 3, 4, 5].map((value) => {
                        const y = 120 - value * 20;
                        return (
                            <g key={`y-${value}`}>
                                <line x1="116" y1={y} x2="124" y2={y} stroke="#94A3B8" strokeWidth="1" />
                                <text x="106" y={y + 4} textAnchor="end" fontSize="10" fill="#64748B">
                                    {value}
                                </text>
                            </g>
                        );
                    })}

                    <line x1="120" y1="20" x2="160" y2="20" stroke="#2563EB" strokeDasharray="5 4" />
                    <line x1="160" y1="120" x2="160" y2="20" stroke="#2563EB" strokeDasharray="5 4" />
                    <circle cx="160" cy="20" r="6.5" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
                    <text x="168" y="16" fontSize="12" fontWeight="600" fill="#1D4ED8">
                        (2; 5)
                    </text>

                    <line x1="120" y1="80" x2="220" y2="80" stroke="#DB2777" strokeDasharray="5 4" />
                    <line x1="220" y1="120" x2="220" y2="80" stroke="#DB2777" strokeDasharray="5 4" />
                    <circle cx="220" cy="80" r="6.5" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2" />
                    <text x="228" y="76" fontSize="12" fontWeight="600" fill="#BE185D">
                        (5; 2)
                    </text>
                </svg>

                <div className="space-y-3">
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                        <p className="text-sm font-semibold text-blue-900">(2; 5)</p>
                        <p className="mt-1 text-sm leading-6 text-blue-800">2 вправо, потім 5 вгору.</p>
                    </div>
                    <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
                        <p className="text-sm font-semibold text-pink-900">(5; 2)</p>
                        <p className="mt-1 text-sm leading-6 text-pink-800">5 вправо, потім 2 вгору.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm leading-6 text-slate-700">
                            Обидві точки в I чверті, але це різні місця на площині. Тому порядок координат завжди
                            читаємо як: спочатку x, потім y.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
