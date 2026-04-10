import { notFound } from "next/navigation";
import LearnShell from "@/components/learn/LearnShell";
import LessonPage from "@/components/lessons/LessonPage";
import type { Lesson } from "@/types";
import { getAdjacentLessons, getLessonUrl, lessonRegistry } from "@/data/registry";
import { getSubject, getCourse } from "@/data/subjects";
import { getLessonProgressId } from "@/lib/learningCatalog";
import { getOperatorLesson } from "@/data/python/operator-lessons";
import { getPythonPlaceholderLesson } from "@/data/python/placeholderCatalog";

const lessonLoaderMap: Record<string, () => Promise<Lesson | null>> = {
    // ── Python foundations ────────────────────────────────────────────────────
    "programming-languages/python/python-foundations/01-python-introduction": () =>
        import("@/data/python/01-python-introduction").then(m => m.default as Lesson),
    "programming-languages/python/python-foundations/02-python-environment": () =>
        import("@/data/python/02-python-environment").then(m => m.default as Lesson),
    "programming-languages/python/python-foundations/03-installers-conda": () =>
        import("@/data/python/03-installers-conda").then(m => m.default as Lesson),
    "programming-languages/python/python-foundations/04-python-repl-and-terminal": () =>
        import("@/data/python/04-python-repl-and-terminal").then(m => m.default as Lesson),
    "programming-languages/python/python-foundations/05-python-editors-vscode": () =>
        import("@/data/python/05-python-editors-vscode").then(m => m.default as Lesson),
    // ── Python basics ─────────────────────────────────────────────────────────
    "programming-languages/python/python-basics/06-first-program": () =>
        import("@/data/python/03-first-program").then(m => m.default as Lesson),
    "programming-languages/python/python-basics/07-variables-and-assignment": () =>
        import("@/data/python/04-variables-and-input").then(m => m.default as Lesson),
    "programming-languages/python/python-basics/08-typing-and-object-properties": () =>
        import("@/data/python/08-typing-and-object-properties").then(m => m.default as Lesson),
    "programming-languages/python/python-basics/09-numeric-types-and-literals": () =>
        import("@/data/python/09-numeric-types-and-literals").then(m => m.default as Lesson),
    "programming-languages/python/python-basics/10-other-basic-data-types": () =>
        import("@/data/python/10-other-basic-data-types").then(m => m.default as Lesson),
    // ── Python operators ──────────────────────────────────────────────────────
    "programming-languages/python/python-operators/11-arithmetic-operators": () =>
        Promise.resolve(getOperatorLesson("11-arithmetic-operators")),
    "programming-languages/python/python-operators/12-comparison-identity-membership": () =>
        Promise.resolve(getOperatorLesson("12-comparison-identity-membership")),
    "programming-languages/python/python-operators/13-logical-and-bitwise-operators": () =>
        Promise.resolve(getOperatorLesson("13-logical-and-bitwise-operators")),
    "programming-languages/python/python-operators/14-special-operators-and-overloading": () =>
        Promise.resolve(getOperatorLesson("14-special-operators-and-overloading")),
    // ── Python strings ────────────────────────────────────────────────────────
    "programming-languages/python/python-strings/15-strings-basics-creation-escaping": () =>
        import("@/data/python/15-strings-basics-creation-escaping").then(m => m.default as Lesson),
    "programming-languages/python/python-strings/16-string-operations-indexing-slicing": () =>
        import("@/data/python/16-string-operations-indexing-slicing").then(m => m.default as Lesson),
    "programming-languages/python/python-strings/17-string-methods-formatting-search": () =>
        import("@/data/python/17-string-methods-formatting-search").then(m => m.default as Lesson),
    "programming-languages/python/python-strings/18-string-methods-content-checks": () =>
        import("@/data/python/18-string-methods-content-checks").then(m => m.default as Lesson),
    "programming-languages/python/python-strings/19-string-formatting-and-interpolation": () =>
        import("@/data/python/19-string-formatting-and-interpolation").then(m => m.default as Lesson),
    "programming-languages/python/python-strings/20-string-encoding-and-memory": () =>
        import("@/data/python/20-string-encoding-and-memory").then(m => m.default as Lesson),
    // ── Python flow ───────────────────────────────────────────────────────────
    "programming-languages/python/python-flow-functions/21-conditional-statements": () =>
        import("@/data/python/21-conditional-statements").then(m => m.default as Lesson),
    "programming-languages/python/python-flow-functions/22-pattern-matching": () =>
        import("@/data/python/22-pattern-matching").then(m => m.default as Lesson),
    "programming-languages/python/python-flow-functions/23-loops-and-iteration": () =>
        import("@/data/python/23-loops-and-iteration").then(m => m.default as Lesson),
    "programming-languages/python/python-flow-functions/24-loop-control": () =>
        import("@/data/python/24-loop-control").then(m => m.default as Lesson),
    "programming-languages/python/python-flow-functions/25-iteration-helpers": () =>
        import("@/data/python/25-iteration-helpers").then(m => m.default as Lesson),
    // ── Python functions ──────────────────────────────────────────────────────
    "programming-languages/python/python-functions/26-function-basics": () =>
        import("@/data/python/26-function-basics").then(m => m.default as Lesson),
    "programming-languages/python/python-functions/27-function-arguments-and-parameters": () =>
        import("@/data/python/27-function-arguments-and-parameters").then(m => m.default as Lesson),
    "programming-languages/python/python-functions/28-variable-scope": () =>
        import("@/data/python/28-variable-scope").then(m => m.default as Lesson),
    "programming-languages/python/python-functions/29-first-class-functions-lambdas-closures": () =>
        import("@/data/python/29-first-class-functions-lambdas-closures").then(m => m.default as Lesson),
    "programming-languages/python/python-functions/30-recursion": () =>
        import("@/data/python/30-recursion").then(m => m.default as Lesson),
    "programming-languages/python/python-functions/31-docstrings-annotations-introspection": () =>
        import("@/data/python/31-docstrings-annotations-introspection").then(m => m.default as Lesson),
    // ── Python data structures ────────────────────────────────────────────────
    "programming-languages/python/python-data-structures/32-lists": () =>
        import("@/data/python/32-lists").then(m => m.default as Lesson),
    "programming-languages/python/python-data-structures/33-tuples": () =>
        import("@/data/python/33-tuples").then(m => m.default as Lesson),
    "programming-languages/python/python-data-structures/34-dictionaries": () =>
        import("@/data/python/34-dictionaries").then(m => m.default as Lesson),
    "programming-languages/python/python-data-structures/35-sets": () =>
        import("@/data/python/35-sets").then(m => m.default as Lesson),
    "programming-languages/python/python-data-structures/36-ranges": () =>
        import("@/data/python/36-ranges").then(m => m.default as Lesson),
    // ── Python comprehensions ─────────────────────────────────────────────────
    "programming-languages/python/python-comprehensions/37-comprehensions-basics": () =>
        import("@/data/python/37-comprehensions-basics").then(m => m.default as Lesson),
    "programming-languages/python/python-comprehensions/38-generator-expressions-and-optimization": () =>
        import("@/data/python/38-generator-expressions-and-optimization").then(m => m.default as Lesson),
    "programming-languages/python/python-comprehensions/39-advanced-comprehension-techniques": () =>
        import("@/data/python/39-advanced-comprehension-techniques").then(m => m.default as Lesson),
    // ── Python iterators & generators ─────────────────────────────────────────
    "programming-languages/python/python-iterators-generators/40-iterator-protocol": () =>
        import("@/data/python/40-iterator-protocol").then(m => m.default as Lesson),
    "programming-languages/python/python-iterators-generators/41-generator-functions": () =>
        import("@/data/python/41-generator-functions").then(m => m.default as Lesson),
    "programming-languages/python/python-iterators-generators/42-itertools-module": () =>
        import("@/data/python/42-itertools-module").then(m => m.default as Lesson),
    "programming-languages/python/python-iterators-generators/43-functools-module": () =>
        import("@/data/python/43-functools-module").then(m => m.default as Lesson),
    // ── Math: numbers ─────────────────────────────────────────────────────────
    "math/arithmetic/01-number-representation/01-what-is-number": () =>
        import("@/data/math/arithmetic/01-number-representation/01-what-is-number").then(m => m.default as Lesson),
    "math/arithmetic/01-number-representation/02-counting-and-natural-sequence": () =>
        import("@/data/math/arithmetic/01-number-representation/02-counting-and-natural-sequence").then(m => m.default as Lesson),
    "math/arithmetic/01-number-representation/03-place-value-and-decimal-system": () =>
        import("@/data/math/arithmetic/01-number-representation/03-place-value-and-decimal-system").then(m => m.default as Lesson),
    "math/arithmetic/01-number-representation/04-comparing-numbers-and-number-line": () =>
        import("@/data/math/arithmetic/01-number-representation/04-comparing-numbers-and-number-line").then(m => m.default as Lesson),
    "math/arithmetic/01-number-representation/05-rounding-and-estimation": () =>
        import("@/data/math/arithmetic/01-number-representation/05-rounding-and-estimation").then(m => m.default as Lesson),
    "math/arithmetic/01-number-representation/06-other-numeral-systems": () =>
        import("@/data/math/arithmetic/01-number-representation/06-other-numeral-systems").then(m => m.default as Lesson),
    "math/arithmetic/01-numbers/01-number-basics": () =>
        import("@/data/math/arithmetic/01-numbers/01-number-basics").then(m => m.default as Lesson),
    "math/arithmetic/01-numbers/02-counting": () =>
        import("@/data/math/arithmetic/01-numbers/02-counting").then(m => m.default as Lesson),
    "math/arithmetic/01-numbers/03-symbols-and-notation": () =>
        import("@/data/math/arithmetic/01-numbers/03-symbols-and-notation").then(m => m.default as Lesson),
    "math/arithmetic/01-numbers/04-comparing-ordering": () =>
        import("@/data/math/arithmetic/01-numbers/04-comparing-ordering").then(m => m.default as Lesson),
    "math/arithmetic/01-numbers/05-number-line": () =>
        import("@/data/math/arithmetic/01-numbers/05-number-line").then(m => m.default as Lesson),
    "math/arithmetic/01-numbers/06-even-odd": () =>
        import("@/data/math/arithmetic/01-numbers/06-even-odd").then(m => m.default as Lesson),
    "math/arithmetic/01-numbers/07-other-number-systems": () =>
        import("@/data/math/arithmetic/01-numbers/07-other-number-systems").then(m => m.default as Lesson),
    // ── Math: place value ─────────────────────────────────────────────────────
    "math/arithmetic/02-place-value/08-decimal-system": () =>
        import("@/data/math/arithmetic/02-place-value/08-decimal-system").then(m => m.default as Lesson),
    "math/arithmetic/02-place-value/09-reading-writing-numbers": () =>
        import("@/data/math/arithmetic/02-place-value/09-reading-writing-numbers").then(m => m.default as Lesson),
    "math/arithmetic/02-place-value/10-digit-value-regrouping": () =>
        import("@/data/math/arithmetic/02-place-value/10-digit-value-regrouping").then(m => m.default as Lesson),
    "math/arithmetic/02-place-value/11-comparing-ordering": () =>
        import("@/data/math/arithmetic/02-place-value/11-comparing-ordering").then(m => m.default as Lesson),
    "math/arithmetic/02-place-value/12-rounding-estimation": () =>
        import("@/data/math/arithmetic/02-place-value/12-rounding-estimation").then(m => m.default as Lesson),
    "math/arithmetic/02-place-value/13-powers-of-ten": () =>
        import("@/data/math/arithmetic/02-place-value/13-powers-of-ten").then(m => m.default as Lesson),
    // ── Math: addition ────────────────────────────────────────────────────────
    "math/arithmetic/03-addition/14-addition-basics": () =>
        import("@/data/math/arithmetic/03-addition/14-addition-basics").then(m => m.default as Lesson),
    "math/arithmetic/03-addition/15-addition-properties": () =>
        import("@/data/math/arithmetic/03-addition/15-addition-properties").then(m => m.default as Lesson),
    "math/arithmetic/03-addition/16-mental-addition": () =>
        import("@/data/math/arithmetic/03-addition/16-mental-addition").then(m => m.default as Lesson),
    "math/arithmetic/03-addition/17-column-addition": () =>
        import("@/data/math/arithmetic/03-addition/17-column-addition").then(m => m.default as Lesson),
    "math/arithmetic/03-addition/18-addition-applications": () =>
        import("@/data/math/arithmetic/03-addition/18-addition-applications").then(m => m.default as Lesson),
    // ── Math: subtraction ─────────────────────────────────────────────────────
    "math/arithmetic/04-subtraction/19-subtraction-basics": () =>
        import("@/data/math/arithmetic/04-subtraction/19-subtraction-basics").then(m => m.default as Lesson),
    "math/arithmetic/04-subtraction/20-subtraction-properties": () =>
        import("@/data/math/arithmetic/04-subtraction/20-subtraction-properties").then(m => m.default as Lesson),
    "math/arithmetic/04-subtraction/21-mental-subtraction": () =>
        import("@/data/math/arithmetic/04-subtraction/21-mental-subtraction").then(m => m.default as Lesson),
    "math/arithmetic/04-subtraction/22-column-subtraction": () =>
        import("@/data/math/arithmetic/04-subtraction/22-column-subtraction").then(m => m.default as Lesson),
    "math/arithmetic/04-subtraction/23-subtraction-applications": () =>
        import("@/data/math/arithmetic/04-subtraction/23-subtraction-applications").then(m => m.default as Lesson),
    // ── Math: multiplication ──────────────────────────────────────────────────
    "math/arithmetic/05-multiplication/24-multiplication-basics": () =>
        import("@/data/math/arithmetic/05-multiplication/24-multiplication-basics").then(m => m.default as Lesson),
    "math/arithmetic/05-multiplication/25-multiplication-properties": () =>
        import("@/data/math/arithmetic/05-multiplication/25-multiplication-properties").then(m => m.default as Lesson),
    "math/arithmetic/05-multiplication/26-multiplication-table": () =>
        import("@/data/math/arithmetic/05-multiplication/26-multiplication-table").then(m => m.default as Lesson),
    "math/arithmetic/05-multiplication/27-multi-digit-multiplication": () =>
        import("@/data/math/arithmetic/05-multiplication/27-multi-digit-multiplication").then(m => m.default as Lesson),
    "math/arithmetic/05-multiplication/28-mental-multiplication": () =>
        import("@/data/math/arithmetic/05-multiplication/28-mental-multiplication").then(m => m.default as Lesson),
    "math/arithmetic/05-multiplication/29-multiplication-applications": () =>
        import("@/data/math/arithmetic/05-multiplication/29-multiplication-applications").then(m => m.default as Lesson),
    // ── Math: division ────────────────────────────────────────────────────────
    "math/arithmetic/06-division/30-division-basics": () =>
        import("@/data/math/arithmetic/06-division/30-division-basics").then(m => m.default as Lesson),
    "math/arithmetic/06-division/31-division-properties": () =>
        import("@/data/math/arithmetic/06-division/31-division-properties").then(m => m.default as Lesson),
    "math/arithmetic/06-division/32-division-remainder": () =>
        import("@/data/math/arithmetic/06-division/32-division-remainder").then(m => m.default as Lesson),
    "math/arithmetic/06-division/33-long-division": () =>
        import("@/data/math/arithmetic/06-division/33-long-division").then(m => m.default as Lesson),
    "math/arithmetic/06-division/34-divisibility": () =>
        import("@/data/math/arithmetic/06-division/34-divisibility").then(m => m.default as Lesson),
    "math/arithmetic/06-division/35-division-applications": () =>
        import("@/data/math/arithmetic/06-division/35-division-applications").then(m => m.default as Lesson),
    // ── Math: integers ────────────────────────────────────────────────────────
    "math/arithmetic/07-integers/36-negative-numbers": () =>
        import("@/data/math/arithmetic/07-integers/36-negative-numbers").then(m => m.default as Lesson),
    "math/arithmetic/07-integers/37-absolute-value": () =>
        import("@/data/math/arithmetic/07-integers/37-absolute-value").then(m => m.default as Lesson),
    "math/arithmetic/07-integers/38-adding-subtracting-integers": () =>
        import("@/data/math/arithmetic/07-integers/38-adding-subtracting-integers").then(m => m.default as Lesson),
    "math/arithmetic/07-integers/39-multiplying-dividing-integers": () =>
        import("@/data/math/arithmetic/07-integers/39-multiplying-dividing-integers").then(m => m.default as Lesson),
    "math/arithmetic/07-integers/40-integers-applications": () =>
        import("@/data/math/arithmetic/07-integers/40-integers-applications").then(m => m.default as Lesson),
    // ── Math: order of operations ─────────────────────────────────────────────
    "math/arithmetic/08-order-of-operations/41-order-basics": () =>
        import("@/data/math/arithmetic/08-order-of-operations/41-order-basics").then(m => m.default as Lesson),
    "math/arithmetic/08-order-of-operations/42-pemdas": () =>
        import("@/data/math/arithmetic/08-order-of-operations/42-pemdas").then(m => m.default as Lesson),
    "math/arithmetic/08-order-of-operations/43-nested-parentheses": () =>
        import("@/data/math/arithmetic/08-order-of-operations/43-nested-parentheses").then(m => m.default as Lesson),
    "math/arithmetic/08-order-of-operations/44-expressions-variables": () =>
        import("@/data/math/arithmetic/08-order-of-operations/44-expressions-variables").then(m => m.default as Lesson),
    "math/arithmetic/08-order-of-operations/45-order-applications": () =>
        import("@/data/math/arithmetic/08-order-of-operations/45-order-applications").then(m => m.default as Lesson),
    // ── Math: factors & multiples ─────────────────────────────────────────────
    "math/arithmetic/09-factors-multiples/46-factors-divisors": () =>
        import("@/data/math/arithmetic/09-factors-multiples/46-factors-divisors").then(m => m.default as Lesson),
    "math/arithmetic/09-factors-multiples/47-multiples": () =>
        import("@/data/math/arithmetic/09-factors-multiples/47-multiples").then(m => m.default as Lesson),
    "math/arithmetic/09-factors-multiples/48-prime-composite": () =>
        import("@/data/math/arithmetic/09-factors-multiples/48-prime-composite").then(m => m.default as Lesson),
    "math/arithmetic/09-factors-multiples/49-prime-factorization": () =>
        import("@/data/math/arithmetic/09-factors-multiples/49-prime-factorization").then(m => m.default as Lesson),
    "math/arithmetic/09-factors-multiples/50-gcd-lcm": () =>
        import("@/data/math/arithmetic/09-factors-multiples/50-gcd-lcm").then(m => m.default as Lesson),
    // ── Math: fractions intro ─────────────────────────────────────────────────
    "math/arithmetic/10-fractions-intro/51-fraction-basics": () =>
        import("@/data/math/arithmetic/10-fractions-intro/51-fraction-basics").then(m => m.default as Lesson),
    "math/arithmetic/10-fractions-intro/52-equivalent-fractions": () =>
        import("@/data/math/arithmetic/10-fractions-intro/52-equivalent-fractions").then(m => m.default as Lesson),
    "math/arithmetic/10-fractions-intro/53-comparing-fractions": () =>
        import("@/data/math/arithmetic/10-fractions-intro/53-comparing-fractions").then(m => m.default as Lesson),
    "math/arithmetic/10-fractions-intro/54-mixed-numbers": () =>
        import("@/data/math/arithmetic/10-fractions-intro/54-mixed-numbers").then(m => m.default as Lesson),
    "math/arithmetic/10-fractions-intro/55-fractions-number-line": () =>
        import("@/data/math/arithmetic/10-fractions-intro/55-fractions-number-line").then(m => m.default as Lesson),
    // ── Math: fractions arithmetic ────────────────────────────────────────────
    "math/arithmetic/11-fractions-arithmetic/56-adding-fractions": () =>
        import("@/data/math/arithmetic/11-fractions-arithmetic/56-adding-fractions").then(m => m.default as Lesson),
    "math/arithmetic/11-fractions-arithmetic/57-subtracting-fractions": () =>
        import("@/data/math/arithmetic/11-fractions-arithmetic/57-subtracting-fractions").then(m => m.default as Lesson),
    "math/arithmetic/11-fractions-arithmetic/58-multiplying-fractions": () =>
        import("@/data/math/arithmetic/11-fractions-arithmetic/58-multiplying-fractions").then(m => m.default as Lesson),
    "math/arithmetic/11-fractions-arithmetic/59-dividing-fractions": () =>
        import("@/data/math/arithmetic/11-fractions-arithmetic/59-dividing-fractions").then(m => m.default as Lesson),
    "math/arithmetic/11-fractions-arithmetic/60-mixed-number-operations": () =>
        import("@/data/math/arithmetic/11-fractions-arithmetic/60-mixed-number-operations").then(m => m.default as Lesson),
    "math/arithmetic/11-fractions-arithmetic/61-fractions-applications": () =>
        import("@/data/math/arithmetic/11-fractions-arithmetic/61-fractions-applications").then(m => m.default as Lesson),
    // ── Math: decimals ────────────────────────────────────────────────────────
    "math/arithmetic/12-decimals/62-decimal-basics": () =>
        import("@/data/math/arithmetic/12-decimals/62-decimal-basics").then(m => m.default as Lesson),
    "math/arithmetic/12-decimals/63-decimal-operations": () =>
        import("@/data/math/arithmetic/12-decimals/63-decimal-operations").then(m => m.default as Lesson),
    "math/arithmetic/12-decimals/64-decimal-fractions-connection": () =>
        import("@/data/math/arithmetic/12-decimals/64-decimal-fractions-connection").then(m => m.default as Lesson),
    "math/arithmetic/12-decimals/65-repeating-decimals": () =>
        import("@/data/math/arithmetic/12-decimals/65-repeating-decimals").then(m => m.default as Lesson),
    "math/arithmetic/12-decimals/66-rounding-decimals": () =>
        import("@/data/math/arithmetic/12-decimals/66-rounding-decimals").then(m => m.default as Lesson),
    "math/arithmetic/12-decimals/67-decimals-applications": () =>
        import("@/data/math/arithmetic/12-decimals/67-decimals-applications").then(m => m.default as Lesson),
    // ── Math: ratios ──────────────────────────────────────────────────────────
    "math/arithmetic/13-ratios/68-ratio-basics": () =>
        import("@/data/math/arithmetic/13-ratios/68-ratio-basics").then(m => m.default as Lesson),
    "math/arithmetic/13-ratios/69-proportions": () =>
        import("@/data/math/arithmetic/13-ratios/69-proportions").then(m => m.default as Lesson),
    "math/arithmetic/13-ratios/70-direct-inverse-proportion": () =>
        import("@/data/math/arithmetic/13-ratios/70-direct-inverse-proportion").then(m => m.default as Lesson),
    "math/arithmetic/13-ratios/71-ratio-applications": () =>
        import("@/data/math/arithmetic/13-ratios/71-ratio-applications").then(m => m.default as Lesson),
    // ── Math: percentages ─────────────────────────────────────────────────────
    "math/arithmetic/14-percentages/75-percent-basics": () =>
        import("@/data/math/arithmetic/14-percentages/75-percent-basics").then(m => m.default as Lesson),
    "math/arithmetic/14-percentages/76-mental-percent": () =>
        import("@/data/math/arithmetic/14-percentages/76-mental-percent").then(m => m.default as Lesson),
    "math/arithmetic/14-percentages/77-percent-problems": () =>
        import("@/data/math/arithmetic/14-percentages/77-percent-problems").then(m => m.default as Lesson),
    "math/arithmetic/14-percentages/78-percent-change": () =>
        import("@/data/math/arithmetic/14-percentages/78-percent-change").then(m => m.default as Lesson),
    "math/arithmetic/14-percentages/79-financial-percent": () =>
        import("@/data/math/arithmetic/14-percentages/79-financial-percent").then(m => m.default as Lesson),
    "math/arithmetic/14-percentages/80-interest-rates": () =>
        import("@/data/math/arithmetic/14-percentages/80-interest-rates").then(m => m.default as Lesson),
    // ── Math: powers & roots ──────────────────────────────────────────────────
    "math/arithmetic/15-powers-roots/81-exponent-basics": () =>
        import("@/data/math/arithmetic/15-powers-roots/81-exponent-basics").then(m => m.default as Lesson),
    "math/arithmetic/15-powers-roots/82-common-powers": () =>
        import("@/data/math/arithmetic/15-powers-roots/82-common-powers").then(m => m.default as Lesson),
    "math/arithmetic/15-powers-roots/83-exponent-rules": () =>
        import("@/data/math/arithmetic/15-powers-roots/83-exponent-rules").then(m => m.default as Lesson),
    "math/arithmetic/15-powers-roots/84-square-roots": () =>
        import("@/data/math/arithmetic/15-powers-roots/84-square-roots").then(m => m.default as Lesson),
    "math/arithmetic/15-powers-roots/85-cube-roots": () =>
        import("@/data/math/arithmetic/15-powers-roots/85-cube-roots").then(m => m.default as Lesson),
    "math/arithmetic/15-powers-roots/86-rational-irrational": () =>
        import("@/data/math/arithmetic/15-powers-roots/86-rational-irrational").then(m => m.default as Lesson),
    // ── Math: measurements ────────────────────────────────────────────────────
    "math/arithmetic/16-measurements/87-length": () =>
        import("@/data/math/arithmetic/16-measurements/87-length").then(m => m.default as Lesson),
    "math/arithmetic/16-measurements/88-weight-mass": () =>
        import("@/data/math/arithmetic/16-measurements/88-weight-mass").then(m => m.default as Lesson),
    "math/arithmetic/16-measurements/89-time-temperature": () =>
        import("@/data/math/arithmetic/16-measurements/89-time-temperature").then(m => m.default as Lesson),
    // ── Math: real numbers ────────────────────────────────────────────────────
    "math/arithmetic/17-real-numbers/90-real-number-system": () =>
        import("@/data/math/arithmetic/17-real-numbers/90-real-number-system").then(m => m.default as Lesson),
    "math/arithmetic/17-real-numbers/91-rational-representations": () =>
        import("@/data/math/arithmetic/17-real-numbers/91-rational-representations").then(m => m.default as Lesson),
    "math/arithmetic/17-real-numbers/92-irrational-numbers": () =>
        import("@/data/math/arithmetic/17-real-numbers/92-irrational-numbers").then(m => m.default as Lesson),
    "math/arithmetic/17-real-numbers/93-rational-arithmetic": () =>
        import("@/data/math/arithmetic/17-real-numbers/93-rational-arithmetic").then(m => m.default as Lesson),
    "math/arithmetic/17-real-numbers/94-rational-properties": () =>
        import("@/data/math/arithmetic/17-real-numbers/94-rational-properties").then(m => m.default as Lesson),
    // ── Math algebra ──────────────────────────────────────────────────────────
    "math/algebra/01-algebraic-thinking/01-what-is-algebra": () =>
        import("@/data/math/algebra/01-algebraic-thinking/01-what-is-algebra").then(m => m.default as Lesson),
    "math/algebra/01-algebraic-thinking/02-algebra-vocabulary": () =>
        import("@/data/math/algebra/01-algebraic-thinking/02-algebra-vocabulary").then(m => m.default as Lesson),
    "math/algebra/01-algebraic-thinking/03-multiplication-division-notation": () =>
        import("@/data/math/algebra/01-algebraic-thinking/03-multiplication-division-notation").then(m => m.default as Lesson),
    "math/algebra/01-algebraic-thinking/04-associative-commutative-transitive": () =>
        import("@/data/math/algebra/01-algebraic-thinking/04-associative-commutative-transitive").then(m => m.default as Lesson),
    "math/algebra/01-algebraic-thinking/05-like-terms-and-monomials": () =>
        import("@/data/math/algebra/01-algebraic-thinking/05-like-terms-and-monomials").then(m => m.default as Lesson),
    "math/algebra/01-algebraic-thinking/06-distributive-property": () =>
        import("@/data/math/algebra/01-algebraic-thinking/06-distributive-property").then(m => m.default as Lesson),
    "math/algebra/01-algebraic-thinking/07-substitution-and-inverse-operations": () =>
        import("@/data/math/algebra/01-algebraic-thinking/07-substitution-and-inverse-operations").then(m => m.default as Lesson),
    "math/algebra/01-algebraic-thinking/08-equations-and-balance": () =>
        import("@/data/math/algebra/01-algebraic-thinking/08-equations-and-balance").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/09-one-step-equations": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/09-one-step-equations").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/10-multi-step-equations": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/10-multi-step-equations").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/11-equations-with-variables-on-both-sides": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/11-equations-with-variables-on-both-sides").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/12-equations-with-fractions": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/12-equations-with-fractions").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/13-identities-and-no-solution-equations": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/13-identities-and-no-solution-equations").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/14-introduction-to-inequalities": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/14-introduction-to-inequalities").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/15-linear-inequalities": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/15-linear-inequalities").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/16-compound-inequalities-and-intervals": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/16-compound-inequalities-and-intervals").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/17-absolute-value-equations-and-inequalities": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/17-absolute-value-equations-and-inequalities").then(m => m.default as Lesson),
    "math/algebra/02-linear-equations-inequalities/18-word-problems-with-equations-and-inequalities": () =>
        import("@/data/math/algebra/02-linear-equations-inequalities/18-word-problems-with-equations-and-inequalities").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/19-coordinate-plane": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/19-coordinate-plane").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/20-graphing-points-and-reading-graphs": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/20-graphing-points-and-reading-graphs").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/21-what-is-a-function": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/21-what-is-a-function").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/22-linear-function-slope-intercept": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/22-linear-function-slope-intercept").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/23-slope-as-rate-of-change": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/23-slope-as-rate-of-change").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/24-graphing-linear-functions": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/24-graphing-linear-functions").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/25-horizontal-vertical-lines": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/25-horizontal-vertical-lines").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/26-parallel-and-perpendicular-lines": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/26-parallel-and-perpendicular-lines").then(m => m.default as Lesson),
    "math/algebra/03-coordinate-plane-linear-functions/27-equation-of-a-line-from-two-points": () =>
        import("@/data/math/algebra/03-coordinate-plane-linear-functions/27-equation-of-a-line-from-two-points").then(m => m.default as Lesson),
    "math/algebra/04-systems-of-linear-equations/28-what-is-a-system": () =>
        import("@/data/math/algebra/04-systems-of-linear-equations/28-what-is-a-system").then(m => m.default as Lesson),
    "math/algebra/04-systems-of-linear-equations/29-graphical-solving-of-systems": () =>
        import("@/data/math/algebra/04-systems-of-linear-equations/29-graphical-solving-of-systems").then(m => m.default as Lesson),
    "math/algebra/04-systems-of-linear-equations/30-substitution-method": () =>
        import("@/data/math/algebra/04-systems-of-linear-equations/30-substitution-method").then(m => m.default as Lesson),
    "math/algebra/04-systems-of-linear-equations/31-elimination-method": () =>
        import("@/data/math/algebra/04-systems-of-linear-equations/31-elimination-method").then(m => m.default as Lesson),
    "math/algebra/04-systems-of-linear-equations/32-special-cases-of-systems": () =>
        import("@/data/math/algebra/04-systems-of-linear-equations/32-special-cases-of-systems").then(m => m.default as Lesson),
    "math/algebra/04-systems-of-linear-equations/33-systems-word-problems": () =>
        import("@/data/math/algebra/04-systems-of-linear-equations/33-systems-word-problems").then(m => m.default as Lesson),
    "math/algebra/04-systems-of-linear-equations/34-systems-of-linear-inequalities": () =>
        import("@/data/math/algebra/04-systems-of-linear-equations/34-systems-of-linear-inequalities").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/35-exponents-basics": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/35-exponents-basics").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/36-exponent-rules": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/36-exponent-rules").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/37-zero-and-negative-exponents": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/37-zero-and-negative-exponents").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/38-scientific-notation": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/38-scientific-notation").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/39-what-is-a-polynomial": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/39-what-is-a-polynomial").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/40-adding-and-subtracting-polynomials": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/40-adding-and-subtracting-polynomials").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/41-multiplying-monomials-and-polynomials": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/41-multiplying-monomials-and-polynomials").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/42-multiplying-polynomials": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/42-multiplying-polynomials").then(m => m.default as Lesson),
    "math/algebra/05-exponents-and-polynomials/43-special-products": () =>
        import("@/data/math/algebra/05-exponents-and-polynomials/43-special-products").then(m => m.default as Lesson),
    "math/algebra/06-factoring/44-why-factoring-matters": () =>
        import("@/data/math/algebra/06-factoring/44-why-factoring-matters").then(m => m.default as Lesson),
    "math/algebra/06-factoring/45-greatest-common-factor": () =>
        import("@/data/math/algebra/06-factoring/45-greatest-common-factor").then(m => m.default as Lesson),
    "math/algebra/06-factoring/46-factoring-by-grouping": () =>
        import("@/data/math/algebra/06-factoring/46-factoring-by-grouping").then(m => m.default as Lesson),
    "math/algebra/06-factoring/47-difference-of-squares": () =>
        import("@/data/math/algebra/06-factoring/47-difference-of-squares").then(m => m.default as Lesson),
    "math/algebra/06-factoring/48-perfect-square-trinomials": () =>
        import("@/data/math/algebra/06-factoring/48-perfect-square-trinomials").then(m => m.default as Lesson),
    "math/algebra/06-factoring/49-factoring-quadratics-a-equals-1": () =>
        import("@/data/math/algebra/06-factoring/49-factoring-quadratics-a-equals-1").then(m => m.default as Lesson),
    "math/algebra/06-factoring/50-factoring-quadratics-general-case": () =>
        import("@/data/math/algebra/06-factoring/50-factoring-quadratics-general-case").then(m => m.default as Lesson),
    "math/algebra/06-factoring/51-mixed-factoring-strategies": () =>
        import("@/data/math/algebra/06-factoring/51-mixed-factoring-strategies").then(m => m.default as Lesson),
    "math/algebra/06-factoring/52-factoring-for-solving-equations": () =>
        import("@/data/math/algebra/06-factoring/52-factoring-for-solving-equations").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/53-domain-of-rational-expressions": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/53-domain-of-rational-expressions").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/54-simplifying-rational-expressions": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/54-simplifying-rational-expressions").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/55-multiplying-and-dividing-rational-expressions": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/55-multiplying-and-dividing-rational-expressions").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/56-common-denominators": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/56-common-denominators").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/57-adding-and-subtracting-rational-expressions": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/57-adding-and-subtracting-rational-expressions").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/58-complex-fractions": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/58-complex-fractions").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/59-rational-equations": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/59-rational-equations").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/60-extraneous-roots-in-rational-equations": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/60-extraneous-roots-in-rational-equations").then(m => m.default as Lesson),
    "math/algebra/07-rational-expressions-and-equations/61-rational-word-problems": () =>
        import("@/data/math/algebra/07-rational-expressions-and-equations/61-rational-word-problems").then(m => m.default as Lesson),
    "math/algebra/08-radicals-and-irrational-expressions/62-square-roots-basics": () =>
        import("@/data/math/algebra/08-radicals-and-irrational-expressions/62-square-roots-basics").then(m => m.default as Lesson),
    "math/algebra/08-radicals-and-irrational-expressions/63-simplifying-radicals": () =>
        import("@/data/math/algebra/08-radicals-and-irrational-expressions/63-simplifying-radicals").then(m => m.default as Lesson),
    "math/algebra/08-radicals-and-irrational-expressions/64-adding-and-subtracting-radicals": () =>
        import("@/data/math/algebra/08-radicals-and-irrational-expressions/64-adding-and-subtracting-radicals").then(m => m.default as Lesson),
    "math/algebra/08-radicals-and-irrational-expressions/65-multiplying-and-dividing-radicals": () =>
        import("@/data/math/algebra/08-radicals-and-irrational-expressions/65-multiplying-and-dividing-radicals").then(m => m.default as Lesson),
    "math/algebra/08-radicals-and-irrational-expressions/66-rationalizing-the-denominator": () =>
        import("@/data/math/algebra/08-radicals-and-irrational-expressions/66-rationalizing-the-denominator").then(m => m.default as Lesson),
    "math/algebra/08-radicals-and-irrational-expressions/67-fractional-exponents": () =>
        import("@/data/math/algebra/08-radicals-and-irrational-expressions/67-fractional-exponents").then(m => m.default as Lesson),
    "math/algebra/08-radicals-and-irrational-expressions/68-radical-equations": () =>
        import("@/data/math/algebra/08-radicals-and-irrational-expressions/68-radical-equations").then(m => m.default as Lesson),
    // ── CS: foundational & theoretical ───────────────────────────────────────
    "cs/foundational-theoretical-cs/history-of-computation/01-ancient-number-systems": () =>
        import("@/data/cs/foundational-theoretical-cs/history-of-computation/01-ancient-number-systems").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/history-of-computation/02-mechanical-era-of-computing": () =>
        import("@/data/cs/foundational-theoretical-cs/history-of-computation/02-mechanical-era-of-computing").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/history-of-computation/03-electromechanical-era-and-tabulators": () =>
        import("@/data/cs/foundational-theoretical-cs/history-of-computation/03-electromechanical-era-and-tabulators").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/history-of-computation/04-vacuum-tubes-and-first-computers": () =>
        import("@/data/cs/foundational-theoretical-cs/history-of-computation/04-vacuum-tubes-and-first-computers").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/history-of-computation/05-transistors-and-integrated-circuits": () =>
        import("@/data/cs/foundational-theoretical-cs/history-of-computation/05-transistors-and-integrated-circuits").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/history-of-computation/06-personal-computer-era": () =>
        import("@/data/cs/foundational-theoretical-cs/history-of-computation/06-personal-computer-era").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/history-of-computation/07-networks-internet-and-modern-era": () =>
        import("@/data/cs/foundational-theoretical-cs/history-of-computation/07-networks-internet-and-modern-era").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/history-of-computation/08-artificial-intelligence-and-modern-trends": () =>
        import("@/data/cs/foundational-theoretical-cs/history-of-computation/08-artificial-intelligence-and-modern-trends").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/mathematics-for-cs/09-what-is-math-for-cs": () =>
        import("@/data/cs/foundational-theoretical-cs/mathematics-for-cs/09-what-is-math-for-cs").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/mathematics-for-cs/10-logic-and-set-theory": () =>
        import("@/data/cs/foundational-theoretical-cs/mathematics-for-cs/10-logic-and-set-theory").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/mathematics-for-cs/11-number-systems-and-boolean-algebra": () =>
        import("@/data/cs/foundational-theoretical-cs/mathematics-for-cs/11-number-systems-and-boolean-algebra").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/mathematics-for-cs/12-combinatorics-and-graph-theory": () =>
        import("@/data/cs/foundational-theoretical-cs/mathematics-for-cs/12-combinatorics-and-graph-theory").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/mathematics-for-cs/13-probability-and-statistics-in-cs": () =>
        import("@/data/cs/foundational-theoretical-cs/mathematics-for-cs/13-probability-and-statistics-in-cs").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/mathematics-for-cs/14-linear-algebra-in-cs": () =>
        import("@/data/cs/foundational-theoretical-cs/mathematics-for-cs/14-linear-algebra-in-cs").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/computation-theory-and-automata/15-introduction-to-computation-theory": () =>
        import("@/data/cs/foundational-theoretical-cs/computation-theory-and-automata/15-introduction-to-computation-theory").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/computation-theory-and-automata/16-finite-automata": () =>
        import("@/data/cs/foundational-theoretical-cs/computation-theory-and-automata/16-finite-automata").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/computation-theory-and-automata/17-formal-languages-and-grammars": () =>
        import("@/data/cs/foundational-theoretical-cs/computation-theory-and-automata/17-formal-languages-and-grammars").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/computation-theory-and-automata/18-pushdown-automata": () =>
        import("@/data/cs/foundational-theoretical-cs/computation-theory-and-automata/18-pushdown-automata").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/computation-theory-and-automata/19-turing-machine": () =>
        import("@/data/cs/foundational-theoretical-cs/computation-theory-and-automata/19-turing-machine").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/computation-theory-and-automata/20-computability-and-undecidability": () =>
        import("@/data/cs/foundational-theoretical-cs/computation-theory-and-automata/20-computability-and-undecidability").then(m => m.default as Lesson),
    "cs/foundational-theoretical-cs/computation-theory-and-automata/21-complexity-theory": () =>
        import("@/data/cs/foundational-theoretical-cs/computation-theory-and-automata/21-complexity-theory").then(m => m.default as Lesson),
  };

