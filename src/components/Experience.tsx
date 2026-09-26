"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3 shadow-2xs"
          >
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Career Progression & Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            5+ Years of Dedicated <span className="text-gradient">MIS Operations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-600 leading-relaxed"
          >
            A steady trajectory from meticulous back-office data validation to leading full-scale MIS operations, cross-functional teams, and modern automation pipelines.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {portfolioData.experience.map((item, index) => {
            const isCurrent = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? "bg-blue-600 border-white shadow-md shadow-blue-500/40 scale-110"
                      : "bg-white border-slate-300 group-hover:border-blue-500"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isCurrent ? "bg-white animate-ping" : "bg-blue-600"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 ${
                    isCurrent
                      ? "border-blue-300/80 shadow-md shadow-blue-500/10"
                      : "border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          {item.role}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                              isCurrent
                                ? "bg-blue-50 text-blue-700 border border-blue-200"
                                : "bg-slate-100 text-slate-700 border border-slate-200"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
                        <span className="font-bold text-blue-600 flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          {item.company}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-semibold text-blue-700 bg-blue-50/80 px-3.5 py-1.5 rounded-xl border border-blue-200 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3">
                    {item.highlights.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
