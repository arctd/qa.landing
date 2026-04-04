import { f } from "@/lib/fluid";

const modules = [
  {
    number: "01",
    title: "Что такое тестирование",
    topics: [
      "Роль тестировщика в команде",
      "Виды тестирования",
      "Жизненный цикл бага",
    ],
    duration: "60 мин",
  },
  {
    number: "02",
    title: "Практика: тестируем приложение",
    topics: [
      "Тест-кейсы и чек-листы",
      "Баг-репорты",
      "Тестирование реального приложения",
    ],
    duration: "40 мин",
  },
  {
    number: "03",
    title: "Профессия и рынок труда",
    topics: [
      "Зарплаты и карьерный рост",
      "Что ищут работодатели",
      "Как составить резюме",
    ],
    duration: "60 мин",
  },
  {
    number: "04",
    title: "Куда двигаться дальше",
    topics: [
      "Автоматизация тестирования",
      "Инструменты QA-инженера",
      "План развития",
    ],
    duration: "30 мин",
  },
];

const bonuses = [
  {
    title: "Бонус: Консультация",
    description:
      "Получи персональную обратную связь от практикующего QA-инженера по результатам курса",
  },
  {
    title: "Бонус: Гайд по вакансиям",
    description:
      "Подборка актуальных вакансий для начинающих тестировщиков с разбором требований",
  },
];

export function CourseProgram() {
  return (
    <section
      className="flex flex-col items-center"
      style={{ padding: `${f(64)} ${f(20)}` }}
    >
      {/* Section heading */}
      <div
        className="flex flex-col items-center"
        style={{ gap: f(16), marginBottom: f(50) }}
      >
        <h2
          className="font-sans font-normal text-dark text-center"
          style={{ fontSize: f(40), lineHeight: "1.0" }}
        >
          Программа курса
        </h2>
        <p
          className="font-accent text-accent-end"
          style={{
            fontSize: f(75),
            lineHeight: "0.8",
            letterSpacing: "-0.03em",
          }}
        >
          4 часа практики
        </p>
      </div>

      {/* Content: modules + bonuses */}
      <div
        className="flex w-full"
        style={{ gap: f(16), maxWidth: f(1160) }}
      >
        {/* Left: Module list */}
        <div className="flex flex-col flex-1" style={{ gap: f(8) }}>
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="flex items-center"
              style={{
                backgroundColor: "#f5f5f8",
                borderRadius: f(32),
                padding: f(24),
                gap: f(24),
              }}
            >
              {/* Duration badge */}
              <div
                className="flex items-center justify-center shrink-0 gradient-orange inner-shadow text-white font-sans font-medium"
                style={{
                  width: f(70),
                  height: f(70),
                  borderRadius: f(20),
                  fontSize: f(12),
                  lineHeight: "1.2",
                }}
              >
                {mod.duration}
              </div>

              {/* Module content */}
              <div className="flex flex-col flex-1" style={{ gap: f(8) }}>
                <div className="flex items-center" style={{ gap: f(8) }}>
                  <span
                    className="font-sans font-medium text-gray"
                    style={{ fontSize: f(12), lineHeight: "1.2" }}
                  >
                    Модуль {mod.number}
                  </span>
                </div>
                <div
                  className="font-sans font-medium text-dark"
                  style={{ fontSize: f(13), lineHeight: "1.2" }}
                >
                  {mod.title}
                </div>
                <div className="flex flex-wrap" style={{ gap: f(6) }}>
                  {mod.topics.map((topic) => (
                    <span
                      key={topic}
                      className="font-sans font-normal text-gray"
                      style={{
                        fontSize: f(10),
                        lineHeight: "1.4",
                        backgroundColor: "rgba(0,0,0,0.04)",
                        borderRadius: f(100),
                        padding: `${f(4)} ${f(10)}`,
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Bonus cards */}
        <div className="flex flex-col flex-1" style={{ gap: f(8) }}>
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              className="flex flex-col flex-1"
              style={{
                backgroundColor: "#f5f5f8",
                borderRadius: f(32),
                padding: f(24),
                gap: f(12),
              }}
            >
              <div
                className="font-sans font-medium text-dark"
                style={{ fontSize: f(13), lineHeight: "1.2" }}
              >
                {bonus.title}
              </div>
              <div
                className="font-sans font-normal text-gray"
                style={{ fontSize: f(12), lineHeight: "1.4" }}
              >
                {bonus.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
