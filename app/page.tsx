"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Zap,
  Users,
  Target,
  TrendingUp,
  ExternalLink,
  ChevronDown,
  Trophy,
  Award,
  Briefcase,
  GraduationCap,
  Twitter,
  Crown,
  Star,
  Menu,
  X,
  Rocket,
  Globe,
  CloudLightning as Lightning,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedProfileCard from "@/components/AnimatedProfileCard";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import StaggeredReveal from "@/components/StaggeredReveal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
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
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left font-medium"
                >
                  About
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
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left font-medium"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left font-medium"
                >
                  Contact
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
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" duration={1200}>
            <div className="space-y-8">
              <StaggeredReveal staggerDelay={150} direction="up">
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-sm">
                    4X HACKATHON WINNER
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 text-sm">
                    BACKEND ENGINEER
                  </Badge>
                  <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 text-sm">
                    BLOCKCHAIN DEVELOPER
                  </Badge>
                  <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/30 text-sm">
                    TEAM LEADER
                  </Badge>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Goodness
                    </span>
                    <br />
                    <span className="text-white text-3xl lg:text-4xl font-light">
                      E. Mbakara
                    </span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                    Backend Engineer & Blockchain Developer
                  </h2>
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-lg font-semibold">
                      Computer Science Graduate
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Dynamic backend engineer and proven team leader with track
                  record of managing 30+ engineers and building scalable
                  solutions. Computer Science graduate specializing in Django,
                  FastAPI, blockchain development (Solidity, EVM, Solana), and
                  cloud infrastructure.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection("experience")}
                    className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-lg px-8 py-3 group"
                  >
                    View My Experience
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 text-lg px-8 py-3"
                  >
                    Let's Connect
                  </Button>
                </div>

                <div className="flex items-center space-x-6 pt-4">
                  <a
                    href="https://github.com/Goodnessmbakara"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/goodnessmbakara/"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/gooodnesmbakara"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:mbakaragoodness2003@gmail.com"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </StaggeredReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={1200} delay={300}>
            <AnimatedProfileCard />
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={1500}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection("about")}
              className="text-emerald-400 hover:text-emerald-300 transition-colors animate-bounce"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left" duration={1000}>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 mb-4">
                    About Me
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Dynamic Leader & Engineer
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I am a dynamic initiator with a proven track record of
                    effectively managing teams and tackling challenging tasks.
                    As an accomplished backend and blockchain developer, I
                    possess exceptional interpersonal abilities and unwavering
                    dedication to my craft.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mt-4">
                    My focus is on achieving tangible results while fostering
                    collaboration within the team. I have an innate drive to see
                    every project through until completion, with experience
                    leading teams of over 30 engineers across UI/UX, Frontend,
                    and Backend tracks. I specialize in blockchain development
                    with expertise in Solidity, EVM, and Solana ecosystems.
                  </p>
                </div>

                <StaggeredReveal staggerDelay={200} direction="up">
                  <Card className="bg-slate-800/50 border-emerald-500/20">
                    <CardContent className="p-6 text-center">
                      <Trophy className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-emerald-400">
                        4X
                      </div>
                      <div className="text-gray-400">Hackathon Winner</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-cyan-500/20">
                    <CardContent className="p-6 text-center">
                      <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-cyan-400">
                        30+
                      </div>
                      <div className="text-gray-400">Engineers Led</div>
                    </CardContent>
                  </Card>
                </StaggeredReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={1000} delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6" />
                  <span>Education & Leadership</span>
                </h3>

                <StaggeredReveal staggerDelay={150} direction="up">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                          <span>Computer Science Graduate</span>
                          <GraduationCap className="w-4 h-4 text-emerald-400" />
                        </h4>
                        <span className="text-emerald-400 text-sm">
                          2021 - 2024
                        </span>
                      </div>
                      <p className="text-gray-400">
                        University of Uyo, Nigeria
                      </p>
                      <ul className="text-gray-300 text-sm mt-2 space-y-1">
                        <li>• Data Structures and Analysis of Algorithms</li>
                        <li>• Object-Oriented Programming</li>
                        <li>• Software Development Life Cycle</li>
                        <li>• Computer Programming using Python and Java</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                          <span>GDSC Volunteer & Mentor</span>
                          <Crown className="w-4 h-4 text-cyan-400" />
                        </h4>
                        <span className="text-cyan-400 text-sm">Active</span>
                      </div>
                      <p className="text-gray-400">
                        Google Developer Student Clubs
                      </p>
                      <ul className="text-gray-300 text-sm mt-2 space-y-1">
                        <li>• Teaching Python to the community</li>
                        <li>• Contributing to various Google initiatives</li>
                        <li>• Mentoring emerging developers</li>
                        <li>• Leading technical workshops and events</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">
                          ALX Backend Engineering
                        </h4>
                        <span className="text-purple-400 text-sm">
                          2022 - 2023
                        </span>
                      </div>
                      <p className="text-gray-400">African Leaders X Program</p>
                      <ul className="text-gray-300 text-sm mt-2 space-y-1">
                        <li>• Database design and management</li>
                        <li>• Authentication systems implementation</li>
                        <li>• SQL and NoSQL database systems</li>
                      </ul>
                    </div>
                  </div>
                </StaggeredReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" duration={1000}>
            <div className="text-center mb-16">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 mb-4">
                Leadership Excellence
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Proven Team Leadership
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Demonstrated ability to lead diverse teams, manage complex
                projects, and deliver exceptional results under pressure.
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={200} direction="up">
            <Card className="bg-slate-800/50 border-emerald-500/20 text-center">
              <CardContent className="p-8">
                <Crown className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Team Leadership
                </h3>
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  30+
                </div>
                <p className="text-gray-400">
                  Engineers successfully led across UI/UX, Frontend, and Backend
                  tracks during HngX internship program.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-cyan-500/20 text-center">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Project Management
                </h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  100%
                </div>
                <p className="text-gray-400">
                  Project completion rate with focus on achieving tangible
                  results and fostering team collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 text-center">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Mentorship
                </h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  Active
                </div>
                <p className="text-gray-400">
                  Ongoing mentorship through GDSC, teaching Python and guiding
                  emerging developers in their careers.
                </p>
              </CardContent>
            </Card>
          </StaggeredReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 bg-slate-900/50 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/30 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-48 h-48 bg-cyan-500/30 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" duration={1000}>
            <div className="text-center mb-16">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 mb-4">
                Professional Experience
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Building Scalable Solutions
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Leading teams and delivering high-impact solutions across
                diverse technology stacks
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={200} direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Backend Engineer - KWEK */}
              <Card className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        Backend Engineer
                      </h3>
                      <p className="text-emerald-400 font-semibold">KWEK</p>
                    </div>
                    <span className="text-gray-400 text-sm bg-slate-700/50 px-3 py-1 rounded-full">
                      Dec 2024 - Feb 2025
                    </span>
                  </div>
                  <ul className="text-gray-300 space-y-2 mb-6 flex-1">
                    <li className="flex items-start space-x-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Developed and optimized backend APIs for a fast-growing
                        e-commerce platform
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Implemented secure authentication and authorization
                        mechanisms using JWT
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Improved database performance by designing efficient
                        PostgreSQL schemas
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Integrated third-party payment gateways to facilitate
                        seamless transactions
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                    >
                      Django
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      PostgreSQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                    >
                      JWT
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Full Stack Developer - ZIDIO */}
              <Card className="bg-slate-800/50 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        Full Stack Developer
                      </h3>
                      <p className="text-cyan-400 font-semibold">
                        ZIDIO Development
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm bg-slate-700/50 px-3 py-1 rounded-full">
                      Aug 2024 - Nov 2024
                    </span>
                  </div>
                  <ul className="text-gray-300 space-y-2 mb-6 flex-1">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        Completed intensive Web Development internship working
                        with developers, designers and PMs
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        Built certificate generation and verification tools, job
                        posting portal
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        Integrated Socket.IO for live job updates and
                        notifications
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        Designed and optimized MongoDB schemas for dynamic job
                        listings
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      Socket.IO
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                    >
                      Cloud
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Backend Engineer Intern & Team Lead - HngX */}
              <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                        <span>Backend Engineer Intern & Team Lead</span>
                        <Crown className="w-5 h-5 text-purple-400" />
                      </h3>
                      <p className="text-purple-400 font-semibold">HngX</p>
                    </div>
                    <span className="text-gray-400 text-sm bg-slate-700/50 px-3 py-1 rounded-full">
                      Sep 2023 - Oct 2023
                    </span>
                  </div>
                  <ul className="text-gray-300 space-y-2 mb-6 flex-1">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        <strong>Led a team of over 30 engineers</strong> across
                        UI/UX, Frontend and Backend tracks
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        Built e-assessment platform as part of zuri-portfolio
                        application
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        Developed Chrome extension backend for screen recording
                        with video storage
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        Created event management platform for community and
                        event creation
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      Django REST
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                    >
                      Flask
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-colors"
                    >
                      Leadership
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Backend Engineer - ALX */}
              <Card className="bg-slate-800/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                        Backend Engineer
                      </h3>
                      <p className="text-orange-400 font-semibold">
                        African Leaders X (ALX)
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm bg-slate-700/50 px-3 py-1 rounded-full">
                      Jun 2022 - May 2023
                    </span>
                  </div>
                  <ul className="text-gray-300 space-y-2 mb-6 flex-1">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>
                        Designed and managed databases, including schema
                        creation using drawing tools
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>
                        Integrated Redis and caching for enhanced data retrieval
                        performance
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>
                        Utilized SQL and NoSQL database systems to store and
                        manage data efficiently
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>
                        Implemented various authentication systems including
                        basic, session token, and JWT authentication
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                    >
                      SQL/NoSQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      Redis
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                    >
                      Authentication
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-colors"
                    >
                      Database Design
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </StaggeredReveal>
        </div>
      </section>

      {/* Projects Section with Enhanced Animations */}
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/30 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-48 h-48 bg-cyan-500/30 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" duration={1000}>
            <div className="text-center mb-16">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 mb-4 animate-pulse">
                Featured Projects
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Real-World Impact
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Rocket className="w-5 h-5 animate-bounce" />
                  <span className="text-sm font-semibold">
                    Production Ready
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Globe
                    className="w-5 h-5 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <span className="text-sm font-semibold">Global Impact</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Lightning className="w-5 h-5 animate-pulse" />
                  <span className="text-sm font-semibold">
                    High Performance
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={250} direction="up">
            <Card className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 group relative overflow-hidden">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating Icons */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Rocket className="w-8 h-8 text-emerald-400 animate-bounce" />
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2">
                    <span>E-Commerce Platform (KWEK)</span>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors group-hover:rotate-12 duration-300" />
                </div>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  Fast-growing e-commerce platform with optimized APIs, secure
                  authentication, and integrated payment gateways for seamless
                  transactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  >
                    Django
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                  >
                    JWT
                  </Badge>
                </div>
                <div className="text-emerald-400 text-sm font-semibold flex items-center space-x-2">
                  <Rocket className="w-4 h-4" />
                  <span>Production Ready • Payment Integration</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Globe
                  className="w-8 h-8 text-cyan-400 animate-spin"
                  style={{ animationDuration: "4s" }}
                />
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
                    <span>Screen Recording Extension</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors group-hover:rotate-12 duration-300" />
                </div>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  Chrome extension with backend API for screen recording
                  functionality. Users can save and retrieve videos at
                  convenience with secure storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  >
                    Flask
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                  >
                    Chrome API
                  </Badge>
                </div>
                <div className="text-cyan-400 text-sm font-semibold flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Live Extension • Video Storage</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Lightning className="w-8 h-8 text-purple-400 animate-pulse" />
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                    <span>Event Management Platform</span>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors group-hover:rotate-12 duration-300" />
                </div>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  Comprehensive platform where users can create different
                  communities and engaging events with full backend API support
                  and real-time features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  >
                    Django REST
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                  >
                    Real-time
                  </Badge>
                </div>
                <div className="text-purple-400 text-sm font-semibold flex items-center space-x-2">
                  <Lightning className="w-4 h-4" />
                  <span>Community Building • Live Events</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Database className="w-8 h-8 text-orange-400 animate-pulse" />
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                    <span>Weather Forecasting System</span>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors group-hover:rotate-12 duration-300" />
                </div>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  Data scraping and formatting system for weather forecasts with
                  integrated cron job for automated system updates and
                  monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  >
                    Cron Jobs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                  >
                    Data Scraping
                  </Badge>
                </div>
                <div className="text-orange-400 text-sm font-semibold flex items-center space-x-2">
                  <Database className="w-4 h-4" />
                  <span>Automated Updates • Data Processing</span>
                </div>
              </CardContent>
            </Card>
          </StaggeredReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" duration={1000}>
            <div className="text-center mb-16">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 mb-4">
                Technical Expertise
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                My Technical Arsenal
              </h2>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={200} direction="up">
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-8">
                Backend & Languages
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Python & Django", level: 95, color: "emerald" },
                  { name: "Django REST Framework", level: 93, color: "cyan" },
                  { name: "FastAPI", level: 88, color: "emerald" },
                  { name: "PostgreSQL & MongoDB", level: 90, color: "cyan" },
                  { name: "Java & C Programming", level: 85, color: "purple" },
                  { name: "Go Language", level: 80, color: "emerald" },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                      <span className={`text-${skill.color}-400 font-bold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                Blockchain & Web3
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Solidity & Smart Contracts",
                    level: 90,
                    color: "cyan",
                  },
                  { name: "EVM Development", level: 88, color: "purple" },
                  {
                    name: "Solana & Move Language",
                    level: 85,
                    color: "emerald",
                  },
                  { name: "Web3.js & Ethers.js", level: 87, color: "cyan" },
                  { name: "DeFi Protocols", level: 83, color: "purple" },
                  { name: "NFT Development", level: 80, color: "emerald" },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                      <span className={`text-${skill.color}-400 font-bold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-8">
                DevOps & Tools
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Docker & Containerization",
                    level: 87,
                    color: "purple",
                  },
                  { name: "AWS Cloud Services", level: 85, color: "emerald" },
                  { name: "Git & GitHub", level: 92, color: "cyan" },
                  {
                    name: "Linux & Bash Scripting",
                    level: 88,
                    color: "purple",
                  },
                  { name: "Pytest & Testing", level: 86, color: "emerald" },
                  { name: "Redis & Caching", level: 84, color: "cyan" },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                      <span className={`text-${skill.color}-400 font-bold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggeredReveal>

          <ScrollReveal direction="up" delay={600}>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-white mb-6">
                Leadership & Soft Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-lg px-4 py-2">
                  Team Leadership
                </Badge>
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 text-lg px-4 py-2">
                  Public Speaking
                </Badge>
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 text-lg px-4 py-2">
                  Problem Solving
                </Badge>
                <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/30 text-lg px-4 py-2">
                  Critical Thinking
                </Badge>
                <Badge className="bg-pink-500/10 text-pink-400 border-pink-500/30 text-lg px-4 py-2">
                  Project Management
                </Badge>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" duration={1000}>
            <div className="text-center mb-16">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 mb-4">
                Achievements & Recognition
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Proven Track Record
              </h2>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={250} direction="up">
            <Card className="bg-slate-800/50 border-emerald-500/20 text-center">
              <CardContent className="p-8">
                <Trophy className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  4X Hackathon Winner
                </h3>
                <p className="text-gray-400">
                  Consistently delivering innovative solutions under pressure,
                  showcasing technical excellence and creative problem-solving
                  across multiple competitions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-cyan-500/20 text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Team Leadership
                </h3>
                <p className="text-gray-400">
                  Successfully led teams of 30+ engineers across multiple
                  tracks, fostering collaboration and delivering complex
                  projects on time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 text-center">
              <CardContent className="p-8">
                <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Academic Excellence
                </h3>
                <p className="text-gray-400">
                  Computer Science graduate with strong foundation in
                  algorithms, data structures, and software development
                  principles.
                </p>
              </CardContent>
            </Card>
          </StaggeredReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal direction="up" duration={1000}>
            <div className="text-center mb-16">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 mb-4">
                Get In Touch
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Build Something Great
              </h2>
              <p className="text-gray-400 text-lg">
                Ready to discuss your next project or explore collaboration
                opportunities?
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left" duration={1000}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Connect With Me
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:mbakaragoodness2003@gmail.com"
                      className="flex items-center space-x-4 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                      <span>mbakaragoodness2003@gmail.com</span>
                    </a>
                    <a
                      href="https://github.com/Goodnessmbakara"
                      className="flex items-center space-x-4 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                      <span>github.com/Goodnessmbakara</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/goodnessmbakara/"
                      className="flex items-center space-x-4 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                      <span>linkedin.com/in/goodnessmbakara/</span>
                    </a>
                    <a
                      href="https://twitter.com/gooodnesmbakara"
                      className="flex items-center space-x-4 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                      <span>twitter.com/gooodnesmbakara</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                    Open to:
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Backend engineering roles</li>
                    <li>• Blockchain development projects</li>
                    <li>• Team leadership positions</li>
                    <li>• Freelance projects</li>
                    <li>• Mentoring opportunities</li>
                    <li>• Open source collaborations</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={1000} delay={200}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal direction="up" duration={1000}>
        <footer className="py-12 border-t border-emerald-500/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  "goodnessonweb3"
                </div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-gray-400 text-center md:text-right">
                <p>© 2024 Goodness E. Mbakara. All rights reserved.</p>
                <p className="text-sm mt-1">
                  Computer Science Graduate • Backend & Blockchain Engineer •
                  Team Leader
                </p>
              </div>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  );
}
