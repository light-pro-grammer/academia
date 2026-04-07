import { notFound } from "next/navigation";
import CourseSectionList from "@/components/learn/CourseSectionList";
import LearnShell from "@/components/learn/LearnShell";
import { lessonRegistry } from "@/data/registry";
import { getCourse, getSubject } from "@/data/subjects";

interface Props {
    params: Promise<{ subject: string; course: string }>;
}

export default async function CoursePage({ params }: Props) {
    const { subject, course } = await params;
    const subjectData = getSubject(subject);
    const courseData = getCourse(subject, course);
    if (!subjectData || !courseData) notFound();

    const sections = courseData.sections.map((section) => ({
        id: section.id,
        title: section.title,
        lessons: lessonRegistry.filter(
            (item) => item.subject === subject && item.course === course && item.section === section.id
        ),
    }));

    return (
        <LearnShell
            subjectId={subject}
            courseId={course}
            title={courseData.title}
            description={courseData.description}
            breadcrumbs={[
                { title: subjectData.title, href: `/learn/${subject}` },
                { title: courseData.title },
            ]}
        >
            <CourseSectionList sections={sections} />
        </LearnShell>
    );
}
