"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIAvatarWidget } from "@/components/AIAvatarWidget";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [initialChatQuery, setInitialChatQuery] = useState<string | undefined>(undefined);

  const handleOpenChatWithQuery = (query?: string) => {
    if (query) {
      setInitialChatQuery(query);
    }
    setChatOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col selection:bg-blue-500/20 selection:text-blue-900">
      {/* Top Navbar */}
      <Navbar onOpenChat={() => setChatOpen(true)} />

      {/* Main Single-Page Content Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero */}
        <Hero onOpenChat={handleOpenChatWithQuery} />

        {/* 2. About */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Experience Timeline */}
        <Experience />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Education & Key Achievements */}
        <Education />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Floating Anime AI Persona & Grounded Chatbot */}
      <AIAvatarWidget
        isOpen={chatOpen}
        onToggle={() => setChatOpen(!chatOpen)}
        initialQuery={initialChatQuery}
      />
    </div>
  );
}
