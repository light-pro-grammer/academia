export interface CourseInfo {
    id: string;
    title: string;
    description: string;
    sections: SectionInfo[];
}

export interface SectionInfo {
    id: string;
    title: string;
    lessonCount: number;
}

export interface SubjectInfo {
    id: string;
    title: string;
    emoji: string;
    description: string;
    courses: CourseInfo[];
}

export const subjects: SubjectInfo[] = [
    // ─── Математика ───────────────────────────────────────────
    {
        id: "math",
        title: "Математика",
        emoji: "🔢",
        description: "Від основ арифметики до математичного аналізу і лінійної алгебри",
        courses: [
            {
                id: "arithmetic",
                title: "Арифметика та вступ до алгебри",
                description: "Числа, дії з числами, дроби, відсотки і початки алгебри",
                sections: [
                    { id: "01-numbers", title: "Числа та лічба", lessonCount: 7 },
                    { id: "02-place-value", title: "Розряди та десяткова система", lessonCount: 6 },
                    { id: "03-addition", title: "Додавання", lessonCount: 5 },
                    { id: "04-subtraction", title: "Віднімання", lessonCount: 5 },
                    { id: "05-multiplication", title: "Множення", lessonCount: 6 },
                    { id: "06-division", title: "Ділення", lessonCount: 6 },
                    { id: "07-integers", title: "Цілі та від'ємні числа", lessonCount: 5 },
                    { id: "08-order-of-operations", title: "Порядок виконання дій", lessonCount: 5 },
                    { id: "09-factors-multiples", title: "Дільники, кратні і теорія чисел", lessonCount: 5 },
                    { id: "10-fractions-intro", title: "Дроби: вступ та основні поняття", lessonCount: 5 },
                    { id: "11-fractions-arithmetic", title: "Дроби: арифметичні дії", lessonCount: 6 },
                    { id: "12-decimals", title: "Десяткові дроби", lessonCount: 6 },
                    { id: "13-ratios", title: "Відношення і пропорції", lessonCount: 4 },
                    { id: "14-percentages", title: "Відсотки", lessonCount: 6 },
                    { id: "15-powers-roots", title: "Степені та корені", lessonCount: 6 },
                    { id: "16-measurements", title: "Вимірювання", lessonCount: 3 },
                    { id: "17-real-numbers", title: "Раціональні числа та система дійсних чисел", lessonCount: 5 },
                ],
            },
            {
                id: "algebra",
                title: "Алгебра",
                description: "Рівняння, нерівності, функції та поліноми",
                sections: [
                    { id: "01-algebraic-thinking", title: "Основи алгебраїчного мислення", lessonCount: 5 },
                ],
            },
            { id: "geometry", title: "Геометрія та тригонометрія", description: "Планіметрія, стереометрія і тригонометричні функції", sections: [] },
            { id: "calculus-intro", title: "Функції та вступ до матаналізу", description: "Границі, похідна і інтеграл — перше знайомство", sections: [] },
            { id: "calculus", title: "Математичний аналіз", description: "Повний курс диференціального та інтегрального числення", sections: [] },
            { id: "linear-algebra", title: "Лінійна алгебра", description: "Вектори, матриці, визначники і власні значення", sections: [] },
            { id: "probability", title: "Теорія ймовірностей та статистика", description: "Ймовірність, розподіли, вибірки і статистичний аналіз", sections: [] },
            { id: "discrete", title: "Дискретна математика та логіка", description: "Графи, комбінаторика, логіка і теорія множин", sections: [] },
            { id: "diff-equations", title: "Диференціальні рівняння", description: "Звичайні та часткові диференціальні рівняння", sections: [] },
        ],
    },

    // ─── Фізика ───────────────────────────────────────────────
    {
        id: "physics",
        title: "Фізика",
        emoji: "⚛️",
        description: "Механіка, термодинаміка, електромагнетизм і квантова фізика",
        courses: [
            { id: "mechanics", title: "Механіка", description: "Кінематика, динаміка, закони збереження", sections: [] },
            { id: "thermodynamics", title: "Термодинаміка", description: "Теплота, температура, закони термодинаміки", sections: [] },
            { id: "electromagnetism", title: "Електромагнетизм", description: "Електричне поле, магнетизм, рівняння Максвелла", sections: [] },
            { id: "optics", title: "Оптика та хвилі", description: "Геометрична і хвильова оптика, дифракція", sections: [] },
            { id: "quantum", title: "Квантова фізика", description: "Квантова механіка, атомна і ядерна фізика", sections: [] },
            { id: "relativity", title: "Теорія відносності", description: "Спеціальна і загальна теорія відносності", sections: [] },
        ],
    },

    // ─── Хімія ────────────────────────────────────────────────
    {
        id: "chemistry",
        title: "Хімія",
        emoji: "🧪",
        description: "Будова речовини, хімічні реакції, органічна і неорганічна хімія",
        courses: [
            { id: "general-chemistry", title: "Загальна хімія", description: "Атоми, молекули, хімічний зв'язок, реакції", sections: [] },
            { id: "inorganic", title: "Неорганічна хімія", description: "Метали, неметали, кислоти, основи, солі", sections: [] },
            { id: "organic", title: "Органічна хімія", description: "Вуглеводні, функціональні групи, реакції", sections: [] },
            { id: "physical-chemistry", title: "Фізична хімія", description: "Термохімія, кінетика, електрохімія", sections: [] },
            { id: "biochemistry", title: "Біохімія", description: "Білки, ліпіди, вуглеводи, метаболізм", sections: [] },
        ],
    },

    // ─── Біологія ─────────────────────────────────────────────
    {
        id: "biology",
        title: "Біологія",
        emoji: "🧬",
        description: "Від клітини до екосистеми — будова живого, генетика і еволюція",
        courses: [
            { id: "cell-biology", title: "Клітинна біологія", description: "Будова клітини, органели, клітинний цикл", sections: [] },
            { id: "genetics", title: "Генетика", description: "Спадковість, ДНК, РНК, мутації", sections: [] },
            { id: "evolution", title: "Еволюція", description: "Природний добір, видоутворення, філогенетика", sections: [] },
            { id: "ecology", title: "Екологія", description: "Екосистеми, популяції, біосфера", sections: [] },
            { id: "anatomy", title: "Анатомія і фізіологія", description: "Системи органів людини і тварин", sections: [] },
            { id: "microbiology", title: "Мікробіологія", description: "Бактерії, віруси, гриби, імунітет", sections: [] },
        ],
    },

    // ─── Інформатика ──────────────────────────────────────────
    {
        id: "informatics",
        title: "Інформатика",
        emoji: "🖥️",
        description: "Основи роботи з комп'ютером, офісні програми, мережі і кібербезпека",
        courses: [
            { id: "computer-basics", title: "Основи роботи з ПК", description: "Залізо, операційна система, файли, периферія", sections: [] },
            { id: "office", title: "Опрацювання даних", description: "Word, Excel, PowerPoint, Google Docs", sections: [] },
            { id: "networks", title: "Мережі та інтернет", description: "Як працює інтернет, браузери, пошта, Wi-Fi", sections: [] },
            { id: "media", title: "Робота з медіа", description: "Графічні, відео- та аудіоредактори", sections: [] },
            { id: "cybersecurity-basics", title: "Кібербезпека та ШІ", description: "Паролі, фішинг, антивіруси, нейромережі", sections: [] },
            { id: "algorithms-intro", title: "Алгоритми та програмування", description: "Scratch, Python, основи алгоритмічного мислення", sections: [] },
        ],
    },

    // ─── Комп'ютерні науки ────────────────────────────────────
    {
        id: "cs",
        title: "Комп'ютерні науки",
        emoji: "💻",
        description: "Алгоритми, структури даних, мови програмування і теорія обчислень",
        courses: [
            { id: "foundations", title: "Основи CS", description: "Теорія інформації, булева алгебра, архітектура ПК", sections: [] },
            { id: "python", title: "Python", description: "Від основ до продвинутого рівня", sections: [] },
            { id: "javascript", title: "JavaScript / TypeScript", description: "Мова вебу — від основ до Node.js", sections: [] },
            { id: "java", title: "Java / Kotlin", description: "JVM-мови для бекенду і Android", sections: [] },
            { id: "cpp", title: "C++", description: "Системне програмування і висока продуктивність", sections: [] },
            { id: "rust", title: "Rust", description: "Безпечне системне програмування", sections: [] },
            { id: "go", title: "Go", description: "Конкурентне програмування і мікросервіси", sections: [] },
            { id: "sql", title: "SQL та бази даних", description: "Реляційні БД, запити, проектування схем", sections: [] },
            { id: "algorithms", title: "Алгоритми і структури даних", description: "Сортування, пошук, графи, динамічне програмування", sections: [] },
            { id: "web", title: "HTML / CSS", description: "Основи вебу — розмітка і стилі", sections: [] },
            { id: "shell", title: "Shell / Bash / Git", description: "Термінал, скрипти, контроль версій", sections: [] },
            { id: "theory", title: "Теорія обчислень", description: "Автомати, складність, криптографія", sections: [] },
        ],
    },

    // ─── IT ───────────────────────────────────────────────────
    {
        id: "it",
        title: "Інформаційні технології",
        emoji: "⚙️",
        description: "Веброзробка, мобільні додатки, DevOps, Data Science і кар'єра в IT",
        courses: [
            { id: "frontend", title: "Frontend розробка", description: "React, Vue, Angular, Next.js", sections: [] },
            { id: "backend", title: "Backend розробка", description: "Node.js, Django, Spring Boot, Laravel", sections: [] },
            { id: "mobile", title: "Мобільна розробка", description: "Flutter, React Native, SwiftUI", sections: [] },
            { id: "gamedev", title: "Розробка ігор", description: "Unity, Unreal Engine, ігрова математика", sections: [] },
            { id: "data-science", title: "Data Science та ML", description: "ML, Deep Learning, Big Data, аналітика", sections: [] },
            { id: "devops", title: "DevOps та Cloud", description: "Docker, Kubernetes, AWS, Linux, Terraform", sections: [] },
            { id: "cybersecurity", title: "Кібербезпека", description: "Мережева безпека, пентест, криптографія", sections: [] },
            { id: "qa", title: "QA та тестування", description: "Manual QA, Automation, Selenium, Cypress", sections: [] },
            { id: "design", title: "UI/UX Design", description: "Figma, дизайн-мислення, прототипування", sections: [] },
            { id: "management", title: "PM та BA", description: "Управління проектами, бізнес-аналіз, Agile", sections: [] },
            { id: "blockchain", title: "Блокчейн", description: "Смарт-контракти, Web3, децентралізовані додатки", sections: [] },
            { id: "embedded", title: "Вбудовані системи та IoT", description: "Embedded, IoT, Robotics", sections: [] },
            { id: "enterprise", title: "Корпоративні системи", description: "SAP, Oracle ERP, Salesforce CRM", sections: [] },
        ],
    },

    // ─── Іноземні мови ────────────────────────────────────────
    {
        id: "languages",
        title: "Іноземні мови",
        emoji: "🗣️",
        description: "Англійська, німецька, французька, іспанська та італійська — від нуля до вільного володіння",
        courses: [
            { id: "english", title: "Англійська мова", description: "Граматика, лексика, розмовна практика — A1 до C2", sections: [] },
            { id: "german", title: "Німецька мова", description: "Граматика, лексика, розмовна практика — A1 до C2", sections: [] },
            { id: "french", title: "Французька мова", description: "Граматика, лексика, розмовна практика — A1 до C2", sections: [] },
            { id: "spanish", title: "Іспанська мова", description: "Граматика, лексика, розмовна практика — A1 до C2", sections: [] },
            { id: "italian", title: "Італійська мова", description: "Граматика, лексика, розмовна практика — A1 до C2", sections: [] },
        ],
    },

    // ─── Історія ──────────────────────────────────────────────
    {
        id: "history",
        title: "Історія",
        emoji: "🏛️",
        description: "Від стародавніх цивілізацій до сучасності — світова і українська історія",
        courses: [
            { id: "ancient", title: "Стародавній світ", description: "Єгипет, Греція, Рим, Месопотамія", sections: [] },
            { id: "medieval", title: "Середньовіччя", description: "Феодалізм, хрестові походи, Візантія", sections: [] },
            { id: "modern-early", title: "Ранній новий час", description: "Ренесанс, Реформація, великі географічні відкриття", sections: [] },
            { id: "modern", title: "Новий час", description: "Революції, індустріалізація, націоналізм", sections: [] },
            { id: "contemporary", title: "Новітня історія", description: "Світові війни, холодна війна, сучасність", sections: [] },
            { id: "ukraine", title: "Історія України", description: "Від Київської Русі до незалежної України", sections: [] },
        ],
    },

    // ─── Географія ────────────────────────────────────────────
    {
        id: "geography",
        title: "Географія",
        emoji: "🌍",
        description: "Фізична і соціально-економічна географія, клімат, країни і народи",
        courses: [
            { id: "physical", title: "Фізична географія", description: "Рельєф, клімат, гідрологія, ґрунти", sections: [] },
            { id: "human", title: "Соціально-економічна географія", description: "Населення, господарство, урбанізація", sections: [] },
            { id: "regional", title: "Регіональна географія", description: "Континенти, країни, столиці", sections: [] },
            { id: "ukraine-geo", title: "Географія України", description: "Природа, населення і господарство України", sections: [] },
            { id: "cartography", title: "Картографія та ГІС", description: "Карти, проєкції, геоінформаційні системи", sections: [] },
        ],
    },

    // ─── Інженерія ────────────────────────────────────────────
    {
        id: "engineering",
        title: "Інженерія",
        emoji: "🔧",
        description: "Механічна, електрична, цивільна і хімічна інженерія — від теорії до практики",
        courses: [
            { id: "mechanical", title: "Механічна інженерія", description: "Статика, динаміка, опір матеріалів, термодинаміка", sections: [] },
            { id: "electrical", title: "Електрична інженерія", description: "Електричні кола, електроніка, сигнали і системи", sections: [] },
            { id: "civil", title: "Цивільна інженерія", description: "Конструкції, будівельні матеріали, геотехніка", sections: [] },
            { id: "chemical-eng", title: "Хімічна інженерія", description: "Масообмін, реактори, технологічні процеси", sections: [] },
            { id: "software-eng", title: "Програмна інженерія", description: "Архітектура ПЗ, SDLC, проектування систем", sections: [] },
        ],
    },

    // ─── Економіка ────────────────────────────────────────────
    {
        id: "economics",
        title: "Економіка",
        emoji: "📈",
        description: "Мікро- і макроекономіка, фінанси, інвестиції і економічна теорія",
        courses: [
            { id: "microeconomics", title: "Мікроекономіка", description: "Попит, пропозиція, ринки, поведінка фірм", sections: [] },
            { id: "macroeconomics", title: "Макроекономіка", description: "ВВП, інфляція, безробіття, монетарна політика", sections: [] },
            { id: "finance", title: "Фінанси та інвестиції", description: "Акції, облігації, оцінка активів, ризик", sections: [] },
            { id: "accounting", title: "Бухгалтерський облік", description: "Баланс, звіт про прибутки, фінансовий аналіз", sections: [] },
            { id: "econometrics", title: "Економетрика", description: "Регресія, часові ряди, прогнозування", sections: [] },
        ],
    },

    // ─── Філософія ────────────────────────────────────────────
    {
        id: "philosophy",
        title: "Філософія",
        emoji: "🤔",
        description: "Логіка, етика, онтологія, епістемологія і історія філософської думки",
        courses: [
            { id: "logic", title: "Логіка", description: "Дедукція, індукція, формальна логіка, хибності", sections: [] },
            { id: "ethics", title: "Етика", description: "Моральна філософія, утилітаризм, деонтологія", sections: [] },
            { id: "epistemology", title: "Епістемологія", description: "Що таке знання, істина, обґрунтування", sections: [] },
            { id: "ontology", title: "Онтологія і метафізика", description: "Буття, свідомість, простір і час", sections: [] },
            { id: "history-phil", title: "Історія філософії", description: "Від Сократа до сучасних філософів", sections: [] },
            { id: "phil-science", title: "Філософія науки", description: "Метод, парадигми, демаркація науки", sections: [] },
        ],
    },

    // ─── Антропологія ─────────────────────────────────────────
    {
        id: "anthropology",
        title: "Антропологія",
        emoji: "🏺",
        description: "Культурна, фізична і лінгвістична антропологія — вивчення людини і суспільства",
        courses: [
            { id: "cultural", title: "Культурна антропологія", description: "Культура, ритуали, суспільні структури", sections: [] },
            { id: "physical", title: "Фізична антропологія", description: "Еволюція людини, приматологія, остеологія", sections: [] },
            { id: "archaeology", title: "Археологія", description: "Методи розкопок, артефакти, давні цивілізації", sections: [] },
            { id: "linguistic", title: "Лінгвістична антропологія", description: "Мова і культура, мовна різноманітність", sections: [] },
        ],
    },
];

export function getSubject(id: string): SubjectInfo | undefined {
    return subjects.find(s => s.id === id);
}

export function getCourse(subjectId: string, courseId: string): CourseInfo | undefined {
    return getSubject(subjectId)?.courses.find(c => c.id === courseId);
}