import { f } from "@/lib/fluid";

export function Author() {
  return (
    <section
      className="relative flex flex-col"
      style={{ padding: `${f(64)} 0`, width: f(1200) }}
    >
      {/* "Автор курса" label — positioned above */}
      <div
        className="absolute"
        style={{
          left: f(285),
          top: f(8),
          zIndex: 10,
        }}
      >
        <div
          className="flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: "#282829",
            borderRadius: f(40),
            padding: f(32),
            height: f(62),
          }}
        >
          <span
            className="font-sans font-normal text-white whitespace-nowrap"
            style={{ fontSize: f(20), lineHeight: "1.2" }}
          >
            Автор курса
          </span>
        </div>
      </div>

      {/* Main content */}
      <div
        className="flex flex-col items-center justify-center overflow-hidden"
        style={{ paddingBottom: f(50), paddingLeft: f(20), paddingRight: f(20) }}
      >
        {/* 3-column row */}
        <div
          className="flex items-center justify-between w-full"
          style={{ marginBottom: f(-50) }}
        >
          {/* Left: experience cards */}
          <div className="flex items-center" style={{ gap: f(25) }}>
            {/* Card 1: Companies */}
            <div
              className="relative flex flex-col font-sans"
              style={{
                width: f(228),
                backgroundColor: "#f5f5f8",
                borderRadius: f(40),
                padding: f(32),
                gap: f(16),
              }}
            >
              <div
                style={{
                  fontSize: f(27),
                  lineHeight: "1.2",
                  color: "#1f1f1f",
                }}
              >
                <p>Яндекс</p>
                <p>Т-Банк</p>
                <p>ВТБ</p>
              </div>
              <p
                className="font-medium"
                style={{
                  fontSize: f(13),
                  lineHeight: "1.2",
                  color: "#1f1f1f",
                }}
              >
                Руководитель отдела тестирования
              </p>
            </div>

            {/* Card 2: Years */}
            <div
              className="flex flex-col font-sans"
              style={{
                width: f(161),
                backgroundColor: "#f5f5f8",
                borderRadius: f(40),
                padding: f(32),
                gap: f(16),
              }}
            >
              <div
                style={{
                  fontSize: f(27),
                  lineHeight: "1.2",
                  color: "#1f1f1f",
                }}
              >
                10+
              </div>
              <p
                style={{
                  fontSize: f(20),
                  lineHeight: "1.2",
                  color: "#1f1f1f",
                }}
              >
                лет опыта
              </p>
            </div>
          </div>

          {/* Center: Photo placeholder */}
          <div
            className="shrink-0 flex items-center justify-center overflow-hidden"
            style={{
              width: f(282),
              height: f(283),
              borderRadius: f(270),
              backgroundColor: "#e8e8eb",
            }}
          >
            <span
              className="font-sans font-medium"
              style={{ fontSize: f(40), color: "#888c92" }}
            >
              ГД
            </span>
          </div>

          {/* Right: Program info card */}
          <div className="relative inline-grid" style={{ gridTemplateColumns: "max-content" }}>
            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: f(330),
                backgroundColor: "#f5f5f8",
                borderRadius: f(40),
                padding: f(32),
                marginLeft: f(21),
              }}
            >
              <p
                className="font-sans font-normal"
                style={{
                  fontSize: f(13),
                  lineHeight: "1.4",
                  color: "#1f1f1f",
                }}
              >
                На основе своего опыта я разработал программу — с какой темы лучше начать
                обучение и в какой последовательности изучать материал. Чтобы было доступно
                для ребят с нуля, без резких скачков нагрузки и непонятных терминов.
              </p>
            </div>
          </div>
        </div>

        {/* Name in Caveat below */}
        <div
          className="relative overflow-hidden text-center"
          style={{
            width: f(726),
            height: f(124),
            marginBottom: f(-50),
          }}
        >
          <span
            className="font-accent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              fontSize: f(108),
              lineHeight: "1.14",
              letterSpacing: "-0.05em",
              color: "#f73",
              whiteSpace: "nowrap",
            }}
          >
            Герман Дольников
          </span>
          {/* Curly braces */}
          <span
            className="font-accent absolute -translate-y-1/2"
            style={{
              fontSize: f(106),
              lineHeight: "0.93",
              letterSpacing: "-0.05em",
              color: "#1f1f1f",
              left: f(19),
              top: "55%",
            }}
          >
            {"{"}
          </span>
          <span
            className="font-accent absolute -translate-y-1/2"
            style={{
              fontSize: f(106),
              lineHeight: "0.93",
              letterSpacing: "-0.05em",
              color: "#1f1f1f",
              left: f(663),
              top: "55%",
            }}
          >
            {"}"}
          </span>
        </div>
      </div>
    </section>
  );
}
