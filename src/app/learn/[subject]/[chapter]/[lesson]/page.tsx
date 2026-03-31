import { notFound } from "next/navigation";
import LessonLayout from "@/components/lessons/LessonLayout";

const curriculum: Record<string, Record<string, {
  subject: string;
  lessons: { id: string; title: string }[];
}>> = {
  math: {
    "1-numbers": {
      subject: "Математика",
      lessons: [
        { id: "01-counting-1-10", title: "Числа від 1 до 10" },
        { id: "02-counting-11-20", title: "Числа від 11 до 20" },
        { id: "03-counting-20-100", title: "Числа від 20 до 100" },
        { id: "04-comparing-numbers", title: "Порівняння чисел" },
        { id: "05-ordinal-numbers", title: "Порядкові числа" },
      ],
    },
  },
};

interface Props {
  params: Promise<{
    subject: string;
    chapter: string;
    lesson: string;
  }>;
}

export default async function LessonPage({ params }: Props) {
  const { subject, chapter, lesson } = await params;

  const chapterData = curriculum[subject]?.[chapter];
  if (!chapterData) notFound();

  const lessons = chapterData.lessons;
  const currentIndex = lessons.findIndex((l) => l.id === lesson);
  if (currentIndex === -1) notFound();

  const prev = lessons[currentIndex - 1];
  const next = lessons[currentIndex + 1];

  const base = `/learn/${subject}/${chapter}`;

  let LessonContent: React.ComponentType;
  let meta: { title: string; subject: string; chapter: string };

  try {
    const mod = await import(`@/content/${subject}/${chapter}/${lesson}.mdx`);
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
      prev={prev ? { title: prev.title, href: `${base}/${prev.id}` } : undefined}
      next={next ? { title: next.title, href: `${base}/${next.id}` } : undefined}
    >
      {LessonContent && <LessonContent />}
    </LessonLayout>
  );
}