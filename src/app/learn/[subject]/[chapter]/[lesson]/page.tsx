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
        { id: "06-even-odd-numbers", title: "Парні та непарні числа" },
        { id: "07-zero", title: "Число 0 — що це таке?" },
        { id: "08-number-line", title: "Місце числа в ряду" },
        { id: "09-number-composition", title: "Склад числа" },
        { id: "10-tens-and-units", title: "Десятки і одиниці" },
        { id: "11-skip-counting", title: "Лічба двійками, п'ятірками, десятками" },
        { id: "12-number-line-visual", title: "Число на числовій прямій" },
        { id: "13-rounding", title: "Округлення до десятка" },
        { id: "14-review", title: "Повторення і перевірка знань" },
      ],
    },
    "2-addition": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-addition", title: "Що таке додавання?" },
        { id: "02-addition-to-10", title: "Додавання в межах 10" },
        { id: "03-addition-to-20", title: "Додавання в межах 20" },
        { id: "04-addition-two-digit", title: "Додавання двозначних чисел" },
        { id: "05-addition-problems", title: "Задачі на додавання" },
        { id: "06-addition-properties", title: "Властивості додавання" },
        { id: "07-checking-addition", title: "Перевірка додавання" },
        { id: "08-addition-review", title: "Повторення: Додавання" },
      ],
    },
    "3-subtraction": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-subtraction", title: "Що таке віднімання?" },
        { id: "02-subtraction-to-10", title: "Віднімання в межах 10" },
        { id: "03-subtraction-to-20", title: "Віднімання в межах 20" },
        { id: "04-subtraction-two-digit", title: "Віднімання двозначних чисел" },
        { id: "05-subtraction-problems", title: "Задачі на віднімання" },
        { id: "06-addition-subtraction-connection", title: "Зв'язок додавання і віднімання" },
        { id: "07-subtraction-review", title: "Повторення: Віднімання" },
      ],
    },
    "4-multiplication": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-multiplication", title: "Що таке множення?" },
        { id: "02-multiplication-by-2", title: "Таблиця множення на 2" },
        { id: "03-multiplication-by-3", title: "Таблиця множення на 3" },
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