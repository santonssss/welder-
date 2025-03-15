import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-welding-dark/80 via-welding-dark/70 to-welding-dark"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="spark"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 1}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span
            className="inline-block py-1 px-3 text-welding-orange border border-welding-orange text-sm tracking-wider mb-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            НЕЗАВИСИМЫЙ МАСТЕР-СВАРЩИК
          </span>
          <h1
            className="text-5xl md:text-7xl font-industrial tracking-wider leading-tight mb-6 text-shadow animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            TALGAT MATENOV <br />
            <span className="text-welding-orange">
              ТОЧНОСТЬ И ПРОЧНОСТЬ КАЖДОГО СВАРНОГО ШВА
            </span>
          </h1>
          <p
            className="text-lg md:text-xl mb-8 text-welding-light/90 animate-fade-in opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            С более чем 25-летний практический опыт, я обеспечивают
            исключительную изготовление металлоконструкций и сварочные услуги
            для проектов любого сложности.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#contact" className="btn-primary">
              НАЙМИТЕ МЕНЯ СЕГОДНЯ
            </a>
            <a
              href="#services"
              className="border-2 border-welding-light text-welding-light font-bold py-3 px-6 rounded-sm transition-all duration-300 hover:border-welding-orange hover:text-welding-orange"
            >
              МОИ УСЛУГИ
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-welding-light/80 hover:text-welding-orange transition-colors"
        >
          <span className="text-sm mb-1">ПРОКРУТИТЕ ВНИЗ</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
