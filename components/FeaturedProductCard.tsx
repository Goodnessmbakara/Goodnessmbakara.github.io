import styles from "./FeaturedProductCard.module.css";
import { ExternalLink, Github } from "lucide-react";

interface FeaturedProductCardProps {
  name: string;
  description: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: "live" | "maintenance";
}

export default function FeaturedProductCard({
  name,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
  status,
}: FeaturedProductCardProps) {
  return (
    <div className={styles.card}>
      {imageUrl && liveUrl && (
        <div className={styles.imageWrapper}>
          <img
            src={imageUrl}
            alt={name + " preview"}
            className={styles.image}
          />
          {status === "live" && <span className={styles.liveBadge}>LIVE</span>}
        </div>
      )}
      {!imageUrl && githubUrl && (
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
