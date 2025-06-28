"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Crown, Code, Zap, Star, Trophy } from "lucide-react";

export default function AnimatedProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);

  const floatingIcons = [
    { Icon: Code, color: "text-emerald-400", delay: "0s" },
    { Icon: Zap, color: "text-cyan-400", delay: "0.5s" },
    { Icon: Star, color: "text-purple-400", delay: "1s" },
    { Icon: Trophy, color: "text-orange-400", delay: "1.5s" },
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
    <div className="flex justify-center lg:justify-end">
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0 opacity-30">
          {floatingIcons.map(({ Icon, color, delay }, index) => (
            <div
              key={index}
              className={`absolute w-8 h-8 ${color} animate-float`}
              style={{
                animationDelay: delay,
                top: `${20 + index * 15}%`,
                left: `${10 + index * 20}%`,
                transform: isHovered ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              <Icon className="w-full h-full opacity-60" />
            </div>
          ))}
        </div>

        {/* Main Card */}
        <div
          className={`
          w-80 h-96 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 
          rounded-3xl border border-emerald-500/30 backdrop-blur-sm p-8 
          flex flex-col items-center justify-center space-y-6 
          transition-all duration-500 transform
          ${
            isHovered
              ? "scale-105 rotate-1 shadow-2xl shadow-emerald-500/20"
              : "scale-100 rotate-0"
          }
        `}
        >
          {/* Profile Image Container */}
          <div
            className={`
            w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 p-1
            transition-all duration-500 transform
            ${isHovered ? "rotate-12 scale-110" : "rotate-0 scale-100"}
          `}
          >
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden relative">
              <img
                src="/myphoto.jpg"
                alt="Goodness Mbakara"
                className={`
                  w-44 h-44 rounded-full object-cover object-top transition-all duration-500
                  ${
                    isHovered
                      ? "scale-110 brightness-110"
                      : "scale-100 brightness-100"
                  }
                `}
                style={{
                  objectPosition: "center 20%",
                }}
              />

              {/* Overlay with rotating achievement text */}
              <div
                className={`
                absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent
                rounded-full flex items-end justify-center pb-4
                transition-opacity duration-300
                ${isHovered ? "opacity-100" : "opacity-0"}
              `}
              >
                <div className="text-center">
                  <div className="text-emerald-400 text-xs font-bold animate-pulse">
                    {achievements[currentIcon]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="text-center space-y-2">
            <div className="text-emerald-400 font-semibold mb-2 flex items-center justify-center space-x-2">
              <GraduationCap
                className={`w-4 h-4 transition-transform duration-300 ${
                  isHovered ? "rotate-12" : ""
                }`}
              />
              <span>University of Uyo Graduate</span>
            </div>
            <div className="text-gray-300 text-sm">Computer Science Degree</div>
            <div className="text-gray-300 text-sm">GDSC Volunteer & Mentor</div>
            <div className="text-cyan-400 text-sm font-semibold mt-2 flex items-center justify-center space-x-1">
              <Crown
                className={`w-3 h-3 transition-transform duration-300 ${
                  isHovered ? "rotate-12" : ""
                }`}
              />
              <span>Team Leader</span>
            </div>
          </div>

          {/* Animated Progress Bars */}
          <div className="flex space-x-2 w-full justify-center">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className={`
                  h-1 rounded transition-all duration-500
                  ${index === 0 ? "bg-emerald-500 w-12" : ""}
                  ${index === 1 ? "bg-cyan-500 w-10" : ""}
                  ${index === 2 ? "bg-purple-500 w-8" : ""}
                  ${isHovered ? "w-16 h-2" : ""}
                `}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Skill Tags */}
          <div
            className={`
            flex flex-wrap justify-center gap-2 transition-all duration-500
            ${
              isHovered
                ? "opacity-100 transform translate-y-0"
                : "opacity-70 transform translate-y-2"
            }
          `}
          >
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/30">
              Backend
            </span>
            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full border border-cyan-500/30">
              Blockchain
            </span>
            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full border border-purple-500/30">
              Leadership
            </span>
          </div>
        </div>

        {/* Floating Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
