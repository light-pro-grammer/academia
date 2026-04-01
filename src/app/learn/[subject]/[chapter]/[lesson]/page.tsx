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
        { id: "04-multiplication-by-4", title: "Таблиця множення на 4" },
        { id: "05-multiplication-by-5", title: "Таблиця множення на 5" },
        { id: "06-multiplication-by-6", title: "Таблиця множення на 6" },
        { id: "07-multiplication-by-7", title: "Таблиця множення на 7" },
        { id: "08-multiplication-by-8", title: "Таблиця множення на 8" },
        { id: "09-multiplication-by-9", title: "Таблиця множення на 9" },
        { id: "10-multiplication-by-10", title: "Таблиця множення на 10" },
        { id: "11-multiplication-table", title: "Повна таблиця множення" },
        { id: "12-multiplication-problems", title: "Задачі на множення" },
        { id: "13-multiplication-review", title: "Повторення: Множення" },
      ],
    },
    "5-division": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-division", title: "Що таке ділення?" },
        { id: "02-division-by-2-3", title: "Ділення на 2 і 3" },
        { id: "03-division-by-4-5", title: "Ділення на 4 і 5" },
        { id: "04-division-by-6-9", title: "Ділення на 6, 7, 8, 9" },
        { id: "05-division-with-remainder", title: "Ділення з остачею" },
        { id: "06-division-problems", title: "Задачі на ділення" },
        { id: "07-division-review", title: "Повторення: Ділення" },
      ],
    },
    "6-fractions": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-fraction", title: "Що таке дріб?" },
        { id: "02-fractions-visual", title: "Дріб на малюнку" },
        { id: "03-comparing-fractions", title: "Порівняння дробів" },
        { id: "04-equivalent-fractions", title: "Рівні дроби" },
        { id: "05-adding-fractions", title: "Додавання дробів" },
        { id: "06-subtracting-fractions", title: "Віднімання дробів" },
        { id: "07-fractions-in-life", title: "Дроби у житті" },
        { id: "08-fractions-review", title: "Повторення: Дроби" },
      ],
    },
    "7-decimals": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-decimal", title: "Що таке десятковий дріб?" },
        { id: "02-comparing-decimals", title: "Порівняння десяткових дробів" },
        { id: "03-adding-decimals", title: "Додавання десяткових дробів" },
        { id: "04-subtracting-decimals", title: "Віднімання десяткових дробів" },
        { id: "05-multiplying-decimals", title: "Множення десяткових дробів" },
        { id: "06-dividing-decimals", title: "Ділення десяткових дробів" },
        { id: "07-rounding-decimals", title: "Округлення десяткових дробів" },
        { id: "08-decimals-review", title: "Повторення: Десяткові дроби" },
      ],
    },
    "8-geometry": {
      subject: "Математика",
      lessons: [
        { id: "01-points-lines", title: "Точка, пряма, відрізок" },
        { id: "02-angles", title: "Кути" },
        { id: "03-triangles", title: "Трикутники" },
        { id: "04-quadrilaterals", title: "Чотирикутники" },
        { id: "05-circle", title: "Коло і круг" },
        { id: "06-perimeter", title: "Периметр" },
        { id: "07-area", title: "Площа" },
        { id: "08-volume", title: "Об'єм" },
        { id: "09-geometry-review", title: "Повторення: Геометрія" },
      ],
    },
    "9-percentages": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-percentage", title: "Що таке відсоток?" },
        { id: "02-finding-percentage", title: "Знаходження відсотка від числа" },
        { id: "03-finding-number-by-percentage", title: "Знаходження числа за відсотком" },
        { id: "04-percentage-ratio", title: "Знаходження відсоткового відношення" },
        { id: "05-percentages-in-finance", title: "Відсотки у фінансах" },
        { id: "06-percentages-review", title: "Повторення: Відсотки" },
      ],
    },
    "10-negative-numbers": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-negative", title: "Що таке від'ємні числа?" },
        { id: "02-adding-subtracting-negatives", title: "Додавання і віднімання від'ємних чисел" },
        { id: "03-multiplying-dividing-negatives", title: "Множення і ділення від'ємних чисел" },
        { id: "04-coordinate-plane", title: "Координатна пряма і площина" },
        { id: "05-negative-numbers-review", title: "Повторення: Від'ємні числа" },
      ],
    },
    "11-powers-roots": {
      subject: "Математика",
      lessons: [
        { id: "01-powers", title: "Степені" },
        { id: "02-roots", title: "Корені" },
        { id: "03-scientific-notation", title: "Наукова нотація" },
        { id: "04-powers-roots-review", title: "Повторення: Степені і корені" },
      ],
    },
    "12-ratios": {
      subject: "Математика",
      lessons: [
        { id: "01-ratios", title: "Відношення" },
        { id: "02-proportions", title: "Пропорції" },
        { id: "03-ratios-review", title: "Повторення: Пропорції і відношення" },
      ],
    },
    "13-equations": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-equation", title: "Що таке рівняння?" },
        { id: "02-equations-brackets-fractions", title: "Рівняння з дужками і дробами" },
        { id: "03-word-problems", title: "Текстові задачі через рівняння" },
        { id: "04-equations-review", title: "Повторення: Рівняння першого ступеня" },
      ],
    },
    "14-inequalities": {
      subject: "Математика",
      lessons: [
        { id: "01-what-is-inequality", title: "Що таке нерівність?" },
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
      lessonId={`${subject}-${chapter}-${lesson}`}
      prev={prev ? { title: prev.title, href: `${base}/${prev.id}` } : undefined}
      next={next ? { title: next.title, href: `${base}/${next.id}` } : undefined}
    >
      {LessonContent && <LessonContent />}
    </LessonLayout>
  );
}