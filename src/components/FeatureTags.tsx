import { f } from "@/lib/fluid";

const features = [
  {
    icon: "💻",
    title: "Без кода",
    description: "Не нужно уметь программировать — начни с ручного тестирования",
  },
  {
    icon: "🚀",
    title: "Для новичков",
    description: "Курс подходит тем, кто только начинает путь в IT",
  },
  {
    icon: "📋",
    title: "Реальная задача",
    description: "Выполнишь тестирование настоящего приложения",
  },
  {
    icon: "💬",
    title: "Консультация",
    description: "Получишь обратную связь от практикующего тестировщика",
  },
  {
    icon: "📊",
    title: "Рынок труда",
    description: "Узнаешь о зарплатах и востребованности профессии",
  },
  {
    icon: "🔍",
    title: "Вакансии",
    description: "Разберёшь реальные требования из вакансий на рынке",
  },
];

export function FeatureTags() {
  return (
    <section
      className="flex flex-col items-center"
      style={{ padding: `0 ${f(20)} ${f(64)}` }}
    >
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: f(8),
          maxWidth: f(1160),
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col"
            style={{
              backgroundColor: "#f5f5f8",
              borderRadius: f(12),
              padding: `${f(16)} ${f(12)}`,
              height: f(204),
              gap: f(8),
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: f(48),
                height: f(48),
                borderRadius: f(20),
                backgroundColor: "rgba(245,245,248,0.5)",
                fontSize: f(24),
              }}
            >
              {feature.icon}
            </div>
            <div
              className="font-sans font-medium text-dark"
              style={{ fontSize: f(13), lineHeight: "1.2" }}
            >
              {feature.title}
            </div>
            <div
              className="font-sans font-normal text-gray"
              style={{ fontSize: f(12), lineHeight: "1.4" }}
            >
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
