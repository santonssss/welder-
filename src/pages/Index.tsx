import AboutSection from "@components/AboutSection";
import ContactSection from "@components/ContactSection";
import Footer from "@components/Footer";
import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import PortfolioSection from "@components/PortfolioSection";
import ServicesSection from "@components/ServicesSection";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();

        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });

          history.pushState(null, "", anchor.hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
