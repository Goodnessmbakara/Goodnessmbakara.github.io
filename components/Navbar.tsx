"use client";

import Logo from "./Logo";
import { Menu, X } from "lucide-react";
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
    <>
      {/* Top-left logo bar */}
      <div className={layoutStyles.navbarTop}>
        <div className={layoutStyles.logoGroup}>
          <Logo size={32} color="#111111" />
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
              Goodness Mbakara
            </div>
          </div>
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

      {/* Right-side vertical nav (desktop) */}
      <nav className={layoutStyles.sideNav}>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("experience")}>Experience</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <div className={layoutStyles.sideNavLine}></div>
        <button
          className={layoutStyles.sideNavCta}
          onClick={() => scrollToSection("contact")}
        >
          Inquiry
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={layoutStyles.mobileMenu}>
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </>
  );
}
