"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import layoutStyles from "./Layout.module.css";
import styles from "./WinsSection.module.css";
import { EXPAND_WINS_EVENT, wins, winsSummary } from "@/data/wins";

export default function WinsSection() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const expand = () => {
      if (detailsRef.current) {
        detailsRef.current.open = true;
      }
    };
    window.addEventListener(EXPAND_WINS_EVENT, expand);
    return () => window.removeEventListener(EXPAND_WINS_EVENT, expand);
  }, []);

  return (
    <section
      id="wins"
      className={`${layoutStyles.sectionPadding} ${styles.section}`}
    >
      <div className={layoutStyles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Wins</div>
          <h2>Receipts over rumors.</h2>
        </div>

        <details ref={detailsRef} className={styles.disclosure}>
          <summary className={styles.summaryRow}>
            <span className={styles.summaryText}>{winsSummary}</span>
            <ChevronDown
              size={20}
              className={styles.chevron}
              aria-hidden="true"
            />
          </summary>

          <div className={styles.panelInner}>
            <p className={styles.panelLead}>
              Hackathon podiums and cohort awards — each with public proof.
            </p>
            <ul className={styles.list}>
              {wins.map((win) => (
                <li key={win.title} className={styles.item}>
                  <div className={styles.itemTop}>
                    <h3 className={styles.title}>{win.title}</h3>
                    <span className={styles.place}>{win.place}</span>
                  </div>
                  <p className={styles.meta}>{win.meta}</p>
                  <p className={styles.detail}>{win.detail}</p>
                  <div className={styles.links}>
                    {win.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        <ExternalLink size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </section>
  );
}
