import { notFound } from "next/navigation";
import LessonLayout from "@/components/lessons/LessonLayout";

interface Props {
  params: Promise<{
    subject: string;
    chapter: string;
    lesson: string;
  }>;
}

export default async function LessonPage({ params }: Props) {
  const { subject, chapter, lesson } = await params;

  let LessonContent: React.ComponentType;
  let meta: { title: string; subject: string; chapter: string };

  try {
    const mod = await import(
      `@/content/${subject}/${chapter}/${lesson}.mdx`
    );
    LessonContent = mod.default;
    meta = mod.meta;
  } catch {
    notFound();
  }

  return (
    <LessonLayout
      subject={meta!.subject}
      chapter={meta!.chapter}
      title={meta!.title}
    >
      {LessonContent && <LessonContent />}
    </LessonLayout>
  );
}