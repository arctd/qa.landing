import { f } from "@/lib/fluid";

export function Hero() {
  return (
    <section
      className="bg-white"
      style={{
        paddingTop: f(20),
        paddingBottom: f(64),
        paddingLeft: f(20),
        paddingRight: f(20),
      }}
    >
      {/* Main blue container card */}
      <div
        className="relative flex flex-col items-center justify-between overflow-hidden w-full"
        style={{
          height: f(600),
          borderRadius: f(48),
          padding: f(24),
        }}
      >
        {/* Blue background — placeholder for video */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: f(48),
            backgroundColor: "#017beb",
            background:
              "radial-gradient(ellipse at 50% 30%, #2a9df4 0%, #017beb 50%, #0168cc 100%)",
          }}
        />
        {/* Inner shadow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "inherit",
            boxShadow: "inset 0px 4px 40px 0px rgba(255, 255, 255, 0.8)",
          }}
        />

        {/* === TOP BAR: tag left, logo center, tags right === */}
        <div
          className="relative flex items-center justify-between w-full shrink-0"
        >
          {/* Left: course tag — hug content */}
          <BluePill>Курс «Инженер по тестированию»</BluePill>

          {/* Center: Logo — icon + text */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
            style={{ gap: f(6), height: f(28) }}
          >
            {/* Logo icon placeholder */}
            <svg
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: f(28), height: f(28) }}
            >
              <rect width="28" height="28" rx="6" fill="white" />
              <path
                d="M8.5 10C8.5 9.17 9.17 8.5 10 8.5h3.5v3.5H10A1.5 1.5 0 018.5 10zM14.5 8.5H18a1.5 1.5 0 010 3h-3.5V8.5zM8.5 18c0-.83.67-1.5 1.5-1.5h3.5V20H10a1.5 1.5 0 01-1.5-1.5zM14.5 16.5H18a1.5 1.5 0 010 3h-3.5v-3.5z"
                fill="#017beb"
              />
              <path d="M10 13h8v2h-8z" fill="#017beb" />
            </svg>
            <span
              className="font-sans font-medium text-white whitespace-nowrap"
              style={{ fontSize: f(16), lineHeight: "1" }}
            >
              QA Studio
            </span>
          </div>

          {/* Right: two tags */}
          <div className="flex items-center justify-end" style={{ gap: f(7) }}>
            <BluePill>Быстрый старт в IT</BluePill>
            <BluePill>Учим работать с ИИ</BluePill>
          </div>
        </div>

        {/* === CENTER: Title + subtitle + CTA === */}
        <div
          className="relative flex flex-col items-center w-full shrink-0"
          style={{
            gap: f(32),
            paddingLeft: f(230),
            paddingRight: f(230),
            filter: "drop-shadow(0px 4px 24px #2377c4)",
          }}
        >
          {/* Title block */}
          <div
            className="flex flex-col items-start w-full"
            style={{ gap: f(16) }}
          >
            {/* Main heading */}
            <div
              className="flex flex-col items-center w-full"
              style={{ paddingBottom: f(9) }}
            >
              <p
                className="font-sans font-normal text-center w-full"
                style={{
                  fontSize: f(64),
                  lineHeight: "0.9",
                  letterSpacing: "-0.03em",
                  color: "#e8ebf2",
                  marginBottom: f(-9),
                }}
              >
                Узнай о профессии
              </p>
              <div
                className="flex items-center justify-center whitespace-nowrap"
                style={{ marginBottom: f(-9) }}
              >
                <span
                  className="font-sans font-normal text-center"
                  style={{
                    fontSize: f(64),
                    lineHeight: "0.9",
                    letterSpacing: "-0.03em",
                    color: "#e8ebf2",
                  }}
                >
                  тестировщик за{" "}
                </span>
                <span
                  className="font-accent"
                  style={{
                    fontSize: f(88),
                    lineHeight: "0.9",
                    letterSpacing: "-0.03em",
                    background:
                      "linear-gradient(270deg, #e8ebf2 64%, #6fb8fb 118%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  4 часа
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p
              className="font-sans font-normal text-center w-full"
              style={{
                fontSize: f(20),
                lineHeight: "1.2",
                color: "#e8ebf2",
              }}
            >
              и выполни свою первую задачу
            </p>
          </div>

          {/* CTA button */}
          <button
            className="flex items-center justify-center cursor-pointer border-none"
            style={{
              width: f(200),
              paddingTop: f(16),
              paddingBottom: f(16),
              paddingLeft: f(20),
              paddingRight: f(20),
              borderRadius: f(16),
              backgroundColor: "#282829",
            }}
          >
            <span
              className="font-sans font-medium text-white whitespace-nowrap"
              style={{
                fontSize: f(13),
                lineHeight: "1.2",
                padding: `0 ${f(4)}`,
              }}
            >
              Начать учиться
            </span>
          </button>
        </div>

        {/* === BOTTOM: Feature tags row === */}
        <div
          className="relative flex w-full shrink-0"
          style={{ gap: f(8) }}
        >
          <FeatureTag>
            Для тех, кто хочет в IT, но не знает, с чего начать
          </FeatureTag>
          <FeatureTag>
            Реальная задача
            <br />
            с проверкой от ментора
          </FeatureTag>
          <FeatureTag>
            Индивидуальная консультация в подарок
          </FeatureTag>
          <FeatureTag>
            Чтобы начать, не нужно писать код
          </FeatureTag>
          <FeatureTag>
            Обзор рынка труда для джунов в 2026 году
          </FeatureTag>
          <FeatureTag>
            30+ площадок с вакансиями
          </FeatureTag>
        </div>
      </div>
    </section>
  );
}

function BluePill({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center shrink-0"
      style={{
        paddingTop: f(12),
        paddingBottom: f(12),
        paddingLeft: f(14),
        paddingRight: f(14),
        borderRadius: f(100),
        backgroundColor: "#017beb",
        border: "1px solid #1c92ff",
      }}
    >
      <span
        className="font-sans font-medium whitespace-nowrap"
        style={{
          fontSize: f(12),
          lineHeight: "1.2",
          color: "#e8ebf2",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function FeatureTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-1 flex-col items-center justify-center"
      style={{
        paddingTop: f(24),
        paddingBottom: f(24),
        paddingLeft: f(12),
        paddingRight: f(12),
        borderRadius: f(20),
        backgroundColor: "#238ae8",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <p
        className="font-sans font-medium text-center w-full"
        style={{
          fontSize: f(12),
          lineHeight: "1.2",
          color: "#e8ebf2",
        }}
      >
        {children}
      </p>
    </div>
  );
}
