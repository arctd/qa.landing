import { f } from "@/lib/fluid";

const experience = [
  { value: "10+", label: "лет в тестировании" },
  { value: "50+", label: "обученных студентов" },
];

export function Author() {
  return (
    <section
      className="flex flex-col items-center"
      style={{ padding: `${f(64)} ${f(20)}` }}
    >
      <div
        className="flex items-center w-full"
        style={{ gap: f(25), maxWidth: f(1160) }}
      >
        {/* Photo placeholder */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: f(282),
            height: f(283),
            borderRadius: f(270),
            backgroundColor: "#e8e8eb",
            overflow: "hidden",
          }}
        >
          <span
            className="font-sans font-medium text-gray"
            style={{ fontSize: f(40) }}
          >
            ГД
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1" style={{ gap: f(24) }}>
          <div className="flex flex-col" style={{ gap: f(8) }}>
            <div
              className="font-sans font-normal text-dark"
              style={{ fontSize: f(40), lineHeight: "1.0" }}
            >
              Герман Дольников
            </div>
            <div
              className="font-sans font-normal text-gray"
              style={{ fontSize: f(13), lineHeight: "1.4" }}
            >
              Автор курса, практикующий QA Lead
            </div>
          </div>

          {/* Experience badges */}
          <div className="flex" style={{ gap: f(12) }}>
            {experience.map((item) => (
              <div
                key={item.label}
                className="flex flex-col"
                style={{
                  backgroundColor: "#f5f5f8",
                  borderRadius: f(32),
                  padding: f(24),
                  width: f(228),
                  gap: f(4),
                }}
              >
                <div
                  className="font-sans font-normal text-dark"
                  style={{ fontSize: f(27), lineHeight: "1.2" }}
                >
                  {item.value}
                </div>
                <div
                  className="font-sans font-normal text-gray"
                  style={{ fontSize: f(12), lineHeight: "1.4" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div
            className="font-sans font-normal text-gray"
            style={{
              fontSize: f(12),
              lineHeight: "1.4",
              maxWidth: f(500),
            }}
          >
            Работал в крупных продуктовых компаниях, выстраивал процессы
            тестирования с нуля. Знает, как быстро войти в профессию
            и на что обращают внимание работодатели.
          </div>
        </div>
      </div>
    </section>
  );
}
