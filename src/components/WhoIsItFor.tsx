import { f } from "@/lib/fluid";

const audiences = [
  "Хочешь быстро стартовать в IT без программирования\nи английского",
  "Хочешь построить карьеру в большой компании с понятным ростом",
  "Хочешь сменить профессию, но переживаешь,\nчто «уже поздно»",
  "Хочешь работать на удалёнке, а не сидеть в офисе",
];

function IconPlaceholder() {
  return (
    <div
      className="flex items-center justify-center overflow-hidden shrink-0"
      style={{
        width: f(48),
        height: f(48),
        borderRadius: f(20),
        padding: f(12),
        backgroundColor: "rgba(245, 245, 248, 0.1)",
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M8 8h8v8H8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function WhoIsItFor() {
  return (
    <section
      className="overflow-hidden"
      style={{ padding: `${f(64)} ${f(20)}` }}
    >
      <div
        className="relative flex flex-col items-start justify-between overflow-hidden"
        style={{
          height: f(640),
          padding: f(32),
          borderRadius: f(48),
          width: "100%",
        }}
      >
        {/* Background image placeholder — dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: f(48),
            background:
              "linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 50%, #2a2a2a 100%)",
          }}
        />
        {/* Faint photo overlay placeholder */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: f(48),
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Section heading */}
        <h2
          className="relative font-sans font-normal text-white text-center"
          style={{
            fontSize: f(40),
            lineHeight: "1",
            width: f(1096),
          }}
        >
          Кому подойдёт вводный курс
        </h2>

        {/* Cards — 2 columns × 2 rows, justify-between */}
        <div
          className="relative flex items-center justify-between"
          style={{ width: f(1096) }}
        >
          {/* Left column */}
          <div className="flex flex-col" style={{ gap: f(16), width: f(230) }}>
            <AudienceCard text={audiences[0]} />
            <AudienceCard text={audiences[2]} />
          </div>
          {/* Right column */}
          <div className="flex flex-col" style={{ gap: f(16), width: f(230) }}>
            <AudienceCard text={audiences[1]} />
            <AudienceCard text={audiences[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceCard({ text }: { text: string }) {
  return (
    <div
      className="flex flex-col items-start justify-between"
      style={{
        height: f(180),
        padding: f(24),
        borderRadius: f(32),
        border: "0.5px solid white",
        backgroundImage:
          "linear-gradient(90deg, rgba(170,168,168,1) 0%, rgba(170,168,168,1) 100%), linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 100%)",
        backgroundBlendMode: "multiply, normal",
        backgroundColor: "transparent",
      }}
    >
      <p
        className="font-sans font-medium text-white"
        style={{ fontSize: f(13), lineHeight: "1.2", whiteSpace: "pre-line" }}
      >
        {text}
      </p>
      <IconPlaceholder />
    </div>
  );
}
