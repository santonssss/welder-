import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { cn } from "@lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 flex items-center left-0 h-20 w-full z-50 transition-all duration-300",
        isScrolled ? " backdrop-blur-md py-2 shadow-lg" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-welding-orange" />
            <span className="font-industrial text-2xl tracking-wider text-welding-light">
              TALGAT<span className="text-welding-orange">MATENOV</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            <a href="#about" className="nav-link">
              ABOUT
            </a>
            <a href="#services" className="nav-link">
              SERVICES
            </a>
            <a href="#portfolio" className="nav-link">
              PORTFOLIO
            </a>
            <a href="#contact" className="nav-link">
              CONTACT
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none z-[100] text-welding-light hover:text-welding-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute z-50 top-full left-0 w-full bg-welding-gray/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <nav className="flex flex-col py-4">
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 text-welding-light hover:bg-welding-gray-light hover:text-welding-orange transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 text-welding-light hover:bg-welding-gray-light hover:text-welding-orange transition-colors"
          >
            SERVICES
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 text-welding-light hover:bg-welding-gray-light hover:text-welding-orange transition-colors"
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 text-welding-light hover:bg-welding-gray-light hover:text-welding-orange transition-colors"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
