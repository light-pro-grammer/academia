import { lessonRegistry, type LessonRef } from "@/data/registry";
import { getCourse, getSubject, subjects, type CourseInfo, type SubjectInfo } from "@/data/subjects";

export interface SearchEntry {
    id: string;
    title: string;
    subtitle: string;
    href: string;
    type: "subject" | "course" | "lesson";
}

export interface LessonGroup {
    id: string;
    title: string;
    lessons: LessonRef[];
}

export function getLessonProgressId(lesson: Pick<LessonRef, "subject" | "course" | "section" | "lesson">): string {
    return `${lesson.subject}/${lesson.course}/${lesson.section}/${lesson.lesson}`;
}

export function getSubjectCourses(subjectId: string): CourseInfo[] {
    return getSubject(subjectId)?.courses ?? [];
}

export function getCourseLessons(subjectId: string, courseId: string): LessonRef[] {
    return lessonRegistry.filter((lesson) => lesson.subject === subjectId && lesson.course === courseId);
}

export function getSubjectLessons(subjectId: string): LessonRef[] {
    return lessonRegistry.filter((lesson) => lesson.subject === subjectId);
}

export function getCourseLessonGroups(subjectId: string, courseId: string): LessonGroup[] {
    const course = getCourse(subjectId, courseId);
    if (!course) return [];

    return course.sections
        .map((section) => ({
            id: section.id,
            title: section.title,
            lessons: lessonRegistry.filter(
                (lesson) =>
                    lesson.subject === subjectId &&
                    lesson.course === courseId &&
                    lesson.section === section.id
            ),
        }))
        .filter((group) => group.lessons.length > 0);
}

function makeSubjectEntries(subject: SubjectInfo): SearchEntry[] {
    return [
        {
            id: `subject:${subject.id}`,
            title: subject.title,
            subtitle: "Предмет",
            href: `/learn/${subject.id}`,
            type: "subject",
        },
        ...subject.courses.map((course) => ({
            id: `course:${subject.id}:${course.id}`,
            title: course.title,
            subtitle: `${subject.title} · курс`,
            href: `/learn/${subject.id}/${course.id}`,
            type: "course" as const,
        })),
    ];
}

function makeLessonEntries(): SearchEntry[] {
    return lessonRegistry.map((lesson) => {
        const subject = getSubject(lesson.subject);
        const course = getCourse(lesson.subject, lesson.course);

        return {
            id: `lesson:${lesson.subject}:${lesson.course}:${lesson.lesson}`,
            title: lesson.title,
            subtitle: `${subject?.title ?? lesson.subject} · ${course?.title ?? lesson.course}`,
            href: `/learn/${lesson.subject}/${lesson.course}/${lesson.section}/${lesson.lesson}`,
            type: "lesson" as const,
        };
    });
}

export const learningSearchIndex: SearchEntry[] = [
    ...subjects.flatMap(makeSubjectEntries),
    ...makeLessonEntries(),
];
