"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Layers,
  LineChart,
  Users2,
  Workflow,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: LineChart,
      title: "Actionable MIS & BI Dashboards",
      description:
        "Building clear, executive-ready visual systems in Google Data Studio (Looker Studio), Advanced Excel, and custom web portals so management can spot anomalies and make quick, data-backed decisions.",
      metric: "5+ Years",
      metricLabel: "Cross-Industry Experience",
    },
    {
      icon: Bot,
      title: "AI-Augmented Operations",
      description:
        "Actively integrating modern AI engines (ChatGPT, Copilot, Claude, Gemini) into daily operational pipelines, cutting manual analysis cycle times by approximately 40%.",
      metric: "~40%",
      metricLabel: "Manual Reporting Reduction",
    },
    {
      icon: Workflow,
      title: "No-Code & Cloud App Architecture",
      description:
        "Architecting 3+ custom Google AppSheet mobile and tablet systems that sync live with Google Sheets on the cloud, replacing error-prone paper workflows in the field.",
      metric: "3+ Apps",
      metricLabel: "Deployed to Production",
    },
    {
      icon: Users2,
      title: "Cross-Functional Team Leadership",
      description:
        "Leading operations teams, enforcing strict reporting SLAs, aligning cross-departmental stakeholders, and standardizing over 10 critical workflows via FMS.",
      metric: "100%",
      metricLabel: "SLA Adherence across 4 Firms",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3 shadow-2xs"
          >
            <BrainCircuit className="w-3.5 h-3.5 text-blue-600" />
            <span>Behind the Numbers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Hi, I’m Chetan. I build data systems that{" "}
            <span className="text-gradient">let operations run with clarity.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            {portfolioData.personal.summary}
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white hover:bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200/70 text-blue-600 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {pillar.metric}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {pillar.metricLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote / Philosophy Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-blue-50/80 border border-blue-200/70 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-100 border border-blue-200 text-blue-700 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-medium text-slate-800">
                “Data is useless if it takes hours to decode. My mission is always to deliver live, self-explanatory intelligence that stakeholders can act on immediately.”
              </p>
              <span className="text-xs text-blue-700 font-bold mt-1 inline-block">
                — Chetan Singh, Quess Corp
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs transition-colors"
          >
            Work Together
          </a>
        </motion.div>

      </div>
    </section>
  );
};
