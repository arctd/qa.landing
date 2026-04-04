import { f } from "@/lib/fluid";

export function Statistics() {
  return (
    <section
      className="flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: `${f(64)} ${f(120)}`, gap: f(50) }}
    >
      {/* Section heading */}
      <div className="flex items-center justify-center w-full">
        <h2
          className="font-sans font-normal text-center"
          style={{
            fontSize: f(40),
            lineHeight: "1",
            color: "#1f1f1f",
            width: f(711),
          }}
        >
          Тестировщики находят ошибки
          <br />
          на сайтах и в приложениях раньше, чем их встретят пользователи
        </h2>
      </div>

      {/* Cards layout */}
      <div className="flex w-full" style={{ gap: f(20) }}>
        {/* Left: Salary card with gradient */}
        <SalaryCard />

        {/* Right: stacked cards */}
        <div className="flex flex-col" style={{ gap: f(20), width: f(605) }}>
          {/* Top row: Vacancies + Remote */}
          <div className="flex" style={{ gap: f(20) }}>
            <VacanciesCard />
            <RemoteCard />
          </div>
          {/* Bottom: No experience needed */}
          <NoExperienceCard />
        </div>
      </div>
    </section>
  );
}

function SalaryCard() {
  return (
    <div
      className="flex-1 relative flex flex-col items-center justify-between overflow-hidden"
      style={{
        borderRadius: f(211),
        minHeight: f(488),
      }}
    >
      {/* Radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: f(211),
          background:
            "radial-gradient(ellipse at center, #ff4d00 0%, #ff5c0e 28.2%, #ff6c1d 56.4%, #ff7733 100%)",
        }}
      />
      {/* Inner shadow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: "inherit",
          boxShadow: "inset 0px 4px 40px 0px white",
        }}
      />

      {/* Top text */}
      <div
        className="relative flex flex-col items-center text-center text-white font-sans"
        style={{ padding: f(32), gap: f(12) }}
      >
        <p style={{ fontSize: f(20), lineHeight: "1.2" }}>
          Чем больше опыта,
          <br />
          тем больше зарплата
        </p>
        <p style={{ fontSize: f(13), lineHeight: "1.4", opacity: 0.7 }}>
          Источник: Хабр Карьера
        </p>
      </div>

      {/* Salary pyramid */}
      <div
        className="relative flex flex-col items-center"
        style={{ paddingBottom: f(7) }}
      >
        {/* Senior (top, largest) */}
        <div
          className="relative flex flex-col items-center justify-center"
          style={{
            width: f(206),
            padding: `${f(12)} ${f(20)}`,
            borderRadius: f(14),
            marginBottom: f(-7),
            background:
              "radial-gradient(ellipse at center bottom, rgba(255,255,255,0.26) 36%, rgba(255,255,255,0) 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit]"
            style={{ boxShadow: "inset 0px 0px 20px 0px rgba(255,255,255,0.15)" }}
          />
          <p
            className="font-sans text-white text-center w-full"
            style={{ fontSize: f(28), lineHeight: "1.05" }}
          >
            260 000
          </p>
          <p
            className="font-sans text-white text-center w-full"
            style={{ fontSize: f(14), lineHeight: "1.4", opacity: 0.7 }}
          >
            Senior
          </p>
        </div>

        {/* Middle */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: f(160),
            padding: `${f(18)} ${f(15)} ${f(11)}`,
            borderRadius: f(11),
            marginBottom: f(-7),
            background:
              "linear-gradient(to top, rgba(255,255,255,0.1) 1%, rgba(255,255,255,0) 100%)",
          }}
        >
          <p
            className="font-sans text-white text-center w-full"
            style={{ fontSize: f(22), lineHeight: "1.05" }}
          >
            160 000
          </p>
          <p
            className="font-sans text-white text-center w-full"
            style={{ fontSize: f(11), lineHeight: "1.4", opacity: 0.7 }}
          >
            Middle
          </p>
        </div>

        {/* Junior (bottom, smallest) */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: f(122),
            padding: `${f(18)} ${f(12)} ${f(10)}`,
            borderRadius: f(8),
            marginBottom: f(-7),
            background:
              "linear-gradient(to top, rgba(255,255,255,0.1) 1%, rgba(255,255,255,0) 100%)",
          }}
        >
          <p
            className="font-sans text-white text-center w-full"
            style={{ fontSize: f(17), lineHeight: "1.05" }}
          >
            84 000
          </p>
          <p
            className="font-sans text-white text-center w-full"
            style={{ fontSize: f(8), lineHeight: "1.4", opacity: 0.7 }}
          >
            Junior
          </p>
        </div>
      </div>
    </div>
  );
}

