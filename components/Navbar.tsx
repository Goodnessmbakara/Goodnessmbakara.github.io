import Logo from "./Logo";
import { Button } from "./ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import layoutStyles from "./Layout.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className={layoutStyles.navbar}>
      <div className={layoutStyles.navbarContent}>
        <div className={layoutStyles.logoGroup}>
          <Logo size={40} />
          <div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Goodness Mbakara
            </div>
            <div style={{ fontSize: "0.85rem", color: "#666" }}>
              Software Engineer
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className={layoutStyles.menuGroup}>
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <Button
            onClick={() =>
              window.open("https://twitter.com/goodnesmbakara", "_blank")
            }
          >
            Connect <ExternalLink style={{ marginLeft: 6 }} size={16} />
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className={layoutStyles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={layoutStyles.mobileMenu}>
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <Button
            onClick={() =>
              window.open("https://twitter.com/goodnesmbakara", "_blank")
            }
          >
            Connect <ExternalLink style={{ marginLeft: 6 }} size={16} />
          </Button>
        </div>
      )}
    </nav>
  );
}
