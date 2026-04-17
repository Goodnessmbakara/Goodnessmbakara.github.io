import Logo from "./Logo";
import footerStyles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerBrand}>
          <Logo size={28} color="rgba(255,255,255,0.6)" />
          <span>Goodness Mbakara</span>
        </div>
        <div>
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
