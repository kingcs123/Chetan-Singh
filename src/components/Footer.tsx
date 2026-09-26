"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-100/90 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          
          {/* Brand Signature */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-blue-400 shadow-2xs">
              <Image
                src="/chetan_avatar.jpg"
                alt="Chetan Singh"
                fill
                sizes="36px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base tracking-tight">
                {portfolioData.personal.name}
              </span>
              <p className="text-xs text-slate-500">
                Team Leader – MIS Operations @ Quess Corp
              </p>
            </div>
          </div>

          {/* Quick navigation jumps */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-blue-600 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#0077b5] hover:text-blue-700 transition-colors font-bold"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 hover:text-blue-600 border border-slate-200 shadow-2xs transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All verified operational content sourced from official CV.
          </p>
          <div className="flex items-center gap-2 font-medium">
            <span>Powered by Next.js & Gemini AI</span>
            <span>•</span>
            <span className="text-blue-600 flex items-center gap-1 font-semibold">
              <MapPin className="w-3 h-3" /> Jaipur, Rajasthan
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