function VacanciesCard() {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{ width: f(285), height: f(300) }}
    >
      {/* Triple nested borders */}
      <div
        className="absolute"
        style={{
          left: f(61),
          top: f(56.5),
          width: f(224),
          height: f(232),
          borderRadius: f(44),
          border: "1px solid #f73",
          backgroundColor: "white",
        }}
      />
      <div
        className="absolute"
        style={{
          left: f(29),
          top: f(26),
          width: f(238),
          height: f(244),
          borderRadius: f(36),
          border: "1px solid #f73",
          backgroundColor: "white",
        }}
      />
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: f(249),
          height: f(252),
          borderRadius: f(32),
          border: "1px solid #f73",
          backgroundColor: "white",
        }}
      />

      {/* Content */}
      <div
        className="absolute flex flex-col items-center text-center whitespace-nowrap"
        style={{ left: f(37), top: f(76), gap: f(12), color: "#f73" }}
      >
        <div
          className="font-sans font-normal"
          style={{ fontSize: f(40), lineHeight: "0.9", letterSpacing: "-0.03em" }}
        >
          <p>1 400+</p>
          <p>вакансий</p>
        </div>
        <p
          className="font-sans font-medium"
          style={{ fontSize: f(13), lineHeight: "1.2", opacity: 0.7 }}
        >
          на hh.ru
        </p>
      </div>
    </div>
  );
}

function RemoteCard() {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{
        width: f(300),
        height: f(300),
        borderRadius: f(32),
      }}
    >
      {/* Donut chart background */}
      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 w-full h-full"
      >
        {/* Background ring */}
        <circle
          cx="150"
          cy="150"
          r="130"
          fill="none"
          stroke="#f5f5f8"
          strokeWidth="38"
        />
        {/* Accent ring ~60% */}
        <circle
          cx="150"
          cy="150"
          r="130"
          fill="none"
          stroke="#f73"
          strokeWidth="38"
          strokeDasharray="490 327"
          strokeDashoffset="0"
          transform="rotate(-90 150 150)"
          strokeLinecap="round"
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="font-sans font-normal text-center"
          style={{
            fontSize: f(20),
            lineHeight: "1.2",
            color: "#1f1f1f",
            padding: `0 ${f(32)}`,
          }}
        >
          <span style={{ color: "#f73" }}>Больше половины</span>
          {" "}вакансий предлагают удалёнку
        </p>
      </div>
    </div>
  );
}

function NoExperienceCard() {
  return (
    <div
      className="flex items-center overflow-hidden w-full"
      style={{
        height: f(168),
        borderRadius: f(32),
        backgroundColor: "#f6f7f9",
      }}
    >
      <div className="flex-1 flex items-center" style={{ padding: f(48) }}>
        <p
          className="font-sans font-normal"
          style={{ fontSize: f(20), lineHeight: "1.2", color: "#1f1f1f" }}
        >
          Для старта карьеры
          <br />
          не требуется техническое образование или опыт в IT
        </p>
      </div>
      {/* Right decoration placeholder */}
      <div
        className="shrink-0"
        style={{
          width: f(240),
          height: f(168),
          background:
            "linear-gradient(180deg, white 69%, #f6f7f9 97%)",
          borderRadius: f(17),
        }}
      />
    </div>
  );
}
