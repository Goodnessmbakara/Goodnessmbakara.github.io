import type { CSSProperties } from "react";
import styles from "./FeaturedProjectCard.module.css";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectVisual } from "@/data/featuredProjects";
import ProjectMotifIcon from "./ProjectMotifs";

interface FeaturedProjectCardProps {
  name: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  visual: ProjectVisual;
}

export default function FeaturedProjectCard({
  name,
  description,
  liveUrl,
  githubUrl,
  visual,
}: FeaturedProjectCardProps) {
  return (
    <article className={styles.card}>
      <div
        className={styles.visual}
        style={
          {
            "--visual-from": visual.gradientFrom,
            "--visual-to": visual.gradientTo,
            "--visual-accent": visual.accent,
          } as CSSProperties
        }
      >
        <div className={styles.visualGlow} aria-hidden="true" />
        <div className={styles.motifWrap}>
          <ProjectMotifIcon motif={visual.motif} accent={visual.accent} />
        </div>
        <div className={styles.visualCopy}>
          <h3 className={styles.visualName}>{name}</h3>
          <p className={styles.visualTagline}>{visual.tagline}</p>
          <div className={styles.badges}>
            {visual.badges.map((badge) => (
              <span key={badge} className={styles.badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.buttonGroup}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              <ExternalLink size={16} />
              Visit Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              <Github size={16} />
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
