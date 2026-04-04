import { f } from "@/lib/fluid";

const features = [
  { icon: "🎓", text: "4 часа практики" },
  { icon: "💰", text: "Полностью бесплатно" },
  { icon: "📋", text: "Реальное задание" },
  { icon: "💬", text: "Обратная связь" },
];

export function CtaFooter() {
  return (
    <section className="flex flex-col" style={{ paddingTop: f(64) }}>
      {/* CTA Block */}
      <div
        className="gradient-orange relative overflow-hidden"
        style={{
          borderRadius: f(32),
          padding: `${f(64)} ${f(20)}`,
          margin: `0 ${f(20)}`,
          boxShadow: "inset 0 2px 40px rgba(255, 255, 255, 0.15)",
        }}
      >
        <div
          className="flex flex-col items-center text-center"
          style={{ gap: f(48) }}
        >
          {/* CTA heading */}
          <div className="flex flex-col items-center" style={{ gap: f(16) }}>
            <h2
              className="font-sans font-normal text-white"
              style={{ fontSize: f(40), lineHeight: "1.0" }}
            >
              Начни свой путь в тестировании
            </h2>
            <p
              className="font-sans font-normal"
              style={{
                fontSize: f(13),
                lineHeight: "1.4",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Бесплатный курс — это первый шаг к новой карьере в IT
            </p>
          </div>

          {/* Feature cards row */}
          <div className="flex" style={{ gap: f(8) }}>
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex flex-col items-center flex-1"
                style={{
                  padding: f(24),
                  borderRadius: f(32),
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  gap: f(8),
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: f(32),
                    height: f(32),
                    fontSize: f(20),
                  }}
                >
                  {feature.icon}
                </div>
                <span
                  className="font-sans font-medium text-white"
                  style={{ fontSize: f(12), lineHeight: "1.2" }}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex items-center justify-between"
        style={{ padding: `${f(32)} ${f(20)}` }}
      >
        <span
          className="font-sans font-normal text-gray"
          style={{ fontSize: f(10), lineHeight: "1.4" }}
        >
          Политика конфиденциальности
        </span>
        <span
          className="font-sans font-normal text-gray"
          style={{ fontSize: f(10), lineHeight: "1.4" }}
        >
          Сделано командой QA Studio
        </span>
      </footer>
    </section>
  );
}
