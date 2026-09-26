"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  Sparkles,
  ExternalLink,
  Bot,
  Smartphone,
  LayoutDashboard,
  GitBranch,
  BarChart2,
  CheckCircle,
} from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "ai-mis-pipeline":
        return Bot;
      case "appsheet-ecosystem":
        return Smartphone;
      case "web-dashboards":
        return LayoutDashboard;
      case "flowchart-system":
        return GitBranch;
      case "productivity-attrition-suite":
        return BarChart2;
      default:
        return FolderGit2;
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-white">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3 shadow-2xs"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Key Systems & Deliverables</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Featured Solutions & <span className="text-gradient">Automation Systems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-600 leading-relaxed"
          >
            Real-world systems engineered across operations, pharma, e-commerce, and team productivity tracking to automate tasks and drive tangible business outcomes.
          </motion.p>
        </div>

        {/* Project Cards Grid with Hover Lift Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => {
            const Icon = getProjectIcon(project.id);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/90 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Card Top Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-105 group-hover:bg-blue-100 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    {project.metrics && (
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Organization & Category */}
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
                    <span>{project.organization}</span>
                    <span>•</span>
                    <span className="text-blue-600">{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Verified Impact Highlight */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4">
                    <div className="text-[11px] font-bold text-slate-500 mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Business Impact</span>
                    </div>
                    <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                      {project.impact}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {project.tags.slice(0, 4).map((tag, tagI) => (
                      <span
                        key={tagI}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-slate-100 text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for Project Deep Dive */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                  {selectedProject.organization} • {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-4 mb-2">
                {selectedProject.title}
              </h3>

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm mb-4 font-medium">
                <strong>Key Result:</strong> {selectedProject.impact}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Technologies & Methodologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-xs text-slate-700 font-semibold border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Close System View
                </button>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};
