"use client";

import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";
import { GraduationCap, Crown, Code, Zap, Star, Trophy } from "lucide-react";

export default function AnimatedProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);

  const floatingIcons = [
    { Icon: Code, style: { top: "-18px", left: "60%" } },
    { Icon: Zap, style: { top: "20%", left: "-18px" } },
    { Icon: Star, style: { bottom: "-18px", left: "30%" } },
    { Icon: Trophy, style: { bottom: "10%", right: "-18px" } },
  ];

  const achievements = [
    "4X Hackathon Winner",
    "Team Leader (30+ Engineers)",
    "CS Grad",
    "Blockchain Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.profileCardWrap}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.profileCard}>
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, style }, idx) => (
          <div
            key={idx}
            className={styles.floatingIcon}
            style={{
              ...style,
              transform: isHovered ? "scale(1.2)" : "scale(1)",
              transition: "transform 0.3s",
            }}
          >
            <Icon size={22} color="#1a237e" opacity={0.5} />
          </div>
        ))}
        {/* Profile Photo */}
        <div className={styles.profilePhoto}>
          <img src="/myprofilephoto.jpg" alt="Goodness Mbakara" />
        </div>
        {/* Name & Title */}
        <div
          className={styles.profileFacts}
          style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 2 }}
        >
          Goodness Mbakara
        </div>
        <div
          className={styles.profileFacts}
          style={{ color: "#1a237e", fontWeight: 500, marginBottom: 8 }}
        >
          Software Engineer & Blockchain Dev
        </div>
        {/* Animated Achievement Badge */}
        <div className={styles.profileHighlights}>
          <span className={styles.highlight}>{achievements[currentIcon]}</span>
        </div>
        {/* Quick Facts */}
        <div className={styles.profileFacts}>
          <GraduationCap
            size={16}
            style={{ marginRight: 4, verticalAlign: "middle" }}
          />{" "}
          University of Uyo Graduate
        </div>
        <div className={styles.profileFacts}>
          <Crown
            size={14}
            style={{ marginRight: 4, verticalAlign: "middle" }}
          />{" "}
          Team Leader, GDSC Mentor
        </div>
      </div>
    </div>
  );
}
