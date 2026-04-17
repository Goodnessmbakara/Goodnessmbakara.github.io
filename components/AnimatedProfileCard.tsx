"use client";

import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

export default function AnimatedProfileCard() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const achievements = [
    "7 Hackathons Won",
    "30+ Engineers Led",
    "Ships on Deadline",
    "Builds On-Chain",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.profileCardWrap}>
      <div className={styles.profileCard}>
        <div className={styles.profilePhoto}>
          <img src="/myprofilephoto.jpg" alt="Goodness Mbakara" />
        </div>
        <div
          style={{
            fontWeight: 600,
            fontSize: "1.0625rem",
            color: "var(--text-primary)",
            marginBottom: 2,
          }}
        >
          Goodness Mbakara
        </div>
        <div className={styles.profileFacts}>
          Software Engineer & Blockchain Dev
        </div>
        <div className={styles.profileHighlights}>
          <span className={styles.highlight}>{achievements[currentIdx]}</span>
        </div>
        <div className={styles.profileFacts} style={{ marginTop: "0.5rem" }}>
          University of Uyo Graduate
        </div>
      </div>
    </div>
  );
}
