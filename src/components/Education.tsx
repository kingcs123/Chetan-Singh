"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Academic Credentials */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3 shadow-2xs"
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>Academic Foundations</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Education & <span className="text-gradient">Quantitative Core</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-600 leading-relaxed mb-8"
            >
              Combining rigorous mathematics, business commerce fundamentals, and real-time operational discipline.
            </motion.p>

            <div className="space-y-4">
              {portfolioData.education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5.5 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {item.statusOrYear}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {item.degree}
                  </h3>

                  <div className="text-xs font-bold text-blue-600 mb-2">
                    {item.institution}
                  </div>

                  {item.details && (
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Key Achievements & Value Delivered */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 mb-3 shadow-2xs"
            >
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span>Proven Results</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Key Achievements & <span className="text-gradient">Value Delivered</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-600 leading-relaxed mb-6"
            >
              Measurable impacts delivered directly to senior leadership across high-stakes operations.
            </motion.p>

            <div className="space-y-3.5">
              {portfolioData.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xs transition-all flex items-start gap-4 group shadow-2xs"
                >
                  <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
