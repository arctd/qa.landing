import { f } from "@/lib/fluid";

const audiences = [
  {
    icon: "🔄",
    title: "Хочешь сменить профессию",
    description:
      "Устал от текущей работы и ищешь востребованную IT-профессию с комфортным входом",
  },
  {
    icon: "🎓",
    title: "Студент или выпускник",
    description:
      "Хочешь начать карьеру в IT, но не знаешь, с чего начать и подойдёт ли тебе",
  },
  {
    icon: "💡",
    title: "Интересуешься IT",
    description:
      "Слышал про тестирование, но хочешь попробовать на практике, прежде чем вкладываться",
  },
  {
    icon: "📱",
    title: "Хочешь работать удалённо",
    description:
      "Ищешь профессию с возможностью удалённой работы и гибким графиком",
  },
];

export function WhoIsItFor() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: `${f(64)} ${f(20)}`,
        background:
          "linear-gradient(180deg, #1f1f1f 0%, #282829 100%)",
        borderRadius: f(32),
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{ gap: f(50) }}
      >
        {/* Section heading */}
        <h2
          className="font-sans font-normal text-white text-center"
          style={{ fontSize: f(40), lineHeight: "1.0" }}
        >
          Кому подойдёт курс
        </h2>

        {/* Cards grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: f(16),
            width: f(1096),
            maxWidth: "100%",
          }}
        >
          {audiences.map((item) => (
            <div
              key={item.title}
              className="flex flex-col"
              style={{
                padding: f(24),
                borderRadius: f(32),
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                height: f(180),
                gap: f(12),
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: f(48),
                  height: f(48),
                  borderRadius: f(20),
                  backgroundColor: "rgba(245, 245, 248, 0.1)",
                  fontSize: f(24),
                }}
              >
                {item.icon}
              </div>
              <div
                className="font-sans font-medium text-white"
                style={{ fontSize: f(13), lineHeight: "1.2" }}
              >
                {item.title}
              </div>
              <div
                className="font-sans font-normal"
                style={{
                  fontSize: f(12),
                  lineHeight: "1.4",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
