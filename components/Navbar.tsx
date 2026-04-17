"use client";

import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
          <Logo size={32} color="#111111" />
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#111111" }}>
              Goodness Mbakara
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className={layoutStyles.menuGroup}>
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className={layoutStyles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={layoutStyles.mobileMenu}>
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
}
