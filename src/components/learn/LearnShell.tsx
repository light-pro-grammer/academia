"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { learningSearchIndex, type SearchEntry } from "@/lib/learningCatalog";

interface Breadcrumb {
    title: string;
    href?: string;
}

interface LearnShellProps {
    subjectId?: string;
    courseId?: string;
    title: string;
    description?: string;
    breadcrumbs?: Breadcrumb[];
    hidePageHeader?: boolean;
    children: React.ReactNode;
}

function SearchResults({ results, query }: { results: SearchEntry[]; query: string }) {
    if (!query.trim()) return null;

    return (
        <div className="absolute inset-x-0 top-[calc(100%+0.6rem)] z-30 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
            {results.length > 0 ? (
                <div className="max-h-96 overflow-y-auto p-2">
                    {results.map((result) => (
                        <Link
                            key={result.id}
                            href={result.href}
                            className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50"
                        >
                            <div className="flex items-center gap-2">
                                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                                    {result.type}
                                </span>
                                <span className="truncate text-sm font-medium text-slate-900">{result.title}</span>
                            </div>
                            <p className="mt-1 truncate text-sm text-slate-500">{result.subtitle}</p>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="px-4 py-5 text-sm text-slate-500">Нічого не знайдено. Спробуй інший запит.</div>
            )}
        </div>
    );
}

export default function LearnShell({
    title,
    description,
    breadcrumbs = [],
    hidePageHeader = false,
    children,
}: LearnShellProps) {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);

    const searchResults = useMemo(() => {
        const normalizedQuery = deferredQuery.trim().toLowerCase();
        if (!normalizedQuery) return [];

        return learningSearchIndex
            .filter((entry) => `${entry.title} ${entry.subtitle}`.toLowerCase().includes(normalizedQuery))
            .slice(0, 8);
    }, [deferredQuery]);

    return (
        <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
            <header className="sticky top-0 z-20 border-b border-slate-200 bg-[#f6f7fb]/92 px-4 py-4 backdrop-blur lg:px-8">
                <div className="mx-auto flex max-w-[1600px] flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex min-w-0 flex-1 items-center gap-5">
                        <Link
                            href="/"
                            className="hidden shrink-0 items-center gap-3 px-1 py-1 lg:flex"
                            aria-label="На головну"
                            title="На головну"
                        >
                            <div className="min-w-0">
                                <p className="truncate text-[1.4rem] font-semibold leading-none text-slate-950">Academia</p>
                            </div>
                        </Link>

                        <div className="relative w-[360px] shrink-0">
                            <label className="sr-only" htmlFor="site-search">
                                Пошук по сайту
                            </label>
                            <input
                                id="site-search"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Пошук по предметах, курсах і уроках"
                                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
                            />
                            <SearchResults results={searchResults} query={query} />
                        </div>

                        {breadcrumbs.length > 0 && (
                            <div className="hidden min-w-0 flex-1 items-center lg:flex">
                                <div className="flex min-w-0 max-w-full items-center gap-2 overflow-hidden whitespace-nowrap text-sm text-slate-400">
                                    {breadcrumbs.map((crumb, index) => (
                                        <div key={`${crumb.title}-${index}`} className="flex min-w-0 items-center gap-2">
                                            {index > 0 && <span className="shrink-0">›</span>}
                                            {crumb.href ? (
                                                <Link
                                                    href={crumb.href}
                                                    className="truncate rounded-full px-1 py-0.5 transition-colors hover:text-slate-700"
                                                >
                                                    {crumb.title}
                                                </Link>
                                            ) : (
                                                <span className="truncate text-slate-600">{crumb.title}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex shrink-0 items-center gap-3 xl:justify-end">
                        <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-sm shadow-slate-200/50"
                            title="Гість"
                            aria-label="Гість"
                        >
                            Г
                        </div>
                    </div>
                </div>
            </header>

            <main className="px-4 py-8 lg:px-8 lg:py-10">
                <div className="mx-auto max-w-[1600px]">
                    <div className="mx-auto max-w-5xl">
                        {breadcrumbs.length > 0 && (
                            <div className="mb-4 flex items-center gap-2 overflow-hidden whitespace-nowrap text-sm text-slate-400 lg:hidden">
                                {breadcrumbs.map((crumb, index) => (
                                    <div key={`${crumb.title}-${index}`} className="flex min-w-0 items-center gap-2">
                                        {index > 0 && <span className="shrink-0">›</span>}
                                        {crumb.href ? (
                                            <Link
                                                href={crumb.href}
                                                className="truncate rounded-full px-1 py-0.5 transition-colors hover:text-slate-700"
                                            >
                                                {crumb.title}
                                            </Link>
                                        ) : (
                                            <span className="truncate text-slate-600">{crumb.title}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {!hidePageHeader && (
                            <div className="mb-8">
                                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">{title}</h1>
                                {description && (
                                    <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 lg:text-lg">{description}</p>
                                )}
                            </div>
                        )}

                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
