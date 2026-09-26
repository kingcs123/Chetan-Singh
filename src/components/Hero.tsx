"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Cpu,
  Database,
  Layers,
  MapPin,
  Clock,
  MessageCircle,
  Download,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { getAssetPath } from "@/utils/basePath";

interface HeroProps {
  onOpenChat: (initialQuery?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [typedGreeting, setTypedGreeting] = useState("");
  const fullGreeting =
    "Hi there! I'm Chetan. Welcome to my portfolio! I'm speaking with you through my AI digital persona. I lead MIS Operations at Quess Corp, automating reporting pipelines and building business intelligence dashboards. Ask me anything about my work and experience!";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedGreeting(fullGreeting.slice(0, index));
      index++;
      if (index > fullGreeting.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Years Experience", value: portfolioData.personal.yearsOfExperience, icon: Clock, detail: "Progressive MIS Leadership" },
    { label: "Reporting Effort Saved", value: portfolioData.personal.timeSavedMetric, icon: TrendingUp, detail: "Via AI & Automated Pipelines" },
    { label: "AppSheet Cloud Apps", value: "3+", icon: Cpu, detail: "Replacing Paper Workflows" },
    { label: "Industries Served", value: "4", icon: Layers, detail: "Pharma, BPO, E-Com & Mfg" },
  ];

  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60"
    >
      {/* Dynamic ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Intro & Real Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-sm w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-700">
                Leading MIS Operations @ <strong className="text-blue-600 font-semibold">Quess Corp</strong>
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> Jaipur, Rajasthan
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-sm sm:text-base font-bold tracking-wider text-blue-600 uppercase mb-2">
                Operational Intelligence & Automation
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                I turn raw operational chaos into{" "}
                <span className="text-gradient">clear, automated decisions.</span>
              </h1>
            </div>

            {/* Warm, real-person personal introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              I'm <strong className="text-slate-900 font-semibold">{portfolioData.personal.name}</strong>, a Team Leader in MIS Operations. For the past 5+ years, I've specialized in breaking down data bottlenecks—building custom web & Looker Studio dashboards, deploying Google AppSheet cloud apps, and bringing modern AI tools right into daily reporting to give leadership instant, reliable clarity.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={getAssetPath("/Chetan_Singh_CV.pdf")}
                download="Chetan_Singh_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-all group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Download CV</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-400 transition-all shadow-sm group"
              >
                <span>Track Record</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-blue-600" />
              </a>

              <button
                onClick={() => onOpenChat()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 hover:border-blue-300 transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Interview My AI</span>
              </button>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0077b5] border border-slate-200 hover:border-sky-300 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-[#0077b5]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Live Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between text-slate-500 mb-1">
                      <Icon className="w-4 h-4 text-blue-600" />
                      <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        {stat.label}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">
                        {stat.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: AI Character Avatar + Interactive Speech Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Background Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-indigo-300/20 to-transparent rounded-3xl blur-2xl transform rotate-3 scale-95" />

            {/* Main Character Showcase Card */}
            <div className="relative w-full max-w-md bg-white/95 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-200/50">
              
              {/* Badge */}
              <div className="self-end inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-700 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Digital Persona • Chetan
              </div>

              {/* Character Avatar Container with Idle Floating Animation */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 my-2 animate-idle-float">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-md animate-pulse-ring" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white shadow-2xl shadow-blue-500/20">
                  <Image
                    src="/chetan_avatar.jpg"
                    alt="Chetan Singh AI Persona"
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Animated Interactive Speech Bubble */}
              <div className="relative mt-4 p-4.5 rounded-2xl bg-slate-50 border border-slate-200 text-left shadow-sm w-full">
                {/* Speech Bubble Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-50 border-t border-l border-slate-200 transform rotate-45" />

                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Chetan • Digital Persona
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                    CV-Grounded AI
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans min-h-[56px]">
                  {typedGreeting}
                  {!isTypingComplete && (
                    <span className="inline-block w-1.5 h-4 bg-blue-600 ml-1 animate-pulse align-middle" />
                  )}
                </p>

                {/* Quick Prompts to Click */}
                <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap gap-1.5">
                  <button
                    onClick={() =>
                      onOpenChat("What did you achieve at Quess Corp?")
                    }
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    🏆 Quess Corp impact?
                  </button>
                  <button
                    onClick={() =>
                      onOpenChat("Tell me about your Google AppSheet apps")
                    }
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    📱 AppSheet projects?
                  </button>
                  <button
                    onClick={() => onOpenChat()}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Chat With Me
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
