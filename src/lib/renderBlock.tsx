import React from "react";
import Image from "next/image";
import katex from "katex";
import "katex/dist/katex.min.css";
import type { ContentBlock } from "@/types";
import {
    CoordinateNumberLineInteractive,
    CoordinateOrderComparisonVisual,
    CoordinatePlaneInteractive,
    CoordinateQuadrantsVisual,
} from "@/components/lessons/CoordinatePlaneVisuals";

type CheckYourselfItem = {
    question: string;
    answer: string;
    explanation?: string;
};

function getAccordionItems(props?: Record<string, unknown>): CheckYourselfItem[] {
    const items = props?.items;
    if (!Array.isArray(items)) {
        return [];
    }

    return items.filter((item): item is CheckYourselfItem => {
        if (!item || typeof item !== "object") {
            return false;
        }

        const candidate = item as Record<string, unknown>;
        return typeof candidate.question === "string" && typeof candidate.answer === "string";
    });
}

function CheckYourselfAccordion({ items }: { items: CheckYourselfItem[] }) {
    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <details
                    key={`${item.question}-${index}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                    <summary className="cursor-pointer list-none text-base font-medium text-slate-900 marker:hidden">
                        <span className="flex items-start justify-between gap-3">
                            <span>{renderInline(item.question)}</span>
                            <span className="mt-0.5 text-slate-400 transition group-open:rotate-45">+</span>
                        </span>
                    </summary>

                    <div className="mt-4 border-t border-slate-100 pt-4 text-slate-700">
                        <p>
                            <strong>Відповідь:</strong>{" "}
                            {renderInline(item.answer)}
                            {item.explanation ? <> {" "}{renderInline(item.explanation)}</> : null}
                        </p>
                    </div>
                </details>
            ))}
        </div>
    );
}

export function renderInline(text: string): React.ReactNode {
    const parts = text.split(/(\*\*[^*]+\*\*|\$[^$]+\$|`[^`]+`)/g);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }

        if (part.startsWith("`") && part.endsWith("`")) {
            return (
                <code
                    key={index}
                    className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[0.85em] text-red-700"
                >
                    {part.slice(1, -1)}
                </code>
            );
        }

        if (part.startsWith("$") && part.endsWith("$")) {
            const latex = part.slice(1, -1);

            try {
                const html = katex.renderToString(latex, {
                    throwOnError: false,
                    displayMode: false,
                });

                return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
            } catch {
                return <code key={index}>{latex}</code>;
            }
        }

        return <span key={index}>{part}</span>;
    });
}

export function renderBlock(block: ContentBlock): React.ReactNode {
    switch (block.type) {
        case "text":
            if (block.parts) {
                return (
                    <p className="leading-relaxed text-gray-700">
                        {block.parts.map((part, index) =>
                            part.href ? (
                                <a
                                    key={index}
                                    href={part.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="lesson-link"
                                >
                                    {part.text}
                                </a>
                            ) : (
                                <span key={index}>{renderInline(part.text)}</span>
                            )
                        )}
                    </p>
                );
            }

            return <p className="leading-relaxed text-gray-700">{renderInline(block.content ?? "")}</p>;

        case "code":
            return (
                <figure className="my-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
                    {block.caption && (
                        <figcaption className="border-b border-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-300">
                            {block.caption}
                        </figcaption>
                    )}
                    <pre className="overflow-x-auto px-4 py-4 text-sm leading-6 text-slate-100">
                        <code className={block.language ? `language-${block.language}` : undefined}>
                            {block.content}
                        </code>
                    </pre>
                </figure>
            );

        case "heading":
            if (block.level === 2) {
                return <h2 className="mb-3 mt-8 text-xl font-semibold text-gray-900">{renderInline(block.content)}</h2>;
            }

            return <h3 className="mb-2 mt-6 text-lg font-semibold text-gray-900">{renderInline(block.content)}</h3>;

        case "math":
            try {
                const html = katex.renderToString(block.content, {
                    throwOnError: false,
                    displayMode: block.display ?? false,
                });

                return block.display ? (
                    <div className="my-4 overflow-x-auto text-center" dangerouslySetInnerHTML={{ __html: html }} />
                ) : (
                    <span dangerouslySetInnerHTML={{ __html: html }} />
                );
            } catch {
                return <code>{block.content}</code>;
            }

        case "math-block":
            try {
                const html = katex.renderToString(block.content, {
                    throwOnError: false,
                    displayMode: true,
                });

                return <div className="my-4 overflow-x-auto text-center" dangerouslySetInnerHTML={{ __html: html }} />;
            } catch {
                return <pre className="rounded bg-gray-100 p-3">{block.content}</pre>;
            }

        case "list":
            if (block.ordered) {
                return (
                    <ol className="my-3 list-decimal space-y-1.5 list-inside text-gray-700">
                        {block.items.map((item, index) => (
                            <li key={index}>{renderInline(item)}</li>
                        ))}
                    </ol>
                );
            }

            return (
                <ul className="my-3 list-disc space-y-1.5 list-inside text-gray-700">
                    {block.items.map((item, index) => (
                        <li key={index}>{renderInline(item)}</li>
                    ))}
                </ul>
            );

        case "callout": {
            const styles = {
                info: {
                    bg: "bg-blue-50",
                    border: "border-blue-200",
                    text: "text-blue-900",
                    title: "text-blue-700",
                },
                warning: {
                    bg: "bg-amber-50",
                    border: "border-amber-200",
                    text: "text-amber-900",
                    title: "text-amber-700",
                },
                example: {
                    bg: "bg-violet-50",
                    border: "border-violet-200",
                    text: "text-violet-900",
                    title: "text-violet-700",
                },
                definition: {
                    bg: "bg-emerald-50",
                    border: "border-emerald-200",
                    text: "text-emerald-900",
                    title: "text-emerald-700",
                },
            };
            const style = styles[block.kind];

            return (
                <div className={`my-4 rounded-xl border p-4 ${style.bg} ${style.border}`}>
                    {block.title && (
                        <p className={`mb-1.5 text-xs font-semibold uppercase tracking-widest ${style.title}`}>
                            {renderInline(block.title)}
                        </p>
                    )}
                    <p className={`text-sm leading-relaxed ${style.text}`}>{renderInline(block.content)}</p>
                </div>
            );
        }

        case "image":
            return (
                <figure className="my-6">
                    <Image
                        src={block.src}
                        alt={block.alt}
                        width={1200}
                        height={900}
                        className="h-auto w-full rounded-xl"
                    />
                    {block.caption && (
                        <figcaption className="mt-2 text-center text-sm text-gray-500">{block.caption}</figcaption>
                    )}
                </figure>
            );

        case "link":
            return (
                <a
                    href={block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lesson-link"
                >
                    {block.label}
                </a>
            );

        case "divider":
            return <hr className="my-6 border-gray-200" />;

        case "component":
            if (block.name === "check-yourself-accordion") {
                const items = getAccordionItems(block.props);
                return <CheckYourselfAccordion items={items} />;
            }

            if (block.name === "coordinate-number-line-interactive") {
                return <CoordinateNumberLineInteractive />;
            }

            if (block.name === "coordinate-plane-interactive") {
                return <CoordinatePlaneInteractive />;
            }

            if (block.name === "coordinate-quadrants-visual") {
                return <CoordinateQuadrantsVisual />;
            }

            if (block.name === "coordinate-order-comparison-visual") {
                return <CoordinateOrderComparisonVisual />;
            }

            return null;

        default:
            return null;
    }
}
