import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolioData";

// System prompt grounding the assistant strictly to Chetan Singh's CV
const SYSTEM_PROMPT = `You are "Chetan (AI)", the official AI persona and digital twin representing Chetan Singh on his personal portfolio website.

Your personality:
- Professional, articulate, warm, and authentic.
- Speak directly in the first person representing Chetan ("In my role at Quess Corp, I lead...", "My technical toolkit focuses on...").
- Keep answers concise, clear, and direct.

CRITICAL GROUNDING RULES:
1. ONLY answer questions using the verified facts provided below from Chetan Singh's CV.
2. DO NOT invent facts, companies, dates, degrees, projects, or metrics.
3. If a visitor asks about something NOT in the CV data (e.g. personal relationships, unrelated companies, skills not mentioned, political opinions, or speculations), politely state that you only know what is in Chetan's verified professional profile and offer to connect them directly with Chetan via his email (shekhawatcs9636@gmail.com) or phone (+91 9079265198).
4. If asked how to contact Chetan, provide his email, phone number, and location (Jaipur, Rajasthan).

VERIFIED FACTS FROM CHETAN SINGH'S CV:
Name: ${portfolioData.personal.name}
Role: ${portfolioData.personal.role}
Current Organization: Quess Corp (Aug 2024 – Present)
Location: ${portfolioData.personal.location}
Phone: ${portfolioData.personal.phone}
Email: ${portfolioData.personal.email}
Date of Birth: ${portfolioData.personal.dob}
Summary: ${portfolioData.personal.summary}
Years of Experience: ${portfolioData.personal.yearsOfExperience}
Efficiency Metric: Reduced manual reporting effort by ~40% using AI tools.

Core Competencies:
${portfolioData.competencies.map((c) => `- ${c}`).join("\n")}

Professional Experience:
${portfolioData.experience
  .map(
    (exp) => `