async function loadLesson(key: string): Promise<Lesson | null> {
    try {
        const loader = lessonLoaderMap[key];
        if (loader) return await loader();
        return getPythonPlaceholderLesson(key);
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
    const lessonRef = lessonRegistry.find(
        (item) =>
            item.subject === subject &&
            item.course === course &&
            item.section === section &&
            item.lesson === lesson
    );
    if (!lessonRef) notFound();

    const lessonData = await loadLesson(key);

    if (!lessonData) notFound();

    const { prev, next } = getAdjacentLessons(subject, course, section, lesson);
    const subjectData = getSubject(subject);
    const courseData = getCourse(subject, course);

    const breadcrumbs = [
        { title: subjectData?.title ?? subject, href: `/learn/${subject}` },
        { title: courseData?.title ?? course, href: `/learn/${subject}/${course}` },
        { title: lessonData.title },
    ];

    return (
        <LearnShell
            subjectId={subject}
            courseId={course}
            title={lessonData.title}
            description={lessonData.description}
            breadcrumbs={breadcrumbs}
        >
            <LessonPage
                lesson={lessonData}
                lessonProgressId={getLessonProgressId({ subject, course, section, lesson })}
                prevLesson={prev ? { title: prev.title, href: getLessonUrl(prev) } : undefined}
                nextLesson={next ? { title: next.title, href: getLessonUrl(next) } : undefined}
            />
        </LearnShell>
    );
}
