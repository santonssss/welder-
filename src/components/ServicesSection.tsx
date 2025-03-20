import {
  Hammer,
  Wrench,
  Laptop,
  Workflow,
  Zap,
  SquareStack,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-welding-orange" />,
      title: "MIG Сварка",
      description:
        "Точная и чистая MIG-сварка для широкого спектра материалов и толщин. Идеально подходит для производства и автомобильных работ.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-welding-orange" />,
      title: "TIG Сварка",
      description:
        "Высокоточная TIG-сварка для работы с нержавеющей сталью, алюминием и другими специальными материалами.",
    },
    {
      icon: <Hammer className="w-8 h-8 text-welding-orange" />,
      title: "Ручная дуговая сварка (MMA)",
      description:
        "Надёжная ручная сварка для строительных конструкций, ремонта и проектов, где важна глубокая проварка и прочность.",
    },
    {
      icon: <SquareStack className="w-8 h-8 text-welding-orange" />,
      title: "Металлообработка",
      description:
        "Изготовление металлоконструкций на заказ: резка, формовка и сборка металлических деталей по вашим чертежам и требованиям.",
    },
    {
      icon: <Laptop className="w-8 h-8 text-welding-orange" />,
      title: "Консультации по проектированию",
      description:
        "Профессиональные советы по выбору материалов, оптимизации конструкции и снижению производственных затрат.",
    },
    {
      icon: <Workflow className="w-8 h-8 text-welding-orange" />,
      title: "Выездные услуги",
      description:
        "Мобильная сварка и металлообработка прямо на объекте: ремонт, монтаж и выполнение работ на месте.",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-welding-dark-alt">
      <div className="absolute inset-0 bg-welding-gray/10 pattern-grid-lg"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">УСЛУГИ</h2>
          <p className="text-lg opacity-90">
            Полный спектр сварочных и металлообрабатывающих услуг с высочайшей
            точностью, надёжностью и мастерством исполнения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-industrial mb-3 group-hover:text-welding-orange transition-colors">
                {service.title}
              </h3>
              <p className="opacity-80">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            ЗАКАЗАТЬ УСЛУГУ
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
