import { pythonPlaceholderSectionInfos } from "@/data/python/placeholderCatalog";

export interface CourseInfo {
    id: string;
    title: string;
    description: string;
    sections: SectionInfo[];
}

export interface SectionInfo {
    id: string;
    title: string;
}

export interface SubjectInfo {
    id: string;
    title: string;
    emoji: string;
    description: string;
    courses: CourseInfo[];
}

function createSections(
    items: Array<{ id: string; title: string }>
): SectionInfo[] {
    return items.map((item) => ({ id: item.id, title: item.title }));
}

const genericCourseSections = createSections([
    { id: "overview", title: "Огляд та вступ" },
    { id: "core-topics", title: "Основні теми" },
    { id: "practice", title: "Практика та застосування" },
]);

const programmingSections = createSections([
    { id: "syntax-basics", title: "Синтаксис та основи" },
    { id: "structures-patterns", title: "Структури даних і патерни" },
    { id: "tools-projects", title: "Інструменти та практика" },
]);

export const subjects: SubjectInfo[] = [
    {
        id: "math",
        title: "Математика",
        emoji: "🔢",
        description: "Від основ арифметики до математичного аналізу, лінійної алгебри та поглиблених тем",
        courses: [
            {
                id: "arithmetic",
                title: "Арифметика",
                description: "Числа, арифметичні дії, дроби, відсотки, величини та математичне мислення",
                sections: createSections([
                    { id: "01-number-representation", title: "Числа та запис чисел" },
                    { id: "02-arithmetic-operations", title: "Чотири арифметичні дії" },
                    { id: "03-expressions-equations", title: "Вирази, рівності та рівняння" },
                    { id: "04-divisibility-number-structure", title: "Подільність і будова чисел" },
                    { id: "05-fractions", title: "Дроби" },
                    { id: "06-decimals", title: "Десяткові дроби" },
                    { id: "07-ratios-proportions-percentages", title: "Відношення, пропорції та відсотки" },
                    { id: "08-measurements", title: "Величини та вимірювання" },
                    { id: "09-negative-numbers", title: "Від’ємні числа" },
                    { id: "10-number-system", title: "Система чисел" },
                    { id: "11-powers-scientific-notation", title: "Степені та експоненційний запис" },
                    { id: "12-problem-solving", title: "Задачі та математичне мислення" },
                ]),
            },
            {
                id: "algebra",
                title: "Алгебра",
                description: "Рівняння, нерівності, функції та алгебраїчні перетворення",
                sections: createSections([
                    { id: "01-algebraic-thinking", title: "Вступ до алгебраїчного мислення" },
                    { id: "02-linear-equations-inequalities", title: "Лінійні рівняння та нерівності" },
                    { id: "03-coordinate-plane-linear-functions", title: "Координатна площина та лінійна функція" },
                    { id: "04-systems-of-linear-equations", title: "Системи лінійних рівнянь" },
                    { id: "05-exponents-and-polynomials", title: "Степені та многочлени" },
                    { id: "06-factoring", title: "Розкладання на множники" },
                    { id: "07-rational-expressions-and-equations", title: "Раціональні вирази та рівняння" },
                    { id: "08-radicals-and-irrational-expressions", title: "Корені та ірраціональні вирази" },
                    { id: "09-quadratic-equations", title: "Квадратні рівняння" },
                    { id: "10-quadratic-function-and-parabola", title: "Квадратна функція та парабола" },
                ]),
            },
            {
                id: "geometry",
                title: "Геометрія та тригонометрія",
                description: "Планіметрія, стереометрія, координатні методи та тригонометричні функції",
                sections: createSections([
                    { id: "plane-geometry", title: "Планіметрія" },
                    { id: "solid-geometry", title: "Стереометрія" },
                    { id: "trigonometry", title: "Тригонометрія" },
                ]),
            },
            {
                id: "calculus-intro",
                title: "Функції та вступ до матаналізу",
                description: "Границі, похідна й інтеграл як перше системне знайомство з аналізом",
                sections: createSections([
                    { id: "function-behavior", title: "Поведінка та графіки функцій" },
                    { id: "limits-derivatives", title: "Границі та похідні" },
                    { id: "integrals-intro", title: "Вступ до інтегралів" },
                ]),
            },
            {
                id: "calculus",
                title: "Математичний аналіз",
                description: "Повний курс диференціального та інтегрального числення",
                sections: createSections([
                    { id: "single-variable", title: "Аналіз функцій однієї змінної" },
                    { id: "series-sequences", title: "Послідовності, ряди та збіжність" },
                    { id: "multivariable", title: "Багатовимірний аналіз" },
                ]),
            },
            {
                id: "linear-algebra",
                title: "Лінійна алгебра",
                description: "Вектори, матриці, лінійні перетворення та власні значення",
                sections: createSections([
                    { id: "vectors-matrices", title: "Вектори та матриці" },
                    { id: "linear-systems", title: "Системи рівнянь і простори" },
                    { id: "eigenvalues", title: "Власні значення та застосування" },
                ]),
            },
            {
                id: "probability",
                title: "Теорія ймовірностей та статистика",
                description: "Ймовірність, випадкові величини, вибірки та статистичний аналіз",
                sections: createSections([
                    { id: "probability-basics", title: "Основи ймовірності" },
                    { id: "random-variables", title: "Випадкові величини та розподіли" },
                    { id: "statistics", title: "Статистика та висновки" },
                ]),
            },
            {
                id: "discrete",
                title: "Дискретна математика та логіка",
                description: "Логіка, комбінаторика, графи, рекурентні співвідношення та множини",
                sections: createSections([
                    { id: "logic-sets", title: "Логіка та теорія множин" },
                    { id: "combinatorics", title: "Комбінаторика" },
                    { id: "graphs-relations", title: "Графи, відношення та рекурсія" },
                ]),
            },
            {
                id: "diff-equations",
                title: "Диференціальні рівняння",
                description: "Звичайні та частинні диференціальні рівняння, моделі та методи розв'язування",
                sections: createSections([
                    { id: "first-order", title: "Рівняння першого порядку" },
                    { id: "higher-order", title: "Рівняння вищих порядків" },
                    { id: "systems-models", title: "Системи та прикладні моделі" },
                ]),
            },
            {
                id: "advanced-analysis",
                title: "Аналіз функцій дійсної змінної та поглиблені теми",
                description: "Строгий аналіз, міра, збіжність і поглиблені теоретичні теми",
                sections: createSections([
                    { id: "real-analysis", title: "Функції дійсної змінної" },
                    { id: "measure-integration", title: "Міра та інтегрування" },
                    { id: "advanced-topics", title: "Поглиблені теми" },
                ]),
            },
        ],
    },
    {
        id: "physics",
        title: "Фізика",
        emoji: "⚛️",
        description: "Механіка, термодинаміка, електромагнетизм, оптика, квантова фізика та відносність",
        courses: [
            { id: "mechanics", title: "Механіка", description: "Кінематика, динаміка та закони збереження", sections: genericCourseSections },
            { id: "thermodynamics", title: "Термодинаміка", description: "Тепло, температура й термодинамічні процеси", sections: genericCourseSections },
            { id: "electromagnetism", title: "Електромагнетизм", description: "Електричні та магнітні поля, кола і хвилі", sections: genericCourseSections },
            { id: "optics", title: "Оптика та хвилі", description: "Світло, хвильові явища, інтерференція й дифракція", sections: genericCourseSections },
            { id: "quantum", title: "Квантова фізика", description: "Квантова механіка, атомна та ядерна фізика", sections: genericCourseSections },
            { id: "relativity", title: "Теорія відносності", description: "Спеціальна й загальна теорія відносності", sections: genericCourseSections },
        ],
    },
    {
        id: "chemistry",
        title: "Хімія",
        emoji: "🧪",
        description: "Будова речовини, реакції, органічна, неорганічна, фізична хімія та біохімія",
        courses: [
            { id: "general-chemistry", title: "Загальна хімія", description: "Атоми, молекули, зв'язки та основні реакції", sections: genericCourseSections },
            { id: "inorganic", title: "Неорганічна хімія", description: "Метали, неметали, кислоти, основи та солі", sections: genericCourseSections },
            { id: "organic", title: "Органічна хімія", description: "Вуглеводні, функціональні групи та органічні реакції", sections: genericCourseSections },
            { id: "physical-chemistry", title: "Фізична хімія", description: "Термохімія, кінетика, рівновага та електрохімія", sections: genericCourseSections },
            { id: "biochemistry", title: "Біохімія", description: "Білки, ліпіди, вуглеводи та метаболізм", sections: genericCourseSections },
        ],
    },
    {
        id: "biology",
        title: "Біологія",
        emoji: "🧬",
        description: "Від клітини до екосистеми: будова живого, генетика, еволюція й анатомія",
        courses: [
            { id: "cell-biology", title: "Клітинна біологія", description: "Будова клітини, органели та клітинні процеси", sections: genericCourseSections },
            { id: "genetics", title: "Генетика", description: "Спадковість, ДНК, РНК і мутації", sections: genericCourseSections },
            { id: "evolution", title: "Еволюція", description: "Природний добір, видоутворення та філогенія", sections: genericCourseSections },
            { id: "ecology", title: "Екологія", description: "Екосистеми, популяції, біосфера та сталість", sections: genericCourseSections },
            { id: "anatomy", title: "Анатомія і фізіологія", description: "Системи органів людини та тварин", sections: genericCourseSections },
            { id: "microbiology", title: "Мікробіологія", description: "Бактерії, віруси, гриби та імунна відповідь", sections: genericCourseSections },
        ],
    },
    {
        id: "informatics",
        title: "Інформатика",
        emoji: "🖥️",
        description: "Основи роботи з комп'ютером, офісні інструменти, мережі, медіа та кібербезпека",
        courses: [
            { id: "computer-basics", title: "Основи роботи з ПК", description: "Пристрій комп'ютера, ОС, файли та периферія", sections: genericCourseSections },
            { id: "office", title: "Опрацювання даних", description: "Текстові редактори, таблиці, презентації й документи", sections: genericCourseSections },
            { id: "networks", title: "Мережі та інтернет", description: "Як працює інтернет, браузери, пошта й бездротові мережі", sections: genericCourseSections },
            { id: "media", title: "Робота з медіа", description: "Графіка, відео, аудіо та базове редагування", sections: genericCourseSections },
            { id: "cybersecurity-basics", title: "Кібербезпека та ШІ", description: "Паролі, фішинг, антивіруси, ШІ та цифрова гігієна", sections: genericCourseSections },
            { id: "algorithms-intro", title: "Алгоритми та програмування", description: "Scratch, Python і перші алгоритмічні ідеї", sections: genericCourseSections },
        ],
    },
    {
        id: "cs",
        title: "Комп'ютерні науки",
        emoji: "💻",
        description: "Теоретичні основи, системи, програмування, безпека, ШІ, медіа та прикладні напрямки",
        courses: [
            {
                id: "foundational-theoretical-cs",
                title: "Теоретичні та фундаментальні основи КН",
                description: "Обчислюваність, алгоритми, дискретні структури, логіка й теорія інформації",
                sections: createSections([
                    { id: "history-of-computation", title: "Історія обчислень" },
                    { id: "mathematics-for-cs", title: "Математика для CS" },
                    { id: "computation-theory-and-automata", title: "Теорія обчислень та автомати" },
                    { id: "algorithms-and-complexity", title: "Алгоритми та складність" },
                    { id: "discrete-structures", title: "Дискретні структури" },
                    { id: "information-theory-and-coding", title: "Теорія інформації та кодування" },
                    { id: "logic-in-computer-science", title: "Логіка в комп'ютерних науках" },
                    { id: "formal-methods", title: "Формальні методи" },
                    { id: "programming-language-theory", title: "Теорія мов програмування" },
                ]),
            },
            {
                id: "hardware-architecture",
                title: "Апаратне забезпечення та архітектура комп'ютерів",
                description: "Цифрова логіка, процесори, пам'ять, архітектурні принципи та організація комп'ютера",
                sections: createSections([
                    { id: "digital-logic", title: "Цифрова логіка" },
                    { id: "computer-organization", title: "Організація комп'ютера" },
                    { id: "architecture-design", title: "Архітектура та продуктивність" },
                ]),
            },
            {
                id: "computer-systems",
                title: "Комп'ютерні системи",
                description: "Операційні системи, мережі, розподілені системи, компілятори та інфраструктура",
                sections: createSections([
                    { id: "operating-systems", title: "Операційні системи" },
                    { id: "networks-distributed", title: "Мережі та розподілені системи" },
                    { id: "systems-software", title: "Системне ПЗ та інструменти" },
                ]),
            },
            {
                id: "software-programming",
                title: "Програмне забезпечення та програмування",
                description: "Розробка ПЗ, мови програмування, інженерія програмних систем і тестування",
                sections: createSections([
                    { id: "software-design", title: "Проєктування ПЗ" },
                    { id: "programming-paradigms", title: "Парадигми програмування" },
                    { id: "quality-testing", title: "Якість, тестування та підтримка" },
                ]),
            },
            {
                id: "security",
                title: "Безпека",
                description: "Криптографія, мережевий захист, безпечна розробка та захист систем",
                sections: createSections([
                    { id: "security-foundations", title: "Основи безпеки" },
                    { id: "cryptography", title: "Криптографія" },
                    { id: "system-network-defense", title: "Захист систем і мереж" },
                ]),
            },
            {
                id: "intelligence-perception",
                title: "Інтелект та сприйняття",
                description: "Штучний інтелект, машинне навчання, комп'ютерний зір, NLP та робототехніка",
                sections: createSections([
                    { id: "ai-foundations", title: "Основи ШІ" },
                    { id: "machine-learning", title: "Машинне навчання" },
                    { id: "vision-language-robotics", title: "Зір, мова та робототехніка" },
                ]),
            },
            {
                id: "interaction-media",
                title: "Взаємодія та медіа",
                description: "Людино-комп'ютерна взаємодія, графіка, UX, мультимедіа та цифрові інтерфейси",
                sections: createSections([
                    { id: "hci-ux", title: "HCI та UX" },
                    { id: "graphics-media", title: "Комп'ютерна графіка й медіа" },
                    { id: "interactive-systems", title: "Інтерактивні системи" },
                ]),
            },
            {
                id: "applied-specialized-fields",
                title: "Прикладні та спеціалізовані галузі",
                description: "Наукові обчислення, біоінформатика, фінтех, ігри, вбудовані системи та інші спеціалізації",
                sections: createSections([
                    { id: "scientific-industry", title: "Наукові та індустріальні застосування" },
                    { id: "embedded-robotic", title: "Вбудовані та робототехнічні системи" },
                    { id: "specializations", title: "Спеціалізовані напрями" },
                ]),
            },
        ],
    },
    {
        id: "programming-languages",
        title: "Мови програмування",
        emoji: "⌨️",
        description: "Практичні треки з популярних мов та інструментів програмування",
        courses: [
            {
                id: "python",
                title: "Python",
                description: "Скрипти, автоматизація, бекенд, аналіз даних і практичні проєкти",
                sections: createSections([
                    { id: "python-foundations", title: "Знайомство та перші кроки" },
                    { id: "python-basics", title: "Базовий синтаксис і змінні" },
                    { id: "python-operators", title: "Оператори" },
                    { id: "python-strings", title: "Рядки (Strings)" },
                    { id: "python-flow-functions", title: "Керування потоком" },
                    { id: "python-functions", title: "Функції" },
                    { id: "python-data-structures", title: "Вбудовані структури даних" },
                    { id: "python-comprehensions", title: "Генератори колекцій та виразів" },
                    { id: "python-iterators-generators", title: "Ітератори та генератори" },
                    ...pythonPlaceholderSectionInfos,
                ]),
            },
            { id: "javascript-typescript", title: "JavaScript / TypeScript", description: "Мова вебу, фронтенд, бекенд і типізація", sections: programmingSections },
            { id: "java-kotlin", title: "Java / Kotlin", description: "JVM-екосистема для бекенду, Android і корпоративних систем", sections: programmingSections },
            { id: "cpp", title: "C++", description: "Системне програмування, алгоритми та високопродуктивні застосунки", sections: programmingSections },
            { id: "rust", title: "Rust", description: "Безпечне системне програмування, власність і продуктивність", sections: programmingSections },
            { id: "go", title: "Go", description: "Серверна розробка, конкурентність і мережеві сервіси", sections: programmingSections },
            { id: "sql", title: "SQL", description: "Запити, моделювання даних, аналітика та робота з базами даних", sections: programmingSections },
            { id: "html-css", title: "HTML / CSS", description: "Структура сторінок, семантика, стилізація та адаптивна верстка", sections: programmingSections },
            { id: "shell-bash-git", title: "Shell / Bash / Git", description: "Командний рядок, автоматизація, контроль версій і робочі процеси", sections: programmingSections },
        ],
    },
    {
        id: "it",
        title: "Інформаційні технології",
        emoji: "⚙️",
        description: "Веб, мобільна розробка, DevOps, Data Science, кібербезпека та інші IT-напрямки",
        courses: [
            { id: "frontend", title: "Frontend розробка", description: "Інтерфейси, React, Next.js та сучасний веб", sections: genericCourseSections },
            { id: "backend", title: "Backend розробка", description: "Сервери, API, бази даних і архітектура", sections: genericCourseSections },
            { id: "mobile", title: "Мобільна розробка", description: "Android, iOS, Flutter і React Native", sections: genericCourseSections },
            { id: "gamedev", title: "Розробка ігор", description: "Ігрові рушії, графіка, фізика та дизайн ігор", sections: genericCourseSections },
            { id: "data-science", title: "Data Science та ML", description: "Аналітика, моделі, експерименти й обробка даних", sections: genericCourseSections },
            { id: "devops", title: "DevOps та Cloud", description: "CI/CD, контейнери, хмари, інфраструктура як код", sections: genericCourseSections },
            { id: "cybersecurity", title: "Кібербезпека", description: "Захист інфраструктури, пентест і безпечна розробка", sections: genericCourseSections },
            { id: "qa", title: "QA та тестування", description: "Ручне й автоматизоване тестування, стратегії якості", sections: genericCourseSections },
            { id: "design", title: "UI/UX Design", description: "Інтерфейси, дизайн-мислення та прототипування", sections: genericCourseSections },
            { id: "management", title: "PM та BA", description: "Управління продуктом, проєктами та бізнес-аналіз", sections: genericCourseSections },
            { id: "blockchain", title: "Блокчейн", description: "Смартконтракти, Web3 і децентралізовані застосунки", sections: genericCourseSections },
            { id: "embedded", title: "Вбудовані системи та IoT", description: "Мікроконтролери, прошивки, сенсори й автоматика", sections: genericCourseSections },
            { id: "enterprise", title: "Корпоративні системи", description: "ERP, CRM та великі бізнес-системи", sections: genericCourseSections },
        ],
    },
    {
        id: "languages",
        title: "Іноземні мови",
        emoji: "🗣️",
        description: "Англійська, німецька, французька, іспанська та італійська від початку до впевненого рівня",
        courses: [
            { id: "english", title: "Англійська мова", description: "Граматика, лексика, слухання, письмо й розмовна практика", sections: genericCourseSections },
            { id: "german", title: "Німецька мова", description: "Граматика, лексика, читання та комунікація", sections: genericCourseSections },
            { id: "french", title: "Французька мова", description: "Вимова, граматика, словник і мовна практика", sections: genericCourseSections },
            { id: "spanish", title: "Іспанська мова", description: "Основи мови, теми повсякденного спілкування й граматика", sections: genericCourseSections },
            { id: "italian", title: "Італійська мова", description: "Лексика, граматика та живе мовлення", sections: genericCourseSections },
        ],
    },
    {
        id: "history",
        title: "Історія",
        emoji: "🏛️",
        description: "Світова та українська історія від давніх цивілізацій до сучасності",
        courses: [
            { id: "ancient", title: "Стародавній світ", description: "Єгипет, Греція, Рим і перші цивілізації", sections: genericCourseSections },
            { id: "medieval", title: "Середньовіччя", description: "Феодалізм, релігія, держави та суспільство", sections: genericCourseSections },
            { id: "modern-early", title: "Ранній новий час", description: "Ренесанс, Реформація та великі географічні відкриття", sections: genericCourseSections },
            { id: "modern", title: "Новий час", description: "Революції, індустріалізація й модерні держави", sections: genericCourseSections },
            { id: "contemporary", title: "Новітня історія", description: "Світові війни, холодна війна та сучасний світ", sections: genericCourseSections },
            { id: "ukraine", title: "Історія України", description: "Від Русі до сучасної незалежної України", sections: genericCourseSections },
        ],
    },
    {
        id: "geography",
        title: "Географія",
        emoji: "🌍",
        description: "Фізична та соціально-економічна географія, регіони світу й Україна",
        courses: [
            { id: "physical", title: "Фізична географія", description: "Рельєф, клімат, води, ґрунти та природні процеси", sections: genericCourseSections },
            { id: "human", title: "Соціально-економічна географія", description: "Населення, господарство, міста та глобальні процеси", sections: genericCourseSections },
            { id: "regional", title: "Регіональна географія", description: "Континенти, країни, регіони та їх особливості", sections: genericCourseSections },
            { id: "ukraine-geo", title: "Географія України", description: "Природа, населення та господарство України", sections: genericCourseSections },
            { id: "cartography", title: "Картографія та ГІС", description: "Карти, проєкції, просторові дані та геоінформаційні системи", sections: genericCourseSections },
        ],
    },
    {
        id: "engineering",
        title: "Інженерія",
        emoji: "🔧",
        description: "Механічна, електрична, цивільна, хімічна та програмна інженерія",
        courses: [
            { id: "mechanical", title: "Механічна інженерія", description: "Механіка, матеріали, машини й технічні системи", sections: genericCourseSections },
            { id: "electrical", title: "Електрична інженерія", description: "Електричні кола, сигнали, електроніка й енергетика", sections: genericCourseSections },
            { id: "civil", title: "Цивільна інженерія", description: "Будівництво, конструкції, геотехніка та інфраструктура", sections: genericCourseSections },
            { id: "chemical-eng", title: "Хімічна інженерія", description: "Процеси, реактори, масообмін і виробництво", sections: genericCourseSections },
            { id: "software-eng", title: "Програмна інженерія", description: "Архітектура ПЗ, процеси розробки та якість продукту", sections: genericCourseSections },
        ],
    },
    {
        id: "economics",
        title: "Економіка",
        emoji: "📈",
        description: "Мікро- і макроекономіка, фінанси, облік, інвестиції та економетрія",
        courses: [
            { id: "microeconomics", title: "Мікроекономіка", description: "Попит, пропозиція, ринки та поведінка споживача й фірми", sections: genericCourseSections },
            { id: "macroeconomics", title: "Макроекономіка", description: "ВВП, інфляція, зайнятість, економічна політика", sections: genericCourseSections },
            { id: "finance", title: "Фінанси та інвестиції", description: "Активи, портфелі, оцінка ризику та рішень", sections: genericCourseSections },
            { id: "accounting", title: "Бухгалтерський облік", description: "Фінансова звітність, баланс і аналіз показників", sections: genericCourseSections },
            { id: "econometrics", title: "Економетрика", description: "Регресія, часові ряди, моделювання та прогнози", sections: genericCourseSections },
        ],
    },
    {
        id: "philosophy",
        title: "Філософія",
        emoji: "🤔",
        description: "Логіка, етика, епістемологія, онтологія та історія філософської думки",
        courses: [
            { id: "logic", title: "Логіка", description: "Аргументація, формальні системи та помилки мислення", sections: genericCourseSections },
            { id: "ethics", title: "Етика", description: "Моральна філософія, цінності та практичні дилеми", sections: genericCourseSections },
            { id: "epistemology", title: "Епістемологія", description: "Знання, істина, обґрунтування та межі пізнання", sections: genericCourseSections },
            { id: "ontology", title: "Онтологія і метафізика", description: "Буття, причинність, простір, час і реальність", sections: genericCourseSections },
            { id: "history-phil", title: "Історія філософії", description: "Ключові мислителі та філософські традиції", sections: genericCourseSections },
            { id: "phil-science", title: "Філософія науки", description: "Метод, теорія, парадигми та межі наукового знання", sections: genericCourseSections },
        ],
    },
    {
        id: "anthropology",
        title: "Антропологія",
        emoji: "🏺",
        description: "Культурна, фізична, археологічна та лінгвістична антропологія",
        courses: [
            { id: "cultural", title: "Культурна антропологія", description: "Культура, ритуали, норми й соціальні практики", sections: genericCourseSections },
            { id: "physical", title: "Фізична антропологія", description: "Еволюція людини, біологічні адаптації та різноманіття", sections: genericCourseSections },
            { id: "archaeology", title: "Археологія", description: "Матеріальні свідчення минулого й методи дослідження", sections: genericCourseSections },
            { id: "linguistic", title: "Лінгвістична антропологія", description: "Мова, культура та комунікація в суспільствах", sections: genericCourseSections },
        ],
    },
];

export function getSubject(id: string): SubjectInfo | undefined {
    return subjects.find((subject) => subject.id === id);
}

export function getCourse(subjectId: string, courseId: string): CourseInfo | undefined {
    return getSubject(subjectId)?.courses.find((course) => course.id === courseId);
}
