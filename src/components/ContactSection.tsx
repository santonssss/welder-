import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/male-working-with-welding-torch_181624-47275.jpg?ga=GA1.1.482794500.1737645301&semt=ais_hybrid')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      <div className="container  mx-auto px-6 relative z-10">
        <div className="text-center  max-w-2xl mx-auto mb-16">
          <h2 className="section-title">CONTACT ME</h2>
          <p className="text-lg opacity-90">
            Ready to discuss your project? Get in touch for expert consultation
            and exceptional welding services tailored to your needs.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="space-y-6">
            <div className="metal-background p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-welding-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-industrial mb-2">Локация</h3>
                  <p className="opacity-80">Узбекистан</p>
                  <p className="opacity-80">город Нукус</p>
                </div>
              </div>
            </div>

            <div className="metal-background p-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-welding-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-industrial mb-2">
                    Номер телефона
                  </h3>
                  <a href="tel:+998333714115">+998 33 371 41 15</a>{" "}
                  <a
                    href="https://instagram.com/master.as.3762"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-welding-light/70 hover:text-welding-orange transition-colors"
                  >
                    <Instagram size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div className="metal-background p-6">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-welding-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-industrial mb-2">ДОСТУПНОСТЬ</h3>
                  <p className="opacity-80">Работаем круглосуточно</p>
                  <p className="opacity-80">
                    Выезд на объекты по России, Казахстану и Узбекистану
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
