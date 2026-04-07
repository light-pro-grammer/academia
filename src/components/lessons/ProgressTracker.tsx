"use client";
import { markLessonCompleted, useLessonCompleted } from "@/lib/progressStore";

export function useProgress(lessonId: string) {
    const completed = useLessonCompleted(lessonId);

    function markDone() {
        markLessonCompleted(lessonId);
    }

    return { completed, markDone };
}

interface Props {
    lessonId: string;
}

export default function ProgressTracker({ lessonId }: Props) {
    const { completed, markDone } = useProgress(lessonId);

    if (completed) {
        return (
            <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-5 py-3 text-sm font-medium">
                <span>✓</span>
                <span>Урок пройдено!</span>
            </div>
        );
    }

    return (
        <button
            onClick={markDone}
            className="rounded-xl bg-green-700 px-6 py-3 text-sm font-medium text-white hover:bg-green-800 transition-colors"
        >
            Позначити як пройдений ✓
        </button>
    );
}
