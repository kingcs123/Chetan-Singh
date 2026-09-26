"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  FileSpreadsheet,
  Code2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categoryIcons = [
    BarChart3,
    FileSpreadsheet,
    Code2,
    Cpu,
    ShieldCheck,
  ];

  return (
    <section id="skills" className="relative py-24 bg-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Technical Stack & Domain Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Tools, Technologies & <span className="text-gradient">Operational Mastery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-600 leading-relaxed"
          >
            Everything in my stack serves a practical purpose: reducing manual error, accelerating insights, and delivering trustworthy data to executives.
          </motion.p>
        </div>

        {/* Category Tabs for Desktop/Tablet */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {portfolioData.skillsCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            const isActive = activeTab === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-600"
                    : "bg-slate-100 text-slate-600 border border-slate-200/80 hover:text-slate-900 hover:bg-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Details View */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl p-6 sm:p-10 bg-slate-50/80 border border-slate-200 shadow-sm mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {portfolioData.skillsCategories[activeTab].title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {portfolioData.skillsCategories[activeTab].description}
              </p>
            </div>
            <div className="text-xs px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-blue-700 font-bold shadow-2xs w-fit">
              {portfolioData.skillsCategories[activeTab].skills.length} Core Capabilities
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.skillsCategories[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className="p-4.5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                </div>
                {skill.level && (
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-200/70">
                    {skill.level}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* All Core Competencies Tags Cloud */}
        <div className="pt-4">
          <div className="text-center mb-6">
            <h4 className="text-xs font-bold text-slate-500 tracking-wider uppercase">
              Full Spectrum of Operational Competencies
            </h4>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {portfolioData.competencies.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:border-blue-400 hover:text-blue-700 hover:bg-white transition-all shadow-2xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>{comp}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
