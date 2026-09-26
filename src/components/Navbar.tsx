"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Sparkles, MessageSquareCode, Download } from "lucide-react";

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/90 shadow-sm shadow-slate-200/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/40 group-hover:border-blue-600 transition-colors shadow-sm shadow-blue-500/20">
              <Image
                src="/chetan_avatar.jpg"
                alt="Chetan Singh Avatar"
                fill
                sizes="40px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Chetan Singh
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide">
                Team Leader – MIS Operations
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg transition-colors hover:bg-slate-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/mrchetan-singh?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              title="Chetan Singh on LinkedIn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0077b5] border border-slate-200 hover:border-sky-300 transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#0077b5]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="/Chetan_Singh_CV.pdf"
              download="Chetan_Singh_CV.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-400 transition-all shadow-sm group"
            >
              <Download className="w-3.5 h-3.5 text-blue-600 group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>

            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 hover:border-blue-300 transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Ask AI Persona</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-sm shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://www.linkedin.com/in/mrchetan-singh?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white text-[#0077b5] border border-slate-200 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a
              href="/Chetan_Singh_CV.pdf"
              download="Chetan_Singh_CV.pdf"
              aria-label="Download CV"
              className="p-2 rounded-lg bg-white text-blue-600 border border-slate-200 shadow-sm"
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenChat}
              aria-label="Open AI Assistant"
              className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200"
            >
              <MessageSquareCode className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-md hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/mrchetan-singh?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-sky-50 hover:bg-sky-100 text-[#0077b5] border border-sky-200"
            >
              <svg className="w-4 h-4 fill-current text-[#0077b5]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href="/Chetan_Singh_CV.pdf"
              download="Chetan_Singh_CV.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>Download Official CV (PDF)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Ask AI Persona about Chetan</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-blue-600 text-white"
            >
              Connect with Chetan
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
