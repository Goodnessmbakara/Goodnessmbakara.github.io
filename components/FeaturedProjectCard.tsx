import styles from "./FeaturedProjectCard.module.css";
import { ExternalLink, Github } from "lucide-react";

interface FeaturedProjectCardProps {
  name: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  fallbackImageUrl?: string;
}

export default function FeaturedProjectCard({
  name,
  description,
  liveUrl,
  githubUrl,
  fallbackImageUrl,
}: FeaturedProjectCardProps) {
  return (
    <div className={styles.card}>
      {liveUrl ? (
        <div className={styles.previewWrapper}>
          <iframe
            src={liveUrl}
            title={name + " preview"}
            className={styles.iframe}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
            allowFullScreen
          />
          {/* fallback image if iframe fails */}
          {fallbackImageUrl && (
            <img
              src={fallbackImageUrl}
              alt={name + " preview"}
              className={styles.fallbackImg}
            />
          )}
        </div>
      ) : (
        <div className={styles.ghIconWrap}>
          <Github size={48} className={styles.ghIcon} />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.desc}>{description}</p>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Visit{" "}
            <ExternalLink
              size={18}
              style={{ marginLeft: 6, verticalAlign: "middle" }}
            />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            View on GitHub{" "}
            <Github
              size={18}
              style={{ marginLeft: 6, verticalAlign: "middle" }}
            />
          </a>
        )}
      </div>
    </div>
  );
}
