"use client";
import AnimatedProfileCard from "@/components/AnimatedProfileCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink, Github, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 scrollbar-thin">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <div className="hidden sm:block">
                <div className="text-lg font-semibold text-neutral-900">
                  Goodness Mbakara
                </div>
                <div className="text-xs text-neutral-500">
                  Software Engineer
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-neutral-600 hover:text-primary-950 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-neutral-600 hover:text-primary-950 transition-colors font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-neutral-600 hover:text-primary-950 transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-neutral-600 hover:text-primary-950 transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() =>
                  window.open("https://twitter.com/gooodnesmbakara", "_blank")
                }
                className="btn-primary"
              >
                Connect <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-neutral-600 hover:text-primary-950 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-200 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-neutral-600 hover:text-primary-950 transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-left text-neutral-600 hover:text-primary-950 transition-colors font-medium"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-neutral-600 hover:text-primary-950 transition-colors font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-neutral-600 hover:text-primary-950 transition-colors font-medium"
                >
                  Contact
                </button>
                <Button
                  onClick={() =>
                    window.open("https://twitter.com/gooodnesmbakara", "_blank")
                  }
                  className="btn-primary w-fit"
                >
                  Connect <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section-padding pt-32">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <Logo size={80} />
              </div>
              <h1 className="text-gradient-primary mb-6">
                Software Engineer & Blockchain Developer
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl">
                I build scalable applications and innovative blockchain
                solutions. Passionate about Web3, DeFi, and creating impactful
                technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="btn-primary"
                >
                  View Projects
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="btn-secondary"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Profile Card */}
            <div className="flex-1 flex justify-center">
              <AnimatedProfileCard />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-gradient-primary mb-4">
              Professional Experience
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              My journey in software engineering, from backend development to
              team leadership
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Team Lead & Backend Engineer – HngX */}
            <div className="card-elegant p-8">
              <div className="flex items-start justify-between mb-4">
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
              <ul className="text-neutral-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Led 30+ engineers across UI/UX, Frontend, and Backend teams
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built e-assessment and event management platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Developed Chrome extension backend for screen recording
                  </span>
                </li>
              </ul>
              <div className="text-sm text-neutral-500">
                Sep 2023 - Oct 2023
              </div>
            </div>

            {/* Full Stack Developer – ZIDIO */}
            <div className="card-elegant p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Full Stack Developer
                  </h3>
                  <div className="text-primary-950 font-medium mb-2">ZIDIO</div>
                </div>
                <Badge className="bg-primary-100 text-primary-950 border-primary-200">
                  Full Stack
                </Badge>
              </div>
              <ul className="text-neutral-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Built certificate/job tools and job posting portal
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated live job updates and notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed MongoDB schemas for dynamic listings</span>
                </li>
              </ul>
              <div className="text-sm text-neutral-500">
                Aug 2024 - Nov 2024
              </div>
            </div>

            {/* Backend Engineer – ALX */}
            <div className="card-elegant p-8 lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
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
              <ul className="text-neutral-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Database design, Redis, SQL/NoSQL, authentication systems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated caching for enhanced performance</span>
                </li>
              </ul>
              <div className="text-sm text-neutral-500">
                Jun 2022 - May 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-gradient-primary mb-4">Featured Projects</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              A selection of my most impactful work in blockchain, DeFi, and
              software development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Solana Fellowship Server */}
            <div className="card-elegant p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Solana Fellowship Server
                  </h3>
                  <div className="text-accent-950 font-medium mb-2">
                    Superdevs Academy Finalist
                  </div>
                </div>
                <Badge className="bg-accent-100 text-accent-950 border-accent-200">
                  Rust
                </Badge>
              </div>
              <p className="text-neutral-600 mb-4">
                Rust-based Solana development server for keypair generation, SPL
                token operations, message signing, and more. Selected for
                Superdevs Academy (Top 400/5000+).
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Goodnessmbakara/solana-fellowship-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-950 hover:text-accent-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>

            {/* Neon Aave Flash Loan */}
            <div className="card-elegant p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Neon Aave Flash Loan
                  </h3>
                  <div className="text-primary-950 font-medium mb-2">
                    Cross-Chain DeFi
                  </div>
                </div>
                <Badge className="bg-primary-100 text-primary-950 border-primary-200">
                  DeFi
                </Badge>
              </div>
              <p className="text-neutral-600 mb-4">
                Cross-chain flash loan implementation using Neon EVM and Aave
                protocol. Enables arbitrage opportunities across different
                blockchain networks.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Goodnessmbakara/neon-aave-loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-950 hover:text-primary-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>

            {/* MediCore AI */}
            <div className="card-elegant p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    MediCore AI
                  </h3>
                  <div className="text-accent-950 font-medium mb-2">
                    Healthcare AI Platform
                  </div>
                </div>
                <Badge className="bg-accent-100 text-accent-950 border-accent-200">
                  AI/ML
                </Badge>
              </div>
              <p className="text-neutral-600 mb-4">
                AI-powered healthcare platform for medical diagnosis and patient
                management. Integrates machine learning models for predictive
                healthcare analytics.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Goodnessmbakara/medicore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-950 hover:text-accent-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>

            {/* ClaimClarity */}
            <div className="card-elegant p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    ClaimClarity
                  </h3>
                  <div className="text-primary-950 font-medium mb-2">
                    Insurance Platform
                  </div>
                </div>
                <Badge className="bg-primary-100 text-primary-950 border-primary-200">
                  Full Stack
                </Badge>
              </div>
              <p className="text-neutral-600 mb-4">
                Comprehensive insurance claim management platform with automated
                processing, fraud detection, and customer portal for seamless
                claim handling.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Goodnessmbakara/claimclarity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-950 hover:text-primary-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-gradient-primary mb-4">Get In Touch</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Let's Connect
                </h3>
                <p className="text-neutral-600 mb-6">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://twitter.com/gooodnesmbakara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-600 hover:text-primary-950 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>@gooodnesmbakara</span>
                </a>
                <a
                  href="https://github.com/Goodnessmbakara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-600 hover:text-primary-950 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/Goodnessmbakara</span>
                </a>
                <a
                  href="https://linkedin.com/in/goodnessmbakara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-600 hover:text-primary-950 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/goodnessmbakara</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elegant p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <div>
                <div className="font-semibold">Goodness Mbakara</div>
                <div className="text-sm text-neutral-400">
                  Software Engineer
                </div>
              </div>
            </div>
            <div className="text-sm text-neutral-400">
              © 2024 Goodness Mbakara. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent transition-colors"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent transition-colors"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent transition-colors resize-none"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {submitStatus === "success" && (
        <div className="text-success text-sm text-center">
          Message sent successfully!
        </div>
      )}

      {submitStatus === "error" && (
        <div className="text-error text-sm text-center">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  );
}
