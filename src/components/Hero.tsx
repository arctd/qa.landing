import { f } from "@/lib/fluid";

export function Hero() {
  return (
    <section
      className="flex flex-col items-center text-center"
      style={{ paddingBottom: f(64), gap: f(22), padding: `0 ${f(20)} ${f(64)}` }}
    >
      {/* Gradient tags */}
      <div className="flex items-center justify-center" style={{ gap: f(4) }}>
        <span
          className="gradient-orange inner-shadow text-white font-sans font-medium"
          style={{
            padding: `${f(12)} ${f(12)}`,
            borderRadius: f(100),
            fontSize: f(12),
            lineHeight: "1.2",
          }}
        >
          Бесплатный курс для новичков
        </span>
        <span
          className="gradient-orange inner-shadow text-white font-sans font-medium"
          style={{
            padding: `${f(12)} ${f(12)}`,
            borderRadius: f(100),
            fontSize: f(12),
            lineHeight: "1.2",
          }}
        >
          Быстрый старт в IT
        </span>
      </div>

      {/* Main heading */}
      <h1
        className="font-sans font-normal text-dark"
        style={{
          fontSize: f(56),
          lineHeight: "0.9",
          letterSpacing: "-0.03em",
          maxWidth: f(800),
        }}
      >
        Узнай о профессии тестировщик за 4 часа
      </h1>

      {/* Subtitle */}
      <p
        className="font-sans font-normal text-gray"
        style={{
          fontSize: f(20),
          lineHeight: "1.2",
          maxWidth: f(700),
        }}
      >
        и выполни своё первое задание
      </p>
    </section>
  );
}
