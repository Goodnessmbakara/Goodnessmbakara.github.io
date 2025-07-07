import Logo from "./Logo";
import footerStyles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerBrand}>
          <Logo size={32} />
          <div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Goodness Mbakara</div>
            <div style={{ fontSize: "0.85rem", color: "#e0e7ff" }}>Software Engineer</div>
          </div>
        </div>
        <div style={{ fontSize: "0.95rem", opacity: 0.85 }}>
          © 2024 Goodness Mbakara. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 