import { f } from "@/lib/fluid";

export function Hero() {
  return (
    <section
      className="flex flex-col items-center"
      style={{ paddingBottom: f(64), paddingLeft: f(20), paddingRight: f(20) }}
    >
      <div
        className="flex flex-col items-center"
        style={{ gap: f(22), width: f(1160) }}
      >
        {/* Title + subtitle */}
        <div
          className="flex flex-col items-center text-center w-full"
          style={{ gap: f(16) }}
        >
          <h1
            className="font-sans font-normal text-center"
            style={{
              fontSize: f(56),
              lineHeight: "0.9",
              letterSpacing: "-0.03em",
              color: "#1f1f1f",
            }}
          >
            Узнай о профессии
            <br />
            тестировщик за 4 часа
          </h1>
          <p
            className="font-sans font-normal"
            style={{
              fontSize: f(20),
              lineHeight: "1.2",
              color: "#1f1f1f",
              width: f(1160),
              textAlign: "center",
            }}
          >
            и выполни свою первую задачу
          </p>
        </div>

        {/* Gradient tags */}
        <div className="flex items-center" style={{ gap: "3.625px" }}>
          <GradientTag>Бесплатный курс «Инженер по тестированию»</GradientTag>
          <GradientTag>Быстрый старт в IT</GradientTag>
        </div>
      </div>

      {/* Feature cards grid — 2 rows × 3 cols */}
      <div
        className="flex w-full items-center justify-center"
        style={{ paddingTop: f(120) }}
      >
        <div className="flex" style={{ gap: f(8), width: f(1160) }}>
          {/* Row 1 */}
          <div className="flex flex-1" style={{ gap: f(8) }}>
            <FeatureCard variant="tintgray">
              <span className="text-dark">Чтобы начать, не нужно писать код</span>
              <div
                className="absolute font-accent"
                style={{
                  bottom: f(16),
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: f(48),
                  color: "#f73",
                  whiteSpace: "nowrap",
                }}
              >
                без кода
              </div>
            </FeatureCard>
            <FeatureCard variant="photo">
              <span className="text-white">Для тех, кто хочет в IT, но не знает, с чего начать</span>
            </FeatureCard>
            <FeatureCard variant="tintgray">
              <span className="text-dark">
                Реальная задача
                <br />
                с проверкой от ментора
              </span>
            </FeatureCard>
          </div>
          {/* Row 2 */}
          <div className="flex flex-1" style={{ gap: f(8) }}>
            <FeatureCard variant="photo">
              <span className="text-white">Индивидуальная консультация в подарок</span>
            </FeatureCard>
            <FeatureCard variant="tintgray">
              <span className="text-dark">Обзор рынка труда для джунов в 2026 году</span>
            </FeatureCard>
            <FeatureCard variant="photo">
              <span className="text-white">30+ площадок с вакансиями</span>
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradientTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        padding: f(12),
        borderRadius: f(100),
      }}
    >
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background:
            "radial-gradient(ellipse at center, #ff4d00 0%, #ff5c0e 28.2%, #ff6c1d 56.4%, #ff7733 100%)",
        }}
      />
      {/* Inner glow */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{ boxShadow: "inset 0px 0px 10px 0px white" }}
      />
      <div
        className="relative flex items-center justify-center"
        style={{ padding: `0 ${f(3)}` }}
      >
        <span
          className="font-sans font-medium text-white whitespace-nowrap"
          style={{ fontSize: f(12), lineHeight: "1.2" }}
        >
          {children}
        </span>
      </div>
    </div>
  );
}

function FeatureCard({
  variant,
  children,
}: {
  variant: "tintgray" | "photo";
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{
        height: f(204),
        borderRadius: f(12),
        padding: `${f(16)} ${f(12)}`,
      }}
    >
      {variant === "tintgray" ? (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(180, 184, 204, 0.14)", borderRadius: f(12) }}
        />
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(180, 184, 204, 0.14)", borderRadius: f(12) }}
          />
          {/* Orange gradient photo overlay placeholder */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: f(12),
              background:
                "linear-gradient(135deg, rgba(255, 119, 51, 0.85) 0%, rgba(255, 77, 0, 0.75) 100%)",
            }}
          />
        </>
      )}
      <div
        className="relative font-sans font-medium text-center"
        style={{ fontSize: f(12), lineHeight: "1.2" }}
      >
        {children}
      </div>
    </div>
  );
}
