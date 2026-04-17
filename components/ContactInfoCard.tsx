import { Twitter, Github, Linkedin, Mail } from "lucide-react";
import contactStyles from "./ContactSection.module.css";

export default function ContactInfoCard() {
  return (
    <div className={contactStyles.infoCard}>
      <h3 className={contactStyles.infoTitle}>Don't be a stranger.</h3>
      <p className={contactStyles.infoText}>
        Startups, protocols, open source — if it ships and it matters, I'm
        interested. Reach out anywhere.
      </p>
      <div className={contactStyles.socialLinks}>
        <a
          href="mailto:mbakaragoodness2003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={contactStyles.socialBtn}
        >
          <Mail size={16} />
          <span>Email</span>
        </a>
        <a
          href="https://twitter.com/goodnesmbakara"
          target="_blank"
          rel="noopener noreferrer"
          className={contactStyles.socialBtn}
        >
          <Twitter size={16} />
          <span>Twitter</span>
        </a>
        <a
          href="https://github.com/Goodnessmbakara"
          target="_blank"
          rel="noopener noreferrer"
          className={contactStyles.socialBtn}
        >
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/goodnessmbakara"
          target="_blank"
          rel="noopener noreferrer"
          className={contactStyles.socialBtn}
        >
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
