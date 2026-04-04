import { f } from "@/lib/fluid";

export function Header() {
  return (
    <header
      className="flex items-center justify-between"
      style={{ padding: `${f(32)} ${f(20)}`, width: f(1160), margin: "0 auto" }}
    >
      {/* Logo placeholder — replace with SVG from Figma */}
      <div
        className="relative overflow-hidden"
        style={{ width: f(134), height: f(28) }}
      >
        <div
          className="flex items-center font-sans font-medium"
          style={{ fontSize: f(18), lineHeight: "1.2", color: "#1f1f1f", gap: f(6) }}
        >
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: f(28),
              height: f(28),
              borderRadius: f(6),
              background: "linear-gradient(135deg, #ff4d00, #ff7733)",
            }}
          >
            <span className="text-white font-medium" style={{ fontSize: f(14) }}>Q</span>
          </div>
          <span>QA Studio</span>
        </div>
      </div>

      {/* Right: icon + tag */}
      <div className="flex items-center" style={{ gap: f(6) }}>
        {/* Arrow/star icon placeholder */}
        <div
          className="shrink-0"
          style={{ width: f(18), height: f(18), opacity: 0.7 }}
        >
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M9 1L11.5 6.5L17 9L11.5 11.5L9 17L6.5 11.5L1 9L6.5 6.5L9 1Z" stroke="#ff4042" strokeWidth="1.2" fill="none" />
          </svg>
        </div>
        <div
          className="flex items-center"
          style={{
            padding: f(12),
            borderRadius: f(20),
            border: "1px solid #ff4042",
          }}
        >
          <span
            className="font-sans font-normal bg-clip-text"
            style={{
              fontSize: f(12),
              lineHeight: "1.4",
              background: "linear-gradient(90deg, #fb4935, #f17316 53%, #fb9b00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Учим работать с ИИ
          </span>
        </div>
      </div>
    </header>
  );
}
