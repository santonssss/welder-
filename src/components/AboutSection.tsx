import { CircleDashed, Award, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">Обо мне</h2>
            <p className="text-lg mb-6 opacity-90">
              Я, Талгат Матанов, мастер-сварщик с более чем 25-летним опытом в
              области промышленной сварки и металлообработки. За годы своей
              карьеры я заслужил репутацию специалиста, выполняющего работу с
              исключительным качеством, точностью и надёжностью в каждом
              проекте, за который берусь.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-welding-orange mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Сертифицированный мастер-сварщик
                  </h3>
                  <p className="opacity-80">
                    Я сертификацию в рамках нескольких методов сварки с
                    предварительным квалификации в специализированных
                    материалов, обеспечивающих высокое качество работы.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-welding-orange mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Производственный опыт
                  </h3>
                  <p className="opacity-80">
                    Мой опыт охватывает автомобилестроение, строительство,
                    производство и пользовательские отраслей производства, давая
                    мне разнообразный набор навыков.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-welding-orange mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Приверженность качеству
                  </h3>
                  <p className="opacity-80">
                    Каждый проект, за который я берусь, соответствует самым
                    высоким стандартам качества, долговечности и эстетического
                    совершенства - я стою за свою работу.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-industrial text-welding-orange mb-1">
                  25+
                </div>
                <div className="text-sm opacity-80">
                  МНОГОЛЕТНИЙ ОПЫТ РАБОТЫ
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-industrial text-welding-orange mb-1">
                  500+
                </div>
                <div className="text-sm opacity-80">ЗАВЕРШЕННЫЕ ПРОЕКТЫ</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-industrial text-welding-orange mb-1">
                  100%
                </div>
                <div className="text-sm opacity-80">УДОВЛЕТВОРЕНИЕ</div>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-block">
              НАЙМИТЕ МЕНЯ
            </a>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="metal-background p-2 rounded-md rotate-3 shadow-xl">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="https://img.freepik.com/free-photo/welder-working-night_23-2151933427.jpg?t=st=1742490194~exp=1742493794~hmac=486464d63ed8bd30990733d31a003f54ce02635e85bb280deac61e6b54ad0ad2&w=900"
                  alt="Talgat working on a welding project"
                  className="w-full h-auto object-cover rounded-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-welding-dark/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <CircleDashed className="w-12 h-12 text-welding-orange" />
                    <div>
                      <p className="text-welding-light text-xl font-industrial">
                        TALGAT MATENOV
                      </p>
                      <p className="text-welding-light/80">
                        Мастер-сварщик и изготовитель
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-welding-gray rounded-md p-4 shadow-xl border border-welding-gray-lighter/30">
              <div className="flex items-center gap-2">
                <Award className="w-8 h-8 text-welding-orange" />
                <div>
                  <p className="text-sm opacity-80">ПРОВЕРЕННЫЙ</p>
                  <p className="font-bold">МАСТЕР СВАРЩИК</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
