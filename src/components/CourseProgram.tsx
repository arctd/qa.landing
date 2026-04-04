import { f } from "@/lib/fluid";

const modules = [
  {
    title: "О профессии «Инженер по тестированию»",
    items: [
      "Знакомство с курсом и спикером",
      "Кто такой тестировщик и какие задачи он решает",
    ],
    duration: "60\nминут",
  },
  {
    title: "Первые шаги в тестировании",
    items: [
      "Разберём, с чего начать тестирование",
      "и найдём первые ошибки в работе сайта",
    ],
    joinItems: true,
    duration: "40\nминут",
  },
  {
    title: "Практическое задание с проверкой от ментора",
    items: ["Получишь обратную связь от опытного тестировщика"],
    duration: "60\nминут",
  },
  {
    title: "Популярные вопросы о тестировании",
    items: [
      "Сложно ли найти работу без опыта?",
      "Какой максимальный возраст входа в айти?",
      "Как нейросети помогают тестировщикам?",
    ],
    duration: "30\nминут",
  },
];

function BonusIcon() {
  return (
    <div
      className="flex items-center justify-center overflow-hidden shrink-0"
      style={{
        width: f(48),
        height: f(48),
        borderRadius: f(20),
        padding: f(12),
        backgroundColor: "white",
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 4v6m0 0v6m0-6h6m-6 0H6" stroke="#f73" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="10" width="16" height="10" rx="2" stroke="#f73" strokeWidth="1.5" />
        <path d="M12 10V4" stroke="#f73" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function CourseProgram() {
  return (
    <section
      className="flex flex-col items-start"
      style={{ padding: `${f(64)} 0` }}
    >
      <div
        className="flex items-start"
        style={{ gap: f(16), padding: `0 ${f(20)}`, width: f(1200) }}
      >
        {/* Left column: heading */}
        <div className="flex flex-col flex-1" style={{ minWidth: 0 }}>
          <div
            className="font-sans font-normal"
            style={{
              fontSize: f(40),
              lineHeight: "1",
              color: "#1f1f1f",
            }}
          >
            За 4 часа узнаешь о профессии
            <br />
            и выполнишь
          </div>
          <div style={{ height: f(58) }}>
            <span
              className="font-accent"
              style={{
                fontSize: f(75),
                lineHeight: "0.91",
                letterSpacing: "-0.03em",
                color: "#f73",
              }}
            >
              первую задачу
            </span>
          </div>
        </div>

        {/* Right column: modules + bonuses */}
        <div className="flex flex-col flex-1" style={{ gap: f(24), minWidth: 0 }}>
          {/* Module list */}
          <div className="flex flex-col" style={{ gap: f(8) }}>
            {modules.map((mod, i) => (
              <div
                key={i}
                className="flex items-center overflow-hidden"
                style={{
                  backgroundColor: "#f5f5f8",
                  borderRadius: f(32),
                  padding: f(24),
                  gap: f(24),
                }}
              >
                {/* Content */}
                <div className="flex flex-col flex-1" style={{ gap: f(8), minWidth: 0 }}>
                  <p
                    className="font-sans font-medium"
                    style={{
                      fontSize: f(13),
                      lineHeight: "1.2",
                      color: "#1f1f1f",
                    }}
                  >
                    {mod.title}
                  </p>
                  <div
                    className="flex flex-col font-sans font-normal"
                    style={{
                      gap: f(4),
                      fontSize: f(12),
                      lineHeight: "1.4",
                      color: "#888c92",
                    }}
                  >
                    {mod.joinItems ? (
                      <p>{mod.items.join("\n")}</p>
                    ) : (
                      mod.items.map((item, j) => <p key={j}>{item}</p>)
                    )}
                  </div>
                </div>
                {/* Duration badge — white bg */}
                <div
                  className="flex items-center justify-center shrink-0 overflow-hidden"
                  style={{
                    width: f(70),
                    height: f(70),
                    borderRadius: f(20),
                    backgroundColor: "white",
                    padding: `${f(8)} ${f(12)}`,
                  }}
                >
                  <p
                    className="font-sans font-medium text-center whitespace-pre-line"
                    style={{
                      fontSize: f(13),
                      lineHeight: "1.2",
                      color: "#1f1f1f",
                    }}
                  >
                    {mod.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider: "бонус после прохождения" */}
          <div className="flex items-center w-full" style={{ gap: f(10) }}>
            <div
              className="flex-1"
              style={{ height: 0, borderTop: "1px dashed #888c92" }}
            />
            <span
              className="font-sans font-normal whitespace-nowrap"
              style={{ fontSize: f(12), lineHeight: "1", color: "#888c92" }}
            >
              бонус после прохождения
            </span>
            <div
              className="flex-1"
              style={{ height: 0, borderTop: "1px dashed #888c92" }}
            />
          </div>

          {/* Bonus cards */}
          <div className="flex" style={{ gap: f(12) }}>
            <div
              className="flex flex-1 items-center overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 119, 51, 0.1)",
                borderRadius: f(32),
                padding: f(24),
                gap: f(16),
              }}
            >
              <BonusIcon />
              <p
                className="font-sans font-medium flex-1"
                style={{
                  fontSize: f(13),
                  lineHeight: "1.2",
                  color: "#f73",
                }}
              >
                Индивидуальная
                <br />
                карьерная консультация
              </p>
            </div>
            <div
              className="flex flex-1 items-center overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 119, 51, 0.1)",
                borderRadius: f(32),
                padding: f(24),
                gap: f(16),
              }}
            >
              <BonusIcon />
              <p
                className="font-sans font-medium flex-1"
                style={{
                  fontSize: f(13),
                  lineHeight: "1.2",
                  color: "#f73",
                }}
              >
                30+ площадок
                <br />
                с вакансиями
                <br />
                для тестировщиков
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
