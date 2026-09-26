"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Send,
  MessageCircle,
  Bot,
  User,
  RotateCcw,
  CornerDownLeft,
  ChevronDown,
  Minimize2,
  Maximize2,
  Zap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { generatePersonaResponse } from "@/utils/aiPersona";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface AIAvatarWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  initialQuery?: string;
}

export const AIAvatarWidget: React.FC<AIAvatarWidgetProps> = ({
  isOpen,
  onToggle,
  initialQuery,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        `Hi! I'm Chetan. Welcome to my portfolio! You're chatting with my AI digital persona, grounded directly in my verified professional CV.\n\nAsk me anything about my 5+ years in MIS Operations, leading teams at Quess Corp, building Google AppSheet apps, executive dashboards, or how to contact me directly!`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessagePulse, setHasNewMessagePulse] = useState(true);
  const [showMiniNotification, setShowMiniNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Handle external query triggers (e.g. from Hero buttons)
  useEffect(() => {
    if (initialQuery && initialQuery.trim().length > 0) {
      sendMessage(initialQuery);
    }
  }, [initialQuery]);

  // Auto-hide initial mini floating notification after 12 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMiniNotification(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: query.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);
    setShowMiniNotification(false);

    // Simulate brief human-like typing delay (400ms)
    setTimeout(() => {
      try {
        const replyText = generatePersonaResponse(query.trim());
        const botReply: Message = {
          role: "assistant",
          content: replyText,
        };
        setMessages((prev) => [...prev, botReply]);
      } catch (err) {
        console.error(err);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I'm grounded in my verified CV! Feel free to ask about my work at Quess Corp, my AppSheet apps, or my direct contact (+91 9079265198).",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }, 450);
  };

  const samplePrompts = [
    "Where can I download your CV?",
    "What is your role at Quess Corp?",
    "What tools & skills do you specialize in?",
    "Tell me about your Google AppSheet apps",
    "How did you reduce reporting time by 40%?",
    "How can I contact you directly?",
  ];

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Chat reset! Ask me anything about my background, MIS operations leadership, or technical skills.",
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Widget (Bottom Right) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
        {/* Floating Mini Greeting Notification Bubble (Before Click) */}
        <AnimatePresence>
          {!isOpen && showMiniNotification && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-3 max-w-[280px] p-3.5 rounded-2xl bg-white border border-slate-200/90 text-left shadow-xl shadow-slate-200/80 backdrop-blur-md relative"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMiniNotification(false);
                }}
                className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 p-0.5"
                title="Dismiss greeting"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span className="text-[11px] font-bold text-blue-700">
                  Chetan • AI Persona
                </span>
              </div>
              <p
                onClick={() => {
                  setShowMiniNotification(false);
                  onToggle();
                }}
                className="text-xs text-slate-700 cursor-pointer hover:text-blue-600 leading-snug font-medium"
              >
                👋 Hi! I'm Chetan. Ask me how I automated reporting by 40% at Quess Corp or explore my work!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Avatar Button */}
        <motion.button
          onClick={() => {
            setShowMiniNotification(false);
            setHasNewMessagePulse(false);
            onToggle();
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
          aria-label={isOpen ? "Close Chetan AI Chat" : "Open Chetan AI Chat"}
        >
          {/* Subtle Outer Neon Ring Animation */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-40 blur-xs group-hover:opacity-80 transition-opacity animate-pulse-ring" />

          {/* Floating Avatar Sphere with Idle Bobbing */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-xl bg-white flex items-center justify-center animate-idle-float">
            <Image
              src="/chetan_avatar.jpg"
              alt="Chetan - AI Persona"
              fill
              sizes="(max-width: 640px) 56px, 64px"
              className="object-cover object-top"
              priority
            />
            {isOpen && (
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center">
                <ChevronDown className="w-6 h-6 text-white" />
              </div>
            )}
          </div>

          {/* Online Glowing Pill */}
          <span className="absolute bottom-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </motion.button>
      </div>

      {/* Interactive Chat Window Dialog / Responsive Mobile Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-3 bottom-24 sm:bottom-24 sm:right-6 sm:left-auto z-50 w-auto sm:w-[420px] max-h-[80vh] sm:max-h-[640px] flex flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-blue-50/90 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-blue-400 shadow-sm">
                  <Image
                    src="/chetan_avatar.jpg"
                    alt="Chetan AI"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                      Chetan
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                      Grounded AI
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Chetan's Digital Persona
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={onToggle}
                  title="Close chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Grounding Context Notification */}
            <div className="px-4 py-1.5 bg-blue-50 border-b border-blue-100 flex items-center gap-2 text-[10px] text-blue-800 font-semibold">
              <Zap className="w-3 h-3 text-blue-600 flex-shrink-0" />
              <span>Strictly trained on Chetan Singh's verified CV</span>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm bg-slate-50/60">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 relative border border-blue-300 mt-1 shadow-2xs">
                      <Image
                        src="/chetan_avatar.jpg"
                        alt="Chetan"
                        fill
                        sizes="24px"
                        className="object-cover object-top"
                      />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none font-medium shadow-sm"
                        : "bg-white border border-slate-200/90 text-slate-800 rounded-tl-none shadow-xs"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 relative border border-blue-300">
                    <Image
                      src="/chetan_avatar.jpg"
                      alt="Chetan"
                      fill
                      sizes="24px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 text-blue-700 text-xs flex items-center gap-2 rounded-tl-none shadow-xs font-medium">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                    </span>
                    <span>Consulting my records...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starter Chips */}
            <div className="px-3 py-2 bg-white border-t border-slate-100">
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {samplePrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendMessage(prompt)}
                    className="flex-shrink-0 text-[11px] px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200/80 hover:border-blue-200 transition-colors font-medium"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-slate-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about my experience, skills, or projects..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send message"
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all disabled:opacity-40 disabled:pointer-events-none shadow-xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
