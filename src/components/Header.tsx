import { f } from "@/lib/fluid";

export function Header() {
  return (
    <header
      className="flex items-center justify-between"
      style={{ padding: `${f(32)} ${f(20)}` }}
    >
      {/* Logo placeholder */}
      <div
        className="font-sans font-medium text-dark"
        style={{ fontSize: f(20), lineHeight: "1.2" }}
      >
        QA Studio
      </div>

      {/* Right button */}
      <div
        className="flex items-center rounded-full"
        style={{
          padding: `${f(12)} ${f(12)}`,
          gap: f(6),
          borderRadius: f(20),
          border: "1px solid #ff4042",
        }}
      >
        <span
          className="font-sans font-medium text-dark"
          style={{ fontSize: f(12), lineHeight: "1.2" }}
        >
          🤖 Учим работать с ИИ
        </span>
      </div>
    </header>
  );
}
