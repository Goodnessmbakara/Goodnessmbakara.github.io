"use client";

import AnimatedProfileCard from "@/components/AnimatedProfileCard";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import styles from "../components/HeroSection.module.css";
import layoutStyles from "../components/Layout.module.css";
import experienceStyles from "../components/ExperienceSection.module.css";
import projectsStyles from "../components/ProjectsSection.module.css";
import contactStyles from "../components/ContactSection.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

const featuredProjects = [
  {
    name: "Tilt Pay",
    description:
      "Mobile payment app built on Solana blockchain. Instant, secure payments — online, in-store or peer-to-peer. No hardware costs, no hidden fees, just 1% on tap-to-pay. Supports universal currency with zero-fee transfers.",
    liveUrl: "https://tilt-pay.com",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://tilt-pay.com",
  },
  {
    name: "AliveHome",
    description:
      "Nigeria's first AI-powered real estate ecosystem designed to reduce fraud and improve transparency. Features verified listings, secure communication, and virtual tours.",
    liveUrl: "https://alivehome.co",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://alivehome.co",
  },
  {
    name: "Bucx",
    description:
      "Borderless banking solution powered by stablecoins. Open virtual USD accounts, receive payments instantly, and spend globally with your virtual card.",
    liveUrl: "https://www.bucx.app/",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://www.bucx.app/",
  },
  {
    name: "YouSpeak",
    description:
      "Speak, Learn and Live the Language. A global platform where AI meets Conversation, Community, and Challenges for Individuals, Schools, and Tutors.",
    liveUrl: "https://youspeakhq.com",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://youspeakhq.com",
  },
  {
    name: "VoxCard",
    description:
      "Decentralized savings platform built on XION blockchain. Enables users to create and manage rotating savings circles with smart contract security and gasless transactions.",
    liveUrl: "https://voxcard.vercel.app",
    githubUrl: "https://github.com/Goodnessmbakara/voxcard",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://voxcard.vercel.app",
  },
  {
    name: "Kiipa",
    description:
      "Decentralized digital inheritance platform built on Lisk blockchain. Enables secure, transparent, and automated inheritance management with smart contracts.",
    liveUrl: "https://kiipa.vercel.app/",
    githubUrl: "https://github.com/Goodnessmbakara/kiipa",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://kiipa.vercel.app/",
  },
  {
    name: "Medicore AI",
    description:
      "AI-powered healthcare platform for medical diagnosis and patient management. Integrates machine learning models for predictive healthcare analytics.",
    liveUrl: "https://medicore-ai.netlify.app/",
    githubUrl: "https://github.com/Goodnessmbakara/medicore-ai",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://medicore-ai.netlify.app/",
  },
  {
    name: "ClaimClarity",
    description:
      "Insurance claim management platform with automated processing, fraud detection, and customer portal for seamless claim handling.",
    liveUrl: "https://claimclarity.vercel.app/",
    githubUrl: "https://github.com/Goodnessmbakara/claimclarity",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://claimclarity.vercel.app/",
  },
  {
    name: "Solana Fellowship Server",
    description:
      "Rust-based Solana development server for keypair generation, SPL token operations, and message signing. Selected for Superdevs Academy (Top 400/5000+).",
    githubUrl: "https://github.com/Goodnessmbakara/solana-fellowship-server",
  },
];

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Parallax Background */}
      <div className={styles.heroBackground}>
        <div className={styles.heroBackgroundText}>GOODNESS</div>
      </div>

      <div className={layoutStyles.body}>
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className={styles.heroSection}>
          <div className={layoutStyles.container}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "4rem",
              }}
            >
              <div className={styles.heroContent}>
                <span className={styles.overline}>Software Engineer & Builder</span>
                <h1 className={styles.headline}>
                  Ship it. Then ship the next one.
                </h1>
                <p className={styles.intro}>
                  The gap between an idea and a product is discipline. I close
                  that gap — with code, with teams, with deadlines that don't
                  bend. Seven hackathons won. Thirty engineers led. Products
                  people actually use.
                </p>
                <div className={styles.ctaGroup}>
                  <button
                    className={styles.primaryBtn}
                    onClick={() => scrollToSection("projects")}
                  >
                    View Projects
                  </button>
                  <button
                    className={styles.secondaryBtn}
                    onClick={() => scrollToSection("contact")}
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  minWidth: 300,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AnimatedProfileCard />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={layoutStyles.sectionPadding}>
          <div className={layoutStyles.container}>
            <div className={projectsStyles.header}>
              <div className={projectsStyles.sectionLabel}>Work</div>
              <h2>Proof of work. Not proof of concept.</h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  maxWidth: 560,
                  marginTop: "1rem",
                }}
              >
                Every project here is live. Real users, real problems, real
                stakes. Payments in Solana. Real estate in Lagos. Savings
                circles on-chain. This is what shipping looks like.
              </p>
            </div>
            <div
              style={{
                maxWidth: 960,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {featuredProjects.map((project, idx) => (
                <FeaturedProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`${layoutStyles.sectionPadding} ${experienceStyles.bgExperience}`}
        >
          <div className={layoutStyles.container}>
            <div className={experienceStyles.header}>
              <div className={experienceStyles.sectionLabel}>Experience</div>
              <h2>You learn by building. I built a lot.</h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  maxWidth: 520,
                  marginTop: "1rem",
                }}
              >
                No one hands you a team of thirty. You earn it by shipping when
                others are still planning. Every role here taught me something
                lectures never could.
              </p>
            </div>

            <div className={experienceStyles.grid}>
              <div className={experienceStyles.card}>
                <div className={experienceStyles.flex}>
                  <div>
                    <h3>Team Lead & Backend Engineer</h3>
                    <div style={{ color: "var(--text-secondary)", marginTop: 4 }}>
                      HngX
                    </div>
                  </div>
                  <span className={experienceStyles.badge}>Leadership</span>
                </div>
                <ul className={experienceStyles.list}>
                  <li className={experienceStyles.flex}>
                    <div className={experienceStyles.dot}></div>
                    <span>
                      Led 30+ engineers across UI/UX, Frontend, and Backend
                      teams
                    </span>
                  </li>
                  <li className={experienceStyles.flex}>
                    <div className={experienceStyles.dot}></div>
                    <span>
                      Built e-assessment and event management platforms
                    </span>
                  </li>
                  <li className={experienceStyles.flex}>
                    <div className={experienceStyles.dot}></div>
                    <span>
                      Developed Chrome extension backend for screen recording
                    </span>
                  </li>
                </ul>
                <div className={experienceStyles.text}>Sep 2023 — Oct 2023</div>
              </div>

              <div className={experienceStyles.card}>
                <div className={experienceStyles.flex}>
                  <div>
                    <h3>Full Stack Developer</h3>
                    <div style={{ color: "var(--text-secondary)", marginTop: 4 }}>
                      ZIDIO
                    </div>
                  </div>
                  <span className={experienceStyles.badge}>Full Stack</span>
                </div>
                <ul className={experienceStyles.list}>
                  <li className={experienceStyles.flex}>
                    <div className={experienceStyles.dot}></div>
                    <span>
                      Built certificate/job tools and job posting portal
                    </span>
                  </li>
                  <li className={experienceStyles.flex}>
                    <div className={experienceStyles.dot}></div>
                    <span>Integrated live job updates and notifications</span>
                  </li>
                  <li className={experienceStyles.flex}>
                    <div className={experienceStyles.dot}></div>
                    <span>Designed MongoDB schemas for dynamic listings</span>
                  </li>
                </ul>
                <div className={experienceStyles.text}>Aug 2024 — Nov 2024</div>
              </div>

              <div className={experienceStyles.card}>
                <div className={experienceStyles.flex}>
                  <div>
                    <h3>Backend Engineer</h3>
                    <div style={{ color: "var(--text-secondary)", marginTop: 4 }}>
                      African Leaders X (ALX)
                    </div>
                  </div>
                  <span className={experienceStyles.badge}>Backend</span>
                </div>
                <ul className={experienceStyles.list}>
                  <li className={experienceStyles.flex}>
                    <div className={experienceStyles.dot}></div>
                    <span>
                      Database design, Redis, SQL/NoSQL, authentication systems
                    </span>
                  </li>
                  <li className={experienceStyles.flex}>
                    <div className={experienceStyles.dot}></div>
                    <span>Integrated caching for enhanced performance</span>
                  </li>
                </ul>
                <div className={experienceStyles.text}>Jun 2022 — May 2023</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`${layoutStyles.sectionPadding} ${contactStyles.bgContact}`}
        >
          <div className={layoutStyles.container}>
            <div className={contactStyles.header}>
              <div className={contactStyles.sectionLabel}>Contact</div>
              <h2>Your move.</h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  maxWidth: 480,
                  marginTop: "1rem",
                }}
              >
                I build things with people who care about the outcome. If that
                sounds like you, let's talk.
              </p>
            </div>

            <div className={contactStyles.contactGrid}>
              <ContactInfoCard />
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
