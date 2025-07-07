import { Twitter, Github, Linkedin, Mail } from "lucide-react";
import contactStyles from "./ContactSection.module.css";

export default function ContactInfoCard() {
  return (
    <div className={contactStyles.infoCard}>
      <h3 className={contactStyles.infoTitle}>Let's Connect</h3>
      <p className={contactStyles.infoText}>
        Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
      </p>
      <div className={contactStyles.socialLinks}>
        <a
          href="mailto:goodnessmbakara@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={contactStyles.socialBtn}
        >
          <Mail size={18} />
          <span>Email</span>
        </a>
        <a
          href="https://twitter.com/gooodnesmbakara"
          target="_blank"
          rel="noopener noreferrer"
          className={contactStyles.socialBtn}
        >
          <Twitter size={18} />
          <span>@gooodnesmbakara</span>
        </a>
        <a
          href="https://github.com/Goodnessmbakara"
          target="_blank"
          rel="noopener noreferrer"
          className={contactStyles.socialBtn}
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/goodnessmbakara"
          target="_blank"
          rel="noopener noreferrer"
          className={contactStyles.socialBtn}
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
} 