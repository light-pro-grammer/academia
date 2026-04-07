import { notFound } from "next/navigation";
import LearnShell from "@/components/learn/LearnShell";
import SubjectCourseList from "@/components/learn/SubjectCourseList";
import { getSubject } from "@/data/subjects";

interface Props {
    params: Promise<{ subject: string }>;
}

export default async function SubjectPage({ params }: Props) {
    const { subject } = await params;
    const data = getSubject(subject);
    if (!data) notFound();

    return (
        <LearnShell title={`${data.emoji} ${data.title}`} description={data.description} hidePageHeader>
            <SubjectCourseList subjectId={subject} />
        </LearnShell>
    );
}
