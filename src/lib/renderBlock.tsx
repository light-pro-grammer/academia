import React from "react";
import "katex/dist/katex.min.css";
import katex from "katex";
import type { ContentBlock } from "@/types";

// Рендер рядка з інлайновими формулами типу "текст $формула$ текст"
export function renderInline(text: string): React.ReactNode {
    const parts = text.split(/(\$[^$]+\$)/g);
    return parts.map((part, i) => {
        if (part.startsWith("$") && part.endsWith("$")) {
            const latex = part.slice(1, -1);
            try {
                const html = katex.renderToString(latex, { throwOnError: false, displayMode: false });
                return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
            } catch {
                return <code key={i}>{latex}</code>;
            }
        }
        return <span key={i}>{part}</span>;
    });
}

// Рендер блоку контенту
export function renderBlock(block: ContentBlock): React.ReactNode {
    switch (block.type) {
        case "text":
            return <p className="text-gray-700 leading-relaxed">{renderInline(block.content)}</p>;

        case "heading":
            if (block.level === 2) return (
                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">{block.content}</h2>
            );
            return (
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">{block.content}</h3>
            );

        case "math":
            try {
                const html = katex.renderToString(block.content, {
                    throwOnError: false,
                    displayMode: block.display ?? false,
                });
                return block.display
                    ? <div className="my-4 overflow-x-auto text-center" dangerouslySetInnerHTML={{ __html: html }} />
                    : <span dangerouslySetInnerHTML={{ __html: html }} />;
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
                return <pre className="bg-gray-100 p-3 rounded">{block.content}</pre>;
            }

        case "list":
            if (block.ordered) return (
                <ol className="list-decimal list-inside space-y-1.5 text-gray-700 my-3">
                    {block.items.map((item, i) => (
                        <li key={i}>{renderInline(item)}</li>
                    ))}
                </ol>
            );
            return (
                <ul className="list-disc list-inside space-y-1.5 text-gray-700 my-3">
                    {block.items.map((item, i) => (
                        <li key={i}>{renderInline(item)}</li>
                    ))}
                </ul>
            );

        case "callout":
            const styles = {
                info: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", title: "text-blue-700" },
                warning: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", title: "text-amber-700" },
                example: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-900", title: "text-violet-700" },
                definition: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", title: "text-emerald-700" },
            };
            const s = styles[block.kind];
            return (
                <div className={`my-4 rounded-xl border ${s.bg} ${s.border} p-4`}>
                    {block.title && (
                        <p className={`text-xs font-semibold uppercase tracking-widest mb-1.5 ${s.title}`}>
                            {block.title}
                        </p>
                    )}
                    <p className={`text-sm leading-relaxed ${s.text}`}>{renderInline(block.content)}</p>
                </div>
            );

        case "image":
            return (
                <figure className="my-6">
                    <img src={block.src} alt={block.alt} className="w-full rounded-xl" />
                    {block.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-2">{block.caption}</figcaption>
                    )}
                </figure>
            );

        case "divider":
            return <hr className="my-6 border-gray-200" />;

        default:
            return null;
    }
}