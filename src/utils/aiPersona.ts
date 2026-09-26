import { portfolioData } from "@/data/portfolioData";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function generatePersonaResponse(userQuery: string): string {
  const lower = userQuery.toLowerCase().trim();

  // 1. Quess Corp & Current Leadership Role
  if (
    lower.includes("quess") ||
    lower.includes("current role") ||
    lower.includes("team leader") ||
    lower.includes("leader") ||
    lower.includes("40%") ||
    lower.includes("manual report")
  ) {
    return "In my current role as Team Leader – MIS Operations at Quess Corp (Aug 2024 – Present), I lead end-to-end MIS workflows. My team prepares Agent Voice/Non-Voice Productivity Reports, Client Attrition Reports, and Retention & Influencing Reports with visual dashboards. By integrating modern AI tools (ChatGPT, Copilot, Claude, Gemini), I reduced our manual reporting turnaround effort by ~40%!";
  }

  // 2. Google AppSheet Apps
  if (
    lower.includes("appsheet") ||
    lower.includes("cloud app") ||
    lower.includes("no-code") ||
    lower.includes("mobile app")
  ) {
    return "I have engineered 3+ production Google AppSheet applications across Medicure Pharma and Quess Corp. I built these systems to automate field data collection, conduct live validation checks, and sync directly with cloud Google Sheets, replacing error-prone manual paper-based logs.";
  }

  // 3. FMS & Poddar Footwear
  if (
    lower.includes("fms") ||
    lower.includes("flowchart") ||
    lower.includes("poddar") ||
    lower.includes("e-commerce")
  ) {
    return "At Poddar Footwear Pvt. Ltd., I conceptualized and implemented a comprehensive Flowchart Management System (FMS). It standardized and documented over 10 core operational and logistics processes while giving management live tracking dashboards for revenue and customer retention.";
  }

  // 4. Power BI inquiry
  if (lower.includes("power bi") || lower.includes("powerbi")) {
    return "My core visual dashboarding and BI toolkit focuses on Google Data Studio (Looker Studio), Advanced Excel interactive dashboards, and custom web dashboards (HTML/CSS/JS/Python). I do not currently list Power BI as one of my primary capabilities.";
  }

  // 5. Looker Studio / Dashboards / BI
  if (
    lower.includes("looker") ||
    lower.includes("data studio") ||
    lower.includes("dashboard") ||
    lower.includes("visualization") ||
    lower.includes("bi")
  ) {
    return "I build interactive, executive-ready visual dashboards using Google Data Studio (Looker Studio) and Advanced Excel, as well as custom browser dashboards using HTML5, CSS3, JavaScript, and Python scripts with AI-assisted coding in VS Code and Antigravity IDE.";
  }

  // 6. Skills & Technical Stack
  if (
    lower.includes("skill") ||
    lower.includes("toolkit") ||
    lower.includes("stack") ||
    lower.includes("tech") ||
    lower.includes("excel") ||
    lower.includes("python")
  ) {
    return "My core technical capabilities include:\n1) Reporting & BI: Google Data Studio (Looker Studio), Excel Interactive Dashboards, KPI & Attrition tracking;\n2) Spreadsheets & Automation: Advanced Excel, Macros & VBA, Google Sheets Cloud;\n3) App/Web Dev: Google AppSheet (3+ apps), HTML5/CSS3, JavaScript, Python automation scripts;\n4) AI Tools: ChatGPT, Copilot, Claude, Gemini;\n5) Operations: MIS leadership, Voice/Non-Voice productivity analysis, and SLA governance.";
  }

  // 7. CV / Resume Download
  if (
    lower.includes("cv") ||
    lower.includes("resume") ||
    lower.includes("download")
  ) {
    const basePath = process.env.NODE_ENV === "production" ? "/Chetan-Singh" : "";
    return `You can download my verified official CV directly as a PDF! Simply click the 'Download CV' button on the top navigation bar, in the Hero section, or in the Contact section. You can also download it directly at: ${basePath}/Chetan_Singh_CV.pdf.`;
  }

  // 8. Education & Degrees
  if (
    lower.includes("education") ||
    lower.includes("degree") ||
    lower.includes("college") ||
    lower.includes("b.com") ||
    lower.includes("school") ||
    lower.includes("mips")
  ) {
    return "I am currently pursuing my Bachelor of Commerce (B.Com) from Rajasthan University in Jaipur. Prior to that, I completed my Senior Secondary education in Science – Mathematics with 70% from MIPS, Jaipur in 2016.";
  }

  // 9. LinkedIn
  if (lower.includes("linkedin")) {
    return `You can connect with me directly on LinkedIn at: ${portfolioData.personal.linkedin}. I look forward to networking!`;
  }

  // 10. Contact / Email / Phone
  if (
    lower.includes("contact") ||
    lower.includes("email") ||
    lower.includes("phone") ||
    lower.includes("hire") ||
    lower.includes("reach") ||
    lower.includes("call") ||
    lower.includes("whatsapp")
  ) {
    return `You can reach me directly in Jaipur, Rajasthan:\n• LinkedIn: ${portfolioData.personal.linkedin}\n• Email: ${portfolioData.personal.email}\n• Phone: ${portfolioData.personal.phone}\n• WhatsApp: https://wa.me/919079265198\nYou can also send a direct message using the contact form right on this page!`;
  }

  // 11. Career History / Experience
  if (
    lower.includes("experience") ||
    lower.includes("background") ||
    lower.includes("career") ||
    lower.includes("history") ||
    lower.includes("companies")
  ) {
    return "I have 5+ years of progressive MIS Operations experience across 4 companies:\n1) Quess Corp (Team Leader – MIS Operations, Aug 2024–Present)\n2) Medicure Pharma (MIS Executive & Analyst, Apr 2023–Jul 2024)\n3) Poddar Footwear (MIS & E-Commerce Analyst, Mar 2022–Apr 2023)\n4) Bansal Elastomers (Back Office Specialist, May 2020–Jan 2022).";
  }

  // 12. Greetings
  if (
    lower.includes("hello") ||
    lower.includes("hi") ||
    lower.includes("hey") ||
    lower.includes("who are you") ||
    lower.includes("chetan")
  ) {
    return "Hi! I'm Chetan. Welcome to my portfolio! You're chatting with my AI digital persona, grounded strictly in my verified career and CV. What would you like to know about my work at Quess Corp, my AppSheet applications, my technical toolkit, or getting in touch?";
  }

  // Fallback
  return "I'm Chetan's AI digital persona, grounded strictly in his verified career, skills, and projects from his CV. Feel free to ask about my MIS operations experience at Quess Corp, my 3+ Google AppSheet apps, my Looker Studio dashboards, or how to get in touch!";
}
