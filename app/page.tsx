import AnimatedProfileCard from "@/components/AnimatedProfileCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[9999] bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/20 shadow-lg shadow-emerald-500/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  "goodnessonweb3"
                </div>
                <div className="absolute -top-1 -right-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-xs animate-pulse">
                LIVE
              </Badge>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium"
              >
                Projects
              </button>
              <Button
                onClick={() =>
                  window.open("https://twitter.com/gooodnesmbakara", "_blank")
                }
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Connect ↗
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors z-50"
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
            <div className="md:hidden mt-4 pb-4 border-t border-emerald-500/20 bg-slate-900/95 backdrop-blur-md">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left font-medium"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left font-medium"
                >
                  Projects
                </button>
                <Button
                  onClick={() =>
                    window.open("https://twitter.com/gooodnesmbakara", "_blank")
                  }
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold w-fit"
                >
                  Connect ↗
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <AnimatedProfileCard />
      </section>
      {/* Experience Section (curated) */}
      <section id="experience" className="py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">
          Professional Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Team Lead & Backend Engineer – HngX */}
          <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-white mb-2">
              Team Lead & Backend Engineer
            </h3>
            <div className="text-purple-400 font-semibold mb-2">HngX</div>
            <ul className="text-gray-300 text-sm mb-2 list-disc list-inside">
              <li>Led 30+ engineers across UI/UX, Frontend, and Backend</li>
              <li>Built e-assessment and event management platforms</li>
              <li>Developed Chrome extension backend for screen recording</li>
            </ul>
            <div className="text-xs text-gray-400">Sep 2023 - Oct 2023</div>
          </div>
          {/* Full Stack Developer – ZIDIO */}
          <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-2">
              Full Stack Developer
            </h3>
            <div className="text-cyan-400 font-semibold mb-2">ZIDIO</div>
            <ul className="text-gray-300 text-sm mb-2 list-disc list-inside">
              <li>Built certificate/job tools, job posting portal</li>
              <li>Integrated live job updates and notifications</li>
              <li>Designed MongoDB schemas for dynamic listings</li>
            </ul>
            <div className="text-xs text-gray-400">Aug 2024 - Nov 2024</div>
          </div>
          {/* Backend Engineer – ALX */}
          <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-white mb-2">
              Backend Engineer
            </h3>
            <div className="text-orange-400 font-semibold mb-2">
              African Leaders X (ALX)
            </div>
            <ul className="text-gray-300 text-sm mb-2 list-disc list-inside">
              <li>Database design, Redis, SQL/NoSQL, authentication</li>
              <li>Integrated caching for enhanced performance</li>
            </ul>
            <div className="text-xs text-gray-400">Jun 2022 - May 2023</div>
          </div>
        </div>
      </section>
      {/* Projects Section (curated) */}
      <section id="projects" className="py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Solana Fellowship Server */}
          <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border-l-4 border-emerald-500">
            <h3 className="text-xl font-bold text-white mb-2">
              Solana Fellowship Server
            </h3>
            <div className="text-emerald-400 font-semibold mb-2">
              Superdevs Academy Finalist
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Rust-based Solana dev server for keypair generation, SPL token
              ops, message signing, and more. Selected for Superdevs Academy
              (Top 400/5000+).
            </p>
            <a
              href="https://github.com/Goodnessmbakara/solana-fellowship-server"
              target="_blank"
              className="text-emerald-400 underline text-xs"
            >
              GitHub
            </a>
          </div>
          {/* Neon Aave Flash Loan */}
          <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-2">
              Neon Aave Flash Loan
            </h3>
            <div className="text-cyan-400 font-semibold mb-2">
              Cross-Chain DeFi
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Solidity on Solana via Neon EVM. Flash loans, composability, and
              DeFi protocol bridging for EVM devs.
            </p>
            <a
              href="https://github.com/Goodnessmbakara/neon-aave-loan"
              target="_blank"
              className="text-cyan-400 underline text-xs"
            >
              GitHub
            </a>
          </div>
          {/* MediCore AI */}
          <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-white mb-2">MediCore AI</h3>
            <div className="text-purple-400 font-semibold mb-2">
              Healthcare Management
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Full-stack healthcare system with real-time features, role-based
              access, and modern UI. Built with React, Node, PostgreSQL.
            </p>
            <a
              href="https://medicore-ai.netlify.app/"
              target="_blank"
              className="text-purple-400 underline text-xs"
            >
              Live
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Goodnessmbakara/medicore"
              target="_blank"
              className="text-purple-400 underline text-xs"
            >
              GitHub
            </a>
          </div>
          {/* ClaimClarity */}
          <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-white mb-2">ClaimClarity</h3>
            <div className="text-orange-400 font-semibold mb-2">
              Insurance Automation
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Insurance claims automation, smart contracts, and user-friendly
              workflows. Built for transparency and efficiency.
            </p>
            <a
              href="https://claimclarity.vercel.app/"
              target="_blank"
              className="text-orange-400 underline text-xs"
            >
              Live
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Goodnessmbakara/claimclarity"
              target="_blank"
              className="text-orange-400 underline text-xs"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
