import { f } from "@/lib/fluid";

export function FloatingCta() {
  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50"
      style={{ bottom: f(20) }}
    >
      <button
        className="gradient-orange inner-shadow text-white font-sans font-medium cursor-pointer whitespace-nowrap"
        style={{
          padding: `${f(16)} ${f(32)}`,
          borderRadius: f(100),
          fontSize: f(14),
          lineHeight: "1.2",
          border: "none",
        }}
      >
        Начать бесплатно
      </button>
    </div>
  );
}
