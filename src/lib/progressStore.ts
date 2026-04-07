"use client";

import { useSyncExternalStore } from "react";

const STORAGE_PREFIX = "lesson-";
const DONE_VALUE = "done";
const CHANGE_EVENT = "academia-progress-change";

let cachedKey = "";
let cachedSnapshot: string[] = [];

function readCompletedLessonIds(): string[] {
    if (typeof window === "undefined") return [];

    const completed: string[] = [];

    for (let index = 0; index < window.localStorage.length; index += 1) {
        const key = window.localStorage.key(index);
        if (!key?.startsWith(STORAGE_PREFIX)) continue;
        if (window.localStorage.getItem(key) !== DONE_VALUE) continue;
        completed.push(key.slice(STORAGE_PREFIX.length));
    }

    completed.sort();
    const nextKey = completed.join("|");

    if (nextKey === cachedKey) {
        return cachedSnapshot;
    }

    cachedKey = nextKey;
    cachedSnapshot = completed;
    return cachedSnapshot;
}

function subscribe(onStoreChange: () => void): () => void {
    if (typeof window === "undefined") return () => undefined;

    const handleChange = () => {
        cachedKey = "";
        cachedSnapshot = [];
        onStoreChange();
    };

    window.addEventListener("storage", handleChange);
    window.addEventListener(CHANGE_EVENT, handleChange);

    return () => {
        window.removeEventListener("storage", handleChange);
        window.removeEventListener(CHANGE_EVENT, handleChange);
    };
}

function getServerSnapshot(): string[] {
    return [];
}

export function markLessonCompleted(lessonId: string): void {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(`${STORAGE_PREFIX}${lessonId}`, DONE_VALUE);
    window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useCompletedLessonIds(): string[] {
    return useSyncExternalStore(subscribe, readCompletedLessonIds, getServerSnapshot);
}

export function useLessonCompleted(lessonId: string): boolean {
    return useCompletedLessonIds().includes(lessonId);
}
