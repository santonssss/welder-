import { cn } from "@lib/utils";
import { useState } from "react";
import bagazhImg from "../assets/багаж.jpg";
import chandelierImg from "../assets/люстра.jpg";
import gateImg from "../assets/ворота.jpg";
import hangerImg from "../assets/вешалка.jpg";
import doorImg from "../assets/двери.jpg";
import yardImg from "../assets/двор.jpg";
import pipeImg from "../assets/труба.jpg";
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};
const projects: Project[] = [
  {
    id: 1,
    title: "Изготовление багажника на Газель",
    category: "structural",
    image: bagazhImg,
    description:
      "Прочный металлический багажник на крышу Газели, изготовленный на заказ для перевозки грузов.",
  },
  {
    id: 2,
    title: "Кованая люстра",
    category: "custom",
    image: chandelierImg,
    description:
      "Эксклюзивная кованая люстра для интерьерного освещения в классическом стиле.",
  },
  {
    id: 3,
    title: "Металлические ворота",
    category: "artistic",
    image: gateImg,
    description:
      "Прочные металлические ворота с декоративными элементами для частного дома.",
  },
  {
    id: 4,
    title: "Металлическая вешалка",
    category: "industrial",
    image: hangerImg,
    description:
      "Функциональная и стильная металлическая вешалка для одежды на заказ.",
  },
  {
    id: 5,
    title: "Железные двери",
    category: "repair",
    image: doorImg,
    description:
      "Изготовление и установка надёжных металлических дверей для промышленного объекта.",
  },
  {
    id: 6,
    title: "Ограждение двора",
    category: "artistic",
    image: yardImg,
    description:
      "Металлическое ограждение двора с элементами художественной ковки.",
  },
  {
    id: 7,
    title: "Изготовление трубной конструкции",
    category: "structural",
    image: pipeImg,
    description:
      "Сварная трубная конструкция для инженерных коммуникаций и промышленных объектов.",
  },
];

const categories = [
  "all",
  "structural",
  "custom",
  "artistic",
  "industrial",
  "repair",
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">ПОРТФОЛИО</h2>
          <p className="text-lg opacity-90">
            Ознакомьтесь с выполненными проектами, демонстрирующими качество,
            универсальность и мастерство сварочных и металлоизготовительных
            услуг Талгата.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm",
                activeCategory === category
                  ? "bg-welding-orange text-white"
                  : "bg-welding-gray hover:bg-welding-gray-light text-welding-light"
              )}
            >
              {category === "all" ? "Все" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="metal-background group cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-welding-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-industrial mb-2 text-welding-light">
                      {project.title}
                    </h3>
                    <p className="text-sm text-welding-light/80 line-clamp-2">
                      {project.description}
                    </p>
                    <span className="inline-block mt-2 text-welding-orange text-sm uppercase">
                      Смотреть проект
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-welding-dark/80 backdrop-blur-sm">
            <div
              className="bg-welding-gray max-w-3xl w-full rounded-md shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-industrial mb-1">
                      {selectedProject.title}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-welding-orange text-white text-xs uppercase rounded-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-welding-light/80 hover:text-welding-orange"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="opacity-90 mb-6">{selectedProject.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-welding-orange font-semibold mb-1">
                      Детали проекта
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary py-2 px-4 text-sm"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
