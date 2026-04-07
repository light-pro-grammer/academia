import type { Lesson } from "@/types";

export interface PythonPlaceholderLessonMeta {
    id: string;
    title: string;
}

export interface PythonPlaceholderSectionMeta {
    id: string;
    title: string;
    lessons: PythonPlaceholderLessonMeta[];
}

export const pythonPlaceholderSections: PythonPlaceholderSectionMeta[] = [
    {
        id: "python-decorators",
        title: "Декоратори",
        lessons: [
            { id: "44-decorators-basics", title: "Основи декораторів" },
            { id: "45-decorator-arguments-and-wraps", title: "Аргументи декораторів і `functools.wraps()`" },
            { id: "46-built-in-and-class-decorators", title: "Вбудовані декоратори та декоратори для класів" },
            { id: "47-practical-decorator-patterns", title: "Практичні патерни використання декораторів" },
        ],
    },
    {
        id: "python-oop",
        title: "Об'єктно-орієнтоване програмування",
        lessons: [
            { id: "48-classes-and-instances", title: "Класи та екземпляри" },
            { id: "49-methods-attributes-and-init", title: "Методи, атрибути та `__init__`" },
            { id: "50-encapsulation-and-special-methods", title: "Інкапсуляція та спеціальні методи" },
            { id: "51-inheritance-and-polymorphism", title: "Наслідування та поліморфізм" },
            { id: "52-classmethod-staticmethod-and-properties", title: "`classmethod`, `staticmethod` і `property`" },
            { id: "53-dataclasses-and-advanced-oop", title: "`dataclass` і просунуті прийоми ООП" },
        ],
    },
    {
        id: "python-exception-handling",
        title: "Обробка винятків",
        lessons: [
            { id: "54-try-except-basics", title: "Основи `try` / `except`" },
            { id: "55-else-finally-and-raise", title: "`else`, `finally` і `raise`" },
            { id: "56-custom-exceptions", title: "Власні винятки" },
            { id: "57-tracebacks-and-error-design", title: "Traceback і дизайн помилок" },
            { id: "58-assertions-and-warnings", title: "Твердження та попередження" },
        ],
    },
    {
        id: "python-context-managers",
        title: "Контекстні менеджери",
        lessons: [
            { id: "59-with-statement-basics", title: "Інструкція `with` та її основи" },
            { id: "60-custom-context-managers", title: "Власні контекстні менеджери" },
            { id: "61-contextlib-tools", title: "Інструменти модуля `contextlib`" },
            { id: "62-async-context-managers", title: "Асинхронні контекстні менеджери" },
        ],
    },
    {
        id: "python-modules-packages",
        title: "Модулі та пакети",
        lessons: [
            { id: "63-import-and-module-basics", title: "Основи `import` і модулів" },
            { id: "64-module-search-path-and-relative-imports", title: "Шлях пошуку модулів і відносні імпорти" },
            { id: "65-package-structure-and-init", title: "Структура пакета та `__init__.py`" },
            { id: "66-main-and-running-modules", title: "`__name__ == \"__main__\"` і запуск модулів" },
            { id: "67-namespace-packages-and-distribution", title: "Простори імен пакетів і розповсюдження коду" },
            { id: "68-virtual-environments-and-dependencies", title: "Віртуальні середовища та залежності" },
        ],
    },
    {
        id: "python-stdlib-core",
        title: "Стандартна бібліотека: базові модулі",
        lessons: [
            { id: "69-stdlib-math-and-numbers", title: "Модулі для математики та чисел" },
            { id: "70-stdlib-collections-and-containers", title: "Колекції та контейнери стандартної бібліотеки" },
            { id: "71-stdlib-strings-and-text", title: "Робота з рядками та текстом" },
            { id: "72-stdlib-files-and-io", title: "Файли та введення-виведення" },
            { id: "73-stdlib-pathlib-os-and-shutil", title: "`pathlib`, `os` і `shutil`" },
            { id: "74-stdlib-system-and-processes", title: "Системні модулі та процеси" },
            { id: "75-stdlib-date-time-and-timezones", title: "Дата, час і часові пояси" },
            { id: "76-stdlib-algorithms-and-utilities", title: "Алгоритмічні та службові модулі" },
        ],
    },
    {
        id: "python-stdlib-networking-data",
        title: "Стандартна бібліотека: мережа, веб і дані",
        lessons: [
            { id: "77-http-urls-and-network-basics", title: "HTTP, URL та мережеві основи" },
            { id: "78-json-csv-and-serialization", title: "JSON, CSV і серіалізація" },
            { id: "79-sqlite-and-persistence", title: "SQLite і локальне збереження даних" },
            { id: "80-xml-html-email-and-parsing", title: "XML, HTML, email і парсинг" },
            { id: "81-sockets-and-simple-servers", title: "Сокети та прості сервери" },
        ],
    },
    {
        id: "python-concurrency",
        title: "Конкурентність і паралелізм",
        lessons: [
            { id: "82-concurrency-foundations", title: "Основи конкурентності та паралелізму" },
            { id: "83-threading", title: "Потоки виконання (`threading`)" },
            { id: "84-multiprocessing", title: "Процеси (`multiprocessing`)" },
            { id: "85-futures-and-executors", title: "`concurrent.futures` та виконавці" },
            { id: "86-asyncio-and-async-await", title: "`asyncio` та `async` / `await`" },
            { id: "87-synchronization-and-choosing-model", title: "Синхронізація та вибір моделі виконання" },
        ],
    },
    {
        id: "python-regular-expressions",
        title: "Регулярні вирази",
        lessons: [
            { id: "88-regex-basics", title: "Основи регулярних виразів" },
            { id: "89-regex-groups-and-lookarounds", title: "Групи, квантифікатори та lookaround-и" },
            { id: "90-regex-search-replace-split", title: "Пошук, заміна та розбиття рядків" },
            { id: "91-regex-advanced-patterns", title: "Просунуті патерни та практичні приклади" },
        ],
    },
    {
        id: "python-testing",
        title: "Тестування",
        lessons: [
            { id: "92-testing-foundations", title: "Основи тестування в Python" },
            { id: "93-unittest", title: "`unittest`" },
            { id: "94-pytest-basics", title: "Основи `pytest`" },
            { id: "95-fixtures-mocking-and-patching", title: "Фікстури, моки та patching" },
            { id: "96-coverage-and-test-strategies", title: "Покриття коду та тестові стратегії" },
            { id: "97-automation-tox-and-nox", title: "Автоматизація тестів з `tox` і `nox`" },
        ],
    },
    {
        id: "python-debugging-profiling",
        title: "Налагодження та профілювання",
        lessons: [
            { id: "98-tracebacks-pdb-and-breakpoints", title: "Traceback, `pdb` і breakpoints" },
            { id: "99-logging-and-runtime-diagnostics", title: "Логування та runtime-діагностика" },
            { id: "100-timeit-cprofile-and-profiling", title: "`timeit`, `cProfile` і профілювання" },
            { id: "101-memory-debugging-and-benchmarks", title: "Пам'ять, бенчмарки та пошук вузьких місць" },
            { id: "102-static-and-dynamic-debugging-workflows", title: "Статичні та динамічні підходи до налагодження" },
        ],
    },
    {
        id: "python-type-hints",
        title: "Підказки типів і статичний аналіз",
        lessons: [
            { id: "103-type-hint-basics", title: "Основи підказок типів" },
            { id: "104-collections-unions-and-optionals", title: "Колекції, union-и та optional-и" },
            { id: "105-generics-protocols-and-typing-tools", title: "Generics, Protocol та інструменти `typing`" },
            { id: "106-typeddict-dataclass-and-newtype", title: "`TypedDict`, `dataclass` і `NewType`" },
            { id: "107-mypy-pyright-and-static-checkers", title: "`mypy`, `pyright` і статичні перевірки" },
            { id: "108-advanced-typing-features", title: "Просунуті можливості типізації" },
        ],
    },
    {
        id: "python-functional-programming",
        title: "Функціональне програмування",
        lessons: [
            { id: "109-functional-programming-basics", title: "Основи функціонального стилю" },
            { id: "110-map-filter-reduce-and-reductions", title: "`map()`, `filter()`, `reduce()` та редукції" },
            { id: "111-partial-composition-and-currying", title: "Часткове застосування, композиція та карування" },
            { id: "112-immutability-and-functional-patterns", title: "Незмінність і функціональні патерни" },
        ],
    },
    {
        id: "python-memory-performance",
        title: "Керування пам'яттю та продуктивність",
        lessons: [
            { id: "113-memory-model-and-garbage-collection", title: "Модель пам'яті та збирання сміття" },
            { id: "114-measuring-memory-and-leaks", title: "Вимірювання пам'яті та пошук витоків" },
            { id: "115-interning-slots-and-efficient-objects", title: "Інтернування, `__slots__` і ефективні об'єкти" },
            { id: "116-profiling-complexity-and-optimization", title: "Профілювання, складність і оптимізація" },
            { id: "117-accelerating-python", title: "Прискорення Python: PyPy, Numba, Cython та C-інтерфейси" },
        ],
    },
    {
        id: "python-advanced-language-features",
        title: "Просунуті можливості мови",
        lessons: [
            { id: "118-descriptors-and-properties", title: "Дескриптори та `property`" },
            { id: "119-metaclasses", title: "Метакласи" },
            { id: "120-python-data-model", title: "Модель даних Python і dunder-методи" },
            { id: "121-advanced-function-introspection", title: "Просунута інтроспекція функцій та динамічне виконання" },
            { id: "122-ast-and-code-generation", title: "AST і генерація коду" },
            { id: "123-bytecode-frames-and-code-objects", title: "Байткод, фрейми та code objects" },
            { id: "124-import-system-and-python-internals", title: "Система імпорту та внутрішня кухня Python" },
        ],
    },
    {
        id: "python-web-development",
        title: "Веб-розробка на Python",
        lessons: [
            { id: "125-web-foundations-wsgi-asgi", title: "Основи вебу: WSGI та ASGI" },
            { id: "126-flask", title: "Flask" },
            { id: "127-fastapi", title: "FastAPI" },
            { id: "128-django", title: "Django" },
            { id: "129-databases-orms-and-async-access", title: "Бази даних, ORM та асинхронний доступ" },
            { id: "130-apis-websockets-and-auth", title: "API, WebSocket-и, автентифікація та суміжні інструменти" },
        ],
    },
    {
        id: "python-scripting-automation-cli",
        title: "Скрипти, автоматизація та CLI",
        lessons: [
            { id: "131-scripting-and-command-line-basics", title: "Скрипти та основи командного рядка" },
            { id: "132-argparse", title: "`argparse`" },
            { id: "133-click-typer-and-rich-cli", title: "`click`, `Typer` і `rich` для CLI" },
            { id: "134-files-documents-and-system-automation", title: "Автоматизація файлів, документів і системних задач" },
            { id: "135-scheduling-and-long-running-scripts", title: "Планування запусків і довгоживучі скрипти" },
            { id: "136-browser-api-and-config-automation", title: "Автоматизація браузера, API та конфігурацій" },
        ],
    },
    {
        id: "python-data-science-ml-bridge",
        title: "Міст до Data Science та ML",
        lessons: [
            { id: "137-python-in-data-science", title: "Роль Python у Data Science" },
            { id: "138-jupyter-and-the-data-stack", title: "Jupyter і базовий data stack" },
            { id: "139-reproducible-data-environments", title: "Відтворювані середовища для аналізу даних" },
            { id: "140-data-pipelines-and-reusable-code", title: "Пайплайни даних і повторно використовуваний код" },
            { id: "141-ml-engineering-and-mlops-bridge", title: "Міст до ML Engineering та MLOps" },
        ],
    },
    {
        id: "python-advanced-emerging-topics",
        title: "Сучасні та перспективні теми Python",
        lessons: [
            { id: "142-modern-python-versions", title: "Що нового в Python 3.10–3.13+" },
            { id: "143-gil-subinterpreters-and-free-threading", title: "GIL, subinterpreters і free-threaded Python" },
            { id: "144-other-runtimes-and-platforms", title: "Інші реалізації та платформи: PyPy, WASM, MicroPython" },
            { id: "145-python-for-apps-and-hardware", title: "Python для GUI, ігор, мобільних застосунків та IoT" },
            { id: "146-python-in-modern-domains", title: "Python у сучасних доменах: AI, наука, фінанси, медіа" },
            { id: "147-python-community-and-roadmap", title: "Спільнота Python, PEP-и та довгострокова дорожня карта" },
        ],
    },
];

