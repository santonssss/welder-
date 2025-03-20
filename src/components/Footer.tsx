import { Flame, Instagram } from "lucide-react";
import Telegram from "../assets/tg-icon.png";

const Footer = () => {
  return (
    <footer className="bg-welding-dark border-t border-welding-gray-light/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="w-8 h-8 text-welding-orange" />
              <span className="font-industrial text-2xl tracking-wider text-welding-light">
                TALGAT<span className="text-welding-orange">MATENOV</span>
              </span>
            </div>
            <p className="text-welding-light/70 mb-6">
              Независимый мастер-сварщик с опытом более 25 лет. Качество,
              точность и надёжность в каждом проекте.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/master.as.3762"
                target="_blank"
                rel="noopener noreferrer"
                className="text-welding-light/70 hover:text-welding-orange transition-colors"
              >
                <Instagram size={50} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-industrial mb-4">УСЛУГИ</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Сварка MIG
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Сварка TIG
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Ручная дуговая сварка
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Металлоконструкции
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Консультации по проектам
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Выездные работы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-industrial mb-4">БЫСТРЫЕ ССЫЛКИ</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Обо мне
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Портфолио
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-industrial mb-4">КОНТАКТЫ</h3>
            <ul className="space-y-2">
              <li className="text-welding-light/70">г. Нукус, Узбекистан</li>
              <li>
                <a
                  href="tel:+998333714115"
                  className="text-welding-light/70 hover:text-welding-orange transition-colors"
                >
                  +998 33 371 41 15
                </a>
              </li>
              <li className="text-welding-light/70">
                Работаю круглосуточно
                <br />
                Выезд по Казахстану, России и Узбекистану
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-welding-gray-light/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-welding-light/60 text-sm">
            © {new Date().getFullYear()} Talgat Matenov. Все права защищены.
          </p>
          <p className="text-welding-light/60 text-sm mt-2 md:mt-0 flex items-center space-x-2">
            <span>
              Разработал сайт Калмуратов Сарвар. Сделано с точностью и
              профессионализмом
            </span>
            <a
              href="https://t.me/santohah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-welding-orange transition-colors"
            >
              <img src={Telegram} alt="иконка телеграмма" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
