"use client";
import AnimatedProfileCard from "@/components/AnimatedProfileCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink, Github, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import Logo from "../components/Logo";
import styles from "../components/HeroSection.module.css";
import layoutStyles from "../components/Layout.module.css";
import experienceStyles from "../components/ExperienceSection.module.css";
import projectsStyles from "../components/ProjectsSection.module.css";
import contactStyles from "../components/ContactSection.module.css";
import footerStyles from "../components/Footer.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

const featuredProjects = [
  {
    name: "VoxCard",
    description:
      "Decentralized savings platform built on XION blockchain (CosmWasm). Enables users to create and manage rotating savings circles with smart contract security, gasless transactions, and partial payment support. Features user-created plans, emergency withdrawals, and treasury-backed gasless operations.",
    liveUrl: "https://voxcard.vercel.app",
    githubUrl: "https://github.com/Goodnessmbakara/voxcard",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://voxcard.vercel.app",
  },
  {
    name: "Kiipa",
    description:
      "Decentralized digital inheritance platform built on Lisk blockchain. Enables secure, transparent, and automated inheritance management with smart contracts and blockchain technology.",
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
      "Comprehensive insurance claim management platform with automated processing, fraud detection, and customer portal for seamless claim handling.",
    liveUrl: "https://claimclarity.vercel.app/",
    githubUrl: "https://github.com/Goodnessmbakara/claimclarity",
    fallbackImageUrl:
      "https://image.thum.io/get/width/800/crop/600/noanimate/https://claimclarity.vercel.app/",
  },
  {
    name: "Solana Fellowship Server",
    description:
      "Rust-based Solana development server for keypair generation, SPL token operations, message signing, and more. Selected for Superdevs Academy (Top 400/5000+).",
    githubUrl: "https://github.com/Goodnessmbakara/solana-fellowship-server",
  },
  {
    name: "Neon Aave Flash Loan",
    description:
      "Cross-chain flash loan implementation using Neon EVM and Aave protocol. Enables arbitrage opportunities across different blockchain networks.",
    githubUrl: "https://github.com/Goodnessmbakara/neon-aave-loan",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="test-bg text-center">
        TEST: Tailwind custom class is working!
      </div>
      <div className={layoutStyles.body}>
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className={layoutStyles.sectionPadding}>
          <div className={layoutStyles.container}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "3rem",
              }}
            >
              <div
                className={styles.heroContent}
                style={{ flex: 1, minWidth: 300 }}
              >
                <h1 className={styles.headline}>
                  Software Engineer & Blockchain Developer
                </h1>
                <p className={styles.intro}>
                  I build scalable applications and innovative blockchain
                  solutions. Passionate about Web3, DeFi, and creating impactful
                  technology.
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
                  minWidth: 320,
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
              <h2 className="text-gradient-primary mb-4">Featured Projects</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                A selection of my most impactful work in blockchain, DeFi, and
                software development
              </p>
            </div>
            <div
              style={{
                maxWidth: 950,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem",
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
          className={
            layoutStyles.sectionPadding + " " + experienceStyles.bgExperience
          }
        >
          <div className={layoutStyles.container}>
            <div className={experienceStyles.header}>
              <h2 className="text-gradient-primary mb-4">
                Professional Experience
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                My journey in software engineering, from backend development to
                team leadership
              </p>
            </div>

            <div className={experienceStyles.grid}>
              {/* Team Lead & Backend Engineer – HngX */}
              <div className={experienceStyles.card}>
                <div className={experienceStyles.flex}>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Team Lead & Backend Engineer
                    </h3>
                    <div className="text-accent-950 font-medium mb-2">HngX</div>
                  </div>
                  <Badge className="bg-accent-100 text-accent-950 border-accent-200">
                    Leadership
                  </Badge>
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
                <div className={experienceStyles.text}>Sep 2023 - Oct 2023</div>
              </div>

              {/* Full Stack Developer – ZIDIO */}
              <div className={experienceStyles.card}>
                <div className={experienceStyles.flex}>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Full Stack Developer
                    </h3>
                    <div className="text-primary-950 font-medium mb-2">
                      ZIDIO
                    </div>
                  </div>
                  <Badge className="bg-primary-100 text-primary-950 border-primary-200">
                    Full Stack
                  </Badge>
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
                <div className={experienceStyles.text}>Aug 2024 - Nov 2024</div>
              </div>

              {/* Backend Engineer – ALX */}
              <div className={experienceStyles.card}>
                <div className={experienceStyles.flex}>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Backend Engineer
                    </h3>
                    <div className="text-neutral-700 font-medium mb-2">
                      African Leaders X (ALX)
                    </div>
                  </div>
                  <Badge className="bg-neutral-100 text-neutral-700 border-neutral-200">
                    Backend
                  </Badge>
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
                <div className={experienceStyles.text}>Jun 2022 - May 2023</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={
            layoutStyles.sectionPadding + " " + contactStyles.bgContact
          }
        >
          <div className={layoutStyles.container}>
            <div className={contactStyles.header}>
              <h2 className="text-gradient-primary mb-4">Get In Touch</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations,
                or just having a chat about technology
              </p>
            </div>

            <div className={contactStyles.contactGrid}>
              <ContactInfoCard />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
