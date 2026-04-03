import { notFound } from "next/navigation";
import LessonPage from "@/components/lessons/LessonPage";
import type { Lesson } from "@/types";
import { getAdjacentLessons, getLessonUrl } from "@/data/registry";
import { getSubject, getCourse } from "@/data/subjects";

async function loadLesson(key: string): Promise<Lesson | null> {
    try {
        switch (key) {
            case "math/arithmetic/01-numbers/01-number-basics": {
                const mod = await import("@/data/math/arithmetic/01-numbers/01-number-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/01-numbers/02-counting": {
                const mod = await import("@/data/math/arithmetic/01-numbers/02-counting");
                return mod.default as Lesson;
            }
            case "math/arithmetic/01-numbers/03-symbols-and-notation": {
                const mod = await import("@/data/math/arithmetic/01-numbers/03-symbols-and-notation");
                return mod.default as Lesson;
            }
            case "math/arithmetic/01-numbers/04-comparing-ordering": {
                const mod = await import("@/data/math/arithmetic/01-numbers/04-comparing-ordering");
                return mod.default as Lesson;
            }
            case "math/arithmetic/01-numbers/05-number-line": {
                const mod = await import("@/data/math/arithmetic/01-numbers/05-number-line");
                return mod.default as Lesson;
            }
            case "math/arithmetic/01-numbers/06-even-odd": {
                const mod = await import("@/data/math/arithmetic/01-numbers/06-even-odd");
                return mod.default as Lesson;
            }
            case "math/arithmetic/01-numbers/07-other-number-systems": {
                const mod = await import("@/data/math/arithmetic/01-numbers/07-other-number-systems");
                return mod.default as Lesson;
            }
            case "math/arithmetic/02-place-value/08-decimal-system": {
                const mod = await import("@/data/math/arithmetic/02-place-value/08-decimal-system");
                return mod.default as Lesson;
            }
            case "math/arithmetic/02-place-value/09-reading-writing-numbers": {
                const mod = await import("@/data/math/arithmetic/02-place-value/09-reading-writing-numbers");
                return mod.default as Lesson;
            }
            case "math/arithmetic/02-place-value/10-digit-value-regrouping": {
                const mod = await import("@/data/math/arithmetic/02-place-value/10-digit-value-regrouping");
                return mod.default as Lesson;
            }
            case "math/arithmetic/02-place-value/11-comparing-ordering": {
                const mod = await import("@/data/math/arithmetic/02-place-value/11-comparing-ordering");
                return mod.default as Lesson;
            }
            case "math/arithmetic/02-place-value/12-rounding-estimation": {
                const mod = await import("@/data/math/arithmetic/02-place-value/12-rounding-estimation");
                return mod.default as Lesson;
            }
            case "math/arithmetic/02-place-value/13-powers-of-ten": {
                const mod = await import("@/data/math/arithmetic/02-place-value/13-powers-of-ten");
                return mod.default as Lesson;
            }
            case "math/arithmetic/03-addition/14-addition-basics": {
                const mod = await import("@/data/math/arithmetic/03-addition/14-addition-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/03-addition/15-addition-properties": {
                const mod = await import("@/data/math/arithmetic/03-addition/15-addition-properties");
                return mod.default as Lesson;
            }
            case "math/arithmetic/03-addition/16-mental-addition": {
                const mod = await import("@/data/math/arithmetic/03-addition/16-mental-addition");
                return mod.default as Lesson;
            }
            case "math/arithmetic/03-addition/17-column-addition": {
                const mod = await import("@/data/math/arithmetic/03-addition/17-column-addition");
                return mod.default as Lesson;
            }
            case "math/arithmetic/03-addition/18-addition-applications": {
                const mod = await import("@/data/math/arithmetic/03-addition/18-addition-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/04-subtraction/19-subtraction-basics": {
                const mod = await import("@/data/math/arithmetic/04-subtraction/19-subtraction-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/04-subtraction/20-subtraction-properties": {
                const mod = await import("@/data/math/arithmetic/04-subtraction/20-subtraction-properties");
                return mod.default as Lesson;
            }
            case "math/arithmetic/04-subtraction/21-mental-subtraction": {
                const mod = await import("@/data/math/arithmetic/04-subtraction/21-mental-subtraction");
                return mod.default as Lesson;
            }
            case "math/arithmetic/04-subtraction/22-column-subtraction": {
                const mod = await import("@/data/math/arithmetic/04-subtraction/22-column-subtraction");
                return mod.default as Lesson;
            }
            case "math/arithmetic/04-subtraction/23-subtraction-applications": {
                const mod = await import("@/data/math/arithmetic/04-subtraction/23-subtraction-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/05-multiplication/24-multiplication-basics": {
                const mod = await import("@/data/math/arithmetic/05-multiplication/24-multiplication-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/05-multiplication/25-multiplication-properties": {
                const mod = await import("@/data/math/arithmetic/05-multiplication/25-multiplication-properties");
                return mod.default as Lesson;
            }
            case "math/arithmetic/05-multiplication/26-multiplication-table": {
                const mod = await import("@/data/math/arithmetic/05-multiplication/26-multiplication-table");
                return mod.default as Lesson;
            }
            case "math/arithmetic/05-multiplication/27-multi-digit-multiplication": {
                const mod = await import("@/data/math/arithmetic/05-multiplication/27-multi-digit-multiplication");
                return mod.default as Lesson;
            }
            case "math/arithmetic/05-multiplication/28-mental-multiplication": {
                const mod = await import("@/data/math/arithmetic/05-multiplication/28-mental-multiplication");
                return mod.default as Lesson;
            }
            case "math/arithmetic/05-multiplication/29-multiplication-applications": {
                const mod = await import("@/data/math/arithmetic/05-multiplication/29-multiplication-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/06-division/30-division-basics": {
                const mod = await import("@/data/math/arithmetic/06-division/30-division-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/06-division/31-division-properties": {
                const mod = await import("@/data/math/arithmetic/06-division/31-division-properties");
                return mod.default as Lesson;
            }
            case "math/arithmetic/06-division/32-division-remainder": {
                const mod = await import("@/data/math/arithmetic/06-division/32-division-remainder");
                return mod.default as Lesson;
            }
            case "math/arithmetic/06-division/33-long-division": {
                const mod = await import("@/data/math/arithmetic/06-division/33-long-division");
                return mod.default as Lesson;
            }
            case "math/arithmetic/06-division/34-divisibility": {
                const mod = await import("@/data/math/arithmetic/06-division/34-divisibility");
                return mod.default as Lesson;
            }
            case "math/arithmetic/06-division/35-division-applications": {
                const mod = await import("@/data/math/arithmetic/06-division/35-division-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/07-integers/36-negative-numbers": {
                const mod = await import("@/data/math/arithmetic/07-integers/36-negative-numbers");
                return mod.default as Lesson;
            }
            case "math/arithmetic/07-integers/37-absolute-value": {
                const mod = await import("@/data/math/arithmetic/07-integers/37-absolute-value");
                return mod.default as Lesson;
            }
            case "math/arithmetic/07-integers/38-adding-subtracting-integers": {
                const mod = await import("@/data/math/arithmetic/07-integers/38-adding-subtracting-integers");
                return mod.default as Lesson;
            }
            case "math/arithmetic/07-integers/39-multiplying-dividing-integers": {
                const mod = await import("@/data/math/arithmetic/07-integers/39-multiplying-dividing-integers");
                return mod.default as Lesson;
            }
            case "math/arithmetic/07-integers/40-integers-applications": {
                const mod = await import("@/data/math/arithmetic/07-integers/40-integers-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/08-order-of-operations/41-order-basics": {
                const mod = await import("@/data/math/arithmetic/08-order-of-operations/41-order-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/08-order-of-operations/42-pemdas": {
                const mod = await import("@/data/math/arithmetic/08-order-of-operations/42-pemdas");
                return mod.default as Lesson;
            }
            case "math/arithmetic/08-order-of-operations/43-nested-parentheses": {
                const mod = await import("@/data/math/arithmetic/08-order-of-operations/43-nested-parentheses");
                return mod.default as Lesson;
            }
            case "math/arithmetic/08-order-of-operations/44-expressions-variables": {
                const mod = await import("@/data/math/arithmetic/08-order-of-operations/44-expressions-variables");
                return mod.default as Lesson;
            }
            case "math/arithmetic/08-order-of-operations/45-order-applications": {
                const mod = await import("@/data/math/arithmetic/08-order-of-operations/45-order-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/09-factors-multiples/46-factors-divisors": {
                const mod = await import("@/data/math/arithmetic/09-factors-multiples/46-factors-divisors");
                return mod.default as Lesson;
            }
            case "math/arithmetic/09-factors-multiples/47-multiples": {
                const mod = await import("@/data/math/arithmetic/09-factors-multiples/47-multiples");
                return mod.default as Lesson;
            }
            case "math/arithmetic/09-factors-multiples/48-prime-composite": {
                const mod = await import("@/data/math/arithmetic/09-factors-multiples/48-prime-composite");
                return mod.default as Lesson;
            }
            case "math/arithmetic/09-factors-multiples/49-prime-factorization": {
                const mod = await import("@/data/math/arithmetic/09-factors-multiples/49-prime-factorization");
                return mod.default as Lesson;
            }
            case "math/arithmetic/09-factors-multiples/50-gcd-lcm": {
                const mod = await import("@/data/math/arithmetic/09-factors-multiples/50-gcd-lcm");
                return mod.default as Lesson;
            }
            case "math/arithmetic/10-fractions-intro/51-fraction-basics": {
                const mod = await import("@/data/math/arithmetic/10-fractions-intro/51-fraction-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/10-fractions-intro/52-equivalent-fractions": {
                const mod = await import("@/data/math/arithmetic/10-fractions-intro/52-equivalent-fractions");
                return mod.default as Lesson;
            }
            case "math/arithmetic/10-fractions-intro/53-comparing-fractions": {
                const mod = await import("@/data/math/arithmetic/10-fractions-intro/53-comparing-fractions");
                return mod.default as Lesson;
            }
            case "math/arithmetic/10-fractions-intro/54-mixed-numbers": {
                const mod = await import("@/data/math/arithmetic/10-fractions-intro/54-mixed-numbers");
                return mod.default as Lesson;
            }
            case "math/arithmetic/10-fractions-intro/55-fractions-number-line": {
                const mod = await import("@/data/math/arithmetic/10-fractions-intro/55-fractions-number-line");
                return mod.default as Lesson;
            }
            case "math/arithmetic/11-fractions-arithmetic/56-adding-fractions": {
                const mod = await import("@/data/math/arithmetic/11-fractions-arithmetic/56-adding-fractions");
                return mod.default as Lesson;
            }
            case "math/arithmetic/11-fractions-arithmetic/57-subtracting-fractions": {
                const mod = await import("@/data/math/arithmetic/11-fractions-arithmetic/57-subtracting-fractions");
                return mod.default as Lesson;
            }
            case "math/arithmetic/11-fractions-arithmetic/58-multiplying-fractions": {
                const mod = await import("@/data/math/arithmetic/11-fractions-arithmetic/58-multiplying-fractions");
                return mod.default as Lesson;
            }
            case "math/arithmetic/11-fractions-arithmetic/59-dividing-fractions": {
                const mod = await import("@/data/math/arithmetic/11-fractions-arithmetic/59-dividing-fractions");
                return mod.default as Lesson;
            }
            case "math/arithmetic/11-fractions-arithmetic/60-mixed-number-operations": {
                const mod = await import("@/data/math/arithmetic/11-fractions-arithmetic/60-mixed-number-operations");
                return mod.default as Lesson;
            }
            case "math/arithmetic/11-fractions-arithmetic/61-fractions-applications": {
                const mod = await import("@/data/math/arithmetic/11-fractions-arithmetic/61-fractions-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/12-decimals/62-decimal-basics": {
                const mod = await import("@/data/math/arithmetic/12-decimals/62-decimal-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/12-decimals/63-decimal-operations": {
                const mod = await import("@/data/math/arithmetic/12-decimals/63-decimal-operations");
                return mod.default as Lesson;
            }
            case "math/arithmetic/12-decimals/64-decimal-fractions-connection": {
                const mod = await import("@/data/math/arithmetic/12-decimals/64-decimal-fractions-connection");
                return mod.default as Lesson;
            }
            case "math/arithmetic/12-decimals/65-repeating-decimals": {
                const mod = await import("@/data/math/arithmetic/12-decimals/65-repeating-decimals");
                return mod.default as Lesson;
            }
            case "math/arithmetic/12-decimals/66-rounding-decimals": {
                const mod = await import("@/data/math/arithmetic/12-decimals/66-rounding-decimals");
                return mod.default as Lesson;
            }
            case "math/arithmetic/12-decimals/67-decimals-applications": {
                const mod = await import("@/data/math/arithmetic/12-decimals/67-decimals-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/13-ratios/68-ratio-basics": {
                const mod = await import("@/data/math/arithmetic/13-ratios/68-ratio-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/13-ratios/69-proportions": {
                const mod = await import("@/data/math/arithmetic/13-ratios/69-proportions");
                return mod.default as Lesson;
            }
            case "math/arithmetic/13-ratios/70-direct-inverse-proportion": {
                const mod = await import("@/data/math/arithmetic/13-ratios/70-direct-inverse-proportion");
                return mod.default as Lesson;
            }
            case "math/arithmetic/13-ratios/71-ratio-applications": {
                const mod = await import("@/data/math/arithmetic/13-ratios/71-ratio-applications");
                return mod.default as Lesson;
            }
            case "math/arithmetic/14-percentages/75-percent-basics": {
                const mod = await import("@/data/math/arithmetic/14-percentages/75-percent-basics");
                return mod.default as Lesson;
            }
            case "math/arithmetic/14-percentages/76-mental-percent": {
                const mod = await import("@/data/math/arithmetic/14-percentages/76-mental-percent");
                return mod.default as Lesson;
            }
            case "math/arithmetic/14-percentages/77-percent-problems": {
                const mod = await import("@/data/math/arithmetic/14-percentages/77-percent-problems");
                return mod.default as Lesson;
            }
            case "math/arithmetic/14-percentages/78-percent-change": {
                const mod = await import("@/data/math/arithmetic/14-percentages/78-percent-change");
                return mod.default as Lesson;
            }
            case "math/arithmetic/14-percentages/79-financial-percent": {
                const mod = await import("@/data/math/arithmetic/14-percentages/79-financial-percent");
                return mod.default as Lesson;
            }
            case "math/arithmetic/14-percentages/80-interest-rates": {
                const mod = await import("@/data/math/arithmetic/14-percentages/80-interest-rates");
                return mod.default as Lesson;
            }
            default:
                return null;
        }
    } catch {
        return null;
    }
}

interface Props {
    params: Promise<{
        subject: string;
        course: string;
        section: string;
        lesson: string;
    }>;
}

export default async function Page({ params }: Props) {
    const { subject, course, section, lesson } = await params;
    const key = `${subject}/${course}/${section}/${lesson}`;
    const lessonData = await loadLesson(key);

    if (!lessonData) notFound();

    const { prev, next } = getAdjacentLessons(subject, course, section, lesson);
    const subjectData = getSubject(subject);
    const courseData = getCourse(subject, course);

    const breadcrumbs = [
        { title: subjectData?.title ?? subject, href: `/learn/${subject}` },
        { title: courseData?.title ?? course, href: `/learn/${subject}/${course}` },
    ];

    return (
        <LessonPage
            lesson={lessonData}
            breadcrumbs={breadcrumbs}
            prevLesson={prev ? { title: prev.title, href: getLessonUrl(prev) } : undefined}
            nextLesson={next ? { title: next.title, href: getLessonUrl(next) } : undefined}
        />
    );
}