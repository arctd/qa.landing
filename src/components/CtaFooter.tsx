import { f } from "@/lib/fluid";

const features = [
  { text: "можно пройти\nс телефона" },
  { text: "скидка после\nпрохождения" },
  { text: "займёт\n~4 часа" },
  { text: "не нужно\nпривязывать карту" },
];

function FeatureIcon() {
  return (
    <div
      className="flex items-center justify-center overflow-hidden shrink-0"
      style={{ width: f(32), height: f(32) }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M8 8h8v8H8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function CtaFooter() {
  return (
    <section
      className="flex flex-col"
      style={{ paddingTop: f(64), paddingLeft: f(20), paddingRight: f(20), gap: f(24) }}
    >
      {/* CTA Block */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{
          height: f(528),
          borderRadius: f(100),
          padding: f(64),
        }}
      >
        {/* Radial gradient background */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: f(100),
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

        {/* Content */}
        <div
          className="relative flex flex-col flex-1 items-center w-full"
          style={{ gap: f(48) }}
        >
          {/* Heading area */}
          <div
            className="flex flex-col flex-1 items-center justify-center"
            style={{ gap: f(32), padding: `0 ${f(180)}` }}
          >
            <h2
              className="font-sans font-normal text-white text-center"
              style={{ fontSize: f(40), lineHeight: "1" }}
            >
              Попробуй и узнай,
              <br />
              подойдёт ли тебе профессия
              <br />
              и наш подход к обучению
            </h2>
            {/* Heart decoration — positioned right */}
            <div
              className="absolute"
              style={{
                right: f(64 + 180 - 50),
                top: f(172),
                width: f(50),
                height: f(50),
                fontSize: f(40),
              }}
            >
              ❤️
            </div>
          </div>

          {/* Feature cards row */}
          <div
            className="flex items-center justify-center w-full"
            style={{ gap: f(8), padding: `0 ${f(64)}` }}
          >
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex flex-1 items-center"
                style={{
                  padding: f(24),
                  borderRadius: f(32),
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  gap: f(16),
                }}
              >
                <FeatureIcon />
                <p
                  className="font-sans font-medium text-white whitespace-pre-line"
                  style={{ fontSize: f(13), lineHeight: "1.2" }}
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between"
        style={{
          paddingBottom: f(24),
          paddingLeft: f(32),
          paddingRight: f(32),
        }}
      >
        <span
          className="font-sans font-normal whitespace-nowrap"
          style={{ fontSize: f(10), lineHeight: "1.4", color: "#888c92" }}
        >
          Политика конфиденциальности
        </span>
        <div className="flex items-center" style={{ gap: f(4) }}>
          <span
            className="font-sans font-normal whitespace-nowrap"
            style={{ fontSize: f(10), lineHeight: "1.4", color: "#888c92" }}
          >
            Сделано с
          </span>
          <span style={{ fontSize: f(12) }}>🧡</span>
          <span
            className="font-sans font-normal whitespace-nowrap"
            style={{ fontSize: f(10), lineHeight: "1.4", color: "#888c92" }}
          >
            командой QA Studio
          </span>
        </div>
      </div>
    </section>
  );
}