export const pythonPlaceholderRegistry = pythonPlaceholderSections.flatMap((section) =>
    section.lessons.map((lesson) => ({
        subject: "programming-languages",
        course: "python",
        section: section.id,
        lesson: lesson.id,
        title: lesson.title,
        sectionTitle: section.title,
    }))
);

export const pythonPlaceholderSectionInfos = pythonPlaceholderSections.map((section) => ({
    id: section.id,
    title: section.title,
    lessonCount: section.lessons.length,
}));

export function getPythonPlaceholderLesson(key: string): Lesson | null {
    const prefix = "programming-languages/python/";
    if (!key.startsWith(prefix)) return null;

    const rest = key.slice(prefix.length);
    const [sectionId, lessonId] = rest.split("/");
    if (!sectionId || !lessonId) return null;

    const section = pythonPlaceholderSections.find((item) => item.id === sectionId);
    const lesson = section?.lessons.find((item) => item.id === lessonId);
    if (!section || !lesson) return null;

    return {
        id: lesson.id,
        title: lesson.title,
        description: `Плейсхолдер для майбутнього уроку з розділу «${section.title}».`,
        concepts: [],
        content: [
            {
                type: "callout",
                kind: "info",
                title: "Плейсхолдер",
                content:
                    "Цей урок уже створений у структурі курсу, але його зміст ми заповнимо пізніше. Зараз це лише каркас для навігації та майбутнього наповнення.",
            },
            {
                type: "text",
                content: `Тема уроку: **${lesson.title}**. Розділ: **${section.title}**.`,
            },
        ],
        quiz: [],
    };
}