* ${exp.role} at ${exp.company} (${exp.location}) [${exp.period}]
${exp.highlights.map((h) => `  - ${h}`).join("\n")}`
  )
  .join("\n")}

Education:
${portfolioData.education
  .map(
    (edu) => `- ${edu.degree} from ${edu.institution}, ${edu.location} (${edu.statusOrYear})`
  )
  .join("\n")}

Key Achievements & Value Delivered:
${portfolioData.achievements.map((a) => `- ${a}`).join("\n")}

Featured Projects / Systems:
${portfolioData.projects
  .map(
    (p) =>
      `- ${p.title} (${p.category} @ ${p.organization}): ${p.description} Impact: ${p.impact} [Tags: ${p.tags.join(", ")}]`
  )
  .join("\n")}
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid message payload" },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const apiKey = process.env.GEMINI_API_KEY;

    // If GEMINI_API_KEY is available in the environment, call Google Gemini API
    if (apiKey) {
      try {
        // Format history for Gemini
        const contents = [
          {
            role: "user",
            parts: [{ text: SYSTEM_PROMPT + "\n\nPlease introduce yourself briefly to the visitor." }],
          },
          {
            role: "model",
            parts: [{ text: "Hello! I am Chetan's AI persona. How can I assist you with my background, operations experience, and technical skills?" }],
          },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
        ];

        // Call Gemini 2.0 Flash or 1.5 Flash
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents,
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 600,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const replyText =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "I'm here to help! Could you please ask that again?";
          return NextResponse.json({ reply: replyText });
        } else {
          console.warn("Gemini API returned error status:", response.status);
          // Fall through to smart grounded fallback
        }
      } catch (geminiError) {
        console.error("Gemini API call failed:", geminiError);
        // Fall through to smart grounded fallback
      }
    }

    // Smart Local Grounded Fallback (ensures zero downtime if GEMINI_API_KEY is not yet configured)
    const lower = lastUserMessage.toLowerCase();
    let reply = "";

    // Specific topic matching
    if (
      lower.includes("quess") ||
      lower.includes("current role") ||
      lower.includes("team leader") ||
      lower.includes("40%") ||
      lower.includes("manual report")
    ) {
      reply =
        "In my current role at Quess Corp in Jaipur (Aug 2024 – Present), I lead end-to-end MIS operations as Team Leader. My day-to-day includes preparing Agent Voice/Non-Voice Productivity Reports, Client Attrition Reports, and Retention & Influencing Reports with visual dashboards. By integrating AI tools (ChatGPT, Copilot, Claude, Gemini) into my daily MIS workflow, I reduced our manual reporting effort by ~40%!";
    } else if (
      lower.includes("appsheet") ||
      lower.includes("cloud app") ||
      lower.includes("no-code") ||
      lower.includes("medicure")
    ) {
      reply =
        "I have engineered 3+ production Google AppSheet applications across Medicure Pharma and Quess Corp. I built these systems to automate field data collection, conduct live validation checks, and sync directly with cloud Google Sheets, replacing error-prone manual paper-based logs.";
    } else if (
      lower.includes("fms") ||
      lower.includes("flowchart") ||
      lower.includes("poddar") ||
      lower.includes("e-commerce")
    ) {
      reply =
        "At Poddar Footwear Pvt. Ltd., I conceptualized and implemented a comprehensive Flowchart Management System (FMS). It standardized and documented over 10 core operational and logistics processes while giving management live tracking dashboards for revenue and customer retention.";
    } else if (
      lower.includes("power bi") ||
      lower.includes("powerbi")
    ) {
      reply =
        "My core visual dashboarding and BI toolkit focuses on Google Data Studio (Looker Studio), Advanced Excel interactive dashboards, and custom web dashboards (HTML/CSS/JS/Python). I do not currently list Power BI as one of my primary capabilities.";
    } else if (
      lower.includes("looker") ||
      lower.includes("data studio") ||
      lower.includes("dashboard") ||
      lower.includes("visualization")
    ) {
      reply =
        "I build interactive, executive-ready visual dashboards using Google Data Studio (Looker Studio) and Advanced Excel, as well as custom browser dashboards using HTML5, CSS3, JavaScript, and Python scripts with AI-assisted coding in VS Code and Antigravity IDE.";
    } else if (
      lower.includes("skill") ||
      lower.includes("toolkit") ||
      lower.includes("stack") ||
      lower.includes("tech")
    ) {
      reply =
        "My core technical capabilities include: 1) Reporting & BI: Google Data Studio (Looker Studio), Excel Interactive Dashboards, KPI & Attrition tracking; 2) Spreadsheets & Automation: Advanced Excel, Macros & VBA, Google Sheets Cloud; 3) App/Web Dev: Google AppSheet (3+ apps), HTML5/CSS3, JavaScript, Python automation scripts; 4) AI Tools: ChatGPT, Copilot, Claude, Gemini; 5) Operations: MIS leadership, Voice/Non-Voice productivity analysis, and SLA governance.";
    } else if (
      lower.includes("cv") ||
      lower.includes("resume") ||
      lower.includes("download")
    ) {
      reply =
        "You can download my verified official CV directly as a PDF! Simply click the 'Download CV' button on the top navigation, in the Hero section, or in the Contact section. You can also download it directly at: /Chetan_Singh_CV.pdf.";
    } else if (
      lower.includes("education") ||
      lower.includes("degree") ||
      lower.includes("college") ||
      lower.includes("b.com") ||
      lower.includes("school")
    ) {
      reply =
        "I am currently pursuing my Bachelor of Commerce (B.Com) from Rajasthan University in Jaipur. Prior to that, I completed my Senior Secondary education in Science – Mathematics with 70% from MIPS, Jaipur in 2016.";
    } else if (
      lower.includes("linkedin")
    ) {
      reply =
        `You can connect with me directly on LinkedIn at: ${portfolioData.personal.linkedin}. I look forward to networking!`;
    } else if (
      lower.includes("contact") ||
      lower.includes("email") ||
      lower.includes("phone") ||
      lower.includes("hire") ||
      lower.includes("reach") ||
      lower.includes("call")
    ) {
      reply =
        `You can reach me directly in Jaipur, Rajasthan:\n• LinkedIn: ${portfolioData.personal.linkedin}\n• Email: ${portfolioData.personal.email}\n• Phone: ${portfolioData.personal.phone}\n• WhatsApp: https://wa.me/919079265198\nYou can also send a direct message using the contact form right on this page!`;
    } else if (
      lower.includes("experience") ||
      lower.includes("background") ||
      lower.includes("career") ||
      lower.includes("history")
    ) {
      reply =
        "I have 5+ years of progressive MIS Operations experience across 4 companies: 1) Quess Corp (Team Leader – MIS Operations, Aug 2024–Present); 2) Medicure Pharma (MIS Executive & Analyst, Apr 2023–Jul 2024); 3) Poddar Footwear (MIS & E-Commerce Analyst, Mar 2022–Apr 2023); and 4) Bansal Elastomers (Back Office Specialist, May 2020–Jan 2022).";
    } else if (
      lower.includes("hello") ||
      lower.includes("hi") ||
      lower.includes("hey") ||
      lower.includes("who are you") ||
      lower.includes("chetan")
    ) {
      reply =
        "Hi! I'm Chetan. Welcome to my portfolio! You're chatting with my AI digital persona, grounded strictly in my verified career and CV. What would you like to know about my work at Quess Corp, my AppSheet applications, my technical toolkit, or getting in touch?";
    } else {
      reply =
        "I don't have that specific detail in my verified CV records, as this AI persona is strictly grounded in my professional experience, skills, and projects. Would you like to ask about my current leadership role at Quess Corp, my AppSheet automation apps, or my direct contact details?";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat endpoint error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
