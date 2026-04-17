"use client";

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
          <div>
            <div
              style={{
                fontWeight: 600,
                fontSize: "0.9375rem",
                color: isMenuOpen ? "#ffffff" : "var(--text-primary)",
                transition: "color 0.3s",
              }}
            >
              GoodnessMbakara.eth
            </div>
          </div>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className={`${layoutStyles.hamburger} ${isMenuOpen ? layoutStyles.hamburgerOpen : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={layoutStyles.hamburgerLine}></span>
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

      {/* Full-screen mobile menu overlay */}
      <div
        className={`${layoutStyles.mobileOverlay} ${isMenuOpen ? layoutStyles.mobileOverlayOpen : ""}`}
      >
        <nav className={layoutStyles.mobileOverlayNav}>
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
        <div className={layoutStyles.mobileOverlayFooter}>
          <a
            href="https://twitter.com/goodnesmbakara"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/Goodnessmbakara"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/goodnessmbakara"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
