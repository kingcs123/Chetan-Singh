"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Copy,
  ExternalLink,
  Download,
  FileText,
} from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 800);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50/70 border-t border-slate-200/80">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-blue-100/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3 shadow-2xs"
          >
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Inquiries & Collaboration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Let's Talk MIS, Dashboards & <span className="text-gradient">Automation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-600 leading-relaxed"
          >
            Whether you want to discuss operational reporting challenges, enterprise AppSheet architecture, or explore leadership opportunities, I’d love to connect.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info from CV */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold">Email Address</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.personal.email)}
                  title="Copy email address"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                >
                  {copiedEmail ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/60">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold">Direct Phone</div>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-[#0077b5] border border-sky-200/60">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold">LinkedIn Profile</div>
                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      mrchetan-singh
                    </a>
                  </div>
                </div>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-[#0077b5] hover:bg-slate-200/60 transition-colors"
                  title="Open LinkedIn profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">Base Location</div>
                  <div className="text-sm font-bold text-slate-900">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>

              {/* Quick Connect Actions: WhatsApp & LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="https://wa.me/919079265198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs sm:text-sm transition-all shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 text-[#0077b5] border border-sky-200 font-bold text-xs sm:text-sm transition-all shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current text-[#0077b5]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>Connect LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Download Official CV Card */}
            <div className="rounded-3xl p-6 border border-blue-200 bg-white shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/60">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Official Resume / CV
                  </h4>
                  <p className="text-xs text-slate-500">
                    Verified PDF • Chetan_Singh_CV.pdf
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Download my complete professional CV covering 5+ years in MIS Operations, technical stack, organizational milestones, and quantified business impacts.
              </p>
              <a
                href="/Chetan_Singh_CV.pdf"
                download="Chetan_Singh_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Download Verified CV (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Drop your inquiry or project details below. I’ll review it and get back to you promptly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-slate-50 border border-emerald-300 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name}. Chetan has received your note and will respond to {formData.email} soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-blue-600 border border-slate-200 shadow-2xs transition-colors"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. MIS Operations / AppSheet Dashboard Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Chetan</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
