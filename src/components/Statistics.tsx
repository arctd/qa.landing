import { f } from "@/lib/fluid";

function SalaryCard() {
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        width: f(335),
        height: f(488),
        backgroundColor: "#f5f5f8",
        borderRadius: f(211),
        padding: f(32),
        flexShrink: 0,
      }}
    >
      <div
        className="font-sans font-normal text-dark text-center"
        style={{ fontSize: f(20), lineHeight: "1.2" }}
      >
        Зарплаты в QA
      </div>

      <div className="flex flex-col items-center" style={{ gap: f(16) }}>
        <SalaryLevel label="Junior" salary="от 50 000 ₽" opacity={0.5} />
        <SalaryLevel label="Middle" salary="от 120 000 ₽" opacity={0.75} />
        <SalaryLevel label="Senior" salary="от 250 000 ₽" opacity={1} />
      </div>

      <div
        className="font-sans font-normal text-gray text-center"
        style={{ fontSize: f(10), lineHeight: "1.4" }}
      >
        по данным hh.ru, 2024
      </div>
    </div>
  );
}

function SalaryLevel({
  label,
  salary,
  opacity,
}: {
  label: string;
  salary: string;
  opacity: number;
}) {
  return (
    <div className="flex flex-col items-center" style={{ gap: f(4) }}>
      <div
        className="font-sans font-medium text-dark"
        style={{ fontSize: f(13), lineHeight: "1.2", opacity }}
      >
        {label}
      </div>
      <div
        className="font-sans font-normal text-dark"
        style={{ fontSize: f(27), lineHeight: "1.2", opacity }}
      >
        {salary}
      </div>
    </div>
  );
}

function VacanciesCard() {
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        backgroundColor: "#f5f5f8",
        borderRadius: f(32),
        padding: f(32),
        height: f(168),
      }}
    >
      <div
        className="font-sans font-normal text-dark"
        style={{ fontSize: f(40), lineHeight: "1.0" }}
      >
        1 400+
      </div>
      <div
        className="font-sans font-normal text-gray"
        style={{ fontSize: f(13), lineHeight: "1.4" }}
      >
        вакансий для тестировщиков на hh.ru прямо сейчас
      </div>
    </div>
  );
}

function RemoteChart() {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        backgroundColor: "#f5f5f8",
        borderRadius: f(32),
        padding: f(32),
        height: f(300),
      }}
    >
      {/* Pie chart placeholder */}
      <svg
        viewBox="0 0 200 200"
        style={{ width: f(200), height: f(200) }}
      >
        {/* 40% remote slice */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#ff7733"
          strokeWidth="40"
          strokeDasharray="201 503"
          strokeDashoffset="0"
          transform="rotate(-90 100 100)"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#e8e8eb"
          strokeWidth="40"
          strokeDasharray="302 503"
          strokeDashoffset="-201"
          transform="rotate(-90 100 100)"
        />
        <text
          x="100"
          y="95"
          textAnchor="middle"
          className="font-sans"
          fontSize="32"
          fontWeight="500"
          fill="#1f1f1f"
        >
          40%
        </text>
        <text
          x="100"
          y="120"
          textAnchor="middle"
          className="font-sans"
          fontSize="12"
          fill="#888c92"
        >
          удалёнка
        </text>
      </svg>
    </div>
  );
}

function NoExperienceCard() {
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        backgroundColor: "#f5f5f8",
        borderRadius: f(32),
        padding: f(32),
        height: f(168),
      }}
    >
      <div
        className="font-sans font-normal text-dark"
        style={{ fontSize: f(20), lineHeight: "1.2" }}
      >
        Не нужен опыт
      </div>
      <div
        className="font-sans font-normal text-gray"
        style={{ fontSize: f(13), lineHeight: "1.4" }}
      >
        Тестирование — одна из немногих IT-профессий, где можно стартовать без технического
        бэкграунда
      </div>
    </div>
  );
}

export function Statistics() {
  return (
    <section
      className="flex flex-col items-center"
      style={{ padding: `${f(64)} ${f(120)}`, gap: f(50) }}
    >
      {/* Section heading */}
      <h2
        className="font-sans font-normal text-dark text-center"
        style={{ fontSize: f(40), lineHeight: "1.0" }}
      >
        Почему тестирование — лучший старт в IT
      </h2>

      {/* Cards layout */}
      <div className="flex" style={{ gap: f(20), width: "100%" }}>
        {/* Left: Salary card */}
        <SalaryCard />

        {/* Right: 3 stacked cards */}
        <div
          className="flex flex-col flex-1"
          style={{ gap: f(20), width: f(605) }}
        >
          <VacanciesCard />
          <div className="flex" style={{ gap: f(20) }}>
            <div className="flex-1">
              <RemoteChart />
            </div>
            <div className="flex-1">
              <NoExperienceCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
